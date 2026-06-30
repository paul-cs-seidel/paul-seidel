/*
 * glitch-title — MSDF-WebGL-Glitch für die Contact-Überschrift.
 *
 * 1:1-Port des Footer-Titels (`de`) aus sanchezrebuild/Portfolio auf OGL:
 * Mesh (Ai+Sh) rendert den MSDF-Text, ein Post-Pass (Mh) legt den flüssigen
 * tan()-Melt drüber. Zwei GSAP-Timelines steuern alles:
 *   animctr  — Reveal (uTime-Puls + uStart), beim Seitenwechsel einmal gespielt.
 *   animmouse — Hover-Melt (uMouseT + uMouse), von der VERTIKALEN Cursor-
 *               Position (norm = y/höhe, gelerpt nach `end`) gescrubbt.
 *
 * Vertrag: mount(container, options) → { reveal, relayout, destroy }.
 * Antrieb: OGL + GSAP. Shader/Werte: ./glitch-title.config.js.
 */
import gsap from 'gsap';
import { Renderer, Camera, Transform, Program, Mesh, Geometry, Texture, Text, Post } from 'ogl';

import {
  GLITCH_TITLE_SELECTORS,
  GLITCH_TITLE_CLASSES,
  GLITCH_TITLE_ASSETS,
  DEFAULT_GLITCH_TITLE_OPTIONS,
  TEXT_VERTEX,
  TEXT_FRAGMENT,
  GLITCH_FRAGMENT,
} from './glitch-title.config.js';

const clamp = (v, min, max) => Math.max(min, Math.min(v, max));
const lerp = (from, to, ease) => from * (1 - ease) + to * ease;

// Font (JSON + Atlas) projektweit nur einmal laden.
let fontPromise = null;
function loadFont() {
  if (!fontPromise) {
    fontPromise = Promise.all([
      fetch(GLITCH_TITLE_ASSETS.json).then((r) => {
        if (!r.ok) throw new Error(`MSDF JSON ${r.status}`);
        return r.json();
      }),
      loadImage(GLITCH_TITLE_ASSETS.png),
    ]).then(([font, image]) => ({ font, image }));
  }
  return fontPromise;
}
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function prefersReducedMotion(win) {
  return win.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
}

