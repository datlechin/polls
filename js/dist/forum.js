/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dayjs/dayjs.min.js"
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
(module) {

!function (t, e) {
   true ? module.exports = e() : 0;
}(this, function () {
  "use strict";

  var t = 1e3,
    e = 6e4,
    n = 36e5,
    r = "millisecond",
    i = "second",
    s = "minute",
    u = "hour",
    a = "day",
    o = "week",
    c = "month",
    f = "quarter",
    h = "year",
    d = "date",
    l = "Invalid Date",
    $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
    y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
    M = {
      name: "en",
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      ordinal: function (t) {
        var e = ["th", "st", "nd", "rd"],
          n = t % 100;
        return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
      }
    },
    m = function (t, e, n) {
      var r = String(t);
      return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    },
    v = {
      s: m,
      z: function (t) {
        var e = -t.utcOffset(),
          n = Math.abs(e),
          r = Math.floor(n / 60),
          i = n % 60;
        return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
      },
      m: function t(e, n) {
        if (e.date() < n.date()) return -t(n, e);
        var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
          i = e.clone().add(r, c),
          s = n - i < 0,
          u = e.clone().add(r + (s ? -1 : 1), c);
        return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
      },
      a: function (t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
      },
      p: function (t) {
        return {
          M: c,
          y: h,
          w: o,
          d: a,
          D: d,
          h: u,
          m: s,
          s: i,
          ms: r,
          Q: f
        }[t] || String(t || "").toLowerCase().replace(/s$/, "");
      },
      u: function (t) {
        return void 0 === t;
      }
    },
    g = "en",
    D = {};
  D[g] = M;
  var p = "$isDayjsObject",
    S = function (t) {
      return t instanceof _ || !(!t || !t[p]);
    },
    w = function t(e, n, r) {
      var i;
      if (!e) return g;
      if ("string" == typeof e) {
        var s = e.toLowerCase();
        D[s] && (i = s), n && (D[s] = n, i = s);
        var u = e.split("-");
        if (!i && u.length > 1) return t(u[0]);
      } else {
        var a = e.name;
        D[a] = e, i = a;
      }
      return !r && i && (g = i), i || !r && g;
    },
    O = function (t, e) {
      if (S(t)) return t.clone();
      var n = "object" == typeof e ? e : {};
      return n.date = t, n.args = arguments, new _(n);
    },
    b = v;
  b.l = w, b.i = S, b.w = function (t, e) {
    return O(t, {
      locale: e.$L,
      utc: e.$u,
      x: e.$x,
      $offset: e.$offset
    });
  };
  var _ = function () {
      function M(t) {
        this.$L = w(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[p] = !0;
      }
      var m = M.prototype;
      return m.parse = function (t) {
        this.$d = function (t) {
          var e = t.date,
            n = t.utc;
          if (null === e) return new Date(NaN);
          if (b.u(e)) return new Date();
          if (e instanceof Date) return new Date(e);
          if ("string" == typeof e && !/Z$/i.test(e)) {
            var r = e.match($);
            if (r) {
              var i = r[2] - 1 || 0,
                s = (r[7] || "0").substring(0, 3);
              return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
            }
          }
          return new Date(e);
        }(t), this.init();
      }, m.init = function () {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, m.$utils = function () {
        return b;
      }, m.isValid = function () {
        return !(this.$d.toString() === l);
      }, m.isSame = function (t, e) {
        var n = O(t);
        return this.startOf(e) <= n && n <= this.endOf(e);
      }, m.isAfter = function (t, e) {
        return O(t) < this.startOf(e);
      }, m.isBefore = function (t, e) {
        return this.endOf(e) < O(t);
      }, m.$g = function (t, e, n) {
        return b.u(t) ? this[e] : this.set(n, t);
      }, m.unix = function () {
        return Math.floor(this.valueOf() / 1e3);
      }, m.valueOf = function () {
        return this.$d.getTime();
      }, m.startOf = function (t, e) {
        var n = this,
          r = !!b.u(e) || e,
          f = b.p(t),
          l = function (t, e) {
            var i = b.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
            return r ? i : i.endOf(a);
          },
          $ = function (t, e) {
            return b.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n);
          },
          y = this.$W,
          M = this.$M,
          m = this.$D,
          v = "set" + (this.$u ? "UTC" : "");
        switch (f) {
          case h:
            return r ? l(1, 0) : l(31, 11);
          case c:
            return r ? l(1, M) : l(0, M + 1);
          case o:
            var g = this.$locale().weekStart || 0,
              D = (y < g ? y + 7 : y) - g;
            return l(r ? m - D : m + (6 - D), M);
          case a:
          case d:
            return $(v + "Hours", 0);
          case u:
            return $(v + "Minutes", 1);
          case s:
            return $(v + "Seconds", 2);
          case i:
            return $(v + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m.endOf = function (t) {
        return this.startOf(t, !1);
      }, m.$set = function (t, e) {
        var n,
          o = b.p(t),
          f = "set" + (this.$u ? "UTC" : ""),
          l = (n = {}, n[a] = f + "Date", n[d] = f + "Date", n[c] = f + "Month", n[h] = f + "FullYear", n[u] = f + "Hours", n[s] = f + "Minutes", n[i] = f + "Seconds", n[r] = f + "Milliseconds", n)[o],
          $ = o === a ? this.$D + (e - this.$W) : e;
        if (o === c || o === h) {
          var y = this.clone().set(d, 1);
          y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
        } else l && this.$d[l]($);
        return this.init(), this;
      }, m.set = function (t, e) {
        return this.clone().$set(t, e);
      }, m.get = function (t) {
        return this[b.p(t)]();
      }, m.add = function (r, f) {
        var d,
          l = this;
        r = Number(r);
        var $ = b.p(f),
          y = function (t) {
            var e = O(l);
            return b.w(e.date(e.date() + Math.round(t * r)), l);
          };
        if ($ === c) return this.set(c, this.$M + r);
        if ($ === h) return this.set(h, this.$y + r);
        if ($ === a) return y(1);
        if ($ === o) return y(7);
        var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1,
          m = this.$d.getTime() + r * M;
        return b.w(m, this);
      }, m.subtract = function (t, e) {
        return this.add(-1 * t, e);
      }, m.format = function (t) {
        var e = this,
          n = this.$locale();
        if (!this.isValid()) return n.invalidDate || l;
        var r = t || "YYYY-MM-DDTHH:mm:ssZ",
          i = b.z(this),
          s = this.$H,
          u = this.$m,
          a = this.$M,
          o = n.weekdays,
          c = n.months,
          f = n.meridiem,
          h = function (t, n, i, s) {
            return t && (t[n] || t(e, r)) || i[n].slice(0, s);
          },
          d = function (t) {
            return b.s(s % 12 || 12, t, "0");
          },
          $ = f || function (t, e, n) {
            var r = t < 12 ? "AM" : "PM";
            return n ? r.toLowerCase() : r;
          };
        return r.replace(y, function (t, r) {
          return r || function (t) {
            switch (t) {
              case "YY":
                return String(e.$y).slice(-2);
              case "YYYY":
                return b.s(e.$y, 4, "0");
              case "M":
                return a + 1;
              case "MM":
                return b.s(a + 1, 2, "0");
              case "MMM":
                return h(n.monthsShort, a, c, 3);
              case "MMMM":
                return h(c, a);
              case "D":
                return e.$D;
              case "DD":
                return b.s(e.$D, 2, "0");
              case "d":
                return String(e.$W);
              case "dd":
                return h(n.weekdaysMin, e.$W, o, 2);
              case "ddd":
                return h(n.weekdaysShort, e.$W, o, 3);
              case "dddd":
                return o[e.$W];
              case "H":
                return String(s);
              case "HH":
                return b.s(s, 2, "0");
              case "h":
                return d(1);
              case "hh":
                return d(2);
              case "a":
                return $(s, u, !0);
              case "A":
                return $(s, u, !1);
              case "m":
                return String(u);
              case "mm":
                return b.s(u, 2, "0");
              case "s":
                return String(e.$s);
              case "ss":
                return b.s(e.$s, 2, "0");
              case "SSS":
                return b.s(e.$ms, 3, "0");
              case "Z":
                return i;
            }
            return null;
          }(t) || i.replace(":", "");
        });
      }, m.utcOffset = function () {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m.diff = function (r, d, l) {
        var $,
          y = this,
          M = b.p(d),
          m = O(r),
          v = (m.utcOffset() - this.utcOffset()) * e,
          g = this - m,
          D = function () {
            return b.m(y, m);
          };
        switch (M) {
          case h:
            $ = D() / 12;
            break;
          case c:
            $ = D();
            break;
          case f:
            $ = D() / 3;
            break;
          case o:
            $ = (g - v) / 6048e5;
            break;
          case a:
            $ = (g - v) / 864e5;
            break;
          case u:
            $ = g / n;
            break;
          case s:
            $ = g / e;
            break;
          case i:
            $ = g / t;
            break;
          default:
            $ = g;
        }
        return l ? $ : b.a($);
      }, m.daysInMonth = function () {
        return this.endOf(c).$D;
      }, m.$locale = function () {
        return D[this.$L];
      }, m.locale = function (t, e) {
        if (!t) return this.$L;
        var n = this.clone(),
          r = w(t, e, !0);
        return r && (n.$L = r), n;
      }, m.clone = function () {
        return b.w(this.$d, this);
      }, m.toDate = function () {
        return new Date(this.valueOf());
      }, m.toJSON = function () {
        return this.isValid() ? this.toISOString() : null;
      }, m.toISOString = function () {
        return this.$d.toISOString();
      }, m.toString = function () {
        return this.$d.toUTCString();
      }, M;
    }(),
    k = _.prototype;
  return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function (t) {
    k[t[1]] = function (e) {
      return this.$g(e, t[0], t[1]);
    };
  }), O.extend = function (t, e) {
    return t.$i || (t(e, _, O), t.$i = !0), O;
  }, O.locale = w, O.isDayjs = S, O.unix = function (t) {
    return O(1e3 * t);
  }, O.en = D[g], O.Ls = D, O.p = {}, O;
});

/***/ },

/***/ "./node_modules/dayjs/plugin/utc.js"
/*!******************************************!*\
  !*** ./node_modules/dayjs/plugin/utc.js ***!
  \******************************************/
(module) {

!function (t, i) {
   true ? module.exports = i() : 0;
}(this, function () {
  "use strict";

  var t = "minute",
    i = /[+-]\d\d(?::?\d\d)?/g,
    e = /([+-]|\d\d)/g;
  return function (s, f, n) {
    var u = f.prototype;
    n.utc = function (t) {
      var i = {
        date: t,
        utc: !0,
        args: arguments
      };
      return new f(i);
    }, u.utc = function (i) {
      var e = n(this.toDate(), {
        locale: this.$L,
        utc: !0
      });
      return i ? e.add(this.utcOffset(), t) : e;
    }, u.local = function () {
      return n(this.toDate(), {
        locale: this.$L,
        utc: !1
      });
    };
    var r = u.parse;
    u.parse = function (t) {
      t.utc && (this.$u = !0), this.$utils().u(t.$offset) || (this.$offset = t.$offset), r.call(this, t);
    };
    var o = u.init;
    u.init = function () {
      if (this.$u) {
        var t = this.$d;
        this.$y = t.getUTCFullYear(), this.$M = t.getUTCMonth(), this.$D = t.getUTCDate(), this.$W = t.getUTCDay(), this.$H = t.getUTCHours(), this.$m = t.getUTCMinutes(), this.$s = t.getUTCSeconds(), this.$ms = t.getUTCMilliseconds();
      } else o.call(this);
    };
    var a = u.utcOffset;
    u.utcOffset = function (s, f) {
      var n = this.$utils().u;
      if (n(s)) return this.$u ? 0 : n(this.$offset) ? a.call(this) : this.$offset;
      if ("string" == typeof s && (s = function (t) {
        void 0 === t && (t = "");
        var s = t.match(i);
        if (!s) return null;
        var f = ("" + s[0]).match(e) || ["-", 0, 0],
          n = f[0],
          u = 60 * +f[1] + +f[2];
        return 0 === u ? 0 : "+" === n ? u : -u;
      }(s), null === s)) return this;
      var u = Math.abs(s) <= 16 ? 60 * s : s;
      if (0 === u) return this.utc(f);
      var r = this.clone();
      if (f) return r.$offset = u, r.$u = !1, r;
      var o = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
      return (r = this.local().add(u + o, t)).$offset = u, r.$x.$localOffset = o, r;
    };
    var h = u.format;
    u.format = function (t) {
      var i = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
      return h.call(this, i);
    }, u.valueOf = function () {
      var t = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
      return this.$d.valueOf() - 6e4 * t;
    }, u.isUTC = function () {
      return !!this.$u;
    }, u.toISOString = function () {
      return this.toDate().toISOString();
    }, u.toString = function () {
      return this.toDate().toUTCString();
    };
    var l = u.toDate;
    u.toDate = function (t) {
      return "s" === t && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
    };
    var c = u.diff;
    u.diff = function (t, i, e) {
      if (t && this.$u === t.$u) return c.call(this, t, i, e);
      var s = this.local(),
        f = n(t).local();
      return c.call(s, f, i, e);
    };
  };
});

/***/ },

/***/ "./src/forum/addComposerItems.tsx"
/*!****************************************!*\
  !*** ./src/forum/addComposerItems.tsx ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToComposer: () => (/* binding */ addToComposer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);




function toPoll(data) {
  if (data) {
    const poll = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.createRecord('polls');
    poll.tempOptions = data.options.map(option => {
      const pollOption = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.createRecord('poll_options');
      pollOption.pushAttributes(option);
      return pollOption;
    });
    poll.pushAttributes(data);
    return poll;
  }
  return data;
}
function addPoll(composer) {
  flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(() => __webpack_require__.e(/*! import() | forum/components/CreatePollModal */ "forum/components/CreatePollModal").then(() => (__webpack_require__(/*! ./components/CreatePollModal */ "./src/forum/components/CreatePollModal.tsx"))), {
    poll: toPoll(composer.composer.fields.poll),
    onsubmit: poll => composer.composer.fields.poll = poll
  });
}
const addToComposer = composerPath => {
  ;(0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)(composerPath, 'headerItems', function (items) {
    const discussion = this.composer.body?.attrs?.discussion;
    const canStartPoll = discussion?.canStartPoll() ?? flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('canStartPolls');
    if (canStartPoll) {
      items.add('polls', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "ComposerBody-poll Button Button--ua-reset",
        onclick: () => addPoll(this)
      }, m("span", {
        className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_2___default()('PollLabel', !this.composer.fields.poll && 'none')
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(`fof-polls.forum.composer_discussion.${this.composer.fields.poll ? 'edit' : 'add'}_poll`))), 1);
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)(composerPath, 'data', function (data) {
    if (this.composer.fields.poll) {
      data.poll = this.composer.fields.poll;
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  addToComposer('flarum/forum/components/DiscussionComposer');
  addToComposer('flarum/forum/components/ReplyComposer');
});flarum.reg.addChunkModule('forum/components/CreatePollModal', './src/forum/components/CreatePollModal.tsx', 'fof-polls', 'forum/components/CreatePollModal');flarum.reg.addChunkModule('forum/components/CreatePollModal', './src/forum/components/CreatePollModal.tsx', 'fof-polls', 'forum/components/CreatePollModal');flarum.reg.addChunkModule('forum/components/CreatePollModal', './src/forum/components/CreatePollModal.tsx', 'fof-polls', 'forum/components/CreatePollModal');flarum.reg.addChunkModule('forum/components/CreatePollModal', './src/forum/components/CreatePollModal.tsx', 'fof-polls', 'forum/components/CreatePollModal');flarum.reg.addChunkModule('forum/components/CreatePollModal', './src/forum/components/CreatePollModal.tsx', 'fof-polls', 'forum/components/CreatePollModal');flarum.reg.addChunkModule('forum/components/CreatePollModal', './src/forum/components/CreatePollModal.tsx', 'fof-polls', 'forum/components/CreatePollModal');flarum.reg.addChunkModule('forum/components/CreatePollModal', './src/forum/components/CreatePollModal.tsx', 'fof-polls', 'forum/components/CreatePollModal');flarum.reg.addChunkModule('forum/components/CreatePollModal', './src/forum/components/CreatePollModal.tsx', 'fof-polls', 'forum/components/CreatePollModal');flarum.reg.addChunkModule('forum/components/CreatePollModal', './src/forum/components/CreatePollModal.tsx', 'fof-polls', 'forum/components/CreatePollModal');flarum.reg.addChunkModule('forum/components/CreatePollModal', './src/forum/components/CreatePollModal.tsx', 'fof-polls', 'forum/components/CreatePollModal');flarum.reg.addChunkModule('forum/components/CreatePollModal', './src/forum/components/CreatePollModal.tsx', 'fof-polls', 'forum/components/CreatePollModal');flarum.reg.addChunkModule('forum/components/CreatePollModal', './src/forum/components/CreatePollModal.tsx', 'fof-polls', 'forum/components/CreatePollModal');flarum.reg.addChunkModule('forum/components/CreatePollModal', './src/forum/components/CreatePollModal.tsx', 'fof-polls', 'forum/components/CreatePollModal');flarum.reg.addChunkModule('forum/components/CreatePollModal', './src/forum/components/CreatePollModal.tsx', 'fof-polls', 'forum/components/CreatePollModal');flarum.reg.addChunkModule('forum/components/CreatePollModal', './src/forum/components/CreatePollModal.tsx', 'fof-polls', 'forum/components/CreatePollModal');flarum.reg.addChunkModule('forum/components/CreatePollModal', './src/forum/components/CreatePollModal.tsx', 'fof-polls', 'forum/components/CreatePollModal');flarum.reg.addChunkModule('forum/components/CreatePollModal', './src/forum/components/CreatePollModal.tsx', 'fof-polls', 'forum/components/CreatePollModal');flarum.reg.addChunkModule('forum/components/CreatePollModal', './src/forum/components/CreatePollModal.tsx', 'fof-polls', 'forum/components/CreatePollModal');

/***/ },

/***/ "./src/forum/addDiscussionBadge.tsx"
/*!******************************************!*\
  !*** ./src/forum/addDiscussionBadge.tsx ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Badge */ "flarum/common/components/Badge");
/* harmony import */ var flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/DiscussionList */ "flarum/forum/components/DiscussionList");
/* harmony import */ var flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/models/Discussion */ "flarum/common/models/Discussion");
/* harmony import */ var flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  // @ts-ignore
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'requestParams', params => {
    params.include.push('poll');
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_5___default().prototype), 'badges', function (badges) {
    // @ts-ignore
    if (this.hasPoll()) {
      badges.add('poll', m((flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_2___default()), {
        type: "poll",
        icon: "fas fa-poll",
        label: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.tooltip.badge'))
      }), 5);
    }
  });
});

/***/ },

/***/ "./src/forum/addNavItem.ts"
/*!*********************************!*\
  !*** ./src/forum/addNavItem.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addNavItem)
/* harmony export */ });
/* harmony import */ var flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/components/IndexSidebar */ "flarum/forum/components/IndexSidebar");
/* harmony import */ var flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3__);




