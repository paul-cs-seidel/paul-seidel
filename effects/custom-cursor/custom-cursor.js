/*
 * custom-cursor — Hirotos zweiteiliger Custom-Cursor, framework-frei nachgebaut.
 *
 *   1. mouse-stalker          — folgende Pille, die beim Hovern von
 *                               `[data-cursor-stalker-label]` zu einem Label mit
 *                               Pfeil aufklappt.
 *   2. sticker-cursor-preview — großes Vorschaubild, das per Event
 *                               (`signal-pole:sticker-preview-enter`) erscheint.
 *   3. mouse                  — Paul-Seidel `.mouse` SplitType-Stalker aus
 *                               der ZIP fuer `.MW[data-tt]` / Fractal-Hover.
 *
 * Original: React-Komponenten `wu` (Z59465) und `wh` (Z59666) im App-Bundle
 * _raw/vendor/050096.app-bundle.js. Antrieb dort wie hier: GSAP (npm `gsap`,
 * bereits Projekt-Abhängigkeit). Hier ohne React: die Elemente werden selbst
 * erzeugt; sämtliche Zahlen/Easings kommen aus ./custom-cursor.config.js.
 *
 * Vertrag: `mount(root?, options?)` → Controller `{ destroy() }`. Listener
 * laufen über einen AbortController, GSAP-Tweens werden beim Destroy gekillt.
 * A11y: nur `pointer: fine` (Touch bleibt unberührt), `pointer-events: none`
 * via CSS — der Cursor klaut keinen Fokus und blockiert keine Klicks.
 */
import gsap from 'gsap';
import SplitType from 'split-type';

import {
  CURSOR_CLASSES,
  CURSOR_EVENTS,
  CURSOR_SELECTORS,
  DEFAULT_CURSOR_OPTIONS,
} from './custom-cursor.config.js';

const SVG_NS = 'http://www.w3.org/2000/svg';
const clamp = (value, min, max) => Math.max(min, Math.min(value, max));

function mergeOptions(options) {
  return {
    ...DEFAULT_CURSOR_OPTIONS,
    ...options,
    stalker: { ...DEFAULT_CURSOR_OPTIONS.stalker, ...(options.stalker || {}) },
    splitMouse: { ...DEFAULT_CURSOR_OPTIONS.splitMouse, ...(options.splitMouse || {}) },
    sticker: { ...DEFAULT_CURSOR_OPTIONS.sticker, ...(options.sticker || {}) },
  };
}

/** Baut das mouse-stalker-Markup (div > svg > rect/text/path). */
function createStalker(doc) {
  const el = doc.createElement('div');
  el.className = CURSOR_CLASSES.stalker;
  el.setAttribute('aria-hidden', 'true');

  const svg = doc.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('class', CURSOR_CLASSES.stalkerSvg);
  svg.setAttribute('role', 'presentation');

  const shape = doc.createElementNS(SVG_NS, 'rect');
  shape.setAttribute('class', CURSOR_CLASSES.stalkerShape);

  const label = doc.createElementNS(SVG_NS, 'text');
  label.setAttribute('class', CURSOR_CLASSES.stalkerLabel);
  label.setAttribute('y', '50%');
  label.setAttribute('dominant-baseline', 'middle');

  const arrow = doc.createElementNS(SVG_NS, 'path');
  arrow.setAttribute('class', CURSOR_CLASSES.stalkerArrow);

  svg.append(shape, label, arrow);
  el.append(svg);
  return { el, shape, label, arrow };
}

/** Baut das sticker-cursor-preview-Markup (div, img wird bei Bedarf ergänzt). */
function createSticker(doc) {
  const el = doc.createElement('div');
  el.className = CURSOR_CLASSES.sticker;
  el.setAttribute('aria-hidden', 'true');
  return { el };
}

/** Baut den Paul-Seidel `.mouse`-Cursor-Root aus der ZIP. */
function createSplitMouse(doc) {
  const el = doc.createElement('div');
  el.className = CURSOR_CLASSES.splitMouse;
  el.setAttribute('aria-hidden', 'true');
  return { el };
}

