/*
 * [app-animation #1411] Modul mit 1 Export(en)
 * Exporte: prefetch
 * Requires: #57630, #77048, #77709, #9396
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 1411.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
1411,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'prefetch', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let n = e.r(57630),
      a = e.r(77048),
      l = e.r(77709),
      u = e.r(9396);
    function i(e, t, r, i, o) {
      let s = (0, n.createPrefetchURL)(e);
      if (null === s) return;
      let c = (0, a.createCacheKey)(s.href, t);
      (0, l.schedulePrefetchTask)(c, r, i, u.PrefetchPriority.Default, o);
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  