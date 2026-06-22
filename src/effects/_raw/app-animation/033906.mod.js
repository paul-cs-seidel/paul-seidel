/*
 * [app-animation #33906] Modul (ohne erkannte Exporte)
 * Requires: #13258, #67764, #21768
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 33906.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
33906,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      doesStaticSegmentAppearInURL: function () {
        return d;
      },
      getCacheKeyForDynamicParam: function () {
        return h;
      },
      getParamValueFromCacheKey: function () {
        return y;
      },
      getRenderedPathname: function () {
        return s;
      },
      getRenderedSearch: function () {
        return o;
      },
      parseDynamicParamFromURLPart: function () {
        return f;
      },
      urlSearchParamsToParsedUrlQuery: function () {
        return _;
      },
      urlToUrlWithoutFlightMarker: function () {
        return p;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let l = e.r(13258),
      u = e.r(67764),
      i = e.r(21768);
    function o(e) {
      let t = e.headers.get(i.NEXT_REWRITTEN_QUERY_HEADER);
      return null !== t ? ('' === t ? '' : '?' + t) : p(new URL(e.url)).search;
    }
    function s(e) {
      return e.headers.get(i.NEXT_REWRITTEN_PATH_HEADER) ?? p(new URL(e.url)).pathname;
    }
    function c(e) {
      try {
        return encodeURIComponent(decodeURIComponent(e));
      } catch {
        return e;
      }
    }
    function f(e, t, r) {
      switch (e) {
        case 'c':
          return r < t.length ? t.slice(r).map((e) => c(e)) : [];
        case 'ci(..)(..)':
        case 'ci(.)':
        case 'ci(..)':
        case 'ci(...)': {
          let n = e.length - 2;
          return r < t.length ? t.slice(r).map((e, t) => (0 === t ? c(e.slice(n)) : c(e))) : [];
        }
        case 'oc':
          return r < t.length ? t.slice(r).map((e) => c(e)) : null;
        case 'd':
          if (r >= t.length) return '';
          return c(t[r]);
        case 'di(..)(..)':
        case 'di(.)':
        case 'di(..)':
        case 'di(...)': {
          let n = e.length - 2;
          if (r >= t.length) return '';
          return c(t[r].slice(n));
        }
        default:
          return '';
      }
    }
    function d(e) {
      return (
        !(
          e === u.ROOT_SEGMENT_REQUEST_KEY ||
          e.startsWith(l.PAGE_SEGMENT_KEY) ||
          ('(' === e[0] && e.endsWith(')'))
        ) &&
        e !== l.DEFAULT_SEGMENT_KEY &&
        '/_not-found' !== e
      );
    }
    function h(e, t) {
      return 'string' == typeof e
        ? (0, l.addSearchParamsIfPageSegment)(e, Object.fromEntries(new URLSearchParams(t)))
        : null === e
          ? ''
          : e.join('/');
    }
    function p(e) {
      let t = new URL(e);
      if ((t.searchParams.delete(i.NEXT_RSC_UNION_QUERY), t.pathname.endsWith('.txt'))) {
        let { pathname: e } = t,
          r = e.endsWith('/index.txt') ? 10 : 4;
        t.pathname = e.slice(0, -r);
      }
      return t;
    }
    function y(e, t) {
      return 'c' === t || 'oc' === t ? e.split('/') : e;
    }
    function _(e) {
      let t = {};
      for (let [r, n] of e.entries())
        void 0 === t[r] ? (t[r] = n) : Array.isArray(t[r]) ? t[r].push(n) : (t[r] = [t[r], n]);
      return t;
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  