/* ── mouse-stalker ────────────────────────────────────────────────────────── */
function setupStalker(nodes, cfg, signal, win) {
  const { el, shape, label, arrow } = nodes;
  const s = cfg.stalker;
  const size = { w: s.baseSize, h: s.baseSize }; // animierte Pillen-Maße (s/o im Original)
  let currentTarget = null;
  let forced = false; // Label per Event erzwungen?
  let positioned = false; // schon einmal exakt gesetzt?

  label.setAttribute('x', String(s.labelX));
  label.setAttribute('dy', s.labelDy);
  arrow.setAttribute('d', s.arrowPath);

  const quickX = gsap.quickTo(el, 'x', s.follow);
  const quickY = gsap.quickTo(el, 'y', s.follow);

  // Rechteck aus den aktuellen Maßen zeichnen (1 px Innenrand, runde Ecken).
  const drawShape = () => {
    const r = size.h / 2;
    shape.setAttribute('x', '1');
    shape.setAttribute('y', '1');
    shape.setAttribute('width', String(Math.max(0, size.w - 2)));
    shape.setAttribute('height', String(Math.max(0, size.h - 2)));
    shape.setAttribute('rx', String(Math.max(0, r - 1)));
    shape.setAttribute('ry', String(Math.max(0, r - 1)));
  };

  const resize = (w, h) => {
    gsap.to(size, { w, duration: s.resize.duration, ease: s.resize.ease, overwrite: 'auto', onUpdate: drawShape });
    gsap.to(size, { h, duration: s.resize.duration, ease: s.resize.ease, overwrite: 'auto', onUpdate: drawShape });
    gsap.to(el, { width: w, height: h, duration: s.resize.duration, ease: s.resize.ease, overwrite: 'auto' });
  };

  const showLabel = (text, showArrow) => {
    label.textContent = text;
    const width = clamp(Math.ceil(label.getComputedTextLength() + s.labelWidth.pad), s.labelWidth.min, s.labelWidth.max);
    resize(width, s.pillHeight);
    gsap.to(el, { autoAlpha: 1, duration: s.show.duration, ease: s.show.ease, overwrite: 'auto' });
    gsap.to(label, { autoAlpha: 1, duration: s.show.duration, ease: s.show.ease, overwrite: 'auto' });
    gsap.to(arrow, { autoAlpha: showArrow ? 1 : 0, duration: s.show.duration, ease: s.show.ease, overwrite: 'auto' });
    gsap.to(arrow, { x: width - s.arrowAnchor, duration: s.arrowSlide.duration, ease: s.arrowSlide.ease, overwrite: 'auto' });
    gsap.to(el, { rotate: 0, scale: 1, duration: s.rotateIn.duration, ease: s.rotateIn.ease, overwrite: 'auto' });
  };

  const reset = () => {
    currentTarget = null;
    forced = false;
    resize(s.baseSize, s.baseSize);
    gsap.to(el, { autoAlpha: 0, duration: s.hide.duration, ease: s.hide.ease, overwrite: 'auto' });
    gsap.to([label, arrow], { autoAlpha: 0, duration: s.hideParts.duration, ease: s.hideParts.ease, overwrite: 'auto' });
    gsap.to(arrow, { x: 0, duration: s.arrowReset.duration, ease: s.arrowReset.ease, overwrite: 'auto' });
    gsap.to(el, { rotate: s.restRotate, scale: 1, duration: s.rotateReset.duration, ease: s.rotateReset.ease, overwrite: 'auto' });
  };

  // Zeigerposition auf den Viewport begrenzen (Pille soll nicht hinausragen).
  const positionFor = (event) => ({
    x: clamp(event.clientX - size.w / 2 + s.posOffset.x, s.edgeMargin, win.innerWidth - size.w - s.edgeMargin),
    y: clamp(event.clientY - size.h + s.posOffset.y, s.edgeMargin, win.innerHeight - size.h - s.edgeMargin),
  });

  const labelFor = (target) =>
    target.dataset.cursorStalkerLabel?.trim() ||
    target.getAttribute('aria-label')?.trim() ||
    target.textContent?.replace(/\s+/g, ' ').trim() ||
    cfg.defaultLabel;

  const onPointerMove = (event) => {
    if (currentTarget && !currentTarget.isConnected) reset();
    const pos = positionFor(event);
    if (positioned) {
      quickX(pos.x);
      quickY(pos.y);
    } else {
      positioned = true;
      gsap.set(el, { x: pos.x, y: pos.y });
    }
  };

  const onPointerOver = (event) => {
    const target = event.target?.closest(CURSOR_SELECTORS.trigger);
    if (!target || target === currentTarget) return;
    if (!positioned) {
      positioned = true;
      gsap.set(el, positionFor(event));
    }
    forced = false;
    currentTarget = target;
    showLabel(labelFor(target), true);
  };

  const onPointerOut = (event) => {
    const target = currentTarget;
    if (!target) return;
    const related = event.relatedTarget;
    if (!(related && target.contains(related)) && target.contains(event.target)) reset();
  };

  const onCursorEnter = (event) => {
    const { label: text, showArrow = true } = event.detail ?? {};
    currentTarget = null;
    forced = true;
    showLabel(text?.trim() || cfg.defaultLabel, showArrow);
  };
  const onCursorLeave = () => {
    if (forced) reset();
  };
  const onWindowLeave = () => {
    gsap.to(el, { autoAlpha: 0, duration: s.leaveFade.duration, ease: s.leaveFade.ease, overwrite: 'auto' });
    reset();
  };

  drawShape();
  gsap.set(el, { autoAlpha: 0, force3D: true, rotate: s.restRotate, xPercent: 0, yPercent: 0 });
  gsap.set([label, arrow], { autoAlpha: 0 });

  win.addEventListener('pointermove', onPointerMove, { signal });
  win.document.addEventListener('pointerover', onPointerOver, { signal });
  win.document.addEventListener('pointerout', onPointerOut, { signal });
  win.addEventListener(CURSOR_EVENTS.enter, onCursorEnter, { signal });
  win.addEventListener(CURSOR_EVENTS.leave, onCursorLeave, { signal });
  win.addEventListener(CURSOR_EVENTS.reset, reset, { signal });
  win.document.documentElement.addEventListener('pointerleave', onWindowLeave, { signal });

  return () => {
    quickX.tween?.kill();
    quickY.tween?.kill();
    gsap.killTweensOf([el, label, arrow, size]);
  };
}