function addNavItem() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.extend)((flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_0___default().prototype), 'navItems', items => {
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('globalPollsEnabled')) {
      return;
    }
    items.add('fof-polls-showcase', flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default().component({
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route('fof.polls.showcase'),
      icon: 'fas fa-poll'
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-polls.forum.page.nav')), 35);
    const canStartGlobalPolls = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('canStartGlobalPolls');
    if (canStartGlobalPolls) {
      items.add('fof-polls-list', flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default().component({
        href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route('fof.polls.list'),
        icon: 'fas fa-list'
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-polls.forum.page.nav-all')), 32);
      const canViewPollGroups = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('canViewPollGroups');
      if (canViewPollGroups) {
        items.add('fof-poll-groups-list', flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default().component({
          href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route('fof.polls.groups.list'),
          icon: 'fas fa-layer-group'
        }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-polls.forum.page.nav-groups')), 30);
      }
    }
  });
}

/***/ },

/***/ "./src/forum/addPollsToPost.tsx"
/*!**************************************!*\
  !*** ./src/forum/addPollsToPost.tsx ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/CommentPost */ "flarum/forum/components/CommentPost");
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/DiscussionPage */ "flarum/forum/components/DiscussionPage");
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PostPoll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PostPoll */ "./src/forum/components/PostPoll.tsx");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'content', function (content) {
    const post = this.attrs.post;
    if ((!post.isHidden() || this.revealContent) && post.polls()) {
      for (const poll of post.polls()) {
        if (poll) {
          content.push(m(_components_PostPoll__WEBPACK_IMPORTED_MODULE_4__["default"], {
            post: post,
            poll: poll
          }));
        }
      }
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'oninit', function () {
    this.subtree.check(() => {
      const polls = this.attrs.post.polls();
      const checks = polls?.map?.(poll => poll && [poll.data?.attributes, poll.options().map?.(option => option?.data?.attributes), poll.myVotes().map?.(vote => vote.option()?.id())]);
      return JSON.stringify(checks);
    });
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'oncreate', function () {
    // @ts-ignore
    if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().pusher)) {
      // @ts-ignore
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().pusher.then(binding => {
        // Every poll is listened for, whether or not it is on this page.
        binding.channels.main.bind('updatedPollOptions', data => {
          const poll = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.getById('polls', data['pollId']);
          if (poll) {
            poll.pushAttributes({
              voteCount: data['pollVoteCount']
            });

            // The option update below redraws.
          }
          const changedOptions = data['options'];
          for (const optionId in changedOptions) {
            const option = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.getById('poll_options', optionId);
            if (option && option.voteCount() !== undefined) {
              option.pushAttributes({
                voteCount: changedOptions[optionId]
              });
            }
          }
          m.redraw();
        });
      });
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'onremove', function () {
    // @ts-ignore
    if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().pusher)) {
      // @ts-ignore
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().pusher.then(binding => {
        binding.channels.main.unbind('updatedPollOptions');
      });
    }
  });
});

/***/ },

/***/ "./src/forum/addPostControls.tsx"
/*!***************************************!*\
  !*** ./src/forum/addPostControls.tsx ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_utils_PostControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/utils/PostControls */ "flarum/forum/utils/PostControls");
/* harmony import */ var flarum_forum_utils_PostControls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_utils_PostControls__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const createPoll = post => flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(() => __webpack_require__.e(/*! import() | forum/components/CreatePollModal */ "forum/components/CreatePollModal").then(() => (__webpack_require__(/*! ./components/CreatePollModal */ "./src/forum/components/CreatePollModal.tsx"))), {
    onsubmit: data => flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.createRecord('polls').save({
      ...data,
      relationships: {
        post
      }
    }, {
      data: {
        include: 'options,myVotes,myVotes.option'
      }
    }).then(poll => {
      // @ts-ignore
      post.rawRelationship('polls')?.push?.({
        type: 'polls',
        id: poll.id()
      });
      return poll;
    })
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_utils_PostControls__WEBPACK_IMPORTED_MODULE_2___default()), 'moderationControls', function (items, post) {
    // @ts-ignore
    if (!post.isHidden() && post.canStartPoll()) {
      items.add('addPoll', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
        icon: "fas fa-poll",
        onclick: createPoll.bind(this, post)
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.moderation.add')));
    }
  });
});

/***/ },

/***/ "./src/forum/components/AbstractPollList.tsx"
/*!***************************************************!*\
  !*** ./src/forum/components/AbstractPollList.tsx ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractPollList)
/* harmony export */ });
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Placeholder */ "flarum/common/components/Placeholder");
/* harmony import */ var flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4__);





class AbstractPollList extends (flarum_common_Component__WEBPACK_IMPORTED_MODULE_0___default()) {
  view() {
    const state = this.attrs.state;
    const className = this.className();
    if (state.isEmpty()) {
      return m("div", {
        className: className
      }, m((flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_3___default()), {
        text: this.emptyText()
      }));
    }
    const isLoading = state.isInitialLoading() || state.isLoadingNext();
    const items = state.getPages().flatMap(page => page.items);
    return m("div", {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_4___default()(className, state.isSearchResults() && `${className}--searchResults`)
    }, m("ul", {
      role: "feed",
      "aria-busy": isLoading,
      className: `${className}-items`
    }, items.map((item, index) => m("li", {
      key: item.id(),
      "data-id": item.id(),
      role: "article",
      "aria-setsize": -1,
      "aria-posinset": index + 1
    }, this.itemView(item)))), m("div", {
      className: `${className}-loadMore`
    }, this.loadMoreView()));
  }
  loadMoreView() {
    const state = this.attrs.state;
    if (state.isInitialLoading() || state.isLoadingNext()) {
      return m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default()), null);
    }
    if (!state.hasNext()) return null;
    return m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
      className: "Button",
      onclick: () => state.loadNext()
    }, this.loadMoreText());
  }
}
flarum.reg.add('fof-polls', 'forum/components/AbstractPollList', AbstractPollList);

/***/ },

/***/ "./src/forum/components/ComposeHero.tsx"
/*!**********************************************!*\
  !*** ./src/forum/components/ComposeHero.tsx ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComposeHero)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/Hero */ "flarum/forum/components/Hero");
/* harmony import */ var flarum_forum_components_Hero__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Hero__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);




class ComposeHero extends (flarum_forum_components_Hero__WEBPACK_IMPORTED_MODULE_1___default()) {
  className() {
    return this.attrs.className;
  }
  bodyItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    const {
      item,
      translationPrefix
    } = this.attrs;
    items.add('title', m("h2", {
      className: "Hero-title"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(`${translationPrefix}.${item.id() ? 'edit' : 'add'}_title`)), 100);
    items.add('controls', m("div", {
      className: "ComposeHero-controls"
    }, this.controlItems().toArray()), 0);
    return items;
  }
  controlItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    const {
      item,
      managerRoute,
      managerIcon,
      managerLabel,
      viewRoute,
      viewIcon,
      viewLabel
    } = this.attrs;
    items.add('manager', m((flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default()), {
      icon: managerIcon,
      className: "Button Button--secondary",
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route(managerRoute)
    }, managerLabel), 100);
    if (item.exists && viewRoute && viewLabel) {
      items.add('view', m((flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default()), {
        icon: viewIcon || 'far fa-arrow-up-right-from-square',
        className: "Button Button--secondary",
        href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route(viewRoute, {
          id: item.id()
        })
      }, viewLabel), 50);
    }
    return items;
  }
}
flarum.reg.add('fof-polls', 'forum/components/ComposeHero', ComposeHero);

/***/ },

/***/ "./src/forum/components/ComposePollGroupPage.tsx"
/*!*******************************************************!*\
  !*** ./src/forum/components/ComposePollGroupPage.tsx ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComposePollGroupPage)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/PageStructure */ "flarum/forum/components/PageStructure");
/* harmony import */ var flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/IndexSidebar */ "flarum/forum/components/IndexSidebar");
/* harmony import */ var flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PollGroup_PollGroupForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PollGroup/PollGroupForm */ "./src/forum/components/PollGroup/PollGroupForm.tsx");
/* harmony import */ var _states_PollGroupFormState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../states/PollGroupFormState */ "./src/forum/states/PollGroupFormState.ts");
/* harmony import */ var _ComposeHero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ComposeHero */ "./src/forum/components/ComposeHero.tsx");








class ComposePollGroupPage extends (flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default()) {
  pollGroup = null;
  loading = false;
  oninit(vnode) {
    super.oninit(vnode);
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('pollGroupsEnabled') || !flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('canStartPollGroup')) {
      m.route.set('/');
      return;
    }
    this.bodyClass = 'App--compose-poll-group';
    const editId = m.route.param('id');
    const promise = editId ? this.loadEditingPollGroup(editId) : Promise.resolve(_states_PollGroupFormState__WEBPACK_IMPORTED_MODULE_6__["default"].createNewPollGroup());
    promise.then(pollGroup => {
      this.pollGroup = pollGroup;
      if (pollGroup?.exists && !pollGroup.canEdit()) {
        m.route.set('/');
        return;
      }
      const titleKey = `fof-polls.forum.poll_groups.composer.${this.pollGroup?.id() ? 'edit' : 'add'}_title`;
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().history.push('compose-poll-group', flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(titleKey));
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().setTitle(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(titleKey));
      m.redraw();
    });
  }
  async loadEditingPollGroup(editId) {
    const cached = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.getById('poll_groups', editId);
    if (cached) return cached;
    this.loading = true;
    const pollGroup = await flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.find('poll_groups', editId);
    this.loading = false;
    return pollGroup;
  }
  view() {
    return m((flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "ComposePollGroupPage",
      hero: this.hero.bind(this),
      sidebar: this.sidebar.bind(this),
      loading: this.loading || !this.pollGroup
    }, this.contentItems().toArray());
  }
  hero() {
    if (!this.pollGroup) return null;
    return m(_ComposeHero__WEBPACK_IMPORTED_MODULE_7__["default"], {
      item: this.pollGroup,
      className: "ComposePollGroupHero",
      translationPrefix: "fof-polls.forum.poll_groups.composer",
      managerRoute: "fof.polls.groups.list",
      managerIcon: "fas fa-layer-group",
      managerLabel: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_groups.composer.groups_manager'),
      viewRoute: "fof.polls.groups.view",
      viewIcon: "far fa-arrow-up-right-from-square",
      viewLabel: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_groups.composer.view_group')
    });
  }
  sidebar() {
    return m((flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_3___default()), null);
  }
  contentItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default())();
    if (this.pollGroup) {
      items.add('form', m(_PollGroup_PollGroupForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
        pollGroup: this.pollGroup,
        onsubmit: this.onsubmit.bind(this)
      }));
    }
    return items;
  }
  async onsubmit(data, state) {
    const isNew = state.pollGroup.id() === undefined;
    await state.save(data);
    const alertId = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().alerts.show({
      type: 'success'
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_groups.composer.success'));
    setTimeout(() => flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().alerts.dismiss(alertId), 10000);
    if (isNew) {
      m.route.set(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('fof.polls.groups.list'));
    }
  }
}
flarum.reg.add('fof-polls', 'forum/components/ComposePollGroupPage', ComposePollGroupPage);

/***/ },

/***/ "./src/forum/components/ComposePollPage.tsx"
/*!**************************************************!*\
  !*** ./src/forum/components/ComposePollPage.tsx ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComposePollPage)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/PageStructure */ "flarum/forum/components/PageStructure");
/* harmony import */ var flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Poll_PollForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Poll/PollForm */ "./src/forum/components/Poll/PollForm.tsx");
/* harmony import */ var _states_PollFormState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../states/PollFormState */ "./src/forum/states/PollFormState.ts");
/* harmony import */ var _ComposeHero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ComposeHero */ "./src/forum/components/ComposeHero.tsx");
/* harmony import */ var _PollsIndexSidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PollsIndexSidebar */ "./src/forum/components/PollsIndexSidebar.tsx");








class ComposePollPage extends (flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default()) {
  poll = null;
  loading = false;
  oninit(vnode) {
    super.oninit(vnode);
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('globalPollsEnabled') || !flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('canStartGlobalPolls')) {
      m.route.set('/');
      return;
    }
    this.bodyClass = 'App--compose-poll';
    const editId = m.route.param('id');
    const pollPromise = editId ? this.loadEditingPoll(editId) : Promise.resolve(_states_PollFormState__WEBPACK_IMPORTED_MODULE_5__["default"].createNewPoll());
    pollPromise.then(poll => {
      this.poll = poll;
      if (poll?.exists && !poll.canEdit()) {
        m.route.set('/');
        return;
      }
      const titleKey = `fof-polls.forum.compose.${this.poll?.id() ? 'edit' : 'add'}_title`;
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().history.push('compose-poll', flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(titleKey));
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().setTitle(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(titleKey));
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().current.set('poll', poll);
      m.redraw();
    });
  }
  async loadEditingPoll(editId) {
    const cached = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.getById('polls', editId);
    if (cached) return cached;
    this.loading = true;
    const poll = await flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.find('polls', editId);
    this.loading = false;
    return poll;
  }
  view() {
    return m((flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "ComposePollPage",
      hero: this.hero.bind(this),
      sidebar: this.sidebar.bind(this),
      loading: this.loading || !this.poll
    }, this.contentItems().toArray());
  }
  hero() {
    if (!this.poll) return null;
    return m(_ComposeHero__WEBPACK_IMPORTED_MODULE_6__["default"], {
      item: this.poll,
      className: "ComposePollHero",
      translationPrefix: "fof-polls.forum.compose",
      managerRoute: "fof.polls.list",
      managerIcon: "far fa-edit",
      managerLabel: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.compose.polls_manager'),
      viewRoute: "fof.polls.view",
      viewIcon: "far fa-arrow-up-right-from-square",
      viewLabel: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.compose.polls_preview')
    });
  }
  sidebar() {
    return m(_PollsIndexSidebar__WEBPACK_IMPORTED_MODULE_7__["default"], null);
  }
  contentItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    if (this.poll) {
      items.add('form', m(_Poll_PollForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
        poll: this.poll,
        onsubmit: this.onsubmit.bind(this),
        allowDrafts: true
      }));
    }
    return items;
  }
  async onsubmit(data, state) {
    await state.save(data);
    this.poll = state.poll;

    // Per-flow success alerts and navigation are owned by the caller
    // (save draft / publish / schedule / plain save). This handler only
    // persists and keeps the page bound to the latest saved model.
  }
}
flarum.reg.add('fof-polls', 'forum/components/ComposePollPage', ComposePollPage);

/***/ },

/***/ "./src/forum/components/Poll/AbstractPoll.tsx"
/*!****************************************************!*\
  !*** ./src/forum/components/Poll/AbstractPoll.tsx ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractPoll)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Icon */ "flarum/common/components/Icon");
/* harmony import */ var flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _states_PollState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../states/PollState */ "./src/forum/states/PollState.ts");
/* harmony import */ var _PollDraftBadges__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PollDraftBadges */ "./src/forum/components/Poll/PollDraftBadges.tsx");
/* harmony import */ var _PollImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PollImage */ "./src/forum/components/Poll/PollImage.tsx");
/* harmony import */ var _PollOptions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PollOptions */ "./src/forum/components/Poll/PollOptions.tsx");
/* harmony import */ var _PollSubmitButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PollSubmitButton */ "./src/forum/components/Poll/PollSubmitButton.tsx");












class AbstractPoll extends (flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()) {
  oninit(vnode) {
    super.oninit(vnode);
    this.state = this.createState();
  }
  createState() {
    return new _states_PollState__WEBPACK_IMPORTED_MODULE_7__["default"](this.attrs.poll);
  }
  oncreate(vnode) {
    super.oncreate(vnode);
    window.addEventListener('beforeunload', this.preventClose);
  }
  onremove(vnode) {
    super.onremove(vnode);
    window.removeEventListener('beforeunload', this.preventClose);
  }
  preventClose = e => {
    if (this.state.hasSelectedOptions()) {
      e.preventDefault();
      e.returnValue = '';
    }
  };
  view() {
    const poll = this.attrs.poll;
    return m("div", {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5___default()(this.className(), poll.imageUrl() && 'Poll--image'),
      "data-id": poll.id()
    }, this.viewItems().toArray());
  }
  viewItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default())();
    items.add('header', m("div", {
      className: "Poll-header"
    }, this.headerItems().toArray()), 100);
    items.add('content', m("div", {
      className: "Poll-content"
    }, this.contentItems().toArray()), 50);
    items.add('footer', m("div", {
      className: "Poll-footer"
    }, this.footerItems().toArray()), 0);
    return items;
  }
  headerItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default())();
    const poll = this.attrs.poll;
    items.add('title', m("h3", {
      className: "Poll-title"
    }, poll.question(), m(_PollDraftBadges__WEBPACK_IMPORTED_MODULE_8__["default"], {
      poll: poll
    })), 100);
    if (poll.subtitle()) {
      items.add('subtitle', m("p", {
        className: "Poll-subtitle helpText"
      }, poll.subtitle()), 50);
    }
    const controls = this.controlsView();
    if (controls) items.add('controls', controls, 0);
    return items;
  }
  contentItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default())();
    const poll = this.attrs.poll;
    if (poll.imageUrl()) {
      items.add('image', m(_PollImage__WEBPACK_IMPORTED_MODULE_9__["default"], {
        poll: poll
      }), 100);
    }
    items.add('options', m("fieldset", {
      className: "Poll-optionsFieldset"
    }, m("legend", {
      className: "sr-only"
    }, poll.question()), m(_PollOptions__WEBPACK_IMPORTED_MODULE_10__["default"], {
      name: `poll${poll.id()}`,
      options: poll.options(),
      state: this.state
    })), 50);
    return items;
  }
  footerItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default())();
    const infoItems = this.infoItems();
    if (!infoItems.isEmpty()) {
      items.add('info', m("ul", {
        className: "PollInfoText helpText"
      }, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default()(infoItems.toArray())), 100);
    }
    if (this.state.showButton()) {
      items.add('submit', m(_PollSubmitButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
        state: this.state
      }), 0);
    }
    return items;
  }
  controlsView() {
    const controls = this.controlItems().toArray();
    if (!controls.length) return null;
    return m((flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_2___default()), {
      icon: "fas fa-ellipsis-v",
      className: "Poll-controls",
      menuClassName: "Dropdown-menu--right",
      buttonClassName: "Button Button--icon Button--flat",
      accessibleToggleLabel: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_controls.toggle_dropdown_accessible_label')
    }, controls);
  }
  infoItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default())();
    const poll = this.attrs.poll;
    const state = this.state;
    if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().session).user && !poll.canVote() && !poll.hasEnded()) {
      items.add('no-permission', this.info('fas fa-times-circle', flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.no_permission')), 100);
    }
    if (poll.endDate()) {
      items.add('end-date', this.info('fas fa-clock', poll.hasEnded() ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_ended') : flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.days_remaining', {
        time: dayjs(poll.endDate()).fromNow()
      })), 90);
    }
    if (poll.canVote() && !poll.hasEnded() && !state.hasVoted()) {
      items.add('max-votes', this.info('fas fa-poll', flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.max_votes_allowed', {
        max: state.getMaxVotes()
      })), 80);
      if (!poll.canChangeVote()) {
        items.add('cannot-change-vote', this.info('fas fa-exclamation-circle', flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll.cannot_change_vote')), 70);
      }
    }
    if (state.canSeeVoteCount && (poll.hasEnded() || state.hasVoted())) {
      items.add('total-vote-count', this.info('fas fa-poll', flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll.total_votes', {
        count: poll.voteCount()
      })), 60);
    }
    return items;
  }
  info(icon, text) {
    return m("span", null, m((flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_3___default()), {
      name: icon,
      className: "fa-fw"
    }), text);
  }
}
flarum.reg.add('fof-polls', 'forum/components/Poll/AbstractPoll', AbstractPoll);

