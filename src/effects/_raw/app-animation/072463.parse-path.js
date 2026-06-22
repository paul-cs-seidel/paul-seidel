/*
 * [app-animation #72463] Modul mit 1 Export(en)
 * Exporte: parsePath
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 72463.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
72463,
  (e, t, r) => {
    'use strict';
    function n(e) {
      let t = e.indexOf('#'),
        r = e.indexOf('?'),
        n = r > -1 && (t < 0 || r < t);
      return n || t > -1
        ? {
            pathname: e.substring(0, n ? r : t),
            query: n ? e.substring(r, t > -1 ? t : void 0) : '',
            hash: t > -1 ? e.slice(t) : '',
          }
        : { pathname: e, query: '', hash: '' };
    }
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'parsePath', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
  },
  