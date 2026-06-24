/**
 * heroGlassEffect.js
 *
 * Übernimmt den originalen Fractal-Shader (fractalEffect.config.js) 1:1
 * und erweitert ihn um zwei Hero-spezifische Features:
 *
 *  1. Dead-Zone  — Mitte 50 % (|mouseX| < 0.25): kein Effekt.
 *                  Äußere 25 % (|mouseX| in [0.25..0.5]): Effekt blendet ein.
 *
 *  2. Glas-Krümmung — jeder Balken erhält eine Sinus-Kurve entlang Y,
 *                      als würde eine gewellte Glasplatte über dem Bild liegen.
 *                      Benachbarte Balken haben gegenläufige Phasen.
 */

import gsap from 'gsap';

const lerp  = (a, b, t) => a + (b - a) * t;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// ── Vertex-Shader – identisch mit dem Original ────────────────────────────────
const VERT = /* glsl */`
attribute vec2 uv;
attribute vec2 position;
uniform sampler2D tMap;
uniform vec2 uCover;
uniform vec2 uTextureSize;
uniform float uTime;
uniform vec2 uMouse;
varying vec2 vUv;
vec2 resizeUvCover(vec2 uvn, vec2 size, vec2 resolution) {
  vec2 ratio = vec2(
    min((resolution.x / resolution.y) / (size.x / size.y), 1.0),
    min((resolution.y / resolution.x) / (size.y / size.x), 1.0)
  );
  return vec2(
    uvn.x * ratio.x + (1.0 - ratio.x) * 0.5,
    uvn.y * ratio.y + (1.0 - ratio.y) * 0.5
  );
}
void main() {
  vUv = uv.xy;
  vUv = resizeUvCover(uv, uTextureSize, uCover);
  gl_Position = vec4(position, 0, 1);
}
`;

// ── Fragment-Shader – Fractal-Original + Dead-Zone + Glas-Krümmung ───────────
const FRAG = /* glsl */`
precision highp float;
uniform vec2  uCover;
uniform vec2  uTextureSize;
uniform sampler2D tMap;
uniform float uStart;
uniform float uStart1;
uniform float uTime;
uniform vec2  uMouse;    /* .x in [-0.5 .. 0.5] */
varying vec2 vUv;

/* ---- Cover-Resize (aus Original) ---------------------------------------- */
vec2 coverTexture(vec2 imgSize, vec2 ouv, vec2 mouse) {
  vec2 s = uCover;
  vec2 i = imgSize;
  ouv.x -= mouse.x * 1.0;
  float rs = s.x / s.y;
  float ri = i.x / i.y;
  vec2 resized = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
  vec2 offset  = (rs < ri
    ? vec2((resized.x - s.x) * 0.5, 0.0)
    : vec2(0.0, (resized.y - s.y) * 0.5)) / resized;
  return ouv * s / resized + offset;
}

void main() {

  /* ==== 1. Dead-Zone / Edge-Zone =========================================
     |mouse.x| < 0.25  → zone = 0  (kein Effekt)
     |mouse.x| ≥ 0.25  → zone 0→1 (smoothstep über 25 %)
  ======================================================================== */
  float mouseAbs = abs(uMouse.x);
  float raw  = clamp((mouseAbs - 0.25) / 0.25, 0.0, 1.0);
  float zone = raw * raw * (3.0 - 2.0 * raw);  /* smoothstep */

  /* Maus-Stärke nach zone skalieren – in der Totzone bleibt alles still */
  vec2  mouse = vec2(uMouse.x * zone, uMouse.y);

  /* ==== 2. Original Fractal-Logik ======================================== */
  vec2 tSize = uTextureSize;
  mouse.x += uStart * -0.8;
  tSize.x *= 1.0 + abs(mouse.x);

  vec2 cover = coverTexture(tSize, vUv, mouse);

  float cols  = 8.0;
  float alpha = 1.0;
  vec2  U = cover;
  vec2  P = vec2(cols, cols);

  float centpos = vUv.x + mouse.x;
  centpos += -0.5 + mouse.x * 2.4;
  centpos *= 2.0;
  centpos  = abs(centpos);

  float centSigned = ((1.0 - vUv.x) - 0.5 + mouse.x * 0.4) * 2.0;
  float colIndex   = floor(centSigned * P.x + 0.5);
  float otro       = abs(colIndex) / P.x;

  U.x -= otro;
  U.x += mouse.x * (otro * 0.2);
  U.x += centpos * 1.2 * (mouse.x * otro * 0.1);
  U.x += otro;

  float distor = 1.0 + 0.006 * abs(mouse.x);
  U.x += uMouse.x * zone * 0.2;   /* Original: uMouse.x * .2, jetzt zone-skaliert */

  /* ==== 3. Glas-Krümmung ================================================
     Jeder Balken erhält eine Sinus-Kurve entlang Y:
     – Amplitude wächst mit Balken-Abstand (otro) und Zonen-Stärke (zone)
     – Benachbarte Balken haben gegenläufige Phasen (alternating wave)
     – Zusätzlich leichter Y-Versatz für Tiefenwirkung
  ======================================================================== */
  float PI = 3.14159265;

  /* Jede Spalte bekommt ihre eigene Phase – benachbarte laufen gegenläufig */
  float phase = colIndex * PI * 0.65;

  /* X-Kurve: horizontale Auslenkung variiert sinusförmig entlang Y */
  float curveAmpX = otro * zone * 0.11;
  float waveX     = sin(vUv.y * PI + phase) * curveAmpX * sign(mouse.x);
  U.x += waveX;

  /* Y-Kurve: leichter vertikaler Versatz erzeugt Tiefenillusion */
  float curveAmpY = otro * zone * 0.028;
  float waveY     = sin(vUv.y * PI * 1.6 + phase * 0.8) * curveAmpY;
  U.y += waveY;

  /* ==== 4. Chromatische Aberration (Glas-Farbtrennung) =================== */
  float chroma = zone * 0.009 * sign(uMouse.x);

  vec2 end = U;
  float r = texture2D(tMap, vec2(end.x + chroma, end.y)).r;
  float g = texture2D(tMap, vec2(end.x,           end.y)).g;
  float b = texture2D(tMap, vec2(end.x - chroma,  end.y)).b;

  gl_FragColor = vec4(r, g, b, alpha);
}
`;

