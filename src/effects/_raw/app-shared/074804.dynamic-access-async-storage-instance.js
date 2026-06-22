/*
 * [app-shared #74804] Modul mit 1 Export(en)
 * Exporte: dynamicAccessAsyncStorageInstance
 * Requires: #90317
 * Quelle: site/_next/static/chunks/0dbhjjzl8qfwv.js — Turbopack-Modul 74804.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
74804,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'dynamicAccessAsyncStorageInstance', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = (0, e.r(90317).createAsyncLocalStorage)();
  },
  