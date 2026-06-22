/*
 * [app-experience #94109] Modul mit 1 Export(en)
 * Exporte: default
 * Requires: #55682, #43476, #71645, #41624, #72383, #82604
 * Quelle: site/_next/static/chunks/07lhk_q6pmm3r.js — Turbopack-Modul 94109.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
94109,
  (e, t, n) => {
    'use strict';
    (Object.defineProperty(n, '__esModule', { value: !0 }),
      Object.defineProperty(n, 'default', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    let r = e.r(55682),
      l = e.r(43476);
    e.r(71645);
    let a = r._(e.r(41624)),
      o = e.r(72383),
      i = e.r(82604),
      u = 'u' > typeof window && (0, i.isBot)(window.navigator.userAgent);
    function s({ children: e, errorComponent: t, errorStyles: n, errorScripts: r }) {
      return u
        ? (0, l.jsx)(a.default, { children: e })
        : (0, l.jsx)(o.ErrorBoundary, {
            errorComponent: t,
            errorStyles: n,
            errorScripts: r,
            children: e,
          });
    }
    ('function' == typeof n.default || ('object' == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, '__esModule', { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
  