/***/ },

/***/ "./src/forum/components/Poll/PollDraftBadges.tsx"
/*!*******************************************************!*\
  !*** ./src/forum/components/Poll/PollDraftBadges.tsx ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollDraftBadges)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Icon */ "flarum/common/components/Icon");
/* harmony import */ var flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Pill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Pill */ "flarum/common/components/Pill");
/* harmony import */ var flarum_common_components_Pill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Pill__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6__);







class PollDraftBadges extends (flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()) {
  view() {
    if (!this.attrs.poll.isDraft()) return null;
    return m("span", {
      className: "PollDraftBadges"
    }, this.items().toArray());
  }
  items() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default())();
    const poll = this.attrs.poll;
    items.add('draft', m((flarum_common_components_Pill__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "PollDraftBadges-draft"
    }, m((flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_2___default()), {
      name: "fas fa-pencil-alt"
    }), flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll.draft_label')), 100);
    if (poll.isScheduled()) {
      items.add('scheduled', m((flarum_common_components_Pill__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "PollDraftBadges-scheduled"
      }, m((flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_2___default()), {
        name: "fas fa-clock"
      }), flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll.scheduled_label', {
        date: dayjs(poll.scheduledPublishAt()).format('lll')
      }), this.scheduleError()), 50);
    }
    return items;
  }

  // Tooltip replaces the aria-label of what it wraps, so the tooltip text has
  // to carry the whole message.
  scheduleError() {
    if (!this.attrs.poll.scheduledPublishError()) return null;
    return m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_4___default()), {
      text: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll.scheduled_error_tooltip'))
    }, m("span", {
      className: "PollDraftBadges-scheduleError"
    }, m((flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_2___default()), {
      name: "fas fa-exclamation-triangle"
    })));
  }
}
flarum.reg.add('fof-polls', 'forum/components/Poll/PollDraftBadges', PollDraftBadges);

/***/ },

/***/ "./src/forum/components/Poll/PollForm.tsx"
/*!************************************************!*\
  !*** ./src/forum/components/Poll/PollForm.tsx ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollForm)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/FieldSet */ "flarum/common/components/FieldSet");
/* harmony import */ var flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Form */ "flarum/common/components/Form");
/* harmony import */ var flarum_common_components_Form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_FormGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/FormGroup */ "flarum/common/components/FormGroup");
/* harmony import */ var flarum_common_components_FormGroup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_FormGroup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Icon */ "flarum/common/components/Icon");
/* harmony import */ var flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_utils_RequestError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/utils/RequestError */ "flarum/common/utils/RequestError");
/* harmony import */ var flarum_common_utils_RequestError__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_RequestError__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _form_FormError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../form/FormError */ "./src/forum/components/form/FormError.tsx");
/* harmony import */ var _states_PollFormState__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../states/PollFormState */ "./src/forum/states/PollFormState.ts");
/* harmony import */ var _utils_PollControls__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/PollControls */ "./src/forum/utils/PollControls.tsx");
/* harmony import */ var _SchedulePollModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../SchedulePollModal */ "./src/forum/components/SchedulePollModal.tsx");
/* harmony import */ var _UploadPollImageButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../UploadPollImageButton */ "./src/forum/components/UploadPollImageButton.tsx");

















class PollForm extends (flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()) {
  options = [];
  optionAnswers = [];
  optionImageUrls = [];
  optionKeys = [];
  nextOptionKey = 0;
  datepickerMinDate = '';
  pendingAction = null;
  // Compared against the live form on every render, so dirty tracking does not
  // need a hook on every input.
  snapshot = '';
  beforeUnloadHandler = e => {
    if (this.state?.dirty) {
      e.preventDefault();
      e.returnValue = '';
    }
  };
  oninit(vnode) {
    super.oninit(vnode);
    this.state = new _states_PollFormState__WEBPACK_IMPORTED_MODULE_13__["default"](this.attrs.poll);
    const poll = this.state.poll;
    this.options = poll.tempOptions ?? poll.options();
    this.optionAnswers = this.options.map(o => flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10___default()(o.answer()));
    this.optionImageUrls = this.options.map(o => flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10___default()(o.imageUrl()));
    this.optionKeys = this.options.map(() => this.nextOptionKey++);
    this.question = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10___default()(poll.question());
    this.subtitle = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10___default()(poll.subtitle());
    this.image = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10___default()(poll.image());
    this.imageAlt = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10___default()(poll.imageAlt());
    this.endDate = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10___default()(this.formatDate(poll.endDate()) || null);
    this.publicPoll = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10___default()(poll.publicPoll());
    this.allowMultipleVotes = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10___default()(poll.allowMultipleVotes());
    this.hideVotes = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10___default()(poll.hideVotes());
    this.allowChangeVote = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10___default()(poll.allowChangeVote());
    this.maxVotes = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10___default()(poll.maxVotes() || 0);
    this.datepickerMinDate = this.formatDate();
    if (this.endDate() && dayjs(poll.endDate()).isAfter(dayjs())) {
      this.datepickerMinDate = this.formatDate(poll.endDate());
    }
    this.snapshot = this.serializeFormState();
  }
  oncreate(vnode) {
    super.oncreate(vnode);
    window.addEventListener('beforeunload', this.beforeUnloadHandler);
  }
  onremove(vnode) {
    super.onremove(vnode);
    window.removeEventListener('beforeunload', this.beforeUnloadHandler);
  }
  view() {
    this.state.markDirty(this.serializeFormState() !== this.snapshot);
    return m("form", {
      className: "PollForm",
      onsubmit: this.onsubmit.bind(this)
    }, m((flarum_common_components_Form__WEBPACK_IMPORTED_MODULE_4___default()), null, this.fields().toArray()));
  }
  fields() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8___default())();
    items.add('question', m((flarum_common_components_FormGroup__WEBPACK_IMPORTED_MODULE_5___default()), {
      type: "text",
      name: "question",
      label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.question_placeholder'),
      required: true,
      stream: this.question
    }), 100);
    items.add('subtitle', m((flarum_common_components_FormGroup__WEBPACK_IMPORTED_MODULE_5___default()), {
      type: "text",
      name: "subtitle",
      label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.subtitle_placeholder'),
      stream: this.subtitle
    }), 95);
    items.add('poll_image', this.imageField(), 90);
    if (this.image()) {
      items.add('poll_image_alt', m((flarum_common_components_FormGroup__WEBPACK_IMPORTED_MODULE_5___default()), {
        type: "text",
        name: "imageAlt",
        label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.poll_image.alt_label'),
        help: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.poll_image.alt_help_text'),
        required: true,
        stream: this.imageAlt
      }), 85);
    }
    items.add('answers', this.answersField(), 80);
    items.add('date', this.endDateField(), 40);
    items.add('settings', this.settingsField(), 20);
    items.add('submit-cluster', m("div", {
      className: "PollForm-submit"
    }, this.submitItems().toArray()), -10);
    return items;
  }
  imageField() {
    return m((flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "FieldSet--form",
      label: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_11___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.poll_image.label')),
      description: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_11___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.poll_image.help'))
    }, m("input", {
      type: "hidden",
      name: "pollImage",
      bidi: this.image
    }), this.deprecationNotice(!!this.image(), this.state.poll?.isImageUpload()), m(_UploadPollImageButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
      name: "pollImage",
      poll: this.state.poll,
      onUpload: this.pollImageUploadSuccess.bind(this)
    }));
  }
  answersField() {
    const label = flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_11___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.options_label'));
    const addLabel = flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_11___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.tooltip.options.add-button'));
    return m("div", {
      className: "PollForm-answers"
    }, m((flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "FieldSet--form",
      label: label
    }, this.answerItems().toArray()), m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_7___default()), {
      text: addLabel
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "Button Button--icon PollForm-addAnswer",
      icon: "fas fa-plus",
      "aria-label": addLabel,
      onclick: this.addOption.bind(this)
    })));
  }
  answerItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8___default())();
    const removeLabel = flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_11___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.tooltip.options.remove-button'));
    this.options.forEach((option, i) => {
      const imageUrl = this.optionImageUrls[i];
      items.add(`option-${this.optionKeys[i]}`,
      // Keyed so that removing a row does not shift the rows below it onto
      // each other's DOM nodes.
      m("div", {
        className: "PollForm-answer",
        key: this.optionKeys[i]
      }, m("div", {
        className: "PollForm-answerFields"
      }, m((flarum_common_components_FormGroup__WEBPACK_IMPORTED_MODULE_5___default()), {
        type: "text",
        name: `answer${i + 1}`,
        label: `${flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_11___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.option_placeholder'))} ${i + 1}`,
        stream: this.optionAnswers[i]
      }), m((flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "PollForm-answerImage",
        label: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_11___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.poll_option_image.label'))
      }, this.deprecationNotice(!!imageUrl(), option?.isImageUpload()), m(_UploadPollImageButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
        name: "pollOptionImage",
        option: option,
        onUpload: this.pollOptionImageUploadSuccess.bind(this, i)
      }))), i >= 2 && m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_7___default()), {
        text: removeLabel
      }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
        type: "button",
        className: "Button Button--icon PollForm-removeAnswer",
        icon: "fas fa-minus",
        "aria-label": removeLabel,
        onclick: this.removeOption.bind(this, i)
      }))));
    });
    return items;
  }
  endDateField() {
    const clearLabel = flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_11___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.date_clear'));
    return m("div", {
      className: "PollForm-date"
    }, m((flarum_common_components_FormGroup__WEBPACK_IMPORTED_MODULE_5___default()), {
      type: "datetime-local",
      name: "date",
      containerClassName: "PollForm-dateInput",
      label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.date_placeholder'),
      help: this.endDateHelp(),
      min: this.datepickerMinDate,
      max: this.formatDate('2038'),
      stream: this.endDate
    }), m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_7___default()), {
      text: clearLabel
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "Button Button--icon PollForm-clearDate",
      icon: "fas fa-times",
      "aria-label": clearLabel,
      onclick: () => this.endDate(null)
    })));
  }
  endDateHelp() {
    if (!this.endDate()) return null;
    return m('[', null, m((flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_6___default()), {
      name: "fas fa-clock"
    }), ' ', dayjs(this.endDate()).isBefore(dayjs()) ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_ended') : flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.days_remaining', {
      time: dayjs(this.endDate()).fromNow()
    }));
  }
  settingsField() {
    return m((flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "FieldSet--form",
      label: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_11___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.settings_label'))
    }, this.settingItems().toArray());
  }
  settingItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8___default())();
    items.add('public', m((flarum_common_components_FormGroup__WEBPACK_IMPORTED_MODULE_5___default()), {
      type: "switch",
      containerClassName: "PollForm-setting PollForm-setting--publicPoll",
      label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.public_poll_label'),
      stream: this.publicPoll
    }), 100);
    items.add('hide-votes', m((flarum_common_components_FormGroup__WEBPACK_IMPORTED_MODULE_5___default()), {
      type: "switch",
      containerClassName: "PollForm-setting PollForm-setting--hideVotes",
      label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.hide_votes_label'),
      help: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.hide_votes_label_help'),
      disabled: !this.endDate(),
      stream: this.hideVotes
    }), 90);
    items.add('allow-change-vote', m((flarum_common_components_FormGroup__WEBPACK_IMPORTED_MODULE_5___default()), {
      type: "switch",
      containerClassName: "PollForm-setting PollForm-setting--allowChangeVote",
      label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.allow_change_vote_label'),
      stream: this.allowChangeVote
    }), 80);
    items.add('allow-multiple-votes', m((flarum_common_components_FormGroup__WEBPACK_IMPORTED_MODULE_5___default()), {
      type: "switch",
      containerClassName: "PollForm-setting PollForm-setting--allowMultipleVotes",
      label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.allow_multiple_votes_label'),
      stream: this.allowMultipleVotes
    }), 70);
    if (this.allowMultipleVotes()) {
      items.add('max-votes', m((flarum_common_components_FormGroup__WEBPACK_IMPORTED_MODULE_5___default()), {
        type: "number",
        name: "maxVotes",
        label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.max_votes_label'),
        help: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.max_votes_help'),
        min: "0",
        max: this.options.length,
        stream: this.maxVotes
      }), 60);
    }
    return items;
  }
  submitItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8___default())();
    const state = this.state;
    const poll = state.poll;

    // A new poll has nothing attached yet, so the caller's flag decides; an
    // existing one can be asked directly.
    const draftsAvailable = this.attrs.allowDrafts === true && (!poll.exists || poll.isGlobal());
    if (draftsAvailable && (state.isNew() || state.isDraft())) {
      items.add('publish', this.publishSplitButton(), 30);
      items.add(state.isDraft() ? 'update-draft' : 'save-as-draft', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
        type: "button",
        className: "Button PollForm-saveDraft",
        icon: "fas fa-save",
        loading: state.loading && this.pendingAction === 'draft',
        disabled: state.loading && this.pendingAction !== 'draft' || state.isDraft() && !state.dirty,
        onclick: () => this.onSaveDraft()
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(state.isDraft() ? 'fof-polls.forum.compose.update_draft' : 'fof-polls.forum.compose.save_as_draft')), 20);
    } else {
      items.add('save', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
        type: "submit",
        className: "Button Button--primary PollForm-save",
        icon: "fas fa-save",
        loading: state.loading,
        disabled: !state.dirty
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.submit')), 20);
    }
    if (poll.exists) {
      items.add('delete', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
        type: "button",
        className: "Button Button--secondary PollForm-delete",
        icon: "fas fa-trash-alt",
        loading: state.deleting,
        onclick: this.delete.bind(this)
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.delete')), 0);
    }
    return items;
  }
  publishSplitButton() {
    const scheduleLabel = flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_11___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.compose.schedule'));
    return m("div", {
      className: "ButtonGroup PollForm-publish"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      type: "button",
      className: "Button Button--primary",
      icon: "fas fa-paper-plane",
      loading: this.state.loading && this.pendingAction === 'publish',
      disabled: this.state.loading && this.pendingAction !== 'publish',
      onclick: () => this.publish()
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.compose.publish')), m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_7___default()), {
      text: scheduleLabel
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      type: "button",
      className: "Button Button--icon Button--primary",
      icon: "fas fa-clock",
      "aria-label": scheduleLabel,
      onclick: () => this.schedule()
    })));
  }

  // Validating first keeps the schedule modal from persisting a draft that the
  // on-screen form would have rejected.
  schedule() {
    try {
      this.data();
    } catch (error) {
      if (error instanceof _form_FormError__WEBPACK_IMPORTED_MODULE_12__["default"]) {
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().alerts.show({
          type: 'error'
        }, error.content);
        return;
      }
      throw error;
    }
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(_SchedulePollModal__WEBPACK_IMPORTED_MODULE_15__["default"], {
      poll: this.state.poll,
      form: this,
      onSuccess: () => m.route.set(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('fof.polls.list'))
    });
  }
  deprecationNotice(hasImage, isUpload) {
    if (!hasImage || isUpload) return null;
    return m("p", {
      className: "helpText"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.poll_image.url_deprecated'));
  }
  addOption() {
    const max = Math.max(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('pollMaxOptions'), 2);
    if (this.options.length >= max) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().alerts.show({
        type: 'error'
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.max', {
        max
      }));
      return;
    }
    this.options.push(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.createRecord('poll_options'));
    this.optionAnswers.push(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10___default()(''));
    this.optionImageUrls.push(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10___default()(''));
    this.optionKeys.push(this.nextOptionKey++);
  }
  removeOption(i) {
    this.options.splice(i, 1);
    this.optionAnswers.splice(i, 1);
    this.optionImageUrls.splice(i, 1);
    this.optionKeys.splice(i, 1);
  }
  data() {
    if (this.question() === '') {
      throw new _form_FormError__WEBPACK_IMPORTED_MODULE_12__["default"](flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.include_question'));
    }

    // Row count is not answer count: the form always keeps two rows on screen
    // whether or not anything has been typed into them.
    const filled = this.optionAnswers.filter(s => s()?.trim() !== '' && s() != null).length;
    if (filled < 2) {
      throw new _form_FormError__WEBPACK_IMPORTED_MODULE_12__["default"](flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.min'));
    }
    const empty = this.optionAnswers.length - filled;
    if (empty > 0) {
      throw new _form_FormError__WEBPACK_IMPORTED_MODULE_12__["default"](flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.empty_answers', {
        count: empty
      }));
    }
    const pollExists = this.state.poll.exists;
    const options = this.options.map((option, i) => {
      option.pushAttributes({
        answer: this.optionAnswers[i](),
        imageUrl: this.optionImageUrls[i]()
      });
      return pollExists ? option.data : option.data.attributes;
    });
    return {
      question: this.question(),
      subtitle: this.subtitle(),
      pollImage: this.image(),
      imageAlt: this.imageAlt(),
      endDate: this.dateToTimestamp(this.endDate()) ?? false,
      publicPoll: this.publicPoll(),
      hideVotes: this.hideVotes(),
      allowChangeVote: this.allowChangeVote(),
      allowMultipleVotes: this.allowMultipleVotes(),
      maxVotes: this.maxVotes(),
      options
    };
  }
  async onsubmit(event) {
    event.preventDefault();
    if (this.attrs.allowDrafts === true && (this.state.isNew() || this.state.isDraft())) {
      return this.onSaveDraft();
    }
    return this.onSaveChanges();
  }
  async onSaveChanges() {
    if (await this.submit({})) {
      this.successAlert('fof-polls.forum.compose.success');
    }
  }
  async onSaveDraft() {
    this.pendingAction = 'draft';
    const wasNew = this.state.isNew();
    try {
      if (await this.submit({
        isDraft: true
      })) {
        this.successAlert('fof-polls.forum.compose.draft_saved');
        if (wasNew) {
          window.history.replaceState({}, '', flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('fof.polls.composer', {
            id: this.state.poll.id()
          }));
        }
      }
    } finally {
      this.pendingAction = null;
      m.redraw();
    }
  }
  async publish() {
    this.pendingAction = 'publish';
    try {
      // A new poll is created as a draft first: publishing straight away would
      // leave nothing for the /publish call below to act on, and that endpoint
      // only accepts drafts.
      if (!(await this.submit({
        isDraft: true
      }))) return;
      if (!this.state.poll.id()) {
        throw new Error('Cannot publish an unsaved poll.');
      }
      await this.state.poll.publish();
      this.successAlert('fof-polls.forum.poll_controls.publish_success');
      m.route.set(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('fof.polls.list'));
    } catch (error) {
      this.handleError(error);
    } finally {
      this.pendingAction = null;
      m.redraw();
    }
  }
  async submit(extra) {
    try {
      await this.attrs.onsubmit({
        ...this.data(),
        ...extra
      }, this.state);
      this.snapshot = this.serializeFormState();
      this.state.markDirty(false);
      return true;
    } catch (error) {
      this.handleError(error);
      return false;
    }
  }
  async delete() {
    this.state.loading = true;
    try {
      await _utils_PollControls__WEBPACK_IMPORTED_MODULE_14__["default"].deleteAction(this.state.poll);
      this.state.deleting = true;
    } finally {
      this.state.loading = false;
      m.redraw();
    }
  }
  handleError(error) {
    if (error instanceof _form_FormError__WEBPACK_IMPORTED_MODULE_12__["default"]) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().alerts.show({
        type: 'error'
      }, error.content);
      return;
    }

    // Core's request handler has already shown the server's own message.
    if (error instanceof (flarum_common_utils_RequestError__WEBPACK_IMPORTED_MODULE_9___default())) return;
    console.error(error);
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().alerts.show({
      type: 'error'
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.modal.error'));
  }
  successAlert(key) {
    const id = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().alerts.show({
      type: 'success'
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(key));
    setTimeout(() => flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().alerts.dismiss(id), 10000);
  }
  serializeFormState() {
    return JSON.stringify({
      question: this.question(),
      subtitle: this.subtitle(),
      image: this.image(),
      imageAlt: this.imageAlt(),
      endDate: this.endDate(),
      publicPoll: this.publicPoll(),
      allowMultipleVotes: this.allowMultipleVotes(),
      hideVotes: this.hideVotes(),
      allowChangeVote: this.allowChangeVote(),
      maxVotes: this.maxVotes(),
      answers: this.optionAnswers.map(s => s()),
      images: this.optionImageUrls.map(s => s())
    });
  }

  // No argument means now, which is what the picker's minimum wants; an
  // explicitly absent date means there is no date to format.
  formatDate(date, def) {
    if (date === void 0) {
      date = undefined;
    }
    if (def === void 0) {
      def = false;
    }
    if (date === false || date === null) return def !== false ? this.formatDate(def) : false;
    const parsed = dayjs(date);
    if (!parsed.isValid()) return def !== false ? this.formatDate(def) : false;
    return parsed.format('YYYY-MM-DDTHH:mm');
  }
  dateToTimestamp(date) {
    const parsed = dayjs(date || undefined);
    if (!date || !parsed.isValid()) return null;
    return parsed.format();
  }
  pollImageUploadSuccess(fileName) {
    this.image(fileName ?? null);
    this.state.poll?.pushAttributes({
      isImageUpload: !!fileName
    });
  }
  pollOptionImageUploadSuccess(index, fileName) {
    this.optionImageUrls[index] = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_10___default()(fileName ?? '');
    this.options[index]?.pushAttributes({
      isImageUpload: !!fileName
    });
  }
}
flarum.reg.add('fof-polls', 'forum/components/Poll/PollForm', PollForm);

/***/ },

