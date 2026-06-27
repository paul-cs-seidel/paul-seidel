// ── Navigation zwischen den Panels (Home / Projects / About / Contact) ────────
import { mount as mountTextReveal } from '../effects/text-reveal/text-reveal.js';

export function createRouter({ panels, pageTransition, gallery, readout }) {
  const persistent = document.querySelector('.persistent-experience');
  const navLinks   = [...document.querySelectorAll('.site-nav a[data-route]')];

  let currentRoute = 'home';
  let busy = false;

  async function navigate(route) {
    if (busy || route === currentRoute || !panels.has(route)) return;
    busy = true;
    readout.hide();

    const leavingProjects  = currentRoute === 'projects';
    const enteringProjects = route === 'projects';

    // Snapshot des aktuellen Panels als Übergangsbild klonen.
    const snapshot = panels.get(currentRoute).cloneNode(true);
    snapshot.hidden = false;
    snapshot.removeAttribute('data-route-panel');
    Object.assign(snapshot.style, { position: 'absolute', inset: '0', opacity: '1' });

    // Controller für den Text-Reveal des Zielpanels direkt aufheben,
    // damit onContentReveal ihn ohne Map-Lookup sicher ansprechen kann.
    let pendingReveal = null;

    await pageTransition.transition({
      snapshot,

      // t = 0 (Wischer beginnt): DOM-Swap + Texte verstecken.
      onReveal: () => {
        // Beim Verlassen von Projects Cards sofort zurücksetzen,
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

        // Text-Reveal mit autoplay:false mounten → Texte werden sofort durch
        // gsap.set() unsichtbar gemacht. reveal() folgt in onContentReveal.
        pendingReveal = mountTextReveal(next, { autoplay: false });
      },

      // t = 1.55 s (contentRevealAt): Text-Reveal + Gallery-Enter gleichzeitig
      // starten — mitten im Wischer, bevor er endet (t ≈ 1.95 s).
      onContentReveal: () => {
        pendingReveal?.reveal();
        pendingReveal = null;

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

  return { navigate };
}
