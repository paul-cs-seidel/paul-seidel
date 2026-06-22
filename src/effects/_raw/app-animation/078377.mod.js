/*
 * [app-animation #78377] Modul (ohne erkannte Exporte)
 * Requires: #71645, #51191
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 78377.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
78377,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      handleHardNavError: function () {
        return u;
      },
      useNavFailureHandler: function () {
        return i;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    e.r(71645);
    let l = e.r(51191);
    function u(e) {
      return (
        !!(e && 'u' > typeof window) &&
        !!window.next.__pendingUrl &&
        (0, l.createHrefFromUrl)(new URL(window.location.href)) !==
          (0, l.createHrefFromUrl)(window.next.__pendingUrl) &&
        (console.error('Error occurred during navigation, falling back to hard navigation', e),
        (window.location.href = window.next.__pendingUrl.toString()),
        !0)
      );
    }
    function i() {}
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  