/***/ "./src/forum/components/Poll/PollImage.tsx"
/*!*************************************************!*\
  !*** ./src/forum/components/Poll/PollImage.tsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollImage)
/* harmony export */ });
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_0__);

class PollImage extends (flarum_common_Component__WEBPACK_IMPORTED_MODULE_0___default()) {
  view() {
    const poll = this.attrs.poll;
    const url = poll.imageUrl();
    if (!url) return null;
    return m("div", {
      className: "PollImage"
    }, m("img", {
      className: "PollImage-image",
      src: url,
      srcset: poll.imageSrcset() ?? undefined,
      alt: poll.imageAlt() ?? '',
      loading: "lazy"
    }));
  }
}
flarum.reg.add('fof-polls', 'forum/components/Poll/PollImage', PollImage);

/***/ },

/***/ "./src/forum/components/Poll/PollList.tsx"
/*!************************************************!*\
  !*** ./src/forum/components/Poll/PollList.tsx ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollList)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AbstractPollList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AbstractPollList */ "./src/forum/components/AbstractPollList.tsx");
/* harmony import */ var _PollListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PollListItem */ "./src/forum/components/Poll/PollListItem.tsx");



class PollList extends _AbstractPollList__WEBPACK_IMPORTED_MODULE_1__["default"] {
  className() {
    return 'PollList';
  }
  itemView(poll) {
    return m(_PollListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      poll: poll
    });
  }
  emptyText() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.polls_list.empty_text');
  }
  loadMoreText() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.polls_list.load_more_button');
  }
}
flarum.reg.add('fof-polls', 'forum/components/Poll/PollList', PollList);

/***/ },

/***/ "./src/forum/components/Poll/PollListItem.tsx"
/*!****************************************************!*\
  !*** ./src/forum/components/Poll/PollListItem.tsx ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollListItem)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Icon */ "flarum/common/components/Icon");
/* harmony import */ var flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_SubtreeRetainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/SubtreeRetainer */ "flarum/common/utils/SubtreeRetainer");
/* harmony import */ var flarum_common_utils_SubtreeRetainer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_SubtreeRetainer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_utils_abbreviateNumber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/utils/abbreviateNumber */ "flarum/common/utils/abbreviateNumber");
/* harmony import */ var flarum_common_utils_abbreviateNumber__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_abbreviateNumber__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/common/helpers/highlight */ "flarum/common/helpers/highlight");
/* harmony import */ var flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var flarum_forum_utils_slidable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! flarum/forum/utils/slidable */ "flarum/forum/utils/slidable");
/* harmony import */ var flarum_forum_utils_slidable__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_utils_slidable__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_PollControls__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/PollControls */ "./src/forum/utils/PollControls.tsx");
/* harmony import */ var _PollViewPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../PollViewPage */ "./src/forum/components/PollViewPage.tsx");
/* harmony import */ var _PollDraftBadges__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./PollDraftBadges */ "./src/forum/components/Poll/PollDraftBadges.tsx");

















class PollListItem extends (flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()) {
  oninit(vnode) {
    super.oninit(vnode);
    this.poll = this.attrs.poll;
    this.subtree = new (flarum_common_utils_SubtreeRetainer__WEBPACK_IMPORTED_MODULE_6___default())(() => this.poll.freshness, () => {
      const time = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().session).user && flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().session.user.markedAllAsReadAt();
      return time && time.getTime();
    }, () => this.active());
  }
  oncreate(vnode) {
    super.oncreate(vnode);
    if ('ontouchstart' in window) {
      const slidableInstance = flarum_forum_utils_slidable__WEBPACK_IMPORTED_MODULE_13___default()(this.element);
      this.$('.PollListItem-controls').on('hidden.bs.dropdown', () => slidableInstance.reset());
    }
  }
  onbeforeupdate(vnode) {
    super.onbeforeupdate(vnode);
    return this.subtree.needsRebuild();
  }
  elementAttrs() {
    return {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_9___default()('PollListItem', {
        active: this.active(),
        'PollListItem--hidden': this.poll.isHidden(),
        Slidable: 'ontouchstart' in window
      })
    };
  }
  view() {
    return m("div", this.elementAttrs(), this.viewItems().toArray());
  }
  viewItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7___default())();
    const controls = this.controlsView();
    if (controls) items.add('controls', controls, 100);
    items.add('content', m("div", {
      className: "PollListItem-content Slidable-content"
    }, this.mainView()), 50);
    items.add('slidableUnderneath', this.slidableUnderneathView(), 0);
    return items;
  }
  controlsView() {
    const controls = _utils_PollControls__WEBPACK_IMPORTED_MODULE_14__["default"].controls(this.poll, this).toArray();
    if (!controls.length) return null;
    return m((flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_3___default()), {
      icon: "fas fa-ellipsis-v",
      className: "PollListItem-controls",
      menuClassName: "Dropdown-menu--right",
      buttonClassName: "Button Button--icon Button--flat",
      accessibleToggleLabel: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_controls.toggle_dropdown_accessible_label')
    }, controls);
  }
  slidableUnderneathView() {
    const isUnread = this.poll.isUnread();
    return m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_9___default()('Slidable-underneath Slidable-underneath--left Slidable-underneath--elastic', {
        disabled: !isUnread
      }),
      icon: "fas fa-check",
      disabled: !isUnread,
      "aria-label": flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_10___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('core.forum.notifications.mark_as_read_tooltip')),
      onclick: this.markAsRead.bind(this)
    });
  }
  mainView() {
    return m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_5___default()), {
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('fof.polls.view', {
        id: this.poll.id()
      }),
      className: "PollListItem-main"
    }, m("h2", {
      className: "PollListItem-title"
    }, flarum_common_helpers_highlight__WEBPACK_IMPORTED_MODULE_11___default()(this.poll.question(), this.highlightRegExp), m(_PollDraftBadges__WEBPACK_IMPORTED_MODULE_16__["default"], {
      poll: this.poll
    })), this.poll.subtitle() && m("p", {
      className: "PollListItem-subtitle helpText"
    }, this.poll.subtitle()), m("ul", {
      className: "PollListItem-info"
    }, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_12___default()(this.infoItems().toArray())));
  }
  active() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().current.matches(_PollViewPage__WEBPACK_IMPORTED_MODULE_15__["default"], {
      poll: this.poll
    });
  }
  markAsRead() {
    if (!this.poll.isUnread()) return;
    this.poll.save({
      lastVotedNumber: this.poll.voteCount()
    });
    m.redraw();
  }
  infoItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7___default())();
    const poll = this.poll;
    const active = !poll.hasEnded();
    items.add('active', m("span", {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_9___default()('PollListItem-endStatus', {
        active
      })
    }, m((flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_4___default()), {
      name: poll.endDate() ? 'fas fa-clock' : 'fas fa-infinity'
    }), ' ', !poll.endDate() ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_never_ends') : active ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.days_remaining', {
      time: dayjs(poll.endDate()).fromNow()
    }) : flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_ended')), 100);
    const voteCount = poll.voteCount();
    if (voteCount !== undefined) {
      items.add('voteCount', m("span", null, m((flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_4___default()), {
        name: "fas fa-poll",
        className: "fa-fw"
      }), " ", flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.polls_count', {
        count: flarum_common_utils_abbreviateNumber__WEBPACK_IMPORTED_MODULE_8___default()(voteCount)
      })), 70);
    }
    return items;
  }
}
flarum.reg.add('fof-polls', 'forum/components/Poll/PollListItem', PollListItem);

/***/ },

/***/ "./src/forum/components/Poll/PollOption.tsx"
/*!**************************************************!*\
  !*** ./src/forum/components/Poll/PollOption.tsx ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollOption)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);





class PollOption extends (flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()) {
  view() {
    const {
      option,
      state
    } = this.attrs;
    const voted = state.hasVotedFor(option);
    const bar = m("label", {
      className: "PollBar",
      "data-selected": voted || undefined,
      style: `--poll-option-width: ${this.width()}%`
    }, this.barItems().toArray());
    const className = flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3___default()('PollOption', voted && 'PollOption--voted', option.imageUrl() && 'PollOption--hasImage');
    if (!state.canSeeVoteCount) {
      return m("div", {
        className: className,
        "data-id": option.id()
      }, bar);
    }
    return m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), {
      text: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.tooltip.votes', {
        count: option.voteCount()
      })
    }, m("div", {
      className: className,
      "data-id": option.id()
    }, bar));
  }
  barItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default())();
    const {
      option,
      name,
      state
    } = this.attrs;
    items.add('input', m("input", {
      className: "PollOption-input",
      type: state.poll.allowMultipleVotes() ? 'checkbox' : 'radio',
      name: name,
      value: option.id(),
      checked: state.hasVotedFor(option),
      disabled: !state.canSelect(),
      onchange: e => state.changeVote(option, e)
    }), 100);
    items.add('text', m("span", {
      className: "PollOption-text"
    }, this.textItems().toArray()), 50);
    if (option.imageUrl()) {
      items.add('image', m("img", {
        className: "PollOption-image",
        src: option.imageUrl(),
        srcset: option.imageSrcset() ?? undefined,
        alt: option.answer(),
        loading: "lazy"
      }), 0);
    }
    return items;
  }
  textItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default())();
    const {
      option,
      state
    } = this.attrs;
    items.add('answer', m("span", {
      className: "PollOption-answer"
    }, option.answer()), 100);
    if (state.canSeeVoteCount) {
      const percent = this.percent();
      items.add('percent', m("span", {
        className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3___default()('PollOption-percent', percent === 100 && 'PollOption-percent--full')
      }, percent, "%"), 50);
      items.add('votes', m("span", {
        className: "sr-only"
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.tooltip.votes', {
        count: option.voteCount()
      })), 0);
    }
    return items;
  }
  percent() {
    const total = this.attrs.state.overallVoteCount();
    return total > 0 ? Math.round(this.attrs.option.voteCount() / total * 100) : 0;
  }

  // Without a vote count to scale against, a bar can only say "you picked this
  // one", split evenly across however many picks the reader has made.
  width() {
    const state = this.attrs.state;
    if (state.canSeeVoteCount) return this.percent();
    return Number(state.hasVotedFor(this.attrs.option)) / (state.poll.myVotes()?.length || 1) * 100;
  }
}
flarum.reg.add('fof-polls', 'forum/components/Poll/PollOption', PollOption);

/***/ },

/***/ "./src/forum/components/Poll/PollOptions.tsx"
/*!***************************************************!*\
  !*** ./src/forum/components/Poll/PollOptions.tsx ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollOptions)
/* harmony export */ });
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PollOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PollOption */ "./src/forum/components/Poll/PollOption.tsx");



class PollOptions extends (flarum_common_Component__WEBPACK_IMPORTED_MODULE_0___default()) {
  view() {
    return m("div", {
      className: "Poll-options"
    }, this.pollOptions().toArray());
  }
  pollOptions() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_1___default())();
    this.attrs.options.forEach(option => {
      items.add(`option${option.id()}`, this.createOptionView(option));
    });
    return items;
  }
  createOptionView(option) {
    return m(_PollOption__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: option.id(),
      name: this.attrs.name,
      option: option,
      state: this.attrs.state
    });
  }
}
flarum.reg.add('fof-polls', 'forum/components/Poll/PollOptions', PollOptions);

/***/ },

/***/ "./src/forum/components/Poll/PollShowcase.tsx"
/*!****************************************************!*\
  !*** ./src/forum/components/Poll/PollShowcase.tsx ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollShowcase)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Placeholder */ "flarum/common/components/Placeholder");
/* harmony import */ var flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PollShowcaseItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PollShowcaseItem */ "./src/forum/components/Poll/PollShowcaseItem.tsx");







const EMPTY_KEY = {
  active: 'no-active-polls',
  ended: 'no-recent-polls'
};
class PollShowcase extends (flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()) {
  view() {
    return m("div", {
      className: "PollShowcase"
    }, this.section('active', this.attrs.activeState, false), this.section('ended', this.attrs.endedState, true));
  }
  section(name, state, loadMore) {
    const items = this.pollItems(name, state).toArray();
    return m("div", {
      className: `PollShowcase-section PollShowcase-section--${name}`
    }, m("h2", {
      className: "PollShowcase-title"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(`fof-polls.forum.showcase.${name}-polls`)), items.length ? items : m((flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_4___default()), {
      text: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(`fof-polls.forum.showcase.${EMPTY_KEY[name]}`)
    }), loadMore && state.hasNext() && m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "Button",
      loading: state.isLoadingNext(),
      onclick: () => state.loadNext()
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.polls_list.load_more_button')));
  }
  pollItems(name, state) {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default())();
    if (state.isLoading()) {
      items.add('loading', m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default()), {
        size: "large"
      }));
      return items;
    }
    state.getPages().forEach(page => {
      page.items.forEach(poll => {
        items.add(`poll-${name}-${poll.id()}`, m(_PollShowcaseItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          key: poll.id(),
          poll: poll
        }));
      });
    });
    return items;
  }
}
flarum.reg.add('fof-polls', 'forum/components/Poll/PollShowcase', PollShowcase);

/***/ },

/***/ "./src/forum/components/Poll/PollShowcaseItem.tsx"
/*!********************************************************!*\
  !*** ./src/forum/components/Poll/PollShowcaseItem.tsx ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollShowcaseItem)
/* harmony export */ });
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PollView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PollView */ "./src/forum/components/PollView.tsx");


class PollShowcaseItem extends (flarum_common_Component__WEBPACK_IMPORTED_MODULE_0___default()) {
  view() {
    return m("div", {
      className: "PollShowcase-item"
    }, m(_PollView__WEBPACK_IMPORTED_MODULE_1__["default"], {
      poll: this.attrs.poll
    }));
  }
}
flarum.reg.add('fof-polls', 'forum/components/Poll/PollShowcaseItem', PollShowcaseItem);

/***/ },

/***/ "./src/forum/components/Poll/PollSubmitButton.tsx"
/*!********************************************************!*\
  !*** ./src/forum/components/Poll/PollSubmitButton.tsx ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollSubmitButton)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);



class PollSubmitButton extends (flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()) {
  view() {
    const state = this.attrs.state;
    return m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      type: "button",
      className: "Button Button--primary Poll-submit",
      loading: state.loadingOptions,
      disabled: !state.hasSelectedOptions(),
      onclick: () => state.onsubmit()
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll.submit_button'));
  }
}
flarum.reg.add('fof-polls', 'forum/components/Poll/PollSubmitButton', PollSubmitButton);

/***/ },

/***/ "./src/forum/components/PollGroup/PollGroupForm.tsx"
/*!**********************************************************!*\
  !*** ./src/forum/components/PollGroup/PollGroupForm.tsx ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollGroupForm)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Form */ "flarum/common/components/Form");
/* harmony import */ var flarum_common_components_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_FormGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/FormGroup */ "flarum/common/components/FormGroup");
/* harmony import */ var flarum_common_components_FormGroup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_FormGroup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_RequestError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/RequestError */ "flarum/common/utils/RequestError");
/* harmony import */ var flarum_common_utils_RequestError__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_RequestError__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _form_FormError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../form/FormError */ "./src/forum/components/form/FormError.tsx");
/* harmony import */ var _states_PollGroupFormState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../states/PollGroupFormState */ "./src/forum/states/PollGroupFormState.ts");
/* harmony import */ var _utils_PollGroupControls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/PollGroupControls */ "./src/forum/utils/PollGroupControls.tsx");
/* harmony import */ var _Poll_PollListItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Poll/PollListItem */ "./src/forum/components/Poll/PollListItem.tsx");












