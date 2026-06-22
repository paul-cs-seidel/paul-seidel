/*
 * [app-animation #86720] Modul mit 1 Export(en)
 * Exporte: hmrRefreshReducer
 * Requires: #69845, #95871
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 86720.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
86720,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'hmrRefreshReducer', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    let n = e.r(69845),
      a = e.r(95871);
    function l(e) {
      return (0, n.refreshDynamicData)(e, a.FreshnessPolicy.HMRRefresh);
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  