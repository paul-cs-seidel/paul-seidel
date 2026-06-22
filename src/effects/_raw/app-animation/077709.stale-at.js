/*
 * [app-animation #77709] Modul mit 5 Export(en)
 * Exporte: staleAt, status, blockedTasks, spawnedRuntimePrefetches, _heapIndex
 * Requires: #22744, #56019, #20896, #77048, #9396, #13258, #73861
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 77709.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
77709,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      cancelPrefetchTask: function () {
        return E;
      },
      isPrefetchTaskDirty: function () {
        return S;
      },
      pingPrefetchScheduler: function () {
        return T;
      },
      pingPrefetchTask: function () {
        return N;
      },
      reschedulePrefetchTask: function () {
        return P;
      },
      schedulePrefetchTask: function () {
        return R;
      },
      startRevalidationCooldown: function () {
        return m;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let l = e.r(22744),
      u = e.r(56019),
      i = e.r(20896),
      o = e.r(77048),
      s = e.r(9396),
      c = e.r(13258),
      f = e.r(73861),
      d =
        'function' == typeof queueMicrotask
          ? queueMicrotask
          : (e) =>
              Promise.resolve()
                .then(e)
                .catch((e) =>
                  setTimeout(() => {
                    throw e;
                  }),
                ),
      h = [],
      p = 0,
      y = 0,
      _ = !1,
      g = null,
      v = null;
    function m() {
      (null !== v && clearTimeout(v),
        (v = setTimeout(() => {
          ((v = null), T());
        }, 300)));
    }
    function R(e, t, r, n, a, l) {
      let u = {
        key: e,
        treeAtTimeOfPrefetch: t,
        routeCacheVersion: (0, i.getCurrentRouteCacheVersion)(),
        segmentCacheVersion: (0, i.getCurrentSegmentCacheVersion)(),
        priority: n,
        phase: 1,
        hasBackgroundWork: !1,
        spawnedRuntimePrefetches: null,
        fetchStrategy: r,
        sortId: y++,
        isCanceled: !1,
        onInvalidate: a,
        _heapIndex: -1,
      };
      return (b(u), k(h, u), T(), u);
    }
    function E(e) {
      ((e.isCanceled = !0),
        (function (e, t) {
          let r = t._heapIndex;
          if (-1 !== r && ((t._heapIndex = -1), 0 !== e.length)) {
            let n = e.pop();
            n !== t && ((e[r] = n), (n._heapIndex = r), K(e, n, r));
          }
        })(h, e));
    }
    function P(e, t, r, n) {
      ((e.isCanceled = !1),
        (e.phase = 1),
        (e.sortId = y++),
        (e.priority = e === g ? s.PrefetchPriority.Intent : n),
        (e.treeAtTimeOfPrefetch = t),
        (e.fetchStrategy = r),
        b(e),
        -1 !== e._heapIndex ? V(h, e) : k(h, e),
        T());
    }
    function S(e, t, r) {
      return (
        e.routeCacheVersion !== (0, i.getCurrentRouteCacheVersion)() ||
        e.segmentCacheVersion !== (0, i.getCurrentSegmentCacheVersion)() ||
        e.treeAtTimeOfPrefetch !== r ||
        e.key.nextUrl !== t
      );
    }
    function b(e) {
      e.priority === s.PrefetchPriority.Intent &&
        e !== g &&
        (null !== g &&
          g.priority !== s.PrefetchPriority.Background &&
          ((g.priority = s.PrefetchPriority.Default), V(h, g)),
        (g = e));
    }
    function T() {
      _ || ((_ = !0), d(C));
    }
    function O(e) {
      return null === v && (e.priority === s.PrefetchPriority.Intent ? p < 12 : p < 4);
    }
    function w(e) {
      return (p++, e.then((e) => (null === e ? (A(), null) : (e.closed.then(A), e.value))));
    }
    function A() {
      (p--, T());
    }
    function N(e) {
      e.isCanceled || -1 !== e._heapIndex || (k(h, e), T());
    }
    function C() {
      _ = !1;
      let e = Date.now(),
        t = H(h);
      for (; null !== t && O(t); ) {
        ((t.routeCacheVersion = (0, i.getCurrentRouteCacheVersion)()),
          (t.segmentCacheVersion = (0, i.getCurrentSegmentCacheVersion)()));
        let r = (function (e, t) {
            let r = t.key,
              n = (0, i.readOrCreateRouteCacheEntry)(e, t, r),
              a = (function (e, t, r) {
                switch (r.status) {
                  case i.EntryStatus.Empty:
                    (w((0, i.fetchRouteOnCacheMiss)(r, t.key)),
                      (r.staleAt = e + 6e4),
                      (r.status = i.EntryStatus.Pending));
                  case i.EntryStatus.Pending: {
                    let e = r.blockedTasks;
                    return (null === e ? (r.blockedTasks = new Set([t])) : e.add(t), 1);
                  }
                  case i.EntryStatus.Rejected:
                    break;
                  case i.EntryStatus.Fulfilled: {
                    let o;
                    if (0 !== t.phase) return 2;
                    if (!O(t)) return 0;
                    let c = r.tree;
                    switch (
                      (o =
                        c.prefetchHints & l.PrefetchHint.SubtreeHasInstant
                          ? s.FetchStrategy.PPR
                          : t.fetchStrategy === s.FetchStrategy.PPR
                            ? r.supportsPerSegmentPrefetching
                              ? s.FetchStrategy.PPR
                              : s.FetchStrategy.LoadingBoundary
                            : t.fetchStrategy)
                    ) {
                      case s.FetchStrategy.PPR: {
                        var n, a, u;
                        if (
                          (F(
                            (n = e),
                            (a = t),
                            (u = r),
                            (0, i.readOrCreateSegmentCacheEntry)(
                              n,
                              s.FetchStrategy.PPR,
                              u.metadata,
                            ),
                            a.key,
                            u.metadata,
                          ),
                          0 ===
                            (function e(t, r, n, a, u) {
                              let o = (0, i.readOrCreateSegmentCacheEntry)(t, r.fetchStrategy, u);
                              F(t, r, n, o, r.key, u);
                              let s = a[1],
                                c = u.slots;
                              if (null !== c)
                                for (let a in c) {
                                  if (!O(r)) return 0;
                                  let u = c[a],
                                    o = u.segment,
                                    f = s[a],
                                    d = f?.[0];
                                  if (
                                    0 ===
                                    (void 0 !== d && L(n, o, d)
                                      ? e(t, r, n, f, u)
                                      : (function e(t, r, n, a) {
                                          if (a.prefetchHints & l.PrefetchHint.HasRuntimePrefetch)
                                            return (
                                              null === r.spawnedRuntimePrefetches
                                                ? (r.spawnedRuntimePrefetches = new Set([
                                                    a.requestKey,
                                                  ]))
                                                : r.spawnedRuntimePrefetches.add(a.requestKey),
                                              2
                                            );
                                          let u = (0, i.readOrCreateSegmentCacheEntry)(
                                            t,
                                            r.fetchStrategy,
                                            a,
                                          );
                                          if ((F(t, r, n, u, r.key, a), null !== a.slots)) {
                                            if (!O(r)) return 0;
                                            for (let l in a.slots)
                                              if (0 === e(t, r, n, a.slots[l])) return 0;
                                          }
                                          return 2;
                                        })(t, r, n, u))
                                  )
                                    return 0;
                                }
                              return 2;
                            })(e, t, r, t.treeAtTimeOfPrefetch, c))
                        )
                          return 0;
                        let o = t.spawnedRuntimePrefetches;
                        if (null !== o) {
                          let n = new Map();
                          M(e, t, r, n, s.FetchStrategy.PPRRuntime);
                          let a = (function e(t, r, n, a, l, u) {
                            if (l.has(a.requestKey))
                              return I(t, r, n, a, !1, u, s.FetchStrategy.PPRRuntime);
                            let i = {},
                              o = a.slots;
                            if (null !== o)
                              for (let a in o) {
                                let s = o[a];
                                i[a] = e(t, r, n, s, l, u);
                              }
                            return [a.segment, i, null, null];
                          })(e, t, r, c, o, n);
                          n.size > 0 &&
                            w(
                              (0, i.fetchSegmentPrefetchesUsingDynamicRequest)(
                                t,
                                r,
                                s.FetchStrategy.PPRRuntime,
                                a,
                                n,
                              ),
                            );
                        }
                        return 2;
                      }
                      case s.FetchStrategy.Full:
                      case s.FetchStrategy.PPRRuntime:
                      case s.FetchStrategy.LoadingBoundary: {
                        let n = new Map();
                        M(e, t, r, n, o);
                        let a = (function e(t, r, n, a, u, o, c) {
                          let f = a[1],
                            d = u.slots,
                            h = {};
                          if (null !== d)
                            for (let a in d) {
                              let u = d[a],
                                p = u.segment,
                                y = f[a],
                                _ = y?.[0];
                              if (void 0 !== _ && L(n, p, _)) {
                                let l = e(t, r, n, y, u, o, c);
                                h[a] = l;
                              } else
                                switch (c) {
                                  case s.FetchStrategy.LoadingBoundary: {
                                    let e =
                                      (u.prefetchHints &
                                        (l.PrefetchHint.SegmentHasLoadingBoundary |
                                          l.PrefetchHint.SubtreeHasLoadingBoundary)) !=
                                      0
                                        ? (function e(t, r, n, a, u, o) {
                                            let c = null === u ? 'inside-shared-layout' : null,
                                              f = (0, i.readOrCreateSegmentCacheEntry)(
                                                t,
                                                r.fetchStrategy,
                                                a,
                                              );
                                            switch (f.status) {
                                              case i.EntryStatus.Empty:
                                                (o.set(
                                                  a.requestKey,
                                                  (0, i.upgradeToPendingSegment)(
                                                    f,
                                                    s.FetchStrategy.LoadingBoundary,
                                                  ),
                                                ),
                                                  'refetch' !== u && (c = u = 'refetch'));
                                                break;
                                              case i.EntryStatus.Fulfilled:
                                                if (
                                                  (a.prefetchHints &
                                                    l.PrefetchHint.SegmentHasLoadingBoundary) !=
                                                  0
                                                )
                                                  return (0, i.convertRouteTreeToFlightRouterState)(
                                                    a,
                                                  );
                                              case i.EntryStatus.Pending:
                                              case i.EntryStatus.Rejected:
                                            }
                                            let d = {};
                                            if (null !== a.slots)
                                              for (let l in a.slots) {
                                                let i = a.slots[l];
                                                d[l] = e(t, r, n, i, u, o);
                                              }
                                            return [a.segment, d, null, c];
                                          })(t, r, n, u, null, o)
                                        : (0, i.convertRouteTreeToFlightRouterState)(u);
                                    h[a] = e;
                                    break;
                                  }
                                  case s.FetchStrategy.PPRRuntime: {
                                    let e = I(t, r, n, u, !1, o, c);
                                    h[a] = e;
                                    break;
                                  }
                                  case s.FetchStrategy.Full: {
                                    let e = I(t, r, n, u, !1, o, c);
                                    h[a] = e;
                                  }
                                }
                            }
                          return [u.segment, h, null, null];
                        })(e, t, r, t.treeAtTimeOfPrefetch, c, n, o);
                        return (
                          n.size > 0 &&
                            w((0, i.fetchSegmentPrefetchesUsingDynamicRequest)(t, r, o, a, n)),
                          2
                        );
                      }
                    }
                  }
                }
                return 2;
              })(e, t, n);
            if (0 !== a && '' !== r.search) {
              let n = new URL(r.pathname, location.origin),
                a = (0, o.createCacheKey)(n.href, r.nextUrl),
                l = (0, i.readOrCreateRouteCacheEntry)(e, t, a);
              switch (l.status) {
                case i.EntryStatus.Empty:
                  j(t) &&
                    ((l.status = i.EntryStatus.Pending), w((0, i.fetchRouteOnCacheMiss)(l, a)));
                case i.EntryStatus.Pending:
                case i.EntryStatus.Fulfilled:
                case i.EntryStatus.Rejected:
              }
            }
            return a;
          })(e, t),
          n = t.hasBackgroundWork;
        switch (((t.hasBackgroundWork = !1), (t.spawnedRuntimePrefetches = null), r)) {
          case 0:
            return;
          case 1:
            (B(h), (t = H(h)));
            continue;
          case 2:
            (1 === t.phase
              ? ((t.phase = 0), V(h, t))
              : n
                ? ((t.priority = s.PrefetchPriority.Background), V(h, t))
                : B(h),
              (t = H(h)));
            continue;
        }
      }
      null === t && 0 === p && (0, f.cleanup)();
    }
    function j(e) {
      return e.priority === s.PrefetchPriority.Background || ((e.hasBackgroundWork = !0), !1);
    }
    function M(e, t, r, n, a) {
      I(
        e,
        t,
        r,
        r.metadata,
        !1,
        n,
        a === s.FetchStrategy.LoadingBoundary ? s.FetchStrategy.Full : a,
      );
    }
    function I(e, t, r, n, a, l, u) {
      let o = (0, i.readOrCreateSegmentCacheEntry)(e, u, n),
        c = null;
      switch (o.status) {
        case i.EntryStatus.Empty:
          if (
            u === s.FetchStrategy.Full &&
            null !== (0, i.attemptToFulfillDynamicSegmentFromBFCache)(e, o, n)
          )
            break;
          c = (0, i.upgradeToPendingSegment)(o, u);
          break;
        case i.EntryStatus.Fulfilled:
          if (o.isPartial && (0, i.canNewFetchStrategyProvideMoreContent)(o.fetchStrategy, u)) {
            if (
              u === s.FetchStrategy.Full &&
              null !== (0, i.attemptToUpgradeSegmentFromBFCache)(e, n)
            )
              break;
            c = U(e, n, u);
          }
          break;
        case i.EntryStatus.Pending:
        case i.EntryStatus.Rejected:
          (0, i.canNewFetchStrategyProvideMoreContent)(o.fetchStrategy, u) && (c = U(e, n, u));
      }
      let f = {};
      if (null !== n.slots)
        for (let i in n.slots) {
          let o = n.slots[i];
          f[i] = I(e, t, r, o, a || null !== c, l, u);
        }
      null !== c && l.set(n.requestKey, c);
      let d = a || null === c ? null : 'refetch';
      return [n.segment, f, null, d];
    }
    function F(e, t, r, n, a, l) {
      switch (n.status) {
        case i.EntryStatus.Empty:
          w(
            (0, i.fetchSegmentOnCacheMiss)(
              r,
              (0, i.upgradeToPendingSegment)(n, s.FetchStrategy.PPR),
              a,
              l,
            ),
          );
          break;
        case i.EntryStatus.Pending:
          switch (n.fetchStrategy) {
            case s.FetchStrategy.PPR:
            case s.FetchStrategy.PPRRuntime:
            case s.FetchStrategy.Full:
              break;
            case s.FetchStrategy.LoadingBoundary:
              j(t) && D(e, r, a, l);
              break;
            default:
              n.fetchStrategy;
          }
          break;
        case i.EntryStatus.Rejected:
          switch (n.fetchStrategy) {
            case s.FetchStrategy.PPR:
            case s.FetchStrategy.PPRRuntime:
            case s.FetchStrategy.Full:
              break;
            case s.FetchStrategy.LoadingBoundary:
              D(e, r, a, l);
              break;
            default:
              n.fetchStrategy;
          }
        case i.EntryStatus.Fulfilled:
      }
    }
    function D(e, t, r, n) {
      let a = (0, i.readOrCreateRevalidatingSegmentEntry)(e, s.FetchStrategy.PPR, n);
      switch (a.status) {
        case i.EntryStatus.Empty:
          w(
            (0, i.fetchSegmentOnCacheMiss)(
              t,
              (0, i.upgradeToPendingSegment)(a, s.FetchStrategy.PPR),
              r,
              n,
            ),
          );
        case i.EntryStatus.Pending:
        case i.EntryStatus.Fulfilled:
        case i.EntryStatus.Rejected:
      }
    }
    function U(e, t, r) {
      let n = (0, i.readOrCreateRevalidatingSegmentEntry)(e, r, t);
      if (n.status === i.EntryStatus.Empty) return (0, i.upgradeToPendingSegment)(n, r);
      if ((0, i.canNewFetchStrategyProvideMoreContent)(n.fetchStrategy, r)) {
        let n = (0, i.overwriteRevalidatingSegmentCacheEntry)(e, r, t);
        return (0, i.upgradeToPendingSegment)(n, r);
      }
      switch (n.status) {
        case i.EntryStatus.Pending:
        case i.EntryStatus.Fulfilled:
        case i.EntryStatus.Rejected:
        default:
          return null;
      }
    }
    function L(e, t, r) {
      return r === c.PAGE_SEGMENT_KEY
        ? t ===
            (0, c.addSearchParamsIfPageSegment)(
              c.PAGE_SEGMENT_KEY,
              Object.fromEntries(new URLSearchParams(e.renderedSearch)),
            )
        : (0, u.matchSegment)(r, t);
    }
    function x(e, t) {
      let r = t.priority - e.priority;
      if (0 !== r) return r;
      let n = t.phase - e.phase;
      return 0 !== n ? n : t.sortId - e.sortId;
    }
    function k(e, t) {
      let r = e.length;
      (e.push(t), (t._heapIndex = r), $(e, t, r));
    }
    function H(e) {
      return 0 === e.length ? null : e[0];
    }
    function B(e) {
      if (0 === e.length) return null;
      let t = e[0];
      t._heapIndex = -1;
      let r = e.pop();
      return (r !== t && ((e[0] = r), (r._heapIndex = 0), K(e, r, 0)), t);
    }
    function V(e, t) {
      let r = t._heapIndex;
      -1 !== r && (0 === r ? K(e, t, 0) : x(e[(r - 1) >>> 1], t) > 0 ? $(e, t, r) : K(e, t, r));
    }
    function $(e, t, r) {
      let n = r;
      for (; n > 0; ) {
        let r = (n - 1) >>> 1,
          a = e[r];
        if (!(x(a, t) > 0)) return;
        ((e[r] = t), (t._heapIndex = r), (e[n] = a), (a._heapIndex = n), (n = r));
      }
    }
    function K(e, t, r) {
      let n = r,
        a = e.length,
        l = a >>> 1;
      for (; n < l; ) {
        let r = (n + 1) * 2 - 1,
          l = e[r],
          u = r + 1,
          i = e[u];
        if (0 > x(l, t))
          u < a && 0 > x(i, l)
            ? ((e[n] = i), (i._heapIndex = n), (e[u] = t), (t._heapIndex = u), (n = u))
            : ((e[n] = l), (l._heapIndex = n), (e[r] = t), (t._heapIndex = r), (n = r));
        else {
          if (!(u < a && 0 > x(i, t))) return;
          ((e[n] = i), (i._heapIndex = n), (e[u] = t), (t._heapIndex = u), (n = u));
        }
      }
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  