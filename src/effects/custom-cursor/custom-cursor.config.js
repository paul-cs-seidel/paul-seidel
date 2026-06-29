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
    '[data-cursor-split-label]:not([aria-disabled="true"]), [data-cursor-arrow-only]:not([aria-disabled="true"]), .MW[data-tt]:not([aria-disabled="true"]), a[target="_blank"]:not([aria-disabled="true"]):not(.projects-zoom__link)',
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

  /** `.mouse` SplitType-Cursor: Folge-Tween + Schreib-Animation des Labels. */
  splitMouse: Object.freeze({
    follow: Object.freeze({ duration: 0.05, ease: 'none' }),
    swapDelay: 120,
    enterDelay: 1,
    hide: Object.freeze({ width: 0, duration: 0.15, ease: 'power2.out' }),
    write: Object.freeze({
      opacityDuration: 0.14,
      charStagger: 0.03,
      blockDuration: 0.1,
      blockStagger: 0.03,
      blockInnerStagger: 0.01,
      ease: 'power4.inOut',
      fillers: 1,
      fillerText: ' ',
    }),
  }),
});
