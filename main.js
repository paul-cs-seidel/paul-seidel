import gsap from 'gsap';
import Flip from 'gsap/Flip';

import { mount as mountCursor }       from './effects/custom-cursor/custom-cursor.js';
import { mount as mountPreloader }     from './effects/preloader/preloader.js';
import { mount as mountTransition }    from './effects/page-transition/page-transition.js';
import { mount as mountTextReveal }    from './effects/text-reveal/text-reveal.js';
import { mount as mountGallery }       from './effects/projects-gallery/projects-gallery.js';
import { mount as mountFractalEffect } from './effects/fractalEffect/fractalEffect.js';

gsap.registerPlugin(Flip);

// ── Projektdaten ─────────────────────────────────────────────────────────────
const PROJECTS = [
  { id: 'noart',               title: 'NoArt.',             category: { en: 'Web site',  de: 'Webseite'      }, role: { en: 'DESIGN / First Test Website',                  de: 'Design / Erste Webseite'                          }, summary: { en: 'First work building websites with html, css and javascript.',       de: 'Meine erste Webseite mit html, css und javascript.'         }, href: 'https://paul-cs-seidel.github.io/NoArt./',              image: '/assets/projects/noart.png'              },
  { id: 'wired',               title: 'WIRED',              category: { en: 'Web site',  de: 'Webサイト'      }, role: { en: 'DESIGN / FRONT-END DEVELOPMENT / 3D MODELING',  de: 'デザイン / フロントエンド開発 / 3Dモデリング'  }, summary: { en: 'Web experience for WIRED Innovation Award 2025.',               de: 'WIRED Innovation Award 2025 のWebサイト実装。'              }, href: 'https://wired.jp/article/wired-innovation-award-2025/', image: '/assets/projects/wired.png'              },
  { id: 'portfolio-proto-2026',title: 'Portfolio / Proto 2026',category:{en:'Web site', de:'Webサイト'},        role: { en: 'DESIGN / FRONT-END DEVELOPMENT / 3D MODELING',  de: 'デザイン / フロントエンド開発 / 3Dモデリング'  }, summary: { en: 'Prototype portfolio exploring interactive 3D and frontend motion.', de: 'インタラクティブな3D表現とフロントエンドモーション。'        }, href: 'https://archive-proto-2026.hirotos.com',                image: '/assets/projects/prtfolio_proto_2026.png' },
  { id: 'demo01',              title: 'Noodle',             category: { en: 'Demo site', de: 'デモサイト'      }, role: { en: 'DESIGN / FRONT-END DEVELOPMENT / 3D MODELING',  de: 'デザイン / フロントエンド開発 / 3Dモデリング'  }, summary: { en: '3D motion demo focused on spatial composition and interaction.',  de: '空間構成とインタラクションにフォーカスした3Dモーションデモ。' }, href: 'https://demo-01-3d-motion.hirotos.com',                  image: '/assets/projects/demo01.png'             },
  { id: 'track',               title: 'TRACK',              category: { en: 'Demo site', de: 'デモサイト'      }, role: { en: 'DESIGN / FRONT-END DEVELOPMENT / 3D MODELING',  de: 'デザイン / フロントエンド開発 / 3Dモデリング'  }, summary: { en: 'Demo exploring project browsing and motion-driven interaction.',  de: 'プロジェクト閲覧とモーションによるインタラクションデモ。'    }, href: 'https://demo-03-track.hirotos.com',                      image: '/assets/projects/track.png'              },
  { id: 'portfolio2022',       title: 'Portfolio / 2022',   category: { en: 'Web site',  de: 'Webサイト'      }, role: { en: 'DESIGN / FRONT-END DEVELOPMENT',                de: 'デザイン / フロントエンド開発'                  }, summary: { en: 'Portfolio site from 2022.',                                      de: '2022年に制作したポートフォリオサイト。'                      }, href: 'https://archive.hirotos.com/portfolio2022/',            image: '/assets/projects/portfolio2022.png'      },
  { id: 'showreel',            title: 'SHOWREEL / 2025',    category: { en: 'Showreel',  de: 'ショーリール'    }, role: { en: '3D MODELING / MOTION',                          de: '3Dモデリング / モーション'                      }, summary: { en: 'Showreel presenting motion, WebGL and frontend experiments.',    de: 'モーション・WebGL・フロントエンド表現のショーリール。'       }, href: 'https://reel.hirotos.com',                              image: '/assets/projects/showreel.png'           },
  { id: 'tap-to-meet-you',     title: 'Tap to meet you',   category: { en: 'Demo site', de: 'デモサイト'      }, role: { en: 'DESIGN / FRONT-END DEVELOPMENT / 3D MODELING',  de: 'デザイン / フロントエンド開発 / 3Dモデリング'  }, summary: { en: 'Demo with compact tap interaction and direct visual feedback.',  de: 'タップ操作と視覚的フィードバックを軸にしたデモ。'           }, href: 'https://demo-02-tap-to-meet-you.hirotos.com/',          image: '/assets/projects/tap_to_meet_you.png'    },
];
const byId = new Map(PROJECTS.map((p) => [p.id, p]));
let lang = 'en';

