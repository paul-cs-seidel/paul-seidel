/*
 * custom-cursor — der .mouse SplitType-Cursor (animierter Label-Kasten,
 * folgt dem Zeiger und feuert den `.Oi`-Fractal-Hover an).
 */
import gsap from 'gsap';
import SplitType from 'split-type';

import {
  CURSOR_CLASSES,
  CURSOR_EVENTS,
  CURSOR_SELECTORS,
  DEFAULT_CURSOR_OPTIONS,
} from './custom-cursor.config.js';

function mergeOptions(options) {
  return {
    ...DEFAULT_CURSOR_OPTIONS,
    ...options,
    splitMouse: { ...DEFAULT_CURSOR_OPTIONS.splitMouse, ...(options.splitMouse || {}) },
  };
}

/** Baut den .mouse-Cursor-Root. */
function createSplitMouse(doc) {
  const el = doc.createElement('div');
  el.className = CURSOR_CLASSES.splitMouse;
  el.setAttribute('aria-hidden', 'true');
  return { el };
}

/* ── .mouse SplitType-Stalker ────────────────────────────────────────────── */
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

  const labelFor = (target) => {
    if (target.hasAttribute('data-cursor-arrow-only')) return '↗';
    return (
      target.dataset.cursorSplitLabel?.trim() ||
      target.dataset.tt?.trim() ||
      target.getAttribute('aria-label')?.trim() ||
      target.textContent?.replace(/\s+/g, ' ').trim() ||
      cfg.defaultLabel
    );
  };

  const fractalTargetFor = (target) =>
    target.matches?.('.Oi')
      ? target
      : target.querySelector?.('.Oi') || target.closest?.('.Oi') || target;

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
      const value = char.textContent.replace(/\u00A0/g, ' ');
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
      label.textContent = text.replace(/ /g, '\u00A0');
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
          duration: Math.max(
            s.write.opacityDuration,
            chars.length * s.write.charStagger + s.write.blockDuration,
          ),
          ease: s.write.ease,
        },
        0,
      );
      for (const [index, char] of chars.entries()) {
        const normal = char.querySelector('.n');
        showTl.to(
          normal,
          {
            opacity: 1,
            duration: s.write.opacityDuration,
            immediateRender: false,
            ease: s.write.ease,
          },
          index * s.write.charStagger,
        );
        for (const [fillerIndex, filler] of [...char.querySelectorAll('.f')].entries()) {
          showTl
            .to(
              filler,
              {
                scaleX: 0,
                opacity: 0,
                immediateRender: false,
                duration: s.write.blockDuration,
                ease: s.write.ease,
              },
              index * s.write.blockStagger + (1 + fillerIndex) * s.write.blockInnerStagger,
            )
            .set(filler, { display: 'none' }, '>');
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

/**
 * Custom-Cursor mounten. Liefert einen Controller mit `destroy()`.
 */
export function mount(root = globalThis.document?.body, options = {}) {
  if (!root) return { destroy() {} };
  const doc = root.ownerDocument;
  const win = doc.defaultView ?? globalThis;
  const cfg = mergeOptions(options);

  const splitMouse = createSplitMouse(doc);
  root.append(splitMouse.el);

  // Touch-/Stiftgeräte: keine Listener
  const fine = win.matchMedia?.(cfg.pointerQuery).matches ?? true;
  if (!fine) {
    return {
      destroy() {
        splitMouse.el.remove();
      },
    };
  }

  const controller = new AbortController();
  const { signal } = controller;
  const killSplitMouse = setupSplitMouse(splitMouse, cfg, signal, win);

  return {
    destroy() {
      controller.abort();
      killSplitMouse();
      splitMouse.el.remove();
    },
  };
}
