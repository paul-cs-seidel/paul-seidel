/*
 * [app-shared #92825] Modul mit 1 Export(en)
 * Exporte: ClientSegmentRoot
 * Requires: #43476, #8372, #71645, #41489, #97689
 * Quelle: site/_next/static/chunks/0dbhjjzl8qfwv.js — Turbopack-Modul 92825.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
92825,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'ClientSegmentRoot', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let n = e.r(43476),
      a = e.r(8372),
      o = e.r(71645);
    function i({ Component: t, slots: r, serverProvidedParams: s }) {
      let l;
      if (null !== s) l = s.params;
      else {
        let e = (0, o.use)(a.LayoutRouterContext);
        l = null !== e ? e.parentParams : {};
      }
      if ('u' < typeof window) {
        let { createParamsFromClient: a } = e.r(41489),
          o = a(l);
        return (0, n.jsx)(t, { ...r, params: o });
      }
      {
        let { createRenderParamsFromClient: a } = e.r(97689),
          o = a(l);
        return (0, n.jsx)(t, { ...r, params: o });
      }
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  