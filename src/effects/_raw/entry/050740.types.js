/*
 * [entry #50740] Modul mit 45 Export(en)
 * Exporte: types, Activity, Children, Component, Fragment, Profiler, PureComponent, StrictMode, Suspense, ViewTransition, __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, __COMPILER_RUNTIME …
 * Quelle: site/_next/static/chunks/15xrurgzs99gv.js — Turbopack-Modul 50740.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
50740,
  (e, t, r) => {
    'use strict';
    var n = e.i(47167),
      o = Symbol.for('react.transitional.element'),
      u = Symbol.for('react.portal'),
      i = Symbol.for('react.fragment'),
      s = Symbol.for('react.strict_mode'),
      a = Symbol.for('react.profiler'),
      l = Symbol.for('react.consumer'),
      c = Symbol.for('react.context'),
      f = Symbol.for('react.forward_ref'),
      d = Symbol.for('react.suspense'),
      p = Symbol.for('react.memo'),
      y = Symbol.for('react.lazy'),
      b = Symbol.for('react.activity'),
      h = Symbol.for('react.view_transition'),
      g = Symbol.iterator,
      m = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      x = Object.assign,
      v = {};
    function _(e, t, r) {
      ((this.props = e), (this.context = t), (this.refs = v), (this.updater = r || m));
    }
    function S() {}
    function j(e, t, r) {
      ((this.props = e), (this.context = t), (this.refs = v), (this.updater = r || m));
    }
    ((_.prototype.isReactComponent = {}),
      (_.prototype.setState = function (e, t) {
        if ('object' != typeof e && 'function' != typeof e && null != e)
          throw Error(
            'takes an object of state variables to update or a function which returns an object of state variables.',
          );
        this.updater.enqueueSetState(this, e, t, 'setState');
      }),
      (_.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
      }),
      (S.prototype = _.prototype));
    var w = (j.prototype = new S());
    ((w.constructor = j), x(w, _.prototype), (w.isPureReactComponent = !0));
    var E = Array.isArray;
    function T() {}
    var O = { H: null, A: null, T: null, S: null },
      k = Object.prototype.hasOwnProperty;
    function R(e, t, r) {
      var n = r.ref;
      return { $$typeof: o, type: e, key: t, ref: void 0 !== n ? n : null, props: r };
    }
    function C(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === o;
    }
    var H = /\/+/g;
    function A(e, t) {
      var r, n;
      return 'object' == typeof e && null !== e && null != e.key
        ? ((r = '' + e.key),
          (n = { '=': '=0', ':': '=2' }),
          '$' +
            r.replace(/[=:]/g, function (e) {
              return n[e];
            }))
        : t.toString(36);
    }
    function M(e, t, r) {
      if (null == e) return e;
      var n = [],
        i = 0;
      return (
        !(function e(t, r, n, i, s) {
          var a,
            l,
            c,
            f = typeof t;
          ('undefined' === f || 'boolean' === f) && (t = null);
          var d = !1;
          if (null === t) d = !0;
          else
            switch (f) {
              case 'bigint':
              case 'string':
              case 'number':
                d = !0;
                break;
              case 'object':
                switch (t.$$typeof) {
                  case o:
                  case u:
                    d = !0;
                    break;
                  case y:
                    return e((d = t._init)(t._payload), r, n, i, s);
                }
            }
          if (d)
            return (
              (s = s(t)),
              (d = '' === i ? '.' + A(t, 0) : i),
              E(s)
                ? ((n = ''),
                  null != d && (n = d.replace(H, '$&/') + '/'),
                  e(s, r, n, '', function (e) {
                    return e;
                  }))
                : null != s &&
                  (C(s) &&
                    ((a = s),
                    (l =
                      n +
                      (null == s.key || (t && t.key === s.key)
                        ? ''
                        : ('' + s.key).replace(H, '$&/') + '/') +
                      d),
                    (s = R(a.type, l, a.props))),
                  r.push(s)),
              1
            );
          d = 0;
          var p = '' === i ? '.' : i + ':';
          if (E(t))
            for (var b = 0; b < t.length; b++)
              ((f = p + A((i = t[b]), b)), (d += e(i, r, n, f, s)));
          else if (
            'function' ==
            typeof (b =
              null === (c = t) || 'object' != typeof c
                ? null
                : 'function' == typeof (c = (g && c[g]) || c['@@iterator'])
                  ? c
                  : null)
          )
            for (t = b.call(t), b = 0; !(i = t.next()).done; )
              ((f = p + A((i = i.value), b++)), (d += e(i, r, n, f, s)));
          else if ('object' === f) {
            if ('function' == typeof t.then)
              return e(
                (function (e) {
                  switch (e.status) {
                    case 'fulfilled':
                      return e.value;
                    case 'rejected':
                      throw e.reason;
                    default:
                      switch (
                        ('string' == typeof e.status
                          ? e.then(T, T)
                          : ((e.status = 'pending'),
                            e.then(
                              function (t) {
                                'pending' === e.status && ((e.status = 'fulfilled'), (e.value = t));
                              },
                              function (t) {
                                'pending' === e.status && ((e.status = 'rejected'), (e.reason = t));
                              },
                            )),
                        e.status)
                      ) {
                        case 'fulfilled':
                          return e.value;
                        case 'rejected':
                          throw e.reason;
                      }
                  }
                  throw e;
                })(t),
                r,
                n,
                i,
                s,
              );
            throw Error(
              'Objects are not valid as a React child (found: ' +
                ('[object Object]' === (r = String(t))
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : r) +
                '). If you meant to render a collection of children, use an array instead.',
            );
          }
          return d;
        })(e, n, '', '', function (e) {
          return t.call(r, e, i++);
        }),
        n
      );
    }
    function P(e) {
      if (-1 === e._status) {
        var t = (0, e._result)();
        (t.then(
          function (r) {
            (0 === e._status || -1 === e._status) &&
              ((e._status = 1),
              (e._result = r),
              void 0 === t.status && ((t.status = 'fulfilled'), (t.value = r)));
          },
          function (r) {
            (0 === e._status || -1 === e._status) &&
              ((e._status = 2),
              (e._result = r),
              void 0 === t.status && ((t.status = 'rejected'), (t.reason = r)));
          },
        ),
          -1 === e._status && ((e._status = 0), (e._result = t)));
      }
      if (1 === e._status) return e._result.default;
      throw e._result;
    }
    var I =
      'function' == typeof reportError
        ? reportError
        : function (e) {
            if ('object' == typeof window && 'function' == typeof window.ErrorEvent) {
              var t = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  'object' == typeof e && null !== e && 'string' == typeof e.message
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if ('object' == typeof n.default && 'function' == typeof n.default.emit)
              return void n.default.emit('uncaughtException', e);
            console.error(e);
          };
    function $(e) {
      var t = O.T,
        r = {};
      ((r.types = null !== t ? t.types : null), (O.T = r));
      try {
        var n = e(),
          o = O.S;
        (null !== o && o(r, n),
          'object' == typeof n && null !== n && 'function' == typeof n.then && n.then(T, I));
      } catch (e) {
        I(e);
      } finally {
        (null !== t && null !== r.types && (t.types = r.types), (O.T = t));
      }
    }
    function L(e) {
      var t = O.T;
      if (null !== t) {
        var r = t.types;
        null === r ? (t.types = [e]) : -1 === r.indexOf(e) && r.push(e);
      } else $(L.bind(null, e));
    }
    ((r.Activity = b),
      (r.Children = {
        map: M,
        forEach: function (e, t, r) {
          M(
            e,
            function () {
              t.apply(this, arguments);
            },
            r,
          );
        },
        count: function (e) {
          var t = 0;
          return (
            M(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            M(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!C(e))
            throw Error('React.Children.only expected to receive a single React element child.');
          return e;
        },
      }),
      (r.Component = _),
      (r.Fragment = i),
      (r.Profiler = a),
      (r.PureComponent = j),
      (r.StrictMode = s),
      (r.Suspense = d),
      (r.ViewTransition = h),
      (r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O),
      (r.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return O.H.useMemoCache(e);
        },
      }),
      (r.addTransitionType = L),
      (r.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (r.cacheSignal = function () {
        return null;
      }),
      (r.cloneElement = function (e, t, r) {
        if (null == e)
          throw Error('The argument must be a React element, but you passed ' + e + '.');
        var n = x({}, e.props),
          o = e.key;
        if (null != t)
          for (u in (void 0 !== t.key && (o = '' + t.key), t))
            k.call(t, u) &&
              'key' !== u &&
              '__self' !== u &&
              '__source' !== u &&
              ('ref' !== u || void 0 !== t.ref) &&
              (n[u] = t[u]);
        var u = arguments.length - 2;
        if (1 === u) n.children = r;
        else if (1 < u) {
          for (var i = Array(u), s = 0; s < u; s++) i[s] = arguments[s + 2];
          n.children = i;
        }
        return R(e.type, o, n);
      }),
      (r.createContext = function (e) {
        return (
          ((e = {
            $$typeof: c,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }).Provider = e),
          (e.Consumer = { $$typeof: l, _context: e }),
          e
        );
      }),
      (r.createElement = function (e, t, r) {
        var n,
          o = {},
          u = null;
        if (null != t)
          for (n in (void 0 !== t.key && (u = '' + t.key), t))
            k.call(t, n) && 'key' !== n && '__self' !== n && '__source' !== n && (o[n] = t[n]);
        var i = arguments.length - 2;
        if (1 === i) o.children = r;
        else if (1 < i) {
          for (var s = Array(i), a = 0; a < i; a++) s[a] = arguments[a + 2];
          o.children = s;
        }
        if (e && e.defaultProps) for (n in (i = e.defaultProps)) void 0 === o[n] && (o[n] = i[n]);
        return R(e, u, o);
      }),
      (r.createRef = function () {
        return { current: null };
      }),
      (r.forwardRef = function (e) {
        return { $$typeof: f, render: e };
      }),
      (r.isValidElement = C),
      (r.lazy = function (e) {
        return { $$typeof: y, _payload: { _status: -1, _result: e }, _init: P };
      }),
      (r.memo = function (e, t) {
        return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
      }),
      (r.startTransition = $),
      (r.unstable_useCacheRefresh = function () {
        return O.H.useCacheRefresh();
      }),
      (r.use = function (e) {
        return O.H.use(e);
      }),
      (r.useActionState = function (e, t, r) {
        return O.H.useActionState(e, t, r);
      }),
      (r.useCallback = function (e, t) {
        return O.H.useCallback(e, t);
      }),
      (r.useContext = function (e) {
        return O.H.useContext(e);
      }),
      (r.useDebugValue = function () {}),
      (r.useDeferredValue = function (e, t) {
        return O.H.useDeferredValue(e, t);
      }),
      (r.useEffect = function (e, t) {
        return O.H.useEffect(e, t);
      }),
      (r.useEffectEvent = function (e) {
        return O.H.useEffectEvent(e);
      }),
      (r.useId = function () {
        return O.H.useId();
      }),
      (r.useImperativeHandle = function (e, t, r) {
        return O.H.useImperativeHandle(e, t, r);
      }),
      (r.useInsertionEffect = function (e, t) {
        return O.H.useInsertionEffect(e, t);
      }),
      (r.useLayoutEffect = function (e, t) {
        return O.H.useLayoutEffect(e, t);
      }),
      (r.useMemo = function (e, t) {
        return O.H.useMemo(e, t);
      }),
      (r.useOptimistic = function (e, t) {
        return O.H.useOptimistic(e, t);
      }),
      (r.useReducer = function (e, t, r) {
        return O.H.useReducer(e, t, r);
      }),
      (r.useRef = function (e) {
        return O.H.useRef(e);
      }),
      (r.useState = function (e) {
        return O.H.useState(e);
      }),
      (r.useSyncExternalStore = function (e, t, r) {
        return O.H.useSyncExternalStore(e, t, r);
      }),
      (r.useTransition = function () {
        return O.H.useTransition();
      }),
      (r.version = '19.3.0-canary-3f0b9e61-20260317'));
  },
  