/*
 * main.js — verdrahtet AUSSCHLIESSLICH unsere sauberen Effekt-Module zu einer
 * lauffähigen Demo. Kein minifizierter Code, keine _next-Chunks: GSAP kommt als
 * echte npm-Library (Import-Map → node_modules), die Effekte aus ./effects/*.
 *
 * Ablauf: Cursor global · Preloader → `signal-pole:entered` → Text-Reveal ·
 * Nav-Klick → page-transition (Clip-Path über einen Snapshot der alten Seite) +
 * Panel-Tausch · Projects → projects-gallery (Endlos-Marquee) mit Hover-Readout
 * (unten links) und FLIP-Zoom in die Detailansicht (GSAP Flip) · Back-Button ·
 * EN/JA-Umschalter. Projektdaten 1:1 aus dem Original (`a9`, Bundle Z5860).
 */
import gsap from 'gsap';
import Flip from 'gsap/Flip';



import { mount as mountCursor } from './effects/custom-cursor/custom-cursor.js';
import { mount as mountPreloader } from './effects/preloader/preloader.js';
import { mount as mountTransition } from './effects/page-transition/page-transition.js';
import { mount as mountTextReveal } from './effects/text-reveal/text-reveal.js';
import { mount as mountGallery } from './effects/projects-gallery/projects-gallery.js';
import { mount as mountFractalEffect } from './effects/fractalEffect/fractalEffect.js';


gsap.registerPlugin(Flip);

// Projekte (aus dem Original-Bundle a9, Z5860). Bilder lokal in ./assets.
const PROJECTS = [
  { id: 'noart', title: 'NoArt.', category: { en: 'Web site', de: 'webseite' }, role: { en: 'DESIGN / Firs Test Website', de: 'Design / Erste Webseite' }, summary: { en: 'First work with how to build websites with html, css and javascript', de: 'Meine erste Webseite mit html, css und javascript' }, href: 'https://paul-cs-seidel.github.io/NoArt./', image: './assets/projects/noart.png' },
  { id: 'wired', title: 'WIRED', category: { en: 'Web site', de: 'Webサイト' }, role: { en: 'DESIGN / FRONT-END DEVELOPMENT / 3D MODELING', de: 'デザイン / フロントエンド開発 / 3Dモデリング' }, summary: { en: 'Web experience for WIRED Innovation Award 2025.', de: 'WIRED Innovation Award 2025 のWebサイト実装。' }, href: 'https://wired.jp/article/wired-innovation-award-2025/', image: './assets/projects/wired.png' },
  { id: 'portfolio-proto-2026', title: 'Portfolio / Proto 2026', category: { en: 'Web site', de: 'Webサイト' }, role: { en: 'DESIGN / FRONT-END DEVELOPMENT / 3D MODELING', de: 'デザイン / フロントエンド開発 / 3Dモデリング' }, summary: { en: 'Prototype portfolio site exploring interactive 3D presentation and frontend motion.', de: 'インタラクティブな3D表現とフロントエンドモーションを試したポートフォリオサイトのプロトタイプ。' }, href: 'https://archive-proto-2026.hirotos.com', image: './assets/projects/prtfolio_proto_2026.png' },
  { id: 'demo01', title: 'Noodle', category: { en: 'Demo site', de: 'デモサイト' }, role: { en: 'DESIGN / FRONT-END DEVELOPMENT / 3D MODELING', de: 'デザイン / フロントエンド開発 / 3Dモデリング' }, summary: { en: '3D motion demo focused on spatial composition and interaction.', de: '空間構成とインタラクションにフォーカスした3Dモーションのデモサイト。' }, href: 'https://demo-01-3d-motion.hirotos.com', image: './assets/projects/demo01.png' },
  { id: 'track', title: 'TRACK', category: { en: 'Demo site', de: 'デモサイト' }, role: { en: 'DESIGN / FRONT-END DEVELOPMENT / 3D MODELING', de: 'デザイン / フロントエンド開発 / 3Dモデリング' }, summary: { en: 'Demo site exploring project browsing and motion-driven interaction.', de: 'プロジェクト閲覧とモーションによるインタラクションを試したデモサイト。' }, href: 'https://demo-03-track.hirotos.com', image: './assets/projects/track.png' },
  { id: 'portfolio2022', title: 'Portfolio / 2022', category: { en: 'Web site', de: 'Webサイト' }, role: { en: 'DESIGN / FRONT-END DEVELOPMENT', de: 'デザイン / フロントエンド開発' }, summary: { en: 'Portfolio site from 2022.', de: '2022年に制作したポートフォリオサイト。' }, href: 'https://archive.hirotos.com/portfolio2022/', image: './assets/projects/portfolio2022.png' },
  { id: 'showreel', title: 'SHOWREEL / 2025', category: { en: 'Showreel', de: 'ショーリール' }, role: { en: '3D MODELING / MOTION', de: '3Dモデリング / モーション' }, summary: { en: 'Showreel presenting motion, WebGL, and frontend experiments.', de: 'モーション、WebGL、フロントエンド表現をまとめたショーリール。' }, href: 'https://reel.hirotos.com', image: './assets/projects/showreel.png' },
  { id: 'tap-to-meet-you', title: 'Tap to meet you', category: { en: 'Demo site', de: 'デモサイト' }, role: { en: 'DESIGN / FRONT-END DEVELOPMENT / 3D MODELING', de: 'デザイン / フロントエンド開発 / 3Dモデリング' }, summary: { en: 'Demo site with a compact tap interaction and direct visual feedback.', de: 'タップ操作と視覚的なフィードバックを軸にしたデモサイト。' }, href: 'https://demo-02-tap-to-meet-you.hirotos.com/', image: './assets/projects/tap_to_meet_you.png' },
];
const byId = new Map(PROJECTS.map((p) => [p.id, p]));
let lang = 'en';