/* ── .mouse SplitType-Stalker (Paul-Seidel-Portfolio-main.zip) ───────────── */
function setupSplitMouse(nodes, cfg, signal, win) {
  const { el } = nodes;
  const s = cfg.splitMouse;
  let currentTarget = null;
  let child = null;
  let split = null;
  let showTl = null;
  let hideTween = null;
  let positioned = false;
  let token = 0;

  const quickX = gsap.quickTo(el, 'x', s.follow);
  const quickY = gsap.quickTo(el, 'y', s.follow);

  const labelFor = (target) =>
    target.dataset.cursorSplitLabel?.trim() ||
    target.dataset.tt?.trim() ||
    target.getAttribute('aria-label')?.trim() ||
    target.textContent?.replace(/\s+/g, ' ').trim() ||
    cfg.defaultLabel;

  const fractalTargetFor = (target) =>
    target.matches?.('.Oi') ? target : target.querySelector?.('.Oi') || target.closest?.('.Oi') || target;

  const dispatchFractal = (type, target) => {
    win.dispatchEvent(new CustomEvent(type, { detail: { target: fractalTargetFor(target) } }));
  };

  const position = (event) => {
    if (positioned) {
      quickX(event.clientX);
      quickY(event.clientY);
    } else {
      positioned = true;
      gsap.set(el, { x: event.clientX, y: event.clientY });
    }
  };

  const disposeChild = () => {
    showTl?.kill();
    hideTween?.kill();
    split?.revert?.();
    split = null;
    child?.remove();
    child = null;
  };

  const hide = () => {
    token += 1;
    currentTarget = null;
    showTl?.kill();
    if (!child) return;
    const width = child.getBoundingClientRect().width || child.scrollWidth;
    gsap.set(child, { width });
    hideTween = gsap.to(child, {
      ...s.hide,
      overwrite: true,
      onComplete: disposeChild,
    });
  };

  const prepareChars = (label) => {
    split = new SplitType(label, { types: 'chars,words' });
    const chars = [...label.querySelectorAll('.char')];
    for (const char of chars) {
      const value = char.textContent;
      char.textContent = '';
      for (let i = 0; i < s.write.fillers; i += 1) {
        const filler = win.document.createElement('span');
        filler.className = 'f';
        filler.setAttribute('aria-hidden', 'true');
        filler.textContent = s.write.fillerText;
        char.append(filler);
      }
      const normal = win.document.createElement('span');
      normal.className = 'n';
      normal.textContent = value;
      char.append(normal);
    }
    return chars;
  };

  const show = (target) => {
    const ownToken = ++token;
    const text = labelFor(target);
    const delay = child ? s.swapDelay : s.enterDelay;
    disposeChild();
    win.setTimeout(() => {
      if (signal.aborted || ownToken !== token || currentTarget !== target) return;

      child = win.document.createElement('div');
      child.className = CURSOR_CLASSES.splitMouseEl;
      const label = win.document.createElement('div');
      label.className = CURSOR_CLASSES.splitLabel;
      if (target.dataset.w != null) label.classList.add(CURSOR_CLASSES.splitWide);
      label.textContent = text;
      child.append(label);
      el.append(child);

      const chars = prepareChars(label);
      const width = Math.ceil(label.scrollWidth);
      gsap.set(child, { width: 0 });
      gsap.set(label, { opacity: 1 });
      gsap.set(chars, { opacity: 1 });
      gsap.set(label.querySelectorAll('.n'), { opacity: 0 });
      gsap.set(label.querySelectorAll('.f'), {
        display: 'block',
        opacity: 1,
        scaleX: 1,
        transformOrigin: 'left center',
      });

      showTl = gsap.timeline({
        onComplete: () => {
          if (child) gsap.set(child, { width: 'auto' });
        },
      });
      showTl.to(
        child,
        {
          width,
          duration: Math.max(s.write.opacityDuration, chars.length * s.write.charStagger + s.write.blockDuration),
          ease: s.write.ease,
        },
        0,
      );
      for (const [index, char] of chars.entries()) {
        const normal = char.querySelector('.n');
        showTl.to(
          normal,
          { opacity: 1, duration: s.write.opacityDuration, immediateRender: false, ease: s.write.ease },
          index * s.write.charStagger,
        );
        for (const [fillerIndex, filler] of [...char.querySelectorAll('.f')].entries()) {
          showTl.to(
            filler,
            {
              scaleX: 0,
              opacity: 0,
              immediateRender: false,
              duration: s.write.blockDuration,
              ease: s.write.ease,
            },
            index * s.write.blockStagger + (1 + fillerIndex) * s.write.blockInnerStagger,
          ).set(filler, { display: 'none' }, '>');
        }
      }
    }, delay);
  };

  const onPointerMove = (event) => {
    position(event);
  };
  const onPointerOver = (event) => {
    const target = event.target?.closest(CURSOR_SELECTORS.splitTrigger);
    if (!target || target === currentTarget) return;
    position(event);
    currentTarget = target;
    dispatchFractal(CURSOR_EVENTS.fractalEnter, target);
    show(target);
  };
  const onPointerOut = (event) => {
    const target = currentTarget;
    if (!target) return;
    const related = event.relatedTarget;
    if (related && target.contains(related)) return;
    if (!target.contains(event.target)) return;
    dispatchFractal(CURSOR_EVENTS.fractalLeave, target);
    hide();
  };
  const onWindowLeave = () => {
    if (currentTarget) dispatchFractal(CURSOR_EVENTS.fractalLeave, currentTarget);
    hide();
  };

  gsap.set(el, { autoAlpha: 1, force3D: true, xPercent: 0, yPercent: 0 });
  win.addEventListener('pointermove', onPointerMove, { signal });
  win.document.addEventListener('pointerover', onPointerOver, { signal });
  win.document.addEventListener('pointerout', onPointerOut, { signal });
  win.addEventListener(CURSOR_EVENTS.reset, hide, { signal });
  win.document.documentElement.addEventListener('pointerleave', onWindowLeave, { signal });

  return () => {
    quickX.tween?.kill();
    quickY.tween?.kill();
    disposeChild();
    gsap.killTweensOf(el);
  };
}

