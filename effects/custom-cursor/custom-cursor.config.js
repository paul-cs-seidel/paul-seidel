/*
 * custom-cursor.config.js
 */

/** CSS-Klassen der Cursor-Elemente (Markup baut custom-cursor.js). */
export const CURSOR_CLASSES = Object.freeze({
  splitMouse: 'mouse',
  splitMouseEl: 'mouse_el',
  splitLabel: 'Awrite Awrite-inv Ms',
  splitWide: 'Awrite-w',
});

/** Worauf der SplitType-Cursor reagiert. */
export const CURSOR_SELECTORS = Object.freeze({
  splitTrigger:
      '[data-cursor-split-label]:not([aria-disabled="true"]), [data-cursor-arrow-only]:not([aria-disabled="true"]), .MW[data-tt]:not([aria-disabled="true"]), a[target="_blank"]:not([aria-disabled="true"])',
  splitLabelAttr: 'data-cursor-split-label',
});

/** Custom-Events, über die der Cursor ferngesteuert wird. */
export const CURSOR_EVENTS = Object.freeze({
  reset: 'signal-pole:cursor-reset',
  fractalEnter: 'signal-pole:fractal-hover-enter', // { detail: { target } }
  fractalLeave: 'signal-pole:fractal-hover-leave',
});

export const DEFAULT_CURSOR_OPTIONS = Object.freeze({
  /** Nur Geräte mit Präzisionszeiger bekommen den Cursor. */
  pointerQuery: '(pointer: fine)',
  /** Fallback-Label, wenn kein Datenattribut/aria/Text greift. */
  defaultLabel: 'Open',

  /**
   * `.mouse` SplitType-Stalker aus Paul-Seidel-Portfolio-main.zip:
   * vendor/split/runtime-page-base.js `Hs` + main-app.js `writeFn`.
   */
  splitMouse: Object.freeze({
    follow: Object.freeze({ duration: 0.05, ease: 'none' }),
    offset: Object.freeze({ x: 20, y: -8 }),
    swapDelay: 120,
    enterDelay: 1,
    hide: Object.freeze({ width: 0, duration: 0.15, ease: 'power2.out' }),
    write: Object.freeze({
      opacityDuration: 0.14,
      charStagger: 0.03,
      blockDuration: 0.10,
      blockStagger: 0.03,
      blockInnerStagger: 0.010,
      ease: 'power4.inOut',
      fillers: 1,
      fillerText: ' ',
    }),
  }),
});