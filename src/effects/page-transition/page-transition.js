/*
 * page-transition — Clip-Path-Seitenübergang.
 *
 * Eine vollflächige Fläche (`.page-transition`) wird eingeblendet; ihr per SVG
 * `clipPath` definierter Wellen-Pfad morpht von „voll deckend" (covered) über
 * die Mitte (mid) zu „freigegeben" (revealed) — die einlaufende Seite wird so
 * von unten aufgewischt. Parallel dimmt die Helligkeit kurz ab. Antrieb: GSAP
 * + CustomEase. Werte: ./page-transition.config.js.
 *
 * `transition({ snapshot })` nimmt optional ein fertiges Schnappschuss-Element
 * der ausgehenden Seite für `.page-transition__source-snapshot`.
 */
import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';

import {
  DEFAULT_TRANSITION_OPTIONS,
  TRANSITION_CLASSES,
  TRANSITION_CLIP_ID,
  TRANSITION_EASES,
  TRANSITION_VARS,
} from './page-transition.config.js';

gsap.registerPlugin(CustomEase);

const SVG_NS = 'http://www.w3.org/2000/svg';

// CustomEases einmalig registrieren und als Instanzen bereithalten.
const EASES = Object.fromEntries(
  Object.entries(TRANSITION_EASES).map(([key, { name, path }]) => [
    key,
    CustomEase.create(name, path),
  ]),
);

// Stage-Maße: ein 100×100-Feld, das den Viewport komplett überdeckt.
// `height` muss die VOLLE Bildschirmhöhe sein (nicht win.innerHeight — das ist auf
// iOS die kleine, toolbar-bereinigte Höhe und ließe unten einen Streifen frei).
function stage(win, height) {
  const w = win.innerWidth;
  const h = height;
  const scale = Math.max(w / 100, h / 100);
  const leftX = (w - 100 * scale) / 2;
  return { centerX: w / 2, leftX, rightX: leftX + 100 * scale, scale };
}

// Reiner Wellen-Pfad.
function wavePath(shape, m) {
  return `M ${m.leftX} ${shape.originY * m.scale} V ${shape.edgeY * m.scale} Q ${m.centerX} ${shape.controlY * m.scale} ${m.rightX} ${shape.edgeY * m.scale} V ${shape.closeY * m.scale} z`;
}

// Voll deckend: nur die Welle, nonzero.
function drawCovered(path, shape, m) {
  path.setAttribute('clip-rule', 'nonzero');
  path.setAttribute('fill-rule', 'nonzero');
  path.setAttribute('d', wavePath(shape, m));
}

// Reveal: Vollrechteck MINUS Welle, evenodd.
function drawMorph(path, shape, m) {
  path.setAttribute('clip-rule', 'evenodd');
  path.setAttribute('fill-rule', 'evenodd');
  path.setAttribute(
    'd',
    [
      `M ${m.leftX} 0`,
      `H ${m.rightX}`,
      `V ${100 * m.scale}`,
      `H ${m.leftX}`,
      'z',
      wavePath(shape, m),
    ].join(' '),
  );
}

function createMarkup(doc) {
  const root = doc.createElement('div');
  root.className = TRANSITION_CLASSES.root;
  root.setAttribute('aria-hidden', 'true');

  const svg = doc.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('class', TRANSITION_CLASSES.clipDefs);
  svg.setAttribute('aria-hidden', 'true');
  const defs = doc.createElementNS(SVG_NS, 'defs');
  const clip = doc.createElementNS(SVG_NS, 'clipPath');
  clip.setAttribute('id', TRANSITION_CLIP_ID);
  clip.setAttribute('clipPathUnits', 'userSpaceOnUse');
  const clipPath = doc.createElementNS(SVG_NS, 'path');
  clip.append(clipPath);
  defs.append(clip);
  svg.append(defs);

  const next = doc.createElement('div');
  next.className = TRANSITION_CLASSES.next;
  next.style.clipPath = `url(#${TRANSITION_CLIP_ID})`;
  next.style.webkitClipPath = `url(#${TRANSITION_CLIP_ID})`;
  const nextContent = doc.createElement('div');
  nextContent.className = TRANSITION_CLASSES.nextContent;
  const snapshot = doc.createElement('div');
  snapshot.className = TRANSITION_CLASSES.sourceSnapshot;
  nextContent.append(snapshot);
  next.append(nextContent);

  root.append(svg, next);
  return { root, clipPath, next, nextContent, snapshot };
}

