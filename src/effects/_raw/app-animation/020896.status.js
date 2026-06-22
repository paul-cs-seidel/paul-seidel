/*
 * [app-animation #20896] Modul mit 3 Export(en)
 * Exporte: status, rsc, pathname
 * Requires: #6372, #21768, #87288, #77709, #56655, #51191, #77048, #33906, #511, #67764, #50590, #54069 …
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 20896.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
20896,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n,
      a = {
        EntryStatus: function () {
          return A;
        },
        attemptToFulfillDynamicSegmentFromBFCache: function () {
          return ee;
        },
        attemptToUpgradeSegmentFromBFCache: function () {
          return et;
        },
        canNewFetchStrategyProvideMoreContent: function () {
          return eS;
        },
        convertReusedFlightRouterStateToRouteTree: function () {
          return ef;
        },
        convertRootFlightRouterStateToRouteTree: function () {
          return ec;
        },
        convertRouteTreeToFlightRouterState: function () {
          return function e(t) {
            let r = {};
            if (null !== t.slots) for (let n in t.slots) r[n] = e(t.slots[n]);
            return [t.segment, r, null, null];
          };
        },
        createDetachedSegmentCacheEntry: function () {
          return J;
        },
        createMetadataRouteTree: function () {
          return en;
        },
        deprecated_requestOptimisticRouteCacheEntry: function () {
          return G;
        },
        fetchInlinedSegmentsOnCacheMiss: function () {
          return ey;
        },
        fetchRouteOnCacheMiss: function () {
          return eh;
        },
        fetchSegmentOnCacheMiss: function () {
          return ep;
        },
        fetchSegmentPrefetchesUsingDynamicRequest: function () {
          return e_;
        },
        fulfillRouteCacheEntry: function () {
          return ea;
        },
        getCurrentRouteCacheVersion: function () {
          return D;
        },
        getCurrentSegmentCacheVersion: function () {
          return U;
        },
        getStaleAt: function () {
          return eT;
        },
        getStaleTimeMs: function () {
          return w;
        },
        invalidateEntirePrefetchCache: function () {
          return L;
        },
        invalidateRouteCacheEntries: function () {
          return x;
        },
        invalidateSegmentCacheEntries: function () {
          return k;
        },
        markRouteEntryAsDynamicRewrite: function () {
          return eu;
        },
        overwriteRevalidatingSegmentCacheEntry: function () {
          return z;
        },
        pingInvalidationListeners: function () {
          return H;
        },
        processRuntimePrefetchStream: function () {
          return ew;
        },
        readOrCreateRevalidatingSegmentEntry: function () {
          return W;
        },
        readOrCreateRouteCacheEntry: function () {
          return X;
        },
        readOrCreateSegmentCacheEntry: function () {
          return q;
        },
        readRouteCacheEntry: function () {
          return B;
        },
        readSegmentCacheEntry: function () {
          return V;
        },
        stripIsPartialByte: function () {
          return eA;
        },
        upgradeToPendingSegment: function () {
          return Z;
        },
        upsertSegmentEntry: function () {
          return Q;
        },
        waitForSegmentCacheEntry: function () {
          return $;
        },
        writeDynamicRenderResponseIntoCache: function () {
          return ev;
        },
        writeRouteIntoCache: function () {
          return el;
        },
        writeStaticStageResponseIntoCache: function () {
          return eO;
        },
      };
    for (var l in a) Object.defineProperty(r, l, { enumerable: !0, get: a[l] });
    let u = e.r(6372),
      i = e.r(21768),
      o = e.r(87288),
      s = e.r(77709),
      c = e.r(56655),
      f = e.r(51191),
      d = e.r(77048),
      h = e.r(33906),
      p = e.r(511),
      y = e.r(67764),
      _ = e.r(50590),
      g = e.r(54069),
      v = e.r(91949),
      m = e.r(13258),
      R = e.r(9396),
      E = e.r(39470),
      P = e.r(79027),
      S = e.r(96167),
      b = e.r(60355),
      T = e.r(32992),
      O = e.r(63416);
    function w(e) {
      return 1e3 * Math.max(e, 30);
    }
    var A =
      (((n = {})[(n.Empty = 0)] = 'Empty'),
      (n[(n.Pending = 1)] = 'Pending'),
      (n[(n.Fulfilled = 2)] = 'Fulfilled'),
      (n[(n.Rejected = 3)] = 'Rejected'),
      n);
    let N = ['', {}, null, 'metadata-only'],
      C = (0, p.createCacheMap)(),
      j = (0, p.createCacheMap)(),
      M = null,
      I = 0,
      F = 0;
    function D() {
      return I;
    }
    function U() {
      return F;
    }
    function L(e, t) {
      (I++, F++, (0, v.pingVisibleLinks)(e, t), H(e, t));
    }
    function x(e, t) {
      (I++, (0, v.pingVisibleLinks)(e, t), H(e, t));
    }
    function k(e, t) {
      (F++, (0, v.pingVisibleLinks)(e, t), H(e, t));
    }
    function H(e, t) {
      if (null !== M) {
        let r = M;
        for (let n of ((M = null), r))
          (0, s.isPrefetchTaskDirty)(n, e, t) &&
            (function (e) {
              let t = e.onInvalidate;
              if (null !== t) {
                e.onInvalidate = null;
                try {
                  t();
                } catch (e) {
                  'function' == typeof reportError ? reportError(e) : console.error(e);
                }
              }
            })(n);
      }
    }
    function B(e, t) {
      let r = (0, c.getRouteVaryPath)(t.pathname, t.search, t.nextUrl),
        n = (0, p.getFromCacheMap)(e, I, C, r, !1);
      return null !== n ? n : null;
    }
    function V(e, t) {
      return (0, p.getFromCacheMap)(e, F, j, t, !1);
    }
    function $(e) {
      let t = e.promise;
      return (null === t && (t = e.promise = (0, E.createPromiseWithResolvers)()), t.promise);
    }
    function K() {
      return {
        canonicalUrl: null,
        status: 0,
        blockedTasks: null,
        tree: null,
        metadata: null,
        couldBeIntercepted: !0,
        supportsPerSegmentPrefetching: !1,
        renderedSearch: null,
        ref: null,
        size: 0,
        staleAt: 1 / 0,
        version: I,
      };
    }
    function X(e, t, r) {
      null !== t.onInvalidate && (null === M ? (M = new Set([t])) : M.add(t));
      let n = B(e, r);
      if (null !== n) return n;
      let a = K(),
        l = (0, c.getRouteVaryPath)(r.pathname, r.search, r.nextUrl);
      return ((0, p.setInCacheMap)(C, l, a, !1), a);
    }
    function G(e, t, r) {
      let n = t.search;
      if ('' === n) return null;
      let a = new URL(t);
      a.search = '';
      let l = B(e, (0, d.createCacheKey)(a.href, r));
      if (null === l || 2 !== l.status) return null;
      let u = new URL(l.canonicalUrl, t.origin),
        i = '' !== u.search ? u.search : n,
        o = '' !== l.renderedSearch ? l.renderedSearch : n,
        s = new URL(l.canonicalUrl, location.origin);
      return (
        (s.search = i),
        {
          canonicalUrl: (0, f.createHrefFromUrl)(s),
          status: 2,
          blockedTasks: null,
          tree: Y(l.tree, o),
          metadata: Y(l.metadata, o),
          couldBeIntercepted: l.couldBeIntercepted,
          supportsPerSegmentPrefetching: l.supportsPerSegmentPrefetching,
          hasDynamicRewrite: l.hasDynamicRewrite,
          renderedSearch: o,
          ref: null,
          size: 0,
          staleAt: l.staleAt,
          version: l.version,
        }
      );
    }
    function Y(e, t) {
      let r = null,
        n = e.slots;
      if (null !== n)
        for (let e in ((r = {}), n)) {
          let a = n[e];
          r[e] = Y(a, t);
        }
      return e.isPage
        ? {
            requestKey: e.requestKey,
            segment: e.segment,
            refreshState: e.refreshState,
            varyPath: (0, c.clonePageVaryPathWithNewSearchParams)(e.varyPath, t),
            isPage: !0,
            slots: r,
            prefetchHints: e.prefetchHints,
          }
        : {
            requestKey: e.requestKey,
            segment: e.segment,
            refreshState: e.refreshState,
            varyPath: e.varyPath,
            isPage: !1,
            slots: r,
            prefetchHints: e.prefetchHints,
          };
    }
    function q(e, t, r) {
      let n = V(e, r.varyPath);
      if (null !== n) return n;
      let a = (0, c.getSegmentVaryPathForRequest)(t, r),
        l = J(e);
      return ((0, p.setInCacheMap)(j, a, l, !1), l);
    }
    function W(e, t, r) {
      var n;
      let a = ((n = r.varyPath), (0, p.getFromCacheMap)(e, F, j, n, !0));
      if (null !== a) return a;
      let l = (0, c.getSegmentVaryPathForRequest)(t, r),
        u = J(e);
      return ((0, p.setInCacheMap)(j, l, u, !0), u);
    }
    function z(e, t, r) {
      let n = (0, c.getSegmentVaryPathForRequest)(t, r),
        a = J(e);
      return ((0, p.setInCacheMap)(j, n, a, !0), a);
    }
    function Q(e, t, r) {
      if ((0, p.isValueExpired)(e, F, r)) return null;
      let n = V(e, t);
      if (null !== n) {
        var a;
        if (
          (r.fetchStrategy !== n.fetchStrategy &&
            ((a = n.fetchStrategy), !(a < r.fetchStrategy))) ||
          (!n.isPartial && r.isPartial)
        )
          return ((r.status = 3), (r.rsc = null), null);
        (0, p.deleteFromCacheMap)(n);
      }
      return ((0, p.setInCacheMap)(j, t, r, !1), r);
    }
    function J(e) {
      return {
        status: 0,
        fetchStrategy: R.FetchStrategy.PPR,
        rsc: null,
        isPartial: !0,
        promise: null,
        ref: null,
        size: 0,
        staleAt: e + 3e4,
        version: 0,
      };
    }
    function Z(e, t) {
      return (
        (e.status = 1),
        (e.fetchStrategy = t),
        t === R.FetchStrategy.Full && (e.isPartial = !1),
        (e.version = F),
        e
      );
    }
    function ee(e, t, r) {
      let n = r.varyPath,
        a = (0, P.readFromBFCache)(n);
      if (null !== a) {
        let r = a.navigatedAt + g.STATIC_STALETIME_MS;
        return e > r ? null : ei(Z(t, R.FetchStrategy.Full), a.rsc, r, !1);
      }
      return null;
    }
    function et(e, t) {
      let r = t.varyPath,
        n = (0, P.readFromBFCache)(r);
      if (null !== n) {
        let r = n.navigatedAt + g.STATIC_STALETIME_MS;
        if (e > r) return null;
        let a = ei(Z(J(e), R.FetchStrategy.Full), n.rsc, r, !1),
          l = Q(e, (0, c.getSegmentVaryPathForRequest)(R.FetchStrategy.Full, t), a);
        if (null !== l && 2 === l.status) return l;
      }
      return null;
    }
    function er(e) {
      let t = e.blockedTasks;
      if (null !== t) {
        for (let e of t) (0, s.pingPrefetchTask)(e);
        e.blockedTasks = null;
      }
    }
    function en(e) {
      return {
        requestKey: y.HEAD_REQUEST_KEY,
        segment: y.HEAD_REQUEST_KEY,
        refreshState: null,
        varyPath: e,
        isPage: !0,
        slots: null,
        prefetchHints: 0,
      };
    }
    function ea(e, t, r, n, a, l, u) {
      let i = (0, c.getRenderedSearchFromVaryPath)(n) ?? '';
      return (
        (t.status = 2),
        (t.tree = r),
        (t.metadata = en(n)),
        (t.staleAt = e + g.STATIC_STALETIME_MS),
        (t.couldBeIntercepted = a),
        (t.canonicalUrl = l),
        (t.renderedSearch = i),
        (t.supportsPerSegmentPrefetching = u),
        (t.hasDynamicRewrite = !1),
        er(t),
        t
      );
    }
    function el(e, t, r, n, a, l, u, i) {
      let o = ea(e, K(), n, a, l, u, i),
        s = o.renderedSearch,
        f = (0, c.getFulfilledRouteVaryPath)(t, s, r, l);
      return ((0, p.setInCacheMap)(C, f, o, !1), o);
    }
    function eu(e) {
      e.hasDynamicRewrite = !0;
    }
    function ei(e, t, r, n) {
      return (
        (e.status = 2),
        (e.rsc = t),
        (e.staleAt = r),
        (e.isPartial = n),
        null !== e.promise && (e.promise.resolve(e), (e.promise = null)),
        e
      );
    }
    function eo(e, t) {
      ((e.status = 3), (e.staleAt = t), er(e));
    }
    function es(e, t) {
      ((e.status = 3),
        (e.staleAt = t),
        null !== e.promise && (e.promise.resolve(null), (e.promise = null)));
    }
    function ec(e, t, r) {
      return ed(e, y.ROOT_SEGMENT_REQUEST_KEY, null, t, r);
    }
    function ef(e, t, r, n, a) {
      let l = e.isPage
          ? (0, c.getPartialPageVaryPath)(e.varyPath)
          : (0, c.getPartialLayoutVaryPath)(e.varyPath),
        u = r[0],
        i = e.requestKey,
        o = (0, y.createSegmentRequestKeyPart)(u);
      return ed(r, (0, y.appendSegmentRequestKeyPart)(i, t, o), l, n, a);
    }
    function ed(e, t, r, n, a) {
      let l,
        u,
        i,
        o,
        s = e[0],
        f = e[2] ?? null,
        d = null !== f ? { canonicalUrl: f[0], renderedSearch: f[1] } : null,
        h = null !== d ? d.renderedSearch : n;
      if (Array.isArray(s)) {
        i = !1;
        let e = s[1],
          n = s[0];
        ((u = (0, c.appendLayoutVaryPath)(r, e, n)),
          (o = (0, c.finalizeLayoutVaryPath)(t, u)),
          (l = s));
      } else
        ((u = r),
          t.endsWith(m.PAGE_SEGMENT_KEY)
            ? ((i = !0),
              (l = m.PAGE_SEGMENT_KEY),
              (o = (0, c.finalizePageVaryPath)(t, h, u)),
              null === a.metadataVaryPath &&
                (a.metadataVaryPath = (0, c.finalizeMetadataVaryPath)(t, h, u)))
            : ((i = !1), (l = s), (o = (0, c.finalizeLayoutVaryPath)(t, u))));
      let p = null,
        _ = e[1];
      for (let e in _) {
        let r = _[e],
          n = r[0],
          l = (0, y.createSegmentRequestKeyPart)(n),
          i = ed(r, (0, y.appendSegmentRequestKeyPart)(t, e, l), u, h, a);
        null === p ? (p = { [e]: i }) : (p[e] = i);
      }
      return {
        requestKey: t,
        segment: l,
        refreshState: d,
        varyPath: o,
        isPage: i,
        slots: p,
        prefetchHints: e[4] ?? 0,
      };
    }
    async function eh(e, t) {
      let r = t.pathname,
        n = t.search,
        a = t.nextUrl,
        l = '/_tree',
        u = {
          [i.RSC_HEADER]: '1',
          [i.NEXT_ROUTER_PREFETCH_HEADER]: '1',
          [i.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER]: l,
        };
      (null !== a && (u[i.NEXT_URL] = a), eb(u));
      try {
        let t,
          s,
          d = new URL(r + n, location.origin);
        {
          let r = await fetch(d, { method: 'HEAD' });
          if (r.status < 200 || r.status >= 400) return (eo(e, Date.now() + 1e4), null);
          ((s = r.redirected ? new URL(r.url) : d), (t = await eR(eP(s, l), u)));
        }
        if (!t || !t.ok || 204 === t.status || !t.body) return (eo(e, Date.now() + 1e4), null);
        let _ = (0, f.createHrefFromUrl)(s),
          g = t.headers.get('vary'),
          v = null !== g && g.includes(i.NEXT_URL),
          R = (0, E.createPromiseWithResolvers)(),
          P = '2' === t.headers.get(i.NEXT_DID_POSTPONE_HEADER) || !0;
        {
          let n,
            l,
            { stream: i, size: s } = await eE(t.body);
          (R.resolve(), (0, p.setSizeInCacheMap)(e, s));
          let f = await (0, o.createFromNextReadableStream)(i, u, { allowPartialStream: !0 });
          if (
            (t.headers.get(O.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? f.buildId) !==
            (0, T.getNavigationBuildId)()
          )
            return (eo(e, Date.now() + 1e4), null);
          let d = (0, h.getRenderedPathname)(t),
            g = (0, h.getRenderedSearch)(t),
            E = { metadataVaryPath: null },
            b =
              ((n = d.split('/').filter((e) => '' !== e)),
              (l = y.ROOT_SEGMENT_REQUEST_KEY),
              (function e(t, r, n, a, l, u, i, o) {
                let s,
                  f,
                  d = null,
                  p = t.slots;
                if (null !== p)
                  for (let t in ((s = !1),
                  (f = (0, c.finalizeLayoutVaryPath)(a, n)),
                  (d = {}),
                  p)) {
                    let r,
                      s,
                      f,
                      _ = p[t],
                      g = _.name,
                      v = _.param;
                    if (null !== v) {
                      let e = (0, h.parseDynamicParamFromURLPart)(v.type, l, u),
                        t = null !== v.key ? v.key : (0, h.getCacheKeyForDynamicParam)(e, '');
                      ((f = (0, c.appendLayoutVaryPath)(n, t, g)),
                        (s = [g, t, v.type, v.siblings]),
                        (r = !0));
                    } else ((f = n), (s = g), (r = (0, h.doesStaticSegmentAppearInURL)(g)));
                    let m = r ? u + 1 : u,
                      R = (0, y.createSegmentRequestKeyPart)(s),
                      E = (0, y.appendSegmentRequestKeyPart)(a, t, R);
                    d[t] = e(_, s, f, E, l, m, i, o);
                  }
                else
                  a.endsWith(m.PAGE_SEGMENT_KEY)
                    ? ((s = !0),
                      (f = (0, c.finalizePageVaryPath)(a, i, n)),
                      null === o.metadataVaryPath &&
                        (o.metadataVaryPath = (0, c.finalizeMetadataVaryPath)(a, i, n)))
                    : ((s = !1), (f = (0, c.finalizeLayoutVaryPath)(a, n)));
                return {
                  requestKey: a,
                  segment: r,
                  refreshState: null,
                  varyPath: f,
                  isPage: s,
                  slots: d,
                  prefetchHints: t.prefetchHints,
                };
              })(f.tree, l, null, y.ROOT_SEGMENT_REQUEST_KEY, n, 0, g, E)),
            w = E.metadataVaryPath;
          if (null === w) return (eo(e, Date.now() + 1e4), null);
          (0, S.discoverKnownRoute)(Date.now(), r, a, e, b, w, v, _, P, !1);
        }
        if (!v) {
          let t = (0, c.getFulfilledRouteVaryPath)(r, n, a, v);
          (0, p.setInCacheMap)(C, t, e, !1);
        }
        return { value: null, closed: R.promise };
      } catch (t) {
        return (eo(e, Date.now() + 1e4), null);
      }
    }
    async function ep(e, t, r, n) {
      let a = new URL(e.canonicalUrl, location.origin),
        l = r.nextUrl,
        u = n.requestKey,
        s = u === y.ROOT_SEGMENT_REQUEST_KEY ? '/_index' : u,
        f = {
          [i.RSC_HEADER]: '1',
          [i.NEXT_ROUTER_PREFETCH_HEADER]: '1',
          [i.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER]: s,
        };
      (null !== l && (f[i.NEXT_URL] = l), eb(f));
      let d = eP(a, s);
      try {
        let e = await eR(d, f);
        if (
          !e ||
          !e.ok ||
          204 === e.status ||
          ('2' !== e.headers.get(i.NEXT_DID_POSTPONE_HEADER) && 0) ||
          !e.body
        )
          return (es(t, Date.now() + 1e4), null);
        let r = (0, E.createPromiseWithResolvers)(),
          { stream: a, size: l } = await eE(e.body);
        (r.resolve(), (0, p.setSizeInCacheMap)(t, l));
        let u = await (0, o.createFromNextReadableStream)(a, f, { allowPartialStream: !0 });
        if (
          (e.headers.get(O.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? u.buildId) !==
          (0, T.getNavigationBuildId)()
        )
          return (es(t, Date.now() + 1e4), null);
        let s = Date.now(),
          h = s + w(u.staleTime),
          y = ei(t, u.rsc, h, u.isPartial);
        u.varyParams;
        let _ = (0, c.getSegmentVaryPathForRequest)(t.fetchStrategy, n);
        return (Q(s, _, y), { value: y, closed: r.promise });
      } catch (e) {
        return (es(t, Date.now() + 1e4), null);
      }
    }
    async function ey(e, t, r, n) {
      let a = new URL(e.canonicalUrl, location.origin),
        l = t.nextUrl,
        u = {
          [i.RSC_HEADER]: '1',
          [i.NEXT_ROUTER_PREFETCH_HEADER]: '1',
          [i.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER]: '/' + m.PAGE_SEGMENT_KEY,
        };
      (null !== l && (u[i.NEXT_URL] = l), eb(u));
      try {
        let t = await eR(a, u);
        if (
          !t ||
          !t.ok ||
          204 === t.status ||
          ('2' !== t.headers.get(i.NEXT_DID_POSTPONE_HEADER) && 0) ||
          !t.body
        )
          return (eg(n, Date.now() + 1e4), null);
        let l = (0, E.createPromiseWithResolvers)(),
          { stream: s } = await eE(t.body);
        l.resolve();
        let c = await (0, o.createFromNextReadableStream)(s, u, { allowPartialStream: !0 });
        if (
          (t.headers.get(O.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? c.tree.segment.buildId) !==
          (0, T.getNavigationBuildId)()
        )
          return (eg(n, Date.now() + 1e4), null);
        let f = Date.now();
        !(function e(t, r, n, a, l) {
          let u = a.segment,
            i = t + w(u.staleTime),
            o = l.get(n.requestKey);
          if (void 0 !== o) ei(o, u.rsc, i, u.isPartial);
          else {
            let e = q(t, R.FetchStrategy.PPR, n);
            0 === e.status && ei(Z(e, R.FetchStrategy.PPR), u.rsc, i, u.isPartial);
          }
          if (null !== n.slots && null !== a.slots)
            for (let u in n.slots) {
              let i = n.slots[u],
                o = a.slots[u];
              void 0 !== o && e(t, r, i, o, l);
            }
        })(f, e, r, c.tree, n);
        let d = f + w(c.head.staleTime),
          h = e.metadata.requestKey,
          p = n.get(h);
        if (void 0 !== p) ei(p, c.head.rsc, d, c.head.isPartial);
        else {
          let t = q(f, R.FetchStrategy.PPR, e.metadata);
          0 === t.status && ei(Z(t, R.FetchStrategy.PPR), c.head.rsc, d, c.head.isPartial);
        }
        return (eg(n, Date.now() + 1e4), { value: null, closed: l.promise });
      } catch (e) {
        return (eg(n, Date.now() + 1e4), null);
      }
    }
    async function e_(e, t, r, n, a) {
      let l = e.key,
        s = new URL(t.canonicalUrl, location.origin),
        c = l.nextUrl;
      1 === a.size && a.has(t.metadata.requestKey) && (n = N);
      let f = {
        [i.RSC_HEADER]: '1',
        [i.NEXT_ROUTER_STATE_TREE_HEADER]: (0, _.prepareFlightRouterStateForRequest)(n),
      };
      switch ((null !== c && (f[i.NEXT_URL] = c), r)) {
        case R.FetchStrategy.Full:
          break;
        case R.FetchStrategy.PPRRuntime:
          f[i.NEXT_ROUTER_PREFETCH_HEADER] = '2';
          break;
        case R.FetchStrategy.LoadingBoundary:
          f[i.NEXT_ROUTER_PREFETCH_HEADER] = '1';
      }
      try {
        let e,
          l = await eR(s, f);
        if (!l || !l.ok || !l.body) return (eg(a, Date.now() + 1e4), null);
        let i = (0, h.getRenderedSearch)(l);
        if (i !== t.renderedSearch) return (eg(a, Date.now() + 1e4), null);
        let c = (0, E.createPromiseWithResolvers)(),
          v = null,
          m = null;
        if (r === R.FetchStrategy.Full) {
          var d, y, g;
          let t, r;
          ((d = l.body),
            (y = c.resolve),
            (g = function (e) {
              if (null === v) return;
              let t = e / v.length;
              for (let e of v) (0, p.setSizeInCacheMap)(e, t);
            }),
            (t = 0),
            (r = d.getReader()),
            (e = new ReadableStream({
              async pull(e) {
                for (;;) {
                  let { done: n, value: a } = await r.read();
                  if (!n) {
                    (e.enqueue(a), g((t += a.byteLength)));
                    continue;
                  }
                  (e.close(), y());
                  return;
                }
              },
            })));
        } else {
          let { stream: t, size: r } = await eE(l.body);
          (c.resolve(), (e = t), (m = r));
        }
        let [S, T] = await Promise.all([
            (0, o.createFromNextReadableStream)(e, f, { allowPartialStream: !0 }),
            l.cacheData,
          ]),
          w = S.h,
          A = null !== w ? (0, u.readVaryParams)(w) : null,
          N = Date.now(),
          C = await eT(N, S.s, l),
          j = r === R.FetchStrategy.PPRRuntime && (T?.isResponsePartial ?? !1),
          M = l.headers.get(O.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? S.b,
          I = (0, _.normalizeFlightData)(S.f);
        if ('string' == typeof I) return (eg(a, Date.now() + 1e4), null);
        let F = (0, b.convertServerPatchToFullTree)(N, n, I, i, P.UnknownDynamicStaleTime);
        if (((v = ev(N, r, I, M, j, A, C, F, a)), null !== m && null !== v && v.length > 0)) {
          let e = m / v.length;
          for (let t of v) (0, p.setSizeInCacheMap)(t, e);
        }
        return { value: null, closed: c.promise };
      } catch (e) {
        return (eg(a, Date.now() + 1e4), null);
      }
    }
    function eg(e, t) {
      let r = [];
      for (let n of e.values()) 1 === n.status ? es(n, t) : 2 === n.status && r.push(n);
      return r;
    }
    function ev(e, t, r, n, a, l, i, o, s) {
      if (n && n !== (0, T.getNavigationBuildId)()) return (null !== s && eg(s, e + 1e4), null);
      let c = o.routeTree,
        f = null !== o.metadataVaryPath ? en(o.metadataVaryPath) : null;
      for (let n of r) {
        let r = n.seedData;
        if (null !== r) {
          let l = n.segmentPath,
            o = c;
          for (let t = 0; t < l.length; t += 2) {
            let r = l[t];
            if (o?.slots?.[r] === void 0) return (null !== s && eg(s, e + 1e4), null);
            o = o.slots[r];
          }
          !(function e(t, r, n, a, l, i, o) {
            let s = l[0],
              c = l[4];
            em(t, r, s, null === s || i, a, null !== c ? (0, u.readVaryParams)(c) : null, n, o);
            let f = n.slots;
            if (null !== f) {
              let n = l[1];
              for (let l in f) {
                let u = f[l],
                  s = n[l];
                null != s && e(t, r, u, a, s, i, o);
              }
            }
          })(e, t, o, i, r, a, s);
        }
        let o = n.head;
        null !== o && null !== f && em(e, t, o, n.isHeadPartial, i, l, f, s);
      }
      return null !== s ? eg(s, e + 1e4) : null;
    }
    function em(e, t, r, n, a, l, u, i) {
      let o = null !== i ? i.get(u.requestKey) : void 0;
      if (void 0 !== o) ei(o, r, a, n);
      else {
        let l = q(e, t, u);
        if (0 === l.status) ei(Z(l, t), r, a, n);
        else {
          let l = ei(Z(J(e), t), r, a, n);
          Q(e, (0, c.getSegmentVaryPathForRequest)(t, u), l);
        }
      }
    }
    async function eR(e, t) {
      let r = await (0, o.createFetch)(e, t, 'low', !1);
      return r.ok ? r : null;
    }
    async function eE(e) {
      let t,
        r = e.getReader(),
        n = [],
        a = 0;
      for (;;) {
        let { done: e, value: t } = await r.read();
        if (e) break;
        (n.push(t), (a += t.byteLength));
      }
      if (1 === n.length) t = n[0];
      else if (n.length > 1) {
        t = new Uint8Array(a);
        let e = 0;
        for (let r of n) (t.set(r, e), (e += r.byteLength));
      } else t = new Uint8Array(0);
      return {
        stream: new ReadableStream({
          start(e) {
            (e.enqueue(t), e.close());
          },
        }),
        size: a,
      };
    }
    function eP(e, t) {
      {
        let r = new URL(e),
          n = r.pathname.endsWith('/') ? r.pathname.slice(0, -1) : r.pathname,
          a = (0, y.convertSegmentPathToStaticExportFilename)(t);
        return ((r.pathname = `${n}/${a}`), r);
      }
    }
    function eS(e, t) {
      return e < t;
    }
    function eb(e) {}
    async function eT(e, t, r) {
      if (void 0 !== t) {
        let r;
        for await (let e of t) r = e;
        if (void 0 !== r) return e + (isNaN(r) ? g.STATIC_STALETIME_MS : w(r));
      }
      if (void 0 !== r) {
        let t;
        return (
          e +
          (isNaN((t = parseInt(r.headers.get(i.NEXT_ROUTER_STALE_TIME_HEADER) ?? '', 10)))
            ? g.STATIC_STALETIME_MS
            : w(t))
        );
      }
      return e + g.STATIC_STALETIME_MS;
    }
    function eO(e, t, r, n, a, l, i, o) {
      let s = o ? R.FetchStrategy.PPR : R.FetchStrategy.Full,
        c = null !== n ? (0, u.readVaryParams)(n) : null,
        f = (0, _.normalizeFlightData)(t);
      if ('string' == typeof f) return;
      let d = (0, b.convertServerPatchToFullTree)(e, l, f, i, P.UnknownDynamicStaleTime);
      ev(e, s, f, r, o, c, a, d, null);
    }
    async function ew(e, t, r, n) {
      let { stream: a, isPartial: l } = await eA(t),
        i = await (0, o.createFromNextReadableStream)(a, void 0, { allowPartialStream: !0 }),
        s = i.h,
        c = null !== s ? (0, u.readVaryParams)(s) : null,
        f = await eT(e, i.s),
        d = (0, _.normalizeFlightData)(i.f);
      if ('string' == typeof d) return null;
      let h = (0, b.convertServerPatchToFullTree)(e, r, d, n, P.UnknownDynamicStaleTime);
      return {
        flightDatas: d,
        navigationSeed: h,
        buildId: i.b,
        isResponsePartial: l,
        headVaryParams: c,
        staleAt: f,
      };
    }
    async function eA(e) {
      let t = e.getReader(),
        { done: r, value: n } = await t.read();
      if (r || !n || 0 === n.byteLength)
        return { stream: new ReadableStream({ start: (e) => e.close() }), isPartial: !1 };
      let a = n[0],
        l = 35 === a || 126 === a,
        u = l ? (n.byteLength > 1 ? n.subarray(1) : null) : n;
      return {
        isPartial: !!l && 126 === a,
        stream: new ReadableStream({
          start(e) {
            u && e.enqueue(u);
          },
          async pull(e) {
            let r = await t.read();
            r.done ? e.close() : e.enqueue(r.value);
          },
        }),
      };
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  