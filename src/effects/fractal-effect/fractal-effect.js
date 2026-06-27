/*
 * fractalEffect — native WebGL-Port des vendor/split `Oi`-Bild-Hovers.
 *
 * Pro `.Oi`-Host wird ein Canvas ueber das vorhandene Bild gelegt. Der Shader
 * ist aus `webgl-oi.js` (`Xt`, Fragment `th`, Vertex `eh`) uebernommen; dieses
 * Modul kapselt nur die DOM-, Texture-, Resize- und Pointer-Ansteuerung passend
 * zum aktuellen paul-seidel Effekt-System.
 */
import gsap from 'gsap';

import {
  DEFAULT_FRACTAL_OPTIONS,
  FRACTAL_CLASSES,
  FRACTAL_EVENTS,
  FRAGMENT_SHADER,
  VERTEX_SHADER,
} from './fractal-effect.config.js';

const clamp = (value, min, max) => Math.max(min, Math.min(value, max));
const lerp = (from, to, ease) => from * (1 - ease) + to * ease;

function mergeOptions(options) {
  return {
    ...DEFAULT_FRACTAL_OPTIONS,
    ...options,
    dpr: { ...DEFAULT_FRACTAL_OPTIONS.dpr, ...(options.dpr || {}) },
    mouse: { ...DEFAULT_FRACTAL_OPTIONS.mouse, ...(options.mouse || {}) },
    reveal: { ...DEFAULT_FRACTAL_OPTIONS.reveal, ...(options.reveal || {}) },
    uniforms: { ...DEFAULT_FRACTAL_OPTIONS.uniforms, ...(options.uniforms || {}) },
  };
}

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(info || 'Unable to compile fractal shader');
  }
  return shader;
}

function createProgram(gl, vertexSource, fragmentSource) {
  const vertex = createShader(gl, gl.VERTEX_SHADER, vertexSource);
  const fragment = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
  const program = gl.createProgram();
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  gl.deleteShader(vertex);
  gl.deleteShader(fragment);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error(info || 'Unable to link fractal program');
  }
  return program;
}

function imageReady(image) {
  if (image.complete && image.naturalWidth > 0) return Promise.resolve(image);
  return new Promise((resolve, reject) => {
    image.addEventListener('load', () => resolve(image), { once: true });
    image.addEventListener('error', reject, { once: true });
  });
}

class FractalImage {
  constructor(host, cfg) {
    this.host = host;
    this.cfg = cfg;
    this.doc = host.ownerDocument;
    this.win = this.doc.defaultView ?? globalThis;
    this.image = host.querySelector(cfg.imageSelector);
    this.canvas = this.doc.createElement('canvas');
    this.gl = null;
    this.program = null;
    this.texture = null;
    this.buffer = null;
    this.resizeObserver = null;
    this.ready = false;
    this.failed = false;
    this.active = false;
    this.dirty = true;
    this.mouse = {
      current: cfg.uniforms.uMouse[0],
      target: cfg.uniforms.uMouse[0],
      ease: cfg.mouse.idleEase,
    };
    this.uniforms = new Map();
    this.bound = { left: 0, width: 1 };
  }

  async init(signal) {
    if (!this.image) return false;
    this.canvas.className = FRACTAL_CLASSES.canvas;
    this.canvas.setAttribute('aria-hidden', 'true');
    this.host.classList.add(FRACTAL_CLASSES.host);
    this.host.append(this.canvas);

    try {
      await imageReady(this.image);
      if (signal.aborted) return false;
      this.setupGl();
      this.bindEvents(signal);
      this.resize();
      this.render(0);
      this.host.classList.add(FRACTAL_CLASSES.ready);
      this.ready = true;
      return true;
    } catch (error) {
      this.failed = true;
      this.host.classList.add(FRACTAL_CLASSES.failed);
      this.canvas.remove();
      console.warn('[fractalEffect] WebGL setup failed', error);
      return false;
    }
  }

  setupGl() {
    const gl = this.canvas.getContext('webgl', {
      alpha: true,
      antialias: true,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
    });
    if (!gl) throw new Error('WebGL is not available');

    const program = createProgram(gl, VERTEX_SHADER, FRAGMENT_SHADER);
    const buffer = gl.createBuffer();
    const data = new Float32Array([
      -1, -1, 0, 0,
      1, -1, 1, 0,
      -1, 1, 0, 1,
      1, 1, 1, 1,
    ]);

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    gl.useProgram(program);

    const stride = 4 * Float32Array.BYTES_PER_ELEMENT;
    const position = gl.getAttribLocation(program, 'position');
    const uv = gl.getAttribLocation(program, 'uv');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(uv);
    gl.vertexAttribPointer(uv, 2, gl.FLOAT, false, stride, 2 * Float32Array.BYTES_PER_ELEMENT);

    this.texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.image);

    for (const name of ['uCover', 'uTextureSize', 'uStart', 'uStart1', 'uTime', 'uMouse', 'tMap']) {
      this.uniforms.set(name, gl.getUniformLocation(program, name));
    }
    gl.uniform1i(this.uniforms.get('tMap'), 0);
    gl.uniform1f(this.uniforms.get('uStart'), this.cfg.uniforms.uStart);
    gl.uniform1f(this.uniforms.get('uStart1'), this.cfg.uniforms.uStart1);
    gl.uniform2f(this.uniforms.get('uMouse'), this.mouse.current, this.cfg.uniforms.uMouse[1]);
    gl.uniform2f(this.uniforms.get('uTextureSize'), this.image.naturalWidth, this.image.naturalHeight);

