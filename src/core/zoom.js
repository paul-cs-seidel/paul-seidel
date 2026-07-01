// ── Zoom-Overlay (GSAP Flip + WebGL-Fractal auf dem Detailbild) ───────────────
import gsap from 'gsap';
import Flip from 'gsap/Flip';

import { PROJECTS, byId } from '../data/projects.js';
import { mount as mountFractalEffect } from '../effects/fractal-effect/fractal-effect.js';

const ZOOM_LABELS = {
  en: { category: 'Category', role: 'Role', view: 'View site' },
  de: { category: 'Kategorie', role: 'Rolle', view: 'Live Webseite' },
};

export function createZoom({ getLang, gallery, readout }) {
  // DOM-Reihenfolge: Image VOR Content → auf Mobil (display:block) Bild oben.
  const zoom = document.createElement('div');
  zoom.className = 'projects-zoom';
  zoom.hidden = true;
  zoom.innerHTML = `
    <div class="projects-zoom__header">
      <div class="header__left">
        <button class="back-circle-control" type="button" data-zoom-close aria-label="Close">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 L8 12 L15 19"/></svg>
        </button>
        <div class="lang-toggle" aria-label="Language">
          <button type="button" data-lang="en" aria-pressed="true">EN</button>
          <button type="button" data-lang="de" aria-pressed="false">DE</button>
        </div>
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

  const els = {
    imageHost: zoom.querySelector('.projects-zoom__image'),
    image: zoom.querySelector('[data-zoom-image]'),
    category: zoom.querySelector('[data-zoom-category]'),
    title: zoom.querySelector('[data-zoom-title]'),
    summary: zoom.querySelector('[data-zoom-summary]'),
    cat: zoom.querySelector('[data-zoom-cat]'),
    role: zoom.querySelector('[data-zoom-role]'),
    link: zoom.querySelector('[data-zoom-link]'),
    map: zoom.querySelector('.projects-zoom__map'),
  };

  let currentId = null;
  let fractal = null;

  // ── Projekt-Map (Thumbnails unten rechts) ──────────────────────────────────
  function buildMap() {
    els.map.innerHTML = '';
    PROJECTS.forEach((p) => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('aria-current', 'false');
      const img = document.createElement('img');
      img.src = p.image;
      img.alt = p.title;
      img.loading = 'eager';
      btn.append(img);
      btn.addEventListener('click', () => {
        if (currentId !== p.id) switchTo(p.id);
      });
      li.append(btn);
      els.map.append(li);
    });
  }
  buildMap();

  function updateMap(activeId) {
    [...els.map.querySelectorAll('li')].forEach((li, i) => {
      const isActive = PROJECTS[i].id === activeId;
      li.classList.toggle('is-active', isActive);
      li.querySelector('button').setAttribute('aria-current', isActive ? 'true' : 'false');
    });
  }

  // ── Texte im Zoom befüllen ─────────────────────────────────────────────────
  function fill(p) {
    const lang = getLang();
    els.category.textContent = p.category[lang];
    els.title.textContent = p.title;
    els.summary.textContent = p.summary[lang];
    els.cat.textContent = p.category[lang];
    els.role.textContent = p.role[lang];
    zoom.querySelector('[data-zoom-dt-category]').textContent = ZOOM_LABELS[lang].category;
    zoom.querySelector('[data-zoom-dt-role]').textContent = ZOOM_LABELS[lang].role;
    els.link.innerHTML = `${ZOOM_LABELS[lang].view}<svg class="link-arrow" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 12 L12 4 M4.5 4 H12 V11.5"/></svg>`;
    els.link.href = p.href;
  }

  // ── Zoom öffnen (GSAP Flip von der Karte aus) ──────────────────────────────
  function open(id, tileEl) {
    const p = byId.get(id);
    if (!p || !tileEl || currentId) return;
    currentId = id;
    gallery?.freeze(true);
    readout.hide();

    const figure = tileEl.querySelector('.projects-marquee__figure');
    const flipId = `flip-${id}`;
    figure.dataset.flipId = flipId;
    const state = Flip.getState(figure);

    fill(p);
    els.image.src = p.image;
    els.image.dataset.flipId = flipId;
    updateMap(id);
    zoom.hidden = false;
    document.documentElement.classList.add('is-zoom-open');

    Flip.from(state, {
      targets: els.image,
      duration: 0.92,
      ease: 'expo.inOut',
      absolute: true,
      fade: true,
      onComplete: () => {
        delete figure.dataset.flipId;
        delete els.image.dataset.flipId;
        els.imageHost.classList.add('Oi');
        fractal = mountFractalEffect(zoom);
      },
    });
    gsap.fromTo(
      zoom,
      { backgroundColor: 'rgba(255,255,255,0)' },
      { backgroundColor: '#ffffff', duration: 0.72, ease: 'power2.out' },
    );
    gsap.from(zoom.querySelectorAll('.projects-zoom__content > *'), {
      autoAlpha: 0,
      y: 22,
      duration: 0.72,
      ease: 'power3.out',
      stagger: 0.035,
      delay: 0.18,
    });
  }

  // ── Zoom schließen ─────────────────────────────────────────────────────────
  function close() {
    if (!currentId) return;
    fractal?.destroy();
    fractal = null;
    els.imageHost.classList.remove('Oi');

    const id = currentId;
    const flipId = `flipback-${id}`;
    els.image.dataset.flipId = flipId;
    const state = Flip.getState(els.image);

    const figure = [
      ...document.querySelectorAll(`.projects-marquee__figure[data-project-id="${id}"]`),
    ]
      .map((f) => ({ f, r: f.getBoundingClientRect() }))
      .filter((o) => o.r.right > 0 && o.r.left < window.innerWidth)
      .sort(
        (a, b) =>
          Math.abs(a.r.left + a.r.width / 2 - window.innerWidth / 2) -
          Math.abs(b.r.left + b.r.width / 2 - window.innerWidth / 2),
      )[0]?.f;

    if (figure) figure.dataset.flipId = flipId;
    zoom.hidden = true;
    document.documentElement.classList.remove('is-zoom-open');

    const finish = () => {
      if (figure) delete figure.dataset.flipId;
      delete els.image.dataset.flipId;
      currentId = null;
      gallery?.freeze(false);
    };
    if (figure) {
      Flip.from(state, {
        targets: figure,
        duration: 0.78,
        ease: 'expo.inOut',
        absolute: true,
        fade: true,
        onComplete: finish,
      });
    } else {
      finish();
    }
  }

  // ── Projekt im offenen Zoom wechseln ───────────────────────────────────────
  // Das Fractal-Canvas liegt ALS TEXTUR über dem img. Einfach .src zu ändern
  // reicht nicht — der WebGL-Kontext hat die alte Textur gecaptured. Lösung:
  // Fractal destroyen → Bild tauschen + laden → Fractal neu mounten.
  async function switchTo(id) {
    const p = byId.get(id);
    if (!p) return;

    // 1. Fractal-Canvas entfernen bevor das Bild wechselt.
    if (fractal) {
      fractal.destroy();
      fractal = null;
      els.imageHost.classList.remove('Oi');
    }

    // 2. Zoom-Inhalt ausblenden.
    const contentEls = [els.image, ...zoom.querySelectorAll('.projects-zoom__content > *')];
    await gsap.to(contentEls, { autoAlpha: 0, duration: 0.22, ease: 'power2.in' });

    // 3. Daten und Map aktualisieren.
    currentId = id;
    fill(p);
    updateMap(id);

    // 4. Neues Bild setzen und warten bis es geladen ist (wichtig für Fractal-Textur).
    await new Promise((resolve) => {
      els.image.onload = resolve;
      els.image.onerror = resolve;
      els.image.src = p.image;
      // Falls das Bild bereits im Browser-Cache ist, feuert onload nicht.
      if (els.image.complete) resolve();
    });

    // 5. Fractal neu mounten (liest jetzt die neue Bild-Textur).
    els.imageHost.classList.add('Oi');
    fractal = mountFractalEffect(zoom);

    // 6. Inhalt einblenden.
    gsap.to(contentEls, { autoAlpha: 1, duration: 0.38, ease: 'power2.out', stagger: 0.03 });
  }

  // Bei Sprachwechsel den offenen Zoom neu befüllen.
  function refill() {
    if (currentId) fill(byId.get(currentId));
  }

  zoom.querySelector('[data-zoom-close]').addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  return { open, refill };
}
