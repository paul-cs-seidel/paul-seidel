/*
 * preloader — Hirotos Lade-Overlay, framework-frei nachgebaut.
 *
 * Ablauf wie im Original (Komponente `AY`, _raw/vendor/050096.app-bundle.js
 * ab Z51027): eine GSAP-Timeline scrambelt im Loop die Lade-Nachrichten; nach
 * `loopToFarewell` folgt die Abschiedszeile, danach „draint" eine Wellen-SVG
 * von voll auf leer. Sobald die Welle unter die Schwelle fällt, wird die Seite
 * als „betreten" markiert (Page-State-Klassen + `signal-pole:entered`).
 *
 * Im Original triggert die 3D-Hero-Bereitschaft den Abschied; da die Hero hier
 * entfällt, läuft der Preloader auf Timer — `finish()` erlaubt zusätzlich einen
 * vorzeitigen Abschluss (das Äquivalent zur Readiness). Antrieb: GSAP +
 * ScrambleTextPlugin (im Original als Plugin `AG` gebündelt). Werte: siehe
 * ./preloader.config.js. A11y: `aria-live="polite"`, `aria-atomic="true"`.
 */
import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';

import { DEFAULT_PRELOADER_OPTIONS, PRELOADER_CLASSES, PRELOADER_PAGE } from './preloader.config.js';

gsap.registerPlugin(ScrambleTextPlugin, CustomEase);

// Signatur-CustomEases der App (s1/s3) für den Wellen-Drain.
const EASES = Object.fromEntries(
  Object.entries(DEFAULT_PRELOADER_OPTIONS.eases).map(([key, { name, path }]) => [key, CustomEase.create(name, path)]),
);

function mergeOptions(options) {
  return { ...DEFAULT_PRELOADER_OPTIONS, ...options };
}

/** Baut .preloader > (svg.__wave > path) + (div.__inner > span.__text). */
function createMarkup(doc, cfg) {
  const root = doc.createElement('div');
  root.className = PRELOADER_CLASSES.root;
  root.setAttribute('aria-live', 'polite');
  root.setAttribute('aria-atomic', 'true');
  // Hero-Bild vorladen: identische Background-Regeln wie .hero-section, damit
  // beim Drain-Ende kein Bild-Wechsel sichtbar ist (Cache-Treffer).
  if (cfg.heroImage) {
    root.style.backgroundImage   = `url(${JSON.stringify(cfg.heroImage)})`;
    root.style.backgroundSize    = 'cover';
    root.style.backgroundPosition = 'center';
    root.style.backgroundRepeat  = 'no-repeat';
  }

  const svg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', PRELOADER_CLASSES.wave);
  svg.setAttribute('viewBox', cfg.wave.viewBox);
  svg.setAttribute('preserveAspectRatio', cfg.wave.preserveAspectRatio);
  const wavePath = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
  wavePath.setAttribute('fill', cfg.wave.fill);
  svg.append(wavePath);

  const inner = doc.createElement('div');
  inner.className = PRELOADER_CLASSES.inner;
  const text = doc.createElement('span');
  text.className = PRELOADER_CLASSES.text;
  text.textContent = cfg.messages[0];
  inner.append(text);

  root.append(svg, inner);
  return { root, wavePath, text };
}

