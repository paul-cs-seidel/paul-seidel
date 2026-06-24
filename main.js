import gsap from 'gsap';
import Flip from 'gsap/Flip';

import { mount as mountCursor }       from './effects/custom-cursor/custom-cursor.js';
import { mount as mountPreloader }     from './effects/preloader/preloader.js';
import { mount as mountTransition }    from './effects/page-transition/page-transition.js';
import { mount as mountTextReveal }    from './effects/text-reveal/text-reveal.js';
import { mount as mountGallery }       from './effects/projects-gallery/projects-gallery.js';
import { mount as mountFractalEffect } from './effects/fractalEffect/fractalEffect.js';
import { mount as mountHeroGlass }    from './effects/fractalEffect/heroGlassEffect.js';

gsap.registerPlugin(Flip);

// ── Projektdaten ─────────────────────────────────────────────────────────────
const PROJECTS = [
  { id: 'noart',          title: 'NoArt.',             category: { en: 'Web site',  de: 'Webseite'  }, role: { en: 'DESIGN | FRONT-END DEVELOPMENT | CSS FOCUS',           de: 'DESIGN | FRONT-END ENTWICKLUNG | CSS FOKUS'           }, summary: { en: 'Minimalist art portfolio with 3D-textured paintings, a dark/light theme toggle, parallax scroll animations, and a contact form — built with pure HTML, CSS & Vanilla JS, no frameworks.',   de: 'Minimalistisches Kunstportfolio mit 3D-texturierten Gemälden, Dark/Light-Theme, Parallax-Scroll-Animationen und Kontaktformular – reines HTML, CSS & Vanilla JS, ohne Frameworks.'    }, href: 'https://paul-cs-seidel.github.io/NoArt./',       image: '/assets/projects/noart.png'        },
  { id: 'siderun',        title: 'SIDERUN',            category: { en: 'Demo site', de: 'Demoseite' }, role: { en: 'FUNCTION | FRONT-END DEVELOPMENT | JAVASCRIPT',        de: 'FUNCTION | FRONT-END ENTWICKLUNG | JAVASCRIPT'        }, summary: { en: 'Lightweight JS & CSS library (~5 KB) that adds an animated flying-border effect to any element. Zero dependencies, GPU-accelerated 60 fps — ideal for navbars, buttons, and cards.', de: 'Schlanke JS & CSS Bibliothek (~5 KB) für animierte Laufrahmen-Effekte auf beliebigen Elementen. Keine Abhängigkeiten, GPU-beschleunigt mit 60 fps – ideal für Navbars, Buttons und Cards.'  }, href: 'https://paul-cs-seidel.github.io/SideRun/',      image: '/assets/projects/siderun.png'      },
  { id: 'portfolio_2026', title: 'Portfolio 2026',     category: { en: 'Web site',  de: 'Webseite'  }, role: { en: 'DESIGN | FRONT-END DEVELOPMENT | ANIMATION',          de: 'DESIGN | FRONT-END ENTWICKLUNG | ANIMATION'           }, summary: { en: 'An earlier portfolio prototype exploring WebGL canvas effects, GSAP-powered scroll animations, and 3D motion design — a creative playground for advanced frontend techniques.',        de: 'Früherer Portfolio-Prototyp mit WebGL-Canvas-Effekten, GSAP-Scroll-Animationen und 3D-Motion-Design – ein kreatives Spielfeld für fortgeschrittene Frontend-Techniken.'            }, href: 'https://paul-seidel.pages.dev',                  image: '/assets/Hero.png'                  },
  { id: 'aurascent',      title: 'AuraScent',          category: { en: 'Web site',  de: 'Webseite'  }, role: { en: 'DESIGN | FRONT-END DEVELOPMENT | BACKEND DEVELOPMENT', de: 'DESIGN | FRONT-END ENTWICKLUNG | BACKEND ENTWICKLUNG' }, summary: { en: 'Full-stack perfume e-commerce with Node.js, Express & SQLite — 80+ products in 10 categories, real-time search, session cart, wishlist, auth with rate-limiting, and an admin panel.',  de: 'Fullstack-Parfüm-Shop mit Node.js, Express & SQLite – 80+ Produkte in 10 Kategorien, Echtzeitsuche, Session-Warenkorb, Wunschliste, Login mit Rate-Limiting und Admin-Panel.'         }, href: 'https://aurascent-3b4i.onrender.com',            image: '/assets/projects/aurascent.png'    },
  { id: 'kernwerksystems', title: 'Kernwerk Systems',  category: { en: 'Web site',  de: 'Webseite'  }, role: { en: 'DESIGN | FRONT-END DEVELOPMENT | WORDPRESS STYLE',     de: 'DESIGN | FRONT-END ENTWICKLUNG | WORDPRESS STIL'      }, summary: { en: 'Concept website for a fictional systems company — smooth scroll-based navigation, motion-driven project browsing, and a WordPress-inspired editorial layout.',                         de: 'Konzeptwebsite für ein fiktives Systemunternehmen – flüssige Scroll-Navigation, animiertes Projekt-Browsing und ein WordPress-inspiriertes redaktionelles Layout.'                  }, href: 'https://kernwerk-systems.pages.dev',             image: '/assets/projects/kernwerksystems.png'},
  { id: 'mensuratemporis', title: 'Mensura Temporis',  category: { en: 'Demo site', de: 'Demoseite' }, role: { en: 'DESIGN | FRONT-END DEVELOPMENT | APP STYLE',           de: 'DESIGN | FRONT-END ENTWICKLUNG | APP STIL'            }, summary: { en: 'A 2022 portfolio site built with an app-style layout — an early exploration of single-page design, custom routing, and responsive component-based architecture.',                   de: '2022 entstandene Portfolio-Seite im App-Stil – eine frühe Erkundung von Single-Page-Designs, eigener Navigation und komponentenbasierter Responsive-Architektur.'                      }, href: 'https://mensura-temporis.pages.dev',             image: '/assets/projects/mensuratemporis.png'},
  { id: 'ihkap1',         title: 'IHK AP 1 Lernseite', category: { en: 'Web site', de: 'Webseite'  }, role: { en: 'STUDYING | KNOWLEDGE | LOCAL STORAGE SYSTEM',          de: 'LERNEN | WISSENSÜBERMITTLUNG | LOKALES SPEICHERSYSTEM'}, summary: { en: 'Interactive study site for the German IHK AP1 exam — covering networks, databases, project management, IT security, and more. Includes self-tests, a countdown timer, and localStorage checklists.', de: 'Interaktive Lernseite für die IHK-Abschlussprüfung Teil 1 – Netzwerke, Datenbanken, Projektmanagement, IT-Sicherheit u. v. m. Mit Selbsttests, Prüfungs-Countdown und localStorage-Checklisten.'}, href: 'https://paul-cs-seidel.github.io/IHK-Lernseite/', image: '/assets/projects/ihkap1.png'      }
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

// Hero-Glas-Effekt auf der Home-Sektion
const heroSection = panels.get('home').querySelector('.hero-section');
if (heroSection) mountHeroGlass(heroSection);

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