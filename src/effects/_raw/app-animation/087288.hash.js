/*
 * [app-animation #87288] Modul mit 1 Export(en)
 * Exporte: hash
 * Requires: #35326, #12718, #21768, #32120, #92245, #50590, #88093, #33906, #43369, #32992, #63416, #20896 …
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 87288.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
87288,
  (e, t, r) => {
    'use strict';
    let n;
    Object.defineProperty(r, '__esModule', { value: !0 });
    var a = {
      createFetch: function () {
        return T;
      },
      createFromNextReadableStream: function () {
        return O;
      },
      decodeStaticStage: function () {
        return b;
      },
      fetchServerResponse: function () {
        return E;
      },
      processFetch: function () {
        return P;
      },
      resolveStaticStageData: function () {
        return S;
      },
    };
    for (var l in a) Object.defineProperty(r, l, { enumerable: !0, get: a[l] });
    let u = e.r(35326);
    e.r(12718);
    let i = e.r(21768),
      o = e.r(32120),
      s = e.r(92245),
      c = e.r(50590),
      f = e.r(88093),
      d = e.r(33906),
      h = e.r(43369),
      p = e.r(32992),
      y = e.r(63416);
    e.r(20896);
    let _ = e.r(79027),
      g = u.createFromReadableStream,
      v = u.createFromFetch;
    function m(e) {
      return (0, d.urlToUrlWithoutFlightMarker)(new URL(e, location.origin)).toString();
    }
    let R = !1;
    async function E(e, t) {
      let { flightRouterState: r, nextUrl: n } = t,
        a = {
          [i.RSC_HEADER]: '1',
          [i.NEXT_ROUTER_STATE_TREE_HEADER]: (0, c.prepareFlightRouterStateForRequest)(
            r,
            t.isHmrRefresh,
          ),
        };
      n && (a[i.NEXT_URL] = n);
      let l = e;
      try {
        (e = new URL(e)).pathname.endsWith('/')
          ? (e.pathname += 'index.txt')
          : (e.pathname += '.txt');
        let t = await T(e, a, 'auto', !0),
          r = (0, d.urlToUrlWithoutFlightMarker)(new URL(t.url)),
          n = t.redirected ? r : l,
          u = t.headers.get('content-type') || '',
          o = !!t.headers.get('vary')?.includes(i.NEXT_URL),
          s = !!t.headers.get(i.NEXT_DID_POSTPONE_HEADER),
          f = u.startsWith(i.RSC_CONTENT_TYPE_HEADER);
        if ((f || (f = u.startsWith('text/plain')), !f || !t.ok || !t.body))
          return (e.hash && (r.hash = e.hash), m(r.toString()));
        let h = t.flightResponsePromise;
        null === h && (h = O(t.body, a, { allowPartialStream: s }));
        let [g, v] = await Promise.all([h, t.cacheData]);
        if (
          (t.headers.get(y.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? g.b) !== (0, p.getNavigationBuildId)()
        )
          return m(t.url);
        let R = (0, c.normalizeFlightData)(g.f);
        if ('string' == typeof R) return m(R);
        let E = null !== v ? await S(v, g, a) : null;
        return {
          flightData: R,
          canonicalUrl: n,
          renderedSearch: g.q,
          couldBeIntercepted: o,
          supportsPerSegmentPrefetching: g.S,
          postponed: s,
          dynamicStaleTime: g.d ?? _.UnknownDynamicStaleTime,
          staticStageData: E,
          runtimePrefetchStream: g.p ?? null,
          responseHeaders: t.headers,
          debugInfo: h._debugInfo ?? null,
        };
      } catch (e) {
        return (
          R ||
            console.error(
              `Failed to fetch RSC payload for ${l}. Falling back to browser navigation.`,
              e,
            ),
          l.toString()
        );
      }
    }
    async function P(e) {
      return { response: e, cacheData: null };
    }
    async function S(e, t, r) {
      let { isResponsePartial: n, responseBodyClone: a } = e;
      if (a) {
        if (!n) return (a.cancel(), { response: t, isResponsePartial: !1 });
        if (void 0 !== t.l) return { response: await b(a, t.l, r), isResponsePartial: !0 };
        a.cancel();
      }
      return null;
    }
    async function b(e, t, r) {
      var n, a;
      let l, u;
      return O(
        ((n = e),
        (a = await t),
        (l = n.getReader()),
        (u = a),
        new ReadableStream({
          async pull(e) {
            if (u <= 0) {
              (l.cancel(), e.close());
              return;
            }
            let { done: t, value: r } = await l.read();
            t
              ? e.close()
              : r.byteLength <= u
                ? (e.enqueue(r), (u -= r.byteLength))
                : (e.enqueue(r.subarray(0, u)), (u = 0), l.cancel(), e.close());
          },
          cancel() {
            l.cancel();
          },
        })),
        r,
        { allowPartialStream: !0 },
      );
    }
    async function T(e, t, r, a, l) {
      var u, c;
      let d = (0, h.getDeploymentId)();
      d && (t['x-deployment-id'] = d);
      let p = new URL(e);
      await (0, f.setCacheBustingSearchParam)(p, t);
      let y = fetch(p, {
          credentials: 'same-origin',
          headers: t,
          priority: r || void 0,
          signal: l,
        }).then(P),
        _ = y.then(({ response: e }) => e),
        g = a
          ? ((u = _),
            (c = t),
            v(u, {
              callServer: o.callServer,
              findSourceMapURL: s.findSourceMapURL,
              debugChannel: n && n(c),
            }))
          : null,
        m = await _,
        R = m.redirected,
        E = new URL(m.url, p);
      return (
        E.searchParams.delete(i.NEXT_RSC_UNION_QUERY),
        {
          url: E.href,
          redirected: R,
          ok: m.ok,
          headers: m.headers,
          body: m.body,
          status: m.status,
          flightResponsePromise: g,
          cacheData: y.then(({ cacheData: e }) => e),
        }
      );
    }
    function O(e, t, r) {
      return g(e, {
        callServer: o.callServer,
        findSourceMapURL: s.findSourceMapURL,
        debugChannel: n && n(t),
        unstable_allowPartialStream: r?.allowPartialStream,
      });
    }
    ('u' > typeof window &&
      (window.addEventListener('pagehide', () => {
        R = !0;
      }),
      window.addEventListener('pageshow', () => {
        R = !1;
      })),
      ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default)));
  },
  