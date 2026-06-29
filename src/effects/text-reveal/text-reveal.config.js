/*
 * text-reveal.config.js — Stellschrauben des Text-Reveals (Headings → Zeilen,
 * Stagger-Fade-Up). Stilfläche: ../../styles/ui/split-text.css.
 */

/** Ziel-Selektoren. Headings werden in Zeilen zerlegt, Rest als Ganzes. */
export const TEXT_REVEAL_SELECTORS = Object.freeze({
  heading: '[data-text-reveal-heading],.page-shell__intro > h1,.projects-gridzoom__intro > h1',
  body: '[data-text-reveal],[data-text-reveal-kicker],.page-shell__intro > p,.about-language-toggle > button,.about-page__body,.about-page__meta > div,.home-meta > div,.contact-page__links,.projects-gridzoom__intro > p',
});

/** GSAP-SplitText-Optionen für die Headings. */
export const TEXT_REVEAL_SPLIT = Object.freeze({
  aria: 'auto',
  linesClass: 'split-heading__line',
  smartWrap: true,
  tag: 'span',
  type: 'lines',
});

/** Auslöser: Reveal startet bei „Seite betreten". */
export const TEXT_REVEAL_TRIGGER = Object.freeze({
  event: 'signal-pole:entered',
  enteredClass: 'is-entered',
});

export const DEFAULT_TEXT_REVEAL_OPTIONS = Object.freeze({
  delay: 0, // Timeline-Delay
  /** Ausgangszustand aller Ziele. */
  from: Object.freeze({ autoAlpha: 0, y: 16 }),
  /** Reveal-Tween mit Stagger. */
  to: Object.freeze({ autoAlpha: 1, y: 0, duration: 1.02, ease: 'power2.out', stagger: 0.075 }),
});
