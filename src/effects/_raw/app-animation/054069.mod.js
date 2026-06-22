/*
 * [app-animation #54069] Modul (ohne erkannte Exporte)
 * Requires: #60355, #20896, #95871
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 54069.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
54069,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      DYNAMIC_STALETIME_MS: function () {
        return o;
      },
      STATIC_STALETIME_MS: function () {
        return s;
      },
      navigateReducer: function () {
        return c;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let l = e.r(60355),
      u = e.r(20896),
      i = e.r(95871),
      o = 1e3 * Number('0'),
      s = (0, u.getStaleTimeMs)(Number('300'));
    function c(e, t) {
      let { url: r, isExternalUrl: n, navigateType: a, scrollBehavior: u } = t;
      if (n || document.getElementById('__next-page-redirect'))
        return (0, l.completeHardNavigation)(e, r, a);
      let o = new URL(e.canonicalUrl, location.origin),
        s = e.renderedSearch;
      return (0, l.navigate)(
        e,
        r,
        o,
        s,
        e.cache,
        e.tree,
        e.nextUrl,
        i.FreshnessPolicy.Default,
        u,
        a,
      );
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  