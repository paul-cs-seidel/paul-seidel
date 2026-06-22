/*
 * [app-animation #97367] Modul (ohne erkannte Exporte)
 * Requires: #54839
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 97367.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
97367,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      MetadataBoundary: function () {
        return i;
      },
      OutletBoundary: function () {
        return s;
      },
      RootLayoutBoundary: function () {
        return c;
      },
      ViewportBoundary: function () {
        return o;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let l = e.r(54839),
      u = {
        [l.METADATA_BOUNDARY_NAME]: function ({ children: e }) {
          return e;
        },
        [l.VIEWPORT_BOUNDARY_NAME]: function ({ children: e }) {
          return e;
        },
        [l.OUTLET_BOUNDARY_NAME]: function ({ children: e }) {
          return e;
        },
        [l.ROOT_LAYOUT_BOUNDARY_NAME]: function ({ children: e }) {
          return e;
        },
      },
      i = u[l.METADATA_BOUNDARY_NAME.slice(0)],
      o = u[l.VIEWPORT_BOUNDARY_NAME.slice(0)],
      s = u[l.OUTLET_BOUNDARY_NAME.slice(0)],
      c = u[l.ROOT_LAYOUT_BOUNDARY_NAME.slice(0)];
  }