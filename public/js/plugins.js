
/*! jQuery & Zepto Lazy v1.7.6 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2017 Daniel 'Eisbehr' Kern */
!(function (t, e) {
    "use strict";
    function n(n, i, a, o, l) {
        function u() {
            (E = t.devicePixelRatio > 1),
                (a = d(a)),
                i.delay >= 0 &&
                    setTimeout(function () {
                        c(!0);
                    }, i.delay),
                (i.delay < 0 || i.combined) &&
                    ((o.e = (function (t, e) {
                        var r,
                            a = 0;
                        return function (s, o) {
                            function l() {
                                (a = +new Date()), e.call(n, s);
                            }
                            var u = +new Date() - a;
                            r && clearTimeout(r),
                                u > t || !i.enableThrottle || o
                                    ? l()
                                    : (r = setTimeout(l, t - u));
                        };
                    })(i.throttle, function (t) {
                        "resize" === t.type && (A = C = -1), c(t.all);
                    })),
                    (o.a = function (t) {
                        (t = d(t)), a.push.apply(a, t);
                    }),
                    (o.g = function () {
                        return (a = r(a).filter(function () {
                            return !r(this).data(i.loadedName);
                        }));
                    }),
                    (o.f = function (t) {
                        for (var e = 0; e < t.length; e++) {
                            var n = a.filter(function () {
                                return this === t[e];
                            });
                            n.length && c(!1, n);
                        }
                    }),
                    c(),
                    r(i.appendScroll).on("scroll." + l + " resize." + l, o.e));
        }
        function d(t) {
            var a = i.defaultImage,
                s = i.placeholder,
                o = i.imageBase,
                l = i.srcsetAttribute,
                u = i.loaderAttribute,
                d = i._f || {};
            t = r(t)
                .filter(function () {
                    var t = r(this),
                        n = v(this);
                    return (
                        !t.data(i.handledName) &&
                        (t.attr(i.attribute) ||
                            t.attr(l) ||
                            t.attr(u) ||
                            d[n] !== e)
                    );
                })
                .data("plugin_" + i.name, n);
            for (var c = 0, f = t.length; c < f; c++) {
                var h = r(t[c]),
                    p = v(t[c]),
                    m = h.attr(i.imageBaseAttribute) || o;
                p === S && m && h.attr(l) && h.attr(l, g(h.attr(l), m)),
                    d[p] === e || h.attr(u) || h.attr(u, d[p]),
                    p === S && a && !h.attr(D)
                        ? h.attr(D, a)
                        : p === S ||
                          !s ||
                          (h.css(L) && "none" !== h.css(L)) ||
                          h.css(L, "url('" + s + "')");
            }
            return t;
        }
        function c(t, e) {
            if (a.length) {
                for (
                    var s = e || a,
                        o = !1,
                        l = i.imageBase || "",
                        u = i.srcsetAttribute,
                        d = i.handledName,
                        c = 0;
                    c < s.length;
                    c++
                )
                    if (t || e || h(s[c])) {
                        var p = r(s[c]),
                            m = v(s[c]),
                            g = p.attr(i.attribute),
                            b = p.attr(i.imageBaseAttribute) || l,
                            _ = p.attr(i.loaderAttribute);
                        p.data(d) ||
                            (i.visibleOnly && !p.is(":visible")) ||
                            !(
                                ((g || p.attr(u)) &&
                                    ((m === S &&
                                        (b + g !== p.attr(D) ||
                                            p.attr(u) !== p.attr(x))) ||
                                        (m !== S && b + g !== p.css(L)))) ||
                                _
                            ) ||
                            ((o = !0), p.data(d, !0), f(p, m, b, _));
                    }
                o &&
                    (a = r(a).filter(function () {
                        return !r(this).data(d);
                    }));
            } else i.autoDestroy && n.destroy();
        }
        function f(t, e, n, a) {
            ++y;
            var s = function () {
                _("onError", t), b(), (s = r.noop);
            };
            _("beforeLoad", t);
            var o = i.attribute,
                l = i.srcsetAttribute,
                u = i.sizesAttribute,
                d = i.retinaAttribute,
                c = i.removeAttribute,
                f = i.loadedName,
                h = t.attr(d);
            if (a) {
                var p = function () {
                    c && t.removeAttr(i.loaderAttribute),
                        t.data(f, !0),
                        _(w, t),
                        setTimeout(b, 1),
                        (p = r.noop);
                };
                t.off(T).one(T, s).one(I, p),
                    _(a, t, function (e) {
                        e ? (t.off(I), p()) : (t.off(T), s());
                    }) || t.trigger(T);
            } else {
                var m = r(new Image());
                m.one(T, s).one(I, function () {
                    t.hide(),
                        e === S
                            ? t
                                  .attr(k, m.attr(k))
                                  .attr(x, m.attr(x))
                                  .attr(D, m.attr(D))
                            : t.css(L, "url('" + m.attr(D) + "')"),
                        t[i.effect](i.effectTime),
                        c &&
                            (t.removeAttr(
                                o +
                                    " " +
                                    l +
                                    " " +
                                    d +
                                    " " +
                                    i.imageBaseAttribute
                            ),
                            u !== k && t.removeAttr(u)),
                        t.data(f, !0),
                        _(w, t),
                        m.remove(),
                        b();
                });
                var v = (E && h ? h : t.attr(o)) || "";
                m
                    .attr(k, t.attr(u))
                    .attr(x, t.attr(l))
                    .attr(D, v ? n + v : null),
                    m.complete && m.trigger(I);
            }
        }
        function h(t) {
            var e = t.getBoundingClientRect(),
                n = i.scrollDirection,
                r = i.threshold,
                a = m() + r > e.top && -r < e.bottom,
                s = p() + r > e.left && -r < e.right;
            return "vertical" === n ? a : ("horizontal" === n || a) && s;
        }
        function p() {
            return A >= 0 ? A : (A = r(t).width());
        }
        function m() {
            return C >= 0 ? C : (C = r(t).height());
        }
        function v(t) {
            return t.tagName.toLowerCase();
        }
        function g(t, e) {
            if (e) {
                var n = t.split(",");
                t = "";
                for (var i = 0, r = n.length; i < r; i++)
                    t += e + n[i].trim() + (i !== r - 1 ? "," : "");
            }
            return t;
        }
        function b() {
            --y, a.length || y || _("onFinishedAll");
        }
        function _(t, e, r) {
            return (
                !!(t = i[t]) && (t.apply(n, [].slice.call(arguments, 1)), !0)
            );
        }
        var y = 0,
            A = -1,
            C = -1,
            E = !1,
            w = "afterLoad",
            I = "load",
            T = "error",
            S = "img",
            D = "src",
            x = "srcset",
            k = "sizes",
            L = "background-image";
        "event" === i.bind || s ? u() : r(t).on(I + "." + l, u);
    }
    function i(i, s) {
        var o = this,
            l = r.extend({}, o.config, s),
            u = {},
            d = l.name + "-" + ++a;
        return (
            (o.config = function (t, n) {
                return n === e ? l[t] : ((l[t] = n), o);
            }),
            (o.addItems = function (t) {
                return u.a && u.a("string" === r.type(t) ? r(t) : t), o;
            }),
            (o.getItems = function () {
                return u.g ? u.g() : {};
            }),
            (o.update = function (t) {
                return u.e && u.e({}, !t), o;
            }),
            (o.force = function (t) {
                return u.f && u.f("string" === r.type(t) ? r(t) : t), o;
            }),
            (o.loadAll = function () {
                return u.e && u.e({ all: !0 }, !0), o;
            }),
            (o.destroy = function () {
                return (
                    r(l.appendScroll).off("." + d, u.e),
                    r(t).off("." + d),
                    (u = {}),
                    e
                );
            }),
            n(o, l, i, u, d),
            l.chainable ? i : o
        );
    }
    var r = t.jQuery || t.Zepto,
        a = 0,
        s = !1;
    (r.fn.Lazy = r.fn.lazy =
        function (t) {
            return new i(this, t);
        }),
        (r.Lazy = r.lazy =
            function (t, n, a) {
                if ((r.isFunction(n) && ((a = n), (n = [])), r.isFunction(a))) {
                    (t = r.isArray(t) ? t : [t]), (n = r.isArray(n) ? n : [n]);
                    for (
                        var s = i.prototype.config,
                            o = s._f || (s._f = {}),
                            l = 0,
                            u = t.length;
                        l < u;
                        l++
                    )
                        (s[t[l]] === e || r.isFunction(s[t[l]])) &&
                            (s[t[l]] = a);
                    for (var d = 0, c = n.length; d < c; d++) o[n[d]] = t[0];
                }
            }),
        (i.prototype.config = {
            name: "lazy",
            chainable: !0,
            autoDestroy: !0,
            bind: "load",
            threshold: 500,
            visibleOnly: !1,
            appendScroll: t,
            scrollDirection: "both",
            imageBase: null,
            defaultImage:
                "/assets/c0e854d8.gif",
            placeholder: null,
            delay: -1,
            combined: !1,
            attribute: "data-src",
            srcsetAttribute: "data-srcset",
            sizesAttribute: "data-sizes",
            retinaAttribute: "data-retina",
            loaderAttribute: "data-loader",
            imageBaseAttribute: "data-imagebase",
            removeAttribute: !0,
            handledName: "handled",
            loadedName: "loaded",
            effect: "show",
            effectTime: 0,
            enableThrottle: !0,
            throttle: 250,
            beforeLoad: e,
            afterLoad: e,
            onError: e,
            onFinishedAll: e,
        }),
        r(t).on("load", function () {
            s = !0;
        });
})(window),
    (function (t, e) {
        "object" == typeof exports && "undefined" != typeof module
            ? e(exports, require("jquery"))
            : "function" == typeof define && define.amd
            ? define(["exports", "jquery"], e)
            : e(((t = t || self).bootstrap = {}), t.jQuery);
    })(this, function (t, e) {
        "use strict";
        function n(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i);
            }
        }
        function i(t, e, i) {
            return e && n(t.prototype, e), i && n(t, i), t;
        }
        function r(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(
                                n,
                                t
                            ).enumerable;
                        })
                    )),
                    i.forEach(function (e) {
                        var i, r, a;
                        (i = t),
                            (a = n[(r = e)]),
                            r in i
                                ? Object.defineProperty(i, r, {
                                      value: a,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (i[r] = a);
                    });
            }
            return t;
        }
        e = e && e.hasOwnProperty("default") ? e.default : e;
        var a = "transitionend";
        var s = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function (t) {
                for (
                    ;
                    (t += ~~(1e6 * Math.random())), document.getElementById(t);

                );
                return t;
            },
            getSelectorFromElement: function (t) {
                var e = t.getAttribute("data-target");
                if (!e || "#" === e) {
                    var n = t.getAttribute("href");
                    e = n && "#" !== n ? n.trim() : "";
                }
                try {
                    return document.querySelector(e) ? e : null;
                } catch (t) {
                    return null;
                }
            },
            getTransitionDurationFromElement: function (t) {
                if (!t) return 0;
                var n = e(t).css("transition-duration"),
                    i = e(t).css("transition-delay"),
                    r = parseFloat(n),
                    a = parseFloat(i);
                return r || a
                    ? ((n = n.split(",")[0]),
                      (i = i.split(",")[0]),
                      1e3 * (parseFloat(n) + parseFloat(i)))
                    : 0;
            },
            reflow: function (t) {
                return t.offsetHeight;
            },
            triggerTransitionEnd: function (t) {
                e(t).trigger(a);
            },
            supportsTransitionEnd: function () {
                return Boolean(a);
            },
            isElement: function (t) {
                return (t[0] || t).nodeType;
            },
            typeCheckConfig: function (t, e, n) {
                for (var i in n)
                    if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var r = n[i],
                            a = e[i],
                            o =
                                a && s.isElement(a)
                                    ? "element"
                                    : ((l = a),
                                      {}.toString
                                          .call(l)
                                          .match(/\s([a-z]+)/i)[1]
                                          .toLowerCase());
                        if (!new RegExp(r).test(o))
                            throw new Error(
                                t.toUpperCase() +
                                    ': Option "' +
                                    i +
                                    '" provided type "' +
                                    o +
                                    '" but expected type "' +
                                    r +
                                    '".'
                            );
                    }
                var l;
            },
            findShadowRoot: function (t) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" != typeof t.getRootNode)
                    return t instanceof ShadowRoot
                        ? t
                        : t.parentNode
                        ? s.findShadowRoot(t.parentNode)
                        : null;
                var e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null;
            },
        };
        (e.fn.emulateTransitionEnd = function (t) {
            var n = this,
                i = !1;
            return (
                e(this).one(s.TRANSITION_END, function () {
                    i = !0;
                }),
                setTimeout(function () {
                    i || s.triggerTransitionEnd(n);
                }, t),
                this
            );
        }),
            (e.event.special[s.TRANSITION_END] = {
                bindType: a,
                delegateType: a,
                handle: function (t) {
                    if (e(t.target).is(this))
                        return t.handleObj.handler.apply(this, arguments);
                },
            });
        var o = "alert",
            l = "bs.alert",
            u = "." + l,
            d = e.fn[o],
            c = {
                CLOSE: "close" + u,
                CLOSED: "closed" + u,
                CLICK_DATA_API: "click" + u + ".data-api",
            },
            f = (function () {
                function t(t) {
                    this._element = t;
                }
                var n = t.prototype;
                return (
                    (n.close = function (t) {
                        var e = this._element;
                        t && (e = this._getRootElement(t)),
                            this._triggerCloseEvent(e).isDefaultPrevented() ||
                                this._removeElement(e);
                    }),
                    (n.dispose = function () {
                        e.removeData(this._element, l), (this._element = null);
                    }),
                    (n._getRootElement = function (t) {
                        var n = s.getSelectorFromElement(t),
                            i = !1;
                        return (
                            n && (i = document.querySelector(n)),
                            i || (i = e(t).closest(".alert")[0]),
                            i
                        );
                    }),
                    (n._triggerCloseEvent = function (t) {
                        var n = e.Event(c.CLOSE);
                        return e(t).trigger(n), n;
                    }),
                    (n._removeElement = function (t) {
                        var n = this;
                        if ((e(t).removeClass("show"), e(t).hasClass("fade"))) {
                            var i = s.getTransitionDurationFromElement(t);
                            e(t)
                                .one(s.TRANSITION_END, function (e) {
                                    return n._destroyElement(t, e);
                                })
                                .emulateTransitionEnd(i);
                        } else this._destroyElement(t);
                    }),
                    (n._destroyElement = function (t) {
                        e(t).detach().trigger(c.CLOSED).remove();
                    }),
                    (t._jQueryInterface = function (n) {
                        return this.each(function () {
                            var i = e(this),
                                r = i.data(l);
                            r || ((r = new t(this)), i.data(l, r)),
                                "close" === n && r[n](this);
                        });
                    }),
                    (t._handleDismiss = function (t) {
                        return function (e) {
                            e && e.preventDefault(), t.close(this);
                        };
                    }),
                    i(t, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.3.1";
                            },
                        },
                    ]),
                    t
                );
            })();
        e(document).on(
            c.CLICK_DATA_API,
            '[data-dismiss="alert"]',
            f._handleDismiss(new f())
        ),
            (e.fn[o] = f._jQueryInterface),
            (e.fn[o].Constructor = f),
            (e.fn[o].noConflict = function () {
                return (e.fn[o] = d), f._jQueryInterface;
            });
        var h = "button",
            p = "bs.button",
            m = "." + p,
            v = ".data-api",
            g = e.fn[h],
            b = "active",
            _ = '[data-toggle^="button"]',
            y = ".btn",
            A = {
                CLICK_DATA_API: "click" + m + v,
                FOCUS_BLUR_DATA_API: "focus" + m + v + " blur" + m + v,
            },
            C = (function () {
                function t(t) {
                    this._element = t;
                }
                var n = t.prototype;
                return (
                    (n.toggle = function () {
                        var t = !0,
                            n = !0,
                            i = e(this._element).closest(
                                '[data-toggle="buttons"]'
                            )[0];
                        if (i) {
                            var r = this._element.querySelector(
                                'input:not([type="hidden"])'
                            );
                            if (r) {
                                if ("radio" === r.type)
                                    if (
                                        r.checked &&
                                        this._element.classList.contains(b)
                                    )
                                        t = !1;
                                    else {
                                        var a = i.querySelector(".active");
                                        a && e(a).removeClass(b);
                                    }
                                if (t) {
                                    if (
                                        r.hasAttribute("disabled") ||
                                        i.hasAttribute("disabled") ||
                                        r.classList.contains("disabled") ||
                                        i.classList.contains("disabled")
                                    )
                                        return;
                                    (r.checked =
                                        !this._element.classList.contains(b)),
                                        e(r).trigger("change");
                                }
                                r.focus(), (n = !1);
                            }
                        }
                        n &&
                            this._element.setAttribute(
                                "aria-pressed",
                                !this._element.classList.contains(b)
                            ),
                            t && e(this._element).toggleClass(b);
                    }),
                    (n.dispose = function () {
                        e.removeData(this._element, p), (this._element = null);
                    }),
                    (t._jQueryInterface = function (n) {
                        return this.each(function () {
                            var i = e(this).data(p);
                            i || ((i = new t(this)), e(this).data(p, i)),
                                "toggle" === n && i[n]();
                        });
                    }),
                    i(t, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.3.1";
                            },
                        },
                    ]),
                    t
                );
            })();
        e(document)
            .on(A.CLICK_DATA_API, _, function (t) {
                t.preventDefault();
                var n = t.target;
                e(n).hasClass("btn") || (n = e(n).closest(y)),
                    C._jQueryInterface.call(e(n), "toggle");
            })
            .on(A.FOCUS_BLUR_DATA_API, _, function (t) {
                var n = e(t.target).closest(y)[0];
                e(n).toggleClass("focus", /^focus(in)?$/.test(t.type));
            }),
            (e.fn[h] = C._jQueryInterface),
            (e.fn[h].Constructor = C),
            (e.fn[h].noConflict = function () {
                return (e.fn[h] = g), C._jQueryInterface;
            });
        var E = "carousel",
            w = "bs.carousel",
            I = "." + w,
            T = ".data-api",
            S = e.fn[E],
            D = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0,
                touch: !0,
            },
            x = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean",
                touch: "boolean",
            },
            k = "next",
            L = "prev",
            N = {
                SLIDE: "slide" + I,
                SLID: "slid" + I,
                KEYDOWN: "keydown" + I,
                MOUSEENTER: "mouseenter" + I,
                MOUSELEAVE: "mouseleave" + I,
                TOUCHSTART: "touchstart" + I,
                TOUCHMOVE: "touchmove" + I,
                TOUCHEND: "touchend" + I,
                POINTERDOWN: "pointerdown" + I,
                POINTERUP: "pointerup" + I,
                DRAG_START: "dragstart" + I,
                LOAD_DATA_API: "load" + I + T,
                CLICK_DATA_API: "click" + I + T,
            },
            O = "active",
            V = ".active.carousel-item",
            P = { TOUCH: "touch", PEN: "pen" },
            M = (function () {
                function t(t, e) {
                    (this._items = null),
                        (this._interval = null),
                        (this._activeElement = null),
                        (this._isPaused = !1),
                        (this._isSliding = !1),
                        (this.touchTimeout = null),
                        (this.touchStartX = 0),
                        (this.touchDeltaX = 0),
                        (this._config = this._getConfig(e)),
                        (this._element = t),
                        (this._indicatorsElement = this._element.querySelector(
                            ".carousel-indicators"
                        )),
                        (this._touchSupported =
                            "ontouchstart" in document.documentElement ||
                            0 < navigator.maxTouchPoints),
                        (this._pointerEvent = Boolean(
                            window.PointerEvent || window.MSPointerEvent
                        )),
                        this._addEventListeners();
                }
                var n = t.prototype;
                return (
                    (n.next = function () {
                        this._isSliding || this._slide(k);
                    }),
                    (n.nextWhenVisible = function () {
                        !document.hidden &&
                            e(this._element).is(":visible") &&
                            "hidden" !== e(this._element).css("visibility") &&
                            this.next();
                    }),
                    (n.prev = function () {
                        this._isSliding || this._slide(L);
                    }),
                    (n.pause = function (t) {
                        t || (this._isPaused = !0),
                            this._element.querySelector(
                                ".carousel-item-next, .carousel-item-prev"
                            ) &&
                                (s.triggerTransitionEnd(this._element),
                                this.cycle(!0)),
                            clearInterval(this._interval),
                            (this._interval = null);
                    }),
                    (n.cycle = function (t) {
                        t || (this._isPaused = !1),
                            this._interval &&
                                (clearInterval(this._interval),
                                (this._interval = null)),
                            this._config.interval &&
                                !this._isPaused &&
                                (this._interval = setInterval(
                                    (document.visibilityState
                                        ? this.nextWhenVisible
                                        : this.next
                                    ).bind(this),
                                    this._config.interval
                                ));
                    }),
                    (n.to = function (t) {
                        var n = this;
                        this._activeElement = this._element.querySelector(V);
                        var i = this._getItemIndex(this._activeElement);
                        if (!(t > this._items.length - 1 || t < 0))
                            if (this._isSliding)
                                e(this._element).one(N.SLID, function () {
                                    return n.to(t);
                                });
                            else {
                                if (i === t)
                                    return this.pause(), void this.cycle();
                                var r = i < t ? k : L;
                                this._slide(r, this._items[t]);
                            }
                    }),
                    (n.dispose = function () {
                        e(this._element).off(I),
                            e.removeData(this._element, w),
                            (this._items = null),
                            (this._config = null),
                            (this._element = null),
                            (this._interval = null),
                            (this._isPaused = null),
                            (this._isSliding = null),
                            (this._activeElement = null),
                            (this._indicatorsElement = null);
                    }),
                    (n._getConfig = function (t) {
                        return (t = r({}, D, t)), s.typeCheckConfig(E, t, x), t;
                    }),
                    (n._handleSwipe = function () {
                        var t = Math.abs(this.touchDeltaX);
                        if (!(t <= 40)) {
                            var e = t / this.touchDeltaX;
                            0 < e && this.prev(), e < 0 && this.next();
                        }
                    }),
                    (n._addEventListeners = function () {
                        var t = this;
                        this._config.keyboard &&
                            e(this._element).on(N.KEYDOWN, function (e) {
                                return t._keydown(e);
                            }),
                            "hover" === this._config.pause &&
                                e(this._element)
                                    .on(N.MOUSEENTER, function (e) {
                                        return t.pause(e);
                                    })
                                    .on(N.MOUSELEAVE, function (e) {
                                        return t.cycle(e);
                                    }),
                            this._config.touch &&
                                this._addTouchEventListeners();
                    }),
                    (n._addTouchEventListeners = function () {
                        var t = this;
                        if (this._touchSupported) {
                            var n = function (e) {
                                    t._pointerEvent &&
                                    P[e.originalEvent.pointerType.toUpperCase()]
                                        ? (t.touchStartX =
                                              e.originalEvent.clientX)
                                        : t._pointerEvent ||
                                          (t.touchStartX =
                                              e.originalEvent.touches[0].clientX);
                                },
                                i = function (e) {
                                    t._pointerEvent &&
                                        P[
                                            e.originalEvent.pointerType.toUpperCase()
                                        ] &&
                                        (t.touchDeltaX =
                                            e.originalEvent.clientX -
                                            t.touchStartX),
                                        t._handleSwipe(),
                                        "hover" === t._config.pause &&
                                            (t.pause(),
                                            t.touchTimeout &&
                                                clearTimeout(t.touchTimeout),
                                            (t.touchTimeout = setTimeout(
                                                function (e) {
                                                    return t.cycle(e);
                                                },
                                                500 + t._config.interval
                                            )));
                                };
                            e(
                                this._element.querySelectorAll(
                                    ".carousel-item img"
                                )
                            ).on(N.DRAG_START, function (t) {
                                return t.preventDefault();
                            }),
                                this._pointerEvent
                                    ? (e(this._element).on(
                                          N.POINTERDOWN,
                                          function (t) {
                                              return n(t);
                                          }
                                      ),
                                      e(this._element).on(
                                          N.POINTERUP,
                                          function (t) {
                                              return i(t);
                                          }
                                      ),
                                      this._element.classList.add(
                                          "pointer-event"
                                      ))
                                    : (e(this._element).on(
                                          N.TOUCHSTART,
                                          function (t) {
                                              return n(t);
                                          }
                                      ),
                                      e(this._element).on(
                                          N.TOUCHMOVE,
                                          function (e) {
                                              var n;
                                              (n = e).originalEvent.touches &&
                                              1 < n.originalEvent.touches.length
                                                  ? (t.touchDeltaX = 0)
                                                  : (t.touchDeltaX =
                                                        n.originalEvent
                                                            .touches[0]
                                                            .clientX -
                                                        t.touchStartX);
                                          }
                                      ),
                                      e(this._element).on(
                                          N.TOUCHEND,
                                          function (t) {
                                              return i(t);
                                          }
                                      ));
                        }
                    }),
                    (n._keydown = function (t) {
                        if (!/input|textarea/i.test(t.target.tagName))
                            switch (t.which) {
                                case 37:
                                    t.preventDefault(), this.prev();
                                    break;
                                case 39:
                                    t.preventDefault(), this.next();
                            }
                    }),
                    (n._getItemIndex = function (t) {
                        return (
                            (this._items =
                                t && t.parentNode
                                    ? [].slice.call(
                                          t.parentNode.querySelectorAll(
                                              ".carousel-item"
                                          )
                                      )
                                    : []),
                            this._items.indexOf(t)
                        );
                    }),
                    (n._getItemByDirection = function (t, e) {
                        var n = t === k,
                            i = t === L,
                            r = this._getItemIndex(e),
                            a = this._items.length - 1;
                        if (
                            ((i && 0 === r) || (n && r === a)) &&
                            !this._config.wrap
                        )
                            return e;
                        var s = (r + (t === L ? -1 : 1)) % this._items.length;
                        return -1 === s
                            ? this._items[this._items.length - 1]
                            : this._items[s];
                    }),
                    (n._triggerSlideEvent = function (t, n) {
                        var i = this._getItemIndex(t),
                            r = this._getItemIndex(
                                this._element.querySelector(V)
                            ),
                            a = e.Event(N.SLIDE, {
                                relatedTarget: t,
                                direction: n,
                                from: r,
                                to: i,
                            });
                        return e(this._element).trigger(a), a;
                    }),
                    (n._setActiveIndicatorElement = function (t) {
                        if (this._indicatorsElement) {
                            var n = [].slice.call(
                                this._indicatorsElement.querySelectorAll(
                                    ".active"
                                )
                            );
                            e(n).removeClass(O);
                            var i =
                                this._indicatorsElement.children[
                                    this._getItemIndex(t)
                                ];
                            i && e(i).addClass(O);
                        }
                    }),
                    (n._slide = function (t, n) {
                        var i,
                            r,
                            a,
                            o = this,
                            l = this._element.querySelector(V),
                            u = this._getItemIndex(l),
                            d = n || (l && this._getItemByDirection(t, l)),
                            c = this._getItemIndex(d),
                            f = Boolean(this._interval);
                        if (
                            ((a =
                                t === k
                                    ? ((i = "carousel-item-left"),
                                      (r = "carousel-item-next"),
                                      "left")
                                    : ((i = "carousel-item-right"),
                                      (r = "carousel-item-prev"),
                                      "right")),
                            d && e(d).hasClass(O))
                        )
                            this._isSliding = !1;
                        else if (
                            !this._triggerSlideEvent(
                                d,
                                a
                            ).isDefaultPrevented() &&
                            l &&
                            d
                        ) {
                            (this._isSliding = !0),
                                f && this.pause(),
                                this._setActiveIndicatorElement(d);
                            var h = e.Event(N.SLID, {
                                relatedTarget: d,
                                direction: a,
                                from: u,
                                to: c,
                            });
                            if (e(this._element).hasClass("slide")) {
                                e(d).addClass(r),
                                    s.reflow(d),
                                    e(l).addClass(i),
                                    e(d).addClass(i);
                                var p = parseInt(
                                    d.getAttribute("data-interval"),
                                    10
                                );
                                this._config.interval = p
                                    ? ((this._config.defaultInterval =
                                          this._config.defaultInterval ||
                                          this._config.interval),
                                      p)
                                    : this._config.defaultInterval ||
                                      this._config.interval;
                                var m = s.getTransitionDurationFromElement(l);
                                e(l)
                                    .one(s.TRANSITION_END, function () {
                                        e(d)
                                            .removeClass(i + " " + r)
                                            .addClass(O),
                                            e(l).removeClass(
                                                O + " " + r + " " + i
                                            ),
                                            (o._isSliding = !1),
                                            setTimeout(function () {
                                                return e(o._element).trigger(h);
                                            }, 0);
                                    })
                                    .emulateTransitionEnd(m);
                            } else
                                e(l).removeClass(O),
                                    e(d).addClass(O),
                                    (this._isSliding = !1),
                                    e(this._element).trigger(h);
                            f && this.cycle();
                        }
                    }),
                    (t._jQueryInterface = function (n) {
                        return this.each(function () {
                            var i = e(this).data(w),
                                a = r({}, D, e(this).data());
                            "object" == typeof n && (a = r({}, a, n));
                            var s = "string" == typeof n ? n : a.slide;
                            if (
                                (i ||
                                    ((i = new t(this, a)), e(this).data(w, i)),
                                "number" == typeof n)
                            )
                                i.to(n);
                            else if ("string" == typeof s) {
                                if (void 0 === i[s])
                                    throw new TypeError(
                                        'No method named "' + s + '"'
                                    );
                                i[s]();
                            } else
                                a.interval && a.ride && (i.pause(), i.cycle());
                        });
                    }),
                    (t._dataApiClickHandler = function (n) {
                        var i = s.getSelectorFromElement(this);
                        if (i) {
                            var a = e(i)[0];
                            if (a && e(a).hasClass("carousel")) {
                                var o = r({}, e(a).data(), e(this).data()),
                                    l = this.getAttribute("data-slide-to");
                                l && (o.interval = !1),
                                    t._jQueryInterface.call(e(a), o),
                                    l && e(a).data(w).to(l),
                                    n.preventDefault();
                            }
                        }
                    }),
                    i(t, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.3.1";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return D;
                            },
                        },
                    ]),
                    t
                );
            })();
        e(document).on(
            N.CLICK_DATA_API,
            "[data-slide], [data-slide-to]",
            M._dataApiClickHandler
        ),
            e(window).on(N.LOAD_DATA_API, function () {
                for (
                    var t = [].slice.call(
                            document.querySelectorAll('[data-ride="carousel"]')
                        ),
                        n = 0,
                        i = t.length;
                    n < i;
                    n++
                ) {
                    var r = e(t[n]);
                    M._jQueryInterface.call(r, r.data());
                }
            }),
            (e.fn[E] = M._jQueryInterface),
            (e.fn[E].Constructor = M),
            (e.fn[E].noConflict = function () {
                return (e.fn[E] = S), M._jQueryInterface;
            });
        var F = "collapse",
            B = "bs.collapse",
            R = "." + B,
            U = e.fn[F],
            j = { toggle: !0, parent: "" },
            H = { toggle: "boolean", parent: "(string|element)" },
            G = {
                SHOW: "show" + R,
                SHOWN: "shown" + R,
                HIDE: "hide" + R,
                HIDDEN: "hidden" + R,
                CLICK_DATA_API: "click" + R + ".data-api",
            },
            $ = "show",
            z = "collapse",
            K = "collapsing",
            W = "collapsed",
            Z = "width",
            q = '[data-toggle="collapse"]',
            Q = (function () {
                function t(t, e) {
                    (this._isTransitioning = !1),
                        (this._element = t),
                        (this._config = this._getConfig(e)),
                        (this._triggerArray = [].slice.call(
                            document.querySelectorAll(
                                '[data-toggle="collapse"][href="#' +
                                    t.id +
                                    '"],[data-toggle="collapse"][data-target="#' +
                                    t.id +
                                    '"]'
                            )
                        ));
                    for (
                        var n = [].slice.call(document.querySelectorAll(q)),
                            i = 0,
                            r = n.length;
                        i < r;
                        i++
                    ) {
                        var a = n[i],
                            o = s.getSelectorFromElement(a),
                            l = [].slice
                                .call(document.querySelectorAll(o))
                                .filter(function (e) {
                                    return e === t;
                                });
                        null !== o &&
                            0 < l.length &&
                            ((this._selector = o), this._triggerArray.push(a));
                    }
                    (this._parent = this._config.parent
                        ? this._getParent()
                        : null),
                        this._config.parent ||
                            this._addAriaAndCollapsedClass(
                                this._element,
                                this._triggerArray
                            ),
                        this._config.toggle && this.toggle();
                }
                var n = t.prototype;
                return (
                    (n.toggle = function () {
                        e(this._element).hasClass($)
                            ? this.hide()
                            : this.show();
                    }),
                    (n.show = function () {
                        var n,
                            i,
                            r = this;
                        if (
                            !(
                                this._isTransitioning ||
                                e(this._element).hasClass($) ||
                                (this._parent &&
                                    0 ===
                                        (n = [].slice
                                            .call(
                                                this._parent.querySelectorAll(
                                                    ".show, .collapsing"
                                                )
                                            )
                                            .filter(function (t) {
                                                return "string" ==
                                                    typeof r._config.parent
                                                    ? t.getAttribute(
                                                          "data-parent"
                                                      ) === r._config.parent
                                                    : t.classList.contains(z);
                                            })).length &&
                                    (n = null),
                                n &&
                                    (i = e(n).not(this._selector).data(B)) &&
                                    i._isTransitioning)
                            )
                        ) {
                            var a = e.Event(G.SHOW);
                            if (
                                (e(this._element).trigger(a),
                                !a.isDefaultPrevented())
                            ) {
                                n &&
                                    (t._jQueryInterface.call(
                                        e(n).not(this._selector),
                                        "hide"
                                    ),
                                    i || e(n).data(B, null));
                                var o = this._getDimension();
                                e(this._element).removeClass(z).addClass(K),
                                    (this._element.style[o] = 0),
                                    this._triggerArray.length &&
                                        e(this._triggerArray)
                                            .removeClass(W)
                                            .attr("aria-expanded", !0),
                                    this.setTransitioning(!0);
                                var l =
                                        "scroll" +
                                        (o[0].toUpperCase() + o.slice(1)),
                                    u = s.getTransitionDurationFromElement(
                                        this._element
                                    );
                                e(this._element)
                                    .one(s.TRANSITION_END, function () {
                                        e(r._element)
                                            .removeClass(K)
                                            .addClass(z)
                                            .addClass($),
                                            (r._element.style[o] = ""),
                                            r.setTransitioning(!1),
                                            e(r._element).trigger(G.SHOWN);
                                    })
                                    .emulateTransitionEnd(u),
                                    (this._element.style[o] =
                                        this._element[l] + "px");
                            }
                        }
                    }),
                    (n.hide = function () {
                        var t = this;
                        if (
                            !this._isTransitioning &&
                            e(this._element).hasClass($)
                        ) {
                            var n = e.Event(G.HIDE);
                            if (
                                (e(this._element).trigger(n),
                                !n.isDefaultPrevented())
                            ) {
                                var i = this._getDimension();
                                (this._element.style[i] =
                                    this._element.getBoundingClientRect()[i] +
                                    "px"),
                                    s.reflow(this._element),
                                    e(this._element)
                                        .addClass(K)
                                        .removeClass(z)
                                        .removeClass($);
                                var r = this._triggerArray.length;
                                if (0 < r)
                                    for (var a = 0; a < r; a++) {
                                        var o = this._triggerArray[a],
                                            l = s.getSelectorFromElement(o);
                                        null !== l &&
                                            (e(
                                                [].slice.call(
                                                    document.querySelectorAll(l)
                                                )
                                            ).hasClass($) ||
                                                e(o)
                                                    .addClass(W)
                                                    .attr("aria-expanded", !1));
                                    }
                                this.setTransitioning(!0),
                                    (this._element.style[i] = "");
                                var u = s.getTransitionDurationFromElement(
                                    this._element
                                );
                                e(this._element)
                                    .one(s.TRANSITION_END, function () {
                                        t.setTransitioning(!1),
                                            e(t._element)
                                                .removeClass(K)
                                                .addClass(z)
                                                .trigger(G.HIDDEN);
                                    })
                                    .emulateTransitionEnd(u);
                            }
                        }
                    }),
                    (n.setTransitioning = function (t) {
                        this._isTransitioning = t;
                    }),
                    (n.dispose = function () {
                        e.removeData(this._element, B),
                            (this._config = null),
                            (this._parent = null),
                            (this._element = null),
                            (this._triggerArray = null),
                            (this._isTransitioning = null);
                    }),
                    (n._getConfig = function (t) {
                        return (
                            ((t = r({}, j, t)).toggle = Boolean(t.toggle)),
                            s.typeCheckConfig(F, t, H),
                            t
                        );
                    }),
                    (n._getDimension = function () {
                        return e(this._element).hasClass(Z) ? Z : "height";
                    }),
                    (n._getParent = function () {
                        var n,
                            i = this;
                        s.isElement(this._config.parent)
                            ? ((n = this._config.parent),
                              void 0 !== this._config.parent.jquery &&
                                  (n = this._config.parent[0]))
                            : (n = document.querySelector(this._config.parent));
                        var r =
                                '[data-toggle="collapse"][data-parent="' +
                                this._config.parent +
                                '"]',
                            a = [].slice.call(n.querySelectorAll(r));
                        return (
                            e(a).each(function (e, n) {
                                i._addAriaAndCollapsedClass(
                                    t._getTargetFromElement(n),
                                    [n]
                                );
                            }),
                            n
                        );
                    }),
                    (n._addAriaAndCollapsedClass = function (t, n) {
                        var i = e(t).hasClass($);
                        n.length &&
                            e(n).toggleClass(W, !i).attr("aria-expanded", i);
                    }),
                    (t._getTargetFromElement = function (t) {
                        var e = s.getSelectorFromElement(t);
                        return e ? document.querySelector(e) : null;
                    }),
                    (t._jQueryInterface = function (n) {
                        return this.each(function () {
                            var i = e(this),
                                a = i.data(B),
                                s = r(
                                    {},
                                    j,
                                    i.data(),
                                    "object" == typeof n && n ? n : {}
                                );
                            if (
                                (!a &&
                                    s.toggle &&
                                    /show|hide/.test(n) &&
                                    (s.toggle = !1),
                                a || ((a = new t(this, s)), i.data(B, a)),
                                "string" == typeof n)
                            ) {
                                if (void 0 === a[n])
                                    throw new TypeError(
                                        'No method named "' + n + '"'
                                    );
                                a[n]();
                            }
                        });
                    }),
                    i(t, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.3.1";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return j;
                            },
                        },
                    ]),
                    t
                );
            })();
        e(document).on(G.CLICK_DATA_API, q, function (t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var n = e(this),
                i = s.getSelectorFromElement(this),
                r = [].slice.call(document.querySelectorAll(i));
            e(r).each(function () {
                var t = e(this),
                    i = t.data(B) ? "toggle" : n.data();
                Q._jQueryInterface.call(t, i);
            });
        }),
            (e.fn[F] = Q._jQueryInterface),
            (e.fn[F].Constructor = Q),
            (e.fn[F].noConflict = function () {
                return (e.fn[F] = U), Q._jQueryInterface;
            });
        for (
            var Y =
                    "undefined" != typeof window &&
                    "undefined" != typeof document,
                X = ["Edge", "Trident", "Firefox"],
                J = 0,
                tt = 0;
            tt < X.length;
            tt += 1
        )
            if (Y && 0 <= navigator.userAgent.indexOf(X[tt])) {
                J = 1;
                break;
            }
        var et =
            Y && window.Promise
                ? function (t) {
                      var e = !1;
                      return function () {
                          e ||
                              ((e = !0),
                              window.Promise.resolve().then(function () {
                                  (e = !1), t();
                              }));
                      };
                  }
                : function (t) {
                      var e = !1;
                      return function () {
                          e ||
                              ((e = !0),
                              setTimeout(function () {
                                  (e = !1), t();
                              }, J));
                      };
                  };
        function nt(t) {
            return t && "[object Function]" === {}.toString.call(t);
        }
        function it(t, e) {
            if (1 !== t.nodeType) return [];
            var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
            return e ? n[e] : n;
        }
        function rt(t) {
            return "HTML" === t.nodeName ? t : t.parentNode || t.host;
        }
        function at(t) {
            if (!t) return document.body;
            switch (t.nodeName) {
                case "HTML":
                case "BODY":
                    return t.ownerDocument.body;
                case "#document":
                    return t.body;
            }
            var e = it(t),
                n = e.overflow,
                i = e.overflowX,
                r = e.overflowY;
            return /(auto|scroll|overlay)/.test(n + r + i) ? t : at(rt(t));
        }
        var st = Y && !(!window.MSInputMethodContext || !document.documentMode),
            ot = Y && /MSIE 10/.test(navigator.userAgent);
        function lt(t) {
            return 11 === t ? st : 10 === t ? ot : st || ot;
        }
        function ut(t) {
            if (!t) return document.documentElement;
            for (
                var e = lt(10) ? document.body : null,
                    n = t.offsetParent || null;
                n === e && t.nextElementSibling;

            )
                n = (t = t.nextElementSibling).offsetParent;
            var i = n && n.nodeName;
            return i && "BODY" !== i && "HTML" !== i
                ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
                  "static" === it(n, "position")
                    ? ut(n)
                    : n
                : t
                ? t.ownerDocument.documentElement
                : document.documentElement;
        }
        function dt(t) {
            return null !== t.parentNode ? dt(t.parentNode) : t;
        }
        function ct(t, e) {
            if (!(t && t.nodeType && e && e.nodeType))
                return document.documentElement;
            var n =
                    t.compareDocumentPosition(e) &
                    Node.DOCUMENT_POSITION_FOLLOWING,
                i = n ? t : e,
                r = n ? e : t,
                a = document.createRange();
            a.setStart(i, 0), a.setEnd(r, 0);
            var s,
                o,
                l = a.commonAncestorContainer;
            if ((t !== l && e !== l) || i.contains(r))
                return "BODY" === (o = (s = l).nodeName) ||
                    ("HTML" !== o && ut(s.firstElementChild) !== s)
                    ? ut(l)
                    : l;
            var u = dt(t);
            return u.host ? ct(u.host, e) : ct(t, dt(e).host);
        }
        function ft(t) {
            var e =
                    "top" ===
                    (1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : "top")
                        ? "scrollTop"
                        : "scrollLeft",
                n = t.nodeName;
            if ("BODY" !== n && "HTML" !== n) return t[e];
            var i = t.ownerDocument.documentElement;
            return (t.ownerDocument.scrollingElement || i)[e];
        }
        function ht(t, e) {
            var n = "x" === e ? "Left" : "Top",
                i = "Left" === n ? "Right" : "Bottom";
            return (
                parseFloat(t["border" + n + "Width"], 10) +
                parseFloat(t["border" + i + "Width"], 10)
            );
        }
        function pt(t, e, n, i) {
            return Math.max(
                e["offset" + t],
                e["scroll" + t],
                n["client" + t],
                n["offset" + t],
                n["scroll" + t],
                lt(10)
                    ? parseInt(n["offset" + t]) +
                          parseInt(
                              i["margin" + ("Height" === t ? "Top" : "Left")]
                          ) +
                          parseInt(
                              i[
                                  "margin" +
                                      ("Height" === t ? "Bottom" : "Right")
                              ]
                          )
                    : 0
            );
        }
        function mt(t) {
            var e = t.body,
                n = t.documentElement,
                i = lt(10) && getComputedStyle(n);
            return {
                height: pt("Height", e, n, i),
                width: pt("Width", e, n, i),
            };
        }
        var vt = (function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        (i.enumerable = i.enumerable || !1),
                            (i.configurable = !0),
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(t, i.key, i);
                    }
                }
                return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                };
            })(),
            gt = function (t, e, n) {
                return (
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = n),
                    t
                );
            },
            bt =
                Object.assign ||
                function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var i in n)
                            Object.prototype.hasOwnProperty.call(n, i) &&
                                (t[i] = n[i]);
                    }
                    return t;
                };
        function _t(t) {
            return bt({}, t, {
                right: t.left + t.width,
                bottom: t.top + t.height,
            });
        }
        function yt(t) {
            var e = {};
            try {
                if (lt(10)) {
                    e = t.getBoundingClientRect();
                    var n = ft(t, "top"),
                        i = ft(t, "left");
                    (e.top += n),
                        (e.left += i),
                        (e.bottom += n),
                        (e.right += i);
                } else e = t.getBoundingClientRect();
            } catch (t) {}
            var r = {
                    left: e.left,
                    top: e.top,
                    width: e.right - e.left,
                    height: e.bottom - e.top,
                },
                a = "HTML" === t.nodeName ? mt(t.ownerDocument) : {},
                s = a.width || t.clientWidth || r.right - r.left,
                o = a.height || t.clientHeight || r.bottom - r.top,
                l = t.offsetWidth - s,
                u = t.offsetHeight - o;
            if (l || u) {
                var d = it(t);
                (l -= ht(d, "x")),
                    (u -= ht(d, "y")),
                    (r.width -= l),
                    (r.height -= u);
            }
            return _t(r);
        }
        function At(t, e) {
            var n =
                    2 < arguments.length &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                i = lt(10),
                r = "HTML" === e.nodeName,
                a = yt(t),
                s = yt(e),
                o = at(t),
                l = it(e),
                u = parseFloat(l.borderTopWidth, 10),
                d = parseFloat(l.borderLeftWidth, 10);
            n &&
                r &&
                ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
            var c = _t({
                top: a.top - s.top - u,
                left: a.left - s.left - d,
                width: a.width,
                height: a.height,
            });
            if (((c.marginTop = 0), (c.marginLeft = 0), !i && r)) {
                var f = parseFloat(l.marginTop, 10),
                    h = parseFloat(l.marginLeft, 10);
                (c.top -= u - f),
                    (c.bottom -= u - f),
                    (c.left -= d - h),
                    (c.right -= d - h),
                    (c.marginTop = f),
                    (c.marginLeft = h);
            }
            return (
                (i && !n ? e.contains(o) : e === o && "BODY" !== o.nodeName) &&
                    (c = (function (t, e) {
                        var n =
                                2 < arguments.length &&
                                void 0 !== arguments[2] &&
                                arguments[2],
                            i = ft(e, "top"),
                            r = ft(e, "left"),
                            a = n ? -1 : 1;
                        return (
                            (t.top += i * a),
                            (t.bottom += i * a),
                            (t.left += r * a),
                            (t.right += r * a),
                            t
                        );
                    })(c, e)),
                c
            );
        }
        function Ct(t) {
            if (!t || !t.parentElement || lt()) return document.documentElement;
            for (var e = t.parentElement; e && "none" === it(e, "transform"); )
                e = e.parentElement;
            return e || document.documentElement;
        }
        function Et(t, e, n, i) {
            var r =
                    4 < arguments.length &&
                    void 0 !== arguments[4] &&
                    arguments[4],
                a = { top: 0, left: 0 },
                s = r ? Ct(t) : ct(t, e);
            if ("viewport" === i)
                a = (function (t) {
                    var e =
                            1 < arguments.length &&
                            void 0 !== arguments[1] &&
                            arguments[1],
                        n = t.ownerDocument.documentElement,
                        i = At(t, n),
                        r = Math.max(n.clientWidth, window.innerWidth || 0),
                        a = Math.max(n.clientHeight, window.innerHeight || 0),
                        s = e ? 0 : ft(n),
                        o = e ? 0 : ft(n, "left");
                    return _t({
                        top: s - i.top + i.marginTop,
                        left: o - i.left + i.marginLeft,
                        width: r,
                        height: a,
                    });
                })(s, r);
            else {
                var o = void 0;
                "scrollParent" === i
                    ? "BODY" === (o = at(rt(e))).nodeName &&
                      (o = t.ownerDocument.documentElement)
                    : (o =
                          "window" === i ? t.ownerDocument.documentElement : i);
                var l = At(o, s, r);
                if (
                    "HTML" !== o.nodeName ||
                    (function t(e) {
                        var n = e.nodeName;
                        if ("BODY" === n || "HTML" === n) return !1;
                        if ("fixed" === it(e, "position")) return !0;
                        var i = rt(e);
                        return !!i && t(i);
                    })(s)
                )
                    a = l;
                else {
                    var u = mt(t.ownerDocument),
                        d = u.height,
                        c = u.width;
                    (a.top += l.top - l.marginTop),
                        (a.bottom = d + l.top),
                        (a.left += l.left - l.marginLeft),
                        (a.right = c + l.left);
                }
            }
            var f = "number" == typeof (n = n || 0);
            return (
                (a.left += f ? n : n.left || 0),
                (a.top += f ? n : n.top || 0),
                (a.right -= f ? n : n.right || 0),
                (a.bottom -= f ? n : n.bottom || 0),
                a
            );
        }
        function wt(t, e, n, i, r) {
            var a =
                5 < arguments.length && void 0 !== arguments[5]
                    ? arguments[5]
                    : 0;
            if (-1 === t.indexOf("auto")) return t;
            var s = Et(n, i, a, r),
                o = {
                    top: { width: s.width, height: e.top - s.top },
                    right: { width: s.right - e.right, height: s.height },
                    bottom: { width: s.width, height: s.bottom - e.bottom },
                    left: { width: e.left - s.left, height: s.height },
                },
                l = Object.keys(o)
                    .map(function (t) {
                        return bt({ key: t }, o[t], {
                            area: ((e = o[t]), e.width * e.height),
                        });
                        var e;
                    })
                    .sort(function (t, e) {
                        return e.area - t.area;
                    }),
                u = l.filter(function (t) {
                    var e = t.width,
                        i = t.height;
                    return e >= n.clientWidth && i >= n.clientHeight;
                }),
                d = 0 < u.length ? u[0].key : l[0].key,
                c = t.split("-")[1];
            return d + (c ? "-" + c : "");
        }
        function It(t, e, n) {
            var i =
                3 < arguments.length && void 0 !== arguments[3]
                    ? arguments[3]
                    : null;
            return At(n, i ? Ct(e) : ct(e, n), i);
        }
        function Tt(t) {
            var e = t.ownerDocument.defaultView.getComputedStyle(t),
                n =
                    parseFloat(e.marginTop || 0) +
                    parseFloat(e.marginBottom || 0),
                i =
                    parseFloat(e.marginLeft || 0) +
                    parseFloat(e.marginRight || 0);
            return { width: t.offsetWidth + i, height: t.offsetHeight + n };
        }
        function St(t) {
            var e = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom",
            };
            return t.replace(/left|right|bottom|top/g, function (t) {
                return e[t];
            });
        }
        function Dt(t, e, n) {
            n = n.split("-")[0];
            var i = Tt(t),
                r = { width: i.width, height: i.height },
                a = -1 !== ["right", "left"].indexOf(n),
                s = a ? "top" : "left",
                o = a ? "left" : "top",
                l = a ? "height" : "width",
                u = a ? "width" : "height";
            return (
                (r[s] = e[s] + e[l] / 2 - i[l] / 2),
                (r[o] = n === o ? e[o] - i[u] : e[St(o)]),
                r
            );
        }
        function xt(t, e) {
            return Array.prototype.find ? t.find(e) : t.filter(e)[0];
        }
        function kt(t, e, n) {
            return (
                (void 0 === n
                    ? t
                    : t.slice(
                          0,
                          (function (t, e, n) {
                              if (Array.prototype.findIndex)
                                  return t.findIndex(function (t) {
                                      return t[e] === n;
                                  });
                              var i = xt(t, function (t) {
                                  return t[e] === n;
                              });
                              return t.indexOf(i);
                          })(t, "name", n)
                      )
                ).forEach(function (t) {
                    t.function;
                    var n = t.function || t.fn;
                    t.enabled &&
                        nt(n) &&
                        ((e.offsets.popper = _t(e.offsets.popper)),
                        (e.offsets.reference = _t(e.offsets.reference)),
                        (e = n(e, t)));
                }),
                e
            );
        }
        function Lt(t, e) {
            return t.some(function (t) {
                var n = t.name;
                return t.enabled && n === e;
            });
        }
        function Nt(t) {
            for (
                var e = [!1, "ms", "Webkit", "Moz", "O"],
                    n = t.charAt(0).toUpperCase() + t.slice(1),
                    i = 0;
                i < e.length;
                i++
            ) {
                var r = e[i],
                    a = r ? "" + r + n : t;
                if (void 0 !== document.body.style[a]) return a;
            }
            return null;
        }
        function Ot(t) {
            var e = t.ownerDocument;
            return e ? e.defaultView : window;
        }
        function Vt() {
            var t, e;
            this.state.eventsEnabled &&
                (cancelAnimationFrame(this.scheduleUpdate),
                (this.state =
                    ((t = this.reference),
                    (e = this.state),
                    Ot(t).removeEventListener("resize", e.updateBound),
                    e.scrollParents.forEach(function (t) {
                        t.removeEventListener("scroll", e.updateBound);
                    }),
                    (e.updateBound = null),
                    (e.scrollParents = []),
                    (e.scrollElement = null),
                    (e.eventsEnabled = !1),
                    e)));
        }
        function Pt(t) {
            return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
        }
        function Mt(t, e) {
            Object.keys(e).forEach(function (n) {
                var i = "";
                -1 !==
                    [
                        "width",
                        "height",
                        "top",
                        "right",
                        "bottom",
                        "left",
                    ].indexOf(n) &&
                    Pt(e[n]) &&
                    (i = "px"),
                    (t.style[n] = e[n] + i);
            });
        }
        var Ft = Y && /Firefox/i.test(navigator.userAgent);
        function Bt(t, e, n) {
            var i = xt(t, function (t) {
                    return t.name === e;
                }),
                r =
                    !!i &&
                    t.some(function (t) {
                        return t.name === n && t.enabled && t.order < i.order;
                    });
            if (!r);
            return r;
        }
        var Rt = [
                "auto-start",
                "auto",
                "auto-end",
                "top-start",
                "top",
                "top-end",
                "right-start",
                "right",
                "right-end",
                "bottom-end",
                "bottom",
                "bottom-start",
                "left-end",
                "left",
                "left-start",
            ],
            Ut = Rt.slice(3);
        function jt(t) {
            var e =
                    1 < arguments.length &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                n = Ut.indexOf(t),
                i = Ut.slice(n + 1).concat(Ut.slice(0, n));
            return e ? i.reverse() : i;
        }
        var Ht = {
                placement: "bottom",
                positionFixed: !1,
                eventsEnabled: !0,
                removeOnDestroy: !1,
                onCreate: function () {},
                onUpdate: function () {},
                modifiers: {
                    shift: {
                        order: 100,
                        enabled: !0,
                        fn: function (t) {
                            var e = t.placement,
                                n = e.split("-")[0],
                                i = e.split("-")[1];
                            if (i) {
                                var r = t.offsets,
                                    a = r.reference,
                                    s = r.popper,
                                    o = -1 !== ["bottom", "top"].indexOf(n),
                                    l = o ? "left" : "top",
                                    u = o ? "width" : "height",
                                    d = {
                                        start: gt({}, l, a[l]),
                                        end: gt({}, l, a[l] + a[u] - s[u]),
                                    };
                                t.offsets.popper = bt({}, s, d[i]);
                            }
                            return t;
                        },
                    },
                    offset: {
                        order: 200,
                        enabled: !0,
                        fn: function (t, e) {
                            var n,
                                i = e.offset,
                                r = t.placement,
                                a = t.offsets,
                                s = a.popper,
                                o = a.reference,
                                l = r.split("-")[0];
                            return (
                                (n = Pt(+i)
                                    ? [+i, 0]
                                    : (function (t, e, n, i) {
                                          var r = [0, 0],
                                              a =
                                                  -1 !==
                                                  ["right", "left"].indexOf(i),
                                              s = t
                                                  .split(/(\+|\-)/)
                                                  .map(function (t) {
                                                      return t.trim();
                                                  }),
                                              o = s.indexOf(
                                                  xt(s, function (t) {
                                                      return (
                                                          -1 !==
                                                          t.search(/,|\s/)
                                                      );
                                                  })
                                              );
                                          s[o] && s[o].indexOf(",");
                                          var l = /\s*,\s*|\s+/,
                                              u =
                                                  -1 !== o
                                                      ? [
                                                            s
                                                                .slice(0, o)
                                                                .concat([
                                                                    s[o].split(
                                                                        l
                                                                    )[0],
                                                                ]),
                                                            [
                                                                s[o].split(
                                                                    l
                                                                )[1],
                                                            ].concat(
                                                                s.slice(o + 1)
                                                            ),
                                                        ]
                                                      : [s];
                                          return (
                                              (u = u.map(function (t, i) {
                                                  var r = (1 === i ? !a : a)
                                                          ? "height"
                                                          : "width",
                                                      s = !1;
                                                  return t
                                                      .reduce(function (t, e) {
                                                          return "" ===
                                                              t[t.length - 1] &&
                                                              -1 !==
                                                                  [
                                                                      "+",
                                                                      "-",
                                                                  ].indexOf(e)
                                                              ? ((t[
                                                                    t.length - 1
                                                                ] = e),
                                                                (s = !0),
                                                                t)
                                                              : s
                                                              ? ((t[
                                                                    t.length - 1
                                                                ] += e),
                                                                (s = !1),
                                                                t)
                                                              : t.concat(e);
                                                      }, [])
                                                      .map(function (t) {
                                                          return (function (
                                                              t,
                                                              e,
                                                              n,
                                                              i
                                                          ) {
                                                              var r = t.match(
                                                                      /((?:\-|\+)?\d*\.?\d*)(.*)/
                                                                  ),
                                                                  a = +r[1],
                                                                  s = r[2];
                                                              if (!a) return t;
                                                              if (
                                                                  0 !==
                                                                  s.indexOf("%")
                                                              )
                                                                  return "vh" !==
                                                                      s &&
                                                                      "vw" !== s
                                                                      ? a
                                                                      : (("vh" ===
                                                                        s
                                                                            ? Math.max(
                                                                                  document
                                                                                      .documentElement
                                                                                      .clientHeight,
                                                                                  window.innerHeight ||
                                                                                      0
                                                                              )
                                                                            : Math.max(
                                                                                  document
                                                                                      .documentElement
                                                                                      .clientWidth,
                                                                                  window.innerWidth ||
                                                                                      0
                                                                              )) /
                                                                            100) *
                                                                            a;
                                                              var o = void 0;
                                                              switch (s) {
                                                                  case "%p":
                                                                      o = n;
                                                                      break;
                                                                  case "%":
                                                                  case "%r":
                                                                  default:
                                                                      o = i;
                                                              }
                                                              return (
                                                                  (_t(o)[e] /
                                                                      100) *
                                                                  a
                                                              );
                                                          })(t, r, e, n);
                                                      });
                                              })).forEach(function (t, e) {
                                                  t.forEach(function (n, i) {
                                                      Pt(n) &&
                                                          (r[e] +=
                                                              n *
                                                              ("-" === t[i - 1]
                                                                  ? -1
                                                                  : 1));
                                                  });
                                              }),
                                              r
                                          );
                                      })(i, s, o, l)),
                                "left" === l
                                    ? ((s.top += n[0]), (s.left -= n[1]))
                                    : "right" === l
                                    ? ((s.top += n[0]), (s.left += n[1]))
                                    : "top" === l
                                    ? ((s.left += n[0]), (s.top -= n[1]))
                                    : "bottom" === l &&
                                      ((s.left += n[0]), (s.top += n[1])),
                                (t.popper = s),
                                t
                            );
                        },
                        offset: 0,
                    },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        fn: function (t, e) {
                            var n =
                                e.boundariesElement || ut(t.instance.popper);
                            t.instance.reference === n && (n = ut(n));
                            var i = Nt("transform"),
                                r = t.instance.popper.style,
                                a = r.top,
                                s = r.left,
                                o = r[i];
                            (r.top = ""), (r.left = ""), (r[i] = "");
                            var l = Et(
                                t.instance.popper,
                                t.instance.reference,
                                e.padding,
                                n,
                                t.positionFixed
                            );
                            (r.top = a),
                                (r.left = s),
                                (r[i] = o),
                                (e.boundaries = l);
                            var u = e.priority,
                                d = t.offsets.popper,
                                c = {
                                    primary: function (t) {
                                        var n = d[t];
                                        return (
                                            d[t] < l[t] &&
                                                !e.escapeWithReference &&
                                                (n = Math.max(d[t], l[t])),
                                            gt({}, t, n)
                                        );
                                    },
                                    secondary: function (t) {
                                        var n = "right" === t ? "left" : "top",
                                            i = d[n];
                                        return (
                                            d[t] > l[t] &&
                                                !e.escapeWithReference &&
                                                (i = Math.min(
                                                    d[n],
                                                    l[t] -
                                                        ("right" === t
                                                            ? d.width
                                                            : d.height)
                                                )),
                                            gt({}, n, i)
                                        );
                                    },
                                };
                            return (
                                u.forEach(function (t) {
                                    var e =
                                        -1 !== ["left", "top"].indexOf(t)
                                            ? "primary"
                                            : "secondary";
                                    d = bt({}, d, c[e](t));
                                }),
                                (t.offsets.popper = d),
                                t
                            );
                        },
                        priority: ["left", "right", "top", "bottom"],
                        padding: 5,
                        boundariesElement: "scrollParent",
                    },
                    keepTogether: {
                        order: 400,
                        enabled: !0,
                        fn: function (t) {
                            var e = t.offsets,
                                n = e.popper,
                                i = e.reference,
                                r = t.placement.split("-")[0],
                                a = Math.floor,
                                s = -1 !== ["top", "bottom"].indexOf(r),
                                o = s ? "right" : "bottom",
                                l = s ? "left" : "top",
                                u = s ? "width" : "height";
                            return (
                                n[o] < a(i[l]) &&
                                    (t.offsets.popper[l] = a(i[l]) - n[u]),
                                n[l] > a(i[o]) &&
                                    (t.offsets.popper[l] = a(i[o])),
                                t
                            );
                        },
                    },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        fn: function (t, e) {
                            var n;
                            if (
                                !Bt(
                                    t.instance.modifiers,
                                    "arrow",
                                    "keepTogether"
                                )
                            )
                                return t;
                            var i = e.element;
                            if ("string" == typeof i) {
                                if (!(i = t.instance.popper.querySelector(i)))
                                    return t;
                            } else if (!t.instance.popper.contains(i)) return t;
                            var r = t.placement.split("-")[0],
                                a = t.offsets,
                                s = a.popper,
                                o = a.reference,
                                l = -1 !== ["left", "right"].indexOf(r),
                                u = l ? "height" : "width",
                                d = l ? "Top" : "Left",
                                c = d.toLowerCase(),
                                f = l ? "left" : "top",
                                h = l ? "bottom" : "right",
                                p = Tt(i)[u];
                            o[h] - p < s[c] &&
                                (t.offsets.popper[c] -= s[c] - (o[h] - p)),
                                o[c] + p > s[h] &&
                                    (t.offsets.popper[c] += o[c] + p - s[h]),
                                (t.offsets.popper = _t(t.offsets.popper));
                            var m = o[c] + o[u] / 2 - p / 2,
                                v = it(t.instance.popper),
                                g = parseFloat(v["margin" + d], 10),
                                b = parseFloat(v["border" + d + "Width"], 10),
                                _ = m - t.offsets.popper[c] - g - b;
                            return (
                                (_ = Math.max(Math.min(s[u] - p, _), 0)),
                                (t.arrowElement = i),
                                (t.offsets.arrow =
                                    (gt((n = {}), c, Math.round(_)),
                                    gt(n, f, ""),
                                    n)),
                                t
                            );
                        },
                        element: "[x-arrow]",
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        fn: function (t, e) {
                            if (Lt(t.instance.modifiers, "inner")) return t;
                            if (
                                t.flipped &&
                                t.placement === t.originalPlacement
                            )
                                return t;
                            var n = Et(
                                    t.instance.popper,
                                    t.instance.reference,
                                    e.padding,
                                    e.boundariesElement,
                                    t.positionFixed
                                ),
                                i = t.placement.split("-")[0],
                                r = St(i),
                                a = t.placement.split("-")[1] || "",
                                s = [];
                            switch (e.behavior) {
                                case "flip":
                                    s = [i, r];
                                    break;
                                case "clockwise":
                                    s = jt(i);
                                    break;
                                case "counterclockwise":
                                    s = jt(i, !0);
                                    break;
                                default:
                                    s = e.behavior;
                            }
                            return (
                                s.forEach(function (o, l) {
                                    if (i !== o || s.length === l + 1) return t;
                                    (i = t.placement.split("-")[0]),
                                        (r = St(i));
                                    var u,
                                        d = t.offsets.popper,
                                        c = t.offsets.reference,
                                        f = Math.floor,
                                        h =
                                            ("left" === i &&
                                                f(d.right) > f(c.left)) ||
                                            ("right" === i &&
                                                f(d.left) < f(c.right)) ||
                                            ("top" === i &&
                                                f(d.bottom) > f(c.top)) ||
                                            ("bottom" === i &&
                                                f(d.top) < f(c.bottom)),
                                        p = f(d.left) < f(n.left),
                                        m = f(d.right) > f(n.right),
                                        v = f(d.top) < f(n.top),
                                        g = f(d.bottom) > f(n.bottom),
                                        b =
                                            ("left" === i && p) ||
                                            ("right" === i && m) ||
                                            ("top" === i && v) ||
                                            ("bottom" === i && g),
                                        _ = -1 !== ["top", "bottom"].indexOf(i),
                                        y =
                                            !!e.flipVariations &&
                                            ((_ && "start" === a && p) ||
                                                (_ && "end" === a && m) ||
                                                (!_ && "start" === a && v) ||
                                                (!_ && "end" === a && g));
                                    (h || b || y) &&
                                        ((t.flipped = !0),
                                        (h || b) && (i = s[l + 1]),
                                        y &&
                                            (a =
                                                "end" === (u = a)
                                                    ? "start"
                                                    : "start" === u
                                                    ? "end"
                                                    : u),
                                        (t.placement = i + (a ? "-" + a : "")),
                                        (t.offsets.popper = bt(
                                            {},
                                            t.offsets.popper,
                                            Dt(
                                                t.instance.popper,
                                                t.offsets.reference,
                                                t.placement
                                            )
                                        )),
                                        (t = kt(
                                            t.instance.modifiers,
                                            t,
                                            "flip"
                                        )));
                                }),
                                t
                            );
                        },
                        behavior: "flip",
                        padding: 5,
                        boundariesElement: "viewport",
                    },
                    inner: {
                        order: 700,
                        enabled: !1,
                        fn: function (t) {
                            var e = t.placement,
                                n = e.split("-")[0],
                                i = t.offsets,
                                r = i.popper,
                                a = i.reference,
                                s = -1 !== ["left", "right"].indexOf(n),
                                o = -1 === ["top", "left"].indexOf(n);
                            return (
                                (r[s ? "left" : "top"] =
                                    a[n] - (o ? r[s ? "width" : "height"] : 0)),
                                (t.placement = St(e)),
                                (t.offsets.popper = _t(r)),
                                t
                            );
                        },
                    },
                    hide: {
                        order: 800,
                        enabled: !0,
                        fn: function (t) {
                            if (
                                !Bt(
                                    t.instance.modifiers,
                                    "hide",
                                    "preventOverflow"
                                )
                            )
                                return t;
                            var e = t.offsets.reference,
                                n = xt(t.instance.modifiers, function (t) {
                                    return "preventOverflow" === t.name;
                                }).boundaries;
                            if (
                                e.bottom < n.top ||
                                e.left > n.right ||
                                e.top > n.bottom ||
                                e.right < n.left
                            ) {
                                if (!0 === t.hide) return t;
                                (t.hide = !0),
                                    (t.attributes["x-out-of-boundaries"] = "");
                            } else {
                                if (!1 === t.hide) return t;
                                (t.hide = !1),
                                    (t.attributes["x-out-of-boundaries"] = !1);
                            }
                            return t;
                        },
                    },
                    computeStyle: {
                        order: 850,
                        enabled: !0,
                        fn: function (t, e) {
                            var n,
                                i,
                                r,
                                a,
                                s,
                                o,
                                l,
                                u,
                                d,
                                c,
                                f,
                                h,
                                p,
                                m,
                                v,
                                g,
                                b = e.x,
                                _ = e.y,
                                y = t.offsets.popper,
                                A = xt(t.instance.modifiers, function (t) {
                                    return "applyStyle" === t.name;
                                }).gpuAcceleration,
                                C = void 0 !== A ? A : e.gpuAcceleration,
                                E = ut(t.instance.popper),
                                w = yt(E),
                                I = { position: y.position },
                                T =
                                    ((n = t),
                                    (i = window.devicePixelRatio < 2 || !Ft),
                                    (a = (r = n.offsets).popper),
                                    (s = r.reference),
                                    (o = Math.round),
                                    (l = Math.floor),
                                    (u = function (t) {
                                        return t;
                                    }),
                                    (d = o(s.width)),
                                    (c = o(a.width)),
                                    (f =
                                        -1 !==
                                        ["left", "right"].indexOf(n.placement)),
                                    (h = -1 !== n.placement.indexOf("-")),
                                    (m = i ? o : u),
                                    {
                                        left: (p = i
                                            ? f || h || d % 2 == c % 2
                                                ? o
                                                : l
                                            : u)(
                                            d % 2 == 1 && c % 2 == 1 && !h && i
                                                ? a.left - 1
                                                : a.left
                                        ),
                                        top: m(a.top),
                                        bottom: m(a.bottom),
                                        right: p(a.right),
                                    }),
                                S = "bottom" === b ? "top" : "bottom",
                                D = "right" === _ ? "left" : "right",
                                x = Nt("transform");
                            if (
                                ((g =
                                    "bottom" === S
                                        ? "HTML" === E.nodeName
                                            ? -E.clientHeight + T.bottom
                                            : -w.height + T.bottom
                                        : T.top),
                                (v =
                                    "right" === D
                                        ? "HTML" === E.nodeName
                                            ? -E.clientWidth + T.right
                                            : -w.width + T.right
                                        : T.left),
                                C && x)
                            )
                                (I[x] =
                                    "translate3d(" + v + "px, " + g + "px, 0)"),
                                    (I[S] = 0),
                                    (I[D] = 0),
                                    (I.willChange = "transform");
                            else {
                                var k = "bottom" === S ? -1 : 1,
                                    L = "right" === D ? -1 : 1;
                                (I[S] = g * k),
                                    (I[D] = v * L),
                                    (I.willChange = S + ", " + D);
                            }
                            var N = { "x-placement": t.placement };
                            return (
                                (t.attributes = bt({}, N, t.attributes)),
                                (t.styles = bt({}, I, t.styles)),
                                (t.arrowStyles = bt(
                                    {},
                                    t.offsets.arrow,
                                    t.arrowStyles
                                )),
                                t
                            );
                        },
                        gpuAcceleration: !0,
                        x: "bottom",
                        y: "right",
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        fn: function (t) {
                            var e, n;
                            return (
                                Mt(t.instance.popper, t.styles),
                                (e = t.instance.popper),
                                (n = t.attributes),
                                Object.keys(n).forEach(function (t) {
                                    !1 !== n[t]
                                        ? e.setAttribute(t, n[t])
                                        : e.removeAttribute(t);
                                }),
                                t.arrowElement &&
                                    Object.keys(t.arrowStyles).length &&
                                    Mt(t.arrowElement, t.arrowStyles),
                                t
                            );
                        },
                        onLoad: function (t, e, n, i, r) {
                            var a = It(r, e, t, n.positionFixed),
                                s = wt(
                                    n.placement,
                                    a,
                                    e,
                                    t,
                                    n.modifiers.flip.boundariesElement,
                                    n.modifiers.flip.padding
                                );
                            return (
                                e.setAttribute("x-placement", s),
                                Mt(e, {
                                    position: n.positionFixed
                                        ? "fixed"
                                        : "absolute",
                                }),
                                n
                            );
                        },
                        gpuAcceleration: void 0,
                    },
                },
            },
            Gt = (function () {
                function t(e, n) {
                    var i = this,
                        r =
                            2 < arguments.length && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t),
                        (this.scheduleUpdate = function () {
                            return requestAnimationFrame(i.update);
                        }),
                        (this.update = et(this.update.bind(this))),
                        (this.options = bt({}, t.Defaults, r)),
                        (this.state = {
                            isDestroyed: !1,
                            isCreated: !1,
                            scrollParents: [],
                        }),
                        (this.reference = e && e.jquery ? e[0] : e),
                        (this.popper = n && n.jquery ? n[0] : n),
                        (this.options.modifiers = {}),
                        Object.keys(
                            bt({}, t.Defaults.modifiers, r.modifiers)
                        ).forEach(function (e) {
                            i.options.modifiers[e] = bt(
                                {},
                                t.Defaults.modifiers[e] || {},
                                r.modifiers ? r.modifiers[e] : {}
                            );
                        }),
                        (this.modifiers = Object.keys(this.options.modifiers)
                            .map(function (t) {
                                return bt({ name: t }, i.options.modifiers[t]);
                            })
                            .sort(function (t, e) {
                                return t.order - e.order;
                            })),
                        this.modifiers.forEach(function (t) {
                            t.enabled &&
                                nt(t.onLoad) &&
                                t.onLoad(
                                    i.reference,
                                    i.popper,
                                    i.options,
                                    t,
                                    i.state
                                );
                        }),
                        this.update();
                    var a = this.options.eventsEnabled;
                    a && this.enableEventListeners(),
                        (this.state.eventsEnabled = a);
                }
                return (
                    vt(t, [
                        {
                            key: "update",
                            value: function () {
                                return function () {
                                    if (!this.state.isDestroyed) {
                                        var t = {
                                            instance: this,
                                            styles: {},
                                            arrowStyles: {},
                                            attributes: {},
                                            flipped: !1,
                                            offsets: {},
                                        };
                                        (t.offsets.reference = It(
                                            this.state,
                                            this.popper,
                                            this.reference,
                                            this.options.positionFixed
                                        )),
                                            (t.placement = wt(
                                                this.options.placement,
                                                t.offsets.reference,
                                                this.popper,
                                                this.reference,
                                                this.options.modifiers.flip
                                                    .boundariesElement,
                                                this.options.modifiers.flip
                                                    .padding
                                            )),
                                            (t.originalPlacement = t.placement),
                                            (t.positionFixed =
                                                this.options.positionFixed),
                                            (t.offsets.popper = Dt(
                                                this.popper,
                                                t.offsets.reference,
                                                t.placement
                                            )),
                                            (t.offsets.popper.position = this
                                                .options.positionFixed
                                                ? "fixed"
                                                : "absolute"),
                                            (t = kt(this.modifiers, t)),
                                            this.state.isCreated
                                                ? this.options.onUpdate(t)
                                                : ((this.state.isCreated = !0),
                                                  this.options.onCreate(t));
                                    }
                                }.call(this);
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                return function () {
                                    return (
                                        (this.state.isDestroyed = !0),
                                        Lt(this.modifiers, "applyStyle") &&
                                            (this.popper.removeAttribute(
                                                "x-placement"
                                            ),
                                            (this.popper.style.position = ""),
                                            (this.popper.style.top = ""),
                                            (this.popper.style.left = ""),
                                            (this.popper.style.right = ""),
                                            (this.popper.style.bottom = ""),
                                            (this.popper.style.willChange = ""),
                                            (this.popper.style[
                                                Nt("transform")
                                            ] = "")),
                                        this.disableEventListeners(),
                                        this.options.removeOnDestroy &&
                                            this.popper.parentNode.removeChild(
                                                this.popper
                                            ),
                                        this
                                    );
                                }.call(this);
                            },
                        },
                        {
                            key: "enableEventListeners",
                            value: function () {
                                return function () {
                                    this.state.eventsEnabled ||
                                        (this.state = (function (t, e, n, i) {
                                            (n.updateBound = i),
                                                Ot(t).addEventListener(
                                                    "resize",
                                                    n.updateBound,
                                                    { passive: !0 }
                                                );
                                            var r = at(t);
                                            return (
                                                (function t(e, n, i, r) {
                                                    var a =
                                                            "BODY" ===
                                                            e.nodeName,
                                                        s = a
                                                            ? e.ownerDocument
                                                                  .defaultView
                                                            : e;
                                                    s.addEventListener(n, i, {
                                                        passive: !0,
                                                    }),
                                                        a ||
                                                            t(
                                                                at(
                                                                    s.parentNode
                                                                ),
                                                                n,
                                                                i,
                                                                r
                                                            ),
                                                        r.push(s);
                                                })(
                                                    r,
                                                    "scroll",
                                                    n.updateBound,
                                                    n.scrollParents
                                                ),
                                                (n.scrollElement = r),
                                                (n.eventsEnabled = !0),
                                                n
                                            );
                                        })(
                                            this.reference,
                                            this.options,
                                            this.state,
                                            this.scheduleUpdate
                                        ));
                                }.call(this);
                            },
                        },
                        {
                            key: "disableEventListeners",
                            value: function () {
                                return Vt.call(this);
                            },
                        },
                    ]),
                    t
                );
            })();
        (Gt.Utils = (
            "undefined" != typeof window ? window : global
        ).PopperUtils),
            (Gt.placements = Rt),
            (Gt.Defaults = Ht);
        var $t = "dropdown",
            zt = "bs.dropdown",
            Kt = "." + zt,
            Wt = ".data-api",
            Zt = e.fn[$t],
            qt = new RegExp("38|40|27"),
            Qt = {
                HIDE: "hide" + Kt,
                HIDDEN: "hidden" + Kt,
                SHOW: "show" + Kt,
                SHOWN: "shown" + Kt,
                CLICK: "click" + Kt,
                CLICK_DATA_API: "click" + Kt + Wt,
                KEYDOWN_DATA_API: "keydown" + Kt + Wt,
                KEYUP_DATA_API: "keyup" + Kt + Wt,
            },
            Yt = "disabled",
            Xt = "show",
            Jt = "dropdown-menu-right",
            te = '[data-toggle="dropdown"]',
            ee = ".dropdown-menu",
            ne = {
                offset: 0,
                flip: !0,
                boundary: "scrollParent",
                reference: "toggle",
                display: "dynamic",
            },
            ie = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string",
            },
            re = (function () {
                function t(t, e) {
                    (this._element = t),
                        (this._popper = null),
                        (this._config = this._getConfig(e)),
                        (this._menu = this._getMenuElement()),
                        (this._inNavbar = this._detectNavbar()),
                        this._addEventListeners();
                }
                var n = t.prototype;
                return (
                    (n.toggle = function () {
                        if (
                            !this._element.disabled &&
                            !e(this._element).hasClass(Yt)
                        ) {
                            var n = t._getParentFromElement(this._element),
                                i = e(this._menu).hasClass(Xt);
                            if ((t._clearMenus(), !i)) {
                                var r = { relatedTarget: this._element },
                                    a = e.Event(Qt.SHOW, r);
                                if (
                                    (e(n).trigger(a), !a.isDefaultPrevented())
                                ) {
                                    if (!this._inNavbar) {
                                        if (void 0 === Gt)
                                            throw new TypeError(
                                                "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                                            );
                                        var o = this._element;
                                        "parent" === this._config.reference
                                            ? (o = n)
                                            : s.isElement(
                                                  this._config.reference
                                              ) &&
                                              ((o = this._config.reference),
                                              void 0 !==
                                                  this._config.reference
                                                      .jquery &&
                                                  (o =
                                                      this._config
                                                          .reference[0])),
                                            "scrollParent" !==
                                                this._config.boundary &&
                                                e(n).addClass(
                                                    "position-static"
                                                ),
                                            (this._popper = new Gt(
                                                o,
                                                this._menu,
                                                this._getPopperConfig()
                                            ));
                                    }
                                    "ontouchstart" in
                                        document.documentElement &&
                                        0 ===
                                            e(n).closest(".navbar-nav")
                                                .length &&
                                        e(document.body)
                                            .children()
                                            .on("mouseover", null, e.noop),
                                        this._element.focus(),
                                        this._element.setAttribute(
                                            "aria-expanded",
                                            !0
                                        ),
                                        e(this._menu).toggleClass(Xt),
                                        e(n)
                                            .toggleClass(Xt)
                                            .trigger(e.Event(Qt.SHOWN, r));
                                }
                            }
                        }
                    }),
                    (n.show = function () {
                        if (
                            !(
                                this._element.disabled ||
                                e(this._element).hasClass(Yt) ||
                                e(this._menu).hasClass(Xt)
                            )
                        ) {
                            var n = { relatedTarget: this._element },
                                i = e.Event(Qt.SHOW, n),
                                r = t._getParentFromElement(this._element);
                            e(r).trigger(i),
                                i.isDefaultPrevented() ||
                                    (e(this._menu).toggleClass(Xt),
                                    e(r)
                                        .toggleClass(Xt)
                                        .trigger(e.Event(Qt.SHOWN, n)));
                        }
                    }),
                    (n.hide = function () {
                        if (
                            !this._element.disabled &&
                            !e(this._element).hasClass(Yt) &&
                            e(this._menu).hasClass(Xt)
                        ) {
                            var n = { relatedTarget: this._element },
                                i = e.Event(Qt.HIDE, n),
                                r = t._getParentFromElement(this._element);
                            e(r).trigger(i),
                                i.isDefaultPrevented() ||
                                    (e(this._menu).toggleClass(Xt),
                                    e(r)
                                        .toggleClass(Xt)
                                        .trigger(e.Event(Qt.HIDDEN, n)));
                        }
                    }),
                    (n.dispose = function () {
                        e.removeData(this._element, zt),
                            e(this._element).off(Kt),
                            (this._element = null),
                            (this._menu = null) !== this._popper &&
                                (this._popper.destroy(), (this._popper = null));
                    }),
                    (n.update = function () {
                        (this._inNavbar = this._detectNavbar()),
                            null !== this._popper &&
                                this._popper.scheduleUpdate();
                    }),
                    (n._addEventListeners = function () {
                        var t = this;
                        e(this._element).on(Qt.CLICK, function (e) {
                            e.preventDefault(), e.stopPropagation(), t.toggle();
                        });
                    }),
                    (n._getConfig = function (t) {
                        return (
                            (t = r(
                                {},
                                this.constructor.Default,
                                e(this._element).data(),
                                t
                            )),
                            s.typeCheckConfig(
                                $t,
                                t,
                                this.constructor.DefaultType
                            ),
                            t
                        );
                    }),
                    (n._getMenuElement = function () {
                        if (!this._menu) {
                            var e = t._getParentFromElement(this._element);
                            e && (this._menu = e.querySelector(ee));
                        }
                        return this._menu;
                    }),
                    (n._getPlacement = function () {
                        var t = e(this._element.parentNode),
                            n = "bottom-start";
                        return (
                            t.hasClass("dropup")
                                ? ((n = "top-start"),
                                  e(this._menu).hasClass(Jt) && (n = "top-end"))
                                : t.hasClass("dropright")
                                ? (n = "right-start")
                                : t.hasClass("dropleft")
                                ? (n = "left-start")
                                : e(this._menu).hasClass(Jt) &&
                                  (n = "bottom-end"),
                            n
                        );
                    }),
                    (n._detectNavbar = function () {
                        return 0 < e(this._element).closest(".navbar").length;
                    }),
                    (n._getOffset = function () {
                        var t = this,
                            e = {};
                        return (
                            "function" == typeof this._config.offset
                                ? (e.fn = function (e) {
                                      return (
                                          (e.offsets = r(
                                              {},
                                              e.offsets,
                                              t._config.offset(
                                                  e.offsets,
                                                  t._element
                                              ) || {}
                                          )),
                                          e
                                      );
                                  })
                                : (e.offset = this._config.offset),
                            e
                        );
                    }),
                    (n._getPopperConfig = function () {
                        var t = {
                            placement: this._getPlacement(),
                            modifiers: {
                                offset: this._getOffset(),
                                flip: { enabled: this._config.flip },
                                preventOverflow: {
                                    boundariesElement: this._config.boundary,
                                },
                            },
                        };
                        return (
                            "static" === this._config.display &&
                                (t.modifiers.applyStyle = { enabled: !1 }),
                            t
                        );
                    }),
                    (t._jQueryInterface = function (n) {
                        return this.each(function () {
                            var i = e(this).data(zt);
                            if (
                                (i ||
                                    ((i = new t(
                                        this,
                                        "object" == typeof n ? n : null
                                    )),
                                    e(this).data(zt, i)),
                                "string" == typeof n)
                            ) {
                                if (void 0 === i[n])
                                    throw new TypeError(
                                        'No method named "' + n + '"'
                                    );
                                i[n]();
                            }
                        });
                    }),
                    (t._clearMenus = function (n) {
                        if (
                            !n ||
                            (3 !== n.which &&
                                ("keyup" !== n.type || 9 === n.which))
                        )
                            for (
                                var i = [].slice.call(
                                        document.querySelectorAll(te)
                                    ),
                                    r = 0,
                                    a = i.length;
                                r < a;
                                r++
                            ) {
                                var s = t._getParentFromElement(i[r]),
                                    o = e(i[r]).data(zt),
                                    l = { relatedTarget: i[r] };
                                if (
                                    (n &&
                                        "click" === n.type &&
                                        (l.clickEvent = n),
                                    o)
                                ) {
                                    var u = o._menu;
                                    if (
                                        e(s).hasClass(Xt) &&
                                        !(
                                            n &&
                                            (("click" === n.type &&
                                                /input|textarea/i.test(
                                                    n.target.tagName
                                                )) ||
                                                ("keyup" === n.type &&
                                                    9 === n.which)) &&
                                            e.contains(s, n.target)
                                        )
                                    ) {
                                        var d = e.Event(Qt.HIDE, l);
                                        e(s).trigger(d),
                                            d.isDefaultPrevented() ||
                                                ("ontouchstart" in
                                                    document.documentElement &&
                                                    e(document.body)
                                                        .children()
                                                        .off(
                                                            "mouseover",
                                                            null,
                                                            e.noop
                                                        ),
                                                i[r].setAttribute(
                                                    "aria-expanded",
                                                    "false"
                                                ),
                                                e(u).removeClass(Xt),
                                                e(s)
                                                    .removeClass(Xt)
                                                    .trigger(
                                                        e.Event(Qt.HIDDEN, l)
                                                    ));
                                    }
                                }
                            }
                    }),
                    (t._getParentFromElement = function (t) {
                        var e,
                            n = s.getSelectorFromElement(t);
                        return (
                            n && (e = document.querySelector(n)),
                            e || t.parentNode
                        );
                    }),
                    (t._dataApiKeydownHandler = function (n) {
                        if (
                            (/input|textarea/i.test(n.target.tagName)
                                ? !(
                                      32 === n.which ||
                                      (27 !== n.which &&
                                          ((40 !== n.which && 38 !== n.which) ||
                                              e(n.target).closest(ee).length))
                                  )
                                : qt.test(n.which)) &&
                            (n.preventDefault(),
                            n.stopPropagation(),
                            !this.disabled && !e(this).hasClass(Yt))
                        ) {
                            var i = t._getParentFromElement(this),
                                r = e(i).hasClass(Xt);
                            if (
                                r &&
                                (!r || (27 !== n.which && 32 !== n.which))
                            ) {
                                var a = [].slice.call(
                                    i.querySelectorAll(
                                        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                                    )
                                );
                                if (0 !== a.length) {
                                    var s = a.indexOf(n.target);
                                    38 === n.which && 0 < s && s--,
                                        40 === n.which &&
                                            s < a.length - 1 &&
                                            s++,
                                        s < 0 && (s = 0),
                                        a[s].focus();
                                }
                            } else {
                                if (27 === n.which) {
                                    var o = i.querySelector(te);
                                    e(o).trigger("focus");
                                }
                                e(this).trigger("click");
                            }
                        }
                    }),
                    i(t, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.3.1";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return ne;
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return ie;
                            },
                        },
                    ]),
                    t
                );
            })();
        e(document)
            .on(Qt.KEYDOWN_DATA_API, te, re._dataApiKeydownHandler)
            .on(Qt.KEYDOWN_DATA_API, ee, re._dataApiKeydownHandler)
            .on(Qt.CLICK_DATA_API + " " + Qt.KEYUP_DATA_API, re._clearMenus)
            .on(Qt.CLICK_DATA_API, te, function (t) {
                t.preventDefault(),
                    t.stopPropagation(),
                    re._jQueryInterface.call(e(this), "toggle");
            })
            .on(Qt.CLICK_DATA_API, ".dropdown form", function (t) {
                t.stopPropagation();
            }),
            (e.fn[$t] = re._jQueryInterface),
            (e.fn[$t].Constructor = re),
            (e.fn[$t].noConflict = function () {
                return (e.fn[$t] = Zt), re._jQueryInterface;
            });
        var ae = "modal",
            se = "bs.modal",
            oe = "." + se,
            le = e.fn[ae],
            ue = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
            de = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean",
            },
            ce = {
                HIDE: "hide" + oe,
                HIDDEN: "hidden" + oe,
                SHOW: "show" + oe,
                SHOWN: "shown" + oe,
                FOCUSIN: "focusin" + oe,
                RESIZE: "resize" + oe,
                CLICK_DISMISS: "click.dismiss" + oe,
                KEYDOWN_DISMISS: "keydown.dismiss" + oe,
                MOUSEUP_DISMISS: "mouseup.dismiss" + oe,
                MOUSEDOWN_DISMISS: "mousedown.dismiss" + oe,
                CLICK_DATA_API: "click" + oe + ".data-api",
            },
            fe = "modal-open",
            he = "fade",
            pe = "show",
            me = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            ve = ".sticky-top",
            ge = (function () {
                function t(t, e) {
                    (this._config = this._getConfig(e)),
                        (this._element = t),
                        (this._dialog = t.querySelector(".modal-dialog")),
                        (this._backdrop = null),
                        (this._isShown = !1),
                        (this._isBodyOverflowing = !1),
                        (this._ignoreBackdropClick = !1),
                        (this._isTransitioning = !1),
                        (this._scrollbarWidth = 0);
                }
                var n = t.prototype;
                return (
                    (n.toggle = function (t) {
                        return this._isShown ? this.hide() : this.show(t);
                    }),
                    (n.show = function (t) {
                        var n = this;
                        if (!this._isShown && !this._isTransitioning) {
                            e(this._element).hasClass(he) &&
                                (this._isTransitioning = !0);
                            var i = e.Event(ce.SHOW, { relatedTarget: t });
                            e(this._element).trigger(i),
                                this._isShown ||
                                    i.isDefaultPrevented() ||
                                    ((this._isShown = !0),
                                    this._checkScrollbar(),
                                    this._setScrollbar(),
                                    this._adjustDialog(),
                                    this._setEscapeEvent(),
                                    this._setResizeEvent(),
                                    e(this._element).on(
                                        ce.CLICK_DISMISS,
                                        '[data-dismiss="modal"]',
                                        function (t) {
                                            return n.hide(t);
                                        }
                                    ),
                                    e(this._dialog).on(
                                        ce.MOUSEDOWN_DISMISS,
                                        function () {
                                            e(n._element).one(
                                                ce.MOUSEUP_DISMISS,
                                                function (t) {
                                                    e(t.target).is(
                                                        n._element
                                                    ) &&
                                                        (n._ignoreBackdropClick =
                                                            !0);
                                                }
                                            );
                                        }
                                    ),
                                    this._showBackdrop(function () {
                                        return n._showElement(t);
                                    }));
                        }
                    }),
                    (n.hide = function (t) {
                        var n = this;
                        if (
                            (t && t.preventDefault(),
                            this._isShown && !this._isTransitioning)
                        ) {
                            var i = e.Event(ce.HIDE);
                            if (
                                (e(this._element).trigger(i),
                                this._isShown && !i.isDefaultPrevented())
                            ) {
                                this._isShown = !1;
                                var r = e(this._element).hasClass(he);
                                if (
                                    (r && (this._isTransitioning = !0),
                                    this._setEscapeEvent(),
                                    this._setResizeEvent(),
                                    e(document).off(ce.FOCUSIN),
                                    e(this._element).removeClass(pe),
                                    e(this._element).off(ce.CLICK_DISMISS),
                                    e(this._dialog).off(ce.MOUSEDOWN_DISMISS),
                                    r)
                                ) {
                                    var a = s.getTransitionDurationFromElement(
                                        this._element
                                    );
                                    e(this._element)
                                        .one(s.TRANSITION_END, function (t) {
                                            return n._hideModal(t);
                                        })
                                        .emulateTransitionEnd(a);
                                } else this._hideModal();
                            }
                        }
                    }),
                    (n.dispose = function () {
                        [window, this._element, this._dialog].forEach(function (
                            t
                        ) {
                            return e(t).off(oe);
                        }),
                            e(document).off(ce.FOCUSIN),
                            e.removeData(this._element, se),
                            (this._config = null),
                            (this._element = null),
                            (this._dialog = null),
                            (this._backdrop = null),
                            (this._isShown = null),
                            (this._isBodyOverflowing = null),
                            (this._ignoreBackdropClick = null),
                            (this._isTransitioning = null),
                            (this._scrollbarWidth = null);
                    }),
                    (n.handleUpdate = function () {
                        this._adjustDialog();
                    }),
                    (n._getConfig = function (t) {
                        return (
                            (t = r({}, ue, t)), s.typeCheckConfig(ae, t, de), t
                        );
                    }),
                    (n._showElement = function (t) {
                        var n = this,
                            i = e(this._element).hasClass(he);
                        (this._element.parentNode &&
                            this._element.parentNode.nodeType ===
                                Node.ELEMENT_NODE) ||
                            document.body.appendChild(this._element),
                            (this._element.style.display = "block"),
                            this._element.removeAttribute("aria-hidden"),
                            this._element.setAttribute("aria-modal", !0),
                            e(this._dialog).hasClass("modal-dialog-scrollable")
                                ? (this._dialog.querySelector(
                                      ".modal-body"
                                  ).scrollTop = 0)
                                : (this._element.scrollTop = 0),
                            i && s.reflow(this._element),
                            e(this._element).addClass(pe),
                            this._config.focus && this._enforceFocus();
                        var r = e.Event(ce.SHOWN, { relatedTarget: t }),
                            a = function () {
                                n._config.focus && n._element.focus(),
                                    (n._isTransitioning = !1),
                                    e(n._element).trigger(r);
                            };
                        if (i) {
                            var o = s.getTransitionDurationFromElement(
                                this._dialog
                            );
                            e(this._dialog)
                                .one(s.TRANSITION_END, a)
                                .emulateTransitionEnd(o);
                        } else a();
                    }),
                    (n._enforceFocus = function () {
                        var t = this;
                        e(document)
                            .off(ce.FOCUSIN)
                            .on(ce.FOCUSIN, function (n) {
                                document !== n.target &&
                                    t._element !== n.target &&
                                    0 === e(t._element).has(n.target).length &&
                                    t._element.focus();
                            });
                    }),
                    (n._setEscapeEvent = function () {
                        var t = this;
                        this._isShown && this._config.keyboard
                            ? e(this._element).on(
                                  ce.KEYDOWN_DISMISS,
                                  function (e) {
                                      27 === e.which &&
                                          (e.preventDefault(), t.hide());
                                  }
                              )
                            : this._isShown ||
                              e(this._element).off(ce.KEYDOWN_DISMISS);
                    }),
                    (n._setResizeEvent = function () {
                        var t = this;
                        this._isShown
                            ? e(window).on(ce.RESIZE, function (e) {
                                  return t.handleUpdate(e);
                              })
                            : e(window).off(ce.RESIZE);
                    }),
                    (n._hideModal = function () {
                        var t = this;
                        (this._element.style.display = "none"),
                            this._element.setAttribute("aria-hidden", !0),
                            this._element.removeAttribute("aria-modal"),
                            (this._isTransitioning = !1),
                            this._showBackdrop(function () {
                                e(document.body).removeClass(fe),
                                    t._resetAdjustments(),
                                    t._resetScrollbar(),
                                    e(t._element).trigger(ce.HIDDEN);
                            });
                    }),
                    (n._removeBackdrop = function () {
                        this._backdrop &&
                            (e(this._backdrop).remove(),
                            (this._backdrop = null));
                    }),
                    (n._showBackdrop = function (t) {
                        var n = this,
                            i = e(this._element).hasClass(he) ? he : "";
                        if (this._isShown && this._config.backdrop) {
                            if (
                                ((this._backdrop =
                                    document.createElement("div")),
                                (this._backdrop.className = "modal-backdrop"),
                                i && this._backdrop.classList.add(i),
                                e(this._backdrop).appendTo(document.body),
                                e(this._element).on(
                                    ce.CLICK_DISMISS,
                                    function (t) {
                                        n._ignoreBackdropClick
                                            ? (n._ignoreBackdropClick = !1)
                                            : t.target === t.currentTarget &&
                                              ("static" === n._config.backdrop
                                                  ? n._element.focus()
                                                  : n.hide());
                                    }
                                ),
                                i && s.reflow(this._backdrop),
                                e(this._backdrop).addClass(pe),
                                !t)
                            )
                                return;
                            if (!i) return void t();
                            var r = s.getTransitionDurationFromElement(
                                this._backdrop
                            );
                            e(this._backdrop)
                                .one(s.TRANSITION_END, t)
                                .emulateTransitionEnd(r);
                        } else if (!this._isShown && this._backdrop) {
                            e(this._backdrop).removeClass(pe);
                            var a = function () {
                                n._removeBackdrop(), t && t();
                            };
                            if (e(this._element).hasClass(he)) {
                                var o = s.getTransitionDurationFromElement(
                                    this._backdrop
                                );
                                e(this._backdrop)
                                    .one(s.TRANSITION_END, a)
                                    .emulateTransitionEnd(o);
                            } else a();
                        } else t && t();
                    }),
                    (n._adjustDialog = function () {
                        var t =
                            this._element.scrollHeight >
                            document.documentElement.clientHeight;
                        !this._isBodyOverflowing &&
                            t &&
                            (this._element.style.paddingLeft =
                                this._scrollbarWidth + "px"),
                            this._isBodyOverflowing &&
                                !t &&
                                (this._element.style.paddingRight =
                                    this._scrollbarWidth + "px");
                    }),
                    (n._resetAdjustments = function () {
                        (this._element.style.paddingLeft = ""),
                            (this._element.style.paddingRight = "");
                    }),
                    (n._checkScrollbar = function () {
                        var t = document.body.getBoundingClientRect();
                        (this._isBodyOverflowing =
                            t.left + t.right < window.innerWidth),
                            (this._scrollbarWidth = this._getScrollbarWidth());
                    }),
                    (n._setScrollbar = function () {
                        var t = this;
                        if (this._isBodyOverflowing) {
                            var n = [].slice.call(
                                    document.querySelectorAll(me)
                                ),
                                i = [].slice.call(
                                    document.querySelectorAll(ve)
                                );
                            e(n).each(function (n, i) {
                                var r = i.style.paddingRight,
                                    a = e(i).css("padding-right");
                                e(i)
                                    .data("padding-right", r)
                                    .css(
                                        "padding-right",
                                        parseFloat(a) + t._scrollbarWidth + "px"
                                    );
                            }),
                                e(i).each(function (n, i) {
                                    var r = i.style.marginRight,
                                        a = e(i).css("margin-right");
                                    e(i)
                                        .data("margin-right", r)
                                        .css(
                                            "margin-right",
                                            parseFloat(a) -
                                                t._scrollbarWidth +
                                                "px"
                                        );
                                });
                            var r = document.body.style.paddingRight,
                                a = e(document.body).css("padding-right");
                            e(document.body)
                                .data("padding-right", r)
                                .css(
                                    "padding-right",
                                    parseFloat(a) + this._scrollbarWidth + "px"
                                );
                        }
                        e(document.body).addClass(fe);
                    }),
                    (n._resetScrollbar = function () {
                        var t = [].slice.call(document.querySelectorAll(me));
                        e(t).each(function (t, n) {
                            var i = e(n).data("padding-right");
                            e(n).removeData("padding-right"),
                                (n.style.paddingRight = i || "");
                        });
                        var n = [].slice.call(
                            document.querySelectorAll("" + ve)
                        );
                        e(n).each(function (t, n) {
                            var i = e(n).data("margin-right");
                            void 0 !== i &&
                                e(n)
                                    .css("margin-right", i)
                                    .removeData("margin-right");
                        });
                        var i = e(document.body).data("padding-right");
                        e(document.body).removeData("padding-right"),
                            (document.body.style.paddingRight = i || "");
                    }),
                    (n._getScrollbarWidth = function () {
                        var t = document.createElement("div");
                        (t.className = "modal-scrollbar-measure"),
                            document.body.appendChild(t);
                        var e = t.getBoundingClientRect().width - t.clientWidth;
                        return document.body.removeChild(t), e;
                    }),
                    (t._jQueryInterface = function (n, i) {
                        return this.each(function () {
                            var a = e(this).data(se),
                                s = r(
                                    {},
                                    ue,
                                    e(this).data(),
                                    "object" == typeof n && n ? n : {}
                                );
                            if (
                                (a ||
                                    ((a = new t(this, s)), e(this).data(se, a)),
                                "string" == typeof n)
                            ) {
                                if (void 0 === a[n])
                                    throw new TypeError(
                                        'No method named "' + n + '"'
                                    );
                                a[n](i);
                            } else s.show && a.show(i);
                        });
                    }),
                    i(t, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.3.1";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return ue;
                            },
                        },
                    ]),
                    t
                );
            })();
        e(document).on(
            ce.CLICK_DATA_API,
            '[data-toggle="modal"]',
            function (t) {
                var n,
                    i = this,
                    a = s.getSelectorFromElement(this);
                a && (n = document.querySelector(a));
                var o = e(n).data(se)
                    ? "toggle"
                    : r({}, e(n).data(), e(this).data());
                ("A" !== this.tagName && "AREA" !== this.tagName) ||
                    t.preventDefault();
                var l = e(n).one(ce.SHOW, function (t) {
                    t.isDefaultPrevented() ||
                        l.one(ce.HIDDEN, function () {
                            e(i).is(":visible") && i.focus();
                        });
                });
                ge._jQueryInterface.call(e(n), o, this);
            }
        ),
            (e.fn[ae] = ge._jQueryInterface),
            (e.fn[ae].Constructor = ge),
            (e.fn[ae].noConflict = function () {
                return (e.fn[ae] = le), ge._jQueryInterface;
            });
        var be = [
                "background",
                "cite",
                "href",
                "itemtype",
                "longdesc",
                "poster",
                "src",
                "xlink:href",
            ],
            _e = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
            ye =
                /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
        function Ae(t, e, n) {
            if (0 === t.length) return t;
            if (n && "function" == typeof n) return n(t);
            for (
                var i = new window.DOMParser().parseFromString(t, "text/html"),
                    r = Object.keys(e),
                    a = [].slice.call(i.body.querySelectorAll("*")),
                    s = function (t, n) {
                        var i = a[t],
                            s = i.nodeName.toLowerCase();
                        if (-1 === r.indexOf(i.nodeName.toLowerCase()))
                            return i.parentNode.removeChild(i), "continue";
                        var o = [].slice.call(i.attributes),
                            l = [].concat(e["*"] || [], e[s] || []);
                        o.forEach(function (t) {
                            (function (t, e) {
                                var n = t.nodeName.toLowerCase();
                                if (-1 !== e.indexOf(n))
                                    return (
                                        -1 === be.indexOf(n) ||
                                        Boolean(
                                            t.nodeValue.match(_e) ||
                                                t.nodeValue.match(ye)
                                        )
                                    );
                                for (
                                    var i = e.filter(function (t) {
                                            return t instanceof RegExp;
                                        }),
                                        r = 0,
                                        a = i.length;
                                    r < a;
                                    r++
                                )
                                    if (n.match(i[r])) return !0;
                                return !1;
                            })(t, l) || i.removeAttribute(t.nodeName);
                        });
                    },
                    o = 0,
                    l = a.length;
                o < l;
                o++
            )
                s(o);
            return i.body.innerHTML;
        }
        var Ce = "tooltip",
            Ee = "bs.tooltip",
            we = "." + Ee,
            Ie = e.fn[Ce],
            Te = "bs-tooltip",
            Se = new RegExp("(^|\\s)" + Te + "\\S+", "g"),
            De = ["sanitize", "whiteList", "sanitizeFn"],
            xe = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                whiteList: "object",
            },
            ke = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left",
            },
            Le = {
                animation: !0,
                template:
                    '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent",
                sanitize: !0,
                sanitizeFn: null,
                whiteList: {
                    "*": [
                        "class",
                        "dir",
                        "id",
                        "lang",
                        "role",
                        /^aria-[\w-]*$/i,
                    ],
                    a: ["target", "href", "title", "rel"],
                    area: [],
                    b: [],
                    br: [],
                    col: [],
                    code: [],
                    div: [],
                    em: [],
                    hr: [],
                    h1: [],
                    h2: [],
                    h3: [],
                    h4: [],
                    h5: [],
                    h6: [],
                    i: [],
                    img: ["src", "alt", "title", "width", "height"],
                    li: [],
                    ol: [],
                    p: [],
                    pre: [],
                    s: [],
                    small: [],
                    span: [],
                    sub: [],
                    sup: [],
                    strong: [],
                    u: [],
                    ul: [],
                },
            },
            Ne = "show",
            Oe = "out",
            Ve = {
                HIDE: "hide" + we,
                HIDDEN: "hidden" + we,
                SHOW: "show" + we,
                SHOWN: "shown" + we,
                INSERTED: "inserted" + we,
                CLICK: "click" + we,
                FOCUSIN: "focusin" + we,
                FOCUSOUT: "focusout" + we,
                MOUSEENTER: "mouseenter" + we,
                MOUSELEAVE: "mouseleave" + we,
            },
            Pe = "fade",
            Me = "show",
            Fe = "hover",
            Be = "focus",
            Re = (function () {
                function t(t, e) {
                    if (void 0 === Gt)
                        throw new TypeError(
                            "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
                        );
                    (this._isEnabled = !0),
                        (this._timeout = 0),
                        (this._hoverState = ""),
                        (this._activeTrigger = {}),
                        (this._popper = null),
                        (this.element = t),
                        (this.config = this._getConfig(e)),
                        (this.tip = null),
                        this._setListeners();
                }
                var n = t.prototype;
                return (
                    (n.enable = function () {
                        this._isEnabled = !0;
                    }),
                    (n.disable = function () {
                        this._isEnabled = !1;
                    }),
                    (n.toggleEnabled = function () {
                        this._isEnabled = !this._isEnabled;
                    }),
                    (n.toggle = function (t) {
                        if (this._isEnabled)
                            if (t) {
                                var n = this.constructor.DATA_KEY,
                                    i = e(t.currentTarget).data(n);
                                i ||
                                    ((i = new this.constructor(
                                        t.currentTarget,
                                        this._getDelegateConfig()
                                    )),
                                    e(t.currentTarget).data(n, i)),
                                    (i._activeTrigger.click =
                                        !i._activeTrigger.click),
                                    i._isWithActiveTrigger()
                                        ? i._enter(null, i)
                                        : i._leave(null, i);
                            } else {
                                if (e(this.getTipElement()).hasClass(Me))
                                    return void this._leave(null, this);
                                this._enter(null, this);
                            }
                    }),
                    (n.dispose = function () {
                        clearTimeout(this._timeout),
                            e.removeData(
                                this.element,
                                this.constructor.DATA_KEY
                            ),
                            e(this.element).off(this.constructor.EVENT_KEY),
                            e(this.element)
                                .closest(".modal")
                                .off("hide.bs.modal"),
                            this.tip && e(this.tip).remove(),
                            (this._isEnabled = null),
                            (this._timeout = null),
                            (this._hoverState = null),
                            (this._activeTrigger = null) !== this._popper &&
                                this._popper.destroy(),
                            (this._popper = null),
                            (this.element = null),
                            (this.config = null),
                            (this.tip = null);
                    }),
                    (n.show = function () {
                        var t = this;
                        if ("none" === e(this.element).css("display"))
                            throw new Error(
                                "Please use show on visible elements"
                            );
                        var n = e.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            e(this.element).trigger(n);
                            var i = s.findShadowRoot(this.element),
                                r = e.contains(
                                    null !== i
                                        ? i
                                        : this.element.ownerDocument
                                              .documentElement,
                                    this.element
                                );
                            if (n.isDefaultPrevented() || !r) return;
                            var a = this.getTipElement(),
                                o = s.getUID(this.constructor.NAME);
                            a.setAttribute("id", o),
                                this.element.setAttribute(
                                    "aria-describedby",
                                    o
                                ),
                                this.setContent(),
                                this.config.animation && e(a).addClass(Pe);
                            var l =
                                    "function" == typeof this.config.placement
                                        ? this.config.placement.call(
                                              this,
                                              a,
                                              this.element
                                          )
                                        : this.config.placement,
                                u = this._getAttachment(l);
                            this.addAttachmentClass(u);
                            var d = this._getContainer();
                            e(a).data(this.constructor.DATA_KEY, this),
                                e.contains(
                                    this.element.ownerDocument.documentElement,
                                    this.tip
                                ) || e(a).appendTo(d),
                                e(this.element).trigger(
                                    this.constructor.Event.INSERTED
                                ),
                                (this._popper = new Gt(this.element, a, {
                                    placement: u,
                                    modifiers: {
                                        offset: this._getOffset(),
                                        flip: {
                                            behavior:
                                                this.config.fallbackPlacement,
                                        },
                                        arrow: { element: ".arrow" },
                                        preventOverflow: {
                                            boundariesElement:
                                                this.config.boundary,
                                        },
                                    },
                                    onCreate: function (e) {
                                        e.originalPlacement !== e.placement &&
                                            t._handlePopperPlacementChange(e);
                                    },
                                    onUpdate: function (e) {
                                        return t._handlePopperPlacementChange(
                                            e
                                        );
                                    },
                                })),
                                e(a).addClass(Me),
                                "ontouchstart" in document.documentElement &&
                                    e(document.body)
                                        .children()
                                        .on("mouseover", null, e.noop);
                            var c = function () {
                                t.config.animation && t._fixTransition();
                                var n = t._hoverState;
                                (t._hoverState = null),
                                    e(t.element).trigger(
                                        t.constructor.Event.SHOWN
                                    ),
                                    n === Oe && t._leave(null, t);
                            };
                            if (e(this.tip).hasClass(Pe)) {
                                var f = s.getTransitionDurationFromElement(
                                    this.tip
                                );
                                e(this.tip)
                                    .one(s.TRANSITION_END, c)
                                    .emulateTransitionEnd(f);
                            } else c();
                        }
                    }),
                    (n.hide = function (t) {
                        var n = this,
                            i = this.getTipElement(),
                            r = e.Event(this.constructor.Event.HIDE),
                            a = function () {
                                n._hoverState !== Ne &&
                                    i.parentNode &&
                                    i.parentNode.removeChild(i),
                                    n._cleanTipClass(),
                                    n.element.removeAttribute(
                                        "aria-describedby"
                                    ),
                                    e(n.element).trigger(
                                        n.constructor.Event.HIDDEN
                                    ),
                                    null !== n._popper && n._popper.destroy(),
                                    t && t();
                            };
                        if (
                            (e(this.element).trigger(r),
                            !r.isDefaultPrevented())
                        ) {
                            if (
                                (e(i).removeClass(Me),
                                "ontouchstart" in document.documentElement &&
                                    e(document.body)
                                        .children()
                                        .off("mouseover", null, e.noop),
                                (this._activeTrigger.click = !1),
                                (this._activeTrigger[Be] = !1),
                                (this._activeTrigger[Fe] = !1),
                                e(this.tip).hasClass(Pe))
                            ) {
                                var o = s.getTransitionDurationFromElement(i);
                                e(i)
                                    .one(s.TRANSITION_END, a)
                                    .emulateTransitionEnd(o);
                            } else a();
                            this._hoverState = "";
                        }
                    }),
                    (n.update = function () {
                        null !== this._popper && this._popper.scheduleUpdate();
                    }),
                    (n.isWithContent = function () {
                        return Boolean(this.getTitle());
                    }),
                    (n.addAttachmentClass = function (t) {
                        e(this.getTipElement()).addClass(Te + "-" + t);
                    }),
                    (n.getTipElement = function () {
                        return (
                            (this.tip = this.tip || e(this.config.template)[0]),
                            this.tip
                        );
                    }),
                    (n.setContent = function () {
                        var t = this.getTipElement();
                        this.setElementContent(
                            e(t.querySelectorAll(".tooltip-inner")),
                            this.getTitle()
                        ),
                            e(t).removeClass(Pe + " " + Me);
                    }),
                    (n.setElementContent = function (t, n) {
                        "object" != typeof n || (!n.nodeType && !n.jquery)
                            ? this.config.html
                                ? (this.config.sanitize &&
                                      (n = Ae(
                                          n,
                                          this.config.whiteList,
                                          this.config.sanitizeFn
                                      )),
                                  t.html(n))
                                : t.text(n)
                            : this.config.html
                            ? e(n).parent().is(t) || t.empty().append(n)
                            : t.text(e(n).text());
                    }),
                    (n.getTitle = function () {
                        var t = this.element.getAttribute(
                            "data-original-title"
                        );
                        return (
                            t ||
                                (t =
                                    "function" == typeof this.config.title
                                        ? this.config.title.call(this.element)
                                        : this.config.title),
                            t
                        );
                    }),
                    (n._getOffset = function () {
                        var t = this,
                            e = {};
                        return (
                            "function" == typeof this.config.offset
                                ? (e.fn = function (e) {
                                      return (
                                          (e.offsets = r(
                                              {},
                                              e.offsets,
                                              t.config.offset(
                                                  e.offsets,
                                                  t.element
                                              ) || {}
                                          )),
                                          e
                                      );
                                  })
                                : (e.offset = this.config.offset),
                            e
                        );
                    }),
                    (n._getContainer = function () {
                        return !1 === this.config.container
                            ? document.body
                            : s.isElement(this.config.container)
                            ? e(this.config.container)
                            : e(document).find(this.config.container);
                    }),
                    (n._getAttachment = function (t) {
                        return ke[t.toUpperCase()];
                    }),
                    (n._setListeners = function () {
                        var t = this;
                        this.config.trigger.split(" ").forEach(function (n) {
                            if ("click" === n)
                                e(t.element).on(
                                    t.constructor.Event.CLICK,
                                    t.config.selector,
                                    function (e) {
                                        return t.toggle(e);
                                    }
                                );
                            else if ("manual" !== n) {
                                var i =
                                        n === Fe
                                            ? t.constructor.Event.MOUSEENTER
                                            : t.constructor.Event.FOCUSIN,
                                    r =
                                        n === Fe
                                            ? t.constructor.Event.MOUSELEAVE
                                            : t.constructor.Event.FOCUSOUT;
                                e(t.element)
                                    .on(i, t.config.selector, function (e) {
                                        return t._enter(e);
                                    })
                                    .on(r, t.config.selector, function (e) {
                                        return t._leave(e);
                                    });
                            }
                        }),
                            e(this.element)
                                .closest(".modal")
                                .on("hide.bs.modal", function () {
                                    t.element && t.hide();
                                }),
                            this.config.selector
                                ? (this.config = r({}, this.config, {
                                      trigger: "manual",
                                      selector: "",
                                  }))
                                : this._fixTitle();
                    }),
                    (n._fixTitle = function () {
                        var t = typeof this.element.getAttribute(
                            "data-original-title"
                        );
                        (this.element.getAttribute("title") ||
                            "string" !== t) &&
                            (this.element.setAttribute(
                                "data-original-title",
                                this.element.getAttribute("title") || ""
                            ),
                            this.element.setAttribute("title", ""));
                    }),
                    (n._enter = function (t, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || e(t.currentTarget).data(i)) ||
                            ((n = new this.constructor(
                                t.currentTarget,
                                this._getDelegateConfig()
                            )),
                            e(t.currentTarget).data(i, n)),
                            t &&
                                (n._activeTrigger[
                                    "focusin" === t.type ? Be : Fe
                                ] = !0),
                            e(n.getTipElement()).hasClass(Me) ||
                            n._hoverState === Ne
                                ? (n._hoverState = Ne)
                                : (clearTimeout(n._timeout),
                                  (n._hoverState = Ne),
                                  n.config.delay && n.config.delay.show
                                      ? (n._timeout = setTimeout(function () {
                                            n._hoverState === Ne && n.show();
                                        }, n.config.delay.show))
                                      : n.show());
                    }),
                    (n._leave = function (t, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || e(t.currentTarget).data(i)) ||
                            ((n = new this.constructor(
                                t.currentTarget,
                                this._getDelegateConfig()
                            )),
                            e(t.currentTarget).data(i, n)),
                            t &&
                                (n._activeTrigger[
                                    "focusout" === t.type ? Be : Fe
                                ] = !1),
                            n._isWithActiveTrigger() ||
                                (clearTimeout(n._timeout),
                                (n._hoverState = Oe),
                                n.config.delay && n.config.delay.hide
                                    ? (n._timeout = setTimeout(function () {
                                          n._hoverState === Oe && n.hide();
                                      }, n.config.delay.hide))
                                    : n.hide());
                    }),
                    (n._isWithActiveTrigger = function () {
                        for (var t in this._activeTrigger)
                            if (this._activeTrigger[t]) return !0;
                        return !1;
                    }),
                    (n._getConfig = function (t) {
                        var n = e(this.element).data();
                        return (
                            Object.keys(n).forEach(function (t) {
                                -1 !== De.indexOf(t) && delete n[t];
                            }),
                            "number" ==
                                typeof (t = r(
                                    {},
                                    this.constructor.Default,
                                    n,
                                    "object" == typeof t && t ? t : {}
                                )).delay &&
                                (t.delay = { show: t.delay, hide: t.delay }),
                            "number" == typeof t.title &&
                                (t.title = t.title.toString()),
                            "number" == typeof t.content &&
                                (t.content = t.content.toString()),
                            s.typeCheckConfig(
                                Ce,
                                t,
                                this.constructor.DefaultType
                            ),
                            t.sanitize &&
                                (t.template = Ae(
                                    t.template,
                                    t.whiteList,
                                    t.sanitizeFn
                                )),
                            t
                        );
                    }),
                    (n._getDelegateConfig = function () {
                        var t = {};
                        if (this.config)
                            for (var e in this.config)
                                this.constructor.Default[e] !==
                                    this.config[e] && (t[e] = this.config[e]);
                        return t;
                    }),
                    (n._cleanTipClass = function () {
                        var t = e(this.getTipElement()),
                            n = t.attr("class").match(Se);
                        null !== n && n.length && t.removeClass(n.join(""));
                    }),
                    (n._handlePopperPlacementChange = function (t) {
                        var e = t.instance;
                        (this.tip = e.popper),
                            this._cleanTipClass(),
                            this.addAttachmentClass(
                                this._getAttachment(t.placement)
                            );
                    }),
                    (n._fixTransition = function () {
                        var t = this.getTipElement(),
                            n = this.config.animation;
                        null === t.getAttribute("x-placement") &&
                            (e(t).removeClass(Pe),
                            (this.config.animation = !1),
                            this.hide(),
                            this.show(),
                            (this.config.animation = n));
                    }),
                    (t._jQueryInterface = function (n) {
                        return this.each(function () {
                            var i = e(this).data(Ee),
                                r = "object" == typeof n && n;
                            if (
                                (i || !/dispose|hide/.test(n)) &&
                                (i ||
                                    ((i = new t(this, r)), e(this).data(Ee, i)),
                                "string" == typeof n)
                            ) {
                                if (void 0 === i[n])
                                    throw new TypeError(
                                        'No method named "' + n + '"'
                                    );
                                i[n]();
                            }
                        });
                    }),
                    i(t, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.3.1";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return Le;
                            },
                        },
                        {
                            key: "NAME",
                            get: function () {
                                return Ce;
                            },
                        },
                        {
                            key: "DATA_KEY",
                            get: function () {
                                return Ee;
                            },
                        },
                        {
                            key: "Event",
                            get: function () {
                                return Ve;
                            },
                        },
                        {
                            key: "EVENT_KEY",
                            get: function () {
                                return we;
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return xe;
                            },
                        },
                    ]),
                    t
                );
            })();
        (e.fn[Ce] = Re._jQueryInterface),
            (e.fn[Ce].Constructor = Re),
            (e.fn[Ce].noConflict = function () {
                return (e.fn[Ce] = Ie), Re._jQueryInterface;
            });
        var Ue = "popover",
            je = "bs.popover",
            He = "." + je,
            Ge = e.fn[Ue],
            $e = "bs-popover",
            ze = new RegExp("(^|\\s)" + $e + "\\S+", "g"),
            Ke = r({}, Re.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template:
                    '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            }),
            We = r({}, Re.DefaultType, {
                content: "(string|element|function)",
            }),
            Ze = {
                HIDE: "hide" + He,
                HIDDEN: "hidden" + He,
                SHOW: "show" + He,
                SHOWN: "shown" + He,
                INSERTED: "inserted" + He,
                CLICK: "click" + He,
                FOCUSIN: "focusin" + He,
                FOCUSOUT: "focusout" + He,
                MOUSEENTER: "mouseenter" + He,
                MOUSELEAVE: "mouseleave" + He,
            },
            qe = (function (t) {
                var n, r;
                function a() {
                    return t.apply(this, arguments) || this;
                }
                (r = t),
                    ((n = a).prototype = Object.create(r.prototype)),
                    ((n.prototype.constructor = n).__proto__ = r);
                var s = a.prototype;
                return (
                    (s.isWithContent = function () {
                        return this.getTitle() || this._getContent();
                    }),
                    (s.addAttachmentClass = function (t) {
                        e(this.getTipElement()).addClass($e + "-" + t);
                    }),
                    (s.getTipElement = function () {
                        return (
                            (this.tip = this.tip || e(this.config.template)[0]),
                            this.tip
                        );
                    }),
                    (s.setContent = function () {
                        var t = e(this.getTipElement());
                        this.setElementContent(
                            t.find(".popover-header"),
                            this.getTitle()
                        );
                        var n = this._getContent();
                        "function" == typeof n && (n = n.call(this.element)),
                            this.setElementContent(t.find(".popover-body"), n),
                            t.removeClass("fade show");
                    }),
                    (s._getContent = function () {
                        return (
                            this.element.getAttribute("data-content") ||
                            this.config.content
                        );
                    }),
                    (s._cleanTipClass = function () {
                        var t = e(this.getTipElement()),
                            n = t.attr("class").match(ze);
                        null !== n && 0 < n.length && t.removeClass(n.join(""));
                    }),
                    (a._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = e(this).data(je),
                                i = "object" == typeof t ? t : null;
                            if (
                                (n || !/dispose|hide/.test(t)) &&
                                (n ||
                                    ((n = new a(this, i)), e(this).data(je, n)),
                                "string" == typeof t)
                            ) {
                                if (void 0 === n[t])
                                    throw new TypeError(
                                        'No method named "' + t + '"'
                                    );
                                n[t]();
                            }
                        });
                    }),
                    i(a, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.3.1";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return Ke;
                            },
                        },
                        {
                            key: "NAME",
                            get: function () {
                                return Ue;
                            },
                        },
                        {
                            key: "DATA_KEY",
                            get: function () {
                                return je;
                            },
                        },
                        {
                            key: "Event",
                            get: function () {
                                return Ze;
                            },
                        },
                        {
                            key: "EVENT_KEY",
                            get: function () {
                                return He;
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return We;
                            },
                        },
                    ]),
                    a
                );
            })(Re);
        (e.fn[Ue] = qe._jQueryInterface),
            (e.fn[Ue].Constructor = qe),
            (e.fn[Ue].noConflict = function () {
                return (e.fn[Ue] = Ge), qe._jQueryInterface;
            });
        var Qe = "scrollspy",
            Ye = "bs.scrollspy",
            Xe = "." + Ye,
            Je = e.fn[Qe],
            tn = { offset: 10, method: "auto", target: "" },
            en = {
                offset: "number",
                method: "string",
                target: "(string|element)",
            },
            nn = {
                ACTIVATE: "activate" + Xe,
                SCROLL: "scroll" + Xe,
                LOAD_DATA_API: "load" + Xe + ".data-api",
            },
            rn = "active",
            an = ".nav, .list-group",
            sn = ".nav-link",
            on = ".list-group-item",
            ln = "position",
            un = (function () {
                function t(t, n) {
                    var i = this;
                    (this._element = t),
                        (this._scrollElement =
                            "BODY" === t.tagName ? window : t),
                        (this._config = this._getConfig(n)),
                        (this._selector =
                            this._config.target +
                            " " +
                            sn +
                            "," +
                            this._config.target +
                            " " +
                            on +
                            "," +
                            this._config.target +
                            " .dropdown-item"),
                        (this._offsets = []),
                        (this._targets = []),
                        (this._activeTarget = null),
                        (this._scrollHeight = 0),
                        e(this._scrollElement).on(nn.SCROLL, function (t) {
                            return i._process(t);
                        }),
                        this.refresh(),
                        this._process();
                }
                var n = t.prototype;
                return (
                    (n.refresh = function () {
                        var t = this,
                            n =
                                this._scrollElement ===
                                this._scrollElement.window
                                    ? "offset"
                                    : ln,
                            i =
                                "auto" === this._config.method
                                    ? n
                                    : this._config.method,
                            r = i === ln ? this._getScrollTop() : 0;
                        (this._offsets = []),
                            (this._targets = []),
                            (this._scrollHeight = this._getScrollHeight()),
                            [].slice
                                .call(document.querySelectorAll(this._selector))
                                .map(function (t) {
                                    var n,
                                        a = s.getSelectorFromElement(t);
                                    if (
                                        (a && (n = document.querySelector(a)),
                                        n)
                                    ) {
                                        var o = n.getBoundingClientRect();
                                        if (o.width || o.height)
                                            return [e(n)[i]().top + r, a];
                                    }
                                    return null;
                                })
                                .filter(function (t) {
                                    return t;
                                })
                                .sort(function (t, e) {
                                    return t[0] - e[0];
                                })
                                .forEach(function (e) {
                                    t._offsets.push(e[0]),
                                        t._targets.push(e[1]);
                                });
                    }),
                    (n.dispose = function () {
                        e.removeData(this._element, Ye),
                            e(this._scrollElement).off(Xe),
                            (this._element = null),
                            (this._scrollElement = null),
                            (this._config = null),
                            (this._selector = null),
                            (this._offsets = null),
                            (this._targets = null),
                            (this._activeTarget = null),
                            (this._scrollHeight = null);
                    }),
                    (n._getConfig = function (t) {
                        if (
                            "string" !=
                            typeof (t = r(
                                {},
                                tn,
                                "object" == typeof t && t ? t : {}
                            )).target
                        ) {
                            var n = e(t.target).attr("id");
                            n ||
                                ((n = s.getUID(Qe)), e(t.target).attr("id", n)),
                                (t.target = "#" + n);
                        }
                        return s.typeCheckConfig(Qe, t, en), t;
                    }),
                    (n._getScrollTop = function () {
                        return this._scrollElement === window
                            ? this._scrollElement.pageYOffset
                            : this._scrollElement.scrollTop;
                    }),
                    (n._getScrollHeight = function () {
                        return (
                            this._scrollElement.scrollHeight ||
                            Math.max(
                                document.body.scrollHeight,
                                document.documentElement.scrollHeight
                            )
                        );
                    }),
                    (n._getOffsetHeight = function () {
                        return this._scrollElement === window
                            ? window.innerHeight
                            : this._scrollElement.getBoundingClientRect()
                                  .height;
                    }),
                    (n._process = function () {
                        var t = this._getScrollTop() + this._config.offset,
                            e = this._getScrollHeight(),
                            n =
                                this._config.offset +
                                e -
                                this._getOffsetHeight();
                        if (
                            (this._scrollHeight !== e && this.refresh(), n <= t)
                        ) {
                            var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i);
                        } else {
                            if (
                                this._activeTarget &&
                                t < this._offsets[0] &&
                                0 < this._offsets[0]
                            )
                                return (
                                    (this._activeTarget = null),
                                    void this._clear()
                                );
                            for (var r = this._offsets.length; r--; )
                                this._activeTarget !== this._targets[r] &&
                                    t >= this._offsets[r] &&
                                    (void 0 === this._offsets[r + 1] ||
                                        t < this._offsets[r + 1]) &&
                                    this._activate(this._targets[r]);
                        }
                    }),
                    (n._activate = function (t) {
                        (this._activeTarget = t), this._clear();
                        var n = this._selector.split(",").map(function (e) {
                                return (
                                    e +
                                    '[data-target="' +
                                    t +
                                    '"],' +
                                    e +
                                    '[href="' +
                                    t +
                                    '"]'
                                );
                            }),
                            i = e(
                                [].slice.call(
                                    document.querySelectorAll(n.join(","))
                                )
                            );
                        i.hasClass("dropdown-item")
                            ? (i
                                  .closest(".dropdown")
                                  .find(".dropdown-toggle")
                                  .addClass(rn),
                              i.addClass(rn))
                            : (i.addClass(rn),
                              i
                                  .parents(an)
                                  .prev(sn + ", " + on)
                                  .addClass(rn),
                              i
                                  .parents(an)
                                  .prev(".nav-item")
                                  .children(sn)
                                  .addClass(rn)),
                            e(this._scrollElement).trigger(nn.ACTIVATE, {
                                relatedTarget: t,
                            });
                    }),
                    (n._clear = function () {
                        [].slice
                            .call(document.querySelectorAll(this._selector))
                            .filter(function (t) {
                                return t.classList.contains(rn);
                            })
                            .forEach(function (t) {
                                return t.classList.remove(rn);
                            });
                    }),
                    (t._jQueryInterface = function (n) {
                        return this.each(function () {
                            var i = e(this).data(Ye);
                            if (
                                (i ||
                                    ((i = new t(
                                        this,
                                        "object" == typeof n && n
                                    )),
                                    e(this).data(Ye, i)),
                                "string" == typeof n)
                            ) {
                                if (void 0 === i[n])
                                    throw new TypeError(
                                        'No method named "' + n + '"'
                                    );
                                i[n]();
                            }
                        });
                    }),
                    i(t, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.3.1";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return tn;
                            },
                        },
                    ]),
                    t
                );
            })();
        e(window).on(nn.LOAD_DATA_API, function () {
            for (
                var t = [].slice.call(
                        document.querySelectorAll('[data-spy="scroll"]')
                    ),
                    n = t.length;
                n--;

            ) {
                var i = e(t[n]);
                un._jQueryInterface.call(i, i.data());
            }
        }),
            (e.fn[Qe] = un._jQueryInterface),
            (e.fn[Qe].Constructor = un),
            (e.fn[Qe].noConflict = function () {
                return (e.fn[Qe] = Je), un._jQueryInterface;
            });
        var dn = "bs.tab",
            cn = "." + dn,
            fn = e.fn.tab,
            hn = {
                HIDE: "hide" + cn,
                HIDDEN: "hidden" + cn,
                SHOW: "show" + cn,
                SHOWN: "shown" + cn,
                CLICK_DATA_API: "click" + cn + ".data-api",
            },
            pn = "active",
            mn = "fade",
            vn = "show",
            gn = ".active",
            bn = "> li > .active",
            _n = (function () {
                function t(t) {
                    this._element = t;
                }
                var n = t.prototype;
                return (
                    (n.show = function () {
                        var t = this;
                        if (
                            !(
                                (this._element.parentNode &&
                                    this._element.parentNode.nodeType ===
                                        Node.ELEMENT_NODE &&
                                    e(this._element).hasClass(pn)) ||
                                e(this._element).hasClass("disabled")
                            )
                        ) {
                            var n,
                                i,
                                r = e(this._element).closest(
                                    ".nav, .list-group"
                                )[0],
                                a = s.getSelectorFromElement(this._element);
                            if (r) {
                                var o =
                                    "UL" === r.nodeName || "OL" === r.nodeName
                                        ? bn
                                        : gn;
                                i = (i = e.makeArray(e(r).find(o)))[
                                    i.length - 1
                                ];
                            }
                            var l = e.Event(hn.HIDE, {
                                    relatedTarget: this._element,
                                }),
                                u = e.Event(hn.SHOW, { relatedTarget: i });
                            if (
                                (i && e(i).trigger(l),
                                e(this._element).trigger(u),
                                !u.isDefaultPrevented() &&
                                    !l.isDefaultPrevented())
                            ) {
                                a && (n = document.querySelector(a)),
                                    this._activate(this._element, r);
                                var d = function () {
                                    var n = e.Event(hn.HIDDEN, {
                                            relatedTarget: t._element,
                                        }),
                                        r = e.Event(hn.SHOWN, {
                                            relatedTarget: i,
                                        });
                                    e(i).trigger(n), e(t._element).trigger(r);
                                };
                                n ? this._activate(n, n.parentNode, d) : d();
                            }
                        }
                    }),
                    (n.dispose = function () {
                        e.removeData(this._element, dn), (this._element = null);
                    }),
                    (n._activate = function (t, n, i) {
                        var r = this,
                            a = (
                                !n ||
                                ("UL" !== n.nodeName && "OL" !== n.nodeName)
                                    ? e(n).children(gn)
                                    : e(n).find(bn)
                            )[0],
                            o = i && a && e(a).hasClass(mn),
                            l = function () {
                                return r._transitionComplete(t, a, i);
                            };
                        if (a && o) {
                            var u = s.getTransitionDurationFromElement(a);
                            e(a)
                                .removeClass(vn)
                                .one(s.TRANSITION_END, l)
                                .emulateTransitionEnd(u);
                        } else l();
                    }),
                    (n._transitionComplete = function (t, n, i) {
                        if (n) {
                            e(n).removeClass(pn);
                            var r = e(n.parentNode).find(
                                "> .dropdown-menu .active"
                            )[0];
                            r && e(r).removeClass(pn),
                                "tab" === n.getAttribute("role") &&
                                    n.setAttribute("aria-selected", !1);
                        }
                        if (
                            (e(t).addClass(pn),
                            "tab" === t.getAttribute("role") &&
                                t.setAttribute("aria-selected", !0),
                            s.reflow(t),
                            t.classList.contains(mn) && t.classList.add(vn),
                            t.parentNode &&
                                e(t.parentNode).hasClass("dropdown-menu"))
                        ) {
                            var a = e(t).closest(".dropdown")[0];
                            if (a) {
                                var o = [].slice.call(
                                    a.querySelectorAll(".dropdown-toggle")
                                );
                                e(o).addClass(pn);
                            }
                            t.setAttribute("aria-expanded", !0);
                        }
                        i && i();
                    }),
                    (t._jQueryInterface = function (n) {
                        return this.each(function () {
                            var i = e(this),
                                r = i.data(dn);
                            if (
                                (r || ((r = new t(this)), i.data(dn, r)),
                                "string" == typeof n)
                            ) {
                                if (void 0 === r[n])
                                    throw new TypeError(
                                        'No method named "' + n + '"'
                                    );
                                r[n]();
                            }
                        });
                    }),
                    i(t, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.3.1";
                            },
                        },
                    ]),
                    t
                );
            })();
        e(document).on(
            hn.CLICK_DATA_API,
            '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            function (t) {
                t.preventDefault(), _n._jQueryInterface.call(e(this), "show");
            }
        ),
            (e.fn.tab = _n._jQueryInterface),
            (e.fn.tab.Constructor = _n),
            (e.fn.tab.noConflict = function () {
                return (e.fn.tab = fn), _n._jQueryInterface;
            });
        var yn = "toast",
            An = "bs.toast",
            Cn = "." + An,
            En = e.fn[yn],
            wn = {
                CLICK_DISMISS: "click.dismiss" + Cn,
                HIDE: "hide" + Cn,
                HIDDEN: "hidden" + Cn,
                SHOW: "show" + Cn,
                SHOWN: "shown" + Cn,
            },
            In = "hide",
            Tn = "show",
            Sn = "showing",
            Dn = { animation: "boolean", autohide: "boolean", delay: "number" },
            xn = { animation: !0, autohide: !0, delay: 500 },
            kn = (function () {
                function t(t, e) {
                    (this._element = t),
                        (this._config = this._getConfig(e)),
                        (this._timeout = null),
                        this._setListeners();
                }
                var n = t.prototype;
                return (
                    (n.show = function () {
                        var t = this;
                        e(this._element).trigger(wn.SHOW),
                            this._config.animation &&
                                this._element.classList.add("fade");
                        var n = function () {
                            t._element.classList.remove(Sn),
                                t._element.classList.add(Tn),
                                e(t._element).trigger(wn.SHOWN),
                                t._config.autohide && t.hide();
                        };
                        if (
                            (this._element.classList.remove(In),
                            this._element.classList.add(Sn),
                            this._config.animation)
                        ) {
                            var i = s.getTransitionDurationFromElement(
                                this._element
                            );
                            e(this._element)
                                .one(s.TRANSITION_END, n)
                                .emulateTransitionEnd(i);
                        } else n();
                    }),
                    (n.hide = function (t) {
                        var n = this;
                        this._element.classList.contains(Tn) &&
                            (e(this._element).trigger(wn.HIDE),
                            t
                                ? this._close()
                                : (this._timeout = setTimeout(function () {
                                      n._close();
                                  }, this._config.delay)));
                    }),
                    (n.dispose = function () {
                        clearTimeout(this._timeout),
                            (this._timeout = null),
                            this._element.classList.contains(Tn) &&
                                this._element.classList.remove(Tn),
                            e(this._element).off(wn.CLICK_DISMISS),
                            e.removeData(this._element, An),
                            (this._element = null),
                            (this._config = null);
                    }),
                    (n._getConfig = function (t) {
                        return (
                            (t = r(
                                {},
                                xn,
                                e(this._element).data(),
                                "object" == typeof t && t ? t : {}
                            )),
                            s.typeCheckConfig(
                                yn,
                                t,
                                this.constructor.DefaultType
                            ),
                            t
                        );
                    }),
                    (n._setListeners = function () {
                        var t = this;
                        e(this._element).on(
                            wn.CLICK_DISMISS,
                            '[data-dismiss="toast"]',
                            function () {
                                return t.hide(!0);
                            }
                        );
                    }),
                    (n._close = function () {
                        var t = this,
                            n = function () {
                                t._element.classList.add(In),
                                    e(t._element).trigger(wn.HIDDEN);
                            };
                        if (
                            (this._element.classList.remove(Tn),
                            this._config.animation)
                        ) {
                            var i = s.getTransitionDurationFromElement(
                                this._element
                            );
                            e(this._element)
                                .one(s.TRANSITION_END, n)
                                .emulateTransitionEnd(i);
                        } else n();
                    }),
                    (t._jQueryInterface = function (n) {
                        return this.each(function () {
                            var i = e(this),
                                r = i.data(An);
                            if (
                                (r ||
                                    ((r = new t(
                                        this,
                                        "object" == typeof n && n
                                    )),
                                    i.data(An, r)),
                                "string" == typeof n)
                            ) {
                                if (void 0 === r[n])
                                    throw new TypeError(
                                        'No method named "' + n + '"'
                                    );
                                r[n](this);
                            }
                        });
                    }),
                    i(t, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.3.1";
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return Dn;
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return xn;
                            },
                        },
                    ]),
                    t
                );
            })();
        (e.fn[yn] = kn._jQueryInterface),
            (e.fn[yn].Constructor = kn),
            (e.fn[yn].noConflict = function () {
                return (e.fn[yn] = En), kn._jQueryInterface;
            }),
            (function () {
                if (void 0 === e)
                    throw new TypeError(
                        "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
                    );
                var t = e.fn.jquery.split(" ")[0].split(".");
                if (
                    (t[0] < 2 && t[1] < 9) ||
                    (1 === t[0] && 9 === t[1] && t[2] < 1) ||
                    4 <= t[0]
                )
                    throw new Error(
                        "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
                    );
            })(),
            (t.Util = s),
            (t.Alert = f),
            (t.Button = C),
            (t.Carousel = M),
            (t.Collapse = Q),
            (t.Dropdown = re),
            (t.Modal = ge),
            (t.Popover = qe),
            (t.Scrollspy = un),
            (t.Tab = _n),
            (t.Toast = kn),
            (t.Tooltip = Re),
            Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (function (t) {
        var e = function (e, n) {
            (this.$form = t(e)),
                (this.options = t.extend(
                    {},
                    t.fn.bootstrapValidator.DEFAULT_OPTIONS,
                    n
                )),
                (this.$invalidFields = t([])),
                (this.$submitButton = null),
                (this.STATUS_NOT_VALIDATED = "NOT_VALIDATED"),
                (this.STATUS_VALIDATING = "VALIDATING"),
                (this.STATUS_INVALID = "INVALID"),
                (this.STATUS_VALID = "VALID");
            var i = (function () {
                    for (
                        var t = 3,
                            e = document.createElement("div"),
                            n = e.all || [];
                        (e.innerHTML =
                            "\x3c!--[if gt IE " +
                            ++t +
                            "]><br><![endif]--\x3e"),
                            n[0];

                    );
                    return t > 4 ? t : !t;
                })(),
                r = document.createElement("div");
            (this._changeEvent = 9 !== i && "oninput" in r ? "input" : "keyup"),
                (this._submitIfValid = null),
                (this._cacheFields = {}),
                this._init();
        };
        (e.prototype = {
            constructor: e,
            _init: function () {
                var e = this,
                    n = {
                        excluded: this.$form.attr("data-bv-excluded"),
                        trigger: this.$form.attr("data-bv-trigger"),
                        message: this.$form.attr("data-bv-message"),
                        container: this.$form.attr("data-bv-container"),
                        group: this.$form.attr("data-bv-group"),
                        submitButtons: this.$form.attr("data-bv-submitbuttons"),
                        threshold: this.$form.attr("data-bv-threshold"),
                        live: this.$form.attr("data-bv-live"),
                        onSuccess: this.$form.attr("data-bv-onsuccess"),
                        onError: this.$form.attr("data-bv-onerror"),
                        fields: {},
                        feedbackIcons: {
                            valid: this.$form.attr(
                                "data-bv-feedbackicons-valid"
                            ),
                            invalid: this.$form.attr(
                                "data-bv-feedbackicons-invalid"
                            ),
                            validating: this.$form.attr(
                                "data-bv-feedbackicons-validating"
                            ),
                        },
                    };
                for (var i in (this.$form
                    .attr("novalidate", "novalidate")
                    .addClass(this.options.elementClass)
                    .on("submit.bv", function (t) {
                        t.preventDefault(), e.validate();
                    })
                    .on("click.bv", this.options.submitButtons, function () {
                        (e.$submitButton = t(this)), (e._submitIfValid = !0);
                    })
                    .find("[name], [data-bv-field]")
                    .each(function () {
                        var i = t(this),
                            r = i.attr("name") || i.attr("data-bv-field"),
                            a = e._parseOptions(i);
                        a &&
                            (i.attr("data-bv-field", r),
                            (n.fields[r] = t.extend({}, a, n.fields[r])));
                    }),
                (this.options = t.extend(!0, this.options, n)),
                this.options.fields))
                    this._initField(i);
                this.$form.trigger(t.Event("init.form.bv"), {
                    bv: this,
                    options: this.options,
                }),
                    this.options.onSuccess &&
                        this.$form.on("success.form.bv", function (n) {
                            t.fn.bootstrapValidator.helpers.call(
                                e.options.onSuccess,
                                [n]
                            );
                        }),
                    this.options.onError &&
                        this.$form.on("error.form.bv", function (n) {
                            t.fn.bootstrapValidator.helpers.call(
                                e.options.onError,
                                [n]
                            );
                        });
            },
            _parseOptions: function (e) {
                var n,
                    i,
                    r,
                    a,
                    s,
                    o,
                    l,
                    u = e.attr("name") || e.attr("data-bv-field"),
                    d = {};
                for (i in t.fn.bootstrapValidator.validators)
                    if (
                        ((n = t.fn.bootstrapValidator.validators[i]),
                        (r = e.attr("data-bv-" + i.toLowerCase()) + ""),
                        ((l =
                            "function" == typeof n.enableByHtml5
                                ? n.enableByHtml5(e)
                                : null) &&
                            "false" !== r) ||
                            (!0 !== l && ("" === r || "true" === r)))
                    )
                        for (o in ((n.html5Attributes = t.extend(
                            {},
                            {
                                message: "message",
                                onerror: "onError",
                                onsuccess: "onSuccess",
                            },
                            n.html5Attributes
                        )),
                        (d[i] = t.extend({}, !0 === l ? {} : l, d[i])),
                        n.html5Attributes))
                            (a = n.html5Attributes[o]),
                                (s = e.attr(
                                    "data-bv-" + i.toLowerCase() + "-" + o
                                )) &&
                                    ("true" === s
                                        ? (s = !0)
                                        : "false" === s && (s = !1),
                                    (d[i][a] = s));
                var c = {
                        excluded: e.attr("data-bv-excluded"),
                        feedbackIcons: e.attr("data-bv-feedbackicons"),
                        trigger: e.attr("data-bv-trigger"),
                        message: e.attr("data-bv-message"),
                        container: e.attr("data-bv-container"),
                        group: e.attr("data-bv-group"),
                        selector: e.attr("data-bv-selector"),
                        threshold: e.attr("data-bv-threshold"),
                        onStatus: e.attr("data-bv-onstatus"),
                        onSuccess: e.attr("data-bv-onsuccess"),
                        onError: e.attr("data-bv-onerror"),
                        validators: d,
                    },
                    f = t.isEmptyObject(c);
                return !t.isEmptyObject(d) ||
                    (!f && this.options.fields && this.options.fields[u])
                    ? ((c.validators = d), c)
                    : null;
            },
            _initField: function (e) {
                var n = t([]);
                switch (typeof e) {
                    case "object":
                        (n = e), (e = e.attr("data-bv-field"));
                        break;
                    case "string":
                        (n = this.getFieldElements(e)).attr("data-bv-field", e);
                }
                if (
                    null !== this.options.fields[e] &&
                    null !== this.options.fields[e].validators
                ) {
                    if (0 === n.length)
                        return void delete this.options.fields[e];
                    var i;
                    for (i in this.options.fields[e].validators)
                        t.fn.bootstrapValidator.validators[i] ||
                            delete this.options.fields[e].validators[i];
                    null === this.options.fields[e].enabled &&
                        (this.options.fields[e].enabled = !0);
                    for (
                        var r = this,
                            a = n.length,
                            s = n.attr("type"),
                            o = 1 === a || "radio" === s || "checkbox" === s,
                            l =
                                "radio" === s ||
                                "checkbox" === s ||
                                "file" === s ||
                                "SELECT" === n.eq(0).get(0).tagName
                                    ? "change"
                                    : this._changeEvent,
                            u = (
                                this.options.fields[e].trigger ||
                                this.options.trigger ||
                                l
                            ).split(" "),
                            d = t
                                .map(u, function (t) {
                                    return t + ".update.bv";
                                })
                                .join(" "),
                            c = 0;
                        a > c;
                        c++
                    ) {
                        var f = n.eq(c),
                            h =
                                this.options.fields[e].group ||
                                this.options.group,
                            p = f.parents(h),
                            m =
                                this.options.fields[e].container ||
                                this.options.container,
                            v =
                                m && "tooltip" !== m && "popover" !== m
                                    ? t(m)
                                    : this._getMessageContainer(f, h);
                        for (i in (m &&
                            "tooltip" !== m &&
                            "popover" !== m &&
                            v.addClass("has-error"),
                        v
                            .find(
                                '.help-block[data-bv-validator][data-bv-for="' +
                                    e +
                                    '"]'
                            )
                            .remove(),
                        p.find('i[data-bv-icon-for="' + e + '"]').remove(),
                        f.off(d).on(d, function () {
                            r.updateStatus(t(this), r.STATUS_NOT_VALIDATED);
                        }),
                        f.data("bv.messages", v),
                        this.options.fields[e].validators))
                            f.data("bv.result." + i, this.STATUS_NOT_VALIDATED),
                                (o && c !== a - 1) ||
                                    t("<small/>")
                                        .css("display", "none")
                                        .addClass("help-block")
                                        .attr("data-bv-validator", i)
                                        .attr("data-bv-for", e)
                                        .attr(
                                            "data-bv-result",
                                            this.STATUS_NOT_VALIDATED
                                        )
                                        .html(this._getMessage(e, i))
                                        .appendTo(v),
                                this.options.fields[e].validators[i]
                                    .onSuccess &&
                                    f.on(
                                        "success.validator.bv",
                                        function (n, a) {
                                            t.fn.bootstrapValidator.helpers.call(
                                                r.options.fields[e].validators[
                                                    i
                                                ].onSuccess,
                                                [n, a]
                                            );
                                        }
                                    ),
                                this.options.fields[e].validators[i].onError &&
                                    f.on("error.validator.bv", function (n, a) {
                                        t.fn.bootstrapValidator.helpers.call(
                                            r.options.fields[e].validators[i]
                                                .onError,
                                            [n, a]
                                        );
                                    });
                        if (
                            !1 !== this.options.fields[e].feedbackIcons &&
                            "false" !== this.options.fields[e].feedbackIcons &&
                            this.options.feedbackIcons &&
                            this.options.feedbackIcons.validating &&
                            this.options.feedbackIcons.invalid &&
                            this.options.feedbackIcons.valid &&
                            (!o || c === a - 1)
                        ) {
                            p.removeClass("has-success")
                                .removeClass("has-error")
                                .addClass("has-feedback");
                            var g = t("<i/>")
                                .css("display", "none")
                                .addClass("form-control-feedback")
                                .attr("data-bv-icon-for", e)
                                .insertAfter(
                                    "checkbox" === s || "radio" === s
                                        ? f.parent()
                                        : f
                                );
                            0 === p.find("label").length && g.css("top", 0),
                                0 !== p.find(".input-group").length &&
                                    g
                                        .css({ top: 0, "z-index": 100 })
                                        .insertAfter(
                                            p.find(".input-group").eq(0)
                                        );
                        }
                    }
                    switch (
                        (this.options.fields[e].onSuccess &&
                            n.on("success.field.bv", function (n, i) {
                                t.fn.bootstrapValidator.helpers.call(
                                    r.options.fields[e].onSuccess,
                                    [n, i]
                                );
                            }),
                        this.options.fields[e].onError &&
                            n.on("error.field.bv", function (n, i) {
                                t.fn.bootstrapValidator.helpers.call(
                                    r.options.fields[e].onError,
                                    [n, i]
                                );
                            }),
                        this.options.fields[e].onStatus &&
                            n.on("status.field.bv", function (n, i) {
                                t.fn.bootstrapValidator.helpers.call(
                                    r.options.fields[e].onStatus,
                                    [n, i]
                                );
                            }),
                        (d = t
                            .map(u, function (t) {
                                return t + ".live.bv";
                            })
                            .join(" ")),
                        this.options.live)
                    ) {
                        case "submitted":
                            break;
                        case "disabled":
                            n.off(d);
                            break;
                        case "enabled":
                        default:
                            n.off(d).on(d, function () {
                                r._exceedThreshold(t(this)) &&
                                    r.validateField(t(this));
                            });
                    }
                    n.trigger(t.Event("init.field.bv"), {
                        bv: this,
                        field: e,
                        element: n,
                    });
                }
            },
            _getMessage: function (e, n) {
                if (
                    !(
                        this.options.fields[e] &&
                        t.fn.bootstrapValidator.validators[n] &&
                        this.options.fields[e].validators &&
                        this.options.fields[e].validators[n]
                    )
                )
                    return "";
                var i = this.options.fields[e].validators[n];
                switch (!0) {
                    case !!i.message:
                        return i.message;
                    case !!this.options.fields[e].message:
                        return this.options.fields[e].message;
                    case !!t.fn.bootstrapValidator.i18n[n]:
                        return t.fn.bootstrapValidator.i18n[n].default;
                    default:
                        return this.options.message;
                }
            },
            _getMessageContainer: function (t, e) {
                var n = t.parent();
                if (n.is(e)) return n;
                var i = n.attr("class");
                if (!i) return this._getMessageContainer(n, e);
                for (var r = (i = i.split(" ")).length, a = 0; r > a; a++)
                    if (
                        /^col-(xs|sm|md|lg)-\d+$/.test(i[a]) ||
                        /^col-(xs|sm|md|lg)-offset-\d+$/.test(i[a])
                    )
                        return n;
                return this._getMessageContainer(n, e);
            },
            _submit: function () {
                var e = this.isValid(),
                    n = e ? "success.form.bv" : "error.form.bv",
                    i = t.Event(n);
                this.$form.trigger(i),
                    this.$submitButton &&
                        (e ? this._onSuccess(i) : this._onError(i));
            },
            _isExcluded: function (e) {
                var n = e.attr("data-bv-excluded"),
                    i = e.attr("data-bv-field") || e.attr("name");
                switch (!0) {
                    case !!i &&
                        this.options.fields &&
                        this.options.fields[i] &&
                        ("true" === this.options.fields[i].excluded ||
                            !0 === this.options.fields[i].excluded):
                    case "true" === n:
                    case "" === n:
                        return !0;
                    case !!i &&
                        this.options.fields &&
                        this.options.fields[i] &&
                        ("false" === this.options.fields[i].excluded ||
                            !1 === this.options.fields[i].excluded):
                    case "false" === n:
                        return !1;
                    default:
                        if (this.options.excluded) {
                            "string" == typeof this.options.excluded &&
                                (this.options.excluded = t.map(
                                    this.options.excluded.split(","),
                                    function (e) {
                                        return t.trim(e);
                                    }
                                ));
                            for (
                                var r = this.options.excluded.length, a = 0;
                                r > a;
                                a++
                            )
                                if (
                                    ("string" ==
                                        typeof this.options.excluded[a] &&
                                        e.is(this.options.excluded[a])) ||
                                    ("function" ==
                                        typeof this.options.excluded[a] &&
                                        !0 ===
                                            this.options.excluded[a].call(
                                                this,
                                                e,
                                                this
                                            ))
                                )
                                    return !0;
                        }
                        return !1;
                }
            },
            _exceedThreshold: function (e) {
                var n = e.attr("data-bv-field"),
                    i =
                        this.options.fields[n].threshold ||
                        this.options.threshold;
                return (
                    !i ||
                    -1 !==
                        t.inArray(e.attr("type"), [
                            "button",
                            "checkbox",
                            "file",
                            "hidden",
                            "image",
                            "radio",
                            "reset",
                            "submit",
                        ]) ||
                    e.val().length >= i
                );
            },
            _onError: function (e) {
                if (!e.isDefaultPrevented()) {
                    if ("submitted" === this.options.live) {
                        this.options.live = "enabled";
                        var n = this;
                        for (var i in this.options.fields)
                            !(function (e) {
                                var r = n.getFieldElements(e);
                                if (r.length) {
                                    var a = t(r[0]).attr("type"),
                                        s =
                                            "radio" === a ||
                                            "checkbox" === a ||
                                            "file" === a ||
                                            "SELECT" === t(r[0]).get(0).tagName
                                                ? "change"
                                                : n._changeEvent,
                                        o =
                                            n.options.fields[i].trigger ||
                                            n.options.trigger ||
                                            s,
                                        l = t
                                            .map(o.split(" "), function (t) {
                                                return t + ".live.bv";
                                            })
                                            .join(" ");
                                    r.off(l).on(l, function () {
                                        n._exceedThreshold(t(this)) &&
                                            n.validateField(t(this));
                                    });
                                }
                            })(i);
                    }
                    var r = this.$invalidFields.eq(0);
                    if (r) {
                        var a,
                            s = r.parents(".tab-pane");
                        s &&
                            (a = s.attr("id")) &&
                            t('a[href="#' + a + '"][data-toggle="tab"]').tab(
                                "show"
                            ),
                            r.focus();
                    }
                }
            },
            _onSuccess: function (t) {
                t.isDefaultPrevented() ||
                    this.disableSubmitButtons(!0).defaultSubmit();
            },
            _onFieldValidated: function (e, n) {
                var i = e.attr("data-bv-field"),
                    r = this.options.fields[i].validators,
                    a = {},
                    s = 0,
                    o = { bv: this, field: i, element: e, validator: n };
                if (n)
                    switch (e.data("bv.result." + n)) {
                        case this.STATUS_INVALID:
                            e.trigger(t.Event("error.validator.bv"), o);
                            break;
                        case this.STATUS_VALID:
                            e.trigger(t.Event("success.validator.bv"), o);
                    }
                for (var l in ((a[this.STATUS_NOT_VALIDATED] = 0),
                (a[this.STATUS_VALIDATING] = 0),
                (a[this.STATUS_INVALID] = 0),
                (a[this.STATUS_VALID] = 0),
                r))
                    if (!1 !== r[l].enabled) {
                        s++;
                        var u = e.data("bv.result." + l);
                        u && a[u]++;
                    }
                a[this.STATUS_VALID] === s
                    ? ((this.$invalidFields = this.$invalidFields.not(e)),
                      e.trigger(t.Event("success.field.bv"), o))
                    : 0 === a[this.STATUS_NOT_VALIDATED] &&
                      0 === a[this.STATUS_VALIDATING] &&
                      a[this.STATUS_INVALID] > 0 &&
                      ((this.$invalidFields = this.$invalidFields.add(e)),
                      e.trigger(t.Event("error.field.bv"), o));
            },
            getFieldElements: function (e) {
                return (
                    this._cacheFields[e] ||
                        (this._cacheFields[e] =
                            this.options.fields[e] &&
                            this.options.fields[e].selector
                                ? t(this.options.fields[e].selector)
                                : this.$form.find('[name="' + e + '"]')),
                    this._cacheFields[e]
                );
            },
            disableSubmitButtons: function (t) {
                return (
                    t
                        ? "disabled" !== this.options.live &&
                          this.$form
                              .find(this.options.submitButtons)
                              .attr("disabled", "disabled")
                        : this.$form
                              .find(this.options.submitButtons)
                              .removeAttr("disabled"),
                    this
                );
            },
            validate: function () {
                if (!this.options.fields) return this;
                for (var t in (this.disableSubmitButtons(!0),
                this.options.fields))
                    this.validateField(t);
                return this._submit(), this;
            },
            validateField: function (e) {
                var n = t([]);
                switch (typeof e) {
                    case "object":
                        (n = e), (e = e.attr("data-bv-field"));
                        break;
                    case "string":
                        n = this.getFieldElements(e);
                }
                if (
                    this.options.fields[e] &&
                    !1 === this.options.fields[e].enabled
                )
                    return this;
                for (
                    var i,
                        r,
                        a = this,
                        s = n.attr("type"),
                        o = "radio" === s || "checkbox" === s ? 1 : n.length,
                        l = "radio" === s || "checkbox" === s,
                        u = this.options.fields[e].validators,
                        d = 0;
                    o > d;
                    d++
                ) {
                    var c = n.eq(d);
                    if (!this._isExcluded(c))
                        for (i in u) {
                            c.data("bv.dfs." + i) &&
                                c.data("bv.dfs." + i).reject();
                            var f = c.data("bv.result." + i);
                            f !== this.STATUS_VALID &&
                            f !== this.STATUS_INVALID &&
                            !1 !== u[i].enabled
                                ? (c.data(
                                      "bv.result." + i,
                                      this.STATUS_VALIDATING
                                  ),
                                  "object" ==
                                      typeof (r =
                                          t.fn.bootstrapValidator.validators[
                                              i
                                          ].validate(this, c, u[i])) &&
                                  r.resolve
                                      ? (this.updateStatus(
                                            l ? e : c,
                                            this.STATUS_VALIDATING,
                                            i
                                        ),
                                        c.data("bv.dfs." + i, r),
                                        r.done(function (t, e, n, i) {
                                            t.removeData("bv.dfs." + e),
                                                i && a.updateMessage(t, e, i),
                                                a.updateStatus(
                                                    l
                                                        ? t.attr(
                                                              "data-bv-field"
                                                          )
                                                        : t,
                                                    n
                                                        ? a.STATUS_VALID
                                                        : a.STATUS_INVALID,
                                                    e
                                                ),
                                                n &&
                                                    !0 === a._submitIfValid &&
                                                    a._submit();
                                        }))
                                      : "object" == typeof r &&
                                        void 0 !== r.valid &&
                                        void 0 !== r.message
                                      ? (this.updateMessage(
                                            l ? e : c,
                                            i,
                                            r.message
                                        ),
                                        this.updateStatus(
                                            l ? e : c,
                                            r.valid
                                                ? this.STATUS_VALID
                                                : this.STATUS_INVALID,
                                            i
                                        ))
                                      : "boolean" == typeof r &&
                                        this.updateStatus(
                                            l ? e : c,
                                            r
                                                ? this.STATUS_VALID
                                                : this.STATUS_INVALID,
                                            i
                                        ))
                                : this._onFieldValidated(c, i);
                        }
                }
                return this;
            },
            updateMessage: function (e, n, i) {
                var r = t([]);
                switch (typeof e) {
                    case "object":
                        (r = e), (e = e.attr("data-bv-field"));
                        break;
                    case "string":
                        r = this.getFieldElements(e);
                }
                r.each(function () {
                    t(this)
                        .data("bv.messages")
                        .find(
                            '.help-block[data-bv-validator="' +
                                n +
                                '"][data-bv-for="' +
                                e +
                                '"]'
                        )
                        .html(i);
                });
            },
            updateStatus: function (e, n, i) {
                var r = t([]);
                switch (typeof e) {
                    case "object":
                        (r = e), (e = e.attr("data-bv-field"));
                        break;
                    case "string":
                        r = this.getFieldElements(e);
                }
                n === this.STATUS_NOT_VALIDATED && (this._submitIfValid = !1);
                for (
                    var a = r.attr("type"),
                        s = this.options.fields[e].group || this.options.group,
                        o = "radio" === a || "checkbox" === a ? 1 : r.length,
                        l = 0;
                    o > l;
                    l++
                ) {
                    var u = r.eq(l);
                    if (!this._isExcluded(u)) {
                        var d = u.parents(s),
                            c = u
                                .data("bv.messages")
                                .find(
                                    '.help-block[data-bv-validator][data-bv-for="' +
                                        e +
                                        '"]'
                                ),
                            f = i
                                ? c.filter('[data-bv-validator="' + i + '"]')
                                : c,
                            h = d.find(
                                '.form-control-feedback[data-bv-icon-for="' +
                                    e +
                                    '"]'
                            ),
                            p =
                                this.options.fields[e].container ||
                                this.options.container,
                            m = null;
                        if (i) u.data("bv.result." + i, n);
                        else
                            for (var v in this.options.fields[e].validators)
                                u.data("bv.result." + v, n);
                        f.attr("data-bv-result", n);
                        var g,
                            b,
                            _ = u.parents(".tab-pane");
                        switch (
                            (_ &&
                                (g = _.attr("id")) &&
                                (b = t(
                                    'a[href="#' + g + '"][data-toggle="tab"]'
                                ).parent()),
                            n)
                        ) {
                            case this.STATUS_VALIDATING:
                                (m = null),
                                    this.disableSubmitButtons(!0),
                                    d
                                        .removeClass("has-success")
                                        .removeClass("has-error"),
                                    h &&
                                        h
                                            .removeClass(
                                                this.options.feedbackIcons.valid
                                            )
                                            .removeClass(
                                                this.options.feedbackIcons
                                                    .invalid
                                            )
                                            .addClass(
                                                this.options.feedbackIcons
                                                    .validating
                                            )
                                            .show(),
                                    b &&
                                        b
                                            .removeClass("bv-tab-success")
                                            .removeClass("bv-tab-error");
                                break;
                            case this.STATUS_INVALID:
                                (m = !1),
                                    this.disableSubmitButtons(!0),
                                    d
                                        .removeClass("has-success")
                                        .addClass("has-error"),
                                    h &&
                                        h
                                            .removeClass(
                                                this.options.feedbackIcons.valid
                                            )
                                            .removeClass(
                                                this.options.feedbackIcons
                                                    .validating
                                            )
                                            .addClass(
                                                this.options.feedbackIcons
                                                    .invalid
                                            )
                                            .show(),
                                    b &&
                                        b
                                            .removeClass("bv-tab-success")
                                            .addClass("bv-tab-error");
                                break;
                            case this.STATUS_VALID:
                                null !==
                                    (m =
                                        0 ===
                                        c.filter(
                                            '[data-bv-result="' +
                                                this.STATUS_NOT_VALIDATED +
                                                '"]'
                                        ).length
                                            ? c.filter(
                                                  '[data-bv-result="' +
                                                      this.STATUS_VALID +
                                                      '"]'
                                              ).length === c.length
                                            : null) &&
                                    (this.disableSubmitButtons(
                                        this.$submitButton
                                            ? !this.isValid()
                                            : !m
                                    ),
                                    h &&
                                        h
                                            .removeClass(
                                                this.options.feedbackIcons
                                                    .invalid
                                            )
                                            .removeClass(
                                                this.options.feedbackIcons
                                                    .validating
                                            )
                                            .removeClass(
                                                this.options.feedbackIcons.valid
                                            )
                                            .addClass(
                                                m
                                                    ? this.options.feedbackIcons
                                                          .valid
                                                    : this.options.feedbackIcons
                                                          .invalid
                                            )
                                            .show()),
                                    d
                                        .removeClass("has-error has-success")
                                        .addClass(
                                            this.isValidContainer(d)
                                                ? "has-success"
                                                : "has-error"
                                        ),
                                    b &&
                                        b
                                            .removeClass("bv-tab-success")
                                            .removeClass("bv-tab-error")
                                            .addClass(
                                                this.isValidContainer(_)
                                                    ? "bv-tab-success"
                                                    : "bv-tab-error"
                                            );
                                break;
                            case this.STATUS_NOT_VALIDATED:
                            default:
                                (m = null),
                                    this.disableSubmitButtons(!1),
                                    d
                                        .removeClass("has-success")
                                        .removeClass("has-error"),
                                    h &&
                                        h
                                            .removeClass(
                                                this.options.feedbackIcons.valid
                                            )
                                            .removeClass(
                                                this.options.feedbackIcons
                                                    .invalid
                                            )
                                            .removeClass(
                                                this.options.feedbackIcons
                                                    .validating
                                            )
                                            .hide(),
                                    b &&
                                        b
                                            .removeClass("bv-tab-success")
                                            .removeClass("bv-tab-error");
                        }
                        switch (!0) {
                            case h && "tooltip" === p:
                                !1 === m
                                    ? h
                                          .css("cursor", "pointer")
                                          .tooltip("destroy")
                                          .tooltip({
                                              html: !0,
                                              placement: "top",
                                              title: c
                                                  .filter(
                                                      '[data-bv-result="' +
                                                          this.STATUS_INVALID +
                                                          '"]'
                                                  )
                                                  .eq(0)
                                                  .html(),
                                          })
                                    : h.css("cursor", "").tooltip("destroy");
                                break;
                            case h && "popover" === p:
                                !1 === m
                                    ? h
                                          .css("cursor", "pointer")
                                          .popover("destroy")
                                          .popover({
                                              content: c
                                                  .filter(
                                                      '[data-bv-result="' +
                                                          this.STATUS_INVALID +
                                                          '"]'
                                                  )
                                                  .eq(0)
                                                  .html(),
                                              html: !0,
                                              placement: "top",
                                              trigger: "hover click",
                                          })
                                    : h.css("cursor", "").popover("destroy");
                                break;
                            default:
                                n === this.STATUS_INVALID ? f.show() : f.hide();
                        }
                        u.trigger(t.Event("status.field.bv"), {
                            bv: this,
                            field: e,
                            element: u,
                            status: n,
                        }),
                            this._onFieldValidated(u, i);
                    }
                }
                return this;
            },
            isValid: function () {
                for (var t in this.options.fields)
                    if (!this.isValidField(t)) return !1;
                return !0;
            },
            isValidField: function (e) {
                var n = t([]);
                switch (typeof e) {
                    case "object":
                        (n = e), (e = e.attr("data-bv-field"));
                        break;
                    case "string":
                        n = this.getFieldElements(e);
                }
                if (
                    0 === n.length ||
                    null === this.options.fields[e] ||
                    !1 === this.options.fields[e].enabled
                )
                    return !0;
                for (
                    var i,
                        r,
                        a = n.attr("type"),
                        s = "radio" === a || "checkbox" === a ? 1 : n.length,
                        o = 0;
                    s > o;
                    o++
                )
                    if (((i = n.eq(o)), !this._isExcluded(i)))
                        for (r in this.options.fields[e].validators)
                            if (
                                !1 !==
                                    this.options.fields[e].validators[r]
                                        .enabled &&
                                i.data("bv.result." + r) !== this.STATUS_VALID
                            )
                                return !1;
                return !0;
            },
            isValidContainer: function (e) {
                var n = this,
                    i = {},
                    r = "string" == typeof e ? t(e) : e;
                if (0 === r.length) return !0;
                for (var a in (r.find("[data-bv-field]").each(function () {
                    var e = t(this),
                        r = e.attr("data-bv-field");
                    n._isExcluded(e) || i[r] || (i[r] = e);
                }),
                i)) {
                    var s = i[a];
                    if (
                        0 !==
                        s
                            .data("bv.messages")
                            .find(
                                '.help-block[data-bv-validator][data-bv-for="' +
                                    a +
                                    '"]'
                            )
                            .filter(function () {
                                var e = t(this).attr("data-bv-validator"),
                                    i = t(this).attr("data-bv-for");
                                return (
                                    !1 !==
                                        n.options.fields[i].validators[e]
                                            .enabled &&
                                    s.data("bv.result." + e) &&
                                    s.data("bv.result." + e) !== n.STATUS_VALID
                                );
                            }).length
                    )
                        return !1;
                }
                return !0;
            },
            defaultSubmit: function () {
                this.$submitButton &&
                    t("<input/>")
                        .attr("type", "hidden")
                        .attr("data-bv-submit-hidden", "")
                        .attr("name", this.$submitButton.attr("name"))
                        .val(this.$submitButton.val())
                        .appendTo(this.$form),
                    this.$form.off("submit.bv").submit();
            },
            getInvalidFields: function () {
                return this.$invalidFields;
            },
            getSubmitButton: function () {
                return this.$submitButton;
            },
            getMessages: function (e, n) {
                var i = this,
                    r = [],
                    a = t([]);
                switch (!0) {
                    case e && "object" == typeof e:
                        a = e;
                        break;
                    case e && "string" == typeof e:
                        var s = this.getFieldElements(e);
                        if (s.length > 0) {
                            var o = s.attr("type");
                            a = "radio" === o || "checkbox" === o ? s.eq(0) : s;
                        }
                        break;
                    default:
                        a = this.$invalidFields;
                }
                var l = n ? '[data-bv-validator="' + n + '"]' : "";
                return (
                    a.each(function () {
                        r = r.concat(
                            t(this)
                                .data("bv.messages")
                                .find(
                                    '.help-block[data-bv-for="' +
                                        t(this).attr("data-bv-field") +
                                        '"][data-bv-result="' +
                                        i.STATUS_INVALID +
                                        '"]' +
                                        l
                                )
                                .map(function () {
                                    var e = t(this).attr("data-bv-validator"),
                                        n = t(this).attr("data-bv-for");
                                    return !1 ===
                                        i.options.fields[n].validators[e]
                                            .enabled
                                        ? ""
                                        : t(this).html();
                                })
                                .get()
                        );
                    }),
                    r
                );
            },
            getOptions: function (t, e, n) {
                if (!t) return this.options;
                if (
                    ("object" == typeof t && (t = t.attr("data-bv-field")),
                    !this.options.fields[t])
                )
                    return null;
                var i = this.options.fields[t];
                return e
                    ? i.validators && i.validators[e]
                        ? n
                            ? i.validators[e][n]
                            : i.validators[e]
                        : null
                    : i;
            },
            updateOption: function (t, e, n, i) {
                return (
                    "object" == typeof t && (t = t.attr("data-bv-field")),
                    this.options.fields[t] &&
                        this.options.fields[t].validators[e] &&
                        ((this.options.fields[t].validators[e][n] = i),
                        this.updateStatus(t, this.STATUS_NOT_VALIDATED, e)),
                    this
                );
            },
            addField: function (e, n) {
                var i = t([]);
                switch (typeof e) {
                    case "object":
                        (i = e),
                            (e = e.attr("data-bv-field") || e.attr("name"));
                        break;
                    case "string":
                        delete this._cacheFields[e],
                            (i = this.getFieldElements(e));
                }
                i.attr("data-bv-field", e);
                for (
                    var r = i.attr("type"),
                        a = "radio" === r || "checkbox" === r ? 1 : i.length,
                        s = 0;
                    a > s;
                    s++
                ) {
                    var o = i.eq(s),
                        l = this._parseOptions(o);
                    (l = null === l ? n : t.extend(!0, n, l)),
                        (this.options.fields[e] = t.extend(
                            !0,
                            this.options.fields[e],
                            l
                        )),
                        (this._cacheFields[e] = this._cacheFields[e]
                            ? this._cacheFields[e].add(o)
                            : o),
                        this._initField(
                            "checkbox" === r || "radio" === r ? e : o
                        );
                }
                return (
                    this.disableSubmitButtons(!1),
                    this.$form.trigger(t.Event("added.field.bv"), {
                        field: e,
                        element: i,
                        options: this.options.fields[e],
                    }),
                    this
                );
            },
            removeField: function (e) {
                var n = t([]);
                switch (typeof e) {
                    case "object":
                        (n = e),
                            (e = e.attr("data-bv-field") || e.attr("name")),
                            n.attr("data-bv-field", e);
                        break;
                    case "string":
                        n = this.getFieldElements(e);
                }
                if (0 === n.length) return this;
                for (
                    var i = n.attr("type"),
                        r = "radio" === i || "checkbox" === i ? 1 : n.length,
                        a = 0;
                    r > a;
                    a++
                ) {
                    var s = n.eq(a);
                    (this.$invalidFields = this.$invalidFields.not(s)),
                        (this._cacheFields[e] = this._cacheFields[e].not(s));
                }
                return (
                    (this._cacheFields[e] &&
                        0 !== this._cacheFields[e].length) ||
                        delete this.options.fields[e],
                    ("checkbox" === i || "radio" === i) && this._initField(e),
                    this.disableSubmitButtons(!1),
                    this.$form.trigger(t.Event("removed.field.bv"), {
                        field: e,
                        element: n,
                    }),
                    this
                );
            },
            resetField: function (e, n) {
                var i = t([]);
                switch (typeof e) {
                    case "object":
                        (i = e), (e = e.attr("data-bv-field"));
                        break;
                    case "string":
                        i = this.getFieldElements(e);
                }
                var r = i.length;
                if (this.options.fields[e])
                    for (var a = 0; r > a; a++)
                        for (var s in this.options.fields[e].validators)
                            i.eq(a).removeData("bv.dfs." + s);
                if ((this.updateStatus(e, this.STATUS_NOT_VALIDATED), n)) {
                    var o = i.attr("type");
                    "radio" === o || "checkbox" === o
                        ? i.removeAttr("checked").removeAttr("selected")
                        : i.val("");
                }
                return this;
            },
            resetForm: function (e) {
                for (var n in this.options.fields) this.resetField(n, e);
                return (
                    (this.$invalidFields = t([])),
                    (this.$submitButton = null),
                    this.disableSubmitButtons(!1),
                    this
                );
            },
            revalidateField: function (t) {
                return (
                    this.updateStatus(
                        t,
                        this.STATUS_NOT_VALIDATED
                    ).validateField(t),
                    this
                );
            },
            enableFieldValidators: function (t, e, n) {
                var i = this.options.fields[t].validators;
                if (n && i && i[n] && i[n].enabled !== e)
                    (this.options.fields[t].validators[n].enabled = e),
                        this.updateStatus(t, this.STATUS_NOT_VALIDATED, n);
                else if (!n && this.options.fields[t].enabled !== e)
                    for (var r in ((this.options.fields[t].enabled = e), i))
                        this.enableFieldValidators(t, e, r);
                return this;
            },
            getDynamicOption: function (e, n) {
                var i = "string" == typeof e ? this.getFieldElements(e) : e,
                    r = i.val();
                if ("function" == typeof n)
                    return t.fn.bootstrapValidator.helpers.call(n, [
                        r,
                        this,
                        i,
                    ]);
                if ("string" == typeof n) {
                    var a = this.getFieldElements(n);
                    return a.length
                        ? a.val()
                        : t.fn.bootstrapValidator.helpers.call(n, [r, this, i]);
                }
                return null;
            },
            destroy: function () {
                var t, e, n, i, r, a, s;
                for (t in this.options.fields) {
                    (e = this.getFieldElements(t)),
                        (a =
                            this.options.fields[t].container ||
                            this.options.container),
                        (s =
                            this.options.fields[t].group || this.options.group);
                    for (var o = 0; o < e.length; o++) {
                        if (
                            ((n = e.eq(o))
                                .data("bv.messages")
                                .find(
                                    '.help-block[data-bv-validator][data-bv-for="' +
                                        t +
                                        '"]'
                                )
                                .remove()
                                .end()
                                .end()
                                .removeData("bv.messages")
                                .parents(s)
                                .removeClass(
                                    "has-feedback has-error has-success"
                                )
                                .end()
                                .off(".bv")
                                .removeAttr("data-bv-field"),
                            (r = n
                                .parents(s)
                                .find('i[data-bv-icon-for="' + t + '"]')))
                        )
                            switch (a) {
                                case "tooltip":
                                    r.tooltip("destroy").remove();
                                    break;
                                case "popover":
                                    r.popover("destroy").remove();
                                    break;
                                default:
                                    r.remove();
                            }
                        for (i in this.options.fields[t].validators)
                            n.data("bv.dfs." + i) &&
                                n.data("bv.dfs." + i).reject(),
                                n
                                    .removeData("bv.result." + i)
                                    .removeData("bv.dfs." + i);
                    }
                }
                this.disableSubmitButtons(!1),
                    this.$form
                        .removeClass(this.options.elementClass)
                        .off(".bv")
                        .removeData("bootstrapValidator")
                        .find("[data-bv-submit-hidden]")
                        .remove();
            },
        }),
            (t.fn.bootstrapValidator = function (n) {
                var i = arguments;
                return this.each(function () {
                    var r = t(this),
                        a = r.data("bootstrapValidator");
                    a ||
                        ((a = new e(this, "object" == typeof n && n)),
                        r.data("bootstrapValidator", a)),
                        "string" == typeof n &&
                            a[n].apply(a, Array.prototype.slice.call(i, 1));
                });
            }),
            (t.fn.bootstrapValidator.DEFAULT_OPTIONS = {
                elementClass: "bv-form",
                message: "This value is not valid",
                group: ".form-group",
                container: null,
                threshold: null,
                excluded: [":disabled", ":hidden", ":not(:visible)"],
                feedbackIcons: { valid: null, invalid: null, validating: null },
                submitButtons: '[type="submit"]',
                live: "enabled",
                fields: null,
            }),
            (t.fn.bootstrapValidator.validators = {}),
            (t.fn.bootstrapValidator.i18n = {}),
            (t.fn.bootstrapValidator.Constructor = e),
            (t.fn.bootstrapValidator.helpers = {
                call: function (t, e) {
                    if ("function" == typeof t) return t.apply(this, e);
                    if ("string" == typeof t) {
                        "()" === t.substring(t.length - 2) &&
                            (t = t.substring(0, t.length - 2));
                        for (
                            var n = t.split("."),
                                i = n.pop(),
                                r = window,
                                a = 0;
                            a < n.length;
                            a++
                        )
                            r = r[n[a]];
                        return r[i].apply(this, e);
                    }
                },
                format: function (e, n) {
                    for (var i in (t.isArray(n) || (n = [n]), n))
                        e = e.replace("%s", n[i]);
                    return e;
                },
                date: function (t, e, n, i) {
                    if (isNaN(t) || isNaN(e) || isNaN(n)) return !1;
                    if (
                        ((n = parseInt(n, 10)),
                        (e = parseInt(e, 10)),
                        1e3 > (t = parseInt(t, 10)) ||
                            t > 9999 ||
                            0 >= e ||
                            e > 12)
                    )
                        return !1;
                    var r = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                    if (
                        ((t % 400 == 0 || (t % 100 != 0 && t % 4 == 0)) &&
                            (r[1] = 29),
                        0 >= n || n > r[e - 1])
                    )
                        return !1;
                    if (!0 === i) {
                        var a = new Date(),
                            s = a.getFullYear(),
                            o = a.getMonth(),
                            l = a.getDate();
                        return (
                            s > t ||
                            (t === s && o > e - 1) ||
                            (t === s && e - 1 === o && l > n)
                        );
                    }
                    return !0;
                },
                luhn: function (t) {
                    for (
                        var e = t.length,
                            n = 0,
                            i = [
                                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                [0, 2, 4, 6, 8, 1, 3, 5, 7, 9],
                            ],
                            r = 0;
                        e--;

                    )
                        (r += i[n][parseInt(t.charAt(e), 10)]), (n ^= 1);
                    return r % 10 == 0 && r > 0;
                },
                mod11And10: function (t) {
                    for (var e = 5, n = t.length, i = 0; n > i; i++)
                        e =
                            (((2 * (e || 10)) % 11) +
                                parseInt(t.charAt(i), 10)) %
                            10;
                    return 1 === e;
                },
                mod37And36: function (t, e) {
                    for (
                        var n = (e =
                                e || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ")
                                .length,
                            i = t.length,
                            r = Math.floor(n / 2),
                            a = 0;
                        i > a;
                        a++
                    )
                        r =
                            (((2 * (r || n)) % (n + 1)) +
                                e.indexOf(t.charAt(a))) %
                            n;
                    return 1 === r;
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.base64 = t.extend(
            t.fn.bootstrapValidator.i18n.base64 || {},
            { default: "Please enter a valid base 64 encoded" }
        )),
            (t.fn.bootstrapValidator.validators.base64 = {
                validate: function (t, e) {
                    var n = e.val();
                    return (
                        "" === n ||
                        /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(
                            n
                        )
                    );
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.between = t.extend(
            t.fn.bootstrapValidator.i18n.between || {},
            {
                default: "Please enter a value between %s and %s",
                notInclusive: "Please enter a value between %s and %s strictly",
            }
        )),
            (t.fn.bootstrapValidator.validators.between = {
                html5Attributes: {
                    message: "message",
                    min: "min",
                    max: "max",
                    inclusive: "inclusive",
                },
                enableByHtml5: function (t) {
                    return (
                        "range" === t.attr("type") && {
                            min: t.attr("min"),
                            max: t.attr("max"),
                        }
                    );
                },
                validate: function (e, n, i) {
                    var r = n.val();
                    if ("" === r) return !0;
                    var a = t.isNumeric(i.min)
                            ? i.min
                            : e.getDynamicOption(n, i.min),
                        s = t.isNumeric(i.max)
                            ? i.max
                            : e.getDynamicOption(n, i.max);
                    return (
                        (r = parseFloat(r)),
                        !0 === i.inclusive || void 0 === i.inclusive
                            ? {
                                  valid: r >= a && s >= r,
                                  message:
                                      t.fn.bootstrapValidator.helpers.format(
                                          i.message ||
                                              t.fn.bootstrapValidator.i18n
                                                  .between.default,
                                          [a, s]
                                      ),
                              }
                            : {
                                  valid: r > a && s > r,
                                  message:
                                      t.fn.bootstrapValidator.helpers.format(
                                          i.message ||
                                              t.fn.bootstrapValidator.i18n
                                                  .between.notInclusive,
                                          [a, s]
                                      ),
                              }
                    );
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.callback = t.extend(
            t.fn.bootstrapValidator.i18n.callback || {},
            { default: "Please enter a valid value" }
        )),
            (t.fn.bootstrapValidator.validators.callback = {
                html5Attributes: { message: "message", callback: "callback" },
                validate: function (e, n, i) {
                    var r = n.val();
                    if (i.callback) {
                        var a = new t.Deferred(),
                            s = t.fn.bootstrapValidator.helpers.call(
                                i.callback,
                                [r, e, n]
                            );
                        return (
                            a.resolve(
                                n,
                                "callback",
                                "boolean" == typeof s ? s : s.valid,
                                "object" == typeof s && s.message
                                    ? s.message
                                    : null
                            ),
                            a
                        );
                    }
                    return !0;
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.choice = t.extend(
            t.fn.bootstrapValidator.i18n.choice || {},
            {
                default: "Please enter a valid value",
                less: "Please choose %s options at minimum",
                more: "Please choose %s options at maximum",
                between: "Please choose %s - %s options",
            }
        )),
            (t.fn.bootstrapValidator.validators.choice = {
                html5Attributes: { message: "message", min: "min", max: "max" },
                validate: function (e, n, i) {
                    var r = n.is("select")
                            ? e
                                  .getFieldElements(n.attr("data-bv-field"))
                                  .find("option")
                                  .filter(":selected").length
                            : e
                                  .getFieldElements(n.attr("data-bv-field"))
                                  .filter(":checked").length,
                        a = i.min
                            ? t.isNumeric(i.min)
                                ? i.min
                                : e.getDynamicOption(n, i.min)
                            : null,
                        s = i.max
                            ? t.isNumeric(i.max)
                                ? i.max
                                : e.getDynamicOption(n, i.max)
                            : null,
                        o = !0,
                        l =
                            i.message ||
                            t.fn.bootstrapValidator.i18n.choice.default;
                    switch (
                        (((a && r < parseInt(a, 10)) ||
                            (s && r > parseInt(s, 10))) &&
                            (o = !1),
                        !0)
                    ) {
                        case !!a && !!s:
                            l = t.fn.bootstrapValidator.helpers.format(
                                i.message ||
                                    t.fn.bootstrapValidator.i18n.choice.between,
                                [parseInt(a, 10), parseInt(s, 10)]
                            );
                            break;
                        case !!a:
                            l = t.fn.bootstrapValidator.helpers.format(
                                i.message ||
                                    t.fn.bootstrapValidator.i18n.choice.less,
                                parseInt(a, 10)
                            );
                            break;
                        case !!s:
                            l = t.fn.bootstrapValidator.helpers.format(
                                i.message ||
                                    t.fn.bootstrapValidator.i18n.choice.more,
                                parseInt(s, 10)
                            );
                    }
                    return { valid: o, message: l };
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.creditCard = t.extend(
            t.fn.bootstrapValidator.i18n.creditCard || {},
            { default: "Please enter a valid credit card number" }
        )),
            (t.fn.bootstrapValidator.validators.creditCard = {
                validate: function (e, n) {
                    var i = n.val();
                    if ("" === i) return !0;
                    if (/[^0-9-\s]+/.test(i)) return !1;
                    if (
                        ((i = i.replace(/\D/g, "")),
                        !t.fn.bootstrapValidator.helpers.luhn(i))
                    )
                        return !1;
                    var r,
                        a,
                        s = {
                            AMERICAN_EXPRESS: {
                                length: [15],
                                prefix: ["34", "37"],
                            },
                            DINERS_CLUB: {
                                length: [14],
                                prefix: [
                                    "300",
                                    "301",
                                    "302",
                                    "303",
                                    "304",
                                    "305",
                                    "36",
                                ],
                            },
                            DINERS_CLUB_US: {
                                length: [16],
                                prefix: ["54", "55"],
                            },
                            DISCOVER: {
                                length: [16],
                                prefix: [
                                    "6011",
                                    "622126",
                                    "622127",
                                    "622128",
                                    "622129",
                                    "62213",
                                    "62214",
                                    "62215",
                                    "62216",
                                    "62217",
                                    "62218",
                                    "62219",
                                    "6222",
                                    "6223",
                                    "6224",
                                    "6225",
                                    "6226",
                                    "6227",
                                    "6228",
                                    "62290",
                                    "62291",
                                    "622920",
                                    "622921",
                                    "622922",
                                    "622923",
                                    "622924",
                                    "622925",
                                    "644",
                                    "645",
                                    "646",
                                    "647",
                                    "648",
                                    "649",
                                    "65",
                                ],
                            },
                            JCB: {
                                length: [16],
                                prefix: [
                                    "3528",
                                    "3529",
                                    "353",
                                    "354",
                                    "355",
                                    "356",
                                    "357",
                                    "358",
                                ],
                            },
                            LASER: {
                                length: [16, 17, 18, 19],
                                prefix: ["6304", "6706", "6771", "6709"],
                            },
                            MAESTRO: {
                                length: [12, 13, 14, 15, 16, 17, 18, 19],
                                prefix: [
                                    "5018",
                                    "5020",
                                    "5038",
                                    "6304",
                                    "6759",
                                    "6761",
                                    "6762",
                                    "6763",
                                    "6764",
                                    "6765",
                                    "6766",
                                ],
                            },
                            MASTERCARD: {
                                length: [16],
                                prefix: ["51", "52", "53", "54", "55"],
                            },
                            SOLO: {
                                length: [16, 18, 19],
                                prefix: ["6334", "6767"],
                            },
                            UNIONPAY: {
                                length: [16, 17, 18, 19],
                                prefix: [
                                    "622126",
                                    "622127",
                                    "622128",
                                    "622129",
                                    "62213",
                                    "62214",
                                    "62215",
                                    "62216",
                                    "62217",
                                    "62218",
                                    "62219",
                                    "6222",
                                    "6223",
                                    "6224",
                                    "6225",
                                    "6226",
                                    "6227",
                                    "6228",
                                    "62290",
                                    "62291",
                                    "622920",
                                    "622921",
                                    "622922",
                                    "622923",
                                    "622924",
                                    "622925",
                                ],
                            },
                            VISA: { length: [16], prefix: ["4"] },
                        };
                    for (r in s)
                        for (a in s[r].prefix)
                            if (
                                i.substr(0, s[r].prefix[a].length) ===
                                    s[r].prefix[a] &&
                                -1 !== t.inArray(i.length, s[r].length)
                            )
                                return !0;
                    return !1;
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.cusip = t.extend(
            t.fn.bootstrapValidator.i18n.cusip || {},
            { default: "Please enter a valid CUSIP number" }
        )),
            (t.fn.bootstrapValidator.validators.cusip = {
                validate: function (e, n) {
                    var i = n.val();
                    if ("" === i) return !0;
                    if (((i = i.toUpperCase()), !/^[0-9A-Z]{9}$/.test(i)))
                        return !1;
                    for (
                        var r = t.map(i.split(""), function (t) {
                                var e = t.charCodeAt(0);
                                return e >= "A".charCodeAt(0) &&
                                    e <= "Z".charCodeAt(0)
                                    ? e - "A".charCodeAt(0) + 10
                                    : t;
                            }),
                            a = r.length,
                            s = 0,
                            o = 0;
                        a - 1 > o;
                        o++
                    ) {
                        var l = parseInt(r[o], 10);
                        o % 2 != 0 && (l *= 2), l > 9 && (l -= 9), (s += l);
                    }
                    return (s = (10 - (s % 10)) % 10) === r[a - 1];
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.cvv = t.extend(
            t.fn.bootstrapValidator.i18n.cvv || {},
            { default: "Please enter a valid CVV number" }
        )),
            (t.fn.bootstrapValidator.validators.cvv = {
                html5Attributes: {
                    message: "message",
                    ccfield: "creditCardField",
                },
                validate: function (e, n, i) {
                    var r = n.val();
                    if ("" === r) return !0;
                    if (!/^[0-9]{3,4}$/.test(r)) return !1;
                    if (!i.creditCardField) return !0;
                    var a = e.getFieldElements(i.creditCardField).val();
                    if ("" === a) return !0;
                    a = a.replace(/\D/g, "");
                    var s,
                        o,
                        l = {
                            AMERICAN_EXPRESS: {
                                length: [15],
                                prefix: ["34", "37"],
                            },
                            DINERS_CLUB: {
                                length: [14],
                                prefix: [
                                    "300",
                                    "301",
                                    "302",
                                    "303",
                                    "304",
                                    "305",
                                    "36",
                                ],
                            },
                            DINERS_CLUB_US: {
                                length: [16],
                                prefix: ["54", "55"],
                            },
                            DISCOVER: {
                                length: [16],
                                prefix: [
                                    "6011",
                                    "622126",
                                    "622127",
                                    "622128",
                                    "622129",
                                    "62213",
                                    "62214",
                                    "62215",
                                    "62216",
                                    "62217",
                                    "62218",
                                    "62219",
                                    "6222",
                                    "6223",
                                    "6224",
                                    "6225",
                                    "6226",
                                    "6227",
                                    "6228",
                                    "62290",
                                    "62291",
                                    "622920",
                                    "622921",
                                    "622922",
                                    "622923",
                                    "622924",
                                    "622925",
                                    "644",
                                    "645",
                                    "646",
                                    "647",
                                    "648",
                                    "649",
                                    "65",
                                ],
                            },
                            JCB: {
                                length: [16],
                                prefix: [
                                    "3528",
                                    "3529",
                                    "353",
                                    "354",
                                    "355",
                                    "356",
                                    "357",
                                    "358",
                                ],
                            },
                            LASER: {
                                length: [16, 17, 18, 19],
                                prefix: ["6304", "6706", "6771", "6709"],
                            },
                            MAESTRO: {
                                length: [12, 13, 14, 15, 16, 17, 18, 19],
                                prefix: [
                                    "5018",
                                    "5020",
                                    "5038",
                                    "6304",
                                    "6759",
                                    "6761",
                                    "6762",
                                    "6763",
                                    "6764",
                                    "6765",
                                    "6766",
                                ],
                            },
                            MASTERCARD: {
                                length: [16],
                                prefix: ["51", "52", "53", "54", "55"],
                            },
                            SOLO: {
                                length: [16, 18, 19],
                                prefix: ["6334", "6767"],
                            },
                            UNIONPAY: {
                                length: [16, 17, 18, 19],
                                prefix: [
                                    "622126",
                                    "622127",
                                    "622128",
                                    "622129",
                                    "62213",
                                    "62214",
                                    "62215",
                                    "62216",
                                    "62217",
                                    "62218",
                                    "62219",
                                    "6222",
                                    "6223",
                                    "6224",
                                    "6225",
                                    "6226",
                                    "6227",
                                    "6228",
                                    "62290",
                                    "62291",
                                    "622920",
                                    "622921",
                                    "622922",
                                    "622923",
                                    "622924",
                                    "622925",
                                ],
                            },
                            VISA: { length: [16], prefix: ["4"] },
                        },
                        u = null;
                    for (s in l)
                        for (o in l[s].prefix)
                            if (
                                a.substr(0, l[s].prefix[o].length) ===
                                    l[s].prefix[o] &&
                                -1 !== t.inArray(a.length, l[s].length)
                            ) {
                                u = s;
                                break;
                            }
                    return (
                        null !== u &&
                        ("AMERICAN_EXPRESS" === u
                            ? 4 === r.length
                            : 3 === r.length)
                    );
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.date = t.extend(
            t.fn.bootstrapValidator.i18n.date || {},
            { default: "Please enter a valid date" }
        )),
            (t.fn.bootstrapValidator.validators.date = {
                html5Attributes: {
                    message: "message",
                    format: "format",
                    separator: "separator",
                },
                validate: function (e, n, i) {
                    var r = n.val();
                    if ("" === r) return !0;
                    i.format = i.format || "MM/DD/YYYY";
                    var a = i.format.split(" "),
                        s = a[0],
                        o = a.length > 1 ? a[1] : null,
                        l = a.length > 2 ? a[2] : null,
                        u = r.split(" "),
                        d = u[0],
                        c = u.length > 1 ? u[1] : null;
                    if (a.length !== u.length) return !1;
                    var f = i.separator;
                    if (
                        (f ||
                            (f =
                                -1 !== d.indexOf("/")
                                    ? "/"
                                    : -1 !== d.indexOf("-")
                                    ? "-"
                                    : null),
                        null === f || -1 === d.indexOf(f))
                    )
                        return !1;
                    if (
                        ((d = d.split(f)),
                        (s = s.split(f)),
                        d.length !== s.length)
                    )
                        return !1;
                    var h = d[t.inArray("YYYY", s)],
                        p = d[t.inArray("MM", s)],
                        m = d[t.inArray("DD", s)];
                    if (!h || !p || !m) return !1;
                    var v = null,
                        g = null,
                        b = null;
                    if (o) {
                        if (
                            ((o = o.split(":")),
                            (c = c.split(":")),
                            o.length !== c.length)
                        )
                            return !1;
                        if (
                            ((g = c.length > 0 ? c[0] : null),
                            (v = c.length > 1 ? c[1] : null),
                            (b = c.length > 2 ? c[2] : null) &&
                                ((b = parseInt(b, 10)),
                                isNaN(b) || 0 > b || b > 60))
                        )
                            return !1;
                        if (
                            g &&
                            ((g = parseInt(g, 10)),
                            isNaN(g) || 0 > g || g >= 24 || (l && g > 12))
                        )
                            return !1;
                        if (
                            v &&
                            ((v = parseInt(v, 10)), isNaN(v) || 0 > v || v > 59)
                        )
                            return !1;
                    }
                    return t.fn.bootstrapValidator.helpers.date(h, p, m);
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.different = t.extend(
            t.fn.bootstrapValidator.i18n.different || {},
            { default: "Please enter a different value" }
        )),
            (t.fn.bootstrapValidator.validators.different = {
                html5Attributes: { message: "message", field: "field" },
                validate: function (t, e, n) {
                    var i = e.val();
                    if ("" === i) return !0;
                    var r = t.getFieldElements(n.field);
                    return (
                        null === r ||
                        (i !== r.val() &&
                            (t.updateStatus(
                                n.field,
                                t.STATUS_VALID,
                                "different"
                            ),
                            !0))
                    );
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.digits = t.extend(
            t.fn.bootstrapValidator.i18n.digits || {},
            { default: "Please enter only digits" }
        )),
            (t.fn.bootstrapValidator.validators.digits = {
                validate: function (t, e) {
                    var n = e.val();
                    return "" === n || /^\d+$/.test(n);
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.ean = t.extend(
            t.fn.bootstrapValidator.i18n.ean || {},
            { default: "Please enter a valid EAN number" }
        )),
            (t.fn.bootstrapValidator.validators.ean = {
                validate: function (t, e) {
                    var n = e.val();
                    if ("" === n) return !0;
                    if (!/^(\d{8}|\d{12}|\d{13})$/.test(n)) return !1;
                    for (
                        var i = n.length,
                            r = 0,
                            a = 8 === i ? [3, 1] : [1, 3],
                            s = 0;
                        i - 1 > s;
                        s++
                    )
                        r += parseInt(n.charAt(s), 10) * a[s % 2];
                    return (r = (10 - (r % 10)) % 10) + "" === n.charAt(i - 1);
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.emailAddress = t.extend(
            t.fn.bootstrapValidator.i18n.emailAddress || {},
            { default: "Please enter a valid email address" }
        )),
            (t.fn.bootstrapValidator.validators.emailAddress = {
                enableByHtml5: function (t) {
                    return "email" === t.attr("type");
                },
                validate: function (t, e) {
                    var n = e.val();
                    if ("" === n) return !0;
                    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                        n
                    );
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.file = t.extend(
            t.fn.bootstrapValidator.i18n.file || {},
            { default: "Please choose a valid file" }
        )),
            (t.fn.bootstrapValidator.validators.file = {
                html5Attributes: {
                    extension: "extension",
                    maxsize: "maxSize",
                    message: "message",
                    type: "type",
                },
                validate: function (e, n, i) {
                    var r = n.val();
                    if ("" === r) return !0;
                    var a,
                        s = i.extension
                            ? i.extension.toLowerCase().split(",")
                            : null,
                        o = i.type ? i.type.toLowerCase().split(",") : null;
                    if (window.File && window.FileList && window.FileReader)
                        for (
                            var l = n.get(0).files, u = l.length, d = 0;
                            u > d;
                            d++
                        ) {
                            if (
                                i.maxSize &&
                                l[d].size > parseInt(i.maxSize, 10)
                            )
                                return !1;
                            if (
                                ((a = l[d].name.substr(
                                    l[d].name.lastIndexOf(".") + 1
                                )),
                                s && -1 === t.inArray(a.toLowerCase(), s))
                            )
                                return !1;
                            if (
                                o &&
                                -1 === t.inArray(l[d].type.toLowerCase(), o)
                            )
                                return !1;
                        }
                    else if (
                        ((a = r.substr(r.lastIndexOf(".") + 1)),
                        s && -1 === t.inArray(a.toLowerCase(), s))
                    )
                        return !1;
                    return !0;
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.greaterThan = t.extend(
            t.fn.bootstrapValidator.i18n.greaterThan || {},
            {
                default: "Please enter a value greater than or equal to %s",
                notInclusive: "Please enter a value greater than %s",
            }
        )),
            (t.fn.bootstrapValidator.validators.greaterThan = {
                html5Attributes: {
                    message: "message",
                    value: "value",
                    inclusive: "inclusive",
                },
                enableByHtml5: function (t) {
                    var e = t.attr("min");
                    return !!e && { value: e };
                },
                validate: function (e, n, i) {
                    var r = n.val();
                    if ("" === r) return !0;
                    var a = t.isNumeric(i.value)
                        ? i.value
                        : e.getDynamicOption(n, i.value);
                    return (
                        (r = parseFloat(r)),
                        !0 === i.inclusive || void 0 === i.inclusive
                            ? {
                                  valid: r >= a,
                                  message:
                                      t.fn.bootstrapValidator.helpers.format(
                                          i.message ||
                                              t.fn.bootstrapValidator.i18n
                                                  .greaterThan.default,
                                          a
                                      ),
                              }
                            : {
                                  valid: r > a,
                                  message:
                                      t.fn.bootstrapValidator.helpers.format(
                                          i.message ||
                                              t.fn.bootstrapValidator.i18n
                                                  .greaterThan.notInclusive,
                                          a
                                      ),
                              }
                    );
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.grid = t.extend(
            t.fn.bootstrapValidator.i18n.grid || {},
            { default: "Please enter a valid GRId number" }
        )),
            (t.fn.bootstrapValidator.validators.grid = {
                validate: function (e, n) {
                    var i = n.val();
                    return (
                        "" === i ||
                        ((i = i.toUpperCase()),
                        !!/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(
                            i
                        ) &&
                            ("GRID:" ===
                                (i = i
                                    .replace(/\s/g, "")
                                    .replace(/-/g, "")).substr(0, 5) &&
                                (i = i.substr(5)),
                            t.fn.bootstrapValidator.helpers.mod37And36(i)))
                    );
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.hex = t.extend(
            t.fn.bootstrapValidator.i18n.hex || {},
            { default: "Please enter a valid hexadecimal number" }
        )),
            (t.fn.bootstrapValidator.validators.hex = {
                validate: function (t, e) {
                    var n = e.val();
                    return "" === n || /^[0-9a-fA-F]+$/.test(n);
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.hexColor = t.extend(
            t.fn.bootstrapValidator.i18n.hexColor || {},
            { default: "Please enter a valid hex color" }
        )),
            (t.fn.bootstrapValidator.validators.hexColor = {
                enableByHtml5: function (t) {
                    return "color" === t.attr("type");
                },
                validate: function (t, e) {
                    var n = e.val();
                    return (
                        "" === n || /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)
                    );
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.iban = t.extend(
            t.fn.bootstrapValidator.i18n.iban || {},
            {
                default: "Please enter a valid IBAN number",
                countryNotSupported: "The country code %s is not supported",
                country: "Please enter a valid IBAN number in %s",
                countries: {
                    AD: "Andorra",
                    AE: "United Arab Emirates",
                    AL: "Albania",
                    AO: "Angola",
                    AT: "Austria",
                    AZ: "Azerbaijan",
                    BA: "Bosnia and Herzegovina",
                    BE: "Belgium",
                    BF: "Burkina Faso",
                    BG: "Bulgaria",
                    BH: "Bahrain",
                    BI: "Burundi",
                    BJ: "Benin",
                    BR: "Brazil",
                    CH: "Switzerland",
                    CI: "Ivory Coast",
                    CM: "Cameroon",
                    CR: "Costa Rica",
                    CV: "Cape Verde",
                    CY: "Cyprus",
                    CZ: "Czech Republic",
                    DE: "Germany",
                    DK: "Denmark",
                    DO: "Dominican Republic",
                    DZ: "Algeria",
                    EE: "Estonia",
                    ES: "Spain",
                    FI: "Finland",
                    FO: "Faroe Islands",
                    FR: "France",
                    GB: "United Kingdom",
                    GE: "Georgia",
                    GI: "Gibraltar",
                    GL: "Greenland",
                    GR: "Greece",
                    GT: "Guatemala",
                    HR: "Croatia",
                    HU: "Hungary",
                    IE: "Ireland",
                    IL: "Israel",
                    IR: "Iran",
                    IS: "Iceland",
                    IT: "Italy",
                    JO: "Jordan",
                    KW: "Kuwait",
                    KZ: "Kazakhstan",
                    LB: "Lebanon",
                    LI: "Liechtenstein",
                    LT: "Lithuania",
                    LU: "Luxembourg",
                    LV: "Latvia",
                    MC: "Monaco",
                    MD: "Moldova",
                    ME: "Montenegro",
                    MG: "Madagascar",
                    MK: "Macedonia",
                    ML: "Mali",
                    MR: "Mauritania",
                    MT: "Malta",
                    MU: "Mauritius",
                    MZ: "Mozambique",
                    NL: "Netherlands",
                    NO: "Norway",
                    PK: "Pakistan",
                    PL: "Poland",
                    PS: "Palestinian",
                    PT: "Portugal",
                    QA: "Qatar",
                    RO: "Romania",
                    RS: "Serbia",
                    SA: "Saudi Arabia",
                    SE: "Sweden",
                    SI: "Slovenia",
                    SK: "Slovakia",
                    SM: "San Marino",
                    SN: "Senegal",
                    TN: "Tunisia",
                    TR: "Turkey",
                    VG: "Virgin Islands, British",
                },
            }
        )),
            (t.fn.bootstrapValidator.validators.iban = {
                html5Attributes: { message: "message", country: "country" },
                REGEX: {
                    AD: "AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}",
                    AE: "AE[0-9]{2}[0-9]{3}[0-9]{16}",
                    AL: "AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}",
                    AO: "AO[0-9]{2}[0-9]{21}",
                    AT: "AT[0-9]{2}[0-9]{5}[0-9]{11}",
                    AZ: "AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}",
                    BA: "BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}",
                    BE: "BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}",
                    BF: "BF[0-9]{2}[0-9]{23}",
                    BG: "BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}",
                    BH: "BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}",
                    BI: "BI[0-9]{2}[0-9]{12}",
                    BJ: "BJ[0-9]{2}[A-Z]{1}[0-9]{23}",
                    BR: "BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]",
                    CH: "CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}",
                    CI: "CI[0-9]{2}[A-Z]{1}[0-9]{23}",
                    CM: "CM[0-9]{2}[0-9]{23}",
                    CR: "CR[0-9]{2}[0-9]{3}[0-9]{14}",
                    CV: "CV[0-9]{2}[0-9]{21}",
                    CY: "CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}",
                    CZ: "CZ[0-9]{2}[0-9]{20}",
                    DE: "DE[0-9]{2}[0-9]{8}[0-9]{10}",
                    DK: "DK[0-9]{2}[0-9]{14}",
                    DO: "DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}",
                    DZ: "DZ[0-9]{2}[0-9]{20}",
                    EE: "EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}",
                    ES: "ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}",
                    FI: "FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}",
                    FO: "FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",
                    FR: "FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",
                    GB: "GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",
                    GE: "GE[0-9]{2}[A-Z]{2}[0-9]{16}",
                    GI: "GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}",
                    GL: "GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",
                    GR: "GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}",
                    GT: "GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}",
                    HR: "HR[0-9]{2}[0-9]{7}[0-9]{10}",
                    HU: "HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}",
                    IE: "IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",
                    IL: "IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}",
                    IR: "IR[0-9]{2}[0-9]{22}",
                    IS: "IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}",
                    IT: "IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",
                    JO: "JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}",
                    KW: "KW[0-9]{2}[A-Z]{4}[0-9]{22}",
                    KZ: "KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}",
                    LB: "LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}",
                    LI: "LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}",
                    LT: "LT[0-9]{2}[0-9]{5}[0-9]{11}",
                    LU: "LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}",
                    LV: "LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}",
                    MC: "MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",
                    MD: "MD[0-9]{2}[A-Z0-9]{20}",
                    ME: "ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
                    MG: "MG[0-9]{2}[0-9]{23}",
                    MK: "MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}",
                    ML: "ML[0-9]{2}[A-Z]{1}[0-9]{23}",
                    MR: "MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}",
                    MT: "MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}",
                    MU: "MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}",
                    MZ: "MZ[0-9]{2}[0-9]{21}",
                    NL: "NL[0-9]{2}[A-Z]{4}[0-9]{10}",
                    NO: "NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}",
                    PK: "PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",
                    PL: "PL[0-9]{2}[0-9]{8}[0-9]{16}",
                    PS: "PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",
                    PT: "PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}",
                    QA: "QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",
                    RO: "RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",
                    RS: "RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
                    SA: "SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}",
                    SE: "SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}",
                    SI: "SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}",
                    SK: "SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}",
                    SM: "SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",
                    SN: "SN[0-9]{2}[A-Z]{1}[0-9]{23}",
                    TN: "TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
                    TR: "TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}",
                    VG: "VG[0-9]{2}[A-Z]{4}[0-9]{16}",
                },
                validate: function (e, n, i) {
                    var r = n.val();
                    if ("" === r) return !0;
                    r = r.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
                    var a = i.country;
                    if (
                        (a
                            ? ("string" == typeof a && this.REGEX[a]) ||
                              (a = e.getDynamicOption(n, a))
                            : (a = r.substr(0, 2)),
                        !this.REGEX[a])
                    )
                        return {
                            valid: !1,
                            message: t.fn.bootstrapValidator.helpers.format(
                                t.fn.bootstrapValidator.i18n.iban
                                    .countryNotSupported,
                                a
                            ),
                        };
                    if (!new RegExp("^" + this.REGEX[a] + "$").test(r))
                        return {
                            valid: !1,
                            message: t.fn.bootstrapValidator.helpers.format(
                                i.message ||
                                    t.fn.bootstrapValidator.i18n.iban.country,
                                t.fn.bootstrapValidator.i18n.iban.countries[a]
                            ),
                        };
                    (r = r.substr(4) + r.substr(0, 4)),
                        (r = t.map(r.split(""), function (t) {
                            var e = t.charCodeAt(0);
                            return e >= "A".charCodeAt(0) &&
                                e <= "Z".charCodeAt(0)
                                ? e - "A".charCodeAt(0) + 10
                                : t;
                        })),
                        (r = r.join(""));
                    for (
                        var s = parseInt(r.substr(0, 1), 10),
                            o = r.length,
                            l = 1;
                        o > l;
                        ++l
                    )
                        s = (10 * s + parseInt(r.substr(l, 1), 10)) % 97;
                    return {
                        valid: 1 === s,
                        message: t.fn.bootstrapValidator.helpers.format(
                            i.message ||
                                t.fn.bootstrapValidator.i18n.iban.country,
                            t.fn.bootstrapValidator.i18n.iban.countries[a]
                        ),
                    };
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.id = t.extend(
            t.fn.bootstrapValidator.i18n.id || {},
            {
                default: "Please enter a valid identification number",
                countryNotSupported: "The country code %s is not supported",
                country: "Please enter a valid %s identification number",
                countries: {
                    BA: "Bosnia and Herzegovina",
                    BG: "Bulgarian",
                    BR: "Brazilian",
                    CH: "Swiss",
                    CL: "Chilean",
                    CZ: "Czech",
                    DK: "Danish",
                    EE: "Estonian",
                    ES: "Spanish",
                    FI: "Finnish",
                    HR: "Croatian",
                    IE: "Irish",
                    IS: "Iceland",
                    LT: "Lithuanian",
                    LV: "Latvian",
                    ME: "Montenegro",
                    MK: "Macedonian",
                    NL: "Dutch",
                    RO: "Romanian",
                    RS: "Serbian",
                    SE: "Swedish",
                    SI: "Slovenian",
                    SK: "Slovak",
                    SM: "San Marino",
                    ZA: "South African",
                },
            }
        )),
            (t.fn.bootstrapValidator.validators.id = {
                html5Attributes: { message: "message", country: "country" },
                COUNTRY_CODES: [
                    "BA",
                    "BG",
                    "BR",
                    "CH",
                    "CL",
                    "CZ",
                    "DK",
                    "EE",
                    "ES",
                    "FI",
                    "HR",
                    "IE",
                    "IS",
                    "LT",
                    "LV",
                    "ME",
                    "MK",
                    "NL",
                    "RO",
                    "RS",
                    "SE",
                    "SI",
                    "SK",
                    "SM",
                    "ZA",
                ],
                validate: function (e, n, i) {
                    var r = n.val();
                    if ("" === r) return !0;
                    var a = i.country;
                    return (
                        a
                            ? ("string" != typeof a ||
                                  -1 ===
                                      t.inArray(
                                          a.toUpperCase(),
                                          this.COUNTRY_CODES
                                      )) &&
                              (a = e.getDynamicOption(n, a))
                            : (a = r.substr(0, 2)),
                        -1 === t.inArray(a, this.COUNTRY_CODES)
                            ? {
                                  valid: !1,
                                  message:
                                      t.fn.bootstrapValidator.helpers.format(
                                          t.fn.bootstrapValidator.i18n.id
                                              .countryNotSupported,
                                          a
                                      ),
                              }
                            : !!this[["_", a.toLowerCase()].join("")](r) || {
                                  valid: !1,
                                  message:
                                      t.fn.bootstrapValidator.helpers.format(
                                          i.message ||
                                              t.fn.bootstrapValidator.i18n.id
                                                  .country,
                                          t.fn.bootstrapValidator.i18n.id
                                              .countries[a.toUpperCase()]
                                      ),
                              }
                    );
                },
                _validateJMBG: function (t, e) {
                    if (!/^\d{13}$/.test(t)) return !1;
                    var n = parseInt(t.substr(0, 2), 10),
                        i = parseInt(t.substr(2, 2), 10),
                        r =
                            (parseInt(t.substr(4, 3), 10),
                            parseInt(t.substr(7, 2), 10)),
                        a = parseInt(t.substr(12, 1), 10);
                    if (n > 31 || i > 12) return !1;
                    for (var s = 0, o = 0; 6 > o; o++)
                        s +=
                            (7 - o) *
                            (parseInt(t.charAt(o), 10) +
                                parseInt(t.charAt(o + 6), 10));
                    if (
                        ((10 === (s = 11 - (s % 11)) || 11 === s) && (s = 0),
                        s !== a)
                    )
                        return !1;
                    switch (e.toUpperCase()) {
                        case "BA":
                            return r >= 10 && 19 >= r;
                        case "MK":
                            return r >= 41 && 49 >= r;
                        case "ME":
                            return r >= 20 && 29 >= r;
                        case "RS":
                            return r >= 70 && 99 >= r;
                        case "SI":
                            return r >= 50 && 59 >= r;
                        default:
                            return !0;
                    }
                },
                _ba: function (t) {
                    return this._validateJMBG(t, "BA");
                },
                _mk: function (t) {
                    return this._validateJMBG(t, "MK");
                },
                _me: function (t) {
                    return this._validateJMBG(t, "ME");
                },
                _rs: function (t) {
                    return this._validateJMBG(t, "RS");
                },
                _si: function (t) {
                    return this._validateJMBG(t, "SI");
                },
                _bg: function (e) {
                    if (!/^\d{10}$/.test(e) && !/^\d{6}\s\d{3}\s\d{1}$/.test(e))
                        return !1;
                    e = e.replace(/\s/g, "");
                    var n = parseInt(e.substr(0, 2), 10) + 1900,
                        i = parseInt(e.substr(2, 2), 10),
                        r = parseInt(e.substr(4, 2), 10);
                    if (
                        (i > 40
                            ? ((n += 100), (i -= 40))
                            : i > 20 && ((n -= 100), (i -= 20)),
                        !t.fn.bootstrapValidator.helpers.date(n, i, r))
                    )
                        return !1;
                    for (
                        var a = 0, s = [2, 4, 8, 5, 10, 9, 7, 3, 6], o = 0;
                        9 > o;
                        o++
                    )
                        a += parseInt(e.charAt(o), 10) * s[o];
                    return (a = (a % 11) % 10) + "" === e.substr(9, 1);
                },
                _br: function (t) {
                    if (
                        /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(
                            t
                        )
                    )
                        return !1;
                    if (
                        !/^\d{11}$/.test(t) &&
                        !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(t)
                    )
                        return !1;
                    t = t.replace(/\./g, "").replace(/-/g, "");
                    for (var e = 0, n = 0; 9 > n; n++)
                        e += (10 - n) * parseInt(t.charAt(n), 10);
                    if (
                        ((10 === (e = 11 - (e % 11)) || 11 === e) && (e = 0),
                        e + "" !== t.charAt(9))
                    )
                        return !1;
                    var i = 0;
                    for (n = 0; 10 > n; n++)
                        i += (11 - n) * parseInt(t.charAt(n), 10);
                    return (
                        (10 === (i = 11 - (i % 11)) || 11 === i) && (i = 0),
                        i + "" === t.charAt(10)
                    );
                },
                _ch: function (t) {
                    if (
                        !/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(
                            t
                        )
                    )
                        return !1;
                    for (
                        var e = (t = t.replace(/\D/g, "").substr(3)).length,
                            n = 0,
                            i = 8 === e ? [3, 1] : [1, 3],
                            r = 0;
                        e - 1 > r;
                        r++
                    )
                        n += parseInt(t.charAt(r), 10) * i[r % 2];
                    return (n = 10 - (n % 10)) + "" === t.charAt(e - 1);
                },
                _cl: function (t) {
                    if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(t)) return !1;
                    for (t = t.replace(/\-/g, ""); t.length < 9; ) t = "0" + t;
                    for (
                        var e = 0, n = [3, 2, 7, 6, 5, 4, 3, 2], i = 0;
                        8 > i;
                        i++
                    )
                        e += parseInt(t.charAt(i), 10) * n[i];
                    return (
                        11 === (e = 11 - (e % 11))
                            ? (e = 0)
                            : 10 === e && (e = "K"),
                        e + "" === t.charAt(8).toUpperCase()
                    );
                },
                _cz: function (e) {
                    if (!/^\d{9,10}$/.test(e)) return !1;
                    var n = 1900 + parseInt(e.substr(0, 2), 10),
                        i = (parseInt(e.substr(2, 2), 10) % 50) % 20,
                        r = parseInt(e.substr(4, 2), 10);
                    if (9 === e.length) {
                        if ((n >= 1980 && (n -= 100), n > 1953)) return !1;
                    } else 1954 > n && (n += 100);
                    if (!t.fn.bootstrapValidator.helpers.date(n, i, r))
                        return !1;
                    if (10 === e.length) {
                        var a = parseInt(e.substr(0, 9), 10) % 11;
                        return 1985 > n && (a %= 10), a + "" === e.substr(9, 1);
                    }
                    return !0;
                },
                _dk: function (e) {
                    if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(e)) return !1;
                    e = e.replace(/-/g, "");
                    var n = parseInt(e.substr(0, 2), 10),
                        i = parseInt(e.substr(2, 2), 10),
                        r = parseInt(e.substr(4, 2), 10);
                    switch (!0) {
                        case -1 !== "5678".indexOf(e.charAt(6)) && r >= 58:
                            r += 1800;
                            break;
                        case -1 !== "0123".indexOf(e.charAt(6)):
                        case -1 !== "49".indexOf(e.charAt(6)) && r >= 37:
                            r += 1900;
                            break;
                        default:
                            r += 2e3;
                    }
                    return t.fn.bootstrapValidator.helpers.date(r, i, n);
                },
                _ee: function (t) {
                    return this._lt(t);
                },
                _es: function (t) {
                    if (
                        !/^[0-9A-Z]{8}[-]{0,1}[0-9A-Z]$/.test(t) &&
                        !/^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-Z]$/.test(t)
                    )
                        return !1;
                    t = t.replace(/-/g, "");
                    var e = "XYZ".indexOf(t.charAt(0));
                    -1 !== e && (t = e + t.substr(1) + "");
                    var n = parseInt(t.substr(0, 8), 10);
                    return (
                        (n = "TRWAGMYFPDXBNJZSQVHLCKE"[n % 23]) ===
                        t.substr(8, 1)
                    );
                },
                _fi: function (e) {
                    if (
                        !/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(
                            e
                        )
                    )
                        return !1;
                    var n = parseInt(e.substr(0, 2), 10),
                        i = parseInt(e.substr(2, 2), 10),
                        r = parseInt(e.substr(4, 2), 10);
                    if (
                        ((r =
                            { "+": 1800, "-": 1900, A: 2e3 }[e.charAt(6)] + r),
                        !t.fn.bootstrapValidator.helpers.date(r, i, n))
                    )
                        return !1;
                    if (2 > parseInt(e.substr(7, 3), 10)) return !1;
                    var a = e.substr(0, 6) + e.substr(7, 3) + "";
                    return (
                        (a = parseInt(a, 10)),
                        "0123456789ABCDEFHJKLMNPRSTUVWXY".charAt(a % 31) ===
                            e.charAt(10)
                    );
                },
                _hr: function (e) {
                    return (
                        !!/^[0-9]{11}$/.test(e) &&
                        t.fn.bootstrapValidator.helpers.mod11And10(e)
                    );
                },
                _ie: function (t) {
                    if (!/^\d{7}[A-W][AHWTX]?$/.test(t)) return !1;
                    var e = function (t) {
                        for (; t.length < 7; ) t = "0" + t;
                        for (
                            var e = "WABCDEFGHIJKLMNOPQRSTUV", n = 0, i = 0;
                            7 > i;
                            i++
                        )
                            n += parseInt(t.charAt(i), 10) * (8 - i);
                        return (n += 9 * e.indexOf(t.substr(7))), e[n % 23];
                    };
                    return 9 !== t.length ||
                        ("A" !== t.charAt(8) && "H" !== t.charAt(8))
                        ? t.charAt(7) === e(t.substr(0, 7))
                        : t.charAt(7) === e(t.substr(0, 7) + t.substr(8) + "");
                },
                _is: function (e) {
                    if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(e)) return !1;
                    e = e.replace(/-/g, "");
                    var n = parseInt(e.substr(0, 2), 10),
                        i = parseInt(e.substr(2, 2), 10),
                        r = parseInt(e.substr(4, 2), 10),
                        a = parseInt(e.charAt(9), 10);
                    if (
                        ((r = 9 === a ? 1900 + r : 100 * (20 + a) + r),
                        !t.fn.bootstrapValidator.helpers.date(r, i, n, !0))
                    )
                        return !1;
                    for (
                        var s = 0, o = [3, 2, 7, 6, 5, 4, 3, 2], l = 0;
                        8 > l;
                        l++
                    )
                        s += parseInt(e.charAt(l), 10) * o[l];
                    return (s = 11 - (s % 11)) + "" === e.charAt(8);
                },
                _lt: function (e) {
                    if (!/^[0-9]{11}$/.test(e)) return !1;
                    var n = parseInt(e.charAt(0), 10),
                        i = parseInt(e.substr(1, 2), 10),
                        r = parseInt(e.substr(3, 2), 10),
                        a = parseInt(e.substr(5, 2), 10);
                    if (
                        ((i =
                            100 * (n % 2 == 0 ? 17 + n / 2 : 17 + (n + 1) / 2) +
                            i),
                        !t.fn.bootstrapValidator.helpers.date(i, r, a, !0))
                    )
                        return !1;
                    for (
                        var s = 0, o = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1], l = 0;
                        10 > l;
                        l++
                    )
                        s += parseInt(e.charAt(l), 10) * o[l];
                    if (10 !== (s %= 11)) return s + "" === e.charAt(10);
                    for (
                        s = 0, o = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3], l = 0;
                        10 > l;
                        l++
                    )
                        s += parseInt(e.charAt(l), 10) * o[l];
                    return 10 === (s %= 11) && (s = 0), s + "" === e.charAt(10);
                },
                _lv: function (e) {
                    if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(e)) return !1;
                    e = e.replace(/\D/g, "");
                    var n = parseInt(e.substr(0, 2), 10),
                        i = parseInt(e.substr(2, 2), 10),
                        r = parseInt(e.substr(4, 2), 10);
                    if (
                        ((r = r + 1800 + 100 * parseInt(e.charAt(6), 10)),
                        !t.fn.bootstrapValidator.helpers.date(r, i, n, !0))
                    )
                        return !1;
                    for (
                        var a = 0, s = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], o = 0;
                        10 > o;
                        o++
                    )
                        a += parseInt(e.charAt(o), 10) * s[o];
                    return (a = ((a + 1) % 11) % 10) + "" === e.charAt(10);
                },
                _nl: function (t) {
                    for (; t.length < 9; ) t = "0" + t;
                    if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(t))
                        return !1;
                    if (((t = t.replace(/\./g, "")), 0 === parseInt(t, 10)))
                        return !1;
                    for (var e = 0, n = t.length, i = 0; n - 1 > i; i++)
                        e += (9 - i) * parseInt(t.charAt(i), 10);
                    return (
                        10 === (e %= 11) && (e = 0), e + "" === t.charAt(n - 1)
                    );
                },
                _ro: function (e) {
                    if (!/^[0-9]{13}$/.test(e)) return !1;
                    var n = parseInt(e.charAt(0), 10);
                    if (0 === n || 7 === n || 8 === n) return !1;
                    var i = parseInt(e.substr(1, 2), 10),
                        r = parseInt(e.substr(3, 2), 10),
                        a = parseInt(e.substr(5, 2), 10);
                    if (a > 31 && r > 12) return !1;
                    if (
                        9 !== n &&
                        ((i =
                            {
                                1: 1900,
                                2: 1900,
                                3: 1800,
                                4: 1800,
                                5: 2e3,
                                6: 2e3,
                            }[n + ""] + i),
                        !t.fn.bootstrapValidator.helpers.date(i, r, a))
                    )
                        return !1;
                    for (
                        var s = 0,
                            o = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9],
                            l = e.length,
                            u = 0;
                        l - 1 > u;
                        u++
                    )
                        s += parseInt(e.charAt(u), 10) * o[u];
                    return (
                        10 === (s %= 11) && (s = 1), s + "" === e.charAt(l - 1)
                    );
                },
                _se: function (e) {
                    if (
                        !/^[0-9]{10}$/.test(e) &&
                        !/^[0-9]{6}[-|+][0-9]{4}$/.test(e)
                    )
                        return !1;
                    e = e.replace(/[^0-9]/g, "");
                    var n = parseInt(e.substr(0, 2), 10) + 1900,
                        i = parseInt(e.substr(2, 2), 10),
                        r = parseInt(e.substr(4, 2), 10);
                    return (
                        !!t.fn.bootstrapValidator.helpers.date(n, i, r) &&
                        t.fn.bootstrapValidator.helpers.luhn(e)
                    );
                },
                _sk: function (t) {
                    return this._cz(t);
                },
                _sm: function (t) {
                    return /^\d{5}$/.test(t);
                },
                _za: function (e) {
                    if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(e)) return !1;
                    var n = parseInt(e.substr(0, 2), 10),
                        i = new Date().getFullYear() % 100,
                        r = parseInt(e.substr(2, 2), 10),
                        a = parseInt(e.substr(4, 2), 10);
                    return (
                        (n = n >= i ? n + 1900 : n + 2e3),
                        !!t.fn.bootstrapValidator.helpers.date(n, r, a) &&
                            t.fn.bootstrapValidator.helpers.luhn(e)
                    );
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.identical = t.extend(
            t.fn.bootstrapValidator.i18n.identical || {},
            { default: "Please enter the same value" }
        )),
            (t.fn.bootstrapValidator.validators.identical = {
                html5Attributes: { message: "message", field: "field" },
                validate: function (t, e, n) {
                    var i = e.val();
                    if ("" === i) return !0;
                    var r = t.getFieldElements(n.field);
                    return (
                        null === r ||
                        (i === r.val() &&
                            (t.updateStatus(
                                n.field,
                                t.STATUS_VALID,
                                "identical"
                            ),
                            !0))
                    );
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.imei = t.extend(
            t.fn.bootstrapValidator.i18n.imei || {},
            { default: "Please enter a valid IMEI number" }
        )),
            (t.fn.bootstrapValidator.validators.imei = {
                validate: function (e, n) {
                    var i = n.val();
                    if ("" === i) return !0;
                    switch (!0) {
                        case /^\d{15}$/.test(i):
                        case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(i):
                        case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(i):
                            return (
                                (i = i.replace(/[^0-9]/g, "")),
                                t.fn.bootstrapValidator.helpers.luhn(i)
                            );
                        case /^\d{14}$/.test(i):
                        case /^\d{16}$/.test(i):
                        case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(i):
                        case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(i):
                            return !0;
                        default:
                            return !1;
                    }
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.integer = t.extend(
            t.fn.bootstrapValidator.i18n.integer || {},
            { default: "Please enter a valid number" }
        )),
            (t.fn.bootstrapValidator.validators.integer = {
                enableByHtml5: function (t) {
                    return (
                        "number" === t.attr("type") &&
                        (void 0 === t.attr("step") || t.attr("step") % 1 == 0)
                    );
                },
                validate: function (t, e) {
                    var n = e.val();
                    return "" === n || /^(?:-?(?:0|[1-9][0-9]*))$/.test(n);
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.ip = t.extend(
            t.fn.bootstrapValidator.i18n.ip || {},
            {
                default: "Please enter a valid IP address",
                ipv4: "Please enter a valid IPv4 address",
                ipv6: "Please enter a valid IPv6 address",
            }
        )),
            (t.fn.bootstrapValidator.validators.ip = {
                html5Attributes: {
                    message: "message",
                    ipv4: "ipv4",
                    ipv6: "ipv6",
                },
                validate: function (e, n, i) {
                    var r = n.val();
                    return (
                        "" === r ||
                        ((i = t.extend({}, { ipv4: !0, ipv6: !0 }, i)).ipv4
                            ? {
                                  valid: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
                                      r
                                  ),
                                  message:
                                      i.message ||
                                      t.fn.bootstrapValidator.i18n.ip.ipv4,
                              }
                            : !!i.ipv6 && {
                                  valid: /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(
                                      r
                                  ),
                                  message:
                                      i.message ||
                                      t.fn.bootstrapValidator.i18n.ip.ipv6,
                              })
                    );
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.isbn = t.extend(
            t.fn.bootstrapValidator.i18n.isbn || {},
            { default: "Please enter a valid ISBN number" }
        )),
            (t.fn.bootstrapValidator.validators.isbn = {
                validate: function (t, e) {
                    var n,
                        i = e.val();
                    if ("" === i) return !0;
                    switch (!0) {
                        case /^\d{9}[\dX]$/.test(i):
                        case 13 === i.length &&
                            /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(i):
                        case 13 === i.length &&
                            /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(i):
                            n = "ISBN10";
                            break;
                        case /^(978|979)\d{9}[\dX]$/.test(i):
                        case 17 === i.length &&
                            /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(i):
                        case 17 === i.length &&
                            /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(i):
                            n = "ISBN13";
                            break;
                        default:
                            return !1;
                    }
                    var r,
                        a,
                        s = (i = i.replace(/[^0-9X]/gi, "")).split(""),
                        o = s.length,
                        l = 0;
                    switch (n) {
                        case "ISBN10":
                            for (l = 0, r = 0; o - 1 > r; r++)
                                l += parseInt(s[r], 10) * (10 - r);
                            return (
                                11 === (a = 11 - (l % 11))
                                    ? (a = 0)
                                    : 10 === a && (a = "X"),
                                a + "" === s[o - 1]
                            );
                        case "ISBN13":
                            for (l = 0, r = 0; o - 1 > r; r++)
                                l +=
                                    r % 2 == 0
                                        ? parseInt(s[r], 10)
                                        : 3 * parseInt(s[r], 10);
                            return (
                                10 === (a = 10 - (l % 10)) && (a = "0"),
                                a + "" === s[o - 1]
                            );
                        default:
                            return !1;
                    }
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.isin = t.extend(
            t.fn.bootstrapValidator.i18n.isin || {},
            { default: "Please enter a valid ISIN number" }
        )),
            (t.fn.bootstrapValidator.validators.isin = {
                COUNTRY_CODES:
                    "AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW",
                validate: function (t, e) {
                    var n = e.val();
                    if ("" === n) return !0;
                    if (
                        ((n = n.toUpperCase()),
                        !new RegExp(
                            "^(" + this.COUNTRY_CODES + ")[0-9A-Z]{10}$"
                        ).test(n))
                    )
                        return !1;
                    for (var i = "", r = n.length, a = 0; r - 1 > a; a++) {
                        var s = n.charCodeAt(a);
                        i += s > 57 ? (s - 55).toString() : n.charAt(a);
                    }
                    var o = "",
                        l = i.length,
                        u = l % 2 != 0 ? 0 : 1;
                    for (a = 0; l > a; a++)
                        o += parseInt(i[a], 10) * (a % 2 === u ? 2 : 1) + "";
                    var d = 0;
                    for (a = 0; a < o.length; a++)
                        d += parseInt(o.charAt(a), 10);
                    return (d = (10 - (d % 10)) % 10) + "" === n.charAt(r - 1);
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.ismn = t.extend(
            t.fn.bootstrapValidator.i18n.ismn || {},
            { default: "Please enter a valid ISMN number" }
        )),
            (t.fn.bootstrapValidator.validators.ismn = {
                validate: function (t, e) {
                    var n,
                        i = e.val();
                    if ("" === i) return !0;
                    switch (!0) {
                        case /^M\d{9}$/.test(i):
                        case /^M-\d{4}-\d{4}-\d{1}$/.test(i):
                        case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(i):
                            n = "ISMN10";
                            break;
                        case /^9790\d{9}$/.test(i):
                        case /^979-0-\d{4}-\d{4}-\d{1}$/.test(i):
                        case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(i):
                            n = "ISMN13";
                            break;
                        default:
                            return !1;
                    }
                    "ISMN10" === n && (i = "9790" + i.substr(1));
                    for (
                        var r = (i = i.replace(/[^0-9]/gi, "")).length,
                            a = 0,
                            s = [1, 3],
                            o = 0;
                        r - 1 > o;
                        o++
                    )
                        a += parseInt(i.charAt(o), 10) * s[o % 2];
                    return (a = 10 - (a % 10)) + "" === i.charAt(r - 1);
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.issn = t.extend(
            t.fn.bootstrapValidator.i18n.issn || {},
            { default: "Please enter a valid ISSN number" }
        )),
            (t.fn.bootstrapValidator.validators.issn = {
                validate: function (t, e) {
                    var n = e.val();
                    if ("" === n) return !0;
                    if (!/^\d{4}\-\d{3}[\dX]$/.test(n)) return !1;
                    var i = (n = n.replace(/[^0-9X]/gi, "")).split(""),
                        r = i.length,
                        a = 0;
                    "X" === i[7] && (i[7] = 10);
                    for (var s = 0; r > s; s++)
                        a += parseInt(i[s], 10) * (8 - s);
                    return a % 11 == 0;
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.lessThan = t.extend(
            t.fn.bootstrapValidator.i18n.lessThan || {},
            {
                default: "Please enter a value less than or equal to %s",
                notInclusive: "Please enter a value less than %s",
            }
        )),
            (t.fn.bootstrapValidator.validators.lessThan = {
                html5Attributes: {
                    message: "message",
                    value: "value",
                    inclusive: "inclusive",
                },
                enableByHtml5: function (t) {
                    var e = t.attr("max");
                    return !!e && { value: e };
                },
                validate: function (e, n, i) {
                    var r = n.val();
                    if ("" === r) return !0;
                    var a = t.isNumeric(i.value)
                        ? i.value
                        : e.getDynamicOption(n, i.value);
                    return (
                        (r = parseFloat(r)),
                        !0 === i.inclusive || void 0 === i.inclusive
                            ? {
                                  valid: a >= r,
                                  message:
                                      t.fn.bootstrapValidator.helpers.format(
                                          i.message ||
                                              t.fn.bootstrapValidator.i18n
                                                  .lessThan.default,
                                          a
                                      ),
                              }
                            : {
                                  valid: a > r,
                                  message:
                                      t.fn.bootstrapValidator.helpers.format(
                                          i.message ||
                                              t.fn.bootstrapValidator.i18n
                                                  .lessThan.notInclusive,
                                          a
                                      ),
                              }
                    );
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.mac = t.extend(
            t.fn.bootstrapValidator.i18n.mac || {},
            { default: "Please enter a valid MAC address" }
        )),
            (t.fn.bootstrapValidator.validators.mac = {
                validate: function (t, e) {
                    var n = e.val();
                    return (
                        "" === n ||
                        /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(n)
                    );
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.notEmpty = t.extend(
            t.fn.bootstrapValidator.i18n.notEmpty || {},
            { default: "Please enter a value" }
        )),
            (t.fn.bootstrapValidator.validators.notEmpty = {
                enableByHtml5: function (t) {
                    var e = t.attr("required") + "";
                    return "required" === e || "true" === e;
                },
                validate: function (e, n) {
                    var i = n.attr("type");
                    return "radio" === i || "checkbox" === i
                        ? e
                              .getFieldElements(n.attr("data-bv-field"))
                              .filter(":checked").length > 0
                        : "" !== t.trim(n.val());
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.numeric = t.extend(
            t.fn.bootstrapValidator.i18n.numeric || {},
            { default: "Please enter a valid float number" }
        )),
            (t.fn.bootstrapValidator.validators.numeric = {
                html5Attributes: { message: "message", separator: "separator" },
                enableByHtml5: function (t) {
                    return (
                        "number" === t.attr("type") &&
                        void 0 !== t.attr("step") &&
                        t.attr("step") % 1 != 0
                    );
                },
                validate: function (t, e, n) {
                    var i = e.val();
                    if ("" === i) return !0;
                    var r = n.separator || ".";
                    return (
                        "." !== r && (i = i.replace(r, ".")),
                        !isNaN(parseFloat(i)) && isFinite(i)
                    );
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.phone = t.extend(
            t.fn.bootstrapValidator.i18n.phone || {},
            {
                default: "Please enter a valid phone number",
                countryNotSupported: "The country code %s is not supported",
                country: "Please enter a valid phone number in %s",
                countries: { GB: "United Kingdom", US: "USA" },
            }
        )),
            (t.fn.bootstrapValidator.validators.phone = {
                html5Attributes: { message: "message", country: "country" },
                COUNTRY_CODES: ["GB", "US"],
                validate: function (e, n, i) {
                    var r = n.val();
                    if ("" === r) return !0;
                    var a = i.country;
                    if (
                        (("string" != typeof a ||
                            -1 === t.inArray(a, this.COUNTRY_CODES)) &&
                            (a = e.getDynamicOption(n, a)),
                        !a ||
                            -1 ===
                                t.inArray(a.toUpperCase(), this.COUNTRY_CODES))
                    )
                        return {
                            valid: !1,
                            message: t.fn.bootstrapValidator.helpers.format(
                                t.fn.bootstrapValidator.i18n.phone
                                    .countryNotSupported,
                                a
                            ),
                        };
                    var s = !0;
                    switch (a.toUpperCase()) {
                        case "GB":
                            (r = t.trim(r)),
                                (s =
                                    /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/.test(
                                        r
                                    ));
                            break;
                        case "US":
                        default:
                            (r = r.replace(/\D/g, "")),
                                (s =
                                    /^(?:(1\-?)|(\+1 ?))?\(?(\d{3})[\)\-\.]?(\d{3})[\-\.]?(\d{4})$/.test(
                                        r
                                    ) && 10 === r.length);
                    }
                    return {
                        valid: s,
                        message: t.fn.bootstrapValidator.helpers.format(
                            i.message ||
                                t.fn.bootstrapValidator.i18n.phone.country,
                            t.fn.bootstrapValidator.i18n.phone.countries[a]
                        ),
                    };
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.regexp = t.extend(
            t.fn.bootstrapValidator.i18n.regexp || {},
            { default: "Please enter a value matching the pattern" }
        )),
            (t.fn.bootstrapValidator.validators.regexp = {
                html5Attributes: { message: "message", regexp: "regexp" },
                enableByHtml5: function (t) {
                    var e = t.attr("pattern");
                    return !!e && { regexp: e };
                },
                validate: function (t, e, n) {
                    var i = e.val();
                    return (
                        "" === i ||
                        ("string" == typeof n.regexp
                            ? new RegExp(n.regexp)
                            : n.regexp
                        ).test(i)
                    );
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.remote = t.extend(
            t.fn.bootstrapValidator.i18n.remote || {},
            { default: "Please enter a valid value" }
        )),
            (t.fn.bootstrapValidator.validators.remote = {
                html5Attributes: {
                    message: "message",
                    url: "url",
                    name: "name",
                },
                validate: function (e, n, i) {
                    var r = n.val();
                    if ("" === r) return !0;
                    var a = n.attr("data-bv-field"),
                        s = i.data || {},
                        o = i.url,
                        l = i.type || "POST";
                    "function" == typeof s && (s = s.call(this, e)),
                        "function" == typeof o && (o = o.call(this, e)),
                        (s[i.name || a] = r);
                    var u = new t.Deferred(),
                        d = t.ajax({
                            type: l,
                            url: o,
                            dataType: "json",
                            data: s,
                        });
                    return (
                        d.then(function (t) {
                            u.resolve(
                                n,
                                "remote",
                                !0 === t.valid || "true" === t.valid,
                                t.message ? t.message : null
                            );
                        }),
                        u.fail(function () {
                            d.abort();
                        }),
                        u
                    );
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.rtn = t.extend(
            t.fn.bootstrapValidator.i18n.rtn || {},
            { default: "Please enter a valid RTN number" }
        )),
            (t.fn.bootstrapValidator.validators.rtn = {
                validate: function (t, e) {
                    var n = e.val();
                    if ("" === n) return !0;
                    if (!/^\d{9}$/.test(n)) return !1;
                    for (var i = 0, r = 0; r < n.length; r += 3)
                        i +=
                            3 * parseInt(n.charAt(r), 10) +
                            7 * parseInt(n.charAt(r + 1), 10) +
                            parseInt(n.charAt(r + 2), 10);
                    return 0 !== i && i % 10 == 0;
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.sedol = t.extend(
            t.fn.bootstrapValidator.i18n.sedol || {},
            { default: "Please enter a valid SEDOL number" }
        )),
            (t.fn.bootstrapValidator.validators.sedol = {
                validate: function (t, e) {
                    var n = e.val();
                    if ("" === n) return !0;
                    if (((n = n.toUpperCase()), !/^[0-9A-Z]{7}$/.test(n)))
                        return !1;
                    for (
                        var i = 0,
                            r = [1, 3, 1, 7, 3, 9, 1],
                            a = n.length,
                            s = 0;
                        a - 1 > s;
                        s++
                    )
                        i += r[s] * parseInt(n.charAt(s), 36);
                    return (i = (10 - (i % 10)) % 10) + "" === n.charAt(a - 1);
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.siren = t.extend(
            t.fn.bootstrapValidator.i18n.siren || {},
            { default: "Please enter a valid SIREN number" }
        )),
            (t.fn.bootstrapValidator.validators.siren = {
                validate: function (e, n) {
                    var i = n.val();
                    return (
                        "" === i ||
                        (!!/^\d{9}$/.test(i) &&
                            t.fn.bootstrapValidator.helpers.luhn(i))
                    );
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.siret = t.extend(
            t.fn.bootstrapValidator.i18n.siret || {},
            { default: "Please enter a valid SIRET number" }
        )),
            (t.fn.bootstrapValidator.validators.siret = {
                validate: function (t, e) {
                    var n = e.val();
                    if ("" === n) return !0;
                    for (var i, r = 0, a = n.length, s = 0; a > s; s++)
                        (i = parseInt(n.charAt(s), 10)),
                            s % 2 == 0 && (i *= 2) > 9 && (i -= 9),
                            (r += i);
                    return r % 10 == 0;
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.step = t.extend(
            t.fn.bootstrapValidator.i18n.step || {},
            { default: "Please enter a valid step of %s" }
        )),
            (t.fn.bootstrapValidator.validators.step = {
                html5Attributes: {
                    message: "message",
                    base: "baseValue",
                    step: "step",
                },
                validate: function (e, n, i) {
                    var r = n.val();
                    if ("" === r) return !0;
                    if (
                        ((i = t.extend({}, { baseValue: 0, step: 1 }, i)),
                        (r = parseFloat(r)),
                        !t.isNumeric(r))
                    )
                        return !1;
                    var a = (function (t, e) {
                        if (0 === e) return 1;
                        var n = (t + "").split("."),
                            i = (e + "").split("."),
                            r =
                                (1 === n.length ? 0 : n[1].length) +
                                (1 === i.length ? 0 : i[1].length);
                        return (function (t, e) {
                            var n = Math.pow(10, e),
                                i = ((t *= n) > 0) | -(0 > t);
                            return t % 1 == 0.5 * i
                                ? (Math.floor(t) + (i > 0)) / n
                                : Math.round(t) / n;
                        })(t - e * Math.floor(t / e), r);
                    })(r - i.baseValue, i.step);
                    return {
                        valid: 0 === a || a === i.step,
                        message: t.fn.bootstrapValidator.helpers.format(
                            i.message ||
                                t.fn.bootstrapValidator.i18n.step.default,
                            [i.step]
                        ),
                    };
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.stringCase = t.extend(
            t.fn.bootstrapValidator.i18n.stringCase || {},
            {
                default: "Please enter only lowercase characters",
                upper: "Please enter only uppercase characters",
            }
        )),
            (t.fn.bootstrapValidator.validators.stringCase = {
                html5Attributes: { message: "message", case: "case" },
                validate: function (e, n, i) {
                    var r = n.val();
                    if ("" === r) return !0;
                    var a = (i.case || "lower").toLowerCase();
                    return {
                        valid:
                            "upper" === a
                                ? r === r.toUpperCase()
                                : r === r.toLowerCase(),
                        message:
                            i.message ||
                            ("upper" === a
                                ? t.fn.bootstrapValidator.i18n.stringCase.upper
                                : t.fn.bootstrapValidator.i18n.stringCase
                                      .default),
                    };
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.stringLength = t.extend(
            t.fn.bootstrapValidator.i18n.stringLength || {},
            {
                default: "Please enter a value with valid length",
                less: "Please enter less than %s characters",
                more: "Please enter more than %s characters",
                between: "Please enter value between %s and %s characters long",
            }
        )),
            (t.fn.bootstrapValidator.validators.stringLength = {
                html5Attributes: { message: "message", min: "min", max: "max" },
                enableByHtml5: function (t) {
                    var e = t.attr("maxlength");
                    return !!e && { max: parseInt(e, 10) };
                },
                validate: function (e, n, i) {
                    var r = n.val();
                    if ("" === r) return !0;
                    var a = t.isNumeric(i.min)
                            ? i.min
                            : e.getDynamicOption(n, i.min),
                        s = t.isNumeric(i.max)
                            ? i.max
                            : e.getDynamicOption(n, i.max),
                        o = r.length,
                        l = !0,
                        u =
                            i.message ||
                            t.fn.bootstrapValidator.i18n.stringLength.default;
                    switch (
                        (((a && o < parseInt(a, 10)) ||
                            (s && o > parseInt(s, 10))) &&
                            (l = !1),
                        !0)
                    ) {
                        case !!a && !!s:
                            u = t.fn.bootstrapValidator.helpers.format(
                                i.message ||
                                    t.fn.bootstrapValidator.i18n.stringLength
                                        .between,
                                [parseInt(a, 10), parseInt(s, 10)]
                            );
                            break;
                        case !!a:
                            u = t.fn.bootstrapValidator.helpers.format(
                                i.message ||
                                    t.fn.bootstrapValidator.i18n.stringLength
                                        .more,
                                parseInt(a, 10)
                            );
                            break;
                        case !!s:
                            u = t.fn.bootstrapValidator.helpers.format(
                                i.message ||
                                    t.fn.bootstrapValidator.i18n.stringLength
                                        .less,
                                parseInt(s, 10)
                            );
                    }
                    return { valid: l, message: u };
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.uri = t.extend(
            t.fn.bootstrapValidator.i18n.uri || {},
            { default: "Please enter a valid URI" }
        )),
            (t.fn.bootstrapValidator.validators.uri = {
                html5Attributes: {
                    message: "message",
                    allowlocal: "allowLocal",
                },
                enableByHtml5: function (t) {
                    return "url" === t.attr("type");
                },
                validate: function (t, e, n) {
                    var i = e.val();
                    if ("" === i) return !0;
                    var r = !0 === n.allowLocal || "true" === n.allowLocal;
                    return new RegExp(
                        "^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:" +
                            (r
                                ? ""
                                : "(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})") +
                            "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/[^\\s]*)?$",
                        "i"
                    ).test(i);
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.uuid = t.extend(
            t.fn.bootstrapValidator.i18n.uuid || {},
            {
                default: "Please enter a valid UUID number",
                version: "Please enter a valid UUID version %s number",
            }
        )),
            (t.fn.bootstrapValidator.validators.uuid = {
                html5Attributes: { message: "message", version: "version" },
                validate: function (e, n, i) {
                    var r = n.val();
                    if ("" === r) return !0;
                    var a = {
                            3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
                            4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                            5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                            all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
                        },
                        s = i.version ? i.version + "" : "all";
                    return {
                        valid: null === a[s] || a[s].test(r),
                        message: i.version
                            ? t.fn.bootstrapValidator.helpers.format(
                                  i.message ||
                                      t.fn.bootstrapValidator.i18n.uuid.version,
                                  i.version
                              )
                            : i.message ||
                              t.fn.bootstrapValidator.i18n.uuid.default,
                    };
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.vat = t.extend(
            t.fn.bootstrapValidator.i18n.vat || {},
            {
                default: "Please enter a valid VAT number",
                countryNotSupported: "The country code %s is not supported",
                country: "Please enter a valid %s VAT number",
                countries: {
                    AT: "Austrian",
                    BE: "Belgian",
                    BG: "Bulgarian",
                    CH: "Swiss",
                    CY: "Cypriot",
                    CZ: "Czech",
                    DE: "German",
                    DK: "Danish",
                    EE: "Estonian",
                    ES: "Spanish",
                    FI: "Finnish",
                    FR: "French",
                    GB: "United Kingdom",
                    GR: "Greek",
                    EL: "Greek",
                    HU: "Hungarian",
                    HR: "Croatian",
                    IE: "Irish",
                    IT: "Italian",
                    LT: "Lithuanian",
                    LU: "Luxembourg",
                    LV: "Latvian",
                    MT: "Maltese",
                    NL: "Dutch",
                    NO: "Norwegian",
                    PL: "Polish",
                    PT: "Portuguese",
                    RO: "Romanian",
                    RU: "Russian",
                    RS: "Serbian",
                    SE: "Swedish",
                    SI: "Slovenian",
                    SK: "Slovak",
                },
            }
        )),
            (t.fn.bootstrapValidator.validators.vat = {
                html5Attributes: { message: "message", country: "country" },
                COUNTRY_CODES: [
                    "AT",
                    "BE",
                    "BG",
                    "HR",
                    "CY",
                    "CZ",
                    "DK",
                    "EE",
                    "FI",
                    "FR",
                    "DE",
                    "GR",
                    "EL",
                    "HU",
                    "IE",
                    "IT",
                    "LV",
                    "LT",
                    "LU",
                    "MT",
                    "NL",
                    "NO",
                    "PL",
                    "PT",
                    "RO",
                    "RU",
                    "RS",
                    "SK",
                    "SI",
                    "ES",
                    "SE",
                    "CH",
                    "GB",
                ],
                validate: function (e, n, i) {
                    var r = n.val();
                    if ("" === r) return !0;
                    var a = i.country;
                    return (
                        a
                            ? ("string" != typeof a ||
                                  -1 ===
                                      t.inArray(
                                          a.toUpperCase(),
                                          this.COUNTRY_CODES
                                      )) &&
                              (a = e.getDynamicOption(n, a))
                            : (a = r.substr(0, 2)),
                        -1 === t.inArray(a, this.COUNTRY_CODES)
                            ? {
                                  valid: !1,
                                  message:
                                      t.fn.bootstrapValidator.helpers.format(
                                          t.fn.bootstrapValidator.i18n.vat
                                              .countryNotSupported,
                                          a
                                      ),
                              }
                            : !!this[["_", a.toLowerCase()].join("")](r) || {
                                  valid: !1,
                                  message:
                                      t.fn.bootstrapValidator.helpers.format(
                                          i.message ||
                                              t.fn.bootstrapValidator.i18n.vat
                                                  .country,
                                          t.fn.bootstrapValidator.i18n.vat
                                              .countries[a.toUpperCase()]
                                      ),
                              }
                    );
                },
                _at: function (t) {
                    if (!/^ATU[0-9]{8}$/.test(t)) return !1;
                    t = t.substr(3);
                    for (
                        var e = 0, n = [1, 2, 1, 2, 1, 2, 1], i = 0, r = 0;
                        7 > r;
                        r++
                    )
                        (i = parseInt(t.charAt(r), 10) * n[r]) > 9 &&
                            (i = Math.floor(i / 10) + (i % 10)),
                            (e += i);
                    return (
                        10 === (e = 10 - ((e + 4) % 10)) && (e = 0),
                        e + "" === t.substr(7, 1)
                    );
                },
                _be: function (t) {
                    return (
                        !!/^BE[0]{0,1}[0-9]{9}$/.test(t) &&
                        (9 === (t = t.substr(2)).length && (t = "0" + t),
                        "0" !== t.substr(1, 1) &&
                            (parseInt(t.substr(0, 8), 10) +
                                parseInt(t.substr(8, 2), 10)) %
                                97 ==
                                0)
                    );
                },
                _bg: function (e) {
                    if (!/^BG[0-9]{9,10}$/.test(e)) return !1;
                    var n = 0,
                        i = 0;
                    if (9 === (e = e.substr(2)).length) {
                        for (i = 0; 8 > i; i++)
                            n += parseInt(e.charAt(i), 10) * (i + 1);
                        if (10 === (n %= 11))
                            for (n = 0, i = 0; 8 > i; i++)
                                n += parseInt(e.charAt(i), 10) * (i + 3);
                        return (n %= 10) + "" === e.substr(8);
                    }
                    if (10 === e.length) {
                        return (
                            (function (e) {
                                var n = parseInt(e.substr(0, 2), 10) + 1900,
                                    i = parseInt(e.substr(2, 2), 10),
                                    r = parseInt(e.substr(4, 2), 10);
                                if (
                                    (i > 40
                                        ? ((n += 100), (i -= 40))
                                        : i > 20 && ((n -= 100), (i -= 20)),
                                    !t.fn.bootstrapValidator.helpers.date(
                                        n,
                                        i,
                                        r
                                    ))
                                )
                                    return !1;
                                for (
                                    var a = 0,
                                        s = [2, 4, 8, 5, 10, 9, 7, 3, 6],
                                        o = 0;
                                    9 > o;
                                    o++
                                )
                                    a += parseInt(e.charAt(o), 10) * s[o];
                                return (
                                    (a = (a % 11) % 10) + "" === e.substr(9, 1)
                                );
                            })(e) ||
                            (function (t) {
                                for (
                                    var e = 0,
                                        n = [21, 19, 17, 13, 11, 9, 7, 3, 1],
                                        i = 0;
                                    9 > i;
                                    i++
                                )
                                    e += parseInt(t.charAt(i), 10) * n[i];
                                return (e %= 10) + "" === t.substr(9, 1);
                            })(e) ||
                            (function (t) {
                                for (
                                    var e = 0,
                                        n = [4, 3, 2, 7, 6, 5, 4, 3, 2],
                                        i = 0;
                                    9 > i;
                                    i++
                                )
                                    e += parseInt(t.charAt(i), 10) * n[i];
                                return (
                                    10 !== (e = 11 - (e % 11)) &&
                                    (11 === e && (e = 0),
                                    e + "" === t.substr(9, 1))
                                );
                            })(e)
                        );
                    }
                    return !1;
                },
                _ch: function (t) {
                    if (!/^CHE[0-9]{9}(MWST)?$/.test(t)) return !1;
                    t = t.substr(3);
                    for (
                        var e = 0, n = [5, 4, 3, 2, 7, 6, 5, 4], i = 0;
                        8 > i;
                        i++
                    )
                        e += parseInt(t.charAt(i), 10) * n[i];
                    return (
                        10 !== (e = 11 - (e % 11)) &&
                        (11 === e && (e = 0), e + "" === t.substr(8, 1))
                    );
                },
                _cy: function (t) {
                    if (!/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(t)) return !1;
                    if ("12" === (t = t.substr(2)).substr(0, 2)) return !1;
                    for (
                        var e = 0,
                            n = {
                                0: 1,
                                1: 0,
                                2: 5,
                                3: 7,
                                4: 9,
                                5: 13,
                                6: 15,
                                7: 17,
                                8: 19,
                                9: 21,
                            },
                            i = 0;
                        8 > i;
                        i++
                    ) {
                        var r = parseInt(t.charAt(i), 10);
                        i % 2 == 0 && (r = n[r + ""]), (e += r);
                    }
                    return (
                        (e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[e % 26]) + "" ===
                        t.substr(8, 1)
                    );
                },
                _cz: function (e) {
                    if (!/^CZ[0-9]{8,10}$/.test(e)) return !1;
                    var n = 0,
                        i = 0;
                    if (8 === (e = e.substr(2)).length) {
                        if (e.charAt(0) + "" == "9") return !1;
                        for (n = 0, i = 0; 7 > i; i++)
                            n += parseInt(e.charAt(i), 10) * (8 - i);
                        return (
                            10 === (n = 11 - (n % 11)) && (n = 0),
                            11 === n && (n = 1),
                            n + "" === e.substr(7, 1)
                        );
                    }
                    if (9 === e.length && e.charAt(0) + "" == "6") {
                        for (n = 0, i = 0; 7 > i; i++)
                            n += parseInt(e.charAt(i + 1), 10) * (8 - i);
                        return (
                            10 === (n = 11 - (n % 11)) && (n = 0),
                            11 === n && (n = 1),
                            (n = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][n - 1]) +
                                "" ===
                                e.substr(8, 1)
                        );
                    }
                    if (9 === e.length || 10 === e.length) {
                        var r = 1900 + parseInt(e.substr(0, 2), 10),
                            a = (parseInt(e.substr(2, 2), 10) % 50) % 20,
                            s = parseInt(e.substr(4, 2), 10);
                        if (9 === e.length) {
                            if ((r >= 1980 && (r -= 100), r > 1953)) return !1;
                        } else 1954 > r && (r += 100);
                        if (!t.fn.bootstrapValidator.helpers.date(r, a, s))
                            return !1;
                        if (10 === e.length) {
                            var o = parseInt(e.substr(0, 9), 10) % 11;
                            return (
                                1985 > r && (o %= 10), o + "" === e.substr(9, 1)
                            );
                        }
                        return !0;
                    }
                    return !1;
                },
                _de: function (e) {
                    return (
                        !!/^DE[0-9]{9}$/.test(e) &&
                        ((e = e.substr(2)),
                        t.fn.bootstrapValidator.helpers.mod11And10(e))
                    );
                },
                _dk: function (t) {
                    if (!/^DK[0-9]{8}$/.test(t)) return !1;
                    t = t.substr(2);
                    for (
                        var e = 0, n = [2, 7, 6, 5, 4, 3, 2, 1], i = 0;
                        8 > i;
                        i++
                    )
                        e += parseInt(t.charAt(i), 10) * n[i];
                    return e % 11 == 0;
                },
                _ee: function (t) {
                    if (!/^EE[0-9]{9}$/.test(t)) return !1;
                    t = t.substr(2);
                    for (
                        var e = 0, n = [3, 7, 1, 3, 7, 1, 3, 7, 1], i = 0;
                        9 > i;
                        i++
                    )
                        e += parseInt(t.charAt(i), 10) * n[i];
                    return e % 10 == 0;
                },
                _es: function (t) {
                    if (!/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t)) return !1;
                    var e = (t = t.substr(2)).charAt(0);
                    return /^[0-9]$/.test(e)
                        ? (function (t) {
                              var e = parseInt(t.substr(0, 8), 10);
                              return (
                                  (e = "TRWAGMYFPDXBNJZSQVHLCKE"[e % 23]) +
                                      "" ===
                                  t.substr(8, 1)
                              );
                          })(t)
                        : /^[XYZ]$/.test(e)
                        ? (function (t) {
                              var e = [
                                  "XYZ".indexOf(t.charAt(0)),
                                  t.substr(1),
                              ].join("");
                              return (
                                  (e = "TRWAGMYFPDXBNJZSQVHLCKE"[
                                      (e = parseInt(e, 10)) % 23
                                  ]) +
                                      "" ===
                                  t.substr(8, 1)
                              );
                          })(t)
                        : (function (t) {
                              var e = t.charAt(0);
                              if (-1 !== "KLM".indexOf(e))
                                  return (
                                      "TRWAGMYFPDXBNJZSQVHLCKE"[
                                          parseInt(t.substr(1, 8), 10) % 23
                                      ] +
                                          "" ===
                                      t.substr(8, 1)
                                  );
                              if (-1 !== "ABCDEFGHJNPQRSUVW".indexOf(e)) {
                                  for (
                                      var n = 0,
                                          i = [2, 1, 2, 1, 2, 1, 2],
                                          r = 0,
                                          a = 0;
                                      7 > a;
                                      a++
                                  )
                                      (r =
                                          parseInt(t.charAt(a + 1), 10) *
                                          i[a]) > 9 &&
                                          (r = Math.floor(r / 10) + (r % 10)),
                                          (n += r);
                                  return (
                                      (n = 10 - (n % 10)) + "" ===
                                          t.substr(8, 1) ||
                                      "JABCDEFGHI"[n] === t.substr(8, 1)
                                  );
                              }
                              return !1;
                          })(t);
                },
                _fi: function (t) {
                    if (!/^FI[0-9]{8}$/.test(t)) return !1;
                    t = t.substr(2);
                    for (
                        var e = 0, n = [7, 9, 10, 5, 8, 4, 2, 1], i = 0;
                        8 > i;
                        i++
                    )
                        e += parseInt(t.charAt(i), 10) * n[i];
                    return e % 11 == 0;
                },
                _fr: function (e) {
                    if (!/^FR[0-9A-Z]{2}[0-9]{9}$/.test(e)) return !1;
                    if (
                        ((e = e.substr(2)),
                        !t.fn.bootstrapValidator.helpers.luhn(e.substr(2)))
                    )
                        return !1;
                    if (/^[0-9]{2}$/.test(e.substr(0, 2)))
                        return (
                            e.substr(0, 2) ===
                            (parseInt(e.substr(2) + "12", 10) % 97) + ""
                        );
                    var n,
                        i = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ";
                    return (
                        (n = /^[0-9]{1}$/.test(e.charAt(0))
                            ? 24 * i.indexOf(e.charAt(0)) +
                              i.indexOf(e.charAt(1)) -
                              10
                            : 34 * i.indexOf(e.charAt(0)) +
                              i.indexOf(e.charAt(1)) -
                              100),
                        (parseInt(e.substr(2), 10) + 1 + Math.floor(n / 11)) %
                            11 ==
                            n % 11
                    );
                },
                _gb: function (t) {
                    if (
                        !(
                            /^GB[0-9]{9}$/.test(t) ||
                            /^GB[0-9]{12}$/.test(t) ||
                            /^GBGD[0-9]{3}$/.test(t) ||
                            /^GBHA[0-9]{3}$/.test(t) ||
                            /^GB(GD|HA)8888[0-9]{5}$/.test(t)
                        )
                    )
                        return !1;
                    var e = (t = t.substr(2)).length;
                    if (5 === e) {
                        var n = t.substr(0, 2),
                            i = parseInt(t.substr(2), 10);
                        return (
                            ("GD" === n && 500 > i) || ("HA" === n && i >= 500)
                        );
                    }
                    if (
                        11 === e &&
                        ("GD8888" === t.substr(0, 6) ||
                            "HA8888" === t.substr(0, 6))
                    )
                        return (
                            !(
                                ("GD" === t.substr(0, 2) &&
                                    parseInt(t.substr(6, 3), 10) >= 500) ||
                                ("HA" === t.substr(0, 2) &&
                                    parseInt(t.substr(6, 3), 10) < 500)
                            ) &&
                            parseInt(t.substr(6, 3), 10) % 97 ===
                                parseInt(t.substr(9, 2), 10)
                        );
                    if (9 === e || 12 === e) {
                        for (
                            var r = 0, a = [8, 7, 6, 5, 4, 3, 2, 10, 1], s = 0;
                            9 > s;
                            s++
                        )
                            r += parseInt(t.charAt(s), 10) * a[s];
                        return (
                            (r %= 97),
                            parseInt(t.substr(0, 3), 10) >= 100
                                ? 0 === r || 42 === r || 55 === r
                                : 0 === r
                        );
                    }
                    return !0;
                },
                _gr: function (t) {
                    if (!/^GR[0-9]{9}$/.test(t)) return !1;
                    8 === (t = t.substr(2)).length && (t = "0" + t);
                    for (
                        var e = 0, n = [256, 128, 64, 32, 16, 8, 4, 2], i = 0;
                        8 > i;
                        i++
                    )
                        e += parseInt(t.charAt(i), 10) * n[i];
                    return (e = (e % 11) % 10) + "" === t.substr(8, 1);
                },
                _el: function (t) {
                    return (
                        !!/^EL[0-9]{9}$/.test(t) &&
                        ((t = "GR" + t.substr(2)), this._gr(t))
                    );
                },
                _hu: function (t) {
                    if (!/^HU[0-9]{8}$/.test(t)) return !1;
                    t = t.substr(2);
                    for (
                        var e = 0, n = [9, 7, 3, 1, 9, 7, 3, 1], i = 0;
                        8 > i;
                        i++
                    )
                        e += parseInt(t.charAt(i), 10) * n[i];
                    return e % 10 == 0;
                },
                _hr: function (e) {
                    return (
                        !!/^HR[0-9]{11}$/.test(e) &&
                        ((e = e.substr(2)),
                        t.fn.bootstrapValidator.helpers.mod11And10(e))
                    );
                },
                _ie: function (t) {
                    if (
                        !/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(t)
                    )
                        return !1;
                    t = t.substr(2);
                    var e = function (t) {
                        for (; t.length < 7; ) t = "0" + t;
                        for (
                            var e = "WABCDEFGHIJKLMNOPQRSTUV", n = 0, i = 0;
                            7 > i;
                            i++
                        )
                            n += parseInt(t.charAt(i), 10) * (8 - i);
                        return (n += 9 * e.indexOf(t.substr(7))), e[n % 23];
                    };
                    return /^[0-9]+$/.test(t.substr(0, 7))
                        ? t.charAt(7) === e(t.substr(0, 7) + t.substr(8) + "")
                        : -1 ===
                              "ABCDEFGHIJKLMNOPQRSTUVWXYZ+*".indexOf(
                                  t.charAt(1)
                              ) ||
                              t.charAt(7) ===
                                  e(t.substr(2, 5) + t.substr(0, 1) + "");
                },
                _it: function (e) {
                    if (!/^IT[0-9]{11}$/.test(e)) return !1;
                    if (((e = e.substr(2)), 0 === parseInt(e.substr(0, 7), 10)))
                        return !1;
                    var n = parseInt(e.substr(7, 3), 10);
                    return (
                        !(1 > n || (n > 201 && 999 !== n && 888 !== n)) &&
                        t.fn.bootstrapValidator.helpers.luhn(e)
                    );
                },
                _lt: function (t) {
                    if (!/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(t))
                        return !1;
                    var e,
                        n = (t = t.substr(2)).length,
                        i = 0;
                    for (e = 0; n - 1 > e; e++)
                        i += parseInt(t.charAt(e), 10) * (1 + (e % 9));
                    var r = i % 11;
                    if (10 === r)
                        for (i = 0, e = 0; n - 1 > e; e++)
                            i +=
                                parseInt(t.charAt(e), 10) * (1 + ((e + 2) % 9));
                    return (r = (r % 11) % 10) + "" === t.charAt(n - 1);
                },
                _lu: function (t) {
                    return (
                        !!/^LU[0-9]{8}$/.test(t) &&
                        ((t = t.substr(2)),
                        (parseInt(t.substr(0, 6), 10) % 89) + "" ===
                            t.substr(6, 2))
                    );
                },
                _lv: function (e) {
                    if (!/^LV[0-9]{11}$/.test(e)) return !1;
                    e = e.substr(2);
                    var n,
                        i = parseInt(e.charAt(0), 10),
                        r = 0,
                        a = [],
                        s = e.length;
                    if (i > 3) {
                        for (
                            r = 0,
                                a = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1],
                                n = 0;
                            s > n;
                            n++
                        )
                            r += parseInt(e.charAt(n), 10) * a[n];
                        return 3 === (r %= 11);
                    }
                    var o = parseInt(e.substr(0, 2), 10),
                        l = parseInt(e.substr(2, 2), 10),
                        u = parseInt(e.substr(4, 2), 10);
                    if (
                        ((u = u + 1800 + 100 * parseInt(e.charAt(6), 10)),
                        !t.fn.bootstrapValidator.helpers.date(u, l, o))
                    )
                        return !1;
                    for (
                        r = 0, a = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], n = 0;
                        s - 1 > n;
                        n++
                    )
                        r += parseInt(e.charAt(n), 10) * a[n];
                    return (r = ((r + 1) % 11) % 10) + "" === e.charAt(s - 1);
                },
                _mt: function (t) {
                    if (!/^MT[0-9]{8}$/.test(t)) return !1;
                    t = t.substr(2);
                    for (
                        var e = 0, n = [3, 4, 6, 7, 8, 9, 10, 1], i = 0;
                        8 > i;
                        i++
                    )
                        e += parseInt(t.charAt(i), 10) * n[i];
                    return e % 37 == 0;
                },
                _nl: function (t) {
                    if (!/^NL[0-9]{9}B[0-9]{2}$/.test(t)) return !1;
                    t = t.substr(2);
                    for (
                        var e = 0, n = [9, 8, 7, 6, 5, 4, 3, 2], i = 0;
                        8 > i;
                        i++
                    )
                        e += parseInt(t.charAt(i), 10) * n[i];
                    return (e %= 11) > 9 && (e = 0), e + "" === t.substr(8, 1);
                },
                _no: function (t) {
                    if (!/^NO[0-9]{9}$/.test(t)) return !1;
                    t = t.substr(2);
                    for (
                        var e = 0, n = [3, 2, 7, 6, 5, 4, 3, 2], i = 0;
                        8 > i;
                        i++
                    )
                        e += parseInt(t.charAt(i), 10) * n[i];
                    return (
                        11 === (e = 11 - (e % 11)) && (e = 0),
                        e + "" === t.substr(8, 1)
                    );
                },
                _pl: function (t) {
                    if (!/^PL[0-9]{10}$/.test(t)) return !1;
                    t = t.substr(2);
                    for (
                        var e = 0, n = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1], i = 0;
                        10 > i;
                        i++
                    )
                        e += parseInt(t.charAt(i), 10) * n[i];
                    return e % 11 == 0;
                },
                _pt: function (t) {
                    if (!/^PT[0-9]{9}$/.test(t)) return !1;
                    t = t.substr(2);
                    for (
                        var e = 0, n = [9, 8, 7, 6, 5, 4, 3, 2], i = 0;
                        8 > i;
                        i++
                    )
                        e += parseInt(t.charAt(i), 10) * n[i];
                    return (
                        (e = 11 - (e % 11)) > 9 && (e = 0),
                        e + "" === t.substr(8, 1)
                    );
                },
                _ro: function (t) {
                    if (!/^RO[1-9][0-9]{1,9}$/.test(t)) return !1;
                    for (
                        var e = (t = t.substr(2)).length,
                            n = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - e),
                            i = 0,
                            r = 0;
                        e - 1 > r;
                        r++
                    )
                        i += parseInt(t.charAt(r), 10) * n[r];
                    return (
                        (i = ((10 * i) % 11) % 10) + "" === t.substr(e - 1, 1)
                    );
                },
                _ru: function (t) {
                    if (!/^RU([0-9]{9}|[0-9]{12})$/.test(t)) return !1;
                    var e = 0;
                    if (10 === (t = t.substr(2)).length) {
                        var n = 0,
                            i = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
                        for (e = 0; 10 > e; e++)
                            n += parseInt(t.charAt(e), 10) * i[e];
                        return (
                            (n %= 11) > 9 && (n %= 10),
                            n + "" === t.substr(9, 1)
                        );
                    }
                    if (12 === t.length) {
                        var r = 0,
                            a = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
                            s = 0,
                            o = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
                        for (e = 0; 11 > e; e++)
                            (r += parseInt(t.charAt(e), 10) * a[e]),
                                (s += parseInt(t.charAt(e), 10) * o[e]);
                        return (
                            (r %= 11) > 9 && (r %= 10),
                            (s %= 11) > 9 && (s %= 10),
                            r + "" === t.substr(10, 1) &&
                                s + "" === t.substr(11, 1)
                        );
                    }
                    return !1;
                },
                _rs: function (t) {
                    if (!/^RS[0-9]{9}$/.test(t)) return !1;
                    t = t.substr(2);
                    for (var e = 10, n = 0, i = 0; 8 > i; i++)
                        0 === (n = (parseInt(t.charAt(i), 10) + e) % 10) &&
                            (n = 10),
                            (e = (2 * n) % 11);
                    return (e + parseInt(t.substr(8, 1), 10)) % 10 == 1;
                },
                _se: function (e) {
                    return (
                        !!/^SE[0-9]{10}01$/.test(e) &&
                        ((e = e.substr(2, 10)),
                        t.fn.bootstrapValidator.helpers.luhn(e))
                    );
                },
                _si: function (t) {
                    if (!/^SI[0-9]{8}$/.test(t)) return !1;
                    t = t.substr(2);
                    for (
                        var e = 0, n = [8, 7, 6, 5, 4, 3, 2], i = 0;
                        7 > i;
                        i++
                    )
                        e += parseInt(t.charAt(i), 10) * n[i];
                    return (
                        10 === (e = 11 - (e % 11)) && (e = 0),
                        e + "" === t.substr(7, 1)
                    );
                },
                _sk: function (t) {
                    return (
                        !!/^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t) &&
                        parseInt(t.substr(2), 10) % 11 == 0
                    );
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.vin = t.extend(
            t.fn.bootstrapValidator.i18n.vin || {},
            { default: "Please enter a valid VIN number" }
        )),
            (t.fn.bootstrapValidator.validators.vin = {
                validate: function (t, e) {
                    var n = e.val();
                    if ("" === n) return !0;
                    if (
                        !/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(
                            n
                        )
                    )
                        return !1;
                    for (
                        var i = {
                                A: 1,
                                B: 2,
                                C: 3,
                                D: 4,
                                E: 5,
                                F: 6,
                                G: 7,
                                H: 8,
                                J: 1,
                                K: 2,
                                L: 3,
                                M: 4,
                                N: 5,
                                P: 7,
                                R: 9,
                                S: 2,
                                T: 3,
                                U: 4,
                                V: 5,
                                W: 6,
                                X: 7,
                                Y: 8,
                                Z: 9,
                                1: 1,
                                2: 2,
                                3: 3,
                                4: 4,
                                5: 5,
                                6: 6,
                                7: 7,
                                8: 8,
                                9: 9,
                                0: 0,
                            },
                            r = [
                                8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3,
                                2,
                            ],
                            a = 0,
                            s = (n = n.toUpperCase()).length,
                            o = 0;
                        s > o;
                        o++
                    )
                        a += i[n.charAt(o) + ""] * r[o];
                    var l = a % 11;
                    return 10 === l && (l = "X"), l + "" === n.charAt(8);
                },
            });
    })(window.jQuery),
    (function (t) {
        (t.fn.bootstrapValidator.i18n.zipCode = t.extend(
            t.fn.bootstrapValidator.i18n.zipCode || {},
            {
                default: "Please enter a valid zip code",
                countryNotSupported: "The country code %s is not supported",
                country: "Please enter a valid %s",
                countries: {
                    CA: "Canadian postal code",
                    DK: "Danish postal code",
                    GB: "United Kingdom postal code",
                    IT: "Italian postal code",
                    NL: "Dutch postal code",
                    SE: "Swiss postal code",
                    SG: "Singapore postal code",
                    US: "US zip code",
                },
            }
        )),
            (t.fn.bootstrapValidator.validators.zipCode = {
                html5Attributes: { message: "message", country: "country" },
                COUNTRY_CODES: ["CA", "DK", "GB", "IT", "NL", "SE", "SG", "US"],
                validate: function (e, n, i) {
                    var r = n.val();
                    if ("" === r || !i.country) return !0;
                    var a = i.country;
                    if (
                        (("string" != typeof a ||
                            -1 === t.inArray(a, this.COUNTRY_CODES)) &&
                            (a = e.getDynamicOption(n, a)),
                        !a ||
                            -1 ===
                                t.inArray(a.toUpperCase(), this.COUNTRY_CODES))
                    )
                        return {
                            valid: !1,
                            message: t.fn.bootstrapValidator.helpers.format(
                                t.fn.bootstrapValidator.i18n.zipCode
                                    .countryNotSupported,
                                a
                            ),
                        };
                    var s = !1;
                    switch ((a = a.toUpperCase())) {
                        case "CA":
                            s =
                                /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(
                                    r
                                );
                            break;
                        case "DK":
                            s = /^(DK(-|\s)?)?\d{4}$/i.test(r);
                            break;
                        case "GB":
                            s = this._gb(r);
                            break;
                        case "IT":
                            s = /^(I-|IT-)?\d{5}$/i.test(r);
                            break;
                        case "NL":
                            s = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(
                                r
                            );
                            break;
                        case "SE":
                            s = /^(S-)?\d{3}\s?\d{2}$/i.test(r);
                            break;
                        case "SG":
                            s =
                                /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(
                                    r
                                );
                            break;
                        case "US":
                        default:
                            s = /^\d{4,5}([\-]?\d{4})?$/.test(r);
                    }
                    return {
                        valid: s,
                        message: t.fn.bootstrapValidator.helpers.format(
                            i.message ||
                                t.fn.bootstrapValidator.i18n.zipCode.country,
                            t.fn.bootstrapValidator.i18n.zipCode.countries[a]
                        ),
                    };
                },
                _gb: function (t) {
                    for (
                        var e = "[ABCDEFGHIJKLMNOPRSTUWYZ]",
                            n = "[ABCDEFGHKLMNOPQRSTUVWXY]",
                            i = "[ABDEFGHJLNPQRSTUWXYZ]",
                            r = [
                                new RegExp(
                                    "^(" +
                                        e +
                                        "{1}" +
                                        n +
                                        "?[0-9]{1,2})(\\s*)([0-9]{1}" +
                                        i +
                                        "{2})$",
                                    "i"
                                ),
                                new RegExp(
                                    "^(" +
                                        e +
                                        "{1}[0-9]{1}[ABCDEFGHJKPMNRSTUVWXY]{1})(\\s*)([0-9]{1}" +
                                        i +
                                        "{2})$",
                                    "i"
                                ),
                                new RegExp(
                                    "^(" +
                                        e +
                                        "{1}" +
                                        n +
                                        "{1}?[0-9]{1}[ABEHMNPRVWXY]{1})(\\s*)([0-9]{1}" +
                                        i +
                                        "{2})$",
                                    "i"
                                ),
                                new RegExp(
                                    "^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$",
                                    "i"
                                ),
                                /^(GIR)(\s*)(0AA)$/i,
                                /^(BFPO)(\s*)([0-9]{1,4})$/i,
                                /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i,
                                /^([A-Z]{4})(\s*)(1ZZ)$/i,
                                /^(AI-2640)$/i,
                            ],
                            a = 0;
                        a < r.length;
                        a++
                    )
                        if (r[a].test(t)) return !0;
                    return !1;
                },
            });
    })(window.jQuery),
    (function (t, e) {
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = e())
            : "function" == typeof define && define.amd
            ? define(e)
            : (t.Popper = e());
    })(this, function () {
        "use strict";
        function t(t) {
            return t && "[object Function]" === {}.toString.call(t);
        }
        function e(t, e) {
            if (1 !== t.nodeType) return [];
            var n = getComputedStyle(t, null);
            return e ? n[e] : n;
        }
        function n(t) {
            return "HTML" === t.nodeName ? t : t.parentNode || t.host;
        }
        function i(t) {
            if (!t) return document.body;
            switch (t.nodeName) {
                case "HTML":
                case "BODY":
                    return t.ownerDocument.body;
                case "#document":
                    return t.body;
            }
            var r = e(t),
                a = r.overflow,
                s = r.overflowX,
                o = r.overflowY;
            return /(auto|scroll|overlay)/.test(a + o + s) ? t : i(n(t));
        }
        function r(t) {
            return 11 === t ? Y : 10 === t ? X : Y || X;
        }
        function a(t) {
            if (!t) return document.documentElement;
            for (
                var n = r(10) ? document.body : null, i = t.offsetParent;
                i === n && t.nextElementSibling;

            )
                i = (t = t.nextElementSibling).offsetParent;
            var s = i && i.nodeName;
            return s && "BODY" !== s && "HTML" !== s
                ? -1 !== ["TD", "TABLE"].indexOf(i.nodeName) &&
                  "static" === e(i, "position")
                    ? a(i)
                    : i
                : t
                ? t.ownerDocument.documentElement
                : document.documentElement;
        }
        function s(t) {
            return null === t.parentNode ? t : s(t.parentNode);
        }
        function o(t, e) {
            if (!(t && t.nodeType && e && e.nodeType))
                return document.documentElement;
            var n =
                    t.compareDocumentPosition(e) &
                    Node.DOCUMENT_POSITION_FOLLOWING,
                i = n ? t : e,
                r = n ? e : t,
                l = document.createRange();
            l.setStart(i, 0), l.setEnd(r, 0);
            var u = l.commonAncestorContainer;
            if ((t !== u && e !== u) || i.contains(r))
                return (function (t) {
                    var e = t.nodeName;
                    return (
                        "BODY" !== e &&
                        ("HTML" === e || a(t.firstElementChild) === t)
                    );
                })(u)
                    ? u
                    : a(u);
            var d = s(t);
            return d.host ? o(d.host, e) : o(t, s(e).host);
        }
        function l(t) {
            var e =
                    1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : "top",
                n = "top" === e ? "scrollTop" : "scrollLeft",
                i = t.nodeName;
            if ("BODY" === i || "HTML" === i) {
                var r = t.ownerDocument.documentElement,
                    a = t.ownerDocument.scrollingElement || r;
                return a[n];
            }
            return t[n];
        }
        function u(t, e) {
            var n =
                    2 < arguments.length &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                i = l(e, "top"),
                r = l(e, "left"),
                a = n ? -1 : 1;
            return (
                (t.top += i * a),
                (t.bottom += i * a),
                (t.left += r * a),
                (t.right += r * a),
                t
            );
        }
        function d(t, e) {
            var n = "x" === e ? "Left" : "Top",
                i = "Left" == n ? "Right" : "Bottom";
            return (
                parseFloat(t["border" + n + "Width"], 10) +
                parseFloat(t["border" + i + "Width"], 10)
            );
        }
        function c(t, e, n, i) {
            return z(
                e["offset" + t],
                e["scroll" + t],
                n["client" + t],
                n["offset" + t],
                n["scroll" + t],
                r(10)
                    ? n["offset" + t] +
                          i["margin" + ("Height" === t ? "Top" : "Left")] +
                          i["margin" + ("Height" === t ? "Bottom" : "Right")]
                    : 0
            );
        }
        function f() {
            var t = document.body,
                e = document.documentElement,
                n = r(10) && getComputedStyle(e);
            return { height: c("Height", t, e, n), width: c("Width", t, e, n) };
        }
        function h(t) {
            return nt({}, t, {
                right: t.left + t.width,
                bottom: t.top + t.height,
            });
        }
        function p(t) {
            var n = {};
            try {
                if (r(10)) {
                    n = t.getBoundingClientRect();
                    var i = l(t, "top"),
                        a = l(t, "left");
                    (n.top += i),
                        (n.left += a),
                        (n.bottom += i),
                        (n.right += a);
                } else n = t.getBoundingClientRect();
            } catch (t) {}
            var s = {
                    left: n.left,
                    top: n.top,
                    width: n.right - n.left,
                    height: n.bottom - n.top,
                },
                o = "HTML" === t.nodeName ? f() : {},
                u = o.width || t.clientWidth || s.right - s.left,
                c = o.height || t.clientHeight || s.bottom - s.top,
                p = t.offsetWidth - u,
                m = t.offsetHeight - c;
            if (p || m) {
                var v = e(t);
                (p -= d(v, "x")),
                    (m -= d(v, "y")),
                    (s.width -= p),
                    (s.height -= m);
            }
            return h(s);
        }
        function m(t, n) {
            var a =
                    2 < arguments.length &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                s = r(10),
                o = "HTML" === n.nodeName,
                l = p(t),
                d = p(n),
                c = i(t),
                f = e(n),
                m = parseFloat(f.borderTopWidth, 10),
                v = parseFloat(f.borderLeftWidth, 10);
            a &&
                "HTML" === n.nodeName &&
                ((d.top = z(d.top, 0)), (d.left = z(d.left, 0)));
            var g = h({
                top: l.top - d.top - m,
                left: l.left - d.left - v,
                width: l.width,
                height: l.height,
            });
            if (((g.marginTop = 0), (g.marginLeft = 0), !s && o)) {
                var b = parseFloat(f.marginTop, 10),
                    _ = parseFloat(f.marginLeft, 10);
                (g.top -= m - b),
                    (g.bottom -= m - b),
                    (g.left -= v - _),
                    (g.right -= v - _),
                    (g.marginTop = b),
                    (g.marginLeft = _);
            }
            return (
                (s && !a ? n.contains(c) : n === c && "BODY" !== c.nodeName) &&
                    (g = u(g, n)),
                g
            );
        }
        function v(t) {
            var e =
                    1 < arguments.length &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                n = t.ownerDocument.documentElement,
                i = m(t, n),
                r = z(n.clientWidth, window.innerWidth || 0),
                a = z(n.clientHeight, window.innerHeight || 0),
                s = e ? 0 : l(n),
                o = e ? 0 : l(n, "left"),
                u = {
                    top: s - i.top + i.marginTop,
                    left: o - i.left + i.marginLeft,
                    width: r,
                    height: a,
                };
            return h(u);
        }
        function g(t) {
            var i = t.nodeName;
            return (
                "BODY" !== i &&
                "HTML" !== i &&
                ("fixed" === e(t, "position") || g(n(t)))
            );
        }
        function b(t) {
            if (!t || !t.parentElement || r()) return document.documentElement;
            for (var n = t.parentElement; n && "none" === e(n, "transform"); )
                n = n.parentElement;
            return n || document.documentElement;
        }
        function _(t, e, r, a) {
            var s =
                    4 < arguments.length &&
                    void 0 !== arguments[4] &&
                    arguments[4],
                l = { top: 0, left: 0 },
                u = s ? b(t) : o(t, e);
            if ("viewport" === a) l = v(u, s);
            else {
                var d;
                "scrollParent" === a
                    ? "BODY" === (d = i(n(e))).nodeName &&
                      (d = t.ownerDocument.documentElement)
                    : (d =
                          "window" === a ? t.ownerDocument.documentElement : a);
                var c = m(d, u, s);
                if ("HTML" !== d.nodeName || g(u)) l = c;
                else {
                    var h = f(),
                        p = h.height,
                        _ = h.width;
                    (l.top += c.top - c.marginTop),
                        (l.bottom = p + c.top),
                        (l.left += c.left - c.marginLeft),
                        (l.right = _ + c.left);
                }
            }
            return (
                (l.left += r), (l.top += r), (l.right -= r), (l.bottom -= r), l
            );
        }
        function y(t) {
            return t.width * t.height;
        }
        function A(t, e, n, i, r) {
            var a =
                5 < arguments.length && void 0 !== arguments[5]
                    ? arguments[5]
                    : 0;
            if (-1 === t.indexOf("auto")) return t;
            var s = _(n, i, a, r),
                o = {
                    top: { width: s.width, height: e.top - s.top },
                    right: { width: s.right - e.right, height: s.height },
                    bottom: { width: s.width, height: s.bottom - e.bottom },
                    left: { width: e.left - s.left, height: s.height },
                },
                l = Object.keys(o)
                    .map(function (t) {
                        return nt({ key: t }, o[t], { area: y(o[t]) });
                    })
                    .sort(function (t, e) {
                        return e.area - t.area;
                    }),
                u = l.filter(function (t) {
                    var e = t.width,
                        i = t.height;
                    return e >= n.clientWidth && i >= n.clientHeight;
                }),
                d = 0 < u.length ? u[0].key : l[0].key,
                c = t.split("-")[1];
            return d + (c ? "-" + c : "");
        }
        function C(t, e, n) {
            var i =
                    3 < arguments.length && void 0 !== arguments[3]
                        ? arguments[3]
                        : null,
                r = i ? b(e) : o(e, n);
            return m(n, r, i);
        }
        function E(t) {
            var e = getComputedStyle(t),
                n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
                i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
            return { width: t.offsetWidth + i, height: t.offsetHeight + n };
        }
        function w(t) {
            var e = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom",
            };
            return t.replace(/left|right|bottom|top/g, function (t) {
                return e[t];
            });
        }
        function I(t, e, n) {
            n = n.split("-")[0];
            var i = E(t),
                r = { width: i.width, height: i.height },
                a = -1 !== ["right", "left"].indexOf(n),
                s = a ? "top" : "left",
                o = a ? "left" : "top",
                l = a ? "height" : "width",
                u = a ? "width" : "height";
            return (
                (r[s] = e[s] + e[l] / 2 - i[l] / 2),
                (r[o] = n === o ? e[o] - i[u] : e[w(o)]),
                r
            );
        }
        function T(t, e) {
            return Array.prototype.find ? t.find(e) : t.filter(e)[0];
        }
        function S(e, n, i) {
            var r =
                void 0 === i
                    ? e
                    : e.slice(
                          0,
                          (function (t, e, n) {
                              if (Array.prototype.findIndex)
                                  return t.findIndex(function (t) {
                                      return t[e] === n;
                                  });
                              var i = T(t, function (t) {
                                  return t[e] === n;
                              });
                              return t.indexOf(i);
                          })(e, "name", i)
                      );
            return (
                r.forEach(function (e) {
                    e.function;
                    var i = e.function || e.fn;
                    e.enabled &&
                        t(i) &&
                        ((n.offsets.popper = h(n.offsets.popper)),
                        (n.offsets.reference = h(n.offsets.reference)),
                        (n = i(n, e)));
                }),
                n
            );
        }
        function D() {
            if (!this.state.isDestroyed) {
                var t = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {},
                };
                (t.offsets.reference = C(
                    this.state,
                    this.popper,
                    this.reference,
                    this.options.positionFixed
                )),
                    (t.placement = A(
                        this.options.placement,
                        t.offsets.reference,
                        this.popper,
                        this.reference,
                        this.options.modifiers.flip.boundariesElement,
                        this.options.modifiers.flip.padding
                    )),
                    (t.originalPlacement = t.placement),
                    (t.positionFixed = this.options.positionFixed),
                    (t.offsets.popper = I(
                        this.popper,
                        t.offsets.reference,
                        t.placement
                    )),
                    (t.offsets.popper.position = this.options.positionFixed
                        ? "fixed"
                        : "absolute"),
                    (t = S(this.modifiers, t)),
                    this.state.isCreated
                        ? this.options.onUpdate(t)
                        : ((this.state.isCreated = !0),
                          this.options.onCreate(t));
            }
        }
        function x(t, e) {
            return t.some(function (t) {
                var n = t.name;
                return t.enabled && n === e;
            });
        }
        function k(t) {
            for (
                var e = [!1, "ms", "Webkit", "Moz", "O"],
                    n = t.charAt(0).toUpperCase() + t.slice(1),
                    i = 0;
                i < e.length;
                i++
            ) {
                var r = e[i],
                    a = r ? "" + r + n : t;
                if (void 0 !== document.body.style[a]) return a;
            }
            return null;
        }
        function L() {
            return (
                (this.state.isDestroyed = !0),
                x(this.modifiers, "applyStyle") &&
                    (this.popper.removeAttribute("x-placement"),
                    (this.popper.style.position = ""),
                    (this.popper.style.top = ""),
                    (this.popper.style.left = ""),
                    (this.popper.style.right = ""),
                    (this.popper.style.bottom = ""),
                    (this.popper.style.willChange = ""),
                    (this.popper.style[k("transform")] = "")),
                this.disableEventListeners(),
                this.options.removeOnDestroy &&
                    this.popper.parentNode.removeChild(this.popper),
                this
            );
        }
        function N(t) {
            var e = t.ownerDocument;
            return e ? e.defaultView : window;
        }
        function O(t, e, n, r) {
            var a = "BODY" === t.nodeName,
                s = a ? t.ownerDocument.defaultView : t;
            s.addEventListener(e, n, { passive: !0 }),
                a || O(i(s.parentNode), e, n, r),
                r.push(s);
        }
        function V(t, e, n, r) {
            (n.updateBound = r),
                N(t).addEventListener("resize", n.updateBound, { passive: !0 });
            var a = i(t);
            return (
                O(a, "scroll", n.updateBound, n.scrollParents),
                (n.scrollElement = a),
                (n.eventsEnabled = !0),
                n
            );
        }
        function P() {
            this.state.eventsEnabled ||
                (this.state = V(
                    this.reference,
                    this.options,
                    this.state,
                    this.scheduleUpdate
                ));
        }
        function M() {
            this.state.eventsEnabled &&
                (cancelAnimationFrame(this.scheduleUpdate),
                (this.state = (function (t, e) {
                    return (
                        N(t).removeEventListener("resize", e.updateBound),
                        e.scrollParents.forEach(function (t) {
                            t.removeEventListener("scroll", e.updateBound);
                        }),
                        (e.updateBound = null),
                        (e.scrollParents = []),
                        (e.scrollElement = null),
                        (e.eventsEnabled = !1),
                        e
                    );
                })(this.reference, this.state)));
        }
        function F(t) {
            return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
        }
        function B(t, e) {
            Object.keys(e).forEach(function (n) {
                var i = "";
                -1 !==
                    [
                        "width",
                        "height",
                        "top",
                        "right",
                        "bottom",
                        "left",
                    ].indexOf(n) &&
                    F(e[n]) &&
                    (i = "px"),
                    (t.style[n] = e[n] + i);
            });
        }
        function R(t, e, n) {
            var i = T(t, function (t) {
                    return t.name === e;
                }),
                r =
                    !!i &&
                    t.some(function (t) {
                        return t.name === n && t.enabled && t.order < i.order;
                    });
            if (!r);
            return r;
        }
        function U(t) {
            var e =
                    1 < arguments.length &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                n = rt.indexOf(t),
                i = rt.slice(n + 1).concat(rt.slice(0, n));
            return e ? i.reverse() : i;
        }
        function j(t, e, n, i) {
            var r = [0, 0],
                a = -1 !== ["right", "left"].indexOf(i),
                s = t.split(/(\+|\-)/).map(function (t) {
                    return t.trim();
                }),
                o = s.indexOf(
                    T(s, function (t) {
                        return -1 !== t.search(/,|\s/);
                    })
                );
            s[o] && s[o].indexOf(",");
            var l = /\s*,\s*|\s+/,
                u =
                    -1 === o
                        ? [s]
                        : [
                              s.slice(0, o).concat([s[o].split(l)[0]]),
                              [s[o].split(l)[1]].concat(s.slice(o + 1)),
                          ];
            return (
                (u = u.map(function (t, i) {
                    var r = (1 === i ? !a : a) ? "height" : "width",
                        s = !1;
                    return t
                        .reduce(function (t, e) {
                            return "" === t[t.length - 1] &&
                                -1 !== ["+", "-"].indexOf(e)
                                ? ((t[t.length - 1] = e), (s = !0), t)
                                : s
                                ? ((t[t.length - 1] += e), (s = !1), t)
                                : t.concat(e);
                        }, [])
                        .map(function (t) {
                            return (function (t, e, n, i) {
                                var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                    a = +r[1],
                                    s = r[2];
                                if (!a) return t;
                                if (0 === s.indexOf("%")) {
                                    var o;
                                    switch (s) {
                                        case "%p":
                                            o = n;
                                            break;
                                        case "%":
                                        case "%r":
                                        default:
                                            o = i;
                                    }
                                    return (h(o)[e] / 100) * a;
                                }
                                return "vh" === s || "vw" === s
                                    ? (("vh" === s
                                          ? z(
                                                document.documentElement
                                                    .clientHeight,
                                                window.innerHeight || 0
                                            )
                                          : z(
                                                document.documentElement
                                                    .clientWidth,
                                                window.innerWidth || 0
                                            )) /
                                          100) *
                                          a
                                    : a;
                            })(t, r, e, n);
                        });
                })),
                u.forEach(function (t, e) {
                    t.forEach(function (n, i) {
                        F(n) && (r[e] += n * ("-" === t[i - 1] ? -1 : 1));
                    });
                }),
                r
            );
        }
        for (
            var H = Math.min,
                G = Math.round,
                $ = Math.floor,
                z = Math.max,
                K =
                    "undefined" != typeof window &&
                    "undefined" != typeof document,
                W = ["Edge", "Trident", "Firefox"],
                Z = 0,
                q = 0;
            q < W.length;
            q += 1
        )
            if (K && 0 <= navigator.userAgent.indexOf(W[q])) {
                Z = 1;
                break;
            }
        var Q =
                K && window.Promise
                    ? function (t) {
                          var e = !1;
                          return function () {
                              e ||
                                  ((e = !0),
                                  window.Promise.resolve().then(function () {
                                      (e = !1), t();
                                  }));
                          };
                      }
                    : function (t) {
                          var e = !1;
                          return function () {
                              e ||
                                  ((e = !0),
                                  setTimeout(function () {
                                      (e = !1), t();
                                  }, Z));
                          };
                      },
            Y = K && !(!window.MSInputMethodContext || !document.documentMode),
            X = K && /MSIE 10/.test(navigator.userAgent),
            J = function (t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
            },
            tt = (function () {
                function t(t, e) {
                    for (var n, i = 0; i < e.length; i++)
                        ((n = e[i]).enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(t, n.key, n);
                }
                return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                };
            })(),
            et = function (t, e, n) {
                return (
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = n),
                    t
                );
            },
            nt =
                Object.assign ||
                function (t) {
                    for (var e, n = 1; n < arguments.length; n++)
                        for (var i in (e = arguments[n]))
                            Object.prototype.hasOwnProperty.call(e, i) &&
                                (t[i] = e[i]);
                    return t;
                },
            it = [
                "auto-start",
                "auto",
                "auto-end",
                "top-start",
                "top",
                "top-end",
                "right-start",
                "right",
                "right-end",
                "bottom-end",
                "bottom",
                "bottom-start",
                "left-end",
                "left",
                "left-start",
            ],
            rt = it.slice(3),
            at = "flip",
            st = "clockwise",
            ot = "counterclockwise",
            lt = (function () {
                function e(n, i) {
                    var r = this,
                        a =
                            2 < arguments.length && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                    J(this, e),
                        (this.scheduleUpdate = function () {
                            return requestAnimationFrame(r.update);
                        }),
                        (this.update = Q(this.update.bind(this))),
                        (this.options = nt({}, e.Defaults, a)),
                        (this.state = {
                            isDestroyed: !1,
                            isCreated: !1,
                            scrollParents: [],
                        }),
                        (this.reference = n && n.jquery ? n[0] : n),
                        (this.popper = i && i.jquery ? i[0] : i),
                        (this.options.modifiers = {}),
                        Object.keys(
                            nt({}, e.Defaults.modifiers, a.modifiers)
                        ).forEach(function (t) {
                            r.options.modifiers[t] = nt(
                                {},
                                e.Defaults.modifiers[t] || {},
                                a.modifiers ? a.modifiers[t] : {}
                            );
                        }),
                        (this.modifiers = Object.keys(this.options.modifiers)
                            .map(function (t) {
                                return nt({ name: t }, r.options.modifiers[t]);
                            })
                            .sort(function (t, e) {
                                return t.order - e.order;
                            })),
                        this.modifiers.forEach(function (e) {
                            e.enabled &&
                                t(e.onLoad) &&
                                e.onLoad(
                                    r.reference,
                                    r.popper,
                                    r.options,
                                    e,
                                    r.state
                                );
                        }),
                        this.update();
                    var s = this.options.eventsEnabled;
                    s && this.enableEventListeners(),
                        (this.state.eventsEnabled = s);
                }
                return (
                    tt(e, [
                        {
                            key: "update",
                            value: function () {
                                return D.call(this);
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                return L.call(this);
                            },
                        },
                        {
                            key: "enableEventListeners",
                            value: function () {
                                return P.call(this);
                            },
                        },
                        {
                            key: "disableEventListeners",
                            value: function () {
                                return M.call(this);
                            },
                        },
                    ]),
                    e
                );
            })();
        return (
            (lt.Utils = (
                "undefined" == typeof window ? global : window
            ).PopperUtils),
            (lt.placements = it),
            (lt.Defaults = {
                placement: "bottom",
                positionFixed: !1,
                eventsEnabled: !0,
                removeOnDestroy: !1,
                onCreate: function () {},
                onUpdate: function () {},
                modifiers: {
                    shift: {
                        order: 100,
                        enabled: !0,
                        fn: function (t) {
                            var e = t.placement,
                                n = e.split("-")[0],
                                i = e.split("-")[1];
                            if (i) {
                                var r = t.offsets,
                                    a = r.reference,
                                    s = r.popper,
                                    o = -1 !== ["bottom", "top"].indexOf(n),
                                    l = o ? "left" : "top",
                                    u = o ? "width" : "height",
                                    d = {
                                        start: et({}, l, a[l]),
                                        end: et({}, l, a[l] + a[u] - s[u]),
                                    };
                                t.offsets.popper = nt({}, s, d[i]);
                            }
                            return t;
                        },
                    },
                    offset: {
                        order: 200,
                        enabled: !0,
                        fn: function (t, e) {
                            var n,
                                i = e.offset,
                                r = t.placement,
                                a = t.offsets,
                                s = a.popper,
                                o = a.reference,
                                l = r.split("-")[0];
                            return (
                                (n = F(+i) ? [+i, 0] : j(i, s, o, l)),
                                "left" === l
                                    ? ((s.top += n[0]), (s.left -= n[1]))
                                    : "right" === l
                                    ? ((s.top += n[0]), (s.left += n[1]))
                                    : "top" === l
                                    ? ((s.left += n[0]), (s.top -= n[1]))
                                    : "bottom" === l &&
                                      ((s.left += n[0]), (s.top += n[1])),
                                (t.popper = s),
                                t
                            );
                        },
                        offset: 0,
                    },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        fn: function (t, e) {
                            var n = e.boundariesElement || a(t.instance.popper);
                            t.instance.reference === n && (n = a(n));
                            var i = k("transform"),
                                r = t.instance.popper.style,
                                s = r.top,
                                o = r.left,
                                l = r[i];
                            (r.top = ""), (r.left = ""), (r[i] = "");
                            var u = _(
                                t.instance.popper,
                                t.instance.reference,
                                e.padding,
                                n,
                                t.positionFixed
                            );
                            (r.top = s),
                                (r.left = o),
                                (r[i] = l),
                                (e.boundaries = u);
                            var d = e.priority,
                                c = t.offsets.popper,
                                f = {
                                    primary: function (t) {
                                        var n = c[t];
                                        return (
                                            c[t] < u[t] &&
                                                !e.escapeWithReference &&
                                                (n = z(c[t], u[t])),
                                            et({}, t, n)
                                        );
                                    },
                                    secondary: function (t) {
                                        var n = "right" === t ? "left" : "top",
                                            i = c[n];
                                        return (
                                            c[t] > u[t] &&
                                                !e.escapeWithReference &&
                                                (i = H(
                                                    c[n],
                                                    u[t] -
                                                        ("right" === t
                                                            ? c.width
                                                            : c.height)
                                                )),
                                            et({}, n, i)
                                        );
                                    },
                                };
                            return (
                                d.forEach(function (t) {
                                    var e =
                                        -1 === ["left", "top"].indexOf(t)
                                            ? "secondary"
                                            : "primary";
                                    c = nt({}, c, f[e](t));
                                }),
                                (t.offsets.popper = c),
                                t
                            );
                        },
                        priority: ["left", "right", "top", "bottom"],
                        padding: 5,
                        boundariesElement: "scrollParent",
                    },
                    keepTogether: {
                        order: 400,
                        enabled: !0,
                        fn: function (t) {
                            var e = t.offsets,
                                n = e.popper,
                                i = e.reference,
                                r = t.placement.split("-")[0],
                                a = $,
                                s = -1 !== ["top", "bottom"].indexOf(r),
                                o = s ? "right" : "bottom",
                                l = s ? "left" : "top",
                                u = s ? "width" : "height";
                            return (
                                n[o] < a(i[l]) &&
                                    (t.offsets.popper[l] = a(i[l]) - n[u]),
                                n[l] > a(i[o]) &&
                                    (t.offsets.popper[l] = a(i[o])),
                                t
                            );
                        },
                    },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        fn: function (t, n) {
                            var i;
                            if (
                                !R(
                                    t.instance.modifiers,
                                    "arrow",
                                    "keepTogether"
                                )
                            )
                                return t;
                            var r = n.element;
                            if ("string" == typeof r) {
                                if (!(r = t.instance.popper.querySelector(r)))
                                    return t;
                            } else if (!t.instance.popper.contains(r)) return t;
                            var a = t.placement.split("-")[0],
                                s = t.offsets,
                                o = s.popper,
                                l = s.reference,
                                u = -1 !== ["left", "right"].indexOf(a),
                                d = u ? "height" : "width",
                                c = u ? "Top" : "Left",
                                f = c.toLowerCase(),
                                p = u ? "left" : "top",
                                m = u ? "bottom" : "right",
                                v = E(r)[d];
                            l[m] - v < o[f] &&
                                (t.offsets.popper[f] -= o[f] - (l[m] - v)),
                                l[f] + v > o[m] &&
                                    (t.offsets.popper[f] += l[f] + v - o[m]),
                                (t.offsets.popper = h(t.offsets.popper));
                            var g = l[f] + l[d] / 2 - v / 2,
                                b = e(t.instance.popper),
                                _ = parseFloat(b["margin" + c], 10),
                                y = parseFloat(b["border" + c + "Width"], 10),
                                A = g - t.offsets.popper[f] - _ - y;
                            return (
                                (A = z(H(o[d] - v, A), 0)),
                                (t.arrowElement = r),
                                (t.offsets.arrow =
                                    (et((i = {}), f, G(A)), et(i, p, ""), i)),
                                t
                            );
                        },
                        element: "[x-arrow]",
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        fn: function (t, e) {
                            if (x(t.instance.modifiers, "inner")) return t;
                            if (
                                t.flipped &&
                                t.placement === t.originalPlacement
                            )
                                return t;
                            var n = _(
                                    t.instance.popper,
                                    t.instance.reference,
                                    e.padding,
                                    e.boundariesElement,
                                    t.positionFixed
                                ),
                                i = t.placement.split("-")[0],
                                r = w(i),
                                a = t.placement.split("-")[1] || "",
                                s = [];
                            switch (e.behavior) {
                                case at:
                                    s = [i, r];
                                    break;
                                case st:
                                    s = U(i);
                                    break;
                                case ot:
                                    s = U(i, !0);
                                    break;
                                default:
                                    s = e.behavior;
                            }
                            return (
                                s.forEach(function (o, l) {
                                    if (i !== o || s.length === l + 1) return t;
                                    (i = t.placement.split("-")[0]), (r = w(i));
                                    var u = t.offsets.popper,
                                        d = t.offsets.reference,
                                        c = $,
                                        f =
                                            ("left" === i &&
                                                c(u.right) > c(d.left)) ||
                                            ("right" === i &&
                                                c(u.left) < c(d.right)) ||
                                            ("top" === i &&
                                                c(u.bottom) > c(d.top)) ||
                                            ("bottom" === i &&
                                                c(u.top) < c(d.bottom)),
                                        h = c(u.left) < c(n.left),
                                        p = c(u.right) > c(n.right),
                                        m = c(u.top) < c(n.top),
                                        v = c(u.bottom) > c(n.bottom),
                                        g =
                                            ("left" === i && h) ||
                                            ("right" === i && p) ||
                                            ("top" === i && m) ||
                                            ("bottom" === i && v),
                                        b = -1 !== ["top", "bottom"].indexOf(i),
                                        _ =
                                            !!e.flipVariations &&
                                            ((b && "start" === a && h) ||
                                                (b && "end" === a && p) ||
                                                (!b && "start" === a && m) ||
                                                (!b && "end" === a && v));
                                    (f || g || _) &&
                                        ((t.flipped = !0),
                                        (f || g) && (i = s[l + 1]),
                                        _ &&
                                            (a = (function (t) {
                                                return "end" === t
                                                    ? "start"
                                                    : "start" === t
                                                    ? "end"
                                                    : t;
                                            })(a)),
                                        (t.placement = i + (a ? "-" + a : "")),
                                        (t.offsets.popper = nt(
                                            {},
                                            t.offsets.popper,
                                            I(
                                                t.instance.popper,
                                                t.offsets.reference,
                                                t.placement
                                            )
                                        )),
                                        (t = S(
                                            t.instance.modifiers,
                                            t,
                                            "flip"
                                        )));
                                }),
                                t
                            );
                        },
                        behavior: "flip",
                        padding: 5,
                        boundariesElement: "viewport",
                    },
                    inner: {
                        order: 700,
                        enabled: !1,
                        fn: function (t) {
                            var e = t.placement,
                                n = e.split("-")[0],
                                i = t.offsets,
                                r = i.popper,
                                a = i.reference,
                                s = -1 !== ["left", "right"].indexOf(n),
                                o = -1 === ["top", "left"].indexOf(n);
                            return (
                                (r[s ? "left" : "top"] =
                                    a[n] - (o ? r[s ? "width" : "height"] : 0)),
                                (t.placement = w(e)),
                                (t.offsets.popper = h(r)),
                                t
                            );
                        },
                    },
                    hide: {
                        order: 800,
                        enabled: !0,
                        fn: function (t) {
                            if (
                                !R(
                                    t.instance.modifiers,
                                    "hide",
                                    "preventOverflow"
                                )
                            )
                                return t;
                            var e = t.offsets.reference,
                                n = T(t.instance.modifiers, function (t) {
                                    return "preventOverflow" === t.name;
                                }).boundaries;
                            if (
                                e.bottom < n.top ||
                                e.left > n.right ||
                                e.top > n.bottom ||
                                e.right < n.left
                            ) {
                                if (!0 === t.hide) return t;
                                (t.hide = !0),
                                    (t.attributes["x-out-of-boundaries"] = "");
                            } else {
                                if (!1 === t.hide) return t;
                                (t.hide = !1),
                                    (t.attributes["x-out-of-boundaries"] = !1);
                            }
                            return t;
                        },
                    },
                    computeStyle: {
                        order: 850,
                        enabled: !0,
                        fn: function (t, e) {
                            var n,
                                i,
                                r = e.x,
                                s = e.y,
                                o = t.offsets.popper,
                                l = T(t.instance.modifiers, function (t) {
                                    return "applyStyle" === t.name;
                                }).gpuAcceleration,
                                u = void 0 === l ? e.gpuAcceleration : l,
                                d = p(a(t.instance.popper)),
                                c = { position: o.position },
                                f = {
                                    left: $(o.left),
                                    top: G(o.top),
                                    bottom: G(o.bottom),
                                    right: $(o.right),
                                },
                                h = "bottom" === r ? "top" : "bottom",
                                m = "right" === s ? "left" : "right",
                                v = k("transform");
                            if (
                                ((i =
                                    "bottom" == h
                                        ? -d.height + f.bottom
                                        : f.top),
                                (n =
                                    "right" == m ? -d.width + f.right : f.left),
                                u && v)
                            )
                                (c[v] =
                                    "translate3d(" + n + "px, " + i + "px, 0)"),
                                    (c[h] = 0),
                                    (c[m] = 0),
                                    (c.willChange = "transform");
                            else {
                                var g = "bottom" == h ? -1 : 1,
                                    b = "right" == m ? -1 : 1;
                                (c[h] = i * g),
                                    (c[m] = n * b),
                                    (c.willChange = h + ", " + m);
                            }
                            var _ = { "x-placement": t.placement };
                            return (
                                (t.attributes = nt({}, _, t.attributes)),
                                (t.styles = nt({}, c, t.styles)),
                                (t.arrowStyles = nt(
                                    {},
                                    t.offsets.arrow,
                                    t.arrowStyles
                                )),
                                t
                            );
                        },
                        gpuAcceleration: !0,
                        x: "bottom",
                        y: "right",
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        fn: function (t) {
                            return (
                                B(t.instance.popper, t.styles),
                                (function (t, e) {
                                    Object.keys(e).forEach(function (n) {
                                        !1 === e[n]
                                            ? t.removeAttribute(n)
                                            : t.setAttribute(n, e[n]);
                                    });
                                })(t.instance.popper, t.attributes),
                                t.arrowElement &&
                                    Object.keys(t.arrowStyles).length &&
                                    B(t.arrowElement, t.arrowStyles),
                                t
                            );
                        },
                        onLoad: function (t, e, n, i, r) {
                            var a = C(r, e, t, n.positionFixed),
                                s = A(
                                    n.placement,
                                    a,
                                    e,
                                    t,
                                    n.modifiers.flip.boundariesElement,
                                    n.modifiers.flip.padding
                                );
                            return (
                                e.setAttribute("x-placement", s),
                                B(e, {
                                    position: n.positionFixed
                                        ? "fixed"
                                        : "absolute",
                                }),
                                n
                            );
                        },
                        gpuAcceleration: void 0,
                    },
                },
            }),
            lt
        );
    }),
    (function (t, e, n) {
        "use strict";
        var i,
            r,
            a,
            s,
            o,
            l,
            u,
            d,
            c,
            f,
            h,
            p,
            m,
            v,
            g,
            b,
            _ = "accessibleMegaMenu",
            y = {
                uuidPrefix: "accessible-megamenu",
                menuClass: "accessible-megamenu",
                topNavItemClass: "accessible-megamenu-top-nav-item",
                panelClass: "accessible-megamenu-panel",
                panelGroupClass: "accessible-megamenu-panel-group",
                hoverClass: "hover",
                focusClass: "focus",
                openClass: "open",
                openDelay: 0,
                closeDelay: 250,
            },
            A = {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38,
                keyMap: {
                    48: "0",
                    49: "1",
                    50: "2",
                    51: "3",
                    52: "4",
                    53: "5",
                    54: "6",
                    55: "7",
                    56: "8",
                    57: "9",
                    59: ";",
                    65: "a",
                    66: "b",
                    67: "c",
                    68: "d",
                    69: "e",
                    70: "f",
                    71: "g",
                    72: "h",
                    73: "i",
                    74: "j",
                    75: "k",
                    76: "l",
                    77: "m",
                    78: "n",
                    79: "o",
                    80: "p",
                    81: "q",
                    82: "r",
                    83: "s",
                    84: "t",
                    85: "u",
                    86: "v",
                    87: "w",
                    88: "x",
                    89: "y",
                    90: "z",
                    96: "0",
                    97: "1",
                    98: "2",
                    99: "3",
                    100: "4",
                    101: "5",
                    102: "6",
                    103: "7",
                    104: "8",
                    105: "9",
                    190: ".",
                },
            };
        function C(e, n) {
            (this.element = e),
                (this.settings = t.extend({}, y, n)),
                (this._defaults = y),
                (this._name = _),
                (this.mouseTimeoutID = null),
                (this.focusTimeoutID = null),
                (this.mouseFocused = !1),
                (this.justFocused = !1),
                this.init();
        }
        function E(e) {
            return (
                t.expr.filters.visible(e) &&
                !t(e)
                    .parents()
                    .addBack()
                    .filter(function () {
                        return "hidden" === t.css(this, "visibility");
                    }).length
            );
        }
        function w(e, n) {
            var i,
                r,
                a,
                s = e.nodeName.toLowerCase();
            return "area" === s
                ? ((r = (i = e.parentNode).name),
                  !(!e.href || !r || "map" !== i.nodeName.toLowerCase()) &&
                      !!(a = t("img[usemap=#" + r + "]")[0]) &&
                      E(a))
                : (/input|select|textarea|button|object/.test(s)
                      ? !e.disabled
                      : ("a" === s && e.href) || n) && E(e);
        }
        (C.prototype =
            ((v = 0),
            (g = ""),
            (b =
                "function" == typeof e.hasOwnProperty &&
                !!e.hasOwnProperty("ontouchstart")),
            (i = function (e) {
                return t(e)
                    .closest(":data(plugin_" + _ + ")")
                    .data("plugin_" + _);
            }),
            (r = function (e) {
                e = t(e);
                var n = this.settings;
                e.attr("id") ||
                    e.attr(
                        "id",
                        n.uuidPrefix + "-" + new Date().getTime() + "-" + ++v
                    );
            }),
            (a = function (e, i) {
                var r,
                    a = t(e.target),
                    s = this,
                    o = this.settings,
                    l = this.menu,
                    u = a.closest("." + o.topNavItemClass),
                    d = a.hasClass(o.panelClass)
                        ? a
                        : a.closest("." + o.panelClass);
                m.call(this, !0),
                    i
                        ? (u = l
                              .find(
                                  "." +
                                      o.topNavItemClass +
                                      " ." +
                                      o.openClass +
                                      ":first"
                              )
                              .closest("." + o.topNavItemClass)).is(
                              e.relatedTarget
                          ) || u.has(e.relatedTarget).length > 0
                            ? 0 === u.length &&
                              l
                                  .find("[aria-expanded=true]")
                                  .attr("aria-expanded", "false")
                                  .removeClass(o.openClass)
                                  .filter("." + o.panelClass)
                                  .attr("aria-hidden", "true")
                            : (u
                                  .find("[aria-expanded]")
                                  .attr("aria-expanded", "false")
                                  .removeClass(o.openClass)
                                  .filter("." + o.panelClass)
                                  .attr("aria-hidden", "true"),
                              (("keydown" === e.type &&
                                  e.keyCode === A.ESCAPE) ||
                                  "DOMAttrModified" === e.type) &&
                                  ((r = u.find(":tabbable:first")),
                                  setTimeout(function () {
                                      l
                                          .find(
                                              "[aria-expanded]." +
                                                  s.settings.panelClass
                                          )
                                          .off(
                                              "DOMAttrModified.accessible-megamenu"
                                          ),
                                          r.focus(),
                                          (s.justFocused = !1);
                                  }, 99)))
                        : (clearTimeout(s.focusTimeoutID),
                          u
                              .siblings()
                              .find("[aria-expanded]")
                              .attr("aria-expanded", "false")
                              .removeClass(o.openClass)
                              .filter("." + o.panelClass)
                              .attr("aria-hidden", "true"),
                          u
                              .find("[aria-expanded]")
                              .attr("aria-expanded", "true")
                              .addClass(o.openClass)
                              .filter("." + o.panelClass)
                              .attr("aria-hidden", "false"),
                          "mouseover" === e.type &&
                              a.is(":tabbable") &&
                              1 === u.length &&
                              0 === d.length &&
                              l.has(n.activeElement).length > 0 &&
                              (a.focus(), (s.justFocused = !1)),
                          m.call(s));
            }),
            (s = function (e) {
                var n = t(e.target).closest(":tabbable"),
                    i = n.closest("." + this.settings.topNavItemClass),
                    r = n.closest("." + this.settings.panelClass);
                1 === i.length &&
                    0 === r.length &&
                    1 === i.find("." + this.settings.panelClass).length &&
                    (n.hasClass(this.settings.openClass)
                        ? this.justFocused
                            ? (e.preventDefault(),
                              e.stopPropagation(),
                              (this.justFocused = !1))
                            : b &&
                              (e.preventDefault(),
                              e.stopPropagation(),
                              a.call(
                                  this,
                                  e,
                                  n.hasClass(this.settings.openClass)
                              ))
                        : (e.preventDefault(),
                          e.stopPropagation(),
                          a.call(this, e),
                          (this.justFocused = !1)));
            }),
            (o = function (e) {
                0 === t(e.target).closest(this.menu).length &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    a.call(this, e, !0));
            }),
            (l = function (e) {
                "aria-expanded" === e.originalEvent.attrName &&
                    "false" === e.originalEvent.newValue &&
                    t(e.target).hasClass(this.settings.openClass) &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    a.call(this, e, !0));
            }),
            (u = function (e) {
                clearTimeout(this.focusTimeoutID);
                var n = t(e.target),
                    i = n.closest("." + this.settings.panelClass);
                n
                    .addClass(this.settings.focusClass)
                    .on("click.accessible-megamenu", t.proxy(s, this)),
                    (this.justFocused = !this.mouseFocused),
                    (this.mouseFocused = !1),
                    this.panels.not(i).filter("." + this.settings.openClass)
                        .length && a.call(this, e);
            }),
            (d = function (n) {
                this.justFocused = !1;
                var i = this,
                    r = t(n.target),
                    s = r.closest("." + this.settings.topNavItemClass);
                r
                    .removeClass(this.settings.focusClass)
                    .off("click.accessible-megamenu"),
                    e.cvox
                        ? (i.focusTimeoutID = setTimeout(function () {
                              e.cvox.Api.getCurrentNode(function (t) {
                                  s.has(t).length
                                      ? clearTimeout(i.focusTimeoutID)
                                      : (i.focusTimeoutID = setTimeout(
                                            function (t, e, n) {
                                                a.call(t, e, n);
                                            },
                                            275,
                                            i,
                                            n,
                                            !0
                                        ));
                              });
                          }, 25))
                        : (i.focusTimeoutID = setTimeout(function () {
                              a.call(i, n, !0);
                          }, 300));
            }),
            (c = function (n) {
                var r,
                    o,
                    l,
                    u,
                    d,
                    c,
                    f = this.constructor === C ? this : i(this),
                    h = f.settings,
                    p = t(
                        t(this).is("." + h.hoverClass + ":tabbable")
                            ? this
                            : n.target
                    ),
                    m = f.menu,
                    v = f.topnavitems,
                    b = p.closest("." + h.topNavItemClass),
                    _ = m.find(":tabbable"),
                    y = p.hasClass(h.panelClass)
                        ? p
                        : p.closest("." + h.panelClass),
                    E = y.find("." + h.panelGroupClass),
                    w = p.closest("." + h.panelGroupClass),
                    I = n.keyCode || n.which,
                    T = !1,
                    S = A.keyMap[n.keyCode] || "",
                    D = 1 === b.length && 0 === y.length;
                if (
                    !p.is(
                        "input:focus, select:focus, textarea:focus, button:focus"
                    )
                ) {
                    switch (
                        (p.is("." + h.hoverClass + ":tabbable") &&
                            t("html").off("keydown.accessible-megamenu"),
                        I)
                    ) {
                        case A.ESCAPE:
                            a.call(f, n, !0);
                            break;
                        case A.DOWN:
                            n.preventDefault(),
                                D
                                    ? (a.call(f, n),
                                      (T =
                                          1 ===
                                          b
                                              .find(
                                                  "." +
                                                      h.panelClass +
                                                      " :tabbable:first"
                                              )
                                              .focus().length))
                                    : (T =
                                          1 ===
                                          _.filter(
                                              ":gt(" + _.index(p) + "):first"
                                          ).focus().length),
                                !T &&
                                    e.opera &&
                                    "[object Opera]" === opera.toString() &&
                                    (n.ctrlKey || n.metaKey) &&
                                    ((l = (_ = t(":tabbable")).index(p)),
                                    (T =
                                        1 ===
                                        t(
                                            ":tabbable:gt(" +
                                                t(":tabbable").index(p) +
                                                "):first"
                                        ).focus().length));
                            break;
                        case A.UP:
                            n.preventDefault(),
                                D && p.hasClass(h.openClass)
                                    ? (a.call(f, n, !0),
                                      (r = v.filter(
                                          ":lt(" + v.index(b) + "):last"
                                      )).children("." + h.panelClass).length &&
                                          (T =
                                              1 ===
                                              r
                                                  .children()
                                                  .attr("aria-expanded", "true")
                                                  .addClass(h.openClass)
                                                  .filter("." + h.panelClass)
                                                  .attr("aria-hidden", "false")
                                                  .find(":tabbable:last")
                                                  .focus()))
                                    : D ||
                                      (T =
                                          1 ===
                                          _.filter(
                                              ":lt(" + _.index(p) + "):last"
                                          ).focus().length),
                                !T &&
                                    e.opera &&
                                    "[object Opera]" === opera.toString() &&
                                    (n.ctrlKey || n.metaKey) &&
                                    ((l = (_ = t(":tabbable")).index(p)),
                                    (T =
                                        1 ===
                                        t(
                                            ":tabbable:lt(" +
                                                t(":tabbable").index(p) +
                                                "):first"
                                        ).focus().length));
                            break;
                        case A.RIGHT:
                            n.preventDefault(),
                                D
                                    ? (T =
                                          1 ===
                                          v
                                              .filter(
                                                  ":gt(" +
                                                      v.index(b) +
                                                      "):first"
                                              )
                                              .find(":tabbable:first")
                                              .focus().length)
                                    : (E.length &&
                                          w.length &&
                                          (T =
                                              1 ===
                                              E.filter(
                                                  ":gt(" +
                                                      E.index(w) +
                                                      "):first"
                                              )
                                                  .find(":tabbable:first")
                                                  .focus().length),
                                      T ||
                                          (T =
                                              1 ===
                                              b.find(":tabbable:first").focus()
                                                  .length));
                            break;
                        case A.LEFT:
                            n.preventDefault(),
                                D
                                    ? (T =
                                          1 ===
                                          v
                                              .filter(
                                                  ":lt(" + v.index(b) + "):last"
                                              )
                                              .find(":tabbable:first")
                                              .focus().length)
                                    : (E.length &&
                                          w.length &&
                                          (T =
                                              1 ===
                                              E.filter(
                                                  ":lt(" + E.index(w) + "):last"
                                              )
                                                  .find(":tabbable:first")
                                                  .focus().length),
                                      T ||
                                          (T =
                                              1 ===
                                              b.find(":tabbable:first").focus()
                                                  .length));
                            break;
                        case A.TAB:
                            (l = _.index(p)),
                                n.shiftKey && D && p.hasClass(h.openClass)
                                    ? (a.call(f, n, !0),
                                      (r = v.filter(
                                          ":lt(" + v.index(b) + "):last"
                                      )).children("." + h.panelClass).length &&
                                          (T = r
                                              .children()
                                              .attr("aria-expanded", "true")
                                              .addClass(h.openClass)
                                              .filter("." + h.panelClass)
                                              .attr("aria-hidden", "false")
                                              .find(":tabbable:last")
                                              .focus()))
                                    : n.shiftKey && l > 0
                                    ? (T =
                                          1 ===
                                          _.filter(
                                              ":lt(" + l + "):last"
                                          ).focus().length)
                                    : !n.shiftKey && l < _.length - 1
                                    ? (T =
                                          1 ===
                                          _.filter(
                                              ":gt(" + l + "):first"
                                          ).focus().length)
                                    : e.opera &&
                                      "[object Opera]" === opera.toString() &&
                                      ((l = (_ = t(":tabbable")).index(p)),
                                      (T = n.shiftKey
                                          ? 1 ===
                                            t(
                                                ":tabbable:lt(" +
                                                    t(":tabbable").index(p) +
                                                    "):last"
                                            ).focus().length
                                          : 1 ===
                                            t(
                                                ":tabbable:gt(" +
                                                    t(":tabbable").index(p) +
                                                    "):first"
                                            ).focus().length)),
                                T && n.preventDefault();
                            break;
                        case A.SPACE:
                            if (!D) return !0;
                            n.preventDefault(), s.call(f, n);
                            break;
                        case A.ENTER:
                            return !0;
                        default:
                            if (
                                (clearTimeout(this.keydownTimeoutID),
                                0 === (g += S !== g ? S : "").length)
                            )
                                return;
                            for (
                                this.keydownTimeoutID = setTimeout(function () {
                                    g = "";
                                }, 1e3),
                                    _ =
                                        D && !p.hasClass(h.openClass)
                                            ? _.filter(
                                                  ":not(." +
                                                      h.panelClass +
                                                      " :tabbable)"
                                              )
                                            : b.find(":tabbable"),
                                    n.shiftKey && (_ = t(_.get().reverse())),
                                    l = 0;
                                l < _.length;
                                l++
                            )
                                if ((u = _.eq(l)).is(p)) {
                                    o = 1 === g.length ? l + 1 : l;
                                    break;
                                }
                            for (
                                c = new RegExp(
                                    "^" +
                                        g.replace(
                                            /[\-\[\]{}()*+?.,\\\^$|#\s]/g,
                                            "\\$&"
                                        ),
                                    "i"
                                ),
                                    l = o;
                                l < _.length;
                                l++
                            )
                                if (
                                    ((u = _.eq(l)),
                                    (d = t.trim(u.text())),
                                    c.test(d))
                                ) {
                                    (T = !0), u.focus();
                                    break;
                                }
                            if (!T)
                                for (l = 0; l < o; l++)
                                    if (
                                        ((u = _.eq(l)),
                                        (d = t.trim(u.text())),
                                        c.test(d))
                                    ) {
                                        u.focus();
                                        break;
                                    }
                    }
                    f.justFocused = !1;
                }
            }),
            (f = function (e) {
                (t(e.target).is(this.settings.panelClass) ||
                    t(e.target).closest(":focusable").length) &&
                    (this.mouseFocused = !0),
                    clearTimeout(this.mouseTimeoutID),
                    (this.mouseTimeoutID = setTimeout(function () {
                        clearTimeout(this.focusTimeoutID);
                    }, 1));
            }),
            (h = function (e) {
                clearTimeout(this.mouseTimeoutID);
                var n = this;
                this.mouseTimeoutID = setTimeout(function () {
                    t(e.target).addClass(n.settings.hoverClass),
                        a.call(n, e),
                        t(e.target).is(":tabbable") &&
                            t("html").on(
                                "keydown.accessible-megamenu",
                                t.proxy(c, e.target)
                            );
                }, this.settings.openDelay);
            }),
            (p = function (e) {
                clearTimeout(this.mouseTimeoutID);
                var n = this;
                t(e.target).removeClass(n.settings.hoverClass),
                    (n.mouseTimeoutID = setTimeout(function () {
                        a.call(n, e, !0);
                    }, this.settings.closeDelay)),
                    t(e.target).is(":tabbable") &&
                        t("html").off("keydown.accessible-megamenu");
            }),
            (m = function (e) {
                var n = this.menu;
                e
                    ? (t("html").off(
                          "mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu,  pointerup.outside-accessible-megamenu"
                      ),
                      n
                          .find("[aria-expanded]." + this.settings.panelClass)
                          .off("DOMAttrModified.accessible-megamenu"))
                    : (t("html").on(
                          "mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu,  pointerup.outside-accessible-megamenu",
                          t.proxy(o, this)
                      ),
                      n
                          .find(
                              "[aria-expanded=true]." + this.settings.panelClass
                          )
                          .on(
                              "DOMAttrModified.accessible-megamenu",
                              t.proxy(l, this)
                          ));
            }),
            {
                constructor: C,
                init: function () {
                    var e = this.settings,
                        n = t(this.element),
                        i = n.children().first(),
                        r = i.children();
                    this.start(e, n, i, r);
                },
                start: function (e, i, a, o) {
                    var l = this;
                    (this.settings = e),
                        (this.menu = a),
                        (this.topnavitems = o),
                        i.attr("role", "navigation"),
                        a.addClass(e.menuClass),
                        o.each(function (n, i) {
                            var a, s;
                            (i = t(i)).addClass(e.topNavItemClass),
                                (a = i.find(":tabbable:first")),
                                (s = i.children(":not(:tabbable):last")),
                                r.call(l, a),
                                s.length &&
                                    (r.call(l, s),
                                    a.attr({
                                        "aria-controls": s.attr("id"),
                                        "aria-expanded": !1,
                                    }),
                                    s
                                        .attr({
                                            role: "region",
                                            "aria-expanded": !1,
                                            "aria-hidden": !0,
                                        })
                                        .addClass(e.panelClass)
                                        .not("[aria-labelledby]")
                                        .attr("aria-labelledby", a.attr("id")));
                        }),
                        (this.panels = a.find("." + e.panelClass)),
                        a
                            .on(
                                "focusin.accessible-megamenu",
                                ":focusable, ." + e.panelClass,
                                t.proxy(u, this)
                            )
                            .on(
                                "focusout.accessible-megamenu",
                                ":focusable, ." + e.panelClass,
                                t.proxy(d, this)
                            )
                            .on("keydown.accessible-megamenu", t.proxy(c, this))
                            .on(
                                "mouseover.accessible-megamenu",
                                t.proxy(h, this)
                            )
                            .on(
                                "mouseout.accessible-megamenu",
                                t.proxy(p, this)
                            )
                            .on(
                                "mousedown.accessible-megamenu",
                                t.proxy(f, this)
                            ),
                        b &&
                            a.on(
                                "touchstart.accessible-megamenu",
                                t.proxy(s, this)
                            ),
                        a.find("hr").attr("role", "separator"),
                        t(n.activeElement).closest(a).length &&
                            t(n.activeElement).trigger(
                                "focusin.accessible-megamenu"
                            );
                },
                getDefaults: function () {
                    return this._defaults;
                },
                getOption: function (t) {
                    return this.settings[t];
                },
                getAllOptions: function () {
                    return this.settings;
                },
                setOption: function (t, e, n) {
                    (this.settings[t] = e), n && this.init();
                },
            })),
            (t.fn[_] = function (e) {
                return this.each(function () {
                    t.data(this, "plugin_" + _) ||
                        t.data(
                            this,
                            "plugin_" + _,
                            new t.fn[_].AccessibleMegaMenu(this, e)
                        );
                });
            }),
            (t.fn[_].AccessibleMegaMenu = C),
            t.extend(t.expr[":"], {
                data: t.expr.createPseudo
                    ? t.expr.createPseudo(function (e) {
                          return function (n) {
                              return !!t.data(n, e);
                          };
                      })
                    : function (e, n, i) {
                          return !!t.data(e, i[3]);
                      },
                focusable: function (e) {
                    return w(e, !isNaN(t.attr(e, "tabindex")));
                },
                tabbable: function (e) {
                    var n = t.attr(e, "tabindex"),
                        i = isNaN(n);
                    return (i || n >= 0) && w(e, !i);
                },
            });
    })(jQuery, window, document),
    /*! Magnific Popup - v1.1.0 - 2016-02-20
     * http://dimsemenov.com/plugins/magnific-popup/
     * Copyright (c) 2016 Dmitry Semenov; */
    (function (t) {
        "function" == typeof define && define.amd
            ? define(["jquery"], t)
            : "object" == typeof exports
            ? t(require("jquery"))
            : t(window.jQuery || window.Zepto);
    })(function (t) {
        var e,
            n,
            i,
            r,
            a,
            s,
            o = "Close",
            l = "BeforeClose",
            u = "MarkupParse",
            d = "Open",
            c = "Change",
            f = "mfp",
            h = "." + f,
            p = "mfp-ready",
            m = "mfp-removing",
            v = "mfp-prevent-close",
            g = function () {},
            b = !!window.jQuery,
            _ = t(window),
            y = function (t, n) {
                e.ev.on(f + t + h, n);
            },
            A = function (e, n, i, r) {
                var a = document.createElement("div");
                return (
                    (a.className = "mfp-" + e),
                    i && (a.innerHTML = i),
                    r
                        ? n && n.appendChild(a)
                        : ((a = t(a)), n && a.appendTo(n)),
                    a
                );
            },
            C = function (n, i) {
                e.ev.triggerHandler(f + n, i),
                    e.st.callbacks &&
                        ((n = n.charAt(0).toLowerCase() + n.slice(1)),
                        e.st.callbacks[n] &&
                            e.st.callbacks[n].apply(e, t.isArray(i) ? i : [i]));
            },
            E = function (n) {
                return (
                    (n === s && e.currTemplate.closeBtn) ||
                        ((e.currTemplate.closeBtn = t(
                            e.st.closeMarkup.replace("%title%", e.st.tClose)
                        )),
                        (s = n)),
                    e.currTemplate.closeBtn
                );
            },
            w = function () {
                t.magnificPopup.instance ||
                    ((e = new g()).init(), (t.magnificPopup.instance = e));
            };
        (g.prototype = {
            constructor: g,
            init: function () {
                var n = navigator.appVersion;
                (e.isLowIE = e.isIE8 =
                    document.all && !document.addEventListener),
                    (e.isAndroid = /android/gi.test(n)),
                    (e.isIOS = /iphone|ipad|ipod/gi.test(n)),
                    (e.supportsTransition = (function () {
                        var t = document.createElement("p").style,
                            e = ["ms", "O", "Moz", "Webkit"];
                        if (void 0 !== t.transition) return !0;
                        for (; e.length; )
                            if (e.pop() + "Transition" in t) return !0;
                        return !1;
                    })()),
                    (e.probablyMobile =
                        e.isAndroid ||
                        e.isIOS ||
                        /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
                            navigator.userAgent
                        )),
                    (i = t(document)),
                    (e.popupsCache = {});
            },
            open: function (n) {
                var r;
                if (!1 === n.isObj) {
                    (e.items = n.items.toArray()), (e.index = 0);
                    var s,
                        o = n.items;
                    for (r = 0; r < o.length; r++)
                        if (
                            ((s = o[r]).parsed && (s = s.el[0]), s === n.el[0])
                        ) {
                            e.index = r;
                            break;
                        }
                } else
                    (e.items = t.isArray(n.items) ? n.items : [n.items]),
                        (e.index = n.index || 0);
                if (!e.isOpen) {
                    (e.types = []),
                        (a = ""),
                        n.mainEl && n.mainEl.length
                            ? (e.ev = n.mainEl.eq(0))
                            : (e.ev = i),
                        n.key
                            ? (e.popupsCache[n.key] ||
                                  (e.popupsCache[n.key] = {}),
                              (e.currTemplate = e.popupsCache[n.key]))
                            : (e.currTemplate = {}),
                        (e.st = t.extend(!0, {}, t.magnificPopup.defaults, n)),
                        (e.fixedContentPos =
                            "auto" === e.st.fixedContentPos
                                ? !e.probablyMobile
                                : e.st.fixedContentPos),
                        e.st.modal &&
                            ((e.st.closeOnContentClick = !1),
                            (e.st.closeOnBgClick = !1),
                            (e.st.showCloseBtn = !1),
                            (e.st.enableEscapeKey = !1)),
                        e.bgOverlay ||
                            ((e.bgOverlay = A("bg").on(
                                "click" + h,
                                function () {
                                    e.close();
                                }
                            )),
                            (e.wrap = A("wrap")
                                .attr("tabindex", -1)
                                .on("click" + h, function (t) {
                                    e._checkIfClose(t.target) && e.close();
                                })),
                            (e.container = A("container", e.wrap))),
                        (e.contentContainer = A("content")),
                        e.st.preloader &&
                            (e.preloader = A(
                                "preloader",
                                e.container,
                                e.st.tLoading
                            ));
                    var l = t.magnificPopup.modules;
                    for (r = 0; r < l.length; r++) {
                        var c = l[r];
                        (c = c.charAt(0).toUpperCase() + c.slice(1)),
                            e["init" + c].call(e);
                    }
                    C("BeforeOpen"),
                        e.st.showCloseBtn &&
                            (e.st.closeBtnInside
                                ? (y(u, function (t, e, n, i) {
                                      n.close_replaceWith = E(i.type);
                                  }),
                                  (a += " mfp-close-btn-in"))
                                : e.wrap.append(E())),
                        e.st.alignTop && (a += " mfp-align-top"),
                        e.fixedContentPos
                            ? e.wrap.css({
                                  overflow: e.st.overflowY,
                                  overflowX: "hidden",
                                  overflowY: e.st.overflowY,
                              })
                            : e.wrap.css({
                                  top: _.scrollTop(),
                                  position: "absolute",
                              }),
                        (!1 === e.st.fixedBgPos ||
                            ("auto" === e.st.fixedBgPos &&
                                !e.fixedContentPos)) &&
                            e.bgOverlay.css({
                                height: i.height(),
                                position: "absolute",
                            }),
                        e.st.enableEscapeKey &&
                            i.on("keyup" + h, function (t) {
                                27 === t.keyCode && e.close();
                            }),
                        _.on("resize" + h, function () {
                            e.updateSize();
                        }),
                        e.st.closeOnContentClick || (a += " mfp-auto-cursor"),
                        a && e.wrap.addClass(a);
                    var f = (e.wH = _.height()),
                        m = {};
                    if (e.fixedContentPos && e._hasScrollBar(f)) {
                        var v = e._getScrollbarSize();
                        v && (m.marginRight = v);
                    }
                    e.fixedContentPos &&
                        (e.isIE7
                            ? t("body, html").css("overflow", "hidden")
                            : (m.overflow = "hidden"));
                    var g = e.st.mainClass;
                    return (
                        e.isIE7 && (g += " mfp-ie7"),
                        g && e._addClassToMFP(g),
                        e.updateItemHTML(),
                        C("BuildControls"),
                        t("html").css(m),
                        e.bgOverlay
                            .add(e.wrap)
                            .prependTo(e.st.prependTo || t(document.body)),
                        (e._lastFocusedEl = document.activeElement),
                        setTimeout(function () {
                            e.content
                                ? (e._addClassToMFP(p), e._setFocus())
                                : e.bgOverlay.addClass(p),
                                i.on("focusin" + h, e._onFocusIn);
                        }, 16),
                        (e.isOpen = !0),
                        e.updateSize(f),
                        C(d),
                        n
                    );
                }
                e.updateItemHTML();
            },
            close: function () {
                e.isOpen &&
                    (C(l),
                    (e.isOpen = !1),
                    e.st.removalDelay && !e.isLowIE && e.supportsTransition
                        ? (e._addClassToMFP(m),
                          setTimeout(function () {
                              e._close();
                          }, e.st.removalDelay))
                        : e._close());
            },
            _close: function () {
                C(o);
                var n = m + " " + p + " ";
                if (
                    (e.bgOverlay.detach(),
                    e.wrap.detach(),
                    e.container.empty(),
                    e.st.mainClass && (n += e.st.mainClass + " "),
                    e._removeClassFromMFP(n),
                    e.fixedContentPos)
                ) {
                    var r = { marginRight: "" };
                    e.isIE7
                        ? t("body, html").css("overflow", "")
                        : (r.overflow = ""),
                        t("html").css(r);
                }
                i.off("keyup.mfp focusin" + h),
                    e.ev.off(h),
                    e.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                    e.bgOverlay.attr("class", "mfp-bg"),
                    e.container.attr("class", "mfp-container"),
                    !e.st.showCloseBtn ||
                        (e.st.closeBtnInside &&
                            !0 !== e.currTemplate[e.currItem.type]) ||
                        (e.currTemplate.closeBtn &&
                            e.currTemplate.closeBtn.detach()),
                    e.st.autoFocusLast &&
                        e._lastFocusedEl &&
                        t(e._lastFocusedEl).focus(),
                    (e.currItem = null),
                    (e.content = null),
                    (e.currTemplate = null),
                    (e.prevHeight = 0),
                    C("AfterClose");
            },
            updateSize: function (t) {
                if (e.isIOS) {
                    var n =
                            document.documentElement.clientWidth /
                            window.innerWidth,
                        i = window.innerHeight * n;
                    e.wrap.css("height", i), (e.wH = i);
                } else e.wH = t || _.height();
                e.fixedContentPos || e.wrap.css("height", e.wH), C("Resize");
            },
            updateItemHTML: function () {
                var n = e.items[e.index];
                e.contentContainer.detach(),
                    e.content && e.content.detach(),
                    n.parsed || (n = e.parseEl(e.index));
                var i = n.type;
                if (
                    (C("BeforeChange", [e.currItem ? e.currItem.type : "", i]),
                    (e.currItem = n),
                    !e.currTemplate[i])
                ) {
                    var a = !!e.st[i] && e.st[i].markup;
                    C("FirstMarkupParse", a), (e.currTemplate[i] = !a || t(a));
                }
                r &&
                    r !== n.type &&
                    e.container.removeClass("mfp-" + r + "-holder");
                var s = e["get" + i.charAt(0).toUpperCase() + i.slice(1)](
                    n,
                    e.currTemplate[i]
                );
                e.appendContent(s, i),
                    (n.preloaded = !0),
                    C(c, n),
                    (r = n.type),
                    e.container.prepend(e.contentContainer),
                    C("AfterChange");
            },
            appendContent: function (t, n) {
                (e.content = t),
                    t
                        ? e.st.showCloseBtn &&
                          e.st.closeBtnInside &&
                          !0 === e.currTemplate[n]
                            ? e.content.find(".mfp-close").length ||
                              e.content.append(E())
                            : (e.content = t)
                        : (e.content = ""),
                    C("BeforeAppend"),
                    e.container.addClass("mfp-" + n + "-holder"),
                    e.contentContainer.append(e.content);
            },
            parseEl: function (n) {
                var i,
                    r = e.items[n];
                if (
                    (r.tagName
                        ? (r = { el: t(r) })
                        : ((i = r.type), (r = { data: r, src: r.src })),
                    r.el)
                ) {
                    for (var a = e.types, s = 0; s < a.length; s++)
                        if (r.el.hasClass("mfp-" + a[s])) {
                            i = a[s];
                            break;
                        }
                    (r.src = r.el.attr("data-mfp-src")),
                        r.src || (r.src = r.el.attr("href"));
                }
                return (
                    (r.type = i || e.st.type || "inline"),
                    (r.index = n),
                    (r.parsed = !0),
                    (e.items[n] = r),
                    C("ElementParse", r),
                    e.items[n]
                );
            },
            addGroup: function (t, n) {
                var i = function (i) {
                    (i.mfpEl = this), e._openClick(i, t, n);
                };
                n || (n = {});
                var r = "click.magnificPopup";
                (n.mainEl = t),
                    n.items
                        ? ((n.isObj = !0), t.off(r).on(r, i))
                        : ((n.isObj = !1),
                          n.delegate
                              ? t.off(r).on(r, n.delegate, i)
                              : ((n.items = t), t.off(r).on(r, i)));
            },
            _openClick: function (n, i, r) {
                if (
                    (void 0 !== r.midClick
                        ? r.midClick
                        : t.magnificPopup.defaults.midClick) ||
                    !(
                        2 === n.which ||
                        n.ctrlKey ||
                        n.metaKey ||
                        n.altKey ||
                        n.shiftKey
                    )
                ) {
                    var a =
                        void 0 !== r.disableOn
                            ? r.disableOn
                            : t.magnificPopup.defaults.disableOn;
                    if (a)
                        if (t.isFunction(a)) {
                            if (!a.call(e)) return !0;
                        } else if (_.width() < a) return !0;
                    n.type &&
                        (n.preventDefault(), e.isOpen && n.stopPropagation()),
                        (r.el = t(n.mfpEl)),
                        r.delegate && (r.items = i.find(r.delegate)),
                        e.open(r);
                }
            },
            updateStatus: function (t, i) {
                if (e.preloader) {
                    n !== t && e.container.removeClass("mfp-s-" + n),
                        i || "loading" !== t || (i = e.st.tLoading);
                    var r = { status: t, text: i };
                    C("UpdateStatus", r),
                        (t = r.status),
                        (i = r.text),
                        e.preloader.html(i),
                        e.preloader.find("a").on("click", function (t) {
                            t.stopImmediatePropagation();
                        }),
                        e.container.addClass("mfp-s-" + t),
                        (n = t);
                }
            },
            _checkIfClose: function (n) {
                if (!t(n).hasClass(v)) {
                    var i = e.st.closeOnContentClick,
                        r = e.st.closeOnBgClick;
                    if (i && r) return !0;
                    if (
                        !e.content ||
                        t(n).hasClass("mfp-close") ||
                        (e.preloader && n === e.preloader[0])
                    )
                        return !0;
                    if (n === e.content[0] || t.contains(e.content[0], n)) {
                        if (i) return !0;
                    } else if (r && t.contains(document, n)) return !0;
                    return !1;
                }
            },
            _addClassToMFP: function (t) {
                e.bgOverlay.addClass(t), e.wrap.addClass(t);
            },
            _removeClassFromMFP: function (t) {
                this.bgOverlay.removeClass(t), e.wrap.removeClass(t);
            },
            _hasScrollBar: function (t) {
                return (
                    (e.isIE7 ? i.height() : document.body.scrollHeight) >
                    (t || _.height())
                );
            },
            _setFocus: function () {
                (e.st.focus
                    ? e.content.find(e.st.focus).eq(0)
                    : e.wrap
                ).focus();
            },
            _onFocusIn: function (n) {
                if (n.target !== e.wrap[0] && !t.contains(e.wrap[0], n.target))
                    return e._setFocus(), !1;
            },
            _parseMarkup: function (e, n, i) {
                var r;
                i.data && (n = t.extend(i.data, n)),
                    C(u, [e, n, i]),
                    t.each(n, function (n, i) {
                        if (void 0 === i || !1 === i) return !0;
                        if ((r = n.split("_")).length > 1) {
                            var a = e.find(h + "-" + r[0]);
                            if (a.length > 0) {
                                var s = r[1];
                                "replaceWith" === s
                                    ? a[0] !== i[0] && a.replaceWith(i)
                                    : "img" === s
                                    ? a.is("img")
                                        ? a.attr("src", i)
                                        : a.replaceWith(
                                              t("<img>")
                                                  .attr("src", i)
                                                  .attr(
                                                      "class",
                                                      a.attr("class")
                                                  )
                                          )
                                    : a.attr(r[1], i);
                            }
                        } else e.find(h + "-" + n).html(i);
                    });
            },
            _getScrollbarSize: function () {
                if (void 0 === e.scrollbarSize) {
                    var t = document.createElement("div");
                    (t.style.cssText =
                        "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
                        document.body.appendChild(t),
                        (e.scrollbarSize = t.offsetWidth - t.clientWidth),
                        document.body.removeChild(t);
                }
                return e.scrollbarSize;
            },
        }),
            (t.magnificPopup = {
                instance: null,
                proto: g.prototype,
                modules: [],
                open: function (e, n) {
                    return (
                        w(),
                        ((e = e ? t.extend(!0, {}, e) : {}).isObj = !0),
                        (e.index = n || 0),
                        this.instance.open(e)
                    );
                },
                close: function () {
                    return (
                        t.magnificPopup.instance &&
                        t.magnificPopup.instance.close()
                    );
                },
                registerModule: function (e, n) {
                    n.options && (t.magnificPopup.defaults[e] = n.options),
                        t.extend(this.proto, n.proto),
                        this.modules.push(e);
                },
                defaults: {
                    disableOn: 0,
                    key: null,
                    midClick: !1,
                    mainClass: "",
                    preloader: !0,
                    focus: "",
                    closeOnContentClick: !1,
                    closeOnBgClick: !0,
                    closeBtnInside: !0,
                    showCloseBtn: !0,
                    enableEscapeKey: !0,
                    modal: !1,
                    alignTop: !1,
                    removalDelay: 0,
                    prependTo: null,
                    fixedContentPos: "auto",
                    fixedBgPos: "auto",
                    overflowY: "auto",
                    closeMarkup:
                        '<button title="%title%" type="button" class="mfp-close">×</button>',
                    tClose: "Close (Esc)",
                    tLoading: "Loading...",
                    autoFocusLast: !0,
                },
            }),
            (t.fn.magnificPopup = function (n) {
                w();
                var i = t(this);
                if ("string" == typeof n)
                    if ("open" === n) {
                        var r,
                            a = b
                                ? i.data("magnificPopup")
                                : i[0].magnificPopup,
                            s = parseInt(arguments[1], 10) || 0;
                        a.items
                            ? (r = a.items[s])
                            : ((r = i),
                              a.delegate && (r = r.find(a.delegate)),
                              (r = r.eq(s))),
                            e._openClick({ mfpEl: r }, i, a);
                    } else
                        e.isOpen &&
                            e[n].apply(
                                e,
                                Array.prototype.slice.call(arguments, 1)
                            );
                else
                    (n = t.extend(!0, {}, n)),
                        b
                            ? i.data("magnificPopup", n)
                            : (i[0].magnificPopup = n),
                        e.addGroup(i, n);
                return i;
            });
        var I,
            T,
            S,
            D = "inline",
            x = function () {
                S && (T.after(S.addClass(I)).detach(), (S = null));
            };
        t.magnificPopup.registerModule(D, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found",
            },
            proto: {
                initInline: function () {
                    e.types.push(D),
                        y(o + "." + D, function () {
                            x();
                        });
                },
                getInline: function (n, i) {
                    if ((x(), n.src)) {
                        var r = e.st.inline,
                            a = t(n.src);
                        if (a.length) {
                            var s = a[0].parentNode;
                            s &&
                                s.tagName &&
                                (T ||
                                    ((I = r.hiddenClass),
                                    (T = A(I)),
                                    (I = "mfp-" + I)),
                                (S = a.after(T).detach().removeClass(I))),
                                e.updateStatus("ready");
                        } else
                            e.updateStatus("error", r.tNotFound),
                                (a = t("<div>"));
                        return (n.inlineElement = a), a;
                    }
                    return e.updateStatus("ready"), e._parseMarkup(i, {}, n), i;
                },
            },
        });
        var k,
            L = "ajax",
            N = function () {
                k && t(document.body).removeClass(k);
            },
            O = function () {
                N(), e.req && e.req.abort();
            };
        t.magnificPopup.registerModule(L, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.',
            },
            proto: {
                initAjax: function () {
                    e.types.push(L),
                        (k = e.st.ajax.cursor),
                        y(o + "." + L, O),
                        y("BeforeChange." + L, O);
                },
                getAjax: function (n) {
                    k && t(document.body).addClass(k),
                        e.updateStatus("loading");
                    var i = t.extend(
                        {
                            url: n.src,
                            success: function (i, r, a) {
                                var s = { data: i, xhr: a };
                                C("ParseAjax", s),
                                    e.appendContent(t(s.data), L),
                                    (n.finished = !0),
                                    N(),
                                    e._setFocus(),
                                    setTimeout(function () {
                                        e.wrap.addClass(p);
                                    }, 16),
                                    e.updateStatus("ready"),
                                    C("AjaxContentAdded");
                            },
                            error: function () {
                                N(),
                                    (n.finished = n.loadError = !0),
                                    e.updateStatus(
                                        "error",
                                        e.st.ajax.tError.replace("%url%", n.src)
                                    );
                            },
                        },
                        e.st.ajax.settings
                    );
                    return (e.req = t.ajax(i)), "";
                },
            },
        });
        var V,
            P = function (n) {
                if (n.data && void 0 !== n.data.title) return n.data.title;
                var i = e.st.image.titleSrc;
                if (i) {
                    if (t.isFunction(i)) return i.call(e, n);
                    if (n.el) return n.el.attr(i) || "";
                }
                return "";
            };
        t.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.',
            },
            proto: {
                initImage: function () {
                    var n = e.st.image,
                        i = ".image";
                    e.types.push("image"),
                        y(d + i, function () {
                            "image" === e.currItem.type &&
                                n.cursor &&
                                t(document.body).addClass(n.cursor);
                        }),
                        y(o + i, function () {
                            n.cursor && t(document.body).removeClass(n.cursor),
                                _.off("resize" + h);
                        }),
                        y("Resize" + i, e.resizeImage),
                        e.isLowIE && y("AfterChange", e.resizeImage);
                },
                resizeImage: function () {
                    var t = e.currItem;
                    if (t && t.img && e.st.image.verticalFit) {
                        var n = 0;
                        e.isLowIE &&
                            (n =
                                parseInt(t.img.css("padding-top"), 10) +
                                parseInt(t.img.css("padding-bottom"), 10)),
                            t.img.css("max-height", e.wH - n);
                    }
                },
                _onImageHasSize: function (t) {
                    t.img &&
                        ((t.hasSize = !0),
                        V && clearInterval(V),
                        (t.isCheckingImgSize = !1),
                        C("ImageHasSize", t),
                        t.imgHidden &&
                            (e.content && e.content.removeClass("mfp-loading"),
                            (t.imgHidden = !1)));
                },
                findImageSize: function (t) {
                    var n = 0,
                        i = t.img[0],
                        r = function (a) {
                            V && clearInterval(V),
                                (V = setInterval(function () {
                                    i.naturalWidth > 0
                                        ? e._onImageHasSize(t)
                                        : (n > 200 && clearInterval(V),
                                          3 === ++n
                                              ? r(10)
                                              : 40 === n
                                              ? r(50)
                                              : 100 === n && r(500));
                                }, a));
                        };
                    r(1);
                },
                getImage: function (n, i) {
                    var r = 0,
                        a = function () {
                            n &&
                                (n.img[0].complete
                                    ? (n.img.off(".mfploader"),
                                      n === e.currItem &&
                                          (e._onImageHasSize(n),
                                          e.updateStatus("ready")),
                                      (n.hasSize = !0),
                                      (n.loaded = !0),
                                      C("ImageLoadComplete"))
                                    : ++r < 200
                                    ? setTimeout(a, 100)
                                    : s());
                        },
                        s = function () {
                            n &&
                                (n.img.off(".mfploader"),
                                n === e.currItem &&
                                    (e._onImageHasSize(n),
                                    e.updateStatus(
                                        "error",
                                        o.tError.replace("%url%", n.src)
                                    )),
                                (n.hasSize = !0),
                                (n.loaded = !0),
                                (n.loadError = !0));
                        },
                        o = e.st.image,
                        l = i.find(".mfp-img");
                    if (l.length) {
                        var u = document.createElement("img");
                        (u.className = "mfp-img"),
                            n.el &&
                                n.el.find("img").length &&
                                (u.alt = n.el.find("img").attr("alt")),
                            (n.img = t(u)
                                .on("load.mfploader", a)
                                .on("error.mfploader", s)),
                            (u.src = n.src),
                            l.is("img") && (n.img = n.img.clone()),
                            (u = n.img[0]).naturalWidth > 0
                                ? (n.hasSize = !0)
                                : u.width || (n.hasSize = !1);
                    }
                    return (
                        e._parseMarkup(
                            i,
                            { title: P(n), img_replaceWith: n.img },
                            n
                        ),
                        e.resizeImage(),
                        n.hasSize
                            ? (V && clearInterval(V),
                              n.loadError
                                  ? (i.addClass("mfp-loading"),
                                    e.updateStatus(
                                        "error",
                                        o.tError.replace("%url%", n.src)
                                    ))
                                  : (i.removeClass("mfp-loading"),
                                    e.updateStatus("ready")),
                              i)
                            : (e.updateStatus("loading"),
                              (n.loading = !0),
                              n.hasSize ||
                                  ((n.imgHidden = !0),
                                  i.addClass("mfp-loading"),
                                  e.findImageSize(n)),
                              i)
                    );
                },
            },
        });
        var M;
        t.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function (t) {
                    return t.is("img") ? t : t.find("img");
                },
            },
            proto: {
                initZoom: function () {
                    var t,
                        n = e.st.zoom,
                        i = ".zoom";
                    if (n.enabled && e.supportsTransition) {
                        var r,
                            a,
                            s = n.duration,
                            u = function (t) {
                                var e = t
                                        .clone()
                                        .removeAttr("style")
                                        .removeAttr("class")
                                        .addClass("mfp-animated-image"),
                                    i =
                                        "all " +
                                        n.duration / 1e3 +
                                        "s " +
                                        n.easing,
                                    r = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden",
                                    },
                                    a = "transition";
                                return (
                                    (r["-webkit-" + a] =
                                        r["-moz-" + a] =
                                        r["-o-" + a] =
                                        r[a] =
                                            i),
                                    e.css(r),
                                    e
                                );
                            },
                            d = function () {
                                e.content.css("visibility", "visible");
                            };
                        y("BuildControls" + i, function () {
                            if (e._allowZoom()) {
                                if (
                                    (clearTimeout(r),
                                    e.content.css("visibility", "hidden"),
                                    !(t = e._getItemToZoom()))
                                )
                                    return void d();
                                (a = u(t)).css(e._getOffset()),
                                    e.wrap.append(a),
                                    (r = setTimeout(function () {
                                        a.css(e._getOffset(!0)),
                                            (r = setTimeout(function () {
                                                d(),
                                                    setTimeout(function () {
                                                        a.remove(),
                                                            (t = a = null),
                                                            C(
                                                                "ZoomAnimationEnded"
                                                            );
                                                    }, 16);
                                            }, s));
                                    }, 16));
                            }
                        }),
                            y(l + i, function () {
                                if (e._allowZoom()) {
                                    if (
                                        (clearTimeout(r),
                                        (e.st.removalDelay = s),
                                        !t)
                                    ) {
                                        if (!(t = e._getItemToZoom())) return;
                                        a = u(t);
                                    }
                                    a.css(e._getOffset(!0)),
                                        e.wrap.append(a),
                                        e.content.css("visibility", "hidden"),
                                        setTimeout(function () {
                                            a.css(e._getOffset());
                                        }, 16);
                                }
                            }),
                            y(o + i, function () {
                                e._allowZoom() &&
                                    (d(), a && a.remove(), (t = null));
                            });
                    }
                },
                _allowZoom: function () {
                    return "image" === e.currItem.type;
                },
                _getItemToZoom: function () {
                    return !!e.currItem.hasSize && e.currItem.img;
                },
                _getOffset: function (n) {
                    var i,
                        r = (i = n
                            ? e.currItem.img
                            : e.st.zoom.opener(
                                  e.currItem.el || e.currItem
                              )).offset(),
                        a = parseInt(i.css("padding-top"), 10),
                        s = parseInt(i.css("padding-bottom"), 10);
                    r.top -= t(window).scrollTop() - a;
                    var o = {
                        width: i.width(),
                        height:
                            (b ? i.innerHeight() : i[0].offsetHeight) - s - a,
                    };
                    return (
                        void 0 === M &&
                            (M =
                                void 0 !==
                                document.createElement("p").style.MozTransform),
                        M
                            ? (o["-moz-transform"] = o.transform =
                                  "translate(" + r.left + "px," + r.top + "px)")
                            : ((o.left = r.left), (o.top = r.top)),
                        o
                    );
                },
            },
        });
        var F = "iframe",
            B = function (t) {
                if (e.currTemplate[F]) {
                    var n = e.currTemplate[F].find("iframe");
                    n.length &&
                        (t || (n[0].src = "//about:blank"),
                        e.isIE8 && n.css("display", t ? "block" : "none"));
                }
            };
        t.magnificPopup.registerModule(F, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1",
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1",
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed",
                    },
                },
            },
            proto: {
                initIframe: function () {
                    e.types.push(F),
                        y("BeforeChange", function (t, e, n) {
                            e !== n && (e === F ? B() : n === F && B(!0));
                        }),
                        y(o + "." + F, function () {
                            B();
                        });
                },
                getIframe: function (n, i) {
                    var r = n.src,
                        a = e.st.iframe;
                    t.each(a.patterns, function () {
                        if (r.indexOf(this.index) > -1)
                            return (
                                this.id &&
                                    (r =
                                        "string" == typeof this.id
                                            ? r.substr(
                                                  r.lastIndexOf(this.id) +
                                                      this.id.length,
                                                  r.length
                                              )
                                            : this.id.call(this, r)),
                                (r = this.src.replace("%id%", r)),
                                !1
                            );
                    });
                    var s = {};
                    return (
                        a.srcAction && (s[a.srcAction] = r),
                        e._parseMarkup(i, s, n),
                        e.updateStatus("ready"),
                        i
                    );
                },
            },
        });
        var R = function (t) {
                var n = e.items.length;
                return t > n - 1 ? t - n : t < 0 ? n + t : t;
            },
            U = function (t, e, n) {
                return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, n);
            };
        t.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup:
                    '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%",
            },
            proto: {
                initGallery: function () {
                    var n = e.st.gallery,
                        r = ".mfp-gallery";
                    if (((e.direction = !0), !n || !n.enabled)) return !1;
                    (a += " mfp-gallery"),
                        y(d + r, function () {
                            n.navigateByImgClick &&
                                e.wrap.on("click" + r, ".mfp-img", function () {
                                    if (e.items.length > 1) return e.next(), !1;
                                }),
                                i.on("keydown" + r, function (t) {
                                    37 === t.keyCode
                                        ? e.prev()
                                        : 39 === t.keyCode && e.next();
                                });
                        }),
                        y("UpdateStatus" + r, function (t, n) {
                            n.text &&
                                (n.text = U(
                                    n.text,
                                    e.currItem.index,
                                    e.items.length
                                ));
                        }),
                        y(u + r, function (t, i, r, a) {
                            var s = e.items.length;
                            r.counter = s > 1 ? U(n.tCounter, a.index, s) : "";
                        }),
                        y("BuildControls" + r, function () {
                            if (
                                e.items.length > 1 &&
                                n.arrows &&
                                !e.arrowLeft
                            ) {
                                var i = n.arrowMarkup,
                                    r = (e.arrowLeft = t(
                                        i
                                            .replace(/%title%/gi, n.tPrev)
                                            .replace(/%dir%/gi, "left")
                                    ).addClass(v)),
                                    a = (e.arrowRight = t(
                                        i
                                            .replace(/%title%/gi, n.tNext)
                                            .replace(/%dir%/gi, "right")
                                    ).addClass(v));
                                r.click(function () {
                                    e.prev();
                                }),
                                    a.click(function () {
                                        e.next();
                                    }),
                                    e.container.append(r.add(a));
                            }
                        }),
                        y(c + r, function () {
                            e._preloadTimeout &&
                                clearTimeout(e._preloadTimeout),
                                (e._preloadTimeout = setTimeout(function () {
                                    e.preloadNearbyImages(),
                                        (e._preloadTimeout = null);
                                }, 16));
                        }),
                        y(o + r, function () {
                            i.off(r),
                                e.wrap.off("click" + r),
                                (e.arrowRight = e.arrowLeft = null);
                        });
                },
                next: function () {
                    (e.direction = !0),
                        (e.index = R(e.index + 1)),
                        e.updateItemHTML();
                },
                prev: function () {
                    (e.direction = !1),
                        (e.index = R(e.index - 1)),
                        e.updateItemHTML();
                },
                goTo: function (t) {
                    (e.direction = t >= e.index),
                        (e.index = t),
                        e.updateItemHTML();
                },
                preloadNearbyImages: function () {
                    var t,
                        n = e.st.gallery.preload,
                        i = Math.min(n[0], e.items.length),
                        r = Math.min(n[1], e.items.length);
                    for (t = 1; t <= (e.direction ? r : i); t++)
                        e._preloadItem(e.index + t);
                    for (t = 1; t <= (e.direction ? i : r); t++)
                        e._preloadItem(e.index - t);
                },
                _preloadItem: function (n) {
                    if (((n = R(n)), !e.items[n].preloaded)) {
                        var i = e.items[n];
                        i.parsed || (i = e.parseEl(n)),
                            C("LazyLoad", i),
                            "image" === i.type &&
                                (i.img = t('<img class="mfp-img" />')
                                    .on("load.mfploader", function () {
                                        i.hasSize = !0;
                                    })
                                    .on("error.mfploader", function () {
                                        (i.hasSize = !0),
                                            (i.loadError = !0),
                                            C("LazyLoadError", i);
                                    })
                                    .attr("src", i.src)),
                            (i.preloaded = !0);
                    }
                },
            },
        });
        var j = "retina";
        t.magnificPopup.registerModule(j, {
            options: {
                replaceSrc: function (t) {
                    return t.src.replace(/\.\w+$/, function (t) {
                        return "@2x" + t;
                    });
                },
                ratio: 1,
            },
            proto: {
                initRetina: function () {
                    if (window.devicePixelRatio > 1) {
                        var t = e.st.retina,
                            n = t.ratio;
                        (n = isNaN(n) ? n() : n) > 1 &&
                            (y("ImageHasSize." + j, function (t, e) {
                                e.img.css({
                                    "max-width": e.img[0].naturalWidth / n,
                                    width: "100%",
                                });
                            }),
                            y("ElementParse." + j, function (e, i) {
                                i.src = t.replaceSrc(i, n);
                            }));
                    }
                },
            },
        }),
            w();
    }),
    (function (t) {
        "use strict";
        t.fn.typer = function (e) {
            function n(t, e) {
                l < e.length
                    ? ((r = e[l].split("")),
                      (a = r.length),
                      setTimeout(function () {
                          t.append(r[o]),
                              ++o < a
                                  ? n(t, e)
                                  : ((o = 0),
                                    l++,
                                    setTimeout(function () {
                                        i(t, function () {
                                            n(t, e);
                                        });
                                    }, s.backspaceDelay));
                      }, s.typeSpeed))
                    : s.repeat &&
                      (function (t, e) {
                          (l = 0),
                              setTimeout(function () {
                                  n(t, e);
                              }, s.repeatDelay);
                      })(t, e);
            }
            function i(t, e) {
                setTimeout(function () {
                    t.text(t.text().slice(0, -1)),
                        0 < t.text().length
                            ? i(t, e)
                            : "function" == typeof e && e();
                }, s.backspaceSpeed);
            }
            var r,
                a,
                s = t.extend(
                    {
                        typeSpeed: 60,
                        backspaceSpeed: 20,
                        backspaceDelay: 800,
                        repeatDelay: 1e3,
                        repeat: !0,
                        autoStart: !0,
                        startDelay: 100,
                        useCursor: !0,
                        strings: ["Typer.js plugin"],
                    },
                    e
                ),
                o = 0,
                l = 0;
            return this.each(function () {
                var e,
                    i = t(this);
                s.autoStart &&
                    (i.append('<span class="typed"></span>'),
                    s.useCursor &&
                        (i.append('<span class="typed_cursor">&#x7c;</span>'),
                        (function (t) {
                            setInterval(function () {
                                t.fadeOut(400).fadeIn(400);
                            }, 900);
                        })(i.children(".typed_cursor"))),
                    (e = i.children(".typed")),
                    setTimeout(function () {
                        n(e, s.strings);
                    }, s.startDelay));
            });
        };
    })(jQuery),
    function () {
        ("undefined" != typeof exports && null !== exports
            ? exports
            : this
        ).Lethargy = (function () {
            function t(t, e, n, i) {
                (this.stability = null != t ? Math.abs(t) : 8),
                    (this.sensitivity = null != e ? 1 + Math.abs(e) : 100),
                    (this.tolerance = null != n ? 1 + Math.abs(n) : 1.1),
                    (this.delay = null != i ? i : 150),
                    (this.lastUpDeltas = function () {
                        var t, e, n;
                        for (
                            n = [], t = 1, e = 2 * this.stability;
                            e >= 1 ? e >= t : t >= e;
                            e >= 1 ? t++ : t--
                        )
                            n.push(null);
                        return n;
                    }.call(this)),
                    (this.lastDownDeltas = function () {
                        var t, e, n;
                        for (
                            n = [], t = 1, e = 2 * this.stability;
                            e >= 1 ? e >= t : t >= e;
                            e >= 1 ? t++ : t--
                        )
                            n.push(null);
                        return n;
                    }.call(this)),
                    (this.deltasTimestamp = function () {
                        var t, e, n;
                        for (
                            n = [], t = 1, e = 2 * this.stability;
                            e >= 1 ? e >= t : t >= e;
                            e >= 1 ? t++ : t--
                        )
                            n.push(null);
                        return n;
                    }.call(this));
            }
            return (
                (t.prototype.check = function (t) {
                    var e;
                    return (
                        null != (t = t.originalEvent || t).wheelDelta
                            ? (e = t.wheelDelta)
                            : null != t.deltaY
                            ? (e = -40 * t.deltaY)
                            : (null != t.detail || 0 === t.detail) &&
                              (e = -40 * t.detail),
                        this.deltasTimestamp.push(Date.now()),
                        this.deltasTimestamp.shift(),
                        e > 0
                            ? (this.lastUpDeltas.push(e),
                              this.lastUpDeltas.shift(),
                              this.isInertia(1))
                            : (this.lastDownDeltas.push(e),
                              this.lastDownDeltas.shift(),
                              this.isInertia(-1))
                    );
                }),
                (t.prototype.isInertia = function (t) {
                    var e, n, i, r, a, s, o;
                    return null ===
                        (e =
                            -1 === t
                                ? this.lastDownDeltas
                                : this.lastUpDeltas)[0]
                        ? t
                        : !(
                              this.deltasTimestamp[2 * this.stability - 2] +
                                  this.delay >
                                  Date.now() &&
                              e[0] === e[2 * this.stability - 1]
                          ) &&
                              ((i = e.slice(0, this.stability)),
                              (n = e.slice(this.stability, 2 * this.stability)),
                              (o = i.reduce(function (t, e) {
                                  return t + e;
                              })),
                              (a = n.reduce(function (t, e) {
                                  return t + e;
                              })),
                              (s = o / i.length),
                              (r = a / n.length),
                              Math.abs(s) < Math.abs(r * this.tolerance) &&
                                  this.sensitivity < Math.abs(r) &&
                                  t);
                }),
                (t.prototype.showLastUpDeltas = function () {
                    return this.lastUpDeltas;
                }),
                (t.prototype.showLastDownDeltas = function () {
                    return this.lastDownDeltas;
                }),
                t
            );
        })();
    }.call(this),
    (function (t) {
        "use strict";
        function e() {}
        function n(t, e) {
            for (var n = t.length; n--; ) if (t[n].listener === e) return n;
            return -1;
        }
        function i(t) {
            return function () {
                return this[t].apply(this, arguments);
            };
        }
        function r(t) {
            return (
                "function" == typeof t ||
                t instanceof RegExp ||
                (!(!t || "object" != typeof t) && r(t.listener))
            );
        }
        var a = e.prototype,
            s = t.EventEmitter;
        (a.getListeners = function (t) {
            var e,
                n,
                i = this._getEvents();
            if (t instanceof RegExp)
                for (n in ((e = {}), i))
                    i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n]);
            else e = i[t] || (i[t] = []);
            return e;
        }),
            (a.flattenListeners = function (t) {
                var e,
                    n = [];
                for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
                return n;
            }),
            (a.getListenersAsObject = function (t) {
                var e,
                    n = this.getListeners(t);
                return n instanceof Array && ((e = {})[t] = n), e || n;
            }),
            (a.addListener = function (t, e) {
                if (!r(e)) throw new TypeError("listener must be a function");
                var i,
                    a = this.getListenersAsObject(t),
                    s = "object" == typeof e;
                for (i in a)
                    a.hasOwnProperty(i) &&
                        -1 === n(a[i], e) &&
                        a[i].push(s ? e : { listener: e, once: !1 });
                return this;
            }),
            (a.on = i("addListener")),
            (a.addOnceListener = function (t, e) {
                return this.addListener(t, { listener: e, once: !0 });
            }),
            (a.once = i("addOnceListener")),
            (a.defineEvent = function (t) {
                return this.getListeners(t), this;
            }),
            (a.defineEvents = function (t) {
                for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
                return this;
            }),
            (a.removeListener = function (t, e) {
                var i,
                    r,
                    a = this.getListenersAsObject(t);
                for (r in a)
                    a.hasOwnProperty(r) &&
                        -1 !== (i = n(a[r], e)) &&
                        a[r].splice(i, 1);
                return this;
            }),
            (a.off = i("removeListener")),
            (a.addListeners = function (t, e) {
                return this.manipulateListeners(!1, t, e);
            }),
            (a.removeListeners = function (t, e) {
                return this.manipulateListeners(!0, t, e);
            }),
            (a.manipulateListeners = function (t, e, n) {
                var i,
                    r,
                    a = t ? this.removeListener : this.addListener,
                    s = t ? this.removeListeners : this.addListeners;
                if ("object" != typeof e || e instanceof RegExp)
                    for (i = n.length; i--; ) a.call(this, e, n[i]);
                else
                    for (i in e)
                        e.hasOwnProperty(i) &&
                            (r = e[i]) &&
                            ("function" == typeof r
                                ? a.call(this, i, r)
                                : s.call(this, i, r));
                return this;
            }),
            (a.removeEvent = function (t) {
                var e,
                    n = typeof t,
                    i = this._getEvents();
                if ("string" === n) delete i[t];
                else if (t instanceof RegExp)
                    for (e in i)
                        i.hasOwnProperty(e) && t.test(e) && delete i[e];
                else delete this._events;
                return this;
            }),
            (a.removeAllListeners = i("removeEvent")),
            (a.emitEvent = function (t, e) {
                var n,
                    i,
                    r,
                    a,
                    s = this.getListenersAsObject(t);
                for (a in s)
                    if (s.hasOwnProperty(a))
                        for (n = s[a].slice(0), r = 0; r < n.length; r++)
                            !0 === (i = n[r]).once &&
                                this.removeListener(t, i.listener),
                                i.listener.apply(this, e || []) ===
                                    this._getOnceReturnValue() &&
                                    this.removeListener(t, i.listener);
                return this;
            }),
            (a.trigger = i("emitEvent")),
            (a.emit = function (t) {
                var e = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(t, e);
            }),
            (a.setOnceReturnValue = function (t) {
                return (this._onceReturnValue = t), this;
            }),
            (a._getOnceReturnValue = function () {
                return (
                    !this.hasOwnProperty("_onceReturnValue") ||
                    this._onceReturnValue
                );
            }),
            (a._getEvents = function () {
                return this._events || (this._events = {});
            }),
            (e.noConflict = function () {
                return (t.EventEmitter = s), e;
            }),
            "function" == typeof define && define.amd
                ? define(function () {
                      return e;
                  })
                : "object" == typeof module && module.exports
                ? (module.exports = e)
                : (t.EventEmitter = e);
    })("undefined" != typeof window ? window : this || {}),
    (function (t) {
        t.fn.extend({
            champ: function (e) {
                var n = t.extend(
                        {
                            selector: "tab_wrapper",
                            plugin_type: "tab",
                            side: "",
                            active_tab: "1",
                            controllers: "false",
                            ajax: "false",
                            show_ajax_content_in_tab: "false",
                            content_path: "false",
                        },
                        e
                    ),
                    i = 1,
                    r = 1;
                return this.each(function () {
                    var e = n.plugin_type,
                        a = n.side,
                        s = n.active_tab,
                        o = n.controllers,
                        l = n.ajax,
                        u = n.show_ajax_content_in_tab,
                        d = n.content_path,
                        c = t(this).find("div.tab_content"),
                        f = t(this).find("ul li"),
                        h = t(this),
                        p = t(".controller").closest(".tab_wrapper");
                    function m(e) {
                        e.find("ul li:eq(0)").hasClass("active")
                            ? t(".controller .previous", e).hide()
                            : t(".controller .previous", e).show(),
                            e.find("ul li").last().hasClass("active")
                                ? t(".controller .next", e).hide()
                                : t(".controller .next", e).show();
                    }
                    h.addClass(a + "_side"),
                        "true" == o &&
                            (h.addClass("withControls"),
                            h.append(
                                "<div class='controller'><span class='previous'>previous</span><span class='next'>next</span></div>"
                            )),
                        "accordion" == e &&
                            (h.addClass("accordion"),
                            h.removeClass(a + "_side"),
                            h.removeClass("withControls"),
                            t(".controller", h).remove()),
                        "true" == l &&
                            (t.ajax({
                                url: d,
                                success: function (e) {
                                    t(" .tab_content.tab_" + u, h).html(e);
                                },
                            }),
                            t(document).ajaxError(function (e, n, i) {
                                t(" .tab_content.tab_" + u, h).prepend(
                                    "<h4 class='error'>Error requesting page " +
                                        i.url +
                                        "</h2>"
                                );
                            })),
                        t(".controller .previous", t(this)).click(function () {
                            t(this)
                                .closest(".controller")
                                .siblings("ul")
                                .find("li.active")
                                .prev()
                                .trigger("click"),
                                m(p);
                        }),
                        t(".controller .next", t(this)).click(function () {
                            t(this)
                                .closest(".controller")
                                .siblings("ul")
                                .find("li.active")
                                .next()
                                .trigger("click"),
                                m(p);
                        }),
                        t(this).find("ul li").removeClass("active"),
                        t(this).find("div.tab_content").removeClass("active"),
                        "" == s
                            ? (t(this)
                                  .find("ul li:eq(0)")
                                  .addClass("active")
                                  .show(),
                              t(this)
                                  .find("div.tab_content:eq(0)")
                                  .addClass("active")
                                  .show(),
                              m(h))
                            : (t(this)
                                  .find("ul li:eq(" + (s - 1) + ")")
                                  .addClass("active")
                                  .show(),
                              t(this)
                                  .find("div.tab_content:eq(" + (s - 1) + ")")
                                  .addClass("active")
                                  .show(),
                              m(h)),
                        c.first().addClass("first"),
                        c.last().addClass("last"),
                        c.each(function () {
                            var e = "tab_" + r;
                            t(this).addClass(e),
                                t(this).attr("data-title", e),
                                r++;
                        }),
                        f.each(function () {
                            var e = t(this).text(),
                                n = "tab_" + i,
                                r = t(this).closest(".tab_wrapper");
                            t(this).attr("rel", n);
                            var a = t(this).attr("class");
                            c.each(function () {
                                t(this).hasClass(n) &&
                                    r
                                        .find("div.tab_content." + n)
                                        .before(
                                            "<div data-title='" +
                                                n +
                                                "' class='accordian_header " +
                                                n +
                                                " " +
                                                a +
                                                "'>" +
                                                e +
                                                "<span class='arrow'></span></div>"
                                        );
                            }),
                                i++;
                        }),
                        t(".accordian_header").click(function () {
                            var e = t(this).attr("data-title"),
                                n = t(this).next(".tab_content").css("display"),
                                i = t(this).closest(".tab_wrapper");
                            "none" == n &&
                                (t(".accordian_header").removeClass("active"),
                                t(
                                    ".ins-msg-content-wrap .contentrow"
                                ).removeClass("active"),
                                t(this).addClass("active"),
                                t(this)
                                    .parents(
                                        ".ins-msg-content-wrap .contentrow"
                                    )
                                    .addClass("active"),
                                c.removeClass("active").slideUp(),
                                i
                                    .find("div.tab_content." + e)
                                    .addClass("active")
                                    .slideDown());
                        }),
                        f.click(function () {
                            var e = t(this).attr("rel"),
                                n = t(this).closest(".tab_wrapper");
                            n.find(" .accordian_header").removeClass("active"),
                                n
                                    .find(" .accordian_header")
                                    .parents(".contentrow")
                                    .removeClass("active"),
                                n
                                    .find(" .accordian_header." + e)
                                    .addClass("active"),
                                n
                                    .find(" .accordian_header." + e)
                                    .parents(".contentrow")
                                    .addClass("active"),
                                c.removeClass("active").hide(),
                                n
                                    .find(" div.tab_content." + e)
                                    .addClass("active")
                                    .show(),
                                f.removeClass("active"),
                                t(this).addClass("active"),
                                m(n);
                        });
                });
            },
        });
    })(jQuery),
    (function (t) {
        var e = (function (t, e, n) {
            "use strict";
            return (function () {
                function n(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        (i.enumerable = i.enumerable || !1),
                            (i.configurable = !0),
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(t, i.key, i);
                    }
                }
                function i(t, e, i) {
                    return e && n(t.prototype, e), i && n(t, i), t;
                }
                for (
                    var r = [
                            [
                                "Afghanistan (<U202B>افغانستان<U202C>‎)",
                                "af",
                                "93",
                            ],
                            ["Albania (Shqipëri)", "al", "355"],
                            ["Algeria (<U202B>الجزائر<U202C>‎)", "dz", "213"],
                            ["American Samoa", "as", "1", 5, ["684"]],
                            ["Andorra", "ad", "376"],
                            ["Angola", "ao", "244"],
                            ["Anguilla", "ai", "1", 6, ["264"]],
                            ["Antigua and Barbuda", "ag", "1", 7, ["268"]],
                            ["Argentina", "ar", "54"],
                            ["Armenia (Հայաստան)", "am", "374"],
                            ["Aruba", "aw", "297"],
                            ["Australia", "au", "61", 0],
                            ["Austria (Österreich)", "at", "43"],
                            ["Azerbaijan (Azərbaycan)", "az", "994"],
                            ["Bahamas", "bs", "1", 8, ["242"]],
                            ["Bahrain (<U202B>البحرين<U202C>‎)", "bh", "973"],
                            ["Bangladesh (বাংলাদেশ)", "bd", "880"],
                            ["Barbados", "bb", "1", 9, ["246"]],
                            ["Belarus (Беларусь)", "by", "375"],
                            ["Belgium (België)", "be", "32"],
                            ["Belize", "bz", "501"],
                            ["Benin (Bénin)", "bj", "229"],
                            ["Bermuda", "bm", "1", 10, ["441"]],
                            ["Bhutan (འབྲུག)", "bt", "975"],
                            ["Bolivia", "bo", "591"],
                            [
                                "Bosnia and Herzegovina (Босна и Херцеговина)",
                                "ba",
                                "387",
                            ],
                            ["Botswana", "bw", "267"],
                            ["Brazil (Brasil)", "br", "55"],
                            ["British Indian Ocean Territory", "io", "246"],
                            ["British Virgin Islands", "vg", "1", 11, ["284"]],
                            ["Brunei", "bn", "673"],
                            ["Bulgaria (България)", "bg", "359"],
                            ["Burkina Faso", "bf", "226"],
                            ["Burundi (Uburundi)", "bi", "257"],
                            ["Cambodia (កម្ពុជា)", "kh", "855"],
                            ["Cameroon (Cameroun)", "cm", "237"],
                            [
                                "Canada",
                                "ca",
                                "1",
                                1,
                                [
                                    "204",
                                    "226",
                                    "236",
                                    "249",
                                    "250",
                                    "289",
                                    "306",
                                    "343",
                                    "365",
                                    "387",
                                    "403",
                                    "416",
                                    "418",
                                    "431",
                                    "437",
                                    "438",
                                    "450",
                                    "506",
                                    "514",
                                    "519",
                                    "548",
                                    "579",
                                    "581",
                                    "587",
                                    "604",
                                    "613",
                                    "639",
                                    "647",
                                    "672",
                                    "705",
                                    "709",
                                    "742",
                                    "778",
                                    "780",
                                    "782",
                                    "807",
                                    "819",
                                    "825",
                                    "867",
                                    "873",
                                    "902",
                                    "905",
                                ],
                            ],
                            ["Cape Verde (Kabu Verdi)", "cv", "238"],
                            [
                                "Caribbean Netherlands",
                                "bq",
                                "599",
                                1,
                                ["3", "4", "7"],
                            ],
                            ["Cayman Islands", "ky", "1", 12, ["345"]],
                            [
                                "Central African Republic (République centrafricaine)",
                                "cf",
                                "236",
                            ],
                            ["Chad (Tchad)", "td", "235"],
                            ["Chile", "cl", "56"],
                            ["China (中国)", "cn", "86"],
                            ["Christmas Island", "cx", "61", 2],
                            ["Cocos (Keeling) Islands", "cc", "61", 1],
                            ["Colombia", "co", "57"],
                            ["Comoros (<U202B>جزر القمر<U202C>‎)", "km", "269"],
                            [
                                "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
                                "cd",
                                "243",
                            ],
                            [
                                "Congo (Republic) (Congo-Brazzaville)",
                                "cg",
                                "242",
                            ],
                            ["Cook Islands", "ck", "682"],
                            ["Costa Rica", "cr", "506"],
                            ["Côte d’Ivoire", "ci", "225"],
                            ["Croatia (Hrvatska)", "hr", "385"],
                            ["Cuba", "cu", "53"],
                            ["Curaçao", "cw", "599", 0],
                            ["Cyprus (Κύπρος)", "cy", "357"],
                            ["Czech Republic (Česká republika)", "cz", "420"],
                            ["Denmark (Danmark)", "dk", "45"],
                            ["Djibouti", "dj", "253"],
                            ["Dominica", "dm", "1", 13, ["767"]],
                            [
                                "Dominican Republic (República Dominicana)",
                                "do",
                                "1",
                                2,
                                ["809", "829", "849"],
                            ],
                            ["Ecuador", "ec", "593"],
                            ["Egypt (<U202B>مصر<U202C>‎)", "eg", "20"],
                            ["El Salvador", "sv", "503"],
                            [
                                "Equatorial Guinea (Guinea Ecuatorial)",
                                "gq",
                                "240",
                            ],
                            ["Eritrea", "er", "291"],
                            ["Estonia (Eesti)", "ee", "372"],
                            ["Ethiopia", "et", "251"],
                            ["Falkland Islands (Islas Malvinas)", "fk", "500"],
                            ["Faroe Islands (Føroyar)", "fo", "298"],
                            ["Fiji", "fj", "679"],
                            ["Finland (Suomi)", "fi", "358", 0],
                            ["France", "fr", "33"],
                            ["French Guiana (Guyane française)", "gf", "594"],
                            [
                                "French Polynesia (Polynésie française)",
                                "pf",
                                "689",
                            ],
                            ["Gabon", "ga", "241"],
                            ["Gambia", "gm", "220"],
                            ["Georgia (საქართველო)", "ge", "995"],
                            ["Germany (Deutschland)", "de", "49"],
                            ["Ghana (Gaana)", "gh", "233"],
                            ["Gibraltar", "gi", "350"],
                            ["Greece (Ελλάδα)", "gr", "30"],
                            ["Greenland (Kalaallit Nunaat)", "gl", "299"],
                            ["Grenada", "gd", "1", 14, ["473"]],
                            ["Guadeloupe", "gp", "590", 0],
                            ["Guam", "gu", "1", 15, ["671"]],
                            ["Guatemala", "gt", "502"],
                            [
                                "Guernsey",
                                "gg",
                                "44",
                                1,
                                ["1481", "7781", "7839", "7911"],
                            ],
                            ["Guinea (Guinée)", "gn", "224"],
                            ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
                            ["Guyana", "gy", "592"],
                            ["Haiti", "ht", "509"],
                            ["Honduras", "hn", "504"],
                            ["Hong Kong (香港)", "hk", "852"],
                            ["Hungary (Magyarország)", "hu", "36"],
                            ["Iceland (Ísland)", "is", "354"],
                            ["India (भारत)", "in", "91"],
                            ["Indonesia", "id", "62"],
                            ["Iran (<U202B>ایران<U202C>‎)", "ir", "98"],
                            ["Iraq (<U202B>العراق<U202C>‎)", "iq", "964"],
                            ["Ireland", "ie", "353"],
                            [
                                "Isle of Man",
                                "im",
                                "44",
                                2,
                                ["1624", "74576", "7524", "7924", "7624"],
                            ],
                            ["Israel (<U202B>ישראל<U202C>‎)", "il", "972"],
                            ["Italy (Italia)", "it", "39", 0],
                            ["Jamaica", "jm", "1", 4, ["876", "658"]],
                            ["Japan (日本)", "jp", "81"],
                            [
                                "Jersey",
                                "je",
                                "44",
                                3,
                                [
                                    "1534",
                                    "7509",
                                    "7700",
                                    "7797",
                                    "7829",
                                    "7937",
                                ],
                            ],
                            ["Jordan (<U202B>الأردن<U202C>‎)", "jo", "962"],
                            [
                                "Kazakhstan (Казахстан)",
                                "kz",
                                "7",
                                1,
                                ["33", "7"],
                            ],
                            ["Kenya", "ke", "254"],
                            ["Kiribati", "ki", "686"],
                            ["Kosovo", "xk", "383"],
                            ["Kuwait (<U202B>الكويت<U202C>‎)", "kw", "965"],
                            ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
                            ["Laos (ລາວ)", "la", "856"],
                            ["Latvia (Latvija)", "lv", "371"],
                            ["Lebanon (<U202B>لبنان<U202C>‎)", "lb", "961"],
                            ["Lesotho", "ls", "266"],
                            ["Liberia", "lr", "231"],
                            ["Libya (<U202B>ليبيا<U202C>‎)", "ly", "218"],
                            ["Liechtenstein", "li", "423"],
                            ["Lithuania (Lietuva)", "lt", "370"],
                            ["Luxembourg", "lu", "352"],
                            ["Macau (澳門)", "mo", "853"],
                            ["Macedonia (FYROM) (Македонија)", "mk", "389"],
                            ["Madagascar (Madagasikara)", "mg", "261"],
                            ["Malawi", "mw", "265"],
                            ["Malaysia", "my", "60"],
                            ["Maldives", "mv", "960"],
                            ["Mali", "ml", "223"],
                            ["Malta", "mt", "356"],
                            ["Marshall Islands", "mh", "692"],
                            ["Martinique", "mq", "596"],
                            [
                                "Mauritania (<U202B>موريتانيا<U202C>‎)",
                                "mr",
                                "222",
                            ],
                            ["Mauritius (Moris)", "mu", "230"],
                            ["Mayotte", "yt", "262", 1, ["269", "639"]],
                            ["Mexico (México)", "mx", "52"],
                            ["Micronesia", "fm", "691"],
                            ["Moldova (Republica Moldova)", "md", "373"],
                            ["Monaco", "mc", "377"],
                            ["Mongolia (Монгол)", "mn", "976"],
                            ["Montenegro (Crna Gora)", "me", "382"],
                            ["Montserrat", "ms", "1", 16, ["664"]],
                            ["Morocco (<U202B>المغرب<U202C>‎)", "ma", "212", 0],
                            ["Mozambique (Moçambique)", "mz", "258"],
                            ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
                            ["Namibia (Namibië)", "na", "264"],
                            ["Nauru", "nr", "674"],
                            ["Nepal (नेपाल)", "np", "977"],
                            ["Netherlands (Nederland)", "nl", "31"],
                            ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
                            ["New Zealand", "nz", "64"],
                            ["Nicaragua", "ni", "505"],
                            ["Niger (Nijar)", "ne", "227"],
                            ["Nigeria", "ng", "234"],
                            ["Niue", "nu", "683"],
                            ["Norfolk Island", "nf", "672"],
                            [
                                "North Korea (조선 민주주의 인민 공화국)",
                                "kp",
                                "850",
                            ],
                            [
                                "Northern Mariana Islands",
                                "mp",
                                "1",
                                17,
                                ["670"],
                            ],
                            ["Norway (Norge)", "no", "47", 0],
                            ["Oman (<U202B>عُمان<U202C>‎)", "om", "968"],
                            ["Pakistan (<U202B>پاکستان<U202C>‎)", "pk", "92"],
                            ["Palau", "pw", "680"],
                            ["Palestine (<U202B>فلسطين<U202C>‎)", "ps", "970"],
                            ["Panama (Panamá)", "pa", "507"],
                            ["Papua New Guinea", "pg", "675"],
                            ["Paraguay", "py", "595"],
                            ["Peru (Perú)", "pe", "51"],
                            ["Philippines", "ph", "63"],
                            ["Poland (Polska)", "pl", "48"],
                            ["Portugal", "pt", "351"],
                            ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
                            ["Qatar (<U202B>قطر<U202C>‎)", "qa", "974"],
                            ["Réunion (La Réunion)", "re", "262", 0],
                            ["Romania (România)", "ro", "40"],
                            ["Russia (Россия)", "ru", "7", 0],
                            ["Rwanda", "rw", "250"],
                            ["Saint Barthélemy", "bl", "590", 1],
                            ["Saint Helena", "sh", "290"],
                            ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]],
                            ["Saint Lucia", "lc", "1", 19, ["758"]],
                            [
                                "Saint Martin (Saint-Martin (partie française))",
                                "mf",
                                "590",
                                2,
                            ],
                            [
                                "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
                                "pm",
                                "508",
                            ],
                            [
                                "Saint Vincent and the Grenadines",
                                "vc",
                                "1",
                                20,
                                ["784"],
                            ],
                            ["Samoa", "ws", "685"],
                            ["San Marino", "sm", "378"],
                            [
                                "São Tomé and Príncipe (São Tomé e Príncipe)",
                                "st",
                                "239",
                            ],
                            [
                                "Saudi Arabia (<U202B>المملكة العربية السعودية<U202C>‎)",
                                "sa",
                                "966",
                            ],
                            ["Senegal (Sénégal)", "sn", "221"],
                            ["Serbia (Србија)", "rs", "381"],
                            ["Seychelles", "sc", "248"],
                            ["Sierra Leone", "sl", "232"],
                            ["Singapore", "sg", "65"],
                            ["Sint Maarten", "sx", "1", 21, ["721"]],
                            ["Slovakia (Slovensko)", "sk", "421"],
                            ["Slovenia (Slovenija)", "si", "386"],
                            ["Solomon Islands", "sb", "677"],
                            ["Somalia (Soomaaliya)", "so", "252"],
                            ["South Africa", "za", "27"],
                            ["South Korea (대한민국)", "kr", "82"],
                            [
                                "South Sudan (<U202B>جنوب السودان<U202C>‎)",
                                "ss",
                                "211",
                            ],
                            ["Spain (España)", "es", "34"],
                            ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
                            ["Sudan (<U202B>السودان<U202C>‎)", "sd", "249"],
                            ["Suriname", "sr", "597"],
                            ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]],
                            ["Swaziland", "sz", "268"],
                            ["Sweden (Sverige)", "se", "46"],
                            ["Switzerland (Schweiz)", "ch", "41"],
                            ["Syria (<U202B>سوريا<U202C>‎)", "sy", "963"],
                            ["Taiwan (台灣)", "tw", "886"],
                            ["Tajikistan", "tj", "992"],
                            ["Tanzania", "tz", "255"],
                            ["Thailand (ไทย)", "th", "66"],
                            ["Timor-Leste", "tl", "670"],
                            ["Togo", "tg", "228"],
                            ["Tokelau", "tk", "690"],
                            ["Tonga", "to", "676"],
                            ["Trinidad and Tobago", "tt", "1", 22, ["868"]],
                            ["Tunisia (<U202B>تونس<U202C>‎)", "tn", "216"],
                            ["Turkey (Türkiye)", "tr", "90"],
                            ["Turkmenistan", "tm", "993"],
                            [
                                "Turks and Caicos Islands",
                                "tc",
                                "1",
                                23,
                                ["649"],
                            ],
                            ["Tuvalu", "tv", "688"],
                            ["U.S. Virgin Islands", "vi", "1", 24, ["340"]],
                            ["Uganda", "ug", "256"],
                            ["Pakistanraine (Україна)", "ua", "380"],
                            [
                                "United Arab Emirates (<U202B>الإمارات العربية المتحدة<U202C>‎)",
                                "ae",
                                "971",
                            ],
                            ["United Kingdom", "gb", "44", 0],
                            ["United States", "us", "1", 0],
                            ["Uruguay", "uy", "598"],
                            ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
                            ["Vanuatu", "vu", "678"],
                            [
                                "Vatican City (Città del Vaticano)",
                                "va",
                                "39",
                                1,
                                ["06698"],
                            ],
                            ["Venezuela", "ve", "58"],
                            ["Vietnam (Việt Nam)", "vn", "84"],
                            [
                                "Wallis and Futuna (Wallis-et-Futuna)",
                                "wf",
                                "681",
                            ],
                            [
                                "Western Sahara (<U202B>الصحراء الغربية<U202C>‎)",
                                "eh",
                                "212",
                                1,
                                ["5288", "5289"],
                            ],
                            ["Yemen (<U202B>اليمن<U202C>‎)", "ye", "967"],
                            ["Zambia", "zm", "260"],
                            ["Zimbabwe", "zw", "263"],
                            ["Åland Islands", "ax", "358", 1, ["18"]],
                        ],
                        a = 0;
                    a < r.length;
                    a++
                ) {
                    var s = r[a];
                    r[a] = {
                        name: s[0],
                        iso2: s[1],
                        dialCode: s[2],
                        priority: s[3] || 0,
                        areaCodes: s[4] || null,
                    };
                }
                t.intlTelInputGlobals = {
                    getInstance: function (e) {
                        var n = e.getAttribute("data-intl-tel-input-id");
                        return t.intlTelInputGlobals.instances[n];
                    },
                    instances: {},
                };
                var o = 0,
                    l = {
                        allowDropdown: !0,
                        autoHideDialCode: !0,
                        autoPlaceholder: "polite",
                        customContainer: "",
                        customPlaceholder: null,
                        dropdownContainer: null,
                        excludeCountries: [],
                        formatOnDisplay: !0,
                        geoIpLookup: null,
                        hiddenInput: "",
                        initialCountry: "",
                        localizedCountries: null,
                        nationalMode: !0,
                        onlyCountries: [],
                        placeholderNumberType: "MOBILE",
                        preferredCountries: ["us", "gb"],
                        separateDialCode: !1,
                        utilsScript: "",
                    },
                    u = [
                        "800",
                        "822",
                        "833",
                        "844",
                        "855",
                        "866",
                        "877",
                        "880",
                        "881",
                        "882",
                        "883",
                        "884",
                        "885",
                        "886",
                        "887",
                        "888",
                        "889",
                    ];
                t.addEventListener("load", function () {
                    t.intlTelInputGlobals.windowLoaded = !0;
                });
                var d = function (t, e) {
                        for (var n = Object.keys(t), i = 0; i < n.length; i++)
                            e(n[i], t[n[i]]);
                    },
                    c = function (e) {
                        d(t.intlTelInputGlobals.instances, function (n) {
                            t.intlTelInputGlobals.instances[n][e]();
                        });
                    },
                    f = (function () {
                        function n(t, e) {
                            var i = this;
                            (function (t, e) {
                                if (!(t instanceof e))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, n),
                                (this.id = o++),
                                (this.a = t),
                                (this.b = null),
                                (this.c = null);
                            var r = e || {};
                            (this.d = {}),
                                d(l, function (t, e) {
                                    i.d[t] = r.hasOwnProperty(t) ? r[t] : e;
                                }),
                                (this.e = Boolean(
                                    t.getAttribute("placeholder")
                                ));
                        }
                        return (
                            i(n, [
                                {
                                    key: "_init",
                                    value: function () {
                                        var t = this;
                                        if (
                                            (this.d.nationalMode &&
                                                (this.d.autoHideDialCode = !1),
                                            this.d.separateDialCode &&
                                                (this.d.autoHideDialCode =
                                                    this.d.nationalMode =
                                                        !1),
                                            (this.g =
                                                /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                                                    navigator.userAgent
                                                )),
                                            this.g &&
                                                (e.body.classList.add(
                                                    "iti-mobile"
                                                ),
                                                this.d.dropdownContainer ||
                                                    (this.d.dropdownContainer =
                                                        e.body)),
                                            "undefined" != typeof Promise)
                                        ) {
                                            var n = new Promise(function (
                                                    e,
                                                    n
                                                ) {
                                                    (t.h = e), (t.i = n);
                                                }),
                                                i = new Promise(function (
                                                    e,
                                                    n
                                                ) {
                                                    (t.i0 = e), (t.i1 = n);
                                                });
                                            this.promise = Promise.all([n, i]);
                                        } else
                                            (this.h = this.i = function () {}),
                                                (this.i0 = this.i1 =
                                                    function () {});
                                        (this.s = {}),
                                            this._b(),
                                            this._f(),
                                            this._h(),
                                            this._i(),
                                            this._i3();
                                    },
                                },
                                {
                                    key: "_b",
                                    value: function () {
                                        this._d(),
                                            this._d2(),
                                            this._e(),
                                            this.d.localizedCountries &&
                                                this._d0(),
                                            (this.d.onlyCountries.length ||
                                                this.d.localizedCountries) &&
                                                this.p.sort(this._d1);
                                    },
                                },
                                {
                                    key: "_c",
                                    value: function (t, e, n) {
                                        e.length > this.dialCodeMaxLen &&
                                            (this.dialCodeMaxLen = e.length),
                                            this.q.hasOwnProperty(e) ||
                                                (this.q[e] = []);
                                        for (
                                            var i = 0;
                                            i < this.q[e].length;
                                            i++
                                        )
                                            if (this.q[e][i] === t) return;
                                        var r =
                                            undefined !== n
                                                ? n
                                                : this.q[e].length;
                                        this.q[e][r] = t;
                                    },
                                },
                                {
                                    key: "_d",
                                    value: function () {
                                        if (this.d.onlyCountries.length) {
                                            var t = this.d.onlyCountries.map(
                                                function (t) {
                                                    return t.toLowerCase();
                                                }
                                            );
                                            this.p = r.filter(function (e) {
                                                return t.indexOf(e.iso2) > -1;
                                            });
                                        } else if (
                                            this.d.excludeCountries.length
                                        ) {
                                            var e = this.d.excludeCountries.map(
                                                function (t) {
                                                    return t.toLowerCase();
                                                }
                                            );
                                            this.p = r.filter(function (t) {
                                                return -1 === e.indexOf(t.iso2);
                                            });
                                        } else this.p = r;
                                    },
                                },
                                {
                                    key: "_d0",
                                    value: function () {
                                        for (
                                            var t = 0;
                                            t < this.p.length;
                                            t++
                                        ) {
                                            var e =
                                                this.p[t].iso2.toLowerCase();
                                            this.d.localizedCountries.hasOwnProperty(
                                                e
                                            ) &&
                                                (this.p[t].name =
                                                    this.d.localizedCountries[
                                                        e
                                                    ]);
                                        }
                                    },
                                },
                                {
                                    key: "_d1",
                                    value: function (t, e) {
                                        return t.name.localeCompare(e.name);
                                    },
                                },
                                {
                                    key: "_d2",
                                    value: function () {
                                        (this.dialCodeMaxLen = 0),
                                            (this.q = {});
                                        for (
                                            var t = 0;
                                            t < this.p.length;
                                            t++
                                        ) {
                                            var e = this.p[t];
                                            this._c(
                                                e.iso2,
                                                e.dialCode,
                                                e.priority
                                            );
                                        }
                                        for (
                                            var n = 0;
                                            n < this.p.length;
                                            n++
                                        ) {
                                            var i = this.p[n];
                                            if (i.areaCodes)
                                                for (
                                                    var r =
                                                            this.q[
                                                                i.dialCode
                                                            ][0],
                                                        a = 0;
                                                    a < i.areaCodes.length;
                                                    a++
                                                ) {
                                                    for (
                                                        var s = i.areaCodes[a],
                                                            o = 1;
                                                        o < s.length;
                                                        o++
                                                    ) {
                                                        var l =
                                                            i.dialCode +
                                                            s.substr(0, o);
                                                        this._c(r, l),
                                                            this._c(i.iso2, l);
                                                    }
                                                    this._c(
                                                        i.iso2,
                                                        i.dialCode + s
                                                    );
                                                }
                                        }
                                    },
                                },
                                {
                                    key: "_e",
                                    value: function () {
                                        this.preferredCountries = [];
                                        for (
                                            var t = 0;
                                            t <
                                            this.d.preferredCountries.length;
                                            t++
                                        ) {
                                            var e =
                                                    this.d.preferredCountries[
                                                        t
                                                    ].toLowerCase(),
                                                n = this._y(e, !1, !0);
                                            n &&
                                                this.preferredCountries.push(n);
                                        }
                                    },
                                },
                                {
                                    key: "_e2",
                                    value: function (t, n, i) {
                                        var r = e.createElement(t);
                                        return (
                                            n &&
                                                d(n, function (t, e) {
                                                    return r.setAttribute(t, e);
                                                }),
                                            i && i.appendChild(r),
                                            r
                                        );
                                    },
                                },
                                {
                                    key: "_f",
                                    value: function () {
                                        this.a.setAttribute(
                                            "autocomplete",
                                            "off"
                                        );
                                        var t = "iti";
                                        this.d.allowDropdown &&
                                            (t += " iti--allow-dropdown"),
                                            this.d.separateDialCode &&
                                                (t +=
                                                    " iti--separate-dial-code"),
                                            this.d.customContainer &&
                                                ((t += " "),
                                                (t += this.d.customContainer));
                                        var e = this._e2("div", { class: t });
                                        if (
                                            (this.a.parentNode.insertBefore(
                                                e,
                                                this.a
                                            ),
                                            (this.k = this._e2(
                                                "div",
                                                {
                                                    class: "iti__flag-container",
                                                },
                                                e
                                            )),
                                            e.appendChild(this.a),
                                            (this.selectedFlag = this._e2(
                                                "div",
                                                {
                                                    class: "iti__selected-flag",
                                                    "aria-owns":
                                                        "country-listbox",
                                                },
                                                this.k
                                            )),
                                            (this.l = this._e2(
                                                "div",
                                                { class: "iti__flag" },
                                                this.selectedFlag
                                            )),
                                            this.d.separateDialCode &&
                                                (this.t = this._e2(
                                                    "div",
                                                    {
                                                        class: "iti__selected-dial-code",
                                                    },
                                                    this.selectedFlag
                                                )),
                                            this.d.allowDropdown &&
                                                (this.selectedFlag.setAttribute(
                                                    "tabindex",
                                                    "0"
                                                ),
                                                (this.u = this._e2(
                                                    "div",
                                                    { class: "iti__arrow" },
                                                    this.selectedFlag
                                                )),
                                                (this.m = this._e2("ul", {
                                                    class: "iti__country-list iti__hide",
                                                    id: "country-listbox",
                                                    "aria-expanded": "false",
                                                    role: "listbox",
                                                })),
                                                this.preferredCountries
                                                    .length &&
                                                    (this._g(
                                                        this.preferredCountries,
                                                        "iti__preferred"
                                                    ),
                                                    this._e2(
                                                        "li",
                                                        {
                                                            class: "iti__divider",
                                                            role: "separator",
                                                            "aria-disabled":
                                                                "true",
                                                        },
                                                        this.m
                                                    )),
                                                this._g(
                                                    this.p,
                                                    "iti__standard"
                                                ),
                                                this.d.dropdownContainer
                                                    ? ((this.dropdown =
                                                          this._e2("div", {
                                                              class: "iti iti--container",
                                                          })),
                                                      this.dropdown.appendChild(
                                                          this.m
                                                      ))
                                                    : this.k.appendChild(
                                                          this.m
                                                      )),
                                            this.d.hiddenInput)
                                        ) {
                                            var n = this.d.hiddenInput,
                                                i = this.a.getAttribute("name");
                                            if (i) {
                                                var r = i.lastIndexOf("[");
                                                -1 !== r &&
                                                    (n = ""
                                                        .concat(
                                                            i.substr(0, r),
                                                            "["
                                                        )
                                                        .concat(n, "]"));
                                            }
                                            (this.hiddenInput = this._e2(
                                                "input",
                                                { type: "hidden", name: n }
                                            )),
                                                e.appendChild(this.hiddenInput);
                                        }
                                    },
                                },
                                {
                                    key: "_g",
                                    value: function (t, e) {
                                        for (
                                            var n = "", i = 0;
                                            i < t.length;
                                            i++
                                        ) {
                                            var r = t[i];
                                            (n += "<li class='iti__country "
                                                .concat(
                                                    e,
                                                    "' tabIndex='-1' id='iti-item-"
                                                )
                                                .concat(
                                                    r.iso2,
                                                    "' role='option' data-dial-code='"
                                                )
                                                .concat(
                                                    r.dialCode,
                                                    "' data-country-code='"
                                                )
                                                .concat(r.iso2, "'>")),
                                                (n +=
                                                    "<div class='iti__flag-box'><div class='iti__flag iti__".concat(
                                                        r.iso2,
                                                        "'></div></div>"
                                                    )),
                                                (n +=
                                                    "<span class='iti__country-name'>".concat(
                                                        r.name,
                                                        "</span>"
                                                    )),
                                                (n +=
                                                    "<span class='iti__dial-code'>+".concat(
                                                        r.dialCode,
                                                        "</span>"
                                                    )),
                                                (n += "</li>");
                                        }
                                        this.m.insertAdjacentHTML(
                                            "beforeend",
                                            n
                                        );
                                    },
                                },
                                {
                                    key: "_h",
                                    value: function () {
                                        var t = this.a.value,
                                            e = this._5(t),
                                            n = this._w(t),
                                            i = this.d,
                                            r = i.initialCountry,
                                            a = i.nationalMode,
                                            s = i.autoHideDialCode,
                                            o = i.separateDialCode;
                                        e && !n
                                            ? this._v(t)
                                            : "auto" !== r &&
                                              (r
                                                  ? this._z(r.toLowerCase())
                                                  : e && n
                                                  ? this._z("us")
                                                  : ((this.j = this
                                                        .preferredCountries
                                                        .length
                                                        ? this
                                                              .preferredCountries[0]
                                                              .iso2
                                                        : this.p[0].iso2),
                                                    t || this._z(this.j)),
                                              t ||
                                                  a ||
                                                  s ||
                                                  o ||
                                                  (this.a.value = "+".concat(
                                                      this.s.dialCode
                                                  ))),
                                            t && this._u(t);
                                    },
                                },
                                {
                                    key: "_i",
                                    value: function () {
                                        this._j(),
                                            this.d.autoHideDialCode &&
                                                this._l(),
                                            this.d.allowDropdown && this._i2(),
                                            this.hiddenInput && this._i0();
                                    },
                                },
                                {
                                    key: "_i0",
                                    value: function () {
                                        var t = this;
                                        (this._a14 = function () {
                                            t.hiddenInput.value = t.getNumber();
                                        }),
                                            this.a.form &&
                                                this.a.form.addEventListener(
                                                    "submit",
                                                    this._a14
                                                );
                                    },
                                },
                                {
                                    key: "_i1",
                                    value: function () {
                                        for (
                                            var t = this.a;
                                            t && "LABEL" !== t.tagName;

                                        )
                                            t = t.parentNode;
                                        return t;
                                    },
                                },
                                {
                                    key: "_i2",
                                    value: function () {
                                        var t = this;
                                        this._a9 = function (e) {
                                            t.m.classList.contains("iti__hide")
                                                ? t.a.focus()
                                                : e.preventDefault();
                                        };
                                        var e = this._i1();
                                        e &&
                                            e.addEventListener(
                                                "click",
                                                this._a9
                                            ),
                                            (this._a10 = function () {
                                                !t.m.classList.contains(
                                                    "iti__hide"
                                                ) ||
                                                    t.a.disabled ||
                                                    t.a.readOnly ||
                                                    t._n();
                                            }),
                                            this.selectedFlag.addEventListener(
                                                "click",
                                                this._a10
                                            ),
                                            (this._a11 = function (e) {
                                                t.m.classList.contains(
                                                    "iti__hide"
                                                ) &&
                                                    -1 !==
                                                        [
                                                            "ArrowUp",
                                                            "Up",
                                                            "ArrowDown",
                                                            "Down",
                                                            " ",
                                                            "Enter",
                                                        ].indexOf(e.key) &&
                                                    (e.preventDefault(),
                                                    e.stopPropagation(),
                                                    t._n()),
                                                    "Tab" === e.key && t._2();
                                            }),
                                            this.k.addEventListener(
                                                "keydown",
                                                this._a11
                                            );
                                    },
                                },
                                {
                                    key: "_i3",
                                    value: function () {
                                        var e = this;
                                        this.d.utilsScript &&
                                        !t.intlTelInputUtils
                                            ? t.intlTelInputGlobals.windowLoaded
                                                ? t.intlTelInputGlobals.loadUtils(
                                                      this.d.utilsScript
                                                  )
                                                : t.addEventListener(
                                                      "load",
                                                      function () {
                                                          t.intlTelInputGlobals.loadUtils(
                                                              e.d.utilsScript
                                                          );
                                                      }
                                                  )
                                            : this.i0(),
                                            "auto" === this.d.initialCountry
                                                ? this._i4()
                                                : this.h();
                                    },
                                },
                                {
                                    key: "_i4",
                                    value: function () {
                                        t.intlTelInputGlobals.autoCountry
                                            ? this.handleAutoCountry()
                                            : t.intlTelInputGlobals
                                                  .startedLoadingAutoCountry ||
                                              ((t.intlTelInputGlobals.startedLoadingAutoCountry =
                                                  !0),
                                              "function" ==
                                                  typeof this.d.geoIpLookup &&
                                                  this.d.geoIpLookup(
                                                      function (e) {
                                                          (t.intlTelInputGlobals.autoCountry =
                                                              e.toLowerCase()),
                                                              setTimeout(
                                                                  function () {
                                                                      return c(
                                                                          "handleAutoCountry"
                                                                      );
                                                                  }
                                                              );
                                                      },
                                                      function () {
                                                          return c(
                                                              "rejectAutoCountryPromise"
                                                          );
                                                      }
                                                  ));
                                    },
                                },
                                {
                                    key: "_j",
                                    value: function () {
                                        var t = this;
                                        (this._a12 = function () {
                                            t._v(t.a.value) && t._8();
                                        }),
                                            this.a.addEventListener(
                                                "keyup",
                                                this._a12
                                            ),
                                            (this._a13 = function () {
                                                setTimeout(t._a12);
                                            }),
                                            this.a.addEventListener(
                                                "cut",
                                                this._a13
                                            ),
                                            this.a.addEventListener(
                                                "paste",
                                                this._a13
                                            );
                                    },
                                },
                                {
                                    key: "_j2",
                                    value: function (t) {
                                        var e =
                                            this.a.getAttribute("maxlength");
                                        return e && t.length > e
                                            ? t.substr(0, e)
                                            : t;
                                    },
                                },
                                {
                                    key: "_l",
                                    value: function () {
                                        var t = this;
                                        (this._a8 = function () {
                                            t._l2();
                                        }),
                                            this.a.form &&
                                                this.a.form.addEventListener(
                                                    "submit",
                                                    this._a8
                                                ),
                                            this.a.addEventListener(
                                                "blur",
                                                this._a8
                                            );
                                    },
                                },
                                {
                                    key: "_l2",
                                    value: function () {
                                        if ("+" === this.a.value.charAt(0)) {
                                            var t = this._m(this.a.value);
                                            (t && this.s.dialCode !== t) ||
                                                (this.a.value = "");
                                        }
                                    },
                                },
                                {
                                    key: "_m",
                                    value: function (t) {
                                        return t.replace(/\D/g, "");
                                    },
                                },
                                {
                                    key: "_m2",
                                    value: function (t) {
                                        var n = e.createEvent("Event");
                                        n.initEvent(t, !0, !0),
                                            this.a.dispatchEvent(n);
                                    },
                                },
                                {
                                    key: "_n",
                                    value: function () {
                                        this.m.classList.remove("iti__hide"),
                                            this.m.setAttribute(
                                                "aria-expanded",
                                                "true"
                                            ),
                                            this._o(),
                                            this.b &&
                                                (this._x(this.b, !1),
                                                this._3(this.b, !0)),
                                            this._p(),
                                            this.u.classList.add(
                                                "iti__arrow--up"
                                            ),
                                            this._m2("open:countrydropdown");
                                    },
                                },
                                {
                                    key: "_n2",
                                    value: function (t, e, n) {
                                        n && !t.classList.contains(e)
                                            ? t.classList.add(e)
                                            : !n &&
                                              t.classList.contains(e) &&
                                              t.classList.remove(e);
                                    },
                                },
                                {
                                    key: "_o",
                                    value: function () {
                                        var n = this;
                                        if (
                                            (this.d.dropdownContainer &&
                                                this.d.dropdownContainer.appendChild(
                                                    this.dropdown
                                                ),
                                            !this.g)
                                        ) {
                                            var i =
                                                    this.a.getBoundingClientRect(),
                                                r =
                                                    t.pageYOffset ||
                                                    e.documentElement.scrollTop,
                                                a = i.top + r,
                                                s = this.m.offsetHeight,
                                                o =
                                                    a +
                                                        this.a.offsetHeight +
                                                        s <
                                                    r + t.innerHeight,
                                                l = a - s > r;
                                            if (
                                                (this._n2(
                                                    this.m,
                                                    "iti__country-list--dropup",
                                                    !o && l
                                                ),
                                                this.d.dropdownContainer)
                                            ) {
                                                var u =
                                                    !o && l
                                                        ? 0
                                                        : this.a.offsetHeight;
                                                (this.dropdown.style.top =
                                                    "".concat(a + u, "px")),
                                                    (this.dropdown.style.left =
                                                        "".concat(
                                                            i.left +
                                                                e.body
                                                                    .scrollLeft,
                                                            "px"
                                                        )),
                                                    (this._a4 = function () {
                                                        return n._2();
                                                    }),
                                                    t.addEventListener(
                                                        "scroll",
                                                        this._a4
                                                    );
                                            }
                                        }
                                    },
                                },
                                {
                                    key: "_o2",
                                    value: function (t) {
                                        for (
                                            var e = t;
                                            e &&
                                            e !== this.m &&
                                            !e.classList.contains(
                                                "iti__country"
                                            );

                                        )
                                            e = e.parentNode;
                                        return e === this.m ? null : e;
                                    },
                                },
                                {
                                    key: "_p",
                                    value: function () {
                                        var t = this;
                                        (this._a0 = function (e) {
                                            var n = t._o2(e.target);
                                            n && t._x(n, !1);
                                        }),
                                            this.m.addEventListener(
                                                "mouseover",
                                                this._a0
                                            ),
                                            (this._a1 = function (e) {
                                                var n = t._o2(e.target);
                                                n && t._1(n);
                                            }),
                                            this.m.addEventListener(
                                                "click",
                                                this._a1
                                            );
                                        var n = !0;
                                        (this._a2 = function () {
                                            n || t._2(), (n = !1);
                                        }),
                                            e.documentElement.addEventListener(
                                                "click",
                                                this._a2
                                            );
                                        var i = "",
                                            r = null;
                                        (this._a3 = function (e) {
                                            e.preventDefault(),
                                                "ArrowUp" === e.key ||
                                                "Up" === e.key ||
                                                "ArrowDown" === e.key ||
                                                "Down" === e.key
                                                    ? t._q(e.key)
                                                    : "Enter" === e.key
                                                    ? t._r()
                                                    : "Escape" === e.key
                                                    ? t._2()
                                                    : /^[a-zA-ZÀ-ÿ ]$/.test(
                                                          e.key
                                                      ) &&
                                                      (r && clearTimeout(r),
                                                      (i +=
                                                          e.key.toLowerCase()),
                                                      t._s(i),
                                                      (r = setTimeout(
                                                          function () {
                                                              i = "";
                                                          },
                                                          1e3
                                                      )));
                                        }),
                                            e.addEventListener(
                                                "keydown",
                                                this._a3
                                            );
                                    },
                                },
                                {
                                    key: "_q",
                                    value: function (t) {
                                        var e =
                                            "ArrowUp" === t || "Up" === t
                                                ? this.c.previousElementSibling
                                                : this.c.nextElementSibling;
                                        e &&
                                            (e.classList.contains(
                                                "iti__divider"
                                            ) &&
                                                (e =
                                                    "ArrowUp" === t ||
                                                    "Up" === t
                                                        ? e.previousElementSibling
                                                        : e.nextElementSibling),
                                            this._x(e, !0));
                                    },
                                },
                                {
                                    key: "_r",
                                    value: function () {
                                        this.c && this._1(this.c);
                                    },
                                },
                                {
                                    key: "_s",
                                    value: function (t) {
                                        for (var e = 0; e < this.p.length; e++)
                                            if (this._t(this.p[e].name, t)) {
                                                var n = this.m.querySelector(
                                                    "#iti-item-".concat(
                                                        this.p[e].iso2
                                                    )
                                                );
                                                this._x(n, !1), this._3(n, !0);
                                                break;
                                            }
                                    },
                                },
                                {
                                    key: "_t",
                                    value: function (t, e) {
                                        return (
                                            t
                                                .substr(0, e.length)
                                                .toLowerCase() === e
                                        );
                                    },
                                },
                                {
                                    key: "_u",
                                    value: function (e) {
                                        var n = e;
                                        if (
                                            this.d.formatOnDisplay &&
                                            t.intlTelInputUtils &&
                                            this.s
                                        ) {
                                            var i =
                                                    !this.d.separateDialCode &&
                                                    (this.d.nationalMode ||
                                                        "+" !== n.charAt(0)),
                                                r =
                                                    intlTelInputUtils.numberFormat,
                                                a = r.NATIONAL,
                                                s = r.INTERNATIONAL,
                                                o = i ? a : s;
                                            n = intlTelInputUtils.formatNumber(
                                                n,
                                                this.s.iso2,
                                                o
                                            );
                                        }
                                        (n = this._7(n)), (this.a.value = n);
                                    },
                                },
                                {
                                    key: "_v",
                                    value: function (t) {
                                        var e = t,
                                            n = this.s.dialCode,
                                            i = "1" === n;
                                        e &&
                                            this.d.nationalMode &&
                                            i &&
                                            "+" !== e.charAt(0) &&
                                            ("1" !== e.charAt(0) &&
                                                (e = "1".concat(e)),
                                            (e = "+".concat(e))),
                                            this.d.separateDialCode &&
                                                n &&
                                                "+" !== e.charAt(0) &&
                                                (e = "+".concat(n).concat(e));
                                        var r = this._5(e),
                                            a = this._m(e),
                                            s = null;
                                        if (r) {
                                            var o = this.q[this._m(r)],
                                                l =
                                                    -1 !==
                                                        o.indexOf(
                                                            this.s.iso2
                                                        ) &&
                                                    a.length <= r.length - 1;
                                            if (
                                                !(
                                                    ("1" === n && this._w(a)) ||
                                                    l
                                                )
                                            )
                                                for (
                                                    var u = 0;
                                                    u < o.length;
                                                    u++
                                                )
                                                    if (o[u]) {
                                                        s = o[u];
                                                        break;
                                                    }
                                        } else
                                            "+" === e.charAt(0) && a.length
                                                ? (s = "")
                                                : (e && "+" !== e) ||
                                                  (s = this.j);
                                        return null !== s && this._z(s);
                                    },
                                },
                                {
                                    key: "_w",
                                    value: function (t) {
                                        var e = this._m(t);
                                        if ("1" === e.charAt(0)) {
                                            var n = e.substr(1, 3);
                                            return -1 !== u.indexOf(n);
                                        }
                                        return !1;
                                    },
                                },
                                {
                                    key: "_x",
                                    value: function (t, e) {
                                        var n = this.c;
                                        n &&
                                            n.classList.remove(
                                                "iti__highlight"
                                            ),
                                            (this.c = t),
                                            this.c.classList.add(
                                                "iti__highlight"
                                            ),
                                            e && this.c.focus();
                                    },
                                },
                                {
                                    key: "_y",
                                    value: function (t, e, n) {
                                        for (
                                            var i = e ? r : this.p, a = 0;
                                            a < i.length;
                                            a++
                                        )
                                            if (i[a].iso2 === t) return i[a];
                                        if (n) return null;
                                        throw new Error(
                                            "No country data for '".concat(
                                                t,
                                                "'"
                                            )
                                        );
                                    },
                                },
                                {
                                    key: "_z",
                                    value: function (t) {
                                        var e = this.s.iso2 ? this.s : {};
                                        (this.s = t ? this._y(t, !1, !1) : {}),
                                            this.s.iso2 &&
                                                (this.j = this.s.iso2),
                                            this.l.setAttribute(
                                                "class",
                                                "iti__flag iti__".concat(t)
                                            );
                                        var n = t
                                            ? ""
                                                  .concat(this.s.name, ": +")
                                                  .concat(this.s.dialCode)
                                            : "Unknown";
                                        if (
                                            (this.selectedFlag.setAttribute(
                                                "title",
                                                n
                                            ),
                                            this.d.separateDialCode)
                                        ) {
                                            var i = this.s.dialCode
                                                ? "+".concat(this.s.dialCode)
                                                : "";
                                            this.t.innerHTML = i;
                                            var r =
                                                this.selectedFlag.offsetWidth ||
                                                this._getHiddenSelectedFlagWidth();
                                            this.a.style.paddingLeft =
                                                "".concat(r + 6, "px");
                                        }
                                        if ((this._0(), this.d.allowDropdown)) {
                                            var a = this.b;
                                            if (
                                                (a &&
                                                    (a.classList.remove(
                                                        "iti__active"
                                                    ),
                                                    a.setAttribute(
                                                        "aria-selected",
                                                        "false"
                                                    )),
                                                t)
                                            ) {
                                                var s = this.m.querySelector(
                                                    "#iti-item-".concat(t)
                                                );
                                                s.setAttribute(
                                                    "aria-selected",
                                                    "true"
                                                ),
                                                    s.classList.add(
                                                        "iti__active"
                                                    ),
                                                    (this.b = s),
                                                    this.m.setAttribute(
                                                        "aria-activedescendant",
                                                        s.getAttribute("id")
                                                    );
                                            }
                                        }
                                        return e.iso2 !== t;
                                    },
                                },
                                {
                                    key: "_getHiddenSelectedFlagWidth",
                                    value: function () {
                                        var t = this.a.parentNode.cloneNode();
                                        (t.style.visibility = "hidden"),
                                            e.body.appendChild(t);
                                        var n = this.selectedFlag.cloneNode(!0);
                                        t.appendChild(n);
                                        var i = n.offsetWidth;
                                        return t.parentNode.removeChild(t), i;
                                    },
                                },
                                {
                                    key: "_0",
                                    value: function () {
                                        var e =
                                            "aggressive" ===
                                                this.d.autoPlaceholder ||
                                            (!this.e &&
                                                "polite" ===
                                                    this.d.autoPlaceholder);
                                        if (t.intlTelInputUtils && e) {
                                            var n =
                                                    intlTelInputUtils
                                                        .numberType[
                                                        this.d
                                                            .placeholderNumberType
                                                    ],
                                                i = this.s.iso2
                                                    ? intlTelInputUtils.getExampleNumber(
                                                          this.s.iso2,
                                                          this.d.nationalMode,
                                                          n
                                                      )
                                                    : "";
                                            (i = this._7(i)),
                                                "function" ==
                                                    typeof this.d
                                                        .customPlaceholder &&
                                                    (i =
                                                        this.d.customPlaceholder(
                                                            i,
                                                            this.s
                                                        )),
                                                this.a.setAttribute(
                                                    "placeholder",
                                                    i
                                                );
                                        }
                                    },
                                },
                                {
                                    key: "_1",
                                    value: function (t) {
                                        var e = this._z(
                                            t.getAttribute("data-country-code")
                                        );
                                        this._2(),
                                            this._4(
                                                t.getAttribute(
                                                    "data-dial-code"
                                                ),
                                                !0
                                            ),
                                            this.a.focus();
                                        var n = this.a.value.length;
                                        this.a.setSelectionRange(n, n),
                                            e && this._8();
                                    },
                                },
                                {
                                    key: "_2",
                                    value: function () {
                                        this.m.classList.add("iti__hide"),
                                            this.m.setAttribute(
                                                "aria-expanded",
                                                "false"
                                            ),
                                            this.u.classList.remove(
                                                "iti__arrow--up"
                                            ),
                                            e.removeEventListener(
                                                "keydown",
                                                this._a3
                                            ),
                                            e.documentElement.removeEventListener(
                                                "click",
                                                this._a2
                                            ),
                                            this.m.removeEventListener(
                                                "mouseover",
                                                this._a0
                                            ),
                                            this.m.removeEventListener(
                                                "click",
                                                this._a1
                                            ),
                                            this.d.dropdownContainer &&
                                                (this.g ||
                                                    t.removeEventListener(
                                                        "scroll",
                                                        this._a4
                                                    ),
                                                this.dropdown.parentNode &&
                                                    this.dropdown.parentNode.removeChild(
                                                        this.dropdown
                                                    )),
                                            this._m2("close:countrydropdown");
                                    },
                                },
                                {
                                    key: "_3",
                                    value: function (n, i) {
                                        var r = this.m,
                                            a =
                                                t.pageYOffset ||
                                                e.documentElement.scrollTop,
                                            s = r.offsetHeight,
                                            o =
                                                r.getBoundingClientRect().top +
                                                a,
                                            l = o + s,
                                            u = n.offsetHeight,
                                            d =
                                                n.getBoundingClientRect().top +
                                                a,
                                            c = d + u,
                                            f = d - o + r.scrollTop,
                                            h = s / 2 - u / 2;
                                        if (d < o)
                                            i && (f -= h), (r.scrollTop = f);
                                        else if (c > l) {
                                            i && (f += h);
                                            var p = s - u;
                                            r.scrollTop = f - p;
                                        }
                                    },
                                },
                                {
                                    key: "_4",
                                    value: function (t, e) {
                                        var n,
                                            i = this.a.value,
                                            r = "+".concat(t);
                                        if ("+" === i.charAt(0)) {
                                            var a = this._5(i);
                                            n = a ? i.replace(a, r) : r;
                                        } else {
                                            if (
                                                this.d.nationalMode ||
                                                this.d.separateDialCode
                                            )
                                                return;
                                            if (i) n = r + i;
                                            else {
                                                if (
                                                    !e &&
                                                    this.d.autoHideDialCode
                                                )
                                                    return;
                                                n = r;
                                            }
                                        }
                                        this.a.value = n;
                                    },
                                },
                                {
                                    key: "_5",
                                    value: function (t) {
                                        var e = "";
                                        if ("+" === t.charAt(0))
                                            for (
                                                var n = "", i = 0;
                                                i < t.length;
                                                i++
                                            ) {
                                                var r = t.charAt(i);
                                                if (
                                                    !isNaN(parseInt(r, 10)) &&
                                                    ((n += r),
                                                    this.q[n] &&
                                                        (e = t.substr(
                                                            0,
                                                            i + 1
                                                        )),
                                                    n.length ===
                                                        this.dialCodeMaxLen)
                                                )
                                                    break;
                                            }
                                        return e;
                                    },
                                },
                                {
                                    key: "_6",
                                    value: function () {
                                        var t = this.a.value.trim(),
                                            e = this.s.dialCode,
                                            n = this._m(t);
                                        return (
                                            (this.d.separateDialCode &&
                                            "+" !== t.charAt(0) &&
                                            e &&
                                            n
                                                ? "+".concat(e)
                                                : "") + t
                                        );
                                    },
                                },
                                {
                                    key: "_7",
                                    value: function (t) {
                                        var e = t;
                                        if (this.d.separateDialCode) {
                                            var n = this._5(e);
                                            if (n) {
                                                var i =
                                                    " " ===
                                                        e[
                                                            (n = "+".concat(
                                                                this.s.dialCode
                                                            )).length
                                                        ] || "-" === e[n.length]
                                                        ? n.length + 1
                                                        : n.length;
                                                e = e.substr(i);
                                            }
                                        }
                                        return this._j2(e);
                                    },
                                },
                                {
                                    key: "_8",
                                    value: function () {
                                        this._m2("countrychange");
                                    },
                                },
                                {
                                    key: "handleAutoCountry",
                                    value: function () {
                                        "auto" === this.d.initialCountry &&
                                            ((this.j =
                                                t.intlTelInputGlobals.autoCountry),
                                            this.a.value ||
                                                this.setCountry(this.j),
                                            this.h());
                                    },
                                },
                                {
                                    key: "handleUtils",
                                    value: function () {
                                        t.intlTelInputUtils &&
                                            (this.a.value &&
                                                this._u(this.a.value),
                                            this._0()),
                                            this.i0();
                                    },
                                },
                                {
                                    key: "destroy",
                                    value: function () {
                                        var e = this.a.form;
                                        if (this.d.allowDropdown) {
                                            this._2(),
                                                this.selectedFlag.removeEventListener(
                                                    "click",
                                                    this._a10
                                                ),
                                                this.k.removeEventListener(
                                                    "keydown",
                                                    this._a11
                                                );
                                            var n = this._i1();
                                            n &&
                                                n.removeEventListener(
                                                    "click",
                                                    this._a9
                                                );
                                        }
                                        this.hiddenInput &&
                                            e &&
                                            e.removeEventListener(
                                                "submit",
                                                this._a14
                                            ),
                                            this.d.autoHideDialCode &&
                                                (e &&
                                                    e.removeEventListener(
                                                        "submit",
                                                        this._a8
                                                    ),
                                                this.a.removeEventListener(
                                                    "blur",
                                                    this._a8
                                                )),
                                            this.a.removeEventListener(
                                                "keyup",
                                                this._a12
                                            ),
                                            this.a.removeEventListener(
                                                "cut",
                                                this._a13
                                            ),
                                            this.a.removeEventListener(
                                                "paste",
                                                this._a13
                                            ),
                                            this.a.removeAttribute(
                                                "data-intl-tel-input-id"
                                            );
                                        var i = this.a.parentNode;
                                        i.parentNode.insertBefore(this.a, i),
                                            i.parentNode.removeChild(i),
                                            delete t.intlTelInputGlobals
                                                .instances[this.id];
                                    },
                                },
                                {
                                    key: "getExtension",
                                    value: function () {
                                        return t.intlTelInputUtils
                                            ? intlTelInputUtils.getExtension(
                                                  this._6(),
                                                  this.s.iso2
                                              )
                                            : "";
                                    },
                                },
                                {
                                    key: "getNumber",
                                    value: function (e) {
                                        if (t.intlTelInputUtils) {
                                            var n = this.s.iso2;
                                            return intlTelInputUtils.formatNumber(
                                                this._6(),
                                                n,
                                                e
                                            );
                                        }
                                        return "";
                                    },
                                },
                                {
                                    key: "getNumberType",
                                    value: function () {
                                        return t.intlTelInputUtils
                                            ? intlTelInputUtils.getNumberType(
                                                  this._6(),
                                                  this.s.iso2
                                              )
                                            : -99;
                                    },
                                },
                                {
                                    key: "getSelectedCountryData",
                                    value: function () {
                                        return this.s;
                                    },
                                },
                                {
                                    key: "getValidationError",
                                    value: function () {
                                        if (t.intlTelInputUtils) {
                                            var e = this.s.iso2;
                                            return intlTelInputUtils.getValidationError(
                                                this._6(),
                                                e
                                            );
                                        }
                                        return -99;
                                    },
                                },
                                {
                                    key: "isValidNumber",
                                    value: function () {
                                        var e = this._6().trim(),
                                            n = this.d.nationalMode
                                                ? this.s.iso2
                                                : "";
                                        return t.intlTelInputUtils
                                            ? intlTelInputUtils.isValidNumber(
                                                  e,
                                                  n
                                              )
                                            : null;
                                    },
                                },
                                {
                                    key: "setCountry",
                                    value: function (t) {
                                        var e = t.toLowerCase();
                                        this.l.classList.contains(
                                            "iti__".concat(e)
                                        ) ||
                                            (this._z(e),
                                            this._4(this.s.dialCode, !1),
                                            this._8());
                                    },
                                },
                                {
                                    key: "setNumber",
                                    value: function (t) {
                                        var e = this._v(t);
                                        this._u(t), e && this._8();
                                    },
                                },
                                {
                                    key: "setPlaceholderNumberType",
                                    value: function (t) {
                                        (this.d.placeholderNumberType = t),
                                            this._0();
                                    },
                                },
                            ]),
                            n
                        );
                    })();
                t.intlTelInputGlobals.getCountryData = function () {
                    return r;
                };
                var h = function (t, n, i) {
                    var r = e.createElement("script");
                    (r.onload = function () {
                        c("handleUtils"), n && n();
                    }),
                        (r.onerror = function () {
                            c("rejectUtilsScriptPromise"), i && i();
                        }),
                        (r.className = "iti-load-utils"),
                        (r.async = !0),
                        (r.src = t),
                        e.body.appendChild(r);
                };
                return (
                    (t.intlTelInputGlobals.loadUtils = function (e) {
                        if (
                            !t.intlTelInputUtils &&
                            !t.intlTelInputGlobals.startedLoadingUtilsScript
                        ) {
                            if (
                                ((t.intlTelInputGlobals.startedLoadingUtilsScript =
                                    !0),
                                "undefined" != typeof Promise)
                            )
                                return new Promise(function (t, n) {
                                    return h(e, t, n);
                                });
                            h(e);
                        }
                        return null;
                    }),
                    (t.intlTelInputGlobals.defaults = l),
                    (t.intlTelInputGlobals.version = "16.0.7"),
                    function (e, n) {
                        var i = new f(e, n);
                        return (
                            i._init(),
                            e.setAttribute("data-intl-tel-input-id", i.id),
                            (t.intlTelInputGlobals.instances[i.id] = i),
                            i
                        );
                    }
                );
            })();
        })(window, document);
        "object" == typeof module && module.exports
            ? (module.exports = e)
            : (window.intlTelInput = e);
    })();