class PollGroupForm extends (flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()) {
  oninit(vnode) {
    super.oninit(vnode);
    this.state = new _states_PollGroupFormState__WEBPACK_IMPORTED_MODULE_9__["default"](this.attrs.pollGroup);
    this.name = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.state.pollGroup.name() || '');
  }
  view() {
    return m("form", {
      className: "PollGroupForm",
      onsubmit: this.onsubmit.bind(this)
    }, m((flarum_common_components_Form__WEBPACK_IMPORTED_MODULE_3___default()), null, this.fields().toArray()));
  }
  fields() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default())();
    items.add('name', m((flarum_common_components_FormGroup__WEBPACK_IMPORTED_MODULE_4___default()), {
      type: "text",
      name: "name",
      label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_groups.composer.name_label'),
      required: true,
      stream: this.name
    }), 100);
    items.add('submit', m("div", {
      className: "PollGroupForm-submit"
    }, this.submitItems().toArray()), 50);
    if (this.state.pollGroup.exists) {
      const polls = this.pollItems().toArray();
      if (polls.length) {
        items.add('polls', m("ul", {
          className: "PollGroupForm-polls"
        }, polls), 20);
      }
      items.add('addPoll', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: "Button Button--primary PollGroupForm-addPoll",
        icon: "fas fa-plus",
        onclick: () => _utils_PollGroupControls__WEBPACK_IMPORTED_MODULE_10__["default"].addPoll(this.state.pollGroup)
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_groups.controls.add_poll_label')), 10);
    }
    return items;
  }
  submitItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default())();
    items.add('save', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      type: "submit",
      className: "Button Button--primary",
      icon: "fas fa-save",
      loading: this.state.loading
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_groups.composer.save_changes')), 100);
    if (this.state.pollGroup.exists) {
      items.add('delete', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
        type: "button",
        className: "Button Button--secondary",
        icon: "fas fa-trash-alt",
        loading: this.state.deleting,
        onclick: () => this.state.delete()
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_groups.composer.delete')), 0);
    }
    return items;
  }
  pollItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default())();
    this.state.pollGroup.polls()?.forEach(poll => {
      if (!poll) return;
      items.add(`poll-${poll.id()}`, m("li", {
        key: poll.id(),
        className: "PollGroupForm-poll"
      }, m(_Poll_PollListItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        poll: poll
      })));
    });
    return items;
  }
  data() {
    if (!this.name()) {
      throw new _form_FormError__WEBPACK_IMPORTED_MODULE_8__["default"](flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_groups.composer.name_required'));
    }
    return {
      name: this.name()
    };
  }
  async onsubmit(event) {
    event.preventDefault();
    try {
      await this.attrs.onsubmit(this.data(), this.state);
    } catch (error) {
      if (error instanceof _form_FormError__WEBPACK_IMPORTED_MODULE_8__["default"]) {
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().alerts.show({
          type: 'error'
        }, error.content);
        return;
      }

      // Core's request handler has already shown the server's own message.
      if (error instanceof (flarum_common_utils_RequestError__WEBPACK_IMPORTED_MODULE_6___default())) return;
      console.error(error);
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().alerts.show({
        type: 'error'
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_groups.composer.error'));
    }
  }
}
flarum.reg.add('fof-polls', 'forum/components/PollGroup/PollGroupForm', PollGroupForm);

/***/ },

/***/ "./src/forum/components/PollGroup/PollGroupList.tsx"
/*!**********************************************************!*\
  !*** ./src/forum/components/PollGroup/PollGroupList.tsx ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollGroupList)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AbstractPollList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AbstractPollList */ "./src/forum/components/AbstractPollList.tsx");
/* harmony import */ var _PollGroupListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PollGroupListItem */ "./src/forum/components/PollGroup/PollGroupListItem.tsx");



class PollGroupList extends _AbstractPollList__WEBPACK_IMPORTED_MODULE_1__["default"] {
  className() {
    return 'PollGroupList';
  }
  itemView(pollGroup) {
    return m(_PollGroupListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      pollGroup: pollGroup,
      compactView: true
    });
  }
  emptyText() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_groups.list_page.empty_text');
  }
  loadMoreText() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_groups.list_page.load_more_button');
  }
}
flarum.reg.add('fof-polls', 'forum/components/PollGroup/PollGroupList', PollGroupList);

/***/ },

/***/ "./src/forum/components/PollGroup/PollGroupListItem.tsx"
/*!**************************************************************!*\
  !*** ./src/forum/components/PollGroup/PollGroupListItem.tsx ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollGroupListItem)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Placeholder */ "flarum/common/components/Placeholder");
/* harmony import */ var flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_PollGroupControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/PollGroupControls */ "./src/forum/utils/PollGroupControls.tsx");
/* harmony import */ var _Poll_PollListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Poll/PollListItem */ "./src/forum/components/Poll/PollListItem.tsx");
/* harmony import */ var _Poll_PollShowcaseItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Poll/PollShowcaseItem */ "./src/forum/components/Poll/PollShowcaseItem.tsx");








class PollGroupListItem extends (flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()) {
  view() {
    const polls = this.pollItems().toArray();
    return m("div", {
      className: "PollGroupListItem"
    }, m("div", {
      className: "PollGroupListItem-main"
    }, this.mainItems().toArray()), polls.length ? m("ul", {
      className: "PollGroupListItem-polls"
    }, polls) : m((flarum_common_components_Placeholder__WEBPACK_IMPORTED_MODULE_3___default()), {
      text: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_groups.list_page.no_polls')
    }));
  }
  mainItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default())();
    items.add('title', m("h3", {
      className: "PollGroupListItem-title"
    }, this.attrs.pollGroup.name()), 100);
    const controls = this.controlsView();
    if (controls) items.add('controls', controls, 0);
    return items;
  }
  pollItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default())();
    const polls = this.attrs.pollGroup.polls();
    polls?.forEach(poll => {
      if (!poll) return;
      items.add(`poll-${poll.id()}`, m("li", {
        key: poll.id(),
        className: "PollGroupListItem-poll"
      }, this.attrs.compactView ? m(_Poll_PollListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        poll: poll
      }) : m(_Poll_PollShowcaseItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        poll: poll
      })));
    });
    return items;
  }
  controlsView() {
    const controls = _utils_PollGroupControls__WEBPACK_IMPORTED_MODULE_5__["default"].controls(this.attrs.pollGroup, this).toArray();
    if (!controls.length) return null;
    return m((flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_2___default()), {
      icon: "fas fa-ellipsis-v",
      className: "PollGroupListItem-controls",
      menuClassName: "Dropdown-menu--right",
      buttonClassName: "Button Button--icon Button--flat",
      accessibleToggleLabel: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_controls.toggle_dropdown_accessible_label')
    }, controls);
  }
}
flarum.reg.add('fof-polls', 'forum/components/PollGroup/PollGroupListItem', PollGroupListItem);

/***/ },

/***/ "./src/forum/components/PollGroupListPage.tsx"
/*!****************************************************!*\
  !*** ./src/forum/components/PollGroupListPage.tsx ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollGroupListPage)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/PageStructure */ "flarum/forum/components/PageStructure");
/* harmony import */ var flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PollGroup_PollGroupList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PollGroup/PollGroupList */ "./src/forum/components/PollGroup/PollGroupList.tsx");
/* harmony import */ var _states_PollGroupListState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../states/PollGroupListState */ "./src/forum/states/PollGroupListState.ts");
/* harmony import */ var _PollPageHero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PollPageHero */ "./src/forum/components/PollPageHero.tsx");
/* harmony import */ var _PollsIndexSidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PollsIndexSidebar */ "./src/forum/components/PollsIndexSidebar.tsx");








class PollGroupListPage extends (flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default()) {
  oninit(vnode) {
    super.oninit(vnode);
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('canViewPollGroups')) {
      m.route.set('/');
      return;
    }
    this.bodyClass = 'App--polls';
    this.state = new _states_PollGroupListState__WEBPACK_IMPORTED_MODULE_5__["default"]({
      sort: m.route.param('sort'),
      filter: m.route.param('filter')
    });
    this.state.refresh();
  }
  view() {
    return m((flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "PollGroupListPage",
      hero: this.hero.bind(this),
      sidebar: this.sidebar.bind(this),
      loading: !this.state
    }, this.contentItems().toArray());
  }
  hero() {
    return m(_PollPageHero__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_groups.list_page.title'),
      icon: "fas fa-layer-group"
    });
  }
  sidebar() {
    return m(_PollsIndexSidebar__WEBPACK_IMPORTED_MODULE_7__["default"], null);
  }
  contentItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    items.add('pollGroupList', m(_PollGroup_PollGroupList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      state: this.state
    }), 10);
    return items;
  }
}
flarum.reg.add('fof-polls', 'forum/components/PollGroupListPage', PollGroupListPage);

/***/ },

/***/ "./src/forum/components/PollGroupViewPage.tsx"
/*!****************************************************!*\
  !*** ./src/forum/components/PollGroupViewPage.tsx ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollGroupViewPage)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/PageStructure */ "flarum/forum/components/PageStructure");
/* harmony import */ var flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PollGroup_PollGroupListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PollGroup/PollGroupListItem */ "./src/forum/components/PollGroup/PollGroupListItem.tsx");
/* harmony import */ var _PollPageHero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PollPageHero */ "./src/forum/components/PollPageHero.tsx");
/* harmony import */ var _PollsIndexSidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PollsIndexSidebar */ "./src/forum/components/PollsIndexSidebar.tsx");







class PollGroupViewPage extends (flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default()) {
  loading = false;
  pollGroup = null;
  oninit(vnode) {
    super.oninit(vnode);
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('canViewPollGroups')) {
      m.route.set('/');
      return;
    }
    this.bodyClass = 'App--polls';
    const id = m.route.param('id');
    this.pollGroup = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.getById('poll_groups', id) || null;
    if (this.pollGroup) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().setTitle(this.pollGroup.name());
      return;
    }
    this.loading = true;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.find('poll_groups', id).then(pollGroup => {
      this.pollGroup = pollGroup;
      this.loading = false;
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().setTitle(pollGroup.name());
      m.redraw();
    });
  }
  view() {
    return m((flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "PollGroupViewPage",
      hero: this.hero.bind(this),
      sidebar: this.sidebar.bind(this),
      loading: this.loading
    }, this.contentItems().toArray());
  }
  hero() {
    return m(_PollPageHero__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: this.pollGroup?.name(),
      icon: "fas fa-layer-group"
    });
  }
  sidebar() {
    return m(_PollsIndexSidebar__WEBPACK_IMPORTED_MODULE_6__["default"], null);
  }
  contentItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    if (this.pollGroup) {
      items.add('pollGroup', m(_PollGroup_PollGroupListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
        pollGroup: this.pollGroup
      }));
    }
    return items;
  }
}
flarum.reg.add('fof-polls', 'forum/components/PollGroupViewPage', PollGroupViewPage);

/***/ },

/***/ "./src/forum/components/PollPageHero.tsx"
/*!***********************************************!*\
  !*** ./src/forum/components/PollPageHero.tsx ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollPageHero)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/Hero */ "flarum/forum/components/Hero");
/* harmony import */ var flarum_forum_components_Hero__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Hero__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Icon */ "flarum/common/components/Icon");
/* harmony import */ var flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);




class PollPageHero extends (flarum_forum_components_Hero__WEBPACK_IMPORTED_MODULE_1___default()) {
  className() {
    return 'PollPageHero';
  }
  bodyItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    const title = this.attrs.title || flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.polls_page.title');
    const icon = this.attrs.icon || 'fas fa-poll';
    items.add('title', m("h2", {
      className: "Hero-title"
    }, [m((flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_2___default()), {
      name: icon
    }), ' ', title]), 100);
    return items;
  }
}
flarum.reg.add('fof-polls', 'forum/components/PollPageHero', PollPageHero);

/***/ },

/***/ "./src/forum/components/PollView.tsx"
/*!*******************************************!*\
  !*** ./src/forum/components/PollView.tsx ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollView)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Poll_AbstractPoll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Poll/AbstractPoll */ "./src/forum/components/Poll/AbstractPoll.tsx");
/* harmony import */ var _utils_PollControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/PollControls */ "./src/forum/utils/PollControls.tsx");




class PollView extends _Poll_AbstractPoll__WEBPACK_IMPORTED_MODULE_2__["default"] {
  className() {
    return 'Poll';
  }
  controlItems() {
    const poll = this.attrs.poll;
    const items = _utils_PollControls__WEBPACK_IMPORTED_MODULE_3__["default"].controls(poll, this);
    if (poll.publicPoll() || poll.canEdit()) {
      items.add('voters', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
        onclick: this.state.showVoters,
        icon: "fas fa-poll"
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.public_poll')), 100);
    }
    return items;
  }
}
flarum.reg.add('fof-polls', 'forum/components/PollView', PollView);

/***/ },

/***/ "./src/forum/components/PollViewPage.tsx"
/*!***********************************************!*\
  !*** ./src/forum/components/PollViewPage.tsx ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollViewPage)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/PageStructure */ "flarum/forum/components/PageStructure");
/* harmony import */ var flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PollView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PollView */ "./src/forum/components/PollView.tsx");
/* harmony import */ var _PollPageHero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PollPageHero */ "./src/forum/components/PollPageHero.tsx");
/* harmony import */ var _PollsIndexSidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PollsIndexSidebar */ "./src/forum/components/PollsIndexSidebar.tsx");







class PollViewPage extends (flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default()) {
  loading = false;
  poll = null;
  oninit(vnode) {
    super.oninit(vnode);
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('globalPollsEnabled')) {
      m.route.set('/');
      return;
    }
    this.bodyClass = 'App--polls';
    const id = m.route.param('id');
    this.poll = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.getById('polls', id) || null;
    if (this.poll) {
      this.setCurrent(this.poll);
      return;
    }
    this.loading = true;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.find('polls', id).then(poll => {
      this.poll = poll;
      this.loading = false;
      this.setCurrent(poll);
      m.redraw();
    });
  }
  setCurrent(poll) {
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().current.set('poll', poll);
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().setTitle(poll.question());
  }
  view() {
    return m((flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "PollViewPage",
      hero: this.hero.bind(this),
      sidebar: this.sidebar.bind(this),
      loading: this.loading
    }, this.contentItems().toArray());
  }
  hero() {
    return m(_PollPageHero__WEBPACK_IMPORTED_MODULE_5__["default"], null);
  }
  sidebar() {
    return m(_PollsIndexSidebar__WEBPACK_IMPORTED_MODULE_6__["default"], null);
  }
  contentItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    if (this.poll) {
      items.add('poll', m(_PollView__WEBPACK_IMPORTED_MODULE_4__["default"], {
        poll: this.poll
      }));
    }
    return items;
  }
}
flarum.reg.add('fof-polls', 'forum/components/PollViewPage', PollViewPage);

/***/ },

/***/ "./src/forum/components/PollsIndexSidebar.tsx"
/*!****************************************************!*\
  !*** ./src/forum/components/PollsIndexSidebar.tsx ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollsIndexSidebar)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/IndexSidebar */ "flarum/forum/components/IndexSidebar");
/* harmony import */ var flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/SelectDropdown */ "flarum/common/components/SelectDropdown");
/* harmony import */ var flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5__);






class PollsIndexSidebar extends (flarum_forum_components_IndexSidebar__WEBPACK_IMPORTED_MODULE_1___default()) {
  items() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default())();
    const canStartPoll = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('canStartGlobalPolls');
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().current.get('routeName') !== 'fof.polls.composer') {
      const label = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(`fof-polls.forum.poll.${canStartPoll ? 'start_poll_button' : 'cannot_start_poll_button'}`);
      items.add('newGlobalPoll', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
        icon: "fas fa-edit",
        className: "Button Button--primary App-primaryControl PollsPage-newPoll",
        itemClassName: "App-primaryControl",
        "aria-label": flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5___default()(label),
        disabled: !canStartPoll,
        onclick: () => this.newPollAction()
      }, label));
    }
    items.add('nav', m((flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_3___default()), {
      buttonClassName: "Button",
      className: "App-titleControl",
      accessibleToggleLabel: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('core.forum.index.toggle_sidenav_dropdown_accessible_label'),
      defaultLabel: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.page.nav')
    }, this.navItems().toArray()));
    return items;
  }
  newPollAction() {
    if (!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().session).user) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(() => flarum.reg.asyncModuleImport('flarum/forum/components/LogInModal'));
      return;
    }
    m.route.set(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('fof.polls.composer'));
  }
}
flarum.reg.add('fof-polls', 'forum/components/PollsIndexSidebar', PollsIndexSidebar);

/***/ },

/***/ "./src/forum/components/PollsPage.tsx"
/*!********************************************!*\
  !*** ./src/forum/components/PollsPage.tsx ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollsPage)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/PageStructure */ "flarum/forum/components/PageStructure");
/* harmony import */ var flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/SelectDropdown */ "flarum/common/components/SelectDropdown");
/* harmony import */ var flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Poll_PollList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Poll/PollList */ "./src/forum/components/Poll/PollList.tsx");
/* harmony import */ var _states_PollListState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../states/PollListState */ "./src/forum/states/PollListState.ts");
/* harmony import */ var _PollPageHero__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PollPageHero */ "./src/forum/components/PollPageHero.tsx");
/* harmony import */ var _PollsIndexSidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PollsIndexSidebar */ "./src/forum/components/PollsIndexSidebar.tsx");












const STATUS_FILTER_VALUE = {
  all: 'any',
  published: '0',
  draft: '1'
};
const STATUSES = ['all', 'published', 'draft'];

// Landing on /polls/all?filter[isDraft]=1 has to leave the dropdown reading
// "Drafts", not "All".
function statusFromUrl() {
  const raw = new URLSearchParams(window.location.search).get('filter[isDraft]');
  if (raw === '1' || raw === 'true') return 'draft';
  if (raw === '0' || raw === 'false') return 'published';
  return 'all';
}
class PollsPage extends (flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default()) {
  status = 'all';
  oninit(vnode) {
    super.oninit(vnode);
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('globalPollsEnabled')) {
      m.route.set('/');
      return;
    }
    this.bodyClass = 'App--polls';
    this.status = statusFromUrl();
    this.state = new _states_PollListState__WEBPACK_IMPORTED_MODULE_9__["default"]({
      // The setting stores an API sort value; the list state works in keys.
      sort: _states_PollListState__WEBPACK_IMPORTED_MODULE_9__["default"].sortKey(String(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('pollsDirectoryDefaultSort') || '')),
      filter: {
        isDraft: STATUS_FILTER_VALUE[this.status]
      }
    });
    this.state.refresh();
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().setTitle(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.page.nav')));
  }
  view() {
    if (!this.state) return null;
    return m((flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "PollsPage",
      hero: this.hero.bind(this),
      sidebar: this.sidebar.bind(this)
    }, this.contentItems().toArray());
  }
  hero() {
    return m(_PollPageHero__WEBPACK_IMPORTED_MODULE_10__["default"], null);
  }
  sidebar() {
    return m(_PollsIndexSidebar__WEBPACK_IMPORTED_MODULE_11__["default"], null);
  }
  contentItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default())();
    items.add('toolbar', m("div", {
      className: "IndexPage-toolbar"
    }, this.toolbarItems().toArray()), 100);
    items.add('pollList', m(_Poll_PollList__WEBPACK_IMPORTED_MODULE_8__["default"], {
      state: this.state
    }), 10);
    return items;
  }
  toolbarItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default())();
    items.add('view', m("ul", {
      className: "IndexPage-toolbar-view"
    }, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default()(this.viewItems().toArray())), 100);
    items.add('action', m("ul", {
      className: "IndexPage-toolbar-action"
    }, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default()(this.actionItems().toArray())), 10);
    return items;
  }
  viewItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default())();
    items.add('status', m((flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_4___default()), {
      buttonClassName: "Button",
      defaultLabel: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.polls_list.status_filter.all')
    }, STATUSES.map(status => m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      active: this.status === status,
      onclick: () => this.setStatus(status)
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(`fof-polls.forum.polls_list.status_filter.${status}`)))), 10);
    const sortMap = this.state.sortMap();
    const currentSort = this.state.getSort();
    items.add('sort', m((flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_4___default()), {
      buttonClassName: "Button",
      defaultLabel: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.polls_list.sort_dropdown.newest')
    }, Object.keys(sortMap).map(key => m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      active: currentSort === key,
      onclick: () => this.state.changeSort(key)
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(`fof-polls.forum.polls_list.sort_dropdown.${key}`)))), 0);
    return items;
  }
  actionItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default())();
    items.add('refresh', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "Button Button--icon",
      icon: "fas fa-sync",
      "aria-label": flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_7___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('core.forum.index.refresh_tooltip')),
      onclick: () => this.state.refresh()
    }));
    return items;
  }
  setStatus(status) {
    if (this.status === status) return;
    this.status = status;
    const params = this.state.getParams();
    this.state.refreshParams({
      ...params,
      filter: {
        ...(params.filter || {}),
        isDraft: STATUS_FILTER_VALUE[status]
      }
    }, 1);
  }
}
flarum.reg.add('fof-polls', 'forum/components/PollsPage', PollsPage);