/* ── sticker-cursor-preview ──────────────────────────────────────────────── */
function setupSticker(nodes, cfg, signal, win) {
  const { el } = nodes;
  const s = cfg.sticker;
  let img = null;
  let hasPreview = false;
  let shown = false;
  let positioned = false;

  const quickX = gsap.quickTo(el, 'x', s.follow);
  const quickY = gsap.quickTo(el, 'y', s.follow);

  const setImage = (url) => {
    if (!img) {
      img = win.document.createElement('img');
      img.className = CURSOR_CLASSES.stickerImage;
      img.alt = '';
      img.draggable = false;
      el.append(img);
    }
    img.src = url;
  };
  const clearImage = () => {
    img?.remove();
    img = null;
  };

  const show = () => {
    if (shown) return;
    shown = true;
    gsap.to(el, { autoAlpha: 1, scale: s.show.scale, duration: s.show.duration, ease: s.show.ease, overwrite: 'auto' });
  };
  const hide = () => {
    if (!shown && !hasPreview) return;
    shown = false;
    gsap.to(el, { autoAlpha: 0, scale: s.hide.scale, duration: s.hide.duration, ease: s.hide.ease, overwrite: 'auto' });
  };

  const positionFor = (event) => ({
    x: clamp(event.clientX - s.size / 2 + s.offset.x, s.margin, win.innerWidth - s.size - s.margin),
    y: clamp(event.clientY - s.size / 2 + s.offset.y, s.margin, win.innerHeight - s.size - s.margin),
  });

  const onPointerMove = (event) => {
    const pos = positionFor(event);
    if (positioned) {
      quickX(pos.x);
      quickY(pos.y);
    } else {
      positioned = true;
      gsap.set(el, pos);
    }
    if (hasPreview) show();
  };
  const onPreviewEnter = (event) => {
    const url = event.detail?.url;
    if (!url) {
      hasPreview = false;
      hide();
      clearImage();
      return;
    }
    setImage(url);
    hasPreview = true;
    if (positioned) show();
  };
  const onPreviewLeave = () => {
    hasPreview = false;
    hide();
    clearImage();
  };
  const onWindowLeave = () => {
    hasPreview = false;
    hide();
  };

  gsap.set(el, { autoAlpha: 0, force3D: true, scale: s.hide.scale, xPercent: 0, yPercent: 0 });

  win.addEventListener('pointermove', onPointerMove, { signal });
  win.addEventListener(CURSOR_EVENTS.stickerEnter, onPreviewEnter, { signal });
  win.addEventListener(CURSOR_EVENTS.stickerLeave, onPreviewLeave, { signal });
  win.document.documentElement.addEventListener('pointerleave', onWindowLeave, { signal });

  return () => {
    quickX.tween?.kill();
    quickY.tween?.kill();
    gsap.killTweensOf(el);
  };
}

