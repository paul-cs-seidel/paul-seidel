/*
 * [app-animation #41538] Modul (ohne erkannte Exporte)
 * Requires: #90809, #71645, #64245, #88540
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 41538.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
41538,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      dispatchAppRouterAction: function () {
        return s;
      },
      dispatchGestureState: function () {
        return f;
      },
      refreshOnInstantNavigationUnlock: function () {
        return o;
      },
      useActionQueue: function () {
        return d;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let l = e.r(90809)._(e.r(71645)),
      u = e.r(64245);
    e.r(88540);
    let i = null;
    function o() {}
    function s(e) {
      if (null === i)
        throw Object.defineProperty(
          Error('Internal Next.js error: Router action dispatched before initialization.'),
          '__NEXT_ERROR_CODE',
          { value: 'E668', enumerable: !1, configurable: !0 },
        );
      i(e);
    }
    let c = null;
    function f(e) {
      if (null === c)
        throw Object.defineProperty(
          Error('Internal Next.js error: Router action dispatched before initialization.'),
          '__NEXT_ERROR_CODE',
          { value: 'E668', enumerable: !1, configurable: !0 },
        );
      c(e);
    }
    function d(e) {
      let [t, r] = l.default.useState(e.state),
        [n, a] = (0, l.useOptimistic)(t);
      ('u' > typeof window && (c = a), 'u' > typeof window && (i = (t) => e.dispatch(t, r)));
      let o = (0, l.useMemo)(() => n, [n]);
      return (0, u.isThenable)(o) ? (0, l.use)(o) : o;
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  