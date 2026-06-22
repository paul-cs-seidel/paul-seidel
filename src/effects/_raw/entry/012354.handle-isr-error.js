/*
 * [entry #12354] Modul mit 1 Export(en)
 * Exporte: handleISRError
 * Requires: #63599
 * Quelle: site/_next/static/chunks/15xrurgzs99gv.js — Turbopack-Modul 12354.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
12354,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'handleISRError', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let n = 'u' < typeof window ? e.r(63599).workAsyncStorage : void 0;
    function o({ error: e }) {
      if (n) {
        let t = n.getStore();
        if (t?.isStaticGeneration) throw (e && console.error(e), e);
      }
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  