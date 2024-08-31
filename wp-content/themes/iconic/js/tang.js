! function(e, t) {
    function n(e) {
        var t = ft[e] = {};
        return J.each(e.split(tt), function(e, n) {
            t[n] = !0
        }), t
    }

    function i(e, n, i) {
        if (i === t && 1 === e.nodeType) {
            var r = "data-" + n.replace(mt, "-$1").toLowerCase();
            if (i = e.getAttribute(r), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : gt.test(i) ? J.parseJSON(i) : i
                } catch (s) {}
                J.data(e, n, i)
            } else i = t
        }
        return i
    }

    function r(e) {
        var t;
        for (t in e)
            if (("data" !== t || !J.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function s() {
        return !1
    }

    function a() {
        return !0
    }

    function o(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType
    }

    function l(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function c(e, t, n) {
        if (t = t || 0, J.isFunction(t)) return J.grep(e, function(e, i) {
            var r = !!t.call(e, i, e);
            return r === n
        });
        if (t.nodeType) return J.grep(e, function(e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var i = J.grep(e, function(e) {
                return 1 === e.nodeType
            });
            if ($t.test(t)) return J.filter(t, i, !n);
            t = J.filter(t, i)
        }
        return J.grep(e, function(e) {
            return J.inArray(e, t) >= 0 === n
        })
    }

    function u(e) {
        var t = jt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function d(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function h(e, t) {
        if (1 === t.nodeType && J.hasData(e)) {
            var n, i, r, s = J._data(e),
                a = J._data(t, s),
                o = s.events;
            if (o) {
                delete a.handle, a.events = {};
                for (n in o)
                    for (i = 0, r = o[n].length; r > i; i++) J.event.add(t, n, o[n][i])
            }
            a.data && (a.data = J.extend({}, a.data))
        }
    }

    function p(e, t) {
        var n;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), J.support.html5Clone && e.innerHTML && !J.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Qt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text), t.removeAttribute(J.expando))
    }

    function f(e) {
        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
    }

    function g(e) {
        Qt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function m(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = yn.length; r--;)
            if (t = yn[r] + n, t in e) return t;
        return i
    }

    function v(e, t) {
        return e = t || e, "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e)
    }

    function y(e, t) {
        for (var n, i, r = [], s = 0, a = e.length; a > s; s++) n = e[s], n.style && (r[s] = J._data(n, "olddisplay"), t ? (r[s] || "none" !== n.style.display || (n.style.display = ""), "" === n.style.display && v(n) && (r[s] = J._data(n, "olddisplay", C(n.nodeName)))) : (i = nn(n, "display"), r[s] || "none" === i || J._data(n, "olddisplay", i)));
        for (s = 0; a > s; s++) n = e[s], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[s] || "" : "none"));
        return e
    }

    function b(e, t, n) {
        var i = dn.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function x(e, t, n, i) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += J.css(e, n + vn[r], !0)), i ? ("content" === n && (s -= parseFloat(nn(e, "padding" + vn[r])) || 0), "margin" !== n && (s -= parseFloat(nn(e, "border" + vn[r] + "Width")) || 0)) : (s += parseFloat(nn(e, "padding" + vn[r])) || 0, "padding" !== n && (s += parseFloat(nn(e, "border" + vn[r] + "Width")) || 0));
        return s
    }

    function _(e, t, n) {
        var i = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = !0,
            s = J.support.boxSizing && "border-box" === J.css(e, "boxSizing");
        if (0 >= i || null == i) {
            if (i = nn(e, t), (0 > i || null == i) && (i = e.style[t]), hn.test(i)) return i;
            r = s && (J.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + x(e, t, n || (s ? "border" : "content"), r) + "px"
    }

    function C(e) {
        if (fn[e]) return fn[e];
        var t = J("<" + e + ">").appendTo(H.body),
            n = t.css("display");
        return t.remove(), ("none" === n || "" === n) && (rn = H.body.appendChild(rn || J.extend(H.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })), sn && rn.createElement || (sn = (rn.contentWindow || rn.contentDocument).document, sn.write("<!doctype html><html><body>"), sn.close()), t = sn.body.appendChild(sn.createElement(e)), n = nn(t, "display"), H.body.removeChild(rn)), fn[e] = n, n
    }

    function w(e, t, n, i) {
        var r;
        if (J.isArray(t)) J.each(t, function(t, r) {
            n || _n.test(e) ? i(e, r) : w(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== J.type(t)) i(e, t);
        else
            for (r in t) w(e + "[" + r + "]", t[r], n, i)
    }

    function k(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r, s, a = t.toLowerCase().split(tt),
                o = 0,
                l = a.length;
            if (J.isFunction(n))
                for (; l > o; o++) i = a[o], s = /^\+/.test(i), s && (i = i.substr(1) || "*"), r = e[i] = e[i] || [], r[s ? "unshift" : "push"](n)
        }
    }

    function T(e, n, i, r, s, a) {
        s = s || n.dataTypes[0], a = a || {}, a[s] = !0;
        for (var o, l = e[s], c = 0, u = l ? l.length : 0, d = e === On; u > c && (d || !o); c++) o = l[c](n, i, r), "string" == typeof o && (!d || a[o] ? o = t : (n.dataTypes.unshift(o), o = T(e, n, i, r, o, a)));
        return !d && o || a["*"] || (o = T(e, n, i, r, "*", a)), o
    }

    function S(e, n) {
        var i, r, s = J.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((s[i] ? e : r || (r = {}))[i] = n[i]);
        r && J.extend(!0, e, r)
    }

    function D(e, n, i) {
        var r, s, a, o, l = e.contents,
            c = e.dataTypes,
            u = e.responseFields;
        for (s in u) s in i && (n[u[s]] = i[s]);
        for (;
            "*" === c[0];) c.shift(), r === t && (r = e.mimeType || n.getResponseHeader("content-type"));
        if (r)
            for (s in l)
                if (l[s] && l[s].test(r)) {
                    c.unshift(s);
                    break
                }
        if (c[0] in i) a = c[0];
        else {
            for (s in i) {
                if (!c[0] || e.converters[s + " " + c[0]]) {
                    a = s;
                    break
                }
                o || (o = s)
            }
            a = a || o
        }
        return a ? (a !== c[0] && c.unshift(a), i[a]) : void 0
    }

    function P(e, t) {
        var n, i, r, s, a = e.dataTypes.slice(),
            o = a[0],
            l = {},
            c = 0;
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), a[1])
            for (n in e.converters) l[n.toLowerCase()] = e.converters[n];
        for (; r = a[++c];)
            if ("*" !== r) {
                if ("*" !== o && o !== r) {
                    if (n = l[o + " " + r] || l["* " + r], !n)
                        for (i in l)
                            if (s = i.split(" "), s[1] === r && (n = l[o + " " + s[0]] || l["* " + s[0]])) {
                                n === !0 ? n = l[i] : l[i] !== !0 && (r = s[0], a.splice(c--, 0, r));
                                break
                            }
                    if (n !== !0)
                        if (n && e["throws"]) t = n(t);
                        else try {
                            t = n(t)
                        } catch (u) {
                            return {
                                state: "parsererror",
                                error: n ? u : "No conversion from " + o + " to " + r
                            }
                        }
                }
                o = r
            }
        return {
            state: "success",
            data: t
        }
    }

    function F() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function I() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function E() {
        return setTimeout(function() {
            Kn = t
        }, 0), Kn = J.now()
    }

    function A(e, t) {
        J.each(t, function(t, n) {
            for (var i = (ei[t] || []).concat(ei["*"]), r = 0, s = i.length; s > r; r++)
                if (i[r].call(e, t, n)) return
        })
    }

    function M(e, t, n) {
        var i, r = 0,
            s = Zn.length,
            a = J.Deferred().always(function() {
                delete o.elem
            }),
            o = function() {
                for (var t = Kn || E(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, r = 1 - i, s = 0, o = l.tweens.length; o > s; s++) l.tweens[s].run(r);
                return a.notifyWith(e, [l, r, n]), 1 > r && o ? n : (a.resolveWith(e, [l]), !1)
            },
            l = a.promise({
                elem: e,
                props: J.extend({}, t),
                opts: J.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Kn || E(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = J.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(i), i
                },
                stop: function(t) {
                    for (var n = 0, i = t ? l.tweens.length : 0; i > n; n++) l.tweens[n].run(1);
                    return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (N(c, l.opts.specialEasing); s > r; r++)
            if (i = Zn[r].call(l, e, c, l.opts)) return i;
        return A(l, c), J.isFunction(l.opts.start) && l.opts.start.call(e, l), J.fx.timer(J.extend(o, {
            anim: l,
            queue: l.opts.queue,
            elem: e
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function N(e, t) {
        var n, i, r, s, a;
        for (n in e)
            if (i = J.camelCase(n), r = t[i], s = e[n], J.isArray(s) && (r = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), a = J.cssHooks[i], a && "expand" in a) {
                s = a.expand(s), delete e[i];
                for (n in s) n in e || (e[n] = s[n], t[n] = r)
            } else t[i] = r
    }

    function L(e, t, n) {
        var i, r, s, a, o, l, c, u, d, h = this,
            p = e.style,
            f = {},
            g = [],
            m = e.nodeType && v(e);
        n.queue || (u = J._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, d = u.empty.fire, u.empty.fire = function() {
            u.unqueued || d()
        }), u.unqueued++, h.always(function() {
            h.always(function() {
                u.unqueued--, J.queue(e, "fx").length || u.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === J.css(e, "display") && "none" === J.css(e, "float") && (J.support.inlineBlockNeedsLayout && "inline" !== C(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", J.support.shrinkWrapBlocks || h.done(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (s = t[i], Vn.exec(s)) {
                if (delete t[i], l = l || "toggle" === s, s === (m ? "hide" : "show")) continue;
                g.push(i)
            }
        if (a = g.length) {
            o = J._data(e, "fxshow") || J._data(e, "fxshow", {}), "hidden" in o && (m = o.hidden), l && (o.hidden = !m), m ? J(e).show() : h.done(function() {
                J(e).hide()
            }), h.done(function() {
                var t;
                J.removeData(e, "fxshow", !0);
                for (t in f) J.style(e, t, f[t])
            });
            for (i = 0; a > i; i++) r = g[i], c = h.createTween(r, m ? o[r] : 0), f[r] = o[r] || J.style(e, r), r in o || (o[r] = c.start, m && (c.end = c.start, c.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function $(e, t, n, i, r) {
        return new $.prototype.init(e, t, n, i, r)
    }

    function O(e, t) {
        var n, i = {
                height: e
            },
            r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = vn[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function B(e) {
        return J.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var j, R, H = e.document,
        W = e.location,
        q = e.navigator,
        z = e.jQuery,
        U = e.$,
        Y = Array.prototype.push,
        X = Array.prototype.slice,
        K = Array.prototype.indexOf,
        Q = Object.prototype.toString,
        V = Object.prototype.hasOwnProperty,
        G = String.prototype.trim,
        J = function(e, t) {
            return new J.fn.init(e, t, j)
        },
        Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        et = /\S/,
        tt = /\s+/,
        nt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        it = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        rt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        st = /^[\],:{}\s]*$/,
        at = /(?:^|:|,)(?:\s*\[)+/g,
        ot = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        lt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        ct = /^-ms-/,
        ut = /-([\da-z])/gi,
        dt = function(e, t) {
            return (t + "").toUpperCase()
        },
        ht = function() {
            H.addEventListener ? (H.removeEventListener("DOMContentLoaded", ht, !1), J.ready()) : "complete" === H.readyState && (H.detachEvent("onreadystatechange", ht), J.ready())
        },
        pt = {};
    J.fn = J.prototype = {
        constructor: J,
        init: function(e, n, i) {
            var r, s, a;
            if (!e) return this;
            if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
            if ("string" == typeof e) {
                if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : it.exec(e), !r || !r[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                if (r[1]) return n = n instanceof J ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : H, e = J.parseHTML(r[1], a, !0), rt.test(r[1]) && J.isPlainObject(n) && this.attr.call(e, n, !0), J.merge(this, e);
                if (s = H.getElementById(r[2]), s && s.parentNode) {
                    if (s.id !== r[2]) return i.find(e);
                    this.length = 1, this[0] = s
                }
                return this.context = H, this.selector = e, this
            }
            return J.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), J.makeArray(e, this))
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return X.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e, t, n) {
            var i = J.merge(this.constructor(), e);
            return i.prevObject = this, i.context = this.context, "find" === t ? i.selector = this.selector + (this.selector ? " " : "") + n : t && (i.selector = this.selector + "." + t + "(" + n + ")"), i
        },
        each: function(e, t) {
            return J.each(this, e, t)
        },
        ready: function(e) {
            return J.ready.promise().done(e), this
        },
        eq: function(e) {
            return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments), "slice", X.call(arguments).join(","))
        },
        map: function(e) {
            return this.pushStack(J.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Y,
        sort: [].sort,
        splice: [].splice
    }, J.fn.init.prototype = J.fn, J.extend = J.fn.extend = function() {
        var e, n, i, r, s, a, o = arguments[0] || {},
            l = 1,
            c = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[1] || {}, l = 2), "object" == typeof o || J.isFunction(o) || (o = {}), c === l && (o = this, --l); c > l; l++)
            if (null != (e = arguments[l]))
                for (n in e) i = o[n], r = e[n], o !== r && (u && r && (J.isPlainObject(r) || (s = J.isArray(r))) ? (s ? (s = !1, a = i && J.isArray(i) ? i : []) : a = i && J.isPlainObject(i) ? i : {}, o[n] = J.extend(u, a, r)) : r !== t && (o[n] = r));
        return o
    }, J.extend({
        noConflict: function(t) {
            return e.$ === J && (e.$ = U), t && e.jQuery === J && (e.jQuery = z), J
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? J.readyWait++ : J.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--J.readyWait : !J.isReady) {
                if (!H.body) return setTimeout(J.ready, 1);
                J.isReady = !0, e !== !0 && --J.readyWait > 0 || (R.resolveWith(H, [J]), J.fn.trigger && J(H).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === J.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === J.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? String(e) : pt[Q.call(e)] || "object"
        },
        isPlainObject: function(e) {
            if (!e || "object" !== J.type(e) || e.nodeType || J.isWindow(e)) return !1;
            try {
                if (e.constructor && !V.call(e, "constructor") && !V.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var i;
            for (i in e);
            return i === t || V.call(e, i)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(e, t, n) {
            var i;
            return e && "string" == typeof e ? ("boolean" == typeof t && (n = t, t = 0), t = t || H, (i = rt.exec(e)) ? [t.createElement(i[1])] : (i = J.buildFragment([e], t, n ? null : []), J.merge([], (i.cacheable ? J.clone(i.fragment) : i.fragment).childNodes))) : null
        },
        parseJSON: function(t) {
            return t && "string" == typeof t ? (t = J.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : st.test(t.replace(ot, "@").replace(lt, "]").replace(at, "")) ? new Function("return " + t)() : void J.error("Invalid JSON: " + t)) : null
        },
        parseXML: function(n) {
            var i, r;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
            } catch (s) {
                i = t
            }
            return i && i.documentElement && !i.getElementsByTagName("parsererror").length || J.error("Invalid XML: " + n), i
        },
        noop: function() {},
        globalEval: function(t) {
            t && et.test(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(ct, "ms-").replace(ut, dt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, n, i) {
            var r, s = 0,
                a = e.length,
                o = a === t || J.isFunction(e);
            if (i)
                if (o) {
                    for (r in e)
                        if (n.apply(e[r], i) === !1) break
                } else
                    for (; a > s && n.apply(e[s++], i) !== !1;);
            else if (o) {
                for (r in e)
                    if (n.call(e[r], r, e[r]) === !1) break
            } else
                for (; a > s && n.call(e[s], s, e[s++]) !== !1;);
            return e
        },
        trim: G && !G.call("\ufeff\xa0") ? function(e) {
            return null == e ? "" : G.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(nt, "")
        },
        makeArray: function(e, t) {
            var n, i = t || [];
            return null != e && (n = J.type(e), null == e.length || "string" === n || "function" === n || "regexp" === n || J.isWindow(e) ? Y.call(i, e) : J.merge(i, e)), i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (K) return K.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var i = n.length,
                r = e.length,
                s = 0;
            if ("number" == typeof i)
                for (; i > s; s++) e[r++] = n[s];
            else
                for (; n[s] !== t;) e[r++] = n[s++];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            var i, r = [],
                s = 0,
                a = e.length;
            for (n = !!n; a > s; s++) i = !!t(e[s], s), n !== i && r.push(e[s]);
            return r
        },
        map: function(e, n, i) {
            var r, s, a = [],
                o = 0,
                l = e.length,
                c = e instanceof J || l !== t && "number" == typeof l && (l > 0 && e[0] && e[l - 1] || 0 === l || J.isArray(e));
            if (c)
                for (; l > o; o++) r = n(e[o], o, i), null != r && (a[a.length] = r);
            else
                for (s in e) r = n(e[s], s, i), null != r && (a[a.length] = r);
            return a.concat.apply([], a)
        },
        guid: 1,
        proxy: function(e, n) {
            var i, r, s;
            return "string" == typeof n && (i = e[n], n = e, e = i), J.isFunction(e) ? (r = X.call(arguments, 2), s = function() {
                return e.apply(n, r.concat(X.call(arguments)))
            }, s.guid = e.guid = e.guid || J.guid++, s) : t
        },
        access: function(e, n, i, r, s, a, o) {
            var l, c = null == i,
                u = 0,
                d = e.length;
            if (i && "object" == typeof i) {
                for (u in i) J.access(e, n, u, i[u], 1, a, r);
                s = 1
            } else if (r !== t) {
                if (l = o === t && J.isFunction(r), c && (l ? (l = n, n = function(e, t, n) {
                        return l.call(J(e), n)
                    }) : (n.call(e, r), n = null)), n)
                    for (; d > u; u++) n(e[u], i, l ? r.call(e[u], u, n(e[u], i)) : r, o);
                s = 1
            }
            return s ? e : c ? n.call(e) : d ? n(e[0], i) : a
        },
        now: function() {
            return (new Date).getTime()
        }
    }), J.ready.promise = function(t) {
        if (!R)
            if (R = J.Deferred(), "complete" === H.readyState) setTimeout(J.ready, 1);
            else if (H.addEventListener) H.addEventListener("DOMContentLoaded", ht, !1), e.addEventListener("load", J.ready, !1);
        else {
            H.attachEvent("onreadystatechange", ht), e.attachEvent("onload", J.ready);
            var n = !1;
            try {
                n = null == e.frameElement && H.documentElement
            } catch (i) {}
            n && n.doScroll && ! function r() {
                if (!J.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(r, 50)
                    }
                    J.ready()
                }
            }()
        }
        return R.promise(t)
    }, J.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
        pt["[object " + t + "]"] = t.toLowerCase()
    }), j = J(H);
    var ft = {};
    J.Callbacks = function(e) {
        e = "string" == typeof e ? ft[e] || n(e) : J.extend({}, e);
        var i, r, s, a, o, l, c = [],
            u = !e.once && [],
            d = function(t) {
                for (i = e.memory && t, r = !0, l = a || 0, a = 0, o = c.length, s = !0; c && o > l; l++)
                    if (c[l].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        i = !1;
                        break
                    }
                s = !1, c && (u ? u.length && d(u.shift()) : i ? c = [] : h.disable())
            },
            h = {
                add: function() {
                    if (c) {
                        var t = c.length;
                        ! function n(t) {
                            J.each(t, function(t, i) {
                                var r = J.type(i);
                                "function" === r ? e.unique && h.has(i) || c.push(i) : i && i.length && "string" !== r && n(i)
                            })
                        }(arguments), s ? o = c.length : i && (a = t, d(i))
                    }
                    return this
                },
                remove: function() {
                    return c && J.each(arguments, function(e, t) {
                        for (var n;
                            (n = J.inArray(t, c, n)) > -1;) c.splice(n, 1), s && (o >= n && o--, l >= n && l--)
                    }), this
                },
                has: function(e) {
                    return J.inArray(e, c) > -1
                },
                empty: function() {
                    return c = [], this
                },
                disable: function() {
                    return c = u = i = t, this
                },
                disabled: function() {
                    return !c
                },
                lock: function() {
                    return u = t, i || h.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], !c || r && !u || (s ? u.push(t) : d(t)), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return h
    }, J.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", J.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", J.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", J.Callbacks("memory")]
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
                        return J.Deferred(function(n) {
                            J.each(t, function(t, i) {
                                var s = i[0],
                                    a = e[t];
                                r[i[1]](J.isFunction(a) ? function() {
                                    var e = a.apply(this, arguments);
                                    e && J.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n : this, [e])
                                } : n[s])
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? J.extend(e, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, J.each(t, function(e, s) {
                var a = s[2],
                    o = s[3];
                i[s[1]] = a.add, o && a.add(function() {
                    n = o
                }, t[1 ^ e][2].disable, t[2][2].lock), r[s[0]] = a.fire, r[s[0] + "With"] = a.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function(e) {
            var t, n, i, r = 0,
                s = X.call(arguments),
                a = s.length,
                o = 1 !== a || e && J.isFunction(e.promise) ? a : 0,
                l = 1 === o ? e : J.Deferred(),
                c = function(e, n, i) {
                    return function(r) {
                        n[e] = this, i[e] = arguments.length > 1 ? X.call(arguments) : r, i === t ? l.notifyWith(n, i) : --o || l.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) s[r] && J.isFunction(s[r].promise) ? s[r].promise().done(c(r, i, s)).fail(l.reject).progress(c(r, n, t)) : --o;
            return o || l.resolveWith(i, s), l.promise()
        }
    }), J.support = function() {
        var t, n, i, r, s, a, o, l, c, u, d, h = H.createElement("div");
        if (h.setAttribute("className", "t"), h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = h.getElementsByTagName("*"), i = h.getElementsByTagName("a")[0], !n || !i || !n.length) return {};
        r = H.createElement("select"), s = r.appendChild(H.createElement("option")), a = h.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", t = {
            leadingWhitespace: 3 === h.firstChild.nodeType,
            tbody: !h.getElementsByTagName("tbody").length,
            htmlSerialize: !!h.getElementsByTagName("link").length,
            style: /top/.test(i.getAttribute("style")),
            hrefNormalized: "/a" === i.getAttribute("href"),
            opacity: /^0.5/.test(i.style.opacity),
            cssFloat: !!i.style.cssFloat,
            checkOn: "on" === a.value,
            optSelected: s.selected,
            getSetAttribute: "t" !== h.className,
            enctype: !!H.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== H.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === H.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, r.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete h.test
        } catch (p) {
            t.deleteExpando = !1
        }
        if (!h.addEventListener && h.attachEvent && h.fireEvent && (h.attachEvent("onclick", d = function() {
                t.noCloneEvent = !1
            }), h.cloneNode(!0).fireEvent("onclick"), h.detachEvent("onclick", d)), a = H.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), h.appendChild(a), o = H.createDocumentFragment(), o.appendChild(h.lastChild), t.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = a.checked, o.removeChild(a), o.appendChild(h), h.attachEvent)
            for (c in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) l = "on" + c, u = l in h, u || (h.setAttribute(l, "return;"), u = "function" == typeof h[l]), t[c + "Bubbles"] = u;
        return J(function() {
            var n, i, r, s, a = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                o = H.getElementsByTagName("body")[0];
            o && (n = H.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", o.insertBefore(n, o.firstChild), i = H.createElement("div"), n.appendChild(i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = i.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", t.reliableHiddenOffsets = u && 0 === r[0].offsetHeight, i.innerHTML = "", i.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === i.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== o.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || {
                width: "4px"
            }).width, s = H.createElement("div"), s.style.cssText = i.style.cssText = a, s.style.marginRight = s.style.width = "0", i.style.width = "1px", i.appendChild(s), t.reliableMarginRight = !parseFloat((e.getComputedStyle(s, null) || {}).marginRight)), "undefined" != typeof i.style.zoom && (i.innerHTML = "", i.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === i.offsetWidth, i.style.display = "block", i.style.overflow = "visible", i.innerHTML = "<div></div>", i.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== i.offsetWidth, n.style.zoom = 1), o.removeChild(n), n = i = r = s = null)
        }), o.removeChild(h), n = i = r = s = a = o = h = null, t
    }();
    var gt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        mt = /([A-Z])/g;
    J.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (J.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? J.cache[e[J.expando]] : e[J.expando], !!e && !r(e)
        },
        data: function(e, n, i, r) {
            if (J.acceptData(e)) {
                var s, a, o = J.expando,
                    l = "string" == typeof n,
                    c = e.nodeType,
                    u = c ? J.cache : e,
                    d = c ? e[o] : e[o] && o;
                if (d && u[d] && (r || u[d].data) || !l || i !== t) return d || (c ? e[o] = d = J.deletedIds.pop() || J.guid++ : d = o), u[d] || (u[d] = {}, c || (u[d].toJSON = J.noop)), ("object" == typeof n || "function" == typeof n) && (r ? u[d] = J.extend(u[d], n) : u[d].data = J.extend(u[d].data, n)), s = u[d], r || (s.data || (s.data = {}), s = s.data), i !== t && (s[J.camelCase(n)] = i), l ? (a = s[n], null == a && (a = s[J.camelCase(n)])) : a = s, a
            }
        },
        removeData: function(e, t, n) {
            if (J.acceptData(e)) {
                var i, s, a, o = e.nodeType,
                    l = o ? J.cache : e,
                    c = o ? e[J.expando] : J.expando;
                if (l[c]) {
                    if (t && (i = n ? l[c] : l[c].data)) {
                        J.isArray(t) || (t in i ? t = [t] : (t = J.camelCase(t), t = t in i ? [t] : t.split(" ")));
                        for (s = 0, a = t.length; a > s; s++) delete i[t[s]];
                        if (!(n ? r : J.isEmptyObject)(i)) return
                    }(n || (delete l[c].data, r(l[c]))) && (o ? J.cleanData([e], !0) : J.support.deleteExpando || l != l.window ? delete l[c] : l[c] = null)
                }
            }
        },
        _data: function(e, t, n) {
            return J.data(e, t, n, !0)
        },
        acceptData: function(e) {
            var t = e.nodeName && J.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), J.fn.extend({
        data: function(e, n) {
            var r, s, a, o, l, c = this[0],
                u = 0,
                d = null;
            if (e === t) {
                if (this.length && (d = J.data(c), 1 === c.nodeType && !J._data(c, "parsedAttrs"))) {
                    for (a = c.attributes, l = a.length; l > u; u++) o = a[u].name, o.indexOf("data-") || (o = J.camelCase(o.substring(5)), i(c, o, d[o]));
                    J._data(c, "parsedAttrs", !0)
                }
                return d
            }
            return "object" == typeof e ? this.each(function() {
                J.data(this, e)
            }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", s = r[1] + "!", J.access(this, function(n) {
                return n === t ? (d = this.triggerHandler("getData" + s, [r[0]]), d === t && c && (d = J.data(c, e), d = i(c, e, d)), d === t && r[1] ? this.data(r[0]) : d) : (r[1] = n, void this.each(function() {
                    var t = J(this);
                    t.triggerHandler("setData" + s, r), J.data(this, e, n), t.triggerHandler("changeData" + s, r)
                }))
            }, null, n, arguments.length > 1, null, !1))
        },
        removeData: function(e) {
            return this.each(function() {
                J.removeData(this, e)
            })
        }
    }), J.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = J._data(e, t), n && (!i || J.isArray(n) ? i = J._data(e, t, J.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = J.queue(e, t),
                i = n.length,
                r = n.shift(),
                s = J._queueHooks(e, t),
                a = function() {
                    J.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete s.stop, r.call(e, a, s)), !i && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return J._data(e, n) || J._data(e, n, {
                empty: J.Callbacks("once memory").add(function() {
                    J.removeData(e, t + "queue", !0), J.removeData(e, n, !0)
                })
            })
        }
    }), J.fn.extend({
        queue: function(e, n) {
            var i = 2;
            return "string" != typeof e && (n = e, e = "fx", i--), arguments.length < i ? J.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = J.queue(this, e, n);
                J._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && J.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                J.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = J.fx ? J.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var i, r = 1,
                s = J.Deferred(),
                a = this,
                o = this.length,
                l = function() {
                    --r || s.resolveWith(a, [a])
                };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; o--;) i = J._data(a[o], e + "queueHooks"), i && i.empty && (r++, i.empty.add(l));
            return l(), s.promise(n)
        }
    });
    var vt, yt, bt, xt = /[\t\r\n]/g,
        _t = /\r/g,
        Ct = /^(?:button|input)$/i,
        wt = /^(?:button|input|object|select|textarea)$/i,
        kt = /^a(?:rea|)$/i,
        Tt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        St = J.support.getSetAttribute;
    J.fn.extend({
        attr: function(e, t) {
            return J.access(this, J.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                J.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return J.access(this, J.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = J.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, i, r, s, a, o;
            if (J.isFunction(e)) return this.each(function(t) {
                J(this).addClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e)
                for (t = e.split(tt), n = 0, i = this.length; i > n; n++)
                    if (r = this[n], 1 === r.nodeType)
                        if (r.className || 1 !== t.length) {
                            for (s = " " + r.className + " ", a = 0, o = t.length; o > a; a++) s.indexOf(" " + t[a] + " ") < 0 && (s += t[a] + " ");
                            r.className = J.trim(s)
                        } else r.className = e;
            return this
        },
        removeClass: function(e) {
            var n, i, r, s, a, o, l;
            if (J.isFunction(e)) return this.each(function(t) {
                J(this).removeClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e || e === t)
                for (n = (e || "").split(tt), o = 0, l = this.length; l > o; o++)
                    if (r = this[o], 1 === r.nodeType && r.className) {
                        for (i = (" " + r.className + " ").replace(xt, " "), s = 0, a = n.length; a > s; s++)
                            for (; i.indexOf(" " + n[s] + " ") >= 0;) i = i.replace(" " + n[s] + " ", " ");
                        r.className = e ? J.trim(i) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                i = "boolean" == typeof t;
            return this.each(J.isFunction(e) ? function(n) {
                J(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var r, s = 0, a = J(this), o = t, l = e.split(tt); r = l[s++];) o = i ? o : !a.hasClass(r), a[o ? "addClass" : "removeClass"](r);
                else("undefined" === n || "boolean" === n) && (this.className && J._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : J._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(xt, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, i, r, s = this[0]; {
                if (arguments.length) return r = J.isFunction(e), this.each(function(i) {
                    var s, a = J(this);
                    1 === this.nodeType && (s = r ? e.call(this, i, a.val()) : e, null == s ? s = "" : "number" == typeof s ? s += "" : J.isArray(s) && (s = J.map(s, function(e) {
                        return null == e ? "" : e + ""
                    })), n = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, s, "value") !== t || (this.value = s))
                });
                if (s) return n = J.valHooks[s.type] || J.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (i = n.get(s, "value")) !== t ? i : (i = s.value, "string" == typeof i ? i.replace(_t, "") : null == i ? "" : i)
            }
        }
    }), J.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, s = "select-one" === e.type || 0 > r, a = s ? null : [], o = s ? r + 1 : i.length, l = 0 > r ? o : s ? r : 0; o > l; l++)
                        if (n = i[l], !(!n.selected && l !== r || (J.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && J.nodeName(n.parentNode, "optgroup"))) {
                            if (t = J(n).val(), s) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    var n = J.makeArray(t);
                    return J(e).find("option").each(function() {
                        this.selected = J.inArray(J(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {},
        attr: function(e, n, i, r) {
            var s, a, o, l = e.nodeType;
            if (e && 3 !== l && 8 !== l && 2 !== l) return r && J.isFunction(J.fn[n]) ? J(e)[n](i) : "undefined" == typeof e.getAttribute ? J.prop(e, n, i) : (o = 1 !== l || !J.isXMLDoc(e), o && (n = n.toLowerCase(), a = J.attrHooks[n] || (Tt.test(n) ? yt : vt)), i !== t ? null === i ? void J.removeAttr(e, n) : a && "set" in a && o && (s = a.set(e, i, n)) !== t ? s : (e.setAttribute(n, i + ""), i) : a && "get" in a && o && null !== (s = a.get(e, n)) ? s : (s = e.getAttribute(n), null === s ? t : s))
        },
        removeAttr: function(e, t) {
            var n, i, r, s, a = 0;
            if (t && 1 === e.nodeType)
                for (i = t.split(tt); a < i.length; a++) r = i[a], r && (n = J.propFix[r] || r, s = Tt.test(r), s || J.attr(e, r, ""), e.removeAttribute(St ? r : n), s && n in e && (e[n] = !1))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (Ct.test(e.nodeName) && e.parentNode) J.error("type property can't be changed");
                    else if (!J.support.radioValue && "radio" === t && J.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return vt && J.nodeName(e, "button") ? vt.get(e, t) : t in e ? e.value : null
                },
                set: function(e, t, n) {
                    return vt && J.nodeName(e, "button") ? vt.set(e, t, n) : void(e.value = t)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, i) {
            var r, s, a, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return a = 1 !== o || !J.isXMLDoc(e), a && (n = J.propFix[n] || n, s = J.propHooks[n]), i !== t ? s && "set" in s && (r = s.set(e, i, n)) !== t ? r : e[n] = i : s && "get" in s && null !== (r = s.get(e, n)) ? r : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : wt.test(e.nodeName) || kt.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), yt = {
        get: function(e, n) {
            var i, r = J.prop(e, n);
            return r === !0 || "boolean" != typeof r && (i = e.getAttributeNode(n)) && i.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            var i;
            return t === !1 ? J.removeAttr(e, n) : (i = J.propFix[n] || n, i in e && (e[i] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, St || (bt = {
        name: !0,
        id: !0,
        coords: !0
    }, vt = J.valHooks.button = {
        get: function(e, n) {
            var i;
            return i = e.getAttributeNode(n), i && (bt[n] ? "" !== i.value : i.specified) ? i.value : t
        },
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || (i = H.createAttribute(n), e.setAttributeNode(i)), i.value = t + ""
        }
    }, J.each(["width", "height"], function(e, t) {
        J.attrHooks[t] = J.extend(J.attrHooks[t], {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        })
    }), J.attrHooks.contenteditable = {
        get: vt.get,
        set: function(e, t, n) {
            "" === t && (t = "false"), vt.set(e, t, n)
        }
    }), J.support.hrefNormalized || J.each(["href", "src", "width", "height"], function(e, n) {
        J.attrHooks[n] = J.extend(J.attrHooks[n], {
            get: function(e) {
                var i = e.getAttribute(n, 2);
                return null === i ? t : i
            }
        })
    }), J.support.style || (J.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), J.support.optSelected || (J.propHooks.selected = J.extend(J.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), J.support.enctype || (J.propFix.enctype = "encoding"), J.support.checkOn || J.each(["radio", "checkbox"], function() {
        J.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), J.each(["radio", "checkbox"], function() {
        J.valHooks[this] = J.extend(J.valHooks[this], {
            set: function(e, t) {
                return J.isArray(t) ? e.checked = J.inArray(J(e).val(), t) >= 0 : void 0
            }
        })
    });
    var Dt = /^(?:textarea|input|select)$/i,
        Pt = /^([^\.]*|)(?:\.(.+)|)$/,
        Ft = /(?:^|\s)hover(\.\S+|)\b/,
        It = /^key/,
        Et = /^(?:mouse|contextmenu)|click/,
        At = /^(?:focusinfocus|focusoutblur)$/,
        Mt = function(e) {
            return J.event.special.hover ? e : e.replace(Ft, "mouseenter$1 mouseleave$1")
        };
    J.event = {
            add: function(e, n, i, r, s) {
                var a, o, l, c, u, d, h, p, f, g, m;
                if (3 !== e.nodeType && 8 !== e.nodeType && n && i && (a = J._data(e))) {
                    for (i.handler && (f = i, i = f.handler, s = f.selector), i.guid || (i.guid = J.guid++), l = a.events, l || (a.events = l = {}), o = a.handle, o || (a.handle = o = function(e) {
                            return "undefined" == typeof J || e && J.event.triggered === e.type ? t : J.event.dispatch.apply(o.elem, arguments)
                        }, o.elem = e), n = J.trim(Mt(n)).split(" "), c = 0; c < n.length; c++) u = Pt.exec(n[c]) || [], d = u[1], h = (u[2] || "").split(".").sort(), m = J.event.special[d] || {}, d = (s ? m.delegateType : m.bindType) || d, m = J.event.special[d] || {}, p = J.extend({
                        type: d,
                        origType: u[1],
                        data: r,
                        handler: i,
                        guid: i.guid,
                        selector: s,
                        needsContext: s && J.expr.match.needsContext.test(s),
                        namespace: h.join(".")
                    }, f), g = l[d], g || (g = l[d] = [], g.delegateCount = 0, m.setup && m.setup.call(e, r, h, o) !== !1 || (e.addEventListener ? e.addEventListener(d, o, !1) : e.attachEvent && e.attachEvent("on" + d, o))), m.add && (m.add.call(e, p), p.handler.guid || (p.handler.guid = i.guid)), s ? g.splice(g.delegateCount++, 0, p) : g.push(p), J.event.global[d] = !0;
                    e = null
                }
            },
            global: {},
            remove: function(e, t, n, i, r) {
                var s, a, o, l, c, u, d, h, p, f, g, m = J.hasData(e) && J._data(e);
                if (m && (h = m.events)) {
                    for (t = J.trim(Mt(t || "")).split(" "), s = 0; s < t.length; s++)
                        if (a = Pt.exec(t[s]) || [], o = l = a[1], c = a[2], o) {
                            for (p = J.event.special[o] || {}, o = (i ? p.delegateType : p.bindType) || o, f = h[o] || [], u = f.length, c = c ? new RegExp("(^|\\.)" + c.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, d = 0; d < f.length; d++) g = f[d], !r && l !== g.origType || n && n.guid !== g.guid || c && !c.test(g.namespace) || i && i !== g.selector && ("**" !== i || !g.selector) || (f.splice(d--, 1), g.selector && f.delegateCount--, p.remove && p.remove.call(e, g));
                            0 === f.length && u !== f.length && (p.teardown && p.teardown.call(e, c, m.handle) !== !1 || J.removeEvent(e, o, m.handle), delete h[o])
                        } else
                            for (o in h) J.event.remove(e, o + t[s], n, i, !0);
                    J.isEmptyObject(h) && (delete m.handle, J.removeData(e, "events", !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(n, i, r, s) {
                if (!r || 3 !== r.nodeType && 8 !== r.nodeType) {
                    var a, o, l, c, u, d, h, p, f, g, m = n.type || n,
                        v = [];
                    if (!At.test(m + J.event.triggered) && (m.indexOf("!") >= 0 && (m = m.slice(0, -1), o = !0), m.indexOf(".") >= 0 && (v = m.split("."), m = v.shift(), v.sort()), r && !J.event.customEvent[m] || J.event.global[m]))
                        if (n = "object" == typeof n ? n[J.expando] ? n : new J.Event(m, n) : new J.Event(m), n.type = m, n.isTrigger = !0, n.exclusive = o, n.namespace = v.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, d = m.indexOf(":") < 0 ? "on" + m : "", r) {
                            if (n.result = t, n.target || (n.target = r), i = null != i ? J.makeArray(i) : [], i.unshift(n), h = J.event.special[m] || {}, !h.trigger || h.trigger.apply(r, i) !== !1) {
                                if (f = [
                                        [r, h.bindType || m]
                                    ], !s && !h.noBubble && !J.isWindow(r)) {
                                    for (g = h.delegateType || m, c = At.test(g + m) ? r : r.parentNode, u = r; c; c = c.parentNode) f.push([c, g]), u = c;
                                    u === (r.ownerDocument || H) && f.push([u.defaultView || u.parentWindow || e, g])
                                }
                                for (l = 0; l < f.length && !n.isPropagationStopped(); l++) c = f[l][0], n.type = f[l][1], p = (J._data(c, "events") || {})[n.type] && J._data(c, "handle"), p && p.apply(c, i), p = d && c[d], p && J.acceptData(c) && p.apply && p.apply(c, i) === !1 && n.preventDefault();
                                return n.type = m, s || n.isDefaultPrevented() || h._default && h._default.apply(r.ownerDocument, i) !== !1 || "click" === m && J.nodeName(r, "a") || !J.acceptData(r) || d && r[m] && ("focus" !== m && "blur" !== m || 0 !== n.target.offsetWidth) && !J.isWindow(r) && (u = r[d], u && (r[d] = null), J.event.triggered = m, r[m](), J.event.triggered = t, u && (r[d] = u)), n.result
                            }
                        } else {
                            a = J.cache;
                            for (l in a) a[l].events && a[l].events[m] && J.event.trigger(n, i, a[l].handle.elem, !0)
                        }
                }
            },
            dispatch: function(n) {
                n = J.event.fix(n || e.event);
                var i, r, s, a, o, l, c, u, d, h = (J._data(this, "events") || {})[n.type] || [],
                    p = h.delegateCount,
                    f = X.call(arguments),
                    g = !n.exclusive && !n.namespace,
                    m = J.event.special[n.type] || {},
                    v = [];
                if (f[0] = n, n.delegateTarget = this, !m.preDispatch || m.preDispatch.call(this, n) !== !1) {
                    if (p && (!n.button || "click" !== n.type))
                        for (s = n.target; s != this; s = s.parentNode || this)
                            if (s.disabled !== !0 || "click" !== n.type) {
                                for (o = {}, c = [], i = 0; p > i; i++) u = h[i], d = u.selector, o[d] === t && (o[d] = u.needsContext ? J(d, this).index(s) >= 0 : J.find(d, this, null, [s]).length), o[d] && c.push(u);
                                c.length && v.push({
                                    elem: s,
                                    matches: c
                                })
                            }
                    for (h.length > p && v.push({
                            elem: this,
                            matches: h.slice(p)
                        }), i = 0; i < v.length && !n.isPropagationStopped(); i++)
                        for (l = v[i], n.currentTarget = l.elem, r = 0; r < l.matches.length && !n.isImmediatePropagationStopped(); r++) u = l.matches[r], (g || !n.namespace && !u.namespace || n.namespace_re && n.namespace_re.test(u.namespace)) && (n.data = u.data, n.handleObj = u, a = ((J.event.special[u.origType] || {}).handle || u.handler).apply(l.elem, f), a !== t && (n.result = a, a === !1 && (n.preventDefault(), n.stopPropagation())));
                    return m.postDispatch && m.postDispatch.call(this, n), n.result
                }
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var i, r, s, a = n.button,
                        o = n.fromElement;
                    return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || H, r = i.documentElement, s = i.body, e.pageX = n.clientX + (r && r.scrollLeft || s && s.scrollLeft || 0) - (r && r.clientLeft || s && s.clientLeft || 0), e.pageY = n.clientY + (r && r.scrollTop || s && s.scrollTop || 0) - (r && r.clientTop || s && s.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? n.toElement : o), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[J.expando]) return e;
                var t, n, i = e,
                    r = J.event.fixHooks[e.type] || {},
                    s = r.props ? this.props.concat(r.props) : this.props;
                for (e = J.Event(i), t = s.length; t;) n = s[--t], e[n] = i[n];
                return e.target || (e.target = i.srcElement || H), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, i) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(e, t, n) {
                        J.isWindow(this) && (this.onbeforeunload = n)
                    },
                    teardown: function(e, t) {
                        this.onbeforeunload === t && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var r = J.extend(new J.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? J.event.trigger(r, null, t) : J.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, J.event.handle = J.event.dispatch, J.removeEvent = H.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
        }, J.Event = function(e, t) {
            return this instanceof J.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? a : s) : this.type = e, t && J.extend(this, t), this.timeStamp = e && e.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(e, t)
        }, J.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = a;
                var e = this.originalEvent;
                e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = a;
                var e = this.originalEvent;
                e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = a, this.stopPropagation()
            },
            isDefaultPrevented: s,
            isPropagationStopped: s,
            isImmediatePropagationStopped: s
        }, J.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            J.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    {
                        var n, i = this,
                            r = e.relatedTarget,
                            s = e.handleObj;
                        s.selector
                    }
                    return (!r || r !== i && !J.contains(i, r)) && (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), J.support.submitBubbles || (J.event.special.submit = {
            setup: function() {
                return J.nodeName(this, "form") ? !1 : void J.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        i = J.nodeName(n, "input") || J.nodeName(n, "button") ? n.form : t;
                    i && !J._data(i, "_submit_attached") && (J.event.add(i, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), J._data(i, "_submit_attached", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && J.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return J.nodeName(this, "form") ? !1 : void J.event.remove(this, "._submit")
            }
        }), J.support.changeBubbles || (J.event.special.change = {
            setup: function() {
                return Dt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (J.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), J.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), J.event.simulate("change", this, e, !0)
                })), !1) : void J.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Dt.test(t.nodeName) && !J._data(t, "_change_attached") && (J.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || J.event.simulate("change", this.parentNode, e, !0)
                    }), J._data(t, "_change_attached", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return J.event.remove(this, "._change"), !Dt.test(this.nodeName)
            }
        }), J.support.focusinBubbles || J.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                i = function(e) {
                    J.event.simulate(t, e.target, J.event.fix(e), !0)
                };
            J.event.special[t] = {
                setup: function() {
                    0 === n++ && H.addEventListener(e, i, !0)
                },
                teardown: function() {
                    0 === --n && H.removeEventListener(e, i, !0)
                }
            }
        }), J.fn.extend({
            on: function(e, n, i, r, a) {
                var o, l;
                if ("object" == typeof e) {
                    "string" != typeof n && (i = i || n, n = t);
                    for (l in e) this.on(l, n, i, e[l], a);
                    return this
                }
                if (null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, i = t) : (r = i, i = n, n = t)), r === !1) r = s;
                else if (!r) return this;
                return 1 === a && (o = r, r = function(e) {
                    return J().off(e), o.apply(this, arguments)
                }, r.guid = o.guid || (o.guid = J.guid++)), this.each(function() {
                    J.event.add(this, e, r, i, n)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, n, i) {
                var r, a;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, J(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (a in e) this.off(a, n, e[a]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (i = n, n = t), i === !1 && (i = s), this.each(function() {
                    J.event.remove(this, e, i, n)
                })
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            live: function(e, t, n) {
                return J(this.context).on(e, this.selector, t, n), this
            },
            die: function(e, t) {
                return J(this.context).off(e, this.selector || "**", t), this
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            trigger: function(e, t) {
                return this.each(function() {
                    J.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                return this[0] ? J.event.trigger(e, t, this[0], !0) : void 0
            },
            toggle: function(e) {
                var t = arguments,
                    n = e.guid || J.guid++,
                    i = 0,
                    r = function(n) {
                        var r = (J._data(this, "lastToggle" + e.guid) || 0) % i;
                        return J._data(this, "lastToggle" + e.guid, r + 1), n.preventDefault(), t[r].apply(this, arguments) || !1
                    };
                for (r.guid = n; i < t.length;) t[i++].guid = n;
                return this.click(r)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            J.fn[t] = function(e, n) {
                return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }, It.test(t) && (J.event.fixHooks[t] = J.event.keyHooks), Et.test(t) && (J.event.fixHooks[t] = J.event.mouseHooks)
        }),
        function(e, t) {
            function n(e, t, n, i) {
                n = n || [], t = t || E;
                var r, s, a, o, l = t.nodeType;
                if (!e || "string" != typeof e) return n;
                if (1 !== l && 9 !== l) return [];
                if (a = _(t), !a && !i && (r = nt.exec(e)))
                    if (o = r[1]) {
                        if (9 === l) {
                            if (s = t.getElementById(o), !s || !s.parentNode) return n;
                            if (s.id === o) return n.push(s), n
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && C(t, s) && s.id === o) return n.push(s), n
                    } else {
                        if (r[2]) return $.apply(n, O.call(t.getElementsByTagName(e), 0)), n;
                        if ((o = r[3]) && ht && t.getElementsByClassName) return $.apply(n, O.call(t.getElementsByClassName(o), 0)), n
                    }
                return g(e.replace(G, "$1"), t, n, i, a)
            }

            function i(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function r(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function s(e) {
                return j(function(t) {
                    return t = +t, j(function(n, i) {
                        for (var r, s = e([], n.length, t), a = s.length; a--;) n[r = s[a]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function a(e, t, n) {
                if (e === t) return n;
                for (var i = e.nextSibling; i;) {
                    if (i === t) return -1;
                    i = i.nextSibling
                }
                return 1
            }

            function o(e, t) {
                var i, r, s, a, o, l, c, u = W[F][e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (o = e, l = [], c = b.preFilter; o;) {
                    (!i || (r = Z.exec(o))) && (r && (o = o.slice(r[0].length) || o), l.push(s = [])), i = !1, (r = et.exec(o)) && (s.push(i = new I(r.shift())), o = o.slice(i.length), i.type = r[0].replace(G, " "));
                    for (a in b.filter) !(r = ot[a].exec(o)) || c[a] && !(r = c[a](r)) || (s.push(i = new I(r.shift())), o = o.slice(i.length), i.type = a, i.matches = r);
                    if (!i) break
                }
                return t ? o.length : o ? n.error(e) : W(e, l).slice(0)
            }

            function l(e, t, n) {
                var i = t.dir,
                    r = n && "parentNode" === t.dir,
                    s = N++;
                return t.first ? function(t, n, s) {
                    for (; t = t[i];)
                        if (r || 1 === t.nodeType) return e(t, n, s)
                } : function(t, n, a) {
                    if (a) {
                        for (; t = t[i];)
                            if ((r || 1 === t.nodeType) && e(t, n, a)) return t
                    } else
                        for (var o, l = M + " " + s + " ", c = l + v; t = t[i];)
                            if (r || 1 === t.nodeType) {
                                if ((o = t[F]) === c) return t.sizset;
                                if ("string" == typeof o && 0 === o.indexOf(l)) {
                                    if (t.sizset) return t
                                } else {
                                    if (t[F] = c, e(t, n, a)) return t.sizset = !0, t;
                                    t.sizset = !1
                                }
                            }
                }
            }

            function c(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function u(e, t, n, i, r) {
                for (var s, a = [], o = 0, l = e.length, c = null != t; l > o; o++)(s = e[o]) && (!n || n(s, i, r)) && (a.push(s), c && t.push(o));
                return a
            }

            function d(e, t, n, i, r, s) {
                return i && !i[F] && (i = d(i)), r && !r[F] && (r = d(r, s)), j(function(s, a, o, l) {
                    var c, d, h, p = [],
                        g = [],
                        m = a.length,
                        v = s || f(t || "*", o.nodeType ? [o] : o, []),
                        y = !e || !s && t ? v : u(v, p, e, o, l),
                        b = n ? r || (s ? e : m || i) ? [] : a : y;
                    if (n && n(y, b, o, l), i)
                        for (c = u(b, g), i(c, [], o, l), d = c.length; d--;)(h = c[d]) && (b[g[d]] = !(y[g[d]] = h));
                    if (s) {
                        if (r || e) {
                            if (r) {
                                for (c = [], d = b.length; d--;)(h = b[d]) && c.push(y[d] = h);
                                r(null, b = [], c, l)
                            }
                            for (d = b.length; d--;)(h = b[d]) && (c = r ? B.call(s, h) : p[d]) > -1 && (s[c] = !(a[c] = h))
                        }
                    } else b = u(b === a ? b.splice(m, b.length) : b), r ? r(null, a, b, l) : $.apply(a, b)
                })
            }

            function h(e) {
                for (var t, n, i, r = e.length, s = b.relative[e[0].type], a = s || b.relative[" "], o = s ? 1 : 0, u = l(function(e) {
                        return e === t
                    }, a, !0), p = l(function(e) {
                        return B.call(t, e) > -1
                    }, a, !0), f = [function(e, n, i) {
                        return !s && (i || n !== S) || ((t = n).nodeType ? u(e, n, i) : p(e, n, i))
                    }]; r > o; o++)
                    if (n = b.relative[e[o].type]) f = [l(c(f), n)];
                    else {
                        if (n = b.filter[e[o].type].apply(null, e[o].matches), n[F]) {
                            for (i = ++o; r > i && !b.relative[e[i].type]; i++);
                            return d(o > 1 && c(f), o > 1 && e.slice(0, o - 1).join("").replace(G, "$1"), n, i > o && h(e.slice(o, i)), r > i && h(e = e.slice(i)), r > i && e.join(""))
                        }
                        f.push(n)
                    }
                return c(f)
            }

            function p(e, t) {
                var i = t.length > 0,
                    r = e.length > 0,
                    s = function(a, o, l, c, d) {
                        var h, p, f, g = [],
                            m = 0,
                            y = "0",
                            x = a && [],
                            _ = null != d,
                            C = S,
                            w = a || r && b.find.TAG("*", d && o.parentNode || o),
                            k = M += null == C ? 1 : Math.E;
                        for (_ && (S = o !== E && o, v = s.el); null != (h = w[y]); y++) {
                            if (r && h) {
                                for (p = 0; f = e[p]; p++)
                                    if (f(h, o, l)) {
                                        c.push(h);
                                        break
                                    }
                                _ && (M = k, v = ++s.el)
                            }
                            i && ((h = !f && h) && m--, a && x.push(h))
                        }
                        if (m += y, i && y !== m) {
                            for (p = 0; f = t[p]; p++) f(x, g, o, l);
                            if (a) {
                                if (m > 0)
                                    for (; y--;) x[y] || g[y] || (g[y] = L.call(c));
                                g = u(g)
                            }
                            $.apply(c, g), _ && !a && g.length > 0 && m + t.length > 1 && n.uniqueSort(c)
                        }
                        return _ && (M = k, S = C), x
                    };
                return s.el = 0, i ? j(s) : s
            }

            function f(e, t, i) {
                for (var r = 0, s = t.length; s > r; r++) n(e, t[r], i);
                return i
            }

            function g(e, t, n, i, r) {
                {
                    var s, a, l, c, u, d = o(e);
                    d.length
                }
                if (!i && 1 === d.length) {
                    if (a = d[0] = d[0].slice(0), a.length > 2 && "ID" === (l = a[0]).type && 9 === t.nodeType && !r && b.relative[a[1].type]) {
                        if (t = b.find.ID(l.matches[0].replace(at, ""), t, r)[0], !t) return n;
                        e = e.slice(a.shift().length)
                    }
                    for (s = ot.POS.test(e) ? -1 : a.length - 1; s >= 0 && (l = a[s], !b.relative[c = l.type]); s--)
                        if ((u = b.find[c]) && (i = u(l.matches[0].replace(at, ""), it.test(a[0].type) && t.parentNode || t, r))) {
                            if (a.splice(s, 1), e = i.length && a.join(""), !e) return $.apply(n, O.call(i, 0)), n;
                            break
                        }
                }
                return w(e, d)(i, t, r, n, it.test(e)), n
            }

            function m() {}
            var v, y, b, x, _, C, w, k, T, S, D = !0,
                P = "undefined",
                F = ("sizcache" + Math.random()).replace(".", ""),
                I = String,
                E = e.document,
                A = E.documentElement,
                M = 0,
                N = 0,
                L = [].pop,
                $ = [].push,
                O = [].slice,
                B = [].indexOf || function(e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                j = function(e, t) {
                    return e[F] = null == t || t, e
                },
                R = function() {
                    var e = {},
                        t = [];
                    return j(function(n, i) {
                        return t.push(n) > b.cacheLength && delete e[t.shift()], e[n + " "] = i
                    }, e)
                },
                H = R(),
                W = R(),
                q = R(),
                z = "[\\x20\\t\\r\\n\\f]",
                U = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                Y = U.replace("w", "w#"),
                X = "([*^$|!~]?=)",
                K = "\\[" + z + "*(" + U + ")" + z + "*(?:" + X + z + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + Y + ")|)|)" + z + "*\\]",
                Q = ":(" + U + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + K + ")|[^:]|\\\\.)*|.*))\\)|)",
                V = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)",
                G = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
                Z = new RegExp("^" + z + "*," + z + "*"),
                et = new RegExp("^" + z + "*([\\x20\\t\\r\\n\\f>+~])" + z + "*"),
                tt = new RegExp(Q),
                nt = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                it = /[\x20\t\r\n\f]*[+~]/,
                rt = /h\d/i,
                st = /input|select|textarea|button/i,
                at = /\\(?!\\)/g,
                ot = {
                    ID: new RegExp("^#(" + U + ")"),
                    CLASS: new RegExp("^\\.(" + U + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + U + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + U.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + K),
                    PSEUDO: new RegExp("^" + Q),
                    POS: new RegExp(V, "i"),
                    CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + z + "*[>+~]|" + V, "i")
                },
                lt = function(e) {
                    var t = E.createElement("div");
                    try {
                        return e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t = null
                    }
                },
                ct = lt(function(e) {
                    return e.appendChild(E.createComment("")), !e.getElementsByTagName("*").length
                }),
                ut = lt(function(e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== P && "#" === e.firstChild.getAttribute("href")
                }),
                dt = lt(function(e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return "boolean" !== t && "string" !== t
                }),
                ht = lt(function(e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
                }),
                pt = lt(function(e) {
                    e.id = F + 0, e.innerHTML = "<a name='" + F + "'></a><div name='" + F + "'></div>", A.insertBefore(e, A.firstChild);
                    var t = E.getElementsByName && E.getElementsByName(F).length === 2 + E.getElementsByName(F + 0).length;
                    return y = !E.getElementById(F), A.removeChild(e), t
                });
            try {
                O.call(A.childNodes, 0)[0].nodeType
            } catch (ft) {
                O = function(e) {
                    for (var t, n = []; t = this[e]; e++) n.push(t);
                    return n
                }
            }
            n.matches = function(e, t) {
                return n(e, null, null, t)
            }, n.matchesSelector = function(e, t) {
                return n(t, null, null, [e]).length > 0
            }, x = n.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += x(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i]; i++) n += x(t);
                return n
            }, _ = n.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, C = n.contains = A.contains ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !!(i && 1 === i.nodeType && n.contains && n.contains(i))
            } : A.compareDocumentPosition ? function(e, t) {
                return t && !!(16 & e.compareDocumentPosition(t))
            } : function(e, t) {
                for (; t = t.parentNode;)
                    if (t === e) return !0;
                return !1
            }, n.attr = function(e, t) {
                var n, i = _(e);
                return i || (t = t.toLowerCase()), (n = b.attrHandle[t]) ? n(e) : i || dt ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? "boolean" == typeof e[t] ? e[t] ? t : null : n.specified ? n.value : null : null)
            }, b = n.selectors = {
                cacheLength: 50,
                createPseudo: j,
                match: ot,
                attrHandle: ut ? {} : {
                    href: function(e) {
                        return e.getAttribute("href", 2)
                    },
                    type: function(e) {
                        return e.getAttribute("type")
                    }
                },
                find: {
                    ID: y ? function(e, t, n) {
                        if (typeof t.getElementById !== P && !n) {
                            var i = t.getElementById(e);
                            return i && i.parentNode ? [i] : []
                        }
                    } : function(e, n, i) {
                        if (typeof n.getElementById !== P && !i) {
                            var r = n.getElementById(e);
                            return r ? r.id === e || typeof r.getAttributeNode !== P && r.getAttributeNode("id").value === e ? [r] : t : []
                        }
                    },
                    TAG: ct ? function(e, t) {
                        return typeof t.getElementsByTagName !== P ? t.getElementsByTagName(e) : void 0
                    } : function(e, t) {
                        var n = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (var i, r = [], s = 0; i = n[s]; s++) 1 === i.nodeType && r.push(i);
                            return r
                        }
                        return n
                    },
                    NAME: pt && function(e, t) {
                        return typeof t.getElementsByName !== P ? t.getElementsByName(name) : void 0
                    },
                    CLASS: ht && function(e, t, n) {
                        return typeof t.getElementsByClassName === P || n ? void 0 : t.getElementsByClassName(e)
                    }
                },
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
                        return e[1] = e[1].replace(at, ""), e[3] = (e[4] || e[5] || "").replace(at, ""), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1] ? (e[2] || n.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])), e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && n.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n;
                        return ot.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[3] : (t = e[4]) && (tt.test(t) && (n = o(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t), e.slice(0, 3))
                    }
                },
                filter: {
                    ID: y ? function(e) {
                        return e = e.replace(at, ""),
                            function(t) {
                                return t.getAttribute("id") === e
                            }
                    } : function(e) {
                        return e = e.replace(at, ""),
                            function(t) {
                                var n = typeof t.getAttributeNode !== P && t.getAttributeNode("id");
                                return n && n.value === e
                            }
                    },
                    TAG: function(e) {
                        return "*" === e ? function() {
                            return !0
                        } : (e = e.replace(at, "").toLowerCase(), function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        })
                    },
                    CLASS: function(e) {
                        var t = H[F][e + " "];
                        return t || (t = new RegExp("(^|" + z + ")" + e + "(" + z + "|$)")) && H(e, function(e) {
                            return t.test(e.className || typeof e.getAttribute !== P && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, i) {
                        return function(r) {
                            var s = n.attr(r, e);
                            return null == s ? "!=" === t : t ? (s += "", "=" === t ? s === i : "!=" === t ? s !== i : "^=" === t ? i && 0 === s.indexOf(i) : "*=" === t ? i && s.indexOf(i) > -1 : "$=" === t ? i && s.substr(s.length - i.length) === i : "~=" === t ? (" " + s + " ").indexOf(i) > -1 : "|=" === t ? s === i || s.substr(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, i) {
                        return "nth" === e ? function(e) {
                            var t, r, s = e.parentNode;
                            if (1 === n && 0 === i) return !0;
                            if (s)
                                for (r = 0, t = s.firstChild; t && (1 !== t.nodeType || (r++, e !== t)); t = t.nextSibling);
                            return r -= i, r === n || r % n === 0 && r / n >= 0
                        } : function(t) {
                            var n = t;
                            switch (e) {
                                case "only":
                                case "first":
                                    for (; n = n.previousSibling;)
                                        if (1 === n.nodeType) return !1;
                                    if ("first" === e) return !0;
                                    n = t;
                                case "last":
                                    for (; n = n.nextSibling;)
                                        if (1 === n.nodeType) return !1;
                                    return !0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var i, r = b.pseudos[e] || b.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                        return r[F] ? r(t) : r.length > 1 ? (i = [e, e, "", t], b.setFilters.hasOwnProperty(e.toLowerCase()) ? j(function(e, n) {
                            for (var i, s = r(e, t), a = s.length; a--;) i = B.call(e, s[a]), e[i] = !(n[i] = s[a])
                        }) : function(e) {
                            return r(e, 0, i)
                        }) : r
                    }
                },
                pseudos: {
                    not: j(function(e) {
                        var t = [],
                            n = [],
                            i = w(e.replace(G, "$1"));
                        return i[F] ? j(function(e, t, n, r) {
                            for (var s, a = i(e, null, r, []), o = e.length; o--;)(s = a[o]) && (e[o] = !(t[o] = s))
                        }) : function(e, r, s) {
                            return t[0] = e, i(t, null, s, n), !n.pop()
                        }
                    }),
                    has: j(function(e) {
                        return function(t) {
                            return n(e, t).length > 0
                        }
                    }),
                    contains: j(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                        }
                    }),
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
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    empty: function(e) {
                        var t;
                        for (e = e.firstChild; e;) {
                            if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t) return !1;
                            e = e.nextSibling
                        }
                        return !0
                    },
                    header: function(e) {
                        return rt.test(e.nodeName)
                    },
                    text: function(e) {
                        var t, n;
                        return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (n = e.getAttribute("type")) || n.toLowerCase() === t)
                    },
                    radio: i("radio"),
                    checkbox: i("checkbox"),
                    file: i("file"),
                    password: i("password"),
                    image: i("image"),
                    submit: r("submit"),
                    reset: r("reset"),
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    input: function(e) {
                        return st.test(e.nodeName)
                    },
                    focus: function(e) {
                        var t = e.ownerDocument;
                        return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    active: function(e) {
                        return e === e.ownerDocument.activeElement
                    },
                    first: s(function() {
                        return [0]
                    }),
                    last: s(function(e, t) {
                        return [t - 1]
                    }),
                    eq: s(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: s(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: s(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: s(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: s(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, k = A.compareDocumentPosition ? function(e, t) {
                return e === t ? (T = !0, 0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1
            } : function(e, t) {
                if (e === t) return T = !0, 0;
                if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                var n, i, r = [],
                    s = [],
                    o = e.parentNode,
                    l = t.parentNode,
                    c = o;
                if (o === l) return a(e, t);
                if (!o) return -1;
                if (!l) return 1;
                for (; c;) r.unshift(c), c = c.parentNode;
                for (c = l; c;) s.unshift(c), c = c.parentNode;
                n = r.length, i = s.length;
                for (var u = 0; n > u && i > u; u++)
                    if (r[u] !== s[u]) return a(r[u], s[u]);
                return u === n ? a(e, s[u], -1) : a(r[u], t, 1)
            }, [0, 0].sort(k), D = !T, n.uniqueSort = function(e) {
                var t, n = [],
                    i = 1,
                    r = 0;
                if (T = D, e.sort(k), T) {
                    for (; t = e[i]; i++) t === e[i - 1] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return e
            }, n.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, w = n.compile = function(e, t) {
                var n, i = [],
                    r = [],
                    s = q[F][e + " "];
                if (!s) {
                    for (t || (t = o(e)), n = t.length; n--;) s = h(t[n]), s[F] ? i.push(s) : r.push(s);
                    s = q(e, p(r, i))
                }
                return s
            }, E.querySelectorAll && ! function() {
                var e, t = g,
                    i = /'|\\/g,
                    r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    s = [":focus"],
                    a = [":active"],
                    l = A.matchesSelector || A.mozMatchesSelector || A.webkitMatchesSelector || A.oMatchesSelector || A.msMatchesSelector;
                lt(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || s.push("\\[" + z + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || s.push(":checked")
                }), lt(function(e) {
                    e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && s.push("[*^$]=" + z + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || s.push(":enabled", ":disabled")
                }), s = new RegExp(s.join("|")), g = function(e, n, r, a, l) {
                    if (!a && !l && !s.test(e)) {
                        var c, u, d = !0,
                            h = F,
                            p = n,
                            f = 9 === n.nodeType && e;
                        if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                            for (c = o(e), (d = n.getAttribute("id")) ? h = d.replace(i, "\\$&") : n.setAttribute("id", h), h = "[id='" + h + "'] ", u = c.length; u--;) c[u] = h + c[u].join("");
                            p = it.test(e) && n.parentNode || n, f = c.join(",")
                        }
                        if (f) try {
                            return $.apply(r, O.call(p.querySelectorAll(f), 0)), r
                        } catch (g) {} finally {
                            d || n.removeAttribute("id")
                        }
                    }
                    return t(e, n, r, a, l)
                }, l && (lt(function(t) {
                    e = l.call(t, "div");
                    try {
                        l.call(t, "[test!='']:sizzle"), a.push("!=", Q)
                    } catch (n) {}
                }), a = new RegExp(a.join("|")), n.matchesSelector = function(t, i) {
                    if (i = i.replace(r, "='$1']"), !_(t) && !a.test(i) && !s.test(i)) try {
                        var o = l.call(t, i);
                        if (o || e || t.document && 11 !== t.document.nodeType) return o
                    } catch (c) {}
                    return n(i, null, null, [t]).length > 0
                })
            }(), b.pseudos.nth = b.pseudos.eq, b.filters = m.prototype = b.pseudos, b.setFilters = new m, n.attr = J.attr, J.find = n, J.expr = n.selectors, J.expr[":"] = J.expr.pseudos, J.unique = n.uniqueSort, J.text = n.getText, J.isXMLDoc = n.isXML, J.contains = n.contains
        }(e);
    var Nt = /Until$/,
        Lt = /^(?:parents|prev(?:Until|All))/,
        $t = /^.[^:#\[\.,]*$/,
        Ot = J.expr.match.needsContext,
        Bt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    J.fn.extend({
        find: function(e) {
            var t, n, i, r, s, a, o = this;
            if ("string" != typeof e) return J(e).filter(function() {
                for (t = 0, n = o.length; n > t; t++)
                    if (J.contains(o[t], this)) return !0
            });
            for (a = this.pushStack("", "find", e), t = 0, n = this.length; n > t; t++)
                if (i = a.length, J.find(e, this[t], a), t > 0)
                    for (r = i; r < a.length; r++)
                        for (s = 0; i > s; s++)
                            if (a[s] === a[r]) {
                                a.splice(r--, 1);
                                break
                            }
            return a
        },
        has: function(e) {
            var t, n = J(e, this),
                i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++)
                    if (J.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(c(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(c(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? Ot.test(e) ? J(e, this.context).index(this[0]) >= 0 : J.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, s = [], a = Ot.test(e) || "string" != typeof e ? J(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                    if (a ? a.index(n) > -1 : J.find.matchesSelector(n, e)) {
                        s.push(n);
                        break
                    }
                    n = n.parentNode
                }
            return s = s.length > 1 ? J.unique(s) : s, this.pushStack(s, "closest", e)
        },
        index: function(e) {
            return e ? "string" == typeof e ? J.inArray(this[0], J(e)) : J.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? J(e, t) : J.makeArray(e && e.nodeType ? [e] : e),
                i = J.merge(this.get(), n);
            return this.pushStack(o(n[0]) || o(i[0]) ? i : J.unique(i))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), J.fn.andSelf = J.fn.addBack, J.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return J.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return J.dir(e, "parentNode", n)
        },
        next: function(e) {
            return l(e, "nextSibling")
        },
        prev: function(e) {
            return l(e, "previousSibling")
        },
        nextAll: function(e) {
            return J.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return J.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return J.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return J.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return J.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return J.sibling(e.firstChild)
        },
        contents: function(e) {
            return J.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : J.merge([], e.childNodes)
        }
    }, function(e, t) {
        J.fn[e] = function(n, i) {
            var r = J.map(this, t, n);
            return Nt.test(e) || (i = n), i && "string" == typeof i && (r = J.filter(i, r)), r = this.length > 1 && !Bt[e] ? J.unique(r) : r, this.length > 1 && Lt.test(e) && (r = r.reverse()), this.pushStack(r, e, X.call(arguments).join(","))
        }
    }), J.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? J.find.matchesSelector(t[0], e) ? [t[0]] : [] : J.find.matches(e, t)
        },
        dir: function(e, n, i) {
            for (var r = [], s = e[n]; s && 9 !== s.nodeType && (i === t || 1 !== s.nodeType || !J(s).is(i));) 1 === s.nodeType && r.push(s), s = s[n];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var jt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Rt = / jQuery\d+="(?:null|\d+)"/g,
        Ht = /^\s+/,
        Wt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        qt = /<([\w:]+)/,
        zt = /<tbody/i,
        Ut = /<|&#?\w+;/,
        Yt = /<(?:script|style|link)/i,
        Xt = /<(?:script|object|embed|option|style)/i,
        Kt = new RegExp("<(?:" + jt + ")[\\s/>]", "i"),
        Qt = /^(?:checkbox|radio)$/,
        Vt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Gt = /\/(java|ecma)script/i,
        Jt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        Zt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        en = u(H),
        tn = en.appendChild(H.createElement("div"));
    Zt.optgroup = Zt.option, Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead, Zt.th = Zt.td, J.support.htmlSerialize || (Zt._default = [1, "X<div>", "</div>"]), J.fn.extend({
            text: function(e) {
                return J.access(this, function(e) {
                    return e === t ? J.text(this) : this.empty().append((this[0] && this[0].ownerDocument || H).createTextNode(e))
                }, null, e, arguments.length)
            },
            wrapAll: function(e) {
                if (J.isFunction(e)) return this.each(function(t) {
                    J(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = J(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return this.each(J.isFunction(e) ? function(t) {
                    J(this).wrapInner(e.call(this, t))
                } : function() {
                    var t = J(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = J.isFunction(e);
                return this.each(function(n) {
                    J(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(e) {
                    (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(e) {
                    (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild)
                })
            },
            before: function() {
                if (!o(this[0])) return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this)
                });
                if (arguments.length) {
                    var e = J.clean(arguments);
                    return this.pushStack(J.merge(e, this), "before", this.selector)
                }
            },
            after: function() {
                if (!o(this[0])) return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
                if (arguments.length) {
                    var e = J.clean(arguments);
                    return this.pushStack(J.merge(this, e), "after", this.selector)
                }
            },
            remove: function(e, t) {
                for (var n, i = 0; null != (n = this[i]); i++)(!e || J.filter(e, [n]).length) && (t || 1 !== n.nodeType || (J.cleanData(n.getElementsByTagName("*")), J.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    for (1 === e.nodeType && J.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return J.clone(this, e, t)
                })
            },
            html: function(e) {
                return J.access(this, function(e) {
                    var n = this[0] || {},
                        i = 0,
                        r = this.length;
                    if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Rt, "") : t;
                    if (!("string" != typeof e || Yt.test(e) || !J.support.htmlSerialize && Kt.test(e) || !J.support.leadingWhitespace && Ht.test(e) || Zt[(qt.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(Wt, "<$1></$2>");
                        try {
                            for (; r > i; i++) n = this[i] || {}, 1 === n.nodeType && (J.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                            n = 0
                        } catch (s) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function(e) {
                return o(this[0]) ? this.length ? this.pushStack(J(J.isFunction(e) ? e() : e), "replaceWith", e) : this : J.isFunction(e) ? this.each(function(t) {
                    var n = J(this),
                        i = n.html();
                    n.replaceWith(e.call(this, t, i))
                }) : ("string" != typeof e && (e = J(e).detach()), this.each(function() {
                    var t = this.nextSibling,
                        n = this.parentNode;
                    J(this).remove(), t ? J(t).before(e) : J(n).append(e)
                }))
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, n, i) {
                e = [].concat.apply([], e);
                var r, s, a, o, l = 0,
                    c = e[0],
                    u = [],
                    h = this.length;
                if (!J.support.checkClone && h > 1 && "string" == typeof c && Vt.test(c)) return this.each(function() {
                    J(this).domManip(e, n, i)
                });
                if (J.isFunction(c)) return this.each(function(r) {
                    var s = J(this);
                    e[0] = c.call(this, r, n ? s.html() : t), s.domManip(e, n, i)
                });
                if (this[0]) {
                    if (r = J.buildFragment(e, this, u), a = r.fragment, s = a.firstChild, 1 === a.childNodes.length && (a = s), s)
                        for (n = n && J.nodeName(s, "tr"), o = r.cacheable || h - 1; h > l; l++) i.call(n && J.nodeName(this[l], "table") ? d(this[l], "tbody") : this[l], l === o ? a : J.clone(a, !0, !0));
                    a = s = null, u.length && J.each(u, function(e, t) {
                        t.src ? J.ajax ? J.ajax({
                            url: t.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : J.error("no ajax") : J.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Jt, "")), t.parentNode && t.parentNode.removeChild(t)
                    })
                }
                return this
            }
        }), J.buildFragment = function(e, n, i) {
            var r, s, a, o = e[0];
            return n = n || H, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, !(1 === e.length && "string" == typeof o && o.length < 512 && n === H && "<" === o.charAt(0)) || Xt.test(o) || !J.support.checkClone && Vt.test(o) || !J.support.html5Clone && Kt.test(o) || (s = !0, r = J.fragments[o], a = r !== t), r || (r = n.createDocumentFragment(), J.clean(e, n, r, i), s && (J.fragments[o] = a && r)), {
                fragment: r,
                cacheable: s
            }
        }, J.fragments = {}, J.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            J.fn[e] = function(n) {
                var i, r = 0,
                    s = [],
                    a = J(n),
                    o = a.length,
                    l = 1 === this.length && this[0].parentNode;
                if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === o) return a[t](this[0]), this;
                for (; o > r; r++) i = (r > 0 ? this.clone(!0) : this).get(), J(a[r])[t](i), s = s.concat(i);
                return this.pushStack(s, e, a.selector)
            }
        }), J.extend({
            clone: function(e, t, n) {
                var i, r, s, a;
                if (J.support.html5Clone || J.isXMLDoc(e) || !Kt.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (tn.innerHTML = e.outerHTML, tn.removeChild(a = tn.firstChild)), !(J.support.noCloneEvent && J.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || J.isXMLDoc(e)))
                    for (p(e, a), i = f(e), r = f(a), s = 0; i[s]; ++s) r[s] && p(i[s], r[s]);
                if (t && (h(e, a), n))
                    for (i = f(e), r = f(a), s = 0; i[s]; ++s) h(i[s], r[s]);
                return i = r = null, a
            },
            clean: function(e, t, n, i) {
                var r, s, a, o, l, c, d, h, p, f, m, v = t === H && en,
                    y = [];
                for (t && "undefined" != typeof t.createDocumentFragment || (t = H), r = 0; null != (a = e[r]); r++)
                    if ("number" == typeof a && (a += ""), a) {
                        if ("string" == typeof a)
                            if (Ut.test(a)) {
                                for (v = v || u(t), d = t.createElement("div"), v.appendChild(d), a = a.replace(Wt, "<$1></$2>"), o = (qt.exec(a) || ["", ""])[1].toLowerCase(), l = Zt[o] || Zt._default, c = l[0], d.innerHTML = l[1] + a + l[2]; c--;) d = d.lastChild;
                                if (!J.support.tbody)
                                    for (h = zt.test(a), p = "table" !== o || h ? "<table>" !== l[1] || h ? [] : d.childNodes : d.firstChild && d.firstChild.childNodes, s = p.length - 1; s >= 0; --s) J.nodeName(p[s], "tbody") && !p[s].childNodes.length && p[s].parentNode.removeChild(p[s]);
                                !J.support.leadingWhitespace && Ht.test(a) && d.insertBefore(t.createTextNode(Ht.exec(a)[0]), d.firstChild), a = d.childNodes, d.parentNode.removeChild(d)
                            } else a = t.createTextNode(a);
                        a.nodeType ? y.push(a) : J.merge(y, a)
                    }
                if (d && (a = d = v = null), !J.support.appendChecked)
                    for (r = 0; null != (a = y[r]); r++) J.nodeName(a, "input") ? g(a) : "undefined" != typeof a.getElementsByTagName && J.grep(a.getElementsByTagName("input"), g);
                if (n)
                    for (f = function(e) {
                            return !e.type || Gt.test(e.type) ? i ? i.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e) : void 0
                        }, r = 0; null != (a = y[r]); r++) J.nodeName(a, "script") && f(a) || (n.appendChild(a), "undefined" != typeof a.getElementsByTagName && (m = J.grep(J.merge([], a.getElementsByTagName("script")), f), y.splice.apply(y, [r + 1, 0].concat(m)), r += m.length));
                return y
            },
            cleanData: function(e, t) {
                for (var n, i, r, s, a = 0, o = J.expando, l = J.cache, c = J.support.deleteExpando, u = J.event.special; null != (r = e[a]); a++)
                    if ((t || J.acceptData(r)) && (i = r[o], n = i && l[i])) {
                        if (n.events)
                            for (s in n.events) u[s] ? J.event.remove(r, s) : J.removeEvent(r, s, n.handle);
                        l[i] && (delete l[i], c ? delete r[o] : r.removeAttribute ? r.removeAttribute(o) : r[o] = null, J.deletedIds.push(i))
                    }
            }
        }),
        function() {
            var e, t;
            J.uaMatch = function(e) {
                e = e.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            }, e = J.uaMatch(q.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), J.browser = t, J.sub = function() {
                function e(t, n) {
                    return new e.fn.init(t, n)
                }
                J.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, i) {
                    return i && i instanceof J && !(i instanceof e) && (i = e(i)), J.fn.init.call(this, n, i, t)
                }, e.fn.init.prototype = e.fn;
                var t = e(H);
                return e
            }
        }();
    var nn, rn, sn, an = /alpha\([^)]*\)/i,
        on = /opacity=([^)]*)/,
        ln = /^(top|right|bottom|left)$/,
        cn = /^(none|table(?!-c[ea]).+)/,
        un = /^margin/,
        dn = new RegExp("^(" + Z + ")(.*)$", "i"),
        hn = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
        pn = new RegExp("^([-+])=(" + Z + ")", "i"),
        fn = {
            BODY: "block"
        },
        gn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        mn = {
            letterSpacing: 0,
            fontWeight: 400
        },
        vn = ["Top", "Right", "Bottom", "Left"],
        yn = ["Webkit", "O", "Moz", "ms"],
        bn = J.fn.toggle;
    J.fn.extend({
        css: function(e, n) {
            return J.access(this, function(e, n, i) {
                return i !== t ? J.style(e, n, i) : J.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return y(this, !0)
        },
        hide: function() {
            return y(this)
        },
        toggle: function(e, t) {
            var n = "boolean" == typeof e;
            return J.isFunction(e) && J.isFunction(t) ? bn.apply(this, arguments) : this.each(function() {
                (n ? e : v(this)) ? J(this).show(): J(this).hide()
            })
        }
    }), J.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = nn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": J.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, i, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s, a, o, l = J.camelCase(n),
                    c = e.style;
                if (n = J.cssProps[l] || (J.cssProps[l] = m(c, l)), o = J.cssHooks[n] || J.cssHooks[l], i === t) return o && "get" in o && (s = o.get(e, !1, r)) !== t ? s : c[n];
                if (a = typeof i, "string" === a && (s = pn.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(J.css(e, n)), a = "number"), !(null == i || "number" === a && isNaN(i) || ("number" !== a || J.cssNumber[l] || (i += "px"), o && "set" in o && (i = o.set(e, i, r)) === t))) try {
                    c[n] = i
                } catch (u) {}
            }
        },
        css: function(e, n, i, r) {
            var s, a, o, l = J.camelCase(n);
            return n = J.cssProps[l] || (J.cssProps[l] = m(e.style, l)), o = J.cssHooks[n] || J.cssHooks[l], o && "get" in o && (s = o.get(e, !0, r)), s === t && (s = nn(e, n)), "normal" === s && n in mn && (s = mn[n]), i || r !== t ? (a = parseFloat(s), i || J.isNumeric(a) ? a || 0 : s) : s
        },
        swap: function(e, t, n) {
            var i, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            i = n.call(e);
            for (r in t) e.style[r] = s[r];
            return i
        }
    }), e.getComputedStyle ? nn = function(t, n) {
        var i, r, s, a, o = e.getComputedStyle(t, null),
            l = t.style;
        return o && (i = o.getPropertyValue(n) || o[n], "" !== i || J.contains(t.ownerDocument, t) || (i = J.style(t, n)), hn.test(i) && un.test(n) && (r = l.width, s = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = i, i = o.width, l.width = r, l.minWidth = s, l.maxWidth = a)), i
    } : H.documentElement.currentStyle && (nn = function(e, t) {
        var n, i, r = e.currentStyle && e.currentStyle[t],
            s = e.style;
        return null == r && s && s[t] && (r = s[t]), hn.test(r) && !ln.test(t) && (n = s.left, i = e.runtimeStyle && e.runtimeStyle.left, i && (e.runtimeStyle.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : r, r = s.pixelLeft + "px", s.left = n, i && (e.runtimeStyle.left = i)), "" === r ? "auto" : r
    }), J.each(["height", "width"], function(e, t) {
        J.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? 0 === e.offsetWidth && cn.test(nn(e, "display")) ? J.swap(e, gn, function() {
                    return _(e, t, i)
                }) : _(e, t, i) : void 0
            },
            set: function(e, n, i) {
                return b(e, n, i ? x(e, t, i, J.support.boxSizing && "border-box" === J.css(e, "boxSizing")) : 0)
            }
        }
    }), J.support.opacity || (J.cssHooks.opacity = {
        get: function(e, t) {
            return on.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                r = J.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                s = i && i.filter || n.filter || "";
            n.zoom = 1, t >= 1 && "" === J.trim(s.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), i && !i.filter) || (n.filter = an.test(s) ? s.replace(an, r) : s + " " + r)
        }
    }), J(function() {
        J.support.reliableMarginRight || (J.cssHooks.marginRight = {
            get: function(e, t) {
                return J.swap(e, {
                    display: "inline-block"
                }, function() {
                    return t ? nn(e, "marginRight") : void 0
                })
            }
        }), !J.support.pixelPosition && J.fn.position && J.each(["top", "left"], function(e, t) {
            J.cssHooks[t] = {
                get: function(e, n) {
                    if (n) {
                        var i = nn(e, t);
                        return hn.test(i) ? J(e).position()[t] + "px" : i
                    }
                }
            }
        })
    }), J.expr && J.expr.filters && (J.expr.filters.hidden = function(e) {
        return 0 === e.offsetWidth && 0 === e.offsetHeight || !J.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || nn(e, "display"))
    }, J.expr.filters.visible = function(e) {
        return !J.expr.filters.hidden(e)
    }), J.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        J.cssHooks[e + t] = {
            expand: function(n) {
                var i, r = "string" == typeof n ? n.split(" ") : [n],
                    s = {};
                for (i = 0; 4 > i; i++) s[e + vn[i] + t] = r[i] || r[i - 2] || r[0];
                return s
            }
        }, un.test(e) || (J.cssHooks[e + t].set = b)
    });
    var xn = /%20/g,
        _n = /\[\]$/,
        Cn = /\r?\n/g,
        wn = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        kn = /^(?:select|textarea)/i;
    J.fn.extend({
        serialize: function() {
            return J.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? J.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || kn.test(this.nodeName) || wn.test(this.type))
            }).map(function(e, t) {
                var n = J(this).val();
                return null == n ? null : J.isArray(n) ? J.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Cn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Cn, "\r\n")
                }
            }).get()
        }
    }), J.param = function(e, n) {
        var i, r = [],
            s = function(e, t) {
                t = J.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(e) || e.jquery && !J.isPlainObject(e)) J.each(e, function() {
            s(this.name, this.value)
        });
        else
            for (i in e) w(i, e[i], n, s);
        return r.join("&").replace(xn, "+")
    };
    var Tn, Sn, Dn = /#.*$/,
        Pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Fn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        In = /^(?:GET|HEAD)$/,
        En = /^\/\//,
        An = /\?/,
        Mn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Nn = /([?&])_=[^&]*/,
        Ln = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        $n = J.fn.load,
        On = {},
        Bn = {},
        jn = ["*/"] + ["*"];
    try {
        Sn = W.href
    } catch (Rn) {
        Sn = H.createElement("a"), Sn.href = "", Sn = Sn.href
    }
    Tn = Ln.exec(Sn.toLowerCase()) || [], J.fn.load = function(e, n, i) {
        if ("string" != typeof e && $n) return $n.apply(this, arguments);
        if (!this.length) return this;
        var r, s, a, o = this,
            l = e.indexOf(" ");
        return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)), J.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (s = "POST"), J.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n,
            complete: function(e, t) {
                i && o.each(i, a || [e.responseText, t, e])
            }
        }).done(function(e) {
            a = arguments, o.html(r ? J("<div>").append(e.replace(Mn, "")).find(r) : e)
        }), this
    }, J.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        J.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), J.each(["get", "post"], function(e, n) {
        J[n] = function(e, i, r, s) {
            return J.isFunction(i) && (s = s || r, r = i, i = t), J.ajax({
                type: n,
                url: e,
                data: i,
                success: r,
                dataType: s
            })
        }
    }), J.extend({
        getScript: function(e, n) {
            return J.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return J.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? S(e, J.ajaxSettings) : (t = e, e = J.ajaxSettings), S(e, t), e
        },
        ajaxSettings: {
            url: Sn,
            isLocal: Fn.test(Tn[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": jn
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": J.parseJSON,
                "text xml": J.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: k(On),
        ajaxTransport: k(Bn),
        ajax: function(e, n) {
            function i(e, n, i, a) {
                var c, d, y, b, _, w = n;
                2 !== x && (x = 2, l && clearTimeout(l), o = t, s = a || "", C.readyState = e > 0 ? 4 : 0, i && (b = D(h, C, i)), e >= 200 && 300 > e || 304 === e ? (h.ifModified && (_ = C.getResponseHeader("Last-Modified"), _ && (J.lastModified[r] = _), _ = C.getResponseHeader("Etag"), _ && (J.etag[r] = _)), 304 === e ? (w = "notmodified", c = !0) : (c = P(h, b), w = c.state, d = c.data, y = c.error, c = !y)) : (y = w, (!w || e) && (w = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || w) + "", c ? g.resolveWith(p, [d, w, C]) : g.rejectWith(p, [C, w, y]), C.statusCode(v), v = t, u && f.trigger("ajax" + (c ? "Success" : "Error"), [C, h, c ? d : y]), m.fireWith(p, [C, w]), u && (f.trigger("ajaxComplete", [C, h]), --J.active || J.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, s, a, o, l, c, u, d, h = J.ajaxSetup({}, n),
                p = h.context || h,
                f = p !== h && (p.nodeType || p instanceof J) ? J(p) : J.event,
                g = J.Deferred(),
                m = J.Callbacks("once memory"),
                v = h.statusCode || {},
                y = {},
                b = {},
                x = 0,
                _ = "canceled",
                C = {
                    readyState: 0,
                    setRequestHeader: function(e, t) {
                        if (!x) {
                            var n = e.toLowerCase();
                            e = b[n] = b[n] || e, y[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? s : null
                    },
                    getResponseHeader: function(e) {
                        var n;
                        if (2 === x) {
                            if (!a)
                                for (a = {}; n = Pn.exec(s);) a[n[1].toLowerCase()] = n[2];
                            n = a[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function(e) {
                        return x || (h.mimeType = e), this
                    },
                    abort: function(e) {
                        return e = e || _, o && o.abort(e), i(0, e), this
                    }
                };
            if (g.promise(C), C.success = C.done, C.error = C.fail, C.complete = m.add, C.statusCode = function(e) {
                    if (e) {
                        var t;
                        if (2 > x)
                            for (t in e) v[t] = [v[t], e[t]];
                        else t = e[C.status], C.always(t)
                    }
                    return this
                }, h.url = ((e || h.url) + "").replace(Dn, "").replace(En, Tn[1] + "//"), h.dataTypes = J.trim(h.dataType || "*").toLowerCase().split(tt), null == h.crossDomain && (c = Ln.exec(h.url.toLowerCase()), h.crossDomain = !(!c || c[1] === Tn[1] && c[2] === Tn[2] && (c[3] || ("http:" === c[1] ? 80 : 443)) == (Tn[3] || ("http:" === Tn[1] ? 80 : 443)))), h.data && h.processData && "string" != typeof h.data && (h.data = J.param(h.data, h.traditional)), T(On, h, n, C), 2 === x) return C;
            if (u = h.global, h.type = h.type.toUpperCase(), h.hasContent = !In.test(h.type), u && 0 === J.active++ && J.event.trigger("ajaxStart"), !h.hasContent && (h.data && (h.url += (An.test(h.url) ? "&" : "?") + h.data, delete h.data), r = h.url, h.cache === !1)) {
                var w = J.now(),
                    k = h.url.replace(Nn, "$1_=" + w);
                h.url = k + (k === h.url ? (An.test(h.url) ? "&" : "?") + "_=" + w : "")
            }(h.data && h.hasContent && h.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), h.ifModified && (r = r || h.url, J.lastModified[r] && C.setRequestHeader("If-Modified-Since", J.lastModified[r]), J.etag[r] && C.setRequestHeader("If-None-Match", J.etag[r])), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + jn + "; q=0.01" : "") : h.accepts["*"]);
            for (d in h.headers) C.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (h.beforeSend.call(p, C, h) === !1 || 2 === x)) return C.abort();
            _ = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) C[d](h[d]);
            if (o = T(Bn, h, n, C)) {
                C.readyState = 1, u && f.trigger("ajaxSend", [C, h]), h.async && h.timeout > 0 && (l = setTimeout(function() {
                    C.abort("timeout")
                }, h.timeout));
                try {
                    x = 1, o.send(y, i)
                } catch (S) {
                    if (!(2 > x)) throw S;
                    i(-1, S)
                }
            } else i(-1, "No Transport");
            return C
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Hn = [],
        Wn = /\?/,
        qn = /(=)\?(?=&|$)|\?\?/,
        zn = J.now();
    J.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Hn.pop() || J.expando + "_" + zn++;
            return this[e] = !0, e
        }
    }), J.ajaxPrefilter("json jsonp", function(n, i, r) {
        var s, a, o, l = n.data,
            c = n.url,
            u = n.jsonp !== !1,
            d = u && qn.test(c),
            h = u && !d && "string" == typeof l && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && qn.test(l);
        return "jsonp" === n.dataTypes[0] || d || h ? (s = n.jsonpCallback = J.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a = e[s], d ? n.url = c.replace(qn, "$1" + s) : h ? n.data = l.replace(qn, "$1" + s) : u && (n.url += (Wn.test(c) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
            return o || J.error(s + " was not called"), o[0]
        }, n.dataTypes[0] = "json", e[s] = function() {
            o = arguments
        }, r.always(function() {
            e[s] = a, n[s] && (n.jsonpCallback = i.jsonpCallback, Hn.push(s)), o && J.isFunction(a) && a(o[0]), o = a = t
        }), "script") : void 0
    }), J.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return J.globalEval(e), e
            }
        }
    }), J.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), J.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, i = H.head || H.getElementsByTagName("head")[0] || H.documentElement;
            return {
                send: function(r, s) {
                    n = H.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, r) {
                        (r || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, i && n.parentNode && i.removeChild(n), n = t, r || s(200, "success"))
                    }, i.insertBefore(n, i.firstChild)
                },
                abort: function() {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var Un, Yn = e.ActiveXObject ? function() {
            for (var e in Un) Un[e](0, 1)
        } : !1,
        Xn = 0;
    J.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return !this.isLocal && F() || I()
        } : F,
        function(e) {
            J.extend(J.support, {
                ajax: !!e,
                cors: !!e && "withCredentials" in e
            })
        }(J.ajaxSettings.xhr()), J.support.ajax && J.ajaxTransport(function(n) {
            if (!n.crossDomain || J.support.cors) {
                var i;
                return {
                    send: function(r, s) {
                        var a, o, l = n.xhr();
                        if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                            for (o in n.xhrFields) l[o] = n.xhrFields[o];
                        n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (o in r) l.setRequestHeader(o, r[o])
                        } catch (c) {}
                        l.send(n.hasContent && n.data || null), i = function(e, r) {
                            var o, c, u, d, h;
                            try {
                                if (i && (r || 4 === l.readyState))
                                    if (i = t, a && (l.onreadystatechange = J.noop, Yn && delete Un[a]), r) 4 !== l.readyState && l.abort();
                                    else {
                                        o = l.status, u = l.getAllResponseHeaders(), d = {}, h = l.responseXML, h && h.documentElement && (d.xml = h);
                                        try {
                                            d.text = l.responseText
                                        } catch (p) {}
                                        try {
                                            c = l.statusText
                                        } catch (p) {
                                            c = ""
                                        }
                                        o || !n.isLocal || n.crossDomain ? 1223 === o && (o = 204) : o = d.text ? 200 : 404
                                    }
                            } catch (f) {
                                r || s(-1, f)
                            }
                            d && s(o, c, d, u)
                        }, n.async ? 4 === l.readyState ? setTimeout(i, 0) : (a = ++Xn, Yn && (Un || (Un = {}, J(e).unload(Yn)), Un[a] = i), l.onreadystatechange = i) : i()
                    },
                    abort: function() {
                        i && i(0, 1)
                    }
                }
            }
        });
    var Kn, Qn, Vn = /^(?:toggle|show|hide)$/,
        Gn = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"),
        Jn = /queueHooks$/,
        Zn = [L],
        ei = {
            "*": [function(e, t) {
                var n, i, r = this.createTween(e, t),
                    s = Gn.exec(t),
                    a = r.cur(),
                    o = +a || 0,
                    l = 1,
                    c = 20;
                if (s) {
                    if (n = +s[2], i = s[3] || (J.cssNumber[e] ? "" : "px"), "px" !== i && o) {
                        o = J.css(r.elem, e, !0) || n || 1;
                        do l = l || ".5", o /= l, J.style(r.elem, e, o + i); while (l !== (l = r.cur() / a) && 1 !== l && --c)
                    }
                    r.unit = i, r.start = o, r.end = s[1] ? o + (s[1] + 1) * n : n
                }
                return r
            }]
        };
    J.Animation = J.extend(M, {
        tweener: function(e, t) {
            J.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; r > i; i++) n = e[i], ei[n] = ei[n] || [], ei[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Zn.unshift(e) : Zn.push(e)
        }
    }), J.Tween = $, $.prototype = {
        constructor: $,
        init: function(e, t, n, i, r, s) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (J.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = $.propHooks[this.prop];
            return e && e.get ? e.get(this) : $.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = $.propHooks[this.prop];
            return this.pos = t = this.options.duration ? J.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
        }
    }, $.prototype.init.prototype = $.prototype, $.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = J.css(e.elem, e.prop, !1, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                J.fx.step[e.prop] ? J.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop]) ? J.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, J.each(["toggle", "show", "hide"], function(e, t) {
        var n = J.fn[t];
        J.fn[t] = function(i, r, s) {
            return null == i || "boolean" == typeof i || !e && J.isFunction(i) && J.isFunction(r) ? n.apply(this, arguments) : this.animate(O(t, !0), i, r, s)
        }
    }), J.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(v).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var r = J.isEmptyObject(e),
                s = J.speed(t, n, i),
                a = function() {
                    var t = M(this, J.extend({}, e), s);
                    r && t.stop(!0)
                };
            return r || s.queue === !1 ? this.each(a) : this.queue(s.queue, a)
        },
        stop: function(e, n, i) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(i)
            };
            return "string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    s = J.timers,
                    a = J._data(this);
                if (n) a[n] && a[n].stop && r(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && Jn.test(n) && r(a[n]);
                for (n = s.length; n--;) s[n].elem !== this || null != e && s[n].queue !== e || (s[n].anim.stop(i), t = !1, s.splice(n, 1));
                (t || !i) && J.dequeue(this, e)
            })
        }
    }), J.each({
        slideDown: O("show"),
        slideUp: O("hide"),
        slideToggle: O("toggle"),
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
        J.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), J.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? J.extend({}, e) : {
            complete: n || !n && t || J.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !J.isFunction(t) && t
        };
        return i.duration = J.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in J.fx.speeds ? J.fx.speeds[i.duration] : J.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            J.isFunction(i.old) && i.old.call(this), i.queue && J.dequeue(this, i.queue)
        }, i
    }, J.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, J.timers = [], J.fx = $.prototype.init, J.fx.tick = function() {
        var e, n = J.timers,
            i = 0;
        for (Kn = J.now(); i < n.length; i++) e = n[i], e() || n[i] !== e || n.splice(i--, 1);
        n.length || J.fx.stop(), Kn = t
    }, J.fx.timer = function(e) {
        e() && J.timers.push(e) && !Qn && (Qn = setInterval(J.fx.tick, J.fx.interval))
    }, J.fx.interval = 13, J.fx.stop = function() {
        clearInterval(Qn), Qn = null
    }, J.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, J.fx.step = {}, J.expr && J.expr.filters && (J.expr.filters.animated = function(e) {
        return J.grep(J.timers, function(t) {
            return e === t.elem
        }).length
    });
    var ti = /^(?:body|html)$/i;
    J.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            J.offset.setOffset(this, e, t)
        });
        var n, i, r, s, a, o, l, c = {
                top: 0,
                left: 0
            },
            u = this[0],
            d = u && u.ownerDocument;
        if (d) return (i = d.body) === u ? J.offset.bodyOffset(u) : (n = d.documentElement, J.contains(n, u) ? ("undefined" != typeof u.getBoundingClientRect && (c = u.getBoundingClientRect()), r = B(d), s = n.clientTop || i.clientTop || 0, a = n.clientLeft || i.clientLeft || 0, o = r.pageYOffset || n.scrollTop, l = r.pageXOffset || n.scrollLeft, {
            top: c.top + o - s,
            left: c.left + l - a
        }) : c)
    }, J.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return J.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(J.css(e, "marginTop")) || 0, n += parseFloat(J.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var i = J.css(e, "position");
            "static" === i && (e.style.position = "relative");
            var r, s, a = J(e),
                o = a.offset(),
                l = J.css(e, "top"),
                c = J.css(e, "left"),
                u = ("absolute" === i || "fixed" === i) && J.inArray("auto", [l, c]) > -1,
                d = {},
                h = {};
            u ? (h = a.position(), r = h.top, s = h.left) : (r = parseFloat(l) || 0, s = parseFloat(c) || 0), J.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (d.top = t.top - o.top + r), null != t.left && (d.left = t.left - o.left + s), "using" in t ? t.using.call(e, d) : a.css(d)
        }
    }, J.fn.extend({
        position: function() {
            if (this[0]) {
                var e = this[0],
                    t = this.offsetParent(),
                    n = this.offset(),
                    i = ti.test(t[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : t.offset();
                return n.top -= parseFloat(J.css(e, "marginTop")) || 0, n.left -= parseFloat(J.css(e, "marginLeft")) || 0, i.top += parseFloat(J.css(t[0], "borderTopWidth")) || 0, i.left += parseFloat(J.css(t[0], "borderLeftWidth")) || 0, {
                    top: n.top - i.top,
                    left: n.left - i.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || H.body; e && !ti.test(e.nodeName) && "static" === J.css(e, "position");) e = e.offsetParent;
                return e || H.body
            })
        }
    }), J.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var i = /Y/.test(n);
        J.fn[e] = function(r) {
            return J.access(this, function(e, r, s) {
                var a = B(e);
                return s === t ? a ? n in a ? a[n] : a.document.documentElement[r] : e[r] : void(a ? a.scrollTo(i ? J(a).scrollLeft() : s, i ? s : J(a).scrollTop()) : e[r] = s)
            }, e, r, arguments.length, null)
        }
    }), J.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        J.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(i, r) {
            J.fn[r] = function(r, s) {
                var a = arguments.length && (i || "boolean" != typeof r),
                    o = i || (r === !0 || s === !0 ? "margin" : "border");
                return J.access(this, function(n, i, r) {
                    var s;
                    return J.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : r === t ? J.css(n, i, r, o) : J.style(n, i, r, o)
                }, n, a ? r : t, a, null)
            }
        })
    }), e.jQuery = e.$ = J, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return J
    })
}(window),
function(e, t) {
    var n = function() {
        var t = e._data(document, "events");
        return t && t.click && e.grep(t.click, function(e) {
            return "rails" === e.namespace
        }).length
    };
    n() && e.error("jquery-ujs has already been loaded!");
    var i;
    e.rails = i = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input:file",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function(t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        fire: function(t, n, i) {
            var r = e.Event(n);
            return t.trigger(r, i), r.result !== !1
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(t) {
            return e.ajax(t)
        },
        href: function(e) {
            return e.attr("href")
        },
        handleRemote: function(n) {
            var r, s, a, o, l, c, u, d;
            if (i.fire(n, "ajax:before")) {
                if (o = n.data("cross-domain"), l = o === t ? null : o, c = n.data("with-credentials") || null, u = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, n.is("form")) {
                    r = n.attr("method"), s = n.attr("action"), a = n.serializeArray();
                    var h = n.data("ujs:submit-button");
                    h && (a.push(h), n.data("ujs:submit-button", null))
                } else n.is(i.inputChangeSelector) ? (r = n.data("method"), s = n.data("url"), a = n.serialize(), n.data("params") && (a = a + "&" + n.data("params"))) : (r = n.data("method"), s = i.href(n), a = n.data("params") || null);
                d = {
                    type: r || "GET",
                    data: a,
                    dataType: u,
                    beforeSend: function(e, r) {
                        return r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), i.fire(n, "ajax:beforeSend", [e, r])
                    },
                    success: function(e, t, i) {
                        n.trigger("ajax:success", [e, t, i])
                    },
                    complete: function(e, t) {
                        n.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, i) {
                        n.trigger("ajax:error", [e, t, i])
                    },
                    xhrFields: {
                        withCredentials: c
                    },
                    crossDomain: l
                }, s && (d.url = s);
                var p = i.ajax(d);
                return n.trigger("ajax:send", p), p
            }
            return !1
        },
        handleMethod: function(n) {
            var r = i.href(n),
                s = n.data("method"),
                a = n.attr("target"),
                o = e("meta[name=csrf-token]").attr("content"),
                l = e("meta[name=csrf-param]").attr("content"),
                c = e('<form method="post" action="' + r + '"></form>'),
                u = '<input name="_method" value="' + s + '" type="hidden" />';
            l !== t && o !== t && (u += '<input name="' + l + '" value="' + o + '" type="hidden" />'), a && c.attr("target", a), c.hide().append(u).appendTo("body"), c.submit()
        },
        disableFormElements: function(t) {
            t.find(i.disableSelector).each(function() {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with", t[n]()), t[n](t.data("disable-with")), t.prop("disabled", !0)
            })
        },
        enableFormElements: function(t) {
            t.find(i.enableSelector).each(function() {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")), t.prop("disabled", !1)
            })
        },
        allowAction: function(e) {
            var t, n = e.data("confirm"),
                r = !1;
            return n ? (i.fire(e, "confirm") && (r = i.confirm(n), t = i.fire(e, "confirm:complete", [r])), r && t) : !0
        },
        blankInputs: function(t, n, i) {
            var r, s, a = e(),
                o = n || "input,textarea",
                l = t.find(o);
            return l.each(function() {
                if (r = e(this), s = r.is(":checkbox,:radio") ? r.is(":checked") : r.val(), !s == !i) {
                    if (r.is(":radio") && l.filter('input:radio:checked[name="' + r.attr("name") + '"]').length) return !0;
                    a = a.add(r)
                }
            }), a.length ? a : !1
        },
        nonBlankInputs: function(e, t) {
            return i.blankInputs(e, t, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        callFormSubmitBindings: function(n, i) {
            var r = n.data("events"),
                s = !0;
            return r !== t && r.submit !== t && e.each(r.submit, function(e, t) {
                return "function" == typeof t.handler ? s = t.handler(i) : void 0
            }), s
        },
        disableElement: function(e) {
            e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function(e) {
                return i.stopEverything(e)
            })
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.data("ujs:enable-with", !1)), e.unbind("click.railsDisable")
        }
    }, i.fire(e(document), "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, n) {
        e.crossDomain || i.CSRFProtection(n)
    }), e(document).delegate(i.linkDisableSelector, "ajax:complete", function() {
        i.enableElement(e(this))
    }), e(document).delegate(i.linkClickSelector, "click.rails", function(n) {
        var r = e(this),
            s = r.data("method"),
            a = r.data("params");
        if (!i.allowAction(r)) return i.stopEverything(n);
        if (r.is(i.linkDisableSelector) && i.disableElement(r), r.data("remote") !== t) {
            if (!(!n.metaKey && !n.ctrlKey || s && "GET" !== s || a)) return !0;
            var o = i.handleRemote(r);
            return o === !1 ? i.enableElement(r) : o.error(function() {
                i.enableElement(r)
            }), !1
        }
        return r.data("method") ? (i.handleMethod(r), !1) : void 0
    }), e(document).delegate(i.inputChangeSelector, "change.rails", function(t) {
        var n = e(this);
        return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(t)
    }), e(document).delegate(i.formSubmitSelector, "submit.rails", function(n) {
        var r = e(this),
            s = r.data("remote") !== t,
            a = i.blankInputs(r, i.requiredInputSelector),
            o = i.nonBlankInputs(r, i.fileInputSelector);
        if (!i.allowAction(r)) return i.stopEverything(n);
        if (a && r.attr("novalidate") == t && i.fire(r, "ajax:aborted:required", [a])) return i.stopEverything(n);
        if (s) {
            if (o) {
                setTimeout(function() {
                    i.disableFormElements(r)
                }, 13);
                var l = i.fire(r, "ajax:aborted:file", [o]);
                return l || setTimeout(function() {
                    i.enableFormElements(r)
                }, 13), l
            }
            return !e.support.submitBubbles && e().jquery < "1.7" && i.callFormSubmitBindings(r, n) === !1 ? i.stopEverything(n) : (i.handleRemote(r), !1)
        }
        setTimeout(function() {
            i.disableFormElements(r)
        }, 13)
    }), e(document).delegate(i.formInputClickSelector, "click.rails", function(t) {
        var n = e(this);
        if (!i.allowAction(n)) return i.stopEverything(t);
        var r = n.attr("name"),
            s = r ? {
                name: r,
                value: n.val()
            } : null;
        n.closest("form").data("ujs:submit-button", s)
    }), e(document).delegate(i.formSubmitSelector, "ajax:beforeSend.rails", function(t) {
        this == t.target && i.disableFormElements(e(this))
    }), e(document).delegate(i.formSubmitSelector, "ajax:complete.rails", function(t) {
        this == t.target && i.enableFormElements(e(this))
    }), e(function() {
        csrf_token = e("meta[name=csrf-token]").attr("content"), csrf_param = e("meta[name=csrf-param]").attr("content"), e('form input[name="' + csrf_param + '"]').val(csrf_token)
    }))
}(jQuery),
function(e, t) {
    function n(t, n) {
        var r, s, a, o = t.nodeName.toLowerCase();
        return "area" === o ? (r = t.parentNode, s = r.name, t.href && s && "map" === r.nodeName.toLowerCase() ? (a = e("img[usemap=#" + s + "]")[0], !!a && i(a)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || n : n) && i(t)
    }

    function i(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    var r = 0,
        s = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.10.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        focus: function(t) {
            return function(n, i) {
                return "number" == typeof n ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), i && i.call(t)
                    }, n)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        scrollParent: function() {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(n) {
            if (n !== t) return this.css("zIndex", n);
            if (this.length)
                for (var i, r, s = e(this[0]); s.length && s[0] !== document;) {
                    if (i = s.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (r = parseInt(s.css("zIndex"), 10), !isNaN(r) && 0 !== r)) return r;
                    s = s.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++r)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                s.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(n) {
                return !!e.data(n, t)
            }
        }) : function(t, n, i) {
            return !!e.data(t, i[3])
        },
        focusable: function(t) {
            return n(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var i = e.attr(t, "tabindex"),
                r = isNaN(i);
            return (r || i >= 0) && n(t, !r)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, i) {
        function r(t, n, i, r) {
            return e.each(s, function() {
                n -= parseFloat(e.css(t, "padding" + this)) || 0, i && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), r && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), n
        }
        var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            a = i.toLowerCase(),
            o = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + i] = function(n) {
            return n === t ? o["inner" + i].call(this) : this.each(function() {
                e(this).css(a, r(this, n) + "px")
            })
        }, e.fn["outer" + i] = function(t, n) {
            return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function() {
                e(this).css(a, r(this, t, !0, n) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(n) {
            return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function(t, n, i) {
                var r, s = e.ui[t].prototype;
                for (r in i) s.plugins[r] = s.plugins[r] || [], s.plugins[r].push([n, i[r]])
            },
            call: function(e, t, n) {
                var i, r = e.plugins[t];
                if (r && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
                    for (i = 0; r.length > i; i++) e.options[r[i][0]] && r[i][1].apply(e.element, n)
            }
        },
        hasScroll: function(t, n) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var i = n && "left" === n ? "scrollLeft" : "scrollTop",
                r = !1;
            return t[i] > 0 ? !0 : (t[i] = 1, r = t[i] > 0, t[i] = 0, r)
        }
    })
}(jQuery),
function(e, t) {
    var n = 0,
        i = Array.prototype.slice,
        r = e.cleanData;
    e.cleanData = function(t) {
        for (var n, i = 0; null != (n = t[i]); i++) try {
            e(n).triggerHandler("remove")
        } catch (s) {}
        r(t)
    }, e.widget = function(n, i, r) {
        var s, a, o, l, c = {},
            u = n.split(".")[0];
        n = n.split(".")[1], s = u + "-" + n, r || (r = i, i = e.Widget), e.expr[":"][s.toLowerCase()] = function(t) {
            return !!e.data(t, s)
        }, e[u] = e[u] || {}, a = e[u][n], o = e[u][n] = function(e, n) {
            return this._createWidget ? (arguments.length && this._createWidget(e, n), t) : new o(e, n)
        }, e.extend(o, a, {
            version: r.version,
            _proto: e.extend({}, r),
            _childConstructors: []
        }), l = new i, l.options = e.widget.extend({}, l.options), e.each(r, function(n, r) {
            return e.isFunction(r) ? (c[n] = function() {
                var e = function() {
                        return i.prototype[n].apply(this, arguments)
                    },
                    t = function(e) {
                        return i.prototype[n].apply(this, e)
                    };
                return function() {
                    var n, i = this._super,
                        s = this._superApply;
                    return this._super = e, this._superApply = t, n = r.apply(this, arguments), this._super = i, this._superApply = s, n
                }
            }(), t) : (c[n] = r, t)
        }), o.prototype = e.widget.extend(l, {
            widgetEventPrefix: a ? l.widgetEventPrefix || n : n
        }, c, {
            constructor: o,
            namespace: u,
            widgetName: n,
            widgetFullName: s
        }), a ? (e.each(a._childConstructors, function(t, n) {
            var i = n.prototype;
            e.widget(i.namespace + "." + i.widgetName, o, n._proto)
        }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(n, o)
    }, e.widget.extend = function(n) {
        for (var r, s, a = i.call(arguments, 1), o = 0, l = a.length; l > o; o++)
            for (r in a[o]) s = a[o][r], a[o].hasOwnProperty(r) && s !== t && (n[r] = e.isPlainObject(s) ? e.isPlainObject(n[r]) ? e.widget.extend({}, n[r], s) : e.widget.extend({}, s) : s);
        return n
    }, e.widget.bridge = function(n, r) {
        var s = r.prototype.widgetFullName || n;
        e.fn[n] = function(a) {
            var o = "string" == typeof a,
                l = i.call(arguments, 1),
                c = this;
            return a = !o && l.length ? e.widget.extend.apply(null, [a].concat(l)) : a, this.each(o ? function() {
                var i, r = e.data(this, s);
                return r ? e.isFunction(r[a]) && "_" !== a.charAt(0) ? (i = r[a].apply(r, l), i !== r && i !== t ? (c = i && i.jquery ? c.pushStack(i.get()) : i, !1) : t) : e.error("no such method '" + a + "' for " + n + " widget instance") : e.error("cannot call methods on " + n + " prior to initialization; attempted to call method '" + a + "'")
            } : function() {
                var t = e.data(this, s);
                t ? t.option(a || {})._init() : e.data(this, s, new r(a, this))
            }), c
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, i) {
            i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === i && this.destroy()
                }
            }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(n, i) {
            var r, s, a, o = n;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof n)
                if (o = {}, r = n.split("."), n = r.shift(), r.length) {
                    for (s = o[n] = e.widget.extend({}, this.options[n]), a = 0; r.length - 1 > a; a++) s[r[a]] = s[r[a]] || {}, s = s[r[a]];
                    if (n = r.pop(), 1 === arguments.length) return s[n] === t ? null : s[n];
                    s[n] = i
                } else {
                    if (1 === arguments.length) return this.options[n] === t ? null : this.options[n];
                    o[n] = i
                }
            return this._setOptions(o), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(n, i, r) {
            var s, a = this;
            "boolean" != typeof n && (r = i, i = n, n = !1), r ? (i = s = e(i), this.bindings = this.bindings.add(i)) : (r = i, i = this.element, s = this.widget()), e.each(r, function(r, o) {
                function l() {
                    return n || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : t
                }
                "string" != typeof o && (l.guid = o.guid = o.guid || l.guid || e.guid++);
                var c = r.match(/^(\w+)\s*(.*)$/),
                    u = c[1] + a.eventNamespace,
                    d = c[2];
                d ? s.delegate(d, u, l) : i.bind(u, l)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function n() {
                return ("string" == typeof e ? i[e] : e).apply(i, arguments)
            }
            var i = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, n, i) {
            var r, s, a = this.options[t];
            if (i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent)
                for (r in s) r in n || (n[r] = s[r]);
            return this.element.trigger(n, i), !(e.isFunction(a) && a.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, n) {
        e.Widget.prototype["_" + t] = function(i, r, s) {
            "string" == typeof r && (r = {
                effect: r
            });
            var a, o = r ? r === !0 || "number" == typeof r ? n : r.effect || n : t;
            r = r || {}, "number" == typeof r && (r = {
                duration: r
            }), a = !e.isEmptyObject(r), r.complete = s, r.delay && i.delay(r.delay), a && e.effects && e.effects.effect[o] ? i[t](r) : o !== t && i[o] ? i[o](r.duration, r.easing, s) : i.queue(function(n) {
                e(this)[t](), s && s.call(i[0]), n()
            })
        }
    })
}(jQuery),
function(e) {
    var t = !1;
    e(document).mouseup(function() {
        t = !1
    }), e.widget("ui.mouse", {
        version: "1.10.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(n) {
                return !0 === e.data(n.target, t.widgetName + ".preventClickEvent") ? (e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(n) {
            if (!t) {
                this._mouseStarted && this._mouseUp(n), this._mouseDownEvent = n;
                var i = this,
                    r = 1 === n.which,
                    s = "string" == typeof this.options.cancel && n.target.nodeName ? e(n.target).closest(this.options.cancel).length : !1;
                return r && !s && this._mouseCapture(n) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = this._mouseStart(n) !== !1, !this._mouseStarted) ? (n.preventDefault(), !0) : (!0 === e.data(n.target, this.widgetName + ".preventClickEvent") && e.removeData(n.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return i._mouseMove(e)
                }, this._mouseUpDelegate = function(e) {
                    return i._mouseUp(e)
                }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), n.preventDefault(), t = !0, !0)) : !0
            }
        },
        _mouseMove: function(t) {
            return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function(t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}(jQuery),
function(e, t) {
    function n(e, t, n) {
        return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? n / 100 : 1)]
    }

    function i(t, n) {
        return parseInt(e.css(t, n), 10) || 0
    }

    function r(t) {
        var n = t[0];
        return 9 === n.nodeType ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : e.isWindow(n) ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: t.scrollTop(),
                left: t.scrollLeft()
            }
        } : n.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: n.pageY,
                left: n.pageX
            }
        } : {
            width: t.outerWidth(),
            height: t.outerHeight(),
            offset: t.offset()
        }
    }
    e.ui = e.ui || {};
    var s, a = Math.max,
        o = Math.abs,
        l = Math.round,
        c = /left|center|right/,
        u = /top|center|bottom/,
        d = /[\+\-]\d+(\.[\d]+)?%?/,
        h = /^\w+/,
        p = /%$/,
        f = e.fn.position;
    e.position = {
            scrollbarWidth: function() {
                if (s !== t) return s;
                var n, i, r = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    a = r.children()[0];
                return e("body").append(r), n = a.offsetWidth, r.css("overflow", "scroll"), i = a.offsetWidth, n === i && (i = r[0].clientWidth), r.remove(), s = n - i
            },
            getScrollInfo: function(t) {
                var n = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                    i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                    r = "scroll" === n || "auto" === n && t.width < t.element[0].scrollWidth,
                    s = "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight;
                return {
                    width: s ? e.position.scrollbarWidth() : 0,
                    height: r ? e.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(t) {
                var n = e(t || window),
                    i = e.isWindow(n[0]),
                    r = !!n[0] && 9 === n[0].nodeType;
                return {
                    element: n,
                    isWindow: i,
                    isDocument: r,
                    offset: n.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: n.scrollLeft(),
                    scrollTop: n.scrollTop(),
                    width: i ? n.width() : n.outerWidth(),
                    height: i ? n.height() : n.outerHeight()
                }
            }
        }, e.fn.position = function(t) {
            if (!t || !t.of) return f.apply(this, arguments);
            t = e.extend({}, t);
            var s, p, g, m, v, y, b = e(t.of),
                x = e.position.getWithinInfo(t.within),
                _ = e.position.getScrollInfo(x),
                C = (t.collision || "flip").split(" "),
                w = {};
            return y = r(b), b[0].preventDefault && (t.at = "left top"), p = y.width, g = y.height, m = y.offset, v = e.extend({}, m), e.each(["my", "at"], function() {
                var e, n, i = (t[this] || "").split(" ");
                1 === i.length && (i = c.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = c.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", e = d.exec(i[0]), n = d.exec(i[1]), w[this] = [e ? e[0] : 0, n ? n[0] : 0], t[this] = [h.exec(i[0])[0], h.exec(i[1])[0]]
            }), 1 === C.length && (C[1] = C[0]), "right" === t.at[0] ? v.left += p : "center" === t.at[0] && (v.left += p / 2), "bottom" === t.at[1] ? v.top += g : "center" === t.at[1] && (v.top += g / 2), s = n(w.at, p, g), v.left += s[0], v.top += s[1], this.each(function() {
                var r, c, u = e(this),
                    d = u.outerWidth(),
                    h = u.outerHeight(),
                    f = i(this, "marginLeft"),
                    y = i(this, "marginTop"),
                    k = d + f + i(this, "marginRight") + _.width,
                    T = h + y + i(this, "marginBottom") + _.height,
                    S = e.extend({}, v),
                    D = n(w.my, u.outerWidth(), u.outerHeight());
                "right" === t.my[0] ? S.left -= d : "center" === t.my[0] && (S.left -= d / 2), "bottom" === t.my[1] ? S.top -= h : "center" === t.my[1] && (S.top -= h / 2), S.left += D[0], S.top += D[1], e.support.offsetFractions || (S.left = l(S.left), S.top = l(S.top)), r = {
                    marginLeft: f,
                    marginTop: y
                }, e.each(["left", "top"], function(n, i) {
                    e.ui.position[C[n]] && e.ui.position[C[n]][i](S, {
                        targetWidth: p,
                        targetHeight: g,
                        elemWidth: d,
                        elemHeight: h,
                        collisionPosition: r,
                        collisionWidth: k,
                        collisionHeight: T,
                        offset: [s[0] + D[0], s[1] + D[1]],
                        my: t.my,
                        at: t.at,
                        within: x,
                        elem: u
                    })
                }), t.using && (c = function(e) {
                    var n = m.left - S.left,
                        i = n + p - d,
                        r = m.top - S.top,
                        s = r + g - h,
                        l = {
                            target: {
                                element: b,
                                left: m.left,
                                top: m.top,
                                width: p,
                                height: g
                            },
                            element: {
                                element: u,
                                left: S.left,
                                top: S.top,
                                width: d,
                                height: h
                            },
                            horizontal: 0 > i ? "left" : n > 0 ? "right" : "center",
                            vertical: 0 > s ? "top" : r > 0 ? "bottom" : "middle"
                        };
                    d > p && p > o(n + i) && (l.horizontal = "center"), h > g && g > o(r + s) && (l.vertical = "middle"), l.important = a(o(n), o(i)) > a(o(r), o(s)) ? "horizontal" : "vertical", t.using.call(this, e, l)
                }), u.offset(e.extend(S, {
                    using: c
                }))
            })
        }, e.ui.position = {
            fit: {
                left: function(e, t) {
                    var n, i = t.within,
                        r = i.isWindow ? i.scrollLeft : i.offset.left,
                        s = i.width,
                        o = e.left - t.collisionPosition.marginLeft,
                        l = r - o,
                        c = o + t.collisionWidth - s - r;
                    t.collisionWidth > s ? l > 0 && 0 >= c ? (n = e.left + l + t.collisionWidth - s - r, e.left += l - n) : e.left = c > 0 && 0 >= l ? r : l > c ? r + s - t.collisionWidth : r : l > 0 ? e.left += l : c > 0 ? e.left -= c : e.left = a(e.left - o, e.left)
                },
                top: function(e, t) {
                    var n, i = t.within,
                        r = i.isWindow ? i.scrollTop : i.offset.top,
                        s = t.within.height,
                        o = e.top - t.collisionPosition.marginTop,
                        l = r - o,
                        c = o + t.collisionHeight - s - r;
                    t.collisionHeight > s ? l > 0 && 0 >= c ? (n = e.top + l + t.collisionHeight - s - r, e.top += l - n) : e.top = c > 0 && 0 >= l ? r : l > c ? r + s - t.collisionHeight : r : l > 0 ? e.top += l : c > 0 ? e.top -= c : e.top = a(e.top - o, e.top)
                }
            },
            flip: {
                left: function(e, t) {
                    var n, i, r = t.within,
                        s = r.offset.left + r.scrollLeft,
                        a = r.width,
                        l = r.isWindow ? r.scrollLeft : r.offset.left,
                        c = e.left - t.collisionPosition.marginLeft,
                        u = c - l,
                        d = c + t.collisionWidth - a - l,
                        h = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                        p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                        f = -2 * t.offset[0];
                    0 > u ? (n = e.left + h + p + f + t.collisionWidth - a - s, (0 > n || o(u) > n) && (e.left += h + p + f)) : d > 0 && (i = e.left - t.collisionPosition.marginLeft + h + p + f - l, (i > 0 || d > o(i)) && (e.left += h + p + f))
                },
                top: function(e, t) {
                    var n, i, r = t.within,
                        s = r.offset.top + r.scrollTop,
                        a = r.height,
                        l = r.isWindow ? r.scrollTop : r.offset.top,
                        c = e.top - t.collisionPosition.marginTop,
                        u = c - l,
                        d = c + t.collisionHeight - a - l,
                        h = "top" === t.my[1],
                        p = h ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                        f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                        g = -2 * t.offset[1];
                    0 > u ? (i = e.top + p + f + g + t.collisionHeight - a - s, e.top + p + f + g > u && (0 > i || o(u) > i) && (e.top += p + f + g)) : d > 0 && (n = e.top - t.collisionPosition.marginTop + p + f + g - l, e.top + p + f + g > d && (n > 0 || d > o(n)) && (e.top += p + f + g))
                }
            },
            flipfit: {
                left: function() {
                    e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                }
            }
        },
        function() {
            var t, n, i, r, s, a = document.getElementsByTagName("body")[0],
                o = document.createElement("div");
            t = document.createElement(a ? "div" : "body"), i = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, a && e.extend(i, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (s in i) t.style[s] = i[s];
            t.appendChild(o), n = a || document.documentElement, n.insertBefore(t, n.firstChild), o.style.cssText = "position: absolute; left: 10.7432222px;", r = e(o).offset().left, e.support.offsetFractions = r > 10 && 11 > r, t.innerHTML = "", n.removeChild(t)
        }()
}(jQuery),
function(e) {
    e.widget("ui.draggable", e.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var n = this.options;
            return this.helper || n.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function() {
                e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function(t) {
            var n = this.options;
            return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.offset.scroll = !1, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function(t, n) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !n) {
                var i = this._uiHash();
                if (this._trigger("drag", t, i) === !1) return this._mouseUp({}), !1;
                this.position = i.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function(t) {
            var n = this,
                i = !1;
            return e.ui.ddmanager && !this.options.dropBehaviour && (i = e.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), "original" !== this.options.helper || e.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !i || "valid" === this.options.revert && i || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                n._trigger("stop", t) !== !1 && n._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1) : !1
        },
        _mouseUp: function(t) {
            return e("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(t) {
            return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _createHelper: function(t) {
            var n = this.options,
                i = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : "clone" === n.helper ? this.element.clone().removeAttr("id") : this.element;
            return i.parents("body").length || i.appendTo("parent" === n.appendTo ? this.element[0].parentNode : n.appendTo), i[0] === this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"), i
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, n, i, r = this.options;
            return r.containment ? "window" === r.containment ? void(this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === r.containment ? void(this.containment = [0, 0, e(document).width() - this.helperProportions.width - this.margins.left, (e(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : r.containment.constructor === Array ? void(this.containment = r.containment) : ("parent" === r.containment && (r.containment = this.helper[0].parentNode), n = e(r.containment), i = n[0], void(i && (t = "hidden" !== n.css("overflow"), this.containment = [(parseInt(n.css("borderLeftWidth"), 10) || 0) + (parseInt(n.css("paddingLeft"), 10) || 0), (parseInt(n.css("borderTopWidth"), 10) || 0) + (parseInt(n.css("paddingTop"), 10) || 0), (t ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(n.css("borderRightWidth"), 10) || 0) - (parseInt(n.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(n.css("borderBottomWidth"), 10) || 0) - (parseInt(n.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = n))) : void(this.containment = null)
        },
        _convertPositionTo: function(t, n) {
            n || (n = this.position);
            var i = "absolute" === t ? 1 : -1,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: r.scrollTop(),
                left: r.scrollLeft()
            }), {
                top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * i,
                left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function(t) {
            var n, i, r, s, a = this.options,
                o = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = t.pageX,
                c = t.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: o.scrollTop(),
                left: o.scrollLeft()
            }), this.originalPosition && (this.containment && (this.relative_container ? (i = this.relative_container.offset(), n = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]) : n = this.containment, t.pageX - this.offset.click.left < n[0] && (l = n[0] + this.offset.click.left), t.pageY - this.offset.click.top < n[1] && (c = n[1] + this.offset.click.top), t.pageX - this.offset.click.left > n[2] && (l = n[2] + this.offset.click.left), t.pageY - this.offset.click.top > n[3] && (c = n[3] + this.offset.click.top)), a.grid && (r = a.grid[1] ? this.originalPageY + Math.round((c - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, c = n ? r - this.offset.click.top >= n[1] || r - this.offset.click.top > n[3] ? r : r - this.offset.click.top >= n[1] ? r - a.grid[1] : r + a.grid[1] : r, s = a.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, l = n ? s - this.offset.click.left >= n[0] || s - this.offset.click.left > n[2] ? s : s - this.offset.click.left >= n[0] ? s - a.grid[0] : s + a.grid[0] : s)), {
                top: c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function(t, n, i) {
            return i = i || this._uiHash(), e.ui.plugin.call(this, t, [n, i]), "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, n, i)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, n) {
            var i = e(this).data("ui-draggable"),
                r = i.options,
                s = e.extend({}, n, {
                    item: i.element
                });
            i.sortables = [], e(r.connectToSortable).each(function() {
                var n = e.data(this, "ui-sortable");
                n && !n.options.disabled && (i.sortables.push({
                    instance: n,
                    shouldRevert: n.options.revert
                }), n.refreshPositions(), n._trigger("activate", t, s))
            })
        },
        stop: function(t, n) {
            var i = e(this).data("ui-draggable"),
                r = e.extend({}, n, {
                    item: i.element
                });
            e.each(i.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, i.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" === i.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, r))
            })
        },
        drag: function(t, n) {
            var i = e(this).data("ui-draggable"),
                r = this;
            e.each(i.sortables, function() {
                var s = !1,
                    a = this;
                this.instance.positionAbs = i.positionAbs, this.instance.helperProportions = i.helperProportions, this.instance.offset.click = i.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (s = !0, e.each(i.sortables, function() {
                    return this.instance.positionAbs = i.positionAbs, this.instance.helperProportions = i.helperProportions, this.instance.offset.click = i.offset.click, this !== a && this.instance._intersectsWith(this.instance.containerCache) && e.contains(a.instance.element[0], this.instance.element[0]) && (s = !1), s
                })), s ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(r).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return n.helper[0]
                }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = i.offset.click.top, this.instance.offset.click.left = i.offset.click.left, this.instance.offset.parent.left -= i.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= i.offset.parent.top - this.instance.offset.parent.top, i._trigger("toSortable", t), i.dropped = this.instance.element, i.currentItem = i.element, this.instance.fromOutside = i), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), i._trigger("fromSortable", t), i.dropped = !1)
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var t = e("body"),
                n = e(this).data("ui-draggable").options;
            t.css("cursor") && (n._cursor = t.css("cursor")), t.css("cursor", n.cursor)
        },
        stop: function() {
            var t = e(this).data("ui-draggable").options;
            t._cursor && e("body").css("cursor", t._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function(t, n) {
            var i = e(n.helper),
                r = e(this).data("ui-draggable").options;
            i.css("opacity") && (r._opacity = i.css("opacity")), i.css("opacity", r.opacity)
        },
        stop: function(t, n) {
            var i = e(this).data("ui-draggable").options;
            i._opacity && e(n.helper).css("opacity", i._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var t = e(this).data("ui-draggable");
            t.scrollParent[0] !== document && "HTML" !== t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
        },
        drag: function(t) {
            var n = e(this).data("ui-draggable"),
                i = n.options,
                r = !1;
            n.scrollParent[0] !== document && "HTML" !== n.scrollParent[0].tagName ? (i.axis && "x" === i.axis || (n.overflowOffset.top + n.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? n.scrollParent[0].scrollTop = r = n.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - n.overflowOffset.top < i.scrollSensitivity && (n.scrollParent[0].scrollTop = r = n.scrollParent[0].scrollTop - i.scrollSpeed)), i.axis && "y" === i.axis || (n.overflowOffset.left + n.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? n.scrollParent[0].scrollLeft = r = n.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - n.overflowOffset.left < i.scrollSensitivity && (n.scrollParent[0].scrollLeft = r = n.scrollParent[0].scrollLeft - i.scrollSpeed))) : (i.axis && "x" === i.axis || (t.pageY - e(document).scrollTop() < i.scrollSensitivity ? r = e(document).scrollTop(e(document).scrollTop() - i.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < i.scrollSensitivity && (r = e(document).scrollTop(e(document).scrollTop() + i.scrollSpeed))), i.axis && "y" === i.axis || (t.pageX - e(document).scrollLeft() < i.scrollSensitivity ? r = e(document).scrollLeft(e(document).scrollLeft() - i.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < i.scrollSensitivity && (r = e(document).scrollLeft(e(document).scrollLeft() + i.scrollSpeed)))), r !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function() {
            var t = e(this).data("ui-draggable"),
                n = t.options;
            t.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                var n = e(this),
                    i = n.offset();
                this !== t.element[0] && t.snapElements.push({
                    item: this,
                    width: n.outerWidth(),
                    height: n.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        },
        drag: function(t, n) {
            var i, r, s, a, o, l, c, u, d, h, p = e(this).data("ui-draggable"),
                f = p.options,
                g = f.snapTolerance,
                m = n.offset.left,
                v = m + p.helperProportions.width,
                y = n.offset.top,
                b = y + p.helperProportions.height;
            for (d = p.snapElements.length - 1; d >= 0; d--) o = p.snapElements[d].left, l = o + p.snapElements[d].width, c = p.snapElements[d].top, u = c + p.snapElements[d].height, o - g > v || m > l + g || c - g > b || y > u + g || !e.contains(p.snapElements[d].item.ownerDocument, p.snapElements[d].item) ? (p.snapElements[d].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), {
                snapItem: p.snapElements[d].item
            })), p.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (i = g >= Math.abs(c - b), r = g >= Math.abs(u - y), s = g >= Math.abs(o - v), a = g >= Math.abs(l - m), i && (n.position.top = p._convertPositionTo("relative", {
                top: c - p.helperProportions.height,
                left: 0
            }).top - p.margins.top), r && (n.position.top = p._convertPositionTo("relative", {
                top: u,
                left: 0
            }).top - p.margins.top), s && (n.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: o - p.helperProportions.width
            }).left - p.margins.left), a && (n.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left - p.margins.left)), h = i || r || s || a, "outer" !== f.snapMode && (i = g >= Math.abs(c - y), r = g >= Math.abs(u - b), s = g >= Math.abs(o - m), a = g >= Math.abs(l - v), i && (n.position.top = p._convertPositionTo("relative", {
                top: c,
                left: 0
            }).top - p.margins.top), r && (n.position.top = p._convertPositionTo("relative", {
                top: u - p.helperProportions.height,
                left: 0
            }).top - p.margins.top), s && (n.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: o
            }).left - p.margins.left), a && (n.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: l - p.helperProportions.width
            }).left - p.margins.left)), !p.snapElements[d].snapping && (i || r || s || a || h) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), {
                snapItem: p.snapElements[d].item
            })), p.snapElements[d].snapping = i || r || s || a || h)
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function() {
            var t, n = this.data("ui-draggable").options,
                i = e.makeArray(e(n.stack)).sort(function(t, n) {
                    return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
                });
            i.length && (t = parseInt(e(i[0]).css("zIndex"), 10) || 0, e(i).each(function(n) {
                e(this).css("zIndex", t + n)
            }), this.css("zIndex", t + i.length))
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function(t, n) {
            var i = e(n.helper),
                r = e(this).data("ui-draggable").options;
            i.css("zIndex") && (r._zIndex = i.css("zIndex")), i.css("zIndex", r.zIndex)
        },
        stop: function(t, n) {
            var i = e(this).data("ui-draggable").options;
            i._zIndex && e(n.helper).css("zIndex", i._zIndex)
        }
    })
}(jQuery),
function(e) {
    function t(e, t, n) {
        return e > t && t + n > e
    }
    e.widget("ui.droppable", {
        version: "1.10.4",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var t, n = this.options,
                i = n.accept;
            this.isover = !1, this.isout = !0, this.accept = e.isFunction(i) ? i : function(e) {
                return e.is(i)
            }, this.proportions = function() {
                return arguments.length ? void(t = arguments[0]) : t ? t : t = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }
            }, e.ui.ddmanager.droppables[n.scope] = e.ui.ddmanager.droppables[n.scope] || [], e.ui.ddmanager.droppables[n.scope].push(this), n.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function() {
            for (var t = 0, n = e.ui.ddmanager.droppables[this.options.scope]; n.length > t; t++) n[t] === this && n.splice(t, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(t, n) {
            "accept" === t && (this.accept = e.isFunction(n) ? n : function(e) {
                return e.is(n)
            }), e.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(t) {
            var n = e.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), n && this._trigger("activate", t, this.ui(n))
        },
        _deactivate: function(t) {
            var n = e.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), n && this._trigger("deactivate", t, this.ui(n))
        },
        _over: function(t) {
            var n = e.ui.ddmanager.current;
            n && (n.currentItem || n.element)[0] !== this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(n)))
        },
        _out: function(t) {
            var n = e.ui.ddmanager.current;
            n && (n.currentItem || n.element)[0] !== this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(n)))
        },
        _drop: function(t, n) {
            var i = n || e.ui.ddmanager.current,
                r = !1;
            return i && (i.currentItem || i.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var t = e.data(this, "ui-droppable");
                return t.options.greedy && !t.options.disabled && t.options.scope === i.options.scope && t.accept.call(t.element[0], i.currentItem || i.element) && e.ui.intersect(i, e.extend(t, {
                    offset: t.element.offset()
                }), t.options.tolerance) ? (r = !0, !1) : void 0
            }), r ? !1 : this.accept.call(this.element[0], i.currentItem || i.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(i)), this.element) : !1) : !1
        },
        ui: function(e) {
            return {
                draggable: e.currentItem || e.element,
                helper: e.helper,
                position: e.position,
                offset: e.positionAbs
            }
        }
    }), e.ui.intersect = function(e, n, i) {
        if (!n.offset) return !1;
        var r, s, a = (e.positionAbs || e.position.absolute).left,
            o = (e.positionAbs || e.position.absolute).top,
            l = a + e.helperProportions.width,
            c = o + e.helperProportions.height,
            u = n.offset.left,
            d = n.offset.top,
            h = u + n.proportions().width,
            p = d + n.proportions().height;
        switch (i) {
            case "fit":
                return a >= u && h >= l && o >= d && p >= c;
            case "intersect":
                return a + e.helperProportions.width / 2 > u && h > l - e.helperProportions.width / 2 && o + e.helperProportions.height / 2 > d && p > c - e.helperProportions.height / 2;
            case "pointer":
                return r = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left, s = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top, t(s, d, n.proportions().height) && t(r, u, n.proportions().width);
            case "touch":
                return (o >= d && p >= o || c >= d && p >= c || d > o && c > p) && (a >= u && h >= a || l >= u && h >= l || u > a && l > h);
            default:
                return !1
        }
    }, e.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t, n) {
            var i, r, s = e.ui.ddmanager.droppables[t.options.scope] || [],
                a = n ? n.type : null,
                o = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            e: for (i = 0; s.length > i; i++)
                if (!(s[i].options.disabled || t && !s[i].accept.call(s[i].element[0], t.currentItem || t.element))) {
                    for (r = 0; o.length > r; r++)
                        if (o[r] === s[i].element[0]) {
                            s[i].proportions().height = 0;
                            continue e
                        }
                    s[i].visible = "none" !== s[i].element.css("display"), s[i].visible && ("mousedown" === a && s[i]._activate.call(s[i], n), s[i].offset = s[i].element.offset(), s[i].proportions({
                        width: s[i].element[0].offsetWidth,
                        height: s[i].element[0].offsetHeight
                    }))
                }
        },
        drop: function(t, n) {
            var i = !1;
            return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (i = this._drop.call(this, n) || i), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, n)))
            }), i
        },
        dragStart: function(t, n) {
            t.element.parentsUntil("body").bind("scroll.droppable", function() {
                t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
            })
        },
        drag: function(t, n) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, n), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var i, r, s, a = e.ui.intersect(t, this, this.options.tolerance),
                        o = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                    o && (this.options.greedy && (r = this.options.scope, s = this.element.parents(":data(ui-droppable)").filter(function() {
                        return e.data(this, "ui-droppable").options.scope === r
                    }), s.length && (i = e.data(s[0], "ui-droppable"), i.greedyChild = "isover" === o)), i && "isover" === o && (i.isover = !1, i.isout = !0, i._out.call(i, n)), this[o] = !0, this["isout" === o ? "isover" : "isout"] = !1, this["isover" === o ? "_over" : "_out"].call(this, n), i && "isout" === o && (i.isout = !1, i.isover = !0, i._over.call(i, n)))
                }
            })
        },
        dragStop: function(t, n) {
            t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
        }
    }
}(jQuery),
function(e) {
    function t(e, t, n) {
        return e > t && t + n > e
    }

    function n(e) {
        return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
    }
    e.widget("ui.sortable", e.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var e = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === e.axis || n(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(t, n) {
            "disabled" === t ? (this.options[t] = n, this.widget().toggleClass("ui-sortable-disabled", !!n)) : e.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(t, n) {
            var i = null,
                r = !1,
                s = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function() {
                return e.data(this, s.widgetName + "-item") === s ? (i = e(this), !1) : void 0
            }), e.data(t.target, s.widgetName + "-item") === s && (i = e(t.target)), i && (!this.options.handle || n || (e(this.options.handle, i).find("*").addBack().each(function() {
                this === t.target && (r = !0)
            }), r)) ? (this.currentItem = i, this._removeCurrentsFromItems(), !0) : !1)
        },
        _mouseStart: function(t, n, i) {
            var r, s, a = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, e.extend(this.offset, {
                    click: {
                        left: t.pageX - this.offset.left,
                        top: t.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (s = this.document.find("body"), this.storedCursor = s.css("cursor"), s.css("cursor", a.cursor), this.storedStylesheet = e("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(s)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i)
                for (r = this.containers.length - 1; r >= 0; r--) this.containers[r]._trigger("activate", t, this._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !a.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function(t) {
            var n, i, r, s, a = this.options,
                o = !1;
            for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = o = this.scrollParent[0].scrollTop + a.scrollSpeed : t.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = o = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = o = this.scrollParent[0].scrollLeft + a.scrollSpeed : t.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = o = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (t.pageY - e(document).scrollTop() < a.scrollSensitivity ? o = e(document).scrollTop(e(document).scrollTop() - a.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < a.scrollSensitivity && (o = e(document).scrollTop(e(document).scrollTop() + a.scrollSpeed)), t.pageX - e(document).scrollLeft() < a.scrollSensitivity ? o = e(document).scrollLeft(e(document).scrollLeft() - a.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < a.scrollSensitivity && (o = e(document).scrollLeft(e(document).scrollLeft() + a.scrollSpeed))), o !== !1 && e.ui.ddmanager && !a.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), n = this.items.length - 1; n >= 0; n--)
                if (i = this.items[n], r = i.item[0], s = this._intersectsWithPointer(i), s && i.instance === this.currentContainer && r !== this.currentItem[0] && this.placeholder[1 === s ? "next" : "prev"]()[0] !== r && !e.contains(this.placeholder[0], r) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], r) : !0)) {
                    if (this.direction = 1 === s ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i)) break;
                    this._rearrange(t, i), this._trigger("change", t, this._uiHash());
                    break
                }
            return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(t, n) {
            if (t) {
                if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                    var i = this,
                        r = this.placeholder.offset(),
                        s = this.options.axis,
                        a = {};
                    s && "x" !== s || (a.left = r.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), s && "y" !== s || (a.top = r.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
                        i._clear(t)
                    })
                } else this._clear(t, n);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(t) {
            var n = this._getItemsAsjQuery(t && t.connected),
                i = [];
            return t = t || {}, e(n).each(function() {
                var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                n && i.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
            }), !i.length && t.key && i.push(t.key + "="), i.join("&")
        },
        toArray: function(t) {
            var n = this._getItemsAsjQuery(t && t.connected),
                i = [];
            return t = t || {}, n.each(function() {
                i.push(e(t.item || this).attr(t.attribute || "id") || "")
            }), i
        },
        _intersectsWith: function(e) {
            var t = this.positionAbs.left,
                n = t + this.helperProportions.width,
                i = this.positionAbs.top,
                r = i + this.helperProportions.height,
                s = e.left,
                a = s + e.width,
                o = e.top,
                l = o + e.height,
                c = this.offset.click.top,
                u = this.offset.click.left,
                d = "x" === this.options.axis || i + c > o && l > i + c,
                h = "y" === this.options.axis || t + u > s && a > t + u,
                p = d && h;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : t + this.helperProportions.width / 2 > s && a > n - this.helperProportions.width / 2 && i + this.helperProportions.height / 2 > o && l > r - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(e) {
            var n = "x" === this.options.axis || t(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                i = "y" === this.options.axis || t(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                r = n && i,
                s = this._getDragVerticalDirection(),
                a = this._getDragHorizontalDirection();
            return r ? this.floating ? a && "right" === a || "down" === s ? 2 : 1 : s && ("down" === s ? 2 : 1) : !1
        },
        _intersectsWithSides: function(e) {
            var n = t(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                i = t(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                r = this._getDragVerticalDirection(),
                s = this._getDragHorizontalDirection();
            return this.floating && s ? "right" === s && i || "left" === s && !i : r && ("down" === r && n || "up" === r && !n)
        },
        _getDragVerticalDirection: function() {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== e && (e > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== e && (e > 0 ? "right" : "left")
        },
        refresh: function(e) {
            return this._refreshItems(e), this.refreshPositions(), this
        },
        _connectWith: function() {
            var e = this.options;
            return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function(t) {
            function n() {
                o.push(this)
            }
            var i, r, s, a, o = [],
                l = [],
                c = this._connectWith();
            if (c && t)
                for (i = c.length - 1; i >= 0; i--)
                    for (s = e(c[i]), r = s.length - 1; r >= 0; r--) a = e.data(s[r], this.widgetFullName), a && a !== this && !a.options.disabled && l.push([e.isFunction(a.options.items) ? a.options.items.call(a.element) : e(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
            for (l.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = l.length - 1; i >= 0; i--) l[i][0].each(n);
            return e(o)
        },
        _removeCurrentsFromItems: function() {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = e.grep(this.items, function(e) {
                for (var n = 0; t.length > n; n++)
                    if (t[n] === e.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(t) {
            this.items = [], this.containers = [this];
            var n, i, r, s, a, o, l, c, u = this.items,
                d = [
                    [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                        item: this.currentItem
                    }) : e(this.options.items, this.element), this]
                ],
                h = this._connectWith();
            if (h && this.ready)
                for (n = h.length - 1; n >= 0; n--)
                    for (r = e(h[n]), i = r.length - 1; i >= 0; i--) s = e.data(r[i], this.widgetFullName), s && s !== this && !s.options.disabled && (d.push([e.isFunction(s.options.items) ? s.options.items.call(s.element[0], t, {
                        item: this.currentItem
                    }) : e(s.options.items, s.element), s]), this.containers.push(s));
            for (n = d.length - 1; n >= 0; n--)
                for (a = d[n][1], o = d[n][0], i = 0, c = o.length; c > i; i++) l = e(o[i]), l.data(this.widgetName + "-item", a), u.push({
                    item: l,
                    instance: a,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(t) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var n, i, r, s;
            for (n = this.items.length - 1; n >= 0; n--) i = this.items[n], i.instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (r = this.options.toleranceElement ? e(this.options.toleranceElement, i.item) : i.item, t || (i.width = r.outerWidth(), i.height = r.outerHeight()), s = r.offset(), i.left = s.left, i.top = s.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (n = this.containers.length - 1; n >= 0; n--) s = this.containers[n].element.offset(), this.containers[n].containerCache.left = s.left, this.containers[n].containerCache.top = s.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
            return this
        },
        _createPlaceholder: function(t) {
            t = t || this;
            var n, i = t.options;
            i.placeholder && i.placeholder.constructor !== String || (n = i.placeholder, i.placeholder = {
                element: function() {
                    var i = t.currentItem[0].nodeName.toLowerCase(),
                        r = e("<" + i + ">", t.document[0]).addClass(n || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === i ? t.currentItem.children().each(function() {
                        e("<td>&#160;</td>", t.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(r)
                    }) : "img" === i && r.attr("src", t.currentItem.attr("src")), n || r.css("visibility", "hidden"), r
                },
                update: function(e, r) {
                    (!n || i.forcePlaceholderSize) && (r.height() || r.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), r.width() || r.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                }
            }), t.placeholder = e(i.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), i.placeholder.update(t, t.placeholder)
        },
        _contactContainers: function(i) {
            var r, s, a, o, l, c, u, d, h, p, f = null,
                g = null;
            for (r = this.containers.length - 1; r >= 0; r--)
                if (!e.contains(this.currentItem[0], this.containers[r].element[0]))
                    if (this._intersectsWith(this.containers[r].containerCache)) {
                        if (f && e.contains(this.containers[r].element[0], f.element[0])) continue;
                        f = this.containers[r], g = r
                    } else this.containers[r].containerCache.over && (this.containers[r]._trigger("out", i, this._uiHash(this)), this.containers[r].containerCache.over = 0);
            if (f)
                if (1 === this.containers.length) this.containers[g].containerCache.over || (this.containers[g]._trigger("over", i, this._uiHash(this)), this.containers[g].containerCache.over = 1);
                else {
                    for (a = 1e4, o = null, p = f.floating || n(this.currentItem), l = p ? "left" : "top", c = p ? "width" : "height", u = this.positionAbs[l] + this.offset.click[l], s = this.items.length - 1; s >= 0; s--) e.contains(this.containers[g].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (!p || t(this.positionAbs.top + this.offset.click.top, this.items[s].top, this.items[s].height)) && (d = this.items[s].item.offset()[l], h = !1, Math.abs(d - u) > Math.abs(d + this.items[s][c] - u) && (h = !0, d += this.items[s][c]), a > Math.abs(d - u) && (a = Math.abs(d - u), o = this.items[s], this.direction = h ? "up" : "down"));
                    if (!o && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[g]) return;
                    o ? this._rearrange(i, o, null, !0) : this._rearrange(i, null, this.containers[g].element, !0), this._trigger("change", i, this._uiHash()), this.containers[g]._trigger("change", i, this._uiHash(this)), this.currentContainer = this.containers[g], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[g]._trigger("over", i, this._uiHash(this)), this.containers[g].containerCache.over = 1
                }
        },
        _createHelper: function(t) {
            var n = this.options,
                i = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === n.helper ? this.currentItem.clone() : this.currentItem;
            return i.parents("body").length || e("parent" !== n.appendTo ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!i[0].style.width || n.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || n.forceHelperSize) && i.height(this.currentItem.height()), i
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, n, i, r = this.options;
            "parent" === r.containment && (r.containment = this.helper[0].parentNode), ("document" === r.containment || "window" === r.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" === r.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (e("document" === r.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(r.containment) || (t = e(r.containment)[0], n = e(r.containment).offset(), i = "hidden" !== e(t).css("overflow"), this.containment = [n.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (i ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(t, n) {
            n || (n = this.position);
            var i = "absolute" === t ? 1 : -1,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                s = /(html|body)/i.test(r[0].tagName);
            return {
                top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : r.scrollTop()) * i,
                left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : r.scrollLeft()) * i
            }
        },
        _generatePosition: function(t) {
            var n, i, r = this.options,
                s = t.pageX,
                a = t.pageY,
                o = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = /(html|body)/i.test(o[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), r.grid && (n = this.originalPageY + Math.round((a - this.originalPageY) / r.grid[1]) * r.grid[1], a = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - r.grid[1] : n + r.grid[1] : n, i = this.originalPageX + Math.round((s - this.originalPageX) / r.grid[0]) * r.grid[0], s = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - r.grid[0] : i + r.grid[0] : i)), {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : o.scrollTop()),
                left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : o.scrollLeft())
            }
        },
        _rearrange: function(e, t, n, i) {
            n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var r = this.counter;
            this._delay(function() {
                r === this.counter && this.refreshPositions(!i)
            })
        },
        _clear: function(e, t) {
            function n(e, t, n) {
                return function(i) {
                    n._trigger(e, i, t._uiHash(t))
                }
            }
            this.reverting = !1;
            var i, r = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS)("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !t && r.push(function(e) {
                    this._trigger("receive", e, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || r.push(function(e) {
                    this._trigger("update", e, this._uiHash())
                }), this !== this.currentContainer && (t || (r.push(function(e) {
                    this._trigger("remove", e, this._uiHash())
                }), r.push(function(e) {
                    return function(t) {
                        e._trigger("receive", t, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), r.push(function(e) {
                    return function(t) {
                        e._trigger("update", t, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) t || r.push(n("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (r.push(n("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!t) {
                    for (this._trigger("beforeStop", e, this._uiHash()), i = 0; r.length > i; i++) r[i].call(this, e);
                    this._trigger("stop", e, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !t) {
                for (i = 0; r.length > i; i++) r[i].call(this, e);
                this._trigger("stop", e, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function() {
            e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(t) {
            var n = t || this;
            return {
                helper: n.helper,
                placeholder: n.placeholder || e([]),
                position: n.position,
                originalPosition: n.originalPosition,
                offset: n.positionAbs,
                item: n.currentItem,
                sender: t ? t.element : null
            }
        }
    })
}(jQuery),
function(e, t) {
    function n() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, e.extend(this._defaults, this.regional[""]), this.dpDiv = i(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function i(t) {
        var n = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(n, "mouseout", function() {
            e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
        }).delegate(n, "mouseover", function() {
            e.datepicker._isDisabledDatepicker(s.inline ? t.parent()[0] : s.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function r(t, n) {
        e.extend(t, n);
        for (var i in n) null == n[i] && (t[i] = n[i]);
        return t
    }
    e.extend(e.ui, {
        datepicker: {
            version: "1.10.4"
        }
    });
    var s, a = "datepicker";
    e.extend(n.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(e) {
            return r(this._defaults, e || {}), this
        },
        _attachDatepicker: function(t, n) {
            var i, r, s;
            i = t.nodeName.toLowerCase(), r = "div" === i || "span" === i, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), s = this._newInst(e(t), r), s.settings = e.extend({}, n || {}), "input" === i ? this._connectDatepicker(t, s) : r && this._inlineDatepicker(t, s)
        },
        _newInst: function(t, n) {
            var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: r,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: n,
                dpDiv: n ? i(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, n) {
            var i = e(t);
            n.append = e([]), n.trigger = e([]), i.hasClass(this.markerClassName) || (this._attachments(i, n), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(n), e.data(t, a, n), n.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, n) {
            var i, r, s, a = this._get(n, "appendText"),
                o = this._get(n, "isRTL");
            n.append && n.append.remove(), a && (n.append = e("<span class='" + this._appendClass + "'>" + a + "</span>"), t[o ? "before" : "after"](n.append)), t.unbind("focus", this._showDatepicker), n.trigger && n.trigger.remove(), i = this._get(n, "showOn"), ("focus" === i || "both" === i) && t.focus(this._showDatepicker), ("button" === i || "both" === i) && (r = this._get(n, "buttonText"), s = this._get(n, "buttonImage"), n.trigger = e(this._get(n, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                src: s,
                alt: r,
                title: r
            }) : e("<button type='button'></button>").addClass(this._triggerClass).html(s ? e("<img/>").attr({
                src: s,
                alt: r,
                title: r
            }) : r)), t[o ? "before" : "after"](n.trigger), n.trigger.click(function() {
                return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
            }))
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, n, i, r, s = new Date(2009, 11, 20),
                    a = this._get(e, "dateFormat");
                a.match(/[DM]/) && (t = function(e) {
                    for (n = 0, i = 0, r = 0; e.length > r; r++) e[r].length > n && (n = e[r].length, i = r);
                    return i
                }, s.setMonth(t(this._get(e, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), s.setDate(t(this._get(e, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - s.getDay())), e.input.attr("size", this._formatDate(e, s).length)
            }
        },
        _inlineDatepicker: function(t, n) {
            var i = e(t);
            i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(n.dpDiv), e.data(t, a, n), this._setDate(n, this._getDefaultDate(n), !0), this._updateDatepicker(n), this._updateAlternate(n), n.settings.disabled && this._disableDatepicker(t), n.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, n, i, s, o) {
            var l, c, u, d, h, p = this._dialogInst;
            return p || (this.uuid += 1, l = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + l + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, e.data(this._dialogInput[0], a, p)), r(p.settings, s || {}), n = n && n.constructor === Date ? this._formatDate(p, n) : n, this._dialogInput.val(n), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (c = document.documentElement.clientWidth, u = document.documentElement.clientHeight, d = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [c / 2 - 100 + d, u / 2 - 150 + h]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], a, p), this
        },
        _destroyDatepicker: function(t) {
            var n, i = e(t),
                r = e.data(t, a);
            i.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), e.removeData(t, a), "input" === n ? (r.append.remove(), r.trigger.remove(), i.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === n || "span" === n) && i.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(t) {
            var n, i, r = e(t),
                s = e.data(t, a);
            r.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), "input" === n ? (t.disabled = !1, s.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === n || "span" === n) && (i = r.children("." + this._inlineClass), i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }))
        },
        _disableDatepicker: function(t) {
            var n, i, r = e(t),
                s = e.data(t, a);
            r.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), "input" === n ? (t.disabled = !0, s.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === n || "span" === n) && (i = r.children("." + this._inlineClass), i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(e) {
            if (!e) return !1;
            for (var t = 0; this._disabledInputs.length > t; t++)
                if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return e.data(t, a)
            } catch (n) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(n, i, s) {
            var a, o, l, c, u = this._getInst(n);
            return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : u ? "all" === i ? e.extend({}, u.settings) : this._get(u, i) : null : (a = i || {}, "string" == typeof i && (a = {}, a[i] = s), u && (this._curInst === u && this._hideDatepicker(), o = this._getDateDatepicker(n, !0), l = this._getMinMaxDate(u, "min"), c = this._getMinMaxDate(u, "max"), r(u.settings, a), null !== l && a.dateFormat !== t && a.minDate === t && (u.settings.minDate = this._formatDate(u, l)), null !== c && a.dateFormat !== t && a.maxDate === t && (u.settings.maxDate = this._formatDate(u, c)), "disabled" in a && (a.disabled ? this._disableDatepicker(n) : this._enableDatepicker(n)), this._attachments(e(n), u), this._autoSize(u), this._setDate(u, o), this._updateAlternate(u), this._updateDatepicker(u)), t)
        },
        _changeDatepicker: function(e, t, n) {
            this._optionDatepicker(e, t, n)
        },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var n = this._getInst(e);
            n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n))
        },
        _getDateDatepicker: function(e, t) {
            var n = this._getInst(e);
            return n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null
        },
        _doKeyDown: function(t) {
            var n, i, r, s = e.datepicker._getInst(t.target),
                a = !0,
                o = s.dpDiv.is(".ui-datepicker-rtl");
            if (s._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(), a = !1;
                    break;
                case 13:
                    return r = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", s.dpDiv), r[0] && e.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, r[0]), n = e.datepicker._get(s, "onSelect"), n ? (i = e.datepicker._formatDate(s), n.apply(s.input ? s.input[0] : null, [i, s])) : e.datepicker._hideDatepicker(), !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), a = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), a = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), a = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), a = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), a = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), a = t.ctrlKey || t.metaKey;
                    break;
                default:
                    a = !1
            } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : a = !1;
            a && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function(n) {
            var i, r, s = e.datepicker._getInst(n.target);
            return e.datepicker._get(s, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(s, "dateFormat")), r = String.fromCharCode(null == n.charCode ? n.keyCode : n.charCode), n.ctrlKey || n.metaKey || " " > r || !i || i.indexOf(r) > -1) : t
        },
        _doKeyUp: function(t) {
            var n, i = e.datepicker._getInst(t.target);
            if (i.input.val() !== i.lastVal) try {
                n = e.datepicker.parseDate(e.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, e.datepicker._getFormatConfig(i)), n && (e.datepicker._setDateFromField(i), e.datepicker._updateAlternate(i), e.datepicker._updateDatepicker(i))
            } catch (r) {}
            return !0
        },
        _showDatepicker: function(t) {
            if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                var n, i, s, a, o, l, c;
                n = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== n && (e.datepicker._curInst.dpDiv.stop(!0, !0), n && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), i = e.datepicker._get(n, "beforeShow"), s = i ? i.apply(t, [t, n]) : {}, s !== !1 && (r(n.settings, s), n.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(n), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), a = !1, e(t).parents().each(function() {
                    return a |= "fixed" === e(this).css("position"), !a
                }), o = {
                    left: e.datepicker._pos[0],
                    top: e.datepicker._pos[1]
                }, e.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), e.datepicker._updateDatepicker(n), o = e.datepicker._checkOffset(n, o, a), n.dpDiv.css({
                    position: e.datepicker._inDialog && e.blockUI ? "static" : a ? "fixed" : "absolute",
                    display: "none",
                    left: o.left + "px",
                    top: o.top + "px"
                }), n.inline || (l = e.datepicker._get(n, "showAnim"), c = e.datepicker._get(n, "duration"), n.dpDiv.zIndex(e(t).zIndex() + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[l] ? n.dpDiv.show(l, e.datepicker._get(n, "showOptions"), c) : n.dpDiv[l || "show"](l ? c : null), e.datepicker._shouldFocusInput(n) && n.input.focus(), e.datepicker._curInst = n))
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4, s = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var n, i = this._getNumberOfMonths(t),
                r = i[1],
                a = 17;
            t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), r > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + r).css("width", a * r + "em"), t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (n = t.yearshtml, setTimeout(function() {
                n === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), n = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
        },
        _checkOffset: function(t, n, i) {
            var r = t.dpDiv.outerWidth(),
                s = t.dpDiv.outerHeight(),
                a = t.input ? t.input.outerWidth() : 0,
                o = t.input ? t.input.outerHeight() : 0,
                l = document.documentElement.clientWidth + (i ? 0 : e(document).scrollLeft()),
                c = document.documentElement.clientHeight + (i ? 0 : e(document).scrollTop());
            return n.left -= this._get(t, "isRTL") ? r - a : 0, n.left -= i && n.left === t.input.offset().left ? e(document).scrollLeft() : 0, n.top -= i && n.top === t.input.offset().top + o ? e(document).scrollTop() : 0, n.left -= Math.min(n.left, n.left + r > l && l > r ? Math.abs(n.left + r - l) : 0), n.top -= Math.min(n.top, n.top + s > c && c > s ? Math.abs(s + o) : 0), n
        },
        _findPos: function(t) {
            for (var n, i = this._getInst(t), r = this._get(i, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[r ? "previousSibling" : "nextSibling"];
            return n = e(t).offset(), [n.left, n.top]
        },
        _hideDatepicker: function(t) {
            var n, i, r, s, o = this._curInst;
            !o || t && o !== e.data(t, a) || this._datepickerShowing && (n = this._get(o, "showAnim"), i = this._get(o, "duration"), r = function() {
                e.datepicker._tidyDialog(o)
            }, e.effects && (e.effects.effect[n] || e.effects[n]) ? o.dpDiv.hide(n, e.datepicker._get(o, "showOptions"), i, r) : o.dpDiv["slideDown" === n ? "slideUp" : "fadeIn" === n ? "fadeOut" : "hide"](n ? i : null, r), n || r(), this._datepickerShowing = !1, s = this._get(o, "onClose"), s && s.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            if (e.datepicker._curInst) {
                var n = e(t.target),
                    i = e.datepicker._getInst(n[0]);
                (n[0].id !== e.datepicker._mainDivId && 0 === n.parents("#" + e.datepicker._mainDivId).length && !n.hasClass(e.datepicker.markerClassName) && !n.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || n.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== i) && e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, n, i) {
            var r = e(t),
                s = this._getInst(r[0]);
            this._isDisabledDatepicker(r[0]) || (this._adjustInstDate(s, n + ("M" === i ? this._get(s, "showCurrentAtPos") : 0), i), this._updateDatepicker(s))
        },
        _gotoToday: function(t) {
            var n, i = e(t),
                r = this._getInst(i[0]);
            this._get(r, "gotoCurrent") && r.currentDay ? (r.selectedDay = r.currentDay, r.drawMonth = r.selectedMonth = r.currentMonth, r.drawYear = r.selectedYear = r.currentYear) : (n = new Date, r.selectedDay = n.getDate(), r.drawMonth = r.selectedMonth = n.getMonth(), r.drawYear = r.selectedYear = n.getFullYear()), this._notifyChange(r), this._adjustDate(i)
        },
        _selectMonthYear: function(t, n, i) {
            var r = e(t),
                s = this._getInst(r[0]);
            s["selected" + ("M" === i ? "Month" : "Year")] = s["draw" + ("M" === i ? "Month" : "Year")] = parseInt(n.options[n.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(r)
        },
        _selectDay: function(t, n, i, r) {
            var s, a = e(t);
            e(r).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (s = this._getInst(a[0]), s.selectedDay = s.currentDay = e("a", r).html(), s.selectedMonth = s.currentMonth = n, s.selectedYear = s.currentYear = i, this._selectDate(t, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)))
        },
        _clearDate: function(t) {
            var n = e(t);
            this._selectDate(n, "")
        },
        _selectDate: function(t, n) {
            var i, r = e(t),
                s = this._getInst(r[0]);
            n = null != n ? n : this._formatDate(s), s.input && s.input.val(n), this._updateAlternate(s), i = this._get(s, "onSelect"), i ? i.apply(s.input ? s.input[0] : null, [n, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], "object" != typeof s.input[0] && s.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var n, i, r, s = this._get(t, "altField");
            s && (n = this._get(t, "altFormat") || this._get(t, "dateFormat"), i = this._getDate(t), r = this.formatDate(n, i, this._getFormatConfig(t)), e(s).each(function() {
                e(this).val(r)
            }))
        },
        noWeekends: function(e) {
            var t = e.getDay();
            return [t > 0 && 6 > t, ""]
        },
        iso8601Week: function(e) {
            var t, n = new Date(e.getTime());
            return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), t = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((t - n) / 864e5) / 7) + 1
        },
        parseDate: function(n, i, r) {
            if (null == n || null == i) throw "Invalid arguments";
            if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null;
            var s, a, o, l, c = 0,
                u = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                d = "string" != typeof u ? u : (new Date).getFullYear() % 100 + parseInt(u, 10),
                h = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort,
                p = (r ? r.dayNames : null) || this._defaults.dayNames,
                f = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort,
                g = (r ? r.monthNames : null) || this._defaults.monthNames,
                m = -1,
                v = -1,
                y = -1,
                b = -1,
                x = !1,
                _ = function(e) {
                    var t = n.length > s + 1 && n.charAt(s + 1) === e;
                    return t && s++, t
                },
                C = function(e) {
                    var t = _(e),
                        n = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                        r = RegExp("^\\d{1," + n + "}"),
                        s = i.substring(c).match(r);
                    if (!s) throw "Missing number at position " + c;
                    return c += s[0].length, parseInt(s[0], 10)
                },
                w = function(n, r, s) {
                    var a = -1,
                        o = e.map(_(n) ? s : r, function(e, t) {
                            return [
                                [t, e]
                            ]
                        }).sort(function(e, t) {
                            return -(e[1].length - t[1].length)
                        });
                    if (e.each(o, function(e, n) {
                            var r = n[1];
                            return i.substr(c, r.length).toLowerCase() === r.toLowerCase() ? (a = n[0], c += r.length, !1) : t
                        }), -1 !== a) return a + 1;
                    throw "Unknown name at position " + c
                },
                k = function() {
                    if (i.charAt(c) !== n.charAt(s)) throw "Unexpected literal at position " + c;
                    c++
                };
            for (s = 0; n.length > s; s++)
                if (x) "'" !== n.charAt(s) || _("'") ? k() : x = !1;
                else switch (n.charAt(s)) {
                    case "d":
                        y = C("d");
                        break;
                    case "D":
                        w("D", h, p);
                        break;
                    case "o":
                        b = C("o");
                        break;
                    case "m":
                        v = C("m");
                        break;
                    case "M":
                        v = w("M", f, g);
                        break;
                    case "y":
                        m = C("y");
                        break;
                    case "@":
                        l = new Date(C("@")), m = l.getFullYear(), v = l.getMonth() + 1, y = l.getDate();
                        break;
                    case "!":
                        l = new Date((C("!") - this._ticksTo1970) / 1e4), m = l.getFullYear(), v = l.getMonth() + 1, y = l.getDate();
                        break;
                    case "'":
                        _("'") ? k() : x = !0;
                        break;
                    default:
                        k()
                }
            if (i.length > c && (o = i.substr(c), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
            if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d >= m ? 0 : -100)), b > -1)
                for (v = 1, y = b; a = this._getDaysInMonth(m, v - 1), !(a >= y);) v++, y -= a;
            if (l = this._daylightSavingAdjust(new Date(m, v - 1, y)), l.getFullYear() !== m || l.getMonth() + 1 !== v || l.getDate() !== y) throw "Invalid date";
            return l
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(e, t, n) {
            if (!t) return "";
            var i, r = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                s = (n ? n.dayNames : null) || this._defaults.dayNames,
                a = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                o = (n ? n.monthNames : null) || this._defaults.monthNames,
                l = function(t) {
                    var n = e.length > i + 1 && e.charAt(i + 1) === t;
                    return n && i++, n
                },
                c = function(e, t, n) {
                    var i = "" + t;
                    if (l(e))
                        for (; n > i.length;) i = "0" + i;
                    return i
                },
                u = function(e, t, n, i) {
                    return l(e) ? i[t] : n[t]
                },
                d = "",
                h = !1;
            if (t)
                for (i = 0; e.length > i; i++)
                    if (h) "'" !== e.charAt(i) || l("'") ? d += e.charAt(i) : h = !1;
                    else switch (e.charAt(i)) {
                        case "d":
                            d += c("d", t.getDate(), 2);
                            break;
                        case "D":
                            d += u("D", t.getDay(), r, s);
                            break;
                        case "o":
                            d += c("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            d += c("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            d += u("M", t.getMonth(), a, o);
                            break;
                        case "y":
                            d += l("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                            break;
                        case "@":
                            d += t.getTime();
                            break;
                        case "!":
                            d += 1e4 * t.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            l("'") ? d += "'" : h = !0;
                            break;
                        default:
                            d += e.charAt(i)
                    }
            return d
        },
        _possibleChars: function(e) {
            var t, n = "",
                i = !1,
                r = function(n) {
                    var i = e.length > t + 1 && e.charAt(t + 1) === n;
                    return i && t++, i
                };
            for (t = 0; e.length > t; t++)
                if (i) "'" !== e.charAt(t) || r("'") ? n += e.charAt(t) : i = !1;
                else switch (e.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        n += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        r("'") ? n += "'" : i = !0;
                        break;
                    default:
                        n += e.charAt(t)
                }
            return n
        },
        _get: function(e, n) {
            return e.settings[n] !== t ? e.settings[n] : this._defaults[n]
        },
        _setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var n = this._get(e, "dateFormat"),
                    i = e.lastVal = e.input ? e.input.val() : null,
                    r = this._getDefaultDate(e),
                    s = r,
                    a = this._getFormatConfig(e);
                try {
                    s = this.parseDate(n, i, a) || r
                } catch (o) {
                    i = t ? "" : i
                }
                e.selectedDay = s.getDate(), e.drawMonth = e.selectedMonth = s.getMonth(), e.drawYear = e.selectedYear = s.getFullYear(), e.currentDay = i ? s.getDate() : 0, e.currentMonth = i ? s.getMonth() : 0, e.currentYear = i ? s.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function(t, n, i) {
            var r = function(e) {
                    var t = new Date;
                    return t.setDate(t.getDate() + e), t
                },
                s = function(n) {
                    try {
                        return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), n, e.datepicker._getFormatConfig(t))
                    } catch (i) {}
                    for (var r = (n.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, s = r.getFullYear(), a = r.getMonth(), o = r.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, c = l.exec(n); c;) {
                        switch (c[2] || "d") {
                            case "d":
                            case "D":
                                o += parseInt(c[1], 10);
                                break;
                            case "w":
                            case "W":
                                o += 7 * parseInt(c[1], 10);
                                break;
                            case "m":
                            case "M":
                                a += parseInt(c[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(s, a));
                                break;
                            case "y":
                            case "Y":
                                s += parseInt(c[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(s, a))
                        }
                        c = l.exec(n)
                    }
                    return new Date(s, a, o)
                },
                a = null == n || "" === n ? i : "string" == typeof n ? s(n) : "number" == typeof n ? isNaN(n) ? i : r(n) : new Date(n.getTime());
            return a = a && "Invalid Date" == "" + a ? i : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a)
        },
        _daylightSavingAdjust: function(e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function(e, t, n) {
            var i = !t,
                r = e.selectedMonth,
                s = e.selectedYear,
                a = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = a.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = a.getMonth(), e.drawYear = e.selectedYear = e.currentYear = a.getFullYear(), r === e.selectedMonth && s === e.selectedYear || n || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(i ? "" : this._formatDate(e))
        },
        _getDate: function(e) {
            var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },
        _attachHandlers: function(t) {
            var n = this._get(t, "stepMonths"),
                i = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        e.datepicker._adjustDate(i, -n, "M")
                    },
                    next: function() {
                        e.datepicker._adjustDate(i, +n, "M")
                    },
                    hide: function() {
                        e.datepicker._hideDatepicker()
                    },
                    today: function() {
                        e.datepicker._gotoToday(i)
                    },
                    selectDay: function() {
                        return e.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return e.datepicker._selectMonthYear(i, this, "M"), !1
                    },
                    selectYear: function() {
                        return e.datepicker._selectMonthYear(i, this, "Y"), !1
                    }
                };
                e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(e) {
            var t, n, i, r, s, a, o, l, c, u, d, h, p, f, g, m, v, y, b, x, _, C, w, k, T, S, D, P, F, I, E, A, M, N, L, $, O, B, j, R = new Date,
                H = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
                W = this._get(e, "isRTL"),
                q = this._get(e, "showButtonPanel"),
                z = this._get(e, "hideIfNoPrevNext"),
                U = this._get(e, "navigationAsDateFormat"),
                Y = this._getNumberOfMonths(e),
                X = this._get(e, "showCurrentAtPos"),
                K = this._get(e, "stepMonths"),
                Q = 1 !== Y[0] || 1 !== Y[1],
                V = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                G = this._getMinMaxDate(e, "min"),
                J = this._getMinMaxDate(e, "max"),
                Z = e.drawMonth - X,
                et = e.drawYear;
            if (0 > Z && (Z += 12, et--), J)
                for (t = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - Y[0] * Y[1] + 1, J.getDate())), t = G && G > t ? G : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;) Z--, 0 > Z && (Z = 11, et--);
            for (e.drawMonth = Z, e.drawYear = et, n = this._get(e, "prevText"), n = U ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z - K, 1)), this._getFormatConfig(e)) : n, i = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "e" : "w") + "'>" + n + "</span></a>" : z ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "e" : "w") + "'>" + n + "</span></a>", r = this._get(e, "nextText"), r = U ? this.formatDate(r, this._daylightSavingAdjust(new Date(et, Z + K, 1)), this._getFormatConfig(e)) : r, s = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + r + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "w" : "e") + "'>" + r + "</span></a>" : z ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + r + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "w" : "e") + "'>" + r + "</span></a>", a = this._get(e, "currentText"), o = this._get(e, "gotoCurrent") && e.currentDay ? V : H, a = U ? this.formatDate(a, o, this._getFormatConfig(e)) : a, l = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", c = q ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (W ? l : "") + (this._isInRange(e, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (W ? "" : l) + "</div>" : "", u = parseInt(this._get(e, "firstDay"), 10), u = isNaN(u) ? 0 : u, d = this._get(e, "showWeek"), h = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), f = this._get(e, "monthNames"), g = this._get(e, "monthNamesShort"), m = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), x = "", C = 0; Y[0] > C; C++) {
                for (w = "", this.maxRows = 4, k = 0; Y[1] > k; k++) {
                    if (T = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), S = " ui-corner-all", D = "", Q) {
                        if (D += "<div class='ui-datepicker-group", Y[1] > 1) switch (k) {
                            case 0:
                                D += " ui-datepicker-group-first", S = " ui-corner-" + (W ? "right" : "left");
                                break;
                            case Y[1] - 1:
                                D += " ui-datepicker-group-last", S = " ui-corner-" + (W ? "left" : "right");
                                break;
                            default:
                                D += " ui-datepicker-group-middle", S = ""
                        }
                        D += "'>"
                    }
                    for (D += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === C ? W ? s : i : "") + (/all|right/.test(S) && 0 === C ? W ? i : s : "") + this._generateMonthYearHeader(e, Z, et, G, J, C > 0 || k > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", P = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", _ = 0; 7 > _; _++) F = (_ + u) % 7, P += "<th" + ((_ + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + h[F] + "'>" + p[F] + "</span></th>";
                    for (D += P + "</tr></thead><tbody>", I = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, I)), E = (this._getFirstDayOfMonth(et, Z) - u + 7) % 7, A = Math.ceil((E + I) / 7), M = Q && this.maxRows > A ? this.maxRows : A, this.maxRows = M, N = this._daylightSavingAdjust(new Date(et, Z, 1 - E)), L = 0; M > L; L++) {
                        for (D += "<tr>", $ = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(N) + "</td>" : "", _ = 0; 7 > _; _++) O = m ? m.apply(e.input ? e.input[0] : null, [N]) : [!0, ""], B = N.getMonth() !== Z, j = B && !y || !O[0] || G && G > N || J && N > J, $ += "<td class='" + ((_ + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (B ? " ui-datepicker-other-month" : "") + (N.getTime() === T.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === N.getTime() && b.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (j ? " " + this._unselectableClass + " ui-state-disabled" : "") + (B && !v ? "" : " " + O[1] + (N.getTime() === V.getTime() ? " " + this._currentClass : "") + (N.getTime() === H.getTime() ? " ui-datepicker-today" : "")) + "'" + (B && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (j ? "" : " data-handler='selectDay' data-event='click' data-month='" + N.getMonth() + "' data-year='" + N.getFullYear() + "'") + ">" + (B && !v ? "&#xa0;" : j ? "<span class='ui-state-default'>" + N.getDate() + "</span>" : "<a class='ui-state-default" + (N.getTime() === H.getTime() ? " ui-state-highlight" : "") + (N.getTime() === V.getTime() ? " ui-state-active" : "") + (B ? " ui-priority-secondary" : "") + "' href='#'>" + N.getDate() + "</a>") + "</td>", N.setDate(N.getDate() + 1), N = this._daylightSavingAdjust(N);
                        D += $ + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, et++), D += "</tbody></table>" + (Q ? "</div>" + (Y[0] > 0 && k === Y[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), w += D
                }
                x += w
            }
            return x += c, e._keyEvent = !1, x
        },
        _generateMonthYearHeader: function(e, t, n, i, r, s, a, o) {
            var l, c, u, d, h, p, f, g, m = this._get(e, "changeMonth"),
                v = this._get(e, "changeYear"),
                y = this._get(e, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                x = "";
            if (s || !m) x += "<span class='ui-datepicker-month'>" + a[t] + "</span>";
            else {
                for (l = i && i.getFullYear() === n, c = r && r.getFullYear() === n, x += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++)(!l || u >= i.getMonth()) && (!c || r.getMonth() >= u) && (x += "<option value='" + u + "'" + (u === t ? " selected='selected'" : "") + ">" + o[u] + "</option>");
                x += "</select>"
            }
            if (y || (b += x + (!s && m && v ? "" : "&#xa0;")), !e.yearshtml)
                if (e.yearshtml = "", s || !v) b += "<span class='ui-datepicker-year'>" + n + "</span>";
                else {
                    for (d = this._get(e, "yearRange").split(":"), h = (new Date).getFullYear(), p = function(e) {
                            var t = e.match(/c[+\-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? h + parseInt(e, 10) : parseInt(e, 10);
                            return isNaN(t) ? h : t
                        }, f = p(d[0]), g = Math.max(f, p(d[1] || "")), f = i ? Math.max(f, i.getFullYear()) : f, g = r ? Math.min(g, r.getFullYear()) : g, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) e.yearshtml += "<option value='" + f + "'" + (f === n ? " selected='selected'" : "") + ">" + f + "</option>";
                    e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
                }
            return b += this._get(e, "yearSuffix"), y && (b += (!s && m && v ? "" : "&#xa0;") + x), b += "</div>"
        },
        _adjustInstDate: function(e, t, n) {
            var i = e.drawYear + ("Y" === n ? t : 0),
                r = e.drawMonth + ("M" === n ? t : 0),
                s = Math.min(e.selectedDay, this._getDaysInMonth(i, r)) + ("D" === n ? t : 0),
                a = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(i, r, s)));
            e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), ("M" === n || "Y" === n) && this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var n = this._getMinMaxDate(e, "min"),
                i = this._getMinMaxDate(e, "max"),
                r = n && n > t ? n : t;
            return i && r > i ? i : r
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function(e, t) {
            return new Date(e, t, 1).getDay()
        },
        _canAdjustMonth: function(e, t, n, i) {
            var r = this._getNumberOfMonths(e),
                s = this._daylightSavingAdjust(new Date(n, i + (0 > t ? t : r[0] * r[1]), 1));
            return 0 > t && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s)
        },
        _isInRange: function(e, t) {
            var n, i, r = this._getMinMaxDate(e, "min"),
                s = this._getMinMaxDate(e, "max"),
                a = null,
                o = null,
                l = this._get(e, "yearRange");
            return l && (n = l.split(":"), i = (new Date).getFullYear(), a = parseInt(n[0], 10), o = parseInt(n[1], 10), n[0].match(/[+\-].*/) && (a += i), n[1].match(/[+\-].*/) && (o += i)), (!r || t.getTime() >= r.getTime()) && (!s || t.getTime() <= s.getTime()) && (!a || t.getFullYear() >= a) && (!o || o >= t.getFullYear())
        },
        _getFormatConfig: function(e) {
            var t = this._get(e, "shortYearCutoff");
            return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function(e, t, n, i) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var r = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(i, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), r, this._getFormatConfig(e))
        }
    }), e.fn.datepicker = function(t) {
        if (!this.length) return this;
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var n = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n)) : this.each(function() {
            "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(n)) : e.datepicker._attachDatepicker(this, t)
        }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n))
    }, e.datepicker = new n, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.10.4"
}(jQuery), ! function(e, t) {
    "use strict";
    var n, i;
    if (e.uaMatch = function(e) {
            e = e.toLowerCase();
            var t = /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [],
                n = /(ipad)/.exec(e) || /(iphone)/.exec(e) || /(android)/.exec(e) || /(windows phone)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/i.exec(e) || [];
            return {
                browser: t[3] || t[1] || "",
                version: t[2] || "0",
                platform: n[0] || ""
            }
        }, n = e.uaMatch(t.navigator.userAgent), i = {}, n.browser && (i[n.browser] = !0, i.version = n.version, i.versionNumber = parseInt(n.version)), n.platform && (i[n.platform] = !0), (i.android || i.ipad || i.iphone || i["windows phone"]) && (i.mobile = !0), (i.cros || i.mac || i.linux || i.win) && (i.desktop = !0), (i.chrome || i.opr || i.safari) && (i.webkit = !0), i.rv) {
        var r = "msie";
        n.browser = r, i[r] = !0
    }
    if (i.opr) {
        var s = "opera";
        n.browser = s, i[s] = !0
    }
    if (i.safari && i.android) {
        var a = "android";
        n.browser = a, i[a] = !0
    }
    i.name = n.browser, i.platform = n.platform, e.browser = i
}(jQuery, window),
function(e) {
    function t(t, r) {
        var s, a, o, l = this,
            c = t.add(l),
            u = e(window),
            d = e.tools.expose && (r.mask || r.expose),
            h = Math.random().toString().slice(10);
        d && ("string" == typeof d && (d = {
            color: d
        }), d.closeOnClick = d.closeOnEsc = !1);
        var p = r.target || t.attr("rel");
        if (a = p ? e(p) : null || t, !a.length) throw "Could not find Overlay: " + p;
        t && -1 == t.index(a) && t.click(function(e) {
            return l.load(e), e.preventDefault()
        }), e.extend(l, {
            load: function(t) {
                if (l.isOpened()) return l;
                var s = i[r.effect];
                if (!s) throw 'Overlay: cannot find effect : "' + r.effect + '"';
                if (r.oneInstance && e.each(n, function() {
                        this.close(t)
                    }), t = t || e.Event(), t.type = "onBeforeLoad", c.trigger(t), t.isDefaultPrevented()) return l;
                o = !0, d && e(a).expose(d);
                var p = r.top,
                    f = r.left,
                    g = a.outerWidth({
                        margin: !0
                    }),
                    m = a.outerHeight({
                        margin: !0
                    });
                return "string" == typeof p && (p = "center" == p ? Math.max((u.height() - m) / 2, 0) : parseInt(p, 10) / 100 * u.height()), "center" == f && (f = Math.max((u.width() - g) / 2, 0)), s[0].call(l, {
                    top: p,
                    left: f
                }, function() {
                    o && (t.type = "onLoad", c.trigger(t))
                }), d && r.closeOnClick && e.mask.getMask().one("click", l.close), r.closeOnClick && e(document).on("click." + h, function(t) {
                    e(t.target).parents(a).length || l.close(t)
                }), r.closeOnEsc && e(document).on("keydown." + h, function(e) {
                    27 == e.keyCode && l.close(e)
                }), l
            },
            close: function(t) {
                return l.isOpened() ? (t = t || e.Event(), t.type = "onBeforeClose", c.trigger(t), t.isDefaultPrevented() ? void 0 : (o = !1, i[r.effect][1].call(l, function() {
                    t.type = "onClose", c.trigger(t)
                }), e(document).off("click." + h + " keydown." + h), d && e.mask.close(), l)) : l
            },
            getOverlay: function() {
                return a
            },
            getTrigger: function() {
                return t
            },
            getClosers: function() {
                return s
            },
            isOpened: function() {
                return o
            },
            getConf: function() {
                return r
            }
        }), e.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","), function(t, n) {
            e.isFunction(r[n]) && e(l).on(n, r[n]), l[n] = function(t) {
                return t && e(l).on(n, t), l
            }
        }), s = a.find(r.close || ".close"), !s.length && !r.close && (s = e('<a class="close"></a>'), a.prepend(s)), s.click(function(e) {
            l.close(e)
        }), r.load && l.load()
    }
    e.tools = e.tools || {
        version: "v1.2.7"
    }, e.tools.overlay = {
        addEffect: function(e, t, n) {
            i[e] = [t, n]
        },
        conf: {
            close: null,
            closeOnClick: !0,
            closeOnEsc: !0,
            closeSpeed: "fast",
            effect: "default",
            fixed: !e.browser.msie || e.browser.version > 6,
            left: "center",
            load: !1,
            mask: null,
            oneInstance: !0,
            speed: "normal",
            target: null,
            top: "10%"
        }
    };
    var n = [],
        i = {};
    e.tools.overlay.addEffect("default", function(t, n) {
        var i = this.getConf(),
            r = e(window);
        i.fixed || (t.top += r.scrollTop(), t.left += r.scrollLeft()), t.position = i.fixed ? "fixed" : "absolute", this.getOverlay().css(t).fadeIn(i.speed, n)
    }, function(e) {
        this.getOverlay().fadeOut(this.getConf().closeSpeed, e)
    }), e.fn.overlay = function(i) {
        var r = this.data("overlay");
        return r ? r : (e.isFunction(i) && (i = {
            onBeforeLoad: i
        }), i = e.extend(!0, {}, e.tools.overlay.conf, i), this.each(function() {
            r = new t(e(this), i), n.push(r), e(this).data("overlay", r)
        }), i.api ? r : this)
    }
}(jQuery),
function(e) {
    function t(e) {
        var t = e.offset();
        return {
            top: t.top + e.height() / 2,
            left: t.left + e.width() / 2
        }
    }
    var n = e.tools.overlay,
        i = e(window);
    e.extend(n.conf, {
        start: {
            top: null,
            left: null
        },
        fadeInSpeed: "fast",
        zIndex: 9999
    });
    var r = function(n, r) {
            var s = this.getOverlay(),
                a = this.getConf(),
                o = this.getTrigger(),
                l = this,
                c = s.outerWidth({
                    margin: !0
                }),
                u = s.data("img"),
                d = a.fixed ? "fixed" : "absolute";
            if (!u) {
                var h = s.css("backgroundImage");
                if (!h) throw "background-image CSS property not set for overlay";
                h = h.slice(h.indexOf("(") + 1, h.indexOf(")")).replace(/\"/g, ""), s.css("backgroundImage", "none"), u = e('<img src="' + h + '"/>'), u.css({
                    border: 0,
                    display: "none"
                }).width(c), e("body").append(u), s.data("img", u)
            }
            var p = a.start.top || Math.round(i.height() / 2),
                f = a.start.left || Math.round(i.width() / 2);
            if (o) {
                var g = t(o);
                p = g.top, f = g.left
            }
            a.fixed ? (p -= i.scrollTop(), f -= i.scrollLeft()) : (n.top += i.scrollTop(), n.left += i.scrollLeft()), u.css({
                position: "absolute",
                top: p,
                left: f,
                width: 0,
                zIndex: a.zIndex
            }).show(), n.position = d, s.css(n), u.animate({
                top: n.top,
                left: n.left,
                width: c
            }, a.speed, function() {
                s.css("zIndex", a.zIndex + 1).fadeIn(a.fadeInSpeed, function() {
                    l.isOpened() && !e(this).index(s) ? r.call() : s.hide()
                })
            }).css("position", d)
        },
        s = function(n) {
            var r = this.getOverlay().hide(),
                s = this.getConf(),
                a = this.getTrigger(),
                o = r.data("img"),
                l = {
                    top: s.start.top,
                    left: s.start.left,
                    width: 0
                };
            a && e.extend(l, t(a)), s.fixed && o.css({
                position: "absolute"
            }).animate({
                top: "+=" + i.scrollTop(),
                left: "+=" + i.scrollLeft()
            }, 0), o.animate(l, s.closeSpeed, n)
        };
    n.addEffect("apple", r, s)
}(jQuery),
function(e) {
    function t(t, n, i) {
        var s, a = this,
            o = t.add(this),
            l = t.find(i.tabs),
            c = n.jquery ? n : t.children(n);
        l.length || (l = t.children()), c.length || (c = t.parent().find(n)), c.length || (c = e(n)), e.extend(this, {
            click: function(n, c) {
                var u = l.eq(n),
                    d = !t.data("tabs");
                if ("string" == typeof n && n.replace("#", "") && (u = l.filter('[href*="' + n.replace("#", "") + '"]'), n = Math.max(l.index(u), 0)), i.rotate) {
                    var h = l.length - 1;
                    if (0 > n) return a.click(h, c);
                    if (n > h) return a.click(0, c)
                }
                if (!u.length) {
                    if (s >= 0) return a;
                    n = i.initialIndex, u = l.eq(n)
                }
                if (n === s) return a;
                if (c = c || e.Event(), c.type = "onBeforeClick", o.trigger(c, [n]), !c.isDefaultPrevented()) {
                    var p = d ? i.initialEffect && i.effect || "default" : i.effect;
                    return r[p].call(a, n, function() {
                        s = n, c.type = "onClick", o.trigger(c, [n])
                    }), l.removeClass(i.current), u.addClass(i.current), a
                }
            },
            getConf: function() {
                return i
            },
            getTabs: function() {
                return l
            },
            getPanes: function() {
                return c
            },
            getCurrentPane: function() {
                return c.eq(s)
            },
            getCurrentTab: function() {
                return l.eq(s)
            },
            getIndex: function() {
                return s
            },
            next: function() {
                return a.click(s + 1)
            },
            prev: function() {
                return a.click(s - 1)
            },
            destroy: function() {
                return l.off(i.event).removeClass(i.current), c.find('a[href^="#"]').off("click.T"), a
            }
        }), e.each("onBeforeClick,onClick".split(","), function(t, n) {
            e.isFunction(i[n]) && e(a).on(n, i[n]), a[n] = function(t) {
                return t && e(a).on(n, t), a
            }
        }), i.history && e.fn.history && (e.tools.history.init(l), i.event = "history"), l.each(function(t) {
            e(this).on(i.event, function(e) {
                return a.click(t, e), e.preventDefault()
            })
        }), c.find('a[href^="#"]').on("click.T", function(t) {
            a.click(e(this).attr("href"), t)
        }), location.hash && "a" == i.tabs && t.find('[href="' + location.hash + '"]').length ? a.click(location.hash) : (0 === i.initialIndex || i.initialIndex > 0) && a.click(i.initialIndex)
    }
    e.tools = e.tools || {
        version: "v1.2.7"
    }, e.tools.tabs = {
        conf: {
            tabs: "a",
            current: "current",
            onBeforeClick: null,
            onClick: null,
            effect: "default",
            initialEffect: !1,
            initialIndex: 0,
            event: "click",
            rotate: !1,
            slideUpSpeed: 400,
            slideDownSpeed: 400,
            history: !1
        },
        addEffect: function(e, t) {
            r[e] = t
        }
    };
    var n, i, r = {
        "default": function(e, t) {
            this.getPanes().hide().eq(e).show(), t.call()
        },
        fade: function(e, t) {
            var n = this.getConf(),
                i = n.fadeOutSpeed,
                r = this.getPanes();
            i ? r.fadeOut(i) : r.hide(), r.eq(e).fadeIn(n.fadeInSpeed, t)
        },
        slide: function(e, t) {
            var n = this.getConf();
            this.getPanes().slideUp(n.slideUpSpeed), this.getPanes().eq(e).slideDown(n.slideDownSpeed, t)
        },
        ajax: function(e, t) {
            this.getPanes().eq(0).load(this.getTabs().eq(e).attr("href"), t)
        }
    };
    e.tools.tabs.addEffect("horizontal", function(t, r) {
        if (!n) {
            var s = this.getPanes().eq(t),
                a = this.getCurrentPane();
            i || (i = this.getPanes().eq(0).width()), n = !0, s.show(), a.animate({
                width: 0
            }, {
                step: function(e) {
                    s.css("width", i - e)
                },
                complete: function() {
                    e(this).hide(), r.call(), n = !1
                }
            }), a.length || (r.call(), n = !1)
        }
    }), e.fn.tabs = function(n, i) {
        var r = this.data("tabs");
        return r && (r.destroy(), this.removeData("tabs")), e.isFunction(i) && (i = {
            onBeforeClick: i
        }), i = e.extend({}, e.tools.tabs.conf, i), this.each(function() {
            r = new t(e(this), n, i), e(this).data("tabs", r)
        }), i.api ? r : this
    }
}(jQuery),
function(e) {
    function t() {
        if (e.browser.msie) {
            var t = e(document).height(),
                n = e(window).height();
            return [window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, 20 > t - n ? n : t]
        }
        return [e(document).width(), e(document).height()]
    }

    function n(t) {
        return t ? t.call(e.mask) : void 0
    }
    e.tools = e.tools || {
        version: "v1.2.7"
    };
    var i;
    i = e.tools.expose = {
        conf: {
            maskId: "exposeMask",
            loadSpeed: "slow",
            closeSpeed: "fast",
            closeOnClick: !0,
            closeOnEsc: !0,
            zIndex: 9998,
            opacity: .8,
            startOpacity: 0,
            color: "#fff",
            onLoad: null,
            onClose: null
        }
    };
    var r, s, a, o, l;
    e.mask = {
        load: function(c, u) {
            if (a) return this;
            "string" == typeof c && (c = {
                color: c
            }), c = c || o, o = c = e.extend(e.extend({}, i.conf), c), r = e("#" + c.maskId), r.length || (r = e("<div/>").attr("id", c.maskId), e("body").append(r));
            var d = t();
            return r.css({
                position: "absolute",
                top: 0,
                left: 0,
                width: d[0],
                height: d[1],
                display: "none",
                opacity: c.startOpacity,
                zIndex: c.zIndex
            }), c.color && r.css("backgroundColor", c.color), n(c.onBeforeLoad) === !1 ? this : (c.closeOnEsc && e(document).on("keydown.mask", function(t) {
                27 == t.keyCode && e.mask.close(t)
            }), c.closeOnClick && r.on("click.mask", function(t) {
                e.mask.close(t)
            }), e(window).on("resize.mask", function() {
                e.mask.fit()
            }), u && u.length && (l = u.eq(0).css("zIndex"), e.each(u, function() {
                var t = e(this);
                /relative|absolute|fixed/i.test(t.css("position")) || t.css("position", "relative")
            }), s = u.css({
                zIndex: Math.max(c.zIndex + 1, "auto" == l ? 0 : l)
            })), r.css({
                display: "block"
            }).fadeTo(c.loadSpeed, c.opacity, function() {
                e.mask.fit(), n(c.onLoad), a = "full"
            }), a = !0, this)
        },
        close: function() {
            if (a) {
                if (n(o.onBeforeClose) === !1) return this;
                r.fadeOut(o.closeSpeed, function() {
                    n(o.onClose), s && s.css({
                        zIndex: l
                    }), a = !1
                }), e(document).off("keydown.mask"), r.off("click.mask"), e(window).off("resize.mask")
            }
            return this
        },
        fit: function() {
            if (a) {
                var e = t();
                r.css({
                    width: e[0],
                    height: e[1]
                })
            }
        },
        getMask: function() {
            return r
        },
        isLoaded: function(e) {
            return e ? "full" == a : a
        },
        getConf: function() {
            return o
        },
        getExposed: function() {
            return s
        }
    }, e.fn.mask = function(t) {
        return e.mask.load(t), this
    }, e.fn.expose = function(t) {
        return e.mask.load(t, this), this
    }
}(jQuery),
function(e) {
    function t(t, n, i) {
        var r = i.relative ? t.position().top : t.offset().top,
            s = i.relative ? t.position().left : t.offset().left,
            a = i.position[0];
        r -= n.outerHeight() - i.offset[0], s += t.outerWidth() + i.offset[1], /iPad/i.test(navigator.userAgent) && (r -= e(window).scrollTop());
        var o = n.outerHeight() + t.outerHeight();
        "center" == a && (r += o / 2), "bottom" == a && (r += o), a = i.position[1];
        var l = n.outerWidth() + t.outerWidth();
        return "center" == a && (s -= l / 2), "left" == a && (s -= l), {
            top: r,
            left: s
        }
    }

    function n(n, r) {
        var s, a, o = this,
            l = n.add(o),
            c = 0,
            u = 0,
            d = n.attr("title"),
            h = n.attr("data-tooltip"),
            p = i[r.effect],
            f = n.is(":input"),
            g = f && n.is(":checkbox, :radio, select, :button, :submit"),
            m = n.attr("type"),
            v = r.events[m] || r.events[f ? g ? "widget" : "input" : "def"];
        if (!p) throw 'Nonexistent effect "' + r.effect + '"';
        if (v = v.split(/,\s*/), 2 != v.length) throw "Tooltip: bad events configuration for " + m;
        n.on(v[0], function(e) {
            clearTimeout(c), r.predelay ? u = setTimeout(function() {
                o.show(e)
            }, r.predelay) : o.show(e)
        }).on(v[1], function(e) {
            clearTimeout(u), r.delay ? c = setTimeout(function() {
                o.hide(e)
            }, r.delay) : o.hide(e)
        }), d && r.cancelDefault && (n.removeAttr("title"), n.data("title", d)), e.extend(o, {
            show: function(i) {
                if (!s && (h ? s = e(h) : r.tip ? s = e(r.tip).eq(0) : d ? s = e(r.layout).addClass(r.tipClass).appendTo(document.body).hide().append(d) : (s = n.next(), s.length || (s = n.parent().next())), !s.length)) throw "Cannot find tooltip for " + n;
                if (o.isShown()) return o;
                s.stop(!0, !0);
                var f = t(n, s, r);
                if (r.tip && s.html(n.data("title")), i = e.Event(), i.type = "onBeforeShow", l.trigger(i, [f]), i.isDefaultPrevented()) return o;
                f = t(n, s, r), s.css({
                    position: "absolute",
                    top: f.top,
                    left: f.left
                }), a = !0, p[0].call(o, function() {
                    i.type = "onShow", a = "full", l.trigger(i)
                });
                var g = r.events.tooltip.split(/,\s*/);
                return s.data("__set") || (s.off(g[0]).on(g[0], function() {
                    clearTimeout(c), clearTimeout(u)
                }), g[1] && !n.is("input:not(:checkbox, :radio), textarea") && s.off(g[1]).on(g[1], function(e) {
                    e.relatedTarget != n[0] && n.trigger(v[1].split(" ")[0])
                }), r.tip || s.data("__set", !0)), o
            },
            hide: function(t) {
                return s && o.isShown() ? (t = e.Event(), t.type = "onBeforeHide", l.trigger(t), t.isDefaultPrevented() ? void 0 : (a = !1, i[r.effect][1].call(o, function() {
                    t.type = "onHide", l.trigger(t)
                }), o)) : o
            },
            isShown: function(e) {
                return e ? "full" == a : a
            },
            getConf: function() {
                return r
            },
            getTip: function() {
                return s
            },
            getTrigger: function() {
                return n
            }
        }), e.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","), function(t, n) {
            e.isFunction(r[n]) && e(o).on(n, r[n]), o[n] = function(t) {
                return t && e(o).on(n, t), o
            }
        })
    }
    e.tools = e.tools || {
        version: "v1.2.7"
    }, e.tools.tooltip = {
        conf: {
            effect: "toggle",
            fadeOutSpeed: "fast",
            predelay: 0,
            delay: 30,
            opacity: 1,
            tip: 0,
            fadeIE: !1,
            position: ["top", "center"],
            offset: [0, 0],
            relative: !1,
            cancelDefault: !0,
            events: {
                def: "mouseenter,mouseleave",
                input: "focus,blur",
                widget: "focus mouseenter,blur mouseleave",
                tooltip: "mouseenter,mouseleave"
            },
            layout: "<div/>",
            tipClass: "tooltip"
        },
        addEffect: function(e, t, n) {
            i[e] = [t, n]
        }
    };
    var i = {
        toggle: [function(e) {
            var t = this.getConf(),
                n = this.getTip(),
                i = t.opacity;
            1 > i && n.css({
                opacity: i
            }), n.show(), e.call()
        }, function(e) {
            this.getTip().hide(), e.call()
        }],
        fade: [function(t) {
            var n = this.getConf();
            !e.browser.msie || n.fadeIE ? this.getTip().fadeTo(n.fadeInSpeed, n.opacity, t) : (this.getTip().show(), t())
        }, function(t) {
            var n = this.getConf();
            !e.browser.msie || n.fadeIE ? this.getTip().fadeOut(n.fadeOutSpeed, t) : (this.getTip().hide(), t())
        }]
    };
    e.fn.tooltip = function(t) {
        var i = this.data("tooltip");
        return i ? i : (t = e.extend(!0, {}, e.tools.tooltip.conf, t), "string" == typeof t.position && (t.position = t.position.split(/,?\s/)), this.each(function() {
            i = new n(e(this), t), e(this).data("tooltip", i)
        }), t.api ? i : this)
    }
}(jQuery),
function(e) {
    var t = e.tools.tooltip;
    e.extend(t.conf, {
        direction: "up",
        bounce: !1,
        slideOffset: 10,
        slideInSpeed: 200,
        slideOutSpeed: 200,
        slideFade: !e.browser.msie
    });
    var n = {
        up: ["-", "top"],
        down: ["+", "top"],
        left: ["-", "left"],
        right: ["+", "left"]
    };
    t.addEffect("slide", function(e) {
        var t = this.getConf(),
            i = this.getTip(),
            r = t.slideFade ? {
                opacity: t.opacity
            } : {},
            s = n[t.direction] || n.up;
        r[s[1]] = s[0] + "=" + t.slideOffset, t.slideFade && i.css({
            opacity: 0
        }), i.show().animate(r, t.slideInSpeed, e)
    }, function(t) {
        var i = this.getConf(),
            r = i.slideOffset,
            s = i.slideFade ? {
                opacity: 0
            } : {},
            a = n[i.direction] || n.up,
            o = "" + a[0];
        i.bounce && (o = "+" == o ? "-" : "+"), s[a[1]] = o + "=" + r, this.getTip().animate(s, i.slideOutSpeed, function() {
            e(this).hide(), t.call()
        })
    })
}(jQuery),
function(e) {
    e.extend(e.fn, {
        validate: function(t) {
            if (!this.length) return void(t && t.debug && window.console && console.warn("nothing selected, can't validate, returning nothing"));
            var n = e.data(this[0], "validator");
            return n ? n : (n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.find("input, button").filter(".cancel").click(function() {
                n.cancelSubmit = !0
            }), n.settings.submitHandler && this.find("input, button").filter(":submit").click(function() {
                n.submitButton = this
            }), this.submit(function(t) {
                function i() {
                    if (n.settings.submitHandler) {
                        if (n.submitButton) var t = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(n.submitButton.value).appendTo(n.currentForm);
                        return n.settings.submitHandler.call(n, n.currentForm), n.submitButton && t.remove(), !1
                    }
                    return !0
                }
                return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
            })), n)
        },
        valid: function() {
            if (e(this[0]).is("form")) return this.validate().form();
            var t = !0,
                n = e(this[0].form).validate();
            return this.each(function() {
                t &= n.element(this)
            }), t
        },
        removeAttrs: function(t) {
            var n = {},
                i = this;
            return e.each(t.split(/\s/), function(e, t) {
                n[t] = i.attr(t), i.removeAttr(t)
            }), n
        },
        rules: function(t, n) {
            var i = this[0];
            if (t) {
                var r = e.data(i.form, "validator").settings,
                    s = r.rules,
                    a = e.validator.staticRules(i);
                switch (t) {
                    case "add":
                        e.extend(a, e.validator.normalizeRule(n)), s[i.name] = a, n.messages && (r.messages[i.name] = e.extend(r.messages[i.name], n.messages));
                        break;
                    case "remove":
                        if (!n) return delete s[i.name], a;
                        var o = {};
                        return e.each(n.split(/\s/), function(e, t) {
                            o[t] = a[t], delete a[t]
                        }), o
                }
            }
            var l = e.validator.normalizeRules(e.extend({}, e.validator.metadataRules(i), e.validator.classRules(i), e.validator.attributeRules(i), e.validator.staticRules(i)), i);
            if (l.required) {
                var c = l.required;
                delete l.required, l = e.extend({
                    required: c
                }, l)
            }
            return l
        }
    }), e.extend(e.expr[":"], {
        blank: function(t) {
            return !e.trim("" + t.value)
        },
        filled: function(t) {
            return !!e.trim("" + t.value)
        },
        unchecked: function(e) {
            return !e.checked
        }
    }), e.validator = function(t, n) {
        this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init()
    }, e.validator.format = function(t, n) {
        return 1 == arguments.length ? function() {
            var n = e.makeArray(arguments);
            return n.unshift(t), e.validator.format.apply(this, n)
        } : (arguments.length > 2 && n.constructor != Array && (n = e.makeArray(arguments).slice(1)), n.constructor != Array && (n = [n]), e.each(n, function(e, n) {
            t = t.replace(new RegExp("\\{" + e + "\\}", "g"), n)
        }), t)
    }, e.extend(e.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: e([]),
            errorLabelContainer: e([]),
            onsubmit: !0,
            ignore: [],
            ignoreTitle: !1,
            onfocusin: function(e) {
                this.lastActive = e, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.errorsFor(e).hide())
            },
            onfocusout: function(e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function(e) {
                (e.name in this.submitted || e == this.lastElement) && this.element(e)
            },
            onclick: function(e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function(t, n, i) {
                e(t).addClass(n).removeClass(i)
            },
            unhighlight: function(t, n, i) {
                e(t).removeClass(n).addClass(i)
            }
        },
        setDefaults: function(t) {
            e.extend(e.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            accept: "Please enter a value with a valid extension.",
            maxlength: e.validator.format("Please enter no more than {0} characters."),
            minlength: e.validator.format("Please enter at least {0} characters."),
            rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
            range: e.validator.format("Please enter a value between {0} and {1}."),
            max: e.validator.format("Please enter a value less than or equal to {0}."),
            min: e.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function t(t) {
                    var n = e.data(this[0].form, "validator"),
                        i = "on" + t.type.replace(/^validate/, "");
                    n.settings[i] && n.settings[i].call(n, this[0])
                }
                this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var n = this.groups = {};
                e.each(this.settings.groups, function(t, i) {
                    e.each(i.split(/\s/), function(e, i) {
                        n[i] = t
                    })
                });
                var i = this.settings.rules;
                e.each(i, function(t, n) {
                    i[t] = e.validator.normalizeRule(n)
                }), e(this.currentForm).validateDelegate(":text, :password, :file, select, textarea", "focusin focusout keyup", t).validateDelegate(":radio, :checkbox, select, option", "click", t), this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                return this.valid()
            },
            element: function(t) {
                t = this.clean(t), this.lastElement = t, this.prepareElement(t), this.currentElements = e(t);
                var n = this.check(t);
                return n ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), n
            },
            showErrors: function(t) {
                if (t) {
                    e.extend(this.errorMap, t), this.errorList = [];
                    for (var n in t) this.errorList.push({
                        message: t[n],
                        element: this.findByName(n)[0]
                    });
                    this.successList = e.grep(this.successList, function(e) {
                        return !(e.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                e.fn.resetForm && e(this.currentForm).resetForm(), this.submitted = {}, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(e) {
                var t = 0;
                for (var n in e) t++;
                return t
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return 0 == this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 == e.grep(this.errorList, function(e) {
                    return e.element.name == t.name
                }).length && t
            },
            elements: function() {
                var t = this,
                    n = {};
                return e([]).add(this.currentForm.elements).filter(":input").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in n || !t.objectLength(e(this).rules()) ? !1 : (n[this.name] = !0, !0)
                })
            },
            clean: function(t) {
                return e(t)[0]
            },
            errors: function() {
                return e(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext)
            },
            reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]), this.currentElements = e([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(e) {
                this.reset(), this.toHide = this.errorsFor(e)
            },
            check: function(t) {
                t = this.clean(t), this.checkable(t) && (t = this.findByName(t.name)[0]);
                var n = e(t).rules(),
                    i = !1;
                for (method in n) {
                    var r = {
                        method: method,
                        parameters: n[method]
                    };
                    try {
                        var s = e.validator.methods[method].call(this, t.value.replace(/\r/g, ""), t, r.parameters);
                        if ("dependency-mismatch" == s) {
                            i = !0;
                            continue
                        }
                        if (i = !1, "pending" == s) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!s) return this.formatAndAdd(t, r), !1
                    } catch (a) {
                        throw this.settings.debug && window.console && console.log("exception occured when checking element " + t.id + ", check the '" + r.method + "' method", a), a
                    }
                }
                return i ? void 0 : (this.objectLength(n) && this.successList.push(t), !0)
            },
            customMetaMessage: function(t, n) {
                if (e.metadata) {
                    var i = this.settings.meta ? e(t).metadata()[this.settings.meta] : e(t).metadata();
                    return i && i.messages && i.messages[n]
                }
            },
            customMessage: function(e, t) {
                var n = this.settings.messages[e];
                return n && (n.constructor == String ? n : n[t])
            },
            findDefined: function() {
                for (var e = 0; e < arguments.length; e++)
                    if (void 0 !== arguments[e]) return arguments[e];
                return void 0
            },
            defaultMessage: function(t, n) {
                return this.findDefined(this.customMessage(t.name, n), this.customMetaMessage(t, n), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n], "<strong>Warning: No message defined for " + t.name + "</strong>")
            },
            formatAndAdd: function(e, t) {
                var n = this.defaultMessage(e, t.method),
                    i = /\$?\{(\d+)\}/g;
                "function" == typeof n ? n = n.call(this, t.parameters, e) : i.test(n) && (n = jQuery.format(n.replace(i, "{$1}"), t.parameters)), this.errorList.push({
                    message: n,
                    element: e
                }), this.errorMap[e.name] = n, this.submitted[e.name] = n
            },
            addWrapper: function(e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
            },
            defaultShowErrors: function() {
                for (var e = 0; this.errorList[e]; e++) {
                    var t = this.errorList[e];
                    this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass), this.showLabel(t.element, t.message)
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (var e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                if (this.settings.unhighlight)
                    for (var e = 0, n = this.validElements(); n[e]; e++) this.settings.unhighlight.call(this, n[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return e(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, n) {
                var i = this.errorsFor(t);
                i.length ? (i.removeClass().addClass(this.settings.errorClass), i.attr("generated") && i.html(n)) : (i = e("<" + this.settings.errorElement + "/>").attr({
                    "for": this.idOrName(t),
                    generated: !0
                }).addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (i = i.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(i).length || (this.settings.errorPlacement ? this.settings.errorPlacement(i, e(t)) : i.insertAfter(t))), !n && this.settings.success && (i.text(""), "string" == typeof this.settings.success ? i.addClass(this.settings.success) : this.settings.success(i)), this.toShow = this.toShow.add(i)
            },
            errorsFor: function(t) {
                var n = this.idOrName(t);
                return this.errors().filter(function() {
                    return e(this).attr("for") == n
                })
            },
            idOrName: function(e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
            },
            checkable: function(e) {
                return /radio|checkbox/i.test(e.type)
            },
            findByName: function(t) {
                var n = this.currentForm;
                return e(document.getElementsByName(t)).map(function(e, i) {
                    return i.form == n && i.name == t && i || null
                })
            },
            getLength: function(t, n) {
                switch (n.nodeName.toLowerCase()) {
                    case "select":
                        return e("option:selected", n).length;
                    case "input":
                        if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(e, t) {
                return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : !0
            },
            dependTypes: {
                "boolean": function(e) {
                    return e
                },
                string: function(t, n) {
                    return !!e(t, n.form).length
                },
                "function": function(e, t) {
                    return e(t)
                }
            },
            optional: function(t) {
                return !e.validator.methods.required.call(this, e.trim(t.value), t) && "dependency-mismatch"
            },
            startRequest: function(e) {
                this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0)
            },
            stopRequest: function(t, n) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], n && 0 == this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 == this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(t) {
                return e.data(t, "previousValue") || e.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            dateDE: {
                dateDE: !0
            },
            number: {
                number: !0
            },
            numberDE: {
                numberDE: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, n) {
            t.constructor == String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var n = {},
                i = e(t).attr("class");
            return i && e.each(i.split(" "), function() {
                this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
            }), n
        },
        attributeRules: function(t) {
            var n = {},
                i = e(t);
            for (method in e.validator.methods) {
                var r = i.attr(method);
                r && (n[method] = r)
            }
            return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
        },
        metadataRules: function(t) {
            if (!e.metadata) return {};
            var n = e.data(t.form, "validator").settings.meta;
            return n ? e(t).metadata()[n] : e(t).metadata()
        },
        staticRules: function(t) {
            var n = {},
                i = e.data(t.form, "validator");
            return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n
        },
        normalizeRules: function(t, n) {
            return e.each(t, function(i, r) {
                if (r === !1) return void delete t[i];
                if (r.param || r.depends) {
                    var s = !0;
                    switch (typeof r.depends) {
                        case "string":
                            s = !!e(r.depends, n.form).length;
                            break;
                        case "function":
                            s = r.depends.call(n, n)
                    }
                    s ? t[i] = void 0 !== r.param ? r.param : !0 : delete t[i]
                }
            }), e.each(t, function(i, r) {
                t[i] = e.isFunction(r) ? r(n) : r
            }), e.each(["minlength", "maxlength", "min", "max"], function() {
                t[this] && (t[this] = Number(t[this]))
            }), e.each(["rangelength", "range"], function() {
                t[this] && (t[this] = [Number(t[this][0]), Number(t[this][1])])
            }), e.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t.messages && delete t.messages, t
        },
        normalizeRule: function(t) {
            if ("string" == typeof t) {
                var n = {};
                e.each(t.split(/\s/), function() {
                    n[this] = !0
                }), t = n
            }
            return t
        },
        addMethod: function(t, n, i) {
            e.validator.methods[t] = n, e.validator.messages[t] = void 0 != i ? i : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, n, i) {
                if (!this.depend(i, n)) return "dependency-mismatch";
                switch (n.nodeName.toLowerCase()) {
                    case "select":
                        var r = e(n).val();
                        return r && r.length > 0;
                    case "input":
                        if (this.checkable(n)) return this.getLength(t, n) > 0;
                    default:
                        return e.trim(t).length > 0
                }
            },
            remote: function(t, n, i) {
                if (this.optional(n)) return "dependency-mismatch";
                var r = this.previousValue(n);
                if (this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), r.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = r.message, i = "string" == typeof i && {
                        url: i
                    } || i, r.old !== t) {
                    r.old = t;
                    var s = this;
                    this.startRequest(n);
                    var a = {};
                    return a[n.name] = t, e.ajax(e.extend(!0, {
                        url: i,
                        mode: "abort",
                        port: "validate" + n.name,
                        dataType: "json",
                        data: a,
                        success: function(i) {
                            s.settings.messages[n.name].remote = r.originalMessage;
                            var a = i === !0;
                            if (a) {
                                var o = s.formSubmitted;
                                s.prepareElement(n), s.formSubmitted = o, s.successList.push(n), s.showErrors()
                            } else {
                                var l = {},
                                    c = r.message = i || s.defaultMessage(n, "remote");
                                l[n.name] = e.isFunction(c) ? c(t) : c, s.showErrors(l)
                            }
                            r.valid = a, s.stopRequest(n, a)
                        }
                    }, i)), "pending"
                }
                return this.pending[n.name] ? "pending" : r.valid
            },
            minlength: function(t, n, i) {
                return this.optional(n) || this.getLength(e.trim(t), n) >= i
            },
            maxlength: function(t, n, i) {
                return this.optional(n) || this.getLength(e.trim(t), n) <= i
            },
            rangelength: function(t, n, i) {
                var r = this.getLength(e.trim(t), n);
                return this.optional(n) || r >= i[0] && r <= i[1]
            },
            min: function(e, t, n) {
                return this.optional(t) || e >= n
            },
            max: function(e, t, n) {
                return this.optional(t) || n >= e
            },
            range: function(e, t, n) {
                return this.optional(t) || e >= n[0] && e <= n[1]
            },
            email: function(e, t) {
                return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(e)
            },
            url: function(e, t) {
                return this.optional(t) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)
            },
            date: function(e, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(e))
            },
            dateISO: function(e, t) {
                return this.optional(t) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(e)
            },
            number: function(e, t) {
                return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(e)
            },
            digits: function(e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            },
            creditcard: function(e, t) {
                if (this.optional(t)) return "dependency-mismatch";
                if (/[^0-9-]+/.test(e)) return !1;
                var n = 0,
                    i = 0,
                    r = !1;
                e = e.replace(/\D/g, "");
                for (var s = e.length - 1; s >= 0; s--) {
                    var a = e.charAt(s),
                        i = parseInt(a, 10);
                    r && (i *= 2) > 9 && (i -= 9), n += i, r = !r
                }
                return n % 10 == 0
            },
            accept: function(e, t, n) {
                return n = "string" == typeof n ? n.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(t) || e.match(new RegExp(".(" + n + ")$", "i"))
            },
            equalTo: function(t, n, i) {
                var r = e(i).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    e(n).valid()
                });
                return t == r.val()
            }
        }
    }), e.format = e.validator.format
}(jQuery),
function(e) {
    var t = e.ajax,
        n = {};
    e.ajax = function(i) {
        i = e.extend(i, e.extend({}, e.ajaxSettings, i));
        var r = i.port;
        return "abort" == i.mode ? (n[r] && n[r].abort(), n[r] = t.apply(this, arguments)) : t.apply(this, arguments)
    }
}(jQuery),
function(e) {
    jQuery.event.special.focusin || jQuery.event.special.focusout || !document.addEventListener || e.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, n) {
        function i(t) {
            return t = e.event.fix(t), t.type = n, e.event.handle.call(this, t)
        }
        e.event.special[n] = {
            setup: function() {
                this.addEventListener(t, i, !0)
            },
            teardown: function() {
                this.removeEventListener(t, i, !0)
            },
            handler: function(t) {
                return arguments[0] = e.event.fix(t), arguments[0].type = n, e.event.handle.apply(this, arguments)
            }
        }
    }), e.extend(e.fn, {
        validateDelegate: function(t, n, i) {
            return this.bind(n, function(n) {
                var r = e(n.target);
                return r.is(t) ? i.apply(r, arguments) : void 0
            })
        }
    })
}(jQuery),
function(e) {
    function t(t, n, i, r) {
        var s = {
            data: r || (n ? n.data : {}),
            _wrap: n ? n._wrap : null,
            tmpl: null,
            parent: n || null,
            nodes: [],
            calls: c,
            nest: u,
            wrap: d,
            html: h,
            update: p
        };
        return t && e.extend(s, t, {
            nodes: [],
            parent: n
        }), i && (s.tmpl = i, s._ctnt = s._ctnt || s.tmpl(e, s), s.key = ++_, (w.length ? b : y)[_] = s), s
    }

    function n(t, r, s) {
        var a, o = s ? e.map(s, function(e) {
            return "string" == typeof e ? t.key ? e.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + m + '="' + t.key + '" $2') : e : n(e, t, e._ctnt)
        }) : t;
        return r ? o : (o = o.join(""), o.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function(t, n, r, s) {
            a = e(r).get(), l(a), n && (a = i(n).concat(a)), s && (a = a.concat(i(s)))
        }), a ? a : i(o))
    }

    function i(t) {
        var n = document.createElement("div");
        return n.innerHTML = t, e.makeArray(n.childNodes)
    }

    function r(t) {
        return new Function("jQuery", "$item", "var $=jQuery,call,_=[],$data=$item.data;with($data){_.push('" + e.trim(t).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function(t, n, i, r, s, o, l) {
            var c, u, d, h = e.tmpl.tag[i];
            if (!h) throw "Template command not found: " + i;
            return c = h._default || [], o && !/\w$/.test(s) && (s += o, o = ""), s ? (s = a(s), l = l ? "," + a(l) + ")" : o ? ")" : "", u = o ? s.indexOf(".") > -1 ? s + a(o) : "(" + s + ").call($item" + l : s, d = o ? u : "(typeof(" + s + ")==='function'?(" + s + ").call($item):(" + s + "))") : d = u = c.$1 || "null", r = a(r), "');" + h[n ? "close" : "open"].split("$notnull_1").join(s ? "typeof(" + s + ")!=='undefined' && (" + s + ")!=null" : "true").split("$1a").join(d).split("$1").join(u).split("$2").join(r || c.$2 || "") + "_.push('"
        }) + "');}return _;")
    }

    function s(t, i) {
        t._wrap = n(t, !0, e.isArray(i) ? i : [v.test(i) ? i : e(i).html()]).join("")
    }

    function a(e) {
        return e ? e.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null
    }

    function o(e) {
        var t = document.createElement("div");
        return t.appendChild(e.cloneNode(!0)), t.innerHTML
    }

    function l(n) {
        function i(n) {
            function i(e) {
                e += c, a = u[e] = u[e] || t(a, y[a.parent.key + c] || a.parent)
            }
            var r, s, a, o, l = n;
            if (o = n.getAttribute(m)) {
                for (; l.parentNode && 1 === (l = l.parentNode).nodeType && !(r = l.getAttribute(m)););
                r !== o && (l = l.parentNode ? 11 === l.nodeType ? 0 : l.getAttribute(m) || 0 : 0, (a = y[o]) || (a = b[o], a = t(a, y[l] || b[l]), a.key = ++_, y[_] = a), C && i(o)), n.removeAttribute(m)
            } else C && (a = e.data(n, "tmplItem")) && (i(a.key), y[a.key] = a, l = e.data(n.parentNode, "tmplItem"), l = l ? l.key : 0);
            if (a) {
                for (s = a; s && s.key != l;) s.nodes.push(n), s = s.parent;
                delete a._ctnt, delete a._wrap, e.data(n, "tmplItem", a)
            }
        }
        var r, s, a, o, l, c = "_" + C,
            u = {};
        for (a = 0, o = n.length; o > a; a++)
            if (1 === (r = n[a]).nodeType) {
                for (s = r.getElementsByTagName("*"), l = s.length - 1; l >= 0; l--) i(s[l]);
                i(r)
            }
    }

    function c(e, t, n, i) {
        return e ? void w.push({
            _: e,
            tmpl: t,
            item: this,
            data: n,
            options: i
        }) : w.pop()
    }

    function u(t, n, i) {
        return e.tmpl(e.template(t), n, i, this)
    }

    function d(t, n) {
        var i = t.options || {};
        return i.wrapped = n, e.tmpl(e.template(t.tmpl), t.data, i, t.item)
    }

    function h(t, n) {
        var i = this._wrap;
        return e.map(e(e.isArray(i) ? i.join("") : i).filter(t || "*"), function(e) {
            return n ? e.innerText || e.textContent : e.outerHTML || o(e)
        })
    }

    function p() {
        var t = this.nodes;
        e.tmpl(null, null, null, this).insertBefore(t[0]), e(t).remove()
    }
    var f, g = e.fn.domManip,
        m = "_tmplitem",
        v = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
        y = {},
        b = {},
        x = {
            key: 0,
            data: {}
        },
        _ = 0,
        C = 0,
        w = [];
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, n) {
        e.fn[t] = function(i) {
            var r, s, a, o, l = [],
                c = e(i),
                u = 1 === this.length && this[0].parentNode;
            if (f = y || {}, u && 11 === u.nodeType && 1 === u.childNodes.length && 1 === c.length) c[n](this[0]), l = this;
            else {
                for (s = 0, a = c.length; a > s; s++) C = s, r = (s > 0 ? this.clone(!0) : this).get(), e(c[s])[n](r), l = l.concat(r);
                C = 0, l = this.pushStack(l, t, c.selector)
            }
            return o = f, f = null, e.tmpl.complete(o), l
        }
    }), e.fn.extend({
        tmpl: function(t, n, i) {
            return e.tmpl(this[0], t, n, i)
        },
        tmplItem: function() {
            return e.tmplItem(this[0])
        },
        template: function(t) {
            return e.template(t, this[0])
        },
        domManip: function(t, n, i) {
            if (t[0] && e.isArray(t[0])) {
                for (var r, s = e.makeArray(arguments), a = t[0], o = a.length, l = 0; o > l && !(r = e.data(a[l++], "tmplItem")););
                r && C && (s[2] = function(t) {
                    e.tmpl.afterManip(this, t, i)
                }), g.apply(this, s)
            } else g.apply(this, arguments);
            return C = 0, f || e.tmpl.complete(y), this
        }
    }), e.extend({
        tmpl: function(i, r, a, o) {
            var l, c = !o;
            if (c) o = x, i = e.template[i] || e.template(null, i), b = {};
            else if (!i) return i = o.tmpl, y[o.key] = o, o.nodes = [], o.wrapped && s(o, o.wrapped), e(n(o, null, o.tmpl(e, o)));
            return i ? ("function" == typeof r && (r = r.call(o || {})), a && a.wrapped && s(a, a.wrapped), l = e.isArray(r) ? e.map(r, function(e) {
                return e ? t(a, o, i, e) : null
            }) : [t(a, o, i, r)], c ? e(n(o, null, l)) : l) : []
        },
        tmplItem: function(t) {
            var n;
            for (t instanceof e && (t = t[0]); t && 1 === t.nodeType && !(n = e.data(t, "tmplItem")) && (t = t.parentNode););
            return n || x
        },
        template: function(t, n) {
            return n ? ("string" == typeof n ? n = r(n) : n instanceof e && (n = n[0] || {}), n.nodeType && (n = e.data(n, "tmpl") || e.data(n, "tmpl", r(n.innerHTML))), "string" == typeof t ? e.template[t] = n : n) : t ? "string" != typeof t ? e.template(null, t) : e.template[t] || e.template(null, v.test(t) ? t : e(t)) : null
        },
        encode: function(e) {
            return ("" + e).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
        }
    }), e.extend(e.tmpl, {
        tag: {
            tmpl: {
                _default: {
                    $2: "null"
                },
                open: "if($notnull_1){_=_.concat($item.nest($1,$2));}"
            },
            wrap: {
                _default: {
                    $2: "null"
                },
                open: "$item.calls(_,$1,$2);_=[];",
                close: "call=$item.calls();_=call._.concat($item.wrap(call,_));"
            },
            each: {
                _default: {
                    $2: "$index, $value"
                },
                open: "if($notnull_1){$.each($1a,function($2){with(this){",
                close: "}});}"
            },
            "if": {
                open: "if(($notnull_1) && $1a){",
                close: "}"
            },
            "else": {
                _default: {
                    $1: "true"
                },
                open: "}else if(($notnull_1) && $1a){"
            },
            html: {
                open: "if($notnull_1){_.push($1a);}"
            },
            "=": {
                _default: {
                    $1: "$data"
                },
                open: "if($notnull_1){_.push($.encode($1a));}"
            },
            "!": {
                open: ""
            }
        },
        complete: function() {
            y = {}
        },
        afterManip: function(t, n, i) {
            var r = 11 === n.nodeType ? e.makeArray(n.childNodes) : 1 === n.nodeType ? [n] : [];
            i.call(t, n), l(r), C++
        }
    })
}(jQuery),
function(e) {
    var t = {},
        n = {
            mode: "horizontal",
            slideSelector: "",
            infiniteLoop: !0,
            hideControlOnEnd: !1,
            speed: 500,
            easing: null,
            slideMargin: 0,
            startSlide: 0,
            randomStart: !1,
            captions: !1,
            ticker: !1,
            tickerHover: !1,
            adaptiveHeight: !1,
            adaptiveHeightSpeed: 500,
            video: !1,
            useCSS: !0,
            preloadImages: "visible",
            touchEnabled: !0,
            swipeThreshold: 50,
            oneToOneTouch: !0,
            preventDefaultSwipeX: !0,
            preventDefaultSwipeY: !1,
            pager: !0,
            pagerType: "full",
            pagerShortSeparator: " / ",
            pagerSelector: null,
            buildPager: null,
            pagerCustom: null,
            controls: !0,
            nextText: "Next",
            prevText: "Prev",
            nextSelector: null,
            prevSelector: null,
            autoControls: !1,
            startText: "Start",
            stopText: "Stop",
            autoControlsCombine: !1,
            autoControlsSelector: null,
            nextOnImage: !1,
            auto: !1,
            pause: 4e3,
            autoStart: !0,
            autoDirection: "next",
            autoHover: !1,
            autoDelay: 0,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 0,
            slideWidth: 0,
            onSliderLoad: function() {},
            onSlideBefore: function() {},
            onSlideAfter: function() {},
            onSlideNext: function() {},
            onSlidePrev: function() {}
        };
    e.fn.bxSlider = function(r) {
        if (0 != this.length) {
            if (this.length > 1) return this.each(function() {
                e(this).bxSlider(r)
            }), this;
            var s = {},
                a = this;
            t.el = this;
            var o = e(window).width(),
                l = e(window).height(),
                c = function() {
                    s.settings = e.extend({}, n, r), s.settings.slideWidth = parseInt(s.settings.slideWidth), s.children = a.children(s.settings.slideSelector), s.children.length < s.settings.minSlides && (s.settings.minSlides = s.children.length), s.children.length < s.settings.maxSlides && (s.settings.maxSlides = s.children.length), s.settings.randomStart && (s.settings.startSlide = Math.floor(Math.random() * s.children.length)), s.active = {
                        index: s.settings.startSlide
                    }, s.carousel = s.settings.minSlides > 1 || s.settings.maxSlides > 1, s.carousel && (s.settings.preloadImages = "all"), s.minThreshold = s.settings.minSlides * s.settings.slideWidth + (s.settings.minSlides - 1) * s.settings.slideMargin, s.maxThreshold = s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin, s.working = !1, s.controls = {}, s.interval = null, s.animProp = "vertical" == s.settings.mode ? "top" : "left", s.usingCSS = s.settings.useCSS && "fade" != s.settings.mode && function() {
                        var e = document.createElement("div"),
                            t = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var n in t)
                            if (void 0 !== e.style[t[n]]) return s.cssPrefix = t[n].replace("Perspective", "").toLowerCase(), s.animProp = "-" + s.cssPrefix + "-transform", !0;
                        return !1
                    }(), "vertical" == s.settings.mode && (s.settings.maxSlides = s.settings.minSlides), u()
                },
                u = function() {
                    a.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), s.viewport = a.parent(), s.loader = e('<div class="bx-loading" />'), s.viewport.prepend(s.loader), a.css({
                        width: "horizontal" == s.settings.mode ? 215 * s.children.length + "%" : "auto",
                        position: "relative"
                    }), s.usingCSS && s.settings.easing ? a.css("-" + s.cssPrefix + "-transition-timing-function", s.settings.easing) : s.settings.easing || (s.settings.easing = "swing");
                    g();
                    if (s.viewport.css({
                            width: "100%",
                            overflow: "hidden",
                            position: "relative"
                        }), s.viewport.parent().css({
                            maxWidth: p()
                        }), s.children.css({
                            "float": "horizontal" == s.settings.mode ? "left" : "none",
                            listStyle: "none",
                            position: "relative"
                        }), s.children.width(f()), "horizontal" == s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginRight", s.settings.slideMargin), "vertical" == s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginBottom", s.settings.slideMargin), "fade" == s.settings.mode && (s.children.css({
                            position: "absolute",
                            zIndex: 0,
                            display: "none"
                        }), s.children.eq(s.settings.startSlide).css({
                            zIndex: 50,
                            display: "block"
                        })), s.controls.el = e('<div class="bx-controls" />'), s.settings.captions && S(), s.settings.infiniteLoop && "fade" != s.settings.mode && !s.settings.ticker) {
                        var t = "vertical" == s.settings.mode ? s.settings.minSlides : s.settings.maxSlides,
                            n = s.children.slice(0, t).clone().addClass("bx-clone"),
                            i = s.children.slice(-t).clone().addClass("bx-clone");
                        a.append(n).prepend(i)
                    }
                    s.active.last = s.settings.startSlide == m() - 1, s.settings.video && a.fitVids();
                    var r = s.children.eq(s.settings.startSlide);
                    "all" == s.settings.preloadImages && (r = a.children()), s.settings.nextOnImage && x(), s.settings.ticker || (s.settings.pager && w(), s.settings.controls && k(), s.settings.auto && s.settings.autoControls && T(), (s.settings.controls || s.settings.autoControls || s.settings.pager) && s.viewport.after(s.controls.el)), r.imagesLoaded(d)
                },
                d = function() {
                    s.loader.remove(), y(), "vertical" == s.settings.mode && (s.settings.adaptiveHeight = !0), s.viewport.height(h()), a.redrawSlider(), s.settings.onSliderLoad(s.active.index), s.initialized = !0, e(window).bind("resize", q), s.settings.auto && s.settings.autoStart && $(), s.settings.ticker && O(), s.settings.pager && A(s.settings.startSlide), s.settings.controls && L(), s.settings.touchEnabled && !s.settings.ticker && j()
                },
                h = function() {
                    var t = 0,
                        n = e();
                    if ("vertical" == s.settings.mode || s.settings.adaptiveHeight)
                        if (s.carousel) {
                            var r = 1 == s.settings.moveSlides ? s.active.index : s.active.index * v();
                            for (n = s.children.eq(r), i = 1; i <= s.settings.maxSlides - 1; i++) n = n.add(r + i >= s.children.length ? s.children.eq(i - 1) : s.children.eq(r + i))
                        } else n = s.children.eq(s.active.index);
                    else n = s.children;
                    return "vertical" == s.settings.mode ? (n.each(function() {
                        t += e(this).outerHeight()
                    }), s.settings.slideMargin > 0 && (t += s.settings.slideMargin * (s.settings.minSlides - 1))) : t = Math.max.apply(Math, n.map(function() {
                        return e(this).outerHeight(!1)
                    }).get()), t
                },
                p = function() {
                    var e = "100%";
                    return s.settings.slideWidth > 0 && (e = "horizontal" == s.settings.mode ? s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin : s.settings.slideWidth), e
                },
                f = function() {
                    var e = s.settings.slideWidth,
                        t = s.viewport.width();
                    return 0 == s.settings.slideWidth || s.settings.slideWidth > t && !s.carousel || "vertical" == s.settings.mode ? e = t : s.settings.maxSlides > 1 && "horizontal" == s.settings.mode && (t > s.maxThreshold || t < s.minThreshold && (e = (t - s.settings.slideMargin * (s.settings.minSlides - 1)) / s.settings.minSlides)), e
                },
                g = function() {
                    var e = 1;
                    if ("horizontal" == s.settings.mode && s.settings.slideWidth > 0)
                        if (s.viewport.width() < s.minThreshold) e = s.settings.minSlides;
                        else if (s.viewport.width() > s.maxThreshold) e = s.settings.maxSlides;
                    else {
                        var t = s.children.first().width();
                        e = Math.floor(s.viewport.width() / t)
                    } else "vertical" == s.settings.mode && (e = s.settings.minSlides);
                    return e
                },
                m = function() {
                    var e = 0;
                    if (s.settings.moveSlides > 0)
                        if (s.settings.infiniteLoop) e = s.children.length / v();
                        else
                            for (var t = 0, n = 0; t < s.children.length;) ++e, t = n + g(), n += s.settings.moveSlides <= g() ? s.settings.moveSlides : g();
                    else e = Math.ceil(s.children.length / g());
                    return e
                },
                v = function() {
                    return s.settings.moveSlides > 0 && s.settings.moveSlides <= g() ? s.settings.moveSlides : g()
                },
                y = function() {
                    if (s.active.last = !1, s.children.length > s.settings.maxSlides && s.active.last && !s.settings.infiniteLoop) {
                        if ("horizontal" == s.settings.mode) {
                            var e = s.children.last(),
                                t = e.position();
                            b(-(t.left - (s.viewport.width() - e.width())), "reset", 0)
                        } else if ("vertical" == s.settings.mode) {
                            var n = s.children.length - s.settings.minSlides,
                                t = s.children.eq(n).position();
                            b(-t.top, "reset", 0)
                        }
                    } else {
                        var t = s.children.eq(s.active.index * v()).position();
                        s.active.index == m() - 1 && (s.active.last = !0), void 0 != t && ("horizontal" == s.settings.mode ? b(-t.left, "reset", 0) : "vertical" == s.settings.mode && b(-t.top, "reset", 0))
                    }
                },
                b = function(e, t, n, i) {
                    if (s.usingCSS) {
                        var r = "vertical" == s.settings.mode ? "translate3d(0, " + e + "px, 0)" : "translate3d(" + e + "px, 0, 0)";
                        a.css("-" + s.cssPrefix + "-transition-duration", n / 1e3 + "s"), "slide" == t ? (a.css(s.animProp, r), a.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            a.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), M()
                        })) : "reset" == t ? a.css(s.animProp, r) : "ticker" == t && (a.css("-" + s.cssPrefix + "-transition-timing-function", "linear"), a.css(s.animProp, r), a.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            a.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(i.resetValue, "reset", 0), B()
                        }))
                    } else {
                        var o = {};
                        o[s.animProp] = e, "slide" == t ? a.animate(o, n, s.settings.easing, function() {
                            M()
                        }) : "reset" == t ? a.css(s.animProp, e) : "ticker" == t && a.animate(o, speed, "linear", function() {
                            b(i.resetValue, "reset", 0), B()
                        })
                    }
                },
                x = function() {
                    s.viewport.delegate("a", "click", _)
                },
                _ = function(e) {
                    nextSlide = parseInt(a.getCurrentSlide()) + 1, nextSlide <= a.getSlideCount() && (pagerCustom = s.settings.pagerCustom, pagerCustom && pagerCustom.goToSlide(Math.floor(nextSlide / pagerCustom.getSettings().maxSlides)), a.goToNextSlide()), e.preventDefault()
                },
                C = function() {
                    var t = "";
                    pagerQty = m();
                    for (var n = 0; n < pagerQty; n++) {
                        var i = "";
                        s.settings.buildPager && e.isFunction(s.settings.buildPager) ? (i = s.settings.buildPager(n), s.pagerEl.addClass("bx-custom-pager")) : (i = n + 1, s.pagerEl.addClass("bx-default-pager")), t += '<div class="bx-pager-item"><a href="" data-slide-index="' + n + '" class="bx-pager-link">' + i + "</a></div>"
                    }
                    s.pagerEl.html(t)
                },
                w = function() {
                    s.settings.pagerCustom ? s.pagerEl = e(s.settings.pagerCustom) : (s.pagerEl = e('<div class="bx-pager" />'), s.settings.pagerSelector ? e(s.settings.pagerSelector).html(s.pagerEl) : s.controls.el.addClass("bx-has-pager").append(s.pagerEl), C()), s.pagerEl.delegate("a", "click", E)
                },
                k = function() {
                    s.controls.next = e('<a class="bx-next" href="">' + s.settings.nextText + "</a>"), s.controls.prev = e('<a class="bx-prev" href="">' + s.settings.prevText + "</a>"), s.controls.next.bind("click", D), s.controls.prev.bind("click", P), s.settings.nextSelector && e(s.settings.nextSelector).append(s.controls.next), s.settings.prevSelector && e(s.settings.prevSelector).append(s.controls.prev), s.settings.nextSelector || s.settings.prevSelector || (s.controls.directionEl = e('<div class="bx-controls-direction" />'), s.controls.directionEl.append(s.controls.prev).append(s.controls.next), s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))
                },
                T = function() {
                    s.controls.start = e('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + s.settings.startText + "</a></div>"), s.controls.stop = e('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + s.settings.stopText + "</a></div>"), s.controls.autoEl = e('<div class="bx-controls-auto" />'), s.controls.autoEl.delegate(".bx-start", "click", F), s.controls.autoEl.delegate(".bx-stop", "click", I), s.settings.autoControlsCombine ? s.controls.autoEl.append(s.controls.start) : s.controls.autoEl.append(s.controls.start).append(s.controls.stop), s.settings.autoControlsSelector ? e(s.settings.autoControlsSelector).html(s.controls.autoEl) : s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl), N(s.settings.autoStart ? "stop" : "start")
                },
                S = function() {
                    s.children.each(function() {
                        var t = e(this).find("img:first").attr("title");
                        void 0 != t && e(this).append('<div class="bx-caption"><span>' + t + "</span></div>")
                    })
                },
                D = function(e) {
                    s.settings.auto && a.stopAuto(), a.goToNextSlide(), e.preventDefault()
                },
                P = function(e) {
                    s.settings.auto && a.stopAuto(), a.goToPrevSlide(), e.preventDefault()
                },
                F = function(e) {
                    a.startAuto(), e.preventDefault()
                },
                I = function(e) {
                    a.stopAuto(), e.preventDefault()
                },
                E = function(t) {
                    s.settings.auto && a.stopAuto();
                    var n = e(t.currentTarget),
                        i = parseInt(n.attr("data-slide-index"));
                    i != s.active.index && a.goToSlide(i), t.preventDefault()
                },
                A = function(t) {
                    return "short" == s.settings.pagerType ? void s.pagerEl.html(t + 1 + s.settings.pagerShortSeparator + s.children.length) : (s.pagerEl.find("a").removeClass("active"), void s.pagerEl.each(function(n, i) {
                        e(i).find("a").eq(t).addClass("active")
                    }))
                },
                M = function() {
                    if (s.settings.infiniteLoop) {
                        var e = "";
                        0 == s.active.index ? e = s.children.eq(0).position() : s.active.index == m() - 1 && s.carousel ? e = s.children.eq((m() - 1) * v()).position() : s.active.index == s.children.length - 1 && (e = s.children.eq(s.children.length - 1).position()), "horizontal" == s.settings.mode ? b(-e.left, "reset", 0) : "vertical" == s.settings.mode && b(-e.top, "reset", 0)
                    }
                    s.working = !1, s.settings.onSlideAfter(s.children.eq(s.active.index), s.oldIndex, s.active.index)
                },
                N = function(e) {
                    s.settings.autoControlsCombine ? s.controls.autoEl.html(s.controls[e]) : (s.controls.autoEl.find("a").removeClass("active"), s.controls.autoEl.find("a:not(.bx-" + e + ")").addClass("active"))
                },
                L = function() {
                    !s.settings.infiniteLoop && s.settings.hideControlOnEnd ? 0 == s.active.index ? (s.controls.prev.addClass("disabled"), s.controls.next.removeClass("disabled")) : s.active.index == m() - 1 ? (s.controls.next.addClass("disabled"), s.controls.prev.removeClass("disabled")) : (s.controls.prev.removeClass("disabled"), s.controls.next.removeClass("disabled")) : 1 == m() && (s.controls.prev.addClass("disabled"), s.controls.next.addClass("disabled"))
                },
                $ = function() {
                    if (s.settings.autoDelay > 0) {
                        setTimeout(a.startAuto, s.settings.autoDelay)
                    } else a.startAuto();
                    s.settings.autoHover && a.hover(function() {
                        s.interval && (a.stopAuto(!0), s.autoPaused = !0)
                    }, function() {
                        s.autoPaused && (a.startAuto(!0), s.autoPaused = null)
                    })
                },
                O = function() {
                    var t = 0;
                    if ("next" == s.settings.autoDirection) a.append(s.children.clone().addClass("bx-clone"));
                    else {
                        a.prepend(s.children.clone().addClass("bx-clone"));
                        var n = s.children.first().position();
                        t = "horizontal" == s.settings.mode ? -n.left : -n.top
                    }
                    b(t, "reset", 0), s.settings.pager = !1, s.settings.controls = !1, s.settings.autoControls = !1, s.settings.tickerHover && !s.usingCSS && s.viewport.hover(function() {
                        a.stop()
                    }, function() {
                        var t = 0;
                        s.children.each(function() {
                            t += "horizontal" == s.settings.mode ? e(this).outerWidth(!0) : e(this).outerHeight(!0)
                        });
                        var n = s.settings.speed / t,
                            i = "horizontal" == s.settings.mode ? "left" : "top",
                            r = n * (t - Math.abs(parseInt(a.css(i))));
                        B(r)
                    }), B()
                },
                B = function(e) {
                    speed = e ? e : s.settings.speed;
                    var t = {
                            left: 0,
                            top: 0
                        },
                        n = {
                            left: 0,
                            top: 0
                        };
                    "next" == s.settings.autoDirection ? t = a.find(".bx-clone").first().position() : n = s.children.first().position();
                    var i = "horizontal" == s.settings.mode ? -t.left : -t.top,
                        r = "horizontal" == s.settings.mode ? -n.left : -n.top,
                        o = {
                            resetValue: r
                        };
                    b(i, "ticker", speed, o)
                },
                j = function() {
                    s.touch = {
                        start: {
                            x: 0,
                            y: 0
                        },
                        end: {
                            x: 0,
                            y: 0
                        }
                    }, s.viewport.bind("touchstart", R)
                },
                R = function(e) {
                    if (s.working) e.preventDefault();
                    else {
                        s.touch.originalPos = a.position();
                        var t = e.originalEvent;
                        s.touch.start.x = t.changedTouches[0].pageX, s.touch.start.y = t.changedTouches[0].pageY, s.viewport.bind("touchmove", H), s.viewport.bind("touchend", W)
                    }
                },
                H = function(e) {
                    var t = e.originalEvent,
                        n = Math.abs(t.changedTouches[0].pageX - s.touch.start.x),
                        i = Math.abs(t.changedTouches[0].pageY - s.touch.start.y);
                    if (3 * n > i && s.settings.preventDefaultSwipeX ? e.preventDefault() : 3 * i > n && s.settings.preventDefaultSwipeY && e.preventDefault(), "fade" != s.settings.mode && s.settings.oneToOneTouch) {
                        var r = 0;
                        if ("horizontal" == s.settings.mode) {
                            var a = t.changedTouches[0].pageX - s.touch.start.x;
                            r = s.touch.originalPos.left + a
                        } else {
                            var a = t.changedTouches[0].pageY - s.touch.start.y;
                            r = s.touch.originalPos.top + a
                        }
                        b(r, "reset", 0)
                    }
                },
                W = function(e) {
                    s.viewport.unbind("touchmove", H);
                    var t = e.originalEvent,
                        n = 0;
                    if (s.touch.end.x = t.changedTouches[0].pageX, s.touch.end.y = t.changedTouches[0].pageY, "fade" == s.settings.mode) {
                        var i = Math.abs(s.touch.start.x - s.touch.end.x);
                        i >= s.settings.swipeThreshold && (s.touch.start.x > s.touch.end.x ? a.goToNextSlide() : a.goToPrevSlide(), a.stopAuto())
                    } else {
                        var i = 0;
                        "horizontal" == s.settings.mode ? (i = s.touch.end.x - s.touch.start.x, n = s.touch.originalPos.left) : (i = s.touch.end.y - s.touch.start.y, n = s.touch.originalPos.top), !s.settings.infiniteLoop && (0 == s.active.index && i > 0 || s.active.last && 0 > i) ? b(n, "reset", 200) : Math.abs(i) >= s.settings.swipeThreshold ? (0 > i ? a.goToNextSlide() : a.goToPrevSlide(), a.stopAuto()) : b(n, "reset", 200)
                    }
                    s.viewport.unbind("touchend", W)
                },
                q = function() {
                    var t = e(window).width(),
                        n = e(window).height();
                    (o != t || l != n) && (o = t, l = n, a.redrawSlider())
                };
            return a.goToSlide = function(t, n) {
                if (!s.working && s.active.index != t)
                    if (s.working = !0, s.oldIndex = s.active.index, s.active.index = 0 > t ? m() - 1 : t >= m() ? 0 : t, s.settings.onSlideBefore(s.children.eq(s.active.index), s.oldIndex, s.active.index), "next" == n ? s.settings.onSlideNext(s.children.eq(s.active.index), s.oldIndex, s.active.index) : "prev" == n && s.settings.onSlidePrev(s.children.eq(s.active.index), s.oldIndex, s.active.index), s.active.last = s.active.index >= m() - 1, s.settings.pager && A(s.active.index), s.settings.controls && L(), "fade" == s.settings.mode) s.settings.adaptiveHeight && s.viewport.height() != h() && s.viewport.animate({
                        height: h()
                    }, s.settings.adaptiveHeightSpeed), s.children.filter(":visible").fadeOut(s.settings.speed).css({
                        zIndex: 0
                    }), s.children.eq(s.active.index).css("zIndex", 51).fadeIn(s.settings.speed, function() {
                        e(this).css("zIndex", 50), M()
                    });
                    else {
                        s.settings.adaptiveHeight && s.viewport.height() != h() && s.viewport.animate({
                            height: h()
                        }, s.settings.adaptiveHeightSpeed);
                        var i = 0,
                            r = {
                                left: 0,
                                top: 0
                            };
                        if (!s.settings.infiniteLoop && s.carousel && s.active.last)
                            if ("horizontal" == s.settings.mode) {
                                var o = s.children.eq(s.children.length - 1);
                                r = o.position(), i = s.viewport.width() - o.width()
                            } else {
                                var l = s.children.length - s.settings.minSlides;
                                r = s.children.eq(l).position()
                            }
                        else if (s.carousel && s.active.last && "prev" == n) {
                            var c = 1 == s.settings.moveSlides ? s.settings.maxSlides - v() : (m() - 1) * v() - (s.children.length - s.settings.maxSlides),
                                o = a.children(".bx-clone").eq(c);
                            r = o.position()
                        } else if ("next" == n && 0 == s.active.index) r = a.find(".bx-clone").eq(s.settings.maxSlides).position(), s.active.last = !1;
                        else if (t >= 0) {
                            var u = t * v();
                            r = s.children.eq(u).position()
                        }
                        var d = "horizontal" == s.settings.mode ? -(r.left - i) : -r.top;
                        b(d, "slide", s.settings.speed)
                    }
            }, a.goToNextSlide = function() {
                if (s.settings.infiniteLoop || !s.active.last) {
                    var e = parseInt(s.active.index) + 1;
                    a.goToSlide(e, "next")
                }
            }, a.goToPrevSlide = function() {
                if (s.settings.infiniteLoop || 0 != s.active.index) {
                    var e = parseInt(s.active.index) - 1;
                    a.goToSlide(e, "prev")
                }
            }, a.startAuto = function(e) {
                s.interval || (s.interval = setInterval(function() {
                    "next" == s.settings.autoDirection ? a.goToNextSlide() : a.goToPrevSlide()
                }, s.settings.pause), s.settings.autoControls && 1 != e && N("stop"))
            }, a.stopAuto = function(e) {
                s.interval && (clearInterval(s.interval), s.interval = null, s.settings.autoControls && 1 != e && N("start"))
            }, a.getCurrentSlide = function() {
                return s.active.index
            }, a.getSlideCount = function() {
                return s.children.length
            }, a.getSettings = function() {
                return s.settings
            }, a.redrawSlider = function() {
                s.children.add(a.find(".bx-clone")).width(f()), s.viewport.css("height", h()), s.settings.ticker || y(), s.active.last && (s.active.index = m() - 1), s.active.index >= m() && (s.active.last = !0), s.settings.pager && !s.settings.pagerCustom && (C(), A(s.active.index))
            }, a.destroySlider = function() {
                s.initialized && (s.initialized = !1, e(".bx-clone", this).remove(), s.children.removeAttr("style"), this.removeAttr("style").unwrap().unwrap(), s.controls.el && s.controls.el.remove(), s.controls.next && s.controls.next.remove(), s.controls.prev && s.controls.prev.remove(), s.pagerEl && s.pagerEl.remove(), e(".bx-caption", this).remove(), s.controls.autoEl && s.controls.autoEl.remove(), clearInterval(s.interval), e(window).unbind("resize", q))
            }, a.reloadSlider = function(e) {
                void 0 != e && (r = e), a.destroySlider(), c()
            }, c(), this
        }
    }
}(jQuery),
function() {
    function e() {}

    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }

    function n(e) {
        return function() {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype,
        r = this,
        s = r.EventEmitter;
    i.getListeners = function(e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function(e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
        return n
    }, i.getListenersAsObject = function(e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, i.addListener = function(e, n) {
        var i, r = this.getListenersAsObject(e),
            s = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(s ? n : {
            listener: n,
            once: !1
        });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
        return this.getListeners(e), this
    }, i.defineEvents = function(e) {
        for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
        return this
    }, i.removeListener = function(e, n) {
        var i, r, s = this.getListenersAsObject(e);
        for (r in s) s.hasOwnProperty(r) && (i = t(s[r], n), -1 !== i && s[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function(e, t, n) {
        var i, r, s = e ? this.removeListener : this.addListener,
            a = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;) s.call(this, t, n[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? s.call(this, i, r) : a.call(this, i, r));
        return this
    }, i.removeEvent = function(e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
        var n, i, r, s, a = this.getListenersAsObject(e);
        for (r in a)
            if (a.hasOwnProperty(r))
                for (i = a[r].length; i--;) n = a[r][i], n.once === !0 && this.removeListener(e, n.listener), s = n.listener.apply(this, t || []), s === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function() {
        return this._events || (this._events = {})
    }, e.noConflict = function() {
        return r.EventEmitter = s, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}.call(this),
    function(e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t, n
        }
        var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : n.attachEvent && (i = function(e, n, i) {
            e[n + i] = i.handleEvent ? function() {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function() {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var r = function() {};
        n.removeEventListener ? r = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : n.detachEvent && (r = function(e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var s = {
            bind: i,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", s) : e.eventie = s
    }(this),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
            return t(e, n, i)
        }) : "object" == typeof exports ? module.exports = t(e, require("eventEmitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(this, function(e, t, n) {
        function i(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function r(e) {
            return "[object Array]" === h.call(e)
        }

        function s(e) {
            var t = [];
            if (r(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function a(e, t, n) {
            if (!(this instanceof a)) return new a(e, t);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = s(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), c && (this.jqDeferred = new c.Deferred);
            var r = this;
            setTimeout(function() {
                r.check()
            })
        }

        function o(e) {
            this.img = e
        }

        function l(e) {
            this.src = e, p[e] = this
        }
        var c = e.jQuery,
            u = e.console,
            d = void 0 !== u,
            h = Object.prototype.toString;
        a.prototype = new t, a.prototype.options = {}, a.prototype.getImages = function() {
            this.images = [];
            for (var e = 0, t = this.elements.length; t > e; e++) {
                var n = this.elements[e];
                "IMG" === n.nodeName && this.addImage(n);
                for (var i = n.querySelectorAll("img"), r = 0, s = i.length; s > r; r++) {
                    var a = i[r];
                    this.addImage(a)
                }
            }
        }, a.prototype.addImage = function(e) {
            var t = new o(e);
            this.images.push(t)
        }, a.prototype.check = function() {
            function e(e, r) {
                return t.options.debug && d && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
            }
            var t = this,
                n = 0,
                i = this.images.length;
            if (this.hasAnyBroken = !1, !i) return void this.complete();
            for (var r = 0; i > r; r++) {
                var s = this.images[r];
                s.on("confirm", e), s.check()
            }
        }, a.prototype.progress = function(e) {
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
            var t = this;
            setTimeout(function() {
                t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
            })
        }, a.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var t = this;
            setTimeout(function() {
                if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                    var n = t.hasAnyBroken ? "reject" : "resolve";
                    t.jqDeferred[n](t)
                }
            })
        }, c && (c.fn.imagesLoaded = function(e, t) {
            var n = new a(this, e, t);
            return n.jqDeferred.promise(c(this))
        }), o.prototype = new t, o.prototype.check = function() {
            var e = p[this.img.src] || new l(this.img.src);
            if (e.isConfirmed) return void this.confirm(e.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var t = this;
            e.on("confirm", function(e, n) {
                return t.confirm(e.isLoaded, n), !0
            }), e.check()
        }, o.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emit("confirm", this, t)
        };
        var p = {};
        return l.prototype = new t, l.prototype.check = function() {
            if (!this.isChecked) {
                var e = new Image;
                n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
            }
        }, l.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, l.prototype.onload = function(e) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(e)
        }, l.prototype.onerror = function(e) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
        }, l.prototype.confirm = function(e, t) {
            this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
        }, l.prototype.unbindProxyEvents = function(e) {
            n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
        }, a
    }), Array.prototype.reduce || (Array.prototype.reduce = function(e) {
        var t, n, i = this.length;
        if ("function" != typeof e) throw new TypeError("First argument is not callable");
        if ((0 == i || null === i) && arguments.length <= 1) throw new TypeError("Array length is 0 and no second argument");
        for (arguments.length <= 1 ? (n = this[0], t = 1) : n = arguments[1], t = t || 0; i > t; ++t) t in this && (n = e.call(void 0, n, this[t], t, this));
        return n
    }),
    function() {
        var e = function() {
            return this
        }.call();
        e.SM = {
            init: {
                flashMessages: function() {
                    setTimeout(function() {
                        $("#notice_outer, #flash_notice, #flash_error").fadeOut("slow")
                    }, 5e3)
                },
                datePicker: function() {
                    $.datepicker.setDefaults({
                        dateFormat: "dd M yy",
                        showOn: "button",
                        buttonImage: "https://www.iconichotel.com.my/wp-content/uploads/2018/01/calen.jpg",
                        buttonImageOnly: !0,
                        buttonText: "Select a date",
                        showAnim: "fadeIn"
                    })
                },
                tableStriping: function() {
                    $("table.stripe > tbody > tr:odd").addClass("alternate")
                },
                overlay: function() {
                    var e = new Array,
                        t = property_thumb_slider = null;
                    try {
                        $('a[rel]:not([rel="nofollow"])').click(function() {
                            $($(this).prop("rel")).find("img").each(function() {
                                var e = $(this);
                                e.prop("src").match(/placeholder[^.]*\.png/) && e.prop("src", e.data("src"))
                            })
                        }).overlay({
                            fixed: !1,
                            onBeforeLoad: function() {
                                if (this.getOverlay().find("ul.carousel-thumb").length > 0 && -1 == jQuery.inArray(this.getTrigger().attr("rel"), e)) {
                                    var n = this.getTrigger().find("li").attr("property-slide-index") || null;
                                    if (this.getOverlay().find(".thumbs img").length > 4) var i = {
                                        infiniteLoop: !1,
                                        startSlide: 0,
                                        hideControlOnEnd: !0,
                                        mode: "horizontal"
                                    };
                                    var r = this.getOverlay().find("ul.carousel-thumb").bxSlider($.extend({
                                            slideWidth: 95,
                                            pager: !1,
                                            minSlides: 4,
                                            maxSlides: 4,
                                            moveSlides: 4
                                        }, i || {})),
                                        s = this.getOverlay().find("ul.carousel-standard").bxSlider({
                                            slideWidth: 420,
                                            minSlides: 1,
                                            maxSlides: 1,
                                            moveSlides: 1,
                                            pagerCustom: r,
                                            adaptiveHeight: !0,
                                            startSlide: 0,
                                            controls: !1,
                                            nextOnImage: !0,
                                            infiniteLoop: !1
                                        });
                                    null != n && (t = s, property_thumb_slider = r), e.push(this.getTrigger().attr("rel"))
                                }
                            },
                            onLoad: function() {
                                jQuery.inArray(this.getTrigger().attr("rel"), e) >= 0 && (current_slide = this.getTrigger().find("li").attr("property-slide-index") || null, null != t && null != property_thumb_slider && null != current_slide && (t.goToSlide(current_slide), property_thumb_slider.goToSlide(Math.floor(parseInt(current_slide) / 4))))
                            },
                            expose: {
                                color: "#333",
                                loadSpeed: 200,
                                opacity: .3,
                                onBeforeLoad: function() {
                                    $.fn.bgiframe && this.getMask().bgiframe()
                                }
                            }
                        })
                    } catch (n) {}
                },
                setupLanguageSwitchers: function() {
                    $(".locale_switcher ul dl, .language_switcher ul dl").mouseover(function() {
                        $(this).addClass("open")
                    }).mouseout(function() {
                        $(this).removeClass("open")
                    })
                }
            },
            util: {
                newDateIgnoringTimeZone: function(e) {
                    return $.datepicker.parseDate("yy-mm-dd", e)
                },
                showProgressIndicator: function() {
                    $("#exposeMask").remove(), $("#loading").overlay({
                        top: "none",
                        expose: {
                            color: "#000",
                            loadSpeed: 0,
                            closeSpeed: 0,
                            opacity: .05,
                            maskId: "exposeMask"
                        },
                        closeOnClick: !1,
                        closeOnEsc: !1,
                        api: !0
                    }).load()
                },
                hideProgressIndicator: function() {
                    $("#loading").overlay().close()
                },
                messageDialog: function(e, t) {
                    this.dialog("<h3>" + e + "</h3><p>" + t + "</p>")
                },
                warningDialog: function(e) {
                    alert(e)
                },
                dialog: function(e) {
                    $("<div id='message' class='overlay'>" + e + "</div>").appendTo("body").overlay({
                        expose: {
                            color: "#333",
                            opacity: .5,
                            onBeforeLoad: function() {
                                $.fn.bgiframe && this.getMask().bgiframe()
                            }
                        },
                        api: !0
                    }).load().onClose(function() {
                        $("#message").remove()
                    })
                },
                scrollTo: function(e, t, n) {
                    e.length > 0 && !this.nodeIsInView(e) && $("html, body").animate({
                        scrollTop: e.offset().top
                    }, n || 500, t)
                },
                nodeIsInView: function(e) {
                    var t = $(window).scrollTop(),
                        n = t + $(window).height(),
                        i = e.offset().top,
                        r = i + e.height();
                    return r >= t && n >= i && n >= r && i >= t
                },
                selectAllButtons: function(e) {
                    var t = $(e);
                    $("a.select_all", t).click(function() {
                        return $("input[type=checkbox]:not(:disabled)", t).prop("checked", "checked"), !1
                    }), $("a.unselect_all", t).click(function() {
                        return $("input[type=checkbox]:not(:disabled)", t).prop("checked", ""), !1
                    })
                },
                currencySymbol: "",
                currencySeparator: ".",
                currencyFormat: "%u%n",
                currencyDelimiter: ",",
                toCurrency: function(e) {
                    var t = (String(e).match(/\./) ? (100 * e).toFixed(0) / 100 : e).toString(),
                        n = t.split("."),
                        i = n[0],
                        r = n[1],
                        s = i.split("").reverse().join("").match(/.{1,3}/g).join(this.currencyDelimiter).split("").reverse("").join(""),
                        a = r ? this.currencySeparator + r : "";
                    a = 2 == a.length ? a + "0" : a;
                    var o = s + a;
                    return this.currencyFormat.replace("%n", o).replace("%u", this.currencySymbol)
                },
                renderCurrency: function(e, t) {
                    e.text(SM.util.toCurrency(t)).parent().show()
                },
                renderDiscountCurrency: function(e, t) {
                    e.text("- " + SM.util.toCurrency(t)).parent().show()
                },
                disableLabelsAndFields: function(e) {
                    var t = $(e);
                    t.find("input, textarea, select").prop("disabled", !0), t.find("label").addClass("disabled")
                },
                enableLabelsAndFields: function(e) {
                    var t = $(e);
                    t.find("input, textarea, select").prop("disabled", !1), t.find("label").removeClass("disabled")
                },
                setupDatepicker: function(e, t) {
                    e.each(function() {
                        var e = $(this).attr("id"),
                            n = $.extend({
                                altField: "#" + e.substr(0, e.length - 5),
                                altFormat: "yy-mm-dd"
                            }, t);
                        $(this).datepicker(n);
                        var i = $(this).data("initVal");
                        i && $(this).datepicker("setDate", SM.util.newDateIgnoringTimeZone(i)), $(this).change(function() {
                            $(this).datepicker("setDate", $(this).val())
                        })
                    })
                }
            }
        }
    }(), defaultAjaxSetup = {
        beforeSend: function(e) {
            e.setRequestHeader("Accept", "text/javascript")
        },
        statusCode: {
            401: function(e) {
                $("#security_token_overlay .flash").remove(), window.location = e.responseText
            },
            500: function() {
                window.location = window.location
            }
        }
    }, jQuery.ajaxSetup(defaultAjaxSetup),
    function() {
        var e = function() {
            return this
        }.call();
        e.ExtraCalculator = function(e) {
            function t() {
                var e = 0;
                if (n.mandatory || n.selected) switch (n.category) {
                    case "Per Booking":
                        e = n.allowMultiple ? n.adultRate * n.adults : n.adultRate;
                        break;
                    case "Per Room":
                        e = n.adultRate * n.numberRooms();
                        break;
                    case "Per Room Per Night":
                        e = n.adultRate * n.numberRooms() * n.numberNights;
                        break;
                    case "Per Person Per Night":
                        e = n.roomCalculators.reduce(function(e, t) {
                            return e + n.numberNights * (n.adultRate * t.adults + n.childRate * (t.children || 0))
                        }, 0);
                        break;
                    case "Per Person":
                        e = n.adultRate * n.adults + n.childRate * n.children
                }
                return e
            }
            var n = this;
            e && (this.id = e.id, this.category = e.category, this.adultRate = void 0 != e.adultRate ? parseFloat(e.adultRate) : 0, this.childRate = void 0 != e.childRate ? parseFloat(e.childRate) : 0, this.allowMultiple = void 0 != e.allowMultiple ? e.allowMultiple : !1, this.mandatory = void 0 != e.mandatory ? e.mandatory : !1, this.ratesIncludingFees = void 0 != e.ratesIncludingFees ? e.ratesIncludingFees : !0, this.selected = void 0 != e.selected ? e.selected : !1, this.adults = void 0 != e.adults ? parseInt(e.adults, 10) : 0, this.children = void 0 != e.children ? parseInt(e.children, 10) : 0, this.numberNights = void 0 != e.numberNights ? parseInt(e.numberNights) : 0, this.roomCalculators = void 0 != e.roomCalculators ? e.roomCalculators : [], this.utilCalculator = void 0 != e.utilCalculator ? e.utilCalculator : new UtilCalculator, this.taxCalculators = void 0 != e.taxCalculators ? e.taxCalculators : []), this.getPercentageTax = function() {
                return n.taxCalculators.reduce(function(e, t) {
                    return !t.isFixedAmount() && t.isApplicableTo(n) ? e += t.percentage : e
                }, 0)
            }, this.numberRooms = function() {
                return n.roomCalculators.length
            }, this.valid = function() {
                return isNaN(n.adults) || isNaN(n.children) ? (n.adults = 0, n.children = 0, !1) : !0
            }, this.getTaxTotal = function() {
                var e = t(),
                    i = n.getPercentageTax();
                return n.ratesIncludingFees ? n.utilCalculator.chargeFrom(e, i) : n.utilCalculator.chargeFor(e, i)
            }, this.getTotal = function() {
                var e = t();
                return n.ratesIncludingFees ? e : n.utilCalculator.addChargeTo(e, n.getPercentageTax())
            }, this.getTotalBeforeTax = function() {
                var e = t();
                return n.ratesIncludingFees ? n.utilCalculator.removeChargeFrom(e, n.getPercentageTax()) : e
            }
        }
    }(),
    function() {
        var e = function() {
            return this
        }.call();
        e.ReservationCalculator = function(e) {
            var t = this;
            e && (this.surcharges = e.surcharges, this.depositType = e.depositType, this.depositAmount = e.depositAmount, this.taxableServiceCharge = e.taxableServiceCharge, this.roomCalculators = void 0 != e.roomCalculators ? e.roomCalculators : [], this.extraCalculators = void 0 != e.extraCalculators ? e.extraCalculators : [], this.taxCalculators = void 0 != e.taxCalculators ? e.taxCalculators : [], this.ratesIncludingFees = void 0 != e.ratesIncludingFees ? e.ratesIncludingFees : !0, this.utilCalculator = void 0 != e.utilCalculator ? e.utilCalculator : new UtilCalculator);
            var n = 0;
            this.setCreditCard = function(e) {
                n = t.surcharges[e] || 0
            }, this.getExtraAdultsTotal = function() {
                var e = t.roomCalculators.reduce(function(e, t) {
                    return e + t.getExtraAdultsTotal()
                }, 0);
                return e
            }, this.getExtraAdultsTotalBeforeTaxAndServiceCharge = function() {
                var e = t.roomCalculators.reduce(function(e, t) {
                    return e + t.getExtraAdultsTotalBeforeTaxAndServiceCharge()
                }, 0);
                return e
            }, this.getExtraChildrenTotal = function() {
                var e = t.roomCalculators.reduce(function(e, t) {
                    return e + t.getExtraChildrenTotal()
                }, 0);
                return e
            }, this.getExtraChildrenTotalBeforeTaxAndServiceCharge = function() {
                var e = t.roomCalculators.reduce(function(e, t) {
                    return e + t.getExtraChildrenTotalBeforeTaxAndServiceCharge()
                }, 0);
                return e
            }, this.getExtraInfantsTotal = function() {
                var e = t.roomCalculators.reduce(function(e, t) {
                    return e + t.getExtraInfantsTotal()
                }, 0);
                return e
            }, this.getExtraInfantsTotalBeforeTaxAndServiceCharge = function() {
                var e = t.roomCalculators.reduce(function(e, t) {
                    return e + t.getExtraInfantsTotalBeforeTaxAndServiceCharge()
                }, 0);
                return e
            }, this.getExtraOccupantsTotal = function() {
                return t.roomCalculators.reduce(function(e, t) {
                    return e + t.getExtraOccupantsTotal()
                }, 0)
            }, this.getExtraOccupantsTotalBeforeTaxAndServiceCharge = function() {
                return t.roomCalculators.reduce(function(e, t) {
                    return e + t.getExtraOccupantsTotalBeforeTaxAndServiceCharge()
                }, 0)
            }, this.getRoomTotalBeforeDiscount = function() {
                return t.roomCalculators.reduce(function(e, t) {
                    return e + t.getTotalBeforeDiscount()
                }, 0)
            }, this.getRoomTotalBeforeDiscountTaxAndServiceCharge = function() {
                return t.roomCalculators.reduce(function(e, t) {
                    return e + t.getTotalBeforeDiscountTaxAndServiceCharge()
                }, 0)
            }, this.getDiscountTotal = function() {
                return t.roomCalculators.reduce(function(e, t) {
                    return e + t.getDiscountTotal()
                }, 0)
            }, this.getDiscountTotalBeforeTaxAndServiceCharge = function() {
                return t.roomCalculators.reduce(function(e, t) {
                    return e + t.getDiscountTotalBeforeTaxAndServiceCharge()
                }, 0)
            }, this.getRoomTotal = function() {
                return this.roomCalculators.reduce(function(e, t) {
                    return e + t.getTotal()
                }, 0)
            }, this.getRoomTotalBeforeTaxAndServiceCharge = function() {
                return this.roomCalculators.reduce(function(e, t) {
                    return e + t.getTotalBeforeTaxAndServiceCharge()
                }, 0)
            }, this.getExtraTotal = function() {
                var e = t.extraCalculators.reduce(function(e, t) {
                    return e + t.getTotal()
                }, 0);
                return e
            }, this.getExtraTotalBeforeTax = function() {
                var e = t.extraCalculators.reduce(function(e, t) {
                    return e + t.getTotalBeforeTax()
                }, 0);
                return e
            }, this.getRoomAndExtraTotal = function() {
                var e = t.getRoomTotal(),
                    n = t.getExtraTotal();
                return parseFloat(e + n)
            }, this.getSurchargeFor = function(e) {
                return e * (n / 100)
            }, this.getFixedAmountTaxTotal = function() {
                return t.taxCalculators.reduce(function(e, t) {
                    return t.isFixedAmount() ? e + t.getFixedAmountTotal() : e
                }, 0)
            }, this.getTotalBeforeSurcharge = function() {
                return t.getRoomAndExtraTotal() + t.getFixedAmountTaxTotal()
            }, this.getDepositTotal = function() {
                switch (t.depositType) {
                    case "Full amount":
                        return t.getTotalBeforeSurcharge();
                    case "No deposit":
                        return 0;
                    case "First night":
                        var e = t.roomCalculators.reduce(function(e, n) {
                                var i = n.getRateBeforeStayPayDealForNight(0),
                                    r = t.ratesIncludingFees ? i : t.utilCalculator.addChargeTo(i, n.getTaxAndServiceChargePercent());
                                return e + r
                            }, 0),
                            n = t.getTotalBeforeSurcharge();
                        return e > n ? n : e;
                    case "Percentage":
                        return t.getRoomTotal() * (t.depositAmount / 100);
                    case "Fixed amount":
                        var n = t.getTotalBeforeSurcharge(),
                            i = t.depositAmount * t.roomCalculators.length;
                        return i > n ? n : i;
                    default:
                        return 0
                }
            }, this.getServiceChargeTotal = function() {
                return t.roomCalculators.reduce(function(e, t) {
                    return e + t.getServiceChargeTotal()
                }, 0)
            }, this.getPercentageTaxTotal = function() {
                var e = t.roomCalculators.reduce(function(e, t) {
                        return e + t.getTaxTotal()
                    }, 0),
                    n = t.extraCalculators.reduce(function(e, t) {
                        return e + t.getTaxTotal()
                    }, 0);
                return e + n
            }, this.getTaxTotal = function() {
                return t.getPercentageTaxTotal() + t.getFixedAmountTaxTotal()
            }, this.getSurchargeTotal = function() {
                return t.getSurchargeFor(t.getDepositTotal())
            }, this.getTotal = function() {
                return t.getRoomAndExtraTotal() + t.getSurchargeTotal() + t.getFixedAmountTaxTotal()
            }
        }
    }(),
    function() {
        var e = function() {
            return this
        }.call();
        e.RoomCalculator = function(e) {
            function t(e) {
                return s.getRateForNight(e) + s.getExtraAdultsRate() + s.getExtraChildrenRate() + s.getExtraInfantsRate()
            }

            function n(e) {
                return s.getRateBeforeDiscountForNight(e) + s.getExtraAdultsRate() + s.getExtraChildrenRate() + s.getExtraInfantsRate()
            }

            function i() {
                return s.rates.reduce(function(e, t, n) {
                    return e + s.getRateForNight(n)
                }, 0)
            }

            function r() {
                return s.promotionDiscounts.reduce(function(e, t, n) {
                    return e += s.freeNights && s.freeNights[n] ? 0 : t
                }, 0)
            }
            var s = this;
            e && (this.index = e.index, this.occupancyIncludesInfants = e.occupancyIncludesInfants, this.serviceChargePercentage = void 0 != e.serviceChargePercentage ? e.serviceChargePercentage : 0, this.taxableServiceCharge = e.taxableServiceCharge, this.extraAdults = e.extraAdults, this.extraChildren = e.extraChildren, this.extraInfants = e.extraInfants, this.ratesIncludingFees = void 0 != e.ratesIncludingFees ? e.ratesIncludingFees : !0, this.includedOccupancy = void 0 != e.includedOccupancy ? parseInt(e.includedOccupancy, 10) : 0, this.maxOccupancy = void 0 != e.maxOccupancy ? parseInt(e.maxOccupancy, 10) : 0, this.extraAdultRate = void 0 != e.extraAdultRate ? parseFloat(e.extraAdultRate) : 0, this.extraChildRate = void 0 != e.extraChildRate ? parseFloat(e.extraChildRate) : 0, this.extraInfantRate = void 0 != e.extraInfantRate ? parseFloat(e.extraInfantRate) : 0, this.freeNights = void 0 != e.freeNights ? e.freeNights : [], this.promotionDiscounts = void 0 != e.promotionDiscounts ? e.promotionDiscounts : [], this.rates = void 0 != e.rates ? e.rates : [], this.adults = void 0 != e.adults ? parseInt(e.adults, 10) : 0, this.children = void 0 != e.children ? parseInt(e.children, 10) : 0, this.infants = void 0 != e.infants ? parseInt(e.infants, 10) : 0, this.utilCalculator = void 0 != e.utilCalculator ? e.utilCalculator : new UtilCalculator, this.taxCalculators = void 0 != e.taxCalculators ? e.taxCalculators : []), this.getTaxAndServiceChargePercent = function() {
                return s.serviceChargePercentage + s.getPercentageTax()
            }, this.getPercentageTax = function() {
                var e = s.taxCalculators.reduce(function(e, t) {
                    return !t.isFixedAmount() && t.isApplicableTo(s) ? e += t.percentage : e
                }, 0);
                return s.taxableServiceCharge ? s.utilCalculator.addChargeTo(e, s.serviceChargePercentage) : e
            }, this.isOverOccupied = function() {
                var e = s.adults + s.children;
                return s.occupancyIncludesInfants && (e += s.infants), e > s.maxOccupancy
            }, this.isEmpty = function() {
                return s.adults + s.children == 0
            }, this.hasInfantsWithoutAdult = function() {
                return s.infants > 0 && 0 == s.adults
            }, this.valid = function() {
                return !(s.isOverOccupied() || s.isEmpty() || s.hasInfantsWithoutAdult())
            }, this.getRateBeforeStayPayDealForNight = function(e) {
                return s.rates[e]
            }, this.getRateForNight = function(e) {
                return s.freeNights && s.freeNights[e] ? 0 : s.rates[e]
            }, this.getRateBeforeDiscountAndStayPayDealForNight = function(e) {
                return s.rates[e] + s.promotionDiscounts[e]
            }, this.getRateBeforeDiscountForNight = function(e) {
                return s.freeNights && s.freeNights[e] ? 0 : s.rates[e] + s.promotionDiscounts[e]
            }, this.getTotalForNight = function(e) {
                var n = t(e);
                return s.ratesIncludingFees ? n : s.utilCalculator.addChargeTo(n, s.getTaxAndServiceChargePercent())
            }, this.getTotalBeforeServiceChargeForNight = function(e) {
                var n = t(e),
                    i = s.ratesIncludingFees ? s.utilCalculator.removeChargeFrom(n, s.getTaxAndServiceChargePercent()) : n;
                return s.utilCalculator.addChargeTo(i, s.getPercentageTax())
            }, this.getTotalBeforeDiscountForNight = function(e) {
                var t = n(e);
                return s.ratesIncludingFees ? t : s.utilCalculator.addChargeTo(t, s.getTaxAndServiceChargePercent())
            }, this.getTotalBeforeDiscountAndServiceChargeForNight = function(e) {
                var t = n(e),
                    i = s.ratesIncludingFees ? s.utilCalculator.removeChargeFrom(t, s.getTaxAndServiceChargePercent()) : t;
                return i + s.getTaxBeforeDiscountForNight(e)
            }, this.getTaxForNight = function(e) {
                var n = t(e),
                    i = s.ratesIncludingFees ? s.utilCalculator.removeChargeFrom(n, s.getTaxAndServiceChargePercent()) : n;
                return s.utilCalculator.chargeFor(i, s.getPercentageTax())
            }, this.getTaxBeforeDiscountForNight = function(e) {
                var t = n(e),
                    i = s.ratesIncludingFees ? s.utilCalculator.removeChargeFrom(t, s.getTaxAndServiceChargePercent()) : t;
                return s.utilCalculator.chargeFor(i, s.getPercentageTax())
            }, this.updateExtraOccupants = function() {
                s.extraAdults = s.adults > s.includedOccupancy ? s.adults - s.includedOccupancy : 0, s.extraChildren = s.adults + s.children > s.includedOccupancy ? s.adults + s.children - s.includedOccupancy - s.extraAdults : 0, s.extraInfants = s.adults + s.children + s.infants > s.includedOccupancy ? s.adults + s.children + s.infants - s.includedOccupancy - s.extraAdults - s.extraChildren : 0
            }, this.getExtraAdultsRate = function() {
                return s.updateExtraOccupants(), s.extraAdults * s.extraAdultRate
            }, this.getExtraChildrenRate = function() {
                return s.updateExtraOccupants(), s.extraChildren * s.extraChildRate
            }, this.getExtraInfantsRate = function() {
                return s.updateExtraOccupants(), s.extraInfants * s.extraInfantRate
            }, this.getExtraAdultsTotal = function() {
                var e = s.getExtraAdultsRate() * s.rates.length;
                return s.ratesIncludingFees ? e : s.utilCalculator.addChargeTo(e, s.getTaxAndServiceChargePercent())
            }, this.getExtraAdultsTotalBeforeTaxAndServiceCharge = function() {
                var e = s.getExtraAdultsRate() * s.rates.length;
                return s.ratesIncludingFees ? s.utilCalculator.removeChargeFrom(e, s.getTaxAndServiceChargePercent()) : e
            }, this.getExtraChildrenTotal = function() {
                var e = s.getExtraChildrenRate() * s.rates.length;
                return s.ratesIncludingFees ? e : s.utilCalculator.addChargeTo(e, s.getTaxAndServiceChargePercent())
            }, this.getExtraChildrenTotalBeforeTaxAndServiceCharge = function() {
                var e = s.getExtraChildrenRate() * s.rates.length;
                return s.ratesIncludingFees ? s.utilCalculator.removeChargeFrom(e, s.getTaxAndServiceChargePercent()) : e
            }, this.getExtraInfantsTotal = function() {
                var e = s.getExtraInfantsRate() * s.rates.length;
                return s.ratesIncludingFees ? e : s.utilCalculator.addChargeTo(e, s.getTaxAndServiceChargePercent())
            }, this.getExtraInfantsTotalBeforeTaxAndServiceCharge = function() {
                var e = s.getExtraInfantsRate() * s.rates.length;
                return s.ratesIncludingFees ? s.utilCalculator.removeChargeFrom(e, s.getTaxAndServiceChargePercent()) : e
            }, this.getExtraOccupantsTotal = function() {
                return s.getExtraAdultsTotal() + s.getExtraChildrenTotal() + s.getExtraInfantsTotal()
            }, this.getExtraOccupantsTotalBeforeTaxAndServiceCharge = function() {
                return s.getExtraAdultsTotalBeforeTaxAndServiceCharge() + s.getExtraChildrenTotalBeforeTaxAndServiceCharge() + s.getExtraInfantsTotalBeforeTaxAndServiceCharge()
            }, this.getDiscountTotal = function() {
                var e = r();
                return s.ratesIncludingFees ? e : s.utilCalculator.addChargeTo(e, s.getTaxAndServiceChargePercent())
            }, this.getDiscountTotalBeforeTaxAndServiceCharge = function() {
                var e = r();
                return s.ratesIncludingFees ? s.utilCalculator.removeChargeFrom(e, s.getTaxAndServiceChargePercent()) : e
            }, this.getTotal = function() {
                var e = i();
                return s.ratesIncludingFees || (e = s.utilCalculator.addChargeTo(e, s.getTaxAndServiceChargePercent())), e + s.getExtraOccupantsTotal()
            }, this.getTotalBeforeTaxAndServiceCharge = function() {
                var e = i();
                return s.ratesIncludingFees && (e = s.utilCalculator.removeChargeFrom(e, s.getTaxAndServiceChargePercent())), e + s.getExtraOccupantsTotalBeforeTaxAndServiceCharge()
            }, this.getServiceChargeTotal = function() {
                var e = s.utilCalculator.removeChargeFrom(s.getTotal(), s.getTaxAndServiceChargePercent());
                return s.utilCalculator.chargeFor(e, s.serviceChargePercentage)
            }, this.getTaxTotal = function() {
                var e = s.utilCalculator.removeChargeFrom(s.getTotal(), s.getTaxAndServiceChargePercent());
                return s.utilCalculator.chargeFor(e, s.getPercentageTax())
            }, this.getTotalBeforeDiscount = function() {
                return s.getTotal() + s.getDiscountTotal()
            }, this.getTotalBeforeDiscountTaxAndServiceCharge = function() {
                return s.getTotalBeforeTaxAndServiceCharge() + s.getDiscountTotalBeforeTaxAndServiceCharge()
            }
        }
    }(),
    function() {
        var e = function() {
            return this
        }.call();
        e.TaxCalculator = function(e) {
            var t = this;
            e && (this.name = e.name, this.numberNights = void 0 != e.numberNights ? e.numberNights : 0, this.serviceChargePercentage = void 0 != e.serviceChargePercentage ? e.serviceChargePercentage : 0, this.taxableServiceCharge = e.taxableServiceCharge, this.roomCalculators = void 0 != e.roomCalculators ? e.roomCalculators : [], this.extraCalculators = void 0 != e.extraCalculators ? e.extraCalculators : [], this.percentage = void 0 != e.percentage ? e.percentage : 0, this.fixedAmount = void 0 != e.fixedAmount ? e.fixedAmount : 0, this.fixedAmountType = e.fixedAmountType, this.applicableToEverything = e.applicableToEverything, this.applicableToRooms = e.applicableToRooms, this.applicableToExtras = e.applicableToExtras, this.extraIds = void 0 != e.extraIds ? e.extraIds : [], this.utilCalculator = void 0 != e.utilCalculator ? e.utilCalculator : new UtilCalculator), this.isApplicableTo = function(e) {
                return t.applicableToEverything || e instanceof RoomCalculator && t.applicableToRooms || e instanceof ExtraCalculator && (t.applicableToExtras || -1 != t.extraIds.indexOf(e.id)) ? !0 : !1
            }, this.isApplicableToReservation = function(e) {
                function n(e) {
                    var n = !1;
                    return $.each(e, function(e, i) {
                        -1 != t.extraIds.indexOf(i) && (n = !0)
                    }), n
                }
                return t.applicableToEverything || t.applicableToRooms || t.applicableToExtras && e.length > 0 || n(e)
            }, this.numberRooms = function() {
                return t.roomCalculators.length
            }, this.numberPersons = function() {
                return t.roomCalculators.reduce(function(e, t) {
                    return e + t.adults + t.children
                }, 0)
            }, this.getFixedAmountTotal = function() {
                switch (t.fixedAmountType) {
                    case "Per Booking":
                        return t.fixedAmount;
                    case "Per Room Per Night":
                        return t.numberRooms() * t.fixedAmount * t.numberNights;
                    case "Per Person Per Night":
                        return t.numberPersons() * t.fixedAmount * t.numberNights;
                    case "Per Room":
                        return t.numberRooms() * t.fixedAmount;
                    case "Per Person":
                        return t.numberPersons() * t.fixedAmount;
                    case "Per Night":
                        return t.fixedAmount * t.numberNights
                }
            }, this.getPercentageAmountTotal = function() {
                var e = t.taxableServiceCharge ? t.utilCalculator.addChargeTo(t.percentage, t.serviceChargePercentage) : t.percentage,
                    n = t.roomCalculators.reduce(function(n, i) {
                        return t.isApplicableTo(i) ? n + t.utilCalculator.chargeFor(i.getTotalBeforeTaxAndServiceCharge(), e) : n
                    }, 0),
                    i = t.extraCalculators.reduce(function(e, n) {
                        return t.isApplicableTo(n) ? e + t.utilCalculator.chargeFor(n.getTotalBeforeTax(), t.percentage) : e
                    }, 0);
                return n + i
            }, this.isFixedAmount = function() {
                return t.fixedAmountType ? !0 : !1
            }
        }
    }(),
    function() {
        var e = function() {
            return this
        }.call();
        e.UtilCalculator = function() {
            this.removeChargeFrom = function(e, t) {
                return 100 * e / (100 + t)
            }, this.addChargeTo = function(e, t) {
                return e * (100 + t) / 100
            }, this.chargeFor = function(e, t) {
                return e * t / 100
            }, this.chargeFrom = function(e, t) {
                return e * t / (100 + t)
            }
        }
    }(),
    function() {
        var e = function() {
            return this
        }.call();
        e.PUBLIC = {
            property: {
                copyBookNowLinksFromGrid: function() {
                    $(".overview .property .rooms a.book").each(function() {
                        var e = $(this),
                            t = $('.rates a.book[href^="' + e.prop("href") + '"]');
                        e.prop("href", t.prop("href"))
                    })
                },
                setupDetailsDialogs: function() {
                    var e = $("#details.overlay"),
                        t = $("#details_dialog_template"),
                        n = e.overlay({
                            expose: {
                                color: "#333",
                                loadSpeed: 200,
                                opacity: .3,
                                onBeforeLoad: function() {
                                    $.fn.bgiframe && this.getMask().bgiframe()
                                }
                            },
                            api: !0
                        });
                    $(document).on("click", "a.details", function(i) {
                        var r = PUBLIC.property.room_details[$(this).attr("href").replace("#room_", "")],
                            s = t.tmpl(r);
                        s.find(".description").html(r.description), e.find(".content").replaceWith(s), n.load(), i.preventDefault()
                    })
                },
                autoResizeNameColumn: function(e) {
                    var t = $(window),
                        n = function() {
                            var n = $("td.room_name"),
                                i = 75 + 45 * e,
                                r = t.width() - i;
                            100 > r && (r = 100), n.css("width", r), n.find("p").css("width", r)
                        };
                    t.resize(n), n()
                }
            },
            reservation: {
                setupEnableDisableGuaranteeCheckboxHandler: function() {
                    PUBLIC.reservation.data.requires_cc ? $("#roomGuaranteePayment").show() : $("#roomGuaranteePayment").hide(), PUBLIC.reservation.data.room_rate_non_guarantee ? ($("#roomGuaranteeNotice").toggle(!PUBLIC.reservation.data.room_rate_always_non_guarantee), $("#paymentNotice, .non_seamless_payment_message").hide(), PUBLIC.reservation.data.reservation_guarantee && $("#guarantee").attr("checked", !0)) : ($("#roomGuaranteeNotice").hide(), $("#paymentNotice, .non_seamless_payment_message").show()), $("#guarantee").change(function() {
                        $(this).prop("checked") ? ($("#roomGuaranteePayment, #paymentNotice, .non_seamless_payment_message").show(), $("#reservation_guarantee").val(!0)) : ($("#reservation_payment_card_type, #reservation_payment_card_number, #reservation_payment_card_name, #reservation_payment_cvv").val(""), $("#roomGuaranteePayment, #paymentNotice, .non_seamless_payment_message").hide(), $("#reservation_guarantee").val(!1), PUBLIC.reservation.updatePrices())
                    })
                },
                setupShowDetailsTab: function(e, t, n, i, r) {
                    var e = $(e),
                        t = $(t);
                    if (t.height() > n) {
                        e.after("<div class='spacer'><div class='details_tab'>" + i + "</div></div>");
                        var s = $(".details_tab");
                        s.click(function() {
                            e.toggleClass("expand"), s.text(s.text() == i ? r : i)
                        })
                    } else e.toggleClass("expand")
                },
                initDatepicker: function(e, t) {
                    this.setupDatepicker = function() {
                        SM.util.setupDatepicker($(".checkin input.calendar"), {
                            minDate: e,
                            maxDate: t,
                            onSelect: PUBLIC.reservation.refreshPricingAvailabilityFormWithCheckInDate
                        })
                    }, this.setupDatepickerDefaultValue = function() {
                        "" != $("#preserve_check_in_date").val() && "" != $("#preserve_check_out_date").val() && ($("#check_in_date").val($("#preserve_check_in_date").val()), $("#check_out_date").val($("#preserve_check_out_date").val()), PUBLIC.reservation.refreshPricingAvailabilityFormWithCheckInDate())
                    }
                },
                resetStepsInError: function() {
                    $("form#update ol.initial_steps").find(".error, .step_error").size() > 0 ? ($("ol.final_step li.step").addClass("step_error"), SM.util.disableLabelsAndFields(".step_error"), $("a.book_now.confirm").hide()) : ($("ol.final_step li.step").removeClass("step_error"), SM.util.enableLabelsAndFields(".step_error"), $("input.mandatory").prop("disabled", !0), $("a.book_now.confirm").show())
                },
                refreshPricingAvailabilityForm: function() {
                    SM.util.enableLabelsAndFields(".step_error");
                    var e = $("form#update"),
                        t = e.serialize();
                    SM.util.showProgressIndicator(), $.get(e.prop("action"), t, function(t) {
                        e.find("ol.initial_steps").replaceWith(t), PUBLIC.reservation.setupDatepicker(), PUBLIC.reservation.updatePricesAndResetStepsInError(), SM.util.hideProgressIndicator(), $("#preserve_check_in_date").val($("#check_in_date").val()), $("#preserve_check_out_date").val($("#check_out_date").val())
                    })
                },
                refreshPricingAvailabilityFormWithCheckInDate: function() {
                    $("#start_date").val($("#check_in_date").val()), PUBLIC.reservation.refreshPricingAvailabilityForm()
                },
                copyPricingAvailabilityFields: function() {
                    var e = $(".other_form");
                    e.html(""), $("form#update select").each(function() {
                        var t = $(this),
                            n = t.clone();
                        n.val(t.val()), n.prependTo(e)
                    }), $(":checked", "form#update").each(function() {
                        $(this).clone().prop("checked", !0).prependTo(e)
                    }), $(":input[type=hidden], .calendar:text, input.guest_name_reservation_room_type", "form#update").clone().prependTo(e), $("form#update :checked").next("label").find(":text").each(function() {
                        $(this).clone().prependTo(e)
                    })
                },
                countReservationOccupancy: function(e) {
                    var t = 0;
                    return $(".rooms select.number_" + e).map(function() {
                        return parseInt($(this).val())
                    }).each(function(e, n) {
                        t += n || 0
                    }), t
                },
                setOccupancyForMandatoryPerPersonExtra: function() {
                    var e = $('tr[data-category="Per Person"][data-mandatory=true]');
                    null != e && ($(e).find("[id$=_adult_quantity]").val(PUBLIC.reservation.countReservationOccupancy("adults")).attr("disabled", !0), $(e).find("[id$=_child_quantity]").val(PUBLIC.reservation.countReservationOccupancy("children")).attr("disabled", !0))
                },
                initValidator: function(e, t, n, i) {
                    var r = {},
                        s = ["guest_first_name", "guest_last_name", "guest_phone_number", "guest_address", "guest_address2", "guest_city", "guest_country", "guest_post_code", "payment_card_type", "payment_card_name", "custom_room_rate_text_area_field"];
                    $.each(s, function(t, n) {
                        r["reservation[" + n + "]"] = e
                    }), r["reservation[guest_email]"] = {
                        required: e,
                        email: t
                    }, r["reservation[payment_card_number]"] = {
                        required: e,
                        creditcard: n
                    }, r["reservation[payment_cvv]"] = {
                        required: e,
                        digits: i
                    }, PUBLIC.reservation.validator = $("#new_reservation").validate({
                        errorElement: "p",
                        errorClass: "inline-errors",
                        focusCleanup: !0,
                        onkeyup: !1,
                        messages: r,
                        ignore: ":hidden"
                    }), $("li.required input, li.required select, li.required textarea, input.creditcard", "#new_reservation").focus(function() {
                        $(this).closest("li").removeClass("error").find("p.inline-errors").remove()
                    }).blur(function() {
                        PUBLIC.reservation.validateField($(this))
                    }).change(function() {
                        PUBLIC.reservation.validateField($(this))
                    }), $("#new_reservation li select").click(function() {
                        var e = $(this);
                        e.data("validated") && PUBLIC.reservation.validateField(e)
                    }), $("#reservation_payment_card_expiry_input select").change(function() {
                        $("#reservation_payment_card_expiry_input").removeClass("error").find("p.inline-errors").remove()
                    })
                },
                validateField: function(e) {
                    var t = e.closest("li");
                    PUBLIC.reservation.validator.element(e) ? (t.removeClass("error"), t.find("p.inline-errors").remove()) : t.addClass("error"), e.data("validated", !0)
                },
                setupRatesTableNavigationLinks: function() {
                    $("table.rates thead.controls th.date_nav a").filter(function() {
                        return !!$(this).data("date")
                    }).click(PUBLIC.reservation.navigateRatesTable)
                },
                navigateRatesTable: function(e) {
                    $("#start_date").val($(this).data("date"));
                    var t = $("form#update"),
                        n = t.serialize();
                    SM.util.showProgressIndicator(), $.get(t.prop("action").replace("calculate", "rates_table"), n, function(e) {
                        t.find("table.rates").replaceWith(e), SM.util.hideProgressIndicator(), PUBLIC.reservation.setupRatesTableNavigationLinks()
                    }, "html"), e.preventDefault()
                },
                forceAjaxDateNavigation: function(e) {
                    $("#start_date").val($(this).data("date")), PUBLIC.reservation.refreshPricingAvailabilityForm(), e.preventDefault()
                },
                forceAjaxUpdateOnEnterKey: function(e) {
                    13 == (e.keyCode || e.which) && (e.preventDefault(), PUBLIC.reservation.refreshPricingAvailabilityFormWithCheckInDate())
                },
                preventEnterFromSubmittingForm: function(e) {
                    13 == (e.keyCode || e.which) && e.preventDefault()
                },
                ensureValidFormSubmission: function(e) {
                    var t = $(this);
                    if (t.hasClass("submitted")) SM.util.warningDialog("We're currently processing your reservation. Please wait for the confirmation page to appear."), e.preventDefault();
                    else {
                        var n = t.hasClass("confirmed");
                        n ? t.addClass("submitted") : e.preventDefault()
                    }
                },
                initConfirmationOverlay: function() {
                    var e = $("a.confirm").overlay({
                        expose: {
                            color: "#333",
                            loadSpeed: 200,
                            opacity: .9
                        },
                        closeOnClick: !1
                    });
                    e.onBeforeLoad(PUBLIC.reservation.setupConfirmationDialog), $(".overlay a.book_now").click(function() {
                        SM.util.showProgressIndicator(), PUBLIC.reservation.copyPricingAvailabilityFields(), e.close(), $("form.reservation").addClass("confirmed").submit()
                    })
                },
                formInvalidErrorMessage: "There are errors with your details. Please correct them and book again.",
                termsAndConditionsUnreadErrorMessage: "Please read and accept the terms and conditions before proceeding.",
                setupConfirmationDialog: function() {
                    $("#confirm_dialog span.rooms").html($("#num_rooms").val()), $("#confirm_dialog span.checkin").html($("#check_in_date").val()), $("#confirm_dialog span.checkout").html($("#check_out_date").val()), $("#confirm_dialog span.number_of_nights").html(PUBLIC.reservation.data.numberNights), $("#confirm_dialog span.total").html(SM.util.toCurrency(parseFloat($("#reservation_payment_total_confirmation").val()))), $("li.required input, li.required select, input.creditcard, li.required textarea", "#new_reservation").each(function() {
                        PUBLIC.reservation.validateField($(this))
                    });
                    var e = $("#reservation_terms_and_conditions").prop("checked"),
                        t = $("#new_reservation").valid(),
                        n = (t ? "" : PUBLIC.reservation.formInvalidErrorMessage) || (e ? "" : PUBLIC.reservation.termsAndConditionsUnreadErrorMessage);
                    return "" != n ? (SM.util.warningDialog(n), e || $("#reservation_terms_and_conditions_input").addClass("error"), t || SM.util.scrollTo($("#new_reservation .error:first")), !1) : !0
                },
                createTooltip: function(e) {
                    var t = $("#tool_tip_template").tmpl(e);
                    $("#room_rate_date_tooltip").html(t), t.find("tr.inclusions td").html(e.inclusions)
                },
                tooltipHandler: function(e, t, n) {
                    var i = $(window),
                        r = 20,
                        s = r + 15,
                        a = e.parents();
                    e.mouseover(function() {
                        n && n(e)
                    }).mousemove(function(e) {
                        var n, a, o = 10,
                            l = t.width() + o,
                            c = t.height() + o;
                        l + e.pageX + s > i.width() + i.scrollLeft() ? (n = e.pageX - l - r, 10 > n && (n = 10)) : n = e.pageX + r;
                        var u = i.scrollTop();
                        c + e.pageY + s > i.height() + u ? (a = e.pageY - c - r, u + r > a && (a = u + r)) : a = e.pageY + r, t.css({
                            left: n,
                            top: a,
                            display: "block"
                        })
                    }).mouseout(function(n) {
                        var i = $(n.toElement ? n.toElement : n.relatedTarget);
                        (i.parents().index(e) < 0 || a.index(i) < 0) && t.css({
                            display: "none"
                        })
                    })
                },
                setupTooltips: function(e) {
                    var t = $("#room_rate_date_tooltip");
                    e.each(function() {
                        var e = $(this);
                        PUBLIC.reservation.tooltipHandler(e, t, function(e) {
                            PUBLIC.reservation.createTooltip(PUBLIC.reservation.tooltips[e.data("id")]), t.removeClass("package special"), e.hasClass("special") && t.addClass("special"), e.hasClass("package") && t.addClass("package")
                        })
                    })
                },
                setupExtraTooltips: function(e) {
                    var t = $("#extra_tooltip");
                    e.each(function() {
                        var e = $(this);
                        PUBLIC.reservation.tooltipHandler(e, t, function(e) {
                            t.html(e.next(".full").html())
                        })
                    })
                },
                setupRoomTooltips: function(e) {
                    var t = $("#room_tooltip");
                    e.each(function() {
                        var e = $(this);
                        PUBLIC.reservation.tooltipHandler(e, t, function(e) {
                            t.html("<p>" + (e.find(".tooltip_content").text() || e.text()) + "</p>")
                        })
                    })
                },
                setupTaxBreakDownTooltip: function(e) {
                    PUBLIC.reservation.tooltipHandler(e, $("#tax_tooltip"))
                },
                setupEnquireDialogs: function() {
                    var e = $("#enquiry.overlay form"),
                        t = !1,
                        n = $("#enquiry.overlay").overlay({
                            expose: {
                                color: "#333",
                                opacity: "0.5",
                                onBeforeLoad: function() {
                                    e.find(":text, textarea").val(""), $.fn.bgiframe && this.getMask().bgiframe()
                                }
                            },
                            api: !0
                        });
                    $("a.enquire,a.room_enquiry, span.enquire a, a.contact_us").live("click", function() {
                        return e.find("#enquiry_room_rate_id").val($(this).data("roomTypeId")), e.find("#enquiry_date").val($(this).data("date")), n.load(), !1
                    }), e.submit(function(n) {
                        $.post(e.prop("action"), e.serialize(), function() {
                            t = !1
                        }), n.preventDefault()
                    }), $("#enquiry a.enquire").click(function() {
                        return t || (t = !0, e.submit(), n.close()), !1
                    })
                },
                setupReferralFields: function() {
                    var e = $("#reservation_referral"),
                        t = $("#reservation_other_referral_input"),
                        n = t.find("#reservation_other_referral"),
                        i = function() {
                            "other" === e.val().toLowerCase() ? t.show() : (t.hide(), n.val(""))
                        };
                    e.change(i).keyup(i).keypress(i).change()
                },
                setupOverlays: function(e) {
                    var t = new Array;
                    e.each(function() {
                        $(this).overlay({
                            fixed: !1,
                            onBeforeLoad: function() {
                                if (this.getOverlay().find("ul.carousel-thumb").length > 0 && -1 == jQuery.inArray(this.getTrigger().attr("rel"), t)) {
                                    {
                                        this.getTrigger().find("li").attr("property-slide-index") || null
                                    }
                                    if (this.getOverlay().find(".thumbs img").length > 4) var e = {
                                        infiniteLoop: !1,
                                        startSlide: 0,
                                        hideControlOnEnd: !0,
                                        mode: "horizontal"
                                    }; {
                                        var n = this.getOverlay().find("ul.carousel-thumb").bxSlider($.extend({
                                            slideWidth: 95,
                                            pager: !1,
                                            minSlides: 4,
                                            maxSlides: 4,
                                            moveSlides: 4
                                        }, e || {}));
                                        this.getOverlay().find("ul.carousel-standard").bxSlider({
                                            slideWidth: 420,
                                            minSlides: 1,
                                            maxSlides: 1,
                                            moveSlides: 1,
                                            pagerCustom: n,
                                            adaptiveHeight: !0,
                                            startSlide: 0,
                                            controls: !1,
                                            nextOnImage: !0,
                                            infiniteLoop: !1
                                        })
                                    }
                                    t.push(this.getTrigger().attr("rel"))
                                }
                            },
                            expose: {
                                color: "#333",
                                loadSpeed: 200,
                                opacity: .3,
                                onBeforeLoad: function() {
                                    $.fn.bgiframe && this.getMask().bgiframe()
                                }
                            }
                        })
                    })
                },
                setupDetailLinks: function(e) {
                    $(document).on("click", e, function() {
                        return SM.util.scrollTo($($(this).attr("href"))), !1
                    })
                },
                updatePrices: function() {
                    if ($(this).prop("disabled")) return !1;
                    PUBLIC.reservation.setOccupancyForMandatoryPerPersonExtra();
                    var e = new UtilCalculator,
                        t = PUBLIC.reservation.buildRoomCalculators(e),
                        n = PUBLIC.reservation.buildExtraCalculators(e),
                        i = PUBLIC.reservation.buildTaxCalculators(e),
                        r = PUBLIC.reservation.buildReservationCalculator(e);
                    $.each(t, function(e, t) {
                        t.taxCalculators = i
                    }), $.each(n, function(e, n) {
                        n.roomCalculators = t, n.taxCalculators = i
                    }), $.each(i, function(e, i) {
                        i.roomCalculators = t, i.extraCalculators = n
                    }), r.roomCalculators = t, r.extraCalculators = n, r.taxCalculators = i, PUBLIC.reservation.updateRoomPrices(t), PUBLIC.reservation.updateExtraPrices(n), PUBLIC.reservation.updateTotalPrices(r), PUBLIC.reservation.updateBookingSummaryPrices(r), $("#reservation_payment_total_confirmation").val(r.getTotal()).trigger("changed.total"), r.getSurchargeTotal() > 0 ? $("p.cc-payment-notice").text(PUBLIC.reservation.surcharge_notices[$("#reservation_payment_card_type").val().toLowerCase()]).show() : $("p.cc-payment-notice").hide(), $.each(["discount", "extra_adult", "extra_child", "extra_infant", "extra_total", "service_charges", "surcharge", "room_gst"], function(e, t) {
                        $("#confirm_dialog ." + t).each(function() {
                            var e = $(this).find(".amount").html();
                            e == SM.util.toCurrency(0) || "" == e ? $(this).hide() : $(this).show()
                        })
                    })
                },
                updateGlobalErrorUi: function(e) {
                    var t = $("form#update .pricing .rooms .control td.error").length > 0,
                        n = $("form#update .initial_steps .pricing tbody.extras label.error").length > 0;
                    t ? ($("form#update .step2 #flash_error").show(), $("form#update .step2 #flash_error strong").html(e)) : $("form#update .step2 #flash_error").hide(), t || n ? ($("form#new_reservation .final_step li.step").addClass("step_error"), SM.util.disableLabelsAndFields(".step_error"), $("a.book_now.confirm").hide()) : (SM.util.enableLabelsAndFields(".step_error"), $("form#new_reservation .final_step li.step").removeClass("step_error"), $("a.book_now.confirm").show())
                },
                buildRoomCalculators: function(e) {
                    var t = "",
                        n = $.map($("form#update .pricing .rooms .control"), function(n) {
                            var i = new RoomCalculator({
                                index: $(n).data("room-index"),
                                occupancyIncludesInfants: PUBLIC.reservation.data.occupancyIncludesInfants,
                                includedOccupancy: PUBLIC.reservation.data.includedOccupancy,
                                maxOccupancy: PUBLIC.reservation.data.maxOccupancy,
                                extraAdultRate: PUBLIC.reservation.data.extraAdultRate,
                                extraChildRate: PUBLIC.reservation.data.extraChildRate,
                                extraInfantRate: PUBLIC.reservation.data.extraInfantRate,
                                rates: PUBLIC.reservation.data.rates,
                                freeNights: PUBLIC.reservation.data.freeNights,
                                promotionDiscounts: PUBLIC.reservation.data.promotionDiscounts,
                                serviceChargePercentage: PUBLIC.reservation.data.serviceChargePercentage,
                                taxableServiceCharge: PUBLIC.reservation.data.taxableServiceCharge,
                                adults: $(n).find('[name$="[number_adults]"]').val(),
                                children: $(n).find('[name$="[number_children]"]').val(),
                                infants: $(n).find('[name$="[number_infants]"]').val(),
                                utilCalculator: e,
                                ratesIncludingFees: PUBLIC.reservation.data.ratesIncludingFees
                            });
                            return i.hasInfantsWithoutAdult() ? t = PUBLIC.reservation.occupancy_errors.infants_without_adult : i.isEmpty() ? t = PUBLIC.reservation.occupancy_errors.no_occupants : i.isOverOccupied() && (t = PUBLIC.reservation.occupancy_errors.over_occupied), t ? $(n).find("td").addClass("error") : $(n).find("td").removeClass("error"), i
                        });
                    return PUBLIC.reservation.updateGlobalErrorUi(t), n
                },
                buildExtraCalculators: function(e) {
                    return $.map($("form#update .initial_steps .pricing tbody.extras tr:not(.subheader) input[type=checkbox]:checked"), function(t) {
                        t = $(t).closest("tr");
                        var n = new ExtraCalculator({
                            id: t.data("extra-id"),
                            category: t.data("category"),
                            adultRate: t.data("adult-rate"),
                            childRate: t.data("child-rate"),
                            allowMultiple: t.data("allow-multiple"),
                            mandatory: t.data("mandatory"),
                            ratesIncludingFees: PUBLIC.reservation.data.ratesIncludingFees,
                            selected: !0,
                            numberNights: PUBLIC.reservation.data.rates.length,
                            utilCalculator: e,
                            adults: t.find('[name$="[adult_quantity]"]').val(),
                            children: t.find('[name$="[child_quantity]"]').val()
                        });
                        return n.valid() ? t.find("label").removeClass("error") : t.find("label").addClass("error"), n
                    })
                },
                buildTaxCalculators: function(e) {
                    return $.map(PUBLIC.reservation.data.taxes, function(t) {
                        return new TaxCalculator({
                            id: t.id,
                            name: t.name,
                            serviceChargePercentage: PUBLIC.reservation.data.serviceChargePercentage,
                            taxableServiceCharge: PUBLIC.reservation.data.taxableServiceCharge,
                            percentage: t.percentage,
                            fixedAmount: t.fixedAmount,
                            fixedAmountType: t.fixedAmountType,
                            applicableToEverything: t.applicableToEverything,
                            applicableToRooms: t.applicableToRooms,
                            applicableToExtras: t.applicableToExtras,
                            extraIds: t.extraIds,
                            numberNights: PUBLIC.reservation.data.rates.length,
                            utilCalculator: e
                        })
                    })
                },
                buildReservationCalculator: function(e) {
                    var t = new ReservationCalculator({
                        surcharges: PUBLIC.reservation.surcharges,
                        depositType: PUBLIC.reservation.data.depositType,
                        depositAmount: PUBLIC.reservation.data.depositAmount,
                        taxableServiceCharge: PUBLIC.reservation.data.taxableServiceCharge,
                        utilCalculator: e,
                        ratesIncludingFees: PUBLIC.reservation.data.ratesIncludingFees
                    });
                    return t.setCreditCard($("#reservation_payment_card_type").val()), t
                },
                updateRoomPrices: function(e) {
                    $.each(e, function(e, t) {
                        var n = t.utilCalculator,
                            i = t.getTaxAndServiceChargePercent();
                        if (PUBLIC.reservation.data.showRatesIncludingFees && !PUBLIC.reservation.data.ratesIncludingFees) var r = n.addChargeTo(t.getExtraAdultsRate(), i),
                            s = n.addChargeTo(t.getExtraChildrenRate(), i),
                            a = n.addChargeTo(t.getExtraInfantsRate(), i);
                        else if (!PUBLIC.reservation.data.showRatesIncludingFees && PUBLIC.reservation.data.ratesIncludingFees) var r = n.removeChargeFrom(t.getExtraAdultsRate(), i),
                            s = n.removeChargeFrom(t.getExtraChildrenRate(), i),
                            a = n.removeChargeFrom(t.getExtraInfantsRate(), i);
                        else var r = t.getExtraAdultsRate(),
                            s = t.getExtraChildrenRate(),
                            a = t.getExtraInfantsRate();
                        var o = $("form#update .initial_steps .pricing tbody.rooms tr[data-room-index=" + t.index + "]");
                        SM.util.renderCurrency(o.find(".extra_adult"), r), SM.util.renderCurrency(o.find(".extra_child"), s), SM.util.renderCurrency(o.find(".extra_infant"), a), o.each(function(e, r) {
                            if (PUBLIC.reservation.data.showRatesIncludingFees) var s = t.getTotalForNight(e),
                                a = t.getTotalBeforeDiscountForNight(e);
                            else var s = t.getTotalBeforeServiceChargeForNight(e),
                                a = t.getTotalBeforeDiscountAndServiceChargeForNight(e);
                            if (PUBLIC.reservation.data.showRatesIncludingFees && !PUBLIC.reservation.data.ratesIncludingFees) var o = n.addChargeTo(t.getRateBeforeDiscountAndStayPayDealForNight(e), i),
                                l = n.addChargeTo(t.getRateBeforeStayPayDealForNight(e), i);
                            else if (!PUBLIC.reservation.data.showRatesIncludingFees && PUBLIC.reservation.data.ratesIncludingFees) var o = n.removeChargeFrom(t.getRateBeforeDiscountAndStayPayDealForNight(e), i),
                                l = n.removeChargeFrom(t.getRateBeforeStayPayDealForNight(e), i);
                            else var o = t.getRateBeforeDiscountAndStayPayDealForNight(e),
                                l = t.getRateBeforeStayPayDealForNight(e);
                            PUBLIC.reservation.data.showDiscount ? (SM.util.renderCurrency($(r).find(".rrt_rate_date"), o), SM.util.renderCurrency($(r).find(".rrt_date_total"), a), SM.util.renderCurrency($(r).find(".rrt_date_tax"), t.getTaxBeforeDiscountForNight(e))) : (SM.util.renderCurrency($(r).find(".rrt_rate_date"), l), SM.util.renderCurrency($(r).find(".rrt_date_total"), s), SM.util.renderCurrency($(r).find(".rrt_date_tax"), t.getTaxForNight(e))), PUBLIC.reservation.data.freeNights[e] && $(r).find(".rrt_rate_date").addClass("line-through")
                        })
                    })
                },
                updateExtraPrices: function(e) {
                    SM.util.renderCurrency($("form#update .initial_steps .pricing").find(".extra_amount, .extra_tax"), 0), $.each(e, function(e, t) {
                        var n = $("form#update .initial_steps .pricing tbody.extras tr[data-extra-id=" + t.id + "]");
                        SM.util.renderCurrency(n.find(".extra_amount"), t.getTotal()), SM.util.renderCurrency(n.find(".extra_tax"), t.getTaxTotal())
                    })
                },
                updateTotalPrices: function(e) {
                    if (PUBLIC.reservation.data.showRatesIncludingFees) var t = e.getRoomTotalBeforeDiscount(),
                        n = e.getRoomTotal(),
                        i = e.getDiscountTotal(),
                        r = e.getExtraTotal();
                    else var t = e.getRoomTotalBeforeDiscountTaxAndServiceCharge(),
                        n = e.getRoomTotalBeforeTaxAndServiceCharge(),
                        i = e.getDiscountTotalBeforeTaxAndServiceCharge(),
                        r = e.getExtraTotalBeforeTax();
                    PUBLIC.reservation.data.showDiscount ? (SM.util.renderCurrency($("form#update .initial_steps .pricing .room_total"), t), SM.util.renderDiscountCurrency($("form#update .initial_steps .pricing .discount_total"), i)) : SM.util.renderCurrency($("form#update .initial_steps .pricing .room_total"), n), SM.util.renderCurrency($("form#update .initial_steps .pricing .room_gst"), e.getTaxTotal()), SM.util.renderCurrency($("form#update .initial_steps .pricing .room_service_charge"), e.getServiceChargeTotal()), SM.util.renderCurrency($("form#update .initial_steps .pricing .extra_total"), r), SM.util.renderCurrency($("form#update .initial_steps .pricing .grand_total span"), e.getTotalBeforeSurcharge());
                    var s = $.map(e.extraCalculators, function(e) {
                            return 1 == e.selected ? e.id : void 0
                        }),
                        a = [];
                    switch ($.each(e.taxCalculators, function(e, t) {
                        var n = t.isFixedAmount() ? t.getFixedAmountTotal() : t.getPercentageAmountTotal();
                        SM.util.renderCurrency($('#tax_tooltip tr[data-tax-name="' + t.name + '"] .amount'), n), t.isFixedAmount() || t.isApplicableToReservation(s) ? (a.push(t.name), $('#tax_tooltip tr[data-tax-name="' + t.name + '"]').show()) : $('#tax_tooltip tr[data-tax-name="' + t.name + '"]').hide()
                    }), a.length) {
                        case 0:
                            $("span.tax-label").html($("span.tax-label").data("label")), $("#tax_tooltip_trigger").hide();
                            break;
                        case 1:
                            $("span.tax-label").html(a[0]), $("#tax_tooltip_trigger").hide();
                            break;
                        default:
                            $("span.tax-label").html($("span.tax-label").data("label")), $("#tax_tooltip_trigger").show()
                    }
                },
                updateBookingSummaryPrices: function(e) {
                    if (PUBLIC.reservation.data.showRatesIncludingFees) var t = e.getRoomTotal(),
                        n = e.getRoomTotalBeforeDiscount(),
                        i = e.getExtraOccupantsTotal(),
                        r = e.getDiscountTotal(),
                        s = e.getExtraAdultsTotal(),
                        a = e.getExtraChildrenTotal(),
                        o = e.getExtraInfantsTotal(),
                        l = e.getExtraTotal();
                    else var t = e.getRoomTotalBeforeTaxAndServiceCharge(),
                        n = e.getRoomTotalBeforeDiscountTaxAndServiceCharge(),
                        i = e.getExtraOccupantsTotalBeforeTaxAndServiceCharge(),
                        r = e.getDiscountTotalBeforeTaxAndServiceCharge(),
                        s = e.getExtraAdultsTotalBeforeTaxAndServiceCharge(),
                        a = e.getExtraChildrenTotalBeforeTaxAndServiceCharge(),
                        o = e.getExtraInfantsTotalBeforeTaxAndServiceCharge(),
                        l = e.getExtraTotalBeforeTax();
                    PUBLIC.reservation.data.showDiscount ? SM.util.renderCurrency($("#confirm_dialog .room_total_without_extra span.amount"), n - i) : SM.util.renderCurrency($("#confirm_dialog .room_total_without_extra span.amount"), t - i), SM.util.renderDiscountCurrency($("#confirm_dialog .discount span.amount"), r), SM.util.renderCurrency($("#confirm_dialog .extra_adult span.amount"), s), SM.util.renderCurrency($("#confirm_dialog .extra_child span.amount"), a), SM.util.renderCurrency($("#confirm_dialog .extra_infant span.amount"), o), SM.util.renderCurrency($("#confirm_dialog .extra_total span.amount"), l), SM.util.renderCurrency($("#confirm_dialog .sub_total span.amount"), e.getRoomAndExtraTotal()), SM.util.renderCurrency($("#confirm_dialog .service_charges span.amount"), e.getServiceChargeTotal()), SM.util.renderCurrency($("#confirm_dialog .surcharge span.amount, #confirm_dialog .surcharge_total span.amount"), e.getSurchargeTotal()), SM.util.renderCurrency($("#confirm_dialog .grand_total span.amount"), e.getTotal()), SM.util.renderCurrency($("#confirm_dialog .deposit span.amount"), e.getDepositTotal()), SM.util.renderCurrency($("#confirm_dialog .total span.amount"), e.getDepositTotal() + e.getSurchargeTotal()), SM.util.renderCurrency($("#confirm_dialog .outstanding span.amount"), e.getRoomAndExtraTotal() + e.getFixedAmountTaxTotal() - e.getDepositTotal()), SM.util.renderCurrency($("#confirm_dialog .tax_total span.amount"), e.getTaxTotal())
                },
                getSurchargePercentage: function() {
                    return PUBLIC.reservation.surcharges[$("#reservation_payment_card_type").val()] || 0
                },
                setupSurchargeChangedHandler: function() {
                    var e = function() {
                        var e = $("#reservation_payment_card_type_input");
                        PUBLIC.reservation.updatePrices();
                        var t = PUBLIC.reservation.getSurchargePercentage();
                        e.find("p.inline-hints").remove(), t > 0 && e.find("select").after($("#surcharge_applied_message").tmpl({
                            surchargePercentage: t
                        }))
                    };
                    $("#reservation_payment_card_type").change(e).keyup(e).keypress(e), e()
                },
                setupOccupancyAndExtrasEventHandlers: function() {
                    $("form#update").on("keyup", ".pricing .extras input[type=text]", function() {
                        var e = $(this);
                        e.val() && e.closest("tr").find("input[type=checkbox]").prop("checked", !0)
                    }).on("change keyup", ".pricing .rooms select, .pricing .extras input[type=text]", PUBLIC.reservation.updatePrices).on("keypress", ".pricing .rooms select, .pricing .extras input[type=text]", function(e) {
                        (0 == e.keyCode || 13 == e.keyCode) && PUBLIC.reservation.updatePrices()
                    }).on("click", ".pricing .extras input[type=checkbox]", function() {
                        var e = $(this),
                            t = e.closest("tr"),
                            n = t.find("input[type=text]");
                        n.length > 0 && (e.prop("checked") ? $.each(n, function(e, t) {
                            var n = $(t);
                            n.val() || n.val(0 == e ? 1 : 0)
                        }) : (t.find("td:first label").removeClass("error"), n.val(""))), PUBLIC.reservation.updatePrices()
                    })
                },
                setupMandatoryExtraOccupancies: function() {
                    $(document).on("change", '.rooms select[class^="number_"]', PUBLIC.reservation.setOccupancyForMandatoryPerPersonExtra)
                },
                updatePricesAndResetStepsInError: function() {
                    PUBLIC.reservation.setOccupancyForMandatoryPerPersonExtra(), PUBLIC.reservation.updatePrices(), PUBLIC.reservation.resetStepsInError()
                }
            }
        }, e.PUBLIC.GA = function(e) {
            this.id = e.id, this.name = "smT", this.data = e.data
        }, e.PUBLIC.GA.prototype.virtualPage = function() {
            var e = window.location.pathname;
            return -1 !== e.indexOf("properties") ? {
                url: "tbb/classic/property",
                title: "Landing Page"
            } : -1 !== e.indexOf("confirmations") ? {
                url: "tbb/classic/confirmation",
                title: "Reservation Confirmation"
            } : -1 !== e.indexOf("reservations") ? {
                url: "tbb/classic/reservation",
                title: "Review Reservation / Extras / Cart"
            } : -1 !== e.indexOf("cancellations") ? {
                url: "tbb/classic/cancellation",
                title: "Reservation Cancellation"
            } : void 0
        }, e.PUBLIC.GA.prototype.ga = function(e, t) {
            e = this.name + "." + e, $.isEmptyObject(t) ? ga(e) : ga(e, t)
        }, e.PUBLIC.GA.prototype.setVirtualPage = function() {
            var e = this.virtualPage();
            e && this.ga("set", {
                page: e.url,
                title: e.title
            })
        }, e.PUBLIC.GA.prototype.setDimensions = function() {
            this.ga("set", this.data.dimension)
        }, e.PUBLIC.GA.prototype.setMetrics = function() {
            var e = this.virtualPage();
            ("tbb/classic/confirmation" === e.url || "tbb/classic/cancellation" === e.url) && this.ga("set", this.data.metric)
        }, e.PUBLIC.GA.prototype.pageTrack = function() {
            ga("create", this.id, "auto", {
                name: this.name
            }), this.setVirtualPage(), this.setDimensions(), this.setMetrics(), this.ga("send", "pageview")
        }, e.PUBLIC.GA.prototype.ecommerceTrack = function() {
            var e = this;
            ga("create", e.id, "auto", {
                name: e.name
            }), e.ga("require", "ecommerce"), e.ga("ecommerce:addTransaction", e.data.ecommerce.transaction), $.each(e.data.ecommerce.items, function(t, n) {
                e.ga("ecommerce:addItem", n)
            }), e.ga("ecommerce:send")
        }
    }();