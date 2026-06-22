/*
 * [app-animation #95871] Modul mit 1 Export(en)
 * Exporte: scrollRef
 * Requires: #22744, #13258, #56019, #51191, #87288, #41538, #88540, #48919, #94272, #60355, #20896, #9396 …
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 95871.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
95871,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n,
      a = {
        FreshnessPolicy: function () {
          return P;
        },
        createInitialCacheNodeForHydration: function () {
          return b;
        },
        isDeferredRsc: function () {
          return x;
        },
        spawnDynamicRequests: function () {
          return I;
        },
        startPPRNavigation: function () {
          return T;
        },
      };
    for (var l in a) Object.defineProperty(r, l, { enumerable: !0, get: a[l] });
    let u = e.r(22744),
      i = e.r(13258),
      o = e.r(56019),
      s = e.r(51191),
      c = e.r(87288),
      f = e.r(41538),
      d = e.r(88540),
      h = e.r(48919),
      p = e.r(94272),
      y = e.r(60355),
      _ = e.r(20896),
      g = e.r(9396),
      v = e.r(96167),
      m = e.r(63416),
      R = e.r(56655),
      E = e.r(79027);
    var P =
      (((n = {})[(n.Default = 0)] = 'Default'),
      (n[(n.Hydration = 1)] = 'Hydration'),
      (n[(n.HistoryTraversal = 2)] = 'HistoryTraversal'),
      (n[(n.RefreshAll = 3)] = 'RefreshAll'),
      (n[(n.HMRRefresh = 4)] = 'HMRRefresh'),
      (n[(n.Gesture = 5)] = 'Gesture'),
      n);
    let S = () => {};
    function b(e, t, r, n, a) {
      return O(e, t, null, 1, r, n, a, !1, { separateRefreshUrls: null, scrollRef: null });
    }
    function T(e, t, r, n, a, l, c, f, d, p, y, g, v) {
      let m = { canonicalUrl: (0, s.createHrefFromUrl)(t), renderedSearch: r };
      return (function e(t, r, n, a, l, s, c, f, d, p, y, g, v, m, R, E) {
        var P, S, b;
        let T,
          A,
          M,
          I,
          F = a[0],
          D = w(l);
        if (!(0, o.matchSegment)(D, F))
          return (!f && (0, h.isNavigatingToNewRootLayout)(a, l)) || D === i.NOT_FOUND_SEGMENT_KEY
            ? null
            : O(t, l, s, c, d, p, y, v, E);
        let U = l.slots,
          L = a[1],
          x = null !== d ? d[1] : null,
          k = f || (l.prefetchHints & u.PrefetchHint.IsRootLayout) != 0,
          H = !1;
        switch (c) {
          case 0:
          case 2:
          case 1:
          case 5:
            H = !1;
            break;
          case 3:
          case 4:
            H = !0;
        }
        let B = null === U;
        if (void 0 === n || H || (B && g)) {
          let e = C(t, l, null !== d ? d[0] : null, s, p, c, y);
          ((M = e.cacheNode),
            (I = e.needsDynamicRequest),
            void 0 !== n && (M.scrollRef = n.scrollRef));
        } else {
          ((P = !1),
            (M = j(
              (S = n).rsc,
              P ? null : S.prefetchRsc,
              S.head,
              P ? null : S.prefetchHead,
              S.scrollRef,
            )),
            (I = !1));
        }
        let V = l.refreshState,
          $ = null != V ? V : R;
        I &&
          null !== $ &&
          ((b = E),
          (T = $.canonicalUrl),
          null === (A = b.separateRefreshUrls) ? (b.separateRefreshUrls = new Set([T])) : A.add(T));
        let K = {},
          X = null,
          G = !1,
          Y = {},
          q = null;
        if (null !== U) {
          let a = void 0 !== n ? n.slots : null;
          for (let n in ((M.slots = q = {}), (X = new Map()), U)) {
            let u = U[n],
              o = L[n];
            if (void 0 === o) return null;
            let f = null !== x ? x[n] : null,
              d = o[0],
              h = w(u),
              R = p;
            2 !== c &&
              h === i.DEFAULT_SEGMENT_KEY &&
              d !== i.DEFAULT_SEGMENT_KEY &&
              ((h = w(
                (u = (function (e, t, r, n) {
                  let a,
                    l,
                    u = n[2];
                  null != u
                    ? ((a = u[0]), (l = u[1]))
                    : ((a = r.canonicalUrl), (l = r.renderedSearch));
                  let i = (0, _.convertReusedFlightRouterStateToRouteTree)(e, t, n, l, {
                    metadataVaryPath: null,
                  });
                  return ((i.refreshState = { canonicalUrl: a, renderedSearch: l }), i);
                })(l, n, m, o)),
              )),
              (f = null),
              (R = null));
            let P = e(
              t,
              r,
              null !== a ? a[n] : void 0,
              o,
              u,
              s,
              c,
              k,
              f ?? null,
              R,
              y,
              g,
              v || I,
              m,
              $,
              E,
            );
            if (null === P) return null;
            (X.set(n, P), (q[n] = P.node));
            let S = P.route;
            K[n] = S;
            let b = P.dynamicRequestTree;
            null !== b ? ((G = !0), (Y[n] = b)) : (Y[n] = S);
          }
        }
        let W = [
          w(l),
          K,
          null !== $ ? [$.canonicalUrl, $.renderedSearch] : null,
          null,
          l.prefetchHints,
        ];
        return {
          status: +!I,
          route: W,
          node: M,
          dynamicRequestTree: N(W, Y, I, G, v),
          refreshState: $,
          children: X,
        };
      })(e, t, null !== n ? n : void 0, a, l, c, f, !1, d, p, y, g, !1, m, null, v);
    }
    function O(e, t, r, n, a, l, u, i, o) {
      let s = w(t),
        c = t.slots,
        f = null !== a ? a[1] : null,
        d = C(e, t, null !== a ? a[0] : null, r, l, n, u),
        h = d.cacheNode,
        p = d.needsDynamicRequest;
      null === c &&
        (function (e, t, r) {
          switch (e) {
            case 0:
            case 5:
            case 3:
            case 4:
              (null === r.scrollRef && (r.scrollRef = { current: !0 }),
                (t.scrollRef = r.scrollRef));
          }
        })(n, h, o);
      let y = {},
        _ = null,
        g = !1,
        v = {},
        m = null;
      if (null !== c)
        for (let t in ((h.slots = m = {}), (_ = new Map()), c)) {
          let a = O(e, c[t], r, n, (null !== f ? f[t] : null) ?? null, l, u, i || p, o);
          (_.set(t, a), (m[t] = a.node));
          let s = a.route;
          y[t] = s;
          let d = a.dynamicRequestTree;
          null !== d ? ((g = !0), (v[t] = d)) : (v[t] = s);
        }
      let R = [s, y, null, null, t.prefetchHints];
      return {
        status: +!p,
        route: R,
        node: h,
        dynamicRequestTree: N(R, v, p, g, i),
        refreshState: null,
        children: _,
      };
    }
    function w(e) {
      if (e.isPage) {
        let t = (0, R.getRenderedSearchFromVaryPath)(e.varyPath);
        if (null === t) return i.PAGE_SEGMENT_KEY;
        let r = JSON.stringify(Object.fromEntries(new URLSearchParams(t)));
        return '{}' !== r ? i.PAGE_SEGMENT_KEY + '?' + r : i.PAGE_SEGMENT_KEY;
      }
      return e.segment;
    }
    function A(e, t) {
      let r = [e[0], t];
      return (2 in e && (r[2] = e[2]), 3 in e && (r[3] = e[3]), 4 in e && (r[4] = e[4]), r);
    }
    function N(e, t, r, n, a) {
      let l = null;
      return (r ? ((l = A(e, t)), a || (l[3] = 'refetch')) : (l = n ? A(e, t) : null), l);
    }
    function C(e, t, r, n, a, l, u) {
      let i,
        o,
        s,
        c = t.isPage;
      switch (l) {
        case 0: {
          let r = (0, E.readFromBFCacheDuringRegularNavigation)(e, t.varyPath);
          if (null !== r)
            return {
              cacheNode: j(r.rsc, r.prefetchRsc, r.head, r.prefetchHead),
              needsDynamicRequest: !1,
            };
          break;
        }
        case 1: {
          let l = c ? a : null;
          return (
            (0, E.writeToBFCache)(e, t.varyPath, r, null, l, null, u),
            c && null !== n && (0, E.writeHeadToBFCache)(e, n, l, null, u),
            { cacheNode: j(r, null, l, null), needsDynamicRequest: !1 }
          );
        }
        case 2:
          let f = (0, E.readFromBFCache)(t.varyPath);
          if (null !== f) {
            let e = f.rsc,
              t = !x(e) || 'pending' !== e.status;
            return {
              cacheNode: j(f.rsc, t ? null : f.prefetchRsc, f.head, t ? null : f.prefetchHead),
              needsDynamicRequest: !1,
            };
          }
      }
      let d = null,
        h = !0,
        p = (0, _.readSegmentCacheEntry)(e, t.varyPath);
      if (null !== p)
        switch (p.status) {
          case _.EntryStatus.Fulfilled:
            ((d = p.rsc), (h = p.isPartial));
            break;
          case _.EntryStatus.Pending:
            ((d = (0, _.waitForSegmentCacheEntry)(p).then((e) => (null !== e ? e.rsc : null))),
              (h = p.isPartial));
          case _.EntryStatus.Empty:
          case _.EntryStatus.Rejected:
        }
      null !== r
        ? (h ? ((i = d), (o = r)) : ((i = null), (o = d)), (s = !1))
        : (h ? ((i = d), (o = k())) : ((i = null), (o = d)), (s = h));
      let y = null,
        g = null,
        v = c;
      if (c) {
        let t = null,
          r = !0;
        if (null !== n) {
          let a = (0, _.readSegmentCacheEntry)(e, n);
          if (null !== a)
            switch (a.status) {
              case _.EntryStatus.Fulfilled:
                ((t = a.rsc), (r = a.isPartial));
                break;
              case _.EntryStatus.Pending:
                ((t = (0, _.waitForSegmentCacheEntry)(a).then((e) => (null !== e ? e.rsc : null))),
                  (r = a.isPartial));
              case _.EntryStatus.Empty:
              case _.EntryStatus.Rejected:
            }
        }
        null !== a
          ? (r ? ((y = t), (g = a)) : ((y = null), (g = t)), (v = !1))
          : (r ? ((y = t), (g = k())) : ((y = null), (g = t)), (v = r));
      }
      return (
        5 !== l &&
          ((0, E.writeToBFCache)(e, t.varyPath, o, i, g, y, u),
          c && null !== n && (0, E.writeHeadToBFCache)(e, n, g, y, u)),
        { cacheNode: j(o, i, g, y), needsDynamicRequest: s || v }
      );
    }
    function j(e, t, r, n, a = null) {
      return { rsc: e, prefetchRsc: t, head: r, prefetchHead: n, slots: null, scrollRef: a };
    }
    let M = !1;
    function I(e, t, r, n, a, l, u) {
      let i = e.dynamicRequestTree;
      if (null === i) {
        M = !1;
        return;
      }
      let o = U(e, i, t, r, n, l),
        c = a.separateRefreshUrls,
        f = null;
      if (null !== c) {
        f = [];
        let a = (0, s.createHrefFromUrl)(t);
        for (let t of c)
          t !== a && null !== i && f.push(U(e, i, new URL(t, location.origin), r, n, l));
      }
      F(e, r, o, f, l, u).then(S, S);
    }
    async function F(e, t, r, n, a, l) {
      var u, i;
      let o = await ((u = r),
      (i = n),
      new Promise((e) => {
        let t = (t) => {
            0 === t.exitStatus ? 0 == --n && e(0) : e(t.exitStatus);
          },
          r = () => e(2),
          n = 1;
        (u.then(t, r), null !== i && ((n += i.length), i.forEach((e) => e.then(t, r))));
      }));
      switch (
        (0 === o &&
          (o = (function e(t, r, n) {
            var a, l, u;
            let i, o, s;
            0 === t.status
              ? ((t.status = 2),
                (a = t.node),
                (l = r),
                (u = n),
                x((o = a.rsc)) && (null === l ? o.resolve(null, u) : o.reject(l, u)),
                x((s = a.head)) && s.resolve(null, u),
                (i = null === t.refreshState ? 1 : 2))
              : (i = 0);
            let c = t.children;
            if (null !== c)
              for (let [, t] of c) {
                let a = e(t, r, n);
                a > i && (i = a);
              }
            return i;
          })(e, null, null)),
        o)
      ) {
        case 0:
          M = !1;
          return;
        case 1: {
          let n = await r;
          D(!1, n.url, t, n.seed, e.route, a, l);
          return;
        }
        case 2: {
          let n = await r;
          D(!0, n.url, t, n.seed, e.route, a, l);
          return;
        }
        default:
          return o;
      }
    }
    function D(e, t, r, n, a, l, u) {
      if (null !== l) (0, _.markRouteEntryAsDynamicRewrite)(l);
      else if (null !== n) {
        let e = n.metadataVaryPath;
        if (null !== e) {
          let a = Date.now();
          (0, v.discoverKnownRoute)(
            a,
            t.pathname,
            r,
            null,
            n.routeTree,
            e,
            !1,
            (0, s.createHrefFromUrl)(t),
            !1,
            !0,
          );
        }
      }
      ((0, _.invalidateRouteCacheEntries)(r, a), (e = e || M), (M = !0));
      let i = (0, p.getLastCommittedTree)(),
        o = null !== i && a !== i ? u : 'replace',
        c = {
          type: d.ACTION_SERVER_PATCH,
          previousTree: a,
          url: t,
          nextUrl: r,
          seed: n,
          mpa: e,
          navigateType: o,
        };
      (0, f.dispatchAppRouterAction)(c);
    }
    async function U(e, t, r, n, a, l) {
      try {
        let u = await (0, c.fetchServerResponse)(r, {
          flightRouterState: t,
          nextUrl: n,
          isHmrRefresh: 4 === a,
        });
        if ('string' == typeof u)
          return { exitStatus: 2, url: new URL(u, location.origin), seed: null };
        let i = Date.now(),
          s = (0, y.convertServerPatchToFullTree)(
            i,
            e.route,
            u.flightData,
            u.renderedSearch,
            u.dynamicStaleTime,
          );
        if (null !== l && null !== u.staticStageData) {
          let { response: e, isResponsePartial: r } = u.staticStageData;
          (0, _.getStaleAt)(i, e.s)
            .then((n) => {
              let a = u.responseHeaders.get(m.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? e.b;
              (0, _.writeStaticStageResponseIntoCache)(i, e.f, a, e.h, n, t, u.renderedSearch, r);
            })
            .catch(() => {});
        }
        null !== l &&
          null !== u.runtimePrefetchStream &&
          (0, _.processRuntimePrefetchStream)(i, u.runtimePrefetchStream, t, u.renderedSearch)
            .then((e) => {
              null !== e &&
                (0, _.writeDynamicRenderResponseIntoCache)(
                  i,
                  g.FetchStrategy.PPRRuntime,
                  e.flightDatas,
                  e.buildId,
                  e.isResponsePartial,
                  e.headVaryParams,
                  e.staleAt,
                  e.navigationSeed,
                  null,
                );
            })
            .catch(() => {});
        let f = (0, E.computeDynamicStaleAt)(i, u.dynamicStaleTime);
        return {
          exitStatus: +!!(function e(t, r, n, a, l, u) {
            0 === t.status &&
              null !== n &&
              ((t.status = 1),
              (function (e, t, r, n) {
                let a = e.rsc,
                  l = t[0];
                if (null === l) return;
                null === a ? (e.rsc = l) : x(a) && a.resolve(l, n);
                let u = e.head;
                x(u) && u.resolve(r, n);
              })(t.node, n, a, u),
              (0, E.updateBFCacheEntryStaleAt)(r.varyPath, l));
            let i = t.children,
              s = r.slots,
              c = null !== n ? n[1] : null,
              f = !1;
            if (null !== i)
              if (null !== s)
                for (let t in s) {
                  let r = s[t],
                    n = null !== c ? c[t] : null,
                    d = i.get(t);
                  if (void 0 === d) f = !0;
                  else {
                    let t = d.route[0],
                      i = w(r);
                    (0, o.matchSegment)(i, t) && null != n && e(d, r, n, a, l, u) && (f = !0);
                  }
                }
              else null !== s && (f = !0);
            return f;
          })(e, s.routeTree, s.data, s.head, f, u.debugInfo),
          url: new URL(u.canonicalUrl, location.origin),
          seed: s,
        };
      } catch {
        return { exitStatus: 2, url: r, seed: null };
      }
    }
    let L = Symbol();
    function x(e) {
      return e && 'object' == typeof e && e.tag === L;
    }
    function k() {
      let e,
        t,
        r = [],
        n = new Promise((r, n) => {
          ((e = r), (t = n));
        });
      return (
        (n.status = 'pending'),
        (n.resolve = (t, a) => {
          'pending' === n.status &&
            ((n.status = 'fulfilled'), (n.value = t), null !== a && r.push.apply(r, a), e(t));
        }),
        (n.reject = (e, a) => {
          'pending' === n.status &&
            ((n.status = 'rejected'), (n.reason = e), null !== a && r.push.apply(r, a), t(e));
        }),
        (n.tag = L),
        (n._debugInfo = r),
        n
      );
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  