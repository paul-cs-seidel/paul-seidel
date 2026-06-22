/*
 * [app-shared #91915] Modul mit 1 Export(en)
 * Exporte: disableSmoothScrollDuringRouteTransition
 * Requires: #33525
 * Quelle: site/_next/static/chunks/0dbhjjzl8qfwv.js — Turbopack-Modul 91915.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
91915,
  (e, t, r) => {
    'use strict';
    function n(e, t = {}) {
      if (t.onlyHashChange) return void e();
      let r = document.documentElement;
      if ('smooth' !== r.dataset.scrollBehavior) return void e();
      let a = r.style.scrollBehavior;
      ((r.style.scrollBehavior = 'auto'),
        t.dontForceLayout || r.getClientRects(),
        e(),
        (r.style.scrollBehavior = a));
    }
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'disableSmoothScrollDuringRouteTransition', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      e.r(33525));
  },
  