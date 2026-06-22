/*
 * [app-animation #72383] Modul (ohne erkannte Exporte)
 * Requires: #90809, #43476, #71645, #90373, #65713, #78377, #12354, #82604, #8372
 * Quelle: site/_next/static/chunks/0m52qbjc0ohcs.js — Turbopack-Modul 72383.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
72383,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      ErrorBoundary: function () {
        return y;
      },
      ErrorBoundaryHandler: function () {
        return p;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let l = e.r(90809),
      u = e.r(43476),
      i = l._(e.r(71645)),
      o = e.r(90373),
      s = e.r(65713);
    e.r(78377);
    let c = e.r(12354),
      f = e.r(82604),
      d = e.r(8372),
      h = 'u' > typeof window && (0, f.isBot)(window.navigator.userAgent);
    class p extends i.default.Component {
      static {
        this.contextType = d.AppRouterContext;
      }
      constructor(e) {
        (super(e),
          (this.reset = () => {
            this.setState({ error: null });
          }),
          (this.unstable_retry = () => {
            (0, i.startTransition)(() => {
              (this.context?.refresh(), this.reset());
            });
          }),
          (this.state = { error: null, previousPathname: this.props.pathname }));
      }
      static getDerivedStateFromError(e) {
        if ((0, s.isNextRouterError)(e)) throw e;
        return { error: e };
      }
      static getDerivedStateFromProps(e, t) {
        let { error: r } = t;
        return e.pathname !== t.previousPathname && t.error
          ? { error: null, previousPathname: e.pathname }
          : { error: t.error, previousPathname: e.pathname };
      }
      render() {
        return this.state.error && !h
          ? ((0, c.handleISRError)({ error: this.state.error }),
            (0, u.jsxs)(u.Fragment, {
              children: [
                this.props.errorStyles,
                this.props.errorScripts,
                (0, u.jsx)(this.props.errorComponent, {
                  error: this.state.error,
                  reset: this.reset,
                  unstable_retry: this.unstable_retry,
                }),
              ],
            }))
          : this.props.children;
      }
    }
    function y({ errorComponent: e, errorStyles: t, errorScripts: r, children: n }) {
      let a = (0, o.useUntrackedPathname)();
      return e
        ? (0, u.jsx)(p, {
            pathname: a,
            errorComponent: e,
            errorStyles: t,
            errorScripts: r,
            children: n,
          })
        : (0, u.jsx)(u.Fragment, { children: n });
    }
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  