/*
 * [app-animation #91668] Modul mit 1 Export(en)
 * Exporte: serverPatchReducer
 * Requires: #51191, #88540, #60355, #69845, #95871
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 91668.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
91668,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'serverPatchReducer', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let n = e.r(51191),
      a = e.r(88540),
      l = e.r(60355),
      u = e.r(69845),
      i = e.r(95871);
    function o(e, t) {
      let r = t.mpa,
        o = new URL(t.url, location.origin),
        s = t.seed,
        c = t.navigateType;
      if (r || null === s) return (0, l.completeHardNavigation)(e, o, c);
      let f = new URL(e.canonicalUrl, location.origin),
        d = e.renderedSearch;
      if (t.previousTree !== e.tree) return (0, u.refreshReducer)(e, { type: a.ACTION_REFRESH });
      let h = (0, n.createHrefFromUrl)(o),
        p = t.nextUrl,
        y = a.ScrollBehavior.Default,
        _ = Date.now();
      return (0, l.navigateToKnownRoute)(
        _,
        e,
        o,
        h,
        s,
        f,
        d,
        e.cache,
        e.tree,
        i.FreshnessPolicy.RefreshAll,
        p,
        y,
        c,
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
  