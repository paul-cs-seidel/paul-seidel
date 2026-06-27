/*
 * projects-gallery.config.js — Stellschrauben der Endlos-Projekt-Marquee.
 *
 * Aus dem Original-App-Bundle extrahiert:
 *   reference/hiroto/src/effects/_raw/vendor/050096.app-bundle.js
 *   • Helfer sn/si/so   (Z6327–6368) — Clamp, Mobile-Query, speedScale-Rampe
 *   • Komponente `sl`   (ab Z6369)   — Ticker-Scroll, Wrap, Enter-Stagger
 * Stilfläche: reference/hiroto/src/styles/pages/projects.css.
 */

/** CSS-Klassen (Markup baut projects-gallery.js bzw. liegt im HTML). */
export const GALLERY_CLASSES = Object.freeze({
  marquee: 'projects-marquee',
  track: 'projects-marquee__track',
  set: 'projects-marquee__set',
  item: 'projects-marquee__item',
  card: 'projects-marquee__card',
  figure: 'projects-marquee__figure',
  image: 'projects-marquee__img',
  oi: 'Oi',
  cursorTrigger: 'MW',
});

export const DEFAULT_GALLERY_OPTIONS = Object.freeze({
  setCount: 3, // identische Sets für den nahtlosen Loop (Z6498)
  cursorLabel: Object.freeze({ en: 'View_Project', de: 'Projekt_ansehen' }),
  ariaLabel: 'Looping project gallery', // (Z6494)
  mobileQuery: '(max-width: 620px)', // si() (Z6331)
  triggerEvent: 'signal-pole:entered', // Enter-Auslöser (Z6480)

  /** Track-Grundtransform: Mitte des 3er-Loops, vertikal zentriert (Z6393). */
  trackTransform: Object.freeze({ xPercent: -33.333333333333336, yPercent: -50 }),

  /** Ticker-Scroll-Physik (Z6412–6420). */
  scroll: Object.freeze({
    baseSpeed: 48, // px/s Grund-Autoscroll (× speedScale)
    maxDelta: 0.064, // dt-Deckel in s (Z6413)
    friction: 0.018, // wheelVelocity *= friction^dt (Z6416)
    velocityCutoff: 0.08, // darunter wheelVelocity = 0 (Z6417)
    wheelClamp: 2800, // |wheelVelocity| ≤ 2800 (Z6153)
    wheelLineHeight: 42, // deltaMode==1 (Zeilen) → ×42 px (Z6164)
    wheelFactor: 1,
  }),

  /** speedScale-Rampe so() bei Pause/Resume/Freeze (Z6356–6367). */
  speed: Object.freeze({
    resume: Object.freeze({ duration: 0.86, ease: 'power2.out' }),
    pause: Object.freeze({ duration: 0.58, ease: 'power3.out' }),
    freezeVelocity: Object.freeze({ duration: 0.5, ease: 'power3.out' }),
    startDelay: 0.48,
  }),

  /** Karten-Enter-Animation (Z6451–6475). */
  enter: Object.freeze({
    from: Object.freeze({ autoAlpha: 0, scale: 0.985, transformOrigin: '50% 100%', y: 84 }),
    to: Object.freeze({ autoAlpha: 1, scale: 1, y: 0, duration: 1.28, ease: 'expo.out', stagger: 0.085 }),
  }),
});