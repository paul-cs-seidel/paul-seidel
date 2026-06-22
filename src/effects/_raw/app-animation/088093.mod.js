/*
 * [app-animation #88093] Modul (ohne erkannte Exporte)
 * Requires: #86051, #21768
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 88093.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
88093,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      setCacheBustingSearchParam: function () {
        return o;
      },
      setCacheBustingSearchParamWithHash: function () {
        return s;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let l = e.r(86051),
      u = e.r(21768);
    async function i(e) {
      return 'function' == typeof globalThis.crypto?.subtle?.digest
        ? (0, l.computeCacheBustingSearchParam)(
            e[u.NEXT_ROUTER_PREFETCH_HEADER],
            e[u.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER],
            e[u.NEXT_ROUTER_STATE_TREE_HEADER],
            e[u.NEXT_URL],
          )
        : (0, l.computeLegacyCacheBustingSearchParam)(
            e[u.NEXT_ROUTER_PREFETCH_HEADER],
            e[u.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER],
            e[u.NEXT_ROUTER_STATE_TREE_HEADER],
            e[u.NEXT_URL],
          );
    }
    let o = async (e, t) => {
        s(e, await i(t));
      },
      s = (e, t) => {
        let r = e.search,
          n = (r.startsWith('?') ? r.slice(1) : r)
            .split('&')
            .filter((e) => e && !e.startsWith(`${u.NEXT_RSC_UNION_QUERY}=`));
        (t.length > 0
          ? n.push(`${u.NEXT_RSC_UNION_QUERY}=${t}`)
          : n.push(`${u.NEXT_RSC_UNION_QUERY}`),
          (e.search = n.length ? `?${n.join('&')}` : ''));
      };
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  