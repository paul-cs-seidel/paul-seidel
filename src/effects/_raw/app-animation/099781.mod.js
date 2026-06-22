/*
 * [app-animation #99781] Modul (ohne erkannte Exporte)
 * Requires: #88540, #4924, #71645, #64245, #9396, #1411, #60355, #41538, #96167, #95871, #5550, #57630 …
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 99781.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
99781,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      createMutableActionQueue: function () {
        return m;
      },
      dispatchNavigateAction: function () {
        return P;
      },
      dispatchTraverseAction: function () {
        return S;
      },
      getCurrentAppRouterState: function () {
        return R;
      },
      publicAppRouterInstance: function () {
        return b;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let l = e.r(88540),
      u = e.r(4924),
      i = e.r(71645),
      o = e.r(64245),
      s = e.r(9396),
      c = e.r(1411);
    e.r(60355);
    let f = e.r(41538);
    (e.r(96167), e.r(95871));
    let d = e.r(5550),
      h = e.r(57630),
      p = e.r(91949),
      y = e.r(48277);
    function _(e, t) {
      null !== e.pending
        ? ((e.pending = e.pending.next),
          null !== e.pending && g({ actionQueue: e, action: e.pending, setState: t }))
        : e.needsRefresh && ((e.needsRefresh = !1), e.dispatch({ type: l.ACTION_REFRESH }, t));
    }
    async function g({ actionQueue: e, action: t, setState: r }) {
      let n = e.state;
      e.pending = t;
      let a = t.payload,
        u = e.action(n, a);
      function i(n) {
        if (t.discarded) {
          (t.payload.type === l.ACTION_SERVER_ACTION &&
            t.payload.didRevalidate &&
            (e.needsRefresh = !0),
            _(e, r));
          return;
        }
        ((e.state = n), _(e, r), t.resolve(n));
      }
      (0, o.isThenable)(u)
        ? u.then(i, (n) => {
            (_(e, r), t.reject(n));
          })
        : i(u);
    }
    let v = null;
    function m(e, t) {
      let r = {
        state: e,
        dispatch: (e, t) =>
          (function (e, t, r) {
            let n = { resolve: r, reject: () => {} };
            if (t.type !== l.ACTION_RESTORE) {
              let e = new Promise((e, t) => {
                n = { resolve: e, reject: t };
              });
              (0, i.startTransition)(() => {
                r(e);
              });
            }
            let a = { payload: t, next: null, resolve: n.resolve, reject: n.reject };
            null === e.pending
              ? ((e.last = a), g({ actionQueue: e, action: a, setState: r }))
              : t.type === l.ACTION_NAVIGATE || t.type === l.ACTION_RESTORE
                ? ((e.pending.discarded = !0),
                  (a.next = e.pending.next),
                  g({ actionQueue: e, action: a, setState: r }))
                : (null !== e.last && (e.last.next = a), (e.last = a));
          })(r, e, t),
        action: async (e, t) => (0, u.reducer)(e, t),
        pending: null,
        last: null,
        onRouterTransitionStart:
          null !== t && 'function' == typeof t.onRouterTransitionStart
            ? t.onRouterTransitionStart
            : null,
      };
      if ('u' > typeof window) {
        if (null !== v)
          throw Object.defineProperty(
            Error('Internal Next.js Error: createMutableActionQueue was called more than once'),
            '__NEXT_ERROR_CODE',
            { value: 'E624', enumerable: !1, configurable: !0 },
          );
        v = r;
      }
      return r;
    }
    function R() {
      return null !== v ? v.state : null;
    }
    function E() {
      return null !== v ? v.onRouterTransitionStart : null;
    }
    function P(e, t, r, n, a) {
      if (a) for (let e of a) (0, i.addTransitionType)(e);
      let u = new URL((0, d.addBasePath)(e), location.href);
      (0, p.setLinkForCurrentNavigation)(n);
      let o = E();
      (null !== o && o(e, t),
        (0, f.dispatchAppRouterAction)({
          type: l.ACTION_NAVIGATE,
          url: u,
          isExternalUrl: (0, h.isExternalURL)(u),
          locationSearch: location.search,
          scrollBehavior: r,
          navigateType: t,
        }));
    }
    function S(e, t) {
      let r = E();
      (null !== r && r(e, 'traverse'),
        (0, f.dispatchAppRouterAction)({
          type: l.ACTION_RESTORE,
          url: new URL(e),
          historyState: t,
        }));
    }
    let b = {
      back: () => window.history.back(),
      forward: () => window.history.forward(),
      prefetch: (e, t) => {
        let r;
        if ((0, y.isJavaScriptURLString)(e))
          throw Object.defineProperty(
            Error('Next.js has blocked a javascript: URL as a security precaution.'),
            '__NEXT_ERROR_CODE',
            { value: 'E978', enumerable: !1, configurable: !0 },
          );
        let n = (function () {
          if (null === v)
            throw Object.defineProperty(
              Error('Internal Next.js error: Router action dispatched before initialization.'),
              '__NEXT_ERROR_CODE',
              { value: 'E668', enumerable: !1, configurable: !0 },
            );
          return v;
        })();
        switch (t?.kind ?? l.PrefetchKind.AUTO) {
          case l.PrefetchKind.AUTO:
            r = s.FetchStrategy.PPR;
            break;
          case l.PrefetchKind.FULL:
            r = s.FetchStrategy.Full;
            break;
          default:
            r = s.FetchStrategy.PPR;
        }
        (0, c.prefetch)(e, n.state.nextUrl, n.state.tree, r, t?.onInvalidate ?? null);
      },
      replace: (e, t) => {
        if ((0, y.isJavaScriptURLString)(e))
          throw Object.defineProperty(
            Error('Next.js has blocked a javascript: URL as a security precaution.'),
            '__NEXT_ERROR_CODE',
            { value: 'E978', enumerable: !1, configurable: !0 },
          );
        (0, i.startTransition)(() => {
          P(
            e,
            'replace',
            t?.scroll === !1 ? l.ScrollBehavior.NoScroll : l.ScrollBehavior.Default,
            null,
            t?.transitionTypes,
          );
        });
      },
      push: (e, t) => {
        if ((0, y.isJavaScriptURLString)(e))
          throw Object.defineProperty(
            Error('Next.js has blocked a javascript: URL as a security precaution.'),
            '__NEXT_ERROR_CODE',
            { value: 'E978', enumerable: !1, configurable: !0 },
          );
        (0, i.startTransition)(() => {
          P(
            e,
            'push',
            t?.scroll === !1 ? l.ScrollBehavior.NoScroll : l.ScrollBehavior.Default,
            null,
            t?.transitionTypes,
          );
        });
      },
      refresh: () => {
        (0, i.startTransition)(() => {
          (0, f.dispatchAppRouterAction)({ type: l.ACTION_REFRESH });
        });
      },
      hmrRefresh: () => {
        throw Object.defineProperty(
          Error('hmrRefresh can only be used in development mode. Please use refresh instead.'),
          '__NEXT_ERROR_CODE',
          { value: 'E485', enumerable: !1, configurable: !0 },
        );
      },
    };
    ('u' > typeof window && window.next && (window.next.router = b),
      ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default)));
  },
  