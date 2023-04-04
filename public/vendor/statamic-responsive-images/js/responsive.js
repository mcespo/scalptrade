(() => {
    'use strict';
    function e(e) {
        return e.toString(16).padStart(2, '0');
    }
    function t(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);
            t &&
                (s = s.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, s);
        }
        return n;
    }
    function n(e, t, n) {
        return (
            t in e
                ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (e[t] = n),
            e
        );
    }
    function s(e, t, n, s, r, a, i, o) {
        var l,
            u = 'function' == typeof e ? e.options : e;
        if (
            (t && ((u.render = t), (u.staticRenderFns = n), (u._compiled = !0)),
            s && (u.functional = !0),
            a && (u._scopeId = 'data-v-' + a),
            i
                ? ((l = function (e) {
                      (e =
                          e ||
                          (this.$vnode && this.$vnode.ssrContext) ||
                          (this.parent &&
                              this.parent.$vnode &&
                              this.parent.$vnode.ssrContext)) ||
                          'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                          (e = __VUE_SSR_CONTEXT__),
                          r && r.call(this, e),
                          e &&
                              e._registeredComponents &&
                              e._registeredComponents.add(i);
                  }),
                  (u._ssrRegister = l))
                : r &&
                  (l = o
                      ? function () {
                            r.call(
                                this,
                                (u.functional ? this.parent : this).$root
                                    .$options.shadowRoot
                            );
                        }
                      : r),
            l)
        )
            if (u.functional) {
                u._injectStyles = l;
                var c = u.render;
                u.render = function (e, t) {
                    return l.call(t), c(e, t);
                };
            } else {
                var d = u.beforeCreate;
                u.beforeCreate = d ? [].concat(d, l) : [l];
            }
        return { exports: e, options: u };
    }
    const r = s(
        {
            mixins: [Fieldtype],
            computed: {
                publishContainerName: function () {
                    return (
                        this.$props.handle +
                        '.' +
                        ((t = new Uint8Array((10 || 40) / 2)),
                        window.crypto.getRandomValues(t),
                        Array.from(t, e).join(''))
                    );
                    var t;
                },
                fields: function () {
                    return _.chain(this.meta.fields)
                        .map(function (e) {
                            return (function (e) {
                                for (var s = 1; s < arguments.length; s++) {
                                    var r =
                                        null != arguments[s]
                                            ? arguments[s]
                                            : {};
                                    s % 2
                                        ? t(Object(r), !0).forEach(function (
                                              t
                                          ) {
                                              n(e, t, r[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(
                                              e,
                                              Object.getOwnPropertyDescriptors(
                                                  r
                                              )
                                          )
                                        : t(Object(r)).forEach(function (t) {
                                              Object.defineProperty(
                                                  e,
                                                  t,
                                                  Object.getOwnPropertyDescriptor(
                                                      r,
                                                      t
                                                  )
                                              );
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
                            var s = n.replace(e.handle + '.', '');
                            (t[s] = t[n]), delete t[n];
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
        },
        function () {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n(
                'div',
                { staticClass: 'publish-fields' },
                [
                    n('publish-container', {
                        attrs: {
                            name: e.publishContainerName,
                            values: e.value,
                            meta: e.meta,
                            errors: e.errors,
                            trackDirtyState: !1,
                        },
                        on: {
                            updated: function (t) {
                                return e.updated(t);
                            },
                        },
                        scopedSlots: e._u([
                            {
                                key: 'default',
                                fn: function (t) {
                                    var s = t.setFieldValue,
                                        r = t.setFieldMeta;
                                    return n(
                                        'div',
                                        {},
                                        [
                                            n('publish-fields', {
                                                attrs: {
                                                    fields: e.fields,
                                                    'name-prefix': e.name,
                                                },
                                                on: {
                                                    updated: s,
                                                    'meta-updated': r,
                                                },
                                            }),
                                        ],
                                        1
                                    );
                                },
                            },
                        ]),
                    }),
                ],
                1
            );
        },
        [],
        !1,
        null,
        null,
        null
    ).exports;
    const a = s(
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
                t = e.$createElement,
                n = e._self._c || t;
            return n(
                'div',
                {},
                [
                    e.asset.is_image
                        ? n('img', {
                              staticClass:
                                  'asset-thumbnail max-h-8 max-w-full mx-auto rounded',
                              class: { 'w-8 h-8 fit-cover': e.square },
                              attrs: {
                                  src: e.asset.thumbnail,
                                  loading: 'lazy',
                              },
                          })
                        : e.asset.is_svg
                        ? n('img', {
                              staticClass:
                                  'asset-thumbnail h-8 max-w-full mx-auto rounded',
                              attrs: { src: e.asset.url, loading: 'lazy' },
                          })
                        : n('file-icon', {
                              staticClass:
                                  'p-px asset-thumbnail rounded w-8 h-8',
                              attrs: { extension: e.asset.extension },
                          }),
                ],
                1
            );
        },
        [],
        !1,
        null,
        null,
        null
    ).exports;
    const i = s(
        {
            mixins: [IndexFieldtype],
            components: { AssetThumbnail: a },
            computed: {
                assets: function () {
                    return this.value ? this.value.reverse() : [];
                },
            },
        },
        function () {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n(
                'div',
                { staticClass: 'text-2xs flex' },
                e._l(e.assets, function (e) {
                    return n(
                        'a',
                        {
                            key: e.id,
                            attrs: {
                                href: e.url,
                                target: '_blank',
                                title: e.breakpoint,
                            },
                        },
                        [
                            n('asset-thumbnail', {
                                staticClass: 'h-8 max-w-3xs -my-sm',
                                attrs: { asset: e },
                            }),
                        ],
                        1
                    );
                }),
                0
            );
        },
        [],
        !1,
        null,
        null,
        null
    ).exports;
    Statamic.booting(function () {
        Statamic.$components.register('responsive-fieldtype', r),
            Statamic.$components.register('responsive-fieldtype-index', i);
    });
})();
