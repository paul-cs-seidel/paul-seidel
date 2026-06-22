/*
 * [app-animation #88540] Modul (ohne erkannte Exporte)
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 88540.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
88540,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n,
      a,
      l = {
        ACTION_HMR_REFRESH: function () {
          return f;
        },
        ACTION_NAVIGATE: function () {
          return o;
        },
        ACTION_REFRESH: function () {
          return i;
        },
        ACTION_RESTORE: function () {
          return s;
        },
        ACTION_SERVER_ACTION: function () {
          return d;
        },
        ACTION_SERVER_PATCH: function () {
          return c;
        },
        PrefetchKind: function () {
          return h;
        },
        ScrollBehavior: function () {
          return p;
        },
      };
    for (var u in l) Object.defineProperty(r, u, { enumerable: !0, get: l[u] });
    let i = 'refresh',
      o = 'navigate',
      s = 'restore',
      c = 'server-patch',
      f = 'hmr-refresh',
      d = 'server-action';
    var h = (((n = {}).AUTO = 'auto'), (n.FULL = 'full'), n),
      p = (((a = {})[(a.Default = 0)] = 'Default'), (a[(a.NoScroll = 1)] = 'NoScroll'), a);
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  