/*
 * [app-animation #45794] Modul mit 2 Export(en)
 * Exporte: handled, serverActionReducer
 * Requires: #32120, #92245, #21768, #92838, #35326, #88540, #27801, #51191, #84356, #50590, #24063, #87250 …
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 45794.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
45794,
  (e, t, r) => {
    'use strict';
    let n;
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'serverActionReducer', {
        enumerable: !0,
        get: function () {
          return M;
        },
      }));
    let a = e.r(32120),
      l = e.r(92245),
      u = e.r(21768),
      i = e.r(92838),
      o = e.r(35326),
      s = e.r(88540),
      c = e.r(27801),
      f = e.r(51191),
      d = e.r(84356),
      h = e.r(50590),
      p = e.r(24063),
      y = e.r(87250),
      _ = e.r(52817),
      g = e.r(39747),
      v = e.r(20896),
      m = e.r(77709),
      R = e.r(43369),
      E = e.r(32992),
      P = e.r(63416),
      S = e.r(60355),
      b = e.r(96167),
      T = e.r(39146),
      O = e.r(57630),
      w = e.r(95871),
      A = e.r(87288),
      N = e.r(79027),
      C = o.createFromFetch;
    async function j(e, t, { actionId: r, actionArgs: s }) {
      let f,
        d,
        p,
        y,
        _ = (0, o.createTemporaryReferenceSet)(),
        v = (0, g.extractInfoFromServerReferenceId)(r),
        m = (0, g.omitUnusedArgs)(s, v),
        S = await (0, o.encodeReply)(m, { temporaryReferences: _ }),
        b = {
          Accept: u.RSC_CONTENT_TYPE_HEADER,
          [u.ACTION_HEADER]: r,
          [u.NEXT_ROUTER_STATE_TREE_HEADER]: (0, h.prepareFlightRouterStateForRequest)(e.tree),
        },
        O = (0, R.getDeploymentId)();
      (O && (b['x-deployment-id'] = O), t && (b[u.NEXT_URL] = t));
      let w = await fetch(e.canonicalUrl, { method: 'POST', headers: b, body: S });
      if ('1' === w.headers.get(u.NEXT_ACTION_NOT_FOUND_HEADER))
        throw Object.defineProperty(
          new i.UnrecognizedActionError(`Server Action "${r}" was not found on the server.
Read more: https://nextjs.org/docs/messages/failed-to-find-server-action`),
          '__NEXT_ERROR_CODE',
          { value: 'E715', enumerable: !1, configurable: !0 },
        );
      let N = w.headers.get('x-action-redirect'),
        [M, I] = N?.split(';') || [];
      switch (I) {
        case 'push':
          f = 'push';
          break;
        case 'replace':
          f = 'replace';
          break;
        default:
          f = void 0;
      }
      let F = !!w.headers.get(u.NEXT_IS_PRERENDER_HEADER),
        D = T.ActionDidNotRevalidate;
      try {
        let e = w.headers.get('x-action-revalidated');
        if (e) {
          let t = JSON.parse(e);
          (t === T.ActionDidRevalidateStaticAndDynamic || t === T.ActionDidRevalidateDynamicOnly) &&
            (D = t);
        }
      } catch {}
      let U = M ? (0, c.assignLocation)(M, new URL(e.canonicalUrl, window.location.href)) : void 0,
        L = w.headers.get('content-type'),
        x = !!(L && L.startsWith(u.RSC_CONTENT_TYPE_HEADER));
      if (!x && !U)
        throw Object.defineProperty(
          Error(
            w.status >= 400 && 'text/plain' === L
              ? await w.text()
              : 'An unexpected response was received from the server.',
          ),
          '__NEXT_ERROR_CODE',
          { value: 'E394', enumerable: !1, configurable: !0 },
        );
      let k = !1;
      if (x) {
        let e = U ? (0, A.processFetch)(w).then(({ response: e }) => e) : Promise.resolve(w),
          t = await C(e, {
            callServer: a.callServer,
            findSourceMapURL: l.findSourceMapURL,
            temporaryReferences: _,
            debugChannel: n && n(b),
          });
        ((d = U ? void 0 : t.a), (k = t.i));
        let r = w.headers.get(P.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? t.b;
        if (void 0 !== r && r !== (0, E.getNavigationBuildId)());
        else {
          let e = (0, h.normalizeFlightData)(t.f);
          '' !== e && ((p = e), (y = t.q));
        }
      } else ((d = void 0), (p = void 0), (y = void 0));
      return {
        actionResult: d,
        actionFlightData: p,
        actionFlightDataRenderedSearch: y,
        redirectLocation: U,
        redirectType: f,
        revalidationKind: D,
        isPrerender: F,
        couldBeIntercepted: k,
      };
    }
    function M(e, t) {
      let { resolve: r, reject: n } = t,
        a =
          (e.previousNextUrl || e.nextUrl) && (0, d.hasInterceptionRouteInCurrentTree)(e.tree)
            ? e.previousNextUrl || e.nextUrl
            : null;
      return j(e, a, t).then(
        async ({
          revalidationKind: l,
          actionResult: u,
          actionFlightData: i,
          actionFlightDataRenderedSearch: o,
          redirectLocation: c,
          redirectType: d,
          isPrerender: h,
          couldBeIntercepted: p,
        }) => {
          l !== T.ActionDidNotRevalidate &&
            ((0, N.invalidateBfCache)(),
            (t.didRevalidate = !0),
            l === T.ActionDidRevalidateStaticAndDynamic &&
              (0, v.invalidateEntirePrefetchCache)(a, e.tree),
            (0, m.startRevalidationCooldown)());
          let g = d || 'push';
          if (void 0 !== c)
            if ((0, O.isExternalURL)(c))
              return (n(I(c.href, g)), (0, S.completeHardNavigation)(e, c, g));
            else {
              let e = (0, f.createHrefFromUrl)(c, !1);
              n(I((0, _.hasBasePath)(e) ? (0, y.removeBasePath)(e) : e, g));
            }
          else r(u);
          if (void 0 === c && l === T.ActionDidNotRevalidate && void 0 === i) return e;
          if (void 0 === i && void 0 !== c) return (0, S.completeHardNavigation)(e, c, g);
          if ('string' == typeof i)
            return (0, S.completeHardNavigation)(e, new URL(i, location.origin), g);
          let R = new URL(e.canonicalUrl, location.origin),
            E = e.renderedSearch,
            P = void 0 !== c ? c : R,
            A = e.tree,
            C = s.ScrollBehavior.Default,
            j =
              l === T.ActionDidNotRevalidate
                ? w.FreshnessPolicy.Default
                : w.FreshnessPolicy.RefreshAll;
          if (void 0 !== i && void 0 !== o) {
            let t = (0, f.createHrefFromUrl)(P),
              r = Date.now(),
              n = (0, S.convertServerPatchToFullTree)(r, A, i, o, N.UnknownDynamicStaleTime),
              l = n.metadataVaryPath;
            return (
              null !== l &&
                (0, b.discoverKnownRoute)(r, P.pathname, a, null, n.routeTree, l, p, t, h, !1),
              (0, S.navigateToKnownRoute)(r, e, P, t, n, R, E, e.cache, A, j, a, C, g, null, null)
            );
          }
          return (0, S.navigate)(e, P, R, E, e.cache, A, a, j, C, g);
        },
        (t) => (n(t), e),
      );
    }
    function I(e, t) {
      let r = (0, p.getRedirectError)(e, t);
      return ((r.handled = !0), r);
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  