/***/ },

/***/ "./src/forum/components/PollsShowcasePage.tsx"
/*!****************************************************!*\
  !*** ./src/forum/components/PollsShowcasePage.tsx ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollsShowcasePage)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/PageStructure */ "flarum/forum/components/PageStructure");
/* harmony import */ var flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _states_PollListState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../states/PollListState */ "./src/forum/states/PollListState.ts");
/* harmony import */ var _Poll_PollShowcase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Poll/PollShowcase */ "./src/forum/components/Poll/PollShowcase.tsx");
/* harmony import */ var _PollPageHero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PollPageHero */ "./src/forum/components/PollPageHero.tsx");
/* harmony import */ var _PollsIndexSidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PollsIndexSidebar */ "./src/forum/components/PollsIndexSidebar.tsx");









class PollsShowcasePage extends (flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default()) {
  oninit(vnode) {
    super.oninit(vnode);
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('globalPollsEnabled')) {
      m.route.set('/');
      return;
    }
    this.bodyClass = 'App--polls';
    this.state = new _states_PollListState__WEBPACK_IMPORTED_MODULE_5__["default"]({
      sort: m.route.param('sort'),
      filter: {
        '-isEnded': '1',
        isDraft: '0'
      },
      include: this.includeParams()
    });
    this.endedState = new _states_PollListState__WEBPACK_IMPORTED_MODULE_5__["default"]({
      sort: m.route.param('sort'),
      filter: {
        isEnded: '1',
        isDraft: '0'
      },
      include: this.includeParams()
    });
    this.state.refresh();
    this.endedState.refresh();
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().setTitle(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.page.nav')));
  }
  includeParams() {
    return ['options', 'votes', 'myVotes', 'myVotes.option'];
  }
  view() {
    return m((flarum_forum_components_PageStructure__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "PollsShowcasePage",
      hero: this.hero.bind(this),
      sidebar: this.sidebar.bind(this),
      loading: !this.state
    }, this.contentItems().toArray());
  }
  hero() {
    return m(_PollPageHero__WEBPACK_IMPORTED_MODULE_7__["default"], null);
  }
  sidebar() {
    return m(_PollsIndexSidebar__WEBPACK_IMPORTED_MODULE_8__["default"], null);
  }
  contentItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    items.add('poll-showcase', m(_Poll_PollShowcase__WEBPACK_IMPORTED_MODULE_6__["default"], {
      activeState: this.state,
      endedState: this.endedState
    }));
    return items;
  }
}
flarum.reg.add('fof-polls', 'forum/components/PollsShowcasePage', PollsShowcasePage);

/***/ },

/***/ "./src/forum/components/PostPoll.tsx"
/*!*******************************************!*\
  !*** ./src/forum/components/PostPoll.tsx ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostPoll)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Poll_AbstractPoll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Poll/AbstractPoll */ "./src/forum/components/Poll/AbstractPoll.tsx");
/* harmony import */ var _states_PollState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../states/PollState */ "./src/forum/states/PollState.ts");






class PostPoll extends _Poll_AbstractPoll__WEBPACK_IMPORTED_MODULE_4__["default"] {
  className() {
    return 'Post-poll';
  }
  createState() {
    return new _states_PollState__WEBPACK_IMPORTED_MODULE_5__["default"](this.attrs.poll, this.attrs.post);
  }
  controlItems() {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default())();
    const poll = this.attrs.poll;
    if (poll.canSeeVoters()) {
      items.add('voters', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
        onclick: this.state.showVoters,
        icon: "fas fa-poll"
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.public_poll')), 100);
    }
    if (poll.canEdit()) {
      items.add('edit', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
        onclick: () => flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(() => __webpack_require__.e(/*! import() | forum/components/EditPollModal */ "forum/components/EditPollModal").then(() => (__webpack_require__(/*! ./EditPollModal */ "./src/forum/components/EditPollModal.tsx"))), {
          poll
        }),
        icon: "fas fa-pen"
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.moderation.edit')), 50);
    }
    if (poll.canDelete()) {
      items.add('delete', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
        onclick: this.deletePoll.bind(this),
        icon: "fas fa-trash"
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.moderation.delete')), 0);
    }
    return items;
  }
  deletePoll() {
    if (!confirm(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.moderation.delete_confirm')))) return;
    this.attrs.poll.delete().then(() => m.redraw.sync());
  }
}
flarum.reg.add('fof-polls', 'forum/components/PostPoll', PostPoll);flarum.reg.addChunkModule('forum/components/EditPollModal', './src/forum/components/EditPollModal.tsx', 'fof-polls', 'forum/components/EditPollModal');flarum.reg.addChunkModule('forum/components/EditPollModal', './src/forum/components/EditPollModal.tsx', 'fof-polls', 'forum/components/EditPollModal');flarum.reg.addChunkModule('forum/components/EditPollModal', './src/forum/components/EditPollModal.tsx', 'fof-polls', 'forum/components/EditPollModal');flarum.reg.addChunkModule('forum/components/EditPollModal', './src/forum/components/EditPollModal.tsx', 'fof-polls', 'forum/components/EditPollModal');flarum.reg.addChunkModule('forum/components/EditPollModal', './src/forum/components/EditPollModal.tsx', 'fof-polls', 'forum/components/EditPollModal');flarum.reg.addChunkModule('forum/components/EditPollModal', './src/forum/components/EditPollModal.tsx', 'fof-polls', 'forum/components/EditPollModal');flarum.reg.addChunkModule('forum/components/EditPollModal', './src/forum/components/EditPollModal.tsx', 'fof-polls', 'forum/components/EditPollModal');flarum.reg.addChunkModule('forum/components/EditPollModal', './src/forum/components/EditPollModal.tsx', 'fof-polls', 'forum/components/EditPollModal');flarum.reg.addChunkModule('forum/components/EditPollModal', './src/forum/components/EditPollModal.tsx', 'fof-polls', 'forum/components/EditPollModal');flarum.reg.addChunkModule('forum/components/EditPollModal', './src/forum/components/EditPollModal.tsx', 'fof-polls', 'forum/components/EditPollModal');flarum.reg.addChunkModule('forum/components/EditPollModal', './src/forum/components/EditPollModal.tsx', 'fof-polls', 'forum/components/EditPollModal');flarum.reg.addChunkModule('forum/components/EditPollModal', './src/forum/components/EditPollModal.tsx', 'fof-polls', 'forum/components/EditPollModal');flarum.reg.addChunkModule('forum/components/EditPollModal', './src/forum/components/EditPollModal.tsx', 'fof-polls', 'forum/components/EditPollModal');flarum.reg.addChunkModule('forum/components/EditPollModal', './src/forum/components/EditPollModal.tsx', 'fof-polls', 'forum/components/EditPollModal');flarum.reg.addChunkModule('forum/components/EditPollModal', './src/forum/components/EditPollModal.tsx', 'fof-polls', 'forum/components/EditPollModal');flarum.reg.addChunkModule('forum/components/EditPollModal', './src/forum/components/EditPollModal.tsx', 'fof-polls', 'forum/components/EditPollModal');flarum.reg.addChunkModule('forum/components/EditPollModal', './src/forum/components/EditPollModal.tsx', 'fof-polls', 'forum/components/EditPollModal');flarum.reg.addChunkModule('forum/components/EditPollModal', './src/forum/components/EditPollModal.tsx', 'fof-polls', 'forum/components/EditPollModal');

/***/ },

/***/ "./src/forum/components/SchedulePollModal.tsx"
/*!****************************************************!*\
  !*** ./src/forum/components/SchedulePollModal.tsx ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SchedulePollModal)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_FormModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/FormModal */ "flarum/common/components/FormModal");
/* harmony import */ var flarum_common_components_FormModal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_FormModal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_FormGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/FormGroup */ "flarum/common/components/FormGroup");
/* harmony import */ var flarum_common_components_FormGroup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_FormGroup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs/plugin/utc */ "./node_modules/dayjs/plugin/utc.js");
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_6__);







dayjs__WEBPACK_IMPORTED_MODULE_5___default().extend((dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_6___default()));
class SchedulePollModal extends (flarum_common_components_FormModal__WEBPACK_IMPORTED_MODULE_1___default()) {
  oninit(vnode) {
    super.oninit(vnode);

    // The model returns UTC; datetime-local wants the local-zone equivalent.
    const scheduled = this.attrs.poll.scheduledPublishAt();
    this.datetime = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default()(scheduled ? dayjs__WEBPACK_IMPORTED_MODULE_5___default()(scheduled).local().format('YYYY-MM-DDTHH:mm') : '');
  }
  className() {
    return 'SchedulePollModal Modal--small';
  }
  title() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(this.attrs.poll.scheduledPublishAt() ? 'fof-polls.forum.compose.schedule_publication_edit' : 'fof-polls.forum.compose.schedule_publication');
  }
  content() {
    return m("div", {
      className: "Modal-body"
    }, m((flarum_common_components_FormGroup__WEBPACK_IMPORTED_MODULE_3___default()), {
      type: "datetime-local",
      name: "scheduledFor",
      label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.compose.schedule_datetime_label'),
      required: true,
      stream: this.datetime
    }), m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      type: "submit",
      className: "Button Button--primary",
      loading: this.loading
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.compose.schedule_submit'))));
  }
  async onsubmit(e) {
    e.preventDefault();
    this.loading = true;
    this.alertAttrs = null;
    try {
      // Persist the compose form's edits first. If they fail validation the
      // form reports it and we stop, rather than scheduling stale data.
      if (this.attrs.form && !(await this.attrs.form.submit({
        isDraft: true
      }))) {
        return;
      }
      const poll = this.attrs.form ? this.attrs.form.state.poll : this.attrs.poll;
      if (!poll.id()) {
        throw new Error('Cannot schedule an unsaved poll.');
      }
      await poll.publish({
        scheduledFor: new Date(this.datetime()).toISOString()
      }, this.onerror.bind(this));
      this.hide();
      this.attrs.onSuccess?.(poll);
    } catch (error) {
      if (!this.alertAttrs) {
        this.alertAttrs = {
          type: 'error',
          content: error?.message ?? flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('core.lib.error.generic_message')
        };
      }
    } finally {
      this.loading = false;
      m.redraw();
    }
  }
}
flarum.reg.add('fof-polls', 'forum/components/SchedulePollModal', SchedulePollModal);

/***/ },

/***/ "./src/forum/components/UploadPollImageButton.tsx"
/*!********************************************************!*\
  !*** ./src/forum/components/UploadPollImageButton.tsx ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UploadPollImageButton)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3__);




// Core's UploadImageButton addresses one fixed route and reloads the page on
// success; a poll image is addressed by the record it belongs to and must not
// throw away the form around it. Only the markup is shared.
class UploadPollImageButton extends (flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()) {
  loading = false;
  uploadedImageUrl = false;
  fileName = (() => undefined)();
  view(vnode) {
    const {
      name,
      poll,
      option,
      onUpload,
      className,
      ...attrs
    } = this.attrs;
    const imageUrl = this.getImageUrl();
    const buttonAttrs = {
      ...attrs,
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3___default()('Button', className),
      loading: this.loading
    };
    return m("div", {
      className: "UploadImageButton"
    }, imageUrl && m("div", {
      className: "UploadImageButton-image"
    }, m("img", {
      src: imageUrl,
      alt: this.imageAlt()
    })), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), Object.assign({}, buttonAttrs, {
      onclick: imageUrl ? this.remove.bind(this) : this.upload.bind(this)
    }), flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(`fof-polls.forum.upload_image.${imageUrl ? 'remove' : 'upload'}_button`)));
  }
  imageAlt() {
    return this.attrs.poll?.imageAlt() || this.attrs.option?.answer() || '';
  }
  upload() {
    if (this.loading) return;
    this.$input = $('<input type="file">');
    this.$input.appendTo('body').hide().trigger('click').on('change', e => {
      const body = new FormData();
      body.append(this.attrs.name, $(e.target)[0].files[0]);
      this.loading = true;
      m.redraw();
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().request({
        method: 'POST',
        url: this.resourceUrl(),
        serialize: raw => raw,
        body
      }).then(this.success.bind(this), this.failure.bind(this));
    });
  }
  remove() {
    this.loading = true;
    m.redraw();

    // Before the poll exists there is no id to delete against, so the upload
    // is addressed by the file name the server gave back.
    const fileName = !this.attrs.poll?.exists && !this.attrs.option?.exists ? this.fileName : undefined;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().request({
      method: 'DELETE',
      url: this.resourceUrl(fileName)
    }).then(upload => {
      this.attrs.poll?.exists && this.attrs.poll.pushAttributes({
        image: null,
        imageUrl: null,
        isImageUpload: false
      });
      this.attrs.option?.exists && this.attrs.option.pushAttributes({
        imageUrl: false
      });
      return upload;
    }).then(this.success.bind(this), this.failure.bind(this));
  }
  resourceUrl(fileName) {
    if (fileName === void 0) {
      fileName = undefined;
    }
    let url = `${flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('apiUrl')}/polls/${this.attrs.name}`;
    if (fileName) return `${url}/name/${fileName}`;
    if (this.attrs.poll?.exists) url += `/${this.attrs.poll.id()}`;
    if (this.attrs.option?.exists) url += `/${this.attrs.option.id()}`;
    return url;
  }
  getImageUrl() {
    if (this.uploadedImageUrl !== false) return this.uploadedImageUrl;
    return this.attrs.poll?.imageUrl() || this.attrs.option?.imageUrl();
  }
  success(response) {
    this.loading = false;
    this.uploadedImageUrl = response?.fileUrl;
    this.fileName = response?.fileName;

    // The API persists the file name, so that is what the model has to carry.
    if (response?.fileName) {
      this.attrs.poll?.exists && this.attrs.poll.pushAttributes({
        image: response.fileName,
        imageUrl: response.fileUrl,
        isImageUpload: true
      });
      this.attrs.option?.exists && this.attrs.option.pushAttributes({
        imageUrl: response.fileUrl,
        image_url: response.fileName,
        isImageUpload: true
      });
    }
    this.attrs.onUpload?.(response?.fileName);
    m.redraw();
    this.$input?.remove();
  }
  failure() {
    this.loading = false;
    m.redraw();
    this.$input?.remove();
  }
}
flarum.reg.add('fof-polls', 'forum/components/UploadPollImageButton', UploadPollImageButton);

/***/ },

/***/ "./src/forum/components/form/FormError.tsx"
/*!*************************************************!*\
  !*** ./src/forum/components/form/FormError.tsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormError)
/* harmony export */ });
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_0__);

class FormError extends Error {
  constructor(content) {
    super(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_0___default()(content));
    this.content = content;
  }
}
flarum.reg.add('fof-polls', 'forum/components/form/FormError', FormError);

/***/ },

/***/ "./src/forum/extend.ts"
/*!*****************************!*\
  !*** ./src/forum/extend.ts ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extenders */ "flarum/common/extenders");
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/models/Post */ "flarum/common/models/Post");
/* harmony import */ var flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_models_Forum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/models/Forum */ "flarum/common/models/Forum");
/* harmony import */ var flarum_common_models_Forum__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Forum__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/models/Discussion */ "flarum/common/models/Discussion");
/* harmony import */ var flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_Poll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/Poll */ "./src/forum/models/Poll.ts");
/* harmony import */ var _models_PollOption__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/PollOption */ "./src/forum/models/PollOption.ts");
/* harmony import */ var _models_PollVote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/PollVote */ "./src/forum/models/PollVote.ts");
/* harmony import */ var _components_PollsPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/PollsPage */ "./src/forum/components/PollsPage.tsx");
/* harmony import */ var _components_ComposePollPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ComposePollPage */ "./src/forum/components/ComposePollPage.tsx");
/* harmony import */ var _components_PollViewPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/PollViewPage */ "./src/forum/components/PollViewPage.tsx");
/* harmony import */ var _components_PollsShowcasePage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/PollsShowcasePage */ "./src/forum/components/PollsShowcasePage.tsx");
/* harmony import */ var _models_PollGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./models/PollGroup */ "./src/forum/models/PollGroup.ts");
/* harmony import */ var _components_ComposePollGroupPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ComposePollGroupPage */ "./src/forum/components/ComposePollGroupPage.tsx");
/* harmony import */ var _components_PollGroupListPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/PollGroupListPage */ "./src/forum/components/PollGroupListPage.tsx");
/* harmony import */ var _components_PollGroupViewPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/PollGroupViewPage */ "./src/forum/components/PollGroupViewPage.tsx");















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default().Routes)() //
.add('fof.polls.showcase', '/polls', _components_PollsShowcasePage__WEBPACK_IMPORTED_MODULE_10__["default"]).add('fof.polls.list', '/polls/all', _components_PollsPage__WEBPACK_IMPORTED_MODULE_7__["default"]).add('fof.polls.view', '/polls/view/:id', _components_PollViewPage__WEBPACK_IMPORTED_MODULE_9__["default"]).add('fof.polls.composer', '/polls/composer', _components_ComposePollPage__WEBPACK_IMPORTED_MODULE_8__["default"]).add('fof.polls.groups.composer', '/polls/groups/composer', _components_ComposePollGroupPage__WEBPACK_IMPORTED_MODULE_12__["default"]).add('fof.polls.groups.list', '/polls/groups', _components_PollGroupListPage__WEBPACK_IMPORTED_MODULE_13__["default"]).add('fof.polls.groups.view', '/polls/groups/:id', _components_PollGroupViewPage__WEBPACK_IMPORTED_MODULE_14__["default"]), new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default().Store)() //
.add('polls', _models_Poll__WEBPACK_IMPORTED_MODULE_4__["default"]).add('poll_options', _models_PollOption__WEBPACK_IMPORTED_MODULE_5__["default"]).add('poll_votes', _models_PollVote__WEBPACK_IMPORTED_MODULE_6__["default"]).add('poll_groups', _models_PollGroup__WEBPACK_IMPORTED_MODULE_11__["default"]), new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default().Model)((flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_1___default())) //
.hasMany('polls').attribute('canStartPoll'), new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default().Model)((flarum_common_models_Forum__WEBPACK_IMPORTED_MODULE_2___default())) //
.attribute('canStartPolls'), new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default().Model)((flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default())) //
.attribute('hasPoll').attribute('canStartPoll')]);

/***/ },

