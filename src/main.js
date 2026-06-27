import gsap from 'gsap';
import Flip from 'gsap/Flip';

import { mount as mountCursor }     from './effects/custom-cursor/custom-cursor.js';
import { mount as mountPreloader }  from './effects/preloader/preloader.js';
import { mount as mountTransition } from './effects/page-transition/page-transition.js';
import { mount as mountTextReveal } from './effects/text-reveal/text-reveal.js';
import { mount as mountGallery }    from './effects/projects-gallery/projects-gallery.js';

import { PROJECTS }       from './data/projects.js';
import { createReadout }  from './ui/readout.js';
import { createLanguage } from './core/language.js';
import { createZoom }     from './core/zoom.js';
import { createRouter }   from './core/router.js';

gsap.registerPlugin(Flip);

const panels = new Map(
  [...document.querySelectorAll('[data-route-panel]')].map((el) => [el.dataset.routePanel, el]),
);

// ── Effekte starten ───────────────────────────────────────────────────────────
mountCursor(document.body);
const pageTransition = mountTransition(document.body);

// Home-Text bleibt zunächst verborgen (autoplay:false) und wird erst enthüllt,
// wenn der Loader weg ist — sonst läuft der Reveal hinter dem opaken Hero-Loader
// ab und ist nicht zu sehen.
const homeReveal = mountTextReveal(panels.get('home'), { autoplay: false });
mountPreloader(document.body, {
  heroImage: '/assets/Hero.png',        // Welle drained direkt aufs Hero-Bild
  onClose: () => homeReveal.reveal(),   // Reveal startet, sobald der Loader schließt
});

// ── Sprache + Readout ─────────────────────────────────────────────────────────
const language = createLanguage();
const readout  = createReadout(() => language.lang);

// ── Gallery VOR dem ersten Navigate aufbauen (Bilder vorladen) ────────────────
let zoom;
const gallery = mountGallery(panels.get('projects').querySelector('[data-gallery-root]'), {
  projects: PROJECTS.map((p) => ({ id: p.id, image: p.image })),
  onHover:  (id) => (id ? readout.show(id) : readout.hide()),
  onSelect: (id, el) => zoom.open(id, el),
});
gallery.freeze(true);                          // Scroll stoppen bis Projects-Panel aktiv ist

// ── Zoom + Routing verdrahten ─────────────────────────────────────────────────
zoom = createZoom({ getLang: () => language.lang, gallery, readout });
language.onChange(() => { readout.refresh(); zoom.refill(); });
createRouter({ panels, pageTransition, gallery, readout });
