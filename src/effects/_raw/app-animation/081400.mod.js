/*
 * [app-animation #81400] Modul (ohne erkannte Exporte)
 * Requires: #21768, #41538
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 81400.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
81400,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      isNavigationLocked: function () {
        return o;
      },
      startListeningForInstantNavigationCookie: function () {
        return l;
      },
      transitionToCapturedSPA: function () {
        return u;
      },
      updateCapturedSPAToTree: function () {
        return i;
      },
      waitForNavigationLockIfActive: function () {
        return s;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    function l() {}
    function u(e, t) {}
    function i(e, t) {}
    function o() {
      return !1;
    }
    async function s() {}
    (e.r(21768),
      e.r(41538),
      ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default)));
  },
  