// ── DOM-Referenzen ────────────────────────────────────────────────────────────
const persistent = document.querySelector('.persistent-experience');
const panels      = new Map([...document.querySelectorAll('[data-route-panel]')].map((el) => [el.dataset.routePanel, el]));
const navLinks    = [...document.querySelectorAll('.site-nav a[data-route]')];

// ── Effekte starten ───────────────────────────────────────────────────────────
mountCursor(document.body);
const pageTransition = mountTransition(document.body);

// Preloader bei JEDEM Reload zeigen (kein sessionStorage-Skip).
mountPreloader(document.body);

// Home-Text-Reveal — wartet intern auf signal-pole:entered (Ende Preloader).
mountTextReveal(panels.get('home'));

// ── Gallery VOR dem ersten Navigate aufbauen (Bilder vorladen) ───────────────
let gallery = null;
{
  const galleryRoot = panels.get('projects').querySelector('[data-gallery-root]');
  gallery = mountGallery(galleryRoot, {
    projects: PROJECTS.map((p) => ({ id: p.id, image: p.image })),
    onHover:  (id) => (id ? showReadout(id) : hideReadout()),
    onSelect: (id, el) => openZoom(id, el),
  });
  gallery.freeze(true); // Scroll stoppen bis Projects-Panel aktiv ist
}

// ── Navigation ───────────────────────────────────────────────────────────────
let currentRoute = 'home';
let busy = false;

