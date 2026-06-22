/*
 * [app-animation #39584] Modul mit 1 Export(en)
 * Exporte: pathHasPrefix
 * Requires: #72463
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 39584.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
39584,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'pathHasPrefix', {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let n = e.r(72463);
    function a(e, t) {
      if ('string' != typeof e) return !1;
      let { pathname: r } = (0, n.parsePath)(e);
      return r === t || r.startsWith(t + '/');
    }
  },
  