export function mount(root = globalThis.document?.body, options = {}) {
  if (!root) return { destroy() {}, transition: () => Promise.resolve() };
  const doc = root.ownerDocument;
  const win = doc.defaultView ?? globalThis;
  const cfg = { ...DEFAULT_TRANSITION_OPTIONS, ...options };
  const nodes = createMarkup(doc);
  root.append(nodes.root);

  let active = null; // laufende Timeline
  // Volle Bildschirmhöhe = Höhe des inset:0-Overlays (deckt auch Toolbar-Bereich).
  const measureStage = () => stage(win, nodes.root.getBoundingClientRect().height);
  // Ruhezustand: voll deckend, unsichtbar.
  drawCovered(nodes.clipPath, cfg.geometry.covered, measureStage());
  gsap.set(nodes.root, { autoAlpha: 0, pointerEvents: 'none' });

  /**
   * Übergang fahren. `onReveal` feuert am Start (Zeitpunkt des DOM-Swaps),
   * `onComplete`/Promise am Ende. `snapshot` (optional) = Schnappschuss der
   * ausgehenden Seite für `.page-transition__source-snapshot`.
   */
  function transition({ onReveal, onContentReveal, onComplete, snapshot } = {}) {
    active?.kill();
    const m = measureStage();
    const shape = { ...cfg.geometry.covered };

    if (snapshot) nodes.snapshot.replaceChildren(snapshot);
    gsap.set(nodes.nextContent, { [TRANSITION_VARS.blur]: '0px', [TRANSITION_VARS.brightness]: 1 });
    drawCovered(nodes.clipPath, shape, m);
    gsap.set(nodes.root, { autoAlpha: 1, pointerEvents: 'auto' });

    const t = cfg.timeline;
    return new Promise((resolve) => {
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        onComplete: () => {
          gsap.set(nodes.root, { autoAlpha: 0, pointerEvents: 'none' });
          drawCovered(nodes.clipPath, cfg.geometry.covered, measureStage());
          nodes.snapshot.replaceChildren();
          onComplete?.();
          resolve();
        },
      });
      const redraw = () => drawMorph(nodes.clipPath, shape, m);
      tl.call(() => onReveal?.(), undefined, 0)
        .to(
          nodes.nextContent,
          {
            [TRANSITION_VARS.brightness]: t.dim.brightness,
            duration: t.dim.duration,
            ease: t.dim.ease,
          },
          t.dim.at,
        )
        .to(
          shape,
          {
            ...cfg.geometry[t.morphIn.to],
            duration: t.morphIn.duration,
            ease: EASES[t.morphIn.ease],
            onUpdate: redraw,
          },
          t.morphIn.at,
        )
        .to(
          shape,
          {
            ...cfg.geometry[t.morphOut.to],
            duration: t.morphOut.duration,
            ease: EASES[t.morphOut.ease],
            onUpdate: redraw,
          },
          t.morphOut.at,
        )
        .call(() => onContentReveal?.(), undefined, t.contentRevealAt)
        .to(
          nodes.root,
          { autoAlpha: 0, duration: t.overlayFadeOut.duration, ease: t.overlayFadeOut.ease },
          t.overlayFadeOut.at,
        );
      active = tl;
    });
  }

  return {
    transition,
    destroy() {
      active?.kill();
      active = null;
      gsap.killTweensOf([nodes.root, nodes.nextContent]);
      nodes.root.remove();
    },
  };
}
