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
  useEffect = _React.useEffect;
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
    postal: t.postal
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
var DEFAULT_FINE_TYPES = [{
  name: "Atraso",
  amount: 5,
  emoji: "⏰"
}, {
  name: "Falta ao treino",
  amount: 10,
  emoji: "🏃"
}, {
  name: "Sem equipamento",
  amount: 3,
  emoji: "👕"
}, {
  name: "Cartão amarelo",
  amount: 7,
  emoji: "🟨"
}, {
  name: "Cartão vermelho",
  amount: 15,
  emoji: "🟥"
}];
var initUser = {
  id: 100,
  name: "Patricio",
  initials: "PA",
  position: "Avançado",
  phone: "+41 79 888 4384",
  birthday: "1987-05-15",
  email: "patricio@multeam.app"
};
var initTeams = [{
  id: 1,
  name: "FC Selzach",
  emoji: "⚽",
  color: "#1D3557",
  season: "2024/25",
  inviteCode: "FCZ-2025"
}, {
  id: 2,
  name: "Futsal Solothurn",
  emoji: "🥅",
  color: "#2A7D4F",
  season: "2024/25",
  inviteCode: "FSO-7X3K"
}, {
  id: 3,
  name: "Beach FC Biel",
  emoji: "🏖️",
  color: "#C77B2A",
  season: "Verão 25",
  inviteCode: "BFC-BIEL"
}];
var initMembers = [{
  id: 1,
  teamId: 1,
  userId: 100,
  name: "Patricio",
  initials: "PA",
  position: "Avançado",
  phone: "+41 79 888 4384",
  birthday: "1987-05-15",
  role: "admin"
}, {
  id: 2,
  teamId: 1,
  userId: 2,
  name: "Marco S.",
  initials: "MS",
  position: "Médio",
  phone: "+41 76 111 2222",
  birthday: "1990-03-22",
  role: "player"
}, {
  id: 3,
  teamId: 1,
  userId: 3,
  name: "João P.",
  initials: "JP",
  position: "Defesa",
  phone: "+41 78 333 4444",
  birthday: "1992-07-10",
  role: "player"
}, {
  id: 4,
  teamId: 1,
  userId: 4,
  name: "Rui A.",
  initials: "RA",
  position: "Guarda-redes",
  phone: "+41 79 555 6666",
  birthday: "1988-11-30",
  role: "player"
}, {
  id: 5,
  teamId: 1,
  userId: 5,
  name: "Carlos M.",
  initials: "CM",
  position: "Avançado",
  phone: "+41 77 777 8888",
  birthday: "1995-01-15",
  role: "admin"
}, {
  id: 6,
  teamId: 2,
  userId: 100,
  name: "Patricio",
  initials: "PA",
  position: "Pivot",
  phone: "+41 79 888 4384",
  birthday: "1987-05-15",
  role: "player"
}, {
  id: 7,
  teamId: 2,
  userId: 7,
  name: "Pedro L.",
  initials: "PL",
  position: "Ala",
  phone: "+41 76 222 3333",
  birthday: "1993-06-18",
  role: "admin"
}, {
  id: 8,
  teamId: 2,
  userId: 8,
  name: "Diogo F.",
  initials: "DF",
  position: "Guarda-redes",
  phone: "+41 78 444 5555",
  birthday: "1991-09-05",
  role: "player"
}, {
  id: 9,
  teamId: 2,
  userId: 9,
  name: "Bruno K.",
  initials: "BK",
  position: "Defesa",
  phone: "+41 79 666 7777",
  birthday: "1994-12-20",
  role: "player"
}, {
  id: 10,
  teamId: 3,
  userId: 100,
  name: "Patricio",
  initials: "PA",
  position: "Avançado",
  phone: "+41 79 888 4384",
  birthday: "1987-05-15",
  role: "admin"
}, {
  id: 11,
  teamId: 3,
  userId: 11,
  name: "Nuno T.",
  initials: "NT",
  position: "Médio",
  phone: "+41 76 888 9999",
  birthday: "1989-04-25",
  role: "player"
}, {
  id: 12,
  teamId: 3,
  userId: 12,
  name: "André R.",
  initials: "AR",
  position: "Defesa",
  phone: "+41 77 000 1111",
  birthday: "1996-08-12",
  role: "player"
}];
var initFineTypes = [{
  id: 1,
  teamId: 1,
  name: "Atraso",
  amount: 5,
  emoji: "⏰"
}, {
  id: 2,
  teamId: 1,
  name: "Falta ao treino",
  amount: 10,
  emoji: "🏃"
}, {
  id: 3,
  teamId: 1,
  name: "Sem equipamento",
  amount: 3,
  emoji: "👕"
}, {
  id: 4,
  teamId: 1,
  name: "Cartão amarelo",
  amount: 7,
  emoji: "🟨"
}, {
  id: 5,
  teamId: 1,
  name: "Cartão vermelho",
  amount: 15,
  emoji: "🟥"
}, {
  id: 6,
  teamId: 2,
  name: "Atraso",
  amount: 5,
  emoji: "⏰"
}, {
  id: 7,
  teamId: 2,
  name: "Falta ao jogo",
  amount: 20,
  emoji: "🚫"
}, {
  id: 8,
  teamId: 2,
  name: "Cartão vermelho",
  amount: 15,
  emoji: "🟥"
}, {
  id: 9,
  teamId: 3,
  name: "Atraso",
  amount: 2,
  emoji: "⏰"
}, {
  id: 10,
  teamId: 3,
  name: "Falta ao torneio",
  amount: 10,
  emoji: "🏖️"
}];
var initFines = [{
  id: 1,
  teamId: 1,
  memberId: 2,
  amount: 5,
  reason: "15 min de atraso ao treino",
  emoji: "⏰",
  paid: false,
  date: "2025-07-20"
}, {
  id: 2,
  teamId: 1,
  memberId: 3,
  amount: 10,
  reason: "Faltou sem aviso prévio",
  emoji: "🏃",
  paid: true,
  date: "2025-07-18"
}, {
  id: 3,
  teamId: 1,
  memberId: 4,
  amount: 7,
  reason: "Cartão no jogo vs Grenchen",
  emoji: "🟨",
  paid: false,
  date: "2025-07-15"
}, {
  id: 4,
  teamId: 1,
  memberId: 2,
  amount: 15,
  reason: "Expulso vs Biel",
  emoji: "🟥",
  paid: false,
  date: "2025-07-12"
}, {
  id: 5,
  teamId: 1,
  memberId: 5,
  amount: 3,
  reason: "Esqueceu as chuteiras",
  emoji: "👕",
  paid: true,
  date: "2025-07-10"
}, {
  id: 6,
  teamId: 2,
  memberId: 8,
  amount: 5,
  reason: "10 min de atraso",
  emoji: "⏰",
  paid: false,
  date: "2025-07-19"
}, {
  id: 7,
  teamId: 2,
  memberId: 9,
  amount: 15,
  reason: "Vermelho no torneio cantonal",
  emoji: "🟥",
  paid: false,
  date: "2025-07-14"
}, {
  id: 8,
  teamId: 2,
  memberId: 7,
  amount: 20,
  reason: "Faltou ao jogo sem avisar",
  emoji: "🚫",
  paid: true,
  date: "2025-07-08"
}, {
  id: 9,
  teamId: 3,
  memberId: 11,
  amount: 2,
  reason: "Atrasado 20 min ao torneio",
  emoji: "⏰",
  paid: false,
  date: "2025-07-21"
}];
var initExpenses = [{
  id: 1,
  teamId: 1,
  description: "Jantar de equipa",
  amount: 45,
  date: "2025-06-30"
}, {
  id: 2,
  teamId: 1,
  description: "Bola nova treino",
  amount: 25,
  date: "2025-07-05"
}, {
  id: 3,
  teamId: 2,
  description: "Coletes de treino",
  amount: 30,
  date: "2025-07-01"
}, {
  id: 4,
  teamId: 3,
  description: "Bebidas torneio",
  amount: 18,
  date: "2025-07-20"
}];
var DAYS_PT = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
var initTrainings = [{
  id: 1,
  teamId: 1,
  type: "treino",
  recurring: false,
  date: "2025-07-24",
  time: "19:30",
  location: "Campo Principal, Selzach",
  notes: "Finalização e cruzamentos",
  createdBy: 100
}, {
  id: 2,
  teamId: 1,
  type: "recorrente",
  recurring: true,
  days: [2, 4],
  time: "19:30",
  location: "Campo Principal, Selzach",
  notes: "Treino semanal regular",
  createdBy: 100
}, {
  id: 3,
  teamId: 1,
  type: "jogo",
  recurring: false,
  date: "2025-07-27",
  time: "15:00",
  location: "Campo Municipal, Grenchen",
  notes: "Campeonato cantonal",
  opponent: "FC Grenchen",
  homeAway: "fora",
  squad: [1, 2, 3, 4, 5],
  createdBy: 100
}, {
  id: 4,
  teamId: 1,
  type: "treino",
  recurring: false,
  date: "2025-07-07",
  time: "19:30",
  location: "Campo Principal, Selzach",
  notes: "Treino pré-época",
  createdBy: 100
}, {
  id: 5,
  teamId: 2,
  type: "treino",
  recurring: false,
  date: "2025-07-25",
  time: "20:00",
  location: "Pavilhão Solothurn",
  notes: "Táticas de defesa",
  createdBy: 7
}, {
  id: 6,
  teamId: 2,
  type: "jogo",
  recurring: false,
  date: "2025-07-26",
  time: "16:00",
  location: "Pavilhão Solothurn",
  notes: "Taça distrital",
  opponent: "Futsal Berna",
  homeAway: "casa",
  squad: [6, 7, 8, 9],
  createdBy: 7
}];
var initPresences = {
  3: {
    1: "present",
    2: "present",
    3: "absent",
    4: "present"
  },
  6: {
    6: "present",
    7: "present",
    8: "absent"
  }
};
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
  var team = _ref12.team,
    members = _ref12.members,
    fineTypes = _ref12.fineTypes,
    myUserId = _ref12.myUserId,
    onAdd = _ref12.onAdd,
    onClose = _ref12.onClose;
  var tm = members.filter(function (m) {
    return m.teamId === team.id && m.userId !== myUserId;
  });
  var tft = fineTypes.filter(function (ft) {
    return ft.teamId === team.id;
  });
  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    mid = _useState2[0],
    setMid = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    ftid = _useState4[0],
    setFtid = _useState4[1];
  var _useState5 = useState(""),
    _useState6 = _slicedToArray(_useState5, 2),
    reason = _useState6[0],
    setReason = _useState6[1];
  var sft = tft.find(function (ft) {
    return ft.id === Number(ftid);
  });
  return React.createElement(Sheet, {
    title: "\uD83D\uDFE5 Nova multa",
    onClose: onClose
  }, React.createElement(FL, null, "Jogador"), React.createElement(FSel, {
    value: mid,
    onChange: function onChange(e) {
      return setMid(e.target.value);
    }
  }, React.createElement("option", {
    value: ""
  }, "Selecionar jogador..."), tm.map(function (m) {
    return React.createElement("option", {
      key: m.id,
      value: m.id
    }, m.name);
  })), React.createElement(FL, null, "Tipo de multa"), React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 14
    }
  }, tft.map(function (ft) {
    return React.createElement("button", {
      key: ft.id,
      onClick: function onClick() {
        return setFtid(String(ft.id));
      },
      style: {
        padding: "10px 14px",
        borderRadius: 12,
        border: "2px solid ".concat(ftid === String(ft.id) ? T.brand : T.border),
        background: ftid === String(ft.id) ? "".concat(T.brand, "12") : T.inputBg,
        cursor: "pointer",
        fontSize: 14,
        fontWeight: 600,
        fontFamily: "inherit"
      }
    }, ft.emoji, " ", ft.name, " \u2014 ", React.createElement("strong", null, ft.amount, "\u20AC"));
  })), React.createElement(FL, null, "Motivo (opcional)"), React.createElement(FI, {
    type: "text",
    value: reason,
    onChange: function onChange(e) {
      return setReason(e.target.value);
    },
    placeholder: sft ? sft.name : "Descreve o motivo..."
  }), React.createElement(PrimaryBtn, {
    onClick: function onClick() {
      if (!mid || !ftid) return;
      onAdd({
        teamId: team.id,
        memberId: Number(mid),
        amount: sft.amount,
        reason: reason || sft.name,
        emoji: sft.emoji,
        paid: false,
        date: new Date().toISOString().split("T")[0]
      });
      onClose();
    },
    disabled: !mid || !ftid
  }, "Atribuir ", sft ? "".concat(sft.amount, "\u20AC") : "", " de multa"));
};
var AddExpenseModal = function AddExpenseModal(_ref13) {
  var team = _ref13.team,
    onAdd = _ref13.onAdd,
    onClose = _ref13.onClose;
  var _useState7 = useState(""),
    _useState8 = _slicedToArray(_useState7, 2),
    desc = _useState8[0],
    setDesc = _useState8[1];
  var _useState9 = useState(""),
    _useState0 = _slicedToArray(_useState9, 2),
    amount = _useState0[0],
    setAmount = _useState0[1];
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
var TrainingTypePicker = function TrainingTypePicker(_ref14) {
  var team = _ref14.team,
    onSelect = _ref14.onSelect,
    onClose = _ref14.onClose;
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
var AddSingleTrainingModal = function AddSingleTrainingModal(_ref15) {
  var team = _ref15.team,
    onAdd = _ref15.onAdd,
    onClose = _ref15.onClose;
  var _useState1 = useState(""),
    _useState10 = _slicedToArray(_useState1, 2),
    date = _useState10[0],
    setDate = _useState10[1];
  var _useState11 = useState("19:30"),
    _useState12 = _slicedToArray(_useState11, 2),
    time = _useState12[0],
    setTime = _useState12[1];
  var _useState13 = useState(""),
    _useState14 = _slicedToArray(_useState13, 2),
    loc = _useState14[0],
    setLoc = _useState14[1];
  var _useState15 = useState(""),
    _useState16 = _slicedToArray(_useState15, 2),
    notes = _useState16[0],
    setNotes = _useState16[1];
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
  }), React.createElement(PrimaryBtn, {
    onClick: function onClick() {
      if (!ok) return;
      onAdd({
        teamId: team.id,
        type: "treino",
        recurring: false,
        date: date,
        time: time,
        location: loc,
        notes: notes,
        createdBy: myUserId
      });
      onClose();
    },
    disabled: !ok,
    color: team.color
  }, "Agendar treino"));
};
var AddRecurringModal = function AddRecurringModal(_ref16) {
  var team = _ref16.team,
    onAdd = _ref16.onAdd,
    onClose = _ref16.onClose;
  var _useState17 = useState([]),
    _useState18 = _slicedToArray(_useState17, 2),
    days = _useState18[0],
    setDays = _useState18[1];
  var _useState19 = useState("19:30"),
    _useState20 = _slicedToArray(_useState19, 2),
    time = _useState20[0],
    setTime = _useState20[1];
  var _useState21 = useState(""),
    _useState22 = _slicedToArray(_useState21, 2),
    loc = _useState22[0],
    setLoc = _useState22[1];
  var _useState23 = useState(""),
    _useState24 = _slicedToArray(_useState23, 2),
    notes = _useState24[0],
    setNotes = _useState24[1];
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
  }).join(", ")) : "Seleciona os dias", " \xB7 ", time)), React.createElement(PrimaryBtn, {
    onClick: function onClick() {
      if (!ok) return;
      onAdd({
        teamId: team.id,
        type: "recorrente",
        recurring: true,
        days: days.sort(),
        time: time,
        location: loc,
        notes: notes,
        createdBy: myUserId
      });
      onClose();
    },
    disabled: !ok,
    color: team.color
  }, "Criar treino recorrente"));
};
var AddMatchModal = function AddMatchModal(_ref17) {
  var team = _ref17.team,
    members = _ref17.members,
    onAdd = _ref17.onAdd,
    onClose = _ref17.onClose;
  var tm = members.filter(function (m) {
    return m.teamId === team.id;
  });
  var _useState25 = useState(""),
    _useState26 = _slicedToArray(_useState25, 2),
    opponent = _useState26[0],
    setOpponent = _useState26[1];
  var _useState27 = useState(""),
    _useState28 = _slicedToArray(_useState27, 2),
    date = _useState28[0],
    setDate = _useState28[1];
  var _useState29 = useState("15:00"),
    _useState30 = _slicedToArray(_useState29, 2),
    time = _useState30[0],
    setTime = _useState30[1];
  var _useState31 = useState(""),
    _useState32 = _slicedToArray(_useState31, 2),
    loc = _useState32[0],
    setLoc = _useState32[1];
  var _useState33 = useState("casa"),
    _useState34 = _slicedToArray(_useState33, 2),
    homeAway = _useState34[0],
    setHomeAway = _useState34[1];
  var _useState35 = useState(""),
    _useState36 = _slicedToArray(_useState35, 2),
    notes = _useState36[0],
    setNotes = _useState36[1];
  var _useState37 = useState(tm.map(function (m) {
      return m.id;
    })),
    _useState38 = _slicedToArray(_useState37, 2),
    squad = _useState38[0],
    setSquad = _useState38[1];
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
  }, [["casa", "🏠 Casa"], ["fora", "✈️ Fora"]].map(function (_ref18) {
    var _ref19 = _slicedToArray(_ref18, 2),
      v = _ref19[0],
      l = _ref19[1];
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
  })), React.createElement(PrimaryBtn, {
    onClick: function onClick() {
      if (!ok) return;
      onAdd({
        teamId: team.id,
        type: "jogo",
        recurring: false,
        date: date,
        time: time,
        location: loc || "A definir",
        notes: notes,
        opponent: opponent,
        homeAway: homeAway,
        squad: squad,
        createdBy: myUserId
      });
      onClose();
    },
    disabled: !ok,
    color: T.brand
  }, "\u26BD Criar jogo vs ", opponent || "..."));
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
var PositionSelect = function PositionSelect(_ref20) {
  var value = _ref20.value,
    onChange = _ref20.onChange;
  return React.createElement(FSel, {
    value: value,
    onChange: onChange
  }, Object.entries(POSITIONS_GROUPED).map(function (_ref21) {
    var _ref22 = _slicedToArray(_ref21, 2),
      group = _ref22[0],
      opts = _ref22[1];
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
var AddMemberModal = function AddMemberModal(_ref23) {
  var team = _ref23.team,
    onAdd = _ref23.onAdd,
    onClose = _ref23.onClose;
  var _useState39 = useState(""),
    _useState40 = _slicedToArray(_useState39, 2),
    name = _useState40[0],
    setName = _useState40[1];
  var _useState41 = useState("Jogador"),
    _useState42 = _slicedToArray(_useState41, 2),
    pos = _useState42[0],
    setPos = _useState42[1];
  var _useState43 = useState(""),
    _useState44 = _slicedToArray(_useState43, 2),
    phone = _useState44[0],
    setPhone = _useState44[1];
  var _useState45 = useState(""),
    _useState46 = _slicedToArray(_useState45, 2),
    bday = _useState46[0],
    setBday = _useState46[1];
  var _useState47 = useState("player"),
    _useState48 = _slicedToArray(_useState47, 2),
    role = _useState48[0],
    setRole = _useState48[1];
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
  }, [["player", "👤 Jogador"], ["admin", "👑 Administrador"]].map(function (_ref24) {
    var _ref25 = _slicedToArray(_ref24, 2),
      v = _ref25[0],
      l = _ref25[1];
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
var CreateTeamModal = function CreateTeamModal(_ref26) {
  var onAdd = _ref26.onAdd,
    onClose = _ref26.onClose;
  var _useState49 = useState(""),
    _useState50 = _slicedToArray(_useState49, 2),
    name = _useState50[0],
    setName = _useState50[1];
  var _useState51 = useState("⚽"),
    _useState52 = _slicedToArray(_useState51, 2),
    emoji = _useState52[0],
    setEmoji = _useState52[1];
  var _useState53 = useState("#1D3557"),
    _useState54 = _slicedToArray(_useState53, 2),
    color = _useState54[0],
    setColor = _useState54[1];
  var _useState55 = useState("2025/26"),
    _useState56 = _slicedToArray(_useState55, 2),
    season = _useState56[0],
    setSeason = _useState56[1];
  var _useState57 = useState("Portugal"),
    _useState58 = _slicedToArray(_useState57, 2),
    country = _useState58[0],
    setCountry = _useState58[1];
  var _useState59 = useState("Futebol 11"),
    _useState60 = _slicedToArray(_useState59, 2),
    sport = _useState60[0],
    setSport = _useState60[1];
  var _useState61 = useState("EUR (€)"),
    _useState62 = _slicedToArray(_useState61, 2),
    currency = _useState62[0],
    setCurrency = _useState62[1];
  var _useState63 = useState(""),
    _useState64 = _slicedToArray(_useState63, 2),
    city = _useState64[0],
    setCity = _useState64[1];
  var _useState65 = useState(""),
    _useState66 = _slicedToArray(_useState65, 2),
    postal = _useState66[0],
    setPostal = _useState66[1];
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
var EditProfileModal = function EditProfileModal(_ref27) {
  var user = _ref27.user,
    onSave = _ref27.onSave,
    onClose = _ref27.onClose;
  var _useState67 = useState(user.name),
    _useState68 = _slicedToArray(_useState67, 2),
    name = _useState68[0],
    setName = _useState68[1];
  var _useState69 = useState(user.position),
    _useState70 = _slicedToArray(_useState69, 2),
    pos = _useState70[0],
    setPos = _useState70[1];
  var _useState71 = useState(user.phone),
    _useState72 = _slicedToArray(_useState71, 2),
    phone = _useState72[0],
    setPhone = _useState72[1];
  var _useState73 = useState(user.birthday),
    _useState74 = _slicedToArray(_useState73, 2),
    bday = _useState74[0],
    setBday = _useState74[1];
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
var EditMemberModal = function EditMemberModal(_ref28) {
  var member = _ref28.member,
    team = _ref28.team,
    onSave = _ref28.onSave,
    onClose = _ref28.onClose;
  var _useState75 = useState(member.name),
    _useState76 = _slicedToArray(_useState75, 2),
    name = _useState76[0],
    setName = _useState76[1];
  var _useState77 = useState(member.position || "Jogador"),
    _useState78 = _slicedToArray(_useState77, 2),
    pos = _useState78[0],
    setPos = _useState78[1];
  var _useState79 = useState(member.phone || ""),
    _useState80 = _slicedToArray(_useState79, 2),
    phone = _useState80[0],
    setPhone = _useState80[1];
  var _useState81 = useState(member.birthday || ""),
    _useState82 = _slicedToArray(_useState81, 2),
    bday = _useState82[0],
    setBday = _useState82[1];
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
var JoinTeamModal = function JoinTeamModal(_ref29) {
  var teams = _ref29.teams,
    user = _ref29.user,
    onFindByCode = _ref29.onFindByCode,
    onJoin = _ref29.onJoin,
    onClose = _ref29.onClose,
    _ref29$initialCode = _ref29.initialCode,
    initialCode = _ref29$initialCode === void 0 ? "" : _ref29$initialCode;
  var _useState83 = useState(initialCode.toUpperCase()),
    _useState84 = _slicedToArray(_useState83, 2),
    code = _useState84[0],
    setCode = _useState84[1];
  var _useState85 = useState(null),
    _useState86 = _slicedToArray(_useState85, 2),
    found = _useState86[0],
    setFound = _useState86[1];
  var _useState87 = useState(false),
    _useState88 = _slicedToArray(_useState87, 2),
    joined = _useState88[0],
    setJoined = _useState88[1];
  var _useState89 = useState(false),
    _useState90 = _slicedToArray(_useState89, 2),
    searching = _useState90[0],
    setSearching = _useState90[1];
  useEffect(function () {
    if (initialCode) {
      setTimeout(function () {
        return search(initialCode);
      }, 500);
    }
  }, []);
  var search = function () {
    var _ref30 = _asyncToGenerator(_regenerator().m(function _callee9(c) {
      var q, t, _t17;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            q = (c || code).trim().toUpperCase();
            if (q) {
              _context9.n = 1;
              break;
            }
            return _context9.a(2);
          case 1:
            setSearching(true);
            if (!onFindByCode) {
              _context9.n = 3;
              break;
            }
            _context9.n = 2;
            return onFindByCode(q);
          case 2:
            _t17 = _context9.v;
            _context9.n = 4;
            break;
          case 3:
            _t17 = teams.find(function (t) {
              var _t$inviteCode;
              return ((_t$inviteCode = t.inviteCode) === null || _t$inviteCode === void 0 ? void 0 : _t$inviteCode.toUpperCase()) === q;
            });
          case 4:
            t = _t17;
            setFound(t || "notfound");
            setSearching(false);
          case 5:
            return _context9.a(2);
        }
      }, _callee9);
    }));
    return function search(_x) {
      return _ref30.apply(this, arguments);
    };
  }();
  var accept = function () {
    var _ref31 = _asyncToGenerator(_regenerator().m(function _callee0() {
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            _context0.n = 1;
            return onJoin(found);
          case 1:
            setJoined(true);
          case 2:
            return _context0.a(2);
        }
      }, _callee0);
    }));
    return function accept() {
      return _ref31.apply(this, arguments);
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
var TeamPickerModal = function TeamPickerModal(_ref32) {
  var teams = _ref32.teams,
    members = _ref32.members,
    myUserId = _ref32.myUserId,
    currentTeamId = _ref32.currentTeamId,
    onSelect = _ref32.onSelect,
    onClose = _ref32.onClose,
    onCreateTeam = _ref32.onCreateTeam;
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
var HomeTab = function HomeTab(_ref33) {
  var team = _ref33.team,
    fines = _ref33.fines,
    members = _ref33.members,
    expenses = _ref33.expenses,
    trainings = _ref33.trainings,
    isAdmin = _ref33.isAdmin,
    onAddFine = _ref33.onAddFine;
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
  var recent = _toConsumableArray(tf).sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  }).slice(0, 3);
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
  }, [["Recebido", "+".concat(collected, "\u20AC"), "#fff"], ["Por pagar", "".concat(pending, "\u20AC"), "#FFD6D6"], ["Despesas", "-".concat(spent, "\u20AC"), "rgba(255,255,255,0.65)"]].map(function (_ref34, i, arr) {
    var _ref35 = _slicedToArray(_ref34, 3),
      l = _ref35[0],
      v = _ref35[1],
      c = _ref35[2];
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
    }).slice(0, 3);
    if (ranked.length < 2) return null;
    var podium = [ranked[1], ranked[0], ranked[2]].filter(Boolean);
    var MEDALS = {
      0: "🥈",
      1: "🥇",
      2: "🥉"
    };
    var NUMS = {
      0: 2,
      1: 1,
      2: 3
    };
    var H = [76, 108, 56];
    var SZ = [44, 56, 38];
    return React.createElement("div", {
      style: {
        marginBottom: 20
      }
    }, React.createElement("p", {
      style: {
        margin: "0 0 10px",
        fontSize: 12,
        fontWeight: 700,
        color: T.sub,
        textTransform: "uppercase",
        letterSpacing: 1
      }
    }, "\uD83C\uDFC6 Ranking de d\xEDvidas"), React.createElement("div", {
      style: {
        background: T.card,
        borderRadius: 18,
        padding: "20px 12px 0",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: 6
      }
    }, podium.map(function (m, i) {
      var isFirst = NUMS[i] === 1;
      var sz = SZ[i];
      var h = H[i];
      return React.createElement("div", {
        key: m.id,
        style: {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3
        }
      }, React.createElement("span", {
        style: {
          fontSize: isFirst ? 30 : 22
        }
      }, MEDALS[i]), React.createElement("div", {
        style: {
          width: sz,
          height: sz,
          borderRadius: sz / 2,
          background: isFirst ? "linear-gradient(135deg,".concat(team.color, ",").concat(team.color, "bb)") : T.bg,
          border: "2.5px solid ".concat(isFirst ? team.color : T.border),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: isFirst ? "#fff" : T.sub,
          fontWeight: 800,
          fontSize: sz * 0.3
        }
      }, m.initials), React.createElement("p", {
        style: {
          margin: 0,
          fontWeight: 700,
          fontSize: isFirst ? 15 : 13,
          textAlign: "center",
          maxWidth: 80,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }
      }, m.name.split(" ")[0]), React.createElement("div", {
        style: {
          background: m.unpaid > 0 ? isFirst ? T.brand : "".concat(T.brand, "18") : T.bg,
          borderRadius: 10,
          padding: "4px 10px",
          minWidth: 36,
          textAlign: "center"
        }
      }, React.createElement("p", {
        style: {
          margin: 0,
          fontWeight: 900,
          fontSize: isFirst ? 17 : 14,
          color: m.unpaid > 0 ? isFirst ? "#fff" : T.brand : T.sub
        }
      }, m.unpaid > 0 ? "".concat(m.unpaid, "\u20AC") : "✓")), React.createElement("div", {
        style: {
          width: "100%",
          height: h,
          background: isFirst ? "".concat(team.color, "20") : "".concat(T.sub, "10"),
          borderRadius: "8px 8px 0 0",
          marginTop: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      }, React.createElement("p", {
        style: {
          margin: 0,
          fontWeight: 900,
          fontSize: 26,
          color: isFirst ? team.color : T.sub,
          opacity: 0.3
        }
      }, NUMS[i])));
    })));
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
var FinesTab = function FinesTab(_ref36) {
  var team = _ref36.team,
    fines = _ref36.fines,
    members = _ref36.members,
    isAdmin = _ref36.isAdmin,
    onAddFine = _ref36.onAddFine,
    onTogglePaid = _ref36.onTogglePaid,
    onSelectMember = _ref36.onSelectMember;
  var _useState91 = useState("all"),
    _useState92 = _slicedToArray(_useState91, 2),
    filter = _useState92[0],
    setFilter = _useState92[1];
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
var TreinosPage = function TreinosPage(_ref37) {
  var team = _ref37.team,
    trainings = _ref37.trainings,
    members = _ref37.members,
    myUserId = _ref37.myUserId,
    isAdmin = _ref37.isAdmin,
    presences = _ref37.presences,
    onSetPresence = _ref37.onSetPresence,
    onAddType = _ref37.onAddType,
    onDelete = _ref37.onDelete,
    onBack = _ref37.onBack,
    modal = _ref37.modal,
    setModal = _ref37.setModal;
  var _useState93 = useState(false),
    _useState94 = _slicedToArray(_useState93, 2),
    showPast = _useState94[0],
    setShowPast = _useState94[1];
  var _useState95 = useState(null),
    _useState96 = _slicedToArray(_useState95, 2),
    filterType = _useState96[0],
    setFilterType = _useState96[1];
  var _useState97 = useState(false),
    _useState98 = _slicedToArray(_useState97, 2),
    showFilter = _useState98[0],
    setShowFilter = _useState98[1];
  var _useState99 = useState(null),
    _useState100 = _slicedToArray(_useState99, 2),
    ctxMenu = _useState100[0],
    setCtxMenu = _useState100[1];
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
  var getPres = function getPres(id) {
    return presences[id] || {};
  };
  var myPres = function myPres(id) {
    return getPres(id)[myMember === null || myMember === void 0 ? void 0 : myMember.id];
  };
  var PresCounter = function PresCounter(_ref38) {
    var count = _ref38.count,
      color = _ref38.color;
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
  var PresBar = function PresBar(_ref39) {
    var t = _ref39.t;
    var pres = getPres(t.id);
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
    var me = myPres(t.id);
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
  var EventCard = function EventCard(_ref40) {
    var t = _ref40.t;
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
        color: past ? T.sub : T.sub,
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
      t: t
    })), ctxMenu === t.id && React.createElement("div", {
      style: {
        background: T.bg,
        borderTop: "1px solid ".concat(T.border)
      }
    }, [["✏️ Modificar evento", function () {
      return setCtxMenu(null);
    }], ["🗑️ Eliminar evento", function () {
      onDelete(t.id);
      setCtxMenu(null);
    }], ["🔔 Enviar lembrete", function () {
      return setCtxMenu(null);
    }]].map(function (_ref41) {
      var _ref42 = _slicedToArray(_ref41, 2),
        label = _ref42[0],
        action = _ref42[1];
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
  }, "\uD83D\uDD50 Passado"), isAdmin && React.createElement("button", {
    onClick: onAddType,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      padding: "8px 16px",
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
  }, "+ Acrescentar"), React.createElement("button", {
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
    }, t.notes)), isAdmin && React.createElement("button", {
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
    }, "\uD83D\uDDD1\uFE0F"));
  })), Object.entries(byMonth).map(function (_ref43) {
    var _ref44 = _slicedToArray(_ref43, 2),
      month = _ref44[0],
      evts = _ref44[1];
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
        t: t
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
  }, "Tipo de evento"), [[null, "📅 Todos"], ["recorrente", "🔄 Recorrente"], ["treino", "📅 Treino único"], ["jogo", "⚽ Jogo"]].map(function (_ref45) {
    var _ref46 = _slicedToArray(_ref45, 2),
      v = _ref46[0],
      l = _ref46[1];
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
  }, "Fechar")), modal === "typePicker" && React.createElement(TrainingTypePicker, {
    team: team,
    onSelect: function onSelect(t) {
      return setModal(t);
    },
    onClose: function onClose() {
      return setModal(null);
    }
  }), modal === "treino" && React.createElement(AddSingleTrainingModal, {
    team: team,
    onAdd: function onAdd(t) {
      onAddType(t);
      setModal(null);
    },
    onClose: function onClose() {
      return setModal(null);
    }
  }), modal === "recorrente" && React.createElement(AddRecurringModal, {
    team: team,
    onAdd: function onAdd(t) {
      onAddType(t);
      setModal(null);
    },
    onClose: function onClose() {
      return setModal(null);
    }
  }), modal === "jogo" && React.createElement(AddMatchModal, {
    team: team,
    members: members,
    onAdd: function onAdd(t) {
      onAddType(t);
      setModal(null);
    },
    onClose: function onClose() {
      return setModal(null);
    }
  }));
};
var TreasuryTab = function TreasuryTab(_ref47) {
  var team = _ref47.team,
    fines = _ref47.fines,
    members = _ref47.members,
    expenses = _ref47.expenses,
    isAdmin = _ref47.isAdmin,
    onAddExpense = _ref47.onAddExpense;
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
var GeneralTab = function GeneralTab(_ref48) {
  var user = _ref48.user,
    myUserId = _ref48.myUserId,
    teams = _ref48.teams,
    members = _ref48.members,
    onEditProfile = _ref48.onEditProfile,
    onManageTeam = _ref48.onManageTeam,
    onCreateTeam = _ref48.onCreateTeam,
    onJoinTeam = _ref48.onJoinTeam,
    onLogout = _ref48.onLogout;
  var myTeams = teams.filter(function (t) {
    return members.some(function (m) {
      return m.teamId === t.id && m.userId === myUserId;
    });
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
  }, [["🏃 Posição", user.position || "—", false], ["📱 Telefone", user.phone || "—", false], ["🎂 Aniversário", user.birthday ? "".concat(fmtDate(user.birthday)).concat(myAge ? " \xB7 ".concat(myAge, " anos") : "") : "—", true]].map(function (_ref49) {
    var _ref50 = _slicedToArray(_ref49, 3),
      l = _ref50[0],
      v = _ref50[1],
      full = _ref50[2];
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
    var admin = (me === null || me === void 0 ? void 0 : me.role) === "admin";
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
var ManageTeamScreen = function ManageTeamScreen(_ref51) {
  var team = _ref51.team,
    members = _ref51.members,
    myUserId = _ref51.myUserId,
    onBack = _ref51.onBack,
    onAddMember = _ref51.onAddMember,
    onToggleRole = _ref51.onToggleRole,
    onRemoveMember = _ref51.onRemoveMember,
    onEditMember = _ref51.onEditMember,
    onRegenerateCode = _ref51.onRegenerateCode;
  var tm = members.filter(function (m) {
    return m.teamId === team.id;
  });
  var admins = tm.filter(function (m) {
    return m.role === "admin";
  });
  var players = tm.filter(function (m) {
    return m.role === "player";
  });
  var _useState101 = useState(null),
    _useState102 = _slicedToArray(_useState101, 2),
    confirmRemove = _useState102[0],
    setConfirmRemove = _useState102[1];
  var _useState103 = useState(null),
    _useState104 = _slicedToArray(_useState103, 2),
    editingMember = _useState104[0],
    setEditingMember = _useState104[1];
  var _useState105 = useState(false),
    _useState106 = _slicedToArray(_useState105, 2),
    copied = _useState106[0],
    setCopied = _useState106[1];
  var copyCode = function copyCode() {
    setCopied(true);
    setTimeout(function () {
      return setCopied(false);
    }, 2000);
  };
  var Row = function Row(_ref52) {
    var m = _ref52.m;
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
  }))), confirmRemove && React.createElement("div", {
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
var MemberDetailScreen = function MemberDetailScreen(_ref53) {
  var member = _ref53.member,
    team = _ref53.team,
    fines = _ref53.fines,
    onBack = _ref53.onBack,
    onTogglePaid = _ref53.onTogglePaid,
    isAdmin = _ref53.isAdmin;
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
var LoginScreen = function LoginScreen(_ref54) {
  var onLogin = _ref54.onLogin;
  var _useState107 = useState("patricio@multeam.app"),
    _useState108 = _slicedToArray(_useState107, 2),
    email = _useState108[0],
    setEmail = _useState108[1];
  var _useState109 = useState("••••••••"),
    _useState110 = _slicedToArray(_useState109, 2),
    pass = _useState110[0],
    setPass = _useState110[1];
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
      fontSize: 15
    }
  }, "Gest\xE3o de multas de balne\xE1rio")), React.createElement("div", {
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
var AuthScreen = function AuthScreen(_ref55) {
  var onLogin = _ref55.onLogin,
    onRegister = _ref55.onRegister,
    error = _ref55.error,
    loading = _ref55.loading;
  var _useState111 = useState("login"),
    _useState112 = _slicedToArray(_useState111, 2),
    mode = _useState112[0],
    setMode = _useState112[1];
  var _useState113 = useState(""),
    _useState114 = _slicedToArray(_useState113, 2),
    email = _useState114[0],
    setEmail = _useState114[1];
  var _useState115 = useState(""),
    _useState116 = _slicedToArray(_useState115, 2),
    pass = _useState116[0],
    setPass = _useState116[1];
  var _useState117 = useState(""),
    _useState118 = _slicedToArray(_useState117, 2),
    name = _useState118[0],
    setName = _useState118[1];
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
      fontSize: 15
    }
  }, "Gest\xE3o de multas de balne\xE1rio")), React.createElement("div", {
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
  }, [["login", "Entrar"], ["register", "Criar conta"]].map(function (_ref56) {
    var _ref57 = _slicedToArray(_ref56, 2),
      m = _ref57[0],
      l = _ref57[1];
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
  }), React.createElement("input", {
    style: inp,
    type: "password",
    placeholder: "Password",
    value: pass,
    onChange: function onChange(e) {
      return setPass(e.target.value);
    }
  }), error && React.createElement("div", {
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
  }, loading ? "A carregar..." : mode === "login" ? "Entrar" : "Criar conta")));
};
var Spinner = function Spinner(_ref58) {
  var _ref58$msg = _ref58.msg,
    msg = _ref58$msg === void 0 ? "A carregar..." : _ref58$msg;
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
  var _useState119 = useState(null),
    _useState120 = _slicedToArray(_useState119, 2),
    token = _useState120[0],
    setToken = _useState120[1];
  var _useState121 = useState(null),
    _useState122 = _slicedToArray(_useState121, 2),
    myUserId = _useState122[0],
    setMyUserId = _useState122[1];
  var _useState123 = useState(null),
    _useState124 = _slicedToArray(_useState123, 2),
    profile = _useState124[0],
    setProfile = _useState124[1];
  var _useState125 = useState([]),
    _useState126 = _slicedToArray(_useState125, 2),
    teams = _useState126[0],
    setTeams = _useState126[1];
  var _useState127 = useState([]),
    _useState128 = _slicedToArray(_useState127, 2),
    members = _useState128[0],
    setMembers = _useState128[1];
  var _useState129 = useState([]),
    _useState130 = _slicedToArray(_useState129, 2),
    fineTypes = _useState130[0],
    setFineTypes = _useState130[1];
  var _useState131 = useState([]),
    _useState132 = _slicedToArray(_useState131, 2),
    fines = _useState132[0],
    setFines = _useState132[1];
  var _useState133 = useState([]),
    _useState134 = _slicedToArray(_useState133, 2),
    expenses = _useState134[0],
    setExpenses = _useState134[1];
  var _useState135 = useState([]),
    _useState136 = _slicedToArray(_useState135, 2),
    trainings = _useState136[0],
    setTrainings = _useState136[1];
  var _useState137 = useState({}),
    _useState138 = _slicedToArray(_useState137, 2),
    presences = _useState138[0],
    setPresences = _useState138[1];
  var _useState139 = useState(null),
    _useState140 = _slicedToArray(_useState139, 2),
    teamId = _useState140[0],
    setTeamId = _useState140[1];
  var _useState141 = useState("home"),
    _useState142 = _slicedToArray(_useState141, 2),
    tab = _useState142[0],
    setTab = _useState142[1];
  var _useState143 = useState(null),
    _useState144 = _slicedToArray(_useState143, 2),
    sub = _useState144[0],
    setSub = _useState144[1];
  var _useState145 = useState(null),
    _useState146 = _slicedToArray(_useState145, 2),
    modal = _useState146[0],
    setModal = _useState146[1];
  var _useState147 = useState(null),
    _useState148 = _slicedToArray(_useState147, 2),
    treinosModal = _useState148[0],
    setTreinosModal = _useState148[1];
  var _useState149 = useState(false),
    _useState150 = _slicedToArray(_useState149, 2),
    loading = _useState150[0],
    setLoading = _useState150[1];
  var _useState151 = useState(false),
    _useState152 = _slicedToArray(_useState151, 2),
    appReady = _useState152[0],
    setAppReady = _useState152[1];
  var _useState153 = useState(null),
    _useState154 = _slicedToArray(_useState153, 2),
    authError = _useState154[0],
    setAuthError = _useState154[1];
  var team = teams.find(function (t) {
    return t.id === teamId;
  });
  var isAdmin = members.some(function (m) {
    return m.teamId === teamId && m.userId === myUserId && m.role === "admin";
  });
  var loadTeam = function () {
    var _ref59 = _asyncToGenerator(_regenerator().m(function _callee1(tok, tid) {
      var _yield$Promise$all, _yield$Promise$all2, mData, ftData, fData, eData, tData, pData, presMap;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            _context1.n = 1;
            return Promise.all([api.get("team_members?team_id=eq.".concat(tid, "&select=*,profiles(*)"), tok), api.get("fine_types?team_id=eq.".concat(tid, "&order=amount.asc"), tok), api.get("fines?team_id=eq.".concat(tid, "&order=created_at.desc"), tok), api.get("expenses?team_id=eq.".concat(tid, "&order=created_at.desc"), tok), api.get("trainings?team_id=eq.".concat(tid, "&order=date.asc,time.asc"), tok), api.get("presences?select=*,trainings!inner(team_id)&trainings.team_id=eq.".concat(tid), tok).catch(function () {
              return [];
            })]);
          case 1:
            _yield$Promise$all = _context1.v;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 6);
            mData = _yield$Promise$all2[0];
            ftData = _yield$Promise$all2[1];
            fData = _yield$Promise$all2[2];
            eData = _yield$Promise$all2[3];
            tData = _yield$Promise$all2[4];
            pData = _yield$Promise$all2[5];
            presMap = {};
            pData.forEach(function (p) {
              if (!presMap[p.training_id]) presMap[p.training_id] = {};
              presMap[p.training_id][p.member_id] = p.status;
            });
            return _context1.a(2, {
              members: mData.map(aMember),
              fineTypes: ftData.map(aFineType),
              fines: fData.map(aFine),
              expenses: eData.map(aExpense),
              trainings: tData.map(aTraining),
              presences: presMap
            });
        }
      }, _callee1);
    }));
    return function loadTeam(_x2, _x3) {
      return _ref59.apply(this, arguments);
    };
  }();
  var initApp = function () {
    var _ref60 = _asyncToGenerator(_regenerator().m(function _callee10(tok, uid) {
      var profData, p, created, mbrData, ids, teamsData, adapted, first, td, _t18, _t19;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            setLoading(true);
            _context10.p = 1;
            _context10.n = 2;
            return api.get("profiles?id=eq.".concat(uid), tok);
          case 2:
            profData = _context10.v;
            p = profData[0];
            if (p) {
              _context10.n = 6;
              break;
            }
            _context10.p = 3;
            _context10.n = 4;
            return api.post('profiles', {
              id: uid,
              name: 'Utilizador'
            }, tok);
          case 4:
            created = _context10.v;
            p = Array.isArray(created) ? created[0] : created;
            _context10.n = 6;
            break;
          case 5:
            _context10.p = 5;
            _t18 = _context10.v;
            console.warn('Profile creation fallback failed:', _t18);
          case 6:
            if (p) setProfile({
              id: p.id,
              name: p.name || '',
              initials: mk(p.name || 'U'),
              position: p.position || '',
              phone: p.phone || '',
              birthday: p.birthday || '',
              email: ''
            });
            _context10.n = 7;
            return api.get("team_members?user_id=eq.".concat(uid, "&select=team_id"), tok);
          case 7:
            mbrData = _context10.v;
            if (mbrData.length) {
              _context10.n = 8;
              break;
            }
            setAppReady(true);
            setLoading(false);
            return _context10.a(2);
          case 8:
            ids = mbrData.map(function (m) {
              return m.team_id;
            });
            _context10.n = 9;
            return api.get("teams?id=in.(".concat(ids.join(','), ")"), tok);
          case 9:
            teamsData = _context10.v;
            adapted = teamsData.map(aTeam);
            setTeams(adapted);
            if (!(adapted.length > 0)) {
              _context10.n = 11;
              break;
            }
            first = adapted[0].id;
            setTeamId(first);
            _context10.n = 10;
            return loadTeam(tok, first);
          case 10:
            td = _context10.v;
            setMembers(td.members);
            setFineTypes(td.fineTypes);
            setFines(td.fines);
            setExpenses(td.expenses);
            setTrainings(td.trainings);
            setPresences(td.presences);
          case 11:
            setAppReady(true);
            _context10.n = 13;
            break;
          case 12:
            _context10.p = 12;
            _t19 = _context10.v;
            setAuthError("Erro: ".concat(_t19.message));
          case 13:
            _context10.p = 13;
            setLoading(false);
            return _context10.f(13);
          case 14:
            return _context10.a(2);
        }
      }, _callee10, null, [[3, 5], [1, 12, 13, 14]]);
    }));
    return function initApp(_x4, _x5) {
      return _ref60.apply(this, arguments);
    };
  }();
  var switchTeam = function () {
    var _ref61 = _asyncToGenerator(_regenerator().m(function _callee11(id) {
      var td, _t20;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            setTeamId(id);
            setLoading(true);
            setTab("home");
            _context11.p = 1;
            _context11.n = 2;
            return loadTeam(token, id);
          case 2:
            td = _context11.v;
            setMembers(td.members);
            setFineTypes(td.fineTypes);
            setFines(td.fines);
            setExpenses(td.expenses);
            setTrainings(td.trainings);
            setPresences(td.presences);
            _context11.n = 4;
            break;
          case 3:
            _context11.p = 3;
            _t20 = _context11.v;
            console.error(_t20);
          case 4:
            setLoading(false);
          case 5:
            return _context11.a(2);
        }
      }, _callee11, null, [[1, 3]]);
    }));
    return function switchTeam(_x6) {
      return _ref61.apply(this, arguments);
    };
  }();
  var handleLogin = function () {
    var _ref62 = _asyncToGenerator(_regenerator().m(function _callee12(email, pass) {
      var _d$session, _d$user, d, tok, uid, _t21;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.p = _context12.n) {
          case 0:
            setLoading(true);
            setAuthError(null);
            _context12.p = 1;
            _context12.n = 2;
            return api.signIn(email, pass);
          case 2:
            d = _context12.v;
            tok = d.access_token || ((_d$session = d.session) === null || _d$session === void 0 ? void 0 : _d$session.access_token);
            uid = (_d$user = d.user) === null || _d$user === void 0 ? void 0 : _d$user.id;
            if (!(!tok || !uid)) {
              _context12.n = 3;
              break;
            }
            throw new Error(d.error_description || d.msg || 'Email ou password incorretos');
          case 3:
            setToken(tok);
            setMyUserId(uid);
            _context12.n = 4;
            return initApp(tok, uid);
          case 4:
            _context12.n = 6;
            break;
          case 5:
            _context12.p = 5;
            _t21 = _context12.v;
            setAuthError(_t21.message);
            setLoading(false);
          case 6:
            return _context12.a(2);
        }
      }, _callee12, null, [[1, 5]]);
    }));
    return function handleLogin(_x7, _x8) {
      return _ref62.apply(this, arguments);
    };
  }();
  var handleRegister = function () {
    var _ref63 = _asyncToGenerator(_regenerator().m(function _callee13(email, pass, name) {
      var _d$session2, _d$user2, d, tok, uid, _d2$session, d2, tok2, _t22, _t23, _t24;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.p = _context13.n) {
          case 0:
            setLoading(true);
            setAuthError(null);
            _context13.p = 1;
            _context13.n = 2;
            return api.signUp(email, pass, name);
          case 2:
            d = _context13.v;
            tok = d.access_token || ((_d$session2 = d.session) === null || _d$session2 === void 0 ? void 0 : _d$session2.access_token);
            uid = (_d$user2 = d.user) === null || _d$user2 === void 0 ? void 0 : _d$user2.id;
            if (!(tok && uid)) {
              _context13.n = 8;
              break;
            }
            _context13.p = 3;
            _context13.n = 4;
            return api.patch("profiles?id=eq.".concat(uid), {
              name: name,
              initials: mk(name)
            }, tok);
          case 4:
            _context13.n = 6;
            break;
          case 5:
            _context13.p = 5;
            _t22 = _context13.v;
          case 6:
            setToken(tok);
            setMyUserId(uid);
            _context13.n = 7;
            return initApp(tok, uid);
          case 7:
            _context13.n = 17;
            break;
          case 8:
            if (!uid) {
              _context13.n = 16;
              break;
            }
            _context13.p = 9;
            _context13.n = 10;
            return api.signIn(email, pass);
          case 10:
            d2 = _context13.v;
            tok2 = d2.access_token || ((_d2$session = d2.session) === null || _d2$session === void 0 ? void 0 : _d2$session.access_token);
            if (!tok2) {
              _context13.n = 12;
              break;
            }
            setToken(tok2);
            setMyUserId(d2.user.id);
            _context13.n = 11;
            return initApp(tok2, d2.user.id);
          case 11:
            _context13.n = 13;
            break;
          case 12:
            setAuthError("Conta criada! Toca em 'Entrar' para aceder.");
          case 13:
            _context13.n = 15;
            break;
          case 14:
            _context13.p = 14;
            _t23 = _context13.v;
            setAuthError("Conta criada! Toca em 'Entrar' para aceder.");
          case 15:
            _context13.n = 17;
            break;
          case 16:
            setAuthError("Erro ao criar conta. Tenta novamente.");
          case 17:
            _context13.n = 19;
            break;
          case 18:
            _context13.p = 18;
            _t24 = _context13.v;
            setAuthError(_t24.message);
          case 19:
            setLoading(false);
          case 20:
            return _context13.a(2);
        }
      }, _callee13, null, [[9, 14], [3, 5], [1, 18]]);
    }));
    return function handleRegister(_x9, _x0, _x1) {
      return _ref63.apply(this, arguments);
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
    var _ref64 = _asyncToGenerator(_regenerator().m(function _callee14(d) {
      var _yield$api$post, _yield$api$post2, f, _t25;
      return _regenerator().w(function (_context14) {
        while (1) switch (_context14.p = _context14.n) {
          case 0:
            _context14.p = 0;
            _context14.n = 1;
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
            _yield$api$post = _context14.v;
            _yield$api$post2 = _slicedToArray(_yield$api$post, 1);
            f = _yield$api$post2[0];
            setFines(function (p) {
              return [aFine(f)].concat(_toConsumableArray(p));
            });
            _context14.n = 3;
            break;
          case 2:
            _context14.p = 2;
            _t25 = _context14.v;
            console.error(_t25);
          case 3:
            return _context14.a(2);
        }
      }, _callee14, null, [[0, 2]]);
    }));
    return function addFine(_x10) {
      return _ref64.apply(this, arguments);
    };
  }();
  var togglePaid = function () {
    var _ref65 = _asyncToGenerator(_regenerator().m(function _callee15(id) {
      var f, _t26;
      return _regenerator().w(function (_context15) {
        while (1) switch (_context15.p = _context15.n) {
          case 0:
            f = fines.find(function (f) {
              return f.id === id;
            });
            if (f) {
              _context15.n = 1;
              break;
            }
            return _context15.a(2);
          case 1:
            _context15.p = 1;
            _context15.n = 2;
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
            _context15.n = 4;
            break;
          case 3:
            _context15.p = 3;
            _t26 = _context15.v;
            console.error(_t26);
          case 4:
            return _context15.a(2);
        }
      }, _callee15, null, [[1, 3]]);
    }));
    return function togglePaid(_x11) {
      return _ref65.apply(this, arguments);
    };
  }();
  var addExpense = function () {
    var _ref66 = _asyncToGenerator(_regenerator().m(function _callee16(d) {
      var _yield$api$post3, _yield$api$post4, e, _t27;
      return _regenerator().w(function (_context16) {
        while (1) switch (_context16.p = _context16.n) {
          case 0:
            _context16.p = 0;
            _context16.n = 1;
            return api.post('expenses', {
              team_id: d.teamId,
              description: d.description,
              amount: d.amount,
              created_by: myUserId
            }, token);
          case 1:
            _yield$api$post3 = _context16.v;
            _yield$api$post4 = _slicedToArray(_yield$api$post3, 1);
            e = _yield$api$post4[0];
            setExpenses(function (p) {
              return [aExpense(e)].concat(_toConsumableArray(p));
            });
            _context16.n = 3;
            break;
          case 2:
            _context16.p = 2;
            _t27 = _context16.v;
            console.error(_t27);
          case 3:
            return _context16.a(2);
        }
      }, _callee16, null, [[0, 2]]);
    }));
    return function addExpense(_x12) {
      return _ref66.apply(this, arguments);
    };
  }();
  var addTraining = function () {
    var _ref67 = _asyncToGenerator(_regenerator().m(function _callee17(d) {
      var _yield$api$post5, _yield$api$post6, t, _t28;
      return _regenerator().w(function (_context17) {
        while (1) switch (_context17.p = _context17.n) {
          case 0:
            _context17.p = 0;
            _context17.n = 1;
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
            _yield$api$post5 = _context17.v;
            _yield$api$post6 = _slicedToArray(_yield$api$post5, 1);
            t = _yield$api$post6[0];
            setTrainings(function (p) {
              return [].concat(_toConsumableArray(p), [aTraining(t)]);
            });
            _context17.n = 3;
            break;
          case 2:
            _context17.p = 2;
            _t28 = _context17.v;
            console.error(_t28);
          case 3:
            return _context17.a(2);
        }
      }, _callee17, null, [[0, 2]]);
    }));
    return function addTraining(_x13) {
      return _ref67.apply(this, arguments);
    };
  }();
  var delTraining = function () {
    var _ref68 = _asyncToGenerator(_regenerator().m(function _callee18(id) {
      var _t29;
      return _regenerator().w(function (_context18) {
        while (1) switch (_context18.p = _context18.n) {
          case 0:
            _context18.p = 0;
            _context18.n = 1;
            return api.del("trainings?id=eq.".concat(id), token);
          case 1:
            setTrainings(function (p) {
              return p.filter(function (t) {
                return t.id !== id;
              });
            });
            _context18.n = 3;
            break;
          case 2:
            _context18.p = 2;
            _t29 = _context18.v;
            console.error(_t29);
          case 3:
            return _context18.a(2);
        }
      }, _callee18, null, [[0, 2]]);
    }));
    return function delTraining(_x14) {
      return _ref68.apply(this, arguments);
    };
  }();
  var setPresence = function () {
    var _ref69 = _asyncToGenerator(_regenerator().m(function _callee19(tid, mid, status) {
      var _t30;
      return _regenerator().w(function (_context19) {
        while (1) switch (_context19.p = _context19.n) {
          case 0:
            _context19.p = 0;
            if (status) {
              _context19.n = 2;
              break;
            }
            _context19.n = 1;
            return api.del("presences?training_id=eq.".concat(tid, "&member_id=eq.").concat(mid), token);
          case 1:
            setPresences(function (p) {
              var t = _objectSpread({}, p[tid] || {});
              delete t[mid];
              return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, tid, t));
            });
            _context19.n = 4;
            break;
          case 2:
            _context19.n = 3;
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
            _context19.n = 6;
            break;
          case 5:
            _context19.p = 5;
            _t30 = _context19.v;
            console.error(_t30);
          case 6:
            return _context19.a(2);
        }
      }, _callee19, null, [[0, 5]]);
    }));
    return function setPresence(_x15, _x16, _x17) {
      return _ref69.apply(this, arguments);
    };
  }();
  var addMember = function () {
    var _ref70 = _asyncToGenerator(_regenerator().m(function _callee20(d) {
      var _yield$api$post7, _yield$api$post8, m, _t31;
      return _regenerator().w(function (_context20) {
        while (1) switch (_context20.p = _context20.n) {
          case 0:
            _context20.p = 0;
            _context20.n = 1;
            return api.post('team_members', {
              team_id: d.teamId,
              user_id: crypto.randomUUID(),
              role: d.role,
              position: d.position
            }, token);
          case 1:
            _yield$api$post7 = _context20.v;
            _yield$api$post8 = _slicedToArray(_yield$api$post7, 1);
            m = _yield$api$post8[0];
            setMembers(function (p) {
              return [].concat(_toConsumableArray(p), [{
                id: m.id,
                teamId: m.team_id,
                userId: m.user_id,
                role: m.role,
                name: d.name,
                initials: mk(d.name),
                position: d.position,
                phone: d.phone || '',
                birthday: d.birthday || ''
              }]);
            });
            _context20.n = 3;
            break;
          case 2:
            _context20.p = 2;
            _t31 = _context20.v;
            console.error(_t31);
          case 3:
            return _context20.a(2);
        }
      }, _callee20, null, [[0, 2]]);
    }));
    return function addMember(_x18) {
      return _ref70.apply(this, arguments);
    };
  }();
  var toggleRole = function () {
    var _ref71 = _asyncToGenerator(_regenerator().m(function _callee21(id) {
      var m, nr, _t32;
      return _regenerator().w(function (_context21) {
        while (1) switch (_context21.p = _context21.n) {
          case 0:
            m = members.find(function (m) {
              return m.id === id;
            });
            if (m) {
              _context21.n = 1;
              break;
            }
            return _context21.a(2);
          case 1:
            nr = m.role === 'admin' ? 'player' : 'admin';
            _context21.p = 2;
            _context21.n = 3;
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
            _context21.n = 5;
            break;
          case 4:
            _context21.p = 4;
            _t32 = _context21.v;
            console.error(_t32);
          case 5:
            return _context21.a(2);
        }
      }, _callee21, null, [[2, 4]]);
    }));
    return function toggleRole(_x19) {
      return _ref71.apply(this, arguments);
    };
  }();
  var removeMember = function () {
    var _ref72 = _asyncToGenerator(_regenerator().m(function _callee22(id) {
      var _t33;
      return _regenerator().w(function (_context22) {
        while (1) switch (_context22.p = _context22.n) {
          case 0:
            _context22.p = 0;
            _context22.n = 1;
            return api.del("team_members?id=eq.".concat(id), token);
          case 1:
            setMembers(function (p) {
              return p.filter(function (m) {
                return m.id !== id;
              });
            });
            _context22.n = 3;
            break;
          case 2:
            _context22.p = 2;
            _t33 = _context22.v;
            console.error(_t33);
          case 3:
            return _context22.a(2);
        }
      }, _callee22, null, [[0, 2]]);
    }));
    return function removeMember(_x20) {
      return _ref72.apply(this, arguments);
    };
  }();
  var editMember = function () {
    var _ref73 = _asyncToGenerator(_regenerator().m(function _callee23(id, data) {
      var m, _t34;
      return _regenerator().w(function (_context23) {
        while (1) switch (_context23.p = _context23.n) {
          case 0:
            _context23.p = 0;
            _context23.n = 1;
            return api.patch("team_members?id=eq.".concat(id), {
              position: data.position
            }, token);
          case 1:
            m = members.find(function (m) {
              return m.id === id;
            });
            if (!((m === null || m === void 0 ? void 0 : m.userId) === myUserId)) {
              _context23.n = 2;
              break;
            }
            _context23.n = 2;
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
            _context23.n = 4;
            break;
          case 3:
            _context23.p = 3;
            _t34 = _context23.v;
            console.error(_t34);
          case 4:
            return _context23.a(2);
        }
      }, _callee23, null, [[0, 3]]);
    }));
    return function editMember(_x21, _x22) {
      return _ref73.apply(this, arguments);
    };
  }();
  var _useState155 = useState(null),
    _useState156 = _slicedToArray(_useState155, 2),
    teamError = _useState156[0],
    setTeamError = _useState156[1];
  var createTeam = function () {
    var _ref74 = _asyncToGenerator(_regenerator().m(function _callee24(d) {
      var tid, invCode, sr, se, tr, newTeam, _t35;
      return _regenerator().w(function (_context24) {
        while (1) switch (_context24.p = _context24.n) {
          case 0:
            setTeamError(null);
            _context24.p = 1;
            tid = crypto.randomUUID();
            invCode = Math.random().toString(36).substring(2, 5).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
            _context24.n = 2;
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
            _context24.n = 3;
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
            sr = _context24.v;
            if (sr.ok) {
              _context24.n = 5;
              break;
            }
            _context24.n = 4;
            return sr.json();
          case 4:
            se = _context24.v;
            throw new Error(se.message || se.hint || 'Erro ao configurar equipa');
          case 5:
            _context24.n = 6;
            return api.get("teams?id=eq.".concat(tid), token);
          case 6:
            tr = _context24.v;
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
            _context24.n = 7;
            return switchTeam(tid);
          case 7:
            _context24.n = 9;
            break;
          case 8:
            _context24.p = 8;
            _t35 = _context24.v;
            setTeamError(_t35.message || JSON.stringify(_t35));
          case 9:
            return _context24.a(2);
        }
      }, _callee24, null, [[1, 8]]);
    }));
    return function createTeam(_x23) {
      return _ref74.apply(this, arguments);
    };
  }();
  var joinTeam = function () {
    var _ref75 = _asyncToGenerator(_regenerator().m(function _callee25(t) {
      var _yield$api$get, _yield$api$get2, td, _t36;
      return _regenerator().w(function (_context25) {
        while (1) switch (_context25.p = _context25.n) {
          case 0:
            _context25.p = 0;
            _context25.n = 1;
            return api.insert('team_members', {
              team_id: t.id,
              user_id: myUserId,
              role: 'player'
            }, token);
          case 1:
            _context25.n = 2;
            return api.get("teams?id=eq.".concat(t.id), token);
          case 2:
            _yield$api$get = _context25.v;
            _yield$api$get2 = _slicedToArray(_yield$api$get, 1);
            td = _yield$api$get2[0];
            setTeams(function (p) {
              return p.some(function (x) {
                return x.id === t.id;
              }) ? p : [].concat(_toConsumableArray(p), [aTeam(td)]);
            });
            _context25.n = 3;
            return switchTeam(t.id);
          case 3:
            _context25.n = 5;
            break;
          case 4:
            _context25.p = 4;
            _t36 = _context25.v;
            console.error(_t36);
          case 5:
            return _context25.a(2);
        }
      }, _callee25, null, [[0, 4]]);
    }));
    return function joinTeam(_x24) {
      return _ref75.apply(this, arguments);
    };
  }();
  var findTeamByCode = function () {
    var _ref76 = _asyncToGenerator(_regenerator().m(function _callee26(code) {
      var r, d, t, _t37;
      return _regenerator().w(function (_context26) {
        while (1) switch (_context26.p = _context26.n) {
          case 0:
            _context26.p = 0;
            _context26.n = 1;
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
            r = _context26.v;
            _context26.n = 2;
            return r.json();
          case 2:
            d = _context26.v;
            t = Array.isArray(d) ? d[0] : d;
            return _context26.a(2, t !== null && t !== void 0 && t.id ? aTeam(_objectSpread(_objectSpread({}, t), {}, {
              invite_code: t.invite_code
            })) : null);
          case 3:
            _context26.p = 3;
            _t37 = _context26.v;
            return _context26.a(2, null);
        }
      }, _callee26, null, [[0, 3]]);
    }));
    return function findTeamByCode(_x25) {
      return _ref76.apply(this, arguments);
    };
  }();
  var _useState157 = useState(function () {
      var p = new URLSearchParams(window.location.search);
      return p.get('invite') || null;
    }),
    _useState158 = _slicedToArray(_useState157, 2),
    pendingInvite = _useState158[0],
    setPendingInvite = _useState158[1];
  useEffect(function () {
    if (appReady && pendingInvite) {
      setModal("join");
    }
  }, [appReady, pendingInvite]);
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
  }];
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
      var _ref77 = _asyncToGenerator(_regenerator().m(function _callee27(t) {
        return _regenerator().w(function (_context27) {
          while (1) switch (_context27.n) {
            case 0:
              _context27.n = 1;
              return joinTeam(t);
            case 1:
              setPendingInvite(null);
            case 2:
              return _context27.a(2);
          }
        }, _callee27);
      }));
      return function (_x26) {
        return _ref77.apply(this, arguments);
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
      onRegenerateCode: function onRegenerateCode() {}
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
  }, React.createElement("div", {
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
  })), React.createElement("button", {
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
  }, team.emoji, " Trocar \u25BE")), tab === "home" && React.createElement(HomeTab, {
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
    members: members,
    myUserId: myUserId,
    fineTypes: fineTypes,
    onAdd: addFine,
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
      var _ref78 = _asyncToGenerator(_regenerator().m(function _callee28(u) {
        var _members$find;
        return _regenerator().w(function (_context28) {
          while (1) switch (_context28.n) {
            case 0:
              _context28.n = 1;
              return editMember((_members$find = members.find(function (m) {
                return m.userId === myUserId && m.teamId === teamId;
              })) === null || _members$find === void 0 ? void 0 : _members$find.id, u);
            case 1:
              setProfile(function (p) {
                return _objectSpread(_objectSpread({}, p), u);
              });
            case 2:
              return _context28.a(2);
          }
        }, _callee28);
      }));
      return function (_x27) {
        return _ref78.apply(this, arguments);
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
      var _ref79 = _asyncToGenerator(_regenerator().m(function _callee29(t) {
        return _regenerator().w(function (_context29) {
          while (1) switch (_context29.n) {
            case 0:
              _context29.n = 1;
              return joinTeam(t);
            case 1:
              setPendingInvite(null);
            case 2:
              return _context29.a(2);
          }
        }, _callee29);
      }));
      return function (_x28) {
        return _ref79.apply(this, arguments);
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