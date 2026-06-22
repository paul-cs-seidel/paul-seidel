/*
 * [app-shared #47257] Modul mit 1 Export(en)
 * Exporte: ClientPageRoot
 * Requires: #43476, #8372, #71645, #33906, #61994, #69882, #41489, #66996, #97689
 * Quelle: site/_next/static/chunks/0dbhjjzl8qfwv.js — Turbopack-Modul 47257.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
47257,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'ClientPageRoot', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    let n = e.r(43476),
      a = e.r(8372),
      o = e.r(71645),
      i = e.r(33906),
      s = e.r(61994);
    function l({ Component: t, serverProvidedParams: r }) {
      let c, u;
      if (null !== r) ((c = r.searchParams), (u = r.params));
      else {
        let e = (0, o.use)(a.LayoutRouterContext);
        ((u = null !== e ? e.parentParams : {}),
          (c = (0, i.urlSearchParamsToParsedUrlQuery)((0, o.use)(s.SearchParamsContext))));
      }
      if ('u' < typeof window) {
        let r,
          a,
          { createSearchParamsFromClient: o } = e.r(69882);
        r = o(c);
        let { createParamsFromClient: i } = e.r(41489);
        return ((a = i(u)), (0, n.jsx)(t, { params: a, searchParams: r }));
      }
      {
        let { createRenderSearchParamsFromClient: r } = e.r(66996),
          a = r(c),
          { createRenderParamsFromClient: o } = e.r(97689),
          i = o(u);
        return (0, n.jsx)(t, { params: i, searchParams: a });
      }
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  