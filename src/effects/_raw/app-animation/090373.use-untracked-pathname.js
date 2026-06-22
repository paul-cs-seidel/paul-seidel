/*
 * [app-animation #90373] Modul mit 1 Export(en)
 * Exporte: useUntrackedPathname
 * Requires: #71645, #61994, #62141
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 90373.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
90373,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'useUntrackedPathname', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    let n = e.r(71645),
      a = e.r(61994);
    function l() {
      return !(function () {
        if ('u' < typeof window) {
          let { workUnitAsyncStorage: t } = e.r(62141),
            r = t.getStore();
          if (!r) return !1;
          switch (r.type) {
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'validation-client':
              let n = r.fallbackRouteParams;
              return !!n && n.size > 0;
          }
        }
        return !1;
      })()
        ? (0, n.useContext)(a.PathnameContext)
        : null;
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  