async function navigate(route) {
  if (busy || route === currentRoute || !panels.has(route)) return;
  busy = true;
  hideReadout();

  const leavingProjects  = currentRoute === 'projects';
  const enteringProjects = route === 'projects';

  // Snapshot des aktuellen Panels als Übergangsbild klonen.
  const snapshot = panels.get(currentRoute).cloneNode(true);
  snapshot.hidden = false;
  snapshot.removeAttribute('data-route-panel');
  Object.assign(snapshot.style, { position: 'absolute', inset: '0', opacity: '1' });

  // BUG 2 FIX: Controller für den Text-Reveal des Zielpanels direkt aufheben,
  // damit onContentReveal ihn ohne Map-Lookup sicher ansprechen kann.
  let pendingReveal = null;

  await pageTransition.transition({
    snapshot,

    // t = 0 (Wischer beginnt): DOM-Swap + Texte verstecken.
    onReveal: () => {
      // BUG 2 FIX: Beim Verlassen von Projects Cards sofort zurücksetzen,
      // damit sie beim nächsten Besuch sauber neu einfahren können.
      if (leavingProjects) {
        gallery?.resetCards();
        gallery?.freeze(true);
      }

      panels.get(currentRoute).hidden = true;
      const next = panels.get(route);
      next.hidden = false;
      persistent.dataset.route = route;
      setActiveNav(route);

      if (enteringProjects) gallery?.freeze(false);

      currentRoute = route;

      // BUG 1 FIX: Text-Reveal mit autoplay:false mounten → Texte werden sofort
      // durch gsap.set() unsichtbar gemacht. reveal() folgt in onContentReveal.
      pendingReveal = mountTextReveal(next, { autoplay: false });
    },

    // t = 1.55 s (contentRevealAt): Text-Reveal + Gallery-Enter gleichzeitig
    // starten — mitten im Wischer, bevor er endet (t ≈ 1.95 s).
    // BUG 1 FIX: pendingReveal statt fragiler Map-Lookup.
    onContentReveal: () => {
      pendingReveal?.reveal();
      pendingReveal = null;

      // BUG 2 FIX: Gallery-Karten via enterCards() einfahren (nutzt die neue
      // Methode aus projects-gallery.js; interne gsap.set + Timeline).
      if (enteringProjects) gallery?.enterCards();
    },
  });

  busy = false;
}

