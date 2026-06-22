/*
 * [app-animation #70725] Modul mit 1 Export(en)
 * Exporte: createRouterCacheKey
 * Requires: #13258
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 70725.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
70725,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'createRouterCacheKey', {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let n = e.r(13258);
    function a(e, t = !1) {
      return Array.isArray(e)
        ? `${e[0]}|${e[1]}|${e[2]}`
        : t && e.startsWith(n.PAGE_SEGMENT_KEY)
          ? n.PAGE_SEGMENT_KEY
          : e;
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  