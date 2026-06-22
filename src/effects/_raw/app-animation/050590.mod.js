/*
 * [app-animation #50590] Modul (ohne erkannte Exporte)
 * Requires: #13258, #33906, #51191
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 50590.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
50590,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      createInitialRSCPayloadFromFallbackPrerender: function () {
        return s;
      },
      getFlightDataPartsFromPath: function () {
        return o;
      },
      getNextFlightSegmentPath: function () {
        return c;
      },
      normalizeFlightData: function () {
        return f;
      },
      prepareFlightRouterStateForRequest: function () {
        return d;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let l = e.r(13258),
      u = e.r(33906),
      i = e.r(51191);
    function o(e) {
      let [t, r, n, a] = e.slice(-4),
        l = e.slice(0, -4);
      return {
        pathToSegment: l.slice(0, -1),
        segmentPath: l,
        segment: l[l.length - 1] ?? '',
        tree: t,
        seedData: r,
        head: n,
        isHeadPartial: a,
        isRootRender: 4 === e.length,
      };
    }
    function s(e, t) {
      let r = (0, u.getRenderedPathname)(e),
        n = (0, u.getRenderedSearch)(e),
        a = (0, i.createHrefFromUrl)(new URL(location.href)),
        l = t.f[0],
        o = l[0],
        s = {
          c: a.split('/'),
          q: n,
          i: t.i,
          f: [
            [
              (function e(t, r, n, a) {
                let l,
                  i,
                  o = t[0];
                if ('string' == typeof o) ((l = o), (i = (0, u.doesStaticSegmentAppearInURL)(o)));
                else {
                  let e = o[0],
                    t = o[2],
                    s = o[3],
                    c = (0, u.parseDynamicParamFromURLPart)(t, n, a);
                  ((l = [e, (0, u.getCacheKeyForDynamicParam)(c, r), t, s]), (i = !0));
                }
                let s = i ? a + 1 : a,
                  c = t[1],
                  f = {};
                for (let t in c) {
                  let a = c[t];
                  f[t] = e(a, r, n, s);
                }
                return [l, f, null, t[3], t[4]];
              })(
                o,
                n,
                r.split('/').filter((e) => '' !== e),
                0,
              ),
              l[1],
              l[2],
              l[2],
            ],
          ],
          m: t.m,
          G: t.G,
          S: t.S,
          h: t.h,
        };
      return (t.b && (s.b = t.b), s);
    }
    function c(e) {
      return e.slice(2);
    }
    function f(e) {
      return 'string' == typeof e ? e : e.map((e) => o(e));
    }
    function d(e, t) {
      return t
        ? encodeURIComponent(JSON.stringify(e))
        : encodeURIComponent(
            JSON.stringify(
              (function e(t) {
                let [r, n, a, u, i] = t,
                  o = (function (e) {
                    if ('string' == typeof e)
                      return e.startsWith(l.PAGE_SEGMENT_KEY + '?') ? l.PAGE_SEGMENT_KEY : e;
                    let [t, r, n] = e;
                    return [t, r, n, null];
                  })(r),
                  s = {};
                for (let [t, r] of Object.entries(n)) s[t] = e(r);
                let c = [o, s];
                return (u && ((c[2] = null), (c[3] = u)), void 0 !== i && (c[4] = i), c);
              })(e),
            ),
          );
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  