const persistent = document.querySelector('.persistent-experience');
const panels = new Map(
  [...document.querySelectorAll('[data-route-panel]')].map((el) => [el.dataset.routePanel, el]),
);
const navLinks = [...document.querySelectorAll('.site-nav a[data-route]')];

mountCursor(document.body);
const pageTransition = mountTransition(document.body);

let currentRoute = 'home';
let gallery = null;
let zoomFractal = null;
let busy = false;

// Routenwechsel-Timing: Der Text-Reveal wird nicht nach dem Übergang, sondern
// kurz vor dessen Ende ausgelöst (page-transition `onContentReveal`, Zeitpunkt
// `timeline.contentRevealAt`), damit Aufdecken und Reveal ineinandergreifen.
const reveals = new Map();
function revealPanel(panel, { delay = 0, autoplay } = {}) {
  reveals.get(panel)?.destroy();
  const controller = mountTextReveal(panel, { delay, autoplay });
  reveals.set(panel, controller);
  return controller;
}
revealPanel(panels.get('home')); // wartet auf den Preloader (signal-pole:entered)

if (sessionStorage.getItem('hiroto:preloader')) {
  document.documentElement.classList.add('is-page-surface-ready', 'is-page-ready', 'is-entered');
  window.dispatchEvent(new CustomEvent('signal-pole:entered'));
} else {
  sessionStorage.setItem('hiroto:preloader', '1');
  mountPreloader(document.body);
}

// ── Navigation mit sichtbarem Clip-Path-Übergang ────────────────────────────
async function navigate(route) {
  if (busy || route === currentRoute || !panels.has(route)) return;
  busy = true;
  hideReadout();

  const snapshot = panels.get(currentRoute).cloneNode(true);
  snapshot.hidden = false;
  snapshot.removeAttribute('data-route-panel');
  Object.assign(snapshot.style, { position: 'absolute', inset: '0', opacity: '1' });

  await pageTransition.transition({
    snapshot,
    onReveal: () => {
      panels.get(currentRoute).hidden = true;
      const next = panels.get(route);
      next.hidden = false;
      persistent.dataset.route = route;
      setActiveNav(route);
      currentRoute = route;
      revealPanel(next, { autoplay: false }); // Texte verborgen halten
    },
    // Kurz vor Ende des Wischers: Text-Reveal starten, sodass er mit dem
    // Aufdecken der Seite ineinandergreift statt erst danach zu laufen.
    onContentReveal: () => reveals.get(panels.get(route))?.reveal(),
  });

  if (route === 'projects' && !gallery) {
    const galleryRoot = panels.get('projects').querySelector('[data-gallery-root]');
    gallery = mountGallery(galleryRoot, {
      projects: PROJECTS.map((p) => ({ id: p.id, image: p.image })),
      onHover: (id) => (id ? showReadout(id) : hideReadout()),
      onSelect: (id, el) => openZoom(id, el),
    });
  }
  busy = false;
}