function setActiveNav(route) {
  for (const link of navLinks) {
    if (link.dataset.route === route) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
}

for (const link of navLinks) {
  link.addEventListener('click', (e) => { e.preventDefault(); navigate(link.dataset.route); });
}
for (const btn of document.querySelectorAll('[data-back]')) {
  btn.addEventListener('click', () => navigate('home'));
}

// ── EN / DE ───────────────────────────────────────────────────────────────────
function applyLanguage(next) {
  lang = next;
  document.documentElement.lang = next;
  for (const el of document.querySelectorAll('[data-en]')) {
    const val = el.getAttribute(`data-${next}`);
    if (val != null) el.textContent = val;
  }
  for (const btn of document.querySelectorAll('[data-lang]')) {
    btn.setAttribute('aria-pressed', btn.dataset.lang === next ? 'true' : 'false');
  }
  if (hoveredId)    showReadout(hoveredId);
  if (zoomProjectId) fillZoom(byId.get(zoomProjectId));
}
for (const btn of document.querySelectorAll('[data-lang]')) {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
}

// ── Hover-Readout ─────────────────────────────────────────────────────────────
const readout = document.createElement('div');
readout.className = 'demo-project-readout';
readout.innerHTML = '<span></span><strong></strong>';
document.body.append(readout);
let hoveredId = null;

function showReadout(id) {
  const p = byId.get(id);
  if (!p) return hideReadout();
  hoveredId = id;
  readout.querySelector('span').textContent   = `${p.category[lang]} / ${p.role[lang]}`.toUpperCase();
  readout.querySelector('strong').textContent = p.title;
  readout.classList.add('is-visible');
}
function hideReadout() {
  hoveredId = null;
  readout.classList.remove('is-visible');
}

// ── Zoom-Overlay (GSAP Flip) ──────────────────────────────────────────────────
// DOM-Reihenfolge: Image VOR Content → auf Mobil (display:block) Bild oben.
const zoom = document.createElement('div');
zoom.className = 'projects-zoom';
zoom.hidden = true;
zoom.innerHTML = `
  <div class="projects-zoom__header">
    <button class="back-circle-control projects-zoom__back" type="button" data-zoom-close aria-label="Close">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 L8 12 L15 19"/></svg>
    </button>
    <div class="projects-zoom__lang" aria-label="Language">
      <button type="button" data-lang="en" aria-pressed="true">EN</button>
      <button type="button" data-lang="de" aria-pressed="false">DE</button>
    </div>
  </div>
  <div class="projects-zoom__image"><img data-zoom-image alt=""/></div>
  <div class="projects-zoom__content">
    <span data-zoom-category></span>
    <h2  data-zoom-title></h2>
    <p   data-zoom-summary></p>
    <dl>
      <div><dt data-zoom-dt-category>Category</dt><dd data-zoom-cat></dd></div>
      <div><dt data-zoom-dt-role>Role</dt>        <dd data-zoom-role></dd></div>
    </dl>
    <a class="projects-zoom__link" data-zoom-link target="_blank" rel="noopener noreferrer"></a>
  </div>
  <ul class="projects-zoom__map" aria-label="All projects"></ul>`;
document.body.append(zoom);

const zoomEls = {
  imageHost: zoom.querySelector('.projects-zoom__image'),
  image:     zoom.querySelector('[data-zoom-image]'),
  category:  zoom.querySelector('[data-zoom-category]'),
  title:     zoom.querySelector('[data-zoom-title]'),
  summary:   zoom.querySelector('[data-zoom-summary]'),
  cat:       zoom.querySelector('[data-zoom-cat]'),
  role:      zoom.querySelector('[data-zoom-role]'),
  link:      zoom.querySelector('[data-zoom-link]'),
  map:       zoom.querySelector('.projects-zoom__map'),
};
const ZOOM_LABELS = {
  en: { category: 'Category', role: 'Role',     view: 'View site'    },
  de: { category: 'Kategorie', role: 'Rolle',   view: 'Live Webseite' },
};
let zoomProjectId = null;
let zoomFractal   = null;

// ── Projekt-Map (Thumbnails unten rechts) ────────────────────────────────────
function buildZoomMap() {
  zoomEls.map.innerHTML = '';
  PROJECTS.forEach((p) => {
    const li  = document.createElement('li');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('aria-current', 'false');
    const img = document.createElement('img');
    img.src = p.image;
    img.alt = p.title;
    img.loading = 'eager';
    btn.append(img);
    btn.addEventListener('click', () => { if (zoomProjectId !== p.id) switchZoom(p.id); });
    li.append(btn);
    zoomEls.map.append(li);
  });
}
buildZoomMap();

function updateZoomMap(activeId) {
  [...zoomEls.map.querySelectorAll('li')].forEach((li, i) => {
    const isActive = PROJECTS[i].id === activeId;
    li.classList.toggle('is-active', isActive);
    li.querySelector('button').setAttribute('aria-current', isActive ? 'true' : 'false');
  });
}

// ── Hilfs-Funktion: Texte im Zoom befüllen ───────────────────────────────────
function fillZoom(p) {
  zoomEls.category.textContent = p.category[lang];
  zoomEls.title.textContent    = p.title;
  zoomEls.summary.textContent  = p.summary[lang];
  zoomEls.cat.textContent      = p.category[lang];
  zoomEls.role.textContent     = p.role[lang];
  zoom.querySelector('[data-zoom-dt-category]').textContent = ZOOM_LABELS[lang].category;
  zoom.querySelector('[data-zoom-dt-role]').textContent     = ZOOM_LABELS[lang].role;
  zoomEls.link.textContent = `${ZOOM_LABELS[lang].view} ↗`;
  zoomEls.link.href = p.href;
}

// ── Zoom öffnen (GSAP Flip von der Karte aus) ────────────────────────────────
function openZoom(id, tileEl) {
  const p = byId.get(id);
  if (!p || !tileEl || zoomProjectId) return;
  zoomProjectId = id;
  gallery?.freeze(true);
  hideReadout();

  const figure = tileEl.querySelector('.projects-marquee__figure');
  const flipId = `flip-${id}`;
  figure.dataset.flipId      = flipId;
  const state = Flip.getState(figure);

  fillZoom(p);
  zoomEls.image.src              = p.image;
  zoomEls.image.dataset.flipId   = flipId;
  updateZoomMap(id);
  zoom.hidden = false;
  document.documentElement.classList.add('is-zoom-open');

  Flip.from(state, {
    targets:  zoomEls.image,
    duration: 0.92,
    ease:     'expo.inOut',
    absolute: true,
    fade:     true,
    onComplete: () => {
      delete figure.dataset.flipId;
      delete zoomEls.image.dataset.flipId;
      zoomEls.imageHost.classList.add('Oi');
      zoomFractal = mountFractalEffect(zoom);
    },
  });
  gsap.fromTo(zoom,         { backgroundColor: 'rgba(255,255,255,0)' }, { backgroundColor: '#ffffff', duration: 0.72, ease: 'power2.out' });
  gsap.from(zoom.querySelectorAll('.projects-zoom__content > *'), { autoAlpha: 0, y: 22, duration: 0.72, ease: 'power3.out', stagger: 0.035, delay: 0.18 });
}

// ── Zoom schließen ────────────────────────────────────────────────────────────
function closeZoom() {
  if (!zoomProjectId) return;
  zoomFractal?.destroy();
  zoomFractal = null;
  zoomEls.imageHost.classList.remove('Oi');

  const id     = zoomProjectId;
  const flipId = `flipback-${id}`;
  zoomEls.image.dataset.flipId = flipId;
  const state = Flip.getState(zoomEls.image);

  const figure = [...document.querySelectorAll(`.projects-marquee__figure[data-project-id="${id}"]`)]
    .map((f) => ({ f, r: f.getBoundingClientRect() }))
    .filter((o) => o.r.right > 0 && o.r.left < window.innerWidth)
    .sort((a, b) =>
      Math.abs(a.r.left + a.r.width / 2 - window.innerWidth / 2) -
      Math.abs(b.r.left + b.r.width / 2 - window.innerWidth / 2),
    )[0]?.f;

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

// ── BUG 3 FIX: Projekt im offenen Zoom wechseln ──────────────────────────────
// Das FractalEffect-Canvas liegt ALS TEXTUR über dem img. Einfach .src zu
// ändern reicht nicht — der WebGL-Kontext hat die alte Textur gecaptured.
// Lösung: Fractal destroyen → Bild tauschen + laden → Fractal neu mounten.
async function switchZoom(id) {
  const p = byId.get(id);
  if (!p) return;

  // 1. Fractal-Canvas entfernen bevor das Bild wechselt.
  if (zoomFractal) {
    zoomFractal.destroy();
    zoomFractal = null;
    zoomEls.imageHost.classList.remove('Oi');
  }

  // 2. Zoom-Inhalt ausblenden.
  const contentEls = [
    zoomEls.image,
    ...zoom.querySelectorAll('.projects-zoom__content > *'),
  ];
  await gsap.to(contentEls, { autoAlpha: 0, duration: 0.22, ease: 'power2.in' });

  // 3. Daten und Map aktualisieren.
  zoomProjectId = id;
  fillZoom(p);
  updateZoomMap(id);

  // 4. Neues Bild setzen und warten bis es geladen ist (wichtig für Fractal-Textur).
  await new Promise((resolve) => {
    zoomEls.image.onload  = resolve;
    zoomEls.image.onerror = resolve;
    zoomEls.image.src = p.image;
    // Falls das Bild bereits im Browser-Cache ist, feuert onload nicht.
    if (zoomEls.image.complete) resolve();
  });

  // 5. Fractal neu mounten (liest jetzt die neue Bild-Textur).
  zoomEls.imageHost.classList.add('Oi');
  zoomFractal = mountFractalEffect(zoom);

  // 6. Inhalt einblenden.
  gsap.to(contentEls, { autoAlpha: 1, duration: 0.38, ease: 'power2.out', stagger: 0.03 });
}

// ── Lang-Buttons im Zoom verdrahten ──────────────────────────────────────────
for (const btn of zoom.querySelectorAll('[data-lang]')) {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
}

zoom.querySelector('[data-zoom-close]').addEventListener('click', closeZoom);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeZoom(); });
