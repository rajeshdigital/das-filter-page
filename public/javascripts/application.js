Function.prototype.bind || (Function.prototype.bind = function(e) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var t = Array.prototype.slice.call(arguments, 1),
            n = this,
            i = function() {},
            r = function() {
                return n.apply(this instanceof i && e ? this : e, t.concat(Array.prototype.slice.call(arguments)))
            };
        return i.prototype = this.prototype, r.prototype = new i, r
    }),
    function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = e.length,
                n = re.type(e);
            return "function" === n || re.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function i(e, t, n) {
            if (re.isFunction(t)) return re.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return re.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (pe.test(t)) return re.filter(t, e, n);
                t = re.filter(t, e)
            }
            return re.grep(e, function(e) {
                return re.inArray(e, t) >= 0 !== n
            })
        }

        function r(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function o(e) {
            var t = xe[e] = {};
            return re.each(e.match(be) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function a() {
            he.addEventListener ? (he.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (he.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
        }

        function s() {
            (he.addEventListener || "load" === event.type || "complete" === he.readyState) && (a(), re.ready())
        }

        function l(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var i = "data-" + t.replace(Ee, "-$1").toLowerCase();
                if (n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ce.test(n) ? re.parseJSON(n) : n
                    } catch (r) {}
                    re.data(e, t, n)
                } else n = void 0
            }
            return n
        }

        function u(e) {
            var t;
            for (t in e)
                if (("data" !== t || !re.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function c(e, t, n, i) {
            if (re.acceptData(e)) {
                var r, o, a = re.expando,
                    s = e.nodeType,
                    l = s ? re.cache : e,
                    u = s ? e[a] : e[a] && a;
                if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = K.pop() || re.guid++ : a), l[u] || (l[u] = s ? {} : {
                    toJSON: re.noop
                }), ("object" == typeof t || "function" == typeof t) && (i ? l[u] = re.extend(l[u], t) : l[u].data = re.extend(l[u].data, t)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[re.camelCase(t)] = n), "string" == typeof t ? (r = o[t], null == r && (r = o[re.camelCase(t)])) : r = o, r
            }
        }

        function d(e, t, n) {
            if (re.acceptData(e)) {
                var i, r, o = e.nodeType,
                    a = o ? re.cache : e,
                    s = o ? e[re.expando] : re.expando;
                if (a[s]) {
                    if (t && (i = n ? a[s] : a[s].data)) {
                        re.isArray(t) ? t = t.concat(re.map(t, re.camelCase)) : t in i ? t = [t] : (t = re.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                        for (; r--;) delete i[t[r]];
                        if (n ? !u(i) : !re.isEmptyObject(i)) return
                    }(n || (delete a[s].data, u(a[s]))) && (o ? re.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
                }
            }
        }

        function p() {
            return !0
        }

        function f() {
            return !1
        }

        function h() {
            try {
                return he.activeElement
            } catch (e) {}
        }

        function g(e) {
            var t = Fe.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function m(e, t) {
            var n, i, r = 0,
                o = typeof e.getElementsByTagName !== Te ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Te ? e.querySelectorAll(t || "*") : void 0;
            if (!o)
                for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || re.nodeName(i, t) ? o.push(i) : re.merge(o, m(i, t));
            return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], o) : o
        }

        function v(e) {
            je.test(e.type) && (e.defaultChecked = e.checked)
        }

        function y(e, t) {
            return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function b(e) {
            return e.type = (null !== re.find.attr(e, "type")) + "/" + e.type, e
        }

        function x(e) {
            var t = ze.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function w(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) re._data(n, "globalEval", !t || re._data(t[i], "globalEval"))
        }

        function k(e, t) {
            if (1 === t.nodeType && re.hasData(e)) {
                var n, i, r, o = re._data(e),
                    a = re._data(t, o),
                    s = o.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)
                        for (i = 0, r = s[n].length; r > i; i++) re.event.add(t, n, s[n][i])
                }
                a.data && (a.data = re.extend({}, a.data))
            }
        }

        function T(e, t) {
            var n, i, r;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[re.expando]) {
                    r = re._data(t);
                    for (i in r.events) re.removeEvent(t, i, r.handle);
                    t.removeAttribute(re.expando)
                }
                "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !re.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && je.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function C(t, n) {
            var i, r = re(n.createElement(t)).appendTo(n.body),
                o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : re.css(r[0], "display");
            return r.detach(), o
        }

        function E(e) {
            var t = he,
                n = Ze[e];
            return n || (n = C(e, t), "none" !== n && n || (Ye = (Ye || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ye[0].contentWindow || Ye[0].contentDocument).document, t.write(), t.close(), n = C(e, t), Ye.detach()), Ze[e] = n), n
        }

        function N(e, t) {
            return {
                get: function() {
                    var n = e();
                    if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function S(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = pt.length; r--;)
                if (t = pt[r] + n, t in e) return t;
            return i
        }

        function D(e, t) {
            for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = re._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && De(i) && (o[a] = re._data(i, "olddisplay", E(i.nodeName)))) : (r = De(i), (n && "none" !== n || !r) && re._data(i, "olddisplay", r ? n : re.css(i, "display"))));
            for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
            return e
        }

        function A(e, t, n) {
            var i = lt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function j(e, t, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += re.css(e, n + Se[o], !0, r)), i ? ("content" === n && (a -= re.css(e, "padding" + Se[o], !0, r)), "margin" !== n && (a -= re.css(e, "border" + Se[o] + "Width", !0, r))) : (a += re.css(e, "padding" + Se[o], !0, r), "padding" !== n && (a += re.css(e, "border" + Se[o] + "Width", !0, r)));
            return a
        }

        function L(e, t, n) {
            var i = !0,
                r = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = et(e),
                a = ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if (r = tt(e, t, o), (0 > r || null == r) && (r = e.style[t]), it.test(r)) return r;
                i = a && (ne.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + j(e, t, n || (a ? "border" : "content"), i, o) + "px"
        }

        function H(e, t, n, i, r) {
            return new H.prototype.init(e, t, n, i, r)
        }

        function O() {
            return setTimeout(function() {
                ft = void 0
            }), ft = re.now()
        }

        function $(e, t) {
            var n, i = {
                    height: e
                },
                r = 0;
            for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Se[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function M(e, t, n) {
            for (var i, r = (bt[t] || []).concat(bt["*"]), o = 0, a = r.length; a > o; o++)
                if (i = r[o].call(n, t, e)) return i
        }

        function F(e, t, n) {
            var i, r, o, a, s, l, u, c, d = this,
                p = {},
                f = e.style,
                h = e.nodeType && De(e),
                g = re._data(e, "fxshow");
            n.queue || (s = re._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, d.always(function() {
                d.always(function() {
                    s.unqueued--, re.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = re.css(e, "display"), c = "none" === u ? re._data(e, "olddisplay") || E(e.nodeName) : u, "inline" === c && "none" === re.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (r = t[i], gt.exec(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[i]) continue;
                        h = !0
                    }
                    p[i] = g && g[i] || re.style(e, i)
                } else u = void 0;
            if (re.isEmptyObject(p)) "inline" === ("none" === u ? E(e.nodeName) : u) && (f.display = u);
            else {
                g ? "hidden" in g && (h = g.hidden) : g = re._data(e, "fxshow", {}), o && (g.hidden = !h), h ? re(e).show() : d.done(function() {
                    re(e).hide()
                }), d.done(function() {
                    var t;
                    re._removeData(e, "fxshow");
                    for (t in p) re.style(e, t, p[t])
                });
                for (i in p) a = M(h ? g[i] : 0, i, d), i in g || (g[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function q(e, t) {
            var n, i, r, o, a;
            for (n in e)
                if (i = re.camelCase(n), r = t[i], o = e[n], re.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = re.cssHooks[i], a && "expand" in a) {
                    o = a.expand(o), delete e[i];
                    for (n in o) n in e || (e[n] = o[n], t[n] = r)
                } else t[i] = r
        }

        function _(e, t, n) {
            var i, r, o = 0,
                a = yt.length,
                s = re.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var t = ft || O(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
                    return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
                },
                u = s.promise({
                    elem: e,
                    props: re.extend({}, t),
                    opts: re.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: ft || O(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = re.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) u.tweens[n].run(1);
                        return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                    }
                }),
                c = u.props;
            for (q(c, u.opts.specialEasing); a > o; o++)
                if (i = yt[o].call(u, e, c, u.opts)) return i;
            return re.map(c, M, u), re.isFunction(u.opts.start) && u.opts.start.call(e, u), re.fx.timer(re.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function G(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    o = t.toLowerCase().match(be) || [];
                if (re.isFunction(n))
                    for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function P(e, t, n, i) {
            function r(s) {
                var l;
                return o[s] = !0, re.each(e[s] || [], function(e, s) {
                    var u = s(t, n, i);
                    return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
                }), l
            }
            var o = {},
                a = e === Vt;
            return r(t.dataTypes[0]) || !o["*"] && r("*")
        }

        function B(e, t) {
            var n, i, r = re.ajaxSettings.flatOptions || {};
            for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
            return n && re.extend(!0, e, n), e
        }

        function I(e, t, n) {
            for (var i, r, o, a, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (a in s)
                    if (s[a] && s[a].test(r)) {
                        l.unshift(a);
                        break
                    }
            if (l[0] in n) o = l[0];
            else {
                for (a in n) {
                    if (!l[0] || e.converters[a + " " + l[0]]) {
                        o = a;
                        break
                    }
                    i || (i = a)
                }
                o = o || i
            }
            return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
        }

        function V(e, t, n, i) {
            var r, o, a, s, l, u = {},
                c = e.dataTypes.slice();
            if (c[1])
                for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
            for (o = c.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (a = u[l + " " + o] || u["* " + o], !a)
                    for (r in u)
                        if (s = r.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                            a === !0 ? a = u[r] : u[r] !== !0 && (o = s[0], c.unshift(s[1]));
                            break
                        }
                if (a !== !0)
                    if (a && e["throws"]) t = a(t);
                    else try {
                        t = a(t)
                    } catch (d) {
                        return {
                            state: "parsererror",
                            error: a ? d : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function R(e, t, n, i) {
            var r;
            if (re.isArray(t)) re.each(t, function(t, r) {
                n || zt.test(e) ? i(e, r) : R(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== re.type(t)) i(e, t);
            else
                for (r in t) R(e + "[" + r + "]", t[r], n, i)
        }

        function W() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }

        function U() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function z(e) {
            return re.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
        var K = [],
            X = K.slice,
            Q = K.concat,
            J = K.push,
            Y = K.indexOf,
            Z = {},
            ee = Z.toString,
            te = Z.hasOwnProperty,
            ne = {},
            ie = "1.11.2",
            re = function(e, t) {
                return new re.fn.init(e, t)
            },
            oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ae = /^-ms-/,
            se = /-([\da-z])/gi,
            le = function(e, t) {
                return t.toUpperCase()
            };
        re.fn = re.prototype = {
            jquery: ie,
            constructor: re,
            selector: "",
            length: 0,
            toArray: function() {
                return X.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : X.call(this)
            },
            pushStack: function(e) {
                var t = re.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return re.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(re.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(X.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: J,
            sort: K.sort,
            splice: K.splice
        }, re.extend = re.fn.extend = function() {
            var e, t, n, i, r, o, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || re.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
                if (null != (r = arguments[s]))
                    for (i in r) e = a[i], n = r[i], a !== n && (u && n && (re.isPlainObject(n) || (t = re.isArray(n))) ? (t ? (t = !1, o = e && re.isArray(e) ? e : []) : o = e && re.isPlainObject(e) ? e : {}, a[i] = re.extend(u, o, n)) : void 0 !== n && (a[i] = n));
            return a
        }, re.extend({
            expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === re.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === re.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !re.isArray(e) && e - parseFloat(e) + 1 >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== re.type(e) || e.nodeType || re.isWindow(e)) return !1;
                try {
                    if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (ne.ownLast)
                    for (t in e) return te.call(e, t);
                for (t in e);
                return void 0 === t || te.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
            },
            globalEval: function(t) {
                t && re.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(ae, "ms-").replace(se, le)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, i) {
                var r, o = 0,
                    a = e.length,
                    s = n(e);
                if (i) {
                    if (s)
                        for (; a > o && (r = t.apply(e[o], i), r !== !1); o++);
                    else
                        for (o in e)
                            if (r = t.apply(e[o], i), r === !1) break
                } else if (s)
                    for (; a > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
                else
                    for (o in e)
                        if (r = t.call(e[o], o, e[o]), r === !1) break; return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(oe, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? re.merge(i, "string" == typeof e ? [e] : e) : J.call(i, e)), i
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (Y) return Y.call(t, e, n);
                    for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
                if (n !== n)
                    for (; void 0 !== t[i];) e[r++] = t[i++];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++) i = !t(e[o], o), i !== s && r.push(e[o]);
                return r
            },
            map: function(e, t, i) {
                var r, o = 0,
                    a = e.length,
                    s = n(e),
                    l = [];
                if (s)
                    for (; a > o; o++) r = t(e[o], o, i), null != r && l.push(r);
                else
                    for (o in e) r = t(e[o], o, i), null != r && l.push(r);
                return Q.apply([], l)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                return "string" == typeof t && (r = e[t], t = e, e = r), re.isFunction(e) ? (n = X.call(arguments, 2), i = function() {
                    return e.apply(t || this, n.concat(X.call(arguments)))
                }, i.guid = e.guid = e.guid || re.guid++, i) : void 0
            },
            now: function() {
                return +new Date
            },
            support: ne
        }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            Z["[object " + t + "]"] = t.toLowerCase()
        });
        var ue = function(e) {
            function t(e, t, n, i) {
                var r, o, a, s, l, u, d, f, h, g;
                if ((t ? t.ownerDocument || t : P) !== H && L(t), t = t || H, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
                if (!i && $) {
                    if (11 !== s && (r = ye.exec(e)))
                        if (a = r[1]) {
                            if (9 === s) {
                                if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                if (o.id === a) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && _(t, o) && o.id === a) return n.push(o), n
                        } else {
                            if (r[2]) return Y.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = r[3]) && w.getElementsByClassName) return Y.apply(n, t.getElementsByClassName(a)), n
                        }
                    if (w.qsa && (!M || !M.test(e))) {
                        if (f = d = G, h = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (u = E(e), (d = t.getAttribute("id")) ? f = d.replace(xe, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + p(u[l]);
                            h = be.test(e) && c(t.parentNode) || t, g = u.join(",")
                        }
                        if (g) try {
                            return Y.apply(n, h.querySelectorAll(g)), n
                        } catch (m) {} finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
                return S(e.replace(le, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[G] = !0, e
            }

            function r(e) {
                var t = H.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var n = e.split("|"), i = e.length; i--;) k.attrHandle[n[i]] = t
            }

            function a(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || z) - (~e.sourceIndex || z);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function u(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function c(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function d() {}

            function p(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                return i
            }

            function f(e, t, n) {
                var i = t.dir,
                    r = n && "parentNode" === i,
                    o = I++;
                return t.first ? function(t, n, o) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) return e(t, n, o)
                } : function(t, n, a) {
                    var s, l, u = [B, o];
                    if (a) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) {
                                if (l = t[G] || (t[G] = {}), (s = l[i]) && s[0] === B && s[1] === o) return u[2] = s[2];
                                if (l[i] = u, u[2] = e(t, n, a)) return !0
                            }
                }
            }

            function h(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function g(e, n, i) {
                for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
                return i
            }

            function m(e, t, n, i, r) {
                for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), u && t.push(s));
                return a
            }

            function v(e, t, n, r, o, a) {
                return r && !r[G] && (r = v(r)), o && !o[G] && (o = v(o, a)), i(function(i, a, s, l) {
                    var u, c, d, p = [],
                        f = [],
                        h = a.length,
                        v = i || g(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || !i && t ? v : m(v, p, e, s, l),
                        b = n ? o || (i ? e : h || r) ? [] : a : y;
                    if (n && n(y, b, s, l), r)
                        for (u = m(b, f), r(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[f[c]] = !(y[f[c]] = d));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                                o(null, b = [], u, l)
                            }
                            for (c = b.length; c--;)(d = b[c]) && (u = o ? ee(i, d) : p[c]) > -1 && (i[u] = !(a[u] = d))
                        }
                    } else b = m(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, l) : Y.apply(a, b)
                })
            }

            function y(e) {
                for (var t, n, i, r = e.length, o = k.relative[e[0].type], a = o || k.relative[" "], s = o ? 1 : 0, l = f(function(e) {
                        return e === t
                    }, a, !0), u = f(function(e) {
                        return ee(t, e) > -1
                    }, a, !0), c = [function(e, n, i) {
                        var r = !o && (i || n !== D) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                        return t = null, r
                    }]; r > s; s++)
                    if (n = k.relative[e[s].type]) c = [f(h(c), n)];
                    else {
                        if (n = k.filter[e[s].type].apply(null, e[s].matches), n[G]) {
                            for (i = ++s; r > i && !k.relative[e[i].type]; i++);
                            return v(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(le, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && p(e))
                        }
                        c.push(n)
                    }
                return h(c)
            }

            function b(e, n) {
                var r = n.length > 0,
                    o = e.length > 0,
                    a = function(i, a, s, l, u) {
                        var c, d, p, f = 0,
                            h = "0",
                            g = i && [],
                            v = [],
                            y = D,
                            b = i || o && k.find.TAG("*", u),
                            x = B += null == y ? 1 : Math.random() || .1,
                            w = b.length;
                        for (u && (D = a !== H && a); h !== w && null != (c = b[h]); h++) {
                            if (o && c) {
                                for (d = 0; p = e[d++];)
                                    if (p(c, a, s)) {
                                        l.push(c);
                                        break
                                    }
                                u && (B = x)
                            }
                            r && ((c = !p && c) && f--, i && g.push(c))
                        }
                        if (f += h, r && h !== f) {
                            for (d = 0; p = n[d++];) p(g, v, a, s);
                            if (i) {
                                if (f > 0)
                                    for (; h--;) g[h] || v[h] || (v[h] = Q.call(l));
                                v = m(v)
                            }
                            Y.apply(l, v), u && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                        }
                        return u && (B = x, D = y), g
                    };
                return r ? i(a) : a
            }
            var x, w, k, T, C, E, N, S, D, A, j, L, H, O, $, M, F, q, _, G = "sizzle" + 1 * new Date,
                P = e.document,
                B = 0,
                I = 0,
                V = n(),
                R = n(),
                W = n(),
                U = function(e, t) {
                    return e === t && (j = !0), 0
                },
                z = 1 << 31,
                K = {}.hasOwnProperty,
                X = [],
                Q = X.pop,
                J = X.push,
                Y = X.push,
                Z = X.slice,
                ee = function(e, t) {
                    for (var n = 0, i = e.length; i > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                re = ie.replace("w", "w#"),
                oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
                ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
                se = new RegExp(ne + "+", "g"),
                le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                ue = new RegExp("^" + ne + "*," + ne + "*"),
                ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                pe = new RegExp(ae),
                fe = new RegExp("^" + re + "$"),
                he = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + oe),
                    PSEUDO: new RegExp("^" + ae),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                ge = /^(?:input|select|textarea|button)$/i,
                me = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                be = /[+~]/,
                xe = /'|\\/g,
                we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                ke = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                Te = function() {
                    L()
                };
            try {
                Y.apply(X = Z.call(P.childNodes), P.childNodes), X[P.childNodes.length].nodeType
            } catch (Ce) {
                Y = {
                    apply: X.length ? function(e, t) {
                        J.apply(e, Z.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {}, C = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, L = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : P;
                return i !== H && 9 === i.nodeType && i.documentElement ? (H = i, O = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), $ = !C(i), w.attributes = r(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), w.getElementsByTagName = r(function(e) {
                    return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
                }), w.getElementsByClassName = ve.test(i.getElementsByClassName), w.getById = r(function(e) {
                    return O.appendChild(e).id = G, !i.getElementsByName || !i.getElementsByName(G).length
                }), w.getById ? (k.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && $) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, k.filter.ID = function(e) {
                    var t = e.replace(we, ke);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete k.find.ID, k.filter.ID = function(e) {
                    var t = e.replace(we, ke);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), k.find.TAG = w.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, k.find.CLASS = w.getElementsByClassName && function(e, t) {
                    return $ ? t.getElementsByClassName(e) : void 0
                }, F = [], M = [], (w.qsa = ve.test(i.querySelectorAll)) && (r(function(e) {
                    O.appendChild(e).innerHTML = "<a id='" + G + "'></a><select id='" + G + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + G + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), e.querySelectorAll("a#" + G + "+*").length || M.push(".#.+[+~]")
                }), r(function(e) {
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
                })), (w.matchesSelector = ve.test(q = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && r(function(e) {
                    w.disconnectedMatch = q.call(e, "div"), q.call(e, "[s!='']:x"), F.push("!=", ae)
                }), M = M.length && new RegExp(M.join("|")), F = F.length && new RegExp(F.join("|")), t = ve.test(O.compareDocumentPosition), _ = t || ve.test(O.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, U = t ? function(e, t) {
                    if (e === t) return j = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === P && _(P, e) ? -1 : t === i || t.ownerDocument === P && _(P, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return j = !0, 0;
                    var n, r = 0,
                        o = e.parentNode,
                        s = t.parentNode,
                        l = [e],
                        u = [t];
                    if (!o || !s) return e === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                    if (o === s) return a(e, t);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (n = t; n = n.parentNode;) u.unshift(n);
                    for (; l[r] === u[r];) r++;
                    return r ? a(l[r], u[r]) : l[r] === P ? -1 : u[r] === P ? 1 : 0
                }, i) : H
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== H && L(e), n = n.replace(de, "='$1']"), w.matchesSelector && $ && (!F || !F.test(n)) && (!M || !M.test(n))) try {
                    var i = q.call(e, n);
                    if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (r) {}
                return t(n, H, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== H && L(e), _(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== H && L(e);
                var n = k.attrHandle[t.toLowerCase()],
                    i = n && K.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !$) : void 0;
                return void 0 !== i ? i : w.attributes || !$ ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (j = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(U), j) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return A = null, e
            }, T = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += T(t);
                return n
            }, k = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(we, ke), e[3] = (e[3] || e[4] || e[5] || "").replace(we, ke), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(we, ke).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = V[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && V(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(r) {
                            var o = t.attr(r, e);
                            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, c, d, p, f, h, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (d = t; d = d[g];)
                                            if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                    for (c = m[G] || (m[G] = {}), u = c[e] || [], f = u[0] === B && u[1], p = u[0] === B && u[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (p = f = 0) || h.pop();)
                                        if (1 === d.nodeType && ++p && d === t) {
                                            c[e] = [B, f, p];
                                            break
                                        }
                                } else if (y && (u = (t[G] || (t[G] = {}))[e]) && u[0] === B) p = u[1];
                                else
                                    for (;
                                        (d = ++f && d && d[g] || (p = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[G] || (d[G] = {}))[e] = [B, p]), d !== t)););
                                return p -= r, p === i || p % i === 0 && p / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var r, o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[G] ? o(n) : o.length > 1 ? (r = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, r = o(e, n), a = r.length; a--;) i = ee(e, r[a]), e[i] = !(t[i] = r[a])
                        }) : function(e) {
                            return o(e, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            r = N(e.replace(le, "$1"));
                        return r[G] ? i(function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(we, ke),
                            function(t) {
                                return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function(e) {
                        return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, ke).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = $ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === O
                    },
                    focus: function(e) {
                        return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !k.pseudos.empty(e)
                    },
                    header: function(e) {
                        return me.test(e.nodeName)
                    },
                    input: function(e) {
                        return ge.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(e, t) {
                        return [t - 1]
                    }),
                    eq: u(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: u(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: u(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: u(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: u(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, k.pseudos.nth = k.pseudos.eq;
            for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) k.pseudos[x] = s(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) k.pseudos[x] = l(x);
            return d.prototype = k.filters = k.pseudos, k.setFilters = new d, E = t.tokenize = function(e, n) {
                var i, r, o, a, s, l, u, c = R[e + " "];
                if (c) return n ? 0 : c.slice(0);
                for (s = e, l = [], u = k.preFilter; s;) {
                    (!i || (r = ue.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ce.exec(s)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(le, " ")
                    }), s = s.slice(i.length));
                    for (a in k.filter) !(r = he[a].exec(s)) || u[a] && !(r = u[a](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: a,
                        matches: r
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length : s ? t.error(e) : R(e, l).slice(0)
            }, N = t.compile = function(e, t) {
                var n, i = [],
                    r = [],
                    o = W[e + " "];
                if (!o) {
                    for (t || (t = E(e)), n = t.length; n--;) o = y(t[n]), o[G] ? i.push(o) : r.push(o);
                    o = W(e, b(r, i)), o.selector = e
                }
                return o
            }, S = t.select = function(e, t, n, i) {
                var r, o, a, s, l, u = "function" == typeof e && e,
                    d = !i && E(e = u.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && $ && k.relative[o[1].type]) {
                        if (t = (k.find.ID(a.matches[0].replace(we, ke), t) || [])[0], !t) return n;
                        u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (r = he.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !k.relative[s = a.type]);)
                        if ((l = k.find[s]) && (i = l(a.matches[0].replace(we, ke), be.test(o[0].type) && c(t.parentNode) || t))) {
                            if (o.splice(r, 1), e = i.length && p(o), !e) return Y.apply(n, i), n;
                            break
                        }
                }
                return (u || N(e, d))(i, t, !$, n, be.test(e) && c(t.parentNode) || t), n
            }, w.sortStable = G.split("").sort(U).join("") === G, w.detectDuplicates = !!j, L(), w.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition(H.createElement("div"))
            }), r(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), w.attributes && r(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), r(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(te, function(e, t, n) {
                var i;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
        re.find = ue, re.expr = ue.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ue.uniqueSort, re.text = ue.getText, re.isXMLDoc = ue.isXML, re.contains = ue.contains;
        var ce = re.expr.match.needsContext,
            de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            pe = /^.[^:#\[\.,]*$/;
        re.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? re.find.matchesSelector(i, e) ? [i] : [] : re.find.matches(e, re.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, re.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    r = i.length;
                if ("string" != typeof e) return this.pushStack(re(e).filter(function() {
                    for (t = 0; r > t; t++)
                        if (re.contains(i[t], this)) return !0
                }));
                for (t = 0; r > t; t++) re.find(e, i[t], n);
                return n = this.pushStack(r > 1 ? re.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && ce.test(e) ? re(e) : e || [], !1).length
            }
        });
        var fe, he = e.document,
            ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            me = re.fn.init = function(e, t) {
                var n, i;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ge.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || fe).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)), de.test(n[1]) && re.isPlainObject(t))
                            for (n in t) re.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    if (i = he.getElementById(n[2]), i && i.parentNode) {
                        if (i.id !== n[2]) return fe.find(e);
                        this.length = 1, this[0] = i
                    }
                    return this.context = he, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? "undefined" != typeof fe.ready ? fe.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
            };
        me.prototype = re.fn, fe = re(he);
        var ve = /^(?:parents|prev(?:Until|All))/,
            ye = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        re.extend({
            dir: function(e, t, n) {
                for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !re(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t];
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), re.fn.extend({
            has: function(e) {
                var t, n = re(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; i > t; t++)
                        if (re.contains(this, n[t])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, o = [], a = ce.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? re.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? re.inArray(this[0], re(e)) : re.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(re.unique(re.merge(this.get(), re(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), re.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return re.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return re.dir(e, "parentNode", n)
            },
            next: function(e) {
                return r(e, "nextSibling")
            },
            prev: function(e) {
                return r(e, "previousSibling")
            },
            nextAll: function(e) {
                return re.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return re.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return re.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return re.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return re.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return re.sibling(e.firstChild)
            },
            contents: function(e) {
                return re.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : re.merge([], e.childNodes)
            }
        }, function(e, t) {
            re.fn[e] = function(n, i) {
                var r = re.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = re.filter(i, r)), this.length > 1 && (ye[e] || (r = re.unique(r)), ve.test(e) && (r = r.reverse())), this.pushStack(r)
            }
        });
        var be = /\S+/g,
            xe = {};
        re.Callbacks = function(e) {
            e = "string" == typeof e ? xe[e] || o(e) : re.extend({}, e);
            var t, n, i, r, a, s, l = [],
                u = !e.once && [],
                c = function(o) {
                    for (n = e.memory && o, i = !0, a = s || 0, s = 0, r = l.length, t = !0; l && r > a; a++)
                        if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                            n = !1;
                            break
                        }
                    t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
                },
                d = {
                    add: function() {
                        if (l) {
                            var i = l.length;
                            ! function o(t) {
                                re.each(t, function(t, n) {
                                    var i = re.type(n);
                                    "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                                })
                            }(arguments), t ? r = l.length : n && (s = i, c(n))
                        }
                        return this
                    },
                    remove: function() {
                        return l && re.each(arguments, function(e, n) {
                            for (var i;
                                (i = re.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (r >= i && r--, a >= i && a--)
                        }), this
                    },
                    has: function(e) {
                        return e ? re.inArray(e, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], r = 0, this
                    },
                    disable: function() {
                        return l = u = n = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return u = void 0, n || d.disable(), this
                    },
                    locked: function() {
                        return !u
                    },
                    fireWith: function(e, n) {
                        return !l || i && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return d
        }, re.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", re.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return re.Deferred(function(n) {
                                re.each(t, function(t, o) {
                                    var a = re.isFunction(e[t]) && e[t];
                                    r[o[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && re.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? re.extend(e, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, re.each(t, function(e, o) {
                    var a = o[2],
                        s = o[3];
                    i[o[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = a.fireWith
                }), i.promise(r), e && e.call(r, r), r
            },
            when: function(e) {
                var t, n, i, r = 0,
                    o = X.call(arguments),
                    a = o.length,
                    s = 1 !== a || e && re.isFunction(e.promise) ? a : 0,
                    l = 1 === s ? e : re.Deferred(),
                    u = function(e, n, i) {
                        return function(r) {
                            n[e] = this, i[e] = arguments.length > 1 ? X.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && re.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, t)) : --s;
                return s || l.resolveWith(i, o), l.promise()
            }
        });
        var we;
        re.fn.ready = function(e) {
            return re.ready.promise().done(e), this
        }, re.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? re.readyWait++ : re.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? !--re.readyWait : !re.isReady) {
                    if (!he.body) return setTimeout(re.ready);
                    re.isReady = !0, e !== !0 && --re.readyWait > 0 || (we.resolveWith(he, [re]), re.fn.triggerHandler && (re(he).triggerHandler("ready"), re(he).off("ready")))
                }
            }
        }), re.ready.promise = function(t) {
            if (!we)
                if (we = re.Deferred(), "complete" === he.readyState) setTimeout(re.ready);
                else if (he.addEventListener) he.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
            else {
                he.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == e.frameElement && he.documentElement
                } catch (i) {}
                n && n.doScroll && ! function r() {
                    if (!re.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(r, 50)
                        }
                        a(), re.ready()
                    }
                }()
            }
            return we.promise(t)
        };
        var ke, Te = "undefined";
        for (ke in re(ne)) break;
        ne.ownLast = "0" !== ke, ne.inlineBlockNeedsLayout = !1, re(function() {
                var e, t, n, i;
                n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Te && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function() {
                var e = he.createElement("div");
                if (null == ne.deleteExpando) {
                    ne.deleteExpando = !0;
                    try {
                        delete e.test
                    } catch (t) {
                        ne.deleteExpando = !1
                    }
                }
                e = null
            }(), re.acceptData = function(e) {
                var t = re.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
            };
        var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ee = /([A-Z])/g;
        re.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? re.cache[e[re.expando]] : e[re.expando], !!e && !u(e)
            },
            data: function(e, t, n) {
                return c(e, t, n)
            },
            removeData: function(e, t) {
                return d(e, t)
            },
            _data: function(e, t, n) {
                return c(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return d(e, t, !0)
            }
        }), re.fn.extend({
            data: function(e, t) {
                var n, i, r, o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (r = re.data(o), 1 === o.nodeType && !re._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(o, i, r[i])));
                        re._data(o, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    re.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    re.data(this, e, t)
                }) : o ? l(o, e, re.data(o, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    re.removeData(this, e)
                })
            }
        }), re.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = re._data(e, t), n && (!i || re.isArray(n) ? i = re._data(e, t, re.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = re.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = re._queueHooks(e, t),
                    a = function() {
                        re.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return re._data(e, n) || re._data(e, n, {
                    empty: re.Callbacks("once memory").add(function() {
                        re._removeData(e, t + "queue"), re._removeData(e, n)
                    })
                })
            }
        }), re.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = re.queue(this, e, t);
                    re._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    re.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    r = re.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = re._data(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t)
            }
        });
        var Ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Se = ["Top", "Right", "Bottom", "Left"],
            De = function(e, t) {
                return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
            },
            Ae = re.access = function(e, t, n, i, r, o, a) {
                var s = 0,
                    l = e.length,
                    u = null == n;
                if ("object" === re.type(n)) {
                    r = !0;
                    for (s in n) re.access(e, t, s, n[s], !0, o, a)
                } else if (void 0 !== i && (r = !0, re.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                        return u.call(re(e), n)
                    })), t))
                    for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
            },
            je = /^(?:checkbox|radio)$/i;
        ! function() {
            var e = he.createElement("input"),
                t = he.createElement("div"),
                n = he.createDocumentFragment();
            if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                    ne.noCloneEvent = !1
                }), t.cloneNode(!0).click()), null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete t.test
                } catch (i) {
                    ne.deleteExpando = !1
                }
            }
        }(),
        function() {
            var t, n, i = he.createElement("div");
            for (t in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), ne[t + "Bubbles"] = i.attributes[n].expando === !1);
            i = null
        }();
        var Le = /^(?:input|select|textarea)$/i,
            He = /^key/,
            Oe = /^(?:mouse|pointer|contextmenu)|click/,
            $e = /^(?:focusinfocus|focusoutblur)$/,
            Me = /^([^.]*)(?:\.(.+)|)$/;
        re.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var o, a, s, l, u, c, d, p, f, h, g, m = re._data(e);
                if (m) {
                    for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = re.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || (c = m.handle = function(e) {
                            return typeof re === Te || e && re.event.triggered === e.type ? void 0 : re.event.dispatch.apply(c.elem, arguments)
                        }, c.elem = e), t = (t || "").match(be) || [""], s = t.length; s--;) o = Me.exec(t[s]) || [], f = g = o[1], h = (o[2] || "").split(".").sort(), f && (u = re.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = re.event.special[f] || {}, d = re.extend({
                        type: f,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && re.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, l), (p = a[f]) || (p = a[f] = [], p.delegateCount = 0, u.setup && u.setup.call(e, i, h, c) !== !1 || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, d) : p.push(d), re.event.global[f] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, r) {
                var o, a, s, l, u, c, d, p, f, h, g, m = re.hasData(e) && re._data(e);
                if (m && (c = m.events)) {
                    for (t = (t || "").match(be) || [""], u = t.length; u--;)
                        if (s = Me.exec(t[u]) || [], f = g = s[1], h = (s[2] || "").split(".").sort(), f) {
                            for (d = re.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = c[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = p.length; o--;) a = p[o], !r && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, d.remove && d.remove.call(e, a));
                            l && !p.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || re.removeEvent(e, f, m.handle), delete c[f])
                        } else
                            for (f in c) re.event.remove(e, f + t[u], n, i, !0);
                    re.isEmptyObject(c) && (delete m.handle, re._removeData(e, "events"))
                }
            },
            trigger: function(t, n, i, r) {
                var o, a, s, l, u, c, d, p = [i || he],
                    f = te.call(t, "type") ? t.type : t,
                    h = te.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = c = i = i || he, 3 !== i.nodeType && 8 !== i.nodeType && !$e.test(f + re.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), a = f.indexOf(":") < 0 && "on" + f, t = t[re.expando] ? t : new re.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : re.makeArray(n, [t]), u = re.event.special[f] || {}, r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                    if (!r && !u.noBubble && !re.isWindow(i)) {
                        for (l = u.delegateType || f, $e.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
                        c === (i.ownerDocument || he) && p.push(c.defaultView || c.parentWindow || e)
                    }
                    for (d = 0;
                        (s = p[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || f, o = (re._data(s, "events") || {})[t.type] && re._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && re.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                    if (t.type = f, !r && !t.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), n) === !1) && re.acceptData(i) && a && i[f] && !re.isWindow(i)) {
                        c = i[a], c && (i[a] = null), re.event.triggered = f;
                        try {
                            i[f]()
                        } catch (g) {}
                        re.event.triggered = void 0, c && (i[a] = c)
                    }
                    return t.result
                }
            },
            dispatch: function(e) {
                e = re.event.fix(e);
                var t, n, i, r, o, a = [],
                    s = X.call(arguments),
                    l = (re._data(this, "events") || {})[e.type] || [],
                    u = re.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                    for (a = re.event.handlers.call(this, e, l), t = 0;
                        (r = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, o = 0;
                            (i = r.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, o, a = [],
                    s = t.delegateCount,
                    l = e.target;
                if (s && l.nodeType && (!e.button || "click" !== e.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                            for (r = [], o = 0; s > o; o++) i = t[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? re(n, this).index(l) >= 0 : re.find(n, this, null, [l]).length), r[n] && r.push(i);
                            r.length && a.push({
                                elem: l,
                                handlers: r
                            })
                        }
                return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }), a
            },
            fix: function(e) {
                if (e[re.expando]) return e;
                var t, n, i, r = e.type,
                    o = e,
                    a = this.fixHooks[r];
                for (a || (this.fixHooks[r] = a = Oe.test(r) ? this.mouseHooks : He.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new re.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
                return e.target || (e.target = o.srcElement || he), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, r, o = t.button,
                        a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || he, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== h() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === h() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return re.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var r = re.extend(new re.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? re.event.trigger(r, null, t) : re.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, re.removeEvent = he.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && (typeof e[i] === Te && (e[i] = null), e.detachEvent(i, n))
        }, re.Event = function(e, t) {
            return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : f) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(e, t)
        }, re.Event.prototype = {
            isDefaultPrevented: f,
            isPropagationStopped: f,
            isImmediatePropagationStopped: f,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = p, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = p, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, re.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            re.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        o = e.handleObj;
                    return (!r || r !== i && !re.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ne.submitBubbles || (re.event.special.submit = {
            setup: function() {
                return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        n = re.nodeName(t, "input") || re.nodeName(t, "button") ? t.form : void 0;
                    n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), re._data(n, "submitBubbles", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && re.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
            }
        }), ne.changeBubbles || (re.event.special.change = {
            setup: function() {
                return Le.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), re.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, e, !0)
                })), !1) : void re.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Le.test(t.nodeName) && !re._data(t, "changeBubbles") && (re.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || re.event.simulate("change", this.parentNode, e, !0)
                    }), re._data(t, "changeBubbles", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return re.event.remove(this, "._change"), !Le.test(this.nodeName)
            }
        }), ne.focusinBubbles || re.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                re.event.simulate(t, e.target, re.event.fix(e), !0)
            };
            re.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = re._data(i, t);
                    r || i.addEventListener(e, n, !0), re._data(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = re._data(i, t) - 1;
                    r ? re._data(i, t, r) : (i.removeEventListener(e, n, !0), re._removeData(i, t))
                }
            }
        }), re.fn.extend({
            on: function(e, t, n, i, r) {
                var o, a;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (o in e) this.on(o, t, n, e[o], r);
                    return this
                }
                if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = f;
                else if (!i) return this;
                return 1 === r && (a = i, i = function(e) {
                    return re().off(e), a.apply(this, arguments)
                }, i.guid = a.guid || (a.guid = re.guid++)), this.each(function() {
                    re.event.add(this, e, i, n, t)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, re(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = f), this.each(function() {
                    re.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    re.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? re.event.trigger(e, t, n, !0) : void 0
            }
        });
        var Fe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            qe = / jQuery\d+="(?:null|\d+)"/g,
            _e = new RegExp("<(?:" + Fe + ")[\\s/>]", "i"),
            Ge = /^\s+/,
            Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Be = /<([\w:]+)/,
            Ie = /<tbody/i,
            Ve = /<|&#?\w+;/,
            Re = /<(?:script|style|link)/i,
            We = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ue = /^$|\/(?:java|ecma)script/i,
            ze = /^true\/(.*)/,
            Ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Xe = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Qe = g(he),
            Je = Qe.appendChild(he.createElement("div"));
        Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td, re.extend({
            clone: function(e, t, n) {
                var i, r, o, a, s, l = re.contains(e.ownerDocument, e);
                if (ne.html5Clone || re.isXMLDoc(e) || !_e.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Je.innerHTML = e.outerHTML, Je.removeChild(o = Je.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
                    for (i = m(o), s = m(e), a = 0; null != (r = s[a]); ++a) i[a] && T(r, i[a]);
                if (t)
                    if (n)
                        for (s = s || m(e), i = i || m(o), a = 0; null != (r = s[a]); a++) k(r, i[a]);
                    else k(e, o);
                return i = m(o, "script"), i.length > 0 && w(i, !l && m(e, "script")), i = s = r = null, o
            },
            buildFragment: function(e, t, n, i) {
                for (var r, o, a, s, l, u, c, d = e.length, p = g(t), f = [], h = 0; d > h; h++)
                    if (o = e[h], o || 0 === o)
                        if ("object" === re.type(o)) re.merge(f, o.nodeType ? [o] : o);
                        else if (Ve.test(o)) {
                    for (s = s || p.appendChild(t.createElement("div")), l = (Be.exec(o) || ["", ""])[1].toLowerCase(), c = Xe[l] || Xe._default, s.innerHTML = c[1] + o.replace(Pe, "<$1></$2>") + c[2], r = c[0]; r--;) s = s.lastChild;
                    if (!ne.leadingWhitespace && Ge.test(o) && f.push(t.createTextNode(Ge.exec(o)[0])), !ne.tbody)
                        for (o = "table" !== l || Ie.test(o) ? "<table>" !== c[1] || Ie.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;) re.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
                    for (re.merge(f, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = p.lastChild
                } else f.push(t.createTextNode(o));
                for (s && p.removeChild(s), ne.appendChecked || re.grep(m(f, "input"), v), h = 0; o = f[h++];)
                    if ((!i || -1 === re.inArray(o, i)) && (a = re.contains(o.ownerDocument, o), s = m(p.appendChild(o), "script"), a && w(s), n))
                        for (r = 0; o = s[r++];) Ue.test(o.type || "") && n.push(o);
                return s = null, p
            },
            cleanData: function(e, t) {
                for (var n, i, r, o, a = 0, s = re.expando, l = re.cache, u = ne.deleteExpando, c = re.event.special; null != (n = e[a]); a++)
                    if ((t || re.acceptData(n)) && (r = n[s], o = r && l[r])) {
                        if (o.events)
                            for (i in o.events) c[i] ? re.event.remove(n, i) : re.removeEvent(n, i, o.handle);
                        l[r] && (delete l[r], u ? delete n[s] : typeof n.removeAttribute !== Te ? n.removeAttribute(s) : n[s] = null, K.push(r))
                    }
            }
        }), re.fn.extend({
            text: function(e) {
                return Ae(this, function(e) {
                    return void 0 === e ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = y(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = y(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? re.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || re.cleanData(m(n)), n.parentNode && (t && re.contains(n.ownerDocument, n) && w(m(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && re.cleanData(m(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && re.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return re.clone(this, e, t)
                })
            },
            html: function(e) {
                return Ae(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(qe, "") : void 0;
                    if ("string" == typeof e && !Re.test(e) && (ne.htmlSerialize || !_e.test(e)) && (ne.leadingWhitespace || !Ge.test(e)) && !Xe[(Be.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(Pe, "<$1></$2>");
                        try {
                            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (re.cleanData(m(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (r) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode, re.cleanData(m(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = Q.apply([], e);
                var n, i, r, o, a, s, l = 0,
                    u = this.length,
                    c = this,
                    d = u - 1,
                    p = e[0],
                    f = re.isFunction(p);
                if (f || u > 1 && "string" == typeof p && !ne.checkClone && We.test(p)) return this.each(function(n) {
                    var i = c.eq(n);
                    f && (e[0] = p.call(this, n, i.html())), i.domManip(e, t)
                });
                if (u && (s = re.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                    for (o = re.map(m(s, "script"), b), r = o.length; u > l; l++) i = s, l !== d && (i = re.clone(i, !0, !0), r && re.merge(o, m(i, "script"))), t.call(this[l], i, l);
                    if (r)
                        for (a = o[o.length - 1].ownerDocument, re.map(o, x), l = 0; r > l; l++) i = o[l], Ue.test(i.type || "") && !re._data(i, "globalEval") && re.contains(a, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ke, "")));
                    s = n = null
                }
                return this
            }
        }), re.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            re.fn[e] = function(e) {
                for (var n, i = 0, r = [], o = re(e), a = o.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), re(o[i])[t](n), J.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var Ye, Ze = {};
        ! function() {
            var e;
            ne.shrinkWrapBlocks = function() {
                if (null != e) return e;
                e = !1;
                var t, n, i;
                return n = he.getElementsByTagName("body")[0], n && n.style ? (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Te && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(he.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
            }
        }();
        var et, tt, nt = /^margin/,
            it = new RegExp("^(" + Ne + ")(?!px)[a-z%]+$", "i"),
            rt = /^(top|right|bottom|left)$/;
        e.getComputedStyle ? (et = function(t) {
                return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
            }, tt = function(e, t, n) {
                var i, r, o, a, s = e.style;
                return n = n || et(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || re.contains(e.ownerDocument, e) || (a = re.style(e, t)), it.test(a) && nt.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 === a ? a : a + ""
            }) : he.documentElement.currentStyle && (et = function(e) {
                return e.currentStyle
            }, tt = function(e, t, n) {
                var i, r, o, a, s = e.style;
                return n = n || et(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), it.test(a) && !rt.test(t) && (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
            }),
            function() {
                function t() {
                    var t, n, i, r;
                    n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
                        width: "4px"
                    }).width, r = t.appendChild(he.createElement("div")), r.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight), t.removeChild(r)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = t.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === r[0].offsetHeight, s && (r[0].style.display = "", r[1].style.display = "none", s = 0 === r[0].offsetHeight), n.removeChild(i))
                }
                var n, i, r, o, a, s, l;
                n = he.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], i = r && r.style, i && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, re.extend(ne, {
                    reliableHiddenOffsets: function() {
                        return null == s && t(), s
                    },
                    boxSizingReliable: function() {
                        return null == a && t(), a
                    },
                    pixelPosition: function() {
                        return null == o && t(), o
                    },
                    reliableMarginRight: function() {
                        return null == l && t(), l
                    }
                }))
            }(), re.swap = function(e, t, n, i) {
                var r, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                r = n.apply(e, i || []);
                for (o in t) e.style[o] = a[o];
                return r
            };
        var ot = /alpha\([^)]*\)/i,
            at = /opacity\s*=\s*([^)]*)/,
            st = /^(none|table(?!-c[ea]).+)/,
            lt = new RegExp("^(" + Ne + ")(.*)$", "i"),
            ut = new RegExp("^([+-])=(" + Ne + ")", "i"),
            ct = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            dt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            pt = ["Webkit", "O", "Moz", "ms"];
        re.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = tt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ne.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, a, s = re.camelCase(t),
                        l = e.style;
                    if (t = re.cssProps[s] || (re.cssProps[s] = S(l, s)), a = re.cssHooks[t] || re.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
                    if (o = typeof n, "string" === o && (r = ut.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(re.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || re.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                        l[t] = n
                    } catch (u) {}
                }
            },
            css: function(e, t, n, i) {
                var r, o, a, s = re.camelCase(t);
                return t = re.cssProps[s] || (re.cssProps[s] = S(e.style, s)), a = re.cssHooks[t] || re.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tt(e, t, i)), "normal" === o && t in dt && (o = dt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || re.isNumeric(r) ? r || 0 : o) : o
            }
        }), re.each(["height", "width"], function(e, t) {
            re.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? st.test(re.css(e, "display")) && 0 === e.offsetWidth ? re.swap(e, ct, function() {
                        return L(e, t, i)
                    }) : L(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var r = i && et(e);
                    return A(e, n, i ? j(e, t, i, ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, r), r) : 0)
                }
            }
        }), ne.opacity || (re.cssHooks.opacity = {
            get: function(e, t) {
                return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    r = re.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === re.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = ot.test(o) ? o.replace(ot, r) : o + " " + r)
            }
        }), re.cssHooks.marginRight = N(ne.reliableMarginRight, function(e, t) {
            return t ? re.swap(e, {
                display: "inline-block"
            }, tt, [e, "marginRight"]) : void 0
        }), re.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            re.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Se[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, nt.test(e) || (re.cssHooks[e + t].set = A)
        }), re.fn.extend({
            css: function(e, t) {
                return Ae(this, function(e, t, n) {
                    var i, r, o = {},
                        a = 0;
                    if (re.isArray(t)) {
                        for (i = et(e), r = t.length; r > a; a++) o[t[a]] = re.css(e, t[a], !1, i);
                        return o
                    }
                    return void 0 !== n ? re.style(e, t, n) : re.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return D(this, !0)
            },
            hide: function() {
                return D(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    De(this) ? re(this).show() : re(this).hide()
                })
            }
        }), re.Tween = H, H.prototype = {
            constructor: H,
            init: function(e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (re.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = H.propHooks[this.prop];
                return e && e.get ? e.get(this) : H.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = H.propHooks[this.prop];
                return this.options.duration ? this.pos = t = re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
            }
        }, H.prototype.init.prototype = H.prototype, H.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    re.fx.step[e.prop] ? re.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[re.cssProps[e.prop]] || re.cssHooks[e.prop]) ? re.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, re.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, re.fx = H.prototype.init, re.fx.step = {};
        var ft, ht, gt = /^(?:toggle|show|hide)$/,
            mt = new RegExp("^(?:([+-])=|)(" + Ne + ")([a-z%]*)$", "i"),
            vt = /queueHooks$/,
            yt = [F],
            bt = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        r = mt.exec(t),
                        o = r && r[3] || (re.cssNumber[e] ? "" : "px"),
                        a = (re.cssNumber[e] || "px" !== o && +i) && mt.exec(re.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], r = r || [], a = +i || 1;
                        do s = s || ".5", a /= s, re.style(n.elem, e, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                    }
                    return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
                }]
            };
        re.Animation = re.extend(_, {
                tweener: function(e, t) {
                    re.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, i = 0, r = e.length; r > i; i++) n = e[i], bt[n] = bt[n] || [], bt[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? yt.unshift(e) : yt.push(e)
                }
            }), re.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? re.extend({}, e) : {
                    complete: n || !n && t || re.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !re.isFunction(t) && t
                };
                return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
                }, i
            }, re.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(De).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var r = re.isEmptyObject(e),
                        o = re.speed(t, n, i),
                        a = function() {
                            var t = _(this, re.extend({}, e), o);
                            (r || re._data(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            o = re.timers,
                            a = re._data(this);
                        if (r) a[r] && a[r].stop && i(a[r]);
                        else
                            for (r in a) a[r] && a[r].stop && vt.test(r) && i(a[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                        (t || !n) && re.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = re._data(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            o = re.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, re.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), re.each(["toggle", "show", "hide"], function(e, t) {
                var n = re.fn[t];
                re.fn[t] = function(e, i, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, i, r)
                }
            }), re.each({
                slideDown: $("show"),
                slideUp: $("hide"),
                slideToggle: $("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                re.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), re.timers = [], re.fx.tick = function() {
                var e, t = re.timers,
                    n = 0;
                for (ft = re.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
                t.length || re.fx.stop(), ft = void 0
            }, re.fx.timer = function(e) {
                re.timers.push(e), e() ? re.fx.start() : re.timers.pop()
            }, re.fx.interval = 13, re.fx.start = function() {
                ht || (ht = setInterval(re.fx.tick, re.fx.interval))
            }, re.fx.stop = function() {
                clearInterval(ht), ht = null
            }, re.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, re.fn.delay = function(e, t) {
                return e = re.fx ? re.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            function() {
                var e, t, n, i, r;
                t = he.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = he.createElement("select"), r = n.appendChild(he.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = r.selected, ne.enctype = !!he.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !r.disabled, e = he.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
            }();
        var xt = /\r/g;
        re.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0]; {
                    if (arguments.length) return i = re.isFunction(e), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? e.call(this, n, re(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : re.isArray(r) && (r = re.map(r, function(e) {
                            return null == e ? "" : e + ""
                        })), t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return t = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n)
                }
            }
        }), re.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = re.find.attr(e, "value");
                        return null != t ? t : re.trim(re.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                            if (n = i[l], (n.selected || l === r) && (ne.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !re.nodeName(n.parentNode, "optgroup"))) {
                                if (t = re(n).val(), o) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, o = re.makeArray(t), a = r.length; a--;)
                            if (i = r[a], re.inArray(re.valHooks.option.get(i), o) >= 0) try {
                                i.selected = n = !0
                            } catch (s) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), re.each(["radio", "checkbox"], function() {
            re.valHooks[this] = {
                set: function(e, t) {
                    return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) >= 0 : void 0
                }
            }, ne.checkOn || (re.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var wt, kt, Tt = re.expr.attrHandle,
            Ct = /^(?:checked|selected)$/i,
            Et = ne.getSetAttribute,
            Nt = ne.input;
        re.fn.extend({
            attr: function(e, t) {
                return Ae(this, re.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    re.removeAttr(this, e)
                })
            }
        }), re.extend({
            attr: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Te ? re.prop(e, t, n) : (1 === o && re.isXMLDoc(e) || (t = t.toLowerCase(), i = re.attrHooks[t] || (re.expr.match.bool.test(t) ? kt : wt)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = re.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void re.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var n, i, r = 0,
                    o = t && t.match(be);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) i = re.propFix[n] || n, re.expr.match.bool.test(n) ? Nt && Et || !Ct.test(n) ? e[i] = !1 : e[re.camelCase("default-" + n)] = e[i] = !1 : re.attr(e, n, ""), e.removeAttribute(Et ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ne.radioValue && "radio" === t && re.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), kt = {
            set: function(e, t, n) {
                return t === !1 ? re.removeAttr(e, n) : Nt && Et || !Ct.test(n) ? e.setAttribute(!Et && re.propFix[n] || n, n) : e[re.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, re.each(re.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = Tt[t] || re.find.attr;
            Tt[t] = Nt && Et || !Ct.test(t) ? function(e, t, i) {
                var r, o;
                return i || (o = Tt[t], Tt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Tt[t] = o), r
            } : function(e, t, n) {
                return n ? void 0 : e[re.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), Nt && Et || (re.attrHooks.value = {
            set: function(e, t, n) {
                return re.nodeName(e, "input") ? void(e.defaultValue = t) : wt && wt.set(e, t, n)
            }
        }), Et || (wt = {
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
            }
        }, Tt.id = Tt.name = Tt.coords = function(e, t, n) {
            var i;
            return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }, re.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : void 0
            },
            set: wt.set
        }, re.attrHooks.contenteditable = {
            set: function(e, t, n) {
                wt.set(e, "" === t ? !1 : t, n)
            }
        }, re.each(["width", "height"], function(e, t) {
            re.attrHooks[t] = {
                set: function(e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            }
        })), ne.style || (re.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || void 0
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var St = /^(?:input|select|textarea|button|object)$/i,
            Dt = /^(?:a|area)$/i;
        re.fn.extend({
            prop: function(e, t) {
                return Ae(this, re.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = re.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = void 0, delete this[e]
                    } catch (t) {}
                })
            }
        }), re.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, t, n) {
                var i, r, o, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !re.isXMLDoc(e), o && (t = re.propFix[t] || t, r = re.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = re.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : St.test(e.nodeName) || Dt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), ne.hrefNormalized || re.each(["href", "src"], function(e, t) {
            re.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), ne.optSelected || (re.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            re.propFix[this.toLowerCase()] = this
        }), ne.enctype || (re.propFix.enctype = "encoding");
        var At = /[\t\r\n\f]/g;
        re.fn.extend({
            addClass: function(e) {
                var t, n, i, r, o, a, s = 0,
                    l = this.length,
                    u = "string" == typeof e && e;
                if (re.isFunction(e)) return this.each(function(t) {
                    re(this).addClass(e.call(this, t, this.className))
                });
                if (u)
                    for (t = (e || "").match(be) || []; l > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : " ")) {
                            for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            a = re.trim(i), n.className !== a && (n.className = a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, o, a, s = 0,
                    l = this.length,
                    u = 0 === arguments.length || "string" == typeof e && e;
                if (re.isFunction(e)) return this.each(function(t) {
                    re(this).removeClass(e.call(this, t, this.className))
                });
                if (u)
                    for (t = (e || "").match(be) || []; l > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : "")) {
                            for (o = 0; r = t[o++];)
                                for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                            a = e ? re.trim(i) : "", n.className !== a && (n.className = a)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : re.isFunction(e) ? this.each(function(n) {
                    re(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var t, i = 0, r = re(this), o = e.match(be) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else(n === Te || "boolean" === n) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : re._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(At, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            re.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), re.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var jt = re.now(),
            Lt = /\?/,
            Ht = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        re.parseJSON = function(t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
            var n, i = null,
                r = re.trim(t + "");
            return r && !re.trim(r.replace(Ht, function(e, t, r, o) {
                return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !o - !r, "")
            })) ? Function("return " + r)() : re.error("Invalid JSON: " + t)
        }, re.parseXML = function(t) {
            var n, i;
            if (!t || "string" != typeof t) return null;
            try {
                e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
            } catch (r) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t), n
        };
        var Ot, $t, Mt = /#.*$/,
            Ft = /([?&])_=[^&]*/,
            qt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            _t = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Gt = /^(?:GET|HEAD)$/,
            Pt = /^\/\//,
            Bt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            It = {},
            Vt = {},
            Rt = "*/".concat("*");
        try {
            $t = location.href
        } catch (Wt) {
            $t = he.createElement("a"), $t.href = "", $t = $t.href
        }
        Ot = Bt.exec($t.toLowerCase()) || [], re.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: $t,
                type: "GET",
                isLocal: _t.test(Ot[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Rt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": re.parseJSON,
                    "text xml": re.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? B(B(e, re.ajaxSettings), t) : B(re.ajaxSettings, e)
            },
            ajaxPrefilter: G(It),
            ajaxTransport: G(Vt),
            ajax: function(e, t) {
                function n(e, t, n, i) {
                    var r, c, v, y, x, k = t;
                    2 !== b && (b = 2, s && clearTimeout(s), u = void 0, a = i || "", w.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, n && (y = I(d, w, n)), y = V(d, y, w, r), r ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (re.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (re.etag[o] = x)), 204 === e || "HEAD" === d.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = y.state, c = y.data, v = y.error, r = !v)) : (v = k, (e || !k) && (k = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || k) + "", r ? h.resolveWith(p, [c, k, w]) : h.rejectWith(p, [w, k, v]), w.statusCode(m), m = void 0, l && f.trigger(r ? "ajaxSuccess" : "ajaxError", [w, d, r ? c : v]), g.fireWith(p, [w, k]), l && (f.trigger("ajaxComplete", [w, d]), --re.active || re.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, r, o, a, s, l, u, c, d = re.ajaxSetup({}, t),
                    p = d.context || d,
                    f = d.context && (p.nodeType || p.jquery) ? re(p) : re.event,
                    h = re.Deferred(),
                    g = re.Callbacks("once memory"),
                    m = d.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    x = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === b) {
                                if (!c)
                                    for (c = {}; t = qt.exec(a);) c[t[1].toLowerCase()] = t[2];
                                t = c[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return b || (e = y[n] = y[n] || e, v[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return b || (d.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > b)
                                    for (t in e) m[t] = [m[t], e[t]];
                                else w.always(e[w.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || x;
                            return u && u.abort(t), n(0, t), this
                        }
                    };
                if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || $t) + "").replace(Mt, "").replace(Pt, Ot[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = re.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (i = Bt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Ot[1] && i[2] === Ot[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ot[3] || ("http:" === Ot[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = re.param(d.data, d.traditional)), P(It, d, t, w), 2 === b) return w;
                l = re.event && d.global, l && 0 === re.active++ && re.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Gt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Lt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Ft.test(o) ? o.replace(Ft, "$1_=" + jt++) : o + (Lt.test(o) ? "&" : "?") + "_=" + jt++)), d.ifModified && (re.lastModified[o] && w.setRequestHeader("If-Modified-Since", re.lastModified[o]), re.etag[o] && w.setRequestHeader("If-None-Match", re.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : d.accepts["*"]);
                for (r in d.headers) w.setRequestHeader(r, d.headers[r]);
                if (d.beforeSend && (d.beforeSend.call(p, w, d) === !1 || 2 === b)) return w.abort();
                x = "abort";
                for (r in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[r](d[r]);
                if (u = P(Vt, d, t, w)) {
                    w.readyState = 1, l && f.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                        w.abort("timeout")
                    }, d.timeout));
                    try {
                        b = 1, u.send(v, n)
                    } catch (k) {
                        if (!(2 > b)) throw k;
                        n(-1, k)
                    }
                } else n(-1, "No Transport");
                return w
            },
            getJSON: function(e, t, n) {
                return re.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return re.get(e, void 0, t, "script")
            }
        }), re.each(["get", "post"], function(e, t) {
            re[t] = function(e, n, i, r) {
                return re.isFunction(n) && (r = r || i, i = n, n = void 0), re.ajax({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                })
            }
        }), re._evalUrl = function(e) {
            return re.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, re.fn.extend({
            wrapAll: function(e) {
                if (re.isFunction(e)) return this.each(function(t) {
                    re(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = re(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return re.isFunction(e) ? this.each(function(t) {
                    re(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = re(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = re.isFunction(e);
                return this.each(function(n) {
                    re(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
                }).end()
            }
        }), re.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || re.css(e, "display"))
        }, re.expr.filters.visible = function(e) {
            return !re.expr.filters.hidden(e)
        };
        var Ut = /%20/g,
            zt = /\[\]$/,
            Kt = /\r?\n/g,
            Xt = /^(?:submit|button|image|reset|file)$/i,
            Qt = /^(?:input|select|textarea|keygen)/i;
        re.param = function(e, t) {
            var n, i = [],
                r = function(e, t) {
                    t = re.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (n in e) R(n, e[n], t, r);
            return i.join("&").replace(Ut, "+")
        }, re.fn.extend({
            serialize: function() {
                return re.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = re.prop(this, "elements");
                    return e ? re.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !re(this).is(":disabled") && Qt.test(this.nodeName) && !Xt.test(e) && (this.checked || !je.test(e))
                }).map(function(e, t) {
                    var n = re(this).val();
                    return null == n ? null : re.isArray(n) ? re.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Kt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Kt, "\r\n")
                    }
                }).get()
            }
        }), re.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && W() || U()
        } : W;
        var Jt = 0,
            Yt = {},
            Zt = re.ajaxSettings.xhr();
        e.attachEvent && e.attachEvent("onunload", function() {
            for (var e in Yt) Yt[e](void 0, !0)
        }), ne.cors = !!Zt && "withCredentials" in Zt, Zt = ne.ajax = !!Zt, Zt && re.ajaxTransport(function(e) {
            if (!e.crossDomain || ne.cors) {
                var t;
                return {
                    send: function(n, i) {
                        var r, o = e.xhr(),
                            a = ++Jt;
                        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (r in e.xhrFields) o[r] = e.xhrFields[r];
                        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (r in n) void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
                        o.send(e.hasContent && e.data || null), t = function(n, r) {
                            var s, l, u;
                            if (t && (r || 4 === o.readyState))
                                if (delete Yt[a], t = void 0, o.onreadystatechange = re.noop, r) 4 !== o.readyState && o.abort();
                                else {
                                    u = {}, s = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                    try {
                                        l = o.statusText
                                    } catch (c) {
                                        l = ""
                                    }
                                    s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                                }
                            u && i(s, l, u, o.getAllResponseHeaders())
                        }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Yt[a] = t : t()
                    },
                    abort: function() {
                        t && t(void 0, !0)
                    }
                }
            }
        }), re.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return re.globalEval(e), e
                }
            }
        }), re.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), re.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = he.head || re("head")[0] || he.documentElement;
                return {
                    send: function(i, r) {
                        t = he.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function() {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var en = [],
            tn = /(=)\?(?=&|$)|\?\?/;
        re.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = en.pop() || re.expando + "_" + jt++;
                return this[e] = !0, e
            }
        }), re.ajaxPrefilter("json jsonp", function(t, n, i) {
            var r, o, a, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tn, "$1" + r) : t.jsonp !== !1 && (t.url += (Lt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                return a || re.error(r + " was not called"), a[0]
            }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
                a = arguments
            }, i.always(function() {
                e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, en.push(r)), a && re.isFunction(o) && o(a[0]), a = o = void 0
            }), "script") : void 0
        }), re.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || he;
            var i = de.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : (i = re.buildFragment([e], t, r), r && r.length && re(r).remove(), re.merge([], i.childNodes))
        };
        var nn = re.fn.load;
        re.fn.load = function(e, t, n) {
            if ("string" != typeof e && nn) return nn.apply(this, arguments);
            var i, r, o, a = this,
                s = e.indexOf(" ");
            return s >= 0 && (i = re.trim(e.slice(s, e.length)), e = e.slice(0, s)), re.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && re.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: t
            }).done(function(e) {
                r = arguments, a.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e)
            }).complete(n && function(e, t) {
                a.each(n, r || [e.responseText, t, e])
            }), this
        }, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            re.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), re.expr.filters.animated = function(e) {
            return re.grep(re.timers, function(t) {
                return e === t.elem
            }).length
        };
        var rn = e.document.documentElement;
        re.offset = {
            setOffset: function(e, t, n) {
                var i, r, o, a, s, l, u, c = re.css(e, "position"),
                    d = re(e),
                    p = {};
                "static" === c && (e.style.position = "relative"), s = d.offset(), o = re.css(e, "top"), l = re.css(e, "left"), u = ("absolute" === c || "fixed" === c) && re.inArray("auto", [o, l]) > -1, u ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + r), "using" in t ? t.using.call(e, p) : d.css(p)
            }
        }, re.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    re.offset.setOffset(this, e, t)
                });
                var t, n, i = {
                        top: 0,
                        left: 0
                    },
                    r = this[0],
                    o = r && r.ownerDocument;
                if (o) return t = o.documentElement, re.contains(t, r) ? (typeof r.getBoundingClientRect !== Te && (i = r.getBoundingClientRect()), n = z(o), {
                    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : i
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === re.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (n = e.offset()), n.top += re.css(e[0], "borderTopWidth", !0), n.left += re.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - re.css(i, "marginTop", !0),
                        left: t.left - n.left - re.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || rn; e && !re.nodeName(e, "html") && "static" === re.css(e, "position");) e = e.offsetParent;
                    return e || rn
                })
            }
        }), re.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = /Y/.test(t);
            re.fn[e] = function(i) {
                return Ae(this, function(e, i, r) {
                    var o = z(e);
                    return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? re(o).scrollLeft() : r, n ? r : re(o).scrollTop()) : e[i] = r)
                }, e, i, arguments.length, null)
            }
        }), re.each(["top", "left"], function(e, t) {
            re.cssHooks[t] = N(ne.pixelPosition, function(e, n) {
                return n ? (n = tt(e, t), it.test(n) ? re(e).position()[t] + "px" : n) : void 0
            })
        }), re.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            re.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                re.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        a = n || (i === !0 || r === !0 ? "margin" : "border");
                    return Ae(this, function(t, n, i) {
                        var r;
                        return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? re.css(t, n, a) : re.style(t, n, i, a)
                    }, t, o ? i : void 0, o, null)
                }
            })
        }), re.fn.size = function() {
            return this.length
        }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return re
        });
        var on = e.jQuery,
            an = e.$;
        return re.noConflict = function(t) {
            return e.$ === re && (e.$ = an), t && e.jQuery === re && (e.jQuery = on), re
        }, typeof t === Te && (e.jQuery = e.$ = re), re
    });
var Hogan = {};
! function(e) {
    function t(e, t, n) {
        var i;
        return t && "object" == typeof t && (void 0 !== t[e] ? i = t[e] : n && t.get && "function" == typeof t.get && (i = t.get(e))), i
    }

    function n(e, t, n, i, r, o) {
        function a() {}

        function s() {}
        a.prototype = e, s.prototype = e.subs;
        var l, u = new a;
        u.subs = new s, u.subsText = {}, u.buf = "", i = i || {}, u.stackSubs = i, u.subsText = o;
        for (l in t) i[l] || (i[l] = t[l]);
        for (l in i) u.subs[l] = i[l];
        r = r || {}, u.stackPartials = r;
        for (l in n) r[l] || (r[l] = n[l]);
        for (l in r) u.partials[l] = r[l];
        return u
    }

    function i(e) {
        return String(null === e || void 0 === e ? "" : e)
    }

    function r(e) {
        return e = i(e), c.test(e) ? e.replace(o, "&amp;").replace(a, "&lt;").replace(s, "&gt;").replace(l, "&#39;").replace(u, "&quot;") : e
    }
    e.Template = function(e, t, n, i) {
        e = e || {}, this.r = e.code || this.r, this.c = n, this.options = i || {}, this.text = t || "", this.partials = e.partials || {}, this.subs = e.subs || {}, this.buf = ""
    }, e.Template.prototype = {
        r: function(e, t, n) {
            return ""
        },
        v: r,
        t: i,
        render: function(e, t, n) {
            return this.ri([e], t || {}, n)
        },
        ri: function(e, t, n) {
            return this.r(e, t, n)
        },
        ep: function(e, t) {
            var i = this.partials[e],
                r = t[i.name];
            if (i.instance && i.base == r) return i.instance;
            if ("string" == typeof r) {
                if (!this.c) throw new Error("No compiler available.");
                r = this.c.compile(r, this.options)
            }
            if (!r) return null;
            if (this.partials[e].base = r, i.subs) {
                t.stackText || (t.stackText = {});
                for (key in i.subs) t.stackText[key] || (t.stackText[key] = void 0 !== this.activeSub && t.stackText[this.activeSub] ? t.stackText[this.activeSub] : this.text);
                r = n(r, i.subs, i.partials, this.stackSubs, this.stackPartials, t.stackText)
            }
            return this.partials[e].instance = r, r
        },
        rp: function(e, t, n, i) {
            var r = this.ep(e, n);
            return r ? r.ri(t, n, i) : ""
        },
        rs: function(e, t, n) {
            var i = e[e.length - 1];
            if (!d(i)) return void n(e, t, this);
            for (var r = 0; r < i.length; r++) e.push(i[r]), n(e, t, this), e.pop()
        },
        s: function(e, t, n, i, r, o, a) {
            var s;
            return d(e) && 0 === e.length ? !1 : ("function" == typeof e && (e = this.ms(e, t, n, i, r, o, a)), s = !!e, !i && s && t && t.push("object" == typeof e ? e : t[t.length - 1]), s)
        },
        d: function(e, n, i, r) {
            var o, a = e.split("."),
                s = this.f(a[0], n, i, r),
                l = this.options.modelGet,
                u = null;
            if ("." === e && d(n[n.length - 2])) s = n[n.length - 1];
            else
                for (var c = 1; c < a.length; c++) o = t(a[c], s, l), void 0 !== o ? (u = s, s = o) : s = "";
            return r && !s ? !1 : (r || "function" != typeof s || (n.push(u), s = this.mv(s, n, i), n.pop()), s)
        },
        f: function(e, n, i, r) {
            for (var o = !1, a = null, s = !1, l = this.options.modelGet, u = n.length - 1; u >= 0; u--)
                if (a = n[u], o = t(e, a, l), void 0 !== o) {
                    s = !0;
                    break
                }
            return s ? (r || "function" != typeof o || (o = this.mv(o, n, i)), o) : r ? !1 : ""
        },
        ls: function(e, t, n, r, o) {
            var a = this.options.delimiters;
            return this.options.delimiters = o, this.b(this.ct(i(e.call(t, r)), t, n)), this.options.delimiters = a, !1
        },
        ct: function(e, t, n) {
            if (this.options.disableLambda) throw new Error("Lambda features disabled.");
            return this.c.compile(e, this.options).render(t, n)
        },
        b: function(e) {
            this.buf += e
        },
        fl: function() {
            var e = this.buf;
            return this.buf = "", e
        },
        ms: function(e, t, n, i, r, o, a) {
            var s, l = t[t.length - 1],
                u = e.call(l);
            return "function" == typeof u ? i ? !0 : (s = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(u, l, n, s.substring(r, o), a)) : u
        },
        mv: function(e, t, n) {
            var r = t[t.length - 1],
                o = e.call(r);
            return "function" == typeof o ? this.ct(i(o.call(r)), r, n) : o
        },
        sub: function(e, t, n, i) {
            var r = this.subs[e];
            r && (this.activeSub = e, r(t, n, this, i), this.activeSub = !1)
        }
    };
    var o = /&/g,
        a = /</g,
        s = />/g,
        l = /\'/g,
        u = /\"/g,
        c = /[&<>\"\']/,
        d = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
}("undefined" != typeof exports ? exports : Hogan),
function(e) {
    function t(e) {
        "}" === e.n.substr(e.n.length - 1) && (e.n = e.n.substring(0, e.n.length - 1))
    }

    function n(e) {
        return e.trim ? e.trim() : e.replace(/^\s*|\s*$/g, "")
    }

    function i(e, t, n) {
        if (t.charAt(n) != e.charAt(0)) return !1;
        for (var i = 1, r = e.length; r > i; i++)
            if (t.charAt(n + i) != e.charAt(i)) return !1;
        return !0
    }

    function r(t, n, i, s) {
        var l = [],
            u = null,
            c = null,
            d = null;
        for (c = i[i.length - 1]; t.length > 0;) {
            if (d = t.shift(), c && "<" == c.tag && !(d.tag in w)) throw new Error("Illegal content in < super tag.");
            if (e.tags[d.tag] <= e.tags.$ || o(d, s)) i.push(d), d.nodes = r(t, d.tag, i, s);
            else {
                if ("/" == d.tag) {
                    if (0 === i.length) throw new Error("Closing tag without opener: /" + d.n);
                    if (u = i.pop(), d.n != u.n && !a(d.n, u.n, s)) throw new Error("Nesting error: " + u.n + " vs. " + d.n);
                    return u.end = d.i, l
                }
                "\n" == d.tag && (d.last = 0 == t.length || "\n" == t[0].tag)
            }
            l.push(d)
        }
        if (i.length > 0) throw new Error("missing closing tag: " + i.pop().n);
        return l
    }

    function o(e, t) {
        for (var n = 0, i = t.length; i > n; n++)
            if (t[n].o == e.n) return e.tag = "#", !0
    }

    function a(e, t, n) {
        for (var i = 0, r = n.length; r > i; i++)
            if (n[i].c == e && n[i].o == t) return !0
    }

    function s(e) {
        var t = [];
        for (var n in e) t.push('"' + u(n) + '": function(c,p,t,i) {' + e[n] + "}");
        return "{ " + t.join(",") + " }"
    }

    function l(e) {
        var t = [];
        for (var n in e.partials) t.push('"' + u(n) + '":{name:"' + u(e.partials[n].name) + '", ' + l(e.partials[n]) + "}");
        return "partials: {" + t.join(",") + "}, subs: " + s(e.subs)
    }

    function u(e) {
        return e.replace(y, "\\\\").replace(g, '\\"').replace(m, "\\n").replace(v, "\\r").replace(b, "\\u2028").replace(x, "\\u2029")
    }

    function c(e) {
        return ~e.indexOf(".") ? "d" : "f"
    }

    function d(e, t) {
        var n = "<" + (t.prefix || ""),
            i = n + e.n + k++;
        return t.partials[i] = {
            name: e.n,
            partials: {}
        }, t.code += 't.b(t.rp("' + u(i) + '",c,p,"' + (e.indent || "") + '"));', i
    }

    function p(e, t) {
        t.code += "t.b(t.t(t." + c(e.n) + '("' + u(e.n) + '",c,p,0)));'
    }

    function f(e) {
        return "t.b(" + e + ");"
    }
    var h = /\S/,
        g = /\"/g,
        m = /\n/g,
        v = /\r/g,
        y = /\\/g,
        b = /\u2028/,
        x = /\u2029/;
    e.tags = {
        "#": 1,
        "^": 2,
        "<": 3,
        $: 4,
        "/": 5,
        "!": 6,
        ">": 7,
        "=": 8,
        _v: 9,
        "{": 10,
        "&": 11,
        _t: 12
    }, e.scan = function(r, o) {
        function a() {
            y.length > 0 && (b.push({
                tag: "_t",
                text: new String(y)
            }), y = "")
        }

        function s() {
            for (var t = !0, n = k; n < b.length; n++)
                if (t = e.tags[b[n].tag] < e.tags._v || "_t" == b[n].tag && null === b[n].text.match(h), !t) return !1;
            return t
        }

        function l(e, t) {
            if (a(), e && s())
                for (var n, i = k; i < b.length; i++) b[i].text && ((n = b[i + 1]) && ">" == n.tag && (n.indent = b[i].text.toString()), b.splice(i, 1));
            else t || b.push({
                tag: "\n"
            });
            x = !1, k = b.length
        }

        function u(e, t) {
            var i = "=" + C,
                r = e.indexOf(i, t),
                o = n(e.substring(e.indexOf("=", t) + 1, r)).split(" ");
            return T = o[0], C = o[o.length - 1], r + i.length - 1
        }
        var c = r.length,
            d = 0,
            p = 1,
            f = 2,
            g = d,
            m = null,
            v = null,
            y = "",
            b = [],
            x = !1,
            w = 0,
            k = 0,
            T = "{{",
            C = "}}";
        for (o && (o = o.split(" "), T = o[0], C = o[1]), w = 0; c > w; w++) g == d ? i(T, r, w) ? (--w, a(), g = p) : "\n" == r.charAt(w) ? l(x) : y += r.charAt(w) : g == p ? (w += T.length - 1, v = e.tags[r.charAt(w + 1)], m = v ? r.charAt(w + 1) : "_v", "=" == m ? (w = u(r, w), g = d) : (v && w++, g = f), x = w) : i(C, r, w) ? (b.push({
            tag: m,
            n: n(y),
            otag: T,
            ctag: C,
            i: "/" == m ? x - T.length : w + C.length
        }), y = "", w += C.length - 1, g = d, "{" == m && ("}}" == C ? w++ : t(b[b.length - 1]))) : y += r.charAt(w);
        return l(x, !0), b
    };
    var w = {
        _t: !0,
        "\n": !0,
        $: !0,
        "/": !0
    };
    e.stringify = function(t, n, i) {
        return "{code: function (c,p,i) { " + e.wrapMain(t.code) + " }," + l(t) + "}"
    };
    var k = 0;
    e.generate = function(t, n, i) {
        k = 0;
        var r = {
            code: "",
            subs: {},
            partials: {}
        };
        return e.walk(t, r), i.asString ? this.stringify(r, n, i) : this.makeTemplate(r, n, i)
    }, e.wrapMain = function(e) {
        return 'var t=this;t.b(i=i||"");' + e + "return t.fl();"
    }, e.template = e.Template, e.makeTemplate = function(e, t, n) {
        var i = this.makePartials(e);
        return i.code = new Function("c", "p", "i", this.wrapMain(e.code)), new this.template(i, t, this, n)
    }, e.makePartials = function(e) {
        var t, n = {
            subs: {},
            partials: e.partials,
            name: e.name
        };
        for (t in n.partials) n.partials[t] = this.makePartials(n.partials[t]);
        for (t in e.subs) n.subs[t] = new Function("c", "p", "t", "i", e.subs[t]);
        return n
    }, e.codegen = {
        "#": function(t, n) {
            n.code += "if(t.s(t." + c(t.n) + '("' + u(t.n) + '",c,p,1),c,p,0,' + t.i + "," + t.end + ',"' + t.otag + " " + t.ctag + '")){t.rs(c,p,function(c,p,t){', e.walk(t.nodes, n), n.code += "});c.pop();}"
        },
        "^": function(t, n) {
            n.code += "if(!t.s(t." + c(t.n) + '("' + u(t.n) + '",c,p,1),c,p,1,0,0,"")){', e.walk(t.nodes, n), n.code += "};"
        },
        ">": d,
        "<": function(t, n) {
            var i = {
                partials: {},
                code: "",
                subs: {},
                inPartial: !0
            };
            e.walk(t.nodes, i);
            var r = n.partials[d(t, n)];
            r.subs = i.subs, r.partials = i.partials
        },
        $: function(t, n) {
            var i = {
                subs: {},
                code: "",
                partials: n.partials,
                prefix: t.n
            };
            e.walk(t.nodes, i), n.subs[t.n] = i.code, n.inPartial || (n.code += 't.sub("' + u(t.n) + '",c,p,i);')
        },
        "\n": function(e, t) {
            t.code += f('"\\n"' + (e.last ? "" : " + i"))
        },
        _v: function(e, t) {
            t.code += "t.b(t.v(t." + c(e.n) + '("' + u(e.n) + '",c,p,0)));'
        },
        _t: function(e, t) {
            t.code += f('"' + u(e.text) + '"')
        },
        "{": p,
        "&": p
    }, e.walk = function(t, n) {
        for (var i, r = 0, o = t.length; o > r; r++) i = e.codegen[t[r].tag], i && i(t[r], n);
        return n
    }, e.parse = function(e, t, n) {
        return n = n || {}, r(e, "", [], n.sectionTags || [])
    }, e.cache = {}, e.cacheKey = function(e, t) {
        return [e, !!t.asString, !!t.disableLambda, t.delimiters, !!t.modelGet].join("||")
    }, e.compile = function(t, n) {
        n = n || {};
        var i = e.cacheKey(t, n),
            r = this.cache[i];
        if (r) {
            var o = r.partials;
            for (var a in o) delete o[a].instance;
            return r
        }
        return r = this.generate(this.parse(this.scan(t, n.delimiters), t, n), t, n), this.cache[i] = r
    }
}("undefined" != typeof exports ? exports : Hogan),
function(e) {
    "use strict";

    function t(e) {
        this.$optionSelect = e.$el, this.$options = this.$optionSelect.find("input[type='checkbox']"), this.$labels = this.$optionSelect.find("label"), this.$optionsContainer = this.$optionSelect.find(".options-container"), this.$optionList = this.$optionsContainer.children(".js-auto-height-inner"), this.attachCheckedCounter();
        var t = "undefined" == typeof ieVersion || ieVersion > 7 ? !0 : !1;
        t && (this.$options.on("click", this.updateCheckedCount.bind(this)), this.replaceHeadWithButton(), this.$optionSelect.addClass("js-collapsible"), this.$optionSelect.find(".js-container-head").on("click", this.toggleOptionSelect.bind(this)), this.$optionSelect.on("focus", this.listenForKeys.bind(this)), this.$optionSelect.on("blur", this.stopListeningForKeys.bind(this)), this.$options.on("focus", this.open.bind(this)), 1 == this.$optionSelect.data("closed-on-load") && this.close())
    }
    window.GOVUK = window.GOVUK || {}, t.prototype.replaceHeadWithButton = function() {
        var t = this.$optionSelect.find(".js-container-head"),
            n = t.html(),
            i = e("<button>");
        i.addClass("js-container-head"), i.attr("type", "button"), i.attr("aria-expanded", this.isClosed()), i.attr("aria-controls", this.$optionSelect.find(".options-container").attr("id")), i.html(n), t.replaceWith(i)
    }, t.prototype.attachCheckedCounter = function() {
        this.$optionSelect.find(".js-container-head").append('<div class="js-selected-counter">' + this.checkedString() + "</div>")
    }, t.prototype.updateCheckedCount = function() {
        this.$optionSelect.find(".js-selected-counter").text(this.checkedString())
    }, t.prototype.checkedString = function n() {
        var e = this.$options.filter(":checked").size(),
            n = "";
        return e > 0 && (n = e + " selected"), n
    }, t.prototype.toggleOptionSelect = function(e) {
        this.isClosed() ? this.open() : this.close(), e.preventDefault()
    }, t.prototype.open = function() {
        this.isClosed() && (this.$optionSelect.find(".js-container-head").attr("aria-expanded", !0), this.$optionSelect.removeClass("js-closed"), this.$optionsContainer.prop("style").height || this.setupHeight())
    }, t.prototype.close = function() {
        this.$optionSelect.addClass("js-closed"), this.$optionSelect.find(".js-container-head").attr("aria-expanded", !1)
    }, t.prototype.isClosed = function() {
        return this.$optionSelect.hasClass("js-closed")
    }, t.prototype.setContainerHeight = function(e) {
        this.$optionsContainer.css({
            "max-height": "none",
            height: e
        })
    }, t.prototype.isLabelVisible = function(t, n) {
        var i = e(n),
            r = this.$optionsContainer.height(),
            o = this.$optionList.offset().top,
            a = i.offset().top - o;
        return r > a
    }, t.prototype.getVisibleLabels = function() {
        return this.$labels.filter(this.isLabelVisible.bind(this))
    }, t.prototype.setupHeight = function() {
        var e, t, n, i, r, o = this.$optionsContainer.height(),
            a = this.$optionList.height();
        return o + 50 > a ? void this.setContainerHeight(a) : (e = this.getVisibleLabels().last(), t = e.position().top, n = parseInt(e.css("border-top-width"), 10), i = parseInt(e.css("padding-top"), 10), r = "normal" == e.css("line-height") ? parseInt(e.css("font-size"), 10) : parseInt(e.css("line-height"), 10), void this.setContainerHeight(t + n + i + r / 2))
    }, t.prototype.listenForKeys = function() {
        this.$optionSelect.keypress(this.checkForSpecialKeys.bind(this))
    }, t.prototype.checkForSpecialKeys = function(e) {
        13 == e.keyCode && this.toggleOptionSelect()
    }, t.prototype.stopListeningForKeys = function() {
        this.$optionSelect.unbind("keypress")
    }, GOVUK.OptionSelect = t;
    e(".govuk-option-select").map(function() {
        return new GOVUK.OptionSelect({
            $el: e(this)
        })
    })
}(jQuery),
function() {
    "use strict";
    var e, t, n = this.jQuery,
        i = [];
    t = function(e) {
        var t = n(e),
            i = t.prop("id");
        return i ? (this.idPattern = i, this.elementSelector = ".list-entry, .list-entry-remove, .list-entry-add", this.entries = [], this.$wrapper = t, this.minEntries = 2, this.listItemName = this.$wrapper.data("listItemName"), this.getSharedAttributes(), this.getValues(), this.maxEntries = this.entries.length, this.trimEntries(), this.render(), void this.bindEvents()) : !1
    }, t.optionalAttributes = ["aria-describedby"], t.prototype.entryTemplate = Hogan.compile('<div class="list-entry"><label for="{{{id}}}" class="text-box-number-label"><span class="visuallyhidden">{{listItemName}} number </span>{{number}}.</label><input name="{{name}}" id="{{id}}" value="{{value}}" {{{sharedAttributes}}}/>{{#button}}<button type="button" class="button-secondary list-entry-remove">Remove<span class="visuallyhidden"> {{listItemName}} number {{number}}</span></button>{{/button}}</div>'), t.prototype.addButtonTemplate = Hogan.compile('<button type="button" class="button-secondary list-entry-add">Add another {{listItemName}} ({{entriesLeft}} remaining)</button>'), t.prototype.getSharedAttributes = function() {
        var e, t, i, r = this.$wrapper.find("input"),
            o = Hogan.compile(' {{name}}="{{value}}"'),
            a = ["id", "name", "value"],
            s = [];
        i = function(e) {
            for (var t, n, i = "", r = e.length; r--;)
                for (t = e[r], n = t.length; n--;) i += o.render({
                    name: t[n].name,
                    value: t[n].value
                });
            return i
        }, r.each(function(i, r) {
            for (e = r.attributes.length, t = []; e--;) - 1 === n.inArray(r.attributes[e].name, a) && t.push({
                name: r.attributes[e].name,
                value: r.attributes[e].value
            });
            t.length && s.push(t)
        }), this.sharedAttributes = s.length ? i(s) : ""
    }, t.prototype.getValues = function() {
        this.entries = [], this.$wrapper.find("input").each(function(e, t) {
            var i = n(t).val();
            this.entries.push(i)
        }.bind(this))
    }, t.prototype.trimEntries = function() {
        for (var e = this.entries.length, t = []; e--;) "" !== this.entries[e] ? t.push(this.entries[e]) : e < this.minEntries && t.push("");
        this.entries = t.reverse()
    }, t.prototype.getId = function(e) {
        var t = this.idPattern.replace("list-entry-", "");
        return "undefined" == typeof e ? t : "input-" + t + "-" + e
    }, t.prototype.bindEvents = function() {
        this.$wrapper.on("click", ".list-entry-remove", function(e) {
            this.removeEntry(n(e.target))
        }.bind(this)), this.$wrapper.on("click", ".list-entry-add", function(e) {
            this.addEntry()
        }.bind(this))
    }, t.prototype.shiftFocus = function(e) {
        var t;
        t = "remove" === e.action ? e.entryNumberFocused > 1 ? e.entryNumberFocused - 1 : 1 : e.entryNumberFocused + 1, this.$wrapper.find(".list-entry").eq(t - 1).find("input").focus()
    }, t.prototype.removeEntryFromEntries = function(e) {
        var t, n, i = [];
        for (t = 0, n = this.entries.length; n > t; t++) e - 1 !== t && i.push(this.entries[t]);
        this.entries = i
    }, t.prototype.addEntry = function(e) {
        var t = this.entries.length;
        this.getValues(), this.entries.push(""), this.render(), this.shiftFocus({
            action: "add",
            entryNumberFocused: t
        })
    }, t.prototype.removeEntry = function(e) {
        var t = parseInt(e.find("span").text().match(/\d+/)[0], 10);
        this.getValues(), this.removeEntryFromEntries(t), this.render(), this.shiftFocus({
            action: "remove",
            entryNumberFocused: t
        })
    }, t.prototype.render = function() {
        this.$wrapper.find(this.elementSelector).remove(), n.each(this.entries, function(e, t) {
            var n = e + 1,
                i = {
                    id: this.getId(n),
                    number: n,
                    name: this.getId(),
                    value: t,
                    listItemName: this.listItemName,
                    sharedAttributes: this.sharedAttributes
                };
            n > 1 && (i.button = !0), this.$wrapper.append(this.entryTemplate.render(i))
        }.bind(this)), this.entries.length < this.maxEntries && this.$wrapper.append(this.addButtonTemplate.render({
            listItemName: this.listItemName,
            entriesLeft: this.maxEntries - this.entries.length
        }))
    }, e = function() {
        n(".input-list").each(function() {
            i.push(new t(this))
        })
    }, this.GOVUK = this.GOVUK || {}, this.GOVUK.GDM = this.GOVUK.GDM || {}, this.GOVUK.GDM.listEntry = e
}.call(this),
    function() {
        "use strict";
        var e, t = this.jQuery,
            n = "word-count-counter",
            i = function() {
                var e = t("textarea[data-max-length-in-words]");
                e.length && e.after('<p class="' + n + '" role="status" aria-live="polite" aria-relevant="text" id="word-count-' + e.prop("name") + '"/>').attr("aria-controls", "word-count-" + e.prop("name")).on("change keyup paste", r).each(r)
            },
            r = function() {
                var e = t(this),
                    i = e.val(),
                    r = o(i),
                    s = e.data("max-length-in-words"),
                    l = s - r,
                    u = a(l);
                e.next("." + n).html(u)
            },
            o = function(e) {
                var t = e.match(/\S+/g) || [];
                return t.length
            },
            a = function(e) {
                var t = Math.abs(e);
                return -1 > e ? t + " words too many" : -1 === e ? "1 word too many" : 1 === e ? "1 word remaining" : 0 === e || e > 1 ? t + " words remaining" : void 0
            };
        e = function() {
            i()
        }, this.GOVUK = this.GOVUK || {}, this.GOVUK.GDM = this.GOVUK.GDM || {}, GOVUK.GDM.wordCounter = e
    }.call(this),
    function() {
        "use strict";
        var e = this.jQuery,
            t = function() {
                e(".validation-masthead").length && e(".validation-masthead").first().focus()
            },
            n = function(t) {
                t.preventDefault();
                var n = e(this).attr("href");
                e(n).find("input, textarea").first().focus()
            };
        e(".validation-masthead").on("click", "a", n), this.GOVUK = this.GOVUK || {}, this.GOVUK.GDM = this.GOVUK.GDM || {}, GOVUK.GDM.validation = t
    }.call(this),
    function() {
        "use strict";
        var e = this,
            t = e.jQuery;
        "undefined" == typeof GOVUK && (e.GOVUK = {});
        var n = function(e, n) {
            var i;
            this.selectedClass = "selected", this.focusedClass = "focused", void 0 !== n && t.each(n, function(e, t) {
                this[e] = t
            }.bind(this)), "string" == typeof e ? (i = t(e), this.selector = e, this.setInitialState(t(this.selector))) : void 0 !== e && (this.$elms = e, this.setInitialState(this.$elms)), this.addEvents()
        };
        n.prototype.addEvents = function() {
            "undefined" != typeof this.$elms ? this.addElementLevelEvents() : this.addDocumentLevelEvents()
        }, n.prototype.setInitialState = function(e) {
            e.each(function(e, n) {
                var i = t(n);
                i.is(":checked") && this.markSelected(i)
            }.bind(this))
        }, n.prototype.markFocused = function(e, t) {
            "focused" === t ? e.parent("label").addClass(this.focusedClass) : e.parent("label").removeClass(this.focusedClass)
        }, n.prototype.markSelected = function(e) {
            var n;
            "radio" === e.attr("type") ? (n = e.attr("name"), t(e[0].form).find('input[name="' + n + '"]').parent("label").removeClass(this.selectedClass), e.parent("label").addClass(this.selectedClass)) : e.is(":checked") ? e.parent("label").addClass(this.selectedClass) : e.parent("label").removeClass(this.selectedClass)
        }, n.prototype.addElementLevelEvents = function() {
            this.clickHandler = this.getClickHandler(), this.focusHandler = this.getFocusHandler({
                level: "element"
            }), this.$elms.on("click", this.clickHandler).on("focus blur", this.focusHandler)
        }, n.prototype.addDocumentLevelEvents = function() {
            this.clickHandler = this.getClickHandler(), this.focusHandler = this.getFocusHandler({
                level: "document"
            }), t(document).on("click", this.selector, this.clickHandler).on("focus blur", this.selector, this.focusHandler)
        }, n.prototype.getClickHandler = function() {
            return function(e) {
                this.markSelected(t(e.target))
            }.bind(this)
        }, n.prototype.getFocusHandler = function(e) {
            var n = "document" === e.level ? "focusin" : "focus";
            return function(e) {
                var i = e.type === n ? "focused" : "blurred";
                this.markFocused(t(e.target), i)
            }.bind(this)
        }, n.prototype.destroy = function() {
            "undefined" != typeof this.selector ? t(document).off("click", this.selector, this.clickHandler).off("focus blur", this.selector, this.focusHandler) : this.$elms.off("click", this.clickHandler).off("focus blur", this.focusHandler)
        }, e.GOVUK.SelectionButtons = n
    }.call(this),
    function() {
        "use strict";

        function e() {
            "function" == typeof window.ga && ga.apply(window, arguments)
        }
        window.GOVUK = window.GOVUK || {};
        var t = function(t, n) {
            function i(t, n) {
                e("create", t, {
                    cookieDomain: n
                })
            }

            function r() {
                e("set", "anonymizeIp", !0)
            }
            i(t, n), r()
        };
        t.load = function() {
            ! function(e, t, n, i, r, o, a) {
                e.GoogleAnalyticsObject = r, e[r] = e[r] || function() {
                    (e[r].q = e[r].q || []).push(arguments)
                }, e[r].l = 1 * new Date, o = t.createElement(n), a = t.getElementsByTagName(n)[0], o.async = 1, o.src = i, a.parentNode.insertBefore(o, a)
            }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga")
        }, t.prototype.trackPageview = function(t, n, i) {
            var i = i || {};
            if ("string" == typeof t) {
                var r = {
                    page: t
                };
                "string" == typeof n && (r.title = n), i.transport && (r.transport = i.transport), e("send", "pageview", r)
            } else e("send", "pageview")
        }, t.prototype.trackEvent = function(t, n, i) {
            var r, i = i || {},
                o = {
                    hitType: "event",
                    eventCategory: t,
                    eventAction: n
                };
            "string" == typeof i.label && (o.eventLabel = i.label), "string" == typeof i.page && (o.page = i.page), (i.value || 0 === i.value) && (r = parseInt(i.value, 10), "number" != typeof r || isNaN(r) || (o.eventValue = r)), i.nonInteraction && (o.nonInteraction = 1), i.transport && (o.transport = i.transport), e("send", o)
        }, t.prototype.trackSocial = function(t, n, i) {
            e("send", {
                hitType: "social",
                socialNetwork: t,
                socialAction: n,
                socialTarget: i
            })
        }, t.prototype.addLinkedTrackerDomain = function(t, n, i) {
            e("create", t, "auto", {
                name: n
            }), e("require", "linker"), e(n + ".require", "linker"), e("linker:autoLink", [i]), e(n + ".linker:autoLink", [i]), e(n + ".set", "anonymizeIp", !0), e(n + ".send", "pageview")
        }, t.prototype.setDimension = function(t, n) {
            e("set", "dimension" + t, String(n))
        }, GOVUK.GoogleAnalyticsUniversalTracker = t
    }(),
    function() {
        "use strict";
        window.GOVUK = window.GOVUK || {};
        var e = function(e) {
            this.trackers = [], "undefined" != typeof e.universalId && this.trackers.push(new GOVUK.GoogleAnalyticsUniversalTracker(e.universalId, e.cookieDomain))
        };
        e.prototype.sendToTrackers = function(e, t) {
            for (var n = 0, i = this.trackers.length; i > n; n++) {
                var r = this.trackers[n],
                    o = r[e];
                "function" == typeof o && o.apply(r, t)
            }
        }, e.load = function() {
            GOVUK.GoogleAnalyticsUniversalTracker.load()
        }, e.prototype.trackPageview = function(e, t, n) {
            this.sendToTrackers("trackPageview", arguments)
        }, e.prototype.trackEvent = function(e, t, n) {
            this.sendToTrackers("trackEvent", arguments)
        }, e.prototype.trackShare = function(e) {
            this.sendToTrackers("trackSocial", [e, "share", location.pathname])
        }, e.prototype.setDimension = function(e, t) {
            this.sendToTrackers("setDimension", arguments)
        }, e.prototype.addLinkedTrackerDomain = function(e, t, n) {
            this.sendToTrackers("addLinkedTrackerDomain", arguments)
        }, GOVUK.Analytics = e
    }(),
    function(e) {
        "use strict";
        e.GOVUK.GDM = e.GOVUK.GDM || {}, e.GOVUK.GDM.analytics = {
            register: function() {
                var t = "www.digitalmarketplace.service.gov.uk" === e.document.domain ? ".digitalmarketplace.service.gov.uk" : e.document.domain,
                    n = "UA-49258698-1";
                GOVUK.Analytics.load(), GOVUK.analytics = new GOVUK.Analytics({
                    universalId: n,
                    cookieDomain: t
                })
            },
            location: {
                hostname: function() {
                    return e.location.hostname
                },
                pathname: function() {
                    return e.location.pathname
                },
                protocol: function() {
                    return e.location.protocol
                },
                search: function() {
                    return e.location.search
                }
            }
        }
    }(window),
    function(e) {
        e.GDM.analytics.pageViews = {
            init: function() {
                this.setCustomDimensions(), e.analytics.trackPageview()
            },
            setCustomDimensions: function() {
                function t(t, n) {
                    for (a = t.length; a--;) o = t[a].split("="), o[0] === n.paramType && n.paramArray.push(o[1]);
                    n.paramArray.length && (n.paramArray.sort(), e.analytics.setDimension(n.dimensionId, n.paramArray.join("|")))
                }
                var n, i, r, o, a, s, l = e.GDM.analytics.location.search(),
                    u = [];
                if ("/digital-outcomes-and-specialists/opportunities" === e.GDM.analytics.location.pathname() && (n = $(".search-summary-count").text(), e.analytics.setDimension(21, n), "" !== l)) {
                    for (l = l.split("?")[1], r = l.split("&"), i = [{
                            dimensionId: 23,
                            paramType: "lot",
                            paramArray: []
                        }, {
                            dimensionId: 24,
                            paramType: "status",
                            paramArray: []
                        }], s = i.length; s--;) t(r, i[s]), i[s].paramArray.length && u.push(i[s].paramType);
                    u.length && (u.sort(), e.analytics.setDimension(22, u.join("|")))
                }
            }
        }
    }(window.GOVUK),
    function(e, t) {
        "use strict";
        var n = function(e) {
            this.$target = $(e.target), this.text = this.$target.text(), this.href = this.$target.prop("href"), "a" !== this.$target[0].nodeName.toLowerCase() && (this.$target = this.$target.closest("a"), this.href = this.$target.prop("href"))
        };
        n.prototype.category = function() {
            var e = "internal-link";
            return null !== this.fileType() ? e = "download" : $.inArray(t.GDM.analytics.location.protocol(), ["http:", "https:"]) && !this.isOnHostDomain(this.href) && (e = "external-link"), e
        }, n.prototype.isOnHostDomain = function(e) {
            var n = t.GDM.analytics.location.hostname(),
                i = "" !== n ? new RegExp(n) : /^$/g;
            return null !== e.match(i)
        }, n.prototype.fileType = function() {
            var e, t = this.href.match(/\.(pdf|pda|odt|ods|odp|zip|csv)$/);
            return e = function(e) {
                var t = e.find(".document-icon").clone();
                return t.length ? (t.find("span").remove(), t.text().toLowerCase()) : !1
            }, null !== t ? t[1] : e(this.$target)
        };
        var i = function(e) {
            var n, i = t.GDM.analytics.location.pathname().match(/\/buyers\/frameworks\/([a-z\-]+)\/requirements\/([a-z\-]+)\/*(\d+)*/),
                r = i[2],
                o = {
                    "digital-specialists": "specialists",
                    "digital-outcomes": "outcomes",
                    "user-research-participants": "user research participants",
                    "user-research-studios": "user research studios"
                };
            if (null !== e.text.match("Download supplier responses")) return n = i[3], "supplier response list | " + o[r] + " | " + n;
            switch (r) {
                case "digital-specialists":
                    return "list of specialists suppliers";
                case "digital-outcomes":
                    return "list of outcomes suppliers";
                case "user-research-participants":
                    return "list of user research participant suppliers";
                case "user-research-studios":
                    return "list of user research labs";
                default:
                    return !1
            }
        };
        t.GDM.analytics.LinkClick = n, t.GDM.analytics.events = {
            supplierListDownload: function(e) {
                var r = new n(e);
                "download" === r.category() && "csv" === r.fileType() && t.analytics.trackEvent("download", "csv", {
                    label: i(r),
                    transport: "beacon"
                })
            },
            init: function() {
                $("body").on("click", "a", this.supplierListDownload)
            }
        }
    }(window, window.GOVUK),
    function(e) {
        "use strict";
        var t = function() {
            var t = $(this),
                n = t.data("url");
            e.analytics && n && e.analytics.trackPageview(n)
        };
        e.GDM.analytics.virtualPageViews = function() {
            $("[data-analytics=trackPageView]").each(t)
        }
    }(window.GOVUK),
    function(e) {
        "use strict";
        e.GOVUK.GDM.analytics.init = function() {
            this.register(), this.pageViews.init(), this.events.init(), this.virtualPageViews()
        }
    }(window),
    function(e) {
        e.GOVUK || {}
    }(window),
    function(e, t) {
        t.selectionButtons = function() {
            e.SelectionButtons && new e.SelectionButtons(".selection-button input", {
                focusedClass: "selection-button-focused",
                selectedClass: "selection-button-selected"
            })
        }, e.GDM = t
    }.apply(this, [GOVUK || {}, GOVUK.GDM || {}]),
    function(e, t) {
        "use strict";
        var n;
        "undefined" == typeof console && (console = {
            log: function() {},
            time: function() {},
            timeEnd: function() {}
        }), (t.debug = !window.location.href.match(/gov.uk/) && !window.jasmine) && (console.log("%cDebug mode %cON", "color:#550; background:yellow; font-size: 11pt", "color:yellow; background: #550;font-size:11pt"), console.time("Modules loaded"));
        for (n in t) t.debug && "debug" !== n && console.log("%cLoading module %c" + n, "color:#6a6; background:#dfd; font-size: 11pt", "color:#dfd; background:green; font-size: 11pt"), "function" == typeof t[n].init ? t[n].init() : "function" == typeof t[n] && t[n]();
        e.GDM = t, t.debug && console.timeEnd("Modules loaded")
    }.apply(this, [GOVUK || {}, GOVUK.GDM || {}]);
//# sourceMappingURL=maps/application.js.map