/*
 * preloader.config.js — Stellschrauben des Hiroto-Preloaders.
 *
 * Aus dem Original-App-Bundle extrahiert:
 *   reference/hiroto/src/effects/_raw/vendor/050096.app-bundle.js
 *   • Konstanten AH/Az/AV/Aj/AW   (Z51021–51025)
 *   • Komponente `AY`             (ab Z51027) — Scramble-Loop + Wellen-Drain
 * Stilfläche/Maße: reference/hiroto/src/styles/ui/preloader.css.
 *
 * Eases: der Wellen-Drain nutzt die modulweiten App-CustomEases `s1`/`s3`
 * (definiert Z7513/7515, genutzt Z51079/51089) — siehe `eases` unten.
 * Alle Werte sind 1:1 aus dem Original.
 */

/** CSS-Klassen (Markup baut preloader.js). */
export const PRELOADER_CLASSES = Object.freeze({
  root: 'preloader',
  wave: 'preloader__wave',
  inner: 'preloader__inner',
  text: 'preloader__text',
});

/** Page-State-Klassen am <html> + Abschluss-Event (Z51043–51054). */
export const PRELOADER_PAGE = Object.freeze({
  surfaceReady: 'is-page-surface-ready',
  pageReady: 'is-page-ready',
  entered: 'is-entered',
  enteredEvent: 'signal-pole:entered',
});

export const DEFAULT_PRELOADER_OPTIONS = Object.freeze({
  /** Loop-Nachrichten (`Aj`, Z51024). Erste ist auch das Start-Markup. */
  messages: Object.freeze(['Loading...', 'Almost there...', 'Just a moment...']),
  /** Abschiedszeile vor dem Ausblenden (Z51120). */
  farewell: 'Thanks for waiting - all set.',
  /** Zeichensatz des Scramble-Effekts (`AW`, Z51025). */
  scrambleChars: 'upperAndLowerCase0123456789<>!?_#*+',

  /** Wellen-SVG: viewBox + Pfad-Schablone + drei Zustände (Z51188–51209). */
  wave: Object.freeze({
    viewBox: '0 0 100 100',
    preserveAspectRatio: 'xMidYMin slice',
    fill: '#050505',
    path: (s) => `M 0 0 V ${s.bottomY} Q 50 ${s.controlY} 100 ${s.bottomY} V ${s.closeY} z`,
    full: Object.freeze({ bottomY: 100, controlY: 100, closeY: 0 }), // AH
    mid: Object.freeze({ bottomY: 50, controlY: 100, closeY: 0 }), // Az
    empty: Object.freeze({ bottomY: 0, controlY: 0, closeY: 0 }), // AV
    drainThreshold: 26, // ab bottomY ≤ 26 gilt „betreten" (Z51081/51091)
  }),

  /** Scramble-Loop je Nachricht (Z51144–51158). */
  loop: Object.freeze({
    in: Object.freeze({ duration: 0.66, ease: 'power2.out', opacity: 1, revealDelay: 0.04, speed: 1.05, y: 0 }),
    hold: 0.36,
    out: Object.freeze({ duration: 0.54, ease: 'power2.in', opacity: 0.68, revealDelay: 0, speed: 0.9 }),
    startY: 6, // Start-Versatz des Textes (Z51140)
  }),

  /** Abschiedssequenz vor dem Drain (Z51113–51130). */
  farewellSeq: Object.freeze({
    in: Object.freeze({ duration: 0.8, ease: 'power2.out', revealDelay: 0.07, speed: 1.2 }),
    hold: 0.38,
    out: Object.freeze({ duration: 0.6, ease: 'power2.in', opacity: 0, revealDelay: 0, speed: 0.82 }),
    fade: Object.freeze({ duration: 0.2, ease: 'power2.out' }),
  }),

  /** Wellen-Drain AH→Az→AV (Z51075–51095). Eases = App-CustomEases s1/s3. */
  drain: Object.freeze({
    first: Object.freeze({ duration: 1.3, ease: 'curve' }), // s1 (Z51079)
    second: Object.freeze({ duration: 1.3, ease: 'settle', overlap: '-=0.65' }), // s3 (Z51089)
  }),

  /** CustomEase-Kurven (modulweit, Z7513/7515) — vom Wellen-Drain genutzt. */
  eases: Object.freeze({
    curve: Object.freeze({ name: 'signal-pole-transition-curve', path: 'M0,0 C0.5,0 0.275,1 1,1' }), // s1
    settle: Object.freeze({ name: 'signal-pole-transition-settle', path: 'M0,0 C0.2,1 0.25,1 1,1' }), // s3
  }),

  /** Timings (GSAP delayedCalls, Z51163/51108/51109). */
  timing: Object.freeze({
    loopToFarewell: 3.5, // Loop läuft 3.5 s, dann Abschied (`b`)
    farewellToDrain: 1.15, // 1.15 s nach Abschied startet der Wellen-Drain (`A`)
    hardStop: 6.2, // Sicherheits-Abbruch → sofort schließen (`x`)
  }),
});
