/*
 * [app-animation #9396] Modul (ohne erkannte Exporte)
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 9396.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
9396,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n,
      a,
      l,
      u = {
        FetchStrategy: function () {
          return c;
        },
        NavigationResultTag: function () {
          return o;
        },
        PrefetchPriority: function () {
          return s;
        },
      };
    for (var i in u) Object.defineProperty(r, i, { enumerable: !0, get: u[i] });
    var o =
        (((n = {})[(n.MPA = 0)] = 'MPA'),
        (n[(n.Success = 1)] = 'Success'),
        (n[(n.NoOp = 2)] = 'NoOp'),
        (n[(n.Async = 3)] = 'Async'),
        n),
      s =
        (((a = {})[(a.Intent = 2)] = 'Intent'),
        (a[(a.Default = 1)] = 'Default'),
        (a[(a.Background = 0)] = 'Background'),
        a),
      c =
        (((l = {})[(l.LoadingBoundary = 0)] = 'LoadingBoundary'),
        (l[(l.PPR = 1)] = 'PPR'),
        (l[(l.PPRRuntime = 2)] = 'PPRRuntime'),
        (l[(l.Full = 3)] = 'Full'),
        l);
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  