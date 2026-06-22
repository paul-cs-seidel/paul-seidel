/*
 * [app-animation #51191] Modul mit 1 Export(en)
 * Exporte: createHrefFromUrl
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 51191.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
51191,
  (e, t, r) => {
    'use strict';
    function n(e, t = !0) {
      return e.pathname + e.search + (t ? e.hash : '');
    }
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'createHrefFromUrl', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default)));
  },
  