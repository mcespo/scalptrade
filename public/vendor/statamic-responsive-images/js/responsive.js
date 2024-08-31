(() => {
  'use strict';
  var e = {
      109: (e, t, n) => {
        n.d(t, { Z: () => o });
        var r = n(645),
          i = n.n(r)()(function (e) {
            return e[1];
          });
        i.push([
          e.id,
          '@container (max-width: 125px){.responsive-field[data-v-09ebdbf6] .assets-fieldtype .assets-fieldtype-picker{flex-direction:row}.responsive-field[data-v-09ebdbf6] .assets-fieldtype .assets-fieldtype-picker .btn.btn-with-icon{overflow:hidden;white-space:nowrap}}@container (max-width: 148px){.responsive-field[data-v-09ebdbf6] .assets-fieldtype .assets-fieldtype-picker .btn.btn-with-icon svg{display:none}}@container (max-width: 265px){.responsive-field[data-v-09ebdbf6] .assets-fieldtype .assets-fieldtype-drag-container .asset-table-listing td.w-24{display:none}}',
          '',
        ]);
        const o = i;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = e(t);
                return t[2] ? '@media '.concat(t[2], ' {').concat(n, '}') : n;
              }).join('');
            }),
            (t.i = function (e, n, r) {
              'string' == typeof e && (e = [[null, e, '']]);
              var i = {};
              if (r)
                for (var o = 0; o < this.length; o++) {
                  var s = this[o][0];
                  null != s && (i[s] = !0);
                }
              for (var a = 0; a < e.length; a++) {
                var c = [].concat(e[a]);
                (r && i[c[0]]) || (n && (c[2] ? (c[2] = ''.concat(n, ' and ').concat(c[2])) : (c[2] = n)), t.push(c));
              }
            }),
            t
          );
        };
      },
      379: (e, t, n) => {
        var r,
          i = function () {
            return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r;
          },
          o = (function () {
            var e = {};
            return function (t) {
              if (void 0 === e[t]) {
                var n = document.querySelector(t);
                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                  try {
                    n = n.contentDocument.head;
                  } catch (e) {
                    n = null;
                  }
                e[t] = n;
              }
              return e[t];
            };
          })(),
          s = [];
        function a(e) {
          for (var t = -1, n = 0; n < s.length; n++)
            if (s[n].identifier === e) {
              t = n;
              break;
            }
          return t;
        }
        function c(e, t) {
          for (var n = {}, r = [], i = 0; i < e.length; i++) {
            var o = e[i],
              c = t.base ? o[0] + t.base : o[0],
              l = n[c] || 0,
              u = ''.concat(c, ' ').concat(l);
            n[c] = l + 1;
            var d = a(u),
              f = { css: o[1], media: o[2], sourceMap: o[3] };
            -1 !== d ? (s[d].references++, s[d].updater(f)) : s.push({ identifier: u, updater: h(f, t), references: 1 }), r.push(u);
          }
          return r;
        }
        function l(e) {
          var t = document.createElement('style'),
            r = e.attributes || {};
          if (void 0 === r.nonce) {
            var i = n.nc;
            i && (r.nonce = i);
          }
          if (
            (Object.keys(r).forEach(function (e) {
              t.setAttribute(e, r[e]);
            }),
            'function' == typeof e.insert)
          )
            e.insert(t);
          else {
            var s = o(e.insert || 'head');
            if (!s)
              throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            s.appendChild(t);
          }
          return t;
        }
        var u,
          d =
            ((u = []),
            function (e, t) {
              return (u[e] = t), u.filter(Boolean).join('\n');
            });
        function f(e, t, n, r) {
          var i = n ? '' : r.media ? '@media '.concat(r.media, ' {').concat(r.css, '}') : r.css;
          if (e.styleSheet) e.styleSheet.cssText = d(t, i);
          else {
            var o = document.createTextNode(i),
              s = e.childNodes;
            s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(o, s[t]) : e.appendChild(o);
          }
        }
        function p(e, t, n) {
          var r = n.css,
            i = n.media,
            o = n.sourceMap;
          if (
            (i ? e.setAttribute('media', i) : e.removeAttribute('media'),
            o &&
              'undefined' != typeof btoa &&
              (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                ' */',
              )),
            e.styleSheet)
          )
            e.styleSheet.cssText = r;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(r));
          }
        }
        var v = null,
          m = 0;
        function h(e, t) {
          var n, r, i;
          if (t.singleton) {
            var o = m++;
            (n = v || (v = l(t))), (r = f.bind(null, n, o, !1)), (i = f.bind(null, n, o, !0));
          } else
            (n = l(t)),
              (r = p.bind(null, n, t)),
              (i = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(n);
              });
          return (
            r(e),
            function (t) {
              if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                r((e = t));
              } else i();
            }
          );
        }
        e.exports = function (e, t) {
          (t = t || {}).singleton || 'boolean' == typeof t.singleton || (t.singleton = i());
          var n = c((e = e || []), t);
          return function (e) {
            if (((e = e || []), '[object Array]' === Object.prototype.toString.call(e))) {
              for (var r = 0; r < n.length; r++) {
                var i = a(n[r]);
                s[i].references--;
              }
              for (var o = c(e, t), l = 0; l < n.length; l++) {
                var u = a(n[l]);
                0 === s[u].references && (s[u].updater(), s.splice(u, 1));
              }
              n = o;
            }
          };
        };
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { id: r, exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.nc = void 0),
    (() => {
      function e(e) {
        return e.toString(16).padStart(2, '0');
      }
      function t(e) {
        return (
          (t =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                }),
          t(e)
        );
      }
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(e, n, r) {
        return (
          (n = (function (e) {
            var n = (function (e, n) {
              if ('object' !== t(e) || null === e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var i = r.call(e, n || 'default');
                if ('object' !== t(i)) return i;
                throw new TypeError('@@toPrimitive must return a primitive value.');
              }
              return ('string' === n ? String : Number)(e);
            })(e, 'string');
            return 'symbol' === t(n) ? n : String(n);
          })(n)) in e
            ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (e[n] = r),
          e
        );
      }
      const o = {
        mixins: [Fieldtype],
        computed: {
          publishContainerName: function () {
            return (
              this.$props.handle + '.' + ((t = new Uint8Array((10 || 40) / 2)), window.crypto.getRandomValues(t), Array.from(t, e).join(''))
            );
            var t;
          },
          fields: function () {
            return _.chain(this.meta.fields)
              .map(function (e) {
                return (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? r(Object(n), !0).forEach(function (t) {
                          i(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : r(Object(n)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                  }
                  return e;
                })({ handle: e.handle }, e.field);
              })
              .values()
              .value();
          },
          storeState: function () {
            return this.$store.state.publish.base || {};
          },
          errors: function () {
            var e = this,
              t = this.storeState.errors || [];
            return (
              Object.keys(t).map(function (n) {
                var r = n.replace(e.handle + '.', '');
                (t[r] = t[n]), delete t[n];
              }),
              Object.assign({}, t)
            );
          },
        },
        methods: {
          updated: function (e) {
            var t = Object.assign({}, e);
            this.update(t);
          },
        },
      };
      var s = n(379),
        a = n.n(s),
        c = n(109),
        l = { insert: 'head', singleton: !1 };
      a()(c.Z, l);
      c.Z.locals;
      function u(e, t, n, r, i, o, s, a) {
        var c,
          l = 'function' == typeof e ? e.options : e;
        if (
          (t && ((l.render = t), (l.staticRenderFns = n), (l._compiled = !0)),
          r && (l.functional = !0),
          o && (l._scopeId = 'data-v-' + o),
          s
            ? ((c = function (e) {
                (e =
                  e || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                  i && i.call(this, e),
                  e && e._registeredComponents && e._registeredComponents.add(s);
              }),
              (l._ssrRegister = c))
            : i &&
              (c = a
                ? function () {
                    i.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : i),
          c)
        )
          if (l.functional) {
            l._injectStyles = c;
            var u = l.render;
            l.render = function (e, t) {
              return c.call(t), u(e, t);
            };
          } else {
            var d = l.beforeCreate;
            l.beforeCreate = d ? [].concat(d, c) : [c];
          }
        return { exports: e, options: l };
      }
      const d = u(
        o,
        function () {
          var e = this,
            t = e._self._c;
          return t(
            'div',
            { staticClass: 'responsive-field' },
            [
              t('publish-container', {
                attrs: { name: e.publishContainerName, values: e.value, meta: e.meta, errors: e.errors, trackDirtyState: !1 },
                on: {
                  updated: function (t) {
                    return e.updated(t);
                  },
                },
                scopedSlots: e._u([
                  {
                    key: 'default',
                    fn: function (n) {
                      var r = n.setFieldValue,
                        i = n.setFieldMeta;
                      return t(
                        'div',
                        {},
                        [
                          t('publish-fields', {
                            attrs: { fields: e.fields, 'name-prefix': e.name },
                            on: { updated: r, 'meta-updated': i },
                          }),
                        ],
                        1,
                      );
                    },
                  },
                ]),
              }),
            ],
            1,
          );
        },
        [],
        !1,
        null,
        '09ebdbf6',
        null,
      ).exports;
      const f = u(
        {
          props: { asset: Object, square: { default: !1, type: Boolean } },
          computed: {
            showSvg: function () {
              return 'svg' === this.asset.extension;
            },
          },
        },
        function () {
          var e = this,
            t = e._self._c;
          return t(
            'div',
            {},
            [
              e.asset.is_image
                ? t('img', {
                    staticClass: 'asset-thumbnail max-h-8 max-w-full mx-auto rounded',
                    class: { 'w-8 h-8 object-cover': e.square },
                    attrs: { src: e.asset.thumbnail, loading: 'lazy' },
                  })
                : e.asset.is_svg
                  ? t('img', {
                      staticClass: 'asset-thumbnail h-8 max-w-full mx-auto rounded',
                      attrs: { src: e.asset.url, loading: 'lazy' },
                    })
                  : t('file-icon', { staticClass: 'p-px asset-thumbnail rounded w-8 h-8', attrs: { extension: e.asset.extension } }),
            ],
            1,
          );
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
      const p = u(
        {
          mixins: [IndexFieldtype],
          components: { AssetThumbnail: f },
          computed: {
            assets: function () {
              return this.value ? this.value.reverse() : [];
            },
          },
        },
        function () {
          var e = this,
            t = e._self._c;
          return t(
            'div',
            { staticClass: 'text-2xs flex' },
            e._l(e.assets, function (e) {
              return t(
                'a',
                { key: e.id, attrs: { href: e.url, target: '_blank', title: e.breakpoint } },
                [t('asset-thumbnail', { staticClass: 'h-8 max-w-3xs -my-sm', attrs: { asset: e } })],
                1,
              );
            }),
            0,
          );
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports;
      Statamic.booting(function () {
        Statamic.$components.register('responsive-fieldtype', d), Statamic.$components.register('responsive-fieldtype-index', p);
      });
    })();
})();
