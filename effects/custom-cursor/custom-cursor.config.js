/*
 * custom-cursor.config.js — alle Stellschrauben des Hiroto-Custom-Cursors an
 * EINER Stelle. „Die Einstellungen, die den Effekt genau so entstehen lassen."
 *
 * Jede Zahl/Easing ist 1:1 aus dem Original-App-Bundle extrahiert:
 *   reference/hiroto/src/effects/_raw/vendor/050096.app-bundle.js
 *   • Komponente `wu` = mouse-stalker            (ab Z59465)
 *   • Komponente `wh` = sticker-cursor-preview   (ab Z59666)
 * Im Bundle stecken diese Werte inline in den GSAP-Tweens; hier sind sie
 * herausgezogen, damit der Effekt ohne Code-Eingriff feinjustierbar ist.
 * Visuelle Maße (18 px, 102 px, Farben) liegen zusätzlich in
 *   reference/hiroto/src/styles/ui/cursor.css.
 */

/** CSS-Klassen der beiden Cursor-Elemente (Markup baut custom-cursor.js). */
export const CURSOR_CLASSES = Object.freeze({
  stalker: 'mouse-stalker',
  stalkerSvg: 'mouse-stalker__svg',
  stalkerShape: 'mouse-stalker__shape',
  stalkerLabel: 'mouse-stalker__label',
  stalkerArrow: 'mouse-stalker__arrow',
  splitMouse: 'mouse',
  splitMouseEl: 'mouse_el',
  splitLabel: 'Awrite Awrite-inv Ms',
  splitWide: 'Awrite-w',
  sticker: 'sticker-cursor-preview',
  stickerImage: 'sticker-cursor-preview__image',
});

/** Worauf der Stalker reagiert: hover-bare Elemente mit Label-Datenattribut. */
export const CURSOR_SELECTORS = Object.freeze({
  trigger: '[data-cursor-stalker-label]:not([aria-disabled="true"])',
  // Arrow-only: nur der animierte Pfeil-Cursor erscheint, kein Label-Text.
  arrowOnlyTrigger: '[data-cursor-arrow-only]:not([aria-disabled="true"])',
  // Writing-Cursor (wie bei den Projekten) nur dort, wo er hingehoert: die
  // Bild-Flip-Items (.MW[data-tt] / explizit getaggt) und externe Links
  // (target="_blank"). Navbar, Back- und Sprach-Buttons bleiben aussen vor.
  // Label = data-cursor-split-label / data-tt / aria-label / Textinhalt.
  splitTrigger:
      '[data-cursor-split-label]:not([aria-disabled="true"]), [data-cursor-arrow-only]:not([aria-disabled="true"]), .MW[data-tt]:not([aria-disabled="true"]), a[target="_blank"]:not([aria-disabled="true"])',
  labelAttr: 'data-cursor-stalker-label',
  splitLabelAttr: 'data-cursor-split-label',
});

/** Custom-Events („signal-pole"), über die der Cursor ferngesteuert wird. */
export const CURSOR_EVENTS = Object.freeze({
  enter: 'signal-pole:cursor-enter', // { detail: { label, showArrow } }
  leave: 'signal-pole:cursor-leave',
  reset: 'signal-pole:cursor-reset',
  stickerEnter: 'signal-pole:sticker-preview-enter', // { detail: { url } }
  stickerLeave: 'signal-pole:sticker-preview-leave',
  fractalEnter: 'signal-pole:fractal-hover-enter', // { detail: { target } }
  fractalLeave: 'signal-pole:fractal-hover-leave',
});

