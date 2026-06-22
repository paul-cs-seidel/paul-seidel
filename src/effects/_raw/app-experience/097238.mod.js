/*
 * [app-experience #97238] Modul (ohne erkannte Exporte)
 * Requires: #55682, #32061, #2023, #28279
 * Quelle: site/_next/static/chunks/07lhk_q6pmm3r.js — Turbopack-Modul 97238.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
97238,
  (e, t, n) => {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });
    var r = {
      isRecoverableError: function () {
        return c;
      },
      onRecoverableError: function () {
        return f;
      },
    };
    for (var l in r) Object.defineProperty(n, l, { enumerable: !0, get: r[l] });
    let a = e.r(55682),
      o = e.r(32061),
      i = a._(e.r(2023)),
      u = e.r(28279),
      s = new WeakSet();
    function c(e) {
      return s.has(e);
    }
    let f = (e) => {
      let t = (0, i.default)(e) && 'cause' in e ? e.cause : e;
      (0, o.isBailoutToCSRError)(t) || (0, u.reportGlobalError)(t);
    };
    ('function' == typeof n.default || ('object' == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, '__esModule', { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
  