    this.gl = gl;
    this.program = program;
    this.buffer = buffer;
  }

  bindEvents(signal) {
    const updateFromEvent = (event) => {
      const x = event.touches ? event.touches[0]?.clientX : event.clientX;
      if (x == null) return;
      this.mouse.target = clamp((x - this.bound.left) / this.bound.width - 0.5, -0.5, 0.5);
      this.mouse.ease = this.cfg.mouse.enterEase;
      this.dirty = true;
    };
    const enter = (event) => {
      this.active = true;
      this.host.classList.add(FRACTAL_CLASSES.active);
      updateFromEvent(event);
    };
    const leave = () => {
      this.active = false;
      this.mouse.target = 0;
      this.mouse.ease = this.cfg.mouse.leaveEase;
      this.host.classList.remove(FRACTAL_CLASSES.active);
      this.dirty = true;
    };
    const externalEnter = (event) => {
      if (event.detail?.target && !this.host.contains(event.detail.target)) return;
      this.active = true;
      this.host.classList.add(FRACTAL_CLASSES.active);
      this.dirty = true;
    };
    const externalLeave = (event) => {
      if (event.detail?.target && !this.host.contains(event.detail.target)) return;
      leave();
    };

    this.host.addEventListener('pointerenter', enter, { signal });
    this.host.addEventListener('pointermove', updateFromEvent, { signal });
    this.host.addEventListener('pointerleave', leave, { signal });
    this.host.addEventListener('touchstart', enter, { passive: true, signal });
    this.host.addEventListener('touchmove', updateFromEvent, { passive: true, signal });
    this.host.addEventListener('touchend', leave, { signal });
    this.win.addEventListener(FRACTAL_EVENTS.enter, externalEnter, { signal });
    this.win.addEventListener(FRACTAL_EVENTS.leave, externalLeave, { signal });

    this.resizeObserver = new this.win.ResizeObserver(() => this.resize());
    this.resizeObserver.observe(this.host);
  }

  resize() {
    if (!this.gl) return;
    const rect = this.host.getBoundingClientRect();
    this.bound = { left: rect.left, width: Math.max(rect.width, 1) };
    const dpr = clamp(this.win.devicePixelRatio || 1, this.cfg.dpr.min, this.cfg.dpr.max);
    const width = Math.max(1, Math.round(rect.width * dpr));
    const height = Math.max(1, Math.round(rect.height * dpr));
    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width;
      this.canvas.height = height;
      this.gl.viewport(0, 0, width, height);
      this.gl.uniform2f(this.uniforms.get('uCover'), width, height);
    }
    this.dirty = true;
  }

  shouldRender() {
    return this.ready && (this.dirty || this.active || Math.abs(this.mouse.current - this.mouse.target) > this.cfg.mouse.settle);
  }

  tick(time) {
    if (!this.shouldRender()) return;
    this.mouse.current = lerp(this.mouse.current, this.mouse.target, this.mouse.ease);
    if (Math.abs(this.mouse.current - this.mouse.target) <= this.cfg.mouse.settle) {
      this.mouse.current = this.mouse.target;
      if (!this.active) this.dirty = false;
    }
    this.render(time);
  }

  render(time) {
    const gl = this.gl;
    if (!gl || !this.program) return;
    gl.useProgram(this.program);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.uniform1f(this.uniforms.get('uTime'), time || 0);
    gl.uniform2f(this.uniforms.get('uMouse'), this.mouse.current, this.cfg.uniforms.uMouse[1]);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  destroy() {
    this.resizeObserver?.disconnect();
    if (this.gl) {
      this.gl.deleteTexture(this.texture);
      this.gl.deleteBuffer(this.buffer);
      this.gl.deleteProgram(this.program);
      this.gl.getExtension('WEBGL_lose_context')?.loseContext();
    }
    this.canvas.remove();
    this.host.classList.remove(FRACTAL_CLASSES.ready, FRACTAL_CLASSES.active);
  }
}

export function mount(root, options = {}) {
  if (!root) return { destroy() {}, refresh() {} };
  const cfg = mergeOptions(options);
  const doc = root.ownerDocument;
  const win = doc.defaultView ?? globalThis;
  const fine = win.matchMedia?.(cfg.pointerQuery).matches ?? true;
  if (!fine) return { destroy() {}, refresh() {} };

  const controller = new AbortController();
  const instances = new Map();
  let tickerActive = false;

  const tick = (time) => {
    for (const instance of instances.values()) instance.tick(time);
  };
  const startTicker = () => {
    if (tickerActive) return;
    tickerActive = true;
    gsap.ticker.add(tick);
  };

  const create = async (host) => {
    if (instances.has(host)) return;
    const instance = new FractalImage(host, cfg);
    instances.set(host, instance);
    const ready = await instance.init(controller.signal);
    if (!ready) instances.delete(host);
  };

  const refresh = () => {
    root.querySelectorAll(cfg.selector).forEach((host) => {
      create(host);
    });
    startTicker();
  };

  refresh();

  return {
    refresh,
    destroy() {
      controller.abort();
      gsap.ticker.remove(tick);
      for (const instance of instances.values()) instance.destroy();
      instances.clear();
    },
  };
}
