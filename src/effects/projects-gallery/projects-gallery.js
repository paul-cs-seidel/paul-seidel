/*
 * projects-gallery — Hirotos Endlos-Projekt-Marquee, framework-frei nachgebaut.
 *
 * Ein Track aus 3 identischen Sets scrollt endlos: ein GSAP-Ticker schiebt den
 * Offset (Basis-Autoscroll + Wheel-Velocity mit Reibung) und wickelt ihn modulo
 * Set-Breite um (nahtloser Loop). Zeiger über einer Karte pausiert sanft
 * (`speedScale`-Rampe). Beim Ereignis `signal-pole:entered` fahren die Karten
 * gestaffelt ein.
 *
 * Original: Helfer sn/si/so (Z6327–6368) + Komponente `sl` (ab Z6369) in
 * _raw/vendor/050096.app-bundle.js. Antrieb: GSAP (ticker, quickSetter). Werte:
 * ./projects-gallery.config.js.
 *
 * Abstrahiert: der FLIP-Zoom einer Karte in die Detail-Ansicht (`.projects-zoom`)
 * nutzt das GSAP-Flip-Plugin, Projektdaten und Route-State der App. Statt ihn
 * nachzubauen, meldet ein Item-Klick `onSelect(index, element)`.
 */
import gsap from 'gsap';

import { DEFAULT_GALLERY_OPTIONS, GALLERY_CLASSES } from './projects-gallery.config.js';

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

/** Liest das aktuelle Cursor-Label abhängig von html[lang]. */
function resolveCursorLabel(cursorLabel, doc) {
  if (typeof cursorLabel === 'string') return cursorLabel;
  const lang = doc.documentElement.lang || 'en';
  return cursorLabel[lang] ?? cursorLabel.en;
}

/** Baut die Marquee aus Projektdaten (3 Sets). */
function buildMarquee(doc, projects, cfg) {
  const marquee = doc.createElement('div');
  marquee.className = GALLERY_CLASSES.marquee;
  marquee.setAttribute('aria-label', cfg.ariaLabel);
  const track = doc.createElement('div');
  track.className = GALLERY_CLASSES.track;

  const label = resolveCursorLabel(cfg.cursorLabel, doc);

  for (let i = 0; i < cfg.setCount; i += 1) {
    const set = doc.createElement('div');
    set.className = GALLERY_CLASSES.set;
    projects.forEach((project) => {
      const item = doc.createElement('button');
      item.type = 'button';
      item.className = GALLERY_CLASSES.item;
      item.classList.add(GALLERY_CLASSES.cursorTrigger);
      const card = doc.createElement('span');
      card.className = GALLERY_CLASSES.card;
      const figure = doc.createElement('figure');
      figure.className = `${GALLERY_CLASSES.figure} ${GALLERY_CLASSES.oi}`;
      figure.dataset.projectId = project.id;
      const img = doc.createElement('img');
      img.src = project.image;
      img.alt = '';
      img.draggable = false;
      img.loading = 'eager';
      img.decoding = 'async';
      figure.append(img);
      card.append(figure);
      item.append(card);
      set.append(item);
    });
    track.append(set);
  }
  marquee.append(track);
  return marquee;
}

