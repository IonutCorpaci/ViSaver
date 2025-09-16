(() => {
    "use strict";
    var __webpack_modules__ = {
        287: (__unused_webpack_module, exports) => {
            /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
            var l = Symbol.for("react.element"), n = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z = Symbol.iterator;
            function A(a) {
                if (null === a || "object" !== typeof a) return null;
                z && a[z] || a["@@iterator"];
                return "function" === typeof a ? a : null;
            }
            var B = {
                isMounted: function() {
                    return !1;
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            }, C = Object.assign, D = {};
            function E(a, b, e) {
                this.props = a;
                this.context = b;
                this.refs = D;
                this.updater = e || B;
            }
            E.prototype.isReactComponent = {};
            E.prototype.setState = function(a, b) {
                if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, a, b, "setState");
            };
            E.prototype.forceUpdate = function(a) {
                this.updater.enqueueForceUpdate(this, a, "forceUpdate");
            };
            function F() {}
            F.prototype = E.prototype;
            function G(a, b, e) {
                this.props = a;
                this.context = b;
                this.refs = D;
                this.updater = e || B;
            }
            var H = G.prototype = new F;
            H.constructor = G;
            C(H, E.prototype);
            H.isPureReactComponent = !0;
            var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = {
                current: null
            }, L = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function M(a, b, e) {
                var d, c = {}, k = null, h = null;
                if (null != b) for (d in void 0 !== b.ref && b.ref, void 0 !== b.key && "" + b.key, 
                b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
                var g = arguments.length - 2;
                if (1 === g) c.children = e; else if (1 < g) {
                    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
                    c.children = f;
                }
                if (a && a.defaultProps) for (d in a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
                return {
                    $$typeof: l,
                    type: a,
                    key: k,
                    ref: h,
                    props: c,
                    _owner: K.current
                };
            }
            function N(a, b) {
                return {
                    $$typeof: l,
                    type: a.type,
                    key: b,
                    ref: a.ref,
                    props: a.props,
                    _owner: a._owner
                };
            }
            function O(a) {
                return "object" === typeof a && null !== a && a.$$typeof === l;
            }
            function escape(a) {
                var b = {
                    "=": "=0",
                    ":": "=2"
                };
                return "$" + a.replace(/[=:]/g, (function(a) {
                    return b[a];
                }));
            }
            var P = /\/+/g;
            function Q(a, b) {
                return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
            }
            function R(a, b, e, d, c) {
                var k = typeof a;
                if ("undefined" === k || "boolean" === k) 0;
                var h = !1;
                if (null === a) 0; else switch (k) {
                  case "string":
                  case "number":
                    0;
                    break;

                  case "object":
                    switch (a.$$typeof) {
                      case l:
                      case n:
                        0;
                    }
                }
                if (h) return c(h), "" === d ? "." + Q(h, 0) : d, I(c) ? (null != a && a.replace(P, "$&/") + "/", 
                R(c, b, e, "", (function(a) {
                    return a;
                }))) : null != c && (O(c) && N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a), 
                b.push(c)), 1;
                0;
                0;
                if (I(a)) for (var g = 0; g < a.length; g++) {
                    a[g];
                    var f = d + Q(k, g);
                    h += R(k, b, e, f, c);
                } else if (A(a), "function" === typeof f) for (f.call(a), 0; !a.next().done; ) k.value, 
                d + Q(k, g++), h += R(k, b, e, f, c); else if ("object" === k) throw String(a), 
                Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
                return h;
            }
            function S(a, b, e) {
                if (null == a) return a;
                var d = [], c = 0;
                R(a, d, "", "", (function(a) {
                    return b.call(e, a, c++);
                }));
                return d;
            }
            function T(a) {
                if (-1 === a._status) {
                    var b = a._result;
                    b();
                    b.then((function(b) {
                        if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
                    }), (function(b) {
                        if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
                    }));
                    -1 === a._status && (a._status = 0, a._result = b);
                }
                if (1 === a._status) return a._result.default;
                throw a._result;
            }
            var U = {
                current: null
            }, V = {
                transition: null
            }, W = {
                ReactCurrentDispatcher: U,
                ReactCurrentBatchConfig: V,
                ReactCurrentOwner: K
            };
            function X() {
                throw Error("act(...) is not supported in production builds of React.");
            }
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
        },
        540: (module, __unused_webpack_exports, __webpack_require__) => {
            if (true) __webpack_require__(287);
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }
    function addLoadedClass() {
        if (!document.documentElement.classList.contains("loading")) window.addEventListener("load", (function() {
            setTimeout((function() {
                document.documentElement.classList.add("loaded");
            }), 0);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    __webpack_require__(540);
    const parallax = document.querySelectorAll(".parallax-item");
    if (parallax.length) window.addEventListener("scroll", (() => {
        const scrolled = window.scrollY;
        parallax.forEach((el => {
            el.style.transform = `translateY(${-scrolled * .2}px)`;
        }));
    }));
    const ticker = document.querySelector(".ticker");
    const createPlaylistCircle = document.querySelector(".circle-playlist__image");
    if (ticker) window.addEventListener("scroll", (() => {
        const scrolled = window.scrollY;
        ticker.style.transform = `translateX(${-scrolled * .8}px)`;
        createPlaylistCircle.style.transform = `rotate(${-scrolled * .5}deg)`;
    }));
    const actionsBlock = document.querySelector(".actions");
    const actionsItem = document.querySelectorAll(".actions__item");
    const actionsTitle = document.querySelectorAll(".actions__text");
    const actionsDescription = document.querySelectorAll(".actions__description");
    if (actionsBlock) window.addEventListener("scroll", (() => {
        const rect = actionsBlock.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
            const visible = windowHeight - rect.top;
            let progress = visible / rect.height;
            progress = Math.min(Math.max(progress, 0), 1);
            function delayedOpacity(p, delay) {
                let value = (p - delay) / (1 - delay);
                return Math.min(Math.max(value, 0), 1);
            }
            actionsItem.forEach((el => {
                el.style.opacity = delayedOpacity(progress, 0);
            }));
            actionsTitle.forEach((el => {
                el.style.opacity = delayedOpacity(progress, .3);
            }));
            actionsDescription.forEach((el => {
                el.style.opacity = delayedOpacity(progress, .6);
            }));
        } else [ ...actionsItem, ...actionsTitle, ...actionsDescription ].forEach((el => el.style.opacity = 0));
    }));
    const createPlaylistBlock = document.querySelector(".create-playlist");
    const createPlaylistRocket = document.querySelector(".rocket-create");
    const createPlaylistText = document.querySelector(".create-playlist__text");
    const createPlaylistGirls = document.querySelectorAll(".girl-create");
    if (createPlaylistBlock) {
        const updateElements = () => {
            const rect = createPlaylistBlock.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const inView = rect.bottom <= windowHeight;
            createPlaylistGirls.forEach((el => {
                el.style.transform = inView ? "rotate(0deg)" : "rotate(15deg)";
            }));
            createPlaylistRocket.style.transform = inView ? "translateX(0)" : "translateX(-150%)";
            createPlaylistText.style.opacity = inView ? "1" : "0";
        };
        let ticking = false;
        window.addEventListener("scroll", (() => {
            if (!ticking) {
                window.requestAnimationFrame((() => {
                    updateElements();
                    ticking = false;
                }));
                ticking = true;
            }
        }));
        updateElements();
    }
    const garmonyBlock = document.querySelector(".garmony");
    const garmonyTitle = document.querySelector(".garmony__title");
    const garmonyItems = document.querySelectorAll(".item-garmony");
    if (garmonyBlock) window.addEventListener("scroll", (() => {
        const rect = garmonyBlock.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const start = windowHeight * 1.2;
        const end = windowHeight * .2;
        let progress = (start - rect.top) / (start - end);
        progress = Math.min(Math.max(progress, 0), 1);
        const translateX = 1200 * (1 - progress);
        garmonyTitle.style.transform = `translateX(${translateX}px)`;
        garmonyTitle.style.opacity = progress;
        const gItemTop = rect.top;
        const a = Math.max(0, (gItemTop - 150) / 20);
        const a1 = Math.max(0, (gItemTop - 150) / 5);
        const b = Math.max(0, a - 12);
        const c = Math.max(0, (gItemTop - 100) / 60);
        const d = Math.max(0, (gItemTop - 100) / 4);
        const transforms = [ `rotate(${-a}deg) translate(${-a}px, ${-a1}px)`, `translate(0, ${-a1}px)`, `rotate(${b}deg) translate(${a}px, ${-a1}px)`, `rotate(${c}deg) translate(${-b}px, ${a1}px)`, `rotate(${-c}deg) translate(${-a1}px, ${d}px)` ];
        garmonyItems.forEach(((item, i) => {
            if (i < transforms.length) item.style.transform = transforms[i];
        }));
    }));
    window["FLS"] = false;
    addLoadedClass();
})();