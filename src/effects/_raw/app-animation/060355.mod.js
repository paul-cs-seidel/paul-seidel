/*
 * [app-animation #60355] Modul (ohne erkannte Exporte)
 * Requires: #87288, #95871, #51191, #63416, #20896, #96167, #77048, #77709, #9396, #91949, #88540, #34727 …
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 60355.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
60355,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      completeHardNavigation: function () {
        return P;
      },
      completeSoftNavigation: function () {
        return S;
      },
      completeTraverseNavigation: function () {
        return b;
      },
      convertServerPatchToFullTree: function () {
        return T;
      },
      navigate: function () {
        return g;
      },
      navigateToKnownRoute: function () {
        return v;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let l = e.r(87288),
      u = e.r(95871),
      i = e.r(51191),
      o = e.r(63416),
      s = e.r(20896),
      c = e.r(96167),
      f = e.r(77048);
    e.r(77709);
    let d = e.r(9396);
    e.r(91949);
    let h = e.r(88540),
      p = e.r(34727),
      y = e.r(48277),
      _ = e.r(79027);
    function g(e, t, r, n, a, l, u, i, o, c) {
      return (function (e, t, r, n, a, l, u, i, o, c) {
        let d = Date.now(),
          h = t.href,
          p = (0, f.createCacheKey)(h, u),
          y = (0, s.readRouteCacheEntry)(d, p);
        if (null !== y && y.status === s.EntryStatus.Fulfilled)
          return m(d, e, t, r, n, u, a, l, i, o, c, y);
        if (null === y || y.status !== s.EntryStatus.Rejected) {
          let f = (0, s.deprecated_requestOptimisticRouteCacheEntry)(d, t, u);
          if (null !== f) return m(d, e, t, r, n, u, a, l, i, o, c, f);
        }
        return E(d, e, t, r, n, u, a, l, i, o, c).catch(() => e);
      })(e, t, r, n, a, l, u, i, o, c);
    }
    function v(e, t, r, n, a, l, i, o, s, c, f, d, h, p, y) {
      let _ = { separateRefreshUrls: null, scrollRef: null },
        g = r.href === l.href,
        v = (0, u.startPPRNavigation)(
          e,
          l,
          i,
          o,
          s,
          a.routeTree,
          a.metadataVaryPath,
          c,
          a.data,
          a.head,
          a.dynamicStaleAt,
          g,
          _,
        );
      return null !== v
        ? (c !== u.FreshnessPolicy.Gesture && (0, u.spawnDynamicRequests)(v, r, f, c, _, y, h),
          S(t, r, f, v.route, v.node, a.renderedSearch, n, h, d, _.scrollRef, p))
        : P(t, r, h);
    }
    function m(e, t, r, n, a, l, u, i, o, s, c, f) {
      let d = f.tree,
        h = f.canonicalUrl + r.hash,
        p = {
          renderedSearch: f.renderedSearch,
          routeTree: d,
          metadataVaryPath: f.metadata.varyPath,
          data: null,
          head: null,
          dynamicStaleAt: (0, _.computeDynamicStaleAt)(e, _.UnknownDynamicStaleTime),
        };
      return v(e, t, r, h, p, n, a, u, i, o, l, s, c, null, f);
    }
    let R = ['', {}, null, 'refetch'];
    async function E(e, t, r, n, a, f, h, p, y, _, g) {
      let m;
      switch (y) {
        case u.FreshnessPolicy.Default:
        case u.FreshnessPolicy.HistoryTraversal:
        case u.FreshnessPolicy.Gesture:
          m = p;
          break;
        case u.FreshnessPolicy.Hydration:
        case u.FreshnessPolicy.RefreshAll:
        case u.FreshnessPolicy.HMRRefresh:
          m = R;
          break;
        default:
          m = p;
      }
      let E = (0, l.fetchServerResponse)(r, { flightRouterState: m, nextUrl: f }),
        S = await E;
      if ('string' == typeof S) return P(t, new URL(S, location.origin), g);
      let {
          flightData: b,
          canonicalUrl: O,
          renderedSearch: w,
          couldBeIntercepted: A,
          supportsPerSegmentPrefetching: N,
          dynamicStaleTime: C,
          staticStageData: j,
          runtimePrefetchStream: M,
          responseHeaders: I,
          debugInfo: F,
        } = S,
        D = T(e, p, b, w, C),
        U = D.metadataVaryPath;
      if (null !== U) {
        if (
          ((0, c.discoverKnownRoute)(
            e,
            r.pathname,
            f,
            null,
            D.routeTree,
            U,
            A,
            (0, i.createHrefFromUrl)(O),
            N,
            !1,
          ),
          null !== j)
        ) {
          let { response: t, isResponsePartial: r } = j;
          (0, s.getStaleAt)(e, t.s)
            .then((n) => {
              let a = I.get(o.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? t.b;
              (0, s.writeStaticStageResponseIntoCache)(e, t.f, a, t.h, n, p, w, r);
            })
            .catch(() => {});
        }
        null !== M &&
          (0, s.processRuntimePrefetchStream)(e, M, p, w)
            .then((t) => {
              null !== t &&
                (0, s.writeDynamicRenderResponseIntoCache)(
                  e,
                  d.FetchStrategy.PPRRuntime,
                  t.flightDatas,
                  t.buildId,
                  t.isResponsePartial,
                  t.headVaryParams,
                  t.staleAt,
                  t.navigationSeed,
                  null,
                );
            })
            .catch(() => {});
      }
      return v(e, t, r, (0, i.createHrefFromUrl)(O), D, n, a, h, p, y, f, _, g, F, null);
    }
    function P(e, t, r) {
      return (0, y.isJavaScriptURLString)(t.href)
        ? (console.error('Next.js has blocked a javascript: URL as a security precaution.'), e)
        : {
            canonicalUrl: t.origin === location.origin ? (0, i.createHrefFromUrl)(t) : t.href,
            pushRef: {
              pendingPush: 'push' === r,
              mpaNavigation: !0,
              preserveCustomHistoryState: !1,
            },
            renderedSearch: e.renderedSearch,
            focusAndScrollRef: e.focusAndScrollRef,
            cache: e.cache,
            tree: e.tree,
            nextUrl: e.nextUrl,
            previousNextUrl: e.previousNextUrl,
            debugInfo: null,
          };
    }
    function S(e, t, r, n, a, l, u, i, o, s, c) {
      let f,
        d,
        y = (0, p.computeChangedPath)(e.tree, n) || e.nextUrl,
        _ = new URL(e.canonicalUrl, t),
        g = t.pathname === _.pathname && t.search === _.search && t.hash !== _.hash;
      if (o === h.ScrollBehavior.NoScroll)
        (null !== s && (s.current = !1), (f = e.focusAndScrollRef.scrollRef), (d = !1));
      else if (g) {
        let t = e.focusAndScrollRef.scrollRef;
        (null !== t && (t.current = !1),
          null !== s && (s.current = !1),
          (f = { current: !0 }),
          (d = !0));
      } else {
        if (((f = s), null !== s)) {
          let t = e.focusAndScrollRef.scrollRef;
          null !== t && (t.current = !1);
        }
        d = !1;
      }
      return {
        canonicalUrl: u,
        renderedSearch: l,
        pushRef: { pendingPush: 'push' === i, mpaNavigation: !1, preserveCustomHistoryState: !1 },
        focusAndScrollRef: {
          scrollRef: f,
          forceScroll: d,
          onlyHashChange: g,
          hashFragment:
            o !== h.ScrollBehavior.NoScroll && '' !== t.hash
              ? decodeURIComponent(t.hash.slice(1))
              : e.focusAndScrollRef.hashFragment,
        },
        cache: a,
        tree: n,
        nextUrl: y,
        previousNextUrl: r,
        debugInfo: c,
      };
    }
    function b(e, t, r, n, a, l) {
      return {
        canonicalUrl: (0, i.createHrefFromUrl)(t),
        renderedSearch: r,
        pushRef: { pendingPush: !1, mpaNavigation: !1, preserveCustomHistoryState: !0 },
        focusAndScrollRef: e.focusAndScrollRef,
        cache: n,
        tree: a,
        nextUrl: l,
        previousNextUrl: null,
        debugInfo: null,
      };
    }
    function T(e, t, r, n, a) {
      let l = t,
        u = null,
        i = null;
      if (null !== r)
        for (let { segmentPath: e, tree: t, seedData: a, head: o } of r) {
          let r = (function e(t, r, n, a, l, u, i) {
            let o;
            if (i === l.length) return { tree: n, data: a };
            let s = l[i],
              c = t[1],
              f = null !== r ? r[1] : null,
              d = {},
              h = {};
            for (let t in c) {
              let r = c[t],
                o = null !== f ? (f[t] ?? null) : null;
              if (t === s) {
                let s = e(r, o, n, a, l, u, i + 2);
                ((d[t] = s.tree), (h[t] = s.data));
              } else ((d[t] = r), (h[t] = o));
            }
            if (((o = [t[0], d]), 2 in t)) {
              let e = t[2];
              null != e && (o[2] = [e[0], u]);
            }
            return (
              3 in t && (o[3] = t[3]),
              4 in t && (o[4] = t[4]),
              { tree: o, data: [null, h, null, !0, null] }
            );
          })(l, u, t, a, e, n, 0);
          ((l = r.tree), (u = r.data), (i = o));
        }
      let o = l,
        c = { metadataVaryPath: null };
      return {
        routeTree: (0, s.convertRootFlightRouterStateToRouteTree)(o, n, c),
        metadataVaryPath: c.metadataVaryPath,
        data: u,
        renderedSearch: n,
        head: i,
        dynamicStaleAt: (0, _.computeDynamicStaleAt)(e, a),
      };
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  