export function mount(root = globalThis.document?.body, options = {}) {
  if (!root) return { destroy() {}, finish() {} };
  const doc = root.ownerDocument;
  const win = doc.defaultView ?? globalThis;
  const cfg = mergeOptions(options);
  const html = doc.documentElement;

  const { root: el, wavePath, text } = createMarkup(doc, cfg);
  root.append(el);



  const waveState = { ...cfg.wave.full };
  const drawWave = () => wavePath.setAttribute('d', cfg.wave.path(waveState));

  let loop = null; // Scramble-Loop
  let exitDelay = null; // delayedCall → finish (Loop-Ende)
  let drainDelay = null; // delayedCall → drain
  let stopDelay = null; // delayedCall → harter Abbruch
  let timelines = [];
  let exiting = false;
  let entered = false;

  const enter = () => {
    if (entered) return;
    entered = true;
    html.classList.add(PRELOADER_PAGE.pageReady, PRELOADER_PAGE.entered);
    win.dispatchEvent(new win.CustomEvent(PRELOADER_PAGE.enteredEvent));
  };

  let closed = false;
  const close = () => {
    if (closed) return;
    closed = true;
    enter();
    cfg.onClose?.(); // Reveal startet sofort; der Loader blendet darüber aus.
    gsap.to(el, {
      autoAlpha: 0,
      duration: cfg.exit.duration,
      ease: cfg.exit.ease,
      onComplete: () => gsap.set(el, { display: 'none' }),
    });
  };

  // Wellen-Drain: voll → mittig → leer; unter Schwelle gilt „betreten".
  const drain = () => {
    html.classList.add(PRELOADER_PAGE.surfaceReady);
    const onUpdate = () => {
      drawWave();
      if (waveState.bottomY <= cfg.wave.drainThreshold) enter();
      // Welle praktisch leer (Hero voll sichtbar) → Loader schließen + Reveal
      // starten, ohne auf den asymptotischen Timeline-Schwanz zu warten.
      if (waveState.bottomY <= cfg.wave.closeThreshold) close();
    };
    const tl = gsap.timeline({ onComplete: close });
    tl.to(waveState, { ...cfg.wave.mid, duration: cfg.drain.first.duration, ease: EASES[cfg.drain.first.ease], onUpdate })
      .to(waveState, { ...cfg.wave.empty, duration: cfg.drain.second.duration, ease: EASES[cfg.drain.second.ease], onUpdate }, cfg.drain.second.overlap);
    timelines.push(tl);
  };

  // Abschiedssequenz + Zeitpläne für Drain und harten Abbruch.
  const finish = () => {
    if (exiting) return;
    exiting = true;
    loop?.kill();
    drainDelay = gsap.delayedCall(cfg.timing.farewellToDrain, drain);
    stopDelay = gsap.delayedCall(cfg.timing.hardStop, close);

    const f = cfg.farewellSeq;
    const tl = gsap.timeline();
    tl.set(text, { autoAlpha: 1, opacity: 1, y: 0 })
      .to(text, { duration: f.in.duration, ease: f.in.ease, scrambleText: { chars: cfg.scrambleChars, revealDelay: f.in.revealDelay, speed: f.in.speed, text: cfg.farewell } })
      .to({}, { duration: f.hold })
      .to(text, { duration: f.out.duration, ease: f.out.ease, opacity: f.out.opacity, scrambleText: { chars: cfg.scrambleChars, revealDelay: f.out.revealDelay, speed: f.out.speed, text: '' } })
      .to(text, { autoAlpha: 0, duration: f.fade.duration, ease: f.fade.ease });
    timelines.push(tl);
  };

  // Scramble-Loop über alle Nachrichten (läuft bis finish()).
  const startLoop = () => {
    gsap.set(el, { autoAlpha: 1, display: 'grid' });
    gsap.set(text, { autoAlpha: 1, opacity: 0, textContent: '', y: cfg.loop.startY });
    drawWave();
    const l = cfg.loop;
    loop = gsap.timeline({ repeat: -1 });
    cfg.messages.forEach((message) => {
      loop
        .to(text, { duration: l.in.duration, ease: l.in.ease, opacity: l.in.opacity, y: l.in.y, scrambleText: { chars: cfg.scrambleChars, revealDelay: l.in.revealDelay, speed: l.in.speed, text: message } })
        .to({}, { duration: l.hold })
        .to(text, { duration: l.out.duration, ease: l.out.ease, opacity: l.out.opacity, scrambleText: { chars: cfg.scrambleChars, revealDelay: l.out.revealDelay, speed: l.out.speed, text: '' } })
        .set(text, { y: 0 });
    });
    timelines.push(loop);
    exitDelay = gsap.delayedCall(cfg.timing.loopToFarewell, finish);
  };

  startLoop();

  return {
    /** Abschied vorzeitig auslösen (Äquivalent zur Hero-Readiness im Original). */
    finish,
    destroy() {
      exitDelay?.kill();
      drainDelay?.kill();
      stopDelay?.kill();
      timelines.forEach((tl) => tl.kill());
      timelines = [];
      gsap.killTweensOf([text, waveState, el]);
      el.remove();
    },
  };
}