// ── WebGL-Helfer ───────────────────────────────────────────────────────────────
function compileShader(gl, type, src) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(s);
    gl.deleteShader(s);
    throw new Error(info);
  }
  return s;
}

function createProgram(gl) {
  const v = compileShader(gl, gl.VERTEX_SHADER,   VERT);
  const f = compileShader(gl, gl.FRAGMENT_SHADER, FRAG);
  const p = gl.createProgram();
  gl.attachShader(p, v);
  gl.attachShader(p, f);
  gl.linkProgram(p);
  gl.deleteShader(v);
  gl.deleteShader(f);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS))
    throw new Error(gl.getProgramInfoLog(p));
  return p;
}

// ── Mount ─────────────────────────────────────────────────────────────────────
export function mount(heroPanel) {
  if (!heroPanel) return { destroy() {} };
  const win = heroPanel.ownerDocument.defaultView ?? globalThis;

  // Kein Touch-only-Gerät
  if (!win.matchMedia?.('(pointer: fine)').matches) return { destroy() {} };

  // ── CSS ────────────────────────────────────────────────────────────────────
  const styleId = 'hero-glass-styles';
  if (!heroPanel.ownerDocument.getElementById(styleId)) {
    const style = heroPanel.ownerDocument.createElement('style');
    style.id = styleId;
    style.textContent = `
      .hero-glass-host {
        position: absolute;
        inset: 0;
        z-index: 0;
        overflow: hidden;
        pointer-events: none;
      }
      .hero-glass-host img {
        position: absolute;
        inset: 0;
        width: 100%; height: 100%;
        object-fit: cover;
        object-position: center;
        display: block;
      }
      .hero-glass-canvas {
        position: absolute;
        inset: 0;
        width: 100%; height: 100%;
        display: block;
      }
      .hero-section { position: relative; }
      .hero-section .home-profile,
      .hero-section .home-meta {
        position: relative;
        z-index: 1;
      }
    `;
    heroPanel.ownerDocument.head.append(style);
  }

  // ── DOM ────────────────────────────────────────────────────────────────────
  const host = heroPanel.ownerDocument.createElement('div');
  host.className = 'hero-glass-host';

  const img = new Image();
  img.src = '/assets/Hero.png';
  img.alt = '';
  img.setAttribute('aria-hidden', 'true');
  host.append(img);

  const canvas = heroPanel.ownerDocument.createElement('canvas');
  canvas.className = 'hero-glass-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  host.append(canvas);

  heroPanel.insertBefore(host, heroPanel.firstChild);

  // ── WebGL ──────────────────────────────────────────────────────────────────
  const gl = canvas.getContext('webgl', {
    alpha: false, antialias: false,
    premultipliedAlpha: false, preserveDrawingBuffer: false,
  });
  if (!gl) { host.remove(); return { destroy() {} }; }

  let program, texture;
  const uLoc = {};

  function initGl() {
    program = createProgram(gl);
    gl.useProgram(program);

    // Fullscreen-Quad: position (xy) + uv
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1, 0, 0,
      1, -1, 1, 0,
      -1,  1, 0, 1,
      1,  1, 1, 1,
    ]), gl.STATIC_DRAW);

    const stride = 4 * 4;
    const posLoc = gl.getAttribLocation(program, 'position');
    const uvLoc  = gl.getAttribLocation(program, 'uv');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(uvLoc);
    gl.vertexAttribPointer(uvLoc,  2, gl.FLOAT, false, stride, 8);

    texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);

    for (const n of ['tMap','uCover','uTextureSize','uMouse','uStart','uStart1','uTime'])
      uLoc[n] = gl.getUniformLocation(program, n);

    gl.uniform1i(uLoc.tMap,    0);
    gl.uniform1f(uLoc.uStart,  0);
    gl.uniform1f(uLoc.uStart1, 0.5);
    gl.uniform2f(uLoc.uMouse,  0, 0);
    gl.uniform2f(uLoc.uTextureSize, img.naturalWidth, img.naturalHeight);
  }

  const waitImg = img.complete && img.naturalWidth > 0
      ? Promise.resolve()
      : new Promise(res => img.addEventListener('load', res, { once: true }));

  let ready = false;
  waitImg.then(() => {
    try { initGl(); ready = true; resize(); }
    catch (e) { console.warn('[heroGlassEffect]', e); host.remove(); }
  });

  // ── Resize ─────────────────────────────────────────────────────────────────
  const dpr = clamp(win.devicePixelRatio || 1, 1, 2);

  function resize() {
    if (!ready) return;
    const w = Math.round(canvas.clientWidth  * dpr);
    const h = Math.round(canvas.clientHeight * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width  = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
      gl.uniform2f(uLoc.uCover, w, h);
    }
  }

  const ro = new win.ResizeObserver(resize);
  ro.observe(canvas);

  // ── Mouse ──────────────────────────────────────────────────────────────────
  // Werte identisch mit dem Original fractalEffect:
  const ENTER_EASE = 0.03;
  const LEAVE_EASE = 0.01;
  const SETTLE     = 0.0006;

  const mouse = { current: 0, target: 0, ease: LEAVE_EASE };
  let active = false;

  function onMove(e) {
    // Normiert [-0.5 .. 0.5] wie das Original
    mouse.target = clamp(e.clientX / win.innerWidth - 0.5, -0.5, 0.5);
    mouse.ease   = ENTER_EASE;
    active = true;
  }
  function onLeave() {
    mouse.target = 0;
    mouse.ease   = LEAVE_EASE;
    active = false;
  }

  win.addEventListener('mousemove', onMove);
  win.addEventListener('mouseleave', onLeave);

  // ── Render-Loop ────────────────────────────────────────────────────────────
  let dirty = true;

  function tick(time) {
    if (!ready) return;

    mouse.current = lerp(mouse.current, mouse.target, mouse.ease);
    const settled = Math.abs(mouse.current - mouse.target) <= SETTLE;
    if (settled) {
      mouse.current = mouse.target;
      if (!active && !dirty) return;
      dirty = !active;
    } else {
      dirty = false;
    }

    gl.useProgram(program);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.uniform2f(uLoc.uMouse, mouse.current, 0);
    gl.uniform1f(uLoc.uTime, time * 0.001);
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  gsap.ticker.add(tick);

  // ── Destroy ────────────────────────────────────────────────────────────────
  return {
    destroy() {
      gsap.ticker.remove(tick);
      ro.disconnect();
      win.removeEventListener('mousemove', onMove);
      win.removeEventListener('mouseleave', onLeave);
      if (gl) {
        gl.deleteTexture(texture);
        gl.deleteProgram(program);
        gl.getExtension('WEBGL_lose_context')?.loseContext();
      }
      host.remove();
    },
  };
}