function setActiveNav(route) {
  for (const link of navLinks) {
    if (link.dataset.route === route) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
}

for (const link of navLinks) {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    navigate(link.dataset.route);
  });
}
for (const button of document.querySelectorAll('[data-back]')) {
  button.addEventListener('click', () => navigate('home'));
}

// ── EN/JA-Umschalter ────────────────────────────────────────────────────────
function applyLanguage(next) {
  lang = next;
  document.documentElement.lang = next;
  for (const el of document.querySelectorAll('[data-en]')) {
    const value = el.getAttribute(`data-${next}`);
    if (value != null) el.textContent = value;
  }
  for (const button of document.querySelectorAll('[data-lang]')) {
    button.setAttribute('aria-pressed', button.dataset.lang === next ? 'true' : 'false');
  }
  if (hoveredId) showReadout(hoveredId);
  if (zoomProjectId) fillZoom(byId.get(zoomProjectId));
}
for (const button of document.querySelectorAll('[data-lang]')) {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
}

// ── Hover-Readout unten links ───────────────────────────────────────────────
const readout = document.createElement('div');
readout.className = 'demo-project-readout';
readout.innerHTML = '<span></span><strong></strong>';
document.body.append(readout);
let hoveredId = null;

function showReadout(id) {
  const p = byId.get(id);
  if (!p) return hideReadout();
  hoveredId = id;
  readout.querySelector('span').textContent = `${p.category[lang]} / ${p.role[lang]}`.toUpperCase();
  readout.querySelector('strong').textContent = p.title;
  readout.classList.add('is-visible');
}
function hideReadout() {
  hoveredId = null;
  readout.classList.remove('is-visible');
}

// ── FLIP-Zoom in die Detailansicht (GSAP Flip) ──────────────────────────────
const zoom = document.createElement('div');
zoom.className = 'projects-zoom';
zoom.hidden = true;
zoom.innerHTML = `
  <div class="projects-zoom__header">
    <button class="back-circle-control projects-zoom__back" type="button" data-zoom-close aria-label="Close">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 L8 12 L15 19" /></svg>
    </button>
  </div>
  <div class="projects-zoom__content">
    <span data-zoom-category></span>
    <h2 data-zoom-title></h2>
    <p data-zoom-summary></p>
    <dl>
      <div><dt data-zoom-dt-category>Category</dt><dd data-zoom-cat></dd></div>
      <div><dt data-zoom-dt-role>Role</dt><dd data-zoom-role></dd></div>
    </dl>
    <a class="projects-zoom__link" data-zoom-link target="_blank" rel="noopener noreferrer"></a>
  </div>
  <div class="projects-zoom__image"><img data-zoom-image alt="" /></div>`;
document.body.append(zoom);
const zoomEls = {
  imageHost: zoom.querySelector('.projects-zoom__image'),
  image: zoom.querySelector('[data-zoom-image]'),
  category: zoom.querySelector('[data-zoom-category]'),
  title: zoom.querySelector('[data-zoom-title]'),
  summary: zoom.querySelector('[data-zoom-summary]'),
  cat: zoom.querySelector('[data-zoom-cat]'),
  role: zoom.querySelector('[data-zoom-role]'),
  link: zoom.querySelector('[data-zoom-link]'),
};
const ZOOM_LABELS = { en: { category: 'Category', role: 'Role', view: 'View site' }, de: { category: 'Kategorie', role: 'Rolle', view: 'Live Webseite' } };
let zoomProjectId = null;

