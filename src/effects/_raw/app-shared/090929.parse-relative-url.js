/*
 * [app-shared #90929] Modul mit 1 Export(en)
 * Exporte: parseRelativeUrl
 * Requires: #18967, #98183
 * Quelle: site/_next/static/chunks/0dbhjjzl8qfwv.js — Turbopack-Modul 90929.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
90929,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'parseRelativeUrl', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let n = e.r(18967),
      a = e.r(98183);
    function o(e, t, r = !0) {
      let i = new URL('u' < typeof window ? 'http://n' : (0, n.getLocationOrigin)()),
        s = t
          ? new URL(t, i)
          : e.startsWith('.')
            ? new URL('u' < typeof window ? 'http://n' : window.location.href)
            : i,
        {
          pathname: l,
          searchParams: c,
          search: u,
          hash: d,
          href: f,
          origin: p,
        } = e.startsWith('/') ? new URL(`${s.protocol}//${s.host}${e}`) : new URL(e, s);
      if (p !== i.origin)
        throw Object.defineProperty(
          Error(`invariant: invalid relative URL, router received ${e}`),
          '__NEXT_ERROR_CODE',
          { value: 'E159', enumerable: !1, configurable: !0 },
        );
      return {
        auth: null,
        host: null,
        hostname: null,
        pathname: l,
        port: null,
        protocol: null,
        query: r ? (0, a.searchParamsToUrlQuery)(c) : void 0,
        search: u,
        hash: d,
        href: f.slice(p.length),
        slashes: null,
      };
    }
  },
  