/*
 * [app-animation #43369] Modul (ohne erkannte Exporte)
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 43369.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
43369,
  (e, t, r) => {
    'use strict';
    let n;
    Object.defineProperty(r, '__esModule', { value: !0 });
    var a = {
      getAssetToken: function () {
        return o;
      },
      getAssetTokenQuery: function () {
        return s;
      },
      getDeploymentId: function () {
        return u;
      },
      getDeploymentIdQuery: function () {
        return i;
      },
    };
    for (var l in a) Object.defineProperty(r, l, { enumerable: !0, get: a[l] });
    function u() {
      return n;
    }
    function i(e = !1) {
      let t = n;
      return t ? `${e ? '&' : '?'}dpl=${t}` : '';
    }
    function o() {
      return !1;
    }
    function s(e = !1) {
      return '';
    }
    'u' > typeof window
      ? ((n = document.documentElement.dataset.dplId),
        delete document.documentElement.dataset.dplId)
      : (n = void 0);
  },
  