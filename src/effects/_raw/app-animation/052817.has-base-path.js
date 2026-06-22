/*
 * [app-animation #52817] Modul mit 1 Export(en)
 * Exporte: hasBasePath
 * Requires: #39584
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 52817.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
52817,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'hasBasePath', {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let n = e.r(39584);
    function a(e) {
      return (0, n.pathHasPrefix)(e, '');
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  