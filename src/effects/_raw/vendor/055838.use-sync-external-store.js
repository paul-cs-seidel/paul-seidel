/*
 * [vendor #55838] Modul mit 1 Export(en)
 * Exporte: useSyncExternalStore
 * Requires: #71645
 * Quelle: site/_next/static/chunks/05fkmnu_0w8uj.js — Turbopack-Modul 55838.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
55838,
  (e, t, r) => {
    'use strict';
    var n = e.r(71645),
      i =
        'function' == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
            },
      a = n.useState,
      s = n.useEffect,
      o = n.useLayoutEffect,
      l = n.useDebugValue;
    function u(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var r = t();
        return !i(e, r);
      } catch (e) {
        return !0;
      }
    }
    var c =
      'u' < typeof window || void 0 === window.document || void 0 === window.document.createElement
        ? function (e, t) {
            return t();
          }
        : function (e, t) {
            var r = t(),
              n = a({ inst: { value: r, getSnapshot: t } }),
              i = n[0].inst,
              c = n[1];
            return (
              o(
                function () {
                  ((i.value = r), (i.getSnapshot = t), u(i) && c({ inst: i }));
                },
                [e, r, t],
              ),
              s(
                function () {
                  return (
                    u(i) && c({ inst: i }),
                    e(function () {
                      u(i) && c({ inst: i });
                    })
                  );
                },
                [e],
              ),
              l(r),
              r
            );
          };
    r.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c;
  },
  