"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useCallback = _React.useCallback;
var T = {
  bg: "#F0F1F6",
  card: "#FFFFFF",
  brand: "#E63946",
  green: "#2DC653",
  yellow: "#FFCC00",
  navy: "#1D3557",
  text: "#1D1D1F",
  sub: "#86868B",
  border: "#E5E5EA",
  inputBg: "#F8F8FA"
};
var SB_URL = "https://syakniwyvcfdqsrwsalk.supabase.co";
var SB_KEY = "sb_publishable_MRMHqVQ-key1c5kf7UOLUA_rwyu85BI";
var VAPID_PUBLIC = "BG6saRvz-Eh318LO9cY2w5zSN7sAdDYekBYxqPdrrQ671pN_vUzBsV9iRFVOnO37rQ81o-cYoOuTCwmo--CQnEk";
var api = {
  h: function h(tok) {
    return {
      'apikey': SB_KEY,
      'Authorization': "Bearer ".concat(tok || SB_KEY),
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    };
  },
  get: function get(p, tok) {
    var _this = this;
    return _asyncToGenerator(_regenerator().m(function _callee() {
      var r, _t, _t2, _t3;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return fetch("".concat(SB_URL, "/rest/v1/").concat(p), {
              headers: _this.h(tok)
            });
          case 1:
            r = _context.v;
            if (r.ok) {
              _context.n = 4;
              break;
            }
            _t = Error;
            _context.n = 2;
            return r.json();
          case 2:
            _t2 = _context.v.message;
            if (_t2) {
              _context.n = 3;
              break;
            }
            _t2 = 'Erro';
          case 3:
            _t3 = _t2;
            throw new _t(_t3);
          case 4:
            return _context.a(2, r.json());
        }
      }, _callee);
    }))();
  },
  post: function post(p, b, tok) {
    var _this2 = this;
    return _asyncToGenerator(_regenerator().m(function _callee2() {
      var r, _t4, _t5, _t6;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return fetch("".concat(SB_URL, "/rest/v1/").concat(p), {
              method: 'POST',
              headers: _this2.h(tok),
              body: JSON.stringify(b)
            });
          case 1:
            r = _context2.v;
            if (r.ok) {
              _context2.n = 4;
              break;
            }
            _t4 = Error;
            _context2.n = 2;
            return r.json();
          case 2:
            _t5 = _context2.v.message;
            if (_t5) {
              _context2.n = 3;
              break;
            }
            _t5 = 'Erro';
          case 3:
            _t6 = _t5;
            throw new _t4(_t6);
          case 4:
            return _context2.a(2, r.json());
        }
      }, _callee2);
    }))();
  },
  insert: function insert(p, b, tok) {
    var _this3 = this;
    return _asyncToGenerator(_regenerator().m(function _callee3() {
      var r, _t7, _t8, _t9;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.n = 1;
            return fetch("".concat(SB_URL, "/rest/v1/").concat(p), {
              method: 'POST',
              headers: _objectSpread(_objectSpread({}, _this3.h(tok)), {}, {
                'Prefer': 'return=minimal'
              }),
              body: JSON.stringify(b)
            });
          case 1:
            r = _context3.v;
            if (r.ok) {
              _context3.n = 4;
              break;
            }
            _t7 = Error;
            _context3.n = 2;
            return r.json();
          case 2:
            _t8 = _context3.v.message;
            if (_t8) {
              _context3.n = 3;
              break;
            }
            _t8 = 'Erro';
          case 3:
            _t9 = _t8;
            throw new _t7(_t9);
          case 4:
            return _context3.a(2, r.status);
        }
      }, _callee3);
    }))();
  },
  patch: function patch(p, b, tok) {
    var _this4 = this;
    return _asyncToGenerator(_regenerator().m(function _callee4() {
      var r, _t0, _t1, _t10;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _context4.n = 1;
            return fetch("".concat(SB_URL, "/rest/v1/").concat(p), {
              method: 'PATCH',
              headers: _this4.h(tok),
              body: JSON.stringify(b)
            });
          case 1:
            r = _context4.v;
            if (r.ok) {
              _context4.n = 4;
              break;
            }
            _t0 = Error;
            _context4.n = 2;
            return r.json();
          case 2:
            _t1 = _context4.v.message;
            if (_t1) {
              _context4.n = 3;
              break;
            }
            _t1 = 'Erro';
          case 3:
            _t10 = _t1;
            throw new _t0(_t10);
          case 4:
            return _context4.a(2, r.json());
        }
      }, _callee4);
    }))();
  },
  del: function del(p, tok) {
    var _this5 = this;
    return _asyncToGenerator(_regenerator().m(function _callee5() {
      var r, _t11, _t12, _t13;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _context5.n = 1;
            return fetch("".concat(SB_URL, "/rest/v1/").concat(p), {
              method: 'DELETE',
              headers: _this5.h(tok)
            });
          case 1:
            r = _context5.v;
            if (r.ok) {
              _context5.n = 4;
              break;
            }
            _t11 = Error;
            _context5.n = 2;
            return r.json();
          case 2:
            _t12 = _context5.v.message;
            if (_t12) {
              _context5.n = 3;
              break;
            }
            _t12 = 'Erro';
          case 3:
            _t13 = _t12;
            throw new _t11(_t13);
          case 4:
            return _context5.a(2);
        }
      }, _callee5);
    }))();
  },
  upsert: function upsert(p, b, tok) {
    var _this6 = this;
    return _asyncToGenerator(_regenerator().m(function _callee6() {
      var r, _t14, _t15, _t16;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _context6.n = 1;
            return fetch("".concat(SB_URL, "/rest/v1/").concat(p), {
              method: 'POST',
              headers: _objectSpread(_objectSpread({}, _this6.h(tok)), {}, {
                'Prefer': 'resolution=merge-duplicates,return=representation'
              }),
              body: JSON.stringify(b)
            });
          case 1:
            r = _context6.v;
            if (r.ok) {
              _context6.n = 4;
              break;
            }
            _t14 = Error;
            _context6.n = 2;
            return r.json();
          case 2:
            _t15 = _context6.v.message;
            if (_t15) {
              _context6.n = 3;
              break;
            }
            _t15 = 'Erro';
          case 3:
            _t16 = _t15;
            throw new _t14(_t16);
          case 4:
            return _context6.a(2, r.json());
        }
      }, _callee6);
    }))();
  },
  signIn: function signIn(email, password) {
    return _asyncToGenerator(_regenerator().m(function _callee7() {
      var r, d;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            _context7.n = 1;
            return fetch("".concat(SB_URL, "/auth/v1/token?grant_type=password"), {
              method: 'POST',
              headers: {
                'apikey': SB_KEY,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: email,
                password: password
              })
            });
          case 1:
            r = _context7.v;
            _context7.n = 2;
            return r.json();
          case 2:
            d = _context7.v;
            if (!d.error) {
              _context7.n = 3;
              break;
            }
            throw new Error(d.error_description || d.error);
          case 3:
            return _context7.a(2, d);
        }
      }, _callee7);
    }))();
  },
  signUp: function signUp(email, password, name) {
    return _asyncToGenerator(_regenerator().m(function _callee8() {
      var r, d;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            _context8.n = 1;
            return fetch("".concat(SB_URL, "/auth/v1/signup"), {
              method: 'POST',
              headers: {
                'apikey': SB_KEY,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: email,
                password: password,
                data: {
                  name: name
                }
              })
            });
          case 1:
            r = _context8.v;
            _context8.n = 2;
            return r.json();
          case 2:
            d = _context8.v;
            if (!d.error) {
              _context8.n = 3;
              break;
            }
            throw new Error(d.error_description || d.msg || 'Erro');
          case 3:
            return _context8.a(2, d);
        }
      }, _callee8);
    }))();
  },
  resetPassword: function resetPassword(email) {
    return _asyncToGenerator(_regenerator().m(function _callee9() {
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            _context9.n = 1;
            return fetch("".concat(SB_URL, "/auth/v1/recover"), {
              method: 'POST',
              headers: {
                'apikey': SB_KEY,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: email
              })
            });
          case 1:
            return _context9.a(2);
        }
      }, _callee9);
    }))();
  },
  updatePassword: function updatePassword(newPass, accessToken) {
    return _asyncToGenerator(_regenerator().m(function _callee0() {
      var r, d;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            _context0.n = 1;
            return fetch("".concat(SB_URL, "/auth/v1/user"), {
              method: 'PUT',
              headers: {
                'apikey': SB_KEY,
                'Authorization': "Bearer ".concat(accessToken),
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                password: newPass
              })
            });
          case 1:
            r = _context0.v;
            _context0.n = 2;
            return r.json();
          case 2:
            d = _context0.v;
            if (!d.error) {
              _context0.n = 3;
              break;
            }
            throw new Error(d.error_description || 'Erro');
          case 3:
            return _context0.a(2, d);
        }
      }, _callee0);
    }))();
  }
};
var mk = function mk(s) {
  return s ? s.split(' ').map(function (w) {
    return w[0];
  }).join('').slice(0, 2).toUpperCase() : '??';
};
var aTeam = function aTeam(t) {
  return {
    id: t.id,
    name: t.name,
    emoji: t.emoji || '⚽',
    color: t.color || '#1D3557',
    season: t.season || '2025/26',
    inviteCode: t.invite_code,
    country: t.country,
    sport: t.sport,
    currency: t.currency,
    city: t.city,
    postal: t.postal,
    createdBy: t.created_by
  };
};
var aMember = function aMember(m) {
  var _m$profiles, _m$profiles2, _m$profiles3, _m$profiles4, _m$profiles5;
  return {
    id: m.id,
    teamId: m.team_id,
    userId: m.user_id,
    role: m.role,
    name: ((_m$profiles = m.profiles) === null || _m$profiles === void 0 ? void 0 : _m$profiles.name) || 'Utilizador',
    initials: mk(((_m$profiles2 = m.profiles) === null || _m$profiles2 === void 0 ? void 0 : _m$profiles2.name) || 'U'),
    position: m.position || ((_m$profiles3 = m.profiles) === null || _m$profiles3 === void 0 ? void 0 : _m$profiles3.position) || 'Jogador',
    phone: ((_m$profiles4 = m.profiles) === null || _m$profiles4 === void 0 ? void 0 : _m$profiles4.phone) || '',
    birthday: ((_m$profiles5 = m.profiles) === null || _m$profiles5 === void 0 ? void 0 : _m$profiles5.birthday) || ''
  };
};
var aFine = function aFine(f) {
  var _f$created_at;
  return {
    id: f.id,
    teamId: f.team_id,
    memberId: f.member_id,
    amount: Number(f.amount),
    reason: f.reason || '',
    emoji: f.emoji || '🟥',
    paid: f.paid,
    date: ((_f$created_at = f.created_at) === null || _f$created_at === void 0 ? void 0 : _f$created_at.split('T')[0]) || ''
  };
};
var aFineType = function aFineType(ft) {
  return {
    id: ft.id,
    teamId: ft.team_id,
    name: ft.name,
    amount: Number(ft.amount),
    emoji: ft.emoji || '🟥'
  };
};
var aExpense = function aExpense(e) {
  var _e$created_at;
  return {
    id: e.id,
    teamId: e.team_id,
    description: e.description,
    amount: Number(e.amount),
    date: ((_e$created_at = e.created_at) === null || _e$created_at === void 0 ? void 0 : _e$created_at.split('T')[0]) || ''
  };
};
var aTraining = function aTraining(t) {
  return {
    id: t.id,
    teamId: t.team_id,
    type: t.type || 'treino',
    date: t.date || '',
    time: (t.time || '').slice(0, 5),
    location: t.location || '',
    notes: t.notes || '',
    recurring: t.recurring || false,
    days: t.days || [],
    opponent: t.opponent || '',
    homeAway: t.home_away || 'casa',
    squad: t.squad || [],
    createdBy: t.created_by
  };
};
var DAYS_PT = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
var isPast = function isPast(d) {
  return new Date(d + "T23:59:59") < new Date();
};
var fmtDate = function fmtDate(d) {
  if (!d) return "—";
  var dt = new Date(d + "T00:00:00");
  return dt.toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
};
var age = function age(d) {
  return d ? Math.floor((new Date() - new Date(d)) / (365.25 * 24 * 3600 * 1000)) : null;
};
var Avatar = function Avatar(_ref) {
  var initials = _ref.initials,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? T.navy : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 38 : _ref$size;
  return React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: size / 2,
      background: color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontWeight: 800,
      fontSize: size * 0.33,
      flexShrink: 0,
      letterSpacing: -0.5
    }
  }, initials);
};
var Badge = function Badge(_ref2) {
  var label = _ref2.label,
    color = _ref2.color;
  return React.createElement("span", {
    style: {
      display: "inline-block",
      padding: "3px 8px",
      borderRadius: 6,
      background: "".concat(color, "22"),
      color: color,
      fontSize: 11,
      fontWeight: 700
    }
  }, label);
};
var ShieldIcon = function ShieldIcon(_ref3) {
  var _ref3$size = _ref3.size,
    size = _ref3$size === void 0 ? 12 : _ref3$size,
    _ref3$color = _ref3.color,
    color = _ref3$color === void 0 ? "#fff" : _ref3$color;
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, React.createElement("path", {
    d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"
  }));
};
var PersonIcon = function PersonIcon(_ref4) {
  var _ref4$size = _ref4.size,
    size = _ref4$size === void 0 ? 12 : _ref4$size,
    _ref4$color = _ref4.color,
    color = _ref4$color === void 0 ? "#fff" : _ref4$color;
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, React.createElement("path", {
    d: "M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"
  }));
};
var RoleBadge = function RoleBadge(_ref5) {
  var role = _ref5.role,
    teamColor = _ref5.teamColor,
    _ref5$size = _ref5.size,
    size = _ref5$size === void 0 ? "sm" : _ref5$size;
  var isAdmin = role === "admin";
  var bg = isAdmin ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.1)";
  var border = isAdmin ? "1px solid rgba(255,255,255,0.35)" : "1px solid rgba(255,255,255,0.15)";
  var p = size === "lg" ? "5px 12px" : "3px 8px";
  var fs = size === "lg" ? 13 : 11;
  return React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      background: bg,
      border: border,
      borderRadius: 7,
      padding: p
    }
  }, isAdmin ? React.createElement(ShieldIcon, {
    size: fs,
    color: "#fff"
  }) : React.createElement(PersonIcon, {
    size: fs,
    color: "rgba(255,255,255,0.7)"
  }), React.createElement("span", {
    style: {
      color: isAdmin ? "#fff" : "rgba(255,255,255,0.75)",
      fontSize: fs,
      fontWeight: 700,
      letterSpacing: 0.3
    }
  }, isAdmin ? "Admin" : "Jogador"));
};
var AdminHeaderBadge = function AdminHeaderBadge(_ref6) {
  var teamColor = _ref6.teamColor;
  return React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      background: "rgba(255,255,255,0.15)",
      border: "1px solid rgba(255,255,255,0.3)",
      borderRadius: 8,
      padding: "4px 10px",
      backdropFilter: "blur(4px)",
      marginTop: 2
    }
  }, React.createElement(ShieldIcon, {
    size: 12,
    color: "#fff"
  }), React.createElement("span", {
    style: {
      color: "#fff",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: 0.5
    }
  }, "Admin"));
};
var RoleBadgeLight = function RoleBadgeLight(_ref7) {
  var role = _ref7.role;
  var isAdmin = role === "admin";
  return React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      background: isAdmin ? "#1D355712" : "#86868B12",
      border: "1px solid ".concat(isAdmin ? "#1D355730" : "#86868B30"),
      borderRadius: 6,
      padding: "3px 8px"
    }
  }, isAdmin ? React.createElement(ShieldIcon, {
    size: 11,
    color: "#1D3557"
  }) : React.createElement(PersonIcon, {
    size: 11,
    color: "#86868B"
  }), React.createElement("span", {
    style: {
      color: isAdmin ? "#1D3557" : "#86868B",
      fontSize: 11,
      fontWeight: 700
    }
  }, isAdmin ? "Admin" : "Jogador"));
};
var Chip = function Chip(_ref8) {
  var active = _ref8.active,
    color = _ref8.color,
    onClick = _ref8.onClick,
    children = _ref8.children;
  return React.createElement("button", {
    onClick: onClick,
    style: {
      padding: "7px 14px",
      borderRadius: 20,
      border: "none",
      cursor: "pointer",
      background: active ? color : T.card,
      color: active ? "#fff" : T.sub,
      fontWeight: 600,
      fontSize: 13,
      fontFamily: "inherit"
    }
  }, children);
};
var Sec = function Sec(_ref9) {
  var label = _ref9.label;
  return React.createElement("p", {
    style: {
      margin: "18px 0 8px",
      fontSize: 11,
      fontWeight: 700,
      color: T.sub,
      textTransform: "uppercase",
      letterSpacing: 1
    }
  }, label);
};
var Sheet = function Sheet(_ref0) {
  var onClose = _ref0.onClose,
    title = _ref0.title,
    children = _ref0.children;
  return React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.55)",
      display: "flex",
      alignItems: "flex-end",
      zIndex: 200
    },
    onClick: function onClick(e) {
      return e.target === e.currentTarget && onClose();
    }
  }, React.createElement("div", {
    style: {
      background: T.card,
      borderRadius: "22px 22px 0 0",
      padding: "0 20px 36px",
      width: "100%",
      boxSizing: "border-box",
      maxHeight: "85vh",
      overflowY: "auto"
    }
  }, React.createElement("div", {
    style: {
      width: 36,
      height: 4,
      borderRadius: 2,
      background: T.border,
      margin: "12px auto 20px"
    }
  }), React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 22
    }
  }, React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 20,
      fontWeight: 800
    }
  }, title), React.createElement("button", {
    onClick: onClose,
    style: {
      background: T.bg,
      border: "none",
      borderRadius: 10,
      width: 32,
      height: 32,
      fontSize: 18,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, "\xD7")), children));
};
var FL = function FL(_ref1) {
  var children = _ref1.children;
  return React.createElement("p", {
    style: {
      margin: "0 0 6px",
      fontWeight: 700,
      fontSize: 12,
      color: T.sub,
      textTransform: "uppercase",
      letterSpacing: 0.5
    }
  }, children);
};
var FI = function FI(props) {
  return React.createElement("input", _extends({
    style: {
      width: "100%",
      padding: "12px 14px",
      borderRadius: 12,
      border: "1.5px solid ".concat(T.border),
      fontSize: 15,
      background: T.inputBg,
      boxSizing: "border-box",
      outline: "none",
      fontFamily: "inherit",
      marginBottom: 14
    }
  }, props));
};
var FSel = function FSel(_ref10) {
  var value = _ref10.value,
    onChange = _ref10.onChange,
    children = _ref10.children;
  return React.createElement("select", {
    value: value,
    onChange: onChange,
    style: {
      width: "100%",
      padding: "12px 14px",
      borderRadius: 12,
      border: "1.5px solid ".concat(T.border),
      fontSize: 15,
      background: T.inputBg,
      boxSizing: "border-box",
      outline: "none",
      fontFamily: "inherit",
      marginBottom: 14
    }
  }, children);
};
var PrimaryBtn = function PrimaryBtn(_ref11) {
  var onClick = _ref11.onClick,
    disabled = _ref11.disabled,
    _ref11$color = _ref11.color,
    color = _ref11$color === void 0 ? T.brand : _ref11$color,
    children = _ref11.children;
  return React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    style: {
      width: "100%",
      padding: "15px",
      borderRadius: 14,
      border: "none",
      background: disabled ? T.border : color,
      color: "#fff",
      fontSize: 16,
      fontWeight: 800,
      cursor: disabled ? "default" : "pointer",
      fontFamily: "inherit",
      marginTop: 4
    }
  }, children);
};
var AddFineModal = function AddFineModal(_ref12) {
  var _tm$find;
  var team = _ref12.team,
    myUserId = _ref12.myUserId,
    token = _ref12.token,
    onAdd = _ref12.onAdd,
    onClose = _ref12.onClose;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    tm = _useState2[0],
    setTm = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    tft = _useState4[0],
    setTft = _useState4[1];
  var _useState5 = useState(""),
    _useState6 = _slicedToArray(_useState5, 2),
    mid = _useState6[0],
    setMid = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    sft = _useState8[0],
    setSft = _useState8[1];
  var _useState9 = useState(""),
    _useState0 = _slicedToArray(_useState9, 2),
    reason = _useState0[0],
    setReason = _useState0[1];
  var _useState1 = useState(true),
    _useState10 = _slicedToArray(_useState1, 2),
    loading = _useState10[0],
    setLoading = _useState10[1];
  var _useState11 = useState(""),
    _useState12 = _slicedToArray(_useState11, 2),
    err = _useState12[0],
    setErr = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    addingType = _useState14[0],
    setAddingType = _useState14[1];
  var _useState15 = useState(""),
    _useState16 = _slicedToArray(_useState15, 2),
    newName = _useState16[0],
    setNewName = _useState16[1];
  var _useState17 = useState(""),
    _useState18 = _slicedToArray(_useState17, 2),
    newAmount = _useState18[0],
    setNewAmount = _useState18[1];
  var _useState19 = useState("🟥"),
    _useState20 = _slicedToArray(_useState19, 2),
    newEmoji = _useState20[0],
    setNewEmoji = _useState20[1];
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    savingType = _useState22[0],
    setSavingType = _useState22[1];
  var QUICK_EMOJIS = ["🟥", "🟨", "⏰", "👕", "🏃", "🚫", "❌", "💸", "🤦", "📵", "🤕", "😤"];
  useEffect(function () {
    var H = {
      'apikey': SB_KEY,
      'Authorization': "Bearer ".concat(token)
    };
    Promise.all([fetch("".concat(SB_URL, "/rest/v1/team_members?team_id=eq.").concat(team.id, "&select=*"), {
      headers: H
    }).then(function (r) {
      return r.json();
    }), fetch("".concat(SB_URL, "/rest/v1/fine_types?team_id=eq.").concat(team.id, "&order=amount.asc"), {
      headers: H
    }).then(function (r) {
      return r.json();
    })]).then(function () {
      var _ref14 = _asyncToGenerator(_regenerator().m(function _callee1(_ref13) {
        var _ref15, mRaw, ftRaw, uids, profMap, pr;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              _ref15 = _slicedToArray(_ref13, 2), mRaw = _ref15[0], ftRaw = _ref15[1];
              uids = (Array.isArray(mRaw) ? mRaw : []).map(function (m) {
                return m.user_id;
              }).filter(Boolean);
              profMap = {};
              if (!uids.length) {
                _context1.n = 2;
                break;
              }
              _context1.n = 1;
              return fetch("".concat(SB_URL, "/rest/v1/profiles?id=in.(").concat(uids.join(','), ")"), {
                headers: H
              }).then(function (r) {
                return r.json();
              }).catch(function () {
                return [];
              });
            case 1:
              pr = _context1.v;
              (Array.isArray(pr) ? pr : []).forEach(function (p) {
                profMap[p.id] = p;
              });
            case 2:
              setTm((Array.isArray(mRaw) ? mRaw : []).map(function (m) {
                var _profMap$m$user_id;
                return {
                  id: String(m.id),
                  teamId: m.team_id,
                  userId: m.user_id,
                  role: m.role,
                  name: ((_profMap$m$user_id = profMap[m.user_id]) === null || _profMap$m$user_id === void 0 ? void 0 : _profMap$m$user_id.name) || 'Utilizador'
                };
              }));
              setTft((Array.isArray(ftRaw) ? ftRaw : []).map(function (ft) {
                return {
                  id: String(ft.id),
                  name: ft.name,
                  amount: Number(ft.amount),
                  emoji: ft.emoji || '🟥'
                };
              }));
              setLoading(false);
            case 3:
              return _context1.a(2);
          }
        }, _callee1);
      }));
      return function (_x) {
        return _ref14.apply(this, arguments);
      };
    }()).catch(function (e) {
      setErr(e.message);
      setLoading(false);
    });
  }, []);
  var saveNewType = function () {
    var _ref16 = _asyncToGenerator(_regenerator().m(function _callee10() {
      var H, r, data, ft, newFt, _t17;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            if (!(!newName.trim() || !newAmount)) {
              _context10.n = 1;
              break;
            }
            return _context10.a(2);
          case 1:
            setSavingType(true);
            _context10.p = 2;
            H = {
              'apikey': SB_KEY,
              'Authorization': "Bearer ".concat(token),
              'Content-Type': 'application/json',
              'Prefer': 'return=representation'
            };
            _context10.n = 3;
            return fetch("".concat(SB_URL, "/rest/v1/fine_types"), {
              method: 'POST',
              headers: H,
              body: JSON.stringify({
                team_id: team.id,
                name: newName.trim(),
                amount: Number(newAmount),
                emoji: newEmoji
              })
            });
          case 3:
            r = _context10.v;
            _context10.n = 4;
            return r.json();
          case 4:
            data = _context10.v;
            ft = Array.isArray(data) ? data[0] : data;
            if (ft !== null && ft !== void 0 && ft.id) {
              newFt = {
                id: String(ft.id),
                name: ft.name,
                amount: Number(ft.amount),
                emoji: ft.emoji || '🟥'
              };
              setTft(function (p) {
                return [].concat(_toConsumableArray(p), [newFt]);
              });
              setSft(newFt);
            }
            setAddingType(false);
            setNewName("");
            setNewAmount("");
            setNewEmoji("🟥");
            _context10.n = 6;
            break;
          case 5:
            _context10.p = 5;
            _t17 = _context10.v;
            setErr(_t17.message);
          case 6:
            setSavingType(false);
          case 7:
            return _context10.a(2);
        }
      }, _callee10, null, [[2, 5]]);
    }));
    return function saveNewType() {
      return _ref16.apply(this, arguments);
    };
  }();
  var canSubmit = mid && sft;
  var submit = function () {
    var _ref17 = _asyncToGenerator(_regenerator().m(function _callee11() {
      var _t18;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            if (canSubmit) {
              _context11.n = 1;
              break;
            }
            return _context11.a(2);
          case 1:
            setErr("");
            _context11.p = 2;
            _context11.n = 3;
            return onAdd({
              teamId: team.id,
              memberId: mid,
              amount: sft.amount,
              reason: reason || sft.name,
              emoji: sft.emoji,
              paid: false,
              date: new Date().toISOString().split("T")[0]
            });
          case 3:
            onClose();
            _context11.n = 5;
            break;
          case 4:
            _context11.p = 4;
            _t18 = _context11.v;
            setErr(_t18.message);
          case 5:
            return _context11.a(2);
        }
      }, _callee11, null, [[2, 4]]);
    }));
    return function submit() {
      return _ref17.apply(this, arguments);
    };
  }();
  return React.createElement(Sheet, {
    title: "\uD83D\uDFE5 Nova multa",
    onClose: onClose
  }, loading ? React.createElement("p", {
    style: {
      textAlign: "center",
      color: T.sub,
      padding: "20px 0"
    }
  }, "A carregar...") : React.createElement(React.Fragment, null, React.createElement(FL, null, "Jogador (", tm.length, ")"), React.createElement(FSel, {
    value: mid,
    onChange: function onChange(e) {
      return setMid(e.target.value);
    }
  }, React.createElement("option", {
    value: ""
  }, "\u2014 Selecionar jogador \u2014"), tm.map(function (m) {
    return React.createElement("option", {
      key: m.id,
      value: m.id
    }, m.name, m.role === 'admin' ? ' (Admin)' : '');
  })), React.createElement(FL, null, "Tipo de multa"), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8,
      marginBottom: 12
    }
  }, tft.map(function (ft) {
    return React.createElement("button", {
      key: ft.id,
      onClick: function onClick() {
        return setSft(ft);
      },
      style: {
        padding: "14px 12px",
        borderRadius: 14,
        textAlign: "left",
        border: "2px solid ".concat((sft === null || sft === void 0 ? void 0 : sft.id) === ft.id ? T.brand : T.border),
        background: (sft === null || sft === void 0 ? void 0 : sft.id) === ft.id ? "".concat(T.brand, "12") : T.inputBg,
        cursor: "pointer",
        fontFamily: "inherit",
        boxShadow: (sft === null || sft === void 0 ? void 0 : sft.id) === ft.id ? "0 2px 10px ".concat(T.brand, "30") : "none",
        transition: "all 0.15s"
      }
    }, React.createElement("div", {
      style: {
        fontSize: 28,
        marginBottom: 4
      }
    }, ft.emoji), React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 700,
        fontSize: 13,
        color: (sft === null || sft === void 0 ? void 0 : sft.id) === ft.id ? T.brand : T.text
      }
    }, ft.name), React.createElement("p", {
      style: {
        margin: "2px 0 0",
        fontWeight: 900,
        fontSize: 18,
        color: (sft === null || sft === void 0 ? void 0 : sft.id) === ft.id ? T.brand : T.navy
      }
    }, ft.amount, "\u20AC"));
  }), React.createElement("button", {
    onClick: function onClick() {
      return setAddingType(true);
    },
    style: {
      padding: "14px 12px",
      borderRadius: 14,
      textAlign: "left",
      border: "2px dashed ".concat(T.border),
      background: "transparent",
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, React.createElement("div", {
    style: {
      fontSize: 28,
      marginBottom: 4
    }
  }, "\u2795"), React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 700,
      fontSize: 13,
      color: T.sub
    }
  }, "Nova"), React.createElement("p", {
    style: {
      margin: "2px 0 0",
      fontWeight: 700,
      fontSize: 13,
      color: T.sub
    }
  }, "multa"))), addingType && React.createElement("div", {
    style: {
      background: T.inputBg,
      borderRadius: 14,
      padding: "14px",
      marginBottom: 12,
      border: "1.5px solid ".concat(T.border)
    }
  }, React.createElement("p", {
    style: {
      margin: "0 0 10px",
      fontWeight: 700,
      fontSize: 13
    }
  }, "\u2795 Novo tipo de multa"), React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      marginBottom: 10
    }
  }, QUICK_EMOJIS.map(function (e) {
    return React.createElement("button", {
      key: e,
      onClick: function onClick() {
        return setNewEmoji(e);
      },
      style: {
        fontSize: 20,
        width: 38,
        height: 38,
        borderRadius: 10,
        border: "2px solid ".concat(newEmoji === e ? T.brand : T.border),
        background: newEmoji === e ? "".concat(T.brand, "15") : "transparent",
        cursor: "pointer"
      }
    }, e);
  })), React.createElement(FI, {
    value: newName,
    onChange: function onChange(e) {
      return setNewName(e.target.value);
    },
    placeholder: "Nome (ex: Cart\xE3o azul)"
  }), React.createElement(FI, {
    type: "number",
    value: newAmount,
    onChange: function onChange(e) {
      return setNewAmount(e.target.value);
    },
    placeholder: "Valor em \u20AC (ex: 10)"
  }), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, React.createElement(PrimaryBtn, {
    onClick: saveNewType,
    disabled: !newName.trim() || !newAmount || savingType,
    color: team.color
  }, savingType ? "A guardar..." : "✓ Criar"), React.createElement("button", {
    onClick: function onClick() {
      return setAddingType(false);
    },
    style: {
      flex: 1,
      padding: "15px",
      borderRadius: 14,
      border: "1.5px solid ".concat(T.border),
      background: "transparent",
      cursor: "pointer",
      fontFamily: "inherit",
      fontWeight: 700,
      fontSize: 14
    }
  }, "Cancelar"))), sft && React.createElement("div", {
    style: {
      background: "".concat(T.brand, "10"),
      border: "1.5px solid ".concat(T.brand, "30"),
      borderRadius: 12,
      padding: "10px 14px",
      marginBottom: 12,
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, sft.emoji), React.createElement("div", {
    style: {
      flex: 1
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 700,
      fontSize: 14
    }
  }, sft.name), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: T.sub
    }
  }, "Valor: ", React.createElement("strong", {
    style: {
      color: T.brand
    }
  }, sft.amount, "\u20AC"))), React.createElement("button", {
    onClick: function onClick() {
      return setSft(null);
    },
    style: {
      background: "none",
      border: "none",
      fontSize: 18,
      cursor: "pointer",
      color: T.sub
    }
  }, "\u2715")), React.createElement(FL, null, "Motivo (opcional)"), React.createElement(FI, {
    type: "text",
    value: reason,
    onChange: function onChange(e) {
      return setReason(e.target.value);
    },
    placeholder: sft ? sft.name : "Descreve o motivo..."
  }), err && React.createElement("p", {
    style: {
      color: "#C00",
      fontSize: 13,
      margin: "0 0 10px",
      background: "#FFE5E5",
      borderRadius: 8,
      padding: "8px 12px"
    }
  }, err), React.createElement(PrimaryBtn, {
    onClick: submit,
    disabled: !canSubmit,
    color: T.brand
  }, canSubmit ? "\uD83D\uDFE5 Atribuir ".concat(sft.amount, "\u20AC a ").concat(((_tm$find = tm.find(function (m) {
    return m.id === mid;
  })) === null || _tm$find === void 0 ? void 0 : _tm$find.name) || "jogador") : !mid ? "← Seleciona um jogador" : "← Seleciona o tipo")));
};
var AddExpenseModal = function AddExpenseModal(_ref18) {
  var team = _ref18.team,
    onAdd = _ref18.onAdd,
    onClose = _ref18.onClose;
  var _useState23 = useState(""),
    _useState24 = _slicedToArray(_useState23, 2),
    desc = _useState24[0],
    setDesc = _useState24[1];
  var _useState25 = useState(""),
    _useState26 = _slicedToArray(_useState25, 2),
    amount = _useState26[0],
    setAmount = _useState26[1];
  return React.createElement(Sheet, {
    title: "\uD83D\uDCB8 Nova despesa",
    onClose: onClose
  }, React.createElement(FL, null, "Descri\xE7\xE3o"), React.createElement(FI, {
    type: "text",
    value: desc,
    onChange: function onChange(e) {
      return setDesc(e.target.value);
    },
    placeholder: "Ex: Jantar de equipa..."
  }), React.createElement(FL, null, "Valor (\u20AC)"), React.createElement(FI, {
    type: "number",
    value: amount,
    onChange: function onChange(e) {
      return setAmount(e.target.value);
    },
    placeholder: "0.00"
  }), React.createElement(PrimaryBtn, {
    onClick: function onClick() {
      if (!desc || !amount) return;
      onAdd({
        teamId: team.id,
        description: desc,
        amount: Number(amount),
        date: new Date().toISOString().split("T")[0]
      });
      onClose();
    },
    disabled: !desc || !amount,
    color: T.navy
  }, "Registar despesa"));
};
var TrainingTypePicker = function TrainingTypePicker(_ref19) {
  var team = _ref19.team,
    onSelect = _ref19.onSelect,
    onClose = _ref19.onClose;
  return React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.55)",
      display: "flex",
      alignItems: "flex-end",
      zIndex: 200
    },
    onClick: function onClick(e) {
      return e.target === e.currentTarget && onClose();
    }
  }, React.createElement("div", {
    style: {
      background: T.card,
      borderRadius: "22px 22px 0 0",
      padding: "0 20px 36px",
      width: "100%",
      boxSizing: "border-box"
    }
  }, React.createElement("div", {
    style: {
      width: 36,
      height: 4,
      borderRadius: 2,
      background: T.border,
      margin: "12px auto 20px"
    }
  }), React.createElement("p", {
    style: {
      margin: "0 0 16px",
      fontWeight: 800,
      fontSize: 18
    }
  }, "Que tipo de evento?"), [{
    type: "recorrente",
    icon: "🔄",
    label: "Treino recorrente",
    sub: "Repete-se todas as semanas"
  }, {
    type: "treino",
    icon: "📅",
    label: "Treino único",
    sub: "Sessão numa data específica"
  }, {
    type: "jogo",
    icon: "⚽",
    label: "Criar jogo",
    sub: "Partida com convocatória"
  }].map(function (item) {
    return React.createElement("button", {
      key: item.type,
      onClick: function onClick() {
        onClose();
        onSelect(item.type);
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        width: "100%",
        padding: "16px 14px",
        borderRadius: 14,
        border: "1.5px solid ".concat(T.border),
        background: T.inputBg,
        cursor: "pointer",
        marginBottom: 10,
        textAlign: "left",
        fontFamily: "inherit"
      }
    }, React.createElement("div", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 12,
        background: "".concat(team.color, "18"),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 24,
        flexShrink: 0
      }
    }, item.icon), React.createElement("div", null, React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 800,
        fontSize: 16
      }
    }, item.label), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        color: T.sub
      }
    }, item.sub)), React.createElement("span", {
      style: {
        marginLeft: "auto",
        color: T.sub,
        fontSize: 18
      }
    }, "\u203A"));
  })));
};
var AddSingleTrainingModal = function AddSingleTrainingModal(_ref20) {
  var team = _ref20.team,
    onAdd = _ref20.onAdd,
    onClose = _ref20.onClose;
  var _useState27 = useState(""),
    _useState28 = _slicedToArray(_useState27, 2),
    date = _useState28[0],
    setDate = _useState28[1];
  var _useState29 = useState("19:30"),
    _useState30 = _slicedToArray(_useState29, 2),
    time = _useState30[0],
    setTime = _useState30[1];
  var _useState31 = useState(""),
    _useState32 = _slicedToArray(_useState31, 2),
    loc = _useState32[0],
    setLoc = _useState32[1];
  var _useState33 = useState(""),
    _useState34 = _slicedToArray(_useState33, 2),
    notes = _useState34[0],
    setNotes = _useState34[1];
  var _useState35 = useState(""),
    _useState36 = _slicedToArray(_useState35, 2),
    err = _useState36[0],
    setErr = _useState36[1];
  var ok = date && time && loc;
  return React.createElement(Sheet, {
    title: "\uD83D\uDCC5 Treino \xFAnico",
    onClose: onClose
  }, React.createElement(FL, null, "Data"), React.createElement(FI, {
    type: "date",
    value: date,
    onChange: function onChange(e) {
      return setDate(e.target.value);
    }
  }), React.createElement(FL, null, "Hora"), React.createElement(FI, {
    type: "time",
    value: time,
    onChange: function onChange(e) {
      return setTime(e.target.value);
    }
  }), React.createElement(FL, null, "Local"), React.createElement(FI, {
    type: "text",
    value: loc,
    onChange: function onChange(e) {
      return setLoc(e.target.value);
    },
    placeholder: "Ex: Campo Principal, Selzach"
  }), React.createElement(FL, null, "Notas (opcional)"), React.createElement(FI, {
    type: "text",
    value: notes,
    onChange: function onChange(e) {
      return setNotes(e.target.value);
    },
    placeholder: "Objetivos do treino..."
  }), err && React.createElement("p", {
    style: {
      color: "#C00",
      fontSize: 13,
      margin: "0 0 10px",
      background: "#FFE5E5",
      borderRadius: 8,
      padding: "8px 12px"
    }
  }, err), React.createElement(PrimaryBtn, {
    onClick: _asyncToGenerator(_regenerator().m(function _callee12() {
      var _t19;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.p = _context12.n) {
          case 0:
            if (ok) {
              _context12.n = 1;
              break;
            }
            return _context12.a(2);
          case 1:
            setErr("");
            _context12.p = 2;
            _context12.n = 3;
            return onAdd({
              teamId: team.id,
              type: "treino",
              recurring: false,
              date: date,
              time: time,
              location: loc,
              notes: notes
            });
          case 3:
            onClose();
            _context12.n = 5;
            break;
          case 4:
            _context12.p = 4;
            _t19 = _context12.v;
            setErr(_t19.message);
          case 5:
            return _context12.a(2);
        }
      }, _callee12, null, [[2, 4]]);
    })),
    disabled: !ok,
    color: team.color
  }, "Agendar treino"));
};
var AddRecurringModal = function AddRecurringModal(_ref22) {
  var team = _ref22.team,
    onAdd = _ref22.onAdd,
    onClose = _ref22.onClose;
  var _useState37 = useState([]),
    _useState38 = _slicedToArray(_useState37, 2),
    days = _useState38[0],
    setDays = _useState38[1];
  var _useState39 = useState("19:30"),
    _useState40 = _slicedToArray(_useState39, 2),
    time = _useState40[0],
    setTime = _useState40[1];
  var _useState41 = useState(""),
    _useState42 = _slicedToArray(_useState41, 2),
    loc = _useState42[0],
    setLoc = _useState42[1];
  var _useState43 = useState(""),
    _useState44 = _slicedToArray(_useState43, 2),
    notes = _useState44[0],
    setNotes = _useState44[1];
  var _useState45 = useState(""),
    _useState46 = _slicedToArray(_useState45, 2),
    err = _useState46[0],
    setErr = _useState46[1];
  var ok = days.length > 0 && time && loc;
  var toggleDay = function toggleDay(d) {
    return setDays(function (p) {
      return p.includes(d) ? p.filter(function (x) {
        return x !== d;
      }) : [].concat(_toConsumableArray(p), [d]);
    });
  };
  return React.createElement(Sheet, {
    title: "\uD83D\uDD04 Treino recorrente",
    onClose: onClose
  }, React.createElement(FL, null, "Dias da semana"), React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 14,
      flexWrap: "wrap"
    }
  }, DAYS_PT.map(function (d, i) {
    return React.createElement("button", {
      key: i,
      onClick: function onClick() {
        return toggleDay(i);
      },
      style: {
        width: 44,
        height: 44,
        borderRadius: 22,
        border: "2px solid ".concat(days.includes(i) ? team.color : T.border),
        background: days.includes(i) ? "".concat(team.color, "18") : T.inputBg,
        cursor: "pointer",
        fontWeight: 700,
        fontSize: 13,
        fontFamily: "inherit",
        color: days.includes(i) ? team.color : T.sub
      }
    }, d);
  })), React.createElement(FL, null, "Hora"), React.createElement(FI, {
    type: "time",
    value: time,
    onChange: function onChange(e) {
      return setTime(e.target.value);
    }
  }), React.createElement(FL, null, "Local"), React.createElement(FI, {
    type: "text",
    value: loc,
    onChange: function onChange(e) {
      return setLoc(e.target.value);
    },
    placeholder: "Ex: Campo Principal, Selzach"
  }), React.createElement(FL, null, "Notas (opcional)"), React.createElement(FI, {
    type: "text",
    value: notes,
    onChange: function onChange(e) {
      return setNotes(e.target.value);
    },
    placeholder: "Objetivos do treino..."
  }), React.createElement("div", {
    style: {
      background: "".concat(team.color, "12"),
      borderRadius: 12,
      padding: "10px 14px",
      marginBottom: 14
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: team.color,
      fontWeight: 600
    }
  }, "\uD83D\uDD04 ", days.length > 0 ? "Repete \xE0s ".concat(days.sort().map(function (d) {
    return DAYS_PT[d];
  }).join(", ")) : "Seleciona os dias", " \xB7 ", time)), err && React.createElement("p", {
    style: {
      color: "#C00",
      fontSize: 13,
      margin: "0 0 10px",
      background: "#FFE5E5",
      borderRadius: 8,
      padding: "8px 12px"
    }
  }, err), React.createElement(PrimaryBtn, {
    onClick: _asyncToGenerator(_regenerator().m(function _callee13() {
      var _t20;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.p = _context13.n) {
          case 0:
            if (ok) {
              _context13.n = 1;
              break;
            }
            return _context13.a(2);
          case 1:
            setErr("");
            _context13.p = 2;
            _context13.n = 3;
            return onAdd({
              teamId: team.id,
              type: "recorrente",
              recurring: true,
              days: days.sort(),
              time: time,
              location: loc,
              notes: notes
            });
          case 3:
            onClose();
            _context13.n = 5;
            break;
          case 4:
            _context13.p = 4;
            _t20 = _context13.v;
            setErr(_t20.message);
          case 5:
            return _context13.a(2);
        }
      }, _callee13, null, [[2, 4]]);
    })),
    disabled: !ok,
    color: team.color
  }, "Criar treino recorrente"));
};
var AddMatchModal = function AddMatchModal(_ref24) {
  var team = _ref24.team,
    members = _ref24.members,
    onAdd = _ref24.onAdd,
    onClose = _ref24.onClose;
  var tm = members.filter(function (m) {
    return m.teamId === team.id;
  });
  var _useState47 = useState(""),
    _useState48 = _slicedToArray(_useState47, 2),
    opponent = _useState48[0],
    setOpponent = _useState48[1];
  var _useState49 = useState(""),
    _useState50 = _slicedToArray(_useState49, 2),
    date = _useState50[0],
    setDate = _useState50[1];
  var _useState51 = useState("15:00"),
    _useState52 = _slicedToArray(_useState51, 2),
    time = _useState52[0],
    setTime = _useState52[1];
  var _useState53 = useState(""),
    _useState54 = _slicedToArray(_useState53, 2),
    loc = _useState54[0],
    setLoc = _useState54[1];
  var _useState55 = useState("casa"),
    _useState56 = _slicedToArray(_useState55, 2),
    homeAway = _useState56[0],
    setHomeAway = _useState56[1];
  var _useState57 = useState(""),
    _useState58 = _slicedToArray(_useState57, 2),
    notes = _useState58[0],
    setNotes = _useState58[1];
  var _useState59 = useState(tm.map(function (m) {
      return m.id;
    })),
    _useState60 = _slicedToArray(_useState59, 2),
    squad = _useState60[0],
    setSquad = _useState60[1];
  var _useState61 = useState(""),
    _useState62 = _slicedToArray(_useState61, 2),
    err = _useState62[0],
    setErr = _useState62[1];
  var ok = opponent && date && time;
  var toggleSquad = function toggleSquad(id) {
    return setSquad(function (p) {
      return p.includes(id) ? p.filter(function (x) {
        return x !== id;
      }) : [].concat(_toConsumableArray(p), [id]);
    });
  };
  return React.createElement(Sheet, {
    title: "\u26BD Criar jogo",
    onClose: onClose
  }, React.createElement(FL, null, "Advers\xE1rio"), React.createElement(FI, {
    value: opponent,
    onChange: function onChange(e) {
      return setOpponent(e.target.value);
    },
    placeholder: "Ex: FC Grenchen"
  }), React.createElement(FL, null, "Casa ou fora?"), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 14
    }
  }, [["casa", "🏠 Casa"], ["fora", "✈️ Fora"]].map(function (_ref25) {
    var _ref26 = _slicedToArray(_ref25, 2),
      v = _ref26[0],
      l = _ref26[1];
    return React.createElement("button", {
      key: v,
      onClick: function onClick() {
        return setHomeAway(v);
      },
      style: {
        flex: 1,
        padding: "12px",
        borderRadius: 12,
        border: "2px solid ".concat(homeAway === v ? team.color : T.border),
        background: homeAway === v ? "".concat(team.color, "15") : T.inputBg,
        cursor: "pointer",
        fontWeight: 700,
        fontSize: 15,
        fontFamily: "inherit"
      }
    }, l);
  })), React.createElement(FL, null, "Data"), React.createElement(FI, {
    type: "date",
    value: date,
    onChange: function onChange(e) {
      return setDate(e.target.value);
    }
  }), React.createElement(FL, null, "Hora"), React.createElement(FI, {
    type: "time",
    value: time,
    onChange: function onChange(e) {
      return setTime(e.target.value);
    }
  }), React.createElement(FL, null, "Local"), React.createElement(FI, {
    type: "text",
    value: loc,
    onChange: function onChange(e) {
      return setLoc(e.target.value);
    },
    placeholder: "Ex: Campo Municipal, Grenchen"
  }), React.createElement(FL, null, "Notas (opcional)"), React.createElement(FI, {
    type: "text",
    value: notes,
    onChange: function onChange(e) {
      return setNotes(e.target.value);
    },
    placeholder: "Ex: Campeonato cantonal..."
  }), React.createElement(FL, null, "Convocat\xF3ria (", squad.length, "/", tm.length, ")"), React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 16
    }
  }, tm.map(function (m) {
    return React.createElement("button", {
      key: m.id,
      onClick: function onClick() {
        return toggleSquad(m.id);
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 12px",
        borderRadius: 10,
        border: "2px solid ".concat(squad.includes(m.id) ? team.color : T.border),
        background: squad.includes(m.id) ? "".concat(team.color, "15") : T.inputBg,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, React.createElement("div", {
      style: {
        width: 28,
        height: 28,
        borderRadius: 14,
        background: squad.includes(m.id) ? team.color : T.border,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: 11,
        fontWeight: 800
      }
    }, m.initials), React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600
      }
    }, m.name.split(" ")[0]));
  })), err && React.createElement("p", {
    style: {
      color: "#c0392b",
      fontSize: 13,
      marginBottom: 10
    }
  }, err), React.createElement(PrimaryBtn, {
    onClick: _asyncToGenerator(_regenerator().m(function _callee14() {
      var _t21;
      return _regenerator().w(function (_context14) {
        while (1) switch (_context14.p = _context14.n) {
          case 0:
            if (ok) {
              _context14.n = 1;
              break;
            }
            return _context14.a(2);
          case 1:
            setErr("");
            _context14.p = 2;
            _context14.n = 3;
            return onAdd({
              teamId: team.id,
              type: "jogo",
              recurring: false,
              date: date,
              time: time,
              location: loc || "A definir",
              notes: notes,
              opponent: opponent,
              homeAway: homeAway,
              squad: squad
            });
          case 3:
            _context14.n = 5;
            break;
          case 4:
            _context14.p = 4;
            _t21 = _context14.v;
            setErr(_t21.message);
          case 5:
            return _context14.a(2);
        }
      }, _callee14, null, [[2, 4]]);
    })),
    disabled: !ok,
    color: T.brand
  }, "\u26BD Criar jogo vs ", opponent || "..."));
};
var EditSingleTrainingModal = function EditSingleTrainingModal(_ref28) {
  var team = _ref28.team,
    training = _ref28.training,
    onEdit = _ref28.onEdit,
    onClose = _ref28.onClose;
  var _useState63 = useState(training.date),
    _useState64 = _slicedToArray(_useState63, 2),
    date = _useState64[0],
    setDate = _useState64[1];
  var _useState65 = useState(training.time || "19:00"),
    _useState66 = _slicedToArray(_useState65, 2),
    time = _useState66[0],
    setTime = _useState66[1];
  var _useState67 = useState(training.location),
    _useState68 = _slicedToArray(_useState67, 2),
    loc = _useState68[0],
    setLoc = _useState68[1];
  var _useState69 = useState(training.notes),
    _useState70 = _slicedToArray(_useState69, 2),
    notes = _useState70[0],
    setNotes = _useState70[1];
  var _useState71 = useState(""),
    _useState72 = _slicedToArray(_useState71, 2),
    err = _useState72[0],
    setErr = _useState72[1];
  var ok = date && time;
  return React.createElement(Sheet, {
    title: "\u270F\uFE0F Editar treino",
    onClose: onClose
  }, React.createElement(FL, null, "Data"), React.createElement(FI, {
    type: "date",
    value: date,
    onChange: function onChange(e) {
      return setDate(e.target.value);
    }
  }), React.createElement(FL, null, "Hora"), React.createElement(FI, {
    type: "time",
    value: time,
    onChange: function onChange(e) {
      return setTime(e.target.value);
    }
  }), React.createElement(FL, null, "Local"), React.createElement(FI, {
    type: "text",
    value: loc,
    onChange: function onChange(e) {
      return setLoc(e.target.value);
    },
    placeholder: "Ex: Campo Municipal..."
  }), React.createElement(FL, null, "Notas (opcional)"), React.createElement(FI, {
    type: "text",
    value: notes,
    onChange: function onChange(e) {
      return setNotes(e.target.value);
    },
    placeholder: "Objetivos..."
  }), err && React.createElement("p", {
    style: {
      color: "#c0392b",
      fontSize: 13,
      marginBottom: 10,
      background: "#FFE5E5",
      borderRadius: 8,
      padding: "8px 12px"
    }
  }, err), React.createElement(PrimaryBtn, {
    onClick: _asyncToGenerator(_regenerator().m(function _callee15() {
      var _t22;
      return _regenerator().w(function (_context15) {
        while (1) switch (_context15.p = _context15.n) {
          case 0:
            if (ok) {
              _context15.n = 1;
              break;
            }
            return _context15.a(2);
          case 1:
            setErr("");
            _context15.p = 2;
            _context15.n = 3;
            return onEdit(training.id, {
              date: date,
              time: time,
              location: loc,
              notes: notes
            });
          case 3:
            onClose();
            _context15.n = 5;
            break;
          case 4:
            _context15.p = 4;
            _t22 = _context15.v;
            setErr(_t22.message);
          case 5:
            return _context15.a(2);
        }
      }, _callee15, null, [[2, 4]]);
    })),
    disabled: !ok,
    color: team.color
  }, "\uD83D\uDCBE Guardar altera\xE7\xF5es"));
};
var EditMatchModal = function EditMatchModal(_ref30) {
  var team = _ref30.team,
    members = _ref30.members,
    training = _ref30.training,
    onEdit = _ref30.onEdit,
    onClose = _ref30.onClose;
  var tm = members.filter(function (m) {
    return m.teamId === team.id;
  });
  var _useState73 = useState(training.opponent || ""),
    _useState74 = _slicedToArray(_useState73, 2),
    opponent = _useState74[0],
    setOpponent = _useState74[1];
  var _useState75 = useState(training.date),
    _useState76 = _slicedToArray(_useState75, 2),
    date = _useState76[0],
    setDate = _useState76[1];
  var _useState77 = useState(training.time || "15:00"),
    _useState78 = _slicedToArray(_useState77, 2),
    time = _useState78[0],
    setTime = _useState78[1];
  var _useState79 = useState(training.location),
    _useState80 = _slicedToArray(_useState79, 2),
    loc = _useState80[0],
    setLoc = _useState80[1];
  var _useState81 = useState(training.homeAway || "casa"),
    _useState82 = _slicedToArray(_useState81, 2),
    homeAway = _useState82[0],
    setHomeAway = _useState82[1];
  var _useState83 = useState(training.notes),
    _useState84 = _slicedToArray(_useState83, 2),
    notes = _useState84[0],
    setNotes = _useState84[1];
  var _useState85 = useState(training.squad || tm.map(function (m) {
      return m.id;
    })),
    _useState86 = _slicedToArray(_useState85, 2),
    squad = _useState86[0],
    setSquad = _useState86[1];
  var _useState87 = useState(""),
    _useState88 = _slicedToArray(_useState87, 2),
    err = _useState88[0],
    setErr = _useState88[1];
  var ok = opponent && date && time;
  var toggleSquad = function toggleSquad(id) {
    return setSquad(function (p) {
      return p.includes(id) ? p.filter(function (x) {
        return x !== id;
      }) : [].concat(_toConsumableArray(p), [id]);
    });
  };
  return React.createElement(Sheet, {
    title: "\u270F\uFE0F Editar jogo",
    onClose: onClose
  }, React.createElement(FL, null, "Advers\xE1rio"), React.createElement(FI, {
    value: opponent,
    onChange: function onChange(e) {
      return setOpponent(e.target.value);
    },
    placeholder: "Ex: FC Grenchen"
  }), React.createElement(FL, null, "Casa ou fora?"), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 14
    }
  }, [["casa", "🏠 Casa"], ["fora", "✈️ Fora"]].map(function (_ref31) {
    var _ref32 = _slicedToArray(_ref31, 2),
      v = _ref32[0],
      l = _ref32[1];
    return React.createElement("button", {
      key: v,
      onClick: function onClick() {
        return setHomeAway(v);
      },
      style: {
        flex: 1,
        padding: "12px",
        borderRadius: 12,
        border: "2px solid ".concat(homeAway === v ? team.color : T.border),
        background: homeAway === v ? "".concat(team.color, "15") : T.inputBg,
        cursor: "pointer",
        fontWeight: 700,
        fontSize: 15,
        fontFamily: "inherit"
      }
    }, l);
  })), React.createElement(FL, null, "Data"), React.createElement(FI, {
    type: "date",
    value: date,
    onChange: function onChange(e) {
      return setDate(e.target.value);
    }
  }), React.createElement(FL, null, "Hora"), React.createElement(FI, {
    type: "time",
    value: time,
    onChange: function onChange(e) {
      return setTime(e.target.value);
    }
  }), React.createElement(FL, null, "Local"), React.createElement(FI, {
    type: "text",
    value: loc,
    onChange: function onChange(e) {
      return setLoc(e.target.value);
    },
    placeholder: "Ex: Campo Municipal..."
  }), React.createElement(FL, null, "Notas (opcional)"), React.createElement(FI, {
    type: "text",
    value: notes,
    onChange: function onChange(e) {
      return setNotes(e.target.value);
    },
    placeholder: "Ex: Campeonato cantonal..."
  }), React.createElement(FL, null, "Convocat\xF3ria (", squad.length, "/", tm.length, ")"), React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 16
    }
  }, tm.map(function (m) {
    return React.createElement("button", {
      key: m.id,
      onClick: function onClick() {
        return toggleSquad(m.id);
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 12px",
        borderRadius: 10,
        border: "2px solid ".concat(squad.includes(m.id) ? team.color : T.border),
        background: squad.includes(m.id) ? "".concat(team.color, "15") : T.inputBg,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, React.createElement("div", {
      style: {
        width: 28,
        height: 28,
        borderRadius: 14,
        background: squad.includes(m.id) ? team.color : T.border,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: 11,
        fontWeight: 800
      }
    }, m.initials), React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600
      }
    }, m.name.split(" ")[0]));
  })), err && React.createElement("p", {
    style: {
      color: "#c0392b",
      fontSize: 13,
      marginBottom: 10,
      background: "#FFE5E5",
      borderRadius: 8,
      padding: "8px 12px"
    }
  }, err), React.createElement(PrimaryBtn, {
    onClick: _asyncToGenerator(_regenerator().m(function _callee16() {
      var _t23;
      return _regenerator().w(function (_context16) {
        while (1) switch (_context16.p = _context16.n) {
          case 0:
            if (ok) {
              _context16.n = 1;
              break;
            }
            return _context16.a(2);
          case 1:
            setErr("");
            _context16.p = 2;
            _context16.n = 3;
            return onEdit(training.id, {
              date: date,
              time: time,
              location: loc || "A definir",
              notes: notes,
              opponent: opponent,
              homeAway: homeAway,
              squad: squad
            });
          case 3:
            onClose();
            _context16.n = 5;
            break;
          case 4:
            _context16.p = 4;
            _t23 = _context16.v;
            setErr(_t23.message);
          case 5:
            return _context16.a(2);
        }
      }, _callee16, null, [[2, 4]]);
    })),
    disabled: !ok,
    color: T.brand
  }, "\uD83D\uDCBE Guardar altera\xE7\xF5es"));
};
var EditRecurringModal = function EditRecurringModal(_ref34) {
  var team = _ref34.team,
    training = _ref34.training,
    onEdit = _ref34.onEdit,
    onClose = _ref34.onClose;
  var _useState89 = useState(training.days || []),
    _useState90 = _slicedToArray(_useState89, 2),
    days = _useState90[0],
    setDays = _useState90[1];
  var _useState91 = useState(training.time || "19:30"),
    _useState92 = _slicedToArray(_useState91, 2),
    time = _useState92[0],
    setTime = _useState92[1];
  var _useState93 = useState(training.location),
    _useState94 = _slicedToArray(_useState93, 2),
    loc = _useState94[0],
    setLoc = _useState94[1];
  var _useState95 = useState(training.notes),
    _useState96 = _slicedToArray(_useState95, 2),
    notes = _useState96[0],
    setNotes = _useState96[1];
  var _useState97 = useState(""),
    _useState98 = _slicedToArray(_useState97, 2),
    err = _useState98[0],
    setErr = _useState98[1];
  var ok = days.length > 0 && time;
  var toggleDay = function toggleDay(d) {
    return setDays(function (p) {
      return p.includes(d) ? p.filter(function (x) {
        return x !== d;
      }) : [].concat(_toConsumableArray(p), [d]);
    });
  };
  return React.createElement(Sheet, {
    title: "\u270F\uFE0F Editar recorrente",
    onClose: onClose
  }, React.createElement(FL, null, "Dias da semana"), React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 14,
      flexWrap: "wrap"
    }
  }, DAYS_PT.map(function (d, i) {
    return React.createElement("button", {
      key: i,
      onClick: function onClick() {
        return toggleDay(i);
      },
      style: {
        width: 44,
        height: 44,
        borderRadius: 22,
        border: "2px solid ".concat(days.includes(i) ? team.color : T.border),
        background: days.includes(i) ? "".concat(team.color, "18") : T.inputBg,
        cursor: "pointer",
        fontWeight: 700,
        fontSize: 13,
        fontFamily: "inherit",
        color: days.includes(i) ? team.color : T.sub
      }
    }, d);
  })), React.createElement(FL, null, "Hora"), React.createElement(FI, {
    type: "time",
    value: time,
    onChange: function onChange(e) {
      return setTime(e.target.value);
    }
  }), React.createElement(FL, null, "Local"), React.createElement(FI, {
    type: "text",
    value: loc,
    onChange: function onChange(e) {
      return setLoc(e.target.value);
    },
    placeholder: "Ex: Campo Principal..."
  }), React.createElement(FL, null, "Notas (opcional)"), React.createElement(FI, {
    type: "text",
    value: notes,
    onChange: function onChange(e) {
      return setNotes(e.target.value);
    },
    placeholder: "Objetivos..."
  }), React.createElement("div", {
    style: {
      background: "".concat(team.color, "12"),
      borderRadius: 12,
      padding: "10px 14px",
      marginBottom: 14
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: team.color,
      fontWeight: 600
    }
  }, "\uD83D\uDD04 ", days.length > 0 ? "Repete \xE0s ".concat(days.sort().map(function (d) {
    return DAYS_PT[d];
  }).join(", ")) : "Seleciona os dias", " \xB7 ", time)), err && React.createElement("p", {
    style: {
      color: "#c0392b",
      fontSize: 13,
      marginBottom: 10,
      background: "#FFE5E5",
      borderRadius: 8,
      padding: "8px 12px"
    }
  }, err), React.createElement(PrimaryBtn, {
    onClick: _asyncToGenerator(_regenerator().m(function _callee17() {
      var _t24;
      return _regenerator().w(function (_context17) {
        while (1) switch (_context17.p = _context17.n) {
          case 0:
            if (ok) {
              _context17.n = 1;
              break;
            }
            return _context17.a(2);
          case 1:
            setErr("");
            _context17.p = 2;
            _context17.n = 3;
            return onEdit(training.id, {
              recurring: true,
              days: days.sort(),
              time: time,
              location: loc,
              notes: notes
            });
          case 3:
            onClose();
            _context17.n = 5;
            break;
          case 4:
            _context17.p = 4;
            _t24 = _context17.v;
            setErr(_t24.message);
          case 5:
            return _context17.a(2);
        }
      }, _callee17, null, [[2, 4]]);
    })),
    disabled: !ok,
    color: team.color
  }, "\uD83D\uDCBE Guardar altera\xE7\xF5es"));
};
var POSITIONS = ["Guarda-redes", "Defesa Central", "Lateral Direito", "Lateral Esquerdo", "Defesa Libero", "Médio Defensivo", "Médio Centro", "Médio Box-to-Box", "Médio Ofensivo", "Meia Atacante", "Extremo Direito", "Extremo Esquerdo", "Segundo Avançado", "Ponta de Lança", "Avançado Centro", "Fixo", "Ala", "Pivot", "Universal", "Treinador", "Treinador Adjunto", "Treinador de Guarda-redes", "Preparador Físico", "Diretor Desportivo", "Presidente", "Massagista / Fisioterapeuta", "Delegado", "Team Manager", "Médico", "Outro"];
var POSITIONS_GROUPED = {
  "🥅 Guarda-redes": ["Guarda-redes"],
  "🛡 Defesa": ["Defesa Central", "Lateral Direito", "Lateral Esquerdo", "Defesa Libero"],
  "⚙️ Médio": ["Médio Defensivo", "Médio Centro", "Médio Box-to-Box", "Médio Ofensivo", "Meia Atacante"],
  "⚡ Atacante": ["Extremo Direito", "Extremo Esquerdo", "Segundo Avançado", "Ponta de Lança", "Avançado Centro"],
  "🏟 Futsal / Praia": ["Fixo", "Ala", "Pivot", "Universal"],
  "🎽 Equipa Técnica": ["Treinador", "Treinador Adjunto", "Treinador de Guarda-redes", "Preparador Físico", "Massagista / Fisioterapeuta", "Médico"],
  "🏛 Direção / Gestão": ["Diretor Desportivo", "Presidente", "Delegado", "Team Manager"],
  "· Outro": ["Outro"]
};
var PositionSelect = function PositionSelect(_ref36) {
  var value = _ref36.value,
    onChange = _ref36.onChange;
  return React.createElement(FSel, {
    value: value,
    onChange: onChange
  }, Object.entries(POSITIONS_GROUPED).map(function (_ref37) {
    var _ref38 = _slicedToArray(_ref37, 2),
      group = _ref38[0],
      opts = _ref38[1];
    return React.createElement("optgroup", {
      key: group,
      label: group
    }, opts.map(function (p) {
      return React.createElement("option", {
        key: p,
        value: p
      }, p);
    }));
  }));
};
var AddMemberModal = function AddMemberModal(_ref39) {
  var team = _ref39.team,
    onAdd = _ref39.onAdd,
    onClose = _ref39.onClose;
  var _useState99 = useState(""),
    _useState100 = _slicedToArray(_useState99, 2),
    name = _useState100[0],
    setName = _useState100[1];
  var _useState101 = useState("Jogador"),
    _useState102 = _slicedToArray(_useState101, 2),
    pos = _useState102[0],
    setPos = _useState102[1];
  var _useState103 = useState(""),
    _useState104 = _slicedToArray(_useState103, 2),
    phone = _useState104[0],
    setPhone = _useState104[1];
  var _useState105 = useState(""),
    _useState106 = _slicedToArray(_useState105, 2),
    bday = _useState106[0],
    setBday = _useState106[1];
  var _useState107 = useState("player"),
    _useState108 = _slicedToArray(_useState107, 2),
    role = _useState108[0],
    setRole = _useState108[1];
  var ok = name.trim().length > 1;
  var initials = name.trim().split(" ").map(function (w) {
    return w[0];
  }).join("").slice(0, 2).toUpperCase();
  return React.createElement(Sheet, {
    title: "\u2795 Adicionar membro",
    onClose: onClose
  }, React.createElement(FL, null, "Nome"), React.createElement(FI, {
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    placeholder: "Nome completo"
  }), React.createElement(FL, null, "Posi\xE7\xE3o"), React.createElement(PositionSelect, {
    value: pos,
    onChange: function onChange(e) {
      return setPos(e.target.value);
    }
  }), React.createElement(FL, null, "Telefone"), React.createElement(FI, {
    type: "tel",
    value: phone,
    onChange: function onChange(e) {
      return setPhone(e.target.value);
    },
    placeholder: "+351 / +41..."
  }), React.createElement(FL, null, "Anivers\xE1rio"), React.createElement(FI, {
    type: "date",
    value: bday,
    onChange: function onChange(e) {
      return setBday(e.target.value);
    }
  }), React.createElement(FL, null, "Fun\xE7\xE3o na equipa"), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 16
    }
  }, [["player", "👤 Jogador"], ["admin", "👑 Administrador"]].map(function (_ref40) {
    var _ref41 = _slicedToArray(_ref40, 2),
      v = _ref41[0],
      l = _ref41[1];
    return React.createElement("button", {
      key: v,
      onClick: function onClick() {
        return setRole(v);
      },
      style: {
        flex: 1,
        padding: "12px",
        borderRadius: 12,
        border: "2px solid ".concat(role === v ? v === "admin" ? T.yellow : team.color : T.border),
        background: role === v ? v === "admin" ? "".concat(T.yellow, "18") : "".concat(team.color, "15") : T.inputBg,
        cursor: "pointer",
        fontWeight: 700,
        fontSize: 14,
        fontFamily: "inherit"
      }
    }, l);
  })), React.createElement(PrimaryBtn, {
    onClick: function onClick() {
      if (!ok) return;
      onAdd({
        teamId: team.id,
        userId: Date.now(),
        name: name.trim(),
        initials: initials || name[0].toUpperCase(),
        position: pos,
        phone: phone,
        birthday: bday,
        role: role
      });
      onClose();
    },
    disabled: !ok,
    color: team.color
  }, "Adicionar ", role === "admin" ? "administrador" : "jogador"));
};
var EMOJIS = ["⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🥅", "🏸", "🏓", "🏒", "🥊", "🏊", "🚴", "🏋️", "🏖️", "🎯", "🏆", "🤺"];
var COLORS = ["#1D3557", "#2A7D4F", "#C77B2A", "#7B2D8B", "#1565C0", "#C62828", "#00695C", "#E65100", "#37474F", "#558B2F"];
var COUNTRIES = ["Portugal", "Suíça", "Espanha", "França", "Alemanha", "Itália", "Brasil", "Angola", "Moçambique", "Cabo Verde", "Reino Unido", "Holanda", "Bélgica", "Outro"];
var SPORTS = ["Futebol 11", "Futebol 7", "Futebol 5 / Futsal", "Futebol de Praia", "Futebol Feminino", "Futebol Júnior", "Outro"];
var CURRENCIES = ["EUR (€)", "CHF (Fr.)", "GBP (£)", "BRL (R$)", "USD ($)"];
var CreateTeamModal = function CreateTeamModal(_ref42) {
  var onAdd = _ref42.onAdd,
    onClose = _ref42.onClose;
  var _useState109 = useState(""),
    _useState110 = _slicedToArray(_useState109, 2),
    name = _useState110[0],
    setName = _useState110[1];
  var _useState111 = useState("⚽"),
    _useState112 = _slicedToArray(_useState111, 2),
    emoji = _useState112[0],
    setEmoji = _useState112[1];
  var _useState113 = useState("#1D3557"),
    _useState114 = _slicedToArray(_useState113, 2),
    color = _useState114[0],
    setColor = _useState114[1];
  var _useState115 = useState("2025/26"),
    _useState116 = _slicedToArray(_useState115, 2),
    season = _useState116[0],
    setSeason = _useState116[1];
  var _useState117 = useState("Portugal"),
    _useState118 = _slicedToArray(_useState117, 2),
    country = _useState118[0],
    setCountry = _useState118[1];
  var _useState119 = useState("Futebol 11"),
    _useState120 = _slicedToArray(_useState119, 2),
    sport = _useState120[0],
    setSport = _useState120[1];
  var _useState121 = useState("EUR (€)"),
    _useState122 = _slicedToArray(_useState121, 2),
    currency = _useState122[0],
    setCurrency = _useState122[1];
  var _useState123 = useState(""),
    _useState124 = _slicedToArray(_useState123, 2),
    city = _useState124[0],
    setCity = _useState124[1];
  var _useState125 = useState(""),
    _useState126 = _slicedToArray(_useState125, 2),
    postal = _useState126[0],
    setPostal = _useState126[1];
  var ok = name.trim().length > 1;
  return React.createElement(Sheet, {
    title: "\uD83C\uDFC6 Criar equipa",
    onClose: onClose
  }, React.createElement(FL, null, "Nome da equipa"), React.createElement(FI, {
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    placeholder: "Ex: FC Selzach"
  }), React.createElement(FL, null, "Pa\xEDs"), React.createElement(FSel, {
    value: country,
    onChange: function onChange(e) {
      return setCountry(e.target.value);
    }
  }, COUNTRIES.map(function (c) {
    return React.createElement("option", {
      key: c,
      value: c
    }, c);
  })), React.createElement(FL, null, "Desporto"), React.createElement(FSel, {
    value: sport,
    onChange: function onChange(e) {
      return setSport(e.target.value);
    }
  }, SPORTS.map(function (s) {
    return React.createElement("option", {
      key: s,
      value: s
    }, s);
  })), React.createElement(FL, null, "Moeda"), React.createElement(FSel, {
    value: currency,
    onChange: function onChange(e) {
      return setCurrency(e.target.value);
    }
  }, CURRENCIES.map(function (c) {
    return React.createElement("option", {
      key: c,
      value: c
    }, c);
  })), React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, React.createElement("div", {
    style: {
      flex: 2
    }
  }, React.createElement(FL, null, "Cidade"), React.createElement(FI, {
    value: city,
    onChange: function onChange(e) {
      return setCity(e.target.value);
    },
    placeholder: "Ex: Selzach"
  })), React.createElement("div", {
    style: {
      flex: 1
    }
  }, React.createElement(FL, null, "C\xF3d. Postal"), React.createElement(FI, {
    value: postal,
    onChange: function onChange(e) {
      return setPostal(e.target.value);
    },
    placeholder: "2545"
  }))), React.createElement(FL, null, "Temporada"), React.createElement(FI, {
    value: season,
    onChange: function onChange(e) {
      return setSeason(e.target.value);
    },
    placeholder: "Ex: 2025/26"
  }), React.createElement(FL, null, "\xCDcone"), React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 14
    }
  }, EMOJIS.map(function (e) {
    return React.createElement("button", {
      key: e,
      onClick: function onClick() {
        return setEmoji(e);
      },
      style: {
        width: 42,
        height: 42,
        borderRadius: 10,
        border: "2px solid ".concat(emoji === e ? T.brand : T.border),
        background: emoji === e ? "".concat(T.brand, "15") : T.inputBg,
        cursor: "pointer",
        fontSize: 22
      }
    }, e);
  })), React.createElement(FL, null, "Cor"), React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 16
    }
  }, COLORS.map(function (c) {
    return React.createElement("button", {
      key: c,
      onClick: function onClick() {
        return setColor(c);
      },
      style: {
        width: 36,
        height: 36,
        borderRadius: 18,
        background: c,
        border: "3px solid ".concat(color === c ? "#000" : "transparent"),
        cursor: "pointer"
      }
    });
  })), React.createElement(PrimaryBtn, {
    onClick: function onClick() {
      if (!ok) return;
      onAdd({
        name: name.trim(),
        emoji: emoji,
        color: color,
        season: season,
        country: country,
        sport: sport,
        currency: currency,
        city: city,
        postal: postal
      });
      onClose();
    },
    disabled: !ok,
    color: color
  }, "Criar equipa \"", name || "...", "\""));
};
var EditProfileModal = function EditProfileModal(_ref43) {
  var user = _ref43.user,
    onSave = _ref43.onSave,
    onClose = _ref43.onClose;
  var _useState127 = useState(user.name),
    _useState128 = _slicedToArray(_useState127, 2),
    name = _useState128[0],
    setName = _useState128[1];
  var _useState129 = useState(user.position),
    _useState130 = _slicedToArray(_useState129, 2),
    pos = _useState130[0],
    setPos = _useState130[1];
  var _useState131 = useState(user.phone),
    _useState132 = _slicedToArray(_useState131, 2),
    phone = _useState132[0],
    setPhone = _useState132[1];
  var _useState133 = useState(user.birthday),
    _useState134 = _slicedToArray(_useState133, 2),
    bday = _useState134[0],
    setBday = _useState134[1];
  return React.createElement(Sheet, {
    title: "\u270F\uFE0F Editar perfil",
    onClose: onClose
  }, React.createElement(FL, null, "Nome"), React.createElement(FI, {
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  }), React.createElement(FL, null, "Posi\xE7\xE3o"), React.createElement(PositionSelect, {
    value: pos,
    onChange: function onChange(e) {
      return setPos(e.target.value);
    }
  }), React.createElement(FL, null, "Telefone"), React.createElement(FI, {
    type: "tel",
    value: phone,
    onChange: function onChange(e) {
      return setPhone(e.target.value);
    }
  }), React.createElement(FL, null, "Anivers\xE1rio"), React.createElement(FI, {
    type: "date",
    value: bday,
    onChange: function onChange(e) {
      return setBday(e.target.value);
    }
  }), React.createElement(PrimaryBtn, {
    onClick: function onClick() {
      onSave(_objectSpread(_objectSpread({}, user), {}, {
        name: name,
        position: pos,
        phone: phone,
        birthday: bday
      }));
      onClose();
    },
    color: T.navy
  }, "Guardar perfil"));
};
var EditMemberModal = function EditMemberModal(_ref44) {
  var member = _ref44.member,
    team = _ref44.team,
    onSave = _ref44.onSave,
    onClose = _ref44.onClose;
  var _useState135 = useState(member.name),
    _useState136 = _slicedToArray(_useState135, 2),
    name = _useState136[0],
    setName = _useState136[1];
  var _useState137 = useState(member.position || "Jogador"),
    _useState138 = _slicedToArray(_useState137, 2),
    pos = _useState138[0],
    setPos = _useState138[1];
  var _useState139 = useState(member.phone || ""),
    _useState140 = _slicedToArray(_useState139, 2),
    phone = _useState140[0],
    setPhone = _useState140[1];
  var _useState141 = useState(member.birthday || ""),
    _useState142 = _slicedToArray(_useState141, 2),
    bday = _useState142[0],
    setBday = _useState142[1];
  return React.createElement(Sheet, {
    title: "\u270F\uFE0F Editar \u2014 ".concat(member.name.split(" ")[0]),
    onClose: onClose
  }, React.createElement(FL, null, "Nome"), React.createElement(FI, {
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  }), React.createElement(FL, null, "Posi\xE7\xE3o"), React.createElement(PositionSelect, {
    value: pos,
    onChange: function onChange(e) {
      return setPos(e.target.value);
    }
  }), React.createElement(FL, null, "Telefone"), React.createElement(FI, {
    type: "tel",
    value: phone,
    onChange: function onChange(e) {
      return setPhone(e.target.value);
    },
    placeholder: "+351 / +41..."
  }), React.createElement(FL, null, "Anivers\xE1rio"), React.createElement(FI, {
    type: "date",
    value: bday,
    onChange: function onChange(e) {
      return setBday(e.target.value);
    }
  }), React.createElement(PrimaryBtn, {
    onClick: function onClick() {
      onSave(member.id, {
        name: name,
        position: pos,
        phone: phone,
        birthday: bday
      });
      onClose();
    },
    color: team.color
  }, "Guardar altera\xE7\xF5es"));
};
var JoinTeamModal = function JoinTeamModal(_ref45) {
  var teams = _ref45.teams,
    user = _ref45.user,
    onFindByCode = _ref45.onFindByCode,
    onJoin = _ref45.onJoin,
    onClose = _ref45.onClose,
    _ref45$initialCode = _ref45.initialCode,
    initialCode = _ref45$initialCode === void 0 ? "" : _ref45$initialCode;
  var _useState143 = useState(initialCode.toUpperCase()),
    _useState144 = _slicedToArray(_useState143, 2),
    code = _useState144[0],
    setCode = _useState144[1];
  var _useState145 = useState(null),
    _useState146 = _slicedToArray(_useState145, 2),
    found = _useState146[0],
    setFound = _useState146[1];
  var _useState147 = useState(false),
    _useState148 = _slicedToArray(_useState147, 2),
    joined = _useState148[0],
    setJoined = _useState148[1];
  var _useState149 = useState(false),
    _useState150 = _slicedToArray(_useState149, 2),
    searching = _useState150[0],
    setSearching = _useState150[1];
  useEffect(function () {
    if (initialCode) {
      setTimeout(function () {
        return search(initialCode);
      }, 500);
    }
  }, []);
  var search = function () {
    var _ref46 = _asyncToGenerator(_regenerator().m(function _callee18(c) {
      var q, t, _t25;
      return _regenerator().w(function (_context18) {
        while (1) switch (_context18.n) {
          case 0:
            q = (c || code).trim().toUpperCase();
            if (q) {
              _context18.n = 1;
              break;
            }
            return _context18.a(2);
          case 1:
            setSearching(true);
            if (!onFindByCode) {
              _context18.n = 3;
              break;
            }
            _context18.n = 2;
            return onFindByCode(q);
          case 2:
            _t25 = _context18.v;
            _context18.n = 4;
            break;
          case 3:
            _t25 = teams.find(function (t) {
              var _t$inviteCode;
              return ((_t$inviteCode = t.inviteCode) === null || _t$inviteCode === void 0 ? void 0 : _t$inviteCode.toUpperCase()) === q;
            });
          case 4:
            t = _t25;
            setFound(t || "notfound");
            setSearching(false);
          case 5:
            return _context18.a(2);
        }
      }, _callee18);
    }));
    return function search(_x2) {
      return _ref46.apply(this, arguments);
    };
  }();
  var accept = function () {
    var _ref47 = _asyncToGenerator(_regenerator().m(function _callee19() {
      return _regenerator().w(function (_context19) {
        while (1) switch (_context19.n) {
          case 0:
            _context19.n = 1;
            return onJoin(found);
          case 1:
            setJoined(true);
          case 2:
            return _context19.a(2);
        }
      }, _callee19);
    }));
    return function accept() {
      return _ref47.apply(this, arguments);
    };
  }();
  return React.createElement(Sheet, {
    title: "\uD83D\uDD17 Entrar numa equipa",
    onClose: onClose
  }, !joined ? React.createElement(React.Fragment, null, React.createElement("div", {
    style: {
      background: "".concat(T.navy, "10"),
      borderRadius: 14,
      padding: "14px 16px",
      marginBottom: 16
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: T.navy,
      fontWeight: 600
    }
  }, "Pede ao admin da equipa o c\xF3digo de convite e introduz aqui abaixo.")), React.createElement(FL, null, "C\xF3digo de convite"), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 16
    }
  }, React.createElement("input", {
    value: code,
    onChange: function onChange(e) {
      return setCode(e.target.value.toUpperCase());
    },
    placeholder: "Ex: FCZ-2025",
    style: {
      flex: 1,
      padding: "12px 14px",
      borderRadius: 12,
      border: "1.5px solid ".concat(T.border),
      fontSize: 16,
      background: T.inputBg,
      outline: "none",
      fontFamily: "inherit",
      fontWeight: 700,
      letterSpacing: 1
    }
  }), React.createElement("button", {
    onClick: function onClick() {
      return search();
    },
    disabled: searching,
    style: {
      padding: "12px 18px",
      borderRadius: 12,
      background: T.navy,
      border: "none",
      color: "#fff",
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      fontSize: 15
    }
  }, searching ? "..." : "Buscar")), found === "notfound" && React.createElement("div", {
    style: {
      background: "".concat(T.brand, "12"),
      borderRadius: 12,
      padding: "12px 16px",
      marginBottom: 16
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      color: T.brand,
      fontWeight: 600,
      fontSize: 14
    }
  }, "\u274C C\xF3digo n\xE3o encontrado. Confirma com o admin.")), found && found !== "notfound" && React.createElement("div", {
    style: {
      background: T.card,
      borderRadius: 16,
      border: "2px solid ".concat(found.color),
      overflow: "hidden",
      marginBottom: 20
    }
  }, React.createElement("div", {
    style: {
      background: "linear-gradient(135deg,".concat(found.color, ",").concat(found.color, "cc)"),
      padding: "16px 16px 14px",
      color: "#fff"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 12,
      background: "rgba(255,255,255,0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 26
    }
  }, found.emoji), React.createElement("div", null, React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 800,
      fontSize: 18
    }
  }, found.name), React.createElement("p", {
    style: {
      margin: 0,
      opacity: 0.75,
      fontSize: 13
    }
  }, "Temporada ", found.season)))), React.createElement("div", {
    style: {
      padding: "12px 16px"
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: T.sub
    }
  }, "Vais entrar como ", React.createElement("strong", null, "\uD83D\uDC64 Jogador"), ". O admin pode depois alterar a tua fun\xE7\xE3o."))), React.createElement(PrimaryBtn, {
    onClick: accept,
    disabled: !found || found === "notfound",
    color: found && found !== "notfound" ? found.color : T.border
  }, "\u2713 Aceitar convite e entrar")) : React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "20px 0 10px"
    }
  }, React.createElement("p", {
    style: {
      fontSize: 52
    }
  }, "\uD83C\uDF89"), React.createElement("p", {
    style: {
      fontWeight: 800,
      fontSize: 20,
      margin: "8px 0 6px"
    }
  }, "Bem-vindo ao ", found.name, "!"), React.createElement("p", {
    style: {
      color: T.sub,
      fontSize: 14,
      margin: "0 0 24px"
    }
  }, "J\xE1 podes ver os treinos, multas e eventos da equipa."), React.createElement(PrimaryBtn, {
    onClick: onClose,
    color: found.color
  }, "Come\xE7ar")));
};
var TeamPickerModal = function TeamPickerModal(_ref48) {
  var teams = _ref48.teams,
    members = _ref48.members,
    myUserId = _ref48.myUserId,
    currentTeamId = _ref48.currentTeamId,
    onSelect = _ref48.onSelect,
    onClose = _ref48.onClose,
    onCreateTeam = _ref48.onCreateTeam;
  return React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "flex-end",
      zIndex: 150
    },
    onClick: function onClick(e) {
      return e.target === e.currentTarget && onClose();
    }
  }, React.createElement("div", {
    style: {
      background: T.card,
      borderRadius: "22px 22px 0 0",
      padding: "0 16px 36px",
      width: "100%",
      boxSizing: "border-box"
    }
  }, React.createElement("div", {
    style: {
      width: 36,
      height: 4,
      borderRadius: 2,
      background: T.border,
      margin: "12px auto 16px"
    }
  }), React.createElement("p", {
    style: {
      margin: "0 0 14px 4px",
      fontWeight: 800,
      fontSize: 17
    }
  }, "As minhas equipas"), teams.map(function (t) {
    var me = members.find(function (m) {
      return m.teamId === t.id && m.userId === myUserId;
    });
    return React.createElement("button", {
      key: t.id,
      onClick: function onClick() {
        onSelect(t.id);
        onClose();
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        width: "100%",
        padding: "13px 12px",
        borderRadius: 14,
        border: "none",
        cursor: "pointer",
        background: t.id === currentTeamId ? "".concat(t.color, "15") : "transparent",
        marginBottom: 4,
        textAlign: "left",
        fontFamily: "inherit"
      }
    }, React.createElement("div", {
      style: {
        width: 42,
        height: 42,
        borderRadius: 12,
        background: t.color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 22
      }
    }, t.emoji), React.createElement("div", {
      style: {
        flex: 1
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 700,
        fontSize: 16
      }
    }, t.name), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 12,
        color: T.sub
      }
    }, (me === null || me === void 0 ? void 0 : me.role) === "admin" ? "🛡 Admin" : "· Jogador", " \xB7 ", t.season)), t.id === currentTeamId && React.createElement("span", {
      style: {
        color: t.color,
        fontWeight: 800,
        fontSize: 18
      }
    }, "\u2713"));
  }), React.createElement("button", {
    onClick: function onClick() {
      onClose();
      onCreateTeam();
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      width: "100%",
      padding: "13px 12px",
      borderRadius: 14,
      border: "1.5px dashed ".concat(T.border),
      cursor: "pointer",
      background: "transparent",
      marginTop: 8,
      fontFamily: "inherit"
    }
  }, React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 12,
      background: T.bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 22
    }
  }, "\u2795"), React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 700,
      fontSize: 15,
      color: T.sub
    }
  }, "Criar nova equipa"))));
};
var HomeTab = function HomeTab(_ref49) {
  var team = _ref49.team,
    fines = _ref49.fines,
    members = _ref49.members,
    expenses = _ref49.expenses,
    trainings = _ref49.trainings,
    isAdmin = _ref49.isAdmin,
    onAddFine = _ref49.onAddFine;
  var tf = fines.filter(function (f) {
    return f.teamId === team.id;
  });
  var collected = tf.filter(function (f) {
    return f.paid;
  }).reduce(function (s, f) {
    return s + f.amount;
  }, 0);
  var pending = tf.filter(function (f) {
    return !f.paid;
  }).reduce(function (s, f) {
    return s + f.amount;
  }, 0);
  var spent = expenses.filter(function (e) {
    return e.teamId === team.id;
  }).reduce(function (s, e) {
    return s + e.amount;
  }, 0);
  var balance = collected - spent;
  var memberRank = members.filter(function (m) {
    return m.teamId === team.id;
  }).map(function (m) {
    return {
      id: m.id,
      unpaid: tf.filter(function (f) {
        return f.memberId === m.id && !f.paid;
      }).reduce(function (s, f) {
        return s + f.amount;
      }, 0)
    };
  }).sort(function (a, b) {
    return b.unpaid - a.unpaid;
  }).reduce(function (acc, m, i) {
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, m.id, i));
  }, {});
  var recent = _toConsumableArray(tf).sort(function (a, b) {
    var _memberRank$a$memberI, _memberRank$b$memberI;
    var rankDiff = ((_memberRank$a$memberI = memberRank[a.memberId]) !== null && _memberRank$a$memberI !== void 0 ? _memberRank$a$memberI : 99) - ((_memberRank$b$memberI = memberRank[b.memberId]) !== null && _memberRank$b$memberI !== void 0 ? _memberRank$b$memberI : 99);
    if (rankDiff !== 0) return rankDiff;
    return new Date(b.date) - new Date(a.date);
  });
  var upcoming = trainings.filter(function (t) {
    return t.teamId === team.id && !isPast(t.date);
  }).sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  }).slice(0, 2);
  var gm = function gm(id) {
    return members.find(function (m) {
      return m.id === id;
    });
  };
  return React.createElement("div", {
    style: {
      padding: "16px 16px 100px"
    }
  }, React.createElement("div", {
    style: {
      background: "linear-gradient(135deg, ".concat(team.color, ", ").concat(team.color, "cc)"),
      borderRadius: 22,
      padding: "22px 22px 18px",
      marginBottom: 14,
      color: "#fff",
      boxShadow: "0 6px 24px ".concat(team.color, "44")
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      opacity: 0.7,
      fontWeight: 600,
      textTransform: "uppercase"
    }
  }, "Caixa \xB7 ", team.season), React.createElement("p", {
    style: {
      margin: "2px 0 16px",
      fontSize: 44,
      fontWeight: 900,
      letterSpacing: -2
    }
  }, balance.toFixed(2), "\u20AC"), React.createElement("div", {
    style: {
      display: "flex"
    }
  }, [["Recebido", "+".concat(collected, "\u20AC"), "#fff"], ["Por pagar", "".concat(pending, "\u20AC"), "#FFD6D6"], ["Despesas", "-".concat(spent, "\u20AC"), "rgba(255,255,255,0.65)"]].map(function (_ref50, i, arr) {
    var _ref51 = _slicedToArray(_ref50, 3),
      l = _ref51[0],
      v = _ref51[1],
      c = _ref51[2];
    return React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.25)" : "none",
        paddingRight: i < arr.length - 1 ? 12 : 0,
        paddingLeft: i > 0 ? 12 : 0
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 10,
        opacity: 0.65,
        textTransform: "uppercase"
      }
    }, l), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 17,
        fontWeight: 700,
        color: c
      }
    }, v));
  }))), isAdmin && React.createElement("button", {
    onClick: onAddFine,
    style: {
      width: "100%",
      background: T.brand,
      color: "#fff",
      border: "none",
      borderRadius: 14,
      padding: "15px",
      fontSize: 16,
      fontWeight: 800,
      cursor: "pointer",
      marginBottom: 18,
      fontFamily: "inherit"
    }
  }, "\uD83D\uDFE5 Atribuir multa"), function () {
    var tm = members.filter(function (m) {
      return m.teamId === team.id;
    });
    var ranked = tm.map(function (m) {
      return _objectSpread(_objectSpread({}, m), {}, {
        unpaid: fines.filter(function (f) {
          return f.teamId === team.id && f.memberId === m.id && !f.paid;
        }).reduce(function (s, f) {
          return s + f.amount;
        }, 0)
      });
    }).sort(function (a, b) {
      return b.unpaid - a.unpaid;
    });
    if (ranked.length < 1) return null;
    var podiumItems = [];
    if (ranked.length === 1) {
      podiumItems = [{
        m: ranked[0],
        place: 1,
        medal: "🥇",
        h: 108,
        sz: 56
      }];
    } else if (ranked.length === 2) {
      podiumItems = [{
        m: ranked[1],
        place: 2,
        medal: "🥈",
        h: 76,
        sz: 44
      }, {
        m: ranked[0],
        place: 1,
        medal: "🥇",
        h: 108,
        sz: 56
      }];
    } else {
      podiumItems = [{
        m: ranked[1],
        place: 2,
        medal: "🥈",
        h: 76,
        sz: 44
      }, {
        m: ranked[0],
        place: 1,
        medal: "🥇",
        h: 108,
        sz: 56
      }, {
        m: ranked[2],
        place: 3,
        medal: "🥉",
        h: 56,
        sz: 38
      }];
    }
    var rest = ranked.slice(3);
    var PLACE_COLORS = {
      1: "#FFD700",
      2: "#C0C0C0",
      3: "#CD7F32"
    };
    return React.createElement("div", {
      style: {
        marginBottom: 20
      }
    }, React.createElement("p", {
      style: {
        margin: "0 0 12px",
        fontSize: 12,
        fontWeight: 700,
        color: T.sub,
        textTransform: "uppercase",
        letterSpacing: 1
      }
    }, "\uD83C\uDFC6 Ranking de d\xEDvidas"), React.createElement("div", {
      style: {
        background: "linear-gradient(160deg, ".concat(team.color, "22, ").concat(team.color, "08)"),
        borderRadius: 18,
        padding: "20px 12px 0",
        border: "1.5px solid ".concat(team.color, "30")
      }
    }, React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: 8
      }
    }, podiumItems.map(function (_ref52) {
      var m = _ref52.m,
        place = _ref52.place,
        medal = _ref52.medal,
        h = _ref52.h,
        sz = _ref52.sz;
      var isFirst = place === 1;
      var pc = PLACE_COLORS[place];
      return React.createElement("div", {
        key: m.id,
        style: {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4
        }
      }, React.createElement("span", {
        style: {
          fontSize: isFirst ? 34 : 24
        }
      }, medal), React.createElement("div", {
        style: {
          width: sz,
          height: sz,
          borderRadius: sz / 2,
          background: isFirst ? "linear-gradient(135deg,".concat(team.color, ",").concat(team.color, "aa)") : "".concat(pc, "22"),
          border: "3px solid ".concat(pc),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: isFirst ? "#fff" : T.text,
          fontWeight: 900,
          fontSize: sz * 0.3,
          boxShadow: isFirst ? "0 4px 16px ".concat(team.color, "44") : "none"
        }
      }, m.initials), React.createElement("p", {
        style: {
          margin: 0,
          fontWeight: 700,
          fontSize: isFirst ? 14 : 12,
          textAlign: "center",
          maxWidth: 90,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }
      }, m.name.split(" ")[0]), React.createElement("div", {
        style: {
          background: m.unpaid > 0 ? isFirst ? T.brand : "".concat(T.brand, "22") : isFirst ? "".concat(T.green, "22") : T.bg,
          borderRadius: 10,
          padding: "4px 10px"
        }
      }, React.createElement("p", {
        style: {
          margin: 0,
          fontWeight: 900,
          fontSize: isFirst ? 18 : 14,
          color: m.unpaid > 0 ? isFirst ? "#fff" : T.brand : isFirst ? T.green : T.sub
        }
      }, m.unpaid > 0 ? "".concat(m.unpaid, "\u20AC") : "✓ OK")), React.createElement("div", {
        style: {
          width: "100%",
          height: h,
          background: "".concat(pc, "25"),
          borderRadius: "10px 10px 0 0",
          marginTop: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "inset 0 -3px 0 ".concat(pc, "60")
        }
      }, React.createElement("p", {
        style: {
          margin: 0,
          fontWeight: 900,
          fontSize: 28,
          color: pc,
          opacity: 0.6
        }
      }, place)));
    }))), rest.map(function (m, i) {
      return React.createElement("div", {
        key: m.id,
        style: {
          background: T.card,
          borderRadius: 14,
          padding: "12px 16px",
          marginTop: 6,
          display: "flex",
          alignItems: "center",
          gap: 12
        }
      }, React.createElement("span", {
        style: {
          fontSize: 16,
          width: 28,
          textAlign: "center",
          color: T.sub,
          fontWeight: 700
        }
      }, i + 4), React.createElement("div", {
        style: {
          width: 36,
          height: 36,
          borderRadius: 18,
          background: T.bg,
          border: "2px solid ".concat(T.border),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          fontSize: 12,
          color: T.sub
        }
      }, m.initials), React.createElement("p", {
        style: {
          margin: 0,
          flex: 1,
          fontWeight: 600,
          fontSize: 15
        }
      }, m.name), React.createElement("p", {
        style: {
          margin: 0,
          fontWeight: 800,
          fontSize: 15,
          color: m.unpaid > 0 ? T.brand : T.sub
        }
      }, m.unpaid > 0 ? "".concat(m.unpaid, "\u20AC") : "✓"));
    }));
  }(), upcoming.length > 0 && React.createElement(React.Fragment, null, React.createElement(Sec, {
    label: "Pr\xF3ximos treinos"
  }), upcoming.map(function (t) {
    return React.createElement("div", {
      key: t.id,
      style: {
        background: T.card,
        borderRadius: 14,
        padding: "13px 14px",
        marginBottom: 8,
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, React.createElement("div", {
      style: {
        width: 44,
        height: 44,
        borderRadius: 10,
        background: "".concat(team.color, "18"),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 18,
        fontWeight: 900,
        color: team.color,
        lineHeight: 1
      }
    }, new Date(t.date + "T00:00:00").getDate()), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 10,
        color: team.color,
        fontWeight: 700
      }
    }, new Date(t.date + "T00:00:00").toLocaleDateString("pt-PT", {
      month: "short"
    }).toUpperCase())), React.createElement("div", {
      style: {
        flex: 1
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 700,
        fontSize: 15
      }
    }, "\uD83D\uDD50 ", t.time), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        color: T.sub
      }
    }, "\uD83D\uDCCD ", t.location)));
  })), React.createElement(Sec, {
    label: "Multas recentes"
  }), recent.length === 0 && React.createElement("p", {
    style: {
      color: T.sub,
      textAlign: "center",
      padding: "16px 0"
    }
  }, "Sem multas ainda \uD83C\uDF89"), recent.map(function (f) {
    var m = gm(f.memberId);
    return React.createElement("div", {
      key: f.id,
      style: {
        background: T.card,
        borderRadius: 14,
        padding: "13px 14px",
        marginBottom: 8,
        display: "flex",
        alignItems: "center",
        gap: 12,
        borderLeft: "3px solid ".concat(f.paid ? T.green : T.brand)
      }
    }, React.createElement(Avatar, {
      initials: (m === null || m === void 0 ? void 0 : m.initials) || "?",
      color: team.color
    }), React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 700,
        fontSize: 15
      }
    }, m === null || m === void 0 ? void 0 : m.name), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        color: T.sub,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, f.emoji, " ", f.reason)), React.createElement("div", {
      style: {
        textAlign: "right",
        flexShrink: 0
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 800,
        fontSize: 17,
        color: f.paid ? T.green : T.brand
      }
    }, f.amount, "\u20AC"), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 11,
        color: T.sub
      }
    }, f.date.slice(5))));
  }));
};
var FinesTab = function FinesTab(_ref53) {
  var team = _ref53.team,
    fines = _ref53.fines,
    members = _ref53.members,
    isAdmin = _ref53.isAdmin,
    onAddFine = _ref53.onAddFine,
    onTogglePaid = _ref53.onTogglePaid,
    onSelectMember = _ref53.onSelectMember;
  var _useState151 = useState("all"),
    _useState152 = _slicedToArray(_useState151, 2),
    filter = _useState152[0],
    setFilter = _useState152[1];
  var tf = fines.filter(function (f) {
    return f.teamId === team.id;
  });
  var filtered = tf.filter(function (f) {
    return filter === "all" || (filter === "unpaid" ? !f.paid : f.paid);
  }).sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  var gm = function gm(id) {
    return members.find(function (m) {
      return m.id === id;
    });
  };
  return React.createElement("div", {
    style: {
      padding: "14px 16px 100px"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 16
    }
  }, React.createElement(Chip, {
    active: filter === "all",
    color: team.color,
    onClick: function onClick() {
      return setFilter("all");
    }
  }, "Todas (", tf.length, ")"), React.createElement(Chip, {
    active: filter === "unpaid",
    color: T.brand,
    onClick: function onClick() {
      return setFilter("unpaid");
    }
  }, "Por pagar (", tf.filter(function (f) {
    return !f.paid;
  }).length, ")"), React.createElement(Chip, {
    active: filter === "paid",
    color: T.green,
    onClick: function onClick() {
      return setFilter("paid");
    }
  }, "Pagas (", tf.filter(function (f) {
    return f.paid;
  }).length, ")")), filtered.length === 0 && React.createElement("p", {
    style: {
      textAlign: "center",
      color: T.sub,
      padding: 40
    }
  }, "Sem multas \uD83D\uDE4C"), filtered.map(function (f) {
    var m = gm(f.memberId);
    return React.createElement("div", {
      key: f.id,
      style: {
        background: T.card,
        borderRadius: 14,
        padding: "13px 14px",
        marginBottom: 8,
        display: "flex",
        alignItems: "center",
        gap: 12,
        borderLeft: "3px solid ".concat(f.paid ? T.green : T.brand)
      }
    }, React.createElement("span", {
      onClick: function onClick() {
        return m && onSelectMember(m);
      },
      style: {
        fontSize: 26,
        flexShrink: 0,
        cursor: "pointer"
      }
    }, f.emoji), React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        cursor: "pointer"
      },
      onClick: function onClick() {
        return m && onSelectMember(m);
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 700,
        fontSize: 15
      }
    }, m === null || m === void 0 ? void 0 : m.name), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        color: T.sub,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, f.reason), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 11,
        color: T.sub
      }
    }, f.date)), React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 5,
        flexShrink: 0
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 900,
        fontSize: 18,
        color: f.paid ? T.green : T.brand
      }
    }, f.amount, "\u20AC"), isAdmin && React.createElement("button", {
      onClick: function onClick() {
        return onTogglePaid(f.id);
      },
      style: {
        padding: "4px 10px",
        borderRadius: 8,
        border: "1.5px solid ".concat(f.paid ? T.green : T.brand),
        background: "transparent",
        color: f.paid ? T.green : T.brand,
        fontSize: 12,
        fontWeight: 700,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, f.paid ? "✓ Pago" : "Pagar")));
  }), isAdmin && React.createElement("button", {
    onClick: onAddFine,
    style: {
      position: "fixed",
      bottom: 76,
      right: 20,
      width: 56,
      height: 56,
      borderRadius: 28,
      background: T.brand,
      border: "none",
      color: "#fff",
      fontSize: 30,
      cursor: "pointer",
      boxShadow: "0 4px 20px ".concat(T.brand, "55"),
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, "+"));
};
var PresCounter = function PresCounter(_ref54) {
  var count = _ref54.count,
    color = _ref54.color;
  return React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 7,
      background: color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: 13,
      fontWeight: 800
    }
  }, count);
};
var PresBar = function PresBar(_ref55) {
  var t = _ref55.t,
    presences = _ref55.presences,
    myMember = _ref55.myMember,
    team = _ref55.team,
    members = _ref55.members,
    onSetPresence = _ref55.onSetPresence;
  var pres = presences[t.id] || {};
  var tm = members.filter(function (m) {
    return m.teamId === team.id;
  });
  var ok = Object.values(pres).filter(function (s) {
    return s === "present";
  }).length;
  var no = Object.values(pres).filter(function (s) {
    return s === "absent";
  }).length;
  var pend = tm.length - ok - no;
  var me = pres[myMember === null || myMember === void 0 ? void 0 : myMember.id];
  return React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      paddingTop: 10,
      marginTop: 8,
      borderTop: "1px solid ".concat(T.border)
    }
  }, React.createElement(PresCounter, {
    count: ok,
    color: T.green
  }), React.createElement(PresCounter, {
    count: no,
    color: "#FF6B00"
  }), React.createElement(PresCounter, {
    count: pend,
    color: T.sub
  }), !isPast(t.date) && myMember && React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 6
    }
  }, React.createElement("button", {
    onClick: function onClick() {
      return onSetPresence(t.id, myMember.id, me === "present" ? null : "present");
    },
    style: {
      padding: "6px 12px",
      borderRadius: 18,
      border: "1.5px solid ".concat(T.green),
      background: me === "present" ? T.green : "transparent",
      color: me === "present" ? "#fff" : T.green,
      fontSize: 12,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "\u2713 Presente"), React.createElement("button", {
    onClick: function onClick() {
      return onSetPresence(t.id, myMember.id, me === "absent" ? null : "absent");
    },
    style: {
      padding: "6px 12px",
      borderRadius: 18,
      border: "1.5px solid #FF6B00",
      background: me === "absent" ? "#FF6B00" : "transparent",
      color: me === "absent" ? "#fff" : "#FF6B00",
      fontSize: 12,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "\u2717 Ausente")));
};
var EventCard = function EventCard(_ref56) {
  var t = _ref56.t,
    team = _ref56.team,
    members = _ref56.members,
    isAdmin = _ref56.isAdmin,
    ctxMenu = _ref56.ctxMenu,
    setCtxMenu = _ref56.setCtxMenu,
    onDelete = _ref56.onDelete,
    setEditTarget = _ref56.setEditTarget,
    myMember = _ref56.myMember,
    presences = _ref56.presences,
    onSetPresence = _ref56.onSetPresence;
  var past = isPast(t.date);
  var isJogo = t.type === "jogo";
  var dt = new Date(t.date + "T00:00:00");
  var dayNum = dt.getDate();
  var weekday = dt.toLocaleDateString("pt-PT", {
    weekday: "long"
  });
  var squadMembers = isJogo ? (t.squad || []).map(function (id) {
    return members.find(function (m) {
      return m.id === id;
    });
  }).filter(Boolean) : [];
  return React.createElement("div", {
    style: {
      background: T.card,
      borderRadius: 14,
      marginBottom: 10,
      overflow: "hidden",
      borderLeft: "3px solid ".concat(past ? T.sub : isJogo ? T.brand : team.color),
      opacity: past ? 0.65 : 1
    }
  }, React.createElement("div", {
    style: {
      padding: "14px 14px 0"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12
    }
  }, React.createElement("div", {
    style: {
      textAlign: "center",
      width: 38,
      flexShrink: 0
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 26,
      fontWeight: 900,
      color: past ? T.sub : isJogo ? T.brand : team.color,
      lineHeight: 1
    }
  }, dayNum), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 9,
      fontWeight: 700,
      color: T.sub,
      textTransform: "uppercase"
    }
  }, dt.toLocaleDateString("pt-PT", {
    month: "short"
  }))), React.createElement("div", {
    style: {
      flex: 1
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexWrap: "wrap"
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 800,
      fontSize: 16
    }
  }, isJogo ? "vs ".concat(t.opponent) : "Treino"), isJogo && React.createElement(Badge, {
    label: t.homeAway === "casa" ? "🏠 Casa" : "✈️ Fora",
    color: t.homeAway === "casa" ? T.green : T.brand
  })), React.createElement("p", {
    style: {
      margin: "2px 0 0",
      fontSize: 13,
      color: T.sub
    }
  }, weekday, ", ", t.time), React.createElement("p", {
    style: {
      margin: "1px 0 0",
      fontSize: 13,
      color: T.sub
    }
  }, "\uD83D\uDCCD ", t.location), t.notes && React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: 13
    }
  }, t.notes), isJogo && squadMembers.length > 0 && React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 4,
      marginTop: 6
    }
  }, squadMembers.map(function (m) {
    return React.createElement("div", {
      key: m.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 4,
        background: T.bg,
        borderRadius: 6,
        padding: "3px 7px"
      }
    }, React.createElement("div", {
      style: {
        width: 18,
        height: 18,
        borderRadius: 9,
        background: team.color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 8,
        fontWeight: 800,
        color: "#fff"
      }
    }, m.initials), React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600
      }
    }, m.name.split(" ")[0]));
  }))), isAdmin && React.createElement("button", {
    onClick: function onClick() {
      return setCtxMenu(ctxMenu === t.id ? null : t.id);
    },
    style: {
      background: "none",
      border: "none",
      fontSize: 22,
      cursor: "pointer",
      color: T.sub,
      padding: "0 4px",
      flexShrink: 0
    }
  }, "\u22EE")), React.createElement(PresBar, {
    t: t,
    presences: presences,
    myMember: myMember,
    team: team,
    members: members,
    onSetPresence: onSetPresence
  })), ctxMenu === t.id && React.createElement("div", {
    style: {
      background: T.bg,
      borderTop: "1px solid ".concat(T.border)
    }
  }, [["✏️ Modificar evento", function () {
    setEditTarget(t);
    setCtxMenu(null);
  }], ["🗑️ Eliminar evento", function () {
    onDelete(t.id);
    setCtxMenu(null);
  }]].map(function (_ref57) {
    var _ref58 = _slicedToArray(_ref57, 2),
      label = _ref58[0],
      action = _ref58[1];
    return React.createElement("button", {
      key: label,
      onClick: action,
      style: {
        display: "block",
        width: "100%",
        padding: "13px 16px",
        background: "transparent",
        border: "none",
        textAlign: "left",
        fontSize: 15,
        cursor: "pointer",
        fontFamily: "inherit",
        color: label.includes("Eliminar") ? T.brand : T.text,
        borderBottom: "1px solid ".concat(T.border)
      }
    }, label);
  })));
};
var TreinosPage = function TreinosPage(_ref59) {
  var team = _ref59.team,
    trainings = _ref59.trainings,
    members = _ref59.members,
    myUserId = _ref59.myUserId,
    isAdmin = _ref59.isAdmin,
    presences = _ref59.presences,
    onSetPresence = _ref59.onSetPresence,
    onAddType = _ref59.onAddType,
    onDelete = _ref59.onDelete,
    onEdit = _ref59.onEdit,
    onBack = _ref59.onBack,
    modal = _ref59.modal,
    setModal = _ref59.setModal;
  var _useState153 = useState(false),
    _useState154 = _slicedToArray(_useState153, 2),
    showPast = _useState154[0],
    setShowPast = _useState154[1];
  var _useState155 = useState(null),
    _useState156 = _slicedToArray(_useState155, 2),
    filterType = _useState156[0],
    setFilterType = _useState156[1];
  var _useState157 = useState(false),
    _useState158 = _slicedToArray(_useState157, 2),
    showFilter = _useState158[0],
    setShowFilter = _useState158[1];
  var _useState159 = useState(null),
    _useState160 = _slicedToArray(_useState159, 2),
    ctxMenu = _useState160[0],
    setCtxMenu = _useState160[1];
  var _useState161 = useState(null),
    _useState162 = _slicedToArray(_useState161, 2),
    editTarget = _useState162[0],
    setEditTarget = _useState162[1];
  var myMember = members.find(function (m) {
    return m.teamId === team.id && m.userId === myUserId;
  });
  var tt = trainings.filter(function (t) {
    return t.teamId === team.id;
  });
  var recurring = tt.filter(function (t) {
    return t.type === "recorrente";
  });
  var dated = tt.filter(function (t) {
    return t.type !== "recorrente";
  }).sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
  var filtered = showPast ? dated : dated.filter(function (t) {
    return !isPast(t.date);
  });
  if (filterType) filtered = filtered.filter(function (t) {
    return t.type === filterType;
  });
  var byMonth = {};
  filtered.forEach(function (t) {
    var dt = new Date(t.date + "T00:00:00");
    var key = dt.toLocaleDateString("pt-PT", {
      month: "long",
      year: "numeric"
    }).toUpperCase();
    if (!byMonth[key]) byMonth[key] = [];
    byMonth[key].push(t);
  });
  return React.createElement("div", {
    style: {
      background: T.bg,
      minHeight: "100vh",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }
  }, React.createElement("div", {
    style: {
      background: "linear-gradient(135deg, ".concat(team.color, ", ").concat(team.color, "cc)"),
      padding: "52px 16px 16px",
      color: "#fff"
    }
  }, React.createElement("button", {
    onClick: onBack,
    style: {
      background: "rgba(255,255,255,0.2)",
      border: "none",
      color: "#fff",
      borderRadius: 10,
      padding: "7px 14px",
      fontSize: 14,
      cursor: "pointer",
      fontWeight: 600,
      fontFamily: "inherit",
      marginBottom: 10
    }
  }, "\u2190 Voltar"), React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 30,
      fontWeight: 900,
      letterSpacing: -1
    }
  }, "Treinos"), React.createElement("p", {
    style: {
      margin: "2px 0 0",
      opacity: 0.7,
      fontSize: 14
    }
  }, team.name, " \xB7 ", team.season)), React.createElement("div", {
    style: {
      background: T.card,
      padding: "10px 16px",
      display: "flex",
      gap: 8,
      alignItems: "center",
      borderBottom: "1px solid ".concat(T.border),
      overflowX: "auto"
    }
  }, React.createElement("button", {
    onClick: function onClick() {
      return setShowPast(!showPast);
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      padding: "8px 14px",
      borderRadius: 20,
      border: "1px solid ".concat(T.border),
      background: showPast ? T.navy : "transparent",
      color: showPast ? "#fff" : T.sub,
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
      fontFamily: "inherit",
      whiteSpace: "nowrap",
      flexShrink: 0
    }
  }, "\uD83D\uDD50 Passado"), isAdmin && React.createElement(React.Fragment, null, React.createElement("button", {
    onClick: function onClick() {
      return setModal("treino");
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      padding: "8px 14px",
      borderRadius: 20,
      border: "none",
      background: team.color,
      color: "#fff",
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      whiteSpace: "nowrap",
      flexShrink: 0,
      boxShadow: "0 2px 10px ".concat(team.color, "44")
    }
  }, "\u26BD Treino"), React.createElement("button", {
    onClick: function onClick() {
      return setModal("recorrente");
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      padding: "8px 14px",
      borderRadius: 20,
      border: "1px solid ".concat(team.color),
      background: "transparent",
      color: team.color,
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      whiteSpace: "nowrap",
      flexShrink: 0
    }
  }, "\uD83D\uDD04"), React.createElement("button", {
    onClick: function onClick() {
      return setModal("jogo");
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      padding: "8px 14px",
      borderRadius: 20,
      border: "1px solid ".concat(team.color),
      background: "transparent",
      color: team.color,
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      whiteSpace: "nowrap",
      flexShrink: 0
    }
  }, "\uD83C\uDFC6")), React.createElement("button", {
    onClick: function onClick() {
      return setShowFilter(true);
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      padding: "8px 14px",
      borderRadius: 20,
      border: "1px solid ".concat(filterType ? team.color : T.border),
      background: filterType ? "".concat(team.color, "15") : "transparent",
      color: filterType ? team.color : T.sub,
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
      fontFamily: "inherit",
      whiteSpace: "nowrap",
      flexShrink: 0,
      marginLeft: "auto"
    }
  }, "\u2261 Filtros", filterType ? " •" : "")), React.createElement("div", {
    style: {
      padding: "12px 16px 60px"
    }
  }, recurring.length > 0 && React.createElement(React.Fragment, null, React.createElement("p", {
    style: {
      margin: "8px 0 8px",
      fontSize: 13,
      fontWeight: 800,
      color: team.color,
      textTransform: "uppercase",
      letterSpacing: 0.5
    }
  }, "\uD83D\uDD04 Recorrentes"), recurring.map(function (t) {
    return React.createElement("div", {
      key: t.id,
      style: {
        background: T.card,
        borderRadius: 14,
        padding: "14px",
        marginBottom: 8,
        display: "flex",
        gap: 12,
        alignItems: "center",
        borderLeft: "3px solid ".concat(team.color)
      }
    }, React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 20,
        background: "".concat(team.color, "18"),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        flexShrink: 0
      }
    }, "\uD83D\uDD04"), React.createElement("div", {
      style: {
        flex: 1
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 700,
        fontSize: 15
      }
    }, (t.days || []).map(function (d) {
      return DAYS_PT[d];
    }).join(", "), " \xB7 ", t.time), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        color: T.sub
      }
    }, "\uD83D\uDCCD ", t.location), t.notes && React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 12,
        color: T.sub
      }
    }, t.notes)), isAdmin && React.createElement("div", {
      style: {
        display: "flex",
        gap: 6
      }
    }, React.createElement("button", {
      onClick: function onClick() {
        return setEditTarget(t);
      },
      style: {
        background: "none",
        border: "none",
        fontSize: 18,
        cursor: "pointer",
        color: T.sub
      }
    }, "\u270F\uFE0F"), React.createElement("button", {
      onClick: function onClick() {
        return onDelete(t.id);
      },
      style: {
        background: "none",
        border: "none",
        fontSize: 18,
        cursor: "pointer",
        color: T.sub
      }
    }, "\uD83D\uDDD1\uFE0F")));
  })), Object.entries(byMonth).map(function (_ref60) {
    var _ref61 = _slicedToArray(_ref60, 2),
      month = _ref61[0],
      evts = _ref61[1];
    return React.createElement("div", {
      key: month
    }, React.createElement("p", {
      style: {
        margin: "16px 0 10px",
        fontSize: 15,
        fontWeight: 900,
        color: team.color,
        textTransform: "uppercase",
        letterSpacing: 0.8
      }
    }, month), evts.map(function (t) {
      return React.createElement(EventCard, {
        key: t.id,
        t: t,
        team: team,
        members: members,
        isAdmin: isAdmin,
        ctxMenu: ctxMenu,
        setCtxMenu: setCtxMenu,
        onDelete: onDelete,
        setEditTarget: setEditTarget,
        myMember: myMember,
        presences: presences,
        onSetPresence: onSetPresence
      });
    }));
  }), Object.keys(byMonth).length === 0 && recurring.length === 0 && React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "52px 0",
      color: T.sub
    }
  }, React.createElement("p", {
    style: {
      fontSize: 44
    }
  }, "\uD83D\uDCCB"), React.createElement("p", {
    style: {
      fontWeight: 700,
      fontSize: 17
    }
  }, "Sem eventos", showPast ? "" : " futuros"), !showPast && React.createElement("p", {
    style: {
      fontSize: 14
    }
  }, "Toca em \"Passado\" para ver hist\xF3rico"), isAdmin && React.createElement("p", {
    style: {
      fontSize: 14
    }
  }, "Ou \"Acrescentar\" para criar"))), showFilter && React.createElement(Sheet, {
    title: "Filtros",
    onClose: function onClose() {
      return setShowFilter(false);
    }
  }, React.createElement("p", {
    style: {
      margin: "0 0 8px",
      fontWeight: 700,
      fontSize: 12,
      color: T.sub,
      textTransform: "uppercase",
      letterSpacing: 0.5
    }
  }, "Tipo de evento"), [[null, "📅 Todos"], ["recorrente", "🔄 Recorrente"], ["treino", "📅 Treino único"], ["jogo", "⚽ Jogo"]].map(function (_ref62) {
    var _ref63 = _slicedToArray(_ref62, 2),
      v = _ref63[0],
      l = _ref63[1];
    return React.createElement("button", {
      key: String(v),
      onClick: function onClick() {
        setFilterType(v);
        setShowFilter(false);
      },
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "14px 0",
        background: "transparent",
        border: "none",
        borderBottom: "1px solid ".concat(T.border),
        cursor: "pointer",
        fontFamily: "inherit",
        fontSize: 15
      }
    }, React.createElement("span", null, l), filterType === v && React.createElement("span", {
      style: {
        color: T.green,
        fontWeight: 700
      }
    }, "\u2713"));
  }), React.createElement("div", {
    style: {
      height: 12
    }
  }), React.createElement(PrimaryBtn, {
    onClick: function onClick() {
      return setShowFilter(false);
    },
    color: team.color
  }, "Fechar")), modal === "treino" && React.createElement(AddSingleTrainingModal, {
    team: team,
    onAdd: (function () {
      var _ref64 = _asyncToGenerator(_regenerator().m(function _callee20(t) {
        return _regenerator().w(function (_context20) {
          while (1) switch (_context20.n) {
            case 0:
              _context20.n = 1;
              return onAddType(t);
            case 1:
              setModal(null);
            case 2:
              return _context20.a(2);
          }
        }, _callee20);
      }));
      return function (_x3) {
        return _ref64.apply(this, arguments);
      };
    }()),
    onClose: function onClose() {
      return setModal(null);
    }
  }), modal === "recorrente" && React.createElement(AddRecurringModal, {
    team: team,
    onAdd: (function () {
      var _ref65 = _asyncToGenerator(_regenerator().m(function _callee21(t) {
        return _regenerator().w(function (_context21) {
          while (1) switch (_context21.n) {
            case 0:
              _context21.n = 1;
              return onAddType(t);
            case 1:
              setModal(null);
            case 2:
              return _context21.a(2);
          }
        }, _callee21);
      }));
      return function (_x4) {
        return _ref65.apply(this, arguments);
      };
    }()),
    onClose: function onClose() {
      return setModal(null);
    }
  }), modal === "jogo" && React.createElement(AddMatchModal, {
    team: team,
    members: members,
    onAdd: (function () {
      var _ref66 = _asyncToGenerator(_regenerator().m(function _callee22(t) {
        return _regenerator().w(function (_context22) {
          while (1) switch (_context22.n) {
            case 0:
              _context22.n = 1;
              return onAddType(t);
            case 1:
              setModal(null);
            case 2:
              return _context22.a(2);
          }
        }, _callee22);
      }));
      return function (_x5) {
        return _ref66.apply(this, arguments);
      };
    }()),
    onClose: function onClose() {
      return setModal(null);
    }
  }), editTarget && editTarget.type === "treino" && React.createElement(EditSingleTrainingModal, {
    team: team,
    training: editTarget,
    onEdit: onEdit,
    onClose: function onClose() {
      return setEditTarget(null);
    }
  }), editTarget && editTarget.type === "jogo" && React.createElement(EditMatchModal, {
    team: team,
    members: members,
    training: editTarget,
    onEdit: onEdit,
    onClose: function onClose() {
      return setEditTarget(null);
    }
  }), editTarget && editTarget.type === "recorrente" && React.createElement(EditRecurringModal, {
    team: team,
    training: editTarget,
    onEdit: onEdit,
    onClose: function onClose() {
      return setEditTarget(null);
    }
  }));
};
var TreasuryTab = function TreasuryTab(_ref67) {
  var team = _ref67.team,
    fines = _ref67.fines,
    members = _ref67.members,
    expenses = _ref67.expenses,
    isAdmin = _ref67.isAdmin,
    onAddExpense = _ref67.onAddExpense;
  var tf = fines.filter(function (f) {
    return f.teamId === team.id && f.paid;
  });
  var te = expenses.filter(function (e) {
    return e.teamId === team.id;
  });
  var income = tf.reduce(function (s, f) {
    return s + f.amount;
  }, 0);
  var spent = te.reduce(function (s, e) {
    return s + e.amount;
  }, 0);
  var balance = income - spent;
  var gm = function gm(id) {
    return members.find(function (m) {
      return m.id === id;
    });
  };
  var allTx = [].concat(_toConsumableArray(tf.map(function (f) {
    var _gm;
    return _objectSpread(_objectSpread({}, f), {}, {
      type: "in",
      label: "Multa \u2014 ".concat((_gm = gm(f.memberId)) === null || _gm === void 0 ? void 0 : _gm.name)
    });
  })), _toConsumableArray(te.map(function (e) {
    return _objectSpread(_objectSpread({}, e), {}, {
      type: "out",
      label: e.description
    });
  }))).sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  return React.createElement("div", {
    style: {
      padding: "14px 16px 100px"
    }
  }, React.createElement("div", {
    style: {
      background: T.card,
      borderRadius: 20,
      padding: "20px 20px 16px",
      marginBottom: 14
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      color: T.sub,
      fontSize: 12,
      fontWeight: 600,
      textTransform: "uppercase"
    }
  }, "Saldo dispon\xEDvel"), React.createElement("p", {
    style: {
      margin: "2px 0 16px",
      fontSize: 42,
      fontWeight: 900,
      color: balance >= 0 ? T.green : T.brand,
      letterSpacing: -2
    }
  }, balance.toFixed(2), "\u20AC"), React.createElement("div", {
    style: {
      display: "flex",
      background: T.bg,
      borderRadius: 12,
      overflow: "hidden"
    }
  }, React.createElement("div", {
    style: {
      flex: 1,
      padding: "12px 16px"
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 11,
      color: T.sub
    }
  }, "Entradas"), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 20,
      fontWeight: 800,
      color: T.green
    }
  }, "+", income, "\u20AC")), React.createElement("div", {
    style: {
      width: 1,
      background: T.border
    }
  }), React.createElement("div", {
    style: {
      flex: 1,
      padding: "12px 16px"
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 11,
      color: T.sub
    }
  }, "Sa\xEDdas"), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 20,
      fontWeight: 800,
      color: T.brand
    }
  }, "-", spent, "\u20AC")))), isAdmin && React.createElement("button", {
    onClick: onAddExpense,
    style: {
      width: "100%",
      background: T.navy,
      color: "#fff",
      border: "none",
      borderRadius: 14,
      padding: "14px",
      fontSize: 15,
      fontWeight: 800,
      cursor: "pointer",
      marginBottom: 20,
      fontFamily: "inherit"
    }
  }, "+ Registar despesa"), React.createElement(Sec, {
    label: "Movimentos (".concat(allTx.length, ")")
  }), allTx.map(function (tx, i) {
    return React.createElement("div", {
      key: i,
      style: {
        background: T.card,
        borderRadius: 12,
        padding: "12px 14px",
        marginBottom: 7,
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, React.createElement("div", {
      style: {
        width: 38,
        height: 38,
        borderRadius: 19,
        background: tx.type === "in" ? "".concat(T.green, "18") : "".concat(T.brand, "18"),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 18
      }
    }, tx.type === "in" ? "⬆️" : "⬇️"), React.createElement("div", {
      style: {
        flex: 1
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 600,
        fontSize: 14
      }
    }, tx.label), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 12,
        color: T.sub
      }
    }, tx.date)), React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 800,
        fontSize: 17,
        color: tx.type === "in" ? T.green : T.brand
      }
    }, tx.type === "in" ? "+" : "-", tx.amount, "\u20AC"));
  }));
};
var AppAdminTab = function AppAdminTab(_ref68) {
  var token = _ref68.token;
  var _useState163 = useState(null),
    _useState164 = _slicedToArray(_useState163, 2),
    stats = _useState164[0],
    setStats = _useState164[1];
  var _useState165 = useState([]),
    _useState166 = _slicedToArray(_useState165, 2),
    users = _useState166[0],
    setUsers = _useState166[1];
  var _useState167 = useState([]),
    _useState168 = _slicedToArray(_useState167, 2),
    teams = _useState168[0],
    setTeams = _useState168[1];
  var _useState169 = useState("stats"),
    _useState170 = _slicedToArray(_useState169, 2),
    section = _useState170[0],
    setSection = _useState170[1];
  var _useState171 = useState(null),
    _useState172 = _slicedToArray(_useState171, 2),
    selectedTeam = _useState172[0],
    setSelectedTeam = _useState172[1];
  var _useState173 = useState(null),
    _useState174 = _slicedToArray(_useState173, 2),
    teamDetail = _useState174[0],
    setTeamDetail = _useState174[1];
  var _useState175 = useState(false),
    _useState176 = _slicedToArray(_useState175, 2),
    detailLoading = _useState176[0],
    setDetailLoading = _useState176[1];
  var _useState177 = useState(true),
    _useState178 = _slicedToArray(_useState177, 2),
    loading = _useState178[0],
    setLoading = _useState178[1];
  useEffect(function () {
    var load = function () {
      var _ref69 = _asyncToGenerator(_regenerator().m(function _callee23() {
        var rpc, _yield$Promise$all, _yield$Promise$all2, sr, ur, tr, _t26, _t27, _t28, _t29, _t30, _t31;
        return _regenerator().w(function (_context23) {
          while (1) switch (_context23.p = _context23.n) {
            case 0:
              _context23.p = 0;
              rpc = function rpc(fn) {
                var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "{}";
                return fetch("".concat(SB_URL, "/rest/v1/rpc/").concat(fn), {
                  method: 'POST',
                  headers: {
                    'apikey': SB_KEY,
                    'Authorization': "Bearer ".concat(token),
                    'Content-Type': 'application/json'
                  },
                  body: body
                });
              };
              _context23.n = 1;
              return Promise.all([rpc("get_app_admin_stats"), rpc("get_app_user_list"), rpc("get_all_teams_admin")]);
            case 1:
              _yield$Promise$all = _context23.v;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 3);
              sr = _yield$Promise$all2[0];
              ur = _yield$Promise$all2[1];
              tr = _yield$Promise$all2[2];
              if (!sr.ok) {
                _context23.n = 3;
                break;
              }
              _t26 = setStats;
              _context23.n = 2;
              return sr.json();
            case 2:
              _t26(_context23.v);
            case 3:
              if (!ur.ok) {
                _context23.n = 6;
                break;
              }
              _t27 = setUsers;
              _context23.n = 4;
              return ur.json();
            case 4:
              _t28 = _context23.v;
              if (_t28) {
                _context23.n = 5;
                break;
              }
              _t28 = [];
            case 5:
              _t27(_t28);
            case 6:
              if (!tr.ok) {
                _context23.n = 9;
                break;
              }
              _t29 = setTeams;
              _context23.n = 7;
              return tr.json();
            case 7:
              _t30 = _context23.v;
              if (_t30) {
                _context23.n = 8;
                break;
              }
              _t30 = [];
            case 8:
              _t29(_t30);
            case 9:
              _context23.n = 11;
              break;
            case 10:
              _context23.p = 10;
              _t31 = _context23.v;
              console.error(_t31);
            case 11:
              setLoading(false);
            case 12:
              return _context23.a(2);
          }
        }, _callee23, null, [[0, 10]]);
      }));
      return function load() {
        return _ref69.apply(this, arguments);
      };
    }();
    load();
  }, [token]);
  var _useState179 = useState(null),
    _useState180 = _slicedToArray(_useState179, 2),
    detailError = _useState180[0],
    setDetailError = _useState180[1];
  var openTeam = function () {
    var _ref70 = _asyncToGenerator(_regenerator().m(function _callee24(team) {
      var r, data, _t32;
      return _regenerator().w(function (_context24) {
        while (1) switch (_context24.p = _context24.n) {
          case 0:
            setSelectedTeam(team);
            setTeamDetail(null);
            setDetailLoading(true);
            setDetailError(null);
            _context24.p = 1;
            _context24.n = 2;
            return fetch("".concat(SB_URL, "/rest/v1/rpc/get_team_details_admin"), {
              method: 'POST',
              headers: {
                'apikey': SB_KEY,
                'Authorization': "Bearer ".concat(token),
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                p_team_id: team.id
              })
            });
          case 2:
            r = _context24.v;
            _context24.n = 3;
            return r.json();
          case 3:
            data = _context24.v;
            if (r.ok) {
              setTeamDetail(data || {
                members: [],
                recent_fines: [],
                trainings: []
              });
            } else {
              setDetailError((data === null || data === void 0 ? void 0 : data.message) || (data === null || data === void 0 ? void 0 : data.error) || "Erro ".concat(r.status));
            }
            _context24.n = 5;
            break;
          case 4:
            _context24.p = 4;
            _t32 = _context24.v;
            setDetailError(_t32.message);
          case 5:
            setDetailLoading(false);
          case 6:
            return _context24.a(2);
        }
      }, _callee24, null, [[1, 4]]);
    }));
    return function openTeam(_x6) {
      return _ref70.apply(this, arguments);
    };
  }();
  if (loading) return React.createElement(Spinner, {
    msg: "A carregar painel admin..."
  });
  if (selectedTeam) {
    return React.createElement("div", {
      style: {
        background: T.bg,
        minHeight: "100vh",
        paddingBottom: 80
      }
    }, React.createElement("div", {
      style: {
        background: "linear-gradient(135deg,".concat(T.navy, ",#0d1f36)"),
        padding: "52px 16px 16px"
      }
    }, React.createElement("button", {
      onClick: function onClick() {
        return setSelectedTeam(null);
      },
      style: {
        background: "rgba(255,255,255,0.15)",
        border: "none",
        color: "#fff",
        borderRadius: 20,
        padding: "6px 14px",
        cursor: "pointer",
        fontFamily: "inherit",
        fontWeight: 700,
        marginBottom: 12
      }
    }, "\u2190 Voltar"), React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, React.createElement("span", {
      style: {
        fontSize: 32
      }
    }, selectedTeam.emoji), React.createElement("div", null, React.createElement("h2", {
      style: {
        margin: 0,
        color: "#fff",
        fontSize: 20,
        fontWeight: 900
      }
    }, selectedTeam.name), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        color: "rgba(255,255,255,0.5)"
      }
    }, selectedTeam.season, " \xB7 ", selectedTeam.members_count, " membros")))), React.createElement("div", {
      style: {
        padding: "16px"
      }
    }, detailLoading && React.createElement(Spinner, {
      msg: "A carregar..."
    }), detailError && React.createElement("div", {
      style: {
        background: "#FFE5E5",
        borderRadius: 12,
        padding: "12px 16px",
        color: "#c0392b",
        fontSize: 14
      }
    }, "\u274C ", detailError), teamDetail && React.createElement(React.Fragment, null, React.createElement("p", {
      style: {
        margin: "0 0 10px",
        fontSize: 12,
        fontWeight: 700,
        color: T.sub,
        textTransform: "uppercase",
        letterSpacing: 1
      }
    }, "\uD83D\uDC65 Membros"), (teamDetail.members || []).map(function (m, i) {
      return React.createElement("div", {
        key: i,
        style: {
          background: T.card,
          borderRadius: 14,
          padding: "12px 14px",
          marginBottom: 8,
          display: "flex",
          alignItems: "center",
          gap: 10
        }
      }, React.createElement("div", {
        style: {
          width: 38,
          height: 38,
          borderRadius: 19,
          background: m.role === "admin" ? T.navy : T.bg,
          border: "2px solid ".concat(m.role === "admin" ? T.navy : T.border),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          fontSize: 13,
          color: m.role === "admin" ? "#fff" : T.sub,
          flexShrink: 0
        }
      }, (m.name || "?")[0].toUpperCase()), React.createElement("div", {
        style: {
          flex: 1
        }
      }, React.createElement("p", {
        style: {
          margin: 0,
          fontWeight: 700,
          fontSize: 14
        }
      }, m.name || "—"), React.createElement("p", {
        style: {
          margin: 0,
          fontSize: 12,
          color: T.sub
        }
      }, m.position || "—", " \xB7 ", m.role === "admin" ? "Admin" : "Jogador")), m.unpaid_amount > 0 && React.createElement("div", {
        style: {
          background: "".concat(T.brand, "15"),
          borderRadius: 10,
          padding: "4px 10px"
        }
      }, React.createElement("p", {
        style: {
          margin: 0,
          fontWeight: 900,
          fontSize: 13,
          color: T.brand
        }
      }, m.unpaid_amount, "\u20AC")));
    }), (teamDetail.recent_fines || []).length > 0 && React.createElement(React.Fragment, null, React.createElement("p", {
      style: {
        margin: "16px 0 10px",
        fontSize: 12,
        fontWeight: 700,
        color: T.sub,
        textTransform: "uppercase",
        letterSpacing: 1
      }
    }, "\uD83D\uDFE5 Multas recentes"), (teamDetail.recent_fines || []).map(function (f, i) {
      return React.createElement("div", {
        key: i,
        style: {
          background: T.card,
          borderRadius: 12,
          padding: "10px 14px",
          marginBottom: 6,
          display: "flex",
          alignItems: "center",
          gap: 10
        }
      }, React.createElement("span", {
        style: {
          fontSize: 20
        }
      }, f.emoji || "🟥"), React.createElement("div", {
        style: {
          flex: 1
        }
      }, React.createElement("p", {
        style: {
          margin: 0,
          fontWeight: 700,
          fontSize: 13
        }
      }, f.member_name, " \u2014 ", f.amount, "\u20AC"), React.createElement("p", {
        style: {
          margin: 0,
          fontSize: 12,
          color: T.sub
        }
      }, f.reason || "—", " \xB7 ", f.date)), React.createElement("span", {
        style: {
          fontSize: 11,
          fontWeight: 700,
          color: f.paid ? T.green : T.brand
        }
      }, f.paid ? "✓ Pago" : "Por pagar"));
    })), (teamDetail.trainings || []).length > 0 && React.createElement(React.Fragment, null, React.createElement("p", {
      style: {
        margin: "16px 0 10px",
        fontSize: 12,
        fontWeight: 700,
        color: T.sub,
        textTransform: "uppercase",
        letterSpacing: 1
      }
    }, "\uD83D\uDCC5 Treinos / Jogos"), (teamDetail.trainings || []).map(function (t, i) {
      var dateStr = t.date ? new Date(t.date + "T00:00:00").toLocaleDateString("pt-PT", {
        day: "numeric",
        month: "short",
        year: "numeric"
      }) : "Recorrente";
      var timeStr = t.time ? t.time.slice(0, 5) : "";
      return React.createElement("div", {
        key: i,
        style: {
          background: T.card,
          borderRadius: 12,
          padding: "10px 14px",
          marginBottom: 6,
          display: "flex",
          alignItems: "center",
          gap: 10
        }
      }, React.createElement("span", {
        style: {
          fontSize: 20
        }
      }, t.type === "jogo" ? "⚽" : t.type === "recorrente" ? "🔄" : "🏃"), React.createElement("div", null, React.createElement("p", {
        style: {
          margin: 0,
          fontWeight: 700,
          fontSize: 13
        }
      }, t.type === "jogo" ? "vs ".concat(t.opponent || "?") : t.type === "recorrente" ? "Recorrente" : "Treino"), React.createElement("p", {
        style: {
          margin: 0,
          fontSize: 12,
          color: T.sub
        }
      }, dateStr, timeStr ? " \xB7 ".concat(timeStr) : "", t.location ? " \xB7 ".concat(t.location) : "")));
    })))));
  }
  var StatCard = function StatCard(_ref71) {
    var label = _ref71.label,
      value = _ref71.value,
      color = _ref71.color;
    return React.createElement("div", {
      style: {
        background: T.card,
        borderRadius: 14,
        padding: "14px 16px",
        flex: 1,
        minWidth: 0
      }
    }, React.createElement("p", {
      style: {
        margin: "0 0 4px",
        fontSize: 11,
        fontWeight: 700,
        color: T.sub,
        textTransform: "uppercase",
        letterSpacing: 0.5
      }
    }, label), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 26,
        fontWeight: 900,
        color: color || T.navy
      }
    }, value));
  };
  var tabs = [["stats", "📊 Stats"], ["teams", "⚽ Equipas"], ["users", "👥 Users"]];
  return React.createElement("div", {
    style: {
      background: T.bg,
      minHeight: "100vh",
      paddingBottom: 80
    }
  }, React.createElement("div", {
    style: {
      background: "linear-gradient(135deg,".concat(T.navy, ",#0d1f36)"),
      padding: "52px 16px 16px"
    }
  }, React.createElement("p", {
    style: {
      margin: "0 0 2px",
      fontSize: 12,
      color: "rgba(255,255,255,0.5)",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: 1
    }
  }, "\uD83D\uDEE1\uFE0F Gest\xE3o"), React.createElement("h2", {
    style: {
      margin: 0,
      color: "#fff",
      fontSize: 22,
      fontWeight: 900
    }
  }, "Vis\xE3o Geral"), React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: 13,
      color: "rgba(255,255,255,0.4)"
    }
  }, "Monitoriza\xE7\xE3o da plataforma")), React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      padding: "12px 16px",
      background: T.card,
      borderBottom: "1px solid ".concat(T.border)
    }
  }, tabs.map(function (_ref72) {
    var _ref73 = _slicedToArray(_ref72, 2),
      id = _ref73[0],
      label = _ref73[1];
    return React.createElement("button", {
      key: id,
      onClick: function onClick() {
        return setSection(id);
      },
      style: {
        flex: 1,
        padding: "8px 4px",
        borderRadius: 10,
        border: "1.5px solid ".concat(section === id ? T.navy : T.border),
        background: section === id ? T.navy : "transparent",
        color: section === id ? "#fff" : T.sub,
        fontSize: 12,
        fontWeight: 700,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, label);
  })), React.createElement("div", {
    style: {
      padding: "16px"
    }
  }, section === "stats" && stats && React.createElement(React.Fragment, null, React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 8
    }
  }, React.createElement(StatCard, {
    label: "Equipas",
    value: stats.teams,
    color: T.navy
  }), React.createElement(StatCard, {
    label: "Utilizadores",
    value: stats.users,
    color: "#6c47ff"
  }), React.createElement(StatCard, {
    label: "Membros",
    value: stats.members,
    color: T.green
  })), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 8
    }
  }, React.createElement(StatCard, {
    label: "Multas",
    value: stats.fines,
    color: T.brand
  }), React.createElement(StatCard, {
    label: "Total \u20AC",
    value: "".concat(stats.fines_total, "\u20AC"),
    color: T.brand
  }), React.createElement(StatCard, {
    label: "Por pagar",
    value: "".concat(stats.fines_unpaid, "\u20AC"),
    color: "#FF6B00"
  })), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, React.createElement(StatCard, {
    label: "Treinos/Jogos",
    value: stats.trainings,
    color: T.green
  }))), section === "teams" && React.createElement(React.Fragment, null, teams.length === 0 && React.createElement("p", {
    style: {
      color: T.sub,
      textAlign: "center",
      padding: "20px 0"
    }
  }, "Nenhuma equipa ainda"), teams.map(function (t) {
    return React.createElement("div", {
      key: t.id,
      onClick: function onClick() {
        setSection("teams");
        openTeam(t);
      },
      style: {
        background: T.card,
        borderRadius: 14,
        padding: "14px 16px",
        marginBottom: 10,
        cursor: "pointer",
        border: "1.5px solid ".concat(T.border)
      }
    }, React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 10
      }
    }, React.createElement("span", {
      style: {
        fontSize: 28
      }
    }, t.emoji), React.createElement("div", {
      style: {
        flex: 1
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 800,
        fontSize: 16
      }
    }, t.name), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 12,
        color: T.sub
      }
    }, t.season, " \xB7 criada ", new Date(t.created_at).toLocaleDateString("pt-PT"))), React.createElement("span", {
      style: {
        color: T.sub,
        fontSize: 18
      }
    }, "\u203A")), React.createElement("div", {
      style: {
        display: "flex",
        gap: 6
      }
    }, [["👥", t.members_count, "membros"], ["🟥", t.fines_count, "multas"], ["💸", "".concat(t.unpaid_total, "\u20AC"), "por pagar"], ["📅", t.trainings_count, "treinos"]].map(function (_ref74) {
      var _ref75 = _slicedToArray(_ref74, 3),
        icon = _ref75[0],
        val = _ref75[1],
        label = _ref75[2];
      return React.createElement("div", {
        key: label,
        style: {
          flex: 1,
          background: T.bg,
          borderRadius: 10,
          padding: "8px 6px",
          textAlign: "center"
        }
      }, React.createElement("p", {
        style: {
          margin: 0,
          fontSize: 10,
          color: T.sub
        }
      }, icon), React.createElement("p", {
        style: {
          margin: 0,
          fontWeight: 800,
          fontSize: 14
        }
      }, val), React.createElement("p", {
        style: {
          margin: 0,
          fontSize: 9,
          color: T.sub
        }
      }, label));
    })));
  })), section === "users" && React.createElement(React.Fragment, null, users.map(function (u) {
    return React.createElement("div", {
      key: u.id,
      style: {
        background: T.card,
        borderRadius: 14,
        padding: "12px 14px",
        marginBottom: 8
      }
    }, React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 20,
        background: u.is_admin ? T.navy : T.bg,
        border: "2px solid ".concat(u.is_admin ? T.navy : T.border),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: u.is_admin ? "#fff" : T.sub,
        fontWeight: 800,
        fontSize: 14,
        flexShrink: 0
      }
    }, (u.name || u.email || "?")[0].toUpperCase()), React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 700,
        fontSize: 14,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, u.name || "—"), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 12,
        color: T.sub,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, u.email)), React.createElement("div", {
      style: {
        textAlign: "right",
        flexShrink: 0
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 11,
        fontWeight: 700,
        color: T.sub
      }
    }, u.teams_count, " equipa", u.teams_count !== 1 ? "s" : ""), u.is_admin && React.createElement("span", {
      style: {
        fontSize: 10,
        background: T.navy,
        color: "#fff",
        borderRadius: 6,
        padding: "2px 6px",
        fontWeight: 700
      }
    }, "ADMIN"))), u.last_sign_in_at && React.createElement("p", {
      style: {
        margin: "6px 0 0",
        fontSize: 11,
        color: T.sub
      }
    }, "\xDAltimo acesso: ", new Date(u.last_sign_in_at).toLocaleDateString("pt-PT")));
  }))));
};
var GeneralTab = function GeneralTab(_ref76) {
  var user = _ref76.user,
    myUserId = _ref76.myUserId,
    teams = _ref76.teams,
    members = _ref76.members,
    onEditProfile = _ref76.onEditProfile,
    onManageTeam = _ref76.onManageTeam,
    onCreateTeam = _ref76.onCreateTeam,
    onJoinTeam = _ref76.onJoinTeam,
    onLogout = _ref76.onLogout;
  var myTeams = teams.filter(function (t) {
    return members.some(function (m) {
      return m.teamId === t.id && m.userId === myUserId;
    }) || t.createdBy === myUserId;
  });
  var myAge = age(user.birthday);
  return React.createElement("div", {
    style: {
      padding: "16px 16px 100px"
    }
  }, React.createElement("div", {
    style: {
      background: T.card,
      borderRadius: 20,
      padding: "20px",
      marginBottom: 16,
      position: "relative"
    }
  }, React.createElement("button", {
    onClick: onEditProfile,
    style: {
      position: "absolute",
      top: 16,
      right: 16,
      background: T.bg,
      border: "none",
      borderRadius: 10,
      padding: "7px 13px",
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer",
      color: T.navy,
      fontFamily: "inherit"
    }
  }, "\u270F\uFE0F Editar"), React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 18,
      paddingRight: 80
    }
  }, React.createElement(Avatar, {
    initials: user.initials,
    color: T.navy,
    size: 54
  }), React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 20,
      fontWeight: 900
    }
  }, user.name), React.createElement("p", {
    style: {
      margin: 0,
      color: T.sub,
      fontSize: 13,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, user.email))), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, [["🏃 Posição", user.position || "—", false], ["📱 Telefone", user.phone || "—", false], ["🎂 Aniversário", user.birthday ? "".concat(fmtDate(user.birthday)).concat(myAge ? " \xB7 ".concat(myAge, " anos") : "") : "—", true]].map(function (_ref77) {
    var _ref78 = _slicedToArray(_ref77, 3),
      l = _ref78[0],
      v = _ref78[1],
      full = _ref78[2];
    return React.createElement("div", {
      key: l,
      style: {
        background: T.bg,
        borderRadius: 12,
        padding: "12px 14px",
        gridColumn: full ? "1 / -1" : "auto"
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 11,
        color: T.sub,
        fontWeight: 600
      }
    }, l), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14,
        fontWeight: 600,
        marginTop: 2
      }
    }, v));
  }))), React.createElement(Sec, {
    label: "Equipas (".concat(myTeams.length, ")")
  }), myTeams.map(function (t) {
    var me = members.find(function (m) {
      return m.teamId === t.id && m.userId === myUserId;
    });
    var admin = (me === null || me === void 0 ? void 0 : me.role) === "admin" || t.createdBy === myUserId;
    return React.createElement("div", {
      key: t.id,
      style: {
        background: T.card,
        borderRadius: 14,
        padding: "14px",
        marginBottom: 8
      }
    }, React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, React.createElement("div", {
      style: {
        width: 44,
        height: 44,
        borderRadius: 12,
        background: t.color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 24
      }
    }, t.emoji), React.createElement("div", {
      style: {
        flex: 1
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 700,
        fontSize: 16
      }
    }, t.name), React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        alignItems: "center",
        marginTop: 3
      }
    }, React.createElement(RoleBadgeLight, {
      role: admin ? "admin" : "player"
    }), React.createElement("span", {
      style: {
        fontSize: 12,
        color: T.sub
      }
    }, t.season))), admin && React.createElement("button", {
      onClick: function onClick() {
        return onManageTeam(t.id);
      },
      style: {
        background: "".concat(t.color, "15"),
        border: "none",
        borderRadius: 10,
        padding: "8px 12px",
        fontSize: 13,
        fontWeight: 700,
        cursor: "pointer",
        color: t.color,
        fontFamily: "inherit"
      }
    }, "Gerir \u2192")));
  }), React.createElement("button", {
    onClick: onCreateTeam,
    style: {
      width: "100%",
      background: "transparent",
      border: "1.5px dashed ".concat(T.border),
      borderRadius: 14,
      padding: "14px",
      fontSize: 15,
      fontWeight: 700,
      cursor: "pointer",
      color: T.sub,
      marginTop: 4,
      fontFamily: "inherit"
    }
  }, "\u2795 Criar nova equipa"), React.createElement("button", {
    onClick: onJoinTeam,
    style: {
      width: "100%",
      background: "transparent",
      border: "1.5px solid ".concat(T.navy),
      borderRadius: 14,
      padding: "14px",
      fontSize: 15,
      fontWeight: 700,
      cursor: "pointer",
      color: T.navy,
      marginTop: 8,
      fontFamily: "inherit"
    }
  }, "\uD83D\uDD17 Entrar numa equipa com c\xF3digo"), React.createElement("button", {
    onClick: onLogout,
    style: {
      width: "100%",
      background: "transparent",
      border: "none",
      borderRadius: 14,
      padding: "14px",
      fontSize: 15,
      fontWeight: 700,
      cursor: "pointer",
      color: T.brand,
      marginTop: 8,
      fontFamily: "inherit"
    }
  }, "Terminar sess\xE3o"));
};
var FINE_EMOJIS = ["🟨", "🟥", "⏰", "⌚", "🏃", "🏃‍♂️", "👕", "🎽", "👟", "⚽", "🚫", "❌", "🤦", "😤", "🗣️", "📵", "🤕", "💪", "🏋️", "🦵", "🍺", "💸", "🚗", "🎯", "💬", "🤳"];
var EmojiPicker = function EmojiPicker(_ref79) {
  var value = _ref79.value,
    onChange = _ref79.onChange,
    color = _ref79.color;
  return React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, React.createElement("p", {
    style: {
      margin: "0 0 6px",
      fontSize: 11,
      fontWeight: 700,
      color: T.sub,
      textTransform: "uppercase",
      letterSpacing: 0.5
    }
  }, "Emoji"), React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, FINE_EMOJIS.map(function (e) {
    return React.createElement("button", {
      key: e,
      onClick: function onClick() {
        return onChange(e);
      },
      style: {
        fontSize: 22,
        width: 42,
        height: 42,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: value === e ? "".concat(color, "20") : "transparent",
        border: "2px solid ".concat(value === e ? color : T.border),
        borderRadius: 10,
        cursor: "pointer",
        transition: "all 0.1s"
      }
    }, e);
  })), React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: 12,
      color: T.sub
    }
  }, "Selecionado: ", React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, value)));
};
var FineTypesManager = function FineTypesManager(_ref80) {
  var team = _ref80.team,
    fineTypes = _ref80.fineTypes,
    onAdded = _ref80.onAdded,
    onDeleted = _ref80.onDeleted,
    onUpdated = _ref80.onUpdated,
    token = _ref80.token;
  var _useState181 = useState(false),
    _useState182 = _slicedToArray(_useState181, 2),
    adding = _useState182[0],
    setAdding = _useState182[1];
  var _useState183 = useState(null),
    _useState184 = _slicedToArray(_useState183, 2),
    editingId = _useState184[0],
    setEditingId = _useState184[1];
  var _useState185 = useState(""),
    _useState186 = _slicedToArray(_useState185, 2),
    name = _useState186[0],
    setName = _useState186[1];
  var _useState187 = useState(""),
    _useState188 = _slicedToArray(_useState187, 2),
    amount = _useState188[0],
    setAmount = _useState188[1];
  var _useState189 = useState("🟥"),
    _useState190 = _slicedToArray(_useState189, 2),
    emoji = _useState190[0],
    setEmoji = _useState190[1];
  var _useState191 = useState("🟥"),
    _useState192 = _slicedToArray(_useState191, 2),
    editEmoji = _useState192[0],
    setEditEmoji = _useState192[1];
  var _useState193 = useState(""),
    _useState194 = _slicedToArray(_useState193, 2),
    err = _useState194[0],
    setErr = _useState194[1];
  var _useState195 = useState(false),
    _useState196 = _slicedToArray(_useState195, 2),
    saving = _useState196[0],
    setSaving = _useState196[1];
  var tf = fineTypes.filter(function (f) {
    return f.teamId === team.id;
  });
  var save = function () {
    var _ref81 = _asyncToGenerator(_regenerator().m(function _callee25() {
      var res, ft, _t33;
      return _regenerator().w(function (_context25) {
        while (1) switch (_context25.p = _context25.n) {
          case 0:
            if (!(!name.trim() || !amount)) {
              _context25.n = 1;
              break;
            }
            return _context25.a(2);
          case 1:
            setSaving(true);
            setErr("");
            _context25.p = 2;
            _context25.n = 3;
            return api.post("fine_types", {
              team_id: team.id,
              name: name.trim(),
              amount: Number(amount),
              emoji: emoji
            }, token);
          case 3:
            res = _context25.v;
            ft = Array.isArray(res) ? res[0] : res;
            if (ft) onAdded(ft);
            setName("");
            setAmount("");
            setEmoji("🟥");
            setAdding(false);
            _context25.n = 5;
            break;
          case 4:
            _context25.p = 4;
            _t33 = _context25.v;
            setErr(_t33.message);
          case 5:
            setSaving(false);
          case 6:
            return _context25.a(2);
        }
      }, _callee25, null, [[2, 4]]);
    }));
    return function save() {
      return _ref81.apply(this, arguments);
    };
  }();
  var saveEmoji = function () {
    var _ref82 = _asyncToGenerator(_regenerator().m(function _callee26(id) {
      var _t34;
      return _regenerator().w(function (_context26) {
        while (1) switch (_context26.p = _context26.n) {
          case 0:
            setSaving(true);
            _context26.p = 1;
            _context26.n = 2;
            return api.patch("fine_types?id=eq.".concat(id), {
              emoji: editEmoji
            }, token);
          case 2:
            onUpdated(id, editEmoji);
            setEditingId(null);
            _context26.n = 4;
            break;
          case 3:
            _context26.p = 3;
            _t34 = _context26.v;
            setErr(_t34.message);
          case 4:
            setSaving(false);
          case 5:
            return _context26.a(2);
        }
      }, _callee26, null, [[1, 3]]);
    }));
    return function saveEmoji(_x7) {
      return _ref82.apply(this, arguments);
    };
  }();
  var del = function () {
    var _ref83 = _asyncToGenerator(_regenerator().m(function _callee27(id) {
      var _t35;
      return _regenerator().w(function (_context27) {
        while (1) switch (_context27.p = _context27.n) {
          case 0:
            _context27.p = 0;
            _context27.n = 1;
            return api.del("fine_types?id=eq.".concat(id), token);
          case 1:
            onDeleted(id);
            _context27.n = 3;
            break;
          case 2:
            _context27.p = 2;
            _t35 = _context27.v;
            setErr(_t35.message);
          case 3:
            return _context27.a(2);
        }
      }, _callee27, null, [[0, 2]]);
    }));
    return function del(_x8) {
      return _ref83.apply(this, arguments);
    };
  }();
  return React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, err && React.createElement("p", {
    style: {
      color: T.brand,
      fontSize: 13,
      margin: "0 0 8px",
      background: "#FFE5E5",
      borderRadius: 8,
      padding: "8px 12px"
    }
  }, err), tf.map(function (ft) {
    return React.createElement("div", {
      key: ft.id
    }, React.createElement("div", {
      style: {
        background: T.card,
        borderRadius: 12,
        padding: "12px 14px",
        marginBottom: 8,
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, React.createElement("button", {
      onClick: function onClick() {
        setEditingId(editingId === ft.id ? null : ft.id);
        setEditEmoji(ft.emoji);
      },
      style: {
        fontSize: 26,
        background: editingId === ft.id ? "".concat(team.color, "15") : "transparent",
        border: "2px solid ".concat(editingId === ft.id ? team.color : "transparent"),
        borderRadius: 10,
        padding: "2px 6px",
        cursor: "pointer"
      }
    }, ft.emoji), React.createElement("div", {
      style: {
        flex: 1
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 700,
        fontSize: 14
      }
    }, ft.name), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 12,
        color: T.sub
      }
    }, ft.amount, "\u20AC ", editingId === ft.id ? "· toca no emoji para editar ↑" : "· toca no emoji para mudar")), React.createElement("button", {
      onClick: function onClick() {
        return del(ft.id);
      },
      style: {
        background: "none",
        border: "none",
        fontSize: 18,
        cursor: "pointer",
        color: T.sub,
        padding: "4px 8px"
      }
    }, "\uD83D\uDDD1\uFE0F")), editingId === ft.id && React.createElement("div", {
      style: {
        background: T.card,
        borderRadius: 12,
        padding: "14px",
        marginBottom: 8,
        marginTop: -4
      }
    }, React.createElement(EmojiPicker, {
      value: editEmoji,
      onChange: setEditEmoji,
      color: team.color
    }), React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, React.createElement(PrimaryBtn, {
      onClick: function onClick() {
        return saveEmoji(ft.id);
      },
      disabled: saving,
      color: team.color
    }, saving ? "A guardar..." : "✓ Guardar emoji"), React.createElement("button", {
      onClick: function onClick() {
        return setEditingId(null);
      },
      style: {
        flex: 1,
        padding: "15px",
        borderRadius: 14,
        border: "1.5px solid ".concat(T.border),
        background: "transparent",
        cursor: "pointer",
        fontFamily: "inherit",
        fontWeight: 700,
        fontSize: 14
      }
    }, "Cancelar"))));
  }), adding ? React.createElement("div", {
    style: {
      background: T.card,
      borderRadius: 12,
      padding: "14px",
      marginBottom: 8
    }
  }, React.createElement(EmojiPicker, {
    value: emoji,
    onChange: setEmoji,
    color: team.color
  }), React.createElement(FI, {
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    placeholder: "Nome (ex: Atraso)"
  }), React.createElement(FI, {
    type: "number",
    value: amount,
    onChange: function onChange(e) {
      return setAmount(e.target.value);
    },
    placeholder: "Valor em \u20AC (ex: 5)"
  }), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, React.createElement(PrimaryBtn, {
    onClick: save,
    disabled: !name.trim() || !amount || saving,
    color: team.color
  }, saving ? "A guardar..." : "✓ Adicionar"), React.createElement("button", {
    onClick: function onClick() {
      setAdding(false);
      setErr("");
    },
    style: {
      flex: 1,
      padding: "15px",
      borderRadius: 14,
      border: "1.5px solid ".concat(T.border),
      background: "transparent",
      cursor: "pointer",
      fontFamily: "inherit",
      fontWeight: 700,
      fontSize: 14
    }
  }, "Cancelar"))) : React.createElement("button", {
    onClick: function onClick() {
      return setAdding(true);
    },
    style: {
      width: "100%",
      background: "transparent",
      border: "1.5px dashed ".concat(T.border),
      borderRadius: 12,
      padding: "12px",
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer",
      color: T.sub,
      fontFamily: "inherit"
    }
  }, "\u2795 Adicionar tipo de multa"));
};
var ManageTeamScreen = function ManageTeamScreen(_ref84) {
  var team = _ref84.team,
    members = _ref84.members,
    fineTypes = _ref84.fineTypes,
    token = _ref84.token,
    myUserId = _ref84.myUserId,
    onBack = _ref84.onBack,
    onAddMember = _ref84.onAddMember,
    onToggleRole = _ref84.onToggleRole,
    onRemoveMember = _ref84.onRemoveMember,
    onEditMember = _ref84.onEditMember,
    onRegenerateCode = _ref84.onRegenerateCode,
    onDeleteTeam = _ref84.onDeleteTeam,
    setFineTypes = _ref84.setFineTypes;
  var tm = members.filter(function (m) {
    return m.teamId === team.id;
  });
  var admins = tm.filter(function (m) {
    return m.role === "admin";
  });
  var players = tm.filter(function (m) {
    return m.role === "player";
  });
  var _useState197 = useState(null),
    _useState198 = _slicedToArray(_useState197, 2),
    confirmRemove = _useState198[0],
    setConfirmRemove = _useState198[1];
  var _useState199 = useState(null),
    _useState200 = _slicedToArray(_useState199, 2),
    editingMember = _useState200[0],
    setEditingMember = _useState200[1];
  var _useState201 = useState(false),
    _useState202 = _slicedToArray(_useState201, 2),
    copied = _useState202[0],
    setCopied = _useState202[1];
  var copyCode = function copyCode() {
    setCopied(true);
    setTimeout(function () {
      return setCopied(false);
    }, 2000);
  };
  var Row = function Row(_ref85) {
    var m = _ref85.m;
    return React.createElement("div", {
      style: {
        background: T.card,
        borderRadius: 14,
        padding: "13px 14px",
        marginBottom: 8,
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, React.createElement(Avatar, {
      initials: m.initials,
      color: team.color,
      size: 44
    }), React.createElement("div", {
      style: {
        flex: 1
      }
    }, React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        alignItems: "center",
        flexWrap: "wrap"
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 700,
        fontSize: 15
      }
    }, m.name), m.userId === myUserId && React.createElement(Badge, {
      label: "Tu",
      color: team.color
    }), React.createElement(RoleBadgeLight, {
      role: m.role
    })), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        color: T.sub
      }
    }, m.position, m.phone ? " \xB7 ".concat(m.phone) : ""), m.birthday && React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 12,
        color: T.sub
      }
    }, "\uD83C\uDF82 ", fmtDate(m.birthday))), React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 5
      }
    }, React.createElement("button", {
      onClick: function onClick() {
        return setEditingMember(m);
      },
      style: {
        padding: "5px 10px",
        borderRadius: 8,
        border: "1.5px solid ".concat(team.color),
        background: "".concat(team.color, "12"),
        color: team.color,
        fontSize: 12,
        fontWeight: 700,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, "\u270F\uFE0F Editar"), m.userId !== myUserId && React.createElement(React.Fragment, null, React.createElement("button", {
      onClick: function onClick() {
        return onToggleRole(m.id);
      },
      style: {
        padding: "5px 10px",
        borderRadius: 8,
        border: "1.5px solid ".concat(m.role === "admin" ? T.sub : T.yellow),
        background: "transparent",
        color: m.role === "admin" ? T.sub : T.yellow,
        fontSize: 12,
        fontWeight: 700,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, m.role === "admin" ? "↓ Jogador" : "↑ Admin"), React.createElement("button", {
      onClick: function onClick() {
        return setConfirmRemove(m);
      },
      style: {
        padding: "5px 10px",
        borderRadius: 8,
        border: "1.5px solid ".concat(T.brand),
        background: "transparent",
        color: T.brand,
        fontSize: 12,
        fontWeight: 700,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, "\uD83D\uDDD1 Remover"))));
  };
  return React.createElement("div", {
    style: {
      background: T.bg,
      minHeight: "100vh"
    }
  }, React.createElement("div", {
    style: {
      background: "linear-gradient(135deg, ".concat(team.color, ", ").concat(team.color, "cc)"),
      padding: "52px 16px 20px",
      color: "#fff"
    }
  }, React.createElement("button", {
    onClick: onBack,
    style: {
      background: "rgba(255,255,255,0.2)",
      border: "none",
      color: "#fff",
      borderRadius: 10,
      padding: "7px 14px",
      fontSize: 14,
      cursor: "pointer",
      fontWeight: 600,
      fontFamily: "inherit",
      marginBottom: 12
    }
  }, "\u2190 Voltar"), React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 24,
      fontWeight: 900
    }
  }, "Gerir ", team.name), React.createElement("p", {
    style: {
      margin: "4px 0 0",
      opacity: 0.7,
      fontSize: 14
    }
  }, tm.length, " membros \xB7 ", admins.length, " admin", admins.length !== 1 ? "s" : "")), React.createElement("div", {
    style: {
      padding: "16px 16px 100px"
    }
  }, React.createElement("div", {
    style: {
      background: T.card,
      borderRadius: 16,
      padding: "16px",
      marginBottom: 20,
      borderLeft: "3px solid ".concat(team.color)
    }
  }, React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontSize: 11,
      fontWeight: 700,
      color: T.sub,
      textTransform: "uppercase",
      letterSpacing: 0.5
    }
  }, "C\xF3digo de convite"), React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 10
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 26,
      fontWeight: 900,
      letterSpacing: 3,
      color: team.color,
      flex: 1
    }
  }, team.inviteCode), React.createElement("button", {
    onClick: copyCode,
    style: {
      padding: "8px 16px",
      borderRadius: 10,
      background: "".concat(team.color, "15"),
      border: "1.5px solid ".concat(team.color),
      color: team.color,
      fontWeight: 700,
      fontSize: 13,
      cursor: "pointer",
      fontFamily: "inherit",
      flexShrink: 0
    }
  }, copied ? "✓ Copiado!" : "Copiar")), React.createElement("p", {
    style: {
      margin: "0 0 10px",
      fontSize: 13,
      color: T.sub
    }
  }, "Partilha o convite com os teus jogadores:"), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, React.createElement("a", {
    href: "https://wa.me/?text=".concat(encodeURIComponent("\uD83D\uDFE5 *Multeam* \u2014 Junta-te \xE0 equipa *".concat(team.name, "*!\n\n1. Abre o link: https://patrsolothurn-glitch.github.io/multeam?invite=").concat(team.inviteCode, "\n2. Cria conta\n3. O c\xF3digo entra automaticamente!\n\nC\xF3digo manual: *").concat(team.inviteCode, "*"))),
    target: "_blank",
    rel: "noopener",
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      padding: "11px",
      borderRadius: 12,
      background: "#25D366",
      color: "#fff",
      fontWeight: 700,
      fontSize: 14,
      textDecoration: "none"
    }
  }, "\uD83D\uDCF1 WhatsApp"), React.createElement("a", {
    href: "mailto:?subject=Convite para ".concat(team.name, "&body=").concat(encodeURIComponent("Ol\xE1!\n\nEstou a convidar-te para a equipa ".concat(team.name, " no Multeam.\n\nAbre este link para entrares diretamente:\nhttps://patrsolothurn-glitch.github.io/multeam?invite=").concat(team.inviteCode, "\n\nOu entra no app e usa o c\xF3digo: ").concat(team.inviteCode, "\n\nAt\xE9 j\xE1!"))),
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      padding: "11px",
      borderRadius: 12,
      background: T.navy,
      color: "#fff",
      fontWeight: 700,
      fontSize: 14,
      textDecoration: "none"
    }
  }, "\u2709\uFE0F Email"))), React.createElement("div", {
    style: {
      background: "".concat(T.yellow, "15"),
      borderRadius: 14,
      padding: "12px 14px",
      marginBottom: 16,
      display: "flex",
      gap: 10,
      alignItems: "flex-start"
    }
  }, React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, "\uD83D\uDC51"), React.createElement("div", null, React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 700,
      fontSize: 14
    }
  }, "Administradores t\xEAm n\xEDvel m\xE1ximo"), React.createElement("p", {
    style: {
      margin: "2px 0 0",
      fontSize: 13,
      color: T.sub
    }
  }, "Podem gerir membros, atribuir multas, despesas e treinos. Jogadores s\xF3 veem e confirmam presen\xE7as."))), React.createElement("button", {
    onClick: onAddMember,
    style: {
      width: "100%",
      background: team.color,
      color: "#fff",
      border: "none",
      borderRadius: 14,
      padding: "14px",
      fontSize: 15,
      fontWeight: 800,
      cursor: "pointer",
      marginBottom: 20,
      fontFamily: "inherit"
    }
  }, "\u2795 Adicionar membro"), admins.length > 0 && React.createElement(React.Fragment, null, React.createElement("p", {
    style: {
      margin: "0 0 8px",
      fontSize: 11,
      fontWeight: 700,
      color: "#1D3557",
      textTransform: "uppercase",
      letterSpacing: 0.5,
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }, React.createElement(ShieldIcon, {
    size: 11,
    color: "#1D3557"
  }), " Administradores (", admins.length, ")"), admins.map(function (m) {
    return React.createElement(Row, {
      key: m.id,
      m: m
    });
  })), players.length > 0 && React.createElement(React.Fragment, null, React.createElement("p", {
    style: {
      margin: "16px 0 8px",
      fontSize: 11,
      fontWeight: 700,
      color: T.sub,
      textTransform: "uppercase",
      letterSpacing: 0.5,
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }, React.createElement(PersonIcon, {
    size: 11,
    color: T.sub
  }), " Jogadores (", players.length, ")"), players.map(function (m) {
    return React.createElement(Row, {
      key: m.id,
      m: m
    });
  })), React.createElement(Sec, {
    label: "Tipos de multa"
  }), React.createElement(FineTypesManager, {
    team: team,
    fineTypes: fineTypes,
    onAdded: function onAdded(ft) {
      return setFineTypes(function (p) {
        return [].concat(_toConsumableArray(p), [aFineType(ft)]);
      });
    },
    onDeleted: function onDeleted(id) {
      return setFineTypes(function (p) {
        return p.filter(function (x) {
          return x.id !== id;
        });
      });
    },
    onUpdated: function onUpdated(id, emoji) {
      return setFineTypes(function (p) {
        return p.map(function (x) {
          return x.id === id ? _objectSpread(_objectSpread({}, x), {}, {
            emoji: emoji
          }) : x;
        });
      });
    },
    token: token
  }), React.createElement("div", {
    style: {
      marginTop: 32,
      padding: "16px",
      background: "#FFF5F5",
      borderRadius: 14,
      border: "1px solid #FFD0D0"
    }
  }, React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontWeight: 700,
      fontSize: 14,
      color: T.brand
    }
  }, "\u26A0\uFE0F Zona de perigo"), React.createElement("p", {
    style: {
      margin: "0 0 12px",
      fontSize: 13,
      color: T.sub
    }
  }, "Apagar a equipa remove todos os dados permanentemente."), React.createElement("button", {
    onClick: onDeleteTeam,
    style: {
      width: "100%",
      padding: "13px",
      borderRadius: 12,
      border: "1.5px solid ".concat(T.brand),
      background: "transparent",
      color: T.brand,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      fontSize: 15
    }
  }, "\uD83D\uDDD1\uFE0F Apagar equipa"))), confirmRemove && React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 300,
      padding: 20
    }
  }, React.createElement("div", {
    style: {
      background: T.card,
      borderRadius: 20,
      padding: "24px",
      width: "100%",
      maxWidth: 360
    }
  }, React.createElement("p", {
    style: {
      fontSize: 36,
      textAlign: "center",
      margin: "0 0 10px"
    }
  }, "\u26A0\uFE0F"), React.createElement("p", {
    style: {
      fontWeight: 800,
      fontSize: 18,
      textAlign: "center",
      margin: "0 0 8px"
    }
  }, "Remover ", confirmRemove.name, "?"), React.createElement("p", {
    style: {
      color: T.sub,
      fontSize: 14,
      textAlign: "center",
      margin: "0 0 24px"
    }
  }, "Este jogador perder\xE1 o acesso \xE0 equipa. Podes adicion\xE1-lo novamente com um novo convite."), React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, React.createElement("button", {
    onClick: function onClick() {
      return setConfirmRemove(null);
    },
    style: {
      flex: 1,
      padding: "13px",
      borderRadius: 12,
      border: "1.5px solid ".concat(T.border),
      background: "transparent",
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      fontSize: 15
    }
  }, "Cancelar"), React.createElement("button", {
    onClick: function onClick() {
      onRemoveMember(confirmRemove.id);
      setConfirmRemove(null);
    },
    style: {
      flex: 1,
      padding: "13px",
      borderRadius: 12,
      border: "none",
      background: T.brand,
      color: "#fff",
      fontWeight: 800,
      cursor: "pointer",
      fontFamily: "inherit",
      fontSize: 15
    }
  }, "Remover")))), editingMember && React.createElement(EditMemberModal, {
    member: editingMember,
    team: team,
    onSave: function onSave(id, data) {
      onEditMember(id, data);
      setEditingMember(null);
    },
    onClose: function onClose() {
      return setEditingMember(null);
    }
  }));
};
var MemberDetailScreen = function MemberDetailScreen(_ref86) {
  var member = _ref86.member,
    team = _ref86.team,
    fines = _ref86.fines,
    onBack = _ref86.onBack,
    onTogglePaid = _ref86.onTogglePaid,
    isAdmin = _ref86.isAdmin;
  var pf = fines.filter(function (f) {
    return f.teamId === team.id && f.memberId === member.id;
  }).sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  var unpaid = pf.filter(function (f) {
    return !f.paid;
  }).reduce(function (s, f) {
    return s + f.amount;
  }, 0);
  var paid = pf.filter(function (f) {
    return f.paid;
  }).reduce(function (s, f) {
    return s + f.amount;
  }, 0);
  return React.createElement("div", {
    style: {
      background: T.bg,
      minHeight: "100vh"
    }
  }, React.createElement("div", {
    style: {
      background: "linear-gradient(135deg, ".concat(team.color, ", ").concat(team.color, "bb)"),
      padding: "52px 16px 24px",
      color: "#fff",
      textAlign: "center"
    }
  }, React.createElement("button", {
    onClick: onBack,
    style: {
      position: "absolute",
      top: 54,
      left: 16,
      background: "rgba(255,255,255,0.2)",
      border: "none",
      color: "#fff",
      borderRadius: 10,
      padding: "6px 12px",
      fontSize: 14,
      cursor: "pointer",
      fontWeight: 600,
      fontFamily: "inherit"
    }
  }, "\u2190 Voltar"), React.createElement(Avatar, {
    initials: member.initials,
    color: "rgba(255,255,255,0.2)",
    size: 64
  }), React.createElement("h2", {
    style: {
      margin: "12px 0 2px",
      fontSize: 24,
      fontWeight: 800
    }
  }, member.name), React.createElement("p", {
    style: {
      margin: 0,
      opacity: 0.7,
      fontSize: 14
    }
  }, member.position, " \xB7 ", member.role === "admin" ? "Admin" : "Jogador"), member.phone && React.createElement("p", {
    style: {
      margin: "4px 0 0",
      opacity: 0.6,
      fontSize: 13
    }
  }, "\uD83D\uDCF1 ", member.phone), member.birthday && React.createElement("p", {
    style: {
      margin: "2px 0 0",
      opacity: 0.6,
      fontSize: 13
    }
  }, "\uD83C\uDF82 ", fmtDate(member.birthday)), React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 28,
      marginTop: 18
    }
  }, React.createElement("div", null, React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 24,
      fontWeight: 900,
      color: "#FFD6D6"
    }
  }, unpaid, "\u20AC"), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 11,
      opacity: 0.7
    }
  }, "POR PAGAR")), React.createElement("div", {
    style: {
      width: 1,
      background: "rgba(255,255,255,0.2)"
    }
  }), React.createElement("div", null, React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 24,
      fontWeight: 900
    }
  }, paid, "\u20AC"), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 11,
      opacity: 0.7
    }
  }, "PAGO")))), React.createElement("div", {
    style: {
      padding: "16px 16px 100px"
    }
  }, React.createElement(Sec, {
    label: "Hist\xF3rico de multas"
  }), pf.length === 0 && React.createElement("p", {
    style: {
      textAlign: "center",
      color: T.sub,
      padding: 32
    }
  }, "Sem multas \uD83C\uDF89"), pf.map(function (f) {
    return React.createElement("div", {
      key: f.id,
      style: {
        background: T.card,
        borderRadius: 14,
        padding: "13px 14px",
        marginBottom: 8,
        display: "flex",
        alignItems: "center",
        gap: 12,
        borderLeft: "3px solid ".concat(f.paid ? T.green : T.brand)
      }
    }, React.createElement("span", {
      style: {
        fontSize: 24
      }
    }, f.emoji), React.createElement("div", {
      style: {
        flex: 1
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14,
        fontWeight: 600
      }
    }, f.reason), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 12,
        color: T.sub
      }
    }, f.date)), React.createElement("div", {
      style: {
        textAlign: "right"
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 800,
        fontSize: 16,
        color: f.paid ? T.green : T.brand
      }
    }, f.amount, "\u20AC"), isAdmin && React.createElement("button", {
      onClick: function onClick() {
        return onTogglePaid(f.id);
      },
      style: {
        marginTop: 4,
        padding: "3px 8px",
        borderRadius: 7,
        border: "1.5px solid ".concat(f.paid ? T.green : T.brand),
        background: "transparent",
        color: f.paid ? T.green : T.brand,
        fontSize: 11,
        fontWeight: 700,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, f.paid ? "✓" : "Pagar")));
  })));
};
var LoginScreen = function LoginScreen(_ref87) {
  var onLogin = _ref87.onLogin;
  var _useState203 = useState("patricio@multeam.app"),
    _useState204 = _slicedToArray(_useState203, 2),
    email = _useState204[0],
    setEmail = _useState204[1];
  var _useState205 = useState("••••••••"),
    _useState206 = _slicedToArray(_useState205, 2),
    pass = _useState206[0],
    setPass = _useState206[1];
  var inp = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 14,
    border: "none",
    background: "rgba(255,255,255,0.12)",
    color: "#fff",
    fontSize: 16,
    marginBottom: 12,
    boxSizing: "border-box",
    outline: "none",
    fontFamily: "inherit"
  };
  return React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "linear-gradient(160deg, ".concat(T.navy, " 0%, #0a1628 100%)"),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 28
    }
  }, React.createElement("div", {
    style: {
      marginBottom: 44,
      textAlign: "center"
    }
  }, React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      borderRadius: 22,
      background: T.brand,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 38,
      margin: "0 auto 18px",
      boxShadow: "0 8px 32px ".concat(T.brand, "66")
    }
  }, "\uD83D\uDFE5"), React.createElement("h1", {
    style: {
      color: "#fff",
      fontSize: 34,
      fontWeight: 900,
      margin: 0,
      letterSpacing: -1.5
    }
  }, "Multeam"), React.createElement("p", {
    style: {
      color: "rgba(255,255,255,0.45)",
      margin: "5px 0 0",
      fontSize: 14,
      letterSpacing: 0.3
    }
  }, "Equipas \xB7 Multas \xB7 Treinos")), React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 340
    }
  }, React.createElement("input", {
    style: inp,
    type: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    placeholder: "Email"
  }), React.createElement("input", {
    style: inp,
    type: "password",
    value: pass,
    onChange: function onChange(e) {
      return setPass(e.target.value);
    },
    placeholder: "Password"
  }), React.createElement("button", {
    onClick: onLogin,
    style: {
      width: "100%",
      padding: 16,
      borderRadius: 14,
      border: "none",
      background: T.brand,
      color: "#fff",
      fontSize: 17,
      fontWeight: 800,
      cursor: "pointer",
      marginTop: 4,
      boxShadow: "0 6px 24px ".concat(T.brand, "55"),
      fontFamily: "inherit"
    }
  }, "Entrar"), React.createElement("p", {
    style: {
      textAlign: "center",
      color: "rgba(255,255,255,0.35)",
      fontSize: 13,
      marginTop: 16
    }
  }, "N\xE3o tens conta? Pede ao teu admin.")));
};
var ResetPasswordScreen = function ResetPasswordScreen(_ref88) {
  var accessToken = _ref88.accessToken,
    onDone = _ref88.onDone;
  var _useState207 = useState(""),
    _useState208 = _slicedToArray(_useState207, 2),
    pass = _useState208[0],
    setPass = _useState208[1];
  var _useState209 = useState(""),
    _useState210 = _slicedToArray(_useState209, 2),
    pass2 = _useState210[0],
    setPass2 = _useState210[1];
  var _useState211 = useState(false),
    _useState212 = _slicedToArray(_useState211, 2),
    showPass = _useState212[0],
    setShowPass = _useState212[1];
  var _useState213 = useState(""),
    _useState214 = _slicedToArray(_useState213, 2),
    err = _useState214[0],
    setErr = _useState214[1];
  var _useState215 = useState(false),
    _useState216 = _slicedToArray(_useState215, 2),
    done = _useState216[0],
    setDone = _useState216[1];
  var _useState217 = useState(false),
    _useState218 = _slicedToArray(_useState217, 2),
    loading = _useState218[0],
    setLoading = _useState218[1];
  var inp = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 14,
    border: "none",
    background: "rgba(255,255,255,0.12)",
    color: "#fff",
    fontSize: 16,
    marginBottom: 12,
    boxSizing: "border-box",
    outline: "none",
    fontFamily: "inherit"
  };
  var save = function () {
    var _ref89 = _asyncToGenerator(_regenerator().m(function _callee28() {
      var _t36;
      return _regenerator().w(function (_context28) {
        while (1) switch (_context28.p = _context28.n) {
          case 0:
            if (!(pass.length < 6)) {
              _context28.n = 1;
              break;
            }
            return _context28.a(2, setErr("Mínimo 6 caracteres"));
          case 1:
            if (!(pass !== pass2)) {
              _context28.n = 2;
              break;
            }
            return _context28.a(2, setErr("As passwords não coincidem"));
          case 2:
            setLoading(true);
            setErr("");
            _context28.p = 3;
            _context28.n = 4;
            return api.updatePassword(pass, accessToken);
          case 4:
            setDone(true);
            setTimeout(onDone, 2500);
            _context28.n = 6;
            break;
          case 5:
            _context28.p = 5;
            _t36 = _context28.v;
            setErr(_t36.message);
          case 6:
            setLoading(false);
          case 7:
            return _context28.a(2);
        }
      }, _callee28, null, [[3, 5]]);
    }));
    return function save() {
      return _ref89.apply(this, arguments);
    };
  }();
  return React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "linear-gradient(160deg, #1D3557 0%, #0a1628 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 28
    }
  }, React.createElement("div", {
    style: {
      marginBottom: 28,
      textAlign: "center"
    }
  }, React.createElement("div", {
    style: {
      fontSize: 48,
      marginBottom: 12
    }
  }, "\uD83D\uDD11"), React.createElement("h2", {
    style: {
      color: "#fff",
      fontSize: 26,
      fontWeight: 900,
      margin: 0
    }
  }, "Nova password"), React.createElement("p", {
    style: {
      color: "rgba(255,255,255,0.45)",
      margin: "6px 0 0",
      fontSize: 14
    }
  }, "Define a tua nova password")), done ? React.createElement("div", {
    style: {
      background: "rgba(45,198,83,0.2)",
      borderRadius: 14,
      padding: "16px 20px",
      color: "#7fff9a",
      textAlign: "center",
      fontWeight: 700
    }
  }, "\u2705 Password alterada! A redirecionar...") : React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 340
    }
  }, React.createElement("div", {
    style: {
      position: "relative",
      marginBottom: 12
    }
  }, React.createElement("input", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      marginBottom: 0,
      paddingRight: 50
    }),
    type: showPass ? "text" : "password",
    placeholder: "Nova password",
    value: pass,
    onChange: function onChange(e) {
      return setPass(e.target.value);
    }
  }), React.createElement("button", {
    onClick: function onClick() {
      return setShowPass(function (p) {
        return !p;
      });
    },
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      color: "rgba(255,255,255,0.5)",
      fontSize: 20,
      cursor: "pointer",
      padding: 4
    }
  }, showPass ? "🙈" : "👁️")), React.createElement("input", {
    style: inp,
    type: "password",
    placeholder: "Confirmar password",
    value: pass2,
    onChange: function onChange(e) {
      return setPass2(e.target.value);
    }
  }), err && React.createElement("div", {
    style: {
      background: "rgba(230,57,70,0.2)",
      borderRadius: 10,
      padding: "10px 14px",
      marginBottom: 12,
      color: "#FFB3B8",
      fontSize: 13
    }
  }, err), React.createElement("button", {
    disabled: loading || !pass || !pass2,
    onClick: save,
    style: {
      width: "100%",
      padding: 16,
      borderRadius: 14,
      border: "none",
      background: loading ? "#666" : "#E63946",
      color: "#fff",
      fontSize: 17,
      fontWeight: 800,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, loading ? "A guardar..." : "💾 Guardar password")));
};
var AuthScreen = function AuthScreen(_ref90) {
  var onLogin = _ref90.onLogin,
    onRegister = _ref90.onRegister,
    error = _ref90.error,
    loading = _ref90.loading;
  var _useState219 = useState("login"),
    _useState220 = _slicedToArray(_useState219, 2),
    mode = _useState220[0],
    setMode = _useState220[1];
  var _useState221 = useState(""),
    _useState222 = _slicedToArray(_useState221, 2),
    email = _useState222[0],
    setEmail = _useState222[1];
  var _useState223 = useState(""),
    _useState224 = _slicedToArray(_useState223, 2),
    pass = _useState224[0],
    setPass = _useState224[1];
  var _useState225 = useState(""),
    _useState226 = _slicedToArray(_useState225, 2),
    name = _useState226[0],
    setName = _useState226[1];
  var _useState227 = useState(false),
    _useState228 = _slicedToArray(_useState227, 2),
    showPass = _useState228[0],
    setShowPass = _useState228[1];
  var inp = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 14,
    border: "none",
    background: "rgba(255,255,255,0.12)",
    color: "#fff",
    fontSize: 16,
    marginBottom: 12,
    boxSizing: "border-box",
    outline: "none",
    fontFamily: "inherit"
  };
  return React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "linear-gradient(160deg, ".concat(T.navy, " 0%, #0a1628 100%)"),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 28
    }
  }, React.createElement("div", {
    style: {
      marginBottom: 36,
      textAlign: "center"
    }
  }, React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      borderRadius: 22,
      margin: "0 auto 18px",
      background: "#12121f",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 8px 32px rgba(230,57,70,0.5)",
      position: "relative",
      overflow: "visible"
    }
  }, React.createElement("svg", {
    width: "60",
    height: "72",
    viewBox: "0 0 60 72",
    style: {
      position: "absolute"
    }
  }, React.createElement("rect", {
    x: "18",
    y: "4",
    width: "36",
    height: "48",
    rx: "5",
    fill: "#FFCC00",
    transform: "rotate(12 36 28)"
  }), React.createElement("rect", {
    x: "6",
    y: "6",
    width: "36",
    height: "48",
    rx: "5",
    fill: "#E63946"
  }))), React.createElement("h1", {
    style: {
      color: "#fff",
      fontSize: 34,
      fontWeight: 900,
      margin: 0,
      letterSpacing: -1.5
    }
  }, "Multeam"), React.createElement("p", {
    style: {
      color: "rgba(255,255,255,0.45)",
      margin: "5px 0 0",
      fontSize: 14,
      letterSpacing: 0.3
    }
  }, "Equipas \xB7 Multas \xB7 Treinos")), React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 340
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      background: "rgba(255,255,255,0.1)",
      borderRadius: 14,
      padding: 4,
      marginBottom: 20
    }
  }, [["login", "Entrar"], ["register", "Criar conta"]].map(function (_ref91) {
    var _ref92 = _slicedToArray(_ref91, 2),
      m = _ref92[0],
      l = _ref92[1];
    return React.createElement("button", {
      key: m,
      onClick: function onClick() {
        return setMode(m);
      },
      style: {
        flex: 1,
        padding: "10px",
        borderRadius: 10,
        border: "none",
        background: mode === m ? "#fff" : "transparent",
        color: mode === m ? T.navy : "rgba(255,255,255,0.6)",
        fontWeight: 700,
        cursor: "pointer",
        fontSize: 14,
        fontFamily: "inherit"
      }
    }, l);
  })), mode === "register" && React.createElement("input", {
    style: inp,
    placeholder: "Nome completo",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  }), React.createElement("input", {
    style: inp,
    type: "email",
    placeholder: "Email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    }
  }), React.createElement("div", {
    style: {
      position: "relative",
      marginBottom: 12
    }
  }, React.createElement("input", {
    style: _objectSpread(_objectSpread({}, inp), {}, {
      marginBottom: 0,
      paddingRight: 50
    }),
    type: showPass ? "text" : "password",
    placeholder: "Password",
    value: pass,
    onChange: function onChange(e) {
      return setPass(e.target.value);
    }
  }), React.createElement("button", {
    onClick: function onClick() {
      return setShowPass(function (p) {
        return !p;
      });
    },
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      color: "rgba(255,255,255,0.55)",
      fontSize: 20,
      cursor: "pointer",
      padding: 4
    }
  }, showPass ? "🙈" : "👁️")), error && React.createElement("div", {
    style: {
      background: "rgba(230,57,70,0.2)",
      borderRadius: 10,
      padding: "10px 14px",
      marginBottom: 12,
      color: "#FFB3B8",
      fontSize: 13
    }
  }, error), React.createElement("button", {
    disabled: loading,
    onClick: function onClick() {
      return mode === "login" ? onLogin(email, pass) : onRegister(email, pass, name);
    },
    style: {
      width: "100%",
      padding: 16,
      borderRadius: 14,
      border: "none",
      background: loading ? T.sub : T.brand,
      color: "#fff",
      fontSize: 17,
      fontWeight: 800,
      cursor: loading ? "default" : "pointer",
      fontFamily: "inherit",
      marginTop: 4
    }
  }, loading ? "A carregar..." : mode === "login" ? "Entrar" : "Criar conta"), mode === "login" && React.createElement("p", {
    onClick: _asyncToGenerator(_regenerator().m(function _callee29() {
      return _regenerator().w(function (_context29) {
        while (1) switch (_context29.n) {
          case 0:
            if (email) {
              _context29.n = 1;
              break;
            }
            alert("Escreve o teu email primeiro");
            return _context29.a(2);
          case 1:
            _context29.n = 2;
            return api.resetPassword(email);
          case 2:
            alert("Email de recuperação enviado para " + email);
          case 3:
            return _context29.a(2);
        }
      }, _callee29);
    })),
    style: {
      textAlign: "center",
      color: "rgba(255,255,255,0.35)",
      fontSize: 13,
      marginTop: 14,
      cursor: "pointer",
      textDecoration: "underline"
    }
  }, "Esqueceste a password?"), mode === "login" && React.createElement("p", {
    onClick: _asyncToGenerator(_regenerator().m(function _callee30() {
      return _regenerator().w(function (_context30) {
        while (1) switch (_context30.n) {
          case 0:
            if (email) {
              _context30.n = 1;
              break;
            }
            alert("Mete o teu email primeiro");
            return _context30.a(2);
          case 1:
            _context30.n = 2;
            return fetch("".concat(SB_URL, "/auth/v1/recover"), {
              method: "POST",
              headers: {
                "apikey": SB_KEY,
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                email: email
              })
            });
          case 2:
            alert("Email de recuperação enviado para " + email);
          case 3:
            return _context30.a(2);
        }
      }, _callee30);
    })),
    style: {
      textAlign: "center",
      color: "rgba(255,255,255,0.35)",
      fontSize: 13,
      marginTop: 14,
      cursor: "pointer",
      textDecoration: "underline"
    }
  }, "Esqueci a password")));
};
var Spinner = function Spinner(_ref95) {
  var _ref95$msg = _ref95.msg,
    msg = _ref95$msg === void 0 ? "A carregar..." : _ref95$msg;
  return React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: T.bg,
      fontFamily: "system-ui"
    }
  }, React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      border: "3px solid ".concat(T.border),
      borderTop: "3px solid ".concat(T.navy),
      borderRadius: 20
    },
    className: "spin"
  }), React.createElement("p", {
    style: {
      marginTop: 16,
      color: T.sub,
      fontSize: 14
    }
  }, msg), React.createElement("style", null, "@keyframes spin{to{transform:rotate(360deg)}} .spin{animation:spin 1s linear infinite}"));
};
function App() {
  var _useState229 = useState(function () {
      var h = window.location.hash;
      if (!h.includes("type=recovery")) return null;
      var m = h.match(/access_token=([^&#&]+)/);
      return m ? decodeURIComponent(m[1]) : null;
    }),
    _useState230 = _slicedToArray(_useState229, 1),
    recoveryToken = _useState230[0];
  var _useState231 = useState(function () {
      var h = window.location.hash;
      if (!h.includes("access_token=")) return null;
      if (h.includes("type=recovery")) return null;
      var at = h.match(/access_token=([^&#&]+)/);
      var rt = h.match(/refresh_token=([^&#&]+)/);
      if (!at) return null;
      return {
        access: decodeURIComponent(at[1]),
        refresh: rt ? decodeURIComponent(rt[1]) : ""
      };
    }),
    _useState232 = _slicedToArray(_useState231, 1),
    magicToken = _useState232[0];
  var _useState233 = useState(null),
    _useState234 = _slicedToArray(_useState233, 2),
    token = _useState234[0],
    setToken = _useState234[1];
  var _useState235 = useState(null),
    _useState236 = _slicedToArray(_useState235, 2),
    myUserId = _useState236[0],
    setMyUserId = _useState236[1];
  var _useState237 = useState(null),
    _useState238 = _slicedToArray(_useState237, 2),
    profile = _useState238[0],
    setProfile = _useState238[1];
  var _useState239 = useState([]),
    _useState240 = _slicedToArray(_useState239, 2),
    teams = _useState240[0],
    setTeams = _useState240[1];
  var _useState241 = useState([]),
    _useState242 = _slicedToArray(_useState241, 2),
    members = _useState242[0],
    setMembers = _useState242[1];
  var _useState243 = useState([]),
    _useState244 = _slicedToArray(_useState243, 2),
    fineTypes = _useState244[0],
    setFineTypes = _useState244[1];
  var _useState245 = useState([]),
    _useState246 = _slicedToArray(_useState245, 2),
    fines = _useState246[0],
    setFines = _useState246[1];
  var _useState247 = useState([]),
    _useState248 = _slicedToArray(_useState247, 2),
    expenses = _useState248[0],
    setExpenses = _useState248[1];
  var _useState249 = useState([]),
    _useState250 = _slicedToArray(_useState249, 2),
    trainings = _useState250[0],
    setTrainings = _useState250[1];
  var _useState251 = useState({}),
    _useState252 = _slicedToArray(_useState251, 2),
    presences = _useState252[0],
    setPresences = _useState252[1];
  var _useState253 = useState(null),
    _useState254 = _slicedToArray(_useState253, 2),
    teamId = _useState254[0],
    setTeamId = _useState254[1];
  var _useState255 = useState("home"),
    _useState256 = _slicedToArray(_useState255, 2),
    tab = _useState256[0],
    setTab = _useState256[1];
  var _useState257 = useState(null),
    _useState258 = _slicedToArray(_useState257, 2),
    sub = _useState258[0],
    setSub = _useState258[1];
  var _useState259 = useState(null),
    _useState260 = _slicedToArray(_useState259, 2),
    modal = _useState260[0],
    setModal = _useState260[1];
  var _useState261 = useState(null),
    _useState262 = _slicedToArray(_useState261, 2),
    treinosModal = _useState262[0],
    setTreinosModal = _useState262[1];
  var _useState263 = useState(false),
    _useState264 = _slicedToArray(_useState263, 2),
    loading = _useState264[0],
    setLoading = _useState264[1];
  var _useState265 = useState(false),
    _useState266 = _slicedToArray(_useState265, 2),
    appReady = _useState266[0],
    setAppReady = _useState266[1];
  var _useState267 = useState(false),
    _useState268 = _slicedToArray(_useState267, 2),
    refreshing = _useState268[0],
    setRefreshing = _useState268[1];
  var _useState269 = useState(null),
    _useState270 = _slicedToArray(_useState269, 2),
    authError = _useState270[0],
    setAuthError = _useState270[1];
  var team = teams.find(function (t) {
    return t.id === teamId;
  });
  var isAdmin = members.some(function (m) {
    return m.teamId === teamId && m.userId === myUserId && m.role === "admin";
  }) || (team === null || team === void 0 ? void 0 : team.createdBy) === myUserId;
  var loadTeam = function () {
    var _ref96 = _asyncToGenerator(_regenerator().m(function _callee31(tok, tid) {
      var _yield$Promise$all3, _yield$Promise$all4, mRaw, ftData, fData, eData, tData, pData, profilesMap, uids, profs, mData, presMap;
      return _regenerator().w(function (_context31) {
        while (1) switch (_context31.n) {
          case 0:
            _context31.n = 1;
            return Promise.all([api.get("team_members?team_id=eq.".concat(tid, "&select=*"), tok), api.get("fine_types?team_id=eq.".concat(tid, "&order=amount.asc"), tok), api.get("fines?team_id=eq.".concat(tid, "&order=created_at.desc"), tok), api.get("expenses?team_id=eq.".concat(tid, "&order=created_at.desc"), tok), api.get("trainings?team_id=eq.".concat(tid, "&order=date.asc,time.asc"), tok), api.get("presences?select=*,trainings!inner(team_id)&trainings.team_id=eq.".concat(tid), tok).catch(function () {
              return [];
            })]);
          case 1:
            _yield$Promise$all3 = _context31.v;
            _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 6);
            mRaw = _yield$Promise$all4[0];
            ftData = _yield$Promise$all4[1];
            fData = _yield$Promise$all4[2];
            eData = _yield$Promise$all4[3];
            tData = _yield$Promise$all4[4];
            pData = _yield$Promise$all4[5];
            profilesMap = {};
            if (!(mRaw.length > 0)) {
              _context31.n = 3;
              break;
            }
            uids = mRaw.map(function (m) {
              return m.user_id;
            }).filter(Boolean);
            if (!(uids.length > 0)) {
              _context31.n = 3;
              break;
            }
            _context31.n = 2;
            return api.get("profiles?id=in.(".concat(uids.join(','), ")"), tok).catch(function () {
              return [];
            });
          case 2:
            profs = _context31.v;
            profs.forEach(function (p) {
              profilesMap[p.id] = p;
            });
          case 3:
            mData = mRaw.map(function (m) {
              return _objectSpread(_objectSpread({}, m), {}, {
                profiles: profilesMap[m.user_id] || null
              });
            });
            presMap = {};
            pData.forEach(function (p) {
              if (!presMap[p.training_id]) presMap[p.training_id] = {};
              presMap[p.training_id][p.member_id] = p.status;
            });
            return _context31.a(2, {
              members: mData.map(aMember),
              fineTypes: ftData.map(aFineType),
              fines: fData.map(aFine),
              expenses: eData.map(aExpense),
              trainings: tData.map(aTraining),
              presences: presMap
            });
        }
      }, _callee31);
    }));
    return function loadTeam(_x9, _x0) {
      return _ref96.apply(this, arguments);
    };
  }();
  var initApp = function () {
    var _ref97 = _asyncToGenerator(_regenerator().m(function _callee32(tok, uid) {
      var profData, p, created, myTeamsR, adapted, teamsJson, teamsList, first, td, _t37, _t38;
      return _regenerator().w(function (_context32) {
        while (1) switch (_context32.p = _context32.n) {
          case 0:
            setLoading(true);
            _context32.p = 1;
            _context32.n = 2;
            return api.get("profiles?id=eq.".concat(uid), tok);
          case 2:
            profData = _context32.v;
            p = profData[0];
            if (p) {
              _context32.n = 6;
              break;
            }
            _context32.p = 3;
            _context32.n = 4;
            return api.post('profiles', {
              id: uid,
              name: 'Utilizador'
            }, tok);
          case 4:
            created = _context32.v;
            p = Array.isArray(created) ? created[0] : created;
            _context32.n = 6;
            break;
          case 5:
            _context32.p = 5;
            _t37 = _context32.v;
            console.warn('Profile creation fallback failed:', _t37);
          case 6:
            if (p) setProfile({
              id: p.id,
              name: p.name || '',
              initials: mk(p.name || 'U'),
              position: p.position || '',
              phone: p.phone || '',
              birthday: p.birthday || '',
              email: '',
              isAppAdmin: p.is_admin === true
            });
            _context32.n = 7;
            return fetch("".concat(SB_URL, "/rest/v1/rpc/get_my_teams"), {
              method: 'POST',
              headers: {
                'apikey': SB_KEY,
                'Authorization': "Bearer ".concat(tok),
                'Content-Type': 'application/json'
              },
              body: '{}'
            });
          case 7:
            myTeamsR = _context32.v;
            adapted = [];
            if (!myTeamsR.ok) {
              _context32.n = 9;
              break;
            }
            _context32.n = 8;
            return myTeamsR.json();
          case 8:
            teamsJson = _context32.v;
            teamsList = Array.isArray(teamsJson) ? teamsJson : teamsJson ? [teamsJson] : [];
            adapted = teamsList.map(aTeam);
          case 9:
            setTeams(adapted);
            if (adapted.length) {
              _context32.n = 10;
              break;
            }
            setAppReady(true);
            setLoading(false);
            return _context32.a(2);
          case 10:
            first = adapted[0].id;
            setTeamId(first);
            _context32.n = 11;
            return loadTeam(tok, first);
          case 11:
            td = _context32.v;
            setMembers(td.members);
            setFineTypes(td.fineTypes);
            setFines(td.fines);
            setExpenses(td.expenses);
            setTrainings(td.trainings);
            setPresences(td.presences);
            setAppReady(true);
            _context32.n = 13;
            break;
          case 12:
            _context32.p = 12;
            _t38 = _context32.v;
            setAuthError("Erro: ".concat(_t38.message));
          case 13:
            _context32.p = 13;
            setLoading(false);
            return _context32.f(13);
          case 14:
            return _context32.a(2);
        }
      }, _callee32, null, [[3, 5], [1, 12, 13, 14]]);
    }));
    return function initApp(_x1, _x10) {
      return _ref97.apply(this, arguments);
    };
  }();
  var switchTeam = function () {
    var _ref98 = _asyncToGenerator(_regenerator().m(function _callee33(id) {
      var td, _t39;
      return _regenerator().w(function (_context33) {
        while (1) switch (_context33.p = _context33.n) {
          case 0:
            setTeamId(id);
            setLoading(true);
            setTab("home");
            _context33.p = 1;
            _context33.n = 2;
            return loadTeam(token, id);
          case 2:
            td = _context33.v;
            setMembers(td.members);
            setFineTypes(td.fineTypes);
            setFines(td.fines);
            setExpenses(td.expenses);
            setTrainings(td.trainings);
            setPresences(td.presences);
            _context33.n = 4;
            break;
          case 3:
            _context33.p = 3;
            _t39 = _context33.v;
            console.error(_t39);
          case 4:
            setLoading(false);
          case 5:
            return _context33.a(2);
        }
      }, _callee33, null, [[1, 3]]);
    }));
    return function switchTeam(_x11) {
      return _ref98.apply(this, arguments);
    };
  }();
  var refresh = useCallback(_asyncToGenerator(_regenerator().m(function _callee34() {
    var td, _t40;
    return _regenerator().w(function (_context34) {
      while (1) switch (_context34.p = _context34.n) {
        case 0:
          if (!(refreshing || !token || !teamId)) {
            _context34.n = 1;
            break;
          }
          return _context34.a(2);
        case 1:
          setRefreshing(true);
          _context34.p = 2;
          _context34.n = 3;
          return loadTeam(token, teamId);
        case 3:
          td = _context34.v;
          setMembers(td.members);
          setFineTypes(td.fineTypes);
          setFines(td.fines);
          setExpenses(td.expenses);
          setTrainings(td.trainings);
          setPresences(td.presences);
          _context34.n = 5;
          break;
        case 4:
          _context34.p = 4;
          _t40 = _context34.v;
          console.error(_t40);
        case 5:
          setRefreshing(false);
        case 6:
          return _context34.a(2);
      }
    }, _callee34, null, [[2, 4]]);
  })), [token, teamId, refreshing]);
  useEffect(function () {
    window.__multeamRefresh = refresh;
  }, [refresh]);
  var handleLogin = function () {
    var _ref100 = _asyncToGenerator(_regenerator().m(function _callee35(email, pass) {
      var _d$session, _d$user, d, tok, uid, _t41;
      return _regenerator().w(function (_context35) {
        while (1) switch (_context35.p = _context35.n) {
          case 0:
            setLoading(true);
            setAuthError(null);
            _context35.p = 1;
            _context35.n = 2;
            return api.signIn(email, pass);
          case 2:
            d = _context35.v;
            tok = d.access_token || ((_d$session = d.session) === null || _d$session === void 0 ? void 0 : _d$session.access_token);
            uid = (_d$user = d.user) === null || _d$user === void 0 ? void 0 : _d$user.id;
            if (!(!tok || !uid)) {
              _context35.n = 3;
              break;
            }
            throw new Error(d.error_description || d.msg || 'Email ou password incorretos');
          case 3:
            setToken(tok);
            setMyUserId(uid);
            _context35.n = 4;
            return initApp(tok, uid);
          case 4:
            _context35.n = 6;
            break;
          case 5:
            _context35.p = 5;
            _t41 = _context35.v;
            setAuthError(_t41.message);
            setLoading(false);
          case 6:
            return _context35.a(2);
        }
      }, _callee35, null, [[1, 5]]);
    }));
    return function handleLogin(_x12, _x13) {
      return _ref100.apply(this, arguments);
    };
  }();
  var handleRegister = function () {
    var _ref101 = _asyncToGenerator(_regenerator().m(function _callee36(email, pass, name) {
      var _d$session2, _d$user2, d, tok, uid, _d2$session, d2, tok2, _t42, _t43, _t44;
      return _regenerator().w(function (_context36) {
        while (1) switch (_context36.p = _context36.n) {
          case 0:
            setLoading(true);
            setAuthError(null);
            _context36.p = 1;
            _context36.n = 2;
            return api.signUp(email, pass, name);
          case 2:
            d = _context36.v;
            tok = d.access_token || ((_d$session2 = d.session) === null || _d$session2 === void 0 ? void 0 : _d$session2.access_token);
            uid = (_d$user2 = d.user) === null || _d$user2 === void 0 ? void 0 : _d$user2.id;
            if (!(tok && uid)) {
              _context36.n = 8;
              break;
            }
            _context36.p = 3;
            _context36.n = 4;
            return api.patch("profiles?id=eq.".concat(uid), {
              name: name,
              initials: mk(name)
            }, tok);
          case 4:
            _context36.n = 6;
            break;
          case 5:
            _context36.p = 5;
            _t42 = _context36.v;
          case 6:
            setToken(tok);
            setMyUserId(uid);
            _context36.n = 7;
            return initApp(tok, uid);
          case 7:
            _context36.n = 17;
            break;
          case 8:
            if (!uid) {
              _context36.n = 16;
              break;
            }
            _context36.p = 9;
            _context36.n = 10;
            return api.signIn(email, pass);
          case 10:
            d2 = _context36.v;
            tok2 = d2.access_token || ((_d2$session = d2.session) === null || _d2$session === void 0 ? void 0 : _d2$session.access_token);
            if (!tok2) {
              _context36.n = 12;
              break;
            }
            setToken(tok2);
            setMyUserId(d2.user.id);
            _context36.n = 11;
            return initApp(tok2, d2.user.id);
          case 11:
            _context36.n = 13;
            break;
          case 12:
            setAuthError("Conta criada! Toca em 'Entrar' para aceder.");
          case 13:
            _context36.n = 15;
            break;
          case 14:
            _context36.p = 14;
            _t43 = _context36.v;
            setAuthError("Conta criada! Toca em 'Entrar' para aceder.");
          case 15:
            _context36.n = 17;
            break;
          case 16:
            setAuthError("Erro ao criar conta. Tenta novamente.");
          case 17:
            _context36.n = 19;
            break;
          case 18:
            _context36.p = 18;
            _t44 = _context36.v;
            setAuthError(_t44.message);
          case 19:
            setLoading(false);
          case 20:
            return _context36.a(2);
        }
      }, _callee36, null, [[9, 14], [3, 5], [1, 18]]);
    }));
    return function handleRegister(_x14, _x15, _x16) {
      return _ref101.apply(this, arguments);
    };
  }();
  var handleLogout = function handleLogout() {
    setToken(null);
    setMyUserId(null);
    setProfile(null);
    setTeams([]);
    setMembers([]);
    setFineTypes([]);
    setFines([]);
    setExpenses([]);
    setTrainings([]);
    setPresences({});
    setTeamId(null);
    setAppReady(false);
    setTab("home");
  };
  var addFine = function () {
    var _ref102 = _asyncToGenerator(_regenerator().m(function _callee37(d) {
      var _yield$api$post, _yield$api$post2, f;
      return _regenerator().w(function (_context37) {
        while (1) switch (_context37.n) {
          case 0:
            _context37.n = 1;
            return api.post('fines', {
              team_id: d.teamId,
              member_id: d.memberId,
              amount: d.amount,
              reason: d.reason,
              emoji: d.emoji,
              paid: false,
              assigned_by: myUserId
            }, token);
          case 1:
            _yield$api$post = _context37.v;
            _yield$api$post2 = _slicedToArray(_yield$api$post, 1);
            f = _yield$api$post2[0];
            setFines(function (p) {
              return [aFine(f)].concat(_toConsumableArray(p));
            });
          case 2:
            return _context37.a(2);
        }
      }, _callee37);
    }));
    return function addFine(_x17) {
      return _ref102.apply(this, arguments);
    };
  }();
  var togglePaid = function () {
    var _ref103 = _asyncToGenerator(_regenerator().m(function _callee38(id) {
      var f, _t45;
      return _regenerator().w(function (_context38) {
        while (1) switch (_context38.p = _context38.n) {
          case 0:
            f = fines.find(function (f) {
              return f.id === id;
            });
            if (f) {
              _context38.n = 1;
              break;
            }
            return _context38.a(2);
          case 1:
            _context38.p = 1;
            _context38.n = 2;
            return api.patch("fines?id=eq.".concat(id), {
              paid: !f.paid,
              paid_at: !f.paid ? new Date().toISOString() : null
            }, token);
          case 2:
            setFines(function (p) {
              return p.map(function (x) {
                return x.id === id ? _objectSpread(_objectSpread({}, x), {}, {
                  paid: !x.paid
                }) : x;
              });
            });
            _context38.n = 4;
            break;
          case 3:
            _context38.p = 3;
            _t45 = _context38.v;
            console.error(_t45);
          case 4:
            return _context38.a(2);
        }
      }, _callee38, null, [[1, 3]]);
    }));
    return function togglePaid(_x18) {
      return _ref103.apply(this, arguments);
    };
  }();
  var addExpense = function () {
    var _ref104 = _asyncToGenerator(_regenerator().m(function _callee39(d) {
      var _yield$api$post3, _yield$api$post4, e, _t46;
      return _regenerator().w(function (_context39) {
        while (1) switch (_context39.p = _context39.n) {
          case 0:
            _context39.p = 0;
            _context39.n = 1;
            return api.post('expenses', {
              team_id: d.teamId,
              description: d.description,
              amount: d.amount,
              created_by: myUserId
            }, token);
          case 1:
            _yield$api$post3 = _context39.v;
            _yield$api$post4 = _slicedToArray(_yield$api$post3, 1);
            e = _yield$api$post4[0];
            setExpenses(function (p) {
              return [aExpense(e)].concat(_toConsumableArray(p));
            });
            _context39.n = 3;
            break;
          case 2:
            _context39.p = 2;
            _t46 = _context39.v;
            console.error(_t46);
          case 3:
            return _context39.a(2);
        }
      }, _callee39, null, [[0, 2]]);
    }));
    return function addExpense(_x19) {
      return _ref104.apply(this, arguments);
    };
  }();
  var addTraining = function () {
    var _ref105 = _asyncToGenerator(_regenerator().m(function _callee40(d) {
      var res, t, tm, isJogo, title, body;
      return _regenerator().w(function (_context40) {
        while (1) switch (_context40.n) {
          case 0:
            _context40.n = 1;
            return api.post('trainings', {
              team_id: d.teamId,
              type: d.type,
              date: d.date || null,
              time: d.time || null,
              location: d.location,
              notes: d.notes,
              recurring: d.recurring || false,
              days: d.days || null,
              opponent: d.opponent || null,
              home_away: d.homeAway || null,
              squad: d.squad || null,
              created_by: myUserId
            }, token);
          case 1:
            res = _context40.v;
            t = Array.isArray(res) ? res[0] : res;
            if (t) {
              setTrainings(function (p) {
                return [].concat(_toConsumableArray(p), [aTraining(t)]);
              });
              tm = members.filter(function (m) {
                return m.teamId === d.teamId;
              });
              isJogo = d.type === "jogo";
              title = isJogo ? "\u26BD Jogo marcado".concat(d.opponent ? " vs ".concat(d.opponent) : "") : "📅 Novo treino agendado";
              body = "".concat(d.date ? new Date(d.date + "T00:00:00").toLocaleDateString("pt-PT", {
                weekday: "short",
                day: "numeric",
                month: "short"
              }) : "Recorrente", " \xB7 ").concat(d.time, " \xB7 ").concat(d.location || "");
              sendPushToTeam(d.teamId, tm, title, body).catch(function () {});
            }
          case 2:
            return _context40.a(2);
        }
      }, _callee40);
    }));
    return function addTraining(_x20) {
      return _ref105.apply(this, arguments);
    };
  }();
  var delTraining = function () {
    var _ref106 = _asyncToGenerator(_regenerator().m(function _callee41(id) {
      var _t47;
      return _regenerator().w(function (_context41) {
        while (1) switch (_context41.p = _context41.n) {
          case 0:
            _context41.p = 0;
            _context41.n = 1;
            return api.del("trainings?id=eq.".concat(id), token);
          case 1:
            setTrainings(function (p) {
              return p.filter(function (t) {
                return t.id !== id;
              });
            });
            _context41.n = 3;
            break;
          case 2:
            _context41.p = 2;
            _t47 = _context41.v;
            console.error(_t47);
          case 3:
            return _context41.a(2);
        }
      }, _callee41, null, [[0, 2]]);
    }));
    return function delTraining(_x21) {
      return _ref106.apply(this, arguments);
    };
  }();
  var editTraining = function () {
    var _ref107 = _asyncToGenerator(_regenerator().m(function _callee42(id, d) {
      var patch, res, t;
      return _regenerator().w(function (_context42) {
        while (1) switch (_context42.n) {
          case 0:
            patch = {};
            if (d.date !== undefined) patch.date = d.date || null;
            if (d.time !== undefined) patch.time = d.time || null;
            if (d.location !== undefined) patch.location = d.location;
            if (d.notes !== undefined) patch.notes = d.notes;
            if (d.days !== undefined) patch.days = d.days;
            if (d.opponent !== undefined) patch.opponent = d.opponent || null;
            if (d.homeAway !== undefined) patch.home_away = d.homeAway;
            if (d.squad !== undefined) patch.squad = d.squad;
            _context42.n = 1;
            return api.patch("trainings?id=eq.".concat(id), patch, token);
          case 1:
            res = _context42.v;
            t = Array.isArray(res) ? res[0] : res;
            if (t) setTrainings(function (p) {
              return p.map(function (x) {
                return x.id === id ? aTraining(t) : x;
              });
            });
          case 2:
            return _context42.a(2);
        }
      }, _callee42);
    }));
    return function editTraining(_x22, _x23) {
      return _ref107.apply(this, arguments);
    };
  }();
  var setPresence = function () {
    var _ref108 = _asyncToGenerator(_regenerator().m(function _callee43(tid, mid, status) {
      var _t48;
      return _regenerator().w(function (_context43) {
        while (1) switch (_context43.p = _context43.n) {
          case 0:
            _context43.p = 0;
            if (status) {
              _context43.n = 2;
              break;
            }
            _context43.n = 1;
            return api.del("presences?training_id=eq.".concat(tid, "&member_id=eq.").concat(mid), token);
          case 1:
            setPresences(function (p) {
              var t = _objectSpread({}, p[tid] || {});
              delete t[mid];
              return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, tid, t));
            });
            _context43.n = 4;
            break;
          case 2:
            _context43.n = 3;
            return api.upsert('presences', {
              training_id: tid,
              member_id: mid,
              status: status
            }, token);
          case 3:
            setPresences(function (p) {
              return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, tid, _objectSpread(_objectSpread({}, p[tid] || {}), {}, _defineProperty({}, mid, status))));
            });
          case 4:
            _context43.n = 6;
            break;
          case 5:
            _context43.p = 5;
            _t48 = _context43.v;
            console.error(_t48);
          case 6:
            return _context43.a(2);
        }
      }, _callee43, null, [[0, 5]]);
    }));
    return function setPresence(_x24, _x25, _x26) {
      return _ref108.apply(this, arguments);
    };
  }();
  var addMember = function () {
    var _ref109 = _asyncToGenerator(_regenerator().m(function _callee44(d) {
      var r, m, _t49;
      return _regenerator().w(function (_context44) {
        while (1) switch (_context44.p = _context44.n) {
          case 0:
            _context44.p = 0;
            _context44.n = 1;
            return fetch("".concat(SB_URL, "/rest/v1/rpc/add_member_to_team"), {
              method: 'POST',
              headers: {
                'apikey': SB_KEY,
                'Authorization': "Bearer ".concat(token),
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                p_team_id: d.teamId,
                p_name: d.name,
                p_position: d.position || 'Jogador',
                p_phone: d.phone || '',
                p_birthday: d.birthday || null,
                p_role: d.role || 'player'
              })
            });
          case 1:
            r = _context44.v;
            _context44.n = 2;
            return r.json();
          case 2:
            m = _context44.v;
            if (m !== null && m !== void 0 && m.id) {
              setMembers(function (p) {
                return [].concat(_toConsumableArray(p), [{
                  id: m.id,
                  teamId: d.teamId,
                  userId: m.user_id,
                  role: m.role,
                  name: m.name,
                  initials: mk(m.name),
                  position: m.position || d.position,
                  phone: m.phone || d.phone || '',
                  birthday: d.birthday || ''
                }]);
              });
            }
            _context44.n = 4;
            break;
          case 3:
            _context44.p = 3;
            _t49 = _context44.v;
            console.error(_t49);
          case 4:
            return _context44.a(2);
        }
      }, _callee44, null, [[0, 3]]);
    }));
    return function addMember(_x27) {
      return _ref109.apply(this, arguments);
    };
  }();
  var toggleRole = function () {
    var _ref110 = _asyncToGenerator(_regenerator().m(function _callee45(id) {
      var m, nr, _t50;
      return _regenerator().w(function (_context45) {
        while (1) switch (_context45.p = _context45.n) {
          case 0:
            m = members.find(function (m) {
              return m.id === id;
            });
            if (m) {
              _context45.n = 1;
              break;
            }
            return _context45.a(2);
          case 1:
            nr = m.role === 'admin' ? 'player' : 'admin';
            _context45.p = 2;
            _context45.n = 3;
            return api.patch("team_members?id=eq.".concat(id), {
              role: nr
            }, token);
          case 3:
            setMembers(function (p) {
              return p.map(function (m) {
                return m.id === id ? _objectSpread(_objectSpread({}, m), {}, {
                  role: nr
                }) : m;
              });
            });
            _context45.n = 5;
            break;
          case 4:
            _context45.p = 4;
            _t50 = _context45.v;
            console.error(_t50);
          case 5:
            return _context45.a(2);
        }
      }, _callee45, null, [[2, 4]]);
    }));
    return function toggleRole(_x28) {
      return _ref110.apply(this, arguments);
    };
  }();
  var removeMember = function () {
    var _ref111 = _asyncToGenerator(_regenerator().m(function _callee46(id) {
      var _t51;
      return _regenerator().w(function (_context46) {
        while (1) switch (_context46.p = _context46.n) {
          case 0:
            _context46.p = 0;
            _context46.n = 1;
            return api.del("team_members?id=eq.".concat(id), token);
          case 1:
            setMembers(function (p) {
              return p.filter(function (m) {
                return m.id !== id;
              });
            });
            _context46.n = 3;
            break;
          case 2:
            _context46.p = 2;
            _t51 = _context46.v;
            console.error(_t51);
          case 3:
            return _context46.a(2);
        }
      }, _callee46, null, [[0, 2]]);
    }));
    return function removeMember(_x29) {
      return _ref111.apply(this, arguments);
    };
  }();
  var editMember = function () {
    var _ref112 = _asyncToGenerator(_regenerator().m(function _callee47(id, data) {
      var m, _t52;
      return _regenerator().w(function (_context47) {
        while (1) switch (_context47.p = _context47.n) {
          case 0:
            _context47.p = 0;
            _context47.n = 1;
            return api.patch("team_members?id=eq.".concat(id), {
              position: data.position
            }, token);
          case 1:
            m = members.find(function (m) {
              return m.id === id;
            });
            if (!((m === null || m === void 0 ? void 0 : m.userId) === myUserId)) {
              _context47.n = 2;
              break;
            }
            _context47.n = 2;
            return api.patch("profiles?id=eq.".concat(myUserId), {
              name: data.name,
              phone: data.phone,
              birthday: data.birthday
            }, token);
          case 2:
            setMembers(function (p) {
              return p.map(function (m) {
                return m.id === id ? _objectSpread(_objectSpread({}, m), data) : m;
              });
            });
            _context47.n = 4;
            break;
          case 3:
            _context47.p = 3;
            _t52 = _context47.v;
            console.error(_t52);
          case 4:
            return _context47.a(2);
        }
      }, _callee47, null, [[0, 3]]);
    }));
    return function editMember(_x30, _x31) {
      return _ref112.apply(this, arguments);
    };
  }();
  var _useState271 = useState(null),
    _useState272 = _slicedToArray(_useState271, 2),
    teamError = _useState272[0],
    setTeamError = _useState272[1];
  var createTeam = function () {
    var _ref113 = _asyncToGenerator(_regenerator().m(function _callee48(d) {
      var tid, invCode, sr, se, tr, newTeam, _t53;
      return _regenerator().w(function (_context48) {
        while (1) switch (_context48.p = _context48.n) {
          case 0:
            setTeamError(null);
            _context48.p = 1;
            tid = crypto.randomUUID();
            invCode = Math.random().toString(36).substring(2, 5).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
            _context48.n = 2;
            return api.post('teams', {
              id: tid,
              name: d.name,
              emoji: d.emoji,
              color: d.color,
              season: d.season || '2025/26',
              country: d.country || 'Portugal',
              sport: d.sport || 'Futebol 11',
              currency: d.currency || 'EUR',
              city: d.city || '',
              postal: d.postal || '',
              created_by: myUserId,
              invite_code: invCode
            }, token);
          case 2:
            _context48.n = 3;
            return fetch("".concat(SB_URL, "/rest/v1/rpc/setup_new_team"), {
              method: 'POST',
              headers: {
                'apikey': SB_KEY,
                'Authorization': "Bearer ".concat(token),
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                p_team_id: tid,
                p_user_id: myUserId
              })
            });
          case 3:
            sr = _context48.v;
            if (sr.ok) {
              _context48.n = 5;
              break;
            }
            _context48.n = 4;
            return sr.json();
          case 4:
            se = _context48.v;
            throw new Error(se.message || se.hint || 'Erro ao configurar equipa');
          case 5:
            _context48.n = 6;
            return api.get("teams?id=eq.".concat(tid), token);
          case 6:
            tr = _context48.v;
            newTeam = aTeam(tr[0] || {
              id: tid,
              name: d.name,
              emoji: d.emoji,
              color: d.color,
              season: d.season,
              invite_code: invCode
            });
            setTeams(function (p) {
              return [].concat(_toConsumableArray(p), [newTeam]);
            });
            _context48.n = 7;
            return switchTeam(tid);
          case 7:
            _context48.n = 9;
            break;
          case 8:
            _context48.p = 8;
            _t53 = _context48.v;
            setTeamError(_t53.message || JSON.stringify(_t53));
          case 9:
            return _context48.a(2);
        }
      }, _callee48, null, [[1, 8]]);
    }));
    return function createTeam(_x32) {
      return _ref113.apply(this, arguments);
    };
  }();
  var deleteTeam = function () {
    var _ref114 = _asyncToGenerator(_regenerator().m(function _callee49(teamId) {
      var remaining, _t54;
      return _regenerator().w(function (_context49) {
        while (1) switch (_context49.p = _context49.n) {
          case 0:
            _context49.p = 0;
            _context49.n = 1;
            return api.del("teams?id=eq.".concat(teamId), token);
          case 1:
            remaining = teams.filter(function (t) {
              return t.id !== teamId;
            });
            setTeams(remaining);
            setSub(null);
            setTab("home");
            if (!(remaining.length > 0)) {
              _context49.n = 3;
              break;
            }
            _context49.n = 2;
            return switchTeam(remaining[0].id);
          case 2:
            _context49.n = 4;
            break;
          case 3:
            setTeamId(null);
            setMembers([]);
            setFines([]);
            setFineTypes([]);
            setExpenses([]);
            setTrainings([]);
            setPresences({});
          case 4:
            _context49.n = 6;
            break;
          case 5:
            _context49.p = 5;
            _t54 = _context49.v;
            console.error('deleteTeam error:', _t54);
          case 6:
            return _context49.a(2);
        }
      }, _callee49, null, [[0, 5]]);
    }));
    return function deleteTeam(_x33) {
      return _ref114.apply(this, arguments);
    };
  }();
  var joinTeam = function () {
    var _ref115 = _asyncToGenerator(_regenerator().m(function _callee50(t) {
      var _yield$api$get, _yield$api$get2, td, _t55;
      return _regenerator().w(function (_context50) {
        while (1) switch (_context50.p = _context50.n) {
          case 0:
            _context50.p = 0;
            _context50.n = 1;
            return api.insert('team_members', {
              team_id: t.id,
              user_id: myUserId,
              role: 'player'
            }, token);
          case 1:
            _context50.n = 2;
            return api.get("teams?id=eq.".concat(t.id), token);
          case 2:
            _yield$api$get = _context50.v;
            _yield$api$get2 = _slicedToArray(_yield$api$get, 1);
            td = _yield$api$get2[0];
            setTeams(function (p) {
              return p.some(function (x) {
                return x.id === t.id;
              }) ? p : [].concat(_toConsumableArray(p), [aTeam(td)]);
            });
            _context50.n = 3;
            return switchTeam(t.id);
          case 3:
            _context50.n = 5;
            break;
          case 4:
            _context50.p = 4;
            _t55 = _context50.v;
            console.error(_t55);
          case 5:
            return _context50.a(2);
        }
      }, _callee50, null, [[0, 4]]);
    }));
    return function joinTeam(_x34) {
      return _ref115.apply(this, arguments);
    };
  }();
  var findTeamByCode = function () {
    var _ref116 = _asyncToGenerator(_regenerator().m(function _callee51(code) {
      var r, d, t, _t56;
      return _regenerator().w(function (_context51) {
        while (1) switch (_context51.p = _context51.n) {
          case 0:
            _context51.p = 0;
            _context51.n = 1;
            return fetch("".concat(SB_URL, "/rest/v1/rpc/find_team_by_code"), {
              method: 'POST',
              headers: {
                'apikey': SB_KEY,
                'Authorization': "Bearer ".concat(token || SB_KEY),
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                code: code.trim().toUpperCase()
              })
            });
          case 1:
            r = _context51.v;
            _context51.n = 2;
            return r.json();
          case 2:
            d = _context51.v;
            t = Array.isArray(d) ? d[0] : d;
            return _context51.a(2, t !== null && t !== void 0 && t.id ? aTeam(_objectSpread(_objectSpread({}, t), {}, {
              invite_code: t.invite_code
            })) : null);
          case 3:
            _context51.p = 3;
            _t56 = _context51.v;
            return _context51.a(2, null);
        }
      }, _callee51, null, [[0, 3]]);
    }));
    return function findTeamByCode(_x35) {
      return _ref116.apply(this, arguments);
    };
  }();
  var _useState273 = useState(function () {
      var p = new URLSearchParams(window.location.search);
      return p.get('invite') || null;
    }),
    _useState274 = _slicedToArray(_useState273, 2),
    pendingInvite = _useState274[0],
    setPendingInvite = _useState274[1];
  useEffect(function () {
    if (appReady && pendingInvite) {
      setModal("join");
    }
  }, [appReady, pendingInvite]);
  var subscribeToPush = function () {
    var _ref117 = _asyncToGenerator(_regenerator().m(function _callee52(tok, uid) {
      var _subJson$keys, _subJson$keys2, reg, existing, _sub, subJson, _t57, _t58;
      return _regenerator().w(function (_context52) {
        while (1) switch (_context52.p = _context52.n) {
          case 0:
            if (!(!("serviceWorker" in navigator) || !("PushManager" in window))) {
              _context52.n = 1;
              break;
            }
            return _context52.a(2);
          case 1:
            _context52.p = 1;
            _context52.n = 2;
            return navigator.serviceWorker.ready;
          case 2:
            reg = _context52.v;
            _context52.n = 3;
            return reg.pushManager.getSubscription();
          case 3:
            existing = _context52.v;
            _t57 = existing;
            if (_t57) {
              _context52.n = 5;
              break;
            }
            _context52.n = 4;
            return reg.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: VAPID_PUBLIC
            });
          case 4:
            _t57 = _context52.v;
          case 5:
            _sub = _t57;
            subJson = _sub.toJSON();
            _context52.n = 6;
            return fetch("".concat(SB_URL, "/rest/v1/push_subscriptions"), {
              method: "POST",
              headers: {
                "apikey": SB_KEY,
                "Authorization": "Bearer ".concat(tok),
                "Content-Type": "application/json",
                "Prefer": "resolution=merge-duplicates,return=minimal"
              },
              body: JSON.stringify({
                user_id: uid,
                endpoint: subJson.endpoint,
                p256dh: (_subJson$keys = subJson.keys) === null || _subJson$keys === void 0 ? void 0 : _subJson$keys.p256dh,
                auth: (_subJson$keys2 = subJson.keys) === null || _subJson$keys2 === void 0 ? void 0 : _subJson$keys2.auth
              })
            });
          case 6:
            _context52.n = 8;
            break;
          case 7:
            _context52.p = 7;
            _t58 = _context52.v;
            console.warn("Push subscribe failed:", _t58.message);
          case 8:
            return _context52.a(2);
        }
      }, _callee52, null, [[1, 7]]);
    }));
    return function subscribeToPush(_x36, _x37) {
      return _ref117.apply(this, arguments);
    };
  }();
  useEffect(function () {
    if (!appReady || !token || !myUserId) return;
    if ("Notification" in window && Notification.permission === "default") {
      setTimeout(_asyncToGenerator(_regenerator().m(function _callee53() {
        var perm;
        return _regenerator().w(function (_context53) {
          while (1) switch (_context53.n) {
            case 0:
              _context53.n = 1;
              return Notification.requestPermission();
            case 1:
              perm = _context53.v;
              if (perm === "granted") subscribeToPush(token, myUserId);
            case 2:
              return _context53.a(2);
          }
        }, _callee53);
      })), 2500);
    } else if ("Notification" in window && Notification.permission === "granted") {
      subscribeToPush(token, myUserId);
    }
  }, [appReady, token, myUserId]);
  var _useState275 = useState(null),
    _useState276 = _slicedToArray(_useState275, 2),
    toast = _useState276[0],
    setToast = _useState276[1];
  var showToast = function showToast(msg) {
    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : T.navy;
    setToast({
      msg: msg,
      color: color
    });
    setTimeout(function () {
      return setToast(null);
    }, 3000);
  };
  var sendPushToTeam = function () {
    var _ref119 = _asyncToGenerator(_regenerator().m(function _callee54(teamId, members, title, body) {
      var userIds, _t59;
      return _regenerator().w(function (_context54) {
        while (1) switch (_context54.p = _context54.n) {
          case 0:
            userIds = members.map(function (m) {
              return m.userId;
            }).filter(Boolean);
            if (userIds.length) {
              _context54.n = 1;
              break;
            }
            return _context54.a(2);
          case 1:
            _context54.p = 1;
            _context54.n = 2;
            return fetch("".concat(SB_URL, "/functions/v1/send-team-push"), {
              method: "POST",
              headers: {
                "apikey": SB_KEY,
                "Authorization": "Bearer ".concat(token),
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                team_id: teamId,
                user_ids: userIds,
                title: title,
                body: body
              })
            });
          case 2:
            _context54.n = 4;
            break;
          case 3:
            _context54.p = 3;
            _t59 = _context54.v;
            console.warn("Push send failed:", _t59.message);
          case 4:
            return _context54.a(2);
        }
      }, _callee54, null, [[1, 3]]);
    }));
    return function sendPushToTeam(_x38, _x39, _x40, _x41) {
      return _ref119.apply(this, arguments);
    };
  }();
  var addFineWithToast = function () {
    var _ref120 = _asyncToGenerator(_regenerator().m(function _callee55(d) {
      var m;
      return _regenerator().w(function (_context55) {
        while (1) switch (_context55.n) {
          case 0:
            _context55.n = 1;
            return addFine(d);
          case 1:
            m = members.find(function (x) {
              return String(x.id) === String(d.memberId);
            });
            showToast("\uD83D\uDFE5 Multa de ".concat(d.amount, "\u20AC atribu\xEDda a ").concat((m === null || m === void 0 ? void 0 : m.name) || "jogador"), T.brand);
            if (m !== null && m !== void 0 && m.userId) {
              sendPushToTeam(d.teamId, [m], "🟥 Recebeste uma multa!", "".concat(d.amount, "\u20AC \u2014 ").concat(d.reason || "Multa atribuída")).catch(function () {});
            }
          case 2:
            return _context55.a(2);
        }
      }, _callee55);
    }));
    return function addFineWithToast(_x42) {
      return _ref120.apply(this, arguments);
    };
  }();
  useEffect(function () {
    if (!magicToken || token) return;
    fetch("".concat(SB_URL, "/auth/v1/user"), {
      headers: {
        "apikey": SB_KEY,
        "Authorization": "Bearer ".concat(magicToken.access)
      }
    }).then(function (r) {
      return r.json();
    }).then(function (u) {
      if (u.id) {
        setToken(magicToken.access);
        setMyUserId(u.id);
        window.history.replaceState(null, "", "/");
      }
    }).catch(function () {});
  }, [magicToken]);
  if (recoveryToken) return React.createElement(ResetPasswordScreen, {
    accessToken: recoveryToken,
    onDone: function onDone() {
      window.history.replaceState(null, "", "/");
      window.location.reload();
    }
  });
  if (!token || !appReady) return React.createElement(AuthScreen, {
    onLogin: handleLogin,
    onRegister: handleRegister,
    error: authError,
    loading: loading
  });
  if (loading) return React.createElement(Spinner, null);
  var nav = [{
    id: "home",
    emoji: "🏠",
    label: "Início"
  }, {
    id: "fines",
    emoji: "🟥",
    label: "Multas"
  }, {
    id: "treinos",
    emoji: "🗓️",
    label: "Treinos"
  }, {
    id: "caixa",
    emoji: "💰",
    label: "Caixa"
  }, {
    id: "geral",
    emoji: "👤",
    label: "Geral"
  }].concat(_toConsumableArray(profile !== null && profile !== void 0 && profile.isAppAdmin ? [{
    id: "appadmin",
    emoji: "🛡️",
    label: "Admin"
  }] : []));
  var wrap = function wrap(ch) {
    return React.createElement("div", {
      style: {
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        maxWidth: 480,
        margin: "0 auto"
      }
    }, ch);
  };
  if (!team) return React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: T.bg,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      fontFamily: "system-ui"
    }
  }, React.createElement("p", {
    style: {
      fontSize: 40
    }
  }, "\u26BD"), React.createElement("p", {
    style: {
      fontWeight: 800,
      fontSize: 20,
      margin: "8px 0 6px"
    }
  }, "Sem equipas ainda"), React.createElement("p", {
    style: {
      color: T.sub,
      marginBottom: 16
    }
  }, "Cria ou junta-te a uma equipa"), teamError && React.createElement("div", {
    style: {
      background: "#FFE5E5",
      borderRadius: 12,
      padding: "12px 16px",
      marginBottom: 16,
      width: "100%",
      maxWidth: 340,
      fontSize: 13,
      color: "#C00",
      wordBreak: "break-all"
    }
  }, teamError), React.createElement("button", {
    onClick: function onClick() {
      return setModal("team");
    },
    style: {
      width: "100%",
      maxWidth: 300,
      padding: 15,
      borderRadius: 14,
      border: "none",
      background: T.navy,
      color: "#fff",
      fontWeight: 800,
      cursor: "pointer",
      marginBottom: 10,
      fontFamily: "inherit"
    }
  }, "\u2795 Criar equipa"), React.createElement("button", {
    onClick: function onClick() {
      return setModal("join");
    },
    style: {
      width: "100%",
      maxWidth: 300,
      padding: 15,
      borderRadius: 14,
      border: "1.5px solid ".concat(T.navy),
      background: "transparent",
      color: T.navy,
      fontWeight: 800,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "\uD83D\uDD17 Entrar com c\xF3digo"), modal === "team" && React.createElement(CreateTeamModal, {
    onAdd: createTeam,
    onClose: function onClose() {
      return setModal(null);
    }
  }), modal === "join" && React.createElement(JoinTeamModal, {
    teams: teams,
    user: profile,
    onFindByCode: findTeamByCode,
    onJoin: (function () {
      var _ref121 = _asyncToGenerator(_regenerator().m(function _callee56(t) {
        return _regenerator().w(function (_context56) {
          while (1) switch (_context56.n) {
            case 0:
              _context56.n = 1;
              return joinTeam(t);
            case 1:
              setPendingInvite(null);
            case 2:
              return _context56.a(2);
          }
        }, _callee56);
      }));
      return function (_x43) {
        return _ref121.apply(this, arguments);
      };
    }()),
    initialCode: pendingInvite || "",
    onClose: function onClose() {
      setModal(null);
      setPendingInvite(null);
    }
  }));
  if (tab === "treinos") return React.createElement("div", {
    style: {
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      maxWidth: 480,
      margin: "0 auto"
    }
  }, React.createElement(TreinosPage, {
    team: team,
    trainings: trainings,
    members: members,
    myUserId: myUserId,
    isAdmin: isAdmin,
    presences: presences,
    onSetPresence: setPresence,
    onAddType: addTraining,
    onDelete: delTraining,
    onEdit: editTraining,
    onBack: function onBack() {
      return setTab("home");
    },
    modal: treinosModal,
    setModal: setTreinosModal
  }));
  if ((sub === null || sub === void 0 ? void 0 : sub.type) === "member") return wrap(React.createElement(MemberDetailScreen, {
    member: sub.data,
    team: team,
    fines: fines,
    isAdmin: isAdmin,
    onBack: function onBack() {
      return setSub(null);
    },
    onTogglePaid: togglePaid
  }));
  if ((sub === null || sub === void 0 ? void 0 : sub.type) === "manage") {
    var mt = teams.find(function (t) {
      return t.id === sub.data;
    });
    return wrap(React.createElement(React.Fragment, null, React.createElement(ManageTeamScreen, {
      team: mt,
      members: members,
      fineTypes: fineTypes,
      token: token,
      setFineTypes: setFineTypes,
      myUserId: myUserId,
      onBack: function onBack() {
        return setSub(null);
      },
      onAddMember: function onAddMember() {
        return setModal("member");
      },
      onToggleRole: toggleRole,
      onRemoveMember: removeMember,
      onEditMember: editMember,
      onRegenerateCode: function onRegenerateCode() {},
      onDeleteTeam: function onDeleteTeam() {
        return deleteTeam(mt.id);
      }
    }), modal === "member" && React.createElement(AddMemberModal, {
      team: mt,
      onAdd: addMember,
      onClose: function onClose() {
        return setModal(null);
      }
    })));
  }
  return React.createElement("div", {
    style: {
      background: T.bg,
      minHeight: "100vh",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      maxWidth: 480,
      margin: "0 auto"
    }
  }, refreshing && React.createElement("div", {
    style: {
      position: "fixed",
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "100%",
      maxWidth: 480,
      zIndex: 999,
      display: "flex",
      justifyContent: "center",
      paddingTop: 8
    }
  }, React.createElement("div", {
    style: {
      background: T.navy,
      borderRadius: 20,
      padding: "6px 16px",
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 13,
      color: "#fff",
      fontWeight: 700,
      boxShadow: "0 2px 12px rgba(0,0,0,0.2)"
    }
  }, React.createElement("span", {
    style: {
      display: "inline-block",
      animation: "spin 0.8s linear infinite"
    }
  }, "\u27F3"), " A atualizar...")), toast && React.createElement("div", {
    style: {
      position: "fixed",
      top: 16,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 9999,
      background: toast.color,
      color: "#fff",
      borderRadius: 20,
      padding: "10px 20px",
      fontSize: 14,
      fontWeight: 700,
      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      whiteSpace: "nowrap",
      pointerEvents: "none"
    }
  }, toast.msg), React.createElement("style", null, "@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }"), React.createElement("div", {
    style: {
      background: "linear-gradient(135deg, ".concat(team.color, ", ").concat(team.color, "dd)"),
      color: "#fff",
      padding: "52px 16px 14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, React.createElement("div", null, React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 11,
      opacity: 0.6,
      fontWeight: 700,
      letterSpacing: 1,
      textTransform: "uppercase"
    }
  }, "Multeam"), React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 22,
      fontWeight: 900,
      letterSpacing: -0.5
    }
  }, team.name), isAdmin && React.createElement(AdminHeaderBadge, {
    teamColor: team.color
  })), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, React.createElement("button", {
    onClick: function onClick() {
      return window.location.reload();
    },
    style: {
      background: "rgba(255,255,255,0.15)",
      border: "none",
      color: "#fff",
      borderRadius: 20,
      width: 36,
      height: 36,
      fontSize: 18,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, "\u21BA"), React.createElement("button", {
    onClick: function onClick() {
      return setModal("picker");
    },
    style: {
      background: "rgba(255,255,255,0.22)",
      border: "none",
      color: "#fff",
      borderRadius: 20,
      padding: "8px 16px",
      fontSize: 14,
      cursor: "pointer",
      fontWeight: 700,
      fontFamily: "inherit"
    }
  }, team.emoji, " Trocar \u25BE"))), tab === "home" && React.createElement(HomeTab, {
    team: team,
    fines: fines,
    members: members,
    expenses: expenses,
    trainings: trainings,
    isAdmin: isAdmin,
    onAddFine: function onAddFine() {
      return setModal("fine");
    }
  }), tab === "fines" && React.createElement(FinesTab, {
    team: team,
    fines: fines,
    members: members,
    isAdmin: isAdmin,
    onAddFine: function onAddFine() {
      return setModal("fine");
    },
    onTogglePaid: togglePaid,
    onSelectMember: function onSelectMember(m) {
      return setSub({
        type: "member",
        data: m
      });
    }
  }), tab === "caixa" && React.createElement(TreasuryTab, {
    team: team,
    fines: fines,
    members: members,
    expenses: expenses,
    isAdmin: isAdmin,
    onAddExpense: function onAddExpense() {
      return setModal("expense");
    }
  }), tab === "geral" && React.createElement(GeneralTab, {
    user: profile || {},
    myUserId: myUserId,
    teams: teams,
    members: members,
    onEditProfile: function onEditProfile() {
      return setModal("profile");
    },
    onManageTeam: function onManageTeam(id) {
      return setSub({
        type: "manage",
        data: id
      });
    },
    onCreateTeam: function onCreateTeam() {
      return setModal("team");
    },
    onJoinTeam: function onJoinTeam() {
      return setModal("join");
    },
    onLogout: handleLogout
  }), tab === "appadmin" && (profile === null || profile === void 0 ? void 0 : profile.isAppAdmin) && React.createElement(AppAdminTab, {
    token: token
  }), React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "100%",
      maxWidth: 480,
      background: T.card,
      borderTop: "1px solid ".concat(T.border),
      display: "flex",
      padding: "8px 0 24px",
      boxShadow: "0 -2px 20px rgba(0,0,0,0.06)"
    }
  }, nav.map(function (item) {
    return React.createElement("button", {
      key: item.id,
      onClick: function onClick() {
        return setTab(item.id);
      },
      style: {
        flex: 1,
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        padding: "4px 0",
        fontFamily: "inherit"
      }
    }, React.createElement("span", {
      style: {
        fontSize: 20
      }
    }, item.emoji), React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: tab === item.id ? 800 : 500,
        color: tab === item.id ? team.color : T.sub
      }
    }, item.label));
  })), modal === "picker" && React.createElement(TeamPickerModal, {
    teams: teams,
    members: members,
    myUserId: myUserId,
    currentTeamId: teamId,
    onSelect: switchTeam,
    onClose: function onClose() {
      return setModal(null);
    },
    onCreateTeam: function onCreateTeam() {
      return setModal("team");
    }
  }), modal === "fine" && isAdmin && React.createElement(AddFineModal, {
    team: team,
    myUserId: myUserId,
    token: token,
    onAdd: addFineWithToast,
    onClose: function onClose() {
      return setModal(null);
    }
  }), modal === "expense" && isAdmin && React.createElement(AddExpenseModal, {
    team: team,
    onAdd: addExpense,
    onClose: function onClose() {
      return setModal(null);
    }
  }), modal === "team" && React.createElement(CreateTeamModal, {
    onAdd: createTeam,
    onClose: function onClose() {
      return setModal(null);
    }
  }), modal === "profile" && React.createElement(EditProfileModal, {
    user: profile || {},
    onSave: (function () {
      var _ref122 = _asyncToGenerator(_regenerator().m(function _callee57(u) {
        var _members$find;
        return _regenerator().w(function (_context57) {
          while (1) switch (_context57.n) {
            case 0:
              _context57.n = 1;
              return editMember((_members$find = members.find(function (m) {
                return m.userId === myUserId && m.teamId === teamId;
              })) === null || _members$find === void 0 ? void 0 : _members$find.id, u);
            case 1:
              setProfile(function (p) {
                return _objectSpread(_objectSpread({}, p), u);
              });
            case 2:
              return _context57.a(2);
          }
        }, _callee57);
      }));
      return function (_x44) {
        return _ref122.apply(this, arguments);
      };
    }()),
    onClose: function onClose() {
      return setModal(null);
    }
  }), modal === "join" && React.createElement(JoinTeamModal, {
    teams: teams,
    user: profile,
    onFindByCode: findTeamByCode,
    onJoin: (function () {
      var _ref123 = _asyncToGenerator(_regenerator().m(function _callee58(t) {
        return _regenerator().w(function (_context58) {
          while (1) switch (_context58.n) {
            case 0:
              _context58.n = 1;
              return joinTeam(t);
            case 1:
              setPendingInvite(null);
            case 2:
              return _context58.a(2);
          }
        }, _callee58);
      }));
      return function (_x45) {
        return _ref123.apply(this, arguments);
      };
    }()),
    initialCode: pendingInvite || "",
    onClose: function onClose() {
      setModal(null);
      setPendingInvite(null);
    }
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));