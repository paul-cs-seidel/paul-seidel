/*
 * [vendor #52822] Modul mit 1 Export(en)
 * Exporte: useSyncExternalStoreWithSelector
 * Requires: #71645, #2239
 * Quelle: site/_next/static/chunks/05fkmnu_0w8uj.js — Turbopack-Modul 52822.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
52822,
  (e, t, r) => {
    'use strict';
    var n = e.r(71645),
      i = e.r(2239),
      a =
        'function' == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
            },
      s = i.useSyncExternalStore,
      o = n.useRef,
      l = n.useEffect,
      u = n.useMemo,
      c = n.useDebugValue;
    r.useSyncExternalStoreWithSelector = function (e, t, r, n, i) {
      var h = o(null);
      if (null === h.current) {
        var d = { hasValue: !1, value: null };
        h.current = d;
      } else d = h.current;
      var f = s(
        e,
        (h = u(
          function () {
            function e(e) {
              if (!l) {
                if (((l = !0), (s = e), (e = n(e)), void 0 !== i && d.hasValue)) {
                  var t = d.value;
                  if (i(t, e)) return (o = t);
                }
                return (o = e);
              }
              if (((t = o), a(s, e))) return t;
              var r = n(e);
              return void 0 !== i && i(t, r) ? ((s = e), t) : ((s = e), (o = r));
            }
            var s,
              o,
              l = !1,
              u = void 0 === r ? null : r;
            return [
              function () {
                return e(t());
              },
              null === u
                ? void 0
                : function () {
                    return e(u());
                  },
            ];
          },
          [t, r, n, i],
        ))[0],
        h[1],
      );
      return (
        l(
          function () {
            ((d.hasValue = !0), (d.value = f));
          },
          [f],
        ),
        c(f),
        f
      );
    };
  },
  