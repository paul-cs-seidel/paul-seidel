/*
 * [vendor #66936] Modul mit 16 Export(en)
 * Exporte: unstable_now, unstable_IdlePriority, unstable_ImmediatePriority, unstable_LowPriority, unstable_NormalPriority, unstable_Profiling, unstable_UserBlockingPriority, unstable_cancelCallback, unstable_forceFrameRate, unstable_getCurrentPriorityLevel, unstable_next, unstable_requestPaint …
 * Quelle: site/_next/static/chunks/05fkmnu_0w8uj.js — Turbopack-Modul 66936.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
66936,
  (e, t, r) => {
    'use strict';
    function n(e, t) {
      var r = e.length;
      for (e.push(t); 0 < r; ) {
        var n = (r - 1) >>> 1,
          i = e[n];
        if (0 < s(i, t)) ((e[n] = t), (e[r] = i), (r = n));
        else break;
      }
    }
    function i(e) {
      return 0 === e.length ? null : e[0];
    }
    function a(e) {
      if (0 === e.length) return null;
      var t = e[0],
        r = e.pop();
      if (r !== t) {
        e[0] = r;
        for (var n = 0, i = e.length, a = i >>> 1; n < a; ) {
          var o = 2 * (n + 1) - 1,
            l = e[o],
            u = o + 1,
            c = e[u];
          if (0 > s(l, r))
            u < i && 0 > s(c, l)
              ? ((e[n] = c), (e[u] = r), (n = u))
              : ((e[n] = l), (e[o] = r), (n = o));
          else if (u < i && 0 > s(c, r)) ((e[n] = c), (e[u] = r), (n = u));
          else break;
        }
      }
      return t;
    }
    function s(e, t) {
      var r = e.sortIndex - t.sortIndex;
      return 0 !== r ? r : e.id - t.id;
    }
    if (
      ((r.unstable_now = void 0),
      'object' == typeof performance && 'function' == typeof performance.now)
    ) {
      var o,
        l = performance;
      r.unstable_now = function () {
        return l.now();
      };
    } else {
      var u = Date,
        c = u.now();
      r.unstable_now = function () {
        return u.now() - c;
      };
    }
    var h = [],
      d = [],
      f = 1,
      p = null,
      m = 3,
      g = !1,
      v = !1,
      y = !1,
      x = !1,
      A = 'function' == typeof setTimeout ? setTimeout : null,
      b = 'function' == typeof clearTimeout ? clearTimeout : null,
      M = 'u' > typeof setImmediate ? setImmediate : null;
    function S(e) {
      for (var t = i(d); null !== t; ) {
        if (null === t.callback) a(d);
        else if (t.startTime <= e) (a(d), (t.sortIndex = t.expirationTime), n(h, t));
        else break;
        t = i(d);
      }
    }
    function E(e) {
      if (((y = !1), S(e), !v))
        if (null !== i(h)) ((v = !0), w || ((w = !0), o()));
        else {
          var t = i(d);
          null !== t && P(E, t.startTime - e);
        }
    }
    var w = !1,
      C = -1,
      _ = 5,
      T = -1;
    function D() {
      return !!x || !(r.unstable_now() - T < _);
    }
    function B() {
      if (((x = !1), w)) {
        var e = r.unstable_now();
        T = e;
        var t = !0;
        try {
          e: {
            ((v = !1), y && ((y = !1), b(C), (C = -1)), (g = !0));
            var n = m;
            try {
              t: {
                for (S(e), p = i(h); null !== p && !(p.expirationTime > e && D()); ) {
                  var s = p.callback;
                  if ('function' == typeof s) {
                    ((p.callback = null), (m = p.priorityLevel));
                    var l = s(p.expirationTime <= e);
                    if (((e = r.unstable_now()), 'function' == typeof l)) {
                      ((p.callback = l), S(e), (t = !0));
                      break t;
                    }
                    (p === i(h) && a(h), S(e));
                  } else a(h);
                  p = i(h);
                }
                if (null !== p) t = !0;
                else {
                  var u = i(d);
                  (null !== u && P(E, u.startTime - e), (t = !1));
                }
              }
              break e;
            } finally {
              ((p = null), (m = n), (g = !1));
            }
          }
        } finally {
          t ? o() : (w = !1);
        }
      }
    }
    if ('function' == typeof M)
      o = function () {
        M(B);
      };
    else if ('u' > typeof MessageChannel) {
      var R = new MessageChannel(),
        I = R.port2;
      ((R.port1.onmessage = B),
        (o = function () {
          I.postMessage(null);
        }));
    } else
      o = function () {
        A(B, 0);
      };
    function P(e, t) {
      C = A(function () {
        e(r.unstable_now());
      }, t);
    }
    ((r.unstable_IdlePriority = 5),
      (r.unstable_ImmediatePriority = 1),
      (r.unstable_LowPriority = 4),
      (r.unstable_NormalPriority = 3),
      (r.unstable_Profiling = null),
      (r.unstable_UserBlockingPriority = 2),
      (r.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (r.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
            )
          : (_ = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (r.unstable_getCurrentPriorityLevel = function () {
        return m;
      }),
      (r.unstable_next = function (e) {
        switch (m) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = m;
        }
        var r = m;
        m = t;
        try {
          return e();
        } finally {
          m = r;
        }
      }),
      (r.unstable_requestPaint = function () {
        x = !0;
      }),
      (r.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var r = m;
        m = e;
        try {
          return t();
        } finally {
          m = r;
        }
      }),
      (r.unstable_scheduleCallback = function (e, t, a) {
        var s = r.unstable_now();
        switch (
          ((a =
            'object' == typeof a && null !== a && 'number' == typeof (a = a.delay) && 0 < a
              ? s + a
              : s),
          e)
        ) {
          case 1:
            var l = -1;
            break;
          case 2:
            l = 250;
            break;
          case 5:
            l = 0x3fffffff;
            break;
          case 4:
            l = 1e4;
            break;
          default:
            l = 5e3;
        }
        return (
          (l = a + l),
          (e = {
            id: f++,
            callback: t,
            priorityLevel: e,
            startTime: a,
            expirationTime: l,
            sortIndex: -1,
          }),
          a > s
            ? ((e.sortIndex = a),
              n(d, e),
              null === i(h) && e === i(d) && (y ? (b(C), (C = -1)) : (y = !0), P(E, a - s)))
            : ((e.sortIndex = l), n(h, e), v || g || ((v = !0), w || ((w = !0), o()))),
          e
        );
      }),
      (r.unstable_shouldYield = D),
      (r.unstable_wrapCallback = function (e) {
        var t = m;
        return function () {
          var r = m;
          m = t;
          try {
            return e.apply(this, arguments);
          } finally {
            m = r;
          }
        };
      }));
  },
  