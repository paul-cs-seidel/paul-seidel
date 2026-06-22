/*
 * [app-animation #73790] Modul mit 1 Export(en)
 * Exporte: restoreReducer
 * Requires: #34727, #95871, #60355, #79027
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 73790.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
73790,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'restoreReducer', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let n = e.r(34727),
      a = e.r(95871),
      l = e.r(60355),
      u = e.r(79027);
    function i(e, t) {
      let r,
        i,
        o = t.historyState;
      o ? ((r = o.tree), (i = o.renderedSearch)) : ((r = e.tree), (i = e.renderedSearch));
      let s = new URL(e.canonicalUrl, location.origin),
        c = t.url,
        f = (0, n.extractPathFromFlightRouterState)(r) ?? c.pathname,
        d = Date.now(),
        h = { separateRefreshUrls: null, scrollRef: null },
        p = (0, l.convertServerPatchToFullTree)(d, r, null, i, u.UnknownDynamicStaleTime),
        y = (0, a.startPPRNavigation)(
          d,
          s,
          e.renderedSearch,
          e.cache,
          e.tree,
          p.routeTree,
          p.metadataVaryPath,
          a.FreshnessPolicy.HistoryTraversal,
          null,
          null,
          p.dynamicStaleAt,
          !1,
          h,
        );
      return null === y
        ? (0, l.completeHardNavigation)(e, c, 'replace')
        : ((0, a.spawnDynamicRequests)(
            y,
            c,
            f,
            a.FreshnessPolicy.HistoryTraversal,
            h,
            null,
            'replace',
          ),
          (0, l.completeTraverseNavigation)(e, c, i, y.node, y.route, f));
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  