/*
 * [entry #68027] Modul mit 1 Export(en)
 * Exporte: default
 * Requires: #55682, #43476, #71645, #12354, #18576
 * Quelle: site/_next/static/chunks/15xrurgzs99gv.js — Turbopack-Modul 68027.
 */
/* ─────── original (verbatim · nicht editieren) ─────── */
68027,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'default', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }),
      e.r(55682));
    let n = e.r(43476);
    e.r(71645);
    let o = e.r(12354),
      u = e.r(18576),
      i = function ({ error: e }) {
        let t = e?.digest,
          r = !!t;
        return (
          (0, o.handleISRError)({ error: e }),
          (0, n.jsxs)('html', {
            id: '__next_error__',
            children: [
              (0, n.jsx)('head', {
                children: (0, n.jsx)('style', {
                  dangerouslySetInnerHTML: { __html: u.errorThemeCss },
                }),
              }),
              (0, n.jsxs)('body', {
                children: [
                  (0, n.jsx)('div', {
                    style: u.errorStyles.container,
                    children: (0, n.jsxs)('div', {
                      style: u.errorStyles.card,
                      children: [
                        (0, n.jsx)(u.WarningIcon, {}),
                        (0, n.jsx)('h1', {
                          style: u.errorStyles.title,
                          children: 'This page couldn’t load',
                        }),
                        (0, n.jsx)('p', {
                          style: u.errorStyles.message,
                          children: r
                            ? 'A server error occurred. Reload to try again.'
                            : 'Reload to try again, or go back.',
                        }),
                        (0, n.jsxs)('div', {
                          style: u.errorStyles.buttonGroup,
                          children: [
                            (0, n.jsx)('form', {
                              style: u.errorStyles.form,
                              children: (0, n.jsx)('button', {
                                type: 'submit',
                                style: u.errorStyles.button,
                                children: 'Reload',
                              }),
                            }),
                            !r &&
                              (0, n.jsx)('button', {
                                type: 'button',
                                style: u.errorStyles.buttonSecondary,
                                onClick: () => {
                                  window.history.length > 1
                                    ? window.history.back()
                                    : (window.location.href = '/');
                                },
                                children: 'Back',
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  t &&
                    (0, n.jsxs)('p', {
                      style: u.errorStyles.digestFooter,
                      children: ['ERROR ', t],
                    }),
                ],
              }),
            ],
          })
        );
      };
    ('function' == typeof r.default || ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  }