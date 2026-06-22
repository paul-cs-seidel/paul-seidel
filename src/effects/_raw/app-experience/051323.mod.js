/*
 * [app-experience #51323] Modul (ohne erkannte Exporte)
 * Requires: #55682, #65713, #32061, #28279, #72383, #68027
 * Quelle: site/_next/static/chunks/07lhk_q6pmm3r.js — Turbopack-Modul 51323.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
51323,
  (e, t, n) => {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });
    var r = {
      onCaughtError: function () {
        return d;
      },
      onUncaughtError: function () {
        return p;
      },
    };
    for (var l in r) Object.defineProperty(n, l, { enumerable: !0, get: r[l] });
    let a = e.r(55682),
      o = e.r(65713),
      i = e.r(32061),
      u = e.r(28279),
      s = e.r(72383),
      c = a._(e.r(68027)),
      f = {
        decorateDevError: (e) => e,
        handleClientError: () => {},
        originConsoleError: console.error.bind(console),
      };
    function d(e, t) {
      let n,
        r = t.errorBoundary?.constructor;
      if (
        (n =
          n || (r === s.ErrorBoundaryHandler && t.errorBoundary.props.errorComponent === c.default))
      )
        return p(e);
      (0, i.isBailoutToCSRError)(e) || (0, o.isNextRouterError)(e) || f.originConsoleError(e);
    }
    function p(e) {
      (0, i.isBailoutToCSRError)(e) || (0, o.isNextRouterError)(e) || (0, u.reportGlobalError)(e);
    }
    ('function' == typeof n.default || ('object' == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, '__esModule', { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
  