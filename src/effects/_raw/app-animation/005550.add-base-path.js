/*
 * [app-animation #5550] Modul mit 1 Export(en)
 * Exporte: addBasePath
 * Requires: #41858, #82823
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 5550.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
5550,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'addBasePath', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    let n = e.r(41858),
      a = e.r(82823);
    function l(e, t) {
      return (0, a.normalizePathTrailingSlash)((0, n.addPathPrefix)(e, ''));
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  