/*
 * [app-animation #69845] Modul (ohne erkannte Exporte)
 * Requires: #88540, #60355, #20896, #84356, #95871, #79027
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 69845.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
69845,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      refreshDynamicData: function () {
        return d;
      },
      refreshReducer: function () {
        return f;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let l = e.r(88540),
      u = e.r(60355),
      i = e.r(20896),
      o = e.r(84356),
      s = e.r(95871),
      c = e.r(79027);
    function f(e, t) {
      {
        let t = e.nextUrl,
          r = e.tree;
        (0, i.invalidateSegmentCacheEntries)(t, r);
      }
      return d(e, s.FreshnessPolicy.RefreshAll);
    }
    function d(e, t) {
      (0, c.invalidateBfCache)();
      let r = e.nextUrl,
        n = (0, o.hasInterceptionRouteInCurrentTree)(e.tree) ? e.previousNextUrl || r : null,
        a = e.canonicalUrl,
        i = new URL(a, location.origin),
        s = e.renderedSearch,
        f = e.tree,
        d = l.ScrollBehavior.NoScroll,
        h = Date.now(),
        p = (0, u.convertServerPatchToFullTree)(h, f, null, s, c.UnknownDynamicStaleTime);
      return (0, u.navigateToKnownRoute)(
        h,
        e,
        i,
        a,
        p,
        i,
        s,
        e.cache,
        f,
        t,
        n,
        d,
        'replace',
        null,
        null,
      );
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  