/**
 * Custom-Cursor mounten. `root` ist der Container für die Cursor-Elemente
 * (Default: <body>). Liefert einen Controller mit `destroy()`.
 */
export function mount(root = globalThis.document?.body, options = {}) {
  if (!root) return { destroy() {} };
  const doc = root.ownerDocument;
  const win = doc.defaultView ?? globalThis;
  const cfg = mergeOptions(options);

  const stalker = createStalker(doc);
  const splitMouse = createSplitMouse(doc);
  const sticker = createSticker(doc);
  root.append(stalker.el, splitMouse.el, sticker.el);

  // Touch-/Stiftgeräte: Elemente bleiben unsichtbar, keine Listener (Z59481/59673).
  const fine = win.matchMedia?.(cfg.pointerQuery).matches ?? true;
  if (!fine) {
    gsap.set([stalker.el, sticker.el], { autoAlpha: 0 });
    return {
      destroy() {
        stalker.el.remove();
        splitMouse.el.remove();
        sticker.el.remove();
      },
    };
  }

  const controller = new AbortController();
  const { signal } = controller;
  const killStalker = setupStalker(stalker, cfg, signal, win);
  const killSplitMouse = setupSplitMouse(splitMouse, cfg, signal, win);
  const killSticker = setupSticker(sticker, cfg, signal, win);

  return {
    destroy() {
      controller.abort();
      killStalker();
      killSplitMouse();
      killSticker();
      stalker.el.remove();
      splitMouse.el.remove();
      sticker.el.remove();
    },
  };
}