export function mount(container, options = {}) {
  if (!container) return { reveal() {}, relayout() {}, destroy() {} };

  const cfg = {
    ...DEFAULT_GLITCH_TITLE_OPTIONS,
    ...options,
    padding: { ...DEFAULT_GLITCH_TITLE_OPTIONS.padding, ...(options.padding || {}) },
  };

  const host = container.querySelector(GLITCH_TITLE_SELECTORS.host);
  const doc = container.ownerDocument;
  const win = doc.defaultView ?? globalThis;
  if (!host || prefersReducedMotion(win)) return { reveal() {}, relayout() {}, destroy() {} };

  const stage = host.parentElement; // .page-shell__intro
  const controller = new AbortController();
  const { signal } = controller;

  // ── State ──────────────────────────────────────────────────────────────────
  let renderer = null;
  let gl = null;
  let camera = null;
  let scene = null;
  let mesh = null;
  let texture = null;
  let post = null;
  let assets = null;
  let resizeObserver = null;
  let mutationObserver = null;
  let animctr = null;
  let animmouse = null;
  let tickerAdded = false;
  let initStarted = false;
  let destroyed = false;
  let lastText = '';

  // Hover-Tracking (vertikal), wie im Original `de`.
  let norm = 0;
  let end = 0;
  let lerpF = 0.6;

  // Mesh-Uniforms (Sh) + Post-Uniforms (Mh) — exakt wie im Footer-Setup.
  const meshU = {
    uTime: { value: 0 },
    uColor: { value: cfg.color },
    tMap: { value: null },
  };
  const postU = {
    uTime: { value: 0 },
    uStart: { value: 0 },
    uMouseT: { value: 0 },
    uMouse: { value: 0 },
    uOut: { value: 1 },
  };

  // ── Geometrie aus aktuellem H1-Text bauen ───────────────────────────────────
  function buildText() {
    lastText = (host.textContent || '').trim();
    if (mesh) {
      mesh.setParent(null);
      mesh.geometry.remove();
      mesh = null;
    }
    const fontSizePx = parseFloat(win.getComputedStyle(host).fontSize) || 48;
    const text = new Text({
      font: assets.font,
      text: lastText || ' ',
      align: 'center',
      size: fontSizePx * cfg.sizeScale,
      letterSpacing: cfg.letterSpacing,
      lineHeight: 1,
    });
    const geometry = new Geometry(gl, {
      position: { size: 3, data: text.buffers.position },
      uv: { size: 2, data: text.buffers.uv },
      id: { size: 1, data: text.buffers.id },
      index: { data: text.buffers.index },
    });
    const program = new Program(gl, {
      vertex: TEXT_VERTEX,
      fragment: TEXT_FRAGMENT,
      uniforms: meshU,
      transparent: true,
      cullFace: null,
      depthWrite: false,
    });
    mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);
    mesh.textWidth = text.width;
    mesh.textHeight = text.height;
    mesh.fontSizePx = fontSizePx;
    fit();
  }

  // Abstand DOM-Textoberkante (H1-Box-Oberkante) → Baseline, in px.
  let measureCtx = null;
  function measureDomBaseline(fs) {
    const cs = win.getComputedStyle(host);
    const lhRaw = parseFloat(cs.lineHeight);
    const lineHeight = Number.isFinite(lhRaw) ? lhRaw : fs * 1.2;
    measureCtx ||= doc.createElement('canvas').getContext('2d');
    measureCtx.font = `${cs.fontWeight} ${fs}px ${cs.fontFamily}`;
    const m = measureCtx.measureText('Hxg');
    const ascent = m.fontBoundingBoxAscent || fs * 0.8;
    const descent = m.fontBoundingBoxDescent || fs * 0.2;
    return (lineHeight - (ascent + descent)) / 2 + ascent;
  }

  // ── Canvas auf den Textblock legen + einpassen (ortho, 1:1 px) ──────────────
  function fit() {
    if (!renderer || !mesh) return;
    const hostRect = host.getBoundingClientRect();
    const stageRect = stage.getBoundingClientRect();
    const fs = mesh.fontSizePx;
    const fsScaled = fs * cfg.sizeScale; // Polster/Lift skalieren mit der Textgröße
    const padX = cfg.padding.x * fsScaled;
    const padTop = cfg.padding.top * fsScaled;
    const padBottom = cfg.padding.bottom * fsScaled;

    // Größe steckt schon im Text (size = fs*sizeScale), kein Mesh-Scale.
    mesh.scale.set(1, 1, 1);
    const size = fsScaled;
    const textW = mesh.textWidth;
    const textH = mesh.textHeight;

    const cw = Math.max(1, Math.round(textW + 2 * padX));
    const ch = Math.max(1, Math.round(textH + padTop + padBottom));
    const dpr = Math.min(win.devicePixelRatio || 1, cfg.dprMax);
    renderer.dpr = dpr;
    renderer.setSize(cw, ch);
    post.resize();

    camera.left = -cw / 2;
    camera.right = cw / 2;
    camera.top = ch / 2;
    camera.bottom = -ch / 2;
    camera.orthographic();

    // Textblock mit `padTop` unter der Canvas-Oberkante.
    mesh.position.x = 0; // align:center → horizontal zentriert
    mesh.baseY = ch / 2 - padTop - 0.085 * size;
    mesh.position.y = mesh.baseY;

    // Vertikal an der BASELINE ausrichten, damit Effekt und Platzhalter exakt
    // gleich liegen. MSDF-Baseline = padTop + size (aus den Font-Metriken, da
    // common.base die Skalierung bestimmt). DOM-Baseline per measureText.
    const centerX = hostRect.left - stageRect.left + hostRect.width / 2;
    const hostTopRel = hostRect.top - stageRect.top;
    const msdfBaselineFromTop = padTop + size;
    const domBaselineFromTop = measureDomBaseline(fs);
    const canvas = gl.canvas;
    canvas.style.width = `${cw}px`;
    canvas.style.height = `${ch}px`;
    canvas.style.left = `${Math.round(centerX - cw / 1.992)}px`;
    canvas.style.top = `${Math.round(
      hostTopRel + domBaselineFromTop - msdfBaselineFromTop + cfg.offsetY,
    )}px`;

    render();
  }

  function render() {
    if (post && scene && camera) post.render({ scene, camera });
  }

  // ── Render-Loop: Hover gelerpt scrubben, jeden Frame rendern (wie `de`) ──────
  function tick() {
    end = lerp(end, norm, lerpF);
    if (animmouse) animmouse.progress(clamp(end, 0, 1));
    render();
  }
  function startTicker() {
    if (tickerAdded) return;
    tickerAdded = true;
    gsap.ticker.add(tick);
  }

  // ── GSAP-Timelines (exakt aus `de`) ─────────────────────────────────────────
  function buildTimelines() {
    // Reveal-Melt (wie am Anfang): uTime-Puls + uStart-Settle.
    animctr = gsap
      .timeline({ paused: true })
      .fromTo(
        postU.uTime,
        { value: 0 },
        { value: 2, duration: 0.3, immediateRender: false, ease: 'power2.inOut' },
        0,
      )
      .fromTo(
        postU.uTime,
        { value: 2 },
        { value: 0, duration: 0.3, immediateRender: false, ease: 'power2.inOut' },
        0.7,
      )
      .fromTo(
        postU.uStart,
        { value: 0.39 },
        { value: 0.8, duration: 1, immediateRender: false, ease: 'power2.inOut' },
        0,
      );

    // Hover-Melt, von der Cursor-Y gescrubbt.
    animmouse = gsap
      .timeline({ paused: true })
      .fromTo(
        postU.uMouseT,
        { value: 0.2 },
        { value: 2, duration: 0.3, immediateRender: false, ease: 'power2.inOut' },
        0.1,
      )
      .fromTo(
        postU.uMouseT,
        { value: 2 },
        { value: 0, duration: 0.3, immediateRender: false, ease: 'power2.inOut' },
        0.7,
      )
      .fromTo(
        postU.uMouse,
        { value: 0.39 },
        { value: 0.8, duration: 0.9, immediateRender: false, ease: 'none' },
        0.1,
      );
    animmouse.progress(0);
  }

  // ── Pointer (vertikal), wie inFn/mvFn/lvFn im Original. Listener an der H1
  //    (Canvas ist pointer-events:none → blockiert die Links nicht); norm wird
  //    aber über die Canvas-Box berechnet, damit der Melt unter dem Cursor sitzt.
  function bindPointer() {
    const yNorm = (event) => {
      const rect = gl.canvas.getBoundingClientRect();
      const y = event.clientY ?? rect.top + rect.height / 2;
      return clamp((y - rect.top) / Math.max(rect.height, 1), 0, 1);
    };
    host.addEventListener('pointerenter', () => (lerpF = cfg.enterLerp), { signal });
    host.addEventListener('pointermove', (e) => (norm = yNorm(e)), { signal });
    host.addEventListener(
      'pointerleave',
      (e) => {
        lerpF = cfg.leaveLerp;
        norm = yNorm(e);
      },
      { signal },
    );
  }

  // ── Sprachwechsel: H1-Text geändert → Geometrie neu ─────────────────────────
  function bindLanguage() {
    let raf = 0;
    mutationObserver = new win.MutationObserver(() => {
      if (destroyed) return;
      const next = (host.textContent || '').trim();
      if (next === lastText) return; // eigene/irrelevante DOM-Änderung
      win.cancelAnimationFrame(raf);
      raf = win.requestAnimationFrame(() => buildText());
    });
    mutationObserver.observe(host, { childList: true, characterData: true, subtree: true });
  }

  // ── WebGL einrichten (lazy beim ersten reveal) ──────────────────────────────
  async function init() {
    if (initStarted) return Boolean(renderer);
    initStarted = true;
    try {
      assets = await loadFont();
      if (destroyed) return false;

      renderer = new Renderer({
        alpha: true,
        premultipliedAlpha: false,
        dpr: Math.min(win.devicePixelRatio || 1, cfg.dprMax),
        width: 1,
        height: 1,
      });
      gl = renderer.gl;
      if (!renderer.isWebgl2) throw new Error('WebGL2 not available');
      gl.clearColor(0, 0, 0, 0);

      const canvas = gl.canvas;
      canvas.className = GLITCH_TITLE_CLASSES.canvas;
      canvas.setAttribute('aria-hidden', 'true');

      camera = new Camera(gl, { near: 0.1, far: 100 });
      camera.position.z = 5;
      scene = new Transform();

      texture = new Texture(gl, {
        image: assets.image,
        generateMipmaps: false,
        minFilter: gl.LINEAR,
        magFilter: gl.LINEAR,
      });
      meshU.tMap.value = texture;

      post = new Post(gl);
      post.addPass({ fragment: GLITCH_FRAGMENT, uniforms: postU });

      buildTimelines();
      stage.classList.add(GLITCH_TITLE_CLASSES.stage);
      stage.append(canvas);
      buildText();
      host.classList.add(GLITCH_TITLE_CLASSES.ready);

      resizeObserver = new win.ResizeObserver(() => fit());
      resizeObserver.observe(stage);
      win.addEventListener('resize', fit, { signal });
      bindPointer();
      bindLanguage();
      startTicker();
      return true;
    } catch (error) {
      host.classList.add(GLITCH_TITLE_CLASSES.failed);
      console.warn('[glitchTitle] WebGL setup failed', error);
      cleanupGl();
      return false;
    }
  }

  function cleanupGl() {
    if (resizeObserver) resizeObserver.disconnect();
    if (mutationObserver) mutationObserver.disconnect();
    if (tickerAdded) gsap.ticker.remove(tick);
    tickerAdded = false;
    if (gl) {
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      gl.canvas?.remove();
    }
    renderer = null;
    gl = null;
  }

  // ── Öffentliche API ─────────────────────────────────────────────────────────
  async function reveal() {
    const ok = await init();
    if (!ok || destroyed || !animctr) return;
    // Reveal wie am Anfang: den Original-Melt (animctr) einmal abspielen.
    animctr.timeScale(1 / cfg.revealDuration).play(0);
  }

  function relayout() {
    if (renderer && mesh) buildText();
  }

  function destroy() {
    destroyed = true;
    controller.abort();
    animctr?.kill();
    animmouse?.kill();
    cleanupGl();
    stage?.classList.remove(GLITCH_TITLE_CLASSES.stage);
    host.classList.remove(GLITCH_TITLE_CLASSES.ready, GLITCH_TITLE_CLASSES.failed);
  }

  return { reveal, relayout, destroy };
}
