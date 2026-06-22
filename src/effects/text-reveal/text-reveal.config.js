/*
 * text-reveal.config.js — Stellschrauben des Hiroto-Text-Reveals.
 *
 * Aus dem Original-App-Bundle extrahiert:
 *   reference/hiroto/src/effects/_raw/vendor/050096.app-bundle.js
 *   • Hook `sR`  (ab Z6940) — SplitText (Headings → Zeilen) + Stagger-Fade-Up
 * Stilfläche: reference/hiroto/src/styles/ui/split-text.css.
 */

/** Ziel-Selektoren (Z6945/6948). Headings werden in Zeilen zerlegt, Rest als Ganzes. */
export const TEXT_REVEAL_SELECTORS = Object.freeze({
  heading: '[data-text-reveal-heading],.page-shell__intro > h1,.projects-gridzoom__intro > h1',
  body: '[data-text-reveal],[data-text-reveal-kicker],.page-shell__intro > p,.about-language-toggle > button,.about-page__body,.about-page__meta > div,.home-meta > div,.contact-page__links,.projects-gridzoom__intro > p',
});

/** GSAP-SplitText-Optionen für die Headings (Z6970–6975). */
export const TEXT_REVEAL_SPLIT = Object.freeze({
  aria: 'auto',
  linesClass: 'split-heading__line',
  smartWrap: true,
  tag: 'span',
  type: 'lines',
});

/** Auslöser: Reveal startet bei „Seite betreten" (Z7004–7006). */
export const TEXT_REVEAL_TRIGGER = Object.freeze({
  event: 'signal-pole:entered',
  enteredClass: 'is-entered',
});

export const DEFAULT_TEXT_REVEAL_OPTIONS = Object.freeze({
  delay: 0, // Timeline-Delay (Z6993)
  /** Ausgangszustand aller Ziele (Z6988). */
  from: Object.freeze({ autoAlpha: 0, y: 16 }),
  /** Reveal-Tween mit Stagger (Z7001). */
  to: Object.freeze({ autoAlpha: 1, y: 0, duration: 1.02, ease: 'power2.out', stagger: 0.075 }),
});
