/*
 * [app-experience #98569] Modul mit 1 Export(en)
 * Exporte: hydrate
 * Requires: #55682, #43476, #23911, #88014, #71645, #35326, #42732, #97238, #51323, #32120, #92245, #99781 …
 * Quelle: site/_next/static/chunks/07lhk_q6pmm3r.js — Turbopack-Modul 98569.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
98569,
  (e, t, n) => {
    'use strict';
    let r, l, a, o;
    (Object.defineProperty(n, '__esModule', { value: !0 }),
      Object.defineProperty(n, 'hydrate', {
        enumerable: !0,
        get: function () {
          return j;
        },
      }));
    let i = e.r(55682),
      u = e.r(43476);
    e.r(23911);
    let s = i._(e.r(88014)),
      c = i._(e.r(71645)),
      f = e.r(35326),
      d = e.r(42732),
      p = e.r(97238),
      m = e.r(51323),
      h = e.r(32120),
      g = e.r(92245),
      v = e.r(99781),
      y = i._(e.r(75530)),
      b = e.r(65716);
    e.r(8372);
    let w = e.r(50590),
      S = e.r(43369),
      k = e.r(32992),
      E = f.createFromReadableStream,
      _ = f.createFromFetch,
      x = document,
      P = self.__next_instant_test ? self.__next_instant_test : void 0,
      N = new TextEncoder(),
      C = !1,
      T = !1,
      O = null;
    function z(e) {
      if (0 === e[0]) a = [];
      else if (1 === e[0]) {
        if (!a)
          throw Object.defineProperty(
            Error('Unexpected server data: missing bootstrap script.'),
            '__NEXT_ERROR_CODE',
            { value: 'E18', enumerable: !1, configurable: !0 },
          );
        o ? o.enqueue(N.encode(e[1])) : a.push(e[1]);
      } else if (2 === e[0]) O = e[1];
      else if (3 === e[0]) {
        if (!a)
          throw Object.defineProperty(
            Error('Unexpected server data: missing bootstrap script.'),
            '__NEXT_ERROR_CODE',
            { value: 'E18', enumerable: !1, configurable: !0 },
          );
        let n = atob(e[1]),
          r = new Uint8Array(n.length);
        for (var t = 0; t < n.length; t++) r[t] = n.charCodeAt(t);
        o ? o.enqueue(r) : a.push(r);
      }
    }
    let L = function () {
      (o && !T && (o.close(), (T = !0), (a = void 0)), (C = !0));
    };
    'loading' === document.readyState
      ? document.addEventListener('DOMContentLoaded', L, !1)
      : setTimeout(L);
    let R = (self.__next_f = self.__next_f || []);
    (R.forEach(z), (R.length = 0), (R.push = z));
    let M = new ReadableStream({
      start(e) {
        (a &&
          (a.forEach((t) => {
            e.enqueue('string' == typeof t ? N.encode(t) : t);
          }),
          C && !T) &&
          (null === e.desiredSize || e.desiredSize < 0
            ? P ||
              e.error(
                Object.defineProperty(
                  Error(
                    'The connection to the page was unexpectedly closed, possibly due to the stop button being clicked, loss of Wi-Fi, or an unstable internet connection.',
                  ),
                  '__NEXT_ERROR_CODE',
                  { value: 'E117', enumerable: !1, configurable: !0 },
                ),
              )
            : e.close(),
          (T = !0),
          (a = void 0)),
          (o = e));
      },
    });
    if (P)
      l = Promise.resolve(
        _(P, {
          callServer: h.callServer,
          findSourceMapURL: g.findSourceMapURL,
          debugChannel: r,
          unstable_allowPartialStream: !0,
        }),
      ).then(async (e) => (0, w.createInitialRSCPayloadFromFallbackPrerender)(await P, e));
    else if (window.__NEXT_CLIENT_RESUME) {
      let e = window.__NEXT_CLIENT_RESUME;
      l = Promise.resolve(
        _(e, { callServer: h.callServer, findSourceMapURL: g.findSourceMapURL, debugChannel: r }),
      ).then(async (t) => (0, w.createInitialRSCPayloadFromFallbackPrerender)(await e, t));
    } else
      l = E(M, {
        callServer: h.callServer,
        findSourceMapURL: g.findSourceMapURL,
        debugChannel: r,
        startTime: 0,
      });
    function I({ initialRSCPayload: e, actionQueue: t, webSocket: n, staticIndicatorState: r }) {
      return (0, u.jsx)(y.default, {
        actionQueue: t,
        globalErrorState: e.G,
        webSocket: n,
        staticIndicatorState: r,
      });
    }
    let D = c.default.StrictMode;
    function F({ children: e }) {
      return e;
    }
    let A = {
      onDefaultTransitionIndicator: function () {
        return () => {};
      },
      onRecoverableError: p.onRecoverableError,
      onCaughtError: m.onCaughtError,
      onUncaughtError: m.onUncaughtError,
    };
    async function j(e, t) {
      let n,
        r,
        a = await l;
      a.b
        ? (0, k.setNavigationBuildId)(a.b)
        : (0, k.setNavigationBuildId)((0, S.getDeploymentId)());
      let o = Date.now(),
        i = (0, v.createMutableActionQueue)(
          (0, b.createInitialRouterState)({
            navigatedAt: o,
            initialRSCPayload: a,
            initialFlightStreamForCache: null,
            location: window.location,
          }),
          e,
        ),
        f = (0, u.jsx)(D, {
          children: (0, u.jsx)(d.HeadManagerContext.Provider, {
            value: { appDir: !0 },
            children: (0, u.jsx)(F, {
              children: (0, u.jsx)(I, {
                initialRSCPayload: a,
                actionQueue: i,
                webSocket: r,
                staticIndicatorState: n,
              }),
            }),
          }),
        });
      '__next_error__' === document.documentElement.id
        ? s.default.createRoot(x, A).render(f)
        : c.default.startTransition(() => {
            s.default.hydrateRoot(x, f, { ...A, formState: O });
          });
    }
    ('function' == typeof n.default || ('object' == typeof n.default && null !== n.default)) &&
      void 0 === n.default.__esModule &&
      (Object.defineProperty(n.default, '__esModule', { value: !0 }),
      Object.assign(n.default, n),
      (t.exports = n.default));
  },
  