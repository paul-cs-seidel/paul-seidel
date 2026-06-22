/*
 * [app-animation #64893] Modul mit 10 Export(en)
 * Exporte: status, value, reason, chunk, createFromFetch, createFromReadableStream, createServerReference, createTemporaryReferenceSet, encodeReply, registerServerReference
 * Requires: #74080
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 64893.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
64893,
  (e, t, r) => {
    'use strict';
    var n = e.r(74080),
      a = { stream: !0 },
      l = Object.prototype.hasOwnProperty;
    function u(t) {
      var r = e.r(t);
      return 'function' != typeof r.then || 'fulfilled' === r.status
        ? null
        : (r.then(
            function (e) {
              ((r.status = 'fulfilled'), (r.value = e));
            },
            function (e) {
              ((r.status = 'rejected'), (r.reason = e));
            },
          ),
          r);
    }
    var i = new WeakSet(),
      o = new WeakSet();
    function s() {}
    function c(t) {
      for (var r = t[1], n = [], a = 0; a < r.length; a++) {
        var l = e.L(r[a]);
        if ((o.has(l) || n.push(l), !i.has(l))) {
          var c = o.add.bind(o, l);
          (l.then(c, s), i.add(l));
        }
      }
      return 4 === t.length
        ? 0 === n.length
          ? u(t[0])
          : Promise.all(n).then(function () {
              return u(t[0]);
            })
        : 0 < n.length
          ? Promise.all(n)
          : null;
    }
    function f(t) {
      var r = e.r(t[0]);
      if (4 === t.length && 'function' == typeof r.then)
        if ('fulfilled' === r.status) r = r.value;
        else throw r.reason;
      return '*' === t[2]
        ? r
        : '' === t[2]
          ? r.__esModule
            ? r.default
            : r
          : l.call(r, t[2])
            ? r[t[2]]
            : void 0;
    }
    var d = n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      h = Symbol.for('react.transitional.element'),
      p = Symbol.for('react.lazy'),
      y = Symbol.iterator,
      _ = Symbol.asyncIterator,
      g = Array.isArray,
      v = Object.getPrototypeOf,
      m = Object.prototype,
      R = new WeakMap();
    function E(e, t, r) {
      R.has(e) || R.set(e, { id: t, originalBind: e.bind, bound: r });
    }
    function P(e, t, r) {
      ((this.status = e), (this.value = t), (this.reason = r));
    }
    function S(e) {
      switch (e.status) {
        case 'resolved_model':
          D(e);
          break;
        case 'resolved_module':
          U(e);
      }
      switch (e.status) {
        case 'fulfilled':
          return e.value;
        case 'pending':
        case 'blocked':
        case 'halted':
          throw e;
        default:
          throw e.reason;
      }
    }
    function b() {
      return new P('pending', null, null);
    }
    function T(e, t, r, n) {
      for (var a = 0; a < t.length; a++) {
        var l = t[a];
        'function' == typeof l ? l(r) : H(e, l, r, n);
      }
    }
    function O(e, t, r) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        'function' == typeof a ? a(r) : B(e, a.handler, r);
      }
    }
    function w(e, t) {
      var r = t.handler.chunk;
      if (null === r) return null;
      if (r === e) return t.handler;
      if (null !== (t = r.value))
        for (r = 0; r < t.length; r++) {
          var n = t[r];
          if ('function' != typeof n && null !== (n = w(e, n))) return n;
        }
      return null;
    }
    function A(e, t, r, n) {
      switch (t.status) {
        case 'fulfilled':
          T(e, r, t.value, t);
          break;
        case 'blocked':
          for (var a = 0; a < r.length; a++) {
            var l = r[a];
            if ('function' != typeof l) {
              var u = w(t, l);
              if (null !== u)
                switch (
                  (H(e, l, u.value, t),
                  r.splice(a, 1),
                  a--,
                  null !== n && -1 !== (l = n.indexOf(l)) && n.splice(l, 1),
                  t.status)
                ) {
                  case 'fulfilled':
                    T(e, r, t.value, t);
                    return;
                  case 'rejected':
                    null !== n && O(e, n, t.reason);
                    return;
                }
            }
          }
        case 'pending':
          if (t.value) for (e = 0; e < r.length; e++) t.value.push(r[e]);
          else t.value = r;
          if (t.reason) {
            if (n) for (r = 0; r < n.length; r++) t.reason.push(n[r]);
          } else t.reason = n;
          break;
        case 'rejected':
          n && O(e, n, t.reason);
      }
    }
    function N(e, t, r) {
      if ('pending' !== t.status && 'blocked' !== t.status) t.reason.error(r);
      else {
        var n = t.reason;
        ((t.status = 'rejected'), (t.reason = r), null !== n && O(e, n, r));
      }
    }
    function C(e, t, r) {
      return new P(
        'resolved_model',
        (r ? '{"done":true,"value":' : '{"done":false,"value":') + t + '}',
        e,
      );
    }
    function j(e, t, r, n) {
      M(e, t, (n ? '{"done":true,"value":' : '{"done":false,"value":') + r + '}');
    }
    function M(e, t, r) {
      if ('pending' !== t.status) t.reason.enqueueModel(r);
      else {
        var n = t.value,
          a = t.reason;
        ((t.status = 'resolved_model'),
          (t.value = r),
          (t.reason = e),
          null !== n && (D(t), A(e, t, n, a)));
      }
    }
    function I(e, t, r) {
      if ('pending' === t.status || 'blocked' === t.status) {
        var n = t.value,
          a = t.reason;
        ((t.status = 'resolved_module'),
          (t.value = r),
          (t.reason = null),
          null !== n && (U(t), A(e, t, n, a)));
      }
    }
    ((P.prototype = Object.create(Promise.prototype)),
      (P.prototype.then = function (e, t) {
        switch (this.status) {
          case 'resolved_model':
            D(this);
            break;
          case 'resolved_module':
            U(this);
        }
        switch (this.status) {
          case 'fulfilled':
            'function' == typeof e && e(this.value);
            break;
          case 'pending':
          case 'blocked':
            ('function' == typeof e &&
              (null === this.value && (this.value = []), this.value.push(e)),
              'function' == typeof t &&
                (null === this.reason && (this.reason = []), this.reason.push(t)));
            break;
          case 'halted':
            break;
          default:
            'function' == typeof t && t(this.reason);
        }
      }));
    var F = null;
    function D(e) {
      var t = F;
      F = null;
      var r = e.value,
        n = e.reason;
      ((e.status = 'blocked'), (e.value = null), (e.reason = null));
      try {
        var a = ei(n, r),
          l = e.value;
        if (null !== l)
          for (e.value = null, e.reason = null, r = 0; r < l.length; r++) {
            var u = l[r];
            'function' == typeof u ? u(a) : H(n, u, a, e);
          }
        if (null !== F) {
          if (F.errored) throw F.reason;
          if (0 < F.deps) {
            ((F.value = a), (F.chunk = e));
            return;
          }
        }
        ((e.status = 'fulfilled'), (e.value = a), (e.reason = null));
      } catch (t) {
        ((e.status = 'rejected'), (e.reason = t));
      } finally {
        F = t;
      }
    }
    function U(e) {
      try {
        var t = f(e.value);
        ((e.status = 'fulfilled'), (e.value = t), (e.reason = null));
      } catch (t) {
        ((e.status = 'rejected'), (e.reason = t));
      }
    }
    function L(e, t) {
      ((e._closed = !0),
        (e._closedReason = t),
        e._chunks.forEach(function (r) {
          'pending' === r.status
            ? N(e, r, t)
            : 'fulfilled' === r.status && null !== r.reason && r.reason.error(t);
        }));
    }
    function x(e) {
      return { $$typeof: p, _payload: e, _init: S };
    }
    function k(e, t) {
      var r = e._chunks,
        n = r.get(t);
      return (
        n ||
          (e._closed
            ? e._allowPartialStream
              ? (((e = n = b()).status = 'halted'), (e.value = null), (e.reason = null))
              : (n = new P('rejected', null, e._closedReason))
            : (n = b()),
          r.set(t, n)),
        n
      );
    }
    function H(e, t, r) {
      var n = t.handler,
        a = t.parentObject,
        u = t.key,
        i = t.map,
        o = t.path;
      try {
        for (var s = 1; s < o.length; s++) {
          for (; 'object' == typeof r && null !== r && r.$$typeof === p; ) {
            var c = r._payload;
            if (c === n.chunk) r = n.value;
            else {
              switch (c.status) {
                case 'resolved_model':
                  D(c);
                  break;
                case 'resolved_module':
                  U(c);
              }
              switch (c.status) {
                case 'fulfilled':
                  r = c.value;
                  continue;
                case 'blocked':
                  var f = w(c, t);
                  if (null !== f) {
                    r = f.value;
                    continue;
                  }
                case 'pending':
                  (o.splice(0, s - 1),
                    null === c.value ? (c.value = [t]) : c.value.push(t),
                    null === c.reason ? (c.reason = [t]) : c.reason.push(t));
                  return;
                case 'halted':
                  return;
                default:
                  B(e, t.handler, c.reason);
                  return;
              }
            }
          }
          var d = o[s];
          if ('object' == typeof r && null !== r && l.call(r, d)) r = r[d];
          else throw Error('Invalid reference.');
        }
        for (; 'object' == typeof r && null !== r && r.$$typeof === p; ) {
          var y = r._payload;
          if (y === n.chunk) r = n.value;
          else {
            switch (y.status) {
              case 'resolved_model':
                D(y);
                break;
              case 'resolved_module':
                U(y);
            }
            if ('fulfilled' === y.status) {
              r = y.value;
              continue;
            }
            break;
          }
        }
        var _ = i(e, r, a, u);
        if (
          ('__proto__' !== u && (a[u] = _),
          '' === u && null === n.value && (n.value = _),
          a[0] === h && 'object' == typeof n.value && null !== n.value && n.value.$$typeof === h)
        ) {
          var g = n.value;
          '3' === u && (g.props = _);
        }
      } catch (r) {
        B(e, t.handler, r);
        return;
      }
      (n.deps--,
        0 === n.deps &&
          null !== (t = n.chunk) &&
          'blocked' === t.status &&
          ((r = t.value),
          (t.status = 'fulfilled'),
          (t.value = n.value),
          (t.reason = n.reason),
          null !== r && T(e, r, n.value, t)));
    }
    function B(e, t, r) {
      t.errored ||
        ((t.errored = !0),
        (t.value = null),
        (t.reason = r),
        null !== (t = t.chunk) && 'blocked' === t.status && N(e, t, r));
    }
    function V(e, t, r, n, a, l) {
      return (
        F
          ? ((n = F), n.deps++)
          : (n = F =
              { parent: null, chunk: null, value: null, reason: null, deps: 1, errored: !1 }),
        (t = { handler: n, parentObject: t, key: r, map: a, path: l }),
        null === e.value ? (e.value = [t]) : e.value.push(t),
        null === e.reason ? (e.reason = [t]) : e.reason.push(t),
        null
      );
    }
    function $(e, t, r, n) {
      if (!e._serverReferenceConfig)
        return (function (e, t) {
          function r() {
            var e = Array.prototype.slice.call(arguments);
            return a
              ? 'fulfilled' === a.status
                ? t(n, a.value.concat(e))
                : Promise.resolve(a).then(function (r) {
                    return t(n, r.concat(e));
                  })
              : t(n, e);
          }
          var n = e.id,
            a = e.bound;
          return (E(r, n, a), r);
        })(t, e._callServer);
      var a = (function (e, t) {
          var r = '',
            n = e[t];
          if (n) r = n.name;
          else {
            var a = t.lastIndexOf('#');
            if ((-1 !== a && ((r = t.slice(a + 1)), (n = e[t.slice(0, a)])), !n))
              throw Error(
                'Could not find the module "' +
                  t +
                  '" in the React Server Manifest. This is probably a bug in the React Server Components bundler.',
              );
          }
          return n.async ? [n.id, n.chunks, r, 1] : [n.id, n.chunks, r];
        })(e._serverReferenceConfig, t.id),
        l = c(a);
      if (l) t.bound && (l = Promise.all([l, t.bound]));
      else {
        if (!t.bound) return (E((l = f(a)), t.id, t.bound), l);
        l = Promise.resolve(t.bound);
      }
      if (F) {
        var u = F;
        u.deps++;
      } else u = F = { parent: null, chunk: null, value: null, reason: null, deps: 1, errored: !1 };
      return (
        l.then(
          function () {
            var l = f(a);
            if (t.bound) {
              var i = t.bound.value.slice(0);
              (i.unshift(null), (l = l.bind.apply(l, i)));
            }
            (E(l, t.id, t.bound),
              '__proto__' !== n && (r[n] = l),
              '' === n && null === u.value && (u.value = l),
              r[0] === h &&
                'object' == typeof u.value &&
                null !== u.value &&
                u.value.$$typeof === h &&
                ((i = u.value), '3' === n) &&
                (i.props = l),
              u.deps--,
              0 === u.deps &&
                null !== (l = u.chunk) &&
                'blocked' === l.status &&
                ((i = l.value),
                (l.status = 'fulfilled'),
                (l.value = u.value),
                (l.reason = null),
                null !== i && T(e, i, u.value, l)));
          },
          function (t) {
            if (!u.errored) {
              ((u.errored = !0), (u.value = null), (u.reason = t));
              var r = u.chunk;
              null !== r && 'blocked' === r.status && N(e, r, t);
            }
          },
        ),
        null
      );
    }
    function K(e, t, r, n, a) {
      var l = parseInt((t = t.split(':'))[0], 16);
      switch ((l = k(e, l)).status) {
        case 'resolved_model':
          D(l);
          break;
        case 'resolved_module':
          U(l);
      }
      switch (l.status) {
        case 'fulfilled':
          l = l.value;
          for (var u = 1; u < t.length; u++) {
            for (; 'object' == typeof l && null !== l && l.$$typeof === p; ) {
              switch ((l = l._payload).status) {
                case 'resolved_model':
                  D(l);
                  break;
                case 'resolved_module':
                  U(l);
              }
              switch (l.status) {
                case 'fulfilled':
                  l = l.value;
                  break;
                case 'blocked':
                case 'pending':
                  return V(l, r, n, e, a, t.slice(u - 1));
                case 'halted':
                  return (
                    F
                      ? ((e = F), e.deps++)
                      : (F = {
                          parent: null,
                          chunk: null,
                          value: null,
                          reason: null,
                          deps: 1,
                          errored: !1,
                        }),
                    null
                  );
                default:
                  return (
                    F
                      ? ((F.errored = !0), (F.value = null), (F.reason = l.reason))
                      : (F = {
                          parent: null,
                          chunk: null,
                          value: null,
                          reason: l.reason,
                          deps: 0,
                          errored: !0,
                        }),
                    null
                  );
              }
            }
            l = l[t[u]];
          }
          for (; 'object' == typeof l && null !== l && l.$$typeof === p; ) {
            switch ((t = l._payload).status) {
              case 'resolved_model':
                D(t);
                break;
              case 'resolved_module':
                U(t);
            }
            if ('fulfilled' === t.status) {
              l = t.value;
              continue;
            }
            break;
          }
          return a(e, l, r, n);
        case 'pending':
        case 'blocked':
          return V(l, r, n, e, a, t);
        case 'halted':
          return (
            F
              ? ((e = F), e.deps++)
              : (F = {
                  parent: null,
                  chunk: null,
                  value: null,
                  reason: null,
                  deps: 1,
                  errored: !1,
                }),
            null
          );
        default:
          return (
            F
              ? ((F.errored = !0), (F.value = null), (F.reason = l.reason))
              : (F = {
                  parent: null,
                  chunk: null,
                  value: null,
                  reason: l.reason,
                  deps: 0,
                  errored: !0,
                }),
            null
          );
      }
    }
    function X(e, t) {
      return new Map(t);
    }
    function G(e, t) {
      return new Set(t);
    }
    function Y(e, t) {
      return new Blob(t.slice(1), { type: t[0] });
    }
    function q(e, t) {
      e = new FormData();
      for (var r = 0; r < t.length; r++) e.append(t[r][0], t[r][1]);
      return e;
    }
    function W(e, t) {
      return t[Symbol.iterator]();
    }
    function z(e, t) {
      return t;
    }
    function Q() {
      throw Error(
        'Trying to call a function from "use server" but the callServer option was not implemented in your router runtime.',
      );
    }
    function J(e, t, r, n, a, l, u, i) {
      var o = new Map();
      ((this._bundlerConfig = e),
        (this._serverReferenceConfig = t),
        (this._moduleLoading = r),
        (this._callServer = void 0 !== n ? n : Q),
        (this._encodeFormAction = a),
        (this._nonce = l),
        (this._chunks = o),
        (this._stringDecoder = new TextDecoder()),
        (this._closed = !1),
        (this._closedReason = null),
        (this._allowPartialStream = i),
        (this._tempRefs = u));
    }
    function Z(e, t, r) {
      var n = (e = e._chunks).get(t);
      n && 'pending' !== n.status
        ? n.reason.enqueueValue(r)
        : ((r = new P('fulfilled', r, null)), e.set(t, r));
    }
    function ee(e, t, r, n) {
      var a = e._chunks,
        l = a.get(t);
      l
        ? 'pending' === l.status &&
          ((t = l.value),
          (l.status = 'fulfilled'),
          (l.value = r),
          (l.reason = n),
          null !== t && T(e, t, l.value, l))
        : ((e = new P('fulfilled', r, n)), a.set(t, e));
    }
    function et(e, t, r) {
      var n = null,
        a = !1;
      r = new ReadableStream({
        type: r,
        start: function (e) {
          n = e;
        },
      });
      var l = null;
      ee(e, t, r, {
        enqueueValue: function (e) {
          null === l
            ? n.enqueue(e)
            : l.then(function () {
                n.enqueue(e);
              });
        },
        enqueueModel: function (t) {
          if (null === l) {
            var r = new P('resolved_model', t, e);
            (D(r),
              'fulfilled' === r.status
                ? n.enqueue(r.value)
                : (r.then(
                    function (e) {
                      return n.enqueue(e);
                    },
                    function (e) {
                      return n.error(e);
                    },
                  ),
                  (l = r)));
          } else {
            r = l;
            var a = b();
            (a.then(
              function (e) {
                return n.enqueue(e);
              },
              function (e) {
                return n.error(e);
              },
            ),
              (l = a),
              r.then(function () {
                (l === a && (l = null), M(e, a, t));
              }));
          }
        },
        close: function () {
          if (!a)
            if (((a = !0), null === l)) n.close();
            else {
              var e = l;
              ((l = null),
                e.then(function () {
                  return n.close();
                }));
            }
        },
        error: function (e) {
          if (!a)
            if (((a = !0), null === l)) n.error(e);
            else {
              var t = l;
              ((l = null),
                t.then(function () {
                  return n.error(e);
                }));
            }
        },
      });
    }
    function er() {
      return this;
    }
    function en(e, t, r) {
      var n = [],
        a = !1,
        l = 0,
        u = {};
      ((u[_] = function () {
        var e,
          t = 0;
        return (
          ((e = {
            next: (e = function (e) {
              if (void 0 !== e)
                throw Error(
                  'Values cannot be passed to next() of AsyncIterables passed to Client Components.',
                );
              if (t === n.length) {
                if (a) return new P('fulfilled', { done: !0, value: void 0 }, null);
                n[t] = b();
              }
              return n[t++];
            }),
          })[_] = er),
          e
        );
      }),
        ee(e, t, r ? u[_]() : u, {
          enqueueValue: function (t) {
            if (l === n.length) n[l] = new P('fulfilled', { done: !1, value: t }, null);
            else {
              var r = n[l],
                a = r.value,
                u = r.reason;
              ((r.status = 'fulfilled'),
                (r.value = { done: !1, value: t }),
                (r.reason = null),
                null !== a && A(e, r, a, u));
            }
            l++;
          },
          enqueueModel: function (t) {
            (l === n.length ? (n[l] = C(e, t, !1)) : j(e, n[l], t, !1), l++);
          },
          close: function (t) {
            if (!a)
              for (
                a = !0, l === n.length ? (n[l] = C(e, t, !0)) : j(e, n[l], t, !0), l++;
                l < n.length;
              )
                j(e, n[l++], '"$undefined"', !0);
          },
          error: function (t) {
            if (!a) for (a = !0, l === n.length && (n[l] = b()); l < n.length; ) N(e, n[l++], t);
          },
        }));
    }
    function ea() {
      var e = Error(
        'An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.',
      );
      return ((e.stack = 'Error: ' + e.message), e);
    }
    function el(e, t) {
      for (var r = e.length, n = t.length, a = 0; a < r; a++) n += e[a].byteLength;
      n = new Uint8Array(n);
      for (var l = (a = 0); l < r; l++) {
        var u = e[l];
        (n.set(u, a), (a += u.byteLength));
      }
      return (n.set(t, a), n);
    }
    function eu(e, t, r, n, a, l) {
      Z(
        e,
        t,
        (a = new a(
          (r = 0 === r.length && 0 == n.byteOffset % l ? n : el(r, n)).buffer,
          r.byteOffset,
          r.byteLength / l,
        )),
      );
    }
    function ei(e, t) {
      return (function e(t, r, n, a) {
        if ('string' == typeof r)
          return '$' === r[0]
            ? (function (e, t, r, n) {
                if ('$' === n[0]) {
                  if ('$' === n)
                    return (
                      null !== F &&
                        '0' === r &&
                        (F = {
                          parent: F,
                          chunk: null,
                          value: null,
                          reason: null,
                          deps: 0,
                          errored: !1,
                        }),
                      h
                    );
                  switch (n[1]) {
                    case '$':
                      return n.slice(1);
                    case 'L':
                      return x((e = k(e, (t = parseInt(n.slice(2), 16)))));
                    case '@':
                      return k(e, (t = parseInt(n.slice(2), 16)));
                    case 'S':
                      return Symbol.for(n.slice(2));
                    case 'h':
                      return K(e, (n = n.slice(2)), t, r, $);
                    case 'T':
                      if (((t = '$' + n.slice(2)), null == (e = e._tempRefs)))
                        throw Error(
                          'Missing a temporary reference set but the RSC response returned a temporary reference. Pass a temporaryReference option with the set that was used with the reply.',
                        );
                      return e.get(t);
                    case 'Q':
                      return K(e, (n = n.slice(2)), t, r, X);
                    case 'W':
                      return K(e, (n = n.slice(2)), t, r, G);
                    case 'B':
                      return K(e, (n = n.slice(2)), t, r, Y);
                    case 'K':
                      return K(e, (n = n.slice(2)), t, r, q);
                    case 'Z':
                      return ea();
                    case 'i':
                      return K(e, (n = n.slice(2)), t, r, W);
                    case 'I':
                      return 1 / 0;
                    case '-':
                      return '$-0' === n ? -0 : -1 / 0;
                    case 'N':
                      return NaN;
                    case 'u':
                      return;
                    case 'D':
                      return new Date(Date.parse(n.slice(2)));
                    case 'n':
                      return BigInt(n.slice(2));
                    default:
                      return K(e, (n = n.slice(1)), t, r, z);
                  }
                }
                return n;
              })(t, n, a, r)
            : r;
        if ('object' != typeof r || null === r) return r;
        if (g(r)) {
          for (var l = 0; l < r.length; l++) r[l] = e(t, r[l], r, '' + l);
          return r[0] === h
            ? (r[0] === h
                ? ((t = { $$typeof: h, type: r[1], key: r[2], ref: null, props: r[3] }),
                  null !== F &&
                    ((F = (r = F).parent),
                    r.errored
                      ? (t = x((t = new P('rejected', null, r.reason))))
                      : 0 < r.deps &&
                        ((l = new P('blocked', null, null)),
                        (r.value = t),
                        (r.chunk = l),
                        (t = x(l)))))
                : (t = r),
              t)
            : r;
        }
        for (l in r)
          '__proto__' === l
            ? delete r[l]
            : void 0 !== (n = e(t, r[l], r, l))
              ? (r[l] = n)
              : delete r[l];
        return r;
      })(e, (t = JSON.parse(t)), { '': t }, '');
    }
    function eo(e) {
      e._allowPartialStream
        ? ((e._closed = !0),
          e._chunks.forEach(function (e) {
            'pending' === e.status
              ? ((e.status = 'halted'), (e.value = null), (e.reason = null))
              : 'fulfilled' === e.status && null !== e.reason && e.reason.close('"$undefined"');
          }))
        : L(e, Error('Connection closed.'));
    }
    function es(e) {
      return new J(
        null,
        null,
        null,
        e && e.callServer ? e.callServer : void 0,
        void 0,
        void 0,
        e && e.temporaryReferences ? e.temporaryReferences : void 0,
        !!e && !!e.unstable_allowPartialStream && e.unstable_allowPartialStream,
      );
    }
    function ec(e, t, r) {
      function n(t) {
        L(e, t);
      }
      var l = { _rowState: 0, _rowID: 0, _rowTag: 0, _rowLength: 0, _buffer: [] },
        u = t.getReader();
      u.read()
        .then(function t(i) {
          var o = i.value;
          if (i.done) return r();
          var s = 0,
            f = l._rowState;
          i = l._rowID;
          for (var h = l._rowTag, p = l._rowLength, y = l._buffer, _ = o.length; s < _; ) {
            var g = -1;
            switch (f) {
              case 0:
                58 === (g = o[s++]) ? (f = 1) : (i = (i << 4) | (96 < g ? g - 87 : g - 48));
                continue;
              case 1:
                84 === (f = o[s]) ||
                65 === f ||
                79 === f ||
                111 === f ||
                98 === f ||
                85 === f ||
                83 === f ||
                115 === f ||
                76 === f ||
                108 === f ||
                71 === f ||
                103 === f ||
                77 === f ||
                109 === f ||
                86 === f
                  ? ((h = f), (f = 2), s++)
                  : (64 < f && 91 > f) || 35 === f || 114 === f || 120 === f
                    ? ((h = f), (f = 3), s++)
                    : ((h = 0), (f = 3));
                continue;
              case 2:
                44 === (g = o[s++]) ? (f = 4) : (p = (p << 4) | (96 < g ? g - 87 : g - 48));
                continue;
              case 3:
                g = o.indexOf(10, s);
                break;
              case 4:
                (g = s + p) > o.length && (g = -1);
            }
            var v = o.byteOffset + s;
            if (-1 < g)
              ((p = new Uint8Array(o.buffer, v, g - s)),
                98 === h
                  ? Z(e, i, g === _ ? p : p.slice())
                  : (function (e, t, r, n, l, u) {
                      switch (n) {
                        case 65:
                          Z(e, r, el(l, u).buffer);
                          return;
                        case 79:
                          eu(e, r, l, u, Int8Array, 1);
                          return;
                        case 111:
                          Z(e, r, 0 === l.length ? u : el(l, u));
                          return;
                        case 85:
                          eu(e, r, l, u, Uint8ClampedArray, 1);
                          return;
                        case 83:
                          eu(e, r, l, u, Int16Array, 2);
                          return;
                        case 115:
                          eu(e, r, l, u, Uint16Array, 2);
                          return;
                        case 76:
                          eu(e, r, l, u, Int32Array, 4);
                          return;
                        case 108:
                          eu(e, r, l, u, Uint32Array, 4);
                          return;
                        case 71:
                          eu(e, r, l, u, Float32Array, 4);
                          return;
                        case 103:
                          eu(e, r, l, u, Float64Array, 8);
                          return;
                        case 77:
                          eu(e, r, l, u, BigInt64Array, 8);
                          return;
                        case 109:
                          eu(e, r, l, u, BigUint64Array, 8);
                          return;
                        case 86:
                          eu(e, r, l, u, DataView, 1);
                          return;
                      }
                      t = e._stringDecoder;
                      for (var i = '', o = 0; o < l.length; o++) i += t.decode(l[o], a);
                      switch (((l = i += t.decode(u)), n)) {
                        case 73:
                          var s = e,
                            f = r,
                            h = l,
                            p = s._chunks,
                            y = p.get(f);
                          h = ei(s, h);
                          var _ = (function (e, t) {
                            if (e) {
                              var r = e[t[0]];
                              if ((e = r && r[t[2]])) r = e.name;
                              else {
                                if (!(e = r && r['*']))
                                  throw Error(
                                    'Could not find the module "' +
                                      t[0] +
                                      '" in the React Server Consumer Manifest. This is probably a bug in the React Server Components bundler.',
                                  );
                                r = t[2];
                              }
                              return 4 === t.length ? [e.id, e.chunks, r, 1] : [e.id, e.chunks, r];
                            }
                            return t;
                          })(s._bundlerConfig, h);
                          if ((h = c(_))) {
                            if (y) {
                              var g = y;
                              g.status = 'blocked';
                            } else ((g = new P('blocked', null, null)), p.set(f, g));
                            h.then(
                              function () {
                                return I(s, g, _);
                              },
                              function (e) {
                                return N(s, g, e);
                              },
                            );
                          } else
                            y ? I(s, y, _) : ((y = new P('resolved_module', _, null)), p.set(f, y));
                          break;
                        case 72:
                          switch (((r = l[0]), (e = ei(e, (l = l.slice(1)))), (l = d.d), r)) {
                            case 'D':
                              l.D(e);
                              break;
                            case 'C':
                              'string' == typeof e ? l.C(e) : l.C(e[0], e[1]);
                              break;
                            case 'L':
                              ((r = e[0]),
                                (n = e[1]),
                                3 === e.length ? l.L(r, n, e[2]) : l.L(r, n));
                              break;
                            case 'm':
                              'string' == typeof e ? l.m(e) : l.m(e[0], e[1]);
                              break;
                            case 'X':
                              'string' == typeof e ? l.X(e) : l.X(e[0], e[1]);
                              break;
                            case 'S':
                              'string' == typeof e
                                ? l.S(e)
                                : l.S(
                                    e[0],
                                    0 === e[1] ? void 0 : e[1],
                                    3 === e.length ? e[2] : void 0,
                                  );
                              break;
                            case 'M':
                              'string' == typeof e ? l.M(e) : l.M(e[0], e[1]);
                          }
                          break;
                        case 69:
                          ((u = (n = e._chunks).get(r)),
                            (l = JSON.parse(l)),
                            ((t = ea()).digest = l.digest),
                            u ? N(e, u, t) : ((e = new P('rejected', null, t)), n.set(r, e)));
                          break;
                        case 84:
                          (n = (e = e._chunks).get(r)) && 'pending' !== n.status
                            ? n.reason.enqueueValue(l)
                            : ((l = new P('fulfilled', l, null)), e.set(r, l));
                          break;
                        case 78:
                        case 68:
                        case 74:
                        case 87:
                          throw Error(
                            'Failed to read a RSC payload created by a development version of React on the server while using a production version on the client. Always use matching versions on the server and the client.',
                          );
                        case 82:
                          et(e, r, void 0);
                          break;
                        case 114:
                          et(e, r, 'bytes');
                          break;
                        case 88:
                          en(e, r, !1);
                          break;
                        case 120:
                          en(e, r, !0);
                          break;
                        case 67:
                          (r = e._chunks.get(r)) &&
                            'fulfilled' === r.status &&
                            r.reason.close('' === l ? '"$undefined"' : l);
                          break;
                        default:
                          (u = (n = e._chunks).get(r))
                            ? M(e, u, l)
                            : ((e = new P('resolved_model', l, e)), n.set(r, e));
                      }
                    })(e, l, i, h, y, p),
                (s = g),
                3 === f && s++,
                (p = i = h = f = 0),
                (y.length = 0));
            else {
              ((o = new Uint8Array(o.buffer, v, o.byteLength - s)),
                98 === h ? ((p -= o.byteLength), Z(e, i, o)) : (y.push(o), (p -= o.byteLength)));
              break;
            }
          }
          return (
            (l._rowState = f),
            (l._rowID = i),
            (l._rowTag = h),
            (l._rowLength = p),
            u.read().then(t).catch(n)
          );
        })
        .catch(n);
    }
    ((r.createFromFetch = function (e, t) {
      var r = es(t);
      return (
        e.then(
          function (e) {
            ec(r, e.body, eo.bind(null, r));
          },
          function (e) {
            L(r, e);
          },
        ),
        k(r, 0)
      );
    }),
      (r.createFromReadableStream = function (e, t) {
        return (ec((t = es(t)), e, eo.bind(null, t)), k(t, 0));
      }),
      (r.createServerReference = function (e, t) {
        function r() {
          var r = Array.prototype.slice.call(arguments);
          return t(e, r);
        }
        return (E(r, e, null), r);
      }),
      (r.createTemporaryReferenceSet = function () {
        return new Map();
      }),
      (r.encodeReply = function (e, t) {
        return new Promise(function (r, n) {
          var a = (function (e, t, r, n) {
            function a(e, t) {
              t = new Blob([new Uint8Array(t.buffer, t.byteOffset, t.byteLength)]);
              var r = i++;
              return (
                null === s && (s = new FormData()),
                s.append('' + r, t),
                '$' + e + r.toString(16)
              );
            }
            function l(e, d) {
              if (null === d) return null;
              if ('object' == typeof d) {
                switch (d.$$typeof) {
                  case h:
                    if (void 0 !== t && -1 === e.indexOf(':')) {
                      var E,
                        P,
                        S,
                        b,
                        T,
                        O = c.get(this);
                      if (void 0 !== O) return (t.set(O + ':' + e, d), '$T');
                    }
                    if (void 0 !== t && f === d) return ((f = null), '$T');
                    throw Error(
                      'React Element cannot be passed to Server Functions from the Client without a temporary reference set. Pass a TemporaryReferenceSet to the options.',
                    );
                  case p:
                    O = d._payload;
                    var w = d._init;
                    (null === s && (s = new FormData()), o++);
                    try {
                      var A = w(O),
                        N = i++,
                        C = u(A, N);
                      return (s.append('' + N, C), '$' + N.toString(16));
                    } catch (e) {
                      if ('object' == typeof e && null !== e && 'function' == typeof e.then) {
                        o++;
                        var j = i++;
                        return (
                          (O = function () {
                            try {
                              var e = u(d, j),
                                t = s;
                              (t.append('' + j, e), o--, 0 === o && r(t));
                            } catch (e) {
                              n(e);
                            }
                          }),
                          e.then(O, O),
                          '$' + j.toString(16)
                        );
                      }
                      return (n(e), null);
                    } finally {
                      o--;
                    }
                }
                if (((O = c.get(d)), 'function' == typeof d.then)) {
                  if (void 0 !== O)
                    if (f !== d) return O;
                    else f = null;
                  (null === s && (s = new FormData()), o++);
                  var M = i++;
                  return (
                    (e = '$@' + M.toString(16)),
                    c.set(d, e),
                    d.then(function (e) {
                      try {
                        var t = c.get(e),
                          a = void 0 !== t ? JSON.stringify(t) : u(e, M);
                        ((e = s).append('' + M, a), o--, 0 === o && r(e));
                      } catch (e) {
                        n(e);
                      }
                    }, n),
                    e
                  );
                }
                if (void 0 !== O)
                  if (f !== d) return O;
                  else f = null;
                else
                  -1 === e.indexOf(':') &&
                    void 0 !== (O = c.get(this)) &&
                    ((e = O + ':' + e), c.set(d, e), void 0 !== t && t.set(e, d));
                if (g(d)) return d;
                if (d instanceof FormData) {
                  null === s && (s = new FormData());
                  var I = s,
                    F = '_' + (e = i++) + '_';
                  return (
                    d.forEach(function (e, t) {
                      I.append(F + t, e);
                    }),
                    '$K' + e.toString(16)
                  );
                }
                if (d instanceof Map)
                  return (
                    (e = i++),
                    (O = u(Array.from(d), e)),
                    null === s && (s = new FormData()),
                    s.append('' + e, O),
                    '$Q' + e.toString(16)
                  );
                if (d instanceof Set)
                  return (
                    (e = i++),
                    (O = u(Array.from(d), e)),
                    null === s && (s = new FormData()),
                    s.append('' + e, O),
                    '$W' + e.toString(16)
                  );
                if (d instanceof ArrayBuffer)
                  return (
                    (e = new Blob([d])),
                    (O = i++),
                    null === s && (s = new FormData()),
                    s.append('' + O, e),
                    '$A' + O.toString(16)
                  );
                if (d instanceof Int8Array) return a('O', d);
                if (d instanceof Uint8Array) return a('o', d);
                if (d instanceof Uint8ClampedArray) return a('U', d);
                if (d instanceof Int16Array) return a('S', d);
                if (d instanceof Uint16Array) return a('s', d);
                if (d instanceof Int32Array) return a('L', d);
                if (d instanceof Uint32Array) return a('l', d);
                if (d instanceof Float32Array) return a('G', d);
                if (d instanceof Float64Array) return a('g', d);
                if (d instanceof BigInt64Array) return a('M', d);
                if (d instanceof BigUint64Array) return a('m', d);
                if (d instanceof DataView) return a('V', d);
                if ('function' == typeof Blob && d instanceof Blob)
                  return (
                    null === s && (s = new FormData()),
                    (e = i++),
                    s.append('' + e, d),
                    '$B' + e.toString(16)
                  );
                if (
                  (e =
                    null === (E = d) || 'object' != typeof E
                      ? null
                      : 'function' == typeof (E = (y && E[y]) || E['@@iterator'])
                        ? E
                        : null)
                )
                  return (O = e.call(d)) === d
                    ? ((e = i++),
                      (O = u(Array.from(O), e)),
                      null === s && (s = new FormData()),
                      s.append('' + e, O),
                      '$i' + e.toString(16))
                    : Array.from(O);
                if ('function' == typeof ReadableStream && d instanceof ReadableStream)
                  return (function (e) {
                    try {
                      var t,
                        a,
                        u,
                        c,
                        f,
                        d,
                        h,
                        p = e.getReader({ mode: 'byob' });
                    } catch (c) {
                      return (
                        (t = e.getReader()),
                        null === s && (s = new FormData()),
                        (a = s),
                        o++,
                        (u = i++),
                        t.read().then(function e(i) {
                          if (i.done) (a.append('' + u, 'C'), 0 == --o && r(a));
                          else
                            try {
                              var s = JSON.stringify(i.value, l);
                              (a.append('' + u, s), t.read().then(e, n));
                            } catch (e) {
                              n(e);
                            }
                        }, n),
                        '$R' + u.toString(16)
                      );
                    }
                    return (
                      (c = p),
                      null === s && (s = new FormData()),
                      (f = s),
                      o++,
                      (d = i++),
                      (h = []),
                      c.read(new Uint8Array(1024)).then(function e(t) {
                        t.done
                          ? ((t = i++),
                            f.append('' + t, new Blob(h)),
                            f.append('' + d, '"$o' + t.toString(16) + '"'),
                            f.append('' + d, 'C'),
                            0 == --o && r(f))
                          : (h.push(t.value), c.read(new Uint8Array(1024)).then(e, n));
                      }, n),
                      '$r' + d.toString(16)
                    );
                  })(d);
                if ('function' == typeof (e = d[_]))
                  return (
                    (P = d),
                    (S = e.call(d)),
                    null === s && (s = new FormData()),
                    (b = s),
                    o++,
                    (T = i++),
                    (P = P === S),
                    S.next().then(function e(t) {
                      if (t.done) {
                        if (void 0 === t.value) b.append('' + T, 'C');
                        else
                          try {
                            var a = JSON.stringify(t.value, l);
                            b.append('' + T, 'C' + a);
                          } catch (e) {
                            n(e);
                            return;
                          }
                        0 == --o && r(b);
                      } else
                        try {
                          var u = JSON.stringify(t.value, l);
                          (b.append('' + T, u), S.next().then(e, n));
                        } catch (e) {
                          n(e);
                        }
                    }, n),
                    '$' + (P ? 'x' : 'X') + T.toString(16)
                  );
                if ((e = v(d)) !== m && (null === e || null !== v(e))) {
                  if (void 0 === t)
                    throw Error(
                      'Only plain objects, and a few built-ins, can be passed to Server Functions. Classes or null prototypes are not supported.',
                    );
                  return '$T';
                }
                return d;
              }
              if ('string' == typeof d)
                return 'Z' === d[d.length - 1] && this[e] instanceof Date
                  ? '$D' + d
                  : (e = '$' === d[0] ? '$' + d : d);
              if ('boolean' == typeof d) return d;
              if ('number' == typeof d)
                return Number.isFinite(d)
                  ? 0 === d && -1 / 0 == 1 / d
                    ? '$-0'
                    : d
                  : 1 / 0 === d
                    ? '$Infinity'
                    : -1 / 0 === d
                      ? '$-Infinity'
                      : '$NaN';
              if (void 0 === d) return '$undefined';
              if ('function' == typeof d) {
                if (void 0 !== (O = R.get(d)))
                  return (
                    void 0 !== (e = c.get(d)) ||
                      ((e = JSON.stringify({ id: O.id, bound: O.bound }, l)),
                      null === s && (s = new FormData()),
                      (O = i++),
                      s.set('' + O, e),
                      (e = '$h' + O.toString(16)),
                      c.set(d, e)),
                    e
                  );
                if (void 0 !== t && -1 === e.indexOf(':') && void 0 !== (O = c.get(this)))
                  return (t.set(O + ':' + e, d), '$T');
                throw Error(
                  'Client Functions cannot be passed directly to Server Functions. Only Functions passed from the Server can be passed back again.',
                );
              }
              if ('symbol' == typeof d) {
                if (void 0 !== t && -1 === e.indexOf(':') && void 0 !== (O = c.get(this)))
                  return (t.set(O + ':' + e, d), '$T');
                throw Error(
                  'Symbols cannot be passed to a Server Function without a temporary reference set. Pass a TemporaryReferenceSet to the options.',
                );
              }
              if ('bigint' == typeof d) return '$n' + d.toString(10);
              throw Error(
                'Type ' + typeof d + ' is not supported as an argument to a Server Function.',
              );
            }
            function u(e, r) {
              return (
                'object' == typeof e &&
                  null !== e &&
                  ((r = '$' + r.toString(16)), c.set(e, r), void 0 !== t && t.set(r, e)),
                (f = e),
                JSON.stringify(e, l)
              );
            }
            var i = 1,
              o = 0,
              s = null,
              c = new WeakMap(),
              f = e,
              d = u(e, 0);
            return (
              null === s ? r(d) : (s.set('0', d), 0 === o && r(s)),
              function () {
                0 < o && ((o = 0), null === s ? r(d) : r(s));
              }
            );
          })(e, t && t.temporaryReferences ? t.temporaryReferences : void 0, r, n);
          if (t && t.signal) {
            var l = t.signal;
            if (l.aborted) a(l.reason);
            else {
              var u = function () {
                (a(l.reason), l.removeEventListener('abort', u));
              };
              l.addEventListener('abort', u);
            }
          }
        });
      }),
      (r.registerServerReference = function (e, t) {
        return (E(e, t, null), e);
      }));
  },
  