export const DEFAULT_CURSOR_OPTIONS = Object.freeze({
  /** Nur Geräte mit Präzisionszeiger bekommen den Cursor (Z59481/Z59673). */
  pointerQuery: '(pointer: fine)',
  /** Fallback-Label, wenn kein Datenattribut/aria/Text greift (`wl`, Z59464). */
  defaultLabel: 'Open',

  /** mouse-stalker — die folgende Pille mit Label + Pfeil. */
  stalker: Object.freeze({
    baseSize: 18, // Ruhe-Kantenlänge der Pille (Z59472/59473, g(18,18))
    pillHeight: 34, // Höhe im Label-Zustand (Z59523, g(r,34))
    restRotate: -16, // Neigung in Ruhe (Z59554/59613)
    follow: Object.freeze({ duration: 0.42, ease: 'power3.out' }), // quickTo x/y (Z59483/59484)
    resize: Object.freeze({ duration: 0.48, ease: 'expo.out' }), // Größen-Tween (Z59500/59507/59515)
    show: Object.freeze({ duration: 0.18, ease: 'power2.out' }), // Einblenden Pille/Label/Pfeil (Z59524–59529)
    rotateIn: Object.freeze({ duration: 0.36, ease: 'back.out(1.6)' }), // Aufrichten bei Label (Z59537)
    rotateReset: Object.freeze({ duration: 0.36, ease: 'power3.out' }), // Zurück in Ruhe (Z59557)
    arrowSlide: Object.freeze({ duration: 0.48, ease: 'expo.out' }), // Pfeil nach rechts (Z59532)
    arrowReset: Object.freeze({ duration: 0.3, ease: 'power3.out' }), // Pfeil zurück (Z59552)
    hide: Object.freeze({ duration: 0.16, ease: 'power2.out' }), // Ausblenden Pille (Z59545)
    hideParts: Object.freeze({ duration: 0.14, ease: 'power2.out' }), // Ausblenden Label/Pfeil (Z59548)
    leaveFade: Object.freeze({ duration: 0.18, ease: 'power2.out' }), // Fenster verlassen (Z59608)
    /** Label-Breite = clamp(min, max, ceil(Textbreite + pad)) (Z59522). */
    labelWidth: Object.freeze({ min: 78, max: 280, pad: 58 }),
    arrowAnchor: 78, // Pfeil-Ruheposition; Verschiebung = breite − 78 (Z59532)
    edgeMargin: 8, // Mindestabstand zum Viewport-Rand (Z59563/59568)
    posOffset: Object.freeze({ x: -3, y: -1 }), // Feinversatz zum Zeiger (Z59564/59568)
    labelX: 15, // SVG-Text x (Z59648)
    labelDy: '0.14em', // SVG-Text dy (Z59650)
    arrowPath: 'M11 23 L23 11 M12 11 H23 V22', // ↗ diagonal (Z59656 ersetzt)
  }),

  /**
   * `.mouse` SplitType-Stalker aus Paul-Seidel-Portfolio-main.zip:
   * vendor/split/runtime-page-base.js `Hs` + main-app.js `writeFn`.
   */
  splitMouse: Object.freeze({
    follow: Object.freeze({ duration: 0.05, ease: 'none' }), // Hs.lightX/lightY
    offset: Object.freeze({ x: 20, y: -8 }), // .mouse_el { left: 2rem; top: -.8rem } auf px normalisiert
    swapDelay: 120,  // war 300 — schnellerer Wechsel bei bestehendem Child
    enterDelay: 0,   // war 6 — sofortiger Start beim ersten Erscheinen
    hide: Object.freeze({ width: 0, duration: 0.15, ease: 'power2.out' }), // war 0.2
    write: Object.freeze({
      opacityDuration: 0.14,  // war 0.22
      charStagger: 0.03,      // war 0.05
      blockDuration: 0.10,    // war 0.16
      blockStagger: 0.03,     // war 0.05
      blockInnerStagger: 0.010, // war 0.016
      ease: 'power4.inOut',
      fillers: 1,
      fillerText: ' ',
    }),
  }),

  /** sticker-cursor-preview — großes Vorschaubild, das dem Zeiger folgt. */
  sticker: Object.freeze({
    size: 102, // Kantenlänge (Z59704/59705, == cursor.css)
    follow: Object.freeze({ duration: 0.28, ease: 'power3.out' }), // quickTo x/y (Z59675/59676)
    show: Object.freeze({ scale: 1, duration: 0.18, ease: 'power2.out' }), // (Z59683–59688)
    hide: Object.freeze({ scale: 0.82, duration: 0.14, ease: 'power2.out' }), // (Z59694–59699)
    offset: Object.freeze({ x: 0, y: -10 }), // Versatz zum Zeiger (Z59704/59705)
    margin: 10, // Mindestabstand zum Rand (Z59704/59705)
  }),
});