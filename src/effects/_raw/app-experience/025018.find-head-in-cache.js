/*
 * [app-experience #25018] Modul mit 1 Export(en)
 * Exporte: findHeadInCache
 * Requires: #13258, #70725
 * Quelle: site/_next/static/chunks/07lhk_q6pmm3r.js — Turbopack-Modul 25018.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
25018,
  (e, t, n) => {
    'use strict';
    (Object.defineProperty(n, '__esModule', { value: !0 }),
      Object.defineProperty(n, 'findHeadInCache', {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let r = e.r(13258),
      l = e.r(70725);
    function a(e, t) {
      return (function e(t, n, a, o) {
        if (0 === Object.keys(n).length) return [t, a, o];
        let i = Object.keys(n).filter((e) => 'children' !== e);
        'children' in n && i.unshift('children');
        let u = t.slots;
        if (null !== u)
          for (let t of i) {
            let [o, i] = n[t];
            if (o === r.DEFAULT_SEGMENT_KEY) continue;
            let s = u[t];
            if (!s) continue;
            let c = e(
              s,
              i,
              a + '/' + (0, l.createRouterCacheKey)(o),
              a + '/' + (0, l.createRouterCacheKey)(o, !0),
            );
            if (c) return c;
          }
        return null;
      })(e, t, '', '');
    }
    ('function' == typeof n.default || ('object' == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, '__esModule', { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
  