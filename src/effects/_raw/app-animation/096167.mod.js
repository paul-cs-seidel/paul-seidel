/*
 * [app-animation #96167] Modul (ohne erkannte Exporte)
 * Requires: #20896, #33906, #56655
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 96167.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
96167,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      discoverKnownRoute: function () {
        return c;
      },
      matchKnownRoute: function () {
        return d;
      },
      resetKnownRoutes: function () {
        return h;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let l = e.r(20896),
      u = e.r(33906),
      i = e.r(56655);
    function o() {
      return {
        staticChildren: null,
        dynamicChild: null,
        dynamicChildParamName: null,
        dynamicChildParamType: null,
        pattern: null,
      };
    }
    let s = o();
    function c(e, t, r, n, a, u, i, o, c, d) {
      let h = t.split('/').filter((e) => '' !== e),
        p = h.length > 0 ? h[0] : null,
        y = h.length > 0 ? h.slice(1) : [];
      if (null !== n) {
        let h = (0, l.fulfillRouteCacheEntry)(e, n, a, u, i, o, c);
        return (d && (h.hasDynamicRewrite = !0), f(s, a, p, y, h, e, t, r, a, u, i, o, c, d), h);
      }
      return f(s, a, p, y, null, e, t, r, a, u, i, o, c, d);
    }
    function f(e, t, r, n, a, i, s, c, d, h, p, y, _, g) {
      let v,
        m,
        R = t.segment,
        E = null,
        P = null,
        S = null;
      'string' == typeof R
        ? (v = (0, u.doesStaticSegmentAppearInURL)(R))
        : ((E = R[0]), (P = R[2]), (S = R[3]), (v = !0));
      let b = e,
        T = r,
        O = n;
      if (v) {
        if (null === E && r !== R)
          return null !== a ? a : (0, l.writeRouteIntoCache)(i, s, c, d, h, p, y, _);
        if (null !== E && null !== P) {
          if (
            ((b = (function (e, t, r) {
              if (null !== e.dynamicChild) return e.dynamicChild;
              let n = o();
              return (
                (e.dynamicChild = n),
                (e.dynamicChildParamName = t),
                (e.dynamicChildParamType = r),
                n
              );
            })(e, E, P)),
            null !== S)
          )
            for (let t of (null === e.staticChildren && (e.staticChildren = new Map()), S))
              e.staticChildren.has(t) || e.staticChildren.set(t, o());
        } else {
          null === e.staticChildren && (e.staticChildren = new Map());
          let t = e.staticChildren.get(r);
          (void 0 === t && ((t = o()), e.staticChildren.set(r, t)), (b = t));
        }
        ((T = n.length > 0 ? n[0] : null), (O = n.length > 0 ? n.slice(1) : []));
      }
      let w = t.slots,
        A = null;
      if (null !== w) {
        for (let e in w) {
          let t = w[e];
          null === t.refreshState && (A = f(b, t, T, O, a, i, s, c, d, h, p, y, _, g));
        }
        return null !== A ? A : null !== a ? a : (0, l.writeRouteIntoCache)(i, s, c, d, h, p, y, _);
      }
      return null !== b.pattern
        ? (g && (b.pattern.hasDynamicRewrite = !0), b.pattern)
        : ((m = null !== a ? a : (0, l.writeRouteIntoCache)(i, s, c, d, h, p, y, _)),
          g && (m.hasDynamicRewrite = !0),
          (b.pattern = m),
          m);
    }
    function d(e, t) {
      let r = e.split('/').filter((e) => '' !== e),
        n = new Map(),
        a = (function e(t, r, n, a) {
          let l = n < r.length ? r[n] : null;
          if (null === t.staticChildren) {
            if (null === l) {
              let e = t.pattern;
              if (null !== e && !e.hasDynamicRewrite) return { part: t, pattern: e };
            }
            return null;
          }
          if (null !== l) {
            let u = t.staticChildren.get(l);
            if (void 0 !== u) {
              if (null === u.pattern && null === u.dynamicChild && null === u.staticChildren)
                return null;
              let t = e(u, r, n + 1, a);
              return null !== t ? t : null;
            }
          }
          if (null !== t.dynamicChild) {
            let u = t.dynamicChild,
              i = t.dynamicChildParamName,
              o = t.dynamicChildParamType,
              s = u.pattern;
            switch (o) {
              case 'c':
                if (null !== s && !s.hasDynamicRewrite && null !== l)
                  return (a.set(i, r.slice(n)), { part: u, pattern: s });
                break;
              case 'oc':
                if (null !== s && !s.hasDynamicRewrite) {
                  if (null !== l) return (a.set(i, r.slice(n)), { part: u, pattern: s });
                  if (null === t.pattern || t.pattern.hasDynamicRewrite)
                    return (a.set(i, []), { part: u, pattern: s });
                }
                break;
              case 'd':
                if (null !== l) return (a.set(i, l), e(u, r, n + 1, a));
                break;
              case 'ci(..)(..)':
              case 'ci(.)':
              case 'ci(..)':
              case 'ci(...)':
              case 'di(..)(..)':
              case 'di(.)':
              case 'di(..)':
              case 'di(...)':
                return null;
            }
          }
          if (null === l) {
            let e = t.pattern;
            if (null !== e && !e.hasDynamicRewrite) return { part: t, pattern: e };
          }
          return null;
        })(s, r, 0, n);
      if (null === a) return null;
      let u = a.part,
        o = a.pattern;
      if (o.couldBeIntercepted) return null;
      let c = { metadataVaryPath: null },
        f = (function e(t, r, n, a, l) {
          let u,
            o = t.segment,
            s = o;
          if ('string' != typeof o) {
            let e = o[0],
              t = o[2],
              n = o[3],
              l = r.get(e);
            if (void 0 !== l) {
              let r = Array.isArray(l) ? l.join('/') : l;
              ((s = [e, r, t, n]), (u = (0, i.appendLayoutVaryPath)(a, r, e)));
            } else u = a;
          } else u = a;
          let c = null;
          if (null !== t.slots) for (let a in ((c = {}), t.slots)) c[a] = e(t.slots[a], r, n, u, l);
          if (t.isPage) {
            let e = (0, i.finalizePageVaryPath)(t.requestKey, n, u);
            return (
              null === l.metadataVaryPath &&
                (l.metadataVaryPath = (0, i.finalizeMetadataVaryPath)(t.requestKey, n, u)),
              {
                requestKey: t.requestKey,
                segment: s,
                refreshState: t.refreshState,
                slots: c,
                prefetchHints: t.prefetchHints,
                isPage: !0,
                varyPath: e,
              }
            );
          }
          {
            let e = (0, i.finalizeLayoutVaryPath)(t.requestKey, u);
            return {
              requestKey: t.requestKey,
              segment: s,
              refreshState: t.refreshState,
              slots: c,
              prefetchHints: t.prefetchHints,
              isPage: !1,
              varyPath: e,
            };
          }
        })(o.tree, n, t, null, c),
        d = c.metadataVaryPath;
      if (null === d) return null;
      let h = (0, l.createMetadataRouteTree)(d),
        p = {
          canonicalUrl: e + t,
          status: l.EntryStatus.Fulfilled,
          blockedTasks: null,
          tree: f,
          metadata: h,
          couldBeIntercepted: o.couldBeIntercepted,
          supportsPerSegmentPrefetching: o.supportsPerSegmentPrefetching,
          hasDynamicRewrite: !1,
          renderedSearch: t,
          ref: null,
          size: o.size,
          staleAt: o.staleAt,
          version: o.version,
        };
      return ((u.pattern = p), p);
    }
    function h() {
      s = o();
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  