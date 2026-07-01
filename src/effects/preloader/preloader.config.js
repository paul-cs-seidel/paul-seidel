/*
 * preloader.config.js — Stellschrauben des Preloaders (Scramble-Loop +
 * drainende Wellen-SVG). Stilfläche/Maße: ../../styles/ui/preloader.css.
 */

/** CSS-Klassen (Markup baut preloader.js). */
export const PRELOADER_CLASSES = Object.freeze({
  root: 'preloader',
  wave: 'preloader__wave',
  inner: 'preloader__inner',
  text: 'preloader__text',
});

/** Page-State-Klassen am <html> + Abschluss-Event. */
export const PRELOADER_PAGE = Object.freeze({
  surfaceReady: 'is-page-surface-ready',
  pageReady: 'is-page-ready',
  entered: 'is-entered',
  enteredEvent: 'signal-pole:entered',
});

export const DEFAULT_PRELOADER_OPTIONS = Object.freeze({
  /** Loop-Nachrichten. Erste ist auch das Start-Markup. */
  messages: Object.freeze(['Loading...', 'Almost there...', 'Just a moment...']),
  /** Abschiedszeile vor dem Ausblenden. */
  farewell: 'Thanks for waiting - all set.',
  /** Zeichensatz des Scramble-Effekts. */
  scrambleChars: 'upperAndLowerCase0123456789<>!?_#*+',
  heroImage: null,
  onClose: null, // Callback, sobald der Loader vollständig geschlossen ist.

  /** Wellen-SVG: viewBox + Pfad-Schablone + drei Zustände. */
  wave: Object.freeze({
    viewBox: '0 0 100 100',
    preserveAspectRatio: 'xMidYMin slice',
    fill: '#050505',
    path: (s) => `M 0 0 V ${s.bottomY} Q 50 ${s.controlY} 100 ${s.bottomY} V ${s.closeY} z`,
    full: Object.freeze({ bottomY: 100, controlY: 100, closeY: 0 }),
    mid: Object.freeze({ bottomY: 50, controlY: 100, closeY: 0 }),
    empty: Object.freeze({ bottomY: 0, controlY: 0, closeY: 0 }),
    drainThreshold: 26, // ab bottomY ≤ 26 gilt „betreten"
    closeThreshold: 1.5, // ab hier ist die Welle praktisch leer → Loader schließen (statt auf das Timeline-Ende zu warten)
  }),

  /** Loader-Ausblendung, sobald die Welle leer ist (kurzer Crossfade, kein Pop). */
  exit: Object.freeze({ duration: 0.28, ease: 'power1.out' }),

  /** Scramble-Loop je Nachricht. */
  loop: Object.freeze({
    in: Object.freeze({
      duration: 0.66,
      ease: 'power2.out',
      opacity: 1,
      revealDelay: 0.04,
      speed: 1.05,
      y: 0,
    }),
    hold: 0.36,
    out: Object.freeze({
      duration: 0.54,
      ease: 'power2.in',
      opacity: 0.68,
      revealDelay: 0,
      speed: 0.9,
    }),
    startY: 6, // Start-Versatz des Textes
  }),

  /** Abschiedssequenz vor dem Drain. */
  farewellSeq: Object.freeze({
    in: Object.freeze({ duration: 0.8, ease: 'power2.out', revealDelay: 0.07, speed: 1.2 }),
    hold: 0.38,
    out: Object.freeze({
      duration: 0.6,
      ease: 'power2.in',
      opacity: 0,
      revealDelay: 0,
      speed: 0.82,
    }),
    fade: Object.freeze({ duration: 0.2, ease: 'power2.out' }),
  }),

  /** Wellen-Drain voll→mittig→leer. Eases siehe `eases`. */
  drain: Object.freeze({
    first: Object.freeze({ duration: 1.3, ease: 'curve' }),
    second: Object.freeze({ duration: 1.3, ease: 'settle', overlap: '-=0.65' }),
  }),

  /** CustomEase-Kurven, vom Wellen-Drain genutzt. */
  eases: Object.freeze({
    curve: Object.freeze({ name: 'signal-pole-transition-curve', path: 'M0,0 C0.5,0 0.275,1 1,1' }),
    settle: Object.freeze({
      name: 'signal-pole-transition-settle',
      path: 'M0,0 C0.2,1 0.25,1 1,1',
    }),
  }),

  /** Timings (GSAP delayedCalls). */
  timing: Object.freeze({
    loopToFarewell: 3.5, // Loop läuft 3.5 s, dann Abschied
    farewellToDrain: 1.15, // 1.15 s nach Abschied startet der Wellen-Drain
    hardStop: 6.2, // Sicherheits-Abbruch → sofort schließen
  }),
});