export function mount(root, options = {}) {
  if (!root) return { destroy() {}, freeze() {} };
  const cfg = { ...DEFAULT_GALLERY_OPTIONS, ...options };
  const doc = root.ownerDocument;
  const win = doc.defaultView ?? globalThis;

  if (options.projects) root.append(buildMarquee(doc, options.projects, cfg));
  const track = root.querySelector(`.${GALLERY_CLASSES.track}`);
  const firstSet = track?.querySelector(`.${GALLERY_CLASSES.set}`);
  if (!track || !firstSet) return { destroy() {}, freeze() {} };

  // Label bei Sprachwechsel aktualisieren (data-lang-Buttons setzen html[lang]).
  const updateLabels = () => {
    // cursor-Label entfernt; Sprachaktualisierung nur noch für aria-label etc.
  };
  const langObserver = new MutationObserver(updateLabels);
  langObserver.observe(doc.documentElement, { attributes: true, attributeFilter: ['lang'] });

  // Scroll-Zustand (im Original das `scrollRef`-Objekt).
  const state = { current: 0, speedScale: 0, wheelVelocity: 0, isPointerPaused: false, isRouteFrozen: false };
  const controller = new AbortController();
  const { signal } = controller;

  gsap.set(track, { force3D: true, x: 0, ...cfg.trackTransform, y: 0 });
  const setX = gsap.quickSetter(track, 'x', 'px');
  let setWidth = 0;

  const render = () => {
    if (setWidth <= 0) return;
    setX(-(((state.current % setWidth) + setWidth) % setWidth));
  };
  const measure = () => {
    const width = firstSet.getBoundingClientRect().width;
    if (setWidth > 0 && width > 0 && setWidth !== width) state.current = (state.current / setWidth) * width;
    setWidth = width;
    render();
  };

  // speedScale-Rampe (so): pausiert auf 0, sonst auf 1; Freeze nullt Velocity.
  const ramp = () => {
    const paused = state.isPointerPaused || state.isRouteFrozen;
    const ramping = paused ? cfg.speed.pause : cfg.speed.resume;
    gsap.killTweensOf(state, 'speedScale');
    gsap.to(state, { speedScale: paused ? 0 : 1, duration: ramping.duration, ease: ramping.ease, overwrite: 'auto' });
    if (state.isRouteFrozen) {
      gsap.killTweensOf(state, 'wheelVelocity');
      gsap.to(state, { wheelVelocity: 0, duration: cfg.speed.freezeVelocity.duration, ease: cfg.speed.freezeVelocity.ease, overwrite: 'auto' });
    }
  };

  // Ticker: Offset fortschreiben, Wheel-Velocity reiben, rendern.
  const tick = (time, deltaMs) => {
    const dt = Math.min(cfg.scroll.maxDelta, deltaMs / 1000);
    state.current += (cfg.scroll.baseSpeed * state.speedScale + state.wheelVelocity) * dt;
    state.wheelVelocity *= Math.pow(cfg.scroll.friction, dt);
    if (Math.abs(state.wheelVelocity) < cfg.scroll.velocityCutoff) state.wheelVelocity = 0;
    render();
  };

  const onWheel = (event) => {
    if (state.isRouteFrozen) return;
    const raw = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    const delta = raw * (event.deltaMode === 1 ? cfg.scroll.wheelLineHeight : 1);
    gsap.killTweensOf(state, 'wheelVelocity');
    state.wheelVelocity = clamp(state.wheelVelocity + delta * cfg.scroll.wheelFactor, -cfg.scroll.wheelClamp, cfg.scroll.wheelClamp);
  };

  // ── Touch-Support (Swipe horizontal) ──────────────────────────────────────
  let touchStartX = 0;
  let touchLastX  = 0;
  let touchLastT  = 0;

  const onTouchStart = (event) => {
    if (state.isRouteFrozen) return;
    const t = event.touches[0];
    touchStartX = t.clientX;
    touchLastX  = t.clientX;
    touchLastT  = performance.now();
    state.isPointerPaused = true;
    ramp();
  };

  const onTouchMove = (event) => {
    if (state.isRouteFrozen) return;
    const t     = event.touches[0];
    const now   = performance.now();
    const dx    = touchLastX - t.clientX;
    const dt    = Math.max(1, now - touchLastT);
    const speed = dx / dt * 1000;
    gsap.killTweensOf(state, 'wheelVelocity');
    state.wheelVelocity = clamp(speed * cfg.scroll.wheelFactor * 0.6, -cfg.scroll.wheelClamp, cfg.scroll.wheelClamp);
    touchLastX = t.clientX;
    touchLastT = now;
    const totalDX = Math.abs(t.clientX - touchStartX);
    if (totalDX > 8) event.preventDefault();
  };

  const onTouchEnd = () => {
    state.isPointerPaused = false;
    ramp();
  };

  const projectIdOf = (item) => item.querySelector('[data-project-id]')?.dataset.projectId ?? null;

  const onPointerOver = (event) => {
    const item = event.target.closest(`.${GALLERY_CLASSES.item}`);
    if (!item) return;
    state.isPointerPaused = true;
    ramp();
    options.onHover?.(projectIdOf(item), item);
  };
  const onPointerOut = (event) => {
    const item = event.target.closest(`.${GALLERY_CLASSES.item}`);
    if (!item || (event.relatedTarget && item.contains(event.relatedTarget))) return;
    state.isPointerPaused = false;
    ramp();
    options.onHover?.(null, null);
  };
  const onClick = (event) => {
    const item = event.target.closest(`.${GALLERY_CLASSES.item}`);
    if (!item) return;
    options.onSelect?.(projectIdOf(item), item);
  };

  measure();
  const resizeObserver = new win.ResizeObserver(measure);
  resizeObserver.observe(firstSet);
  win.addEventListener('resize', measure, { signal });
  root.addEventListener('wheel', onWheel, { passive: true, signal });
  root.addEventListener('touchstart', onTouchStart, { passive: true, signal });
  root.addEventListener('touchmove', onTouchMove, { passive: false, signal });
  root.addEventListener('touchend', onTouchEnd, { signal });
  root.addEventListener('touchcancel', onTouchEnd, { signal });
  root.addEventListener('pointerover', onPointerOver, { signal });
  root.addEventListener('pointerout', onPointerOut, { signal });
  root.addEventListener('click', onClick, { signal });

  const startTimer = gsap.delayedCall(cfg.speed.startDelay, ramp);
  gsap.ticker.add(tick);

  const allCards = [...track.querySelectorAll(`.${GALLERY_CLASSES.card}`)];
  let enterTl = null;

  if (allCards.length > 0) {
    gsap.set(allCards, { ...cfg.enter.from, force3D: true });
  }

  return {
    freeze(frozen) {
      state.isRouteFrozen = Boolean(frozen);
      ramp();
    },
    enterCards() {
      enterTl?.kill();
      if (allCards.length > 0) {
        gsap.set(allCards, { ...cfg.enter.from, force3D: true });
        enterTl = gsap.timeline().to(allCards, { ...cfg.enter.to });
      }
    },
    resetCards() {
      enterTl?.kill();
      enterTl = null;
      if (allCards.length > 0) {
        gsap.set(allCards, { ...cfg.enter.from, force3D: true });
      }
    },
    state,
    destroy() {
      controller.abort();
      langObserver.disconnect();
      gsap.ticker.remove(tick);
      startTimer.kill();
      enterTl?.kill();
      gsap.killTweensOf(state);
      resizeObserver.disconnect();
      if (options.projects) root.querySelector(`.${GALLERY_CLASSES.marquee}`)?.remove();
    },
  };
}