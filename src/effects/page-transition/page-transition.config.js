/*
 * page-transition.config.js — Stellschrauben des Clip-Path-Seitenübergangs.
 * Stilfläche: ../../styles/ui/page-transition.css.
 *
 * Der Übergang blendet eine vollflächige Fläche ein, deren `clip-path`
 * (Wellen-Pfad) von „voll deckend" über die Mitte zu „freigegeben" morpht.
 */

/** CSS-Klassen + Clip-ID (Markup baut page-transition.js). */
export const TRANSITION_CLASSES = Object.freeze({
  root: 'page-transition',
  clipDefs: 'page-transition__clip-defs',
  next: 'page-transition__next',
  nextContent: 'page-transition__next-content',
  sourceSnapshot: 'page-transition__source-snapshot',
});
export const TRANSITION_CLIP_ID = 'experience-route-transition-next-clip';

/** CSS-Custom-Props für Blur/Helligkeit der einlaufenden Fläche. */
export const TRANSITION_VARS = Object.freeze({
  blur: '--transition-content-blur',
  brightness: '--transition-content-brightness',
});

/** CustomEase-Kurven der „signal-pole"-Signatur (via gsap/CustomEase registriert). */
export const TRANSITION_EASES = Object.freeze({
  curve: Object.freeze({ name: 'signal-pole-transition-curve', path: 'M0,0 C0.5,0 0.275,1 1,1' }),
  routeCurve: Object.freeze({
    name: 'signal-pole-route-transition-curve',
    path: 'M0,0 C0.22,0.28 0.28,1 1,1',
  }),
  settle: Object.freeze({ name: 'signal-pole-transition-settle', path: 'M0,0 C0.2,1 0.25,1 1,1' }),
});

export const DEFAULT_TRANSITION_OPTIONS = Object.freeze({
  /**
   * Wellen-Geometrie als Anteile eines 100×100-Stage. Felder: originY (linke
   * Kante), edgeY (Wellen-Schultern), controlY (Q-Kontrolle), closeY (Abschluss
   * unten). Skaliert mit dem Viewport.
   */
  geometry: Object.freeze({
    covered: Object.freeze({ originY: 100, edgeY: 100, controlY: 100, closeY: 100 }),
    mid: Object.freeze({ originY: 100, edgeY: 50, controlY: 100, closeY: 100 }),
    revealed: Object.freeze({ originY: 100, edgeY: 0, controlY: 0, closeY: 100 }),
  }),

  /** Clip-Morph-Timeline. */
  timeline: Object.freeze({
    totalDuration: 1.95,
    dim: Object.freeze({ brightness: 0.21, duration: 0.5, ease: 'power2.inOut', at: 0 }),
    morphIn: Object.freeze({ to: 'mid', duration: 1.3, ease: 'routeCurve', at: 0 }),
    morphOut: Object.freeze({ to: 'revealed', duration: 1.3, ease: 'settle', at: 0.65 }),
    // Content-Reveal (Text) startet KURZ VOR Ende des Wischers (revealed @ 1.95),
    // damit Text und Aufdeckung ineinandergreifen statt nacheinander zu laufen.
    contentRevealAt: 0.65,
    overlayFadeOut: Object.freeze({ duration: 0.18, ease: 'none', at: 1.97 }),
  }),
});