/***/ "./src/forum/index.ts"
/*!****************************!*\
  !*** ./src/forum/index.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _extend__WEBPACK_IMPORTED_MODULE_6__["default"])
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _addDiscussionBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addDiscussionBadge */ "./src/forum/addDiscussionBadge.tsx");
/* harmony import */ var _addComposerItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addComposerItems */ "./src/forum/addComposerItems.tsx");
/* harmony import */ var _addPollsToPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addPollsToPost */ "./src/forum/addPollsToPost.tsx");
/* harmony import */ var _addPostControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addPostControls */ "./src/forum/addPostControls.tsx");
/* harmony import */ var _addNavItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addNavItem */ "./src/forum/addNavItem.ts");
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extend */ "./src/forum/extend.ts");







flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('fof/polls', () => {
  // Registered unconditionally: with discussion polls off the backend omits
  // the fields these read, so they do nothing on their own.
  (0,_addDiscussionBadge__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_addComposerItems__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_addPollsToPost__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_addPostControls__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_addNavItem__WEBPACK_IMPORTED_MODULE_5__["default"])();
});

/***/ },

/***/ "./src/forum/models/Poll.ts"
/*!**********************************!*\
  !*** ./src/forum/models/Poll.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Poll)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/computed */ "flarum/common/utils/computed");
/* harmony import */ var flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_2__);



class Poll extends (flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()) {
  question() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('question').call(this);
  }
  subtitle() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('subtitle').call(this);
  }
  image() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('image').call(this);
  }
  imageUrl() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('imageUrl').call(this);
  }
  imageSrcset() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('imageSrcset').call(this);
  }
  imageAlt() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('imageAlt').call(this);
  }

  // Deprecated: read imageSrcset() presence instead.
  isImageUpload() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('isImageUpload').call(this);
  }
  hasEnded() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('hasEnded').call(this);
  }
  endDate() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('endDate', (flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().transformDate)).call(this);
  }
  publicPoll() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('publicPoll').call(this);
  }
  hideVotes() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('hideVotes').call(this);
  }
  allowChangeVote() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('allowChangeVote').call(this);
  }
  allowMultipleVotes() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('allowMultipleVotes').call(this);
  }
  maxVotes() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('maxVotes').call(this);
  }
  voteCount() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('voteCount').call(this);
  }
  canVote() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('canVote').call(this);
  }
  canEdit() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('canEdit').call(this);
  }
  canDelete() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('canDelete').call(this);
  }
  canSeeVoters() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('canSeeVoters').call(this);
  }
  canChangeVote() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('canChangeVote').call(this);
  }
  options() {
    const options = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasMany('options').call(this);
    return options ? options : [];
  }
  votes() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasMany('votes').call(this);
  }
  myVotes() {
    const myVotes = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasMany('myVotes').call(this);
    return myVotes ? myVotes : [];
  }
  pollGroup() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne('pollGroup').call(this);
  }
  isGlobal() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('isGlobal').call(this);
  }
  isHidden() {
    return flarum_common_utils_computed__WEBPACK_IMPORTED_MODULE_2___default()('hiddenAt', hiddenAt => !!hiddenAt).call(this);
  }

  // TODO: These two don't make sense as of now
  isUnread() {
    return false;
  }
  publishedAt() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('publishedAt', (flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().transformDate)).call(this);
  }
  scheduledPublishAt() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('scheduledPublishAt', (flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().transformDate)).call(this);
  }
  scheduledPublishError() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('scheduledPublishError').call(this);
  }
  isDraft() {
    return !!flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('isDraft').call(this);
  }
  isScheduled() {
    return this.isDraft() && !!this.scheduledPublishAt();
  }
  canPublish() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('canPublish').call(this);
  }
  canUnpublish() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('canUnpublish').call(this);
  }
  publish(body, errorHandler) {
    if (body === void 0) {
      body = {};
    }
    const id = this.id();
    if (!id) {
      return Promise.reject(new Error('Cannot publish an unsaved poll.'));
    }
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().request({
      method: 'POST',
      url: `${flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('apiUrl')}/polls/${id}/publish`,
      body: {
        data: {
          attributes: body
        }
      },
      errorHandler
    }).then(payload => {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.pushPayload(payload);
      return this;
    });
  }
  unpublish(errorHandler) {
    const id = this.id();
    if (!id) {
      return Promise.reject(new Error('Cannot unpublish an unsaved poll.'));
    }
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().request({
      method: 'POST',
      url: `${flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('apiUrl')}/polls/${id}/unpublish`,
      errorHandler
    }).then(payload => {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.pushPayload(payload);
      return this;
    });
  }
}
flarum.reg.add('fof-polls', 'forum/models/Poll', Poll);

/***/ },

/***/ "./src/forum/models/PollGroup.ts"
/*!***************************************!*\
  !*** ./src/forum/models/PollGroup.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollGroup)
/* harmony export */ });
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_0__);

class PollGroup extends (flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default()) {
  name() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default().attribute('name').call(this);
  }
  createdAt() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default().attribute('createdAt', (flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default().transformDate)).call(this);
  }
  polls() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default().hasMany('polls').call(this) || null;
  }
  canEdit() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default().attribute('canEdit').call(this);
  }
  canDelete() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default().attribute('canDelete').call(this);
  }
}
flarum.reg.add('fof-polls', 'forum/models/PollGroup', PollGroup);

/***/ },

/***/ "./src/forum/models/PollOption.ts"
/*!****************************************!*\
  !*** ./src/forum/models/PollOption.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollOption)
/* harmony export */ });
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_0__);

class PollOption extends (flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default()) {
  answer() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default().attribute('answer').call(this);
  }
  imageUrl() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default().attribute('imageUrl').call(this);
  }
  imageSrcset() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default().attribute('imageSrcset').call(this);
  }

  // Deprecated: read imageSrcset() presence instead.
  isImageUpload() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default().attribute('isImageUpload').call(this);
  }
  voteCount() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default().attribute('voteCount').call(this);
  }
  poll() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default().hasOne('polls').call(this);
  }
  votes() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default().hasMany('votes').call(this);
  }
}
flarum.reg.add('fof-polls', 'forum/models/PollOption', PollOption);

/***/ },

/***/ "./src/forum/models/PollVote.ts"
/*!**************************************!*\
  !*** ./src/forum/models/PollVote.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollVote)
/* harmony export */ });
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_0__);

class PollVote extends (flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default()) {
  poll() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default().hasOne('poll').call(this);
  }
  option() {
    const result = flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default().hasOne('option').call(this);
    return result === false ? null : result;
  }
  user() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default().hasOne('user').call(this);
  }
  pollId() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default().attribute('pollId').call(this);
  }
  optionId() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default().attribute('optionId').call(this);
  }
}
flarum.reg.add('fof-polls', 'forum/models/PollVote', PollVote);

/***/ },

/***/ "./src/forum/states/AbstractPollListState.ts"
/*!***************************************************!*\
  !*** ./src/forum/states/AbstractPollListState.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractPollListState),
/* harmony export */   pollListEmitter: () => (/* binding */ pollListEmitter)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_states_PaginatedListState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/states/PaginatedListState */ "flarum/common/states/PaginatedListState");
/* harmony import */ var flarum_common_states_PaginatedListState__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_states_PaginatedListState__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_EventEmitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/EventEmitter */ "flarum/common/utils/EventEmitter");
/* harmony import */ var flarum_common_utils_EventEmitter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_EventEmitter__WEBPACK_IMPORTED_MODULE_2__);



const pollListEmitter = new (flarum_common_utils_EventEmitter__WEBPACK_IMPORTED_MODULE_2___default())();
class AbstractPollListState extends (flarum_common_states_PaginatedListState__WEBPACK_IMPORTED_MODULE_1___default()) {
  extraItems = [];
  constructor(params, page) {
    if (page === void 0) {
      page = 1;
    }
    super(params, page);
    pollListEmitter.on(this.deletedEvent(), this.removeItem.bind(this));
  }
  getSort() {
    return this.params.sort || this.defaultSort();
  }
  requestParams() {
    const params = {
      include: this.includes().concat(this.params.include || []).join(','),
      filter: this.params.filter || {},
      sort: this.currentSort()
    };
    if (this.params.q) {
      params.filter.q = this.params.q;
    }
    return params;
  }
  loadPage(page) {
    if (page === void 0) {
      page = 1;
    }
    const preloaded = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().preloadedApiDocument();
    if (preloaded) {
      this.initialLoading = false;
      this.pageSize = preloaded.payload?.meta?.perPage || (flarum_common_states_PaginatedListState__WEBPACK_IMPORTED_MODULE_1___default().DEFAULT_PAGE_SIZE);
      return Promise.resolve(preloaded);
    }
    return super.loadPage(page);
  }
  clear() {
    super.clear();
    this.extraItems = [];
  }
  isSearchResults() {
    return !!this.params.q;
  }

  // Every live list showing this record drops it, so a delete made from one
  // page does not leave a ghost row on another.
  notifyDeleted(item) {
    pollListEmitter.emit(this.deletedEvent(), item);
  }
  removeItem(item) {
    for (const page of this.pages) {
      const index = page.items.indexOf(item);
      if (index !== -1) {
        page.items.splice(index, 1);
        break;
      }
    }
    const index = this.extraItems.indexOf(item);
    if (index !== -1) {
      this.extraItems.splice(index, 1);
    }
    m.redraw();
  }
  addItem(item) {
    this.notifyDeleted(item);
    this.extraItems.unshift(item);
    m.redraw();
  }
  getAllItems() {
    return this.extraItems.concat(super.getAllItems());
  }
  getPages() {
    const pages = super.getPages();
    if (!this.extraItems.length) return pages;
    return [{
      number: -1,
      items: this.extraItems
    }, ...pages];
  }
}
flarum.reg.add('fof-polls', 'forum/states/AbstractPollListState', AbstractPollListState);

/***/ },

/***/ "./src/forum/states/PollFormState.ts"
/*!*******************************************!*\
  !*** ./src/forum/states/PollFormState.ts ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollFormState)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);

class PollFormState {
  loading = false;
  deleting = false;
  dirty = false;
  static createNewPoll() {
    const poll = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.createRecord('polls');
    poll.pushAttributes({
      question: '',
      endDate: '',
      publicPoll: false,
      allowMultipleVotes: false,
      hideVotes: false,
      allowChangeVote: false,
      maxVotes: 0
    });
    poll.tempOptions = [flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.createRecord('poll_options'), flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.createRecord('poll_options')];
    return poll;
  }
  constructor(poll) {
    this.poll = poll || PollFormState.createNewPoll();
  }
  isNew() {
    return !this.poll.exists;
  }
  isDraft() {
    return this.poll.exists && this.poll.isDraft();
  }
  markDirty(value) {
    if (value === void 0) {
      value = true;
    }
    this.dirty = value;
  }
  async save(data) {
    this.loading = true;
    m.redraw();
    try {
      this.poll = await this.poll.save(data);

      // Options are sent as attributes because new PollOptions cannot be
      // saved as relationships yet; they would linger on the model otherwise.
      delete this.poll.data.attributes.options;
    } finally {
      this.loading = false;
      m.redraw();
    }
  }
  async delete() {
    this.loading = true;
    m.redraw();
    try {
      await this.poll.delete();
      this.deleting = true;
    } finally {
      this.loading = false;
      m.redraw();
    }
  }
}
flarum.reg.add('fof-polls', 'forum/states/PollFormState', PollFormState);

/***/ },

/***/ "./src/forum/states/PollGroupFormState.ts"
/*!************************************************!*\
  !*** ./src/forum/states/PollGroupFormState.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollGroupFormState)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_PollGroupControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/PollGroupControls */ "./src/forum/utils/PollGroupControls.tsx");


class PollGroupFormState {
  loading = false;
  deleting = false;
  static createNewPollGroup() {
    const pollGroup = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.createRecord('poll_groups');
    pollGroup.pushAttributes({
      name: ''
    });
    return pollGroup;
  }
  constructor(pollGroup) {
    this.pollGroup = pollGroup || PollGroupFormState.createNewPollGroup();
  }
  async save(data) {
    this.loading = true;
    m.redraw();
    try {
      this.pollGroup = await this.pollGroup.save(data);
    } finally {
      this.loading = false;
      m.redraw();
    }
  }
  async delete() {
    this.loading = true;
    m.redraw();
    try {
      await _utils_PollGroupControls__WEBPACK_IMPORTED_MODULE_1__["default"].deleteAction(this.pollGroup);
      this.deleting = !this.pollGroup.exists;
    } finally {
      this.loading = false;
      m.redraw();
    }
  }
}
flarum.reg.add('fof-polls', 'forum/states/PollGroupFormState', PollGroupFormState);

/***/ },

/***/ "./src/forum/states/PollGroupListState.ts"
/*!************************************************!*\
  !*** ./src/forum/states/PollGroupListState.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollGroupListState)
/* harmony export */ });
/* harmony import */ var _AbstractPollListState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractPollListState */ "./src/forum/states/AbstractPollListState.ts");

const DELETED = 'pollgroup.deleted';
class PollGroupListState extends _AbstractPollListState__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static notifyDeleted(pollGroup) {
    _AbstractPollListState__WEBPACK_IMPORTED_MODULE_0__.pollListEmitter.emit(DELETED, pollGroup);
  }
  get type() {
    return 'poll_groups';
  }
  deletedEvent() {
    return DELETED;
  }
  defaultSort() {
    return 'newest';
  }
  includes() {
    return ['polls'];
  }
  sortMap() {
    const map = {};
    if (this.params.q) map.relevance = '';
    map.newest = '-createdAt';
    map.oldest = 'createdAt';
    return map;
  }
}
flarum.reg.add('fof-polls', 'forum/states/PollGroupListState', PollGroupListState);

/***/ },

/***/ "./src/forum/states/PollListState.ts"
/*!*******************************************!*\
  !*** ./src/forum/states/PollListState.ts ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollListState)
/* harmony export */ });
/* harmony import */ var _AbstractPollListState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractPollListState */ "./src/forum/states/AbstractPollListState.ts");

const DELETED = 'poll.deleted';
const SORTS = {
  newest: '-createdAt',
  oldest: 'createdAt',
  most_voted: '-voteCount',
  least_voted: 'voteCount'
};
class PollListState extends _AbstractPollListState__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static notifyDeleted(poll) {
    _AbstractPollListState__WEBPACK_IMPORTED_MODULE_0__.pollListEmitter.emit(DELETED, poll);
  }
  static sortKey(apiValue) {
    return Object.keys(SORTS).find(key => SORTS[key] === apiValue) || 'newest';
  }
  get type() {
    return 'polls';
  }
  deletedEvent() {
    return DELETED;
  }
  defaultSort() {
    return 'newest';
  }
  includes() {
    return ['options', 'votes'];
  }
  sortMap() {
    return this.params.q ? {
      relevance: '',
      ...SORTS
    } : {
      ...SORTS
    };
  }
}
flarum.reg.add('fof-polls', 'forum/states/PollListState', PollListState);

/***/ },

/***/ "./src/forum/states/PollState.ts"
/*!***************************************!*\
  !*** ./src/forum/states/PollState.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PollState)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);

class PollState {
  loadingOptions = false;
  pendingSubmit = false;
  pendingOptions = null;
  constructor(poll, post) {
    this.poll = poll;
    this.post = post;
    this.init();
  }
  init() {}

  // The server omits the count entirely while votes are hidden, so its
  // absence is the permission check.
  get canSeeVoteCount() {
    return typeof this.poll.voteCount() === 'number';
  }
  get useSubmitUI() {
    return !this.poll.canChangeVote() && this.poll.allowMultipleVotes();
  }
  canSelect() {
    if (this.loadingOptions || this.poll.hasEnded()) return false;

    // Guests get a live control: clicking it asks them to log in.
    if (!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().session).user) return true;
    if (!this.poll.canVote()) return false;
    return !this.hasVoted() || this.poll.canChangeVote();
  }
  isShowResult() {
    return this.poll.hasEnded() || this.canSeeVoteCount && !!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().session).user && this.hasVoted();
  }
  hasVoted() {
    return this.poll.myVotes().length > 0;
  }
  overallVoteCount() {
    return this.poll.voteCount();
  }
  hasVotedFor(option) {
    return this.pendingOptions ? this.pendingOptions.has(option.id()) : this.poll.myVotes().some(vote => vote.option() === option);
  }
  getMaxVotes() {
    const poll = this.poll;
    let maxVotes = poll.allowMultipleVotes() ? poll.maxVotes() : 1;
    if (maxVotes === 0) maxVotes = poll.options().length;
    return maxVotes;
  }
  showButton() {
    return this.useSubmitUI && this.pendingSubmit;
  }
  changeVote(option, evt) {
    const target = evt.target;
    if (!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().session).user) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(() => flarum.reg.asyncModuleImport('flarum/forum/components/LogInModal'));
      target.checked = false;
      return;
    }
    const optionIds = this.pendingOptions || new Set(this.poll.myVotes().map(v => v.option().id()));
    const isUnvoting = optionIds.delete(option.id());
    if (!this.poll.allowMultipleVotes()) {
      optionIds.clear();
    }
    if (!isUnvoting) {
      optionIds.add(option.id());
    }
    this.pendingOptions = optionIds.size ? optionIds : null;
    this.pendingSubmit = !!this.pendingOptions;
    if (this.useSubmitUI) {
      m.redraw();
      return;
    }
    this.submit(optionIds, () => {
      this.pendingOptions = null;
      this.pendingSubmit = false;
    }, () => target.checked = isUnvoting);
  }
  hasSelectedOptions() {
    return this.pendingSubmit;
  }
  onsubmit() {
    return this.submit(this.pendingOptions, () => {
      this.pendingOptions = null;
      this.pendingSubmit = false;
    });
  }
  submit(optionIds, cb, onerror) {
    if (onerror === void 0) {
      onerror = null;
    }
    this.loadingOptions = true;
    m.redraw();
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().request({
      method: 'PATCH',
      url: `${flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('apiUrl')}/polls/${this.poll.id()}/votes`,
      body: {
        data: {
          optionIds: Array.from(optionIds)
        }
      }
    }).then(res => {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.pushPayload(res);
      cb?.();
    }).catch(err => {
      onerror?.(err);
    }).finally(() => {
      this.loadingOptions = false;
      m.redraw();
    });
  }
  showVoters = () => {
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(() => __webpack_require__.e(/*! import() | forum/components/ListVotersModal */ "forum/components/ListVotersModal").then(() => (__webpack_require__(/*! ../components/ListVotersModal */ "./src/forum/components/ListVotersModal.tsx"))), {
      poll: this.poll,
      post: this.post
    });
  };
}
flarum.reg.add('fof-polls', 'forum/states/PollState', PollState);flarum.reg.addChunkModule('forum/components/ListVotersModal', './src/forum/components/ListVotersModal.tsx', 'fof-polls', 'forum/components/ListVotersModal');flarum.reg.addChunkModule('forum/components/ListVotersModal', './src/forum/components/ListVotersModal.tsx', 'fof-polls', 'forum/components/ListVotersModal');flarum.reg.addChunkModule('forum/components/ListVotersModal', './src/forum/components/ListVotersModal.tsx', 'fof-polls', 'forum/components/ListVotersModal');flarum.reg.addChunkModule('forum/components/ListVotersModal', './src/forum/components/ListVotersModal.tsx', 'fof-polls', 'forum/components/ListVotersModal');flarum.reg.addChunkModule('forum/components/ListVotersModal', './src/forum/components/ListVotersModal.tsx', 'fof-polls', 'forum/components/ListVotersModal');flarum.reg.addChunkModule('forum/components/ListVotersModal', './src/forum/components/ListVotersModal.tsx', 'fof-polls', 'forum/components/ListVotersModal');flarum.reg.addChunkModule('forum/components/ListVotersModal', './src/forum/components/ListVotersModal.tsx', 'fof-polls', 'forum/components/ListVotersModal');flarum.reg.addChunkModule('forum/components/ListVotersModal', './src/forum/components/ListVotersModal.tsx', 'fof-polls', 'forum/components/ListVotersModal');flarum.reg.addChunkModule('forum/components/ListVotersModal', './src/forum/components/ListVotersModal.tsx', 'fof-polls', 'forum/components/ListVotersModal');flarum.reg.addChunkModule('forum/components/ListVotersModal', './src/forum/components/ListVotersModal.tsx', 'fof-polls', 'forum/components/ListVotersModal');flarum.reg.addChunkModule('forum/components/ListVotersModal', './src/forum/components/ListVotersModal.tsx', 'fof-polls', 'forum/components/ListVotersModal');flarum.reg.addChunkModule('forum/components/ListVotersModal', './src/forum/components/ListVotersModal.tsx', 'fof-polls', 'forum/components/ListVotersModal');flarum.reg.addChunkModule('forum/components/ListVotersModal', './src/forum/components/ListVotersModal.tsx', 'fof-polls', 'forum/components/ListVotersModal');flarum.reg.addChunkModule('forum/components/ListVotersModal', './src/forum/components/ListVotersModal.tsx', 'fof-polls', 'forum/components/ListVotersModal');flarum.reg.addChunkModule('forum/components/ListVotersModal', './src/forum/components/ListVotersModal.tsx', 'fof-polls', 'forum/components/ListVotersModal');flarum.reg.addChunkModule('forum/components/ListVotersModal', './src/forum/components/ListVotersModal.tsx', 'fof-polls', 'forum/components/ListVotersModal');flarum.reg.addChunkModule('forum/components/ListVotersModal', './src/forum/components/ListVotersModal.tsx', 'fof-polls', 'forum/components/ListVotersModal');flarum.reg.addChunkModule('forum/components/ListVotersModal', './src/forum/components/ListVotersModal.tsx', 'fof-polls', 'forum/components/ListVotersModal');

