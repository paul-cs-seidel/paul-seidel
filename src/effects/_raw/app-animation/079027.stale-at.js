/*
 * [app-animation #79027] Modul mit 1 Export(en)
 * Exporte: staleAt
 * Requires: #54069, #511
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 79027.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
79027,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      UnknownDynamicStaleTime: function () {
        return i;
      },
      computeDynamicStaleAt: function () {
        return o;
      },
      invalidateBfCache: function () {
        return f;
      },
      readFromBFCache: function () {
        return y;
      },
      readFromBFCacheDuringRegularNavigation: function () {
        return _;
      },
      updateBFCacheEntryStaleAt: function () {
        return p;
      },
      writeHeadToBFCache: function () {
        return h;
      },
      writeToBFCache: function () {
        return d;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let l = e.r(54069),
      u = e.r(511),
      i = -1;
    function o(e, t) {
      return t !== i ? e + 1e3 * t : e + l.DYNAMIC_STALETIME_MS;
    }
    let s = (0, u.createCacheMap)(),
      c = 0;
    function f() {
      'u' > typeof window && c++;
    }
    function d(e, t, r, n, a, l, i) {
      if ('u' < typeof window) return;
      let o = {
        rsc: r,
        prefetchRsc: n,
        head: a,
        prefetchHead: l,
        ref: null,
        size: 100,
        navigatedAt: e,
        staleAt: i,
        version: c,
      };
      (0, u.setInCacheMap)(s, t, o, !1);
    }
    function h(e, t, r, n, a) {
      d(e, t, r, n, null, null, a);
    }
    function p(e, t) {
      if ('u' < typeof window) return;
      let r = (0, u.getFromCacheMap)(-1, c, s, e, !1);
      null !== r && (r.staleAt = t);
    }
    function y(e) {
      return 'u' < typeof window ? null : (0, u.getFromCacheMap)(-1, c, s, e, !1);
    }
    function _(e, t) {
      return 'u' < typeof window ? null : (0, u.getFromCacheMap)(e, c, s, t, !1);
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  