function fillZoom(p) {
  zoomEls.category.textContent = p.category[lang];
  zoomEls.title.textContent = p.title;
  zoomEls.summary.textContent = p.summary[lang];
  zoomEls.cat.textContent = p.category[lang];
  zoomEls.role.textContent = p.role[lang];
  zoom.querySelector('[data-zoom-dt-category]').textContent = ZOOM_LABELS[lang].category;
  zoom.querySelector('[data-zoom-dt-role]').textContent = ZOOM_LABELS[lang].role;
  zoomEls.link.textContent = `${ZOOM_LABELS[lang].view} ↗`;
  zoomEls.link.href = p.href;
}

function openZoom(id, tileEl) {
  const p = byId.get(id);
  if (!p || !tileEl || zoomProjectId) return;
  zoomProjectId = id;
  gallery?.freeze(true);
  hideReadout();

  const figure = tileEl.querySelector('.projects-marquee__figure');
  const flipId = `flip-${id}`;
  figure.dataset.flipId = flipId;
  const state = Flip.getState(figure);

  fillZoom(p);
  zoomEls.image.src = p.image;
  zoomEls.image.dataset.flipId = flipId;
  zoom.hidden = false;
  document.documentElement.classList.add('is-zoom-open');

  Flip.from(state, {
    targets: zoomEls.image,
    duration: 0.92,
    ease: 'expo.inOut',
    absolute: true,
    fade: true,
    onComplete: () => {
      delete figure.dataset.flipId;
      delete zoomEls.image.dataset.flipId;
      // Fractal-Hover erst auf dem fertig vergroesserten Bild aktivieren.
      zoomEls.imageHost.classList.add('Oi');
      zoomFractal = mountFractalEffect(zoom);
    },
  });
  gsap.fromTo(zoom, { backgroundColor: 'rgba(255,255,255,0)' }, { backgroundColor: '#ffffff', duration: 0.72, ease: 'power2.out' });
  gsap.from(zoom.querySelectorAll('.projects-zoom__content > *'), { autoAlpha: 0, y: 22, duration: 0.72, ease: 'power3.out', stagger: 0.035, delay: 0.18 });
}

function closeZoom() {
  if (!zoomProjectId) return;
  // Fractal-Hover abbauen, damit das normale <img> die Flip-Rueckanimation zeigt.
  zoomFractal?.destroy();
  zoomFractal = null;
  zoomEls.imageHost.classList.remove('Oi');
  const id = zoomProjectId;
  const flipId = `flipback-${id}`;
  zoomEls.image.dataset.flipId = flipId;
  const state = Flip.getState(zoomEls.image);

  // Mittigste sichtbare Kachel desselben Projekts als Rückziel.
  const figure = [...document.querySelectorAll(`.projects-marquee__figure[data-project-id="${id}"]`)]
    .map((f) => ({ f, r: f.getBoundingClientRect() }))
    .filter((o) => o.r.right > 0 && o.r.left < window.innerWidth)
    .sort((a, b) => Math.abs(a.r.left + a.r.width / 2 - window.innerWidth / 2) - Math.abs(b.r.left + b.r.width / 2 - window.innerWidth / 2))[0]?.f;
  if (figure) figure.dataset.flipId = flipId;

  zoom.hidden = true;
  document.documentElement.classList.remove('is-zoom-open');
  const finish = () => {
    if (figure) delete figure.dataset.flipId;
    delete zoomEls.image.dataset.flipId;
    zoomProjectId = null;
    gallery?.freeze(false);
  };
  if (figure) {
    Flip.from(state, { targets: figure, duration: 0.78, ease: 'expo.inOut', absolute: true, fade: true, onComplete: finish });
  } else {
    finish();
  }
}

zoom.querySelector('[data-zoom-close]').addEventListener('click', closeZoom);
document.addEventListener('keydown', (e) => e.key === 'Escape' && closeZoom());