/***/ },

/***/ "./src/forum/utils/PollControls.tsx"
/*!******************************************!*\
  !*** ./src/forum/utils/PollControls.tsx ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Separator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Separator */ "flarum/common/components/Separator");
/* harmony import */ var flarum_common_components_Separator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Separator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ComposePollPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ComposePollPage */ "./src/forum/components/ComposePollPage.tsx");
/* harmony import */ var _components_PollsPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PollsPage */ "./src/forum/components/PollsPage.tsx");
/* harmony import */ var _components_PollViewPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PollViewPage */ "./src/forum/components/PollViewPage.tsx");
/* harmony import */ var _states_PollListState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../states/PollListState */ "./src/forum/states/PollListState.ts");
/* harmony import */ var _components_SchedulePollModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SchedulePollModal */ "./src/forum/components/SchedulePollModal.tsx");










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  controls(poll, context) {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    const sections = ['poll', 'moderation', 'destructive'];
    sections.forEach(section => {
      const controls = this[`${section}Controls`](poll, context).toArray();
      if (!controls.length) return;
      controls.forEach(item => items.add(item.itemName, item));
      items.add(`${section}Separator`, m((flarum_common_components_Separator__WEBPACK_IMPORTED_MODULE_2___default()), null));
    });
    return items;
  },
  pollControls(poll, context) {
    return new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
  },
  moderationControls(poll, context) {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    if (poll.canEdit()) {
      items.add('edit', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
        icon: "fas fa-pencil-alt",
        onclick: this.editAction.bind(this, poll)
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_controls.edit_label')));
    }
    if (poll.canPublish() && poll.isDraft()) {
      items.add('publish', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
        icon: "fas fa-paper-plane",
        onclick: () => this.publishAction(poll)
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_controls.publish_label')));
      items.add('schedulePublish', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
        icon: "fas fa-clock",
        onclick: () => this.scheduleAction(poll)
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(poll.isScheduled() ? 'fof-polls.forum.poll_controls.edit_schedule_publish_label' : 'fof-polls.forum.poll_controls.schedule_publish_label')));
      if (poll.isScheduled()) {
        items.add('cancelSchedule', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
          icon: "fas fa-times",
          onclick: () => this.cancelScheduleAction(poll)
        }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_controls.cancel_schedule_label')));
      }
    }
    return items;
  },
  destructiveControls(poll, context) {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    if (poll.canUnpublish()) {
      items.add('unpublish', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
        icon: "fas fa-undo",
        onclick: () => this.unpublishAction(poll)
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_controls.unpublish_label')));
    }
    if (poll.canDelete()) {
      items.add('delete', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
        icon: "far fa-trash-alt",
        onclick: this.deleteAction.bind(this, poll)
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_controls.delete_label')));
    }
    return items;
  },
  editAction(poll) {
    m.route.set(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('fof.polls.composer', {
      id: poll.id()
    }));
  },
  scheduleAction(poll) {
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(_components_SchedulePollModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
      poll,
      form: null,
      onSuccess: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().current.matches(_components_PollsPage__WEBPACK_IMPORTED_MODULE_6__["default"]) ? () => m.redraw() : () => m.route.set(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('fof.polls.view', {
        id: poll.id()
      }))
    });
  },
  async deleteAction(poll) {
    if (!confirm(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_controls.delete_confirmation')))) {
      return;
    }
    return poll.delete().then(() => {
      this.alert('success', 'fof-polls.forum.poll_controls.delete_success_message');
      if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().current.matches(_components_ComposePollPage__WEBPACK_IMPORTED_MODULE_5__["default"]) || flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().current.matches(_components_PollViewPage__WEBPACK_IMPORTED_MODULE_7__["default"])) {
        m.route.set(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('fof.polls.list'));
      } else {
        _states_PollListState__WEBPACK_IMPORTED_MODULE_8__["default"].notifyDeleted(poll);
      }
    }).catch(() => this.alert('error', 'fof-polls.forum.poll_controls.delete_error_message'));
  },
  async publishAction(poll) {
    try {
      await poll.publish({}, error => this.errorAlert(error));
      this.alert('success', 'fof-polls.forum.poll_controls.publish_success');
      m.redraw();
    } catch {
      // errorAlert already reported it.
    }
  },
  async cancelScheduleAction(poll) {
    try {
      await poll.publish({
        scheduledFor: null
      }, error => this.errorAlert(error));
      this.alert('success', 'fof-polls.forum.poll_controls.cancel_schedule_success');
      m.redraw();
    } catch {
      // errorAlert already reported it.
    }
  },
  async unpublishAction(poll) {
    if (!confirm(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_controls.unpublish_confirmation')))) return;
    try {
      await poll.unpublish(() => flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().alerts.show({
        type: 'error'
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_controls.unpublish_error_has_votes')));
      this.alert('success', 'fof-polls.forum.poll_controls.unpublish_success');
      m.redraw();
    } catch {
      // The error handler above already reported it.
    }
  },
  // Successes are transient confirmations; errors stay until dismissed.
  alert(type, key) {
    const id = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().alerts.show({
      type
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(key));
    if (type === 'success') setTimeout(() => flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().alerts.dismiss(id), 10000);
  },
  errorAlert(error) {
    const detail = error?.response?.errors?.[0]?.detail;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().alerts.show({
      type: 'error'
    }, detail ?? flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_form.error'));
  }
});

/***/ },

/***/ "./src/forum/utils/PollGroupControls.tsx"
/*!***********************************************!*\
  !*** ./src/forum/utils/PollGroupControls.tsx ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Separator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Separator */ "flarum/common/components/Separator");
/* harmony import */ var flarum_common_components_Separator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Separator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ComposePollGroupPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ComposePollGroupPage */ "./src/forum/components/ComposePollGroupPage.tsx");
/* harmony import */ var _states_PollGroupListState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../states/PollGroupListState */ "./src/forum/states/PollGroupListState.ts");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  controls(pollGroup, context) {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    const sections = ['moderation', 'destructive'];
    sections.forEach(section => {
      const controls = this[`${section}Controls`](pollGroup, context).toArray();
      if (!controls.length) return;
      controls.forEach(item => items.add(item.itemName, item));
      items.add(`${section}Separator`, m((flarum_common_components_Separator__WEBPACK_IMPORTED_MODULE_2___default()), null));
    });
    return items;
  },
  moderationControls(pollGroup, context) {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    if (pollGroup.canEdit()) {
      items.add('edit', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
        icon: "fas fa-pencil-alt",
        onclick: this.editAction.bind(this, pollGroup)
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_groups.controls.edit_label')));
      items.add('addPoll', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
        icon: "fas fa-plus",
        onclick: this.addPoll.bind(this, pollGroup)
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_groups.controls.add_poll_label')));
      items.add('view', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
        icon: "far fa-arrow-up-right-from-square",
        onclick: () => m.route.set(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('fof.polls.groups.view', {
          id: pollGroup.id()
        }))
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_groups.controls.view_label')));
    }
    return items;
  },
  destructiveControls(pollGroup, context) {
    const items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    if (pollGroup.canDelete()) {
      items.add('delete', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
        icon: "far fa-trash-alt",
        onclick: this.deleteAction.bind(this, pollGroup)
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_groups.controls.delete_label')));
    }
    return items;
  },
  editAction(pollGroup) {
    m.route.set(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('fof.polls.groups.composer', {
      id: pollGroup.id()
    }));
  },
  async deleteAction(pollGroup) {
    if (!confirm(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('fof-polls.forum.poll_groups.controls.delete_confirmation')))) {
      return;
    }
    return pollGroup.delete().then(() => {
      this.alert('success', 'fof-polls.forum.poll_groups.controls.delete_success_message');
      if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().current.matches(_components_ComposePollGroupPage__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: pollGroup.id()
      })) {
        m.route.set(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('fof.polls.groups.list'));
      } else {
        _states_PollGroupListState__WEBPACK_IMPORTED_MODULE_6__["default"].notifyDeleted(pollGroup);
      }
    }).catch(() => this.alert('error', 'fof-polls.forum.poll_groups.controls.delete_error_message'));
  },
  addPoll(pollGroup) {
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(() => __webpack_require__.e(/*! import() | forum/components/CreatePollModal */ "forum/components/CreatePollModal").then(() => (__webpack_require__(/*! ../components/CreatePollModal */ "./src/forum/components/CreatePollModal.tsx"))), {
      onsubmit: data => flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.createRecord('polls').save({
        ...data,
        relationships: {
          pollGroup
        }
      }, {
        data: {
          include: 'options,myVotes,myVotes.option'
        }
      }).then(poll => {
        pollGroup.rawRelationship('polls')?.push?.({
          type: 'polls',
          id: poll.id()
        });
        m.redraw();
      })
    });
  },
  alert(type, key) {
    const id = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().alerts.show({
      type
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(key));
    if (type === 'success') setTimeout(() => flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().alerts.dismiss(id), 10000);
  }
});

/***/ },

/***/ "flarum/common/Component"
/*!*************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/Component')" ***!
  \*************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/Component');

/***/ },

/***/ "flarum/common/Model"
/*!*********************************************************!*\
  !*** external "flarum.reg.get('core', 'common/Model')" ***!
  \*********************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/Model');

/***/ },

/***/ "flarum/common/components/Avatar"
/*!*********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Avatar')" ***!
  \*********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Avatar');

/***/ },

/***/ "flarum/common/components/Badge"
/*!********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Badge')" ***!
  \********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Badge');

/***/ },

/***/ "flarum/common/components/Button"
/*!*********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Button')" ***!
  \*********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Button');

/***/ },

/***/ "flarum/common/components/Dropdown"
/*!***********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Dropdown')" ***!
  \***********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Dropdown');

/***/ },

/***/ "flarum/common/components/FieldSet"
/*!***********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/FieldSet')" ***!
  \***********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/FieldSet');

/***/ },

/***/ "flarum/common/components/Form"
/*!*******************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Form')" ***!
  \*******************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Form');

/***/ },

/***/ "flarum/common/components/FormGroup"
/*!************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/FormGroup')" ***!
  \************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/FormGroup');

/***/ },

/***/ "flarum/common/components/FormModal"
/*!************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/FormModal')" ***!
  \************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/FormModal');

/***/ },

/***/ "flarum/common/components/Icon"
/*!*******************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Icon')" ***!
  \*******************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Icon');

/***/ },

/***/ "flarum/common/components/Link"
/*!*******************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Link')" ***!
  \*******************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Link');

/***/ },

/***/ "flarum/common/components/LinkButton"
/*!*************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/LinkButton')" ***!
  \*************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/LinkButton');

/***/ },

/***/ "flarum/common/components/LoadingIndicator"
/*!*******************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/LoadingIndicator')" ***!
  \*******************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/LoadingIndicator');

/***/ },

/***/ "flarum/common/components/Modal"
/*!********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Modal')" ***!
  \********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Modal');

/***/ },

/***/ "flarum/common/components/Page"
/*!*******************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Page')" ***!
  \*******************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Page');

/***/ },

/***/ "flarum/common/components/Pill"
/*!*******************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Pill')" ***!
  \*******************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Pill');

/***/ },

/***/ "flarum/common/components/Placeholder"
/*!**************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Placeholder')" ***!
  \**************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Placeholder');

/***/ },

/***/ "flarum/common/components/SelectDropdown"
/*!*****************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/SelectDropdown')" ***!
  \*****************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/SelectDropdown');

/***/ },

/***/ "flarum/common/components/Separator"
/*!************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Separator')" ***!
  \************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Separator');

/***/ },

/***/ "flarum/common/components/Tooltip"
/*!**********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Tooltip')" ***!
  \**********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Tooltip');

/***/ },

/***/ "flarum/common/extend"
/*!**********************************************************!*\
  !*** external "flarum.reg.get('core', 'common/extend')" ***!
  \**********************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/extend');

/***/ },

/***/ "flarum/common/extenders"
/*!*************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/extenders')" ***!
  \*************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/extenders');

/***/ },

/***/ "flarum/common/helpers/highlight"
/*!*********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/helpers/highlight')" ***!
  \*********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/helpers/highlight');

/***/ },

/***/ "flarum/common/helpers/listItems"
/*!*********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/helpers/listItems')" ***!
  \*********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/helpers/listItems');

/***/ },

/***/ "flarum/common/helpers/username"
/*!********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/helpers/username')" ***!
  \********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/helpers/username');

/***/ },

/***/ "flarum/common/models/Discussion"
/*!*********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/models/Discussion')" ***!
  \*********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/models/Discussion');

/***/ },

/***/ "flarum/common/models/Forum"
/*!****************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/models/Forum')" ***!
  \****************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/models/Forum');

/***/ },

/***/ "flarum/common/models/Post"
/*!***************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/models/Post')" ***!
  \***************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/models/Post');

/***/ },

/***/ "flarum/common/states/PaginatedListState"
/*!*****************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/states/PaginatedListState')" ***!
  \*****************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/states/PaginatedListState');

/***/ },

/***/ "flarum/common/utils/EventEmitter"
/*!**********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/utils/EventEmitter')" ***!
  \**********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/utils/EventEmitter');

/***/ },

/***/ "flarum/common/utils/ItemList"
/*!******************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/utils/ItemList')" ***!
  \******************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/utils/ItemList');

/***/ },

/***/ "flarum/common/utils/RequestError"
/*!**********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/utils/RequestError')" ***!
  \**********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/utils/RequestError');

/***/ },

/***/ "flarum/common/utils/Stream"
/*!****************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/utils/Stream')" ***!
  \****************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/utils/Stream');

/***/ },

/***/ "flarum/common/utils/SubtreeRetainer"
/*!*************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/utils/SubtreeRetainer')" ***!
  \*************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/utils/SubtreeRetainer');

/***/ },

/***/ "flarum/common/utils/abbreviateNumber"
/*!**************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/utils/abbreviateNumber')" ***!
  \**************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/utils/abbreviateNumber');

/***/ },

/***/ "flarum/common/utils/classList"
/*!*******************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/utils/classList')" ***!
  \*******************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/utils/classList');

/***/ },

/***/ "flarum/common/utils/computed"
/*!******************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/utils/computed')" ***!
  \******************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/utils/computed');

/***/ },

/***/ "flarum/common/utils/extractText"
/*!*********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/utils/extractText')" ***!
  \*********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/utils/extractText');

/***/ },

/***/ "flarum/forum/app"
/*!******************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/app')" ***!
  \******************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/app');

/***/ },

/***/ "flarum/forum/components/CommentPost"
/*!*************************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/CommentPost')" ***!
  \*************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/CommentPost');

/***/ },

/***/ "flarum/forum/components/DiscussionList"
/*!****************************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/DiscussionList')" ***!
  \****************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/DiscussionList');

/***/ },

/***/ "flarum/forum/components/DiscussionPage"
/*!****************************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/DiscussionPage')" ***!
  \****************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/DiscussionPage');

/***/ },

/***/ "flarum/forum/components/Hero"
/*!******************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/Hero')" ***!
  \******************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/Hero');

/***/ },

/***/ "flarum/forum/components/IndexSidebar"
/*!**************************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/IndexSidebar')" ***!
  \**************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/IndexSidebar');

/***/ },

/***/ "flarum/forum/components/PageStructure"
/*!***************************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/PageStructure')" ***!
  \***************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/PageStructure');

/***/ },

/***/ "flarum/forum/utils/PostControls"
/*!*********************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/utils/PostControls')" ***!
  \*********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/utils/PostControls');

/***/ },

/***/ "flarum/forum/utils/slidable"
/*!*****************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/utils/slidable')" ***!
  \*****************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/utils/slidable');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		flarum.reg._webpack_runtimes["fof-polls"] ||= __webpack_require__;// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	__webpack_require__.f = {};
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = (chunkId) => {
/******/ 		return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 			__webpack_require__.f[key](chunkId, promises);
/******/ 			return promises;
/******/ 		}, []));
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.u = (chunkId) => (chunkId + ".js");
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		const inProgress = {};
/******/ 		const dataWebpackPrefix = "module.exports:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			let script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					const s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			const onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				const doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode?.removeChild(script);
/******/ 				doneFns?.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			const timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	__webpack_require__.f.compat = (chunkId, promises) => {
/******/ 	
/******/ 		const originalLoadChunk = __webpack_require__.l;
/******/ 		__webpack_require__.l = flarum.reg.loadChunk.bind(flarum.reg, originalLoadChunk);
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"forum": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				let installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							const promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							const error = new Error();
/******/ 							const loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										const errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										const realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										error.event = event;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(__webpack_require__.p + __webpack_require__.u(chunkId), loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		const webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			let [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		const chunkLoadingGlobal = self["webpackChunkmodule_exports"] = self["webpackChunkmodule_exports"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _src_forum__WEBPACK_IMPORTED_MODULE_0__.extend)
/* harmony export */ });
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.ts");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map