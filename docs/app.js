"use strict";

var _excluded = ["style"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
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
  green: "#147832",
  yellow: "#FFCC00",
  navy: "#1D3557",
  text: "#1D1D1F",
  sub: "#6B6B72",
  border: "#E5E5EA",
  inputBg: "#F8F8FA"
};
var SB_URL = "https://syakniwyvcfdqsrwsalk.supabase.co";
var APP_URL = "https://multeam.ch";
var SB_KEY = "sb_publishable_MRMHqVQ-key1c5kf7UOLUA_rwyu85BI";
var VAPID_PUBLIC = "BG6saRvz-Eh318LO9cY2w5zSN7sAdDYekBYxqPdrrQ671pN_vUzBsV9iRFVOnO37rQ81o-cYoOuTCwmo--CQnEk";
var PUSH_FAIL_KEY = "multeam_push_send_fail";
var isIOSDevice = function isIOSDevice() {
  try {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  } catch (e) {
    return false;
  }
};
var isStandaloneApp = function isStandaloneApp() {
  try {
    return window.navigator.standalone === true || window.matchMedia("(display-mode: standalone)").matches;
  } catch (e) {
    return false;
  }
};
var pushIssueText = function pushIssueText(issue) {
  if (!issue) return "";
  var d = issue.detail ? " (".concat(issue.detail, ")") : "";
  switch (issue.code) {
    case "ios-instalar":
      return "No iPhone/iPad as notificações só funcionam com a app instalada: no Safari toca em Partilhar, escolhe «Adicionar ao ecrã principal» e abre a app a partir do ícone.";
    case "sem-suporte":
      return "Este browser não suporta notificações push.";
    case "bloqueado":
      return "As notificações estão bloqueadas neste dispositivo. Ativa-as nas definições do browser ou do telemóvel e toca em Tentar novamente.";
    case "sw":
      return "O serviço da app ainda não está pronto. Recarrega a app e tenta outra vez.";
    case "subscrever":
      return "N\xE3o foi poss\xEDvel ativar as notifica\xE7\xF5es neste dispositivo".concat(d, ".");
    case "gravar":
      return "N\xE3o foi poss\xEDvel guardar a subscri\xE7\xE3o das notifica\xE7\xF5es".concat(d, ".");
    default:
      return "Não foi possível ativar as notificações.";
  }
};
var readPushFails = function readPushFails() {
  try {
    var o = JSON.parse(window.localStorage.getItem(PUSH_FAIL_KEY) || "null");
    return o && typeof o.count === "number" ? o : {
      count: 0
    };
  } catch (e) {
    return {
      count: 0
    };
  }
};
var notePushFail = function notePushFail(why) {
  console.error("Push send failed:", why);
  try {
    var c = readPushFails();
    window.localStorage.setItem(PUSH_FAIL_KEY, JSON.stringify({
      count: c.count + 1,
      last: String(why).slice(0, 120),
      at: new Date().toISOString()
    }));
  } catch (e) {}
};
var clearPushFails = function clearPushFails() {
  try {
    window.localStorage.removeItem(PUSH_FAIL_KEY);
  } catch (e) {}
};
var RO_MSG = "Modo leitura: não é possível alterar.";
var RO = {
  on: false
};
var RO_RPCS = ["get_team_as_admin", "get_all_teams_admin", "get_app_admin_stats", "get_app_activity_totals", "get_admin_teams_overview", "get_app_growth_stats", "get_admin_teams_locations", "get_app_feedback", "list_team_claims"];
var roAllows = function roAllows(url, method) {
  var m = String(method || "GET").toUpperCase();
  if (m === "GET" || m === "HEAD") return true;
  return m === "POST" && RO_RPCS.some(function (f) {
    return String(url).split("?")[0] === "".concat(SB_URL, "/rest/v1/rpc/").concat(f);
  });
};
var roCheck = function roCheck(url, method) {
  if (RO.on && !roAllows(url, method)) throw new Error(RO_MSG);
};
if (typeof window !== "undefined" && typeof window.fetch === "function" && !window.fetch.__ro) {
  var realFetch = window.fetch.bind(window);
  var guardedFetch = function guardedFetch(input, init) {
    try {
      roCheck(typeof input === "string" ? input : input && input.url || String(input), init && init.method || input && input.method);
    } catch (e) {
      return Promise.reject(e);
    }
    return realFetch(input, init);
  };
  guardedFetch.__ro = true;
  window.fetch = guardedFetch;
}
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
            return fetch("".concat(SB_URL, "/rest/v1/").concat(p), p.startsWith('fine_types') ? {
              headers: _this.h(tok),
              cache: 'no-store'
            } : {
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
            roCheck("".concat(SB_URL, "/rest/v1/").concat(p), 'POST');
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
            roCheck("".concat(SB_URL, "/rest/v1/").concat(p), 'POST');
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
            roCheck("".concat(SB_URL, "/rest/v1/").concat(p), 'PATCH');
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
            roCheck("".concat(SB_URL, "/rest/v1/").concat(p), 'DELETE');
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
            roCheck("".concat(SB_URL, "/rest/v1/").concat(p), 'POST');
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
  var _m$profiles, _m$profiles2, _m$profiles3, _m$profiles4, _m$profiles5, _m$profiles6;
  return {
    id: m.id,
    teamId: m.team_id,
    userId: m.user_id,
    role: m.role,
    name: ((_m$profiles = m.profiles) === null || _m$profiles === void 0 ? void 0 : _m$profiles.name) || 'Utilizador',
    initials: mk(((_m$profiles2 = m.profiles) === null || _m$profiles2 === void 0 ? void 0 : _m$profiles2.name) || 'U'),
    position: m.position || ((_m$profiles3 = m.profiles) === null || _m$profiles3 === void 0 ? void 0 : _m$profiles3.position) || 'Jogador',
    phone: ((_m$profiles4 = m.profiles) === null || _m$profiles4 === void 0 ? void 0 : _m$profiles4.phone) || '',
    birthday: ((_m$profiles5 = m.profiles) === null || _m$profiles5 === void 0 ? void 0 : _m$profiles5.birthday) || '',
    avatarUrl: ((_m$profiles6 = m.profiles) === null || _m$profiles6 === void 0 ? void 0 : _m$profiles6.avatar_url) || null,
    unavailable: !!m.unavailable,
    unavailableNote: m.unavailable_note || '',
    unavailableSince: m.unavailable_since || '',
    unavailableEmoji: m.unavailable_emoji || '🤕'
  };
};
var aFine = function aFine(f) {
  var localDate = f.created_at ? function () {
    var d = new Date(f.created_at);
    return "".concat(d.getFullYear(), "-").concat(String(d.getMonth() + 1).padStart(2, '0'), "-").concat(String(d.getDate()).padStart(2, '0'));
  }() : '';
  return {
    id: f.id,
    teamId: f.team_id,
    memberId: f.member_id,
    amount: Number(f.amount),
    reason: f.reason || '',
    emoji: iconForFine(f.reason, f.emoji),
    paid: f.paid,
    paidAt: f.paid_at || null,
    date: f.date || localDate
  };
};
var MULTEAM_ICON = "multeam";
var storableIcon = function storableIcon(ic) {
  return ic === MULTEAM_ICON ? "⚪" : ic;
};
var ICON_RULES = [[/cartao\s+amarelo/, "🟨"], [/cartao\s+vermelho|\bvermelho\b|expuls/, "🟥"], [/multeam|(?=.*\bregistar\b)(?=.*\baplicacao\b)/, MULTEAM_ICON], [/\bfum(ar|o)\b|cigarro|tabaco/, "🚭"], [/\bbolos?\b|aniversar/, "🎂"], [/atras|chegar.*(tarde|depois)|ultimo a entrar|\bchegar tarde/, "⏰"], [/falt\w*.*\bjogos?\b/, "⚽"], [/\bfalt|\bnao vir\b|\bnao (ir|aparecer)\b/, "❌"], [/equipament|\bmaterial|\bfatos?\b|\bkit\b|chuteira|camisola|roupa/, "👕"], [/telemovel|telefone/, "📵"], [/\blixo|migalha|\bsuj|balneario/, "🧹"], [/\bfalar\b|gritar|\bbocas?\b|arbitr|histori|barulho/, "🗣️"], [/derrota/, "😞"], [/vitoria/, "🏆"], [/golos? sofrid/, "🥅"], [/golos? marcad/, "⚽"], [/pagamento|\bmultas?\b|divida/, "💶"], [/carrinha|viatura|boleia/, "🚐"], [/lanche|comida|jantar|consumo|\bcomer\b/, "🍽️"], [/assinar|convocatoria/, "✍️"], [/penalt/, "🎯"], [/dormir|adormec/, "😴"]];
var normFineName = function normFineName(name) {
  return String(name || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
};
var iconForFine = function iconForFine(name, emoji) {
  var e = String(emoji == null ? '' : emoji).trim();
  if (e && e !== '🟥' && e !== '⚪') return e;
  var n = normFineName(name);
  for (var _i = 0, _ICON_RULES = ICON_RULES; _i < _ICON_RULES.length; _i++) {
    var _ICON_RULES$_i = _slicedToArray(_ICON_RULES[_i], 2),
      re = _ICON_RULES$_i[0],
      ic = _ICON_RULES$_i[1];
    if (re.test(n)) return ic;
  }
  return /cartao|vermelho|expuls/.test(n) ? '🟥' : '⚪';
};
var aFineType = function aFineType(ft) {
  return {
    id: ft.id,
    teamId: ft.team_id,
    name: ft.name,
    amount: Number(ft.amount),
    emoji: iconForFine(ft.name, ft.emoji)
  };
};
var aCard = function aCard(c) {
  return {
    id: c.id,
    teamId: c.team_id,
    memberId: c.member_id,
    kind: c.kind,
    date: c.match_date || '',
    opponent: c.opponent || '',
    note: c.note || '',
    consumed: !!c.consumed
  };
};
var aExpense = function aExpense(e) {
  return {
    id: e.id,
    teamId: e.team_id,
    description: e.description,
    amount: Number(e.amount),
    date: function () {
      var d = e.created_at ? new Date(e.created_at) : null;
      return d && !isNaN(d) ? localDateStr(d) : '';
    }()
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
var aAbsence = function aAbsence(a) {
  return {
    id: a.id,
    teamId: a.team_id,
    memberId: a.member_id || null,
    memberName: a.member_name || 'Jogador',
    kind: a.kind === 'ausencia' ? 'ausencia' : 'lesao',
    emoji: a.emoji || '🤕',
    note: a.note || '',
    start: a.start_date || '',
    end: a.end_date || null
  };
};
var DAYS_PT = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
var isPast = function isPast(d) {
  return new Date(d + "T23:59:59") < new Date();
};
var UNAVAIL_EMOJIS = ["🤕", "🩼", "🩹", "🧊", "⚕️", "🏥"];
var solidForWhite = function solidForWhite(c) {
  var m = /^#([0-9a-f]{6})$/i.exec(c || "");
  if (!m) return T.navy;
  var ch = function ch(i) {
    var v = parseInt(m[1].slice(i, i + 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  var L = 0.2126 * ch(0) + 0.7152 * ch(2) + 0.0722 * ch(4);
  return 1.05 / (L + 0.05) >= 3 ? c : T.navy;
};
var fmtDM = function fmtDM(d) {
  var m = /^(\d{4})-(\d\d)-(\d\d)/.exec(d || "");
  return m ? "".concat(m[3], "/").concat(m[2]) : "";
};
var realPosition = function realPosition(p) {
  var t = (p || "").trim();
  return t && t.toLowerCase() !== "jogador" ? t : "";
};
var plural = function plural(n, one, many) {
  return "".concat(n, " ").concat(Number(n) === 1 ? one : many);
};
var ABS_KINDS = {
  lesao: {
    one: "lesão",
    many: "lesões",
    label: "Lesão"
  },
  ausencia: {
    one: "ausência",
    many: "ausências",
    label: "Ausência"
  }
};
var rpcCall = function () {
  var _ref = _asyncToGenerator(_regenerator().m(function _callee1(fn, body, tok) {
    var r, j, _t17;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.p = _context1.n) {
        case 0:
          roCheck("".concat(SB_URL, "/rest/v1/rpc/").concat(fn), 'POST');
          _context1.n = 1;
          return fetch("".concat(SB_URL, "/rest/v1/rpc/").concat(fn), {
            method: 'POST',
            headers: api.h(tok),
            body: JSON.stringify(body)
          });
        case 1:
          r = _context1.v;
          j = null;
          _context1.p = 2;
          _context1.n = 3;
          return r.json();
        case 3:
          j = _context1.v;
          _context1.n = 5;
          break;
        case 4:
          _context1.p = 4;
          _t17 = _context1.v;
          j = null;
        case 5:
          if (r.ok) {
            _context1.n = 6;
            break;
          }
          throw new Error(j && j.message || "Erro ".concat(r.status));
        case 6:
          return _context1.a(2, j);
      }
    }, _callee1, null, [[2, 4]]);
  }));
  return function rpcCall(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var ERR_GENERIC = "Ocorreu um erro. Tenta outra vez.";
var PROFILES_WARN = "Não foi possível carregar os perfis.";
var errPt = function errPt(e, fallback) {
  var raw = e == null ? "" : typeof e === "string" ? e : e.message !== undefined && e.message !== null ? String(e.message) : "";
  var out = function out(txt) {
    if (txt !== raw && raw) {
      try {
        console.error("[erro original]", raw);
      } catch (x) {}
    }
    return txt;
  };
  if (!raw.trim()) return fallback || ERR_GENERIC;
  if (/JWT|token is expired|session expired/i.test(raw)) return out("A sessão expirou. Entra outra vez.");
  if (/row-level security|violates .*polic|permission denied|not authorized|\b42501\b/i.test(raw)) return out("Sem permissão.");
  if (/Failed to fetch|NetworkError|Load failed|network request failed/i.test(raw)) return out("Sem ligação. Verifica a rede e tenta outra vez.");
  if (/duplicate key|already registered|already exists/i.test(raw)) return out("Esse registo já existe.");
  if (/Invalid login credentials|invalid_grant/i.test(raw)) return out("Email ou password incorretos.");
  if (/Email not confirmed|email_not_confirmed/i.test(raw)) return out("Confirma primeiro o teu email (vê a caixa de entrada) e depois entra.");
  {
    var pw = /Password should be at least (\d+)/i.exec(raw);
    if (pw) return out("A password tem de ter pelo menos ".concat(pw[1], " caracteres."));
  }
  if (/Unable to validate email address|invalid format|email_address_invalid/i.test(raw)) return out("O email não é válido. Confirma como o escreveste.");
  if (/rate limit|too many requests|over_.*_rate_limit|\b429\b/i.test(raw)) return out("Demasiadas tentativas. Espera um pouco e tenta outra vez.");
  if (/[À-ÿ]/.test(raw) || /\b(erro|sem|tenta|equipa|registo|multa|incorret|escreve|mete|coincidem|obrigat|permiss|membro|guardar|apagar|administradores|ficou|continua)/i.test(raw)) return raw;
  return out(ERR_GENERIC);
};
var TEAM_NAME_MIN = 2,
  TEAM_NAME_MAX = 40;
var TEAM_NAME_TAKEN = "Já existe uma equipa com este nome. Escolhe outro, por exemplo acrescenta a localidade.";
var TEAM_NAME_CHECK_FAIL = "Não foi possível verificar o nome. Tenta novamente.";
var normTeamName = function normTeamName(s) {
  return String(s == null ? "" : s).trim().replace(/\s+/g, " ");
};
var teamNameIssue = function teamNameIssue(s) {
  var n = normTeamName(s);
  if (n.length < TEAM_NAME_MIN) return "O nome tem de ter pelo menos ".concat(TEAM_NAME_MIN, " caracteres.");
  if (n.length > TEAM_NAME_MAX) return "O nome pode ter no m\xE1ximo ".concat(TEAM_NAME_MAX, " caracteres.");
  return "";
};
var isTeamNameDup = function isTeamNameDup(e) {
  var m = String(e && e.message || "");
  return /duplicate key|23505|unique constraint/i.test(m) && !/invite|pkey/i.test(m);
};
var teamErrPt = function teamErrPt(e, fallback) {
  return isTeamNameDup(e) ? TEAM_NAME_TAKEN : errPt(e, fallback);
};
var checkTeamName = function () {
  var _ref2 = _asyncToGenerator(_regenerator().m(function _callee10(name, excludeId, tok) {
    var livre, _t18;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.p = _context10.n) {
        case 0:
          _context10.p = 0;
          _context10.n = 1;
          return rpcCall("team_name_available", {
            p_name: name,
            p_exclude: excludeId || null
          }, tok);
        case 1:
          livre = _context10.v;
          _context10.n = 4;
          break;
        case 2:
          _context10.p = 2;
          _t18 = _context10.v;
          if (!(_t18 && _t18.message === RO_MSG)) {
            _context10.n = 3;
            break;
          }
          throw _t18;
        case 3:
          try {
            console.error("[erro original]", _t18 && _t18.message);
          } catch (x) {}
          throw new Error(TEAM_NAME_CHECK_FAIL);
        case 4:
          if (!(livre === true)) {
            _context10.n = 5;
            break;
          }
          return _context10.a(2);
        case 5:
          if (!(livre === false)) {
            _context10.n = 6;
            break;
          }
          throw new Error(TEAM_NAME_TAKEN);
        case 6:
          throw new Error(TEAM_NAME_CHECK_FAIL);
        case 7:
          return _context10.a(2);
      }
    }, _callee10, null, [[0, 2]]);
  }));
  return function checkTeamName(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
var needRows = function needRows(res) {
  if (!Array.isArray(res) || !res.length) throw new Error("sem permissão, ou o registo já não existe");
  return res;
};
var dayNum = function dayNum(s) {
  var m = /^(\d{4})-(\d\d)-(\d\d)/.exec(s || "");
  return m ? Date.UTC(+m[1], +m[2] - 1, +m[3]) / 86400000 : NaN;
};
var absDays = function absDays(a) {
  var n = dayNum(a.end || todayLocal()) - dayNum(a.start) + 1;
  return isNaN(n) ? 0 : Math.max(1, n);
};
var absSeason = function absSeason(start) {
  var m = /^(\d{4})-(\d\d)/.exec(start || "");
  if (!m) return "";
  var y = +m[1],
    mo = +m[2],
    s = mo >= 7 ? y : y - 1;
  return "".concat(s, "/").concat(String((s + 1) % 100).padStart(2, "0"));
};
var daysIn = function daysIn(y, m) {
  return [31, y % 4 === 0 && y % 100 !== 0 || y % 400 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1];
};
var validYMD = function validYMD(s) {
  var m = /^(\d{4})-(\d\d)-(\d\d)$/.exec(s);
  return !!m && +m[2] >= 1 && +m[2] <= 12 && +m[3] >= 1 && +m[3] <= daysIn(+m[1], +m[2]);
};
var localDay = function localDay(v) {
  if (v instanceof Date) return isNaN(v) ? "" : localDateStr(v);
  var s = String(v == null ? "" : v).trim();
  if (!s) return "";
  if (validYMD(s)) return s;
  var m = /^(\d{4}-\d\d-\d\d)[T ](\d\d:\d\d(?::\d\d)?)(?:[.,](\d+))?\s*(Z|[+-]\d\d(?::?\d\d)?)?$/i.exec(s);
  if (!m || !validYMD(m[1])) return "";
  var tz = !m[4] ? "" : /^z$/i.test(m[4]) ? "Z" : m[4].length === 3 ? "".concat(m[4], ":00") : m[4].includes(":") ? m[4] : "".concat(m[4].slice(0, 3), ":").concat(m[4].slice(3));
  var d = new Date("".concat(m[1], "T").concat(m[2]).concat(m[3] ? "." + m[3].slice(0, 3).padEnd(3, "0") : "").concat(tz));
  return isNaN(d) ? "" : localDateStr(d);
};
var fmtDay = function fmtDay(v) {
  var d = localDay(v);
  return d ? "".concat(d.slice(8), "/").concat(d.slice(5, 7), "/").concat(d.slice(0, 4)) : "Sem data";
};
var fmtDMY = fmtDay;
var byDayDesc = function byDayDesc(a, b) {
  return localDay(b.date).localeCompare(localDay(a.date));
};
var MESES_PT = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var unavailText = function unavailText(m) {
  return "Indispon\xEDvel".concat(m.unavailableSince ? " desde ".concat(fmtDate(m.unavailableSince)) : "").concat(m.unavailableNote ? " \xB7 ".concat(m.unavailableNote) : "");
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
var todayLocal = function todayLocal() {
  var d = new Date();
  return "".concat(d.getFullYear(), "-").concat(String(d.getMonth() + 1).padStart(2, '0'), "-").concat(String(d.getDate()).padStart(2, '0'));
};
var weatherEmoji = function weatherEmoji(c) {
  if (c === 0) return "☀️";
  if (c === 1 || c === 2) return "🌤️";
  if (c === 3) return "☁️";
  if (c === 45 || c === 48) return "🌫️";
  if (c >= 51 && c <= 57) return "🌦️";
  if (c >= 61 && c <= 67) return "🌧️";
  if (c >= 71 && c <= 77) return "❄️";
  if (c >= 80 && c <= 82) return "🌧️";
  if (c === 85 || c === 86) return "❄️";
  if (c >= 95 && c <= 99) return "⛈️";
  return "";
};
var localDateStr = function localDateStr(d) {
  return "".concat(d.getFullYear(), "-").concat(String(d.getMonth() + 1).padStart(2, '0'), "-").concat(String(d.getDate()).padStart(2, '0'));
};
var nextOccurrence = function nextOccurrence(days, time) {
  var now = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();
  if (!days || !days.length) return "";
  var hh = parseInt((time || "").slice(0, 2), 10);
  for (var i = 0; i < 7; i++) {
    var d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
    if (!days.includes(d.getDay())) continue;
    if (i === 0 && !isNaN(hh) && now.getHours() > hh) continue;
    return localDateStr(d);
  }
  return "";
};
var matchForecast = function matchForecast(hourly, trainings) {
  var now = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();
  var out = {};
  if (!hourly) return out;
  (trainings || []).forEach(function (t) {
    var date = t.type === "recorrente" ? nextOccurrence(t.days, t.time, now) : t.date;
    var hh = (t.time || "").slice(0, 2);
    if (!date || !/^\d\d$/.test(hh)) return;
    var h = hourly["".concat(date, "T").concat(hh, ":00")];
    if (!h || h.temp == null) return;
    var emoji = weatherEmoji(h.code);
    if (!emoji) return;
    out[t.id] = {
      temp: Math.round(h.temp),
      code: h.code,
      emoji: emoji
    };
  });
  return out;
};
var nextPresenceEvent = function nextPresenceEvent(trainings, teamId) {
  var now = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var best = null;
  (trainings || []).forEach(function (t) {
    if (t.teamId !== teamId) return;
    var date = t.type === "recorrente" ? nextOccurrence(t.days, t.time, now) : t.date;
    var m = /^(\d{4})-(\d\d)-(\d\d)$/.exec(date || "");
    if (!m) return;
    var day = new Date(+m[1], +m[2] - 1, +m[3]);
    var diff = Math.round((day - today) / 864e5);
    if (diff < 0 || diff > 6) return;
    var hh = parseInt((t.time || "").slice(0, 2), 10),
      mm = parseInt((t.time || "").slice(3, 5), 10) || 0;
    if (diff === 0 && !isNaN(hh) && now.getHours() > hh) return;
    var key = day.getTime() + (isNaN(hh) ? 0 : hh * 36e5 + mm * 6e4);
    if (!best || key < best.key) best = {
      t: t,
      day: day,
      diff: diff,
      key: key
    };
  });
  return best;
};
var presenceTitle = function presenceTitle(ev) {
  var when = ev.diff === 0 ? "hoje" : ev.diff === 1 ? "amanhã" : ev.day.toLocaleDateString("pt-PT", {
    weekday: "long"
  });
  return "".concat(ev.t.type === "jogo" ? "Jogo" : "Treino", " ").concat(when).concat(ev.t.time ? " \xB7 ".concat(ev.t.time) : "");
};
var fcText = function fcText(f) {
  return f ? " \xB7 ".concat(f.emoji, " ").concat(f.temp, "\xB0") : "";
};
var FC_TTL = 60 * 60 * 1000;
var fcCache = {};
var normCountry = function normCountry(s) {
  return String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
};
var COUNTRY_ISO = {};
[["PT", "portugal"], ["CH", "suica", "switzerland", "schweiz", "suisse", "svizzera"], ["ES", "espanha", "spain", "espana"], ["FR", "franca", "france", "frankreich"], ["DE", "alemanha", "germany", "deutschland"], ["IT", "italia", "italy", "italien"], ["BR", "brasil", "brazil"], ["AO", "angola"], ["MZ", "mocambique", "mozambique"], ["CV", "cabo verde", "cape verde"], ["GB", "reino unido", "united kingdom", "uk", "gb", "great britain"], ["NL", "holanda", "paises baixos", "netherlands", "niederlande"], ["BE", "belgica", "belgium", "belgien"], ["LU", "luxemburgo", "luxembourg"], ["AT", "austria", "osterreich"], ["LI", "liechtenstein"]].forEach(function (_ref3) {
  var _ref4 = _toArray(_ref3),
    iso = _ref4[0],
    names = _arrayLikeToArray(_ref4).slice(1);
  COUNTRY_ISO[iso.toLowerCase()] = iso;
  names.forEach(function (n) {
    COUNTRY_ISO[n] = iso;
  });
});
var countryISO = function countryISO(c) {
  return COUNTRY_ISO[normCountry(c)] || "";
};
var fetchHourly = function fetchHourly(city, country) {
  var base = "https://geocoding-api.open-meteo.com/v1/search?name=".concat(encodeURIComponent(city), "&count=1&language=pt");
  var iso = countryISO(country);
  var geocode = iso ? fetch("".concat(base, "&countryCode=").concat(iso)).then(function (r) {
    return r.json();
  }).catch(function () {
    return null;
  }).then(function (g) {
    return g && g.results && g.results[0] ? g : fetch(base).then(function (r) {
      return r.json();
    });
  }) : fetch(base).then(function (r) {
    return r.json();
  });
  return geocode.then(function (g) {
    var p = g && g.results && g.results[0];
    if (!p) return null;
    return fetch("https://api.open-meteo.com/v1/forecast?latitude=".concat(p.latitude, "&longitude=").concat(p.longitude, "&hourly=temperature_2m,weather_code&timezone=auto&forecast_days=7")).then(function (r) {
      return r.json();
    }).then(function (w) {
      var h = w && w.hourly;
      if (!h || !h.time) return null;
      var m = {};
      h.time.forEach(function (k, i) {
        m[k] = {
          temp: h.temperature_2m[i],
          code: h.weather_code[i]
        };
      });
      return m;
    });
  });
};
var useForecast = function useForecast(team, trainings) {
  var city = (team && team.city || "").trim();
  var key = city ? "".concat(team.id, "|").concat(city, "|").concat(team.country || "") : "";
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    hourly = _useState2[0],
    setHourly = _useState2[1];
  useEffect(function () {
    if (!key) {
      setHourly(null);
      return;
    }
    var alive = true;
    var c = fcCache[key];
    if (c && !c.promise && Date.now() - c.at < FC_TTL) {
      setHourly(c.hourly);
      return;
    }
    if (!c || !c.promise) {
      var p = Promise.resolve().then(function () {
        return fetchHourly(city, team.country);
      }).catch(function () {
        return null;
      });
      c = fcCache[key] = {
        at: Date.now(),
        hourly: null,
        promise: p
      };
      p.then(function (m) {
        fcCache[key] = {
          at: Date.now(),
          hourly: m,
          promise: null
        };
      });
    }
    setHourly(null);
    c.promise.then(function (m) {
      if (alive) setHourly(m);
    }).catch(function () {});
    return function () {
      alive = false;
    };
  }, [key]);
  try {
    return matchForecast(hourly, trainings);
  } catch (e) {
    return {};
  }
};
var cardCount = function cardCount(cards, teamId, memberId) {
  var mine = cards.filter(function (c) {
    return c.teamId === teamId && String(c.memberId) === String(memberId);
  });
  return {
    yellows: mine.filter(function (c) {
      return c.kind === 'amarelo' && !c.consumed;
    }).length,
    yellowsTotal: mine.filter(function (c) {
      return c.kind === 'amarelo';
    }).length,
    reds: mine.filter(function (c) {
      return c.kind === 'vermelho';
    }).length,
    all: mine
  };
};
var cardStatus = function cardStatus(y) {
  return y >= 5 ? {
    label: "SUSPENSO",
    color: "#B00020"
  } : y === 4 ? {
    label: "PRÓXIMO SUSPENDE",
    color: T.brand
  } : y === 3 ? {
    label: "Atenção",
    color: T.yellow
  } : null;
};
var age = function age(d) {
  return d ? Math.floor((new Date() - new Date(d)) / (365.25 * 24 * 3600 * 1000)) : null;
};
var FineIcon = function FineIcon(_ref5) {
  var icon = _ref5.icon,
    _ref5$size = _ref5.size,
    size = _ref5$size === void 0 ? 24 : _ref5$size,
    style = _ref5.style;
  return icon === MULTEAM_ICON ? React.createElement("img", {
    src: "icon-192.png",
    alt: "Multeam",
    draggable: false,
    width: Math.round(size * 1.1),
    height: Math.round(size * 1.1),
    style: _objectSpread({
      width: Math.round(size * 1.1),
      height: Math.round(size * 1.1),
      borderRadius: Math.round(size * 0.28),
      objectFit: "cover",
      verticalAlign: "middle",
      flexShrink: 0
    }, style)
  }) : React.createElement("span", {
    style: _objectSpread({
      fontSize: size
    }, style)
  }, icon);
};
var LB = {
  n: 0,
  guard: 0
};
var PhotoLightbox = function PhotoLightbox(_ref6) {
  var src = _ref6.src,
    name = _ref6.name,
    onClose = _ref6.onClose;
  var closeRef = React.useRef(onClose);
  closeRef.current = onClose;
  useEffect(function () {
    LB.n++;
    var byPop = false,
      pushed = false;
    try {
      window.history.pushState({
        multeamLB: true
      }, "", window.location.href);
      pushed = true;
    } catch (e) {}
    var onPop = function onPop() {
      byPop = true;
      closeRef.current();
    };
    var onKey = function onKey(e) {
      if (e.key === "Escape") closeRef.current();
    };
    window.addEventListener("popstate", onPop);
    window.addEventListener("keydown", onKey);
    return function () {
      window.removeEventListener("popstate", onPop);
      window.removeEventListener("keydown", onKey);
      setTimeout(function () {
        LB.n = Math.max(0, LB.n - 1);
      }, 0);
      if (pushed && !byPop) {
        LB.guard++;
        try {
          window.history.back();
        } catch (e) {
          LB.guard--;
        }
      }
    };
  }, []);
  var stop = function stop(e) {
    return e.stopPropagation();
  };
  var node = React.createElement("div", {
    role: "dialog",
    "aria-label": "Foto de ".concat(name || "jogador"),
    "data-photo-lightbox": true,
    onClick: function onClick(e) {
      e.stopPropagation();
      closeRef.current();
    },
    onMouseDown: stop,
    onTouchStart: stop,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 10000,
      background: "rgba(0,0,0,0.94)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px",
      boxSizing: "border-box"
    }
  }, React.createElement("button", {
    "aria-label": "Fechar foto",
    onClick: function onClick(e) {
      e.stopPropagation();
      closeRef.current();
    },
    style: {
      position: "absolute",
      top: 12,
      right: 12,
      width: 48,
      height: 48,
      borderRadius: 24,
      border: "2px solid #fff",
      background: "#000",
      color: "#fff",
      fontSize: 22,
      fontWeight: 800,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "inherit"
    }
  }, "\u2715"), React.createElement("img", {
    src: src,
    alt: name || "",
    onClick: stop,
    style: {
      maxWidth: "92vw",
      maxHeight: "72vh",
      objectFit: "contain",
      borderRadius: 12,
      boxShadow: "0 8px 40px rgba(0,0,0,0.6)"
    }
  }), name && React.createElement("p", {
    style: {
      margin: "16px 0 0",
      color: "#fff",
      fontSize: 20,
      fontWeight: 900,
      textAlign: "center",
      maxWidth: "92vw",
      overflowWrap: "anywhere"
    }
  }, name));
  return typeof ReactDOM !== "undefined" && ReactDOM.createPortal ? ReactDOM.createPortal(node, document.body) : node;
};
var ZoomPhoto = function ZoomPhoto(_ref7) {
  var src = _ref7.src,
    name = _ref7.name,
    style = _ref7.style,
    onTapGesture = _ref7.onTapGesture;
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  return React.createElement(React.Fragment, null, React.createElement("img", {
    src: src,
    alt: name || "",
    onClick: function onClick(e) {
      e.stopPropagation();
      if (onTapGesture) onTapGesture(function () {
        return setOpen(true);
      });else setOpen(true);
    },
    style: _objectSpread(_objectSpread({}, style), {}, {
      cursor: "zoom-in"
    })
  }), open && React.createElement(PhotoLightbox, {
    src: src,
    name: name,
    onClose: function onClose() {
      return setOpen(false);
    }
  }));
};
var readableOn = function readableOn(c) {
  var m = /^#([0-9a-f]{6})$/i.exec(String(c || ""));
  if (!m) return "#fff";
  var v = [0, 2, 4].map(function (i) {
    var x = parseInt(m[1].slice(i, i + 2), 16) / 255;
    return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  });
  var L = 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2];
  return 1.05 / (L + 0.05) >= 4.5 ? "#fff" : "#1a1a1f";
};
var Avatar = function Avatar(_ref8) {
  var initials = _ref8.initials,
    _ref8$color = _ref8.color,
    color = _ref8$color === void 0 ? T.navy : _ref8$color,
    _ref8$size = _ref8.size,
    size = _ref8$size === void 0 ? 38 : _ref8$size,
    photo = _ref8.photo,
    name = _ref8.name,
    onTapGesture = _ref8.onTapGesture;
  return photo ? React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: size / 2,
      overflow: "hidden",
      flexShrink: 0
    }
  }, React.createElement(ZoomPhoto, {
    src: photo,
    name: name,
    onTapGesture: onTapGesture,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })) : React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: size / 2,
      background: color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: readableOn(color),
      fontWeight: 800,
      fontSize: size * 0.33,
      flexShrink: 0,
      letterSpacing: -0.5
    }
  }, initials);
};
var Badge = function Badge(_ref9) {
  var label = _ref9.label,
    color = _ref9.color;
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
var ShieldIcon = function ShieldIcon(_ref0) {
  var _ref0$size = _ref0.size,
    size = _ref0$size === void 0 ? 12 : _ref0$size,
    _ref0$color = _ref0.color,
    color = _ref0$color === void 0 ? "#fff" : _ref0$color;
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, React.createElement("path", {
    d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"
  }));
};
var PersonIcon = function PersonIcon(_ref1) {
  var _ref1$size = _ref1.size,
    size = _ref1$size === void 0 ? 12 : _ref1$size,
    _ref1$color = _ref1.color,
    color = _ref1$color === void 0 ? "#fff" : _ref1$color;
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, React.createElement("path", {
    d: "M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"
  }));
};
var RoleBadge = function RoleBadge(_ref10) {
  var role = _ref10.role,
    teamColor = _ref10.teamColor,
    _ref10$size = _ref10.size,
    size = _ref10$size === void 0 ? "sm" : _ref10$size;
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
var AdminHeaderBadge = function AdminHeaderBadge(_ref11) {
  var teamColor = _ref11.teamColor;
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
var RoleBadgeLight = function RoleBadgeLight(_ref12) {
  var role = _ref12.role;
  var cfg = {
    admin: {
      label: "Admin",
      color: "#1D3557"
    },
    treinador: {
      label: "Treinador",
      color: "#2E7D32"
    },
    diretor: {
      label: "Diretor",
      color: "#7B1FA2"
    },
    player: {
      label: "Jogador",
      color: "#6B6B72"
    }
  };
  var c = cfg[role] || cfg.player;
  return React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      background: "".concat(c.color, "12"),
      border: "1px solid ".concat(c.color, "30"),
      borderRadius: 6,
      padding: "3px 8px"
    }
  }, React.createElement("span", {
    style: {
      color: c.color,
      fontSize: 11,
      fontWeight: 700
    }
  }, c.label));
};
var Chip = function Chip(_ref13) {
  var active = _ref13.active,
    color = _ref13.color,
    onClick = _ref13.onClick,
    children = _ref13.children;
  return React.createElement("button", {
    onClick: onClick,
    style: {
      padding: "7px 14px",
      minHeight: 44,
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
var Sec = function Sec(_ref14) {
  var label = _ref14.label;
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
var Sheet = function Sheet(_ref15) {
  var onClose = _ref15.onClose,
    title = _ref15.title,
    children = _ref15.children;
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
    "aria-label": "Fechar",
    onClick: onClose,
    style: {
      background: T.bg,
      border: "none",
      borderRadius: 10,
      width: 44,
      height: 44,
      fontSize: 20,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, "\xD7")), children));
};
var FL = function FL(_ref16) {
  var children = _ref16.children;
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
var FI = function FI(_ref17) {
  var style = _ref17.style,
    props = _objectWithoutProperties(_ref17, _excluded);
  return React.createElement("input", _extends({
    style: _objectSpread({
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
    }, style)
  }, props));
};
var FSel = function FSel(_ref18) {
  var value = _ref18.value,
    onChange = _ref18.onChange,
    children = _ref18.children;
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
var PrimaryBtn = function PrimaryBtn(_ref19) {
  var onClick = _ref19.onClick,
    disabled = _ref19.disabled,
    _ref19$color = _ref19.color,
    color = _ref19$color === void 0 ? T.brand : _ref19$color,
    children = _ref19.children;
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
var FINE_ICON_CATS = [["Multas", ["🟥", "🟨", "⏰", "❌", "⚽", "🥅", "🏆", "😞"]], ["Equipamento e balneário", ["👕", "🧹", "📵", "🚐"]], ["Comportamento", ["🗣️", "😴", "🎯", "✍️", "😤", "🤦", "🚫", "🔇", "🤡"]], ["Dinheiro", ["💶", "💸"]], ["Comida e festa", ["🎂", "🍽️", "🍺", "🍕", "🍾"]], ["Outros", ["⚪", "🃏", "🎪", "🎖️", "🤕", "💪", "🚗", "💬"]]];
var resolveTypeIcon = function resolveTypeIcon(name, custom) {
  return custom || iconForFine(name, '');
};
var FineIconField = function FineIconField(_ref20) {
  var name = _ref20.name,
    custom = _ref20.custom,
    onCustom = _ref20.onCustom;
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    open = _useState6[0],
    setOpen = _useState6[1];
  return React.createElement("div", {
    "data-fine-icon-field": true,
    style: {
      marginBottom: 10
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap"
    }
  }, React.createElement("span", {
    "data-fine-icon": true,
    "aria-label": "\xCDcone",
    style: {
      fontSize: 32,
      lineHeight: 1,
      minWidth: 40,
      textAlign: "center",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, React.createElement(FineIcon, {
    icon: resolveTypeIcon(name, custom),
    size: 32
  })), React.createElement("span", {
    style: {
      fontSize: 12,
      color: "#5F5F66",
      flex: 1,
      minWidth: 90
    }
  }, custom ? "Ícone escolhido por ti" : "Ícone automático"), React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setOpen(function (o) {
        return !o;
      });
    },
    style: {
      minHeight: 44,
      minWidth: 44,
      padding: "0 14px",
      borderRadius: 12,
      border: "1.5px solid #1a1a1f",
      background: "#fff",
      color: "#1a1a1f",
      fontSize: 13,
      fontWeight: 800,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Mudar \xEDcone")), open && React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, custom && React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      onCustom(null);
      setOpen(false);
    },
    style: {
      minHeight: 44,
      padding: "0 14px",
      marginBottom: 8,
      borderRadius: 12,
      border: "1.5px solid #1a1a1f",
      background: "#fff",
      color: "#1a1a1f",
      fontSize: 13,
      fontWeight: 800,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "\u21BA Voltar ao autom\xE1tico"), FINE_ICON_CATS.map(function (_ref21) {
    var _ref22 = _slicedToArray(_ref21, 2),
      cat = _ref22[0],
      list = _ref22[1];
    return React.createElement("div", {
      key: cat,
      style: {
        marginBottom: 6
      }
    }, React.createElement("p", {
      style: {
        margin: "0 0 4px",
        fontSize: 11,
        fontWeight: 800,
        color: "#5F5F66",
        textTransform: "uppercase",
        letterSpacing: 0.5
      }
    }, cat), React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 6
      }
    }, list.map(function (e) {
      return React.createElement("button", {
        type: "button",
        key: e,
        "aria-label": "\xCDcone ".concat(e),
        onClick: function onClick() {
          onCustom(e);
          setOpen(false);
        },
        style: {
          fontSize: 22,
          width: 44,
          height: 44,
          padding: 0,
          borderRadius: 10,
          border: "2px solid ".concat(resolveTypeIcon(name, custom) === e ? "#1a1a1f" : "#D7D7DE"),
          background: "#fff",
          cursor: "pointer"
        }
      }, e);
    })));
  })));
};
var AddFineModal = function AddFineModal(_ref23) {
  var _tm$find;
  var team = _ref23.team,
    myUserId = _ref23.myUserId,
    token = _ref23.token,
    onAdd = _ref23.onAdd,
    onClose = _ref23.onClose;
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    tm = _useState8[0],
    setTm = _useState8[1];
  var _useState9 = useState([]),
    _useState0 = _slicedToArray(_useState9, 2),
    tft = _useState0[0],
    setTft = _useState0[1];
  var _useState1 = useState(""),
    _useState10 = _slicedToArray(_useState1, 2),
    mid = _useState10[0],
    setMid = _useState10[1];
  var _useState11 = useState(null),
    _useState12 = _slicedToArray(_useState11, 2),
    sft = _useState12[0],
    setSft = _useState12[1];
  var _useState13 = useState(""),
    _useState14 = _slicedToArray(_useState13, 2),
    reason = _useState14[0],
    setReason = _useState14[1];
  var _useState15 = useState(true),
    _useState16 = _slicedToArray(_useState15, 2),
    loading = _useState16[0],
    setLoading = _useState16[1];
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    profWarn = _useState18[0],
    setProfWarn = _useState18[1];
  var _useState19 = useState(0),
    _useState20 = _slicedToArray(_useState19, 2),
    tick = _useState20[0],
    setTick = _useState20[1];
  var _useState21 = useState(""),
    _useState22 = _slicedToArray(_useState21, 2),
    err = _useState22[0],
    setErr = _useState22[1];
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    addingType = _useState24[0],
    setAddingType = _useState24[1];
  var _useState25 = useState(""),
    _useState26 = _slicedToArray(_useState25, 2),
    newName = _useState26[0],
    setNewName = _useState26[1];
  var _useState27 = useState(""),
    _useState28 = _slicedToArray(_useState27, 2),
    newAmount = _useState28[0],
    setNewAmount = _useState28[1];
  var _useState29 = useState(null),
    _useState30 = _slicedToArray(_useState29, 2),
    newCustom = _useState30[0],
    setNewCustom = _useState30[1];
  var _useState31 = useState(false),
    _useState32 = _slicedToArray(_useState31, 2),
    savingType = _useState32[0],
    setSavingType = _useState32[1];
  var _useState33 = useState(null),
    _useState34 = _slicedToArray(_useState33, 2),
    editingFt = _useState34[0],
    setEditingFt = _useState34[1];
  var _useState35 = useState(""),
    _useState36 = _slicedToArray(_useState35, 2),
    editName = _useState36[0],
    setEditName = _useState36[1];
  var _useState37 = useState(""),
    _useState38 = _slicedToArray(_useState37, 2),
    editAmount = _useState38[0],
    setEditAmount = _useState38[1];
  var _useState39 = useState(null),
    _useState40 = _slicedToArray(_useState39, 2),
    editCustom = _useState40[0],
    setEditCustom = _useState40[1];
  var _useState41 = useState(false),
    _useState42 = _slicedToArray(_useState41, 2),
    savingEdit = _useState42[0],
    setSavingEdit = _useState42[1];
  var startEdit = function startEdit(ft, e) {
    e.stopPropagation();
    setEditingFt(ft);
    setEditName(ft.name);
    setEditAmount(String(ft.amount));
    setEditCustom(ft.emoji === iconForFine(ft.name, '') ? null : ft.emoji);
  };
  var saveEdit = function () {
    var _ref24 = _asyncToGenerator(_regenerator().m(function _callee11() {
      var em, _t19, _t20;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            if (!(!editName.trim() || !editAmount)) {
              _context11.n = 1;
              break;
            }
            return _context11.a(2);
          case 1:
            setSavingEdit(true);
            _context11.p = 2;
            em = resolveTypeIcon(editName.trim(), editCustom);
            _t19 = needRows;
            _context11.n = 3;
            return api.patch("fine_types?id=eq.".concat(editingFt.id), {
              name: editName.trim(),
              amount: Number(editAmount),
              emoji: storableIcon(em)
            }, token);
          case 3:
            _t19(_context11.v);
            setTft(function (p) {
              return p.map(function (x) {
                return x.id === editingFt.id ? _objectSpread(_objectSpread({}, x), {}, {
                  name: editName.trim(),
                  amount: Number(editAmount),
                  emoji: em
                }) : x;
              });
            });
            if ((sft === null || sft === void 0 ? void 0 : sft.id) === editingFt.id) setSft(function (f) {
              return _objectSpread(_objectSpread({}, f), {}, {
                name: editName.trim(),
                amount: Number(editAmount),
                emoji: em
              });
            });
            setEditingFt(null);
            _context11.n = 5;
            break;
          case 4:
            _context11.p = 4;
            _t20 = _context11.v;
            setErr(errPt(_t20));
          case 5:
            setSavingEdit(false);
          case 6:
            return _context11.a(2);
        }
      }, _callee11, null, [[2, 4]]);
    }));
    return function saveEdit() {
      return _ref24.apply(this, arguments);
    };
  }();
  var deleteFt = function () {
    var _ref25 = _asyncToGenerator(_regenerator().m(function _callee12(ft, e) {
      var still, _t21;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.p = _context12.n) {
          case 0:
            e.stopPropagation();
            if (window.confirm("Apagar \"".concat(ft.name, "\"?"))) {
              _context12.n = 1;
              break;
            }
            return _context12.a(2);
          case 1:
            _context12.p = 1;
            _context12.n = 2;
            return api.del("fine_types?id=eq.".concat(ft.id), token);
          case 2:
            _context12.n = 3;
            return api.get("fine_types?id=eq.".concat(ft.id, "&select=id"), token);
          case 3:
            still = _context12.v;
            if (!still.length) {
              _context12.n = 4;
              break;
            }
            throw new Error("sem permissão (o registo continua a existir)");
          case 4:
            setTft(function (p) {
              return p.filter(function (x) {
                return x.id !== ft.id;
              });
            });
            if ((sft === null || sft === void 0 ? void 0 : sft.id) === ft.id) setSft(null);
            _context12.n = 6;
            break;
          case 5:
            _context12.p = 5;
            _t21 = _context12.v;
            setErr(errPt(_t21));
          case 6:
            return _context12.a(2);
        }
      }, _callee12, null, [[1, 5]]);
    }));
    return function deleteFt(_x7, _x8) {
      return _ref25.apply(this, arguments);
    };
  }();
  useEffect(function () {
    var H = {
      'apikey': SB_KEY,
      'Authorization': "Bearer ".concat(token)
    };
    if (tick > 0) setLoading(true);
    Promise.all([fetch("".concat(SB_URL, "/rest/v1/team_members?team_id=eq.").concat(team.id, "&select=*"), {
      headers: H
    }).then(function (r) {
      return r.json();
    }), fetch("".concat(SB_URL, "/rest/v1/fine_types?team_id=eq.").concat(team.id, "&order=amount.asc"), {
      headers: H,
      cache: 'no-store'
    }).then(function (r) {
      return r.json();
    })]).then(function () {
      var _ref27 = _asyncToGenerator(_regenerator().m(function _callee13(_ref26) {
        var _ref28, mRaw, ftRaw, uids, profMap, profFailed, rpcRes, pr, _t22;
        return _regenerator().w(function (_context13) {
          while (1) switch (_context13.p = _context13.n) {
            case 0:
              _ref28 = _slicedToArray(_ref26, 2), mRaw = _ref28[0], ftRaw = _ref28[1];
              uids = (Array.isArray(mRaw) ? mRaw : []).map(function (m) {
                return m.user_id;
              }).filter(Boolean);
              profMap = {};
              profFailed = false;
              if (!uids.length) {
                _context13.n = 6;
                break;
              }
              _context13.p = 1;
              _context13.n = 2;
              return fetch("".concat(SB_URL, "/rest/v1/rpc/get_team_profiles"), {
                method: 'POST',
                headers: _objectSpread(_objectSpread({}, H), {}, {
                  'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                  p_team_id: team.id
                })
              }).then(function (r) {
                if (!r.ok) {
                  profFailed = true;
                  return [];
                }
                return r.json();
              }).catch(function () {
                profFailed = true;
                return [];
              });
            case 2:
              rpcRes = _context13.v;
              (Array.isArray(rpcRes) ? rpcRes : []).forEach(function (p) {
                profMap[p.id] = p;
              });
              _context13.n = 4;
              break;
            case 3:
              _context13.p = 3;
              _t22 = _context13.v;
              profFailed = true;
            case 4:
              if (!(profFailed && !Object.keys(profMap).length)) {
                _context13.n = 6;
                break;
              }
              _context13.n = 5;
              return fetch("".concat(SB_URL, "/rest/v1/profiles?id=in.(").concat(uids.join(','), ")"), {
                headers: H
              }).then(function (r) {
                return r.json();
              }).catch(function () {
                return null;
              });
            case 5:
              pr = _context13.v;
              (Array.isArray(pr) ? pr : []).forEach(function (p) {
                profMap[p.id] = p;
              });
            case 6:
              setProfWarn(profFailed && uids.length > 0);
              setTm(sortMembers((Array.isArray(mRaw) ? mRaw : []).map(function (m) {
                var _profMap$m$user_id, _profMap$m$user_id2, _profMap$m$user_id3, _profMap$m$user_id4, _profMap$m$user_id5, _profMap$m$user_id6;
                return {
                  id: String(m.id),
                  teamId: m.team_id,
                  userId: m.user_id,
                  role: m.role,
                  name: ((_profMap$m$user_id = profMap[m.user_id]) === null || _profMap$m$user_id === void 0 ? void 0 : _profMap$m$user_id.name) || 'Utilizador',
                  phone: ((_profMap$m$user_id2 = profMap[m.user_id]) === null || _profMap$m$user_id2 === void 0 ? void 0 : _profMap$m$user_id2.phone) || '',
                  birthday: ((_profMap$m$user_id3 = profMap[m.user_id]) === null || _profMap$m$user_id3 === void 0 ? void 0 : _profMap$m$user_id3.birthday) || '',
                  position: m.position || ((_profMap$m$user_id4 = profMap[m.user_id]) === null || _profMap$m$user_id4 === void 0 ? void 0 : _profMap$m$user_id4.position) || 'Jogador',
                  avatarUrl: ((_profMap$m$user_id5 = profMap[m.user_id]) === null || _profMap$m$user_id5 === void 0 ? void 0 : _profMap$m$user_id5.avatar_url) || null,
                  initials: (((_profMap$m$user_id6 = profMap[m.user_id]) === null || _profMap$m$user_id6 === void 0 ? void 0 : _profMap$m$user_id6.name) || 'U').split(' ').map(function (w) {
                    return w[0];
                  }).join('').slice(0, 2).toUpperCase()
                };
              })));
              setTft((Array.isArray(ftRaw) ? ftRaw : []).map(function (ft) {
                return {
                  id: String(ft.id),
                  name: ft.name,
                  amount: Number(ft.amount),
                  emoji: iconForFine(ft.name, ft.emoji)
                };
              }));
              setLoading(false);
            case 7:
              return _context13.a(2);
          }
        }, _callee13, null, [[1, 3]]);
      }));
      return function (_x9) {
        return _ref27.apply(this, arguments);
      };
    }()).catch(function (e) {
      setErr(errPt(e));
      setLoading(false);
    });
  }, [tick]);
  var saveNewType = function () {
    var _ref29 = _asyncToGenerator(_regenerator().m(function _callee14() {
      var data, ft, newFt, _t23, _t24;
      return _regenerator().w(function (_context14) {
        while (1) switch (_context14.p = _context14.n) {
          case 0:
            if (!(!newName.trim() || !newAmount)) {
              _context14.n = 1;
              break;
            }
            return _context14.a(2);
          case 1:
            setSavingType(true);
            _context14.p = 2;
            _t23 = needRows;
            _context14.n = 3;
            return api.post('fine_types', {
              team_id: team.id,
              name: newName.trim(),
              amount: Number(newAmount),
              emoji: storableIcon(resolveTypeIcon(newName.trim(), newCustom))
            }, token);
          case 3:
            data = _t23(_context14.v);
            ft = Array.isArray(data) ? data[0] : data;
            if (ft !== null && ft !== void 0 && ft.id) {
              newFt = {
                id: String(ft.id),
                name: ft.name,
                amount: Number(ft.amount),
                emoji: iconForFine(ft.name, ft.emoji)
              };
              setTft(function (p) {
                return [].concat(_toConsumableArray(p), [newFt]);
              });
              setSft(newFt);
            }
            setAddingType(false);
            setNewName("");
            setNewAmount("");
            setNewCustom(null);
            _context14.n = 5;
            break;
          case 4:
            _context14.p = 4;
            _t24 = _context14.v;
            setErr(errPt(_t24));
          case 5:
            setSavingType(false);
          case 6:
            return _context14.a(2);
        }
      }, _callee14, null, [[2, 4]]);
    }));
    return function saveNewType() {
      return _ref29.apply(this, arguments);
    };
  }();
  var canSubmit = mid && sft;
  var submit = function () {
    var _ref30 = _asyncToGenerator(_regenerator().m(function _callee15() {
      var _t25;
      return _regenerator().w(function (_context15) {
        while (1) switch (_context15.p = _context15.n) {
          case 0:
            if (canSubmit) {
              _context15.n = 1;
              break;
            }
            return _context15.a(2);
          case 1:
            setErr("");
            _context15.p = 2;
            _context15.n = 3;
            return onAdd({
              teamId: team.id,
              memberId: mid,
              amount: sft.amount,
              reason: reason || sft.name,
              emoji: storableIcon(sft.emoji),
              paid: false
            });
          case 3:
            onClose();
            _context15.n = 5;
            break;
          case 4:
            _context15.p = 4;
            _t25 = _context15.v;
            setErr(errPt(_t25));
          case 5:
            return _context15.a(2);
        }
      }, _callee15, null, [[2, 4]]);
    }));
    return function submit() {
      return _ref30.apply(this, arguments);
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
  }, "A carregar...") : React.createElement(React.Fragment, null, profWarn && React.createElement(LoadWarn, {
    id: "perfis-multa",
    onRetry: function onRetry() {
      return setTick(function (t) {
        return t + 1;
      });
    }
  }, PROFILES_WARN), React.createElement(FL, null, "Jogador (", tm.length, ")"), React.createElement(FSel, {
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
    return (editingFt === null || editingFt === void 0 ? void 0 : editingFt.id) === ft.id ? React.createElement("div", {
      key: ft.id,
      style: {
        gridColumn: "1 / -1",
        background: T.inputBg,
        borderRadius: 14,
        padding: "14px",
        border: "1.5px solid ".concat(T.brand)
      }
    }, React.createElement(FineIconField, {
      name: editName,
      custom: editCustom,
      onCustom: setEditCustom
    }), React.createElement(FI, {
      value: editName,
      onChange: function onChange(e) {
        return setEditName(e.target.value);
      },
      placeholder: "Nome"
    }), React.createElement(FI, {
      type: "number",
      value: editAmount,
      onChange: function onChange(e) {
        return setEditAmount(e.target.value);
      },
      placeholder: "Valor \u20AC"
    }), React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, React.createElement(PrimaryBtn, {
      onClick: saveEdit,
      disabled: !editName.trim() || !editAmount || savingEdit,
      color: T.brand
    }, savingEdit ? "A guardar..." : "✓ Guardar"), React.createElement("button", {
      onClick: function onClick() {
        return setEditingFt(null);
      },
      style: {
        flex: 1,
        padding: "13px",
        borderRadius: 12,
        border: "1.5px solid ".concat(T.border),
        background: "transparent",
        cursor: "pointer",
        fontFamily: "inherit",
        fontWeight: 700
      }
    }, "Cancelar"))) : React.createElement("div", {
      key: ft.id,
      role: "button",
      tabIndex: 0,
      "aria-pressed": (sft === null || sft === void 0 ? void 0 : sft.id) === ft.id,
      onClick: function onClick() {
        return setSft(ft);
      },
      onKeyDown: function onKeyDown(e) {
        if (e.target === e.currentTarget && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          setSft(ft);
        }
      },
      style: {
        padding: "12px 10px",
        borderRadius: 14,
        textAlign: "left",
        position: "relative",
        boxSizing: "border-box",
        border: "2px solid ".concat((sft === null || sft === void 0 ? void 0 : sft.id) === ft.id ? T.brand : T.border),
        background: (sft === null || sft === void 0 ? void 0 : sft.id) === ft.id ? "".concat(T.brand, "12") : T.inputBg,
        cursor: "pointer",
        fontFamily: "inherit",
        boxShadow: (sft === null || sft === void 0 ? void 0 : sft.id) === ft.id ? "0 2px 10px ".concat(T.brand, "30") : "none"
      }
    }, React.createElement("div", {
      style: {
        fontSize: 26,
        marginBottom: 4
      }
    }, React.createElement(FineIcon, {
      icon: ft.emoji,
      size: 26
    })), React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 700,
        fontSize: 12,
        color: (sft === null || sft === void 0 ? void 0 : sft.id) === ft.id ? T.brand : T.text,
        overflowWrap: "anywhere"
      }
    }, ft.name), React.createElement("p", {
      style: {
        margin: "2px 0 0",
        fontWeight: 900,
        fontSize: 16,
        color: (sft === null || sft === void 0 ? void 0 : sft.id) === ft.id ? T.brand : T.navy
      }
    }, ft.amount, "\u20AC"), React.createElement("div", {
      style: {
        display: "flex",
        gap: 16,
        marginTop: 8
      }
    }, React.createElement("button", {
      "aria-label": "Editar ".concat(ft.name),
      onClick: function onClick(e) {
        return startEdit(ft, e);
      },
      style: {
        background: "rgba(0,0,0,0.08)",
        border: "1.5px solid ".concat(T.border),
        borderRadius: 10,
        width: 44,
        height: 44,
        padding: 0,
        fontSize: 18,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box"
      }
    }, "\u270F\uFE0F"), React.createElement("button", {
      "aria-label": "Apagar ".concat(ft.name),
      onClick: function onClick(e) {
        return deleteFt(ft, e);
      },
      style: {
        background: "#FDECEC",
        border: "1.5px solid #B42318",
        borderRadius: 10,
        width: 44,
        height: 44,
        padding: 0,
        fontSize: 18,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box"
      }
    }, React.createElement("span", {
      style: {
        filter: "grayscale(1) brightness(0.35)"
      }
    }, "\uD83D\uDDD1\uFE0F"))));
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
  }, "\u2795 Novo tipo de multa"), React.createElement(FineIconField, {
    name: newName,
    custom: newCustom,
    onCustom: setNewCustom
  }), React.createElement(FI, {
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
  }, React.createElement(FineIcon, {
    icon: sft.emoji,
    size: 24
  }), React.createElement("div", {
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
    "aria-label": "Limpar tipo escolhido",
    onClick: function onClick() {
      return setSft(null);
    },
    style: {
      minWidth: 44,
      minHeight: 44,
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
var EditFineModal = function EditFineModal(_ref31) {
  var fine = _ref31.fine,
    onSave = _ref31.onSave,
    onClose = _ref31.onClose;
  var EMOJIS = ["🟥", "🟨", "⏰", "👕", "🏃", "🚫", "❌", "💸", "🤦", "📵", "🤕", "😤", "🍺", "🎂", "🍕", "🚗", "📱", "🎯", "🔇", "💤", "🎪", "🤡", "🍾", "🃏", "🏆", "🎖️"];
  var _useState43 = useState(storableIcon(fine.emoji || "🟥")),
    _useState44 = _slicedToArray(_useState43, 2),
    emoji = _useState44[0],
    setEmoji = _useState44[1];
  var _useState45 = useState(fine.reason || ""),
    _useState46 = _slicedToArray(_useState45, 2),
    reason = _useState46[0],
    setReason = _useState46[1];
  var _useState47 = useState(String(fine.amount)),
    _useState48 = _slicedToArray(_useState47, 2),
    amount = _useState48[0],
    setAmount = _useState48[1];
  var _useState49 = useState(false),
    _useState50 = _slicedToArray(_useState49, 2),
    saving = _useState50[0],
    setSaving = _useState50[1];
  var ok = reason.trim() && amount && Number(amount) > 0;
  var save = function () {
    var _ref32 = _asyncToGenerator(_regenerator().m(function _callee16() {
      return _regenerator().w(function (_context16) {
        while (1) switch (_context16.n) {
          case 0:
            if (ok) {
              _context16.n = 1;
              break;
            }
            return _context16.a(2);
          case 1:
            setSaving(true);
            _context16.n = 2;
            return onSave(fine.id, {
              emoji: emoji,
              reason: reason.trim(),
              amount: Number(amount)
            });
          case 2:
            setSaving(false);
            onClose();
          case 3:
            return _context16.a(2);
        }
      }, _callee16);
    }));
    return function save() {
      return _ref32.apply(this, arguments);
    };
  }();
  return React.createElement(Sheet, {
    title: "\u270F\uFE0F Editar multa",
    onClose: onClose
  }, React.createElement(FL, null, "Emoji"), React.createElement("div", {
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
        width: 40,
        height: 40,
        borderRadius: 10,
        border: "2px solid ".concat(emoji === e ? T.brand : T.border),
        background: emoji === e ? "".concat(T.brand, "18") : "transparent",
        fontSize: 22,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, e);
  })), React.createElement(FL, null, "Motivo"), React.createElement(FI, {
    type: "text",
    value: reason,
    onChange: function onChange(e) {
      return setReason(e.target.value);
    },
    placeholder: "Motivo da multa..."
  }), React.createElement(FL, null, "Valor (\u20AC)"), React.createElement(FI, {
    type: "number",
    value: amount,
    onChange: function onChange(e) {
      return setAmount(e.target.value);
    },
    placeholder: "0"
  }), React.createElement(PrimaryBtn, {
    onClick: save,
    disabled: !ok || saving,
    color: T.brand
  }, saving ? "A guardar..." : "Guardar alterações"));
};
var LogSessionModal = function LogSessionModal(_ref33) {
  var training = _ref33.training,
    existingDates = _ref33.existingDates,
    onLog = _ref33.onLog,
    onClose = _ref33.onClose;
  var getLastOccurrences = function getLastOccurrences() {
    var now = new Date();
    var results = [];
    for (var i = 1; i <= 42 && results.length < 6; i++) {
      var d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
      if ((training.days || []).includes(d.getDay())) results.push(localDateStr(d));
    }
    return results;
  };
  var occurrences = getLastOccurrences();
  var fmtOcc = function fmtOcc(d) {
    var dt = new Date(d + "T00:00:00");
    return dt.toLocaleDateString("pt-PT", {
      weekday: "short",
      day: "numeric",
      month: "short"
    });
  };
  return React.createElement(Sheet, {
    title: "\uD83D\uDCCB Registar sess\xE3o",
    onClose: onClose
  }, React.createElement("p", {
    style: {
      margin: "0 0 14px",
      fontSize: 14,
      color: T.sub
    }
  }, "Seleciona a data da sess\xE3o a registar:"), occurrences.length === 0 && React.createElement("p", {
    style: {
      color: T.sub,
      textAlign: "center"
    }
  }, "Sem sess\xF5es anteriores encontradas."), occurrences.map(function (d) {
    var already = existingDates.includes(d);
    return React.createElement("button", {
      key: d,
      onClick: function onClick() {
        if (!already) {
          onLog(d);
          onClose();
        }
      },
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "13px 14px",
        borderRadius: 12,
        border: "1.5px solid ".concat(already ? T.border : T.green),
        background: already ? "transparent" : "".concat(T.green, "10"),
        marginBottom: 8,
        cursor: already ? "default" : "pointer",
        fontFamily: "inherit",
        opacity: already ? 0.5 : 1
      }
    }, React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 15,
        color: already ? T.sub : T.text
      }
    }, fmtOcc(d)), already ? React.createElement("span", {
      style: {
        fontSize: 12,
        color: T.sub
      }
    }, "\u2713 j\xE1 registado") : React.createElement("span", {
      style: {
        fontSize: 12,
        color: T.green,
        fontWeight: 700
      }
    }, "Registar \u2192"));
  }));
};
var AddExpenseModal = function AddExpenseModal(_ref34) {
  var team = _ref34.team,
    onAdd = _ref34.onAdd,
    onClose = _ref34.onClose,
    expense = _ref34.expense,
    onSave = _ref34.onSave;
  var editing = !!expense;
  var _useState51 = useState(editing ? expense.description : ""),
    _useState52 = _slicedToArray(_useState51, 2),
    desc = _useState52[0],
    setDesc = _useState52[1];
  var _useState53 = useState(editing ? String(Math.abs(expense.amount)) : ""),
    _useState54 = _slicedToArray(_useState53, 2),
    amount = _useState54[0],
    setAmount = _useState54[1];
  var _useState55 = useState(false),
    _useState56 = _slicedToArray(_useState55, 2),
    busy = _useState56[0],
    setBusy = _useState56[1];
  var lock = React.useRef(false);
  var val = Number(amount);
  var valid = amount !== "" && Number.isFinite(val) && val > 0;
  var ok = desc.trim() !== "" && valid;
  var submit = function () {
    var _ref35 = _asyncToGenerator(_regenerator().m(function _callee17() {
      var done;
      return _regenerator().w(function (_context17) {
        while (1) switch (_context17.p = _context17.n) {
          case 0:
            if (!(!ok || lock.current)) {
              _context17.n = 1;
              break;
            }
            return _context17.a(2);
          case 1:
            if (editing) {
              _context17.n = 2;
              break;
            }
            onAdd({
              teamId: team.id,
              description: desc.trim(),
              amount: Math.abs(val),
              date: todayLocal()
            });
            onClose();
            return _context17.a(2);
          case 2:
            lock.current = true;
            setBusy(true);
            done = false;
            _context17.p = 3;
            _context17.n = 4;
            return onSave(expense.id, {
              description: desc.trim(),
              amount: val
            });
          case 4:
            done = _context17.v;
          case 5:
            _context17.p = 5;
            lock.current = false;
            setBusy(false);
            return _context17.f(5);
          case 6:
            if (done) onClose();
          case 7:
            return _context17.a(2);
        }
      }, _callee17, null, [[3,, 5, 6]]);
    }));
    return function submit() {
      return _ref35.apply(this, arguments);
    };
  }();
  return React.createElement(Sheet, {
    title: editing ? "✏️ Editar despesa" : "💸 Nova despesa",
    onClose: busy ? function () {} : onClose
  }, React.createElement(FL, null, "Descri\xE7\xE3o"), React.createElement(FI, {
    type: "text",
    value: desc,
    onChange: function onChange(e) {
      return setDesc(e.target.value);
    },
    placeholder: "Ex: Jantar de equipa..."
  }), React.createElement(FL, null, "Valor (\u20AC)"), React.createElement(FI, {
    type: "number",
    min: "0",
    step: "0.01",
    value: amount,
    onChange: function onChange(e) {
      return setAmount(e.target.value);
    },
    placeholder: "0.00"
  }), amount !== "" && !valid && React.createElement("p", {
    style: {
      color: T.brand,
      fontSize: 13,
      fontWeight: 700,
      margin: "-6px 0 10px"
    }
  }, "O valor tem de ser maior que zero."), React.createElement(PrimaryBtn, {
    onClick: submit,
    disabled: !ok || busy,
    color: T.navy
  }, busy ? "A guardar…" : editing ? "Guardar" : "Registar despesa"));
};
var TrainingTypePicker = function TrainingTypePicker(_ref36) {
  var team = _ref36.team,
    onSelect = _ref36.onSelect,
    onClose = _ref36.onClose;
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
var AddSingleTrainingModal = function AddSingleTrainingModal(_ref37) {
  var team = _ref37.team,
    onAdd = _ref37.onAdd,
    onClose = _ref37.onClose;
  var _useState57 = useState(""),
    _useState58 = _slicedToArray(_useState57, 2),
    date = _useState58[0],
    setDate = _useState58[1];
  var _useState59 = useState("19:30"),
    _useState60 = _slicedToArray(_useState59, 2),
    time = _useState60[0],
    setTime = _useState60[1];
  var _useState61 = useState(""),
    _useState62 = _slicedToArray(_useState61, 2),
    loc = _useState62[0],
    setLoc = _useState62[1];
  var _useState63 = useState(""),
    _useState64 = _slicedToArray(_useState63, 2),
    notes = _useState64[0],
    setNotes = _useState64[1];
  var _useState65 = useState(""),
    _useState66 = _slicedToArray(_useState65, 2),
    err = _useState66[0],
    setErr = _useState66[1];
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
    onClick: _asyncToGenerator(_regenerator().m(function _callee18() {
      var _t26;
      return _regenerator().w(function (_context18) {
        while (1) switch (_context18.p = _context18.n) {
          case 0:
            if (ok) {
              _context18.n = 1;
              break;
            }
            return _context18.a(2);
          case 1:
            setErr("");
            _context18.p = 2;
            _context18.n = 3;
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
            _context18.n = 5;
            break;
          case 4:
            _context18.p = 4;
            _t26 = _context18.v;
            setErr(errPt(_t26));
          case 5:
            return _context18.a(2);
        }
      }, _callee18, null, [[2, 4]]);
    })),
    disabled: !ok,
    color: team.color
  }, "Agendar treino"));
};
var AddRecurringModal = function AddRecurringModal(_ref39) {
  var team = _ref39.team,
    onAdd = _ref39.onAdd,
    onClose = _ref39.onClose;
  var _useState67 = useState([]),
    _useState68 = _slicedToArray(_useState67, 2),
    days = _useState68[0],
    setDays = _useState68[1];
  var _useState69 = useState("19:30"),
    _useState70 = _slicedToArray(_useState69, 2),
    time = _useState70[0],
    setTime = _useState70[1];
  var _useState71 = useState(""),
    _useState72 = _slicedToArray(_useState71, 2),
    loc = _useState72[0],
    setLoc = _useState72[1];
  var _useState73 = useState(""),
    _useState74 = _slicedToArray(_useState73, 2),
    notes = _useState74[0],
    setNotes = _useState74[1];
  var _useState75 = useState(""),
    _useState76 = _slicedToArray(_useState75, 2),
    err = _useState76[0],
    setErr = _useState76[1];
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
    onClick: _asyncToGenerator(_regenerator().m(function _callee19() {
      var _t27;
      return _regenerator().w(function (_context19) {
        while (1) switch (_context19.p = _context19.n) {
          case 0:
            if (ok) {
              _context19.n = 1;
              break;
            }
            return _context19.a(2);
          case 1:
            setErr("");
            _context19.p = 2;
            _context19.n = 3;
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
            _context19.n = 5;
            break;
          case 4:
            _context19.p = 4;
            _t27 = _context19.v;
            setErr(errPt(_t27));
          case 5:
            return _context19.a(2);
        }
      }, _callee19, null, [[2, 4]]);
    })),
    disabled: !ok,
    color: team.color
  }, "Criar treino recorrente"));
};
var AddMatchModal = function AddMatchModal(_ref41) {
  var team = _ref41.team,
    members = _ref41.members,
    onAdd = _ref41.onAdd,
    onClose = _ref41.onClose;
  var tm = sortMembers(members.filter(function (m) {
    return m.teamId === team.id;
  }), true);
  var _useState77 = useState(""),
    _useState78 = _slicedToArray(_useState77, 2),
    opponent = _useState78[0],
    setOpponent = _useState78[1];
  var _useState79 = useState(""),
    _useState80 = _slicedToArray(_useState79, 2),
    date = _useState80[0],
    setDate = _useState80[1];
  var _useState81 = useState("15:00"),
    _useState82 = _slicedToArray(_useState81, 2),
    time = _useState82[0],
    setTime = _useState82[1];
  var _useState83 = useState(""),
    _useState84 = _slicedToArray(_useState83, 2),
    loc = _useState84[0],
    setLoc = _useState84[1];
  var _useState85 = useState("casa"),
    _useState86 = _slicedToArray(_useState85, 2),
    homeAway = _useState86[0],
    setHomeAway = _useState86[1];
  var _useState87 = useState(""),
    _useState88 = _slicedToArray(_useState87, 2),
    notes = _useState88[0],
    setNotes = _useState88[1];
  var _useState89 = useState(tm.filter(function (m) {
      return !m.unavailable;
    }).map(function (m) {
      return m.id;
    })),
    _useState90 = _slicedToArray(_useState89, 2),
    squad = _useState90[0],
    setSquad = _useState90[1];
  var _useState91 = useState(""),
    _useState92 = _slicedToArray(_useState91, 2),
    err = _useState92[0],
    setErr = _useState92[1];
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
  }, [["casa", "🏠 Casa"], ["fora", "✈️ Fora"]].map(function (_ref42) {
    var _ref43 = _slicedToArray(_ref42, 2),
      v = _ref43[0],
      l = _ref43[1];
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
        fontFamily: "inherit",
        opacity: m.unavailable ? 0.55 : 1
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
    }, m.name.split(" ")[0], m.unavailable && " ".concat(m.unavailableEmoji || "🤕")));
  })), err && React.createElement("p", {
    style: {
      color: "#c0392b",
      fontSize: 13,
      marginBottom: 10
    }
  }, err), React.createElement(PrimaryBtn, {
    onClick: _asyncToGenerator(_regenerator().m(function _callee20() {
      var _t28;
      return _regenerator().w(function (_context20) {
        while (1) switch (_context20.p = _context20.n) {
          case 0:
            if (ok) {
              _context20.n = 1;
              break;
            }
            return _context20.a(2);
          case 1:
            setErr("");
            _context20.p = 2;
            _context20.n = 3;
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
            _context20.n = 5;
            break;
          case 4:
            _context20.p = 4;
            _t28 = _context20.v;
            setErr(errPt(_t28));
          case 5:
            return _context20.a(2);
        }
      }, _callee20, null, [[2, 4]]);
    })),
    disabled: !ok,
    color: T.brand
  }, "\u26BD Criar jogo vs ", opponent || "..."));
};
var EditSingleTrainingModal = function EditSingleTrainingModal(_ref45) {
  var team = _ref45.team,
    training = _ref45.training,
    onEdit = _ref45.onEdit,
    onClose = _ref45.onClose;
  var _useState93 = useState(training.date),
    _useState94 = _slicedToArray(_useState93, 2),
    date = _useState94[0],
    setDate = _useState94[1];
  var _useState95 = useState(training.time || "19:00"),
    _useState96 = _slicedToArray(_useState95, 2),
    time = _useState96[0],
    setTime = _useState96[1];
  var _useState97 = useState(training.location),
    _useState98 = _slicedToArray(_useState97, 2),
    loc = _useState98[0],
    setLoc = _useState98[1];
  var _useState99 = useState(training.notes),
    _useState100 = _slicedToArray(_useState99, 2),
    notes = _useState100[0],
    setNotes = _useState100[1];
  var _useState101 = useState(""),
    _useState102 = _slicedToArray(_useState101, 2),
    err = _useState102[0],
    setErr = _useState102[1];
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
    onClick: _asyncToGenerator(_regenerator().m(function _callee21() {
      var _t29;
      return _regenerator().w(function (_context21) {
        while (1) switch (_context21.p = _context21.n) {
          case 0:
            if (ok) {
              _context21.n = 1;
              break;
            }
            return _context21.a(2);
          case 1:
            setErr("");
            _context21.p = 2;
            _context21.n = 3;
            return onEdit(training.id, {
              date: date,
              time: time,
              location: loc,
              notes: notes
            });
          case 3:
            onClose();
            _context21.n = 5;
            break;
          case 4:
            _context21.p = 4;
            _t29 = _context21.v;
            setErr(errPt(_t29));
          case 5:
            return _context21.a(2);
        }
      }, _callee21, null, [[2, 4]]);
    })),
    disabled: !ok,
    color: team.color
  }, "\uD83D\uDCBE Guardar altera\xE7\xF5es"));
};
var EditMatchModal = function EditMatchModal(_ref47) {
  var team = _ref47.team,
    members = _ref47.members,
    training = _ref47.training,
    onEdit = _ref47.onEdit,
    onClose = _ref47.onClose;
  var tm = sortMembers(members.filter(function (m) {
    return m.teamId === team.id;
  }), true);
  var _useState103 = useState(training.opponent || ""),
    _useState104 = _slicedToArray(_useState103, 2),
    opponent = _useState104[0],
    setOpponent = _useState104[1];
  var _useState105 = useState(training.date),
    _useState106 = _slicedToArray(_useState105, 2),
    date = _useState106[0],
    setDate = _useState106[1];
  var _useState107 = useState(training.time || "15:00"),
    _useState108 = _slicedToArray(_useState107, 2),
    time = _useState108[0],
    setTime = _useState108[1];
  var _useState109 = useState(training.location),
    _useState110 = _slicedToArray(_useState109, 2),
    loc = _useState110[0],
    setLoc = _useState110[1];
  var _useState111 = useState(training.homeAway || "casa"),
    _useState112 = _slicedToArray(_useState111, 2),
    homeAway = _useState112[0],
    setHomeAway = _useState112[1];
  var _useState113 = useState(training.notes),
    _useState114 = _slicedToArray(_useState113, 2),
    notes = _useState114[0],
    setNotes = _useState114[1];
  var _useState115 = useState(training.squad || tm.filter(function (m) {
      return !m.unavailable;
    }).map(function (m) {
      return m.id;
    })),
    _useState116 = _slicedToArray(_useState115, 2),
    squad = _useState116[0],
    setSquad = _useState116[1];
  var _useState117 = useState(""),
    _useState118 = _slicedToArray(_useState117, 2),
    err = _useState118[0],
    setErr = _useState118[1];
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
  }, [["casa", "🏠 Casa"], ["fora", "✈️ Fora"]].map(function (_ref48) {
    var _ref49 = _slicedToArray(_ref48, 2),
      v = _ref49[0],
      l = _ref49[1];
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
        fontFamily: "inherit",
        opacity: m.unavailable ? 0.55 : 1
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
    }, m.name.split(" ")[0], m.unavailable && " ".concat(m.unavailableEmoji || "🤕")));
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
    onClick: _asyncToGenerator(_regenerator().m(function _callee22() {
      var _t30;
      return _regenerator().w(function (_context22) {
        while (1) switch (_context22.p = _context22.n) {
          case 0:
            if (ok) {
              _context22.n = 1;
              break;
            }
            return _context22.a(2);
          case 1:
            setErr("");
            _context22.p = 2;
            _context22.n = 3;
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
            _context22.n = 5;
            break;
          case 4:
            _context22.p = 4;
            _t30 = _context22.v;
            setErr(errPt(_t30));
          case 5:
            return _context22.a(2);
        }
      }, _callee22, null, [[2, 4]]);
    })),
    disabled: !ok,
    color: T.brand
  }, "\uD83D\uDCBE Guardar altera\xE7\xF5es"));
};
var EditRecurringModal = function EditRecurringModal(_ref51) {
  var team = _ref51.team,
    training = _ref51.training,
    onEdit = _ref51.onEdit,
    onClose = _ref51.onClose;
  var _useState119 = useState(training.days || []),
    _useState120 = _slicedToArray(_useState119, 2),
    days = _useState120[0],
    setDays = _useState120[1];
  var _useState121 = useState(training.time || "19:30"),
    _useState122 = _slicedToArray(_useState121, 2),
    time = _useState122[0],
    setTime = _useState122[1];
  var _useState123 = useState(training.location),
    _useState124 = _slicedToArray(_useState123, 2),
    loc = _useState124[0],
    setLoc = _useState124[1];
  var _useState125 = useState(training.notes),
    _useState126 = _slicedToArray(_useState125, 2),
    notes = _useState126[0],
    setNotes = _useState126[1];
  var _useState127 = useState(""),
    _useState128 = _slicedToArray(_useState127, 2),
    err = _useState128[0],
    setErr = _useState128[1];
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
    onClick: _asyncToGenerator(_regenerator().m(function _callee23() {
      var _t31;
      return _regenerator().w(function (_context23) {
        while (1) switch (_context23.p = _context23.n) {
          case 0:
            if (ok) {
              _context23.n = 1;
              break;
            }
            return _context23.a(2);
          case 1:
            setErr("");
            _context23.p = 2;
            _context23.n = 3;
            return onEdit(training.id, {
              recurring: true,
              days: days.sort(),
              time: time,
              location: loc,
              notes: notes
            });
          case 3:
            onClose();
            _context23.n = 5;
            break;
          case 4:
            _context23.p = 4;
            _t31 = _context23.v;
            setErr(errPt(_t31));
          case 5:
            return _context23.a(2);
        }
      }, _callee23, null, [[2, 4]]);
    })),
    disabled: !ok,
    color: team.color
  }, "\uD83D\uDCBE Guardar altera\xE7\xF5es"));
};
var POSITIONS = ["Guarda-redes", "Defesa Central", "Lateral Direito", "Lateral Esquerdo", "Defesa Líbero", "Médio Defensivo", "Médio Centro", "Médio Box-to-Box", "Médio Ofensivo", "Meia Atacante", "Extremo Direito", "Extremo Esquerdo", "Segundo Avançado", "Ponta de Lança", "Avançado Centro", "Fixo", "Ala", "Pivot", "Universal", "Treinador", "Treinador Desportivo", "Treinador Adjunto", "Treinador de Guarda-redes", "Preparador Físico", "Diretor Desportivo", "Presidente", "Massagista / Fisioterapeuta", "Delegado", "Team Manager", "Médico", "Outro"];
var POSITIONS_GROUPED = {
  "🥅 Guarda-redes": ["Guarda-redes"],
  "🛡 Defesa": ["Defesa Central", "Lateral Direito", "Lateral Esquerdo", "Defesa Líbero"],
  "⚙️ Médio": ["Médio Defensivo", "Médio Centro", "Médio Box-to-Box", "Médio Ofensivo", "Meia Atacante"],
  "⚡ Atacante": ["Extremo Direito", "Extremo Esquerdo", "Segundo Avançado", "Ponta de Lança", "Avançado Centro"],
  "🏟 Futsal / Praia": ["Fixo", "Ala", "Pivot", "Universal"],
  "🎽 Equipa Técnica": ["Treinador", "Treinador Desportivo", "Treinador Adjunto", "Treinador de Guarda-redes", "Preparador Físico", "Massagista / Fisioterapeuta", "Médico"],
  "🏛 Direção / Gestão": ["Diretor Desportivo", "Presidente", "Delegado", "Team Manager"],
  "· Outro": ["Outro"]
};
var normTxt = function normTxt(s) {
  return String(s == null ? "" : s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
};
var STAFF_POSITIONS = [].concat(_toConsumableArray(POSITIONS_GROUPED["🎽 Equipa Técnica"]), _toConsumableArray(POSITIONS_GROUPED["🏛 Direção / Gestão"]));
var DEFENSE_FIRST = ["Lateral Direito", "Defesa Central", "Lateral Esquerdo"];
var FIELD_POSITIONS = [].concat(_toConsumableArray(POSITIONS_GROUPED["🥅 Guarda-redes"]), DEFENSE_FIRST, _toConsumableArray(POSITIONS_GROUPED["🛡 Defesa"].filter(function (p) {
  return !DEFENSE_FIRST.includes(p);
})), _toConsumableArray(POSITIONS_GROUPED["⚙️ Médio"]), _toConsumableArray(POSITIONS_GROUPED["⚡ Atacante"]), _toConsumableArray(POSITIONS_GROUPED["🏟 Futsal / Praia"]));
var POSITION_ORDER = new Map([].concat(_toConsumableArray(STAFF_POSITIONS), _toConsumableArray(FIELD_POSITIONS)).map(function (p, i) {
  return [normTxt(p), i];
}));
var isStaffPosition = function isStaffPosition(pos) {
  var i = POSITION_ORDER.get(normTxt(pos));
  return i !== undefined && i < STAFF_POSITIONS.length;
};
var positionRank = function positionRank(pos) {
  var i = POSITION_ORDER.get(normTxt(pos));
  return i === undefined ? POSITION_ORDER.size : i;
};
var sortMembers = function sortMembers(list) {
  var staffLast = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return list.map(function (m, i) {
    return {
      m: m,
      i: i,
      r: positionRank(m.position) + (staffLast && isStaffPosition(m.position) ? 1000 : 0)
    };
  }).sort(function (a, b) {
    return a.r - b.r || normTxt(a.m.name).localeCompare(normTxt(b.m.name), "pt") || a.i - b.i;
  }).map(function (x) {
    return x.m;
  });
};
var PositionSelect = function PositionSelect(_ref53) {
  var value = _ref53.value,
    onChange = _ref53.onChange,
    placeholder = _ref53.placeholder;
  var known = Object.values(POSITIONS_GROUPED).some(function (opts) {
    return opts.includes(value);
  });
  return React.createElement(FSel, {
    value: value,
    onChange: onChange
  }, placeholder && React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), value && !known && React.createElement("option", {
    value: value
  }, value), Object.entries(POSITIONS_GROUPED).map(function (_ref54) {
    var _ref55 = _slicedToArray(_ref54, 2),
      group = _ref55[0],
      opts = _ref55[1];
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
var AddMemberModal = function AddMemberModal(_ref56) {
  var team = _ref56.team,
    onAdd = _ref56.onAdd,
    onClose = _ref56.onClose;
  var _useState129 = useState(""),
    _useState130 = _slicedToArray(_useState129, 2),
    name = _useState130[0],
    setName = _useState130[1];
  var _useState131 = useState(""),
    _useState132 = _slicedToArray(_useState131, 2),
    pos = _useState132[0],
    setPos = _useState132[1];
  var _useState133 = useState(""),
    _useState134 = _slicedToArray(_useState133, 2),
    phone = _useState134[0],
    setPhone = _useState134[1];
  var _useState135 = useState(""),
    _useState136 = _slicedToArray(_useState135, 2),
    bday = _useState136[0],
    setBday = _useState136[1];
  var _useState137 = useState("player"),
    _useState138 = _slicedToArray(_useState137, 2),
    role = _useState138[0],
    setRole = _useState138[1];
  var _useState139 = useState(false),
    _useState140 = _slicedToArray(_useState139, 2),
    busy = _useState140[0],
    setBusy = _useState140[1];
  var lock = React.useRef(false);
  var ok = name.trim().length > 1 && !!pos;
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
    },
    placeholder: "Escolhe a posi\xE7\xE3o\u2026"
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
  }, [["player", "👤 Jogador"], ["admin", "👑 Administrador"]].map(function (_ref57) {
    var _ref58 = _slicedToArray(_ref57, 2),
      v = _ref58[0],
      l = _ref58[1];
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
    onClick: _asyncToGenerator(_regenerator().m(function _callee24() {
      var done;
      return _regenerator().w(function (_context24) {
        while (1) switch (_context24.p = _context24.n) {
          case 0:
            if (!(!ok || lock.current)) {
              _context24.n = 1;
              break;
            }
            return _context24.a(2);
          case 1:
            lock.current = true;
            setBusy(true);
            done = false;
            _context24.p = 2;
            _context24.n = 3;
            return onAdd({
              teamId: team.id,
              userId: Date.now(),
              name: name.trim(),
              initials: initials || name[0].toUpperCase(),
              position: pos,
              phone: phone,
              birthday: bday,
              role: role
            });
          case 3:
            done = _context24.v;
          case 4:
            _context24.p = 4;
            lock.current = false;
            setBusy(false);
            return _context24.f(4);
          case 5:
            if (done) onClose();
          case 6:
            return _context24.a(2);
        }
      }, _callee24, null, [[2,, 4, 5]]);
    })),
    disabled: !ok || busy,
    color: team.color
  }, busy ? "A adicionar…" : "Adicionar ".concat(role === "admin" ? "administrador" : "jogador")));
};
var EMOJIS = ["⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🥅", "🏸", "🏓", "🏒", "🥊", "🏊", "🚴", "🏋️", "🏖️", "🎯", "🏆", "🤺"];
var COLORS = ["#1D3557", "#2A7D4F", "#C77B2A", "#7B2D8B", "#1565C0", "#C62828", "#00695C", "#E65100", "#37474F", "#558B2F"];
var COUNTRIES = ["Portugal", "Suíça", "Espanha", "França", "Alemanha", "Itália", "Brasil", "Angola", "Moçambique", "Cabo Verde", "Reino Unido", "Holanda", "Bélgica", "Outro"];
var SPORTS = ["Futebol 11", "Futebol 7", "Futebol 5 / Futsal", "Futebol de Praia", "Futebol Feminino", "Futebol Júnior", "Outro"];
var CURRENCIES = ["EUR (€)", "CHF (Fr.)", "GBP (£)", "BRL (R$)", "USD ($)"];
var CreateTeamModal = function CreateTeamModal(_ref60) {
  var onAdd = _ref60.onAdd,
    onClose = _ref60.onClose;
  var _useState141 = useState(""),
    _useState142 = _slicedToArray(_useState141, 2),
    name = _useState142[0],
    setName = _useState142[1];
  var _useState143 = useState("⚽"),
    _useState144 = _slicedToArray(_useState143, 2),
    emoji = _useState144[0],
    setEmoji = _useState144[1];
  var _useState145 = useState("#1D3557"),
    _useState146 = _slicedToArray(_useState145, 2),
    color = _useState146[0],
    setColor = _useState146[1];
  var _useState147 = useState("2025/26"),
    _useState148 = _slicedToArray(_useState147, 2),
    season = _useState148[0],
    setSeason = _useState148[1];
  var _useState149 = useState("Portugal"),
    _useState150 = _slicedToArray(_useState149, 2),
    country = _useState150[0],
    setCountry = _useState150[1];
  var _useState151 = useState("Futebol 11"),
    _useState152 = _slicedToArray(_useState151, 2),
    sport = _useState152[0],
    setSport = _useState152[1];
  var _useState153 = useState("EUR (€)"),
    _useState154 = _slicedToArray(_useState153, 2),
    currency = _useState154[0],
    setCurrency = _useState154[1];
  var _useState155 = useState(""),
    _useState156 = _slicedToArray(_useState155, 2),
    city = _useState156[0],
    setCity = _useState156[1];
  var _useState157 = useState(""),
    _useState158 = _slicedToArray(_useState157, 2),
    postal = _useState158[0],
    setPostal = _useState158[1];
  var _useState159 = useState(false),
    _useState160 = _slicedToArray(_useState159, 2),
    busy = _useState160[0],
    setBusy = _useState160[1];
  var _useState161 = useState(""),
    _useState162 = _slicedToArray(_useState161, 2),
    err = _useState162[0],
    setErr = _useState162[1];
  var issue = name.trim() ? teamNameIssue(name) : "";
  var ok = !teamNameIssue(name);
  var submit = function () {
    var _ref61 = _asyncToGenerator(_regenerator().m(function _callee25() {
      var _t32;
      return _regenerator().w(function (_context25) {
        while (1) switch (_context25.p = _context25.n) {
          case 0:
            if (!(!ok || busy)) {
              _context25.n = 1;
              break;
            }
            return _context25.a(2);
          case 1:
            setBusy(true);
            setErr("");
            _context25.p = 2;
            _context25.n = 3;
            return onAdd({
              name: normTeamName(name),
              emoji: emoji,
              color: color,
              season: season,
              country: country,
              sport: sport,
              currency: currency,
              city: city,
              postal: postal
            });
          case 3:
            onClose();
            _context25.n = 5;
            break;
          case 4:
            _context25.p = 4;
            _t32 = _context25.v;
            setErr(_t32 && _t32.message || ERR_GENERIC);
            setBusy(false);
          case 5:
            return _context25.a(2);
        }
      }, _callee25, null, [[2, 4]]);
    }));
    return function submit() {
      return _ref61.apply(this, arguments);
    };
  }();
  return React.createElement(Sheet, {
    title: "\uD83C\uDFC6 Criar equipa",
    onClose: onClose
  }, React.createElement(FL, null, "Nome da equipa"), React.createElement(FI, {
    value: name,
    onChange: function onChange(e) {
      setName(e.target.value);
      setErr("");
    },
    placeholder: "Ex: FC Selzach"
  }), (issue || err) && React.createElement("p", {
    role: "alert",
    "data-team-name-error": true,
    style: {
      margin: "-6px 0 12px",
      fontSize: 13,
      fontWeight: 700,
      color: "#B42318"
    }
  }, err || issue), React.createElement(FL, null, "Pa\xEDs"), React.createElement(FSel, {
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
    onClick: submit,
    disabled: !ok || busy,
    color: color
  }, busy ? "A criar..." : React.createElement(React.Fragment, null, "Criar equipa \"", name || "...", "\"")));
};
var EditProfileModal = function EditProfileModal(_ref62) {
  var user = _ref62.user,
    onSave = _ref62.onSave,
    onClose = _ref62.onClose;
  var _useState163 = useState(user.name),
    _useState164 = _slicedToArray(_useState163, 2),
    name = _useState164[0],
    setName = _useState164[1];
  var _useState165 = useState(user.position),
    _useState166 = _slicedToArray(_useState165, 2),
    pos = _useState166[0],
    setPos = _useState166[1];
  var _useState167 = useState(user.phone),
    _useState168 = _slicedToArray(_useState167, 2),
    phone = _useState168[0],
    setPhone = _useState168[1];
  var _useState169 = useState(user.birthday),
    _useState170 = _slicedToArray(_useState169, 2),
    bday = _useState170[0],
    setBday = _useState170[1];
  var _useState171 = useState(user.avatarUrl || null),
    _useState172 = _slicedToArray(_useState171, 2),
    photo = _useState172[0],
    setPhoto = _useState172[1];
  var fileRef = React.useRef();
  var handlePhoto = function handlePhoto(e) {
    var _e$target$files;
    var file = (_e$target$files = e.target.files) === null || _e$target$files === void 0 ? void 0 : _e$target$files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function (ev) {
      var img = new Image();
      img.onload = function () {
        var canvas = document.createElement("canvas");
        var size = 200;
        canvas.width = size;
        canvas.height = size;
        var ctx = canvas.getContext("2d");
        var s = Math.min(img.width, img.height);
        var ox = (img.width - s) / 2,
          oy = (img.height - s) / 2;
        ctx.drawImage(img, ox, oy, s, s, 0, 0, size, size);
        setPhoto(canvas.toDataURL("image/jpeg", 0.75));
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  };
  return React.createElement(Sheet, {
    title: "\u270F\uFE0F Editar perfil",
    onClose: onClose
  }, React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: 16
    }
  }, React.createElement("div", {
    onClick: function onClick() {
      var _fileRef$current;
      return (_fileRef$current = fileRef.current) === null || _fileRef$current === void 0 ? void 0 : _fileRef$current.click();
    },
    style: {
      cursor: "pointer",
      position: "relative"
    }
  }, photo ? React.createElement("img", {
    src: photo,
    style: {
      width: 80,
      height: 80,
      borderRadius: 40,
      objectFit: "cover",
      border: "3px solid ".concat(T.navy)
    }
  }) : React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      borderRadius: 40,
      background: T.navy,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: 28,
      fontWeight: 800
    }
  }, (name || "?").split(" ").map(function (w) {
    return w[0];
  }).join("").slice(0, 2).toUpperCase()), React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: 26,
      height: 26,
      borderRadius: 13,
      background: T.brand,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 14
    }
  }, "\uD83D\uDCF7")), React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: 12,
      color: T.sub
    }
  }, "Toca para alterar foto"), React.createElement("input", {
    ref: fileRef,
    type: "file",
    accept: "image/*",
    style: {
      display: "none"
    },
    onChange: handlePhoto
  }), photo && React.createElement("button", {
    onClick: function onClick() {
      return setPhoto(null);
    },
    style: {
      marginTop: 4,
      fontSize: 11,
      color: T.brand,
      background: "none",
      border: "none",
      cursor: "pointer"
    }
  }, "Remover foto")), React.createElement(FL, null, "Nome"), React.createElement(FI, {
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
        birthday: bday,
        avatarUrl: photo
      }));
      onClose();
    },
    color: T.navy
  }, "Guardar perfil"));
};
var EditMemberModal = function EditMemberModal(_ref63) {
  var member = _ref63.member,
    team = _ref63.team,
    onSave = _ref63.onSave,
    onClose = _ref63.onClose;
  var _useState173 = useState(member.name),
    _useState174 = _slicedToArray(_useState173, 2),
    name = _useState174[0],
    setName = _useState174[1];
  var _useState175 = useState(member.position || "Jogador"),
    _useState176 = _slicedToArray(_useState175, 2),
    pos = _useState176[0],
    setPos = _useState176[1];
  var _useState177 = useState(member.phone || ""),
    _useState178 = _slicedToArray(_useState177, 2),
    phone = _useState178[0],
    setPhone = _useState178[1];
  var _useState179 = useState(member.birthday || ""),
    _useState180 = _slicedToArray(_useState179, 2),
    bday = _useState180[0],
    setBday = _useState180[1];
  var _useState181 = useState(member.avatarUrl || null),
    _useState182 = _slicedToArray(_useState181, 2),
    photo = _useState182[0],
    setPhoto = _useState182[1];
  var fileRef = React.useRef();
  var handlePhoto = function handlePhoto(e) {
    var _e$target$files2;
    var file = (_e$target$files2 = e.target.files) === null || _e$target$files2 === void 0 ? void 0 : _e$target$files2[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function (ev) {
      var img = new Image();
      img.onload = function () {
        var canvas = document.createElement("canvas");
        var size = 200;
        canvas.width = size;
        canvas.height = size;
        var ctx = canvas.getContext("2d");
        var s = Math.min(img.width, img.height);
        ctx.drawImage(img, (img.width - s) / 2, (img.height - s) / 2, s, s, 0, 0, size, size);
        setPhoto(canvas.toDataURL("image/jpeg", 0.75));
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  };
  return React.createElement(Sheet, {
    title: "\u270F\uFE0F Editar \u2014 ".concat(member.name.split(" ")[0]),
    onClose: onClose
  }, React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: 16
    }
  }, React.createElement("div", {
    onClick: function onClick() {
      var _fileRef$current2;
      return (_fileRef$current2 = fileRef.current) === null || _fileRef$current2 === void 0 ? void 0 : _fileRef$current2.click();
    },
    style: {
      cursor: "pointer",
      position: "relative"
    }
  }, photo ? React.createElement("img", {
    src: photo,
    style: {
      width: 72,
      height: 72,
      borderRadius: 36,
      objectFit: "cover",
      border: "3px solid ".concat(team.color)
    }
  }) : React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: 36,
      background: team.color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: 24,
      fontWeight: 800
    }
  }, (name || "?").split(" ").map(function (w) {
    return w[0];
  }).join("").slice(0, 2).toUpperCase()), React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: 24,
      height: 24,
      borderRadius: 12,
      background: T.brand,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 13
    }
  }, "\uD83D\uDCF7")), React.createElement("input", {
    ref: fileRef,
    type: "file",
    accept: "image/*",
    style: {
      display: "none"
    },
    onChange: handlePhoto
  }), photo && React.createElement("button", {
    onClick: function onClick() {
      return setPhoto(null);
    },
    style: {
      marginTop: 4,
      fontSize: 11,
      color: T.brand,
      background: "none",
      border: "none",
      cursor: "pointer"
    }
  }, "Remover foto")), React.createElement(FL, null, "Nome"), React.createElement(FI, {
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
        birthday: bday,
        avatarUrl: photo
      });
      onClose();
    },
    color: team.color
  }, "Guardar altera\xE7\xF5es"));
};
var CLAIM_STATUS = {
  pendente: {
    label: "À espera do admin",
    color: "#8A5A00"
  },
  aprovado: {
    label: "Aprovado",
    color: "#147832"
  },
  rejeitado: {
    label: "Rejeitado",
    color: "#B42318"
  },
  cancelado: {
    label: "Cancelado",
    color: "#5F5F66"
  }
};
var claimStatus = function claimStatus(c) {
  return CLAIM_STATUS[c && c.status] || {
    label: String(c && c.status || ""),
    color: T.sub
  };
};
var CLAIM_NAMES_KEY = "multeam-claim-names";
var claimNamesMem = {};
var claimNamesGet = function claimNamesGet() {
  try {
    var j = JSON.parse(window.localStorage.getItem(CLAIM_NAMES_KEY) || "{}");
    return _objectSpread(_objectSpread({}, claimNamesMem), j && _typeof(j) === "object" ? j : {});
  } catch (e) {
    return _objectSpread({}, claimNamesMem);
  }
};
var claimNamesRemember = function claimNamesRemember(list, nameKey, avatarKey) {
  try {
    var cur = claimNamesGet();
    var changed = false;
    (Array.isArray(list) ? list : []).forEach(function (c) {
      if (c && c.id && c.status === "pendente" && c[nameKey] && !(cur[c.id] && cur[c.id].name === c[nameKey])) {
        cur[c.id] = {
          name: c[nameKey],
          avatar: c[avatarKey] || null
        };
        changed = true;
      }
    });
    if (!changed) return;
    var ids = Object.keys(cur);
    if (ids.length > 200) ids.slice(0, ids.length - 200).forEach(function (k) {
      return delete cur[k];
    });
    claimNamesMem = cur;
    try {
      window.localStorage.setItem(CLAIM_NAMES_KEY, JSON.stringify(cur));
    } catch (e) {}
  } catch (e) {}
};
var claimHistoryWho = function claimHistoryWho(c, stored) {
  var who = c.requester_name || "Sem nome";
  var st = stored && stored.name;
  if (st) return st === who ? "".concat(who, " assumiu um perfil") : "".concat(who, " \u2192 ").concat(st);
  if (c.status === "aprovado") return "".concat(who, " assumiu um perfil");
  var mem = c.member_name || "Sem nome";
  return mem === who ? "".concat(who, " (perfil com o mesmo nome)") : "".concat(who, " \u2192 ").concat(mem);
};
var claimDay = function claimDay(d) {
  var x = d ? new Date(d) : null;
  return x && !isNaN(x) ? x.toLocaleDateString("pt-PT") : "";
};
var CountBadge = function CountBadge(_ref64) {
  var n = _ref64.n,
    style = _ref64.style;
  return React.createElement("span", {
    style: _objectSpread({
      position: "absolute",
      top: -4,
      right: -9,
      minWidth: 15,
      height: 15,
      borderRadius: 8,
      background: "#B00020",
      color: "#fff",
      fontSize: 10,
      fontWeight: 800,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 3px",
      boxSizing: "border-box"
    }, style)
  }, n);
};
var ClaimWho = function ClaimWho(_ref65) {
  var name = _ref65.name,
    avatar = _ref65.avatar,
    _ref65$size = _ref65.size,
    size = _ref65$size === void 0 ? 40 : _ref65$size,
    children = _ref65.children;
  return React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      minWidth: 0
    }
  }, React.createElement(Avatar, {
    initials: mk(name || ""),
    photo: avatar,
    name: name,
    size: size
  }), React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 800,
      fontSize: 15,
      color: "#1a1a1f",
      overflowWrap: "anywhere"
    }
  }, name || "Sem nome"), children));
};
var claimBtn = function claimBtn(bg, fg, border) {
  return {
    minHeight: 44,
    padding: "0 16px",
    borderRadius: 12,
    border: "2px solid ".concat(border || bg),
    background: bg,
    color: fg,
    fontSize: 14,
    fontWeight: 800,
    cursor: "pointer",
    fontFamily: "inherit"
  };
};
var CLAIM_APPROVED_DAYS = 3,
  CLAIM_DECIDED_DAYS = 14;
var claimMoment = function claimMoment(c) {
  var t = new Date(c && (c.decided_at || c.created_at) || "");
  return isNaN(t) ? 0 : t.getTime();
};
var visibleClaims = function visibleClaims(claims, members, myUserId) {
  var now = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Date.now();
  var all = Array.isArray(claims) ? claims.filter(Boolean) : [];
  var byTeam = new Map();
  all.forEach(function (c) {
    var k = String(c.team_id == null ? "" : c.team_id);
    if (!byTeam.has(k)) byTeam.set(k, []);
    byTeam.get(k).push(c);
  });
  var keep = new Set();
  byTeam.forEach(function (cs, teamId) {
    var pend = cs.filter(function (c) {
      return c.status === "pendente";
    });
    if (pend.length) {
      pend.forEach(function (c) {
        return keep.add(c);
      });
      return;
    }
    var last = cs.slice().sort(function (a, b) {
      return claimMoment(b) - claimMoment(a);
    })[0];
    var age = now - claimMoment(last);
    if (last.status === "aprovado") {
      if (age < CLAIM_APPROVED_DAYS * 86400000) keep.add(last);
      return;
    }
    var linked = !!myUserId && Array.isArray(members) && members.some(function (m) {
      return String(m.teamId) === teamId && m.userId === myUserId;
    });
    if (!linked && last.decided_at && age < CLAIM_DECIDED_DAYS * 86400000) keep.add(last);
  });
  return all.filter(function (c) {
    return keep.has(c);
  }).slice(0, 3);
};
var MyClaimsCard = function MyClaimsCard(_ref66) {
  var claims = _ref66.claims,
    members = _ref66.members,
    myUserId = _ref66.myUserId,
    onEditNote = _ref66.onEditNote,
    onCancel = _ref66.onCancel,
    onAnswer = _ref66.onAnswer;
  var _useState183 = useState(null),
    _useState184 = _slicedToArray(_useState183, 2),
    editing = _useState184[0],
    setEditing = _useState184[1];
  var _useState185 = useState(""),
    _useState186 = _slicedToArray(_useState185, 2),
    note = _useState186[0],
    setNote = _useState186[1];
  var _useState187 = useState({}),
    _useState188 = _slicedToArray(_useState187, 2),
    ans = _useState188[0],
    setAns = _useState188[1];
  var _useState189 = useState(null),
    _useState190 = _slicedToArray(_useState189, 2),
    ansEditing = _useState190[0],
    setAnsEditing = _useState190[1];
  var _useState191 = useState(null),
    _useState192 = _slicedToArray(_useState191, 2),
    busy = _useState192[0],
    setBusy = _useState192[1];
  var _useState193 = useState(""),
    _useState194 = _slicedToArray(_useState193, 2),
    err = _useState194[0],
    setErr = _useState194[1];
  var flight = React.useRef(false);
  var list = visibleClaims(claims, members, myUserId);
  useEffect(function () {
    claimNamesRemember(claims, "member_name", "avatar_url");
  }, [claims]);
  if (!list.length) return null;
  var run = function () {
    var _ref67 = _asyncToGenerator(_regenerator().m(function _callee26(id, fn) {
      var _t33;
      return _regenerator().w(function (_context26) {
        while (1) switch (_context26.p = _context26.n) {
          case 0:
            if (!flight.current) {
              _context26.n = 1;
              break;
            }
            return _context26.a(2);
          case 1:
            flight.current = true;
            setBusy(id);
            setErr("");
            _context26.p = 2;
            _context26.n = 3;
            return fn();
          case 3:
            setEditing(null);
            _context26.n = 5;
            break;
          case 4:
            _context26.p = 4;
            _t33 = _context26.v;
            setErr(errPt(_t33));
          case 5:
            setBusy(null);
            flight.current = false;
          case 6:
            return _context26.a(2);
        }
      }, _callee26, null, [[2, 4]]);
    }));
    return function run(_x0, _x1) {
      return _ref67.apply(this, arguments);
    };
  }();
  return React.createElement("div", {
    "data-claims": "mine",
    style: {
      marginBottom: 14
    }
  }, React.createElement(Sec, {
    label: "O meu pedido"
  }), list.map(function (c) {
    var _ans$c$id, _ans$c$id2, _ans$c$id3;
    var st = claimStatus(c);
    return React.createElement("div", {
      key: c.id,
      "data-claim": c.status,
      style: {
        background: T.card,
        border: "2px solid ".concat(st.color),
        borderRadius: 14,
        padding: "12px 14px",
        marginBottom: 8
      }
    }, React.createElement("p", {
      style: {
        margin: "0 0 8px",
        fontSize: 13,
        fontWeight: 700,
        color: "#5F5F66"
      }
    }, c.team_name), c.status !== "aprovado" && React.createElement(ClaimWho, {
      name: c.member_name,
      avatar: c.avatar_url
    }, React.createElement("p", {
      style: {
        margin: "2px 0 0",
        fontSize: 12,
        color: "#5F5F66"
      }
    }, "Perfil pedido \xB7 ", claimDay(c.created_at))), React.createElement("p", {
      style: {
        margin: c.status === "aprovado" ? "0" : "10px 0 0",
        fontSize: 15,
        fontWeight: 900,
        color: st.color
      }
    }, c.status === "rejeitado" && c.decision_note ? "Rejeitado: ".concat(c.decision_note) : c.status === "aprovado" ? "Aprovado. Já és este perfil na equipa" : st.label), c.note && React.createElement("p", {
      style: {
        margin: "6px 0 0",
        fontSize: 13,
        color: "#1a1a1f",
        overflowWrap: "anywhere"
      }
    }, "A tua mensagem: ", c.note), c.status === "pendente" && c.question && onAnswer && React.createElement("div", {
      "data-claim-question": true,
      style: {
        marginTop: 10,
        padding: "10px 12px",
        borderRadius: 12,
        background: "#FFF8E1",
        border: "2px solid #8A5A00"
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 12,
        fontWeight: 800,
        color: "#5F5F66",
        textTransform: "uppercase",
        letterSpacing: 0.5
      }
    }, "O admin pergunta:"), React.createElement("p", {
      style: {
        margin: "2px 0 8px",
        fontSize: 15,
        fontWeight: 800,
        color: "#1a1a1f",
        overflowWrap: "anywhere"
      }
    }, c.question), !c.answer || ansEditing === c.id ? React.createElement(React.Fragment, null, React.createElement("textarea", {
      "aria-label": "A tua resposta",
      value: (_ans$c$id = ans[c.id]) !== null && _ans$c$id !== void 0 ? _ans$c$id : ansEditing === c.id ? c.answer || "" : "",
      maxLength: 200,
      onChange: function onChange(e) {
        return setAns(function (a0) {
          return _objectSpread(_objectSpread({}, a0), {}, _defineProperty({}, c.id, e.target.value));
        });
      },
      rows: 2,
      style: {
        width: "100%",
        boxSizing: "border-box",
        padding: "10px 12px",
        borderRadius: 12,
        border: "2px solid #1a1a1f",
        fontSize: 16,
        fontFamily: "inherit"
      }
    }), React.createElement("p", {
      style: {
        margin: "2px 0 8px",
        fontSize: 11,
        color: "#5F5F66",
        textAlign: "right"
      }
    }, ((_ans$c$id2 = ans[c.id]) !== null && _ans$c$id2 !== void 0 ? _ans$c$id2 : ansEditing === c.id ? c.answer || "" : "").length, "/200"), React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, React.createElement("button", {
      disabled: busy === c.id || !String((_ans$c$id3 = ans[c.id]) !== null && _ans$c$id3 !== void 0 ? _ans$c$id3 : ansEditing === c.id ? c.answer || "" : "").trim(),
      onClick: function onClick() {
        return run(c.id, _asyncToGenerator(_regenerator().m(function _callee27() {
          var _ans$c$id4;
          return _regenerator().w(function (_context27) {
            while (1) switch (_context27.n) {
              case 0:
                _context27.n = 1;
                return onAnswer(c.id, String((_ans$c$id4 = ans[c.id]) !== null && _ans$c$id4 !== void 0 ? _ans$c$id4 : c.answer || "").trim());
              case 1:
                setAns(function (a0) {
                  var n0 = _objectSpread({}, a0);
                  delete n0[c.id];
                  return n0;
                });
                setAnsEditing(null);
              case 2:
                return _context27.a(2);
            }
          }, _callee27);
        })));
      },
      style: claimBtn("#1a1a1f", "#fff")
    }, busy === c.id ? "A enviar..." : c.answer ? "Guardar resposta" : "Enviar resposta"), c.answer && React.createElement("button", {
      onClick: function onClick() {
        setAnsEditing(null);
        setAns(function (a0) {
          var n0 = _objectSpread({}, a0);
          delete n0[c.id];
          return n0;
        });
      },
      style: claimBtn("#fff", "#1a1a1f", "#1a1a1f")
    }, "Voltar"))) : React.createElement(React.Fragment, null, React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 12,
        fontWeight: 800,
        color: "#5F5F66",
        textTransform: "uppercase",
        letterSpacing: 0.5
      }
    }, "A tua resposta"), React.createElement("p", {
      "data-claim-answer": true,
      style: {
        margin: "2px 0 8px",
        fontSize: 15,
        fontWeight: 700,
        color: "#1a1a1f",
        overflowWrap: "anywhere"
      }
    }, c.answer), React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, React.createElement("button", {
      onClick: function onClick() {
        setAnsEditing(c.id);
        setAns(function (a0) {
          return _objectSpread(_objectSpread({}, a0), {}, _defineProperty({}, c.id, c.answer || ""));
        });
        setErr("");
      },
      style: claimBtn("#fff", "#1a1a1f", "#1a1a1f")
    }, "Editar resposta"), React.createElement("button", {
      disabled: busy === c.id,
      onClick: function onClick() {
        if (window.confirm("Apagar a tua resposta?")) run(c.id, function () {
          return onAnswer(c.id, "");
        });
      },
      style: claimBtn("#fff", "#B42318", "#B42318")
    }, "Apagar resposta")))), c.status === "pendente" && (editing === c.id ? React.createElement("div", {
      style: {
        marginTop: 10
      }
    }, React.createElement("textarea", {
      "aria-label": "Mensagem ao admin",
      value: note,
      maxLength: 200,
      onChange: function onChange(e) {
        return setNote(e.target.value);
      },
      rows: 3,
      style: {
        width: "100%",
        boxSizing: "border-box",
        padding: "10px 12px",
        borderRadius: 12,
        border: "2px solid #1a1a1f",
        fontSize: 16,
        fontFamily: "inherit"
      }
    }), React.createElement("p", {
      style: {
        margin: "2px 0 8px",
        fontSize: 11,
        color: "#5F5F66",
        textAlign: "right"
      }
    }, note.length, "/200"), React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, React.createElement("button", {
      disabled: busy === c.id,
      onClick: function onClick() {
        return run(c.id, function () {
          return onEditNote(c.id, note.trim());
        });
      },
      style: claimBtn("#1a1a1f", "#fff")
    }, busy === c.id ? "A guardar..." : "Guardar mensagem"), React.createElement("button", {
      onClick: function onClick() {
        return setEditing(null);
      },
      style: claimBtn("#fff", "#1a1a1f", "#1a1a1f")
    }, "Voltar"))) : React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        marginTop: 10
      }
    }, React.createElement("button", {
      onClick: function onClick() {
        setEditing(c.id);
        setNote(c.note || "");
        setErr("");
      },
      style: claimBtn("#fff", "#1a1a1f", "#1a1a1f")
    }, "Editar mensagem"), React.createElement("button", {
      disabled: busy === c.id,
      onClick: function onClick() {
        if (window.confirm("Cancelar o pedido?")) run(c.id, function () {
          return onCancel(c.id);
        });
      },
      style: claimBtn("#fff", "#B42318", "#B42318")
    }, "Cancelar pedido"))));
  }), err && React.createElement("p", {
    role: "alert",
    style: {
      margin: "4px 0 0",
      fontSize: 13,
      fontWeight: 700,
      color: "#B42318"
    }
  }, err));
};
var ClaimsAdminSection = function ClaimsAdminSection(_ref69) {
  var team = _ref69.team,
    members = _ref69.members,
    token = _ref69.token,
    readOnly = _ref69.readOnly,
    onChanged = _ref69.onChanged;
  var _useState195 = useState({
      status: "loading",
      list: [],
      error: ""
    }),
    _useState196 = _slicedToArray(_useState195, 2),
    st = _useState196[0],
    setSt = _useState196[1];
  var _useState197 = useState(null),
    _useState198 = _slicedToArray(_useState197, 2),
    panel = _useState198[0],
    setPanel = _useState198[1];
  var _useState199 = useState(""),
    _useState200 = _slicedToArray(_useState199, 2),
    note = _useState200[0],
    setNote = _useState200[1];
  var _useState201 = useState(false),
    _useState202 = _slicedToArray(_useState201, 2),
    busy = _useState202[0],
    setBusy = _useState202[1];
  var _useState203 = useState(""),
    _useState204 = _slicedToArray(_useState203, 2),
    err = _useState204[0],
    setErr = _useState204[1];
  var _useState205 = useState(null),
    _useState206 = _slicedToArray(_useState205, 2),
    rowErr = _useState206[0],
    setRowErr = _useState206[1];
  var loadSeq = React.useRef(0);
  var load = function () {
    var _ref70 = _asyncToGenerator(_regenerator().m(function _callee28() {
      var my, r, _t34;
      return _regenerator().w(function (_context28) {
        while (1) switch (_context28.p = _context28.n) {
          case 0:
            my = ++loadSeq.current;
            setSt(function (s0) {
              return _objectSpread(_objectSpread({}, s0), {}, {
                status: "loading",
                error: ""
              });
            });
            _context28.p = 1;
            _context28.n = 2;
            return rpcCall("list_team_claims", {
              p_team_id: team.id
            }, token);
          case 2:
            r = _context28.v;
            if (!(my !== loadSeq.current)) {
              _context28.n = 3;
              break;
            }
            return _context28.a(2);
          case 3:
            claimNamesRemember(r, "member_name", "member_avatar");
            setSt({
              status: "ok",
              list: Array.isArray(r) ? r : [],
              error: ""
            });
            _context28.n = 6;
            break;
          case 4:
            _context28.p = 4;
            _t34 = _context28.v;
            if (!(my !== loadSeq.current)) {
              _context28.n = 5;
              break;
            }
            return _context28.a(2);
          case 5:
            setSt({
              status: "error",
              list: [],
              error: errPt(_t34)
            });
          case 6:
            return _context28.a(2);
        }
      }, _callee28, null, [[1, 4]]);
    }));
    return function load() {
      return _ref70.apply(this, arguments);
    };
  }();
  useEffect(function () {
    load();
  }, [team.id]);
  var roleOf = function roleOf(c) {
    return ((members || []).find(function (m) {
      return m.id === c.member_id;
    }) || {}).role;
  };
  var flight = React.useRef(false);
  var decide = function () {
    var _ref71 = _asyncToGenerator(_regenerator().m(function _callee29(c) {
      var _t35;
      return _regenerator().w(function (_context29) {
        while (1) switch (_context29.p = _context29.n) {
          case 0:
            if (!flight.current) {
              _context29.n = 1;
              break;
            }
            return _context29.a(2);
          case 1:
            flight.current = true;
            setBusy(true);
            setErr("");
            _context29.p = 2;
            if (!(panel.kind === "aprovar")) {
              _context29.n = 4;
              break;
            }
            _context29.n = 3;
            return rpcCall("approve_claim", {
              p_claim_id: c.id
            }, token);
          case 3:
            _context29.n = 7;
            break;
          case 4:
            if (!(panel.kind === "perguntar")) {
              _context29.n = 6;
              break;
            }
            _context29.n = 5;
            return rpcCall("ask_claim_question", {
              p_claim_id: c.id,
              p_question: note.trim()
            }, token);
          case 5:
            _context29.n = 7;
            break;
          case 6:
            _context29.n = 7;
            return rpcCall("reject_claim", {
              p_claim_id: c.id,
              p_note: note.trim() || null
            }, token);
          case 7:
            setPanel(null);
            setNote("");
            _context29.n = 8;
            return load();
          case 8:
            if (!onChanged) {
              _context29.n = 9;
              break;
            }
            _context29.n = 9;
            return onChanged();
          case 9:
            _context29.n = 11;
            break;
          case 10:
            _context29.p = 10;
            _t35 = _context29.v;
            setErr(errPt(_t35));
          case 11:
            setBusy(false);
            flight.current = false;
          case 12:
            return _context29.a(2);
        }
      }, _callee29, null, [[2, 10]]);
    }));
    return function decide(_x10) {
      return _ref71.apply(this, arguments);
    };
  }();
  var withdraw = function () {
    var _ref72 = _asyncToGenerator(_regenerator().m(function _callee30(c) {
      var _t36;
      return _regenerator().w(function (_context30) {
        while (1) switch (_context30.p = _context30.n) {
          case 0:
            if (!flight.current) {
              _context30.n = 1;
              break;
            }
            return _context30.a(2);
          case 1:
            if (window.confirm("Retirar a pergunta (e a resposta, se houver)?")) {
              _context30.n = 2;
              break;
            }
            return _context30.a(2);
          case 2:
            flight.current = true;
            setBusy(true);
            setRowErr(null);
            _context30.p = 3;
            _context30.n = 4;
            return rpcCall("withdraw_claim_question", {
              p_claim_id: c.id
            }, token);
          case 4:
            _context30.n = 5;
            return load();
          case 5:
            if (!onChanged) {
              _context30.n = 6;
              break;
            }
            _context30.n = 6;
            return onChanged();
          case 6:
            _context30.n = 8;
            break;
          case 7:
            _context30.p = 7;
            _t36 = _context30.v;
            setRowErr({
              id: c.id,
              msg: errPt(_t36)
            });
          case 8:
            setBusy(false);
            flight.current = false;
          case 9:
            return _context30.a(2);
        }
      }, _callee30, null, [[3, 7]]);
    }));
    return function withdraw(_x11) {
      return _ref72.apply(this, arguments);
    };
  }();
  var pend = st.list.filter(function (c) {
    return c.status === "pendente";
  });
  var done = st.list.filter(function (c) {
    return c.status !== "pendente";
  }).slice(0, 5);
  var QUESTION_EXAMPLES = ["Qual é o teu número de camisola?", "Onde jogaste na época passada?"];
  return React.createElement("div", {
    "data-claims": "admin",
    style: {
      marginBottom: 16
    }
  }, React.createElement(Sec, {
    label: "Pedidos de perfil (".concat(pend.length, ")")
  }), st.status === "loading" && React.createElement("p", {
    role: "status",
    style: {
      margin: "0 0 8px",
      fontSize: 13,
      fontWeight: 700,
      color: "#5F5F66"
    }
  }, "A carregar pedidos..."), st.status === "error" && React.createElement("div", {
    role: "alert",
    style: {
      background: T.card,
      border: "2px solid #B42318",
      borderRadius: 14,
      padding: "12px 14px",
      marginBottom: 8
    }
  }, React.createElement("p", {
    style: {
      margin: "0 0 8px",
      fontSize: 14,
      fontWeight: 700,
      color: "#1a1a1f"
    }
  }, "N\xE3o foi poss\xEDvel carregar os pedidos: ", st.error), readOnly && React.createElement("p", {
    style: {
      margin: "0 0 8px",
      fontSize: 12,
      color: "#5F5F66"
    }
  }, "Os pedidos s\xF3 s\xE3o vis\xEDveis ao admin desta equipa."), React.createElement("button", {
    onClick: load,
    style: claimBtn("#1a1a1f", "#fff")
  }, "Tentar novamente")), st.status === "ok" && pend.length === 0 && React.createElement("p", {
    style: {
      margin: "0 0 8px",
      fontSize: 13,
      color: "#5F5F66"
    }
  }, "Sem pedidos pendentes."), pend.map(function (c) {
    var role = roleOf(c);
    var isAdm = role === "admin";
    var canAsk = "question" in c;
    var hasQ = !!c.question,
      answered = hasQ && !!c.answer,
      openQ = hasQ && !c.answer;
    var qCount = Number(c.question_count) || 0;
    return React.createElement("div", {
      key: c.id,
      "data-claim": "pendente",
      style: {
        background: T.card,
        border: "2px solid ".concat(isAdm ? "#B42318" : "#1a1a1f"),
        borderRadius: 14,
        padding: "12px 14px",
        marginBottom: 8
      }
    }, React.createElement(ClaimWho, {
      name: c.requester_name,
      avatar: c.requester_avatar
    }, React.createElement("p", {
      style: {
        margin: "2px 0 0",
        fontSize: 12,
        color: "#5F5F66"
      }
    }, "pede \xB7 ", claimDay(c.created_at))), React.createElement("p", {
      style: {
        margin: "10px 0 6px",
        fontSize: 12,
        fontWeight: 800,
        color: "#5F5F66",
        textTransform: "uppercase",
        letterSpacing: 0.5
      }
    }, "Quer ser este perfil"), React.createElement(ClaimWho, {
      name: c.member_name,
      avatar: c.member_avatar
    }, React.createElement("span", {
      "data-role": isAdm ? "admin" : "player",
      style: {
        display: "inline-block",
        marginTop: 3,
        padding: "2px 8px",
        borderRadius: 6,
        fontSize: 12,
        fontWeight: 900,
        background: isAdm ? "#B42318" : "#E8E8EE",
        color: isAdm ? "#fff" : "#1a1a1f"
      }
    }, isAdm ? "ADMIN" : "Jogador")), c.note && React.createElement("p", {
      style: {
        margin: "10px 0 0",
        fontSize: 13,
        color: "#1a1a1f",
        overflowWrap: "anywhere"
      }
    }, "Mensagem: ", c.note), canAsk && hasQ && React.createElement("div", {
      "data-claim-question": true,
      style: {
        marginTop: 10,
        padding: "10px 12px",
        borderRadius: 12,
        background: "#FFF8E1",
        border: "2px solid #8A5A00"
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 12,
        fontWeight: 800,
        color: "#5F5F66",
        textTransform: "uppercase",
        letterSpacing: 0.5
      }
    }, "A tua pergunta \xB7 ", qCount, "/3"), React.createElement("p", {
      style: {
        margin: "2px 0 0",
        fontSize: 14,
        fontWeight: 700,
        color: "#1a1a1f",
        overflowWrap: "anywhere"
      }
    }, c.question), openQ && React.createElement("p", {
      "data-claim-waiting": true,
      style: {
        margin: "6px 0 0",
        fontSize: 14,
        fontWeight: 900,
        color: "#8A5A00"
      }
    }, "\xC0 espera da resposta"), answered && React.createElement(React.Fragment, null, React.createElement("p", {
      style: {
        margin: "8px 0 0",
        fontSize: 12,
        fontWeight: 800,
        color: "#5F5F66",
        textTransform: "uppercase",
        letterSpacing: 0.5
      }
    }, "Resposta do jogador"), React.createElement("p", {
      "data-claim-answer": true,
      style: {
        margin: "2px 0 0",
        fontSize: 16,
        fontWeight: 900,
        color: "#1a1a1f",
        overflowWrap: "anywhere"
      }
    }, c.answer), React.createElement("p", {
      "data-claim-answer-warning": true,
      style: {
        margin: "6px 0 0",
        fontSize: 13,
        fontWeight: 800,
        color: "#B42318"
      }
    }, "A resposta n\xE3o prova identidade. Confirma tamb\xE9m por fora da app.")), !readOnly && React.createElement("button", {
      disabled: busy,
      onClick: function onClick() {
        return withdraw(c);
      },
      style: _objectSpread(_objectSpread({}, claimBtn("#fff", "#B42318", "#B42318")), {}, {
        marginTop: 8
      })
    }, "Retirar pergunta")), rowErr && rowErr.id === c.id && React.createElement("p", {
      role: "alert",
      style: {
        margin: "8px 0 0",
        fontSize: 13,
        fontWeight: 700,
        color: "#B42318"
      }
    }, rowErr.msg), !readOnly && (panel === null || panel === void 0 ? void 0 : panel.id) !== c.id && React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        marginTop: 10
      }
    }, React.createElement("button", {
      onClick: function onClick() {
        setPanel({
          id: c.id,
          kind: "aprovar"
        });
        setErr("");
      },
      style: claimBtn("#147832", "#fff")
    }, "Aprovar"), React.createElement("button", {
      onClick: function onClick() {
        setPanel({
          id: c.id,
          kind: "rejeitar"
        });
        setNote("");
        setErr("");
      },
      style: claimBtn("#fff", "#B42318", "#B42318")
    }, "Rejeitar"), canAsk && !openQ && React.createElement("button", {
      disabled: qCount >= 3,
      onClick: function onClick() {
        setPanel({
          id: c.id,
          kind: "perguntar"
        });
        setNote("");
        setErr("");
      },
      style: _objectSpread(_objectSpread({}, claimBtn("#fff", "#1a1a1f", "#1a1a1f")), {}, {
        opacity: qCount >= 3 ? 0.5 : 1
      })
    }, "Pedir confirma\xE7\xE3o"), canAsk && !openQ && qCount >= 3 && React.createElement("p", {
      style: {
        flexBasis: "100%",
        margin: 0,
        fontSize: 12,
        color: "#5F5F66"
      }
    }, "J\xE1 fizeste 3 perguntas neste pedido.")), !readOnly && (panel === null || panel === void 0 ? void 0 : panel.id) === c.id && React.createElement("div", {
      "data-claim-panel": panel.kind,
      style: {
        marginTop: 10,
        padding: "10px 12px",
        borderRadius: 12,
        background: "#F4F4F8",
        border: "1.5px solid #1a1a1f"
      }
    }, panel.kind === "aprovar" ? React.createElement(React.Fragment, null, React.createElement("p", {
      style: {
        margin: "0 0 6px",
        fontSize: 14,
        fontWeight: 700,
        color: "#1a1a1f"
      }
    }, "A conta de ", c.requester_name || "esta pessoa", " passa a ser o perfil ", c.member_name || "escolhido", ". As multas e presen\xE7as mant\xEAm-se."), React.createElement("p", {
      "data-claim-link-warning": true,
      style: {
        margin: "0 0 8px",
        fontSize: 14,
        fontWeight: 900,
        color: "#B42318"
      }
    }, "Isto liga a conta ao perfil de forma real. O perfil passa a mostrar o nome e a foto desta conta. S\xF3 aprova se tiveres confirmado com a pessoa."), isAdm && React.createElement("p", {
      "data-claim-warning": true,
      style: {
        margin: "0 0 8px",
        fontSize: 14,
        fontWeight: 900,
        color: "#B42318"
      }
    }, "Este perfil \xE9 ADMIN. Quem for aprovado fica admin.")) : panel.kind === "perguntar" ? React.createElement(React.Fragment, null, React.createElement("p", {
      style: {
        margin: "0 0 6px",
        fontSize: 14,
        fontWeight: 700,
        color: "#1a1a1f"
      }
    }, "Escreve uma pergunta concreta ao jogador:"), React.createElement("textarea", {
      "aria-label": "Pergunta ao jogador",
      value: note,
      maxLength: 200,
      onChange: function onChange(e) {
        return setNote(e.target.value);
      },
      rows: 2,
      style: {
        width: "100%",
        boxSizing: "border-box",
        padding: "10px 12px",
        borderRadius: 12,
        border: "2px solid #1a1a1f",
        fontSize: 16,
        fontFamily: "inherit"
      }
    }), React.createElement("p", {
      style: {
        margin: "2px 0 8px",
        fontSize: 11,
        color: "#5F5F66",
        textAlign: "right"
      }
    }, note.length, "/200"), React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        flexWrap: "wrap",
        marginBottom: 8
      }
    }, QUESTION_EXAMPLES.map(function (q) {
      return React.createElement("button", {
        key: q,
        type: "button",
        "data-claim-example": true,
        onClick: function onClick() {
          return setNote(q);
        },
        style: _objectSpread(_objectSpread({}, claimBtn("#fff", "#1a1a1f", "#1a1a1f")), {}, {
          fontSize: 13,
          padding: "0 12px",
          textAlign: "left"
        })
      }, q);
    })), React.createElement("p", {
      style: {
        margin: "0 0 8px",
        fontSize: 12,
        color: "#5F5F66"
      }
    }, "Pergunta ", qCount + 1, "/3. A aprova\xE7\xE3o continua a ser tua: a resposta \xE9 s\xF3 uma ajuda.")) : React.createElement(React.Fragment, null, React.createElement("p", {
      style: {
        margin: "0 0 6px",
        fontSize: 14,
        fontWeight: 700,
        color: "#1a1a1f"
      }
    }, "Motivo (opcional):"), React.createElement("textarea", {
      "aria-label": "Motivo da rejei\xE7\xE3o",
      value: note,
      maxLength: 200,
      onChange: function onChange(e) {
        return setNote(e.target.value);
      },
      rows: 2,
      style: {
        width: "100%",
        boxSizing: "border-box",
        padding: "10px 12px",
        borderRadius: 12,
        border: "2px solid #1a1a1f",
        fontSize: 16,
        fontFamily: "inherit"
      }
    }), React.createElement("p", {
      style: {
        margin: "2px 0 8px",
        fontSize: 11,
        color: "#5F5F66",
        textAlign: "right"
      }
    }, note.length, "/200")), err && React.createElement("p", {
      role: "alert",
      style: {
        margin: "0 0 8px",
        fontSize: 13,
        fontWeight: 700,
        color: "#B42318"
      }
    }, err), React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, React.createElement("button", {
      disabled: busy || panel.kind === "perguntar" && !note.trim(),
      onClick: function onClick() {
        return decide(c);
      },
      style: claimBtn(panel.kind === "aprovar" ? "#147832" : panel.kind === "perguntar" ? "#1a1a1f" : "#B42318", "#fff")
    }, busy ? "A guardar..." : panel.kind === "aprovar" ? "Confirmar aprovação" : panel.kind === "perguntar" ? "Enviar pergunta" : "Confirmar rejeição"), React.createElement("button", {
      disabled: busy,
      onClick: function onClick() {
        setPanel(null);
        setErr("");
      },
      style: claimBtn("#fff", "#1a1a1f", "#1a1a1f")
    }, "Voltar"))));
  }), done.length > 0 && React.createElement("div", {
    "data-claims": "history",
    style: {
      marginTop: 4
    }
  }, React.createElement("p", {
    style: {
      margin: "6px 0 4px",
      fontSize: 11,
      fontWeight: 800,
      color: "#5F5F66",
      textTransform: "uppercase",
      letterSpacing: 0.5
    }
  }, "\xDAltimas decis\xF5es"), done.map(function (c) {
    var s2 = claimStatus(c);
    var stored = claimNamesGet()[c.id];
    return React.createElement("p", {
      key: c.id,
      "data-claim": c.status,
      style: {
        margin: "0 0 4px",
        fontSize: 13,
        color: "#1a1a1f",
        overflowWrap: "anywhere"
      }
    }, React.createElement("strong", {
      style: {
        color: s2.color
      }
    }, s2.label), " \xB7 ", claimHistoryWho(c, stored), " \xB7 ", claimDay(c.decided_at || c.created_at), c.decision_note ? " \xB7 ".concat(c.decision_note) : "");
  })));
};
var JoinTeamModal = function JoinTeamModal(_ref73) {
  var teams = _ref73.teams,
    user = _ref73.user,
    onFindByCode = _ref73.onFindByCode,
    onJoin = _ref73.onJoin,
    onClose = _ref73.onClose,
    _ref73$initialCode = _ref73.initialCode,
    initialCode = _ref73$initialCode === void 0 ? "" : _ref73$initialCode,
    onListClaimable = _ref73.onListClaimable,
    onRequestClaim = _ref73.onRequestClaim;
  var _useState207 = useState(initialCode.toUpperCase()),
    _useState208 = _slicedToArray(_useState207, 2),
    code = _useState208[0],
    setCode = _useState208[1];
  var _useState209 = useState(null),
    _useState210 = _slicedToArray(_useState209, 2),
    found = _useState210[0],
    setFound = _useState210[1];
  var _useState211 = useState(false),
    _useState212 = _slicedToArray(_useState211, 2),
    joined = _useState212[0],
    setJoined = _useState212[1];
  var _useState213 = useState(false),
    _useState214 = _slicedToArray(_useState213, 2),
    searching = _useState214[0],
    setSearching = _useState214[1];
  var _useState215 = useState([]),
    _useState216 = _slicedToArray(_useState215, 2),
    claimable = _useState216[0],
    setClaimable = _useState216[1];
  var _useState217 = useState(""),
    _useState218 = _slicedToArray(_useState217, 2),
    claimNote = _useState218[0],
    setClaimNote = _useState218[1];
  var _useState219 = useState(null),
    _useState220 = _slicedToArray(_useState219, 2),
    claimBusy = _useState220[0],
    setClaimBusy = _useState220[1];
  var _useState221 = useState(""),
    _useState222 = _slicedToArray(_useState221, 2),
    claimErr = _useState222[0],
    setClaimErr = _useState222[1];
  var _useState223 = useState(false),
    _useState224 = _slicedToArray(_useState223, 2),
    requested = _useState224[0],
    setRequested = _useState224[1];
  var _useState225 = useState(""),
    _useState226 = _slicedToArray(_useState225, 2),
    searchedCode = _useState226[0],
    setSearchedCode = _useState226[1];
  var _useState227 = useState(""),
    _useState228 = _slicedToArray(_useState227, 2),
    searchErr = _useState228[0],
    setSearchErr = _useState228[1];
  var _useState229 = useState(false),
    _useState230 = _slicedToArray(_useState229, 2),
    listErr = _useState230[0],
    setListErr = _useState230[1];
  useEffect(function () {
    if (initialCode) {
      setTimeout(function () {
        return search(initialCode);
      }, 500);
    }
  }, []);
  var search = function () {
    var _ref74 = _asyncToGenerator(_regenerator().m(function _callee31(c) {
      var q, t, l, _t37, _t38, _t39;
      return _regenerator().w(function (_context31) {
        while (1) switch (_context31.p = _context31.n) {
          case 0:
            q = (c || code).trim().toUpperCase();
            if (q) {
              _context31.n = 1;
              break;
            }
            return _context31.a(2);
          case 1:
            setSearching(true);
            setClaimable([]);
            setClaimErr("");
            setSearchedCode(q);
            setSearchErr("");
            setListErr(false);
            t = null;
            _context31.p = 2;
            if (!onFindByCode) {
              _context31.n = 4;
              break;
            }
            _context31.n = 3;
            return onFindByCode(q);
          case 3:
            _t37 = _context31.v;
            _context31.n = 5;
            break;
          case 4:
            _t37 = teams.find(function (t) {
              var _t$inviteCode;
              return ((_t$inviteCode = t.inviteCode) === null || _t$inviteCode === void 0 ? void 0 : _t$inviteCode.toUpperCase()) === q;
            });
          case 5:
            t = _t37;
            _context31.n = 7;
            break;
          case 6:
            _context31.p = 6;
            _t38 = _context31.v;
            setFound(null);
            setSearchErr(errPt(_t38));
            setSearching(false);
            return _context31.a(2);
          case 7:
            setFound(t || "notfound");
            if (!(t && onListClaimable && !teams.some(function (x) {
              return x.id === t.id;
            }))) {
              _context31.n = 11;
              break;
            }
            _context31.p = 8;
            _context31.n = 9;
            return onListClaimable(q);
          case 9:
            l = _context31.v;
            setClaimable(Array.isArray(l) ? l : []);
            _context31.n = 11;
            break;
          case 10:
            _context31.p = 10;
            _t39 = _context31.v;
            setClaimable([]);
            setListErr(true);
          case 11:
            setSearching(false);
          case 12:
            return _context31.a(2);
        }
      }, _callee31, null, [[8, 10], [2, 6]]);
    }));
    return function search(_x12) {
      return _ref74.apply(this, arguments);
    };
  }();
  var askClaim = function () {
    var _ref75 = _asyncToGenerator(_regenerator().m(function _callee32(m) {
      var _t40;
      return _regenerator().w(function (_context32) {
        while (1) switch (_context32.p = _context32.n) {
          case 0:
            setClaimBusy(m.member_id);
            setClaimErr("");
            _context32.p = 1;
            _context32.n = 2;
            return onRequestClaim(searchedCode, m.member_id, claimNote.trim());
          case 2:
            setRequested(true);
            _context32.n = 4;
            break;
          case 3:
            _context32.p = 3;
            _t40 = _context32.v;
            setClaimErr(errPt(_t40));
          case 4:
            setClaimBusy(null);
          case 5:
            return _context32.a(2);
        }
      }, _callee32, null, [[1, 3]]);
    }));
    return function askClaim(_x13) {
      return _ref75.apply(this, arguments);
    };
  }();
  var alreadyMember = found && found !== "notfound" && teams.some(function (t) {
    return t.id === found.id;
  });
  var accept = function () {
    var _ref76 = _asyncToGenerator(_regenerator().m(function _callee33() {
      return _regenerator().w(function (_context33) {
        while (1) switch (_context33.n) {
          case 0:
            _context33.n = 1;
            return onJoin(found);
          case 1:
            setJoined(true);
          case 2:
            return _context33.a(2);
        }
      }, _callee33);
    }));
    return function accept() {
      return _ref76.apply(this, arguments);
    };
  }();
  var offerClaims = claimable.length > 0 && !alreadyMember && !!onRequestClaim;
  return React.createElement(Sheet, {
    title: "\uD83D\uDD17 Entrar numa equipa",
    onClose: onClose
  }, requested ? React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "20px 0 10px"
    }
  }, React.createElement("p", {
    style: {
      fontSize: 52
    }
  }, "\u23F3"), React.createElement("p", {
    style: {
      fontWeight: 800,
      fontSize: 20,
      margin: "8px 0 6px",
      color: "#1a1a1f"
    }
  }, "Pedido enviado. \xC0 espera do admin."), React.createElement("p", {
    style: {
      color: "#5F5F66",
      fontSize: 14,
      margin: "0 0 16px"
    }
  }, "Vais ver o estado do pedido em Geral. Quando o admin aprovar, a equipa aparece na tua conta."), React.createElement(PrimaryBtn, {
    onClick: onClose,
    color: T.navy
  }, "Fechar")) : !joined ? React.createElement(React.Fragment, null, React.createElement("div", {
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
  }, searching ? "..." : "Buscar")), searchErr && React.createElement(LoadWarn, {
    id: "codigo",
    onRetry: function onRetry() {
      return search();
    }
  }, "N\xE3o foi poss\xEDvel procurar a equipa: ", searchErr), listErr && React.createElement(LoadWarn, {
    id: "perfis-por-assumir",
    onRetry: function onRetry() {
      return search();
    }
  }, "N\xE3o foi poss\xEDvel verificar se j\xE1 existe um perfil teu nesta equipa. Podes entrar na mesma."), found === "notfound" && React.createElement("div", {
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
  }, alreadyMember ? React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: T.green,
      fontWeight: 700
    }
  }, "\u2713 J\xE1 \xE9s membro desta equipa.") : React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: T.sub
    }
  }, "Vais entrar como ", React.createElement("strong", null, "\uD83D\uDC64 Jogador"), ". O admin pode depois alterar a tua fun\xE7\xE3o."))), offerClaims && React.createElement("div", {
    "data-claim-offer": true,
    style: {
      background: T.card,
      border: "2px solid #1a1a1f",
      borderRadius: 14,
      padding: "12px 14px",
      marginBottom: 16
    }
  }, React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontWeight: 900,
      fontSize: 16,
      color: "#1a1a1f"
    }
  }, "J\xE1 \xE9s um destes jogadores?"), React.createElement("p", {
    style: {
      margin: "0 0 10px",
      fontSize: 13,
      color: "#5F5F66"
    }
  }, "O admin j\xE1 criou estes perfis. Escolhe o teu e ele confirma: as tuas multas e presen\xE7as mant\xEAm-se."), claimable.map(function (m) {
    return React.createElement("div", {
      key: m.member_id,
      "data-claim-profile": true,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 8,
        flexWrap: "wrap"
      }
    }, React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 150
      }
    }, React.createElement(ClaimWho, {
      name: m.name,
      avatar: m.avatar_url
    })), m.requested_by_me ? React.createElement("span", {
      style: {
        minHeight: 44,
        display: "inline-flex",
        alignItems: "center",
        padding: "0 12px",
        fontSize: 13,
        fontWeight: 800,
        color: "#8A5A00"
      }
    }, "Pedido enviado") : React.createElement("button", {
      disabled: claimBusy !== null,
      onClick: function onClick() {
        return askClaim(m);
      },
      style: claimBtn("#1a1a1f", "#fff")
    }, claimBusy === m.member_id ? "A enviar..." : "Este sou eu"));
  }), React.createElement(FL, null, "Mensagem ao admin (opcional)"), React.createElement("textarea", {
    "aria-label": "Mensagem ao admin",
    value: claimNote,
    maxLength: 200,
    onChange: function onChange(e) {
      return setClaimNote(e.target.value);
    },
    rows: 2,
    style: {
      width: "100%",
      boxSizing: "border-box",
      padding: "10px 12px",
      borderRadius: 12,
      border: "2px solid #1a1a1f",
      fontSize: 16,
      fontFamily: "inherit"
    }
  }), React.createElement("p", {
    style: {
      margin: "2px 0 0",
      fontSize: 11,
      color: "#5F5F66",
      textAlign: "right"
    }
  }, claimNote.length, "/200"), claimErr && React.createElement("p", {
    role: "alert",
    style: {
      margin: "6px 0 0",
      fontSize: 13,
      fontWeight: 700,
      color: "#B42318"
    }
  }, claimErr)), React.createElement(PrimaryBtn, {
    onClick: accept,
    disabled: !found || found === "notfound",
    color: found && found !== "notfound" ? found.color : T.border
  }, alreadyMember ? "\u26A1 Ir para ".concat(found === null || found === void 0 ? void 0 : found.name) : offerClaims ? "Nenhum sou eu, entrar como novo" : "✓ Aceitar convite e entrar")) : React.createElement("div", {
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
      margin: "0 0 16px"
    }
  }, "J\xE1 podes ver os treinos, multas e eventos da equipa."), !window.matchMedia('(display-mode: standalone)').matches && React.createElement("div", {
    style: {
      background: "".concat(T.green, "12"),
      borderRadius: 12,
      padding: "12px 14px",
      marginBottom: 16,
      textAlign: "left"
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: T.green,
      fontWeight: 700
    }
  }, "\uD83D\uDCF2 Instala a app!"), React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: 12,
      color: T.sub
    }
  }, "No browser toca em ", React.createElement("strong", null, "\u22EE Menu \u2192 Adicionar ao ecr\xE3 inicial"), " para aceder sem precisar do link.")), React.createElement(PrimaryBtn, {
    onClick: onClose,
    color: found.color
  }, "Come\xE7ar")));
};
var TeamPickerModal = function TeamPickerModal(_ref77) {
  var teams = _ref77.teams,
    members = _ref77.members,
    myUserId = _ref77.myUserId,
    currentTeamId = _ref77.currentTeamId,
    onSelect = _ref77.onSelect,
    onClose = _ref77.onClose,
    onCreateTeam = _ref77.onCreateTeam,
    readOnly = _ref77.readOnly;
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
  }, readOnly ? "Todas as equipas (só leitura)" : "As minhas equipas"), teams.map(function (t) {
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
    }, readOnly ? t.season : "".concat((me === null || me === void 0 ? void 0 : me.role) === "admin" ? "🛡 Admin" : "· Jogador", " \xB7 ").concat(t.season))), t.id === currentTeamId && React.createElement("span", {
      style: {
        color: t.color,
        fontWeight: 800,
        fontSize: 18
      }
    }, "\u2713"));
  }), !readOnly && React.createElement("button", {
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
var FineGroup = function FineGroup(_ref78) {
  var group = _ref78.group,
    color = _ref78.color;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var mk2 = function mk2(s) {
    return (s || "?").split(" ").map(function (w) {
      return w[0];
    }).join("").slice(0, 2).toUpperCase();
  };
  return React.createElement("div", {
    style: {
      background: T.card,
      borderRadius: 12,
      marginBottom: 6,
      overflow: "hidden",
      borderLeft: "3px solid ".concat(group.unpaid > 0 ? T.brand : T.green)
    }
  }, React.createElement("div", {
    onClick: function onClick() {
      return setOpen(function (o) {
        return !o;
      });
    },
    style: {
      padding: "10px 14px",
      display: "flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer"
    }
  }, React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 18,
      background: color || T.brand,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: 13,
      fontWeight: 800,
      flexShrink: 0
    }
  }, mk2(group.name)), React.createElement("div", {
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
  }, group.name), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: T.sub
    }
  }, group.fines.length, " multa", group.fines.length !== 1 ? "s" : "", " \xB7 ", group.unpaid > 0 ? React.createElement("span", {
    style: {
      color: T.brand
    }
  }, group.unpaid.toFixed(1), "\u20AC por pagar") : React.createElement("span", {
    style: {
      color: T.green
    }
  }, "tudo pago \u2713"))), React.createElement("span", {
    style: {
      fontSize: 15,
      color: T.sub,
      flexShrink: 0
    }
  }, open ? "▲" : "▼")), open && group.fines.map(function (f, i) {
    return React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 14px 8px 60px",
        borderTop: "1px solid ".concat(T.border),
        background: T.bg
      }
    }, React.createElement(FineIcon, {
      icon: f.emoji || "🟥",
      size: 18,
      style: {
        flexShrink: 0
      }
    }), React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        fontWeight: 600,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, f.reason || "—"), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 11,
        color: T.sub
      }
    }, fmtDay(f.date))), React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 800,
        color: f.paid ? T.green : T.brand,
        flexShrink: 0
      }
    }, Number(f.amount).toFixed(1), "\u20AC"));
  }));
};
var DevedorCard = function DevedorCard(_ref79) {
  var member = _ref79.member,
    isTop = _ref79.isTop,
    color = _ref79.color,
    onOpen = _ref79.onOpen;
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    open = _React$useState4[0],
    setOpen = _React$useState4[1];
  return React.createElement("div", {
    onClick: function onClick() {
      return setOpen(function (o) {
        return !o;
      });
    },
    style: {
      background: isTop ? "linear-gradient(135deg,".concat(T.brand, ",#c0392b)") : T.card,
      borderRadius: 14,
      marginBottom: 8,
      overflow: "hidden",
      cursor: "pointer",
      boxShadow: isTop ? "0 6px 20px ".concat(T.brand, "55") : "none",
      border: isTop ? "none" : "1px solid ".concat(T.border)
    }
  }, React.createElement("div", {
    style: {
      padding: isTop ? "15px 16px" : "13px 14px",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, member.avatarUrl ? React.createElement(ZoomPhoto, {
    src: member.avatarUrl,
    name: member.name,
    style: {
      width: isTop ? 50 : 44,
      height: isTop ? 50 : 44,
      borderRadius: isTop ? 25 : 22,
      objectFit: "cover",
      flexShrink: 0,
      border: isTop ? "3px solid rgba(255,255,255,0.4)" : "none"
    }
  }) : React.createElement("div", {
    style: {
      width: isTop ? 50 : 44,
      height: isTop ? 50 : 44,
      borderRadius: isTop ? 25 : 22,
      background: isTop ? "rgba(0,0,0,0.25)" : color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: isTop ? 16 : 14,
      fontWeight: 800,
      flexShrink: 0
    }
  }, member.initials), React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, isTop && React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "\uD83D\uDD34"), React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 800,
      fontSize: isTop ? 17 : 15,
      color: isTop ? "#fff" : T.text,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, member.name)), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: isTop ? "rgba(255,255,255,0.75)" : T.sub
    }
  }, member.fines.length, " multa", member.fines.length !== 1 ? "s" : "", " por pagar")), React.createElement("div", {
    style: {
      textAlign: "right",
      flexShrink: 0
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 900,
      fontSize: isTop ? 24 : 18,
      color: isTop ? "#fff" : T.brand
    }
  }, member.unpaid.toFixed(1), "\u20AC"), React.createElement("span", {
    style: {
      fontSize: 11,
      color: isTop ? "rgba(255,255,255,0.6)" : T.sub
    }
  }, open ? "▲" : "▼ Ver"))), open && React.createElement("div", {
    style: {
      borderTop: "1px solid ".concat(isTop ? "rgba(255,255,255,0.2)" : T.border),
      background: isTop ? "rgba(0,0,0,0.15)" : T.bg,
      padding: "8px 10px"
    }
  }, member.fines.map(function (f, i) {
    return React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "7px 4px"
      }
    }, React.createElement(FineIcon, {
      icon: f.emoji,
      size: 18
    }), React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        fontWeight: 600,
        color: isTop ? "rgba(255,255,255,0.9)" : T.text,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, f.reason), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 11,
        color: isTop ? "rgba(255,255,255,0.55)" : T.sub
      }
    }, fmtDay(f.date))), React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 800,
        color: isTop ? "#fff" : T.brand,
        flexShrink: 0
      }
    }, f.amount, "\u20AC"));
  })));
};
var FineGroupHome = function FineGroupHome(_ref80) {
  var group = _ref80.group,
    color = _ref80.color,
    renderFine = _ref80.renderFine;
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    open = _React$useState6[0],
    setOpen = _React$useState6[1];
  return React.createElement("div", {
    style: {
      background: T.card,
      borderRadius: 14,
      marginBottom: 8,
      overflow: "hidden",
      borderLeft: "3px solid ".concat(group.unpaid > 0 ? T.brand : T.green)
    }
  }, React.createElement("div", {
    onClick: function onClick() {
      return setOpen(function (o) {
        return !o;
      });
    },
    style: {
      padding: "13px 14px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      cursor: "pointer"
    }
  }, React.createElement(Avatar, {
    initials: group.initials || "?",
    color: color,
    photo: group.avatarUrl,
    name: group.name
  }), React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 700,
      fontSize: 15,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, group.name), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: T.sub
    }
  }, group.fines.length, " multa", group.fines.length !== 1 ? "s" : "", " \xB7 ", React.createElement("span", {
    style: {
      color: group.unpaid > 0 ? T.brand : T.green,
      fontWeight: 700
    }
  }, group.total.toFixed(1), "\u20AC", group.unpaid > 0 ? " \xB7 ".concat(group.unpaid.toFixed(1), "\u20AC por pagar") : ""))), React.createElement("span", {
    style: {
      fontSize: 14,
      color: T.sub,
      flexShrink: 0
    }
  }, open ? "▲" : "▼")), open && React.createElement("div", {
    style: {
      borderTop: "1px solid ".concat(T.border),
      padding: "8px 10px",
      background: T.bg
    }
  }, renderFine ? group.fines.map(function (f) {
    return renderFine(f);
  }) : group.fines.map(function (f, i) {
    return React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 4px"
      }
    }, React.createElement(FineIcon, {
      icon: f.emoji,
      size: 20,
      style: {
        flexShrink: 0
      }
    }), React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        fontWeight: 600,
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
    }, fmtDay(f.date))), React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 800,
        color: f.paid ? T.green : T.brand,
        flexShrink: 0
      }
    }, f.amount, "\u20AC"));
  })));
};
var TabelaMultasModal = function TabelaMultasModal(_ref81) {
  var team = _ref81.team,
    fineTypes = _ref81.fineTypes,
    fines = _ref81.fines,
    members = _ref81.members,
    onClose = _ref81.onClose;
  var tf = fineTypes.filter(function (f) {
    return f.teamId === team.id;
  });
  var tm = members.filter(function (m) {
    return m.teamId === team.id;
  });
  var _React$useState7 = React.useState("tipos"),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    tab = _React$useState8[0],
    setTab = _React$useState8[1];
  var devedores = tm.map(function (m) {
    return _objectSpread(_objectSpread({}, m), {}, {
      unpaid: fines.filter(function (f) {
        return f.teamId === team.id && f.memberId === m.id && !f.paid;
      }).reduce(function (s, f) {
        return s + f.amount;
      }, 0),
      count: fines.filter(function (f) {
        return f.teamId === team.id && f.memberId === m.id && !f.paid;
      }).length
    });
  }).filter(function (m) {
    return m.unpaid > 0;
  }).sort(function (a, b) {
    return b.unpaid - a.unpaid;
  });
  return React.createElement(Sheet, {
    title: "\uD83D\uDCCB Tabela de Multas \u2014 ".concat(team.name),
    onClose: onClose
  }, React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 16
    }
  }, React.createElement(Chip, {
    active: tab === "tipos",
    color: team.color,
    onClick: function onClick() {
      return setTab("tipos");
    }
  }, "Tipos"), React.createElement(Chip, {
    active: tab === "devedores",
    color: T.brand,
    onClick: function onClick() {
      return setTab("devedores");
    }
  }, "Por pagar (", devedores.length, ")")), tab === "tipos" && React.createElement(React.Fragment, null, tf.length === 0 && React.createElement("p", {
    style: {
      color: T.sub,
      textAlign: "center",
      padding: 20
    }
  }, "Sem tipos de multa definidos"), tf.sort(function (a, b) {
    return a.amount - b.amount;
  }).map(function (ft) {
    return React.createElement("div", {
      key: ft.id,
      style: {
        background: T.card,
        borderRadius: 12,
        padding: "12px 14px",
        marginBottom: 8,
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, React.createElement(FineIcon, {
      icon: ft.emoji,
      size: 26,
      style: {
        flexShrink: 0
      }
    }), React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 700,
        fontSize: 15,
        flex: 1
      }
    }, ft.name), React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 900,
        fontSize: 18,
        color: T.brand
      }
    }, ft.amount, "\u20AC"));
  })), tab === "devedores" && React.createElement(React.Fragment, null, devedores.length === 0 && React.createElement("p", {
    style: {
      color: T.green,
      textAlign: "center",
      padding: 20,
      fontWeight: 700
    }
  }, "\u2713 Toda a equipa est\xE1 em dia!"), devedores.map(function (m, i) {
    return React.createElement("div", {
      key: m.id,
      style: {
        background: i === 0 ? "linear-gradient(135deg,".concat(T.brand, ",#c0392b)") : T.card,
        borderRadius: 12,
        padding: "12px 14px",
        marginBottom: 8,
        display: "flex",
        alignItems: "center",
        gap: 12,
        border: i === 0 ? "none" : "1px solid ".concat(T.border)
      }
    }, m.avatarUrl ? React.createElement(ZoomPhoto, {
      src: m.avatarUrl,
      name: m.name,
      style: {
        width: 40,
        height: 40,
        borderRadius: 20,
        objectFit: "cover"
      }
    }) : React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 20,
        background: i === 0 ? "rgba(0,0,0,0.25)" : team.color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: 800,
        fontSize: 14
      }
    }, m.initials), React.createElement("div", {
      style: {
        flex: 1
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 700,
        fontSize: 14,
        color: i === 0 ? "#fff" : T.text
      }
    }, m.name), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 12,
        color: i === 0 ? "rgba(255,255,255,0.7)" : T.sub
      }
    }, m.count, " multa", m.count !== 1 ? "s" : "", " por pagar")), React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 900,
        fontSize: 20,
        color: i === 0 ? "#fff" : T.brand
      }
    }, m.unpaid.toFixed(1), "\u20AC"));
  })));
};
var HomeTab = function HomeTab(_ref82) {
  var team = _ref82.team,
    fines = _ref82.fines,
    members = _ref82.members,
    expenses = _ref82.expenses,
    trainings = _ref82.trainings,
    isAdmin = _ref82.isAdmin,
    onAddFine = _ref82.onAddFine,
    onSelectMember = _ref82.onSelectMember,
    fineTypes = _ref82.fineTypes,
    presences = _ref82.presences,
    myMember = _ref82.myMember,
    onSetPresence = _ref82.onSetPresence;
  var tf = fines.filter(function (f) {
    return f.teamId === team.id;
  });
  var _React$useState9 = React.useState(false),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    showTabela = _React$useState0[0],
    setShowTabela = _React$useState0[1];
  var _React$useState1 = React.useState(false),
    _React$useState10 = _slicedToArray(_React$useState1, 2),
    showAll = _React$useState10[0],
    setShowAll = _React$useState10[1];
  var fc = useForecast(team, trainings.filter(function (t) {
    return t.teamId === team.id;
  }));
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
    return s + Math.abs(e.amount);
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
    return byDayDesc(a, b);
  });
  var upcoming = trainings.filter(function (t) {
    return t.teamId === team.id && t.type !== "recorrente" && !isPast(t.date);
  }).sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  }).slice(0, 2);
  var recurring = trainings.filter(function (t) {
    return t.teamId === team.id && t.type === "recorrente";
  });
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
  }, [["Recebido", "+".concat(collected, "\u20AC"), "#fff"], ["Por pagar", "".concat(pending, "\u20AC"), "#FFF4F4"], ["Despesas", "-".concat(spent, "\u20AC"), "rgba(255,255,255,0.65)"]].map(function (_ref83, i, arr) {
    var _ref84 = _slicedToArray(_ref83, 3),
      l = _ref84[0],
      v = _ref84[1],
      c = _ref84[2];
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
  }))), function () {
    if (!myMember || myMember.unavailable || !onSetPresence) return null;
    var ev = nextPresenceEvent(trainings, team.id);
    if (!ev || presences && presences[ev.t.id] && presences[ev.t.id][myMember.id]) return null;
    var btn = function btn(label, color, status) {
      return React.createElement("button", {
        onClick: function onClick() {
          return onSetPresence(ev.t.id, myMember.id, status);
        },
        style: {
          padding: "6px 14px",
          borderRadius: 18,
          border: "1.5px solid ".concat(color),
          background: "transparent",
          color: color,
          fontSize: 12,
          fontWeight: 700,
          cursor: "pointer",
          fontFamily: "inherit"
        }
      }, label);
    };
    return React.createElement("div", {
      style: {
        background: T.card,
        border: "1px solid ".concat(T.border),
        borderRadius: 14,
        padding: "13px 14px",
        marginBottom: 14
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 700,
        fontSize: 15
      }
    }, presenceTitle(ev)), ev.t.location && React.createElement("p", {
      style: {
        margin: "1px 0 0",
        fontSize: 13,
        color: T.sub
      }
    }, "\uD83D\uDCCD ", ev.t.location), React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginTop: 10
      }
    }, React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        flex: 1
      }
    }, "Vais?"), btn("✓ Sim", T.green, "present"), btn("✗ Não", "#C94F00", "absent")));
  }(), isAdmin && React.createElement("button", {
    onClick: onAddFine,
    style: {
      width: "100%",
      background: "#C62828",
      color: "#fff",
      border: "none",
      borderRadius: 14,
      padding: "15px",
      fontSize: 16,
      fontWeight: 800,
      cursor: "pointer",
      marginBottom: 10,
      fontFamily: "inherit"
    }
  }, "\uD83D\uDFE5 Atribuir multa"), React.createElement("button", {
    onClick: function onClick() {
      return setShowTabela(true);
    },
    style: {
      width: "100%",
      minHeight: 44,
      background: T.card,
      border: "1.5px solid ".concat(T.border),
      borderRadius: 14,
      padding: "12px",
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer",
      marginBottom: 18,
      fontFamily: "inherit",
      color: T.text,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8
    }
  }, "\uD83D\uDCCB Tabela de multas & devedores"), showTabela && React.createElement(TabelaMultasModal, {
    team: team,
    fineTypes: fineTypes || [],
    fines: fines,
    members: members,
    onClose: function onClose() {
      return setShowTabela(false);
    }
  }), function () {
    var now = new Date();
    var currentMonth = now.getMonth() + 1;
    var today = now.getDate();
    var MONTHS_PT = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    var tm = members.filter(function (m) {
      return m.teamId === team.id && m.birthday;
    });
    var bdays = tm.map(function (m) {
      var _split$map = (m.birthday || "").split("-").map(Number),
        _split$map2 = _slicedToArray(_split$map, 3),
        mm = _split$map2[1],
        dd = _split$map2[2];
      return _objectSpread(_objectSpread({}, m), {}, {
        bMonth: mm,
        bDay: dd
      });
    }).filter(function (m) {
      return m.bMonth === currentMonth;
    }).sort(function (a, b) {
      return a.bDay - b.bDay;
    });
    if (!bdays.length) return null;
    return React.createElement("div", {
      style: {
        marginBottom: 12,
        background: "#FFF8E7",
        borderRadius: 10,
        padding: "8px 12px"
      }
    }, React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 5,
        marginBottom: 6
      }
    }, React.createElement("span", {
      style: {
        fontSize: 12
      }
    }, "\uD83C\uDF82"), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 10,
        fontWeight: 800,
        color: "#B8860B",
        textTransform: "uppercase",
        letterSpacing: 0.8
      }
    }, "Aniversariantes de ", MONTHS_PT[currentMonth - 1])), React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        overflowX: "auto",
        paddingBottom: 2
      }
    }, bdays.map(function (m) {
      var isToday = m.bDay === today;
      return React.createElement("div", {
        key: m.id,
        style: {
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          gap: 5,
          background: isToday ? "linear-gradient(135deg,#FF6B35,#FFB347)" : "#fff",
          borderRadius: 16,
          padding: "4px 8px 4px 4px",
          border: isToday ? "none" : "1px solid #FFE0A0"
        }
      }, m.avatarUrl ? React.createElement(ZoomPhoto, {
        src: m.avatarUrl,
        name: m.name,
        style: {
          width: 22,
          height: 22,
          borderRadius: 11,
          objectFit: "cover"
        }
      }) : React.createElement("div", {
        style: {
          width: 22,
          height: 22,
          borderRadius: 11,
          background: isToday ? "rgba(255,255,255,0.3)" : team.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: 8,
          fontWeight: 800
        }
      }, m.initials), React.createElement("span", {
        style: {
          fontSize: 11,
          fontWeight: 700,
          color: isToday ? "#fff" : "#8B6914",
          whiteSpace: "nowrap"
        }
      }, m.name.split(" ")[0]), React.createElement("span", {
        style: {
          fontSize: 10,
          fontWeight: 800,
          color: isToday ? "rgba(255,255,255,0.9)" : "#B8860B",
          whiteSpace: "nowrap",
          background: isToday ? "rgba(255,255,255,0.2)" : "#FFE0A0",
          borderRadius: 6,
          padding: "1px 5px"
        }
      }, isToday ? "🎉" : "".concat(m.bDay, " ").concat(MONTHS_PT[currentMonth - 1])));
    })));
  }(), function () {
    var tm = members.filter(function (m) {
      return m.teamId === team.id;
    });
    var devedores = tm.map(function (m) {
      return _objectSpread(_objectSpread({}, m), {}, {
        unpaid: tf.filter(function (f) {
          return f.memberId === m.id && !f.paid;
        }).reduce(function (s, f) {
          return s + f.amount;
        }, 0),
        fines: tf.filter(function (f) {
          return f.memberId === m.id && !f.paid;
        })
      });
    }).filter(function (m) {
      return m.unpaid > 0;
    }).sort(function (a, b) {
      return b.unpaid - a.unpaid;
    });
    if (!devedores.length) return null;
    var visible = showAll ? devedores : devedores.slice(0, 3);
    var hidden = devedores.length - 3;
    return React.createElement("div", {
      style: {
        marginBottom: 18
      }
    }, React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        marginBottom: 12,
        padding: "10px 14px",
        background: "".concat(T.brand, "10"),
        borderRadius: 12
      }
    }, React.createElement("span", {
      style: {
        fontSize: 18
      }
    }, "\uD83D\uDEA8"), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        fontWeight: 800,
        color: T.brand,
        textTransform: "uppercase",
        letterSpacing: 1.5
      }
    }, "Devedores")), visible.map(function (m, i) {
      return React.createElement(DevedorCard, {
        key: m.id,
        member: m,
        isTop: i === 0,
        color: team.color,
        onOpen: function onOpen() {
          return onSelectMember && onSelectMember(m);
        }
      });
    }), !showAll && hidden > 0 && React.createElement("button", {
      onClick: function onClick() {
        return setShowAll(true);
      },
      style: {
        width: "100%",
        background: T.card,
        border: "1px solid ".concat(T.border),
        borderRadius: 12,
        padding: "11px",
        fontSize: 13,
        fontWeight: 700,
        cursor: "pointer",
        color: T.sub,
        fontFamily: "inherit"
      }
    }, "+", hidden, " devedor", hidden !== 1 ? "es" : "", " \u2014 ver todos"), showAll && devedores.length > 3 && React.createElement("button", {
      onClick: function onClick() {
        return setShowAll(false);
      },
      style: {
        width: "100%",
        background: "transparent",
        border: "none",
        padding: "8px",
        fontSize: 12,
        cursor: "pointer",
        color: T.sub,
        fontFamily: "inherit"
      }
    }, "\u25B2 Mostrar menos"));
  }(), function () {
    var tm = members.filter(function (m) {
      return m.teamId === team.id;
    });
    var ranked = tm.map(function (m) {
      return _objectSpread(_objectSpread({}, m), {}, {
        unpaid: fines.filter(function (f) {
          return f.teamId === team.id && f.memberId === m.id && !f.paid;
        }).reduce(function (s, f) {
          return s + f.amount;
        }, 0),
        paid: fines.filter(function (f) {
          return f.teamId === team.id && f.memberId === m.id && f.paid;
        }).reduce(function (s, f) {
          return s + f.amount;
        }, 0)
      });
    }).sort(function (a, b) {
      return b.paid - a.paid || b.unpaid - a.unpaid;
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
      2: "#B8C4D0",
      3: "#C8854A"
    };
    var PLACE_GRAD = {
      1: "linear-gradient(135deg,#FFD700,#FFA500)",
      2: "linear-gradient(135deg,#C8D6E0,#8FA3B0)",
      3: "linear-gradient(135deg,#CD7F32,#9B5E1F)"
    };
    var AVATAR_GRAD = {
      1: "linear-gradient(135deg,#FFD700,#FF8C00)",
      2: "linear-gradient(135deg,#B0BEC5,#607D8B)",
      3: "linear-gradient(135deg,#CD7F32,#795548)"
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
    }, "\uD83C\uDFC6 Ranking de multas pagas"), React.createElement("div", {
      style: {
        background: "linear-gradient(160deg,#1a1a2e,#16213e)",
        borderRadius: 18,
        padding: "20px 12px 8px"
      }
    }, React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: 8
      }
    }, podiumItems.map(function (_ref85) {
      var m = _ref85.m,
        place = _ref85.place,
        medal = _ref85.medal,
        h = _ref85.h,
        sz = _ref85.sz;
      var isFirst = place === 1;
      var pc = PLACE_COLORS[place];
      var ag = AVATAR_GRAD[place];
      var pg = PLACE_GRAD[place];
      var paidAmt = m.paid || 0;
      var unpaidAmt = m.unpaid || 0;
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
          fontSize: isFirst ? 36 : 24
        }
      }, medal), m.avatarUrl ? React.createElement(ZoomPhoto, {
        src: m.avatarUrl,
        name: m.name,
        style: {
          width: sz,
          height: sz,
          borderRadius: sz / 2,
          objectFit: "cover",
          border: "3px solid ".concat(pc),
          boxShadow: "0 4px 20px ".concat(pc, "66"),
          flexShrink: 0
        }
      }) : React.createElement("div", {
        style: {
          width: sz,
          height: sz,
          borderRadius: sz / 2,
          background: ag,
          border: "3px solid ".concat(pc),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: place === 3 ? "#fff" : "#10151f",
          textShadow: place === 3 ? "0 1px 2px rgba(0,0,0,0.65)" : "none",
          fontWeight: 900,
          fontSize: sz * 0.3,
          boxShadow: "0 4px 20px ".concat(pc, "66")
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
          whiteSpace: "nowrap",
          color: "#fff"
        }
      }, m.name.split(" ")[0]), React.createElement("div", {
        style: {
          background: paidAmt > 0 ? "".concat(pc, "30") : "rgba(255,255,255,0.08)",
          border: "1px solid ".concat(paidAmt > 0 ? pc : "rgba(255,255,255,0.1)"),
          borderRadius: 10,
          padding: "5px 12px"
        }
      }, React.createElement("p", {
        style: {
          margin: 0,
          fontWeight: 900,
          fontSize: isFirst ? 18 : 14,
          color: paidAmt > 0 ? pc : "rgba(255,255,255,0.4)"
        }
      }, paidAmt > 0 ? "".concat(paidAmt, "\u20AC") : unpaidAmt > 0 ? "".concat(unpaidAmt, "\u20AC deve") : "✓")), React.createElement("div", {
        style: {
          width: "100%",
          height: h,
          background: pg,
          borderRadius: "10px 10px 0 0",
          marginTop: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.9
        }
      }, React.createElement("p", {
        style: {
          margin: 0,
          fontWeight: 900,
          fontSize: isFirst ? 32 : 24,
          color: "rgba(0,0,0,0.25)"
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
  }(), (upcoming.length > 0 || recurring.length > 0) && React.createElement(React.Fragment, null, React.createElement(Sec, {
    label: "Pr\xF3ximos treinos"
  }), recurring.map(function (t) {
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
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fontSize: 22
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
    }, "\uD83D\uDCCD ", t.location, fcText(fc[t.id]))));
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
    }, t.type === "jogo" ? "\u26BD vs ".concat(t.opponent) : "🕐", " ", t.time), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        color: T.sub
      }
    }, "\uD83D\uDCCD ", t.location, fcText(fc[t.id]))));
  })), React.createElement(Sec, {
    label: "Multas recentes"
  }), recent.length === 0 && React.createElement("p", {
    style: {
      color: T.sub,
      textAlign: "center",
      padding: "16px 0"
    }
  }, "Sem multas ainda \uD83C\uDF89"), function () {
    var grouped = {};
    recent.forEach(function (f) {
      var m = gm(f.memberId);
      var k = f.memberId;
      if (!grouped[k]) grouped[k] = {
        name: (m === null || m === void 0 ? void 0 : m.name) || "?",
        initials: (m === null || m === void 0 ? void 0 : m.initials) || "?",
        avatarUrl: (m === null || m === void 0 ? void 0 : m.avatarUrl) || null,
        fines: [],
        total: 0,
        unpaid: 0
      };
      grouped[k].fines.push(f);
      grouped[k].total += f.amount;
      if (!f.paid) grouped[k].unpaid += f.amount;
    });
    return Object.values(grouped).map(function (g) {
      return React.createElement(FineGroupHome, {
        key: g.name,
        group: g,
        color: team.color
      });
    });
  }());
};
var FinesTab = function FinesTab(_ref86) {
  var team = _ref86.team,
    fines = _ref86.fines,
    members = _ref86.members,
    isAdmin = _ref86.isAdmin,
    onAddFine = _ref86.onAddFine,
    onTogglePaid = _ref86.onTogglePaid,
    onDeleteFine = _ref86.onDeleteFine,
    onEditFine = _ref86.onEditFine,
    onSelectMember = _ref86.onSelectMember;
  var _useState231 = useState("all"),
    _useState232 = _slicedToArray(_useState231, 2),
    filter = _useState232[0],
    setFilter = _useState232[1];
  var _useState233 = useState({}),
    _useState234 = _slicedToArray(_useState233, 2),
    collapsedMonths = _useState234[0],
    setCollapsedMonths = _useState234[1];
  var tf = fines.filter(function (f) {
    return f.teamId === team.id;
  });
  var gm = function gm(id) {
    return members.find(function (m) {
      return m.id === id;
    });
  };
  var toggleMonth = function toggleMonth(m) {
    return setCollapsedMonths(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, m, !p[m]));
    });
  };
  var FineCard = function FineCard(_ref87) {
    var f = _ref87.f;
    var m = gm(f.memberId);
    return React.createElement("div", {
      style: {
        background: T.card,
        borderRadius: 12,
        padding: "11px 13px",
        marginBottom: 6,
        display: "flex",
        alignItems: "center",
        gap: 10,
        borderLeft: "3px solid ".concat(f.paid ? T.green : T.brand)
      }
    }, React.createElement("span", {
      onClick: function onClick() {
        return m && onSelectMember(m);
      },
      style: {
        fontSize: 24,
        flexShrink: 0,
        cursor: "pointer"
      }
    }, React.createElement(FineIcon, {
      icon: f.emoji,
      size: 24
    })), React.createElement("div", {
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
    }, fmtDay(f.date))), React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 4,
        flexShrink: 0
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 900,
        fontSize: 16,
        color: f.paid ? T.green : T.brand
      }
    }, f.amount, "\u20AC"), isAdmin && React.createElement("button", {
      onClick: function onClick() {
        return onTogglePaid(f.id);
      },
      style: {
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
    }, f.paid ? "✓" : "Pagar"), isAdmin && onEditFine && React.createElement("button", {
      onClick: function onClick() {
        return onEditFine(f);
      },
      style: {
        padding: "2px 6px",
        borderRadius: 7,
        border: "1.5px solid ".concat(T.sub),
        background: "transparent",
        color: T.sub,
        fontSize: 10,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, "\u270F\uFE0F"), isAdmin && onDeleteFine && React.createElement("button", {
      onClick: function onClick() {
        if (window.confirm("Apagar?")) onDeleteFine(f.id);
      },
      style: {
        padding: "2px 6px",
        borderRadius: 7,
        border: "1.5px solid #888",
        background: "transparent",
        color: "#888",
        fontSize: 10,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, "\uD83D\uDDD1\uFE0F")));
  };
  if (filter === "month") {
    var byMonth = {};
    _toConsumableArray(tf).sort(byDayDesc).forEach(function (f) {
      var day = localDay(f.date);
      var key = day ? "".concat(MESES_PT[+day.slice(5, 7) - 1], " de ").concat(day.slice(0, 4)) : "Sem data";
      if (!byMonth[key]) byMonth[key] = [];
      byMonth[key].push(f);
    });
    return React.createElement("div", {
      style: {
        padding: "14px 16px 100px"
      }
    }, React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginBottom: 16,
        overflowX: "auto",
        paddingBottom: 4
      }
    }, React.createElement(Chip, {
      active: false,
      color: team.color,
      onClick: function onClick() {
        return setFilter("all");
      }
    }, "Todas (", tf.length, ")"), React.createElement(Chip, {
      active: false,
      color: T.brand,
      onClick: function onClick() {
        return setFilter("unpaid");
      }
    }, "Por pagar (", tf.filter(function (f) {
      return !f.paid;
    }).length, ")"), React.createElement(Chip, {
      active: false,
      color: T.green,
      onClick: function onClick() {
        return setFilter("paid");
      }
    }, "Pagas (", tf.filter(function (f) {
      return f.paid;
    }).length, ")"), React.createElement(Chip, {
      active: true,
      color: T.navy,
      onClick: function onClick() {
        return setFilter("month");
      }
    }, "\uD83D\uDCC5 Por m\xEAs")), Object.entries(byMonth).map(function (_ref88) {
      var _ref89 = _slicedToArray(_ref88, 2),
        month = _ref89[0],
        mfines = _ref89[1];
      var isCol = collapsedMonths[month];
      var total = mfines.reduce(function (s, f) {
        return s + f.amount;
      }, 0);
      var unpaid = mfines.filter(function (f) {
        return !f.paid;
      }).reduce(function (s, f) {
        return s + f.amount;
      }, 0);
      return React.createElement("div", {
        key: month
      }, React.createElement("button", {
        onClick: function onClick() {
          return toggleMonth(month);
        },
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "12px 0 8px",
          fontFamily: "inherit"
        }
      }, React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10
        }
      }, React.createElement("span", {
        style: {
          fontSize: 14,
          fontWeight: 900,
          color: team.color,
          textTransform: "uppercase",
          letterSpacing: 0.5
        }
      }, month), React.createElement("span", {
        style: {
          fontSize: 12,
          color: T.sub
        }
      }, mfines.length, " multa", mfines.length !== 1 ? "s" : ""), unpaid > 0 ? React.createElement("span", {
        style: {
          fontSize: 12,
          color: T.brand,
          fontWeight: 700
        }
      }, "\xB7 ", unpaid.toFixed(1), "\u20AC por pagar") : React.createElement("span", {
        style: {
          fontSize: 12,
          color: T.green,
          fontWeight: 700
        }
      }, "\xB7 tudo pago \u2713")), React.createElement("span", {
        style: {
          fontSize: 14,
          color: T.sub
        }
      }, isCol ? "▶" : "▼")), !isCol && function () {
        var grouped = {};
        mfines.forEach(function (f) {
          var m = gm(f.memberId);
          var k = f.memberId;
          if (!grouped[k]) grouped[k] = {
            name: (m === null || m === void 0 ? void 0 : m.name) || "?",
            initials: (m === null || m === void 0 ? void 0 : m.initials) || "?",
            avatarUrl: (m === null || m === void 0 ? void 0 : m.avatarUrl) || null,
            fines: [],
            total: 0,
            unpaid: 0
          };
          grouped[k].fines.push(f);
          grouped[k].total += f.amount;
          if (!f.paid) grouped[k].unpaid += f.amount;
        });
        return Object.values(grouped).map(function (g) {
          return React.createElement(FineGroupHome, {
            key: g.name,
            group: g,
            color: team.color,
            renderFine: function renderFine(f) {
              return React.createElement(FineCard, {
                key: f.id,
                f: f
              });
            }
          });
        });
      }());
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
  }
  var filtered = tf.filter(function (f) {
    return filter === "all" || (filter === "unpaid" ? !f.paid : f.paid);
  }).sort(byDayDesc);
  var grouped = {};
  filtered.forEach(function (f) {
    var m = gm(f.memberId);
    var k = f.memberId;
    if (!grouped[k]) grouped[k] = {
      name: (m === null || m === void 0 ? void 0 : m.name) || "?",
      initials: (m === null || m === void 0 ? void 0 : m.initials) || "?",
      avatarUrl: (m === null || m === void 0 ? void 0 : m.avatarUrl) || null,
      fines: [],
      total: 0,
      unpaid: 0
    };
    grouped[k].fines.push(f);
    grouped[k].total += f.amount;
    if (!f.paid) grouped[k].unpaid += f.amount;
  });
  return React.createElement("div", {
    style: {
      padding: "14px 16px 100px"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 16,
      overflowX: "auto",
      paddingBottom: 4
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
  }).length, ")"), React.createElement(Chip, {
    active: filter === "month",
    color: T.navy,
    onClick: function onClick() {
      return setFilter("month");
    }
  }, "\uD83D\uDCC5 Por m\xEAs")), filtered.length === 0 && React.createElement("p", {
    style: {
      textAlign: "center",
      color: T.sub,
      padding: 40
    }
  }, "Sem multas \uD83D\uDE4C"), Object.values(grouped).map(function (g) {
    return React.createElement(FineGroupHome, {
      key: g.name,
      group: g,
      color: team.color,
      renderFine: function renderFine(f) {
        return React.createElement(FineCard, {
          key: f.id,
          f: f
        });
      }
    });
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
var PresCounter = function PresCounter(_ref90) {
  var count = _ref90.count,
    color = _ref90.color;
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
var PresBar = function PresBar(_ref91) {
  var t = _ref91.t,
    presences = _ref91.presences,
    myMember = _ref91.myMember,
    team = _ref91.team,
    members = _ref91.members,
    onSetPresence = _ref91.onSetPresence,
    isAdmin = _ref91.isAdmin;
  var _React$useState11 = React.useState(false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    expanded = _React$useState12[0],
    setExpanded = _React$useState12[1];
  var pres = presences[t.id] || {};
  var tm = sortMembers(members.filter(function (m) {
    return m.teamId === team.id;
  }), true);
  var ok = Object.values(pres).filter(function (s) {
    return s === "present";
  }).length;
  var no = Object.values(pres).filter(function (s) {
    return s === "absent";
  }).length;
  var unav = tm.filter(function (m) {
    return m.unavailable && !pres[m.id];
  }).length;
  var pend = tm.length - ok - no - unav;
  var me = pres[myMember === null || myMember === void 0 ? void 0 : myMember.id];
  var semResposta = isAdmin || !onSetPresence ? tm.filter(function (m) {
    return !pres[m.id] && !m.unavailable;
  }) : [];
  return React.createElement("div", {
    style: {
      paddingTop: 10,
      marginTop: 8,
      borderTop: "1px solid ".concat(T.border)
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, React.createElement(PresCounter, {
    count: ok,
    color: T.green
  }), React.createElement(PresCounter, {
    count: no,
    color: "#C94F00"
  }), React.createElement(PresCounter, {
    count: pend,
    color: T.sub
  }), unav > 0 && React.createElement("div", {
    title: "Indispon\xEDveis",
    style: {
      minWidth: 26,
      height: 26,
      padding: "0 6px",
      boxSizing: "border-box",
      borderRadius: 7,
      background: "#7B6CD9",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: 12,
      fontWeight: 800,
      gap: 3
    }
  }, "\uD83E\uDD15 ", unav), React.createElement("button", {
    onClick: function onClick() {
      return setExpanded(function (e) {
        return !e;
      });
    },
    style: {
      background: "none",
      border: "1px solid ".concat(T.border),
      borderRadius: 8,
      padding: "3px 8px",
      fontSize: 11,
      color: T.sub,
      cursor: "pointer",
      fontFamily: "inherit",
      flexShrink: 0
    }
  }, expanded ? "▲" : "▼ Ver"), !isPast(t.date) && myMember && React.createElement("div", {
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
      minHeight: 44,
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
      minHeight: 44,
      borderRadius: 18,
      border: "1.5px solid #C94F00",
      background: me === "absent" ? "#C94F00" : "transparent",
      color: me === "absent" ? "#fff" : "#C94F00",
      fontSize: 12,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "\u2717 Ausente"))), expanded && React.createElement("div", {
    style: {
      marginTop: 10,
      display: "flex",
      flexDirection: "column",
      gap: 5
    }
  }, tm.map(function (m) {
    var st = pres[m.id];
    var isUnav = m.unavailable && !st;
    var color = st === "present" ? T.green : st === "absent" ? "#C94F00" : isUnav ? "#7B6CD9" : T.sub;
    var icon = st === "present" ? "✓" : st === "absent" ? "✗" : isUnav ? m.unavailableEmoji || "🤕" : "?";
    return React.createElement("div", {
      key: m.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, React.createElement("div", {
      style: {
        width: 22,
        height: 22,
        borderRadius: 7,
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: 12,
        fontWeight: 800,
        flexShrink: 0
      }
    }, icon), React.createElement("span", {
      style: {
        fontSize: 13,
        color: st ? T.text : T.sub,
        fontWeight: st ? 600 : 400
      }
    }, m.name, isUnav && " · indisponível"));
  }), semResposta.length > 0 && React.createElement("div", {
    "data-pres": "sem-resposta",
    style: {
      marginTop: 6,
      paddingTop: 8,
      borderTop: "1px dashed ".concat(T.border)
    }
  }, React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontSize: 13,
      fontWeight: 800,
      color: "#C94F00"
    }
  }, "Sem resposta (", semResposta.length, ")"), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: T.text,
      lineHeight: 1.5,
      overflowWrap: "anywhere"
    }
  }, semResposta.map(function (m) {
    return m.name;
  }).join(", ")))));
};
var EventCard = function EventCard(_ref92) {
  var fc = _ref92.fc,
    t = _ref92.t,
    team = _ref92.team,
    members = _ref92.members,
    isAdmin = _ref92.isAdmin,
    ctxMenu = _ref92.ctxMenu,
    setCtxMenu = _ref92.setCtxMenu,
    onDelete = _ref92.onDelete,
    setEditTarget = _ref92.setEditTarget,
    myMember = _ref92.myMember,
    presences = _ref92.presences,
    onSetPresence = _ref92.onSetPresence;
  var past = isPast(t.date);
  var isJogo = t.type === "jogo";
  var dt = new Date(t.date + "T00:00:00");
  var dayNum = dt.getDate();
  var weekday = dt.toLocaleDateString("pt-PT", {
    weekday: "long"
  });
  var squadMembers = isJogo ? sortMembers((t.squad || []).map(function (id) {
    return members.find(function (m) {
      return m.id === id;
    });
  }).filter(Boolean), true) : [];
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
  }, "\uD83D\uDCCD ", t.location, fcText(fc)), t.notes && React.createElement("p", {
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
    onSetPresence: onSetPresence,
    isAdmin: isAdmin
  })), ctxMenu === t.id && React.createElement("div", {
    style: {
      background: T.bg,
      borderTop: "1px solid ".concat(T.border)
    }
  }, [["✏️ Modificar evento", function () {
    setEditTarget(t);
    setCtxMenu(null);
  }], ["🗑️ Eliminar evento", function () {
    setCtxMenu(null);
    if (window.confirm("Eliminar ".concat(t.type === "jogo" ? "este jogo" : "este treino", "? N\xE3o tem volta."))) onDelete(t.id);
  }]].map(function (_ref93) {
    var _ref94 = _slicedToArray(_ref93, 2),
      label = _ref94[0],
      action = _ref94[1];
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
var TreinosPage = function TreinosPage(_ref95) {
  var team = _ref95.team,
    trainings = _ref95.trainings,
    members = _ref95.members,
    myUserId = _ref95.myUserId,
    isAdmin = _ref95.isAdmin,
    presences = _ref95.presences,
    onSetPresence = _ref95.onSetPresence,
    onAddType = _ref95.onAddType,
    onDelete = _ref95.onDelete,
    onEdit = _ref95.onEdit,
    onLogSession = _ref95.onLogSession,
    onBack = _ref95.onBack,
    modal = _ref95.modal,
    setModal = _ref95.setModal;
  var _useState235 = useState(false),
    _useState236 = _slicedToArray(_useState235, 2),
    showPast = _useState236[0],
    setShowPast = _useState236[1];
  var _useState237 = useState(null),
    _useState238 = _slicedToArray(_useState237, 2),
    filterType = _useState238[0],
    setFilterType = _useState238[1];
  var _useState239 = useState({}),
    _useState240 = _slicedToArray(_useState239, 2),
    collapsedMonths = _useState240[0],
    setCollapsedMonths = _useState240[1];
  var toggleMonth = function toggleMonth(m) {
    return setCollapsedMonths(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, m, !p[m]));
    });
  };
  var _useState241 = useState(null),
    _useState242 = _slicedToArray(_useState241, 2),
    logTarget = _useState242[0],
    setLogTarget = _useState242[1];
  var _useState243 = useState(false),
    _useState244 = _slicedToArray(_useState243, 2),
    showFilter = _useState244[0],
    setShowFilter = _useState244[1];
  var _useState245 = useState(null),
    _useState246 = _slicedToArray(_useState245, 2),
    ctxMenu = _useState246[0],
    setCtxMenu = _useState246[1];
  var _useState247 = useState(null),
    _useState248 = _slicedToArray(_useState247, 2),
    editTarget = _useState248[0],
    setEditTarget = _useState248[1];
  var myMember = members.find(function (m) {
    return m.teamId === team.id && m.userId === myUserId;
  });
  var tt = trainings.filter(function (t) {
    return t.teamId === team.id;
  });
  var fc = useForecast(team, tt);
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
      minHeight: 44,
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
      flexWrap: "wrap",
      borderBottom: "1px solid ".concat(T.border)
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
      minHeight: 44,
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
      minHeight: 44,
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
      minHeight: 44,
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
      minHeight: 44,
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
      minHeight: 44,
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
        borderLeft: "3px solid ".concat(team.color)
      }
    }, React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        alignItems: "center"
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
    }, "\uD83D\uDCCD ", t.location, fcText(fc[t.id])), t.notes && React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 12,
        color: T.sub
      }
    }, t.notes)), isAdmin && React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        flexShrink: 0
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
        if (window.confirm("Eliminar este treino? Não tem volta.")) onDelete(t.id);
      },
      "aria-label": "Eliminar",
      style: {
        background: "none",
        border: "none",
        fontSize: 18,
        cursor: "pointer",
        color: T.sub
      }
    }, "\uD83D\uDDD1\uFE0F"))), isAdmin && onLogSession && React.createElement("button", {
      onClick: function onClick() {
        return setLogTarget(t);
      },
      style: {
        display: "block",
        width: "100%",
        marginTop: 10,
        padding: "8px",
        borderRadius: 10,
        border: "1.5px solid ".concat(team.color),
        background: "".concat(team.color, "12"),
        color: team.color,
        fontSize: 13,
        fontWeight: 700,
        cursor: "pointer",
        fontFamily: "inherit",
        textAlign: "center"
      }
    }, "\uD83D\uDCCB Registar sess\xE3o"), React.createElement(PresBar, {
      t: t,
      presences: presences,
      myMember: myMember,
      team: team,
      members: members,
      onSetPresence: onSetPresence,
      isAdmin: isAdmin
    }));
  })), Object.entries(byMonth).map(function (_ref96) {
    var _ref97 = _slicedToArray(_ref96, 2),
      month = _ref97[0],
      evts = _ref97[1];
    var isCollapsed = collapsedMonths[month];
    var totalSessions = evts.length;
    var totalPresent = evts.reduce(function (s, t) {
      return s + Object.values(presences[t.id] || {}).filter(function (x) {
        return x === "present";
      }).length;
    }, 0);
    return React.createElement("div", {
      key: month
    }, React.createElement("button", {
      onClick: function onClick() {
        return toggleMonth(month);
      },
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "14px 0 8px",
        fontFamily: "inherit"
      }
    }, React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: 900,
        color: team.color,
        textTransform: "uppercase",
        letterSpacing: 0.8
      }
    }, month), React.createElement("span", {
      style: {
        fontSize: 12,
        color: T.sub,
        fontWeight: 600
      }
    }, plural(totalSessions, "sessão", "sessões")), totalPresent > 0 && React.createElement("span", {
      style: {
        fontSize: 12,
        color: T.green,
        fontWeight: 700
      }
    }, "\xB7 ", totalPresent, " \u2713")), React.createElement("span", {
      style: {
        fontSize: 16,
        color: T.sub
      }
    }, isCollapsed ? "▶" : "▼")), !isCollapsed && evts.map(function (t) {
      return React.createElement(EventCard, {
        key: t.id,
        fc: fc[t.id],
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
  }, "Tipo de evento"), [[null, "📅 Todos"], ["recorrente", "🔄 Recorrente"], ["treino", "📅 Treino único"], ["jogo", "⚽ Jogo"]].map(function (_ref98) {
    var _ref99 = _slicedToArray(_ref98, 2),
      v = _ref99[0],
      l = _ref99[1];
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
      var _ref100 = _asyncToGenerator(_regenerator().m(function _callee34(t) {
        return _regenerator().w(function (_context34) {
          while (1) switch (_context34.n) {
            case 0:
              _context34.n = 1;
              return onAddType(t);
            case 1:
              setModal(null);
            case 2:
              return _context34.a(2);
          }
        }, _callee34);
      }));
      return function (_x14) {
        return _ref100.apply(this, arguments);
      };
    }()),
    onClose: function onClose() {
      return setModal(null);
    }
  }), modal === "recorrente" && React.createElement(AddRecurringModal, {
    team: team,
    onAdd: (function () {
      var _ref101 = _asyncToGenerator(_regenerator().m(function _callee35(t) {
        return _regenerator().w(function (_context35) {
          while (1) switch (_context35.n) {
            case 0:
              _context35.n = 1;
              return onAddType(t);
            case 1:
              setModal(null);
            case 2:
              return _context35.a(2);
          }
        }, _callee35);
      }));
      return function (_x15) {
        return _ref101.apply(this, arguments);
      };
    }()),
    onClose: function onClose() {
      return setModal(null);
    }
  }), modal === "jogo" && React.createElement(AddMatchModal, {
    team: team,
    members: members,
    onAdd: (function () {
      var _ref102 = _asyncToGenerator(_regenerator().m(function _callee36(t) {
        return _regenerator().w(function (_context36) {
          while (1) switch (_context36.n) {
            case 0:
              _context36.n = 1;
              return onAddType(t);
            case 1:
              setModal(null);
            case 2:
              return _context36.a(2);
          }
        }, _callee36);
      }));
      return function (_x16) {
        return _ref102.apply(this, arguments);
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
  }), logTarget && onLogSession && React.createElement(LogSessionModal, {
    training: logTarget,
    existingDates: trainings.filter(function (t) {
      return t.teamId === team.id && t.type === "treino" && t.location === logTarget.location && t.time === logTarget.time;
    }).map(function (t) {
      return t.date;
    }),
    onLog: function onLog(d) {
      return onLogSession(logTarget, d, presences[logTarget.id] || {});
    },
    onClose: function onClose() {
      return setLogTarget(null);
    }
  }));
};
var toCents = function toCents(x) {
  return Math.round(Number(x) * 100);
};
var eurC = function eurC(c) {
  var a = Math.abs(c);
  return "".concat(a % 100 === 0 ? a / 100 : (a / 100).toFixed(2), "\u20AC");
};
var sgnEurC = function sgnEurC(c) {
  return "".concat(c < 0 ? "-" : "+").concat(eurC(c));
};
var TreasuryTab = function TreasuryTab(_ref103) {
  var team = _ref103.team,
    fines = _ref103.fines,
    members = _ref103.members,
    expenses = _ref103.expenses,
    isAdmin = _ref103.isAdmin,
    onAddExpense = _ref103.onAddExpense,
    onEditExpense = _ref103.onEditExpense,
    onDeleteExpense = _ref103.onDeleteExpense;
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
    return s + Math.abs(e.amount);
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
      label: "Multa \u2014 ".concat((_gm = gm(f.memberId)) === null || _gm === void 0 ? void 0 : _gm.name),
      day: localDay(f.paidAt) || localDay(f.date)
    });
  })), _toConsumableArray(te.map(function (e) {
    return _objectSpread(_objectSpread({}, e), {}, {
      type: "out",
      label: e.description,
      day: localDay(e.date)
    });
  }))).sort(function (a, b) {
    return b.day.localeCompare(a.day);
  });
  var months = [];
  var at = {};
  allTx.forEach(function (tx) {
    var key = tx.day ? tx.day.slice(0, 7) : "";
    if (!(key in at)) {
      at[key] = months.length;
      months.push({
        key: key,
        txs: [],
        inC: 0,
        outC: 0
      });
    }
    var g = months[at[key]];
    g.txs.push(tx);
    if (tx.type === "in") g.inC += toCents(tx.amount);else g.outC += toCents(Math.abs(tx.amount));
  });
  var currentKey = todayLocal().slice(0, 7);
  var _useState249 = useState({}),
    _useState250 = _slicedToArray(_useState249, 2),
    monthOpen = _useState250[0],
    setMonthOpen = _useState250[1];
  var _useState251 = useState(null),
    _useState252 = _slicedToArray(_useState251, 2),
    editingExp = _useState252[0],
    setEditingExp = _useState252[1];
  var canEditExp = isAdmin && !!onEditExpense && !!onDeleteExpense;
  var isOpen = function isOpen(key) {
    return key in monthOpen ? monthOpen[key] : key !== "" && key === currentKey;
  };
  var monthTitle = function monthTitle(key) {
    return key ? "".concat(MESES_PT[+key.slice(5, 7) - 1], " ").concat(key.slice(0, 4)) : "Sem data";
  };
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
  }), months.map(function (g) {
    var open = isOpen(g.key);
    var net = g.inC - g.outC;
    return React.createElement("div", {
      key: g.key || "none",
      "data-month": g.key || "none",
      style: {
        marginBottom: 10
      }
    }, React.createElement("button", {
      onClick: function onClick() {
        return setMonthOpen(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, g.key, !open));
        });
      },
      "aria-expanded": open,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        width: "100%",
        minHeight: 44,
        padding: "8px 12px",
        background: T.card,
        border: "none",
        borderRadius: 12,
        cursor: "pointer",
        fontFamily: "inherit",
        textAlign: "left",
        marginBottom: open ? 7 : 0
      }
    }, React.createElement("span", {
      "aria-hidden": "true",
      style: {
        fontSize: 12,
        color: T.sub,
        width: 14,
        flexShrink: 0
      }
    }, open ? "▼" : "▶"), React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 800,
        fontSize: 15
      }
    }, monthTitle(g.key)), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 12,
        color: T.sub
      }
    }, plural(g.txs.length, "movimento", "movimentos"), " \xB7 ", React.createElement("span", {
      style: {
        color: T.green
      }
    }, sgnEurC(g.inC)), " \xB7 ", React.createElement("span", {
      style: {
        color: T.brand
      }
    }, sgnEurC(-g.outC)))), React.createElement("span", {
      style: {
        fontWeight: 800,
        fontSize: 15,
        color: net >= 0 ? T.green : T.brand,
        flexShrink: 0
      }
    }, sgnEurC(net))), open && g.txs.map(function (tx, i) {
      var _tx$id;
      return React.createElement("div", {
        key: "".concat(tx.type, "-").concat((_tx$id = tx.id) !== null && _tx$id !== void 0 ? _tx$id : i),
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
      }, fmtDay(tx.day))), React.createElement("p", {
        style: {
          margin: 0,
          fontWeight: 800,
          fontSize: 17,
          color: tx.type === "in" ? T.green : T.brand
        }
      }, tx.type === "in" ? "+" : "-", Math.abs(tx.amount), "\u20AC"), canEditExp && tx.type === "out" && React.createElement("div", {
        style: {
          display: "flex",
          flexShrink: 0
        }
      }, React.createElement("button", {
        onClick: function onClick() {
          return setEditingExp(tx);
        },
        "aria-label": "Editar despesa",
        style: {
          minWidth: 44,
          minHeight: 44,
          background: "none",
          border: "none",
          fontSize: 16,
          cursor: "pointer"
        }
      }, "\u270F\uFE0F"), React.createElement("button", {
        onClick: function onClick() {
          if (window.confirm("Apagar a despesa \"".concat(tx.label, "\" (").concat(Math.abs(tx.amount), "\u20AC)? N\xE3o tem volta."))) onDeleteExpense(tx.id);
        },
        "aria-label": "Apagar despesa",
        style: {
          minWidth: 44,
          minHeight: 44,
          background: "none",
          border: "none",
          fontSize: 16,
          cursor: "pointer"
        }
      }, "\uD83D\uDDD1\uFE0F")));
    }));
  }), editingExp && canEditExp && React.createElement(AddExpenseModal, {
    team: team,
    expense: editingExp,
    onSave: onEditExpense,
    onClose: function onClose() {
      return setEditingExp(null);
    }
  }));
};
var adminErrPt = function adminErrPt(e) {
  var m = String(e && e.message ? e.message : "");
  if (/not authorized|permission denied|42501|Sem permissão|403/i.test(m)) return "Sem permissão";
  if (/Failed to fetch|NetworkError|Load failed/i.test(m)) return "Sem ligação à internet";
  if (/JWT|expired/i.test(m)) return "A sessão expirou: volta a entrar";
  if (/resposta inválida/i.test(m)) return "Resposta inválida do servidor";
  return errPt(e, "erro desconhecido");
};
var ROLE_PT = {
  admin: "admin",
  player: "jogador",
  treinador: "treinador",
  diretor: "diretor"
};
var eur = function eur(c) {
  return "".concat((c / 100).toFixed(2), "\u20AC");
};
var dotsDay = function dotsDay(v) {
  var d = localDay(v);
  return d ? "".concat(d.slice(8), ".").concat(d.slice(5, 7), ".").concat(d.slice(0, 4)) : null;
};
var ADMIN_DAY = 86400000;
var adminAgeMs = function adminAgeMs(iso) {
  var t = iso ? Date.parse(iso) : NaN;
  return isNaN(t) ? Infinity : Date.now() - t;
};
var parseAdminUsers = function parseAdminUsers(tot, ov) {
  var bad = function bad() {
    return new Error("resposta inválida");
  };
  var t = Array.isArray(tot) ? tot[0] : tot;
  var num = function num(v) {
    return v !== null && v !== "" && v !== undefined && Number.isFinite(Number(v)) ? Number(v) : null;
  };
  if (!t || _typeof(t) !== "object" || [t.users, t.active_7d, t.active_30d].some(function (v) {
    return num(v) === null;
  })) throw bad();
  var list = ov == null ? [] : ov;
  if (!Array.isArray(list)) throw bad();
  var cents = function cents(v) {
    if (v == null || v === "") return 0;
    var n = Number(v);
    if (!Number.isFinite(n)) throw bad();
    return Math.round(n * 100);
  };
  var count = function count(v, dflt) {
    if (v == null || v === "") return dflt;
    var n = Number(v);
    if (!Number.isFinite(n)) throw bad();
    return n;
  };
  var teams = list.map(function (x) {
    if (!x || _typeof(x) !== "object" || x.id == null) throw bad();
    var mem = x.members == null ? [] : x.members;
    if (!Array.isArray(mem)) throw bad();
    var members = mem.map(function (m, i) {
      if (!m || _typeof(m) !== "object") throw bad();
      var fl = m.fines == null ? [] : m.fines;
      if (!Array.isArray(fl)) throw bad();
      return {
        key: m.member_id != null ? String(m.member_id) : "".concat(x.id, "-").concat(i),
        role: m.role || "",
        name: (m.name || "").trim(),
        email: (m.email || "").trim(),
        last: m.last_sign_in_at || null,
        finesCount: count(m.fines_count, fl.length),
        total: cents(m.fines_total),
        unpaid: cents(m.unpaid_total),
        fines: fl.map(function (f) {
          return {
            reason: f && f.reason || "",
            amount: cents(f && f.amount),
            paid: !!(f && f.paid),
            date: f && f.date || null,
            paidAt: f && f.paid_at || null
          };
        })
      };
    });
    return {
      id: String(x.id),
      name: x.name || "",
      emoji: x.emoji || "⚽",
      season: x.season || "",
      membersCount: count(x.members_count, members.length),
      playersCount: count(x.players_count, members.filter(function (m) {
        return m.role === "player";
      }).length),
      unpaid: members.reduce(function (a, m) {
        return a + m.unpaid;
      }, 0),
      members: members
    };
  });
  return {
    totals: {
      users: num(t.users),
      a7: num(t.active_7d),
      a30: num(t.active_30d)
    },
    teams: teams
  };
};
var AdminUsersSection = function AdminUsersSection(_ref104) {
  var act = _ref104.act,
    onRetry = _ref104.onRetry,
    StatCard = _ref104.StatCard;
  var _useState253 = useState(""),
    _useState254 = _slicedToArray(_useState253, 2),
    q = _useState254[0],
    setQ = _useState254[1];
  var _useState255 = useState("all"),
    _useState256 = _slicedToArray(_useState255, 2),
    filter = _useState256[0],
    setFilter = _useState256[1];
  var _useState257 = useState({}),
    _useState258 = _slicedToArray(_useState257, 2),
    open = _useState258[0],
    setOpen = _useState258[1];
  var _useState259 = useState({}),
    _useState260 = _slicedToArray(_useState259, 2),
    openM = _useState260[0],
    setOpenM = _useState260[1];
  var num = function num(v) {
    return v === null || v === undefined ? "—" : String(v);
  };
  var tt = act.data && act.data.totals;
  var cards = React.createElement("div", {
    style: {
      display: "flex",
      gap: "clamp(4px, 1.5vw, 8px)",
      marginBottom: 12
    }
  }, React.createElement(StatCard, {
    cols: 3,
    label: "Utilizadores",
    value: act.status === "loading" ? "…" : num(tt && tt.users),
    color: "#6c47ff"
  }), React.createElement(StatCard, {
    cols: 3,
    label: "Ativos 7 dias",
    value: act.status === "loading" ? "…" : num(tt && tt.a7),
    color: T.navy
  }), React.createElement(StatCard, {
    cols: 3,
    label: "Ativos 30 dias",
    value: act.status === "loading" ? "…" : num(tt && tt.a30),
    color: T.navy
  }));
  if (act.status === "loading" || act.status === "idle") return React.createElement(React.Fragment, null, cards, React.createElement(Spinner, {
    msg: "A carregar utilizadores..."
  }));
  if (act.status === "error") return React.createElement(React.Fragment, null, cards, React.createElement("div", {
    role: "alert",
    style: {
      background: "#FFE5E5",
      borderRadius: 12,
      padding: "12px 16px",
      fontSize: 14,
      color: "#8A0000",
      marginBottom: 12
    }
  }, "N\xE3o foi poss\xEDvel carregar a atividade: ", act.error), React.createElement("button", {
    onClick: onRetry,
    style: {
      width: "100%",
      minHeight: 48,
      borderRadius: 14,
      border: "none",
      background: T.navy,
      color: "#fff",
      fontSize: 15,
      fontWeight: 800,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Tentar novamente"));
  var teams = act.data.teams;
  var nq = normTxt(q);
  var filtering = nq !== "" || filter !== "all";
  var keepText = function keepText(m) {
    return !nq || normTxt(m.name).includes(nq) || normTxt(m.email).includes(nq);
  };
  var keepAge = function keepAge(m) {
    var age = adminAgeMs(m.last);
    if (filter === "a7") return age <= 7 * ADMIN_DAY;
    if (filter === "i30") return !(age <= 30 * ADMIN_DAY);
    return true;
  };
  var shown = teams.map(function (tm) {
    var byTeam = nq !== "" && normTxt(tm.name).includes(nq);
    return {
      tm: tm,
      byTeam: byTeam,
      ms: tm.members.filter(function (m) {
        return keepAge(m) && (byTeam || keepText(m));
      })
    };
  }).filter(function (x) {
    return !filtering || x.ms.length > 0 || x.byTeam && filter === "all";
  });
  var chips = [["all", "Todos"], ["a7", "Ativos 7 dias"], ["i30", "Inativos 30+ dias"]];
  var isOpen = function isOpen(id) {
    return id in open ? open[id] : filtering;
  };
  return React.createElement(React.Fragment, null, cards, React.createElement(FI, {
    type: "search",
    placeholder: "Pesquisar por nome, email ou equipa",
    "aria-label": "Pesquisar por nome, email ou equipa",
    value: q,
    onChange: function onChange(e) {
      setQ(e.target.value);
      setOpen({});
    },
    style: {
      marginBottom: 8
    }
  }), React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      marginBottom: 10
    }
  }, chips.map(function (_ref105) {
    var _ref106 = _slicedToArray(_ref105, 2),
      id = _ref106[0],
      label = _ref106[1];
    return React.createElement("button", {
      key: id,
      "aria-pressed": filter === id,
      onClick: function onClick() {
        setFilter(id);
        setOpen({});
      },
      style: {
        minHeight: 44,
        padding: "0 14px",
        borderRadius: 22,
        border: "1.5px solid ".concat(filter === id ? T.navy : T.border),
        background: filter === id ? T.navy : "transparent",
        color: filter === id ? "#fff" : T.sub,
        fontSize: 13,
        fontWeight: 700,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, label);
  })), React.createElement("p", {
    style: {
      margin: "0 0 10px",
      fontSize: 12,
      color: "#5F5F66"
    }
  }, plural(shown.length, "equipa", "equipas"), filtering ? " com ".concat(plural(shown.reduce(function (a, x) {
    return a + x.ms.length;
  }, 0), "membro", "membros")) : ""), shown.length === 0 && React.createElement("p", {
    style: {
      textAlign: "center",
      color: "#5F5F66",
      padding: "24px 0",
      fontSize: 14
    }
  }, filtering ? "Nenhum membro encontrado" : "Sem equipas"), shown.map(function (_ref107) {
    var tm = _ref107.tm,
      ms = _ref107.ms;
    var o = isOpen(tm.id);
    return React.createElement("div", {
      key: tm.id,
      "data-team": tm.id,
      style: {
        background: T.card,
        borderRadius: 14,
        marginBottom: 10,
        overflow: "hidden"
      }
    }, React.createElement("button", {
      onClick: function onClick() {
        return setOpen(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, tm.id, !o));
        });
      },
      "aria-expanded": o,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        width: "100%",
        minHeight: 56,
        padding: "12px 16px",
        background: "none",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "inherit",
        boxSizing: "border-box"
      }
    }, React.createElement("span", {
      style: {
        fontSize: 26
      }
    }, tm.emoji), React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, React.createElement("span", {
      style: {
        display: "block",
        fontWeight: 800,
        fontSize: 15,
        color: T.text,
        overflowWrap: "anywhere"
      }
    }, tm.name || "Sem nome"), React.createElement("span", {
      style: {
        display: "block",
        fontSize: 12,
        color: "#5F5F66"
      }
    }, tm.season ? "".concat(tm.season, " \xB7 ") : "", plural(tm.playersCount, "jogador", "jogadores"), " \xB7 ", plural(tm.membersCount, "membro", "membros"))), React.createElement("span", {
      style: {
        textAlign: "right",
        flexShrink: 0
      }
    }, React.createElement("span", {
      style: {
        display: "block",
        fontWeight: 900,
        fontSize: 15,
        color: tm.unpaid > 0 ? T.brand : T.navy
      }
    }, eur(tm.unpaid)), React.createElement("span", {
      style: {
        display: "block",
        fontSize: 11,
        color: "#5F5F66"
      }
    }, "por pagar")), React.createElement("span", {
      "aria-hidden": "true",
      style: {
        fontSize: 12,
        color: T.sub
      }
    }, o ? "▲" : "▼")), o && React.createElement("div", {
      style: {
        padding: "0 12px 12px"
      }
    }, ms.length === 0 && React.createElement("p", {
      style: {
        margin: "4px 4px 0",
        fontSize: 13,
        color: "#5F5F66"
      }
    }, "Sem membros"), ms.map(function (m) {
      var mo = !!openM[tm.id + "/" + m.key];
      var acc = dotsDay(m.last);
      return React.createElement("div", {
        key: m.key,
        "data-member": m.key,
        style: {
          background: T.bg,
          borderRadius: 12,
          marginTop: 8,
          overflow: "hidden"
        }
      }, React.createElement("button", {
        onClick: function onClick() {
          return setOpenM(function (p) {
            return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, tm.id + "/" + m.key, !mo));
          });
        },
        "aria-expanded": mo,
        style: {
          display: "block",
          width: "100%",
          padding: "10px 12px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          fontFamily: "inherit",
          boxSizing: "border-box"
        }
      }, React.createElement("span", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8
        }
      }, React.createElement("span", {
        style: {
          flex: 1,
          minWidth: 0,
          fontWeight: 800,
          fontSize: 14,
          color: T.text,
          overflowWrap: "anywhere"
        }
      }, m.name || "Sem nome"), React.createElement("span", {
        style: {
          fontSize: 11,
          fontWeight: 700,
          color: T.navy,
          border: "1px solid ".concat(T.border),
          borderRadius: 6,
          padding: "1px 6px",
          flexShrink: 0
        }
      }, ROLE_PT[m.role] || m.role || "membro"), React.createElement("span", {
        "aria-hidden": "true",
        style: {
          fontSize: 11,
          color: T.sub
        }
      }, mo ? "▲" : "▼")), React.createElement("span", {
        style: {
          display: "block",
          fontSize: 12,
          color: m.email ? T.text : "#5F5F66",
          marginTop: 2,
          overflowWrap: "anywhere"
        }
      }, m.email || "Sem conta"), React.createElement("span", {
        style: {
          display: "block",
          fontSize: 12,
          color: "#5F5F66",
          marginTop: 2
        }
      }, "\xDAltimo acesso: ", acc || "Nunca"), React.createElement("span", {
        style: {
          display: "block",
          fontSize: 12,
          color: "#5F5F66",
          marginTop: 2
        }
      }, plural(m.finesCount, "multa", "multas"), " \xB7 total ", eur(m.total), " \xB7 por pagar ", eur(m.unpaid))), mo && React.createElement("div", {
        style: {
          padding: "0 12px 10px"
        }
      }, m.fines.length === 0 && React.createElement("p", {
        style: {
          margin: "0",
          fontSize: 12,
          color: "#5F5F66"
        }
      }, "Sem multas"), m.fines.map(function (f, i) {
        var d = dotsDay(f.date),
          pd = dotsDay(f.paidAt);
        return React.createElement("div", {
          key: i,
          "data-fine": true,
          style: {
            display: "flex",
            gap: 8,
            alignItems: "flex-start",
            padding: "6px 0",
            borderTop: "1px solid ".concat(T.border)
          }
        }, React.createElement("div", {
          style: {
            flex: 1,
            minWidth: 0
          }
        }, React.createElement("p", {
          style: {
            margin: 0,
            fontSize: 13,
            fontWeight: 600,
            overflowWrap: "anywhere"
          }
        }, f.reason || "Sem motivo"), React.createElement("p", {
          style: {
            margin: "1px 0 0",
            fontSize: 11,
            color: "#5F5F66"
          }
        }, d || "Sem data", f.paid ? " \xB7 paga em ".concat(pd || "data desconhecida") : "")), React.createElement("div", {
          style: {
            textAlign: "right",
            flexShrink: 0
          }
        }, React.createElement("p", {
          style: {
            margin: 0,
            fontSize: 13,
            fontWeight: 800
          }
        }, eur(f.amount)), React.createElement("p", {
          style: {
            margin: 0,
            fontSize: 11,
            fontWeight: 700,
            color: f.paid ? T.green : T.brand
          }
        }, f.paid ? "Paga" : "Por pagar")));
      })));
    })));
  }));
};
var PushFailsCard = function PushFailsCard() {
  var _useState261 = useState(readPushFails),
    _useState262 = _slicedToArray(_useState261, 2),
    f = _useState262[0],
    setF = _useState262[1];
  return React.createElement("div", {
    "data-push-fails": true,
    style: {
      background: T.card,
      borderRadius: 14,
      padding: "clamp(10px, 3vw, 14px) clamp(10px, 3vw, 16px)",
      marginBottom: 8
    }
  }, React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontSize: "clamp(10px, 2.9vw, 12px)",
      fontWeight: 700,
      color: T.sub,
      textTransform: "uppercase",
      letterSpacing: 0.4
    }
  }, "Falhas de envio de push"), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "clamp(18.7px, 5.8vw, 26px)",
      lineHeight: 1.15,
      fontWeight: 900,
      color: f.count > 0 ? "#C94F00" : T.navy
    }
  }, f.count), React.createElement("p", {
    style: {
      margin: "2px 0 0",
      fontSize: "clamp(11px, 3.2vw, 13px)",
      color: "#5F5F66",
      overflowWrap: "anywhere"
    }
  }, f.count > 0 ? "\xDAltima: ".concat(f.last || "—").concat(f.at ? " \xB7 ".concat(new Date(f.at).toLocaleString("pt-PT")) : "") : "Nenhuma neste dispositivo.", " (contador local, s\xF3 deste dispositivo)"), f.count > 0 && React.createElement("button", {
    onClick: function onClick() {
      clearPushFails();
      setF(readPushFails());
    },
    style: {
      marginTop: 8,
      minHeight: 44,
      padding: "0 16px",
      borderRadius: 12,
      border: "2px solid #1a1a1f",
      background: "transparent",
      color: "#1a1a1f",
      fontSize: 14,
      fontWeight: 800,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Repor contador"));
};
var MESES_CURTOS_PT = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
var eurPt = function eurPt(n) {
  return "".concat(Number(n).toLocaleString("pt-PT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }), "\u20AC");
};
var parseGrowth = function parseGrowth(raw) {
  var bad = function bad() {
    return new Error("resposta inválida");
  };
  var g = Array.isArray(raw) ? raw[0] : raw;
  if (!g || _typeof(g) !== "object") throw bad();
  var num = function num(v, required) {
    if (v === null || v === undefined || v === "") {
      if (required) throw bad();
      return 0;
    }
    var n = Number(v);
    if (!Number.isFinite(n)) throw bad();
    return n;
  };
  var bm = g.by_month == null ? [] : g.by_month;
  if (!Array.isArray(bm)) throw bad();
  var months = bm.map(function (m) {
    if (!m || typeof m.month !== "string" || !/^\d{4}-(0[1-9]|1[0-2])$/.test(m.month)) throw bad();
    return {
      month: m.month,
      users: num(m.new_users),
      teams: num(m.new_teams)
    };
  }).sort(function (a, b) {
    return a.month < b.month ? 1 : -1;
  }).slice(0, 6);
  var finesTotal = num(g.fines_total),
    finesUnpaid = num(g.fines_unpaid),
    amountTotal = num(g.amount_total),
    amountUnpaid = num(g.amount_unpaid);
  var pct = function pct(given, a, b) {
    return given === null || given === undefined || given === "" ? b > 0 ? a / b * 100 : 0 : num(given);
  };
  return {
    activeTeams: num(g.active_teams_30d, true),
    newTeams: num(g.new_teams_30d, true),
    newUsers: num(g.new_users_30d, true),
    push: num(g.push_subscriptions, true),
    finesTotal: finesTotal,
    finesUnpaid: finesUnpaid,
    pctCount: Math.round(pct(g.unpaid_pct_count, finesUnpaid, finesTotal)),
    amountTotal: amountTotal,
    amountUnpaid: amountUnpaid,
    pctAmount: Math.round(pct(g.unpaid_pct_amount, amountUnpaid, amountTotal)),
    months: months
  };
};
var GrowthSection = function GrowthSection(_ref108) {
  var g = _ref108.g,
    onRetry = _ref108.onRetry,
    StatCard = _ref108.StatCard;
  var head = React.createElement("p", {
    style: {
      margin: "20px 0 8px",
      fontSize: 12,
      fontWeight: 700,
      color: "#5F5F66",
      textTransform: "uppercase",
      letterSpacing: 0.5
    }
  }, "\uD83D\uDCC8 Crescimento");
  if (g.status === "idle" || g.status === "loading") return React.createElement(React.Fragment, null, head, React.createElement("p", {
    role: "status",
    style: {
      margin: "4px 0",
      fontSize: 14,
      color: "#5F5F66"
    }
  }, "A carregar crescimento..."));
  if (g.status === "error") return React.createElement(React.Fragment, null, head, React.createElement("div", {
    role: "alert",
    style: {
      background: "#FFE5E5",
      borderRadius: 12,
      padding: "12px 16px",
      fontSize: 14,
      color: "#8A0000",
      marginBottom: 10
    }
  }, "N\xE3o foi poss\xEDvel carregar o crescimento: ", g.error), React.createElement("button", {
    onClick: onRetry,
    style: {
      width: "100%",
      minHeight: 48,
      borderRadius: 14,
      border: "none",
      background: T.navy,
      color: "#fff",
      fontSize: 15,
      fontWeight: 800,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Tentar novamente"));
  var d = g.data;
  var pctCard = function pctCard(label, pct, text) {
    return React.createElement("div", {
      "data-growth": "pct",
      style: {
        background: T.card,
        borderRadius: 14,
        padding: "clamp(10px, 3vw, 14px) clamp(10px, 3vw, 16px)",
        marginBottom: 8
      }
    }, React.createElement("p", {
      style: {
        margin: "0 0 4px",
        fontSize: "clamp(10px, 2.9vw, 12px)",
        fontWeight: 700,
        color: T.sub,
        textTransform: "uppercase",
        letterSpacing: 0.4
      }
    }, label), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "clamp(18.7px, 5.8vw, 26px)",
        lineHeight: 1.15,
        fontWeight: 900,
        color: "#C94F00"
      }
    }, pct, "%"), React.createElement("p", {
      style: {
        margin: "2px 0 0",
        fontSize: "clamp(11px, 3.2vw, 13px)",
        color: "#5F5F66",
        overflowWrap: "anywhere"
      }
    }, text));
  };
  return React.createElement(React.Fragment, null, head, React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 8
    }
  }, React.createElement(StatCard, {
    label: "Equipas ativas",
    value: d.activeTeams,
    color: T.navy,
    sub: "\xFAltimos 30 dias"
  }), React.createElement(StatCard, {
    label: "Novas equipas",
    value: d.newTeams,
    color: T.green,
    sub: "\xFAltimos 30 dias"
  })), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 8
    }
  }, React.createElement(StatCard, {
    label: "Novos utilizadores",
    value: d.newUsers,
    color: "#6c47ff",
    sub: "\xFAltimos 30 dias"
  }), React.createElement(StatCard, {
    label: "Subscri\xE7\xF5es push",
    value: d.push,
    color: T.navy
  })), React.createElement(PushFailsCard, null), pctCard("% por pagar · nº de multas", d.pctCount, "".concat(d.finesUnpaid, " de ").concat(d.finesTotal, " multas por pagar")), pctCard("% por pagar · valor", d.pctAmount, "".concat(eurPt(d.amountUnpaid), " de ").concat(eurPt(d.amountTotal))), React.createElement("p", {
    style: {
      margin: "16px 0 8px",
      fontSize: 12,
      fontWeight: 700,
      color: "#5F5F66",
      textTransform: "uppercase",
      letterSpacing: 0.5
    }
  }, "\xDAltimos 6 meses"), d.months.length === 0 && React.createElement("p", {
    style: {
      margin: "4px 0",
      fontSize: 14,
      color: "#5F5F66"
    }
  }, "Sem dados por m\xEAs."), d.months.map(function (m) {
    return React.createElement("div", {
      key: m.month,
      "data-growth": "month",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
        flexWrap: "wrap",
        background: T.card,
        borderRadius: 12,
        padding: "10px 14px",
        marginBottom: 6
      }
    }, React.createElement("span", {
      style: {
        fontWeight: 800,
        fontSize: 14
      }
    }, MESES_CURTOS_PT[Number(m.month.slice(5)) - 1], " ", m.month.slice(0, 4)), React.createElement("span", {
      style: {
        fontSize: 13,
        color: "#5F5F66"
      }
    }, plural(m.users, "novo utilizador", "novos utilizadores"), " \xB7 ", plural(m.teams, "nova equipa", "novas equipas")));
  }));
};
var locNorm = function locNorm(v) {
  return String(v == null ? "" : v).replace(/\s+/g, " ").trim();
};
var locKey = function locKey(v) {
  return locNorm(v).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};
var locTitle = function locTitle(v) {
  return locNorm(v).toLowerCase().split(" ").map(function (w, i) {
    return i > 0 && ["de", "da", "do", "das", "dos", "e"].includes(w) ? w : w.charAt(0).toUpperCase() + w.slice(1);
  }).join(" ");
};
var locPostal = function locPostal(postal, country) {
  var p = locNorm(postal);
  var c = locKey(country);
  if (/^[1-9]\d{3}$/.test(p)) return p;
  if ((c === "portugal" || c === "pt") && /^[1-9]\d{3}-\d{3}$/.test(p)) return p;
  return "";
};
var parseLocations = function parseLocations(raw) {
  if (!Array.isArray(raw)) throw new Error("resposta inválida");
  var map = {};
  raw.forEach(function (r) {
    if (!r || _typeof(r) !== "object" || !r.id) return;
    map[r.id] = {
      country: locNorm(r.country),
      city: locNorm(r.city),
      postal: locPostal(r.postal, r.country),
      sport: locNorm(r.sport)
    };
  });
  return map;
};
var locLine = function locLine(l) {
  if (!l) return "Sem localização";
  var parts = [l.city, l.country].filter(Boolean).map(locTitle).join(", ");
  return parts ? parts : "Sem localização";
};
var locCount = function locCount(list, field) {
  var g = {};
  list.forEach(function (l) {
    var k = locKey(l[field]);
    if (!k) return;
    if (!g[k]) g[k] = {
      label: locTitle(l[field]),
      n: 0
    };
    g[k].n++;
  });
  return Object.values(g).sort(function (a, b) {
    return b.n - a.n || a.label.localeCompare(b.label, "pt");
  });
};
var LocationSummary = function LocationSummary(_ref109) {
  var locs = _ref109.locs,
    teams = _ref109.teams;
  var list = teams.map(function (t) {
    return locs[t.id];
  }).filter(Boolean);
  var row = function row(label, items, attr) {
    return items.length > 0 && React.createElement("p", {
      "data-loc": attr,
      style: {
        margin: "0 0 6px",
        fontSize: 14,
        fontWeight: 700,
        color: "#1a1a1f",
        lineHeight: 1.5
      }
    }, React.createElement("span", {
      style: {
        color: "#5F5F66",
        fontWeight: 800
      }
    }, label, ": "), items.slice(0, 10).map(function (x) {
      return "".concat(x.label, " ").concat(x.n);
    }).join(" · "), items.length > 10 ? " \xB7 +".concat(items.length - 10) : "");
  };
  var countries = locCount(list, "country"),
    cities = locCount(list, "city");
  if (!countries.length && !cities.length) return null;
  return React.createElement("div", {
    "data-loc": "summary",
    style: {
      background: "#fff",
      border: "2px solid #1a1a1f",
      borderRadius: 14,
      padding: "12px 14px",
      marginBottom: 12
    }
  }, row("Países", countries, "countries"), row("Cidades", cities, "cities"));
};
var AppAdminTab = function AppAdminTab(_ref110) {
  var token = _ref110.token,
    onBack = _ref110.onBack,
    onOpenTeam = _ref110.onOpenTeam,
    initialSection = _ref110.initialSection,
    initialTeams = _ref110.initialTeams;
  var _useState263 = useState(null),
    _useState264 = _slicedToArray(_useState263, 2),
    stats = _useState264[0],
    setStats = _useState264[1];
  var _useState265 = useState(null),
    _useState266 = _slicedToArray(_useState265, 2),
    updatedAt = _useState266[0],
    setUpdatedAt = _useState266[1];
  var _useState267 = useState(Array.isArray(initialTeams) ? initialTeams : []),
    _useState268 = _slicedToArray(_useState267, 2),
    teams = _useState268[0],
    setTeams = _useState268[1];
  var _useState269 = useState(initialSection || "stats"),
    _useState270 = _slicedToArray(_useState269, 2),
    section = _useState270[0],
    setSection = _useState270[1];
  var _useState271 = useState(null),
    _useState272 = _slicedToArray(_useState271, 2),
    selectedTeam = _useState272[0],
    setSelectedTeam = _useState272[1];
  var _useState273 = useState(!(Array.isArray(initialTeams) && initialTeams.length)),
    _useState274 = _slicedToArray(_useState273, 2),
    loading = _useState274[0],
    setLoading = _useState274[1];
  var _useState275 = useState({
      status: "idle",
      data: null,
      error: ""
    }),
    _useState276 = _slicedToArray(_useState275, 2),
    act = _useState276[0],
    setAct = _useState276[1];
  var loadActivity = function () {
    var _ref111 = _asyncToGenerator(_regenerator().m(function _callee37() {
      var _yield$Promise$all, _yield$Promise$all2, tot, ov, _t41;
      return _regenerator().w(function (_context37) {
        while (1) switch (_context37.p = _context37.n) {
          case 0:
            setAct({
              status: "loading",
              data: null,
              error: ""
            });
            _context37.p = 1;
            _context37.n = 2;
            return Promise.all([rpcCall('get_app_activity_totals', {}, token), rpcCall('get_admin_teams_overview', {}, token)]);
          case 2:
            _yield$Promise$all = _context37.v;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            tot = _yield$Promise$all2[0];
            ov = _yield$Promise$all2[1];
            setAct({
              status: "ok",
              data: parseAdminUsers(tot, ov),
              error: ""
            });
            _context37.n = 4;
            break;
          case 3:
            _context37.p = 3;
            _t41 = _context37.v;
            setAct({
              status: "error",
              data: null,
              error: adminErrPt(_t41)
            });
          case 4:
            return _context37.a(2);
        }
      }, _callee37, null, [[1, 3]]);
    }));
    return function loadActivity() {
      return _ref111.apply(this, arguments);
    };
  }();
  useEffect(function () {
    if (section === "users" && act.status === "idle") loadActivity();
  }, [section]);
  var _useState277 = useState({
      status: "idle",
      data: null,
      error: ""
    }),
    _useState278 = _slicedToArray(_useState277, 2),
    growth = _useState278[0],
    setGrowth = _useState278[1];
  var loadGrowth = function () {
    var _ref112 = _asyncToGenerator(_regenerator().m(function _callee38() {
      var _t42, _t43, _t44, _t45;
      return _regenerator().w(function (_context38) {
        while (1) switch (_context38.p = _context38.n) {
          case 0:
            setGrowth({
              status: "loading",
              data: null,
              error: ""
            });
            _context38.p = 1;
            _t42 = setGrowth;
            _t43 = parseGrowth;
            _context38.n = 2;
            return rpcCall('get_app_growth_stats', {}, token);
          case 2:
            _t44 = _t43(_context38.v);
            _t42({
              status: "ok",
              data: _t44,
              error: ""
            });
            _context38.n = 4;
            break;
          case 3:
            _context38.p = 3;
            _t45 = _context38.v;
            setGrowth({
              status: "error",
              data: null,
              error: adminErrPt(_t45)
            });
          case 4:
            return _context38.a(2);
        }
      }, _callee38, null, [[1, 3]]);
    }));
    return function loadGrowth() {
      return _ref112.apply(this, arguments);
    };
  }();
  useEffect(function () {
    if (section === "stats" && growth.status === "idle") loadGrowth();
  }, [section]);
  var _useAdminFeedback = useAdminFeedback(token),
    _useAdminFeedback2 = _slicedToArray(_useAdminFeedback, 2),
    fb = _useAdminFeedback2[0],
    loadFb = _useAdminFeedback2[1];
  useEffect(function () {
    if (section === "stats" && fb.status === "idle") loadFb();
  }, [section]);
  var _useState279 = useState({
      status: "idle",
      data: null,
      error: ""
    }),
    _useState280 = _slicedToArray(_useState279, 2),
    locs = _useState280[0],
    setLocs = _useState280[1];
  var _useState281 = useState(""),
    _useState282 = _slicedToArray(_useState281, 2),
    teamQ = _useState282[0],
    setTeamQ = _useState282[1];
  var loadLocs = function () {
    var _ref113 = _asyncToGenerator(_regenerator().m(function _callee39() {
      var _t46, _t47, _t48, _t49;
      return _regenerator().w(function (_context39) {
        while (1) switch (_context39.p = _context39.n) {
          case 0:
            setLocs({
              status: "loading",
              data: null,
              error: ""
            });
            _context39.p = 1;
            _t46 = setLocs;
            _t47 = parseLocations;
            _context39.n = 2;
            return rpcCall('get_admin_teams_locations', {}, token);
          case 2:
            _t48 = _t47(_context39.v);
            _t46({
              status: "ok",
              data: _t48,
              error: ""
            });
            _context39.n = 4;
            break;
          case 3:
            _context39.p = 3;
            _t49 = _context39.v;
            setLocs({
              status: "error",
              data: null,
              error: adminErrPt(_t49)
            });
          case 4:
            return _context39.a(2);
        }
      }, _callee39, null, [[1, 3]]);
    }));
    return function loadLocs() {
      return _ref113.apply(this, arguments);
    };
  }();
  useEffect(function () {
    if (section === "teams" && locs.status === "idle") loadLocs();
  }, [section]);
  var _useState283 = useState(""),
    _useState284 = _slicedToArray(_useState283, 2),
    loadErr = _useState284[0],
    setLoadErr = _useState284[1];
  var _useState285 = useState(0),
    _useState286 = _slicedToArray(_useState285, 2),
    loadTick = _useState286[0],
    setLoadTick = _useState286[1];
  useEffect(function () {
    var load = function () {
      var _ref114 = _asyncToGenerator(_regenerator().m(function _callee40() {
        var rpc, _yield$Promise$all3, _yield$Promise$all4, sr, tr, _t50, _t51, _t52, _t53;
        return _regenerator().w(function (_context40) {
          while (1) switch (_context40.p = _context40.n) {
            case 0:
              if (loadTick > 0) {
                setLoading(true);
                setLoadErr("");
              }
              _context40.p = 1;
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
              _context40.n = 2;
              return Promise.all([rpc("get_app_admin_stats"), rpc("get_all_teams_admin")]);
            case 2:
              _yield$Promise$all3 = _context40.v;
              _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 2);
              sr = _yield$Promise$all4[0];
              tr = _yield$Promise$all4[1];
              if (!sr.ok) {
                _context40.n = 4;
                break;
              }
              _t50 = setStats;
              _context40.n = 3;
              return sr.json();
            case 3:
              _t50(_context40.v);
            case 4:
              if (!tr.ok) {
                _context40.n = 7;
                break;
              }
              _t51 = setTeams;
              _context40.n = 5;
              return tr.json();
            case 5:
              _t52 = _context40.v;
              if (_t52) {
                _context40.n = 6;
                break;
              }
              _t52 = [];
            case 6:
              _t51(_t52);
            case 7:
              if (!sr.ok || !tr.ok) setLoadErr(adminErrPt(new Error("erro ".concat(!sr.ok ? sr.status : tr.status))));
              setUpdatedAt(new Date());
              _context40.n = 9;
              break;
            case 8:
              _context40.p = 8;
              _t53 = _context40.v;
              console.error(_t53);
              setLoadErr(adminErrPt(_t53));
            case 9:
              setLoading(false);
            case 10:
              return _context40.a(2);
          }
        }, _callee40, null, [[1, 8]]);
      }));
      return function load() {
        return _ref114.apply(this, arguments);
      };
    }();
    load();
  }, [token, loadTick]);
  if (loading) return React.createElement(Spinner, {
    msg: "A carregar painel admin..."
  });
  if (selectedTeam) {
    var t = selectedTeam;
    var has = function has(v) {
      return v !== undefined && v !== null && v !== "";
    };
    var lastAct = t.last_activity_at || t.last_activity || null;
    var rows = [["👥", "Membros", t.members_count], ["📅", "Treinos e jogos", t.trainings_count], ["🟥", "Multas", t.fines_count], ["💶", "Total de multas", has(t.fines_total) ? "".concat(t.fines_total, "\u20AC") : null], ["💸", "Por pagar", has(t.unpaid_total) ? "".concat(t.unpaid_total, "\u20AC") : null], ["🕒", "Última atividade", lastAct ? fmtDay(lastAct) : null]];
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
        minHeight: 44,
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
    }, t.emoji), React.createElement("div", null, React.createElement("h2", {
      style: {
        margin: 0,
        color: "#fff",
        fontSize: 20,
        fontWeight: 900
      }
    }, t.name), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        color: "rgba(255,255,255,0.5)"
      }
    }, t.season, " \xB7 ", plural(t.members_count, "membro", "membros"))))), React.createElement("div", {
      style: {
        padding: "16px"
      }
    }, onOpenTeam && React.createElement("button", {
      onClick: function onClick() {
        return onOpenTeam(t.id, teams);
      },
      style: {
        width: "100%",
        minHeight: 48,
        marginBottom: 12,
        background: T.navy,
        color: "#fff",
        border: "none",
        borderRadius: 14,
        fontSize: 15,
        fontWeight: 800,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, "Abrir equipa"), rows.map(function (_ref115) {
      var _ref116 = _slicedToArray(_ref115, 3),
        icon = _ref116[0],
        label = _ref116[1],
        val = _ref116[2];
      return React.createElement("div", {
        key: label,
        style: {
          background: T.card,
          borderRadius: 14,
          padding: "14px 16px",
          marginBottom: 8,
          display: "flex",
          alignItems: "center",
          gap: 12
        }
      }, React.createElement("span", {
        style: {
          fontSize: 22
        }
      }, icon), React.createElement("p", {
        style: {
          margin: 0,
          flex: 1,
          fontSize: 14,
          fontWeight: 600
        }
      }, label), React.createElement("p", {
        style: {
          margin: 0,
          fontSize: 18,
          fontWeight: 900,
          color: T.navy,
          whiteSpace: "nowrap"
        }
      }, has(val) ? val : "—"));
    }), React.createElement("p", {
      style: {
        margin: "12px 0 0",
        fontSize: 12,
        color: "#5F5F66"
      }
    }, "S\xF3 totais: o painel n\xE3o mostra nomes, emails nem valores por pessoa.")));
  }
  var StatCard = function StatCard(_ref117) {
    var label = _ref117.label,
      value = _ref117.value,
      color = _ref117.color,
      _ref117$cols = _ref117.cols,
      cols = _ref117$cols === void 0 ? 2 : _ref117$cols,
      sub = _ref117.sub;
    return React.createElement("div", {
      style: {
        background: T.card,
        borderRadius: 14,
        padding: "clamp(10px, 3vw, 14px) clamp(6px, 2.5vw, 16px)",
        flex: 1,
        minWidth: 0
      }
    }, React.createElement("p", {
      style: {
        margin: "0 0 4px",
        fontSize: "clamp(8.5px, 2.7vw, 11px)",
        fontWeight: 700,
        color: T.sub,
        textTransform: "uppercase",
        letterSpacing: "clamp(0px, 0.15vw, 0.5px)",
        whiteSpace: "nowrap",
        minWidth: 0
      }
    }, label), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: cols === 3 ? "clamp(18.7px, 6.4vw, 26px)" : "clamp(18.7px, 5.8vw, 26px)",
        lineHeight: 1.15,
        fontWeight: 900,
        color: color || T.navy,
        whiteSpace: "nowrap",
        minWidth: 0
      }
    }, value), sub && React.createElement("p", {
      style: {
        margin: "2px 0 0",
        fontSize: "clamp(9.5px, 2.9vw, 12px)",
        color: "#5F5F66",
        whiteSpace: "nowrap",
        minWidth: 0
      }
    }, sub));
  };
  var totalN = Number(stats && stats.fines_total),
    unpaidN = Number(stats && stats.fines_unpaid);
  var unpaidPct = totalN > 0 && Number.isFinite(unpaidN) ? Math.round(unpaidN / totalN * 100) : 0;
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
  }, React.createElement("button", {
    onClick: onBack,
    style: {
      minHeight: 44,
      background: "rgba(255,255,255,0.15)",
      border: "none",
      color: "#fff",
      borderRadius: 20,
      padding: "6px 14px",
      cursor: "pointer",
      fontFamily: "inherit",
      fontWeight: 700,
      marginBottom: 12,
      fontSize: 13
    }
  }, "\u2190 Voltar"), React.createElement("p", {
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
      color: "rgba(255,255,255,0.7)"
    }
  }, "Monitoriza\xE7\xE3o da plataforma"), updatedAt && React.createElement("p", {
    style: {
      margin: "2px 0 0",
      fontSize: 12,
      color: "rgba(255,255,255,0.7)"
    }
  }, "Atualizado \xE0s ", String(updatedAt.getHours()).padStart(2, "0"), ":", String(updatedAt.getMinutes()).padStart(2, "0"))), React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      padding: "12px 16px",
      background: T.card,
      borderBottom: "1px solid ".concat(T.border)
    }
  }, tabs.map(function (_ref118) {
    var _ref119 = _slicedToArray(_ref118, 2),
      id = _ref119[0],
      label = _ref119[1];
    return React.createElement("button", {
      key: id,
      onClick: function onClick() {
        return setSection(id);
      },
      style: {
        flex: 1,
        padding: "8px 4px",
        minHeight: 44,
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
  }, loadErr && React.createElement(LoadWarn, {
    id: "painel",
    onRetry: function onRetry() {
      return setLoadTick(function (t) {
        return t + 1;
      });
    }
  }, "N\xE3o foi poss\xEDvel carregar todos os dados do painel: ", loadErr), section === "stats" && stats && React.createElement(React.Fragment, null, React.createElement("div", {
    style: {
      display: "flex",
      gap: "clamp(4px, 1.5vw, 8px)",
      marginBottom: 8
    }
  }, React.createElement(StatCard, {
    cols: 3,
    label: "Equipas",
    value: stats.teams,
    color: T.navy
  }), React.createElement(StatCard, {
    cols: 3,
    label: "Utilizadores",
    value: stats.users,
    color: "#6c47ff"
  }), React.createElement(StatCard, {
    cols: 3,
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
    label: "Treinos/Jogos",
    value: stats.trainings,
    color: T.green
  })), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, React.createElement(StatCard, {
    label: "Total \u20AC",
    value: "".concat(stats.fines_total, "\u20AC"),
    color: T.brand
  }), React.createElement(StatCard, {
    label: "Por pagar",
    value: "".concat(stats.fines_unpaid, "\u20AC"),
    color: "#F76800",
    sub: "".concat(unpaidPct, "% do total")
  }))), section === "stats" && React.createElement(GrowthSection, {
    g: growth,
    onRetry: loadGrowth,
    StatCard: StatCard
  }), section === "stats" && React.createElement(FeedbackList, {
    st: fb,
    onRetry: loadFb
  }), section === "teams" && React.createElement(React.Fragment, null, teams.length === 0 && React.createElement("p", {
    style: {
      color: T.sub,
      textAlign: "center",
      padding: "20px 0"
    }
  }, "Nenhuma equipa ainda"), locs.status === "loading" && React.createElement("p", {
    role: "status",
    style: {
      margin: "0 0 10px",
      fontSize: 13,
      fontWeight: 700,
      color: "#5F5F66"
    }
  }, "A carregar localiza\xE7\xE3o..."), locs.status === "error" && React.createElement("div", {
    role: "alert",
    style: {
      background: "#fff",
      border: "2px solid #C94F00",
      borderRadius: 14,
      padding: "12px 14px",
      marginBottom: 12
    }
  }, React.createElement("p", {
    style: {
      margin: "0 0 10px",
      fontSize: 14,
      fontWeight: 700,
      color: "#1a1a1f"
    }
  }, "N\xE3o foi poss\xEDvel carregar a localiza\xE7\xE3o das equipas: ", locs.error), React.createElement("button", {
    onClick: loadLocs,
    style: {
      minHeight: 48,
      minWidth: 44,
      padding: "0 18px",
      background: T.navy,
      color: "#fff",
      border: "none",
      borderRadius: 12,
      fontSize: 15,
      fontWeight: 800,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Tentar novamente")), locs.status === "ok" && teams.length > 0 && React.createElement(LocationSummary, {
    locs: locs.data,
    teams: teams
  }), teams.length > 0 && React.createElement("input", {
    type: "search",
    "aria-label": "Pesquisar equipas por cidade ou pa\xEDs",
    placeholder: "Pesquisar por cidade ou pa\xEDs",
    value: teamQ,
    onChange: function onChange(e) {
      return setTeamQ(e.target.value);
    },
    style: {
      width: "100%",
      boxSizing: "border-box",
      minHeight: 48,
      marginBottom: 12,
      padding: "0 14px",
      fontSize: 16,
      fontFamily: "inherit",
      border: "2px solid #1a1a1f",
      borderRadius: 12,
      background: "#fff",
      color: "#1a1a1f"
    }
  }), function () {
    var q = locKey(teamQ);
    var shown = !q ? teams : teams.filter(function (t) {
      var l = locs.status === "ok" ? locs.data[t.id] : null;
      return locKey(t.name).includes(q) || l && (locKey(l.city).includes(q) || locKey(l.country).includes(q));
    });
    return q && shown.length === 0 ? React.createElement("p", {
      role: "status",
      style: {
        color: T.sub,
        textAlign: "center",
        padding: "12px 0",
        fontWeight: 700
      }
    }, "Nenhuma equipa encontrada") : null;
  }(), function () {
    var q = locKey(teamQ);
    return !q ? teams : teams.filter(function (t) {
      var l = locs.status === "ok" ? locs.data[t.id] : null;
      return locKey(t.name).includes(q) || l && (locKey(l.city).includes(q) || locKey(l.country).includes(q));
    });
  }().map(function (t) {
    return React.createElement("div", {
      key: t.id,
      onClick: function onClick() {
        setSection("teams");
        setSelectedTeam(t);
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
    }, t.season, " \xB7 criada ", new Date(t.created_at).toLocaleDateString("pt-PT")), locs.status === "ok" && function () {
      var l = locs.data[t.id];
      return React.createElement("p", {
        "data-loc": "team",
        style: {
          margin: "4px 0 0",
          fontSize: 13,
          fontWeight: 700,
          color: "#1a1a1f"
        }
      }, "\uD83D\uDCCD ", locLine(l), l && l.postal ? " \xB7 ".concat(l.postal) : "", l && l.sport ? " \xB7 ".concat(l.sport) : "");
    }()), React.createElement("span", {
      style: {
        color: T.sub,
        fontSize: 18
      }
    }, "\u203A")), React.createElement("div", {
      style: {
        display: "flex",
        gap: 6
      }
    }, [["👥", t.members_count, "membro", "membros"], ["🟥", t.fines_count, "multa", "multas"], ["💸", "".concat(t.unpaid_total, "\u20AC"), "por pagar", "por pagar"], ["📅", t.trainings_count, "treino", "treinos"]].map(function (_ref120) {
      var _ref121 = _slicedToArray(_ref120, 4),
        icon = _ref121[0],
        val = _ref121[1],
        one = _ref121[2],
        many = _ref121[3];
      var label = Number(val) === 1 ? one : many;
      return React.createElement("div", {
        key: many,
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
  })), section === "users" && React.createElement(AdminUsersSection, {
    act: act,
    onRetry: loadActivity,
    StatCard: StatCard
  })));
};
var LoadWarn = function LoadWarn(_ref122) {
  var id = _ref122.id,
    children = _ref122.children,
    onRetry = _ref122.onRetry,
    _ref122$retryLabel = _ref122.retryLabel,
    retryLabel = _ref122$retryLabel === void 0 ? "Tentar novamente" : _ref122$retryLabel;
  return React.createElement("div", {
    role: "alert",
    "data-warn": id,
    style: {
      margin: "8px 0",
      background: "#FFF8E1",
      border: "2px solid #8A5A00",
      borderRadius: 12,
      padding: "10px 12px",
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap"
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      flex: 1,
      minWidth: 180,
      fontSize: 13,
      fontWeight: 800,
      color: "#1a1a1f"
    }
  }, children), onRetry && React.createElement("button", {
    onClick: onRetry,
    style: {
      minHeight: 44,
      padding: "0 16px",
      borderRadius: 12,
      border: "2px solid #1a1a1f",
      background: "#1a1a1f",
      color: "#fff",
      fontSize: 14,
      fontWeight: 800,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, retryLabel));
};
var INVITE_SEEN_KEY = "multeam_convite_epoca";
var INVITE_MSG = "Olá! Uso a Multeam para as multas e as presenças da minha equipa: é grátis e foi feita por um jogador. Vê aqui:";
var InviteCard = function InviteCard() {
  var season = absSeason(todayLocal());
  var _useState287 = useState(function () {
      try {
        return window.localStorage.getItem(INVITE_SEEN_KEY) === season;
      } catch (e) {
        return false;
      }
    }),
    _useState288 = _slicedToArray(_useState287, 2),
    seen = _useState288[0],
    setSeen = _useState288[1];
  var _useState289 = useState(null),
    _useState290 = _slicedToArray(_useState289, 2),
    mode = _useState290[0],
    setMode = _useState290[1];
  if (seen) return null;
  var mark = function mark() {
    try {
      window.localStorage.setItem(INVITE_SEEN_KEY, season);
    } catch (e) {}
    setSeen(true);
  };
  var share = function () {
    var _ref123 = _asyncToGenerator(_regenerator().m(function _callee41() {
      var _t54, _t55;
      return _regenerator().w(function (_context41) {
        while (1) switch (_context41.p = _context41.n) {
          case 0:
            _context41.p = 0;
            if (!navigator.share) {
              _context41.n = 2;
              break;
            }
            _context41.n = 1;
            return navigator.share({
              title: "Multeam",
              text: INVITE_MSG,
              url: APP_URL
            });
          case 1:
            mark();
            return _context41.a(2);
          case 2:
            _context41.n = 4;
            break;
          case 3:
            _context41.p = 3;
            _t54 = _context41.v;
            if (!(_t54 && _t54.name === "AbortError")) {
              _context41.n = 4;
              break;
            }
            return _context41.a(2);
          case 4:
            _context41.p = 4;
            if (!(navigator.clipboard && navigator.clipboard.writeText)) {
              _context41.n = 6;
              break;
            }
            _context41.n = 5;
            return navigator.clipboard.writeText("".concat(INVITE_MSG, " ").concat(APP_URL));
          case 5:
            setMode("copiado");
            return _context41.a(2);
          case 6:
            _context41.n = 8;
            break;
          case 7:
            _context41.p = 7;
            _t55 = _context41.v;
          case 8:
            setMode("manual");
          case 9:
            return _context41.a(2);
        }
      }, _callee41, null, [[4, 7], [0, 3]]);
    }));
    return function share() {
      return _ref123.apply(this, arguments);
    };
  }();
  var btn = function btn(bg, fg, border) {
    return {
      minHeight: 44,
      padding: "0 16px",
      borderRadius: 12,
      border: "2px solid ".concat(border),
      background: bg,
      color: fg,
      fontSize: 14,
      fontWeight: 800,
      cursor: "pointer",
      fontFamily: "inherit"
    };
  };
  return React.createElement("div", {
    "data-invite": true,
    style: {
      marginTop: 8,
      background: T.card,
      border: "1px solid ".concat(T.border),
      borderRadius: 14,
      padding: "12px 16px"
    }
  }, React.createElement("p", {
    style: {
      margin: "0 0 2px",
      fontSize: 15,
      fontWeight: 800,
      color: "#1a1a1f"
    }
  }, "Ajuda a Multeam a crescer \uD83D\uDC99"), mode === null && React.createElement(React.Fragment, null, React.createElement("p", {
    style: {
      margin: "0 0 10px",
      fontSize: 13,
      color: "#5F5F66"
    }
  }, "Conta a outra equipa: a Multeam \xE9 gr\xE1tis."), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, React.createElement("button", {
    onClick: share,
    style: btn("#1a1a1f", "#fff", "#1a1a1f")
  }, "Convidar outra equipa"), React.createElement("button", {
    onClick: mark,
    style: btn("#fff", "#1a1a1f", "#1a1a1f")
  }, "Agora n\xE3o"))), mode === "copiado" && React.createElement(React.Fragment, null, React.createElement("p", {
    role: "status",
    style: {
      margin: "0 0 10px",
      fontSize: 13,
      color: "#1a1a1f",
      fontWeight: 700
    }
  }, "Link copiado \u2713 Cola-o numa mensagem. Obrigado!"), React.createElement("button", {
    onClick: mark,
    style: btn("#fff", "#1a1a1f", "#1a1a1f")
  }, "Fechar")), mode === "manual" && React.createElement(React.Fragment, null, React.createElement("p", {
    style: {
      margin: "0 0 6px",
      fontSize: 13,
      color: "#5F5F66"
    }
  }, "Copia esta mensagem e envia-a a outra equipa:"), React.createElement("textarea", {
    readOnly: true,
    "aria-label": "Mensagem de convite",
    value: "".concat(INVITE_MSG, " ").concat(APP_URL),
    rows: 3,
    onFocus: function onFocus(e) {
      return e.target.select();
    },
    style: {
      width: "100%",
      boxSizing: "border-box",
      padding: "10px 12px",
      borderRadius: 12,
      border: "2px solid #1a1a1f",
      fontSize: 14,
      fontFamily: "inherit",
      marginBottom: 10
    }
  }), React.createElement("button", {
    onClick: mark,
    style: btn("#fff", "#1a1a1f", "#1a1a1f")
  }, "Fechar")));
};
var FEEDBACK_SEEN_KEY = "multeam_opiniao_epoca";
var FEEDBACK_MOODS = [{
  id: "gostei",
  emoji: "😀",
  label: "Gostei"
}, {
  id: "normal",
  emoji: "🙂",
  label: "Mais ou menos"
}, {
  id: "nao",
  emoji: "🙁",
  label: "Não gostei"
}];
var FEEDBACK_MAX = 500;
var feedbackSeason = function feedbackSeason(iso) {
  var m = /^(\d{4})-(\d\d)-(\d\d)/.exec(iso || "");
  if (!m) return "";
  var y = +m[1],
    mo = +m[2],
    d = +m[3];
  return mo === 6 || mo === 7 && d <= 15 ? "".concat(y - 1, "/").concat(String(y % 100).padStart(2, "0")) : "";
};
var feedbackUnavailable = function feedbackUnavailable(e) {
  return /Could not find the function|schema cache|PGRST202/i.test(String(e && e.message));
};
var moodOf = function moodOf(id) {
  return FEEDBACK_MOODS.find(function (m) {
    return m.id === id;
  }) || null;
};
var SeasonFeedbackCard = function SeasonFeedbackCard(_ref124) {
  var token = _ref124.token,
    teamId = _ref124.teamId;
  var season = feedbackSeason(todayLocal());
  var _useState291 = useState(function () {
      try {
        return !!season && window.localStorage.getItem(FEEDBACK_SEEN_KEY) === season;
      } catch (e) {
        return false;
      }
    }),
    _useState292 = _slicedToArray(_useState291, 2),
    hidden = _useState292[0],
    setHidden = _useState292[1];
  var _useState293 = useState({
      status: "loading",
      mine: null,
      error: ""
    }),
    _useState294 = _slicedToArray(_useState293, 2),
    st = _useState294[0],
    setSt = _useState294[1];
  var _useState295 = useState(""),
    _useState296 = _slicedToArray(_useState295, 2),
    mood = _useState296[0],
    setMood = _useState296[1];
  var _useState297 = useState(""),
    _useState298 = _slicedToArray(_useState297, 2),
    text = _useState298[0],
    setText = _useState298[1];
  var _useState299 = useState(false),
    _useState300 = _slicedToArray(_useState299, 2),
    editing = _useState300[0],
    setEditing = _useState300[1];
  var _useState301 = useState(false),
    _useState302 = _slicedToArray(_useState301, 2),
    busy = _useState302[0],
    setBusy = _useState302[1];
  var _useState303 = useState(""),
    _useState304 = _slicedToArray(_useState303, 2),
    err = _useState304[0],
    setErr = _useState304[1];
  var flight = React.useRef(false);
  var load = function () {
    var _ref125 = _asyncToGenerator(_regenerator().m(function _callee42() {
      var r, row, _t56;
      return _regenerator().w(function (_context42) {
        while (1) switch (_context42.p = _context42.n) {
          case 0:
            setSt(function (s0) {
              return _objectSpread(_objectSpread({}, s0), {}, {
                status: "loading",
                error: ""
              });
            });
            _context42.p = 1;
            _context42.n = 2;
            return rpcCall("my_feedback", {
              p_season: season
            }, token);
          case 2:
            r = _context42.v;
            row = Array.isArray(r) ? r[0] : r;
            setSt({
              status: "ok",
              mine: row && row.mood ? row : null,
              error: ""
            });
            _context42.n = 4;
            break;
          case 3:
            _context42.p = 3;
            _t56 = _context42.v;
            setSt(feedbackUnavailable(_t56) ? {
              status: "off",
              mine: null,
              error: ""
            } : {
              status: "error",
              mine: null,
              error: errPt(_t56)
            });
          case 4:
            return _context42.a(2);
        }
      }, _callee42, null, [[1, 3]]);
    }));
    return function load() {
      return _ref125.apply(this, arguments);
    };
  }();
  useEffect(function () {
    if (season && !hidden && token && !RO.on) load();
  }, [season, hidden]);
  if (!season || hidden || RO.on || st.status === "off") return null;
  if (st.status === "loading") return null;
  var dismiss = function dismiss() {
    try {
      window.localStorage.setItem(FEEDBACK_SEEN_KEY, season);
    } catch (e) {}
    setHidden(true);
  };
  var save = function () {
    var _ref126 = _asyncToGenerator(_regenerator().m(function _callee43() {
      var r, row, _t57;
      return _regenerator().w(function (_context43) {
        while (1) switch (_context43.p = _context43.n) {
          case 0:
            if (!(flight.current || !mood)) {
              _context43.n = 1;
              break;
            }
            return _context43.a(2);
          case 1:
            flight.current = true;
            setBusy(true);
            setErr("");
            _context43.p = 2;
            _context43.n = 3;
            return rpcCall("save_feedback", {
              p_season: season,
              p_mood: mood,
              p_text: text.trim() || null,
              p_team_id: teamId || null
            }, token);
          case 3:
            r = _context43.v;
            row = Array.isArray(r) ? r[0] : r;
            setSt({
              status: "ok",
              mine: row && row.mood ? row : {
                mood: mood,
                text: text.trim()
              },
              error: ""
            });
            setEditing(false);
            _context43.n = 5;
            break;
          case 4:
            _context43.p = 4;
            _t57 = _context43.v;
            setErr(errPt(_t57));
          case 5:
            setBusy(false);
            flight.current = false;
          case 6:
            return _context43.a(2);
        }
      }, _callee43, null, [[2, 4]]);
    }));
    return function save() {
      return _ref126.apply(this, arguments);
    };
  }();
  var remove = function () {
    var _ref127 = _asyncToGenerator(_regenerator().m(function _callee44() {
      var _t58;
      return _regenerator().w(function (_context44) {
        while (1) switch (_context44.p = _context44.n) {
          case 0:
            if (!flight.current) {
              _context44.n = 1;
              break;
            }
            return _context44.a(2);
          case 1:
            if (window.confirm("Apagar a tua opinião?")) {
              _context44.n = 2;
              break;
            }
            return _context44.a(2);
          case 2:
            flight.current = true;
            setBusy(true);
            setErr("");
            _context44.p = 3;
            _context44.n = 4;
            return rpcCall("delete_feedback", {
              p_season: season
            }, token);
          case 4:
            setSt({
              status: "ok",
              mine: null,
              error: ""
            });
            setMood("");
            setText("");
            setEditing(false);
            _context44.n = 6;
            break;
          case 5:
            _context44.p = 5;
            _t58 = _context44.v;
            setErr(errPt(_t58));
          case 6:
            setBusy(false);
            flight.current = false;
          case 7:
            return _context44.a(2);
        }
      }, _callee44, null, [[3, 5]]);
    }));
    return function remove() {
      return _ref127.apply(this, arguments);
    };
  }();
  var btn = function btn(bg, fg) {
    return {
      minHeight: 44,
      padding: "0 16px",
      borderRadius: 12,
      border: "2px solid #1a1a1f",
      background: bg,
      color: fg,
      fontSize: 14,
      fontWeight: 800,
      cursor: "pointer",
      fontFamily: "inherit"
    };
  };
  var wrap = function wrap(ch) {
    return React.createElement("div", {
      "data-feedback": true,
      style: {
        marginTop: 8,
        background: T.card,
        border: "1px solid ".concat(T.border),
        borderRadius: 14,
        padding: "12px 16px"
      }
    }, ch);
  };
  if (st.status === "error") return wrap(React.createElement(LoadWarn, {
    id: "opiniao",
    onRetry: load
  }, "N\xE3o foi poss\xEDvel carregar a tua opini\xE3o: ", st.error));
  var mine = st.mine;
  if (mine && !editing) {
    var m = moodOf(mine.mood);
    return wrap(React.createElement(React.Fragment, null, React.createElement("p", {
      style: {
        margin: "0 0 4px",
        fontSize: 15,
        fontWeight: 800,
        color: "#1a1a1f"
      }
    }, "Obrigado pela tua opini\xE3o! \uD83D\uDC99"), React.createElement("p", {
      "data-feedback-mine": true,
      style: {
        margin: "0 0 10px",
        fontSize: 14,
        color: "#1a1a1f",
        overflowWrap: "anywhere"
      }
    }, m ? "".concat(m.emoji, " ").concat(m.label) : "", mine.text ? " \xB7 ".concat(mine.text) : ""), err && React.createElement("p", {
      role: "alert",
      style: {
        margin: "0 0 8px",
        fontSize: 13,
        fontWeight: 700,
        color: "#B42318"
      }
    }, err), React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, React.createElement("button", {
      disabled: busy,
      onClick: function onClick() {
        setMood(mine.mood || "");
        setText(mine.text || "");
        setErr("");
        setEditing(true);
      },
      style: btn("#fff", "#1a1a1f")
    }, "Editar"), React.createElement("button", {
      disabled: busy,
      onClick: remove,
      style: btn("#fff", "#B42318")
    }, "Apagar"))));
  }
  return wrap(React.createElement(React.Fragment, null, React.createElement("p", {
    style: {
      margin: "0 0 2px",
      fontSize: 15,
      fontWeight: 800,
      color: "#1a1a1f"
    }
  }, "Como foi a \xE9poca com a Multeam?"), React.createElement("p", {
    style: {
      margin: "0 0 10px",
      fontSize: 13,
      color: "#5F5F66"
    }
  }, "A tua opini\xE3o ajuda a melhorar a app (opcional)."), React.createElement("div", {
    role: "group",
    "aria-label": "Como foi a \xE9poca",
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 10
    }
  }, FEEDBACK_MOODS.map(function (m) {
    return React.createElement("button", {
      key: m.id,
      type: "button",
      "aria-pressed": mood === m.id,
      onClick: function onClick() {
        return setMood(m.id);
      },
      style: _objectSpread(_objectSpread({}, btn(mood === m.id ? "#1a1a1f" : "#fff", mood === m.id ? "#fff" : "#1a1a1f")), {}, {
        flex: "1 1 90px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        padding: "0 8px"
      })
    }, React.createElement("span", {
      "aria-hidden": "true",
      style: {
        fontSize: 20
      }
    }, m.emoji), React.createElement("span", null, m.label));
  })), React.createElement("textarea", {
    "aria-label": "Opini\xE3o sobre a app",
    value: text,
    maxLength: FEEDBACK_MAX,
    rows: 3,
    placeholder: "Queres acrescentar alguma coisa? (opcional)",
    onChange: function onChange(e) {
      return setText(e.target.value);
    },
    style: {
      width: "100%",
      boxSizing: "border-box",
      padding: "10px 12px",
      borderRadius: 12,
      border: "2px solid #1a1a1f",
      fontSize: 16,
      fontFamily: "inherit"
    }
  }), React.createElement("p", {
    style: {
      margin: "2px 0 8px",
      fontSize: 11,
      color: "#5F5F66",
      textAlign: "right"
    }
  }, text.length, "/", FEEDBACK_MAX), err && React.createElement("p", {
    role: "alert",
    style: {
      margin: "0 0 8px",
      fontSize: 13,
      fontWeight: 700,
      color: "#B42318"
    }
  }, err), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, React.createElement("button", {
    disabled: busy || !mood,
    onClick: save,
    style: _objectSpread(_objectSpread({}, btn("#1a1a1f", "#fff")), {}, {
      opacity: busy || !mood ? 0.5 : 1
    })
  }, busy ? "A enviar..." : "Enviar"), editing ? React.createElement("button", {
    disabled: busy,
    onClick: function onClick() {
      setEditing(false);
      setErr("");
    },
    style: btn("#fff", "#1a1a1f")
  }, "Cancelar") : React.createElement("button", {
    disabled: busy,
    onClick: dismiss,
    style: btn("#fff", "#1a1a1f")
  }, "Agora n\xE3o"))));
};
var useAdminFeedback = function useAdminFeedback(token) {
  var _useState305 = useState({
      status: "idle",
      rows: [],
      error: ""
    }),
    _useState306 = _slicedToArray(_useState305, 2),
    st = _useState306[0],
    setSt = _useState306[1];
  var load = function () {
    var _ref128 = _asyncToGenerator(_regenerator().m(function _callee45() {
      var r, _t59;
      return _regenerator().w(function (_context45) {
        while (1) switch (_context45.p = _context45.n) {
          case 0:
            setSt(function (s0) {
              return _objectSpread(_objectSpread({}, s0), {}, {
                status: "loading",
                error: ""
              });
            });
            _context45.p = 1;
            _context45.n = 2;
            return rpcCall("get_app_feedback", {}, token);
          case 2:
            r = _context45.v;
            setSt({
              status: "ok",
              rows: Array.isArray(r) ? r : [],
              error: ""
            });
            _context45.n = 4;
            break;
          case 3:
            _context45.p = 3;
            _t59 = _context45.v;
            setSt(feedbackUnavailable(_t59) ? {
              status: "off",
              rows: [],
              error: ""
            } : {
              status: "error",
              rows: [],
              error: adminErrPt(_t59)
            });
          case 4:
            return _context45.a(2);
        }
      }, _callee45, null, [[1, 3]]);
    }));
    return function load() {
      return _ref128.apply(this, arguments);
    };
  }();
  return [st, load];
};
var FeedbackSection = function FeedbackSection(_ref129) {
  var token = _ref129.token;
  var _useAdminFeedback3 = useAdminFeedback(token),
    _useAdminFeedback4 = _slicedToArray(_useAdminFeedback3, 2),
    st = _useAdminFeedback4[0],
    load = _useAdminFeedback4[1];
  useEffect(function () {
    load();
  }, []);
  return React.createElement(FeedbackList, {
    st: st,
    onRetry: load
  });
};
var FeedbackList = function FeedbackList(_ref130) {
  var st = _ref130.st,
    onRetry = _ref130.onRetry;
  var head = React.createElement("p", {
    style: {
      margin: "20px 0 8px",
      fontSize: 12,
      fontWeight: 700,
      color: "#5F5F66",
      textTransform: "uppercase",
      letterSpacing: 0.5
    }
  }, "\uD83D\uDCAC Opini\xF5es de fim de \xE9poca");
  if (st.status === "idle" || st.status === "loading") return React.createElement("div", {
    "data-feedback-admin": true
  }, head, React.createElement("p", {
    role: "status",
    style: {
      margin: "4px 0",
      fontSize: 14,
      color: "#5F5F66"
    }
  }, "A carregar opini\xF5es..."));
  if (st.status === "off") return React.createElement("div", {
    "data-feedback-admin": true
  }, head, React.createElement("p", {
    style: {
      margin: "4px 0",
      fontSize: 14,
      color: "#5F5F66"
    }
  }, "Ainda n\xE3o est\xE1 ativo na base de dados."));
  if (st.status === "error") return React.createElement("div", {
    "data-feedback-admin": true
  }, head, React.createElement("div", {
    role: "alert",
    style: {
      background: "#FFE5E5",
      borderRadius: 12,
      padding: "12px 16px",
      fontSize: 14,
      color: "#8A0000",
      marginBottom: 10
    }
  }, "N\xE3o foi poss\xEDvel carregar as opini\xF5es: ", st.error), React.createElement("button", {
    onClick: onRetry,
    style: {
      width: "100%",
      minHeight: 48,
      borderRadius: 14,
      border: "none",
      background: T.navy,
      color: "#fff",
      fontSize: 15,
      fontWeight: 800,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Tentar novamente"));
  var rows = st.rows;
  var count = function count(id) {
    return rows.filter(function (r) {
      return r.mood === id;
    }).length;
  };
  var fmt = function fmt(iso) {
    var m = /^(\d{4})-(\d\d)-(\d\d)/.exec(iso || "");
    return m ? "".concat(m[3], "/").concat(m[2], "/").concat(m[1]) : "";
  };
  return React.createElement("div", {
    "data-feedback-admin": true
  }, head, rows.length === 0 && React.createElement("p", {
    style: {
      margin: "4px 0",
      fontSize: 14,
      color: "#5F5F66"
    }
  }, "Ainda sem opini\xF5es."), rows.length > 0 && React.createElement(React.Fragment, null, React.createElement("p", {
    "data-feedback-counts": true,
    style: {
      margin: "0 0 8px",
      fontSize: 14,
      fontWeight: 800,
      color: "#1a1a1f"
    }
  }, FEEDBACK_MOODS.map(function (m) {
    return "".concat(m.emoji, " ").concat(count(m.id));
  }).join("   ")), rows.slice(0, 50).map(function (r, i) {
    var m = moodOf(r.mood);
    return React.createElement("div", {
      key: r.id || i,
      "data-feedback-row": true,
      style: {
        background: T.card,
        borderRadius: 12,
        padding: "10px 14px",
        marginBottom: 6
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14,
        fontWeight: 800,
        color: "#1a1a1f"
      }
    }, m ? "".concat(m.emoji, " ").concat(m.label) : "—"), React.createElement("p", {
      style: {
        margin: "2px 0 0",
        fontSize: 12,
        color: "#5F5F66"
      }
    }, [r.season, r.team_name, fmt(r.created_at)].filter(Boolean).join(" · ")), r.text && React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 14,
        color: "#1a1a1f",
        overflowWrap: "anywhere"
      }
    }, r.text));
  })));
};
var PrivacySection = function PrivacySection() {
  var _useState307 = useState(false),
    _useState308 = _slicedToArray(_useState307, 2),
    open = _useState308[0],
    setOpen = _useState308[1];
  return React.createElement("div", {
    "data-privacy": true,
    style: {
      marginTop: 12,
      borderTop: "1px solid ".concat(T.border),
      paddingTop: 8
    }
  }, React.createElement("button", {
    "aria-expanded": open,
    onClick: function onClick() {
      return setOpen(function (o) {
        return !o;
      });
    },
    style: {
      width: "100%",
      minHeight: 44,
      background: "transparent",
      border: "none",
      textAlign: "left",
      fontSize: 14,
      fontWeight: 800,
      color: "#1a1a1f",
      cursor: "pointer",
      fontFamily: "inherit",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, React.createElement("span", null, "\uD83D\uDD12 Privacidade"), React.createElement("span", {
    style: {
      marginLeft: "auto",
      color: "#5F5F66"
    }
  }, open ? "▲" : "▼")), open && React.createElement(React.Fragment, null, React.createElement("p", {
    "data-privacy-text": true,
    style: {
      margin: "4px 0 8px",
      fontSize: 14,
      lineHeight: 1.5,
      color: "#1a1a1f"
    }
  }, "O administrador da plataforma tem acesso de leitura aos dados da app para manuten\xE7\xE3o, suporte e seguran\xE7a."), React.createElement("p", {
    "data-privacy-contact": true,
    style: {
      margin: "0 0 8px",
      fontSize: 14,
      lineHeight: 1.5,
      color: "#1a1a1f"
    }
  }, "O email de contacto \xE9 s\xF3 da Multeam.")), React.createElement("a", {
    "data-contacto": true,
    href: "mailto:support@multeam.ch?subject=Multeam%20-%20Geral",
    style: {
      display: "flex",
      alignItems: "center",
      minHeight: 44,
      padding: "0 2px",
      fontSize: 14,
      fontWeight: 600,
      color: "#5F5F66",
      textDecoration: "underline",
      fontFamily: "inherit"
    }
  }, "\u2709\uFE0F Contacto"), React.createElement("p", {
    "data-notif-help": true,
    style: {
      margin: "0 0 8px",
      fontSize: 13,
      lineHeight: 1.5,
      color: "#5F5F66"
    }
  }, "N\xE3o recebes notifica\xE7\xF5es? Confirma que as permitiste no telem\xF3vel. Se continuar sem chegar, escreve-nos em ", React.createElement("a", {
    "data-contacto-notif": true,
    href: "mailto:support@multeam.ch?subject=Multeam%20-%20Notifica%C3%A7%C3%B5es",
    style: {
      display: "inline-block",
      minHeight: 44,
      lineHeight: "44px",
      padding: "0 2px",
      color: "#5F5F66",
      fontWeight: 700,
      textDecoration: "underline"
    }
  }, "Contacto"), "."));
};
var GeneralTab = function GeneralTab(_ref131) {
  var user = _ref131.user,
    myUserId = _ref131.myUserId,
    teams = _ref131.teams,
    members = _ref131.members,
    onEditProfile = _ref131.onEditProfile,
    onManageTeam = _ref131.onManageTeam,
    onCreateTeam = _ref131.onCreateTeam,
    onJoinTeam = _ref131.onJoinTeam,
    onLeaveTeam = _ref131.onLeaveTeam,
    onLogout = _ref131.onLogout,
    onAdminOpen = _ref131.onAdminOpen,
    isAppAdmin = _ref131.isAppAdmin,
    token = _ref131.token,
    readOnly = _ref131.readOnly,
    myClaims = _ref131.myClaims,
    onEditClaimNote = _ref131.onEditClaimNote,
    onCancelClaim = _ref131.onCancelClaim,
    onAnswerClaim = _ref131.onAnswerClaim,
    claimCounts = _ref131.claimCounts,
    pushIssue = _ref131.pushIssue,
    onRetryPush = _ref131.onRetryPush,
    claimsWarn = _ref131.claimsWarn,
    onRetryClaims = _ref131.onRetryClaims;
  var myTeams = readOnly ? teams : teams.filter(function (t) {
    return members.some(function (m) {
      return m.teamId === t.id && m.userId === myUserId;
    }) || t.createdBy === myUserId;
  });
  var myAge = age(user.birthday);
  var _useState309 = useState(0),
    _useState310 = _slicedToArray(_useState309, 2),
    tapCount = _useState310[0],
    setTapCount = _useState310[1];
  var _useState311 = useState(null),
    _useState312 = _slicedToArray(_useState311, 2),
    showMembers = _useState312[0],
    setShowMembers = _useState312[1];
  var _useState313 = useState(""),
    _useState314 = _slicedToArray(_useState313, 2),
    membersWarn = _useState314[0],
    setMembersWarn = _useState314[1];
  var _useState315 = useState([]),
    _useState316 = _slicedToArray(_useState315, 2),
    teamMembers = _useState316[0],
    setTeamMembers = _useState316[1];
  var _useState317 = useState(false),
    _useState318 = _slicedToArray(_useState317, 2),
    loadingMembers = _useState318[0],
    setLoadingMembers = _useState318[1];
  var tapTimer = React.useRef(null);
  var photoTaps = React.useRef(0);
  useEffect(function () {
    return function () {
      return clearTimeout(tapTimer.current);
    };
  }, []);
  var photoTap = function photoTap(openZoom) {
    var next = photoTaps.current + 1;
    photoTaps.current = next;
    clearTimeout(tapTimer.current);
    if (next >= 3) {
      photoTaps.current = 0;
      setTapCount(0);
      onAdminOpen();
      return;
    }
    tapTimer.current = setTimeout(function () {
      var n = photoTaps.current;
      photoTaps.current = 0;
      if (n === 1) openZoom();
    }, 800);
  };
  var handleAvatarTap = function handleAvatarTap() {
    if (!isAppAdmin) return;
    var next = tapCount + 1;
    setTapCount(next);
    clearTimeout(tapTimer.current);
    if (next >= 3) {
      setTapCount(0);
      onAdminOpen();
      return;
    }
    tapTimer.current = setTimeout(function () {
      return setTapCount(0);
    }, 800);
  };
  var openTeamMembers = function () {
    var _ref132 = _asyncToGenerator(_regenerator().m(function _callee46(teamId) {
      var mRaw, uids, profilesMap, profs, direct, merged, _t60, _t61;
      return _regenerator().w(function (_context46) {
        while (1) switch (_context46.p = _context46.n) {
          case 0:
            setShowMembers(teamId);
            if (!readOnly) {
              _context46.n = 1;
              break;
            }
            setTeamMembers(members.filter(function (m) {
              return m.teamId === teamId;
            }));
            setLoadingMembers(false);
            return _context46.a(2);
          case 1:
            setLoadingMembers(true);
            setMembersWarn("");
            _context46.p = 2;
            _context46.n = 3;
            return api.get("team_members?team_id=eq.".concat(teamId, "&select=*"), token);
          case 3:
            mRaw = _context46.v;
            uids = mRaw.map(function (m) {
              return m.user_id;
            }).filter(Boolean);
            profilesMap = {};
            if (!(uids.length > 0)) {
              _context46.n = 10;
              break;
            }
            profs = null;
            _context46.p = 4;
            _context46.n = 5;
            return rpcCall('get_team_profiles', {
              p_team_id: teamId
            }, token);
          case 5:
            profs = _context46.v;
            _context46.n = 7;
            break;
          case 6:
            _context46.p = 6;
            _t60 = _context46.v;
            console.warn('get_team_profiles failed:', _t60 && _t60.message);
          case 7:
            if (!Array.isArray(profs)) {
              _context46.n = 8;
              break;
            }
            profs.forEach(function (p) {
              profilesMap[p.id] = p;
            });
            _context46.n = 10;
            break;
          case 8:
            setMembersWarn(PROFILES_WARN);
            _context46.n = 9;
            return api.get("profiles?id=in.(".concat(uids.join(','), ")"), token).catch(function () {
              return null;
            });
          case 9:
            direct = _context46.v;
            if (Array.isArray(direct)) direct.forEach(function (p) {
              profilesMap[p.id] = p;
            });
          case 10:
            merged = mRaw.map(function (m) {
              return _objectSpread({}, aMember(_objectSpread(_objectSpread({}, m), {}, {
                profiles: profilesMap[m.user_id] || null
              })));
            });
            setTeamMembers(merged);
            _context46.n = 12;
            break;
          case 11:
            _context46.p = 11;
            _t61 = _context46.v;
            console.error(_t61);
            setMembersWarn("Não foi possível carregar os membros da equipa.");
          case 12:
            setLoadingMembers(false);
          case 13:
            return _context46.a(2);
        }
      }, _callee46, null, [[4, 6], [2, 11]]);
    }));
    return function openTeamMembers(_x17) {
      return _ref132.apply(this, arguments);
    };
  }();
  if (showMembers) {
    var t = teams.find(function (x) {
      return x.id === showMembers;
    });
    var tm = sortMembers(teamMembers);
    return React.createElement("div", {
      style: {
        padding: "16px 16px 100px"
      }
    }, React.createElement("button", {
      onClick: function onClick() {
        return setShowMembers(null);
      },
      style: {
        minHeight: 44,
        background: "".concat((t === null || t === void 0 ? void 0 : t.color) || T.navy, "18"),
        border: "none",
        borderRadius: 10,
        padding: "7px 14px",
        fontSize: 14,
        cursor: "pointer",
        fontWeight: 600,
        color: (t === null || t === void 0 ? void 0 : t.color) || T.navy,
        fontFamily: "inherit",
        marginBottom: 16
      }
    }, "\u2190 Voltar"), React.createElement("h2", {
      style: {
        margin: "0 0 4px",
        fontSize: 20,
        fontWeight: 900
      }
    }, t === null || t === void 0 ? void 0 : t.emoji, " ", t === null || t === void 0 ? void 0 : t.name), React.createElement("p", {
      style: {
        margin: "0 0 16px",
        fontSize: 13,
        color: T.sub
      }
    }, loadingMembers ? "A carregar..." : "".concat(tm.length, " membro").concat(tm.length !== 1 ? "s" : "")), membersWarn && !loadingMembers && React.createElement(LoadWarn, {
      id: "membros",
      onRetry: function onRetry() {
        return openTeamMembers(showMembers);
      }
    }, membersWarn), tm.map(function (m) {
      return React.createElement("div", {
        key: m.id,
        style: {
          background: T.card,
          borderRadius: 16,
          padding: "14px",
          marginBottom: 10,
          display: "flex",
          alignItems: "center",
          gap: 14
        }
      }, m.avatarUrl ? React.createElement(ZoomPhoto, {
        src: m.avatarUrl,
        name: m.name,
        style: {
          width: 54,
          height: 54,
          borderRadius: 27,
          objectFit: "cover",
          flexShrink: 0
        }
      }) : React.createElement("div", {
        style: {
          width: 54,
          height: 54,
          borderRadius: 27,
          background: (t === null || t === void 0 ? void 0 : t.color) || T.navy,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: 800,
          fontSize: 18,
          flexShrink: 0
        }
      }, m.initials), React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 4
        }
      }, React.createElement("p", {
        style: {
          margin: 0,
          fontWeight: 800,
          fontSize: 16
        }
      }, m.name), React.createElement("span", {
        style: {
          fontSize: 11,
          background: m.role === "admin" ? "".concat((t === null || t === void 0 ? void 0 : t.color) || T.navy, "20") : "transparent",
          color: m.role === "admin" ? (t === null || t === void 0 ? void 0 : t.color) || T.navy : T.sub,
          borderRadius: 6,
          padding: "2px 6px",
          fontWeight: 700,
          border: "1px solid ".concat(m.role === "admin" ? (t === null || t === void 0 ? void 0 : t.color) || T.navy : T.border)
        }
      }, m.role === "admin" ? "Admin" : "Jogador")), m.position && React.createElement("p", {
        style: {
          margin: "0 0 3px",
          fontSize: 13,
          color: T.sub
        }
      }, "\uD83C\uDFC3 ", m.position), m.phone && React.createElement("p", {
        style: {
          margin: "0 0 3px",
          fontSize: 13,
          color: T.text
        }
      }, "\uD83D\uDCF1 ", React.createElement("a", {
        href: "tel:".concat(m.phone),
        style: {
          color: T.navy,
          textDecoration: "none",
          fontWeight: 600
        }
      }, m.phone)), m.birthday && React.createElement("p", {
        style: {
          margin: 0,
          fontSize: 13,
          color: T.sub
        }
      }, "\uD83C\uDF82 ", fmtDate(m.birthday), age(m.birthday) ? " \xB7 ".concat(age(m.birthday), " anos") : "")));
    }));
  }
  return React.createElement("div", {
    style: {
      padding: "16px 16px 100px"
    }
  }, !readOnly && pushIssue && React.createElement(LoadWarn, {
    id: "push",
    onRetry: onRetryPush
  }, "\uD83D\uDD14 ", pushIssueText(pushIssue)), !readOnly && claimsWarn && React.createElement(LoadWarn, {
    id: "pedidos-admin",
    onRetry: onRetryClaims
  }, typeof claimsWarn === "string" ? claimsWarn : "Não foi possível ver as equipas onde és administrador. Os pedidos de perfil podem não aparecer."), !readOnly && React.createElement("div", {
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
      minHeight: 44,
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
  }, React.createElement("div", {
    onClick: handleAvatarTap,
    style: {
      cursor: isAppAdmin ? "pointer" : "default"
    }
  }, React.createElement(Avatar, {
    initials: user.initials,
    color: T.navy,
    size: 54,
    photo: user.avatarUrl,
    name: user.name,
    onTapGesture: isAppAdmin ? photoTap : undefined
  })), React.createElement("div", {
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
  }, [["🏃 Posição", user.position || "—", false], ["📱 Telefone", user.phone || "—", false], ["🎂 Aniversário", user.birthday ? "".concat(fmtDate(user.birthday)).concat(myAge ? " \xB7 ".concat(myAge, " anos") : "") : "—", true]].map(function (_ref133) {
    var _ref134 = _slicedToArray(_ref133, 3),
      l = _ref134[0],
      v = _ref134[1],
      full = _ref134[2];
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
  }))), !readOnly && React.createElement(MyClaimsCard, {
    claims: myClaims,
    members: members,
    myUserId: myUserId,
    onEditNote: onEditClaimNote,
    onCancel: onCancelClaim,
    onAnswer: onAnswerClaim
  }), React.createElement(Sec, {
    label: "Equipas (".concat(myTeams.length, ")")
  }), myTeams.map(function (t) {
    var me = members.find(function (m) {
      return m.teamId === t.id && m.userId === myUserId;
    });
    var admin = !readOnly && ((me === null || me === void 0 ? void 0 : me.role) === "admin" || t.createdBy === myUserId);
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
    }, !readOnly && React.createElement(RoleBadgeLight, {
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
        position: "relative",
        minHeight: 44,
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
    }, "Gerir \u2192", claimCounts && claimCounts[t.id] > 0 ? React.createElement("span", {
      "data-badge": "claims-team"
    }, React.createElement(CountBadge, {
      n: claimCounts[t.id]
    })) : null)), React.createElement("button", {
      onClick: function onClick() {
        return openTeamMembers(t.id);
      },
      style: {
        width: "100%",
        minHeight: 44,
        marginTop: 10,
        background: T.bg,
        border: "1px solid ".concat(T.border),
        borderRadius: 10,
        padding: "9px",
        fontSize: 13,
        fontWeight: 700,
        cursor: "pointer",
        color: T.sub,
        fontFamily: "inherit",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6
      }
    }, "\uD83D\uDC65 Ver membros da equipa"), readOnly && React.createElement("div", {
      style: {
        marginTop: 10
      }
    }, React.createElement(ClaimsAdminSection, {
      team: t,
      members: members,
      token: token,
      readOnly: true
    })), !admin && !readOnly && React.createElement("button", {
      onClick: function onClick() {
        if (window.confirm("Sair de \"".concat(t.name, "\"? Perdes o acesso \xE0 equipa."))) onLeaveTeam(t.id);
      },
      style: {
        width: "100%",
        marginTop: 6,
        background: "transparent",
        border: "1px solid ".concat(T.brand),
        borderRadius: 10,
        padding: "8px",
        fontSize: 12,
        fontWeight: 700,
        cursor: "pointer",
        color: T.brand,
        fontFamily: "inherit"
      }
    }, "\uD83D\uDEAA Sair desta equipa"));
  }), !readOnly && React.createElement(React.Fragment, null, React.createElement("button", {
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
  }, "\uD83D\uDD17 Entrar numa equipa com c\xF3digo")), !readOnly && React.createElement(SeasonFeedbackCard, {
    token: token,
    teamId: (myTeams[0] || {}).id
  }), !readOnly && React.createElement(InviteCard, null), React.createElement("button", {
    onClick: onLogout,
    style: {
      width: "100%",
      minHeight: 44,
      background: "transparent",
      border: "none",
      borderRadius: 14,
      padding: "14px",
      fontSize: 15,
      fontWeight: 700,
      cursor: "pointer",
      color: "#B42318",
      marginTop: 8,
      fontFamily: "inherit"
    }
  }, "Terminar sess\xE3o"), React.createElement(PrivacySection, null));
};
var FINE_EMOJIS = ["🟨", "🟥", "⏰", "⌚", "🏃", "🏃‍♂️", "👕", "🎽", "👟", "⚽", "🚫", "❌", "🤦", "😤", "🗣️", "📵", "🤕", "💪", "🏋️", "🦵", "🍺", "💸", "🚗", "🎯", "💬", "🤳"];
var EmojiPicker = function EmojiPicker(_ref135) {
  var value = _ref135.value,
    onChange = _ref135.onChange,
    color = _ref135.color;
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
var FineTypesManager = function FineTypesManager(_ref136) {
  var team = _ref136.team,
    fineTypes = _ref136.fineTypes,
    onAdded = _ref136.onAdded,
    onDeleted = _ref136.onDeleted,
    onUpdated = _ref136.onUpdated,
    token = _ref136.token;
  var _useState319 = useState(false),
    _useState320 = _slicedToArray(_useState319, 2),
    adding = _useState320[0],
    setAdding = _useState320[1];
  var _useState321 = useState(null),
    _useState322 = _slicedToArray(_useState321, 2),
    editingId = _useState322[0],
    setEditingId = _useState322[1];
  var _useState323 = useState(""),
    _useState324 = _slicedToArray(_useState323, 2),
    name = _useState324[0],
    setName = _useState324[1];
  var _useState325 = useState(""),
    _useState326 = _slicedToArray(_useState325, 2),
    amount = _useState326[0],
    setAmount = _useState326[1];
  var _useState327 = useState(null),
    _useState328 = _slicedToArray(_useState327, 2),
    custom = _useState328[0],
    setCustom = _useState328[1];
  var _useState329 = useState(null),
    _useState330 = _slicedToArray(_useState329, 2),
    editCustom = _useState330[0],
    setEditCustom = _useState330[1];
  var _useState331 = useState(""),
    _useState332 = _slicedToArray(_useState331, 2),
    editName = _useState332[0],
    setEditName = _useState332[1];
  var _useState333 = useState(""),
    _useState334 = _slicedToArray(_useState333, 2),
    editAmount = _useState334[0],
    setEditAmount = _useState334[1];
  var _useState335 = useState(""),
    _useState336 = _slicedToArray(_useState335, 2),
    err = _useState336[0],
    setErr = _useState336[1];
  var _useState337 = useState(false),
    _useState338 = _slicedToArray(_useState337, 2),
    saving = _useState338[0],
    setSaving = _useState338[1];
  var tf = fineTypes.filter(function (f) {
    return f.teamId === team.id;
  });
  var save = function () {
    var _ref137 = _asyncToGenerator(_regenerator().m(function _callee47() {
      var ft, _t62, _t63;
      return _regenerator().w(function (_context47) {
        while (1) switch (_context47.p = _context47.n) {
          case 0:
            if (!(!name.trim() || !amount)) {
              _context47.n = 1;
              break;
            }
            return _context47.a(2);
          case 1:
            setSaving(true);
            setErr("");
            _context47.p = 2;
            _t62 = needRows;
            _context47.n = 3;
            return api.post("fine_types", {
              team_id: team.id,
              name: name.trim(),
              amount: Number(amount),
              emoji: storableIcon(resolveTypeIcon(name.trim(), custom))
            }, token);
          case 3:
            ft = _t62(_context47.v)[0];
            onAdded(ft);
            setName("");
            setAmount("");
            setCustom(null);
            setAdding(false);
            _context47.n = 5;
            break;
          case 4:
            _context47.p = 4;
            _t63 = _context47.v;
            setErr(errPt(_t63));
          case 5:
            setSaving(false);
          case 6:
            return _context47.a(2);
        }
      }, _callee47, null, [[2, 4]]);
    }));
    return function save() {
      return _ref137.apply(this, arguments);
    };
  }();
  var startEdit = function startEdit(ft) {
    setEditingId(ft.id);
    setEditCustom(ft.emoji === iconForFine(ft.name, '') ? null : ft.emoji);
    setEditName(ft.name);
    setEditAmount(String(ft.amount));
  };
  var saveEdit = function () {
    var _ref138 = _asyncToGenerator(_regenerator().m(function _callee48(id) {
      var em, _t64, _t65;
      return _regenerator().w(function (_context48) {
        while (1) switch (_context48.p = _context48.n) {
          case 0:
            if (!(!editName.trim() || !editAmount)) {
              _context48.n = 1;
              break;
            }
            return _context48.a(2);
          case 1:
            setSaving(true);
            _context48.p = 2;
            em = resolveTypeIcon(editName.trim(), editCustom);
            _t64 = needRows;
            _context48.n = 3;
            return api.patch("fine_types?id=eq.".concat(id), {
              emoji: storableIcon(em),
              name: editName.trim(),
              amount: Number(editAmount)
            }, token);
          case 3:
            _t64(_context48.v);
            onUpdated(id, {
              emoji: em,
              name: editName.trim(),
              amount: Number(editAmount)
            });
            setEditingId(null);
            _context48.n = 5;
            break;
          case 4:
            _context48.p = 4;
            _t65 = _context48.v;
            setErr(errPt(_t65));
          case 5:
            setSaving(false);
          case 6:
            return _context48.a(2);
        }
      }, _callee48, null, [[2, 4]]);
    }));
    return function saveEdit(_x18) {
      return _ref138.apply(this, arguments);
    };
  }();
  var del = function () {
    var _ref139 = _asyncToGenerator(_regenerator().m(function _callee49(id) {
      var still, _t66;
      return _regenerator().w(function (_context49) {
        while (1) switch (_context49.p = _context49.n) {
          case 0:
            _context49.p = 0;
            _context49.n = 1;
            return api.del("fine_types?id=eq.".concat(id), token);
          case 1:
            _context49.n = 2;
            return api.get("fine_types?id=eq.".concat(id, "&select=id"), token);
          case 2:
            still = _context49.v;
            if (!still.length) {
              _context49.n = 3;
              break;
            }
            throw new Error("sem permissão (o registo continua a existir)");
          case 3:
            onDeleted(id);
            _context49.n = 5;
            break;
          case 4:
            _context49.p = 4;
            _t66 = _context49.v;
            setErr(errPt(_t66));
          case 5:
            return _context49.a(2);
        }
      }, _callee49, null, [[0, 4]]);
    }));
    return function del(_x19) {
      return _ref139.apply(this, arguments);
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
    }, React.createElement(FineIcon, {
      icon: ft.emoji,
      size: 26
    }), React.createElement("div", {
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
    }, ft.amount, "\u20AC")), React.createElement("button", {
      onClick: function onClick() {
        return editingId === ft.id ? setEditingId(null) : startEdit(ft);
      },
      style: {
        background: "none",
        border: "1.5px solid ".concat(editingId === ft.id ? team.color : T.border),
        borderRadius: 8,
        fontSize: 13,
        fontWeight: 700,
        color: editingId === ft.id ? team.color : T.sub,
        cursor: "pointer",
        padding: "4px 10px",
        fontFamily: "inherit"
      }
    }, "\u270F\uFE0F"), React.createElement("button", {
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
    }, React.createElement(FineIconField, {
      name: editName,
      custom: editCustom,
      onCustom: setEditCustom
    }), React.createElement(FL, null, "Nome"), React.createElement(FI, {
      value: editName,
      onChange: function onChange(e) {
        return setEditName(e.target.value);
      },
      placeholder: "Nome do tipo..."
    }), React.createElement(FL, null, "Valor (\u20AC)"), React.createElement(FI, {
      type: "number",
      value: editAmount,
      onChange: function onChange(e) {
        return setEditAmount(e.target.value);
      },
      placeholder: "0"
    }), React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, React.createElement(PrimaryBtn, {
      onClick: function onClick() {
        return saveEdit(ft.id);
      },
      disabled: !editName.trim() || !editAmount || saving,
      color: team.color
    }, saving ? "A guardar..." : "✓ Guardar"), React.createElement("button", {
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
  }, React.createElement(FineIconField, {
    name: name,
    custom: custom,
    onCustom: setCustom
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
var TeamDataSection = function TeamDataSection(_ref140) {
  var team = _ref140.team,
    onSave = _ref140.onSave;
  var opt = function opt(list, cur) {
    return cur && !list.includes(cur) ? [cur].concat(_toConsumableArray(list)) : list;
  };
  var init = function init() {
    return {
      name: team.name || "",
      emoji: team.emoji || "⚽",
      color: team.color || "#1D3557",
      season: team.season || "",
      sport: team.sport || "",
      currency: team.currency || "",
      country: team.country || "",
      city: team.city || "",
      postal: team.postal || ""
    };
  };
  var _useState339 = useState(false),
    _useState340 = _slicedToArray(_useState339, 2),
    editing = _useState340[0],
    setEditing = _useState340[1];
  var _useState341 = useState(init),
    _useState342 = _slicedToArray(_useState341, 2),
    f = _useState342[0],
    setF = _useState342[1];
  var _useState343 = useState(false),
    _useState344 = _slicedToArray(_useState343, 2),
    busy = _useState344[0],
    setBusy = _useState344[1];
  var _useState345 = useState(""),
    _useState346 = _slicedToArray(_useState345, 2),
    err = _useState346[0],
    setErr = _useState346[1];
  var set = function set(k, v) {
    return setF(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, k, v));
    });
  };
  var nameIssue = teamNameIssue(f.name);
  var nameOk = !nameIssue,
    seasonOk = f.season.trim().length > 0;
  var canSave = nameOk && seasonOk && !busy;
  var open = function open() {
    setF(init());
    setErr("");
    setEditing(true);
  };
  var save = function () {
    var _ref141 = _asyncToGenerator(_regenerator().m(function _callee50() {
      var cur, next, patch, _t67;
      return _regenerator().w(function (_context50) {
        while (1) switch (_context50.p = _context50.n) {
          case 0:
            if (canSave) {
              _context50.n = 1;
              break;
            }
            return _context50.a(2);
          case 1:
            cur = init(), next = _objectSpread(_objectSpread({}, f), {}, {
              name: normTeamName(f.name),
              season: f.season.trim(),
              city: f.city.trim(),
              postal: f.postal.trim()
            });
            patch = {};
            Object.keys(next).forEach(function (k) {
              if (next[k] !== cur[k]) patch[k] = next[k];
            });
            if (Object.keys(patch).length) {
              _context50.n = 2;
              break;
            }
            setEditing(false);
            return _context50.a(2);
          case 2:
            setBusy(true);
            setErr("");
            _context50.p = 3;
            _context50.n = 4;
            return onSave(team.id, patch);
          case 4:
            setEditing(false);
            _context50.n = 6;
            break;
          case 5:
            _context50.p = 5;
            _t67 = _context50.v;
            setErr(errPt(_t67, "Erro ao guardar"));
          case 6:
            setBusy(false);
          case 7:
            return _context50.a(2);
        }
      }, _callee50, null, [[3, 5]]);
    }));
    return function save() {
      return _ref141.apply(this, arguments);
    };
  }();
  var Val = function Val(_ref142) {
    var label = _ref142.label,
      v = _ref142.v;
    return React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 12,
        padding: "6px 0"
      }
    }, React.createElement("span", {
      style: {
        fontSize: 13,
        color: T.sub
      }
    }, label), React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        textAlign: "right"
      }
    }, v || "—"));
  };
  return React.createElement("div", {
    style: {
      background: T.card,
      borderRadius: 16,
      padding: "16px",
      marginBottom: 20
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: editing ? 12 : 6
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 11,
      fontWeight: 700,
      color: T.sub,
      textTransform: "uppercase",
      letterSpacing: 0.5
    }
  }, "Dados da equipa"), !editing && React.createElement("button", {
    onClick: open,
    style: {
      minHeight: 44,
      background: "".concat(team.color, "15"),
      border: "none",
      borderRadius: 10,
      padding: "7px 12px",
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer",
      color: team.color,
      fontFamily: "inherit"
    }
  }, "\u270F\uFE0F Editar")), !editing ? React.createElement(React.Fragment, null, React.createElement(Val, {
    label: "Nome",
    v: "".concat(team.emoji || "", " ").concat(team.name || "").trim()
  }), React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "6px 0"
    }
  }, React.createElement("span", {
    style: {
      fontSize: 13,
      color: T.sub
    }
  }, "Cor"), React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 10,
      background: team.color,
      display: "inline-block"
    }
  })), React.createElement(Val, {
    label: "\xC9poca",
    v: team.season
  }), React.createElement(Val, {
    label: "Desporto",
    v: team.sport
  }), React.createElement(Val, {
    label: "Moeda",
    v: team.currency
  }), React.createElement(Val, {
    label: "Pa\xEDs",
    v: team.country
  }), React.createElement(Val, {
    label: "Cidade",
    v: [team.postal, team.city].filter(Boolean).join(" ")
  }), React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: 12,
      color: T.sub
    }
  }, "Cidade e pa\xEDs: usados para a previs\xE3o do tempo nos treinos.")) : React.createElement(React.Fragment, null, React.createElement(FL, null, "Nome"), React.createElement(FI, {
    value: f.name,
    onChange: function onChange(e) {
      set("name", e.target.value);
      setErr("");
    }
  }), nameIssue && f.name.trim() && React.createElement("p", {
    role: "alert",
    "data-team-name-error": true,
    style: {
      margin: "-6px 0 10px",
      fontSize: 13,
      fontWeight: 700,
      color: "#B42318"
    }
  }, nameIssue), React.createElement(FL, null, "Emoji"), React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      marginBottom: 14
    }
  }, opt(EMOJIS, f.emoji).map(function (e) {
    return React.createElement("button", {
      key: e,
      onClick: function onClick() {
        return set("emoji", e);
      },
      style: {
        width: 40,
        height: 40,
        borderRadius: 10,
        fontSize: 20,
        cursor: "pointer",
        border: "2px solid ".concat(f.emoji === e ? f.color : T.border),
        background: f.emoji === e ? "".concat(f.color, "15") : "transparent"
      }
    }, e);
  })), React.createElement(FL, null, "Cor"), React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 14
    }
  }, opt(COLORS, f.color).map(function (c) {
    return React.createElement("button", {
      key: c,
      onClick: function onClick() {
        return set("color", c);
      },
      "aria-label": c,
      style: {
        width: 32,
        height: 32,
        borderRadius: 16,
        background: c,
        cursor: "pointer",
        border: f.color === c ? "3px solid ".concat(T.text) : "3px solid transparent"
      }
    });
  })), React.createElement(FL, null, "\xC9poca"), React.createElement(FI, {
    value: f.season,
    onChange: function onChange(e) {
      return set("season", e.target.value);
    },
    placeholder: "2025/26"
  }), React.createElement(FL, null, "Desporto"), React.createElement(FSel, {
    value: f.sport,
    onChange: function onChange(e) {
      return set("sport", e.target.value);
    }
  }, opt(SPORTS, f.sport).map(function (x) {
    return React.createElement("option", {
      key: x,
      value: x
    }, x);
  })), React.createElement(FL, null, "Moeda"), React.createElement(FSel, {
    value: f.currency,
    onChange: function onChange(e) {
      return set("currency", e.target.value);
    }
  }, opt(CURRENCIES, f.currency).map(function (x) {
    return React.createElement("option", {
      key: x,
      value: x
    }, x);
  })), React.createElement(FL, null, "Pa\xEDs"), React.createElement(FSel, {
    value: f.country,
    onChange: function onChange(e) {
      return set("country", e.target.value);
    }
  }, opt(COUNTRIES, f.country).map(function (x) {
    return React.createElement("option", {
      key: x,
      value: x
    }, x);
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
    value: f.city,
    onChange: function onChange(e) {
      return set("city", e.target.value);
    },
    placeholder: "Ex: Selzach"
  })), React.createElement("div", {
    style: {
      flex: 1
    }
  }, React.createElement(FL, null, "C\xF3d. Postal"), React.createElement(FI, {
    value: f.postal,
    onChange: function onChange(e) {
      return set("postal", e.target.value);
    },
    placeholder: "2545"
  }))), React.createElement("p", {
    style: {
      margin: "-8px 0 14px",
      fontSize: 12,
      color: T.sub
    }
  }, "Usado para a previs\xE3o do tempo nos treinos."), (!nameOk || !seasonOk) && React.createElement("p", {
    style: {
      margin: "0 0 10px",
      fontSize: 13,
      fontWeight: 600,
      color: T.brand
    }
  }, !nameOk ? "O nome não pode ficar vazio." : "A época não pode ficar vazia."), err && React.createElement("p", {
    style: {
      margin: "0 0 10px",
      fontSize: 13,
      fontWeight: 600,
      color: T.brand
    }
  }, err), React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, React.createElement("button", {
    onClick: function onClick() {
      setEditing(false);
      setErr("");
    },
    disabled: busy,
    style: {
      flex: 1,
      padding: "15px",
      borderRadius: 14,
      border: "1.5px solid ".concat(T.border),
      background: "transparent",
      color: T.sub,
      fontSize: 15,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Cancelar"), React.createElement("div", {
    style: {
      flex: 2
    }
  }, React.createElement(PrimaryBtn, {
    onClick: save,
    disabled: !canSave,
    color: f.color
  }, busy ? "A guardar…" : "Guardar")))));
};
var AbsenceForm = function AbsenceForm(_ref143) {
  var title = _ref143.title,
    initial = _ref143.initial,
    withEnd = _ref143.withEnd,
    saveLabel = _ref143.saveLabel,
    onSave = _ref143.onSave,
    onClose = _ref143.onClose,
    color = _ref143.color;
  var _useState347 = useState(initial.kind || "lesao"),
    _useState348 = _slicedToArray(_useState347, 2),
    kind = _useState348[0],
    setKind = _useState348[1];
  var _useState349 = useState(initial.emoji || "🤕"),
    _useState350 = _slicedToArray(_useState349, 2),
    emoji = _useState350[0],
    setEmoji = _useState350[1];
  var _useState351 = useState(initial.note || ""),
    _useState352 = _slicedToArray(_useState351, 2),
    note = _useState352[0],
    setNote = _useState352[1];
  var _useState353 = useState(initial.start || todayLocal()),
    _useState354 = _slicedToArray(_useState353, 2),
    start = _useState354[0],
    setStart = _useState354[1];
  var _useState355 = useState(initial.end || ""),
    _useState356 = _slicedToArray(_useState355, 2),
    end = _useState356[0],
    setEnd = _useState356[1];
  var _useState357 = useState(false),
    _useState358 = _slicedToArray(_useState357, 2),
    busy = _useState358[0],
    setBusy = _useState358[1];
  var lock = React.useRef(false);
  var noteOk = note.trim() !== "";
  var datesOk = !!start && (!withEnd || !!end && end >= start);
  var save = function () {
    var _ref144 = _asyncToGenerator(_regenerator().m(function _callee51() {
      var ok;
      return _regenerator().w(function (_context51) {
        while (1) switch (_context51.p = _context51.n) {
          case 0:
            if (!(lock.current || !noteOk || !datesOk)) {
              _context51.n = 1;
              break;
            }
            return _context51.a(2);
          case 1:
            lock.current = true;
            setBusy(true);
            ok = false;
            _context51.p = 2;
            _context51.n = 3;
            return onSave({
              kind: kind,
              emoji: emoji,
              note: note.trim(),
              start: start,
              end: withEnd ? end : null
            });
          case 3:
            ok = _context51.v;
          case 4:
            _context51.p = 4;
            lock.current = false;
            setBusy(false);
            return _context51.f(4);
          case 5:
            if (ok) onClose();
          case 6:
            return _context51.a(2);
        }
      }, _callee51, null, [[2,, 4, 5]]);
    }));
    return function save() {
      return _ref144.apply(this, arguments);
    };
  }();
  return React.createElement(Sheet, {
    title: title,
    onClose: busy ? function () {} : onClose
  }, React.createElement(FL, null, "Tipo"), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 14
    }
  }, Object.entries(ABS_KINDS).map(function (_ref145) {
    var _ref146 = _slicedToArray(_ref145, 2),
      k = _ref146[0],
      v = _ref146[1];
    return React.createElement("button", {
      key: k,
      onClick: function onClick() {
        return setKind(k);
      },
      "aria-pressed": kind === k,
      style: {
        flex: 1,
        padding: "10px",
        borderRadius: 10,
        border: "2px solid ".concat(kind === k ? T.green : T.border),
        background: kind === k ? "".concat(T.green, "15") : "transparent",
        fontWeight: 700,
        fontSize: 14,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, v.label);
  })), React.createElement(FL, null, "\xCDcone"), React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      marginBottom: 14
    }
  }, UNAVAIL_EMOJIS.map(function (e) {
    return React.createElement("button", {
      key: e,
      onClick: function onClick() {
        return setEmoji(e);
      },
      "aria-label": "\xCDcone ".concat(e),
      style: {
        fontSize: 18,
        width: 34,
        height: 34,
        borderRadius: 8,
        border: "2px solid ".concat(emoji === e ? T.green : T.border),
        background: emoji === e ? "".concat(T.green, "15") : "transparent",
        cursor: "pointer"
      }
    }, e);
  })), React.createElement(FL, null, "Nota (obrigat\xF3ria)"), React.createElement(FI, {
    value: note,
    onChange: function onChange(e) {
      return setNote(e.target.value);
    },
    placeholder: "O que se passa? (ex: ligamentos, volta em novembro)",
    style: {
      marginBottom: noteOk ? 14 : 4
    }
  }), !noteOk && React.createElement("p", {
    style: {
      margin: "0 0 14px",
      fontSize: 12,
      color: T.brand
    }
  }, "Escreve uma nota para poder guardar."), React.createElement(FL, null, "Desde"), React.createElement(FI, {
    type: "date",
    value: start,
    onChange: function onChange(e) {
      return setStart(e.target.value);
    }
  }), withEnd && React.createElement(React.Fragment, null, React.createElement(FL, null, "At\xE9"), React.createElement(FI, {
    type: "date",
    value: end,
    onChange: function onChange(e) {
      return setEnd(e.target.value);
    }
  }), end && start && end < start && React.createElement("p", {
    style: {
      margin: "-8px 0 14px",
      fontSize: 12,
      color: T.brand
    }
  }, "A data de fim n\xE3o pode ser anterior ao in\xEDcio.")), React.createElement(PrimaryBtn, {
    onClick: save,
    disabled: !noteOk || !datesOk || busy,
    color: color || T.green
  }, busy ? "A guardar…" : saveLabel || "Guardar"), React.createElement("button", {
    onClick: onClose,
    disabled: busy,
    style: {
      display: "block",
      width: "100%",
      marginTop: 10,
      padding: "10px",
      background: "transparent",
      border: "none",
      color: T.sub,
      fontSize: 13,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Cancelar"));
};
var CloseAbsenceSheet = function CloseAbsenceSheet(_ref147) {
  var name = _ref147.name,
    kind = _ref147.kind,
    onConfirm = _ref147.onConfirm,
    onCancel = _ref147.onCancel;
  var _useState359 = useState(false),
    _useState360 = _slicedToArray(_useState359, 2),
    busy = _useState360[0],
    setBusy = _useState360[1];
  var lock = React.useRef(false);
  var go = function () {
    var _ref148 = _asyncToGenerator(_regenerator().m(function _callee52() {
      var ok;
      return _regenerator().w(function (_context52) {
        while (1) switch (_context52.p = _context52.n) {
          case 0:
            if (!lock.current) {
              _context52.n = 1;
              break;
            }
            return _context52.a(2);
          case 1:
            lock.current = true;
            setBusy(true);
            ok = false;
            _context52.p = 2;
            _context52.n = 3;
            return onConfirm();
          case 3:
            ok = _context52.v;
          case 4:
            _context52.p = 4;
            lock.current = false;
            setBusy(false);
            return _context52.f(4);
          case 5:
            if (ok) onCancel();
          case 6:
            return _context52.a(2);
        }
      }, _callee52, null, [[2,, 4, 5]]);
    }));
    return function go() {
      return _ref148.apply(this, arguments);
    };
  }();
  return React.createElement(Sheet, {
    title: "Fechar a ".concat((ABS_KINDS[kind] || ABS_KINDS.lesao).one, " de ").concat(name, "?"),
    onClose: busy ? function () {} : onCancel
  }, React.createElement("p", {
    style: {
      margin: "0 0 16px",
      fontSize: 14,
      color: T.sub
    }
  }, "O registo fica no hist\xF3rico com data de fim hoje (", fmtDMY(todayLocal()), ")."), React.createElement(PrimaryBtn, {
    onClick: go,
    disabled: busy,
    color: T.green
  }, busy ? "A fechar…" : "Fechar"), React.createElement("button", {
    onClick: onCancel,
    disabled: busy,
    style: {
      display: "block",
      width: "100%",
      marginTop: 10,
      padding: "10px",
      background: "transparent",
      border: "none",
      color: T.sub,
      fontSize: 13,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Cancelar"));
};
var AbsenceCards = function AbsenceCards(_ref149) {
  var records = _ref149.records,
    showName = _ref149.showName,
    color = _ref149.color,
    onUpdate = _ref149.onUpdate,
    onClose = _ref149.onClose,
    onDelete = _ref149.onDelete,
    emptyText = _ref149.emptyText,
    readOnly = _ref149.readOnly;
  var _useState361 = useState(null),
    _useState362 = _slicedToArray(_useState361, 2),
    editing = _useState362[0],
    setEditing = _useState362[1];
  var _useState363 = useState(null),
    _useState364 = _slicedToArray(_useState363, 2),
    closing = _useState364[0],
    setClosing = _useState364[1];
  var sorted = _toConsumableArray(records).sort(function (a, b) {
    return (b.start || "").localeCompare(a.start || "") || (b.end === null) - (a.end === null);
  });
  if (!sorted.length) return React.createElement("p", {
    style: {
      textAlign: "center",
      color: T.sub,
      padding: 24
    }
  }, emptyText || "Sem registos");
  var btn = {
    padding: "4px 8px",
    borderRadius: 7,
    border: "1px solid ".concat(T.border),
    background: "transparent",
    color: T.sub,
    fontSize: 12,
    cursor: "pointer",
    fontFamily: "inherit"
  };
  return React.createElement(React.Fragment, null, sorted.map(function (a) {
    var k = ABS_KINDS[a.kind];
    var d = absDays(a);
    return React.createElement("div", {
      key: a.id,
      "data-absence": a.id,
      style: {
        background: T.card,
        borderRadius: 14,
        padding: "12px 14px",
        marginBottom: 8,
        borderLeft: "3px solid ".concat(a.end ? T.border : T.brand)
      }
    }, React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-start"
      }
    }, React.createElement("span", {
      style: {
        fontSize: 22
      }
    }, a.emoji), React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14,
        fontWeight: 700,
        wordBreak: "break-word"
      }
    }, showName ? "".concat(a.memberName).concat(a.memberId ? "" : " (removido)", " \xB7 ") : "", k.label, a.end ? "" : " · em curso"), React.createElement("p", {
      style: {
        margin: "2px 0 0",
        fontSize: 13,
        wordBreak: "break-word"
      }
    }, a.note), React.createElement("p", {
      style: {
        margin: "2px 0 0",
        fontSize: 12,
        color: T.sub
      }
    }, fmtDMY(a.start), a.end ? " \u2013 ".concat(fmtDMY(a.end)) : " – hoje", " \xB7 ", plural(d, "dia", "dias")))), !readOnly && React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        marginTop: 8,
        justifyContent: "flex-end",
        flexWrap: "wrap"
      }
    }, !a.end && a.memberId && React.createElement("button", {
      onClick: function onClick() {
        return setClosing(a);
      },
      style: btn
    }, "Fechar"), React.createElement("button", {
      onClick: function onClick() {
        return setEditing(a);
      },
      "aria-label": "Editar registo",
      style: btn
    }, "\u270F\uFE0F Editar"), React.createElement("button", {
      onClick: function onClick() {
        if (window.confirm("Apagar este registo de ".concat(a.memberName, "? N\xE3o tem volta."))) onDelete(a);
      },
      "aria-label": "Apagar registo",
      style: btn
    }, "\uD83D\uDDD1\uFE0F")));
  }), editing && React.createElement(AbsenceForm, {
    title: "Editar ".concat(ABS_KINDS[editing.kind].one),
    initial: editing,
    withEnd: !!editing.end,
    color: color,
    onSave: function onSave(v) {
      return onUpdate(editing, v);
    },
    onClose: function onClose() {
      return setEditing(null);
    }
  }), closing && React.createElement(CloseAbsenceSheet, {
    name: closing.memberName,
    kind: closing.kind,
    onConfirm: function onConfirm() {
      return onClose(closing);
    },
    onCancel: function onCancel() {
      return setClosing(null);
    }
  }));
};
var AbsenceArchive = function AbsenceArchive(_ref150) {
  var team = _ref150.team,
    _ref150$absences = _ref150.absences,
    absences = _ref150$absences === void 0 ? [] : _ref150$absences,
    onUpdate = _ref150.onUpdate,
    onClose = _ref150.onClose,
    onDelete = _ref150.onDelete;
  var _useState365 = useState(""),
    _useState366 = _slicedToArray(_useState365, 2),
    fPlayer = _useState366[0],
    setFPlayer = _useState366[1];
  var _useState367 = useState(""),
    _useState368 = _slicedToArray(_useState367, 2),
    fKind = _useState368[0],
    setFKind = _useState368[1];
  var _useState369 = useState(""),
    _useState370 = _slicedToArray(_useState369, 2),
    fSeason = _useState370[0],
    setFSeason = _useState370[1];
  if (absences === null) return React.createElement("p", {
    style: {
      color: T.brand,
      fontSize: 13
    }
  }, "N\xE3o foi poss\xEDvel carregar o arquivo. Puxa para atualizar.");
  var pkey = function pkey(a) {
    return a.memberId || "n:".concat(a.memberName);
  };
  var players = [];
  var seen = new Set();
  absences.forEach(function (a) {
    if (!seen.has(pkey(a))) {
      seen.add(pkey(a));
      players.push([pkey(a), a.memberName + (a.memberId ? "" : " (removido)")]);
    }
  });
  players.sort(function (x, y) {
    return x[1].localeCompare(y[1], "pt");
  });
  var seasons = _toConsumableArray(new Set(absences.map(function (a) {
    return absSeason(a.start);
  }).filter(Boolean))).sort().reverse();
  var shown = absences.filter(function (a) {
    return (!fPlayer || pkey(a) === fPlayer) && (!fKind || a.kind === fKind) && (!fSeason || absSeason(a.start) === fSeason);
  });
  var nL = shown.filter(function (a) {
      return a.kind === "lesao";
    }).length,
    nA = shown.filter(function (a) {
      return a.kind === "ausencia";
    }).length;
  return React.createElement("div", {
    "data-testid": "absence-archive"
  }, absences.length > 0 && React.createElement(React.Fragment, null, React.createElement(FSel, {
    value: fPlayer,
    onChange: function onChange(e) {
      return setFPlayer(e.target.value);
    }
  }, React.createElement("option", {
    value: ""
  }, "Todos os jogadores"), players.map(function (_ref151) {
    var _ref152 = _slicedToArray(_ref151, 2),
      k = _ref152[0],
      n = _ref152[1];
    return React.createElement("option", {
      key: k,
      value: k
    }, n);
  })), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, React.createElement("div", {
    style: {
      flex: 1
    }
  }, React.createElement(FSel, {
    value: fKind,
    onChange: function onChange(e) {
      return setFKind(e.target.value);
    }
  }, React.createElement("option", {
    value: ""
  }, "Todos os tipos"), React.createElement("option", {
    value: "lesao"
  }, "Les\xF5es"), React.createElement("option", {
    value: "ausencia"
  }, "Aus\xEAncias"))), React.createElement("div", {
    style: {
      flex: 1
    }
  }, React.createElement(FSel, {
    value: fSeason,
    onChange: function onChange(e) {
      return setFSeason(e.target.value);
    }
  }, React.createElement("option", {
    value: ""
  }, "Todas as \xE9pocas"), seasons.map(function (s) {
    return React.createElement("option", {
      key: s,
      value: s
    }, s);
  })))), React.createElement("p", {
    style: {
      margin: "-4px 0 10px",
      fontSize: 12,
      color: T.sub
    }
  }, plural(shown.length, "registo", "registos"), " \xB7 ", plural(nL, "lesão", "lesões"), " \xB7 ", plural(nA, "ausência", "ausências"))), React.createElement(AbsenceCards, {
    records: shown,
    showName: true,
    color: team.color,
    onUpdate: onUpdate,
    onClose: onClose,
    onDelete: onDelete,
    emptyText: absences.length ? "Nenhum registo com estes filtros" : "Ainda sem lesões nem ausências registadas"
  }));
};
var DeleteTeamModal = function DeleteTeamModal(_ref153) {
  var team = _ref153.team,
    token = _ref153.token,
    onDelete = _ref153.onDelete,
    onClose = _ref153.onClose;
  var _useState371 = useState(null),
    _useState372 = _slicedToArray(_useState371, 2),
    counts = _useState372[0],
    setCounts = _useState372[1];
  var _useState373 = useState(0),
    _useState374 = _slicedToArray(_useState373, 2),
    tick = _useState374[0],
    setTick = _useState374[1];
  var _useState375 = useState(""),
    _useState376 = _slicedToArray(_useState375, 2),
    text = _useState376[0],
    setText = _useState376[1];
  var _useState377 = useState(false),
    _useState378 = _slicedToArray(_useState377, 2),
    busy = _useState378[0],
    setBusy = _useState378[1];
  var _useState379 = useState(""),
    _useState380 = _slicedToArray(_useState379, 2),
    err = _useState380[0],
    setErr = _useState380[1];
  useEffect(function () {
    var alive = true;
    if (tick > 0) setCounts(null);
    var n = function n(tbl) {
      return api.get("".concat(tbl, "?team_id=eq.").concat(team.id, "&select=id"), token).then(function (r) {
        return r.length;
      }).catch(function () {
        return null;
      });
    };
    var abs = api.get("member_absences?team_id=eq.".concat(team.id, "&select=kind"), token).then(function (r) {
      return [r.filter(function (x) {
        return x.kind === "lesao";
      }).length, r.filter(function (x) {
        return x.kind === "ausencia";
      }).length];
    }).catch(function () {
      return [null, null];
    });
    Promise.all([n("team_members"), n("fines"), n("trainings"), n("cards"), n("expenses"), abs]).then(function (_ref154) {
      var _ref155 = _slicedToArray(_ref154, 6),
        a = _ref155[0],
        b = _ref155[1],
        c = _ref155[2],
        d = _ref155[3],
        e = _ref155[4],
        _ref155$ = _slicedToArray(_ref155[5], 2),
        l = _ref155$[0],
        au = _ref155$[1];
      if (alive) setCounts([a, b, c, d, e, l, au]);
    });
    return function () {
      alive = false;
    };
  }, [team.id, tick]);
  var countsFailed = counts !== null && counts.some(function (x) {
    return x === null;
  });
  var v = function v(i) {
    return counts === null ? "…" : counts[i] === null ? "—" : counts[i];
  };
  var q = function q(i, one, many) {
    return "".concat(v(i), " ").concat(v(i) === 1 ? one : many);
  };
  var match = text === team.name;
  var go = function () {
    var _ref156 = _asyncToGenerator(_regenerator().m(function _callee53() {
      var _t68;
      return _regenerator().w(function (_context53) {
        while (1) switch (_context53.p = _context53.n) {
          case 0:
            if (!(!match || busy)) {
              _context53.n = 1;
              break;
            }
            return _context53.a(2);
          case 1:
            setBusy(true);
            setErr("");
            _context53.p = 2;
            _context53.n = 3;
            return onDelete();
          case 3:
            _context53.n = 5;
            break;
          case 4:
            _context53.p = 4;
            _t68 = _context53.v;
            setErr(errPt(_t68, "Erro ao apagar a equipa"));
            setBusy(false);
          case 5:
            return _context53.a(2);
        }
      }, _callee53, null, [[2, 4]]);
    }));
    return function go() {
      return _ref156.apply(this, arguments);
    };
  }();
  return React.createElement(Sheet, {
    title: "Apagar ".concat(team.name, "?"),
    onClose: busy ? function () {} : onClose
  }, React.createElement("div", {
    style: {
      background: "#FFF5F5",
      border: "1px solid #FFD0D0",
      borderRadius: 12,
      padding: "12px 14px",
      marginBottom: 14
    }
  }, React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontSize: 13,
      color: T.sub
    }
  }, "Perde-se tudo:"), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      fontWeight: 700,
      color: T.brand
    }
  }, q(0, "membro", "membros"), " \xB7 ", q(1, "multa", "multas"), " \xB7 ", q(2, "treino", "treinos"), " \xB7 ", q(3, "cartão", "cartões"), " \xB7 ", q(4, "despesa", "despesas"), " \xB7 ", q(5, "lesão", "lesões"), " \xB7 ", q(6, "ausência", "ausências"))), countsFailed && React.createElement(LoadWarn, {
    id: "contagens",
    onRetry: function onRetry() {
      return setTick(function (t) {
        return t + 1;
      });
    }
  }, "N\xE3o foi poss\xEDvel contar tudo o que se perde (\u2014)."), React.createElement("p", {
    style: {
      margin: "0 0 12px",
      fontSize: 14
    }
  }, "Isto n\xE3o tem volta. Escreve o nome da equipa para confirmar."), React.createElement(FI, {
    value: text,
    onChange: function onChange(e) {
      return setText(e.target.value);
    },
    placeholder: team.name,
    autoCapitalize: "off",
    autoCorrect: "off",
    spellCheck: false
  }), err && React.createElement("p", {
    style: {
      margin: "0 0 12px",
      fontSize: 13,
      fontWeight: 600,
      color: T.brand
    }
  }, err), React.createElement(PrimaryBtn, {
    onClick: onClose,
    disabled: busy,
    color: team.color
  }, "Cancelar"), React.createElement("button", {
    onClick: go,
    disabled: !match || busy,
    style: {
      display: "block",
      width: "100%",
      marginTop: 12,
      padding: "10px",
      background: "transparent",
      border: "none",
      color: T.brand,
      fontSize: 13,
      fontWeight: 600,
      cursor: match && !busy ? "pointer" : "default",
      opacity: match && !busy ? 1 : 0.35,
      fontFamily: "inherit"
    }
  }, busy ? "A apagar…" : "Apagar definitivamente"));
};
var UnavailableControl = function UnavailableControl(_ref157) {
  var m = _ref157.m,
    record = _ref157.record,
    color = _ref157.color,
    onOpen = _ref157.onOpen,
    onClose = _ref157.onClose,
    onUpdate = _ref157.onUpdate,
    onLegacy = _ref157.onLegacy;
  var _useState381 = useState(null),
    _useState382 = _slicedToArray(_useState381, 2),
    box = _useState382[0],
    setBox = _useState382[1];
  var on = m.unavailable;
  var flip = function flip() {
    if (box) return;
    if (!on) setBox("open");else setBox(record ? "close" : "legacy-close");
  };
  var done = function done() {
    return setBox(null);
  };
  var cur = record || {
    kind: "lesao",
    emoji: m.unavailableEmoji,
    note: m.unavailableNote,
    start: m.unavailableSince
  };
  return React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, m.unavailableEmoji || "🤕", " Indispon\xEDvel"), React.createElement("button", {
    onClick: flip,
    role: "switch",
    "aria-checked": on,
    "aria-label": "Indispon\xEDvel",
    style: {
      width: 46,
      height: 26,
      borderRadius: 13,
      border: "none",
      background: on ? T.green : T.border,
      position: "relative",
      cursor: "pointer",
      padding: 0
    }
  }, React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: on ? 23 : 3,
      width: 20,
      height: 20,
      borderRadius: 10,
      background: "#fff",
      transition: "left 0.15s"
    }
  }))), on && React.createElement("div", {
    style: {
      marginTop: 8,
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      flex: 1,
      fontSize: 12,
      color: T.sub
    }
  }, m.unavailableEmoji || "🤕", " ", m.unavailableNote || "Sem nota — escreve uma para poder desligar"), React.createElement("button", {
    onClick: function onClick() {
      return setBox(record ? "edit" : "legacy-fill");
    },
    style: {
      background: "none",
      border: "1px solid ".concat(T.border),
      borderRadius: 8,
      padding: "4px 8px",
      fontSize: 12,
      color: T.sub,
      cursor: "pointer",
      fontFamily: "inherit",
      flexShrink: 0
    }
  }, "\u270F\uFE0F Alterar")), box === "open" && React.createElement(AbsenceForm, {
    title: "".concat(m.name, " est\xE1 indispon\xEDvel?"),
    initial: {
      kind: "lesao",
      emoji: "🤕",
      note: "",
      start: todayLocal()
    },
    color: color,
    onSave: function onSave(v) {
      return onOpen(m.id, v);
    },
    onClose: done
  }), box === "edit" && record && React.createElement(AbsenceForm, {
    title: "Alterar ".concat((ABS_KINDS[cur.kind] || ABS_KINDS.lesao).one),
    initial: cur,
    color: color,
    onSave: function onSave(v) {
      return onUpdate(record, v);
    },
    onClose: done
  }), box === "legacy-fill" && React.createElement(AbsenceForm, {
    title: "Alterar indisponibilidade",
    initial: cur,
    color: color,
    onSave: function onSave(v) {
      return onLegacy(m, v, false);
    },
    onClose: done
  }), box === "legacy-close" && React.createElement(AbsenceForm, {
    title: "Fechar a indisponibilidade de ".concat(m.name),
    initial: cur,
    saveLabel: "Guardar e fechar",
    color: color,
    onSave: function onSave(v) {
      return onLegacy(m, v, true);
    },
    onClose: done
  }), box === "close" && record && React.createElement(CloseAbsenceSheet, {
    name: m.name,
    kind: record.kind,
    onConfirm: function onConfirm() {
      return onClose(record);
    },
    onCancel: done
  }));
};
var ManageTeamScreen = function ManageTeamScreen(_ref158) {
  var team = _ref158.team,
    members = _ref158.members,
    fineTypes = _ref158.fineTypes,
    token = _ref158.token,
    myUserId = _ref158.myUserId,
    onBack = _ref158.onBack,
    onAddMember = _ref158.onAddMember,
    onToggleRole = _ref158.onToggleRole,
    onRemoveMember = _ref158.onRemoveMember,
    onEditMember = _ref158.onEditMember,
    onRegenerateCode = _ref158.onRegenerateCode,
    onDeleteTeam = _ref158.onDeleteTeam,
    onEditTeam = _ref158.onEditTeam,
    absences = _ref158.absences,
    absHandlers = _ref158.absHandlers,
    setFineTypes = _ref158.setFineTypes,
    onClaimsChanged = _ref158.onClaimsChanged;
  var tm = members.filter(function (m) {
    return m.teamId === team.id;
  });
  var _useState383 = useState(false),
    _useState384 = _slicedToArray(_useState383, 2),
    showDelete = _useState384[0],
    setShowDelete = _useState384[1];
  var _useState385 = useState(false),
    _useState386 = _slicedToArray(_useState385, 2),
    ftWarn = _useState386[0],
    setFtWarn = _useState386[1];
  var _useState387 = useState(0),
    _useState388 = _slicedToArray(_useState387, 2),
    ftTick = _useState388[0],
    setFtTick = _useState388[1];
  useEffect(function () {
    if (!setFineTypes || !token || RO.on) return;
    var alive = true;
    api.get("fine_types?team_id=eq.".concat(team.id, "&order=amount.asc"), token).then(function (rows) {
      if (!alive) return;
      if (Array.isArray(rows)) {
        setFineTypes(function (p) {
          return [].concat(_toConsumableArray(p.filter(function (x) {
            return x.teamId !== team.id;
          })), _toConsumableArray(rows.map(aFineType)));
        });
        setFtWarn(false);
      } else setFtWarn(true);
    }).catch(function () {
      if (alive) setFtWarn(true);
    });
    return function () {
      alive = false;
    };
  }, [team.id, ftTick]);
  var isCreator = team.createdBy === myUserId;
  var myRoleHere = (tm.find(function (x) {
    return x.userId === myUserId;
  }) || {}).role;
  var canMarkUnavailable = !!absHandlers && myRoleHere === "admin";
  var canEditTeam = tm.some(function (m) {
    return m.userId === myUserId && m.role === "admin";
  }) || team.createdBy === myUserId;
  var admins = tm.filter(function (m) {
    return m.role === "admin";
  });
  var nonAdmin = tm.filter(function (m) {
    return m.role !== "admin";
  });
  var staff = sortMembers(nonAdmin.filter(function (m) {
    return isStaffPosition(m.position);
  }));
  var players = sortMembers(nonAdmin.filter(function (m) {
    return !isStaffPosition(m.position);
  }));
  var groups = [{
    role: "admin",
    title: admins.length === 1 ? "Administrador" : "Administradores",
    color: "#1D3557",
    list: admins
  }, {
    role: "staff",
    title: "Equipa técnica",
    color: "#2E7D32",
    list: staff
  }, {
    role: "player",
    title: players.length === 1 ? "Jogador" : "Jogadores",
    color: T.sub,
    list: players
  }].filter(function (g) {
    return g.list.length > 0;
  });
  var _useState389 = useState(null),
    _useState390 = _slicedToArray(_useState389, 2),
    roleErr = _useState390[0],
    setRoleErr = _useState390[1];
  var changeRole = function () {
    var _ref159 = _asyncToGenerator(_regenerator().m(function _callee54(m, r) {
      var _t69;
      return _regenerator().w(function (_context54) {
        while (1) switch (_context54.p = _context54.n) {
          case 0:
            setRoleErr(null);
            _context54.p = 1;
            _context54.n = 2;
            return onToggleRole(m.id, r);
          case 2:
            _context54.n = 4;
            break;
          case 3:
            _context54.p = 3;
            _t69 = _context54.v;
            setRoleErr({
              id: m.id,
              msg: errPt(_t69, "Erro ao alterar o papel")
            });
          case 4:
            return _context54.a(2);
        }
      }, _callee54, null, [[1, 3]]);
    }));
    return function changeRole(_x20, _x21) {
      return _ref159.apply(this, arguments);
    };
  }();
  var _useState391 = useState(null),
    _useState392 = _slicedToArray(_useState391, 2),
    confirmRemove = _useState392[0],
    setConfirmRemove = _useState392[1];
  var _useState393 = useState(false),
    _useState394 = _slicedToArray(_useState393, 2),
    removeBusy = _useState394[0],
    setRemoveBusy = _useState394[1];
  var _useState395 = useState(""),
    _useState396 = _slicedToArray(_useState395, 2),
    removeErr = _useState396[0],
    setRemoveErr = _useState396[1];
  var closeRemove = function closeRemove() {
    setConfirmRemove(null);
    setRemoveErr("");
  };
  var doRemove = function () {
    var _ref160 = _asyncToGenerator(_regenerator().m(function _callee55() {
      var _t70;
      return _regenerator().w(function (_context55) {
        while (1) switch (_context55.p = _context55.n) {
          case 0:
            if (!removeBusy) {
              _context55.n = 1;
              break;
            }
            return _context55.a(2);
          case 1:
            setRemoveBusy(true);
            setRemoveErr("");
            _context55.p = 2;
            _context55.n = 3;
            return onRemoveMember(confirmRemove.id);
          case 3:
            closeRemove();
            _context55.n = 5;
            break;
          case 4:
            _context55.p = 4;
            _t70 = _context55.v;
            setRemoveErr(errPt(_t70, "Erro ao remover"));
          case 5:
            setRemoveBusy(false);
          case 6:
            return _context55.a(2);
        }
      }, _callee55, null, [[2, 4]]);
    }));
    return function doRemove() {
      return _ref160.apply(this, arguments);
    };
  }();
  var _useState397 = useState(null),
    _useState398 = _slicedToArray(_useState397, 2),
    editingMember = _useState398[0],
    setEditingMember = _useState398[1];
  var _useState399 = useState(false),
    _useState400 = _slicedToArray(_useState399, 2),
    copied = _useState400[0],
    setCopied = _useState400[1];
  var copyCode = function copyCode() {
    setCopied(true);
    setTimeout(function () {
      return setCopied(false);
    }, 2000);
  };
  var _useState401 = useState(null),
    _useState402 = _slicedToArray(_useState401, 2),
    expandedMember = _useState402[0],
    setExpandedMember = _useState402[1];
  var Row = function Row(_ref161) {
    var m = _ref161.m;
    var expanded = expandedMember === m.id;
    var subLine = [realPosition(m.position), m.unavailable ? "Indispon\xEDvel".concat(fmtDM(m.unavailableSince) ? " desde ".concat(fmtDM(m.unavailableSince)) : "") : ""].filter(Boolean).join(" · ");
    return React.createElement("div", {
      style: {
        background: T.card,
        borderRadius: 14,
        marginBottom: 8,
        overflow: "hidden"
      }
    }, React.createElement("div", {
      onClick: function onClick() {
        return setExpandedMember(expanded ? null : m.id);
      },
      style: {
        padding: "13px 14px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        cursor: "pointer"
      }
    }, React.createElement(Avatar, {
      initials: m.initials,
      color: team.color,
      size: 44,
      photo: m.avatarUrl,
      name: m.name
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
    }, m.name, m.unavailable && " ".concat(m.unavailableEmoji || "🤕")), m.userId === myUserId && React.createElement(Badge, {
      label: "Tu",
      color: team.color
    }), React.createElement(RoleBadgeLight, {
      role: m.role
    })), subLine && React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        color: T.sub
      }
    }, subLine)), React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        margin: "-6px -8px -6px 0",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: T.sub,
        fontSize: 18
      }
    }, React.createElement("span", {
      style: {
        transition: "transform 0.2s",
        display: "inline-block",
        transform: expanded ? "rotate(180deg)" : "rotate(0deg)"
      }
    }, "\u2304"))), expanded && React.createElement("div", {
      style: {
        borderTop: "1px solid ".concat(T.border),
        padding: "12px 14px"
      }
    }, React.createElement("div", {
      style: {
        marginBottom: 12,
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, m.phone && React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, React.createElement("span", {
      style: {
        fontSize: 14,
        width: 20
      }
    }, "\uD83D\uDCF1"), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13
      }
    }, React.createElement("span", {
      style: {
        color: T.sub
      }
    }, "Telefone: "), React.createElement("strong", null, m.phone))), m.birthday && React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, React.createElement("span", {
      style: {
        fontSize: 14,
        width: 20
      }
    }, "\uD83C\uDF82"), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13
      }
    }, React.createElement("span", {
      style: {
        color: T.sub
      }
    }, "Anivers\xE1rio: "), React.createElement("strong", null, fmtDate(m.birthday)))), !m.phone && !m.birthday && React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        color: T.sub,
        fontStyle: "italic"
      }
    }, "Sem informa\xE7\xF5es adicionais")), canMarkUnavailable && React.createElement(UnavailableControl, {
      m: m,
      record: (absences || []).find(function (a) {
        return a.memberId === m.id && !a.end;
      }),
      color: team.color,
      onOpen: absHandlers.open,
      onClose: absHandlers.close,
      onUpdate: absHandlers.update,
      onLegacy: absHandlers.legacy
    }), React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, React.createElement("button", {
      onClick: function onClick() {
        setEditingMember(m);
        setExpandedMember(null);
      },
      style: {
        flex: 1,
        padding: "10px",
        borderRadius: 10,
        border: "1.5px solid ".concat(team.color),
        background: "".concat(team.color, "12"),
        color: team.color,
        fontSize: 13,
        fontWeight: 700,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, "\u270F\uFE0F Editar"), m.userId !== myUserId && React.createElement(React.Fragment, null, React.createElement("div", {
      style: {
        display: "flex",
        gap: 4,
        flexWrap: "wrap"
      }
    }, [["admin", "🛡 Admin", "#1D3557"], ["player", "👤 Jogador", "#6B6B72"]].map(function (_ref162) {
      var _ref163 = _slicedToArray(_ref162, 3),
        r = _ref163[0],
        l = _ref163[1],
        c = _ref163[2];
      return React.createElement("button", {
        key: r,
        onClick: function onClick() {
          return m.role !== r && changeRole(m, r);
        },
        style: {
          padding: "7px 10px",
          borderRadius: 10,
          border: "1.5px solid ".concat(m.role === r ? solidForWhite(team.color) : T.border),
          background: m.role === r ? solidForWhite(team.color) : "transparent",
          color: m.role === r ? "#fff" : T.sub,
          fontSize: 12,
          fontWeight: m.role === r ? 800 : 700,
          cursor: m.role === r ? "default" : "pointer",
          fontFamily: "inherit"
        }
      }, l);
    })), roleErr && roleErr.id === m.id && React.createElement("p", {
      style: {
        width: "100%",
        margin: "2px 0 0",
        fontSize: 12,
        fontWeight: 600,
        color: T.brand
      }
    }, roleErr.msg), React.createElement("button", {
      onClick: function onClick() {
        return setConfirmRemove(m);
      },
      style: {
        width: "100%",
        padding: "9px",
        borderRadius: 10,
        border: "1.5px solid ".concat(T.brand),
        background: "transparent",
        color: T.brand,
        fontSize: 13,
        fontWeight: 700,
        cursor: "pointer",
        fontFamily: "inherit",
        marginTop: 18
      }
    }, "\uD83D\uDDD1 Remover membro")))));
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
      minHeight: 44,
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
  }, plural(tm.length, "membro", "membros"), " \xB7 ", admins.length, " admin", admins.length !== 1 ? "s" : "")), React.createElement("div", {
    style: {
      padding: "16px 16px 100px"
    }
  }, canEditTeam && onEditTeam && React.createElement(TeamDataSection, {
    team: team,
    onSave: onEditTeam
  }), React.createElement("div", {
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
    href: "https://wa.me/?text=".concat(encodeURIComponent("\uD83D\uDFE5 *Multeam* \u2014 Junta-te \xE0 equipa *".concat(team.name, "*!\n\n1. Abre o link: ").concat(APP_URL, "/?invite=").concat(team.inviteCode, "\n2. Cria conta\n3. O c\xF3digo entra automaticamente!\n\nC\xF3digo manual: *").concat(team.inviteCode, "*"))),
    target: "_blank",
    rel: "noopener",
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      padding: "11px",
      minHeight: 44,
      borderRadius: 12,
      background: "#0E7A3E",
      color: "#fff",
      fontWeight: 700,
      fontSize: 14,
      textDecoration: "none"
    }
  }, "\uD83D\uDCF1 WhatsApp"), React.createElement("a", {
    href: "mailto:?subject=Convite para ".concat(team.name, "&body=").concat(encodeURIComponent("Ol\xE1!\n\nEstou a convidar-te para a equipa ".concat(team.name, " no Multeam.\n\nAbre este link para entrares diretamente:\n").concat(APP_URL, "/?invite=").concat(team.inviteCode, "\n\nOu entra no app e usa o c\xF3digo: ").concat(team.inviteCode, "\n\nAt\xE9 j\xE1!"))),
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      padding: "11px",
      minHeight: 44,
      borderRadius: 12,
      background: T.navy,
      color: "#fff",
      fontWeight: 700,
      fontSize: 14,
      textDecoration: "none"
    }
  }, "\u2709\uFE0F Email"))), !RO.on && React.createElement(ClaimsAdminSection, {
    team: team,
    members: members,
    token: token,
    onChanged: onClaimsChanged
  }), React.createElement("div", {
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
  }, "\u2795 Adicionar membro"), groups.map(function (g, gi) {
    var unav = g.list.filter(function (m) {
      return m.unavailable;
    }).length;
    return React.createElement(React.Fragment, {
      key: g.role
    }, React.createElement("p", {
      style: {
        margin: gi === 0 ? "0 0 8px" : "16px 0 8px",
        fontSize: 11,
        fontWeight: 700,
        color: g.color,
        textTransform: "uppercase",
        letterSpacing: 0.5,
        display: "flex",
        alignItems: "center",
        gap: 5
      }
    }, g.role === "admin" ? React.createElement(ShieldIcon, {
      size: 11,
      color: g.color
    }) : React.createElement(PersonIcon, {
      size: 11,
      color: g.color
    }), " ", g.title, " (", g.list.length, ")", unav > 0 && " \xB7 ".concat(unav, " ").concat(unav === 1 ? "indisponível" : "indisponíveis")), g.list.map(function (m) {
      return React.createElement(React.Fragment, {
        key: m.id
      }, Row({
        m: m
      }));
    }));
  }), React.createElement(Sec, {
    label: "Tipos de multa"
  }), ftWarn && !RO.on && React.createElement(LoadWarn, {
    id: "tipos-multa",
    onRetry: function onRetry() {
      setFtWarn(false);
      setFtTick(function (t) {
        return t + 1;
      });
    }
  }, "N\xE3o foi poss\xEDvel atualizar os tipos de multa. A lista pode estar desatualizada."), React.createElement(FineTypesManager, {
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
    onUpdated: function onUpdated(id, data) {
      return setFineTypes(function (p) {
        return p.map(function (x) {
          return x.id === id ? _objectSpread(_objectSpread({}, x), _typeof(data) === "object" ? data : {
            emoji: data
          }) : x;
        });
      });
    },
    token: token
  }), canMarkUnavailable && React.createElement(React.Fragment, null, React.createElement(Sec, {
    label: "Arquivo de les\xF5es e aus\xEAncias"
  }), React.createElement(AbsenceArchive, {
    team: team,
    absences: absences,
    onUpdate: absHandlers.update,
    onClose: absHandlers.close,
    onDelete: absHandlers.del
  })), isCreator && React.createElement("div", {
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
    onClick: function onClick() {
      return setShowDelete(true);
    },
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
  }, "\uD83D\uDDD1\uFE0F Apagar equipa"))), showDelete && isCreator && React.createElement(DeleteTeamModal, {
    team: team,
    token: token,
    onDelete: onDeleteTeam,
    onClose: function onClose() {
      return setShowDelete(false);
    }
  }), confirmRemove && React.createElement("div", {
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
  }, "Este jogador perder\xE1 o acesso \xE0 equipa. Podes adicion\xE1-lo novamente com um novo convite."), removeErr && React.createElement("p", {
    style: {
      margin: "-12px 0 16px",
      fontSize: 13,
      fontWeight: 600,
      color: T.brand,
      textAlign: "center"
    }
  }, removeErr), React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, React.createElement("button", {
    onClick: closeRemove,
    disabled: removeBusy,
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
    onClick: doRemove,
    disabled: removeBusy,
    style: {
      flex: 1,
      padding: "13px",
      borderRadius: 12,
      border: "none",
      background: T.brand,
      color: "#fff",
      fontWeight: 800,
      cursor: removeBusy ? "default" : "pointer",
      opacity: removeBusy ? 0.6 : 1,
      fontFamily: "inherit",
      fontSize: 15
    }
  }, removeBusy ? "A remover…" : "Remover")))), editingMember && React.createElement(EditMemberModal, {
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
var MemberDetailScreen = function MemberDetailScreen(_ref164) {
  var member = _ref164.member,
    team = _ref164.team,
    fines = _ref164.fines,
    onBack = _ref164.onBack,
    onTogglePaid = _ref164.onTogglePaid,
    onDeleteFine = _ref164.onDeleteFine,
    isAdmin = _ref164.isAdmin,
    absences = _ref164.absences,
    absHandlers = _ref164.absHandlers,
    readOnly = _ref164.readOnly;
  var _useState403 = useState("multas"),
    _useState404 = _slicedToArray(_useState403, 2),
    ptab = _useState404[0],
    setPtab = _useState404[1];
  var _useState405 = useState(false),
    _useState406 = _slicedToArray(_useState405, 2),
    adding = _useState406[0],
    setAdding = _useState406[1];
  var showHist = isAdmin && !!absHandlers || !!readOnly;
  var mine = (absences || []).filter(function (a) {
    return a.memberId === member.id;
  });
  var pf = fines.filter(function (f) {
    return f.teamId === team.id && f.memberId === member.id;
  }).sort(byDayDesc);
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
      padding: "16px 16px 24px",
      color: "#fff",
      textAlign: "center"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      marginBottom: 20
    }
  }, React.createElement("button", {
    onClick: onBack,
    style: {
      minHeight: 44,
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
  }, "\u2190 Voltar")), React.createElement(Avatar, {
    initials: member.initials,
    color: "rgba(255,255,255,0.2)",
    size: 64,
    photo: member.avatarUrl,
    name: member.name
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
  }, member.unavailable && React.createElement("div", {
    style: {
      background: T.card,
      border: "1px solid ".concat(T.border),
      borderRadius: 12,
      padding: "10px 12px",
      marginBottom: 14,
      fontSize: 13,
      color: T.sub
    }
  }, member.unavailableEmoji || "🤕", " ", unavailText(member)), showHist && React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 6
    }
  }, [["multas", "Multas"], ["historico", "Histórico"]].map(function (_ref165) {
    var _ref166 = _slicedToArray(_ref165, 2),
      k = _ref166[0],
      l = _ref166[1];
    return React.createElement("button", {
      key: k,
      role: "tab",
      "aria-selected": ptab === k,
      onClick: function onClick() {
        return setPtab(k);
      },
      style: {
        flex: 1,
        padding: "9px",
        borderRadius: 10,
        border: "1.5px solid ".concat(ptab === k ? team.color : T.border),
        background: ptab === k ? "".concat(team.color, "15") : "transparent",
        color: ptab === k ? team.color : T.sub,
        fontWeight: 700,
        fontSize: 13,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, l);
  })), showHist && ptab === "historico" && React.createElement("div", {
    "data-testid": "member-history"
  }, React.createElement(Sec, {
    label: "Hist\xF3rico de les\xF5es e aus\xEAncias"
  }), absences === null ? React.createElement("p", {
    style: {
      color: T.brand,
      fontSize: 13
    }
  }, "N\xE3o foi poss\xEDvel carregar o hist\xF3rico. Puxa para atualizar.") : React.createElement(React.Fragment, null, React.createElement("p", {
    style: {
      margin: "0 0 10px",
      fontSize: 12,
      color: T.sub
    }
  }, plural(mine.length, "registo", "registos"), " \xB7 ", plural(mine.filter(function (a) {
    return a.kind === "lesao";
  }).length, "lesão", "lesões"), " \xB7 ", plural(mine.filter(function (a) {
    return a.kind === "ausencia";
  }).length, "ausência", "ausências")), React.createElement(AbsenceCards, {
    records: mine,
    color: team.color,
    readOnly: readOnly,
    onUpdate: absHandlers && absHandlers.update,
    onClose: absHandlers && absHandlers.close,
    onDelete: absHandlers && absHandlers.del,
    emptyText: "Sem les\xF5es nem aus\xEAncias registadas"
  }), !readOnly && (!member.unavailable ? React.createElement("button", {
    onClick: function onClick() {
      return setAdding(true);
    },
    style: {
      width: "100%",
      padding: "11px",
      borderRadius: 10,
      border: "1.5px dashed ".concat(T.border),
      background: "transparent",
      color: T.sub,
      fontWeight: 700,
      fontSize: 13,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "+ Adicionar registo passado") : React.createElement("p", {
    style: {
      fontSize: 12,
      color: T.sub,
      textAlign: "center"
    }
  }, "Para adicionar um registo passado, fecha primeiro a indisponibilidade atual.")), adding && React.createElement(AbsenceForm, {
    title: "Registo passado",
    initial: {
      kind: "lesao",
      emoji: "🤕",
      note: "",
      start: todayLocal(),
      end: todayLocal()
    },
    withEnd: true,
    color: team.color,
    onSave: function onSave(v) {
      return absHandlers.addPast(member.id, v);
    },
    onClose: function onClose() {
      return setAdding(false);
    }
  }))), (!showHist || ptab === "multas") && React.createElement(React.Fragment, null, React.createElement(Sec, {
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
    }, React.createElement(FineIcon, {
      icon: f.emoji,
      size: 24
    }), React.createElement("div", {
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
    }, fmtDay(f.date))), React.createElement("div", {
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
    }, f.paid ? "✓" : "Pagar"), isAdmin && onDeleteFine && React.createElement("button", {
      onClick: function onClick() {
        if (window.confirm("Apagar esta multa?")) onDeleteFine(f.id);
      },
      style: {
        display: "block",
        marginTop: 4,
        padding: "3px 8px",
        borderRadius: 7,
        border: "1.5px solid #666",
        background: "transparent",
        color: "#888",
        fontSize: 11,
        fontWeight: 700,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, "\uD83D\uDDD1\uFE0F")));
  }))));
};
var LoginScreen = function LoginScreen(_ref167) {
  var onLogin = _ref167.onLogin;
  var _useState407 = useState("patricio@multeam.app"),
    _useState408 = _slicedToArray(_useState407, 2),
    email = _useState408[0],
    setEmail = _useState408[1];
  var _useState409 = useState("••••••••"),
    _useState410 = _slicedToArray(_useState409, 2),
    pass = _useState410[0],
    setPass = _useState410[1];
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
var ResetPasswordScreen = function ResetPasswordScreen(_ref168) {
  var accessToken = _ref168.accessToken,
    onDone = _ref168.onDone;
  var _useState411 = useState(""),
    _useState412 = _slicedToArray(_useState411, 2),
    pass = _useState412[0],
    setPass = _useState412[1];
  var _useState413 = useState(""),
    _useState414 = _slicedToArray(_useState413, 2),
    pass2 = _useState414[0],
    setPass2 = _useState414[1];
  var _useState415 = useState(false),
    _useState416 = _slicedToArray(_useState415, 2),
    showPass = _useState416[0],
    setShowPass = _useState416[1];
  var _useState417 = useState(""),
    _useState418 = _slicedToArray(_useState417, 2),
    err = _useState418[0],
    setErr = _useState418[1];
  var _useState419 = useState(false),
    _useState420 = _slicedToArray(_useState419, 2),
    done = _useState420[0],
    setDone = _useState420[1];
  var _useState421 = useState(false),
    _useState422 = _slicedToArray(_useState421, 2),
    loading = _useState422[0],
    setLoading = _useState422[1];
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
    var _ref169 = _asyncToGenerator(_regenerator().m(function _callee56() {
      var _t71;
      return _regenerator().w(function (_context56) {
        while (1) switch (_context56.p = _context56.n) {
          case 0:
            if (!(pass.length < 6)) {
              _context56.n = 1;
              break;
            }
            return _context56.a(2, setErr("Mínimo 6 caracteres"));
          case 1:
            if (!(pass !== pass2)) {
              _context56.n = 2;
              break;
            }
            return _context56.a(2, setErr("As passwords não coincidem"));
          case 2:
            setLoading(true);
            setErr("");
            _context56.p = 3;
            _context56.n = 4;
            return api.updatePassword(pass, accessToken);
          case 4:
            setDone(true);
            setTimeout(onDone, 2500);
            _context56.n = 6;
            break;
          case 5:
            _context56.p = 5;
            _t71 = _context56.v;
            setErr(errPt(_t71));
          case 6:
            setLoading(false);
          case 7:
            return _context56.a(2);
        }
      }, _callee56, null, [[3, 5]]);
    }));
    return function save() {
      return _ref169.apply(this, arguments);
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
var AuthScreen = function AuthScreen(_ref170) {
  var onLogin = _ref170.onLogin,
    onRegister = _ref170.onRegister,
    error = _ref170.error,
    loading = _ref170.loading;
  var _useState423 = useState("login"),
    _useState424 = _slicedToArray(_useState423, 2),
    mode = _useState424[0],
    setMode = _useState424[1];
  var _useState425 = useState(""),
    _useState426 = _slicedToArray(_useState425, 2),
    email = _useState426[0],
    setEmail = _useState426[1];
  var _useState427 = useState(""),
    _useState428 = _slicedToArray(_useState427, 2),
    pass = _useState428[0],
    setPass = _useState428[1];
  var _useState429 = useState(""),
    _useState430 = _slicedToArray(_useState429, 2),
    name = _useState430[0],
    setName = _useState430[1];
  var _useState431 = useState(false),
    _useState432 = _slicedToArray(_useState431, 2),
    showPass = _useState432[0],
    setShowPass = _useState432[1];
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
      padding: "68px 28px 28px",
      position: "relative"
    }
  }, React.createElement("a", {
    href: "/sobre/",
    target: "_blank",
    rel: "noopener",
    style: {
      position: "absolute",
      top: "calc(env(safe-area-inset-top, 0px) + 12px)",
      right: 14,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      minHeight: 44,
      padding: "0 16px",
      borderRadius: 22,
      border: "1.5px solid rgba(255,255,255,0.6)",
      background: "rgba(255,255,255,0.12)",
      color: "#fff",
      fontSize: 14,
      fontWeight: 700,
      textDecoration: "none",
      fontFamily: "inherit"
    }
  }, "\u24D8 Sobre a app"), React.createElement("div", {
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
      color: "rgba(255,255,255,0.75)",
      margin: "8px auto 0",
      fontSize: 15,
      lineHeight: 1.35,
      maxWidth: 280
    }
  }, "Multas, presen\xE7as e caixa da equipa. Gr\xE1tis.")), React.createElement("div", {
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
  }, [["login", "Entrar"], ["register", "Criar conta"]].map(function (_ref171) {
    var _ref172 = _slicedToArray(_ref171, 2),
      m = _ref172[0],
      l = _ref172[1];
    return React.createElement("button", {
      key: m,
      onClick: function onClick() {
        return setMode(m);
      },
      style: {
        flex: 1,
        padding: "10px",
        minHeight: 44,
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
    onClick: _asyncToGenerator(_regenerator().m(function _callee57() {
      return _regenerator().w(function (_context57) {
        while (1) switch (_context57.n) {
          case 0:
            if (email) {
              _context57.n = 1;
              break;
            }
            alert("Escreve o teu email primeiro");
            return _context57.a(2);
          case 1:
            _context57.n = 2;
            return api.resetPassword(email);
          case 2:
            alert("Email de recuperação enviado para " + email);
          case 3:
            return _context57.a(2);
        }
      }, _callee57);
    })),
    style: {
      textAlign: "center",
      color: "rgba(255,255,255,0.7)",
      fontSize: 13,
      marginTop: 0,
      padding: "14px 0",
      cursor: "pointer",
      textDecoration: "underline"
    }
  }, "Esqueceste a password?"), mode === "login" && React.createElement("p", {
    onClick: _asyncToGenerator(_regenerator().m(function _callee58() {
      return _regenerator().w(function (_context58) {
        while (1) switch (_context58.n) {
          case 0:
            if (email) {
              _context58.n = 1;
              break;
            }
            alert("Mete o teu email primeiro");
            return _context58.a(2);
          case 1:
            _context58.n = 2;
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
            return _context58.a(2);
        }
      }, _callee58);
    })),
    style: {
      textAlign: "center",
      color: "rgba(255,255,255,0.7)",
      fontSize: 13,
      marginTop: 0,
      padding: "14px 0",
      cursor: "pointer",
      textDecoration: "underline"
    }
  }, "Esqueci a password"), React.createElement("a", {
    href: "/sobre/",
    target: "_blank",
    rel: "noopener",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      boxSizing: "border-box",
      minHeight: 44,
      marginTop: 16,
      padding: "10px 16px",
      borderRadius: 14,
      border: "1.5px solid rgba(255,255,255,0.85)",
      background: "transparent",
      color: "#fff",
      fontSize: 15,
      fontWeight: 700,
      textDecoration: "none",
      fontFamily: "inherit"
    }
  }, "Como funciona a Multeam"), React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: 8,
      color: "rgba(255,255,255,0.7)",
      fontSize: 13
    }
  }, React.createElement("span", null, "Precisas de ajuda?"), React.createElement("a", {
    href: "mailto:support@multeam.ch?subject=Multeam%20-%20Login",
    style: {
      display: "inline-flex",
      alignItems: "center",
      minHeight: 44,
      padding: "0 8px",
      color: "rgba(255,255,255,0.85)",
      fontWeight: 700,
      textDecoration: "underline",
      fontFamily: "inherit"
    }
  }, "Contacto"))));
};
var Spinner = function Spinner(_ref175) {
  var _ref175$msg = _ref175.msg,
    msg = _ref175$msg === void 0 ? "A carregar..." : _ref175$msg;
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
var plur = function plur(n, one, many) {
  return "".concat(n, " ").concat(n === 1 ? one : many);
};
var KindPicker = function KindPicker(_ref176) {
  var value = _ref176.value,
    onChange = _ref176.onChange;
  return React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 14
    }
  }, [["amarelo", "🟨 Amarelo", T.yellow, "#1D1D1F"], ["vermelho", "🟥 Vermelho", T.brand, "#fff"]].map(function (_ref177) {
    var _ref178 = _slicedToArray(_ref177, 4),
      k = _ref178[0],
      l = _ref178[1],
      bg = _ref178[2],
      fg = _ref178[3];
    return React.createElement("button", {
      key: k,
      onClick: function onClick() {
        return onChange(k);
      },
      style: {
        flex: 1,
        padding: "16px 8px",
        borderRadius: 14,
        border: value === k ? "3px solid ".concat(T.navy) : "2px solid ".concat(T.border),
        background: value === k ? bg : T.inputBg,
        color: value === k ? fg : T.sub,
        fontSize: 16,
        fontWeight: 800,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, l);
  }));
};
var AddCardModal = function AddCardModal(_ref179) {
  var team = _ref179.team,
    members = _ref179.members,
    cards = _ref179.cards,
    onAdd = _ref179.onAdd,
    onClose = _ref179.onClose;
  var tm = sortMembers(members.filter(function (m) {
    return m.teamId === team.id;
  }));
  var _useState433 = useState(""),
    _useState434 = _slicedToArray(_useState433, 2),
    mid = _useState434[0],
    setMid = _useState434[1];
  var _useState435 = useState("amarelo"),
    _useState436 = _slicedToArray(_useState435, 2),
    kind = _useState436[0],
    setKind = _useState436[1];
  var _useState437 = useState(todayLocal()),
    _useState438 = _slicedToArray(_useState437, 2),
    date = _useState438[0],
    setDate = _useState438[1];
  var _useState439 = useState(""),
    _useState440 = _slicedToArray(_useState439, 2),
    opponent = _useState440[0],
    setOpponent = _useState440[1];
  var _useState441 = useState(""),
    _useState442 = _slicedToArray(_useState441, 2),
    note = _useState442[0],
    setNote = _useState442[1];
  var _useState443 = useState(false),
    _useState444 = _slicedToArray(_useState443, 2),
    saving = _useState444[0],
    setSaving = _useState444[1];
  var _useState445 = useState(""),
    _useState446 = _slicedToArray(_useState445, 2),
    err = _useState446[0],
    setErr = _useState446[1];
  var sel = tm.find(function (m) {
    return String(m.id) === String(mid);
  });
  var y = mid ? cardCount(cards, team.id, mid).yellows : 0;
  var after = y + 1;
  var consequence = !sel ? null : kind === "vermelho" ? {
    t: "Cartão vermelho. O castigo é dado pela associação.",
    color: T.brand,
    strong: false
  } : after >= 5 ? {
    t: "Fica SUSPENSO por 1 jogo.",
    color: "#B00020",
    strong: true
  } : after === 4 ? {
    t: "Fica com 4 amarelos — a 1 da suspensão.",
    color: T.brand,
    strong: true
  } : {
    t: "Fica com ".concat(plur(after, "amarelo", "amarelos"), "."),
    color: T.sub,
    strong: false
  };
  var save = function () {
    var _ref180 = _asyncToGenerator(_regenerator().m(function _callee59() {
      var _t72;
      return _regenerator().w(function (_context59) {
        while (1) switch (_context59.p = _context59.n) {
          case 0:
            if (!(!mid || !date || saving)) {
              _context59.n = 1;
              break;
            }
            return _context59.a(2);
          case 1:
            setSaving(true);
            setErr("");
            _context59.p = 2;
            _context59.n = 3;
            return onAdd({
              teamId: team.id,
              memberId: mid,
              kind: kind,
              date: date,
              opponent: opponent.trim(),
              note: note.trim()
            });
          case 3:
            onClose();
            _context59.n = 5;
            break;
          case 4:
            _context59.p = 4;
            _t72 = _context59.v;
            setErr(errPt(_t72));
            setSaving(false);
          case 5:
            return _context59.a(2);
        }
      }, _callee59, null, [[2, 4]]);
    }));
    return function save() {
      return _ref180.apply(this, arguments);
    };
  }();
  return React.createElement(Sheet, {
    onClose: onClose,
    title: "Lan\xE7ar cart\xE3o"
  }, sel && React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      background: "".concat(T.navy, "12"),
      border: "2px solid ".concat(T.navy),
      borderRadius: 14,
      padding: "10px 12px",
      marginBottom: 14
    }
  }, React.createElement(Avatar, {
    initials: sel.initials,
    photo: sel.avatarUrl,
    color: team.color,
    size: 44,
    name: sel.name
  }), React.createElement("div", null, React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 11,
      fontWeight: 700,
      color: T.sub,
      textTransform: "uppercase",
      letterSpacing: 0.5
    }
  }, "Cart\xE3o para"), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      fontWeight: 900
    }
  }, sel.name))), React.createElement(FL, null, sel ? "Mudar jogador" : "Jogador"), React.createElement("div", {
    style: {
      maxHeight: 200,
      overflowY: "auto",
      marginBottom: 14,
      border: "1.5px solid ".concat(T.border),
      borderRadius: 12
    }
  }, tm.map(function (m) {
    return React.createElement("div", {
      key: m.id,
      onClick: function onClick() {
        return setMid(m.id);
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 12px",
        cursor: "pointer",
        background: String(mid) === String(m.id) ? "".concat(T.navy, "18") : "transparent",
        borderBottom: "1px solid ".concat(T.border)
      }
    }, React.createElement(Avatar, {
      initials: m.initials,
      photo: m.avatarUrl,
      color: team.color,
      size: 32,
      name: m.name
    }), React.createElement("span", {
      style: {
        flex: 1,
        fontWeight: String(mid) === String(m.id) ? 800 : 600,
        fontSize: 14
      }
    }, m.name), String(mid) === String(m.id) && React.createElement("span", {
      style: {
        color: T.navy,
        fontWeight: 800
      }
    }, "\u2713"));
  })), React.createElement(FL, null, "Tipo"), React.createElement(KindPicker, {
    value: kind,
    onChange: setKind
  }), consequence && React.createElement("p", {
    style: {
      margin: "0 0 14px",
      padding: consequence.strong ? "10px 12px" : 0,
      borderRadius: 10,
      background: consequence.strong ? consequence.color : "transparent",
      color: consequence.strong ? "#fff" : consequence.color,
      fontWeight: consequence.strong ? 800 : 600,
      fontSize: 14
    }
  }, consequence.t), React.createElement(FL, null, "Data do jogo"), React.createElement(FI, {
    type: "date",
    value: date,
    onChange: function onChange(e) {
      return setDate(e.target.value);
    }
  }), React.createElement(FL, null, "Advers\xE1rio (opcional)"), React.createElement(FI, {
    value: opponent,
    onChange: function onChange(e) {
      return setOpponent(e.target.value);
    },
    placeholder: "Ex: Os Vizinhos FC"
  }), React.createElement(FL, null, "Nota (opcional)"), React.createElement(FI, {
    value: note,
    onChange: function onChange(e) {
      return setNote(e.target.value);
    },
    placeholder: "Ex: protestos"
  }), err && React.createElement("p", {
    style: {
      color: T.brand,
      fontSize: 13,
      margin: "0 0 8px"
    }
  }, err), React.createElement(PrimaryBtn, {
    onClick: save,
    disabled: !mid || !date || saving
  }, saving ? "A guardar..." : "Lan\xE7ar ".concat(kind)));
};
var EditCardModal = function EditCardModal(_ref181) {
  var card = _ref181.card,
    onSave = _ref181.onSave,
    onClose = _ref181.onClose;
  var _useState447 = useState(card.kind),
    _useState448 = _slicedToArray(_useState447, 2),
    kind = _useState448[0],
    setKind = _useState448[1];
  var _useState449 = useState(card.date || todayLocal()),
    _useState450 = _slicedToArray(_useState449, 2),
    date = _useState450[0],
    setDate = _useState450[1];
  var _useState451 = useState(card.opponent),
    _useState452 = _slicedToArray(_useState451, 2),
    opponent = _useState452[0],
    setOpponent = _useState452[1];
  var _useState453 = useState(card.note),
    _useState454 = _slicedToArray(_useState453, 2),
    note = _useState454[0],
    setNote = _useState454[1];
  var _useState455 = useState(false),
    _useState456 = _slicedToArray(_useState455, 2),
    saving = _useState456[0],
    setSaving = _useState456[1];
  var save = function () {
    var _ref182 = _asyncToGenerator(_regenerator().m(function _callee60() {
      var done;
      return _regenerator().w(function (_context60) {
        while (1) switch (_context60.n) {
          case 0:
            if (!(!date || saving)) {
              _context60.n = 1;
              break;
            }
            return _context60.a(2);
          case 1:
            setSaving(true);
            _context60.n = 2;
            return onSave(card.id, {
              kind: kind,
              date: date,
              opponent: opponent.trim(),
              note: note.trim()
            });
          case 2:
            done = _context60.v;
            if (done !== false) onClose();else setSaving(false);
          case 3:
            return _context60.a(2);
        }
      }, _callee60);
    }));
    return function save() {
      return _ref182.apply(this, arguments);
    };
  }();
  return React.createElement(Sheet, {
    onClose: onClose,
    title: "Editar cart\xE3o"
  }, React.createElement(FL, null, "Tipo"), React.createElement(KindPicker, {
    value: kind,
    onChange: setKind
  }), React.createElement(FL, null, "Data do jogo"), React.createElement(FI, {
    type: "date",
    value: date,
    onChange: function onChange(e) {
      return setDate(e.target.value);
    }
  }), React.createElement(FL, null, "Advers\xE1rio (opcional)"), React.createElement(FI, {
    value: opponent,
    onChange: function onChange(e) {
      return setOpponent(e.target.value);
    }
  }), React.createElement(FL, null, "Nota (opcional)"), React.createElement(FI, {
    value: note,
    onChange: function onChange(e) {
      return setNote(e.target.value);
    }
  }), React.createElement(PrimaryBtn, {
    onClick: save,
    disabled: !date || saving
  }, saving ? "A guardar..." : "Guardar"));
};
var cardSegments = function cardSegments(r) {
  var hasConsumed = r.yellowsTotal > r.yellows;
  var segs = [];
  if (r.yellows >= 5) {
    segs.push({
      t: "SUSPENDE 1 JOGO",
      color: "#B00020",
      bold: true
    });
  } else if (r.yellows === 4) {
    segs.push({
      t: "4 amarelos".concat(hasConsumed ? " em vigor" : "", " \xB7 falta 1 para suspens\xE3o"),
      color: T.brand,
      bold: true
    });
  } else if (r.yellows > 0) {
    segs.push({
      t: "".concat(plur(r.yellows, "amarelo", "amarelos")).concat(hasConsumed ? " em vigor" : ""),
      color: T.text
    });
  } else if (hasConsumed) {
    segs.push({
      t: "Sem amarelos em vigor",
      color: T.sub
    });
  } else if (r.reds === 0) {
    segs.push({
      t: "Sem cartões",
      color: "#B0B0B8"
    });
  }
  if (hasConsumed) segs.push({
    t: "".concat(r.yellowsTotal, " esta \xE9poca"),
    color: T.sub
  });
  if (r.reds > 0) segs.push({
    t: plur(r.reds, "vermelho", "vermelhos"),
    color: T.brand,
    bold: true
  });
  return segs;
};
var CompletedCards = function CompletedCards(_ref183) {
  var count = _ref183.count,
    children = _ref183.children;
  var _useState457 = useState(false),
    _useState458 = _slicedToArray(_useState457, 2),
    show = _useState458[0],
    setShow = _useState458[1];
  return React.createElement("div", {
    style: {
      marginTop: 8,
      borderTop: "1px dashed ".concat(T.border)
    }
  }, React.createElement("button", {
    onClick: function onClick() {
      return setShow(function (v) {
        return !v;
      });
    },
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      padding: "10px 0 6px",
      fontFamily: "inherit"
    }
  }, React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      color: T.sub
    }
  }, "J\xE1 cumpridos (", count, ")"), React.createElement("span", {
    style: {
      fontSize: 12,
      color: T.sub
    }
  }, show ? "▾" : "▸")), show && React.createElement(React.Fragment, null, React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontSize: 11,
      fontWeight: 700,
      color: T.sub
    }
  }, "Contam para a \xE9poca, n\xE3o para a suspens\xE3o."), children));
};
var CardsTab = function CardsTab(_ref184) {
  var team = _ref184.team,
    cards = _ref184.cards,
    members = _ref184.members,
    canManage = _ref184.canManage,
    readOnly = _ref184.readOnly,
    onAddCard = _ref184.onAddCard,
    onEditCard = _ref184.onEditCard,
    onDeleteCard = _ref184.onDeleteCard,
    onServeSuspension = _ref184.onServeSuspension;
  var _useState459 = useState(null),
    _useState460 = _slicedToArray(_useState459, 2),
    open = _useState460[0],
    setOpen = _useState460[1];
  var _useState461 = useState(false),
    _useState462 = _slicedToArray(_useState461, 2),
    showNone = _useState462[0],
    setShowNone = _useState462[1];
  var rows = members.filter(function (m) {
    return m.teamId === team.id;
  }).map(function (m) {
    return _objectSpread({
      m: m
    }, cardCount(cards, team.id, m.id));
  }).sort(function (a, b) {
    return b.yellows - a.yellows || a.m.name.localeCompare(b.m.name, "pt");
  });
  var risk = rows.filter(function (r) {
    return r.yellows >= 4;
  });
  var withCards = rows.filter(function (r) {
    return r.all.length > 0;
  });
  var noCards = rows.filter(function (r) {
    return r.all.length === 0;
  });
  var confirmDelete = function confirmDelete(r, c) {
    var nome = r.m.name;
    var efeito;
    if (c.kind === "vermelho") efeito = "Os vermelhos descem para ".concat(r.reds - 1, ".");else if (c.consumed) efeito = "J\xE1 estava cumprido: o contador em vigor n\xE3o muda, mas desce para ".concat(r.yellowsTotal - 1, " esta \xE9poca.");else efeito = "O contador desce para ".concat(r.yellows - 1, ".");
    if (window.confirm("Apagar este ".concat(c.kind, " de ").concat(nome, "? ").concat(efeito))) onDeleteCard(c.id);
  };
  var renderRow = function renderRow(r) {
    var st = cardStatus(r.yellows);
    var isOpen = open === r.m.id;
    var segs = cardSegments(r);
    var active = r.all.filter(function (c) {
      return !c.consumed;
    }).sort(function (a, b) {
      return (b.date || '').localeCompare(a.date || '') || b.id - a.id;
    });
    var done = r.all.filter(function (c) {
      return c.consumed;
    }).sort(function (a, b) {
      return (b.date || '').localeCompare(a.date || '') || b.id - a.id;
    });
    var histRow = function histRow(c) {
      return React.createElement("div", {
        key: c.id,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "7px 0",
          opacity: c.consumed ? 0.5 : 1,
          color: c.consumed ? "#888" : T.text
        }
      }, React.createElement("span", {
        style: {
          fontSize: 20,
          filter: c.consumed ? "grayscale(1)" : "none"
        }
      }, c.kind === "amarelo" ? "🟨" : "🟥"), React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, React.createElement("p", {
        style: {
          margin: 0,
          fontSize: 13,
          fontWeight: 700
        }
      }, fmtDate(c.date), c.opponent ? " \xB7 vs ".concat(c.opponent) : ""), c.note && React.createElement("p", {
        style: {
          margin: 0,
          fontSize: 12,
          color: T.sub
        }
      }, c.note)), canManage && React.createElement("button", {
        onClick: function onClick() {
          return onEditCard(c);
        },
        style: {
          padding: "3px 7px",
          borderRadius: 7,
          border: "1.5px solid ".concat(T.sub),
          background: "transparent",
          fontSize: 12,
          cursor: "pointer"
        }
      }, "\u270F\uFE0F"), canManage && React.createElement("button", {
        onClick: function onClick() {
          return confirmDelete(r, c);
        },
        style: {
          padding: "3px 7px",
          borderRadius: 7,
          border: "1.5px solid #888",
          background: "transparent",
          fontSize: 12,
          cursor: "pointer"
        }
      }, "\uD83D\uDDD1\uFE0F"));
    };
    return React.createElement("div", {
      key: r.m.id,
      style: {
        background: T.card,
        borderRadius: 14,
        marginBottom: 8,
        overflow: "hidden",
        borderLeft: "4px solid ".concat(st ? st.color : T.border)
      }
    }, React.createElement("div", {
      onClick: function onClick() {
        return setOpen(isOpen ? null : r.m.id);
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "11px 12px",
        cursor: "pointer"
      }
    }, React.createElement(Avatar, {
      initials: r.m.initials,
      photo: r.m.avatarUrl,
      color: team.color,
      size: 38,
      name: r.m.name
    }), React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, React.createElement("p", {
      style: {
        margin: "0 0 3px",
        fontWeight: 800,
        fontSize: 14,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, r.m.name), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        lineHeight: 1.4
      }
    }, segs.map(function (s, i) {
      return React.createElement("span", {
        key: i,
        style: {
          color: s.color,
          fontWeight: s.bold ? 800 : 500
        }
      }, i > 0 && React.createElement("span", {
        style: {
          color: T.sub,
          fontWeight: 500
        }
      }, " \xB7 "), s.t);
    }))), React.createElement("span", {
      style: {
        color: T.sub,
        fontSize: 12
      }
    }, isOpen ? "▼" : "▶")), r.yellows >= 5 && canManage && React.createElement("div", {
      style: {
        padding: "0 12px 10px"
      }
    }, React.createElement("button", {
      onClick: function onClick() {
        if (window.confirm("".concat(r.m.name, " j\xE1 cumpriu o jogo de castigo? O contador volta a 0. Os 5 amarelos continuam no hist\xF3rico, marcados como cumpridos."))) onServeSuspension(r.m.id);
      },
      style: {
        width: "100%",
        padding: "10px",
        borderRadius: 10,
        border: "none",
        background: "#B00020",
        color: "#fff",
        fontWeight: 800,
        fontSize: 13,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, "J\xE1 cumpriu o castigo")), isOpen && React.createElement("div", {
      style: {
        borderTop: "1px solid ".concat(T.border),
        padding: "8px 12px 10px"
      }
    }, r.all.length === 0 && React.createElement("p", {
      style: {
        margin: "6px 0",
        fontSize: 13,
        color: T.sub
      }
    }, "Sem cart\xF5es."), active.map(histRow), done.length > 0 && React.createElement(CompletedCards, {
      count: done.length
    }, done.map(histRow))));
  };
  return React.createElement("div", {
    style: {
      padding: "14px 16px 100px"
    }
  }, React.createElement("h3", {
    style: {
      margin: "0 0 2px",
      fontSize: 20,
      fontWeight: 900
    }
  }, "Cart\xF5es"), React.createElement("p", {
    style: {
      margin: "0 0 14px",
      fontSize: 12,
      color: T.sub
    }
  }, "5 amarelos = 1 jogo de castigo. Os castigos s\xE3o dados pela associa\xE7\xE3o."), risk.length > 0 && React.createElement("div", {
    style: {
      background: "#B00020",
      borderRadius: 16,
      padding: "14px",
      marginBottom: 16,
      color: "#fff"
    }
  }, React.createElement("p", {
    style: {
      margin: "0 0 10px",
      fontSize: 13,
      fontWeight: 900,
      letterSpacing: 1
    }
  }, "\uD83D\uDEA8 EM RISCO"), risk.map(function (r) {
    return React.createElement("div", {
      key: r.m.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "rgba(255,255,255,0.15)",
        borderRadius: 12,
        padding: "8px 10px",
        marginBottom: 6
      }
    }, React.createElement(Avatar, {
      initials: r.m.initials,
      photo: r.m.avatarUrl,
      color: T.navy,
      size: 36,
      name: r.m.name
    }), React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 800,
        fontSize: 14
      }
    }, r.m.name), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 12,
        opacity: 0.95
      }
    }, r.yellows >= 5 ? "Suspende 1 jogo" : "A 1 amarelo da suspensão")));
  })), canManage && React.createElement("button", {
    onClick: onAddCard,
    style: {
      width: "100%",
      padding: "16px",
      borderRadius: 14,
      border: "none",
      background: T.navy,
      color: "#fff",
      fontSize: 16,
      fontWeight: 800,
      cursor: "pointer",
      fontFamily: "inherit",
      marginBottom: 14
    }
  }, "+ Lan\xE7ar cart\xE3o"), rows.length === 0 && React.createElement("p", {
    style: {
      textAlign: "center",
      color: T.sub
    }
  }, "Sem jogadores na equipa."), withCards.map(renderRow), noCards.length > 0 && React.createElement(React.Fragment, null, React.createElement("button", {
    onClick: function onClick() {
      return setShowNone(function (v) {
        return !v;
      });
    },
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      minHeight: 44,
      background: "transparent",
      border: "none",
      cursor: "pointer",
      padding: "12px 0 8px",
      fontFamily: "inherit"
    }
  }, React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      color: T.sub
    }
  }, "Sem cart\xF5es (", noCards.length, ")"), React.createElement("span", {
    style: {
      fontSize: 12,
      color: T.sub
    }
  }, showNone ? "▼" : "▶")), showNone && noCards.map(renderRow)), !canManage && !readOnly && React.createElement("p", {
    style: {
      margin: "14px 0 0",
      fontSize: 12,
      color: T.sub,
      textAlign: "center"
    }
  }, "S\xF3 o admin pode lan\xE7ar cart\xF5es."));
};
function App() {
  var _members$find, _members$find3;
  var _useState463 = useState(function () {
      var h = window.location.hash;
      if (!h.includes("type=recovery")) return null;
      var m = h.match(/access_token=([^&#&]+)/);
      return m ? decodeURIComponent(m[1]) : null;
    }),
    _useState464 = _slicedToArray(_useState463, 1),
    recoveryToken = _useState464[0];
  var _useState465 = useState(function () {
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
    _useState466 = _slicedToArray(_useState465, 1),
    magicToken = _useState466[0];
  var _useState467 = useState(null),
    _useState468 = _slicedToArray(_useState467, 2),
    token = _useState468[0],
    setToken = _useState468[1];
  var _useState469 = useState(null),
    _useState470 = _slicedToArray(_useState469, 2),
    myUserId = _useState470[0],
    setMyUserId = _useState470[1];
  var _useState471 = useState(null),
    _useState472 = _slicedToArray(_useState471, 2),
    profile = _useState472[0],
    setProfile = _useState472[1];
  var _useState473 = useState([]),
    _useState474 = _slicedToArray(_useState473, 2),
    teams = _useState474[0],
    setTeams = _useState474[1];
  var _useState475 = useState([]),
    _useState476 = _slicedToArray(_useState475, 2),
    members = _useState476[0],
    setMembers = _useState476[1];
  var _useState477 = useState([]),
    _useState478 = _slicedToArray(_useState477, 2),
    fineTypes = _useState478[0],
    setFineTypes = _useState478[1];
  var _useState479 = useState([]),
    _useState480 = _slicedToArray(_useState479, 2),
    fines = _useState480[0],
    setFines = _useState480[1];
  var _useState481 = useState([]),
    _useState482 = _slicedToArray(_useState481, 2),
    cards = _useState482[0],
    setCards = _useState482[1];
  var _useState483 = useState(null),
    _useState484 = _slicedToArray(_useState483, 2),
    editingCard = _useState484[0],
    setEditingCard = _useState484[1];
  var _useState485 = useState([]),
    _useState486 = _slicedToArray(_useState485, 2),
    expenses = _useState486[0],
    setExpenses = _useState486[1];
  var _useState487 = useState([]),
    _useState488 = _slicedToArray(_useState487, 2),
    trainings = _useState488[0],
    setTrainings = _useState488[1];
  var _useState489 = useState([]),
    _useState490 = _slicedToArray(_useState489, 2),
    absences = _useState490[0],
    setAbsences = _useState490[1];
  var _useState491 = useState({}),
    _useState492 = _slicedToArray(_useState491, 2),
    presences = _useState492[0],
    setPresences = _useState492[1];
  var _useState493 = useState([]),
    _useState494 = _slicedToArray(_useState493, 2),
    loadWarn = _useState494[0],
    setLoadWarn = _useState494[1];
  var loadSeq = React.useRef(0);
  var _useState495 = useState(null),
    _useState496 = _slicedToArray(_useState495, 2),
    pushIssue = _useState496[0],
    setPushIssue = _useState496[1];
  var _useState497 = useState(null),
    _useState498 = _slicedToArray(_useState497, 2),
    teamId = _useState498[0],
    setTeamId = _useState498[1];
  var _useState499 = useState("home"),
    _useState500 = _slicedToArray(_useState499, 2),
    tab = _useState500[0],
    setTab = _useState500[1];
  var _useState501 = useState(null),
    _useState502 = _slicedToArray(_useState501, 2),
    sub = _useState502[0],
    setSub = _useState502[1];
  var _useState503 = useState(null),
    _useState504 = _slicedToArray(_useState503, 2),
    modal = _useState504[0],
    setModal = _useState504[1];
  var _useState505 = useState(null),
    _useState506 = _slicedToArray(_useState505, 2),
    editingFine = _useState506[0],
    setEditingFine = _useState506[1];
  var _useState507 = useState(null),
    _useState508 = _slicedToArray(_useState507, 2),
    treinosModal = _useState508[0],
    setTreinosModal = _useState508[1];
  var _useState509 = useState(false),
    _useState510 = _slicedToArray(_useState509, 2),
    loading = _useState510[0],
    setLoading = _useState510[1];
  var _useState511 = useState(false),
    _useState512 = _slicedToArray(_useState511, 2),
    appReady = _useState512[0],
    setAppReady = _useState512[1];
  var _useState513 = useState(false),
    _useState514 = _slicedToArray(_useState513, 2),
    refreshing = _useState514[0],
    setRefreshing = _useState514[1];
  var _useState515 = useState(null),
    _useState516 = _slicedToArray(_useState515, 2),
    authError = _useState516[0],
    setAuthError = _useState516[1];
  var _useState517 = useState(false),
    _useState518 = _slicedToArray(_useState517, 2),
    adminView = _useState518[0],
    setAdminView = _useState518[1];
  var _useState519 = useState(null),
    _useState520 = _slicedToArray(_useState519, 2),
    adminErr = _useState520[0],
    setAdminErr = _useState520[1];
  var _useState521 = useState(null),
    _useState522 = _slicedToArray(_useState521, 2),
    adminStart = _useState522[0],
    setAdminStart = _useState522[1];
  var _useState523 = useState(null),
    _useState524 = _slicedToArray(_useState523, 2),
    adminTeamsCache = _useState524[0],
    setAdminTeamsCache = _useState524[1];
  var roHistoryRef = React.useRef(false);
  var ignorePopRef = React.useRef(0);
  var exitRoRef = React.useRef(null);
  var team = teams.find(function (t) {
    return t.id === teamId;
  });
  var roMode = adminView && !!(profile !== null && profile !== void 0 && profile.isAppAdmin);
  var isAdmin = !roMode && (members.some(function (m) {
    return m.teamId === teamId && m.userId === myUserId && m.role === "admin";
  }) || (team === null || team === void 0 ? void 0 : team.createdBy) === myUserId);
  var myRole = ((_members$find = members.find(function (m) {
    return m.teamId === teamId && m.userId === myUserId;
  })) === null || _members$find === void 0 ? void 0 : _members$find.role) || "player";
  var canManageTrainings = !roMode && (isAdmin || myRole === "treinador" || myRole === "diretor");
  var loadTeam = function () {
    var _ref185 = _asyncToGenerator(_regenerator().m(function _callee61(tok, tid) {
      var failedParts, soft, _yield$Promise$all5, _yield$Promise$all6, mRaw, ftData, fData, eData, tData, pData, cData, aData, profilesMap, profFailed, profs, uids, _profs, mData, presMap, _t73, _t74;
      return _regenerator().w(function (_context61) {
        while (1) switch (_context61.p = _context61.n) {
          case 0:
            failedParts = [];
            soft = function soft(name, empty, perm) {
              return function (e) {
                if (!(perm && /permission|policy|42501|not authorized|403/i.test(String(e && e.message)))) failedParts.push(name);
                return empty;
              };
            };
            _context61.n = 1;
            return Promise.all([api.get("team_members?team_id=eq.".concat(tid, "&select=*"), tok), api.get("fine_types?team_id=eq.".concat(tid, "&order=amount.asc"), tok), api.get("fines?team_id=eq.".concat(tid, "&order=created_at.desc"), tok), api.get("expenses?team_id=eq.".concat(tid, "&order=created_at.desc"), tok), api.get("trainings?team_id=eq.".concat(tid, "&order=date.asc,time.asc"), tok), api.get("presences?select=*,trainings!inner(team_id)&trainings.team_id=eq.".concat(tid), tok).catch(soft('presenças', [])), api.get("cards?team_id=eq.".concat(tid, "&order=match_date.desc,created_at.desc"), tok).catch(soft('cartões', [])), api.get("member_absences?team_id=eq.".concat(tid, "&order=start_date.desc,created_at.desc"), tok).catch(soft('ausências', null, true))]);
          case 1:
            _yield$Promise$all5 = _context61.v;
            _yield$Promise$all6 = _slicedToArray(_yield$Promise$all5, 8);
            mRaw = _yield$Promise$all6[0];
            ftData = _yield$Promise$all6[1];
            fData = _yield$Promise$all6[2];
            eData = _yield$Promise$all6[3];
            tData = _yield$Promise$all6[4];
            pData = _yield$Promise$all6[5];
            cData = _yield$Promise$all6[6];
            aData = _yield$Promise$all6[7];
            profilesMap = {};
            profFailed = false;
            _context61.p = 2;
            _context61.n = 3;
            return fetch("".concat(SB_URL, "/rest/v1/rpc/get_team_profiles"), {
              method: 'POST',
              headers: {
                'apikey': SB_KEY,
                'Authorization': "Bearer ".concat(tok),
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                p_team_id: tid
              })
            }).then(function (r) {
              if (!r.ok) {
                profFailed = true;
                return [];
              }
              return r.json();
            }).catch(function () {
              profFailed = true;
              return [];
            });
          case 3:
            profs = _context61.v;
            (Array.isArray(profs) ? profs : []).forEach(function (p) {
              profilesMap[p.id] = p;
            });
            _context61.n = 5;
            break;
          case 4:
            _context61.p = 4;
            _t73 = _context61.v;
            profFailed = true;
            console.warn('get_team_profiles failed:', _t73);
          case 5:
            if (!(profFailed && Object.keys(profilesMap).length === 0)) {
              _context61.n = 10;
              break;
            }
            _context61.p = 6;
            uids = mRaw.map(function (m) {
              return m.user_id;
            }).filter(Boolean);
            if (!(uids.length > 0)) {
              _context61.n = 8;
              break;
            }
            _context61.n = 7;
            return api.get("profiles?id=in.(".concat(uids.join(','), ")"), tok).catch(function () {
              return [];
            });
          case 7:
            _profs = _context61.v;
            (Array.isArray(_profs) ? _profs : []).forEach(function (p) {
              profilesMap[p.id] = p;
            });
          case 8:
            _context61.n = 10;
            break;
          case 9:
            _context61.p = 9;
            _t74 = _context61.v;
          case 10:
            if (profFailed && mRaw.some(function (m) {
              return m.user_id;
            })) failedParts.push('perfis');
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
            return _context61.a(2, {
              members: mData.map(aMember),
              fineTypes: ftData.map(aFineType),
              fines: fData.map(aFine),
              expenses: eData.map(aExpense),
              trainings: tData.map(aTraining),
              presences: presMap,
              absences: Array.isArray(aData) ? aData.map(aAbsence) : null,
              cards: (Array.isArray(cData) ? cData : []).map(aCard),
              warn: failedParts
            });
        }
      }, _callee61, null, [[6, 9], [2, 4]]);
    }));
    return function loadTeam(_x22, _x23) {
      return _ref185.apply(this, arguments);
    };
  }();
  var roErrPt = function roErrPt(e) {
    var m = String(e && e.message ? e.message : "");
    if (/not authorized|permission denied|42501|Sem permissão|403/i.test(m)) return "Sem permissão";
    if (/Failed to fetch|NetworkError|Load failed/i.test(m)) return "Sem ligação à internet";
    if (/JWT|expired/i.test(m)) return "A sessão expirou: volta a entrar";
    if (/resposta inválida/i.test(m)) return "Resposta inválida do servidor";
    return errPt(e, "erro desconhecido");
  };
  var loadTeamAdmin = function () {
    var _ref186 = _asyncToGenerator(_regenerator().m(function _callee62(tok, tid) {
      var raw, r, bad, lst, mRaw, fData, eData, tData, ftData, pData, cData, aData, profs, profilesMap, presMap;
      return _regenerator().w(function (_context62) {
        while (1) switch (_context62.n) {
          case 0:
            _context62.n = 1;
            return rpcCall('get_team_as_admin', {
              p_team_id: tid
            }, tok);
          case 1:
            raw = _context62.v;
            r = Array.isArray(raw) && raw.length === 1 ? raw[0] : raw;
            bad = function bad() {
              return new Error("resposta inválida");
            };
            if (!(!r || _typeof(r) !== "object" || Array.isArray(r))) {
              _context62.n = 2;
              break;
            }
            throw bad();
          case 2:
            if (!(!r.team || _typeof(r.team) !== "object" || String(r.team.id) !== String(tid))) {
              _context62.n = 3;
              break;
            }
            throw bad();
          case 3:
            lst = function lst(k, essential) {
              var v = r[k];
              if (v == null) {
                if (essential) throw bad();
                return [];
              }
              if (!Array.isArray(v)) throw bad();
              return v;
            };
            mRaw = lst("members", true), fData = lst("fines", true), eData = lst("expenses", true), tData = lst("trainings", true);
            ftData = lst("fine_types"), pData = lst("presences"), cData = lst("cards"), aData = lst("absences"), profs = lst("profiles");
            profilesMap = {};
            profs.forEach(function (p) {
              if (p && p.id != null) profilesMap[p.id] = p;
            });
            presMap = {};
            pData.forEach(function (p) {
              if (!presMap[p.training_id]) presMap[p.training_id] = {};
              presMap[p.training_id][p.member_id] = p.status;
            });
            return _context62.a(2, {
              team: aTeam(r.team),
              members: mRaw.map(function (m) {
                return aMember(_objectSpread(_objectSpread({}, m), {}, {
                  profiles: profilesMap[m.user_id] || null
                }));
              }),
              fineTypes: ftData.map(aFineType),
              fines: fData.map(aFine),
              expenses: eData.map(aExpense),
              trainings: tData.map(aTraining),
              presences: presMap,
              absences: aData.map(aAbsence),
              cards: cData.map(aCard)
            });
        }
      }, _callee62);
    }));
    return function loadTeamAdmin(_x24, _x25) {
      return _ref186.apply(this, arguments);
    };
  }();
  var applyAdminData = function applyAdminData(td) {
    setTeams(function (p) {
      return p.some(function (x) {
        return x.id === td.team.id;
      }) ? p.map(function (x) {
        return x.id === td.team.id ? td.team : x;
      }) : [].concat(_toConsumableArray(p), [td.team]);
    });
    setMembers(td.members);
    setFineTypes(td.fineTypes);
    setFines(td.fines);
    setCards(td.cards);
    setExpenses(td.expenses);
    setTrainings(td.trainings);
    setPresences(td.presences);
    setAbsences(td.absences);
  };
  var loadAdmin = function () {
    var _ref187 = _asyncToGenerator(_regenerator().m(function _callee63(id) {
      var _t75, _t76;
      return _regenerator().w(function (_context63) {
        while (1) switch (_context63.p = _context63.n) {
          case 0:
            setLoading(true);
            setAdminErr(null);
            _context63.p = 1;
            _t75 = applyAdminData;
            _context63.n = 2;
            return loadTeamAdmin(token, id);
          case 2:
            _t75(_context63.v);
            _context63.n = 4;
            break;
          case 3:
            _context63.p = 3;
            _t76 = _context63.v;
            setAdminErr({
              msg: roErrPt(_t76),
              id: id
            });
          case 4:
            setLoading(false);
          case 5:
            return _context63.a(2);
        }
      }, _callee63, null, [[1, 3]]);
    }));
    return function loadAdmin(_x26) {
      return _ref187.apply(this, arguments);
    };
  }();
  var openAdminTeam = function () {
    var _ref188 = _asyncToGenerator(_regenerator().m(function _callee64(id, list) {
      return _regenerator().w(function (_context64) {
        while (1) switch (_context64.n) {
          case 0:
            if (!(!(profile !== null && profile !== void 0 && profile.isAppAdmin) || !token)) {
              _context64.n = 1;
              break;
            }
            return _context64.a(2);
          case 1:
            RO.on = true;
            setAdminTeamsCache(Array.isArray(list) ? list : null);
            try {
              window.history.pushState({
                multeamRO: true
              }, "", window.location.href);
              roHistoryRef.current = true;
            } catch (e) {}
            setAdminView(true);
            setSub(null);
            setModal(null);
            setTab("home");
            setTeams((Array.isArray(list) ? list : []).filter(function (t) {
              return t && t.id != null;
            }).map(aTeam));
            setTeamId(id);
            _context64.n = 2;
            return loadAdmin(id);
          case 2:
            return _context64.a(2);
        }
      }, _callee64);
    }));
    return function openAdminTeam(_x27, _x28) {
      return _ref188.apply(this, arguments);
    };
  }();
  var exitAdminView = function () {
    var _ref189 = _asyncToGenerator(_regenerator().m(function _callee65(opts) {
      var toTeams, ok;
      return _regenerator().w(function (_context65) {
        while (1) switch (_context65.n) {
          case 0:
            toTeams = !!(opts && opts.toTeams);
            RO.on = false;
            if (roHistoryRef.current) {
              roHistoryRef.current = false;
              if (!(opts && opts.fromPop)) {
                ignorePopRef.current++;
                try {
                  window.history.back();
                } catch (e) {
                  ignorePopRef.current--;
                }
              }
            }
            setAdminStart(toTeams ? "teams" : null);
            setAdminView(false);
            setAdminErr(null);
            setSub(null);
            setModal(null);
            setTeams([]);
            setMembers([]);
            setFineTypes([]);
            setFines([]);
            setCards([]);
            setExpenses([]);
            setTrainings([]);
            setPresences({});
            setAbsences([]);
            setTeamId(null);
            setTab("appadmin");
            _context65.n = 1;
            return initApp(token, myUserId);
          case 1:
            ok = _context65.v;
            setTab("appadmin");
            if (ok === false) showToast("Não foi possível recarregar as tuas equipas", T.brand);
          case 2:
            return _context65.a(2);
        }
      }, _callee65);
    }));
    return function exitAdminView(_x29) {
      return _ref189.apply(this, arguments);
    };
  }();
  exitRoRef.current = exitAdminView;
  useEffect(function () {
    var onPop = function onPop() {
      if (LB.guard > 0) {
        LB.guard--;
        return;
      }
      if (LB.n > 0) return;
      if (ignorePopRef.current > 0) {
        ignorePopRef.current--;
        return;
      }
      if (!roHistoryRef.current) return;
      roHistoryRef.current = false;
      if (exitRoRef.current) exitRoRef.current({
        toTeams: true,
        fromPop: true
      });
    };
    window.addEventListener("popstate", onPop);
    return function () {
      return window.removeEventListener("popstate", onPop);
    };
  }, []);
  var initApp = function () {
    var _ref190 = _asyncToGenerator(_regenerator().m(function _callee66(tok, uid) {
      var p, mine, profData, created, membershipsR, adapted, memberships, teamIds, teamsR, teamsJson, first, mySeq, td, _t77, _t78, _t79;
      return _regenerator().w(function (_context66) {
        while (1) switch (_context66.p = _context66.n) {
          case 0:
            setLoading(true);
            _context66.p = 1;
            p = null;
            _context66.p = 2;
            _context66.n = 3;
            return rpcCall('get_my_profile', {}, tok);
          case 3:
            mine = _context66.v;
            p = Array.isArray(mine) ? mine[0] : mine && mine.id ? mine : null;
            _context66.n = 5;
            break;
          case 4:
            _context66.p = 4;
            _t77 = _context66.v;
            console.warn('get_my_profile failed:', _t77 && _t77.message);
          case 5:
            if (p) {
              _context66.n = 7;
              break;
            }
            _context66.n = 6;
            return api.get("profiles?id=eq.".concat(uid), tok);
          case 6:
            profData = _context66.v;
            p = profData[0];
          case 7:
            if (p) {
              _context66.n = 12;
              break;
            }
            _context66.p = 8;
            _context66.n = 9;
            return api.post('profiles', {
              id: uid,
              name: 'Utilizador'
            }, tok);
          case 9:
            created = _context66.v;
            p = Array.isArray(created) ? created[0] : created;
            _context66.n = 11;
            break;
          case 10:
            _context66.p = 10;
            _t78 = _context66.v;
            console.warn('Profile creation fallback failed:', _t78);
          case 11:
            if (!p) showToast("⚠️ Não foi possível carregar o teu perfil. Recarrega a app.", T.brand);
          case 12:
            if (p) setProfile({
              id: p.id,
              name: p.name || '',
              initials: mk(p.name || 'U'),
              position: p.position || '',
              phone: p.phone || '',
              birthday: p.birthday || '',
              email: '',
              isAppAdmin: p.is_admin === true,
              avatarUrl: p.avatar_url || null
            });
            _context66.n = 13;
            return fetch("".concat(SB_URL, "/rest/v1/team_members?user_id=eq.").concat(uid, "&select=team_id"), {
              headers: {
                'apikey': SB_KEY,
                'Authorization': "Bearer ".concat(tok)
              }
            });
          case 13:
            membershipsR = _context66.v;
            adapted = [];
            if (membershipsR.ok) {
              _context66.n = 14;
              break;
            }
            throw new Error("Não foi possível carregar as tuas equipas.");
          case 14:
            if (!membershipsR.ok) {
              _context66.n = 19;
              break;
            }
            _context66.n = 15;
            return membershipsR.json();
          case 15:
            memberships = _context66.v;
            teamIds = (Array.isArray(memberships) ? memberships : []).map(function (m) {
              return m.team_id;
            }).filter(Boolean);
            if (!(teamIds.length > 0)) {
              _context66.n = 19;
              break;
            }
            _context66.n = 16;
            return fetch("".concat(SB_URL, "/rest/v1/teams?id=in.(").concat(teamIds.join(','), ")&order=created_at.asc"), {
              headers: {
                'apikey': SB_KEY,
                'Authorization': "Bearer ".concat(tok)
              }
            });
          case 16:
            teamsR = _context66.v;
            if (teamsR.ok) {
              _context66.n = 17;
              break;
            }
            throw new Error("Não foi possível carregar as tuas equipas.");
          case 17:
            if (!teamsR.ok) {
              _context66.n = 19;
              break;
            }
            _context66.n = 18;
            return teamsR.json();
          case 18:
            teamsJson = _context66.v;
            adapted = (Array.isArray(teamsJson) ? teamsJson : []).map(aTeam);
          case 19:
            setTeams(adapted);
            if (adapted.length) {
              _context66.n = 20;
              break;
            }
            if (p && p.is_admin === true) setTab("geral");
            setAppReady(true);
            setLoading(false);
            return _context66.a(2, true);
          case 20:
            first = adapted[0].id;
            setTeamId(first);
            mySeq = ++loadSeq.current;
            _context66.n = 21;
            return loadTeam(tok, first);
          case 21:
            td = _context66.v;
            if (mySeq === loadSeq.current) {
              setMembers(td.members);
              setFineTypes(td.fineTypes);
              setFines(td.fines);
              setCards(td.cards);
              setExpenses(td.expenses);
              setTrainings(td.trainings);
              setPresences(td.presences);
              setAbsences(td.absences);
              setLoadWarn(td.warn || []);
            }
            setAppReady(true);
            return _context66.a(2, true);
          case 22:
            _context66.p = 22;
            _t79 = _context66.v;
            setAuthError("Erro: ".concat(errPt(_t79)));
            return _context66.a(2, false);
          case 23:
            _context66.p = 23;
            setLoading(false);
            return _context66.f(23);
          case 24:
            return _context66.a(2);
        }
      }, _callee66, null, [[8, 10], [2, 4], [1, 22, 23, 24]]);
    }));
    return function initApp(_x30, _x31) {
      return _ref190.apply(this, arguments);
    };
  }();
  var switchTeam = function () {
    var _ref191 = _asyncToGenerator(_regenerator().m(function _callee67(id) {
      var my, td, _t80;
      return _regenerator().w(function (_context67) {
        while (1) switch (_context67.p = _context67.n) {
          case 0:
            setTeamId(id);
            setTab("home");
            if (!roMode) {
              _context67.n = 2;
              break;
            }
            _context67.n = 1;
            return loadAdmin(id);
          case 1:
            return _context67.a(2);
          case 2:
            setLoading(true);
            my = ++loadSeq.current;
            _context67.p = 3;
            _context67.n = 4;
            return loadTeam(token, id);
          case 4:
            td = _context67.v;
            if (my === loadSeq.current) {
              setMembers(td.members);
              setFineTypes(td.fineTypes);
              setFines(td.fines);
              setCards(td.cards);
              setExpenses(td.expenses);
              setTrainings(td.trainings);
              setPresences(td.presences);
              setAbsences(td.absences);
              setLoadWarn(td.warn || []);
            }
            _context67.n = 6;
            break;
          case 5:
            _context67.p = 5;
            _t80 = _context67.v;
            console.error(_t80);
            if (my === loadSeq.current) showToast("\u26A0\uFE0F N\xE3o foi poss\xEDvel carregar a equipa: ".concat(errPt(_t80, "erro")), T.brand);
          case 6:
            if (my === loadSeq.current) setLoading(false);
          case 7:
            return _context67.a(2);
        }
      }, _callee67, null, [[3, 5]]);
    }));
    return function switchTeam(_x32) {
      return _ref191.apply(this, arguments);
    };
  }();
  var refresh = useCallback(_asyncToGenerator(_regenerator().m(function _callee68() {
    var my, td, _t81, _t82, _t83;
    return _regenerator().w(function (_context68) {
      while (1) switch (_context68.p = _context68.n) {
        case 0:
          if (!(refreshing || !token || !teamId)) {
            _context68.n = 1;
            break;
          }
          return _context68.a(2);
        case 1:
          setRefreshing(true);
          if (!roMode) {
            _context68.n = 6;
            break;
          }
          _context68.p = 2;
          _t81 = applyAdminData;
          _context68.n = 3;
          return loadTeamAdmin(token, teamId);
        case 3:
          _t81(_context68.v);
          _context68.n = 5;
          break;
        case 4:
          _context68.p = 4;
          _t82 = _context68.v;
          showToast("N\xE3o foi poss\xEDvel atualizar: ".concat(roErrPt(_t82)), T.brand);
        case 5:
          setRefreshing(false);
          return _context68.a(2);
        case 6:
          my = ++loadSeq.current;
          _context68.p = 7;
          _context68.n = 8;
          return loadTeam(token, teamId);
        case 8:
          td = _context68.v;
          if (my === loadSeq.current) {
            setMembers(td.members);
            setFineTypes(td.fineTypes);
            setFines(td.fines);
            setCards(td.cards);
            setExpenses(td.expenses);
            setTrainings(td.trainings);
            setPresences(td.presences);
            setAbsences(td.absences);
            setLoadWarn(td.warn || []);
          }
          _context68.n = 10;
          break;
        case 9:
          _context68.p = 9;
          _t83 = _context68.v;
          console.error(_t83);
          if (my === loadSeq.current) showToast("N\xE3o foi poss\xEDvel atualizar: ".concat(errPt(_t83, "erro")), T.brand);
        case 10:
          setRefreshing(false);
        case 11:
          return _context68.a(2);
      }
    }, _callee68, null, [[7, 9], [2, 4]]);
  })), [token, teamId, refreshing, roMode]);
  useEffect(function () {
    window.__multeamRefresh = refresh;
  }, [refresh]);
  useEffect(function () {
    if (document.getElementById("multeam-hit-area")) return;
    var st = document.createElement("style");
    st.id = "multeam-hit-area";
    st.textContent = "button:not(:has(+ button)):not(button + button) { position: relative; } button:not(:has(+ button)):not(button + button)::after { content: ''; position: absolute; top: 50%; left: 50%; width: max(100%, 44px); height: max(100%, 44px); transform: translate(-50%, -50%); }";
    document.head.appendChild(st);
  }, []);
  useEffect(function () {
    if (document.getElementById("multeam-scroll-fix")) return;
    var st = document.createElement("style");
    st.id = "multeam-scroll-fix";
    st.textContent = "#root * { overscroll-behavior: auto; }";
    document.head.appendChild(st);
  }, []);
  var handleLogin = function () {
    var _ref193 = _asyncToGenerator(_regenerator().m(function _callee69(email, pass) {
      var _d$session, _d$user, d, tok, uid, _t84;
      return _regenerator().w(function (_context69) {
        while (1) switch (_context69.p = _context69.n) {
          case 0:
            setLoading(true);
            setAuthError(null);
            _context69.p = 1;
            _context69.n = 2;
            return api.signIn(email, pass);
          case 2:
            d = _context69.v;
            tok = d.access_token || ((_d$session = d.session) === null || _d$session === void 0 ? void 0 : _d$session.access_token);
            uid = (_d$user = d.user) === null || _d$user === void 0 ? void 0 : _d$user.id;
            if (!(!tok || !uid)) {
              _context69.n = 3;
              break;
            }
            throw new Error(d.error_description || d.msg || 'Email ou password incorretos');
          case 3:
            setToken(tok);
            setMyUserId(uid);
            _context69.n = 4;
            return initApp(tok, uid);
          case 4:
            _context69.n = 6;
            break;
          case 5:
            _context69.p = 5;
            _t84 = _context69.v;
            setAuthError(errPt(_t84));
            setLoading(false);
          case 6:
            return _context69.a(2);
        }
      }, _callee69, null, [[1, 5]]);
    }));
    return function handleLogin(_x33, _x34) {
      return _ref193.apply(this, arguments);
    };
  }();
  var handleRegister = function () {
    var _ref194 = _asyncToGenerator(_regenerator().m(function _callee70(email, pass, name) {
      var _d$session2, _d$user2, d, tok, uid, nameFailed, _d2$session, d2, tok2, _t85, _t86, _t87, _t88;
      return _regenerator().w(function (_context70) {
        while (1) switch (_context70.p = _context70.n) {
          case 0:
            setLoading(true);
            setAuthError(null);
            _context70.p = 1;
            _context70.n = 2;
            return api.signUp(email, pass, name);
          case 2:
            d = _context70.v;
            tok = d.access_token || ((_d$session2 = d.session) === null || _d$session2 === void 0 ? void 0 : _d$session2.access_token);
            uid = (_d$user2 = d.user) === null || _d$user2 === void 0 ? void 0 : _d$user2.id;
            if (!(tok && uid)) {
              _context70.n = 8;
              break;
            }
            nameFailed = false;
            _context70.p = 3;
            _t85 = needRows;
            _context70.n = 4;
            return api.patch("profiles?id=eq.".concat(uid), {
              name: name,
              initials: mk(name)
            }, tok);
          case 4:
            _t85(_context70.v);
            _context70.n = 6;
            break;
          case 5:
            _context70.p = 5;
            _t86 = _context70.v;
            nameFailed = true;
            console.warn('profile name update failed:', _t86);
          case 6:
            setToken(tok);
            setMyUserId(uid);
            _context70.n = 7;
            return initApp(tok, uid);
          case 7:
            if (nameFailed) showToast("⚠️ Conta criada, mas o teu nome não ficou guardado. Edita-o em Geral.", T.brand);
            _context70.n = 17;
            break;
          case 8:
            if (!uid) {
              _context70.n = 16;
              break;
            }
            _context70.p = 9;
            _context70.n = 10;
            return api.signIn(email, pass);
          case 10:
            d2 = _context70.v;
            tok2 = d2.access_token || ((_d2$session = d2.session) === null || _d2$session === void 0 ? void 0 : _d2$session.access_token);
            if (!tok2) {
              _context70.n = 12;
              break;
            }
            setToken(tok2);
            setMyUserId(d2.user.id);
            _context70.n = 11;
            return initApp(tok2, d2.user.id);
          case 11:
            _context70.n = 13;
            break;
          case 12:
            setAuthError("Conta criada! Toca em 'Entrar' para aceder.");
          case 13:
            _context70.n = 15;
            break;
          case 14:
            _context70.p = 14;
            _t87 = _context70.v;
            setAuthError("Conta criada! Toca em 'Entrar' para aceder.");
          case 15:
            _context70.n = 17;
            break;
          case 16:
            setAuthError("Erro ao criar conta. Tenta novamente.");
          case 17:
            _context70.n = 19;
            break;
          case 18:
            _context70.p = 18;
            _t88 = _context70.v;
            setAuthError(errPt(_t88));
          case 19:
            setLoading(false);
          case 20:
            return _context70.a(2);
        }
      }, _callee70, null, [[9, 14], [3, 5], [1, 18]]);
    }));
    return function handleRegister(_x35, _x36, _x37) {
      return _ref194.apply(this, arguments);
    };
  }();
  var handleLogout = function handleLogout() {
    RO.on = false;
    roHistoryRef.current = false;
    setAdminView(false);
    setAdminErr(null);
    setToken(null);
    setMyUserId(null);
    setProfile(null);
    setTeams([]);
    setMembers([]);
    setFineTypes([]);
    setFines([]);
    setCards([]);
    setExpenses([]);
    setTrainings([]);
    setPresences({});
    setAbsences([]);
    setTeamId(null);
    setAppReady(false);
    setTab("home");
  };
  var addFine = function () {
    var _ref195 = _asyncToGenerator(_regenerator().m(function _callee71(d) {
      var _needRows, _needRows2, f, _t89;
      return _regenerator().w(function (_context71) {
        while (1) switch (_context71.n) {
          case 0:
            _t89 = needRows;
            _context71.n = 1;
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
            _needRows = _t89(_context71.v);
            _needRows2 = _slicedToArray(_needRows, 1);
            f = _needRows2[0];
            setFines(function (p) {
              return [aFine(f)].concat(_toConsumableArray(p));
            });
          case 2:
            return _context71.a(2);
        }
      }, _callee71);
    }));
    return function addFine(_x38) {
      return _ref195.apply(this, arguments);
    };
  }();
  var writeFailed = function writeFailed(what, e) {
    return showToast("\u26A0\uFE0F N\xE3o foi poss\xEDvel ".concat(what, ": ").concat(errPt(e, "erro")), T.brand);
  };
  var updated = function updated(res) {
    if (!Array.isArray(res) || !res.length) throw new Error("sem permissão, ou o registo já não existe");
    return res;
  };
  var confirmGone = function () {
    var _ref196 = _asyncToGenerator(_regenerator().m(function _callee72(path) {
      var still;
      return _regenerator().w(function (_context72) {
        while (1) switch (_context72.n) {
          case 0:
            _context72.n = 1;
            return api.get(path, token);
          case 1:
            still = _context72.v;
            if (!still.length) {
              _context72.n = 2;
              break;
            }
            throw new Error("sem permissão (o registo continua a existir)");
          case 2:
            return _context72.a(2);
        }
      }, _callee72);
    }));
    return function confirmGone(_x39) {
      return _ref196.apply(this, arguments);
    };
  }();
  var togglePaid = function () {
    var _ref197 = _asyncToGenerator(_regenerator().m(function _callee73(id) {
      var f, paid, _t90, _t91;
      return _regenerator().w(function (_context73) {
        while (1) switch (_context73.p = _context73.n) {
          case 0:
            f = fines.find(function (f) {
              return f.id === id;
            });
            if (f) {
              _context73.n = 1;
              break;
            }
            return _context73.a(2);
          case 1:
            paid = !f.paid;
            _context73.p = 2;
            _t90 = updated;
            _context73.n = 3;
            return api.patch("fines?id=eq.".concat(id), {
              paid: paid,
              paid_at: paid ? new Date().toISOString() : null
            }, token);
          case 3:
            _t90(_context73.v);
            setFines(function (p) {
              return p.map(function (x) {
                return x.id === id ? _objectSpread(_objectSpread({}, x), {}, {
                  paid: paid
                }) : x;
              });
            });
            _context73.n = 5;
            break;
          case 4:
            _context73.p = 4;
            _t91 = _context73.v;
            writeFailed(paid ? "marcar a multa como paga" : "marcar a multa como por pagar", _t91);
          case 5:
            return _context73.a(2);
        }
      }, _callee73, null, [[2, 4]]);
    }));
    return function togglePaid(_x40) {
      return _ref197.apply(this, arguments);
    };
  }();
  var delFine = function () {
    var _ref198 = _asyncToGenerator(_regenerator().m(function _callee74(id) {
      var _t92;
      return _regenerator().w(function (_context74) {
        while (1) switch (_context74.p = _context74.n) {
          case 0:
            _context74.p = 0;
            _context74.n = 1;
            return api.del("fines?id=eq.".concat(id), token);
          case 1:
            _context74.n = 2;
            return confirmGone("fines?id=eq.".concat(id, "&select=id"));
          case 2:
            setFines(function (p) {
              return p.filter(function (f) {
                return f.id !== id;
              });
            });
            _context74.n = 4;
            break;
          case 3:
            _context74.p = 3;
            _t92 = _context74.v;
            writeFailed("apagar a multa", _t92);
          case 4:
            return _context74.a(2);
        }
      }, _callee74, null, [[0, 3]]);
    }));
    return function delFine(_x41) {
      return _ref198.apply(this, arguments);
    };
  }();
  var editFine = function () {
    var _ref199 = _asyncToGenerator(_regenerator().m(function _callee75(id, data) {
      var _t93, _t94;
      return _regenerator().w(function (_context75) {
        while (1) switch (_context75.p = _context75.n) {
          case 0:
            _context75.p = 0;
            _t93 = updated;
            _context75.n = 1;
            return api.patch("fines?id=eq.".concat(id), {
              emoji: data.emoji,
              reason: data.reason,
              amount: data.amount
            }, token);
          case 1:
            _t93(_context75.v);
            setFines(function (p) {
              return p.map(function (f) {
                return f.id === id ? _objectSpread(_objectSpread({}, f), data) : f;
              });
            });
            _context75.n = 3;
            break;
          case 2:
            _context75.p = 2;
            _t94 = _context75.v;
            writeFailed("guardar a multa", _t94);
          case 3:
            return _context75.a(2);
        }
      }, _callee75, null, [[0, 2]]);
    }));
    return function editFine(_x42, _x43) {
      return _ref199.apply(this, arguments);
    };
  }();
  var addCard = function () {
    var _ref200 = _asyncToGenerator(_regenerator().m(function _callee76(d) {
      var _needRows3, _needRows4, c, _t95;
      return _regenerator().w(function (_context76) {
        while (1) switch (_context76.n) {
          case 0:
            _t95 = needRows;
            _context76.n = 1;
            return api.post('cards', {
              team_id: d.teamId,
              member_id: d.memberId,
              kind: d.kind,
              match_date: d.date,
              opponent: d.opponent || null,
              note: d.note || null,
              consumed: false,
              created_by: myUserId
            }, token);
          case 1:
            _needRows3 = _t95(_context76.v);
            _needRows4 = _slicedToArray(_needRows3, 1);
            c = _needRows4[0];
            setCards(function (p) {
              return [aCard(c)].concat(_toConsumableArray(p));
            });
            return _context76.a(2, aCard(c));
        }
      }, _callee76);
    }));
    return function addCard(_x44) {
      return _ref200.apply(this, arguments);
    };
  }();
  var editCard = function editCard(id, d) {
    return guarded("card:".concat(id), _asyncToGenerator(_regenerator().m(function _callee77() {
      var _t96, _t97;
      return _regenerator().w(function (_context77) {
        while (1) switch (_context77.p = _context77.n) {
          case 0:
            _context77.p = 0;
            _t96 = needRows;
            _context77.n = 1;
            return api.patch("cards?id=eq.".concat(id), {
              kind: d.kind,
              match_date: d.date,
              opponent: d.opponent || null,
              note: d.note || null
            }, token);
          case 1:
            _t96(_context77.v);
            setCards(function (p) {
              return p.map(function (c) {
                return c.id === id ? _objectSpread(_objectSpread({}, c), d) : c;
              });
            });
            return _context77.a(2, true);
          case 2:
            _context77.p = 2;
            _t97 = _context77.v;
            writeFailed("guardar o cartão", _t97);
            return _context77.a(2, false);
        }
      }, _callee77, null, [[0, 2]]);
    })));
  };
  var delCard = function delCard(id) {
    return guarded("card:".concat(id), _asyncToGenerator(_regenerator().m(function _callee78() {
      var _t98;
      return _regenerator().w(function (_context78) {
        while (1) switch (_context78.p = _context78.n) {
          case 0:
            _context78.p = 0;
            _context78.n = 1;
            return api.del("cards?id=eq.".concat(id), token);
          case 1:
            _context78.n = 2;
            return confirmGone("cards?id=eq.".concat(id, "&select=id"));
          case 2:
            setCards(function (p) {
              return p.filter(function (c) {
                return c.id !== id;
              });
            });
            return _context78.a(2, true);
          case 3:
            _context78.p = 3;
            _t98 = _context78.v;
            writeFailed("apagar o cartão", _t98);
            return _context78.a(2, false);
        }
      }, _callee78, null, [[0, 3]]);
    })));
  };
  var serveSuspension = function serveSuspension(memberId) {
    return guarded("susp:".concat(memberId), _asyncToGenerator(_regenerator().m(function _callee79() {
      var ids, _members$find2, done, _t99, _t100;
      return _regenerator().w(function (_context79) {
        while (1) switch (_context79.p = _context79.n) {
          case 0:
            ids = cards.filter(function (c) {
              return c.teamId === teamId && String(c.memberId) === String(memberId) && c.kind === 'amarelo' && !c.consumed;
            }).sort(function (a, b) {
              return (a.date || '').localeCompare(b.date || '') || String(a.id).localeCompare(String(b.id));
            }).slice(0, 5).map(function (c) {
              return c.id;
            });
            if (!(ids.length < 5)) {
              _context79.n = 1;
              break;
            }
            return _context79.a(2, false);
          case 1:
            _context79.p = 1;
            _t99 = needRows;
            _context79.n = 2;
            return api.patch("cards?id=in.(".concat(ids.join(','), ")"), {
              consumed: true
            }, token);
          case 2:
            done = _t99(_context79.v).map(function (r) {
              return r.id;
            });
            setCards(function (p) {
              return p.map(function (c) {
                return done.includes(c.id) ? _objectSpread(_objectSpread({}, c), {}, {
                  consumed: true
                }) : c;
              });
            });
            if (!(done.length < ids.length)) {
              _context79.n = 3;
              break;
            }
            throw new Error("s\xF3 ".concat(done.length, " de ").concat(ids.length, " cart\xF5es foram atualizados"));
          case 3:
            showToast("Contador de ".concat(((_members$find2 = members.find(function (m) {
              return String(m.id) === String(memberId);
            })) === null || _members$find2 === void 0 ? void 0 : _members$find2.name) || "jogador", " reposto a 0"), T.navy);
            return _context79.a(2, true);
          case 4:
            _context79.p = 4;
            _t100 = _context79.v;
            writeFailed("repor o contador", _t100);
            return _context79.a(2, false);
        }
      }, _callee79, null, [[1, 4]]);
    })));
  };
  var editExpense = function editExpense(id, d) {
    return guarded("exp:".concat(id), _asyncToGenerator(_regenerator().m(function _callee80() {
      var desc, amt, _updated, _updated2, e, _t101, _t102;
      return _regenerator().w(function (_context80) {
        while (1) switch (_context80.p = _context80.n) {
          case 0:
            _context80.p = 0;
            desc = String(d.description || "").trim(), amt = Number(d.amount);
            if (desc) {
              _context80.n = 1;
              break;
            }
            throw new Error("a descrição é obrigatória");
          case 1:
            if (!(!Number.isFinite(amt) || amt <= 0)) {
              _context80.n = 2;
              break;
            }
            throw new Error("o valor tem de ser maior que zero");
          case 2:
            _t101 = updated;
            _context80.n = 3;
            return api.patch("expenses?id=eq.".concat(id), {
              description: desc,
              amount: amt
            }, token);
          case 3:
            _updated = _t101(_context80.v);
            _updated2 = _slicedToArray(_updated, 1);
            e = _updated2[0];
            setExpenses(function (p) {
              return p.map(function (x) {
                return x.id === id ? aExpense(e) : x;
              });
            });
            return _context80.a(2, true);
          case 4:
            _context80.p = 4;
            _t102 = _context80.v;
            writeFailed("guardar a despesa", _t102);
            return _context80.a(2, false);
        }
      }, _callee80, null, [[0, 4]]);
    })));
  };
  var deleteExpense = function deleteExpense(id) {
    return guarded("exp:".concat(id), _asyncToGenerator(_regenerator().m(function _callee81() {
      var _t103;
      return _regenerator().w(function (_context81) {
        while (1) switch (_context81.p = _context81.n) {
          case 0:
            _context81.p = 0;
            _context81.n = 1;
            return api.del("expenses?id=eq.".concat(id), token);
          case 1:
            _context81.n = 2;
            return confirmGone("expenses?id=eq.".concat(id, "&select=id"));
          case 2:
            setExpenses(function (p) {
              return p.filter(function (x) {
                return x.id !== id;
              });
            });
            showToast("Despesa apagada", T.navy);
            return _context81.a(2, true);
          case 3:
            _context81.p = 3;
            _t103 = _context81.v;
            writeFailed("apagar a despesa", _t103);
            return _context81.a(2, false);
        }
      }, _callee81, null, [[0, 3]]);
    })));
  };
  var addExpense = function () {
    var _ref206 = _asyncToGenerator(_regenerator().m(function _callee82(d) {
      var _updated3, _updated4, e, _t104, _t105;
      return _regenerator().w(function (_context82) {
        while (1) switch (_context82.p = _context82.n) {
          case 0:
            _context82.p = 0;
            _t104 = updated;
            _context82.n = 1;
            return api.post('expenses', {
              team_id: d.teamId,
              description: d.description,
              amount: d.amount,
              created_by: myUserId
            }, token);
          case 1:
            _updated3 = _t104(_context82.v);
            _updated4 = _slicedToArray(_updated3, 1);
            e = _updated4[0];
            setExpenses(function (p) {
              return [aExpense(e)].concat(_toConsumableArray(p));
            });
            _context82.n = 3;
            break;
          case 2:
            _context82.p = 2;
            _t105 = _context82.v;
            writeFailed("registar a despesa", _t105);
          case 3:
            return _context82.a(2);
        }
      }, _callee82, null, [[0, 2]]);
    }));
    return function addExpense(_x45) {
      return _ref206.apply(this, arguments);
    };
  }();
  var logSession = function () {
    var _ref207 = _asyncToGenerator(_regenerator().m(function _callee83(recurring, date, currentPresences) {
      var alreadyLogged, newT, presArr, saved, okArr, names, shown, _t106, _t107;
      return _regenerator().w(function (_context83) {
        while (1) switch (_context83.p = _context83.n) {
          case 0:
            alreadyLogged = trainings.find(function (t) {
              return t.teamId === recurring.teamId && t.type === "treino" && t.date === date && t.location === recurring.location && t.time === recurring.time;
            });
            if (!alreadyLogged) {
              _context83.n = 1;
              break;
            }
            alert("Sessão já foi registada!");
            return _context83.a(2);
          case 1:
            _context83.p = 1;
            _t106 = needRows;
            _context83.n = 2;
            return api.post("trainings", {
              team_id: recurring.teamId,
              type: "treino",
              date: date,
              time: recurring.time,
              location: recurring.location,
              notes: recurring.notes || null,
              recurring: false,
              created_by: myUserId
            }, token);
          case 2:
            newT = _t106(_context83.v)[0];
            setTrainings(function (p) {
              return [].concat(_toConsumableArray(p), [aTraining(newT)]);
            });
            presArr = Object.entries(currentPresences || {}).filter(function (_ref208) {
              var _ref209 = _slicedToArray(_ref208, 2),
                s = _ref209[1];
              return s;
            });
            if (!(presArr.length > 0)) {
              _context83.n = 4;
              break;
            }
            _context83.n = 3;
            return Promise.all(presArr.map(function (_ref210) {
              var _ref211 = _slicedToArray(_ref210, 2),
                mid = _ref211[0],
                status = _ref211[1];
              return api.upsert("presences", {
                training_id: newT.id,
                member_id: mid,
                status: status
              }, token).then(function (r) {
                return Array.isArray(r) && r.length > 0;
              }).catch(function () {
                return false;
              });
            }));
          case 3:
            saved = _context83.v;
            okArr = presArr.filter(function (_, i) {
              return saved[i];
            });
            setPresences(function (p) {
              return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, newT.id, Object.fromEntries(okArr)));
            });
            if (okArr.length < presArr.length) {
              names = presArr.filter(function (_, i) {
                return !saved[i];
              }).map(function (_ref212) {
                var _ref213 = _slicedToArray(_ref212, 1),
                  mid = _ref213[0];
                return (members.find(function (x) {
                  return String(x.id) === String(mid);
                }) || {}).name || "membro";
              });
              shown = names.slice(0, 4).join(", ") + (names.length > 4 ? " e mais ".concat(names.length - 4) : "");
              writeFailed("guardar todas as presenças da sessão", new Error("".concat(presArr.length - okArr.length, " de ").concat(presArr.length, " n\xE3o foram guardadas (").concat(shown, ")")));
            }
          case 4:
            _context83.n = 6;
            break;
          case 5:
            _context83.p = 5;
            _t107 = _context83.v;
            writeFailed("registar a sessão", _t107);
          case 6:
            return _context83.a(2);
        }
      }, _callee83, null, [[1, 5]]);
    }));
    return function logSession(_x46, _x47, _x48) {
      return _ref207.apply(this, arguments);
    };
  }();
  var addTraining = function () {
    var _ref214 = _asyncToGenerator(_regenerator().m(function _callee84(d) {
      var res, t, tm, isJogo, title, body, _t108;
      return _regenerator().w(function (_context84) {
        while (1) switch (_context84.n) {
          case 0:
            _t108 = needRows;
            _context84.n = 1;
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
            res = _t108(_context84.v);
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
            return _context84.a(2);
        }
      }, _callee84);
    }));
    return function addTraining(_x49) {
      return _ref214.apply(this, arguments);
    };
  }();
  var delTraining = function delTraining(id) {
    return guarded("tr:".concat(id), _asyncToGenerator(_regenerator().m(function _callee85() {
      var _t109;
      return _regenerator().w(function (_context85) {
        while (1) switch (_context85.p = _context85.n) {
          case 0:
            _context85.p = 0;
            _context85.n = 1;
            return api.del("trainings?id=eq.".concat(id), token);
          case 1:
            _context85.n = 2;
            return confirmGone("trainings?id=eq.".concat(id, "&select=id"));
          case 2:
            setTrainings(function (p) {
              return p.filter(function (t) {
                return t.id !== id;
              });
            });
            return _context85.a(2, true);
          case 3:
            _context85.p = 3;
            _t109 = _context85.v;
            writeFailed("apagar o treino", _t109);
            return _context85.a(2, false);
        }
      }, _callee85, null, [[0, 3]]);
    })));
  };
  var editTraining = function editTraining(id, d) {
    return guarded("tr:".concat(id), _asyncToGenerator(_regenerator().m(function _callee86() {
      var patch, t, _t110, _t111;
      return _regenerator().w(function (_context86) {
        while (1) switch (_context86.p = _context86.n) {
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
            _context86.p = 1;
            _t110 = needRows;
            _context86.n = 2;
            return api.patch("trainings?id=eq.".concat(id), patch, token);
          case 2:
            t = _t110(_context86.v)[0];
            setTrainings(function (p) {
              return p.map(function (x) {
                return x.id === id ? aTraining(t) : x;
              });
            });
            return _context86.a(2, true);
          case 3:
            _context86.p = 3;
            _t111 = _context86.v;
            writeFailed("guardar o treino", _t111);
            throw _t111;
          case 4:
            return _context86.a(2);
        }
      }, _callee86, null, [[1, 3]]);
    })));
  };
  var setPresence = function setPresence(tid, mid, status) {
    return guarded("pres:".concat(tid, ":").concat(mid), _asyncToGenerator(_regenerator().m(function _callee87() {
      var _t112, _t113;
      return _regenerator().w(function (_context87) {
        while (1) switch (_context87.p = _context87.n) {
          case 0:
            _context87.p = 0;
            if (status) {
              _context87.n = 3;
              break;
            }
            _context87.n = 1;
            return api.del("presences?training_id=eq.".concat(tid, "&member_id=eq.").concat(mid), token);
          case 1:
            _context87.n = 2;
            return confirmGone("presences?training_id=eq.".concat(tid, "&member_id=eq.").concat(mid, "&select=training_id"));
          case 2:
            setPresences(function (p) {
              var t = _objectSpread({}, p[tid] || {});
              delete t[mid];
              return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, tid, t));
            });
            _context87.n = 5;
            break;
          case 3:
            _t112 = needRows;
            _context87.n = 4;
            return api.upsert('presences', {
              training_id: tid,
              member_id: mid,
              status: status
            }, token);
          case 4:
            _t112(_context87.v);
            setPresences(function (p) {
              return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, tid, _objectSpread(_objectSpread({}, p[tid] || {}), {}, _defineProperty({}, mid, status))));
            });
          case 5:
            return _context87.a(2, true);
          case 6:
            _context87.p = 6;
            _t113 = _context87.v;
            writeFailed("guardar a presença", _t113);
            return _context87.a(2, false);
        }
      }, _callee87, null, [[0, 6]]);
    })));
  };
  var addMember = function () {
    var _ref218 = _asyncToGenerator(_regenerator().m(function _callee88(d) {
      var _r, j, m, _t114, _t115;
      return _regenerator().w(function (_context88) {
        while (1) switch (_context88.p = _context88.n) {
          case 0:
            if (isAdmin) {
              _context88.n = 1;
              break;
            }
            writeFailed("adicionar o membro", new Error("só os administradores podem adicionar membros"));
            return _context88.a(2, false);
          case 1:
            _context88.p = 1;
            _context88.n = 2;
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
                p_position: d.position,
                p_phone: d.phone || '',
                p_birthday: d.birthday || null,
                p_role: d.role || 'player'
              })
            });
          case 2:
            _r = _context88.v;
            j = null;
            _context88.p = 3;
            _context88.n = 4;
            return _r.json();
          case 4:
            j = _context88.v;
            _context88.n = 6;
            break;
          case 5:
            _context88.p = 5;
            _t114 = _context88.v;
            j = null;
          case 6:
            if (_r.ok) {
              _context88.n = 7;
              break;
            }
            throw new Error(j && j.message || "Erro ".concat(_r.status));
          case 7:
            m = Array.isArray(j) ? j[0] : j;
            if (!(!m || !m.id)) {
              _context88.n = 8;
              break;
            }
            throw new Error("sem permissão, ou resposta vazia");
          case 8:
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
            return _context88.a(2, true);
          case 9:
            _context88.p = 9;
            _t115 = _context88.v;
            writeFailed("adicionar o membro", _t115);
            return _context88.a(2, false);
        }
      }, _callee88, null, [[3, 5], [1, 9]]);
    }));
    return function addMember(_x50) {
      return _ref218.apply(this, arguments);
    };
  }();
  var leaveTeam = function () {
    var _ref219 = _asyncToGenerator(_regenerator().m(function _callee89(tid) {
      var m, remaining, _t116;
      return _regenerator().w(function (_context89) {
        while (1) switch (_context89.p = _context89.n) {
          case 0:
            m = members.find(function (m) {
              return m.teamId === tid && m.userId === myUserId;
            });
            if (m) {
              _context89.n = 1;
              break;
            }
            return _context89.a(2);
          case 1:
            _context89.p = 1;
            _context89.n = 2;
            return api.del("team_members?id=eq.".concat(m.id), token);
          case 2:
            _context89.n = 3;
            return confirmGone("team_members?id=eq.".concat(m.id, "&select=id"));
          case 3:
            setTeams(function (p) {
              return p.filter(function (t) {
                return t.id !== tid;
              });
            });
            setMembers(function (p) {
              return p.filter(function (m) {
                return m.teamId !== tid;
              });
            });
            remaining = teams.filter(function (t) {
              return t.id !== tid;
            });
            if (!(remaining.length > 0)) {
              _context89.n = 4;
              break;
            }
            _context89.n = 4;
            return switchTeam(remaining[0].id);
          case 4:
            _context89.n = 6;
            break;
          case 5:
            _context89.p = 5;
            _t116 = _context89.v;
            writeFailed("sair da equipa", _t116);
          case 6:
            return _context89.a(2);
        }
      }, _callee89, null, [[1, 5]]);
    }));
    return function leaveTeam(_x51) {
      return _ref219.apply(this, arguments);
    };
  }();
  var ROLE_LABEL = {
    admin: "administrador",
    treinador: "treinador",
    diretor: "diretor",
    player: "jogador"
  };
  var adminCount = function adminCount(teamId) {
    return members.filter(function (x) {
      return x.teamId === teamId && x.role === "admin";
    }).length;
  };
  var toggleRole = function () {
    var _ref220 = _asyncToGenerator(_regenerator().m(function _callee90(id, newRole) {
      var m, nr, res;
      return _regenerator().w(function (_context90) {
        while (1) switch (_context90.n) {
          case 0:
            m = members.find(function (m) {
              return m.id === id;
            });
            if (m) {
              _context90.n = 1;
              break;
            }
            throw new Error("Membro não encontrado");
          case 1:
            nr = newRole || (m.role === 'admin' ? 'player' : 'admin');
            if (!(m.role === "admin" && nr !== "admin" && adminCount(m.teamId) <= 1)) {
              _context90.n = 2;
              break;
            }
            throw new Error("A equipa tem de ter pelo menos um administrador.");
          case 2:
            _context90.n = 3;
            return api.patch("team_members?id=eq.".concat(id), {
              role: nr
            }, token);
          case 3:
            res = _context90.v;
            if (!(!Array.isArray(res) || !res.length)) {
              _context90.n = 4;
              break;
            }
            throw new Error("Não foi possível alterar o papel (sem permissão?)");
          case 4:
            setMembers(function (p) {
              return p.map(function (x) {
                return x.id === id ? _objectSpread(_objectSpread({}, x), {}, {
                  role: nr
                }) : x;
              });
            });
            showToast("".concat(m.name, " agora \xE9 ").concat(ROLE_LABEL[nr] || nr), T.navy);
          case 5:
            return _context90.a(2);
        }
      }, _callee90);
    }));
    return function toggleRole(_x52, _x53) {
      return _ref220.apply(this, arguments);
    };
  }();
  var removeMember = function () {
    var _ref221 = _asyncToGenerator(_regenerator().m(function _callee91(id) {
      var m, still;
      return _regenerator().w(function (_context91) {
        while (1) switch (_context91.n) {
          case 0:
            m = members.find(function (x) {
              return x.id === id;
            });
            if (!(m && m.role === "admin" && adminCount(m.teamId) <= 1)) {
              _context91.n = 1;
              break;
            }
            throw new Error("A equipa tem de ter pelo menos um administrador.");
          case 1:
            _context91.n = 2;
            return api.del("team_members?id=eq.".concat(id), token);
          case 2:
            _context91.n = 3;
            return api.get("team_members?id=eq.".concat(id, "&select=id"), token);
          case 3:
            still = _context91.v;
            if (!still.length) {
              _context91.n = 4;
              break;
            }
            throw new Error("Não foi possível remover (sem permissão?)");
          case 4:
            setMembers(function (p) {
              return p.filter(function (x) {
                return x.id !== id;
              });
            });
            if (m) api.get("member_absences?team_id=eq.".concat(m.teamId, "&order=start_date.desc,created_at.desc"), token).then(function (r) {
              return setAbsences(r.map(aAbsence));
            }).catch(function (e) {
              console.warn('absences reload failed:', e);
              showToast("Membro removido, mas não foi possível atualizar o histórico de ausências. Puxa para atualizar.", T.brand);
            });
            showToast("".concat(m ? m.name : "Membro", " removido da equipa"), T.navy);
          case 5:
            return _context91.a(2);
        }
      }, _callee91);
    }));
    return function removeMember(_x54) {
      return _ref221.apply(this, arguments);
    };
  }();
  var absLock = React.useRef(new Set());
  var guarded = function () {
    var _ref222 = _asyncToGenerator(_regenerator().m(function _callee92(key, fn) {
      return _regenerator().w(function (_context92) {
        while (1) switch (_context92.p = _context92.n) {
          case 0:
            if (!absLock.current.has(key)) {
              _context92.n = 1;
              break;
            }
            return _context92.a(2, false);
          case 1:
            absLock.current.add(key);
            _context92.p = 2;
            _context92.n = 3;
            return fn();
          case 3:
            return _context92.a(2, _context92.v);
          case 4:
            _context92.p = 4;
            absLock.current.delete(key);
            return _context92.f(4);
          case 5:
            return _context92.a(2);
        }
      }, _callee92, null, [[2,, 4, 5]]);
    }));
    return function guarded(_x55, _x56) {
      return _ref222.apply(this, arguments);
    };
  }();
  var setMemberUnavail = function setMemberUnavail(memberId, a) {
    return setMembers(function (p) {
      return p.map(function (x) {
        return x.id !== memberId ? x : a ? _objectSpread(_objectSpread({}, x), {}, {
          unavailable: true,
          unavailableEmoji: a.emoji,
          unavailableNote: a.note,
          unavailableSince: a.start
        }) : _objectSpread(_objectSpread({}, x), {}, {
          unavailable: false,
          unavailableEmoji: '🤕',
          unavailableNote: '',
          unavailableSince: ''
        });
      });
    });
  };
  var absRow = function absRow(res) {
    if (!res || !res.id) throw new Error("sem permissão, ou resposta vazia");
    return aAbsence(res);
  };
  var needNote = function needNote(v) {
    if (!v || !String(v.note || "").trim()) throw new Error("a nota é obrigatória");
  };
  var absPut = function absPut(a) {
    return setAbsences(function (p) {
      return Array.isArray(p) ? p.some(function (x) {
        return x.id === a.id;
      }) ? p.map(function (x) {
        return x.id === a.id ? a : x;
      }) : [a].concat(_toConsumableArray(p)) : p;
    });
  };
  var callOpen = function () {
    var _ref223 = _asyncToGenerator(_regenerator().m(function _callee93(memberId, v) {
      var _t117;
      return _regenerator().w(function (_context93) {
        while (1) switch (_context93.n) {
          case 0:
            _t117 = absRow;
            _context93.n = 1;
            return rpcCall('absence_open', {
              p_member_id: memberId,
              p_kind: v.kind,
              p_emoji: v.emoji,
              p_note: v.note.trim(),
              p_start: v.start
            }, token);
          case 1:
            return _context93.a(2, _t117(_context93.v));
        }
      }, _callee93);
    }));
    return function callOpen(_x57, _x58) {
      return _ref223.apply(this, arguments);
    };
  }();
  var callClose = function () {
    var _ref224 = _asyncToGenerator(_regenerator().m(function _callee94(a, end) {
      var _t118;
      return _regenerator().w(function (_context94) {
        while (1) switch (_context94.n) {
          case 0:
            _t118 = absRow;
            _context94.n = 1;
            return rpcCall('absence_close', {
              p_absence_id: a.id,
              p_end: end && end >= a.start ? end : a.start
            }, token);
          case 1:
            return _context94.a(2, _t118(_context94.v));
        }
      }, _callee94);
    }));
    return function callClose(_x59, _x60) {
      return _ref224.apply(this, arguments);
    };
  }();
  var absOpen = function absOpen(memberId, v) {
    return guarded("m:".concat(memberId), _asyncToGenerator(_regenerator().m(function _callee95() {
      var m, a, _t119;
      return _regenerator().w(function (_context95) {
        while (1) switch (_context95.p = _context95.n) {
          case 0:
            m = members.find(function (x) {
              return x.id === memberId;
            });
            _context95.p = 1;
            needNote(v);
            _context95.n = 2;
            return callOpen(memberId, v);
          case 2:
            a = _context95.v;
            absPut(a);
            setMemberUnavail(memberId, a);
            showToast("".concat(m ? m.name : "Jogador", " marcado como indispon\xEDvel"), T.navy);
            return _context95.a(2, true);
          case 3:
            _context95.p = 3;
            _t119 = _context95.v;
            writeFailed("guardar a lesão/ausência", _t119);
            return _context95.a(2, false);
        }
      }, _callee95, null, [[1, 3]]);
    })));
  };
  var absClose = function absClose(a) {
    return guarded("a:".concat(a.id), _asyncToGenerator(_regenerator().m(function _callee96() {
      var _r2, _t120;
      return _regenerator().w(function (_context96) {
        while (1) switch (_context96.p = _context96.n) {
          case 0:
            _context96.p = 0;
            _context96.n = 1;
            return callClose(a, todayLocal());
          case 1:
            _r2 = _context96.v;
            absPut(_r2);
            if (_r2.memberId) setMemberUnavail(_r2.memberId, null);
            showToast("".concat(a.memberName, ": ").concat(ABS_KINDS[a.kind].one, " fechada"), T.navy);
            return _context96.a(2, true);
          case 2:
            _context96.p = 2;
            _t120 = _context96.v;
            writeFailed("fechar o registo", _t120);
            return _context96.a(2, false);
        }
      }, _callee96, null, [[0, 2]]);
    })));
  };
  var absUpdate = function absUpdate(a, v) {
    return guarded("a:".concat(a.id), _asyncToGenerator(_regenerator().m(function _callee97() {
      var _r3, _t121, _t122;
      return _regenerator().w(function (_context97) {
        while (1) switch (_context97.p = _context97.n) {
          case 0:
            _context97.p = 0;
            needNote(v);
            _t121 = absRow;
            _context97.n = 1;
            return rpcCall('absence_update', {
              p_absence_id: a.id,
              p_kind: v.kind,
              p_emoji: v.emoji,
              p_note: v.note.trim(),
              p_start: v.start,
              p_end: a.end ? v.end || a.end : null
            }, token);
          case 1:
            _r3 = _t121(_context97.v);
            absPut(_r3);
            if (!_r3.end && _r3.memberId) setMemberUnavail(_r3.memberId, _r3);
            return _context97.a(2, true);
          case 2:
            _context97.p = 2;
            _t122 = _context97.v;
            writeFailed("guardar o registo", _t122);
            return _context97.a(2, false);
        }
      }, _callee97, null, [[0, 2]]);
    })));
  };
  var absDelete = function absDelete(a) {
    return guarded("a:".concat(a.id), _asyncToGenerator(_regenerator().m(function _callee98() {
      var res, _t123;
      return _regenerator().w(function (_context98) {
        while (1) switch (_context98.p = _context98.n) {
          case 0:
            _context98.p = 0;
            _context98.n = 1;
            return rpcCall('absence_delete', {
              p_absence_id: a.id
            }, token);
          case 1:
            res = _context98.v;
            if (!(res !== a.id)) {
              _context98.n = 2;
              break;
            }
            throw new Error("sem permissão, ou o registo já não existe");
          case 2:
            setAbsences(function (p) {
              return Array.isArray(p) ? p.filter(function (x) {
                return x.id !== a.id;
              }) : p;
            });
            if (!a.end && a.memberId) setMemberUnavail(a.memberId, null);
            showToast("Registo apagado", T.navy);
            return _context98.a(2, true);
          case 3:
            _context98.p = 3;
            _t123 = _context98.v;
            writeFailed("apagar o registo", _t123);
            return _context98.a(2, false);
        }
      }, _callee98, null, [[0, 3]]);
    })));
  };
  var absAddPast = function absAddPast(memberId, v) {
    return guarded("m:".concat(memberId), _asyncToGenerator(_regenerator().m(function _callee99() {
      var opened, closed, res, _t124, _t125;
      return _regenerator().w(function (_context99) {
        while (1) switch (_context99.p = _context99.n) {
          case 0:
            opened = null;
            _context99.p = 1;
            needNote(v);
            if (!(!v.end || v.end < v.start)) {
              _context99.n = 2;
              break;
            }
            throw new Error("a data de fim não pode ser anterior ao início");
          case 2:
            _context99.n = 3;
            return callOpen(memberId, v);
          case 3:
            opened = _context99.v;
            _context99.n = 4;
            return callClose(opened, v.end);
          case 4:
            closed = _context99.v;
            absPut(closed);
            setMemberUnavail(memberId, null);
            showToast("Registo adicionado", T.navy);
            return _context99.a(2, true);
          case 5:
            _context99.p = 5;
            _t124 = _context99.v;
            if (!opened) {
              _context99.n = 10;
              break;
            }
            _context99.p = 6;
            _context99.n = 7;
            return rpcCall('absence_delete', {
              p_absence_id: opened.id
            }, token);
          case 7:
            res = _context99.v;
            if (!(res !== opened.id)) {
              _context99.n = 8;
              break;
            }
            throw new Error("não confirmado");
          case 8:
            _context99.n = 10;
            break;
          case 9:
            _context99.p = 9;
            _t125 = _context99.v;
            absPut(opened);
            setMemberUnavail(memberId, opened);
            writeFailed("adicionar o registo (ficou em curso, fecha-o ou apaga-o à mão)", _t124);
            return _context99.a(2, false);
          case 10:
            writeFailed("adicionar o registo", _t124);
            return _context99.a(2, false);
        }
      }, _callee99, null, [[6, 9], [1, 5]]);
    })));
  };
  var absLegacy = function absLegacy(m, v, closeAfter) {
    return guarded("m:".concat(m.id), _asyncToGenerator(_regenerator().m(function _callee100() {
      var opened, closed, _t126, _t127;
      return _regenerator().w(function (_context100) {
        while (1) switch (_context100.p = _context100.n) {
          case 0:
            opened = null;
            _context100.p = 1;
            needNote(v);
            _t126 = (absences || []).find(function (x) {
              return x.memberId === m.id && !x.end;
            });
            if (_t126) {
              _context100.n = 3;
              break;
            }
            _context100.n = 2;
            return callOpen(m.id, _objectSpread(_objectSpread({}, v), {}, {
              start: m.unavailableSince || v.start
            }));
          case 2:
            _t126 = _context100.v;
          case 3:
            opened = _t126;
            absPut(opened);
            setMemberUnavail(m.id, opened);
            if (!closeAfter) {
              _context100.n = 5;
              break;
            }
            _context100.n = 4;
            return callClose(opened, todayLocal());
          case 4:
            closed = _context100.v;
            absPut(closed);
            setMemberUnavail(m.id, null);
            showToast("".concat(m.name, ": ").concat(ABS_KINDS[closed.kind].one, " fechada"), T.navy);
          case 5:
            return _context100.a(2, true);
          case 6:
            _context100.p = 6;
            _t127 = _context100.v;
            writeFailed(closeAfter && opened ? "fechar o registo (a nota ficou guardada, tenta fechar outra vez)" : "guardar o registo", _t127);
            return _context100.a(2, false);
        }
      }, _callee100, null, [[1, 6]]);
    })));
  };
  var absHandlers = {
    open: absOpen,
    close: absClose,
    update: absUpdate,
    del: absDelete,
    addPast: absAddPast,
    legacy: absLegacy
  };
  var editMember = function editMember(id, data) {
    return guarded("mem:".concat(id), _asyncToGenerator(_regenerator().m(function _callee101() {
      var m, profs, prof, tmr, saved, same, diff, _t128;
      return _regenerator().w(function (_context101) {
        while (1) switch (_context101.p = _context101.n) {
          case 0:
            m = members.find(function (m) {
              return m.id === id;
            });
            _context101.p = 1;
            if (m) {
              _context101.n = 2;
              break;
            }
            throw new Error("membro não encontrado");
          case 2:
            _context101.n = 3;
            return rpcCall('update_team_member_profile', {
              p_member_id: m.userId,
              p_team_id: m.teamId,
              p_name: data.name || '',
              p_phone: data.phone || '',
              p_birthday: data.birthday || null,
              p_position: data.position || '',
              p_avatar_url: data.avatarUrl !== undefined ? data.avatarUrl || null : undefined
            }, token);
          case 3:
            _context101.n = 4;
            return rpcCall('get_team_profiles', {
              p_team_id: m.teamId
            }, token);
          case 4:
            profs = _context101.v;
            prof = (Array.isArray(profs) ? profs : []).find(function (x) {
              return x.id === m.userId;
            });
            _context101.n = 5;
            return api.get("team_members?id=eq.".concat(id, "&select=position"), token);
          case 5:
            tmr = _context101.v;
            if (!(!prof || !Array.isArray(tmr) || !tmr.length)) {
              _context101.n = 6;
              break;
            }
            throw new Error("não foi possível confirmar o que ficou gravado");
          case 6:
            saved = {
              name: prof.name || '',
              phone: prof.phone || '',
              birthday: prof.birthday || '',
              position: tmr[0].position || '',
              avatarUrl: prof.avatar_url || null
            };
            setMembers(function (p) {
              return p.map(function (x) {
                return x.id === id ? _objectSpread(_objectSpread(_objectSpread({}, x), saved), {}, {
                  position: saved.position || x.position,
                  initials: mk(saved.name || x.name)
                }) : x;
              });
            });
            if (m.userId === myUserId) setProfile(function (p) {
              return _objectSpread(_objectSpread({}, p), saved);
            });
            same = function same(a, b) {
              return String(a == null ? "" : a).trim() === String(b == null ? "" : b).trim();
            };
            diff = [["nome", data.name, saved.name], ["telefone", data.phone, saved.phone], ["aniversário", data.birthday, saved.birthday], ["posição", data.position, saved.position]].filter(function (_ref232) {
              var _ref233 = _slicedToArray(_ref232, 3),
                sent = _ref233[1],
                got = _ref233[2];
              return !same(sent, got);
            }).map(function (_ref234) {
              var _ref235 = _slicedToArray(_ref234, 1),
                n = _ref235[0];
              return n;
            });
            if (!diff.length) {
              _context101.n = 7;
              break;
            }
            throw new Error("a base de dados n\xE3o guardou: ".concat(diff.join(", ")));
          case 7:
            return _context101.a(2, true);
          case 8:
            _context101.p = 8;
            _t128 = _context101.v;
            writeFailed("guardar o perfil do membro", _t128);
            return _context101.a(2, false);
        }
      }, _callee101, null, [[1, 8]]);
    })));
  };
  var _useState525 = useState(null),
    _useState526 = _slicedToArray(_useState525, 2),
    teamError = _useState526[0],
    setTeamError = _useState526[1];
  var createTeam = function () {
    var _ref236 = _asyncToGenerator(_regenerator().m(function _callee102(d) {
      var criada, nome, issue, tid, invCode, sr, se, tr, newTeam, msg, _t129;
      return _regenerator().w(function (_context102) {
        while (1) switch (_context102.p = _context102.n) {
          case 0:
            setTeamError(null);
            criada = false;
            _context102.p = 1;
            nome = normTeamName(d.name);
            issue = teamNameIssue(nome);
            if (!issue) {
              _context102.n = 2;
              break;
            }
            throw new Error(issue);
          case 2:
            _context102.n = 3;
            return checkTeamName(nome, null, token);
          case 3:
            tid = crypto.randomUUID();
            invCode = Math.random().toString(36).substring(2, 5).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
            _context102.n = 4;
            return api.post('teams', {
              id: tid,
              name: nome,
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
          case 4:
            criada = true;
            _context102.n = 5;
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
          case 5:
            sr = _context102.v;
            if (sr.ok) {
              _context102.n = 7;
              break;
            }
            _context102.n = 6;
            return sr.json();
          case 6:
            se = _context102.v;
            throw new Error(se.message || se.hint || 'Erro ao configurar equipa');
          case 7:
            _context102.n = 8;
            return api.get("teams?id=eq.".concat(tid), token);
          case 8:
            tr = _context102.v;
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
            _context102.n = 9;
            return switchTeam(tid);
          case 9:
            _context102.n = 12;
            break;
          case 10:
            _context102.p = 10;
            _t129 = _context102.v;
            if (criada) {
              _context102.n = 11;
              break;
            }
            throw new Error(teamErrPt(_t129));
          case 11:
            msg = errPt(_t129);
            setTeamError(msg);
            showToast("\u26A0\uFE0F ".concat(msg), T.brand);
          case 12:
            return _context102.a(2);
        }
      }, _callee102, null, [[1, 10]]);
    }));
    return function createTeam(_x61) {
      return _ref236.apply(this, arguments);
    };
  }();
  var editTeam = function () {
    var _ref237 = _asyncToGenerator(_regenerator().m(function _callee103(id, patch) {
      var nome, issue, res, _t130;
      return _regenerator().w(function (_context103) {
        while (1) switch (_context103.p = _context103.n) {
          case 0:
            if (!(patch && patch.name !== undefined)) {
              _context103.n = 2;
              break;
            }
            nome = normTeamName(patch.name);
            issue = teamNameIssue(nome);
            if (!issue) {
              _context103.n = 1;
              break;
            }
            throw new Error(issue);
          case 1:
            patch = _objectSpread(_objectSpread({}, patch), {}, {
              name: nome
            });
            _context103.n = 2;
            return checkTeamName(nome, id, token);
          case 2:
            _context103.p = 2;
            _context103.n = 3;
            return api.patch("teams?id=eq.".concat(id), patch, token);
          case 3:
            res = _context103.v;
            _context103.n = 6;
            break;
          case 4:
            _context103.p = 4;
            _t130 = _context103.v;
            if (!(patch && patch.name !== undefined && isTeamNameDup(_t130))) {
              _context103.n = 5;
              break;
            }
            throw new Error(TEAM_NAME_TAKEN);
          case 5:
            throw _t130;
          case 6:
            if (!(!Array.isArray(res) || !res.length)) {
              _context103.n = 7;
              break;
            }
            throw new Error("Não foi possível guardar (sem permissão?)");
          case 7:
            setTeams(function (p) {
              return p.map(function (t) {
                return t.id === id ? _objectSpread(_objectSpread({}, t), aTeam(res[0])) : t;
              });
            });
          case 8:
            return _context103.a(2);
        }
      }, _callee103, null, [[2, 4]]);
    }));
    return function editTeam(_x62, _x63) {
      return _ref237.apply(this, arguments);
    };
  }();
  var deleteTeam = function () {
    var _ref238 = _asyncToGenerator(_regenerator().m(function _callee104(teamId) {
      var still, remaining, _t131;
      return _regenerator().w(function (_context104) {
        while (1) switch (_context104.p = _context104.n) {
          case 0:
            _context104.n = 1;
            return api.del("teams?id=eq.".concat(teamId), token);
          case 1:
            _context104.n = 2;
            return api.get("teams?id=eq.".concat(teamId, "&select=id"), token);
          case 2:
            still = _context104.v;
            if (!still.length) {
              _context104.n = 3;
              break;
            }
            throw new Error("Não foi possível apagar (sem permissão?)");
          case 3:
            _context104.p = 3;
            remaining = teams.filter(function (t) {
              return t.id !== teamId;
            });
            setTeams(remaining);
            setSub(null);
            setTab("home");
            if (!(remaining.length > 0)) {
              _context104.n = 5;
              break;
            }
            _context104.n = 4;
            return switchTeam(remaining[0].id);
          case 4:
            _context104.n = 6;
            break;
          case 5:
            setTeamId(null);
            setMembers([]);
            setFines([]);
            setFineTypes([]);
            setExpenses([]);
            setTrainings([]);
            setPresences({});
            setAbsences([]);
          case 6:
            _context104.n = 8;
            break;
          case 7:
            _context104.p = 7;
            _t131 = _context104.v;
            console.error('deleteTeam error:', _t131);
          case 8:
            return _context104.a(2);
        }
      }, _callee104, null, [[3, 7]]);
    }));
    return function deleteTeam(_x64) {
      return _ref238.apply(this, arguments);
    };
  }();
  var _useState527 = useState(null),
    _useState528 = _slicedToArray(_useState527, 2),
    myClaims = _useState528[0],
    setMyClaims = _useState528[1];
  var _useState529 = useState({}),
    _useState530 = _slicedToArray(_useState529, 2),
    claimCounts = _useState530[0],
    setClaimCounts = _useState530[1];
  var _useState531 = useState(false),
    _useState532 = _slicedToArray(_useState531, 2),
    claimsWarn = _useState532[0],
    setClaimsWarn = _useState532[1];
  var teamsRef = React.useRef(teams);
  teamsRef.current = teams;
  var handledApprovedRef = React.useRef(new Set());
  var claimsTotal = Object.values(claimCounts).reduce(function (a, n) {
    return a + (Number(n) || 0);
  }, 0);
  var claimsFlight = React.useRef(false);
  var claimsAgain = React.useRef(false);
  var _refreshClaims = function () {
    var _ref239 = _asyncToGenerator(_regenerator().m(function _callee106() {
      var warns, mine, list, fresh, ids, rows, counts, countFailed, _t133, _t134, _t135;
      return _regenerator().w(function (_context106) {
        while (1) switch (_context106.p = _context106.n) {
          case 0:
            if (!(!token || !myUserId || RO.on)) {
              _context106.n = 1;
              break;
            }
            return _context106.a(2);
          case 1:
            if (!claimsFlight.current) {
              _context106.n = 2;
              break;
            }
            claimsAgain.current = true;
            return _context106.a(2);
          case 2:
            claimsFlight.current = true;
            warns = [];
            _context106.p = 3;
            _context106.p = 4;
            _context106.n = 5;
            return rpcCall('my_claims', {}, token);
          case 5:
            mine = _context106.v;
            list = Array.isArray(mine) ? mine : [];
            setMyClaims(list);
            fresh = list.find(function (c) {
              return c.status === "aprovado" && !teamsRef.current.some(function (t) {
                return t.id === c.team_id;
              }) && !handledApprovedRef.current.has(c.id);
            });
            if (!fresh) {
              _context106.n = 7;
              break;
            }
            handledApprovedRef.current.add(fresh.id);
            _context106.n = 6;
            return initApp(token, myUserId);
          case 6:
            showToast("O admin aprovou: \xE9s o perfil ".concat(fresh.member_name || "").trim(), T.navy);
          case 7:
            _context106.n = 9;
            break;
          case 8:
            _context106.p = 8;
            _t133 = _context106.v;
            console.warn("my_claims failed:", _t133 && _t133.message);
            warns.push("Não foi possível carregar os teus pedidos de perfil.");
          case 9:
            _context106.p = 9;
            ids = new Set(teamsRef.current.filter(function (t) {
              return t.createdBy === myUserId;
            }).map(function (t) {
              return t.id;
            }));
            _context106.p = 10;
            _context106.n = 11;
            return api.get("team_members?user_id=eq.".concat(myUserId, "&role=eq.admin&select=team_id"), token);
          case 11:
            rows = _context106.v;
            (Array.isArray(rows) ? rows : []).forEach(function (r) {
              return ids.add(r.team_id);
            });
            _context106.n = 13;
            break;
          case 12:
            _context106.p = 12;
            _t134 = _context106.v;
            console.warn("admin teams read failed:", _t134 && _t134.message);
            warns.push("Não foi possível ver as equipas onde és administrador. Os pedidos de perfil podem não aparecer.");
          case 13:
            counts = {};
            countFailed = false;
            _context106.n = 14;
            return Promise.all(_toConsumableArray(ids).filter(function (id) {
              return teamsRef.current.some(function (t) {
                return t.id === id;
              });
            }).map(function () {
              var _ref240 = _asyncToGenerator(_regenerator().m(function _callee105(id) {
                var _r4, _t132;
                return _regenerator().w(function (_context105) {
                  while (1) switch (_context105.p = _context105.n) {
                    case 0:
                      _context105.p = 0;
                      _context105.n = 1;
                      return rpcCall('list_team_claims', {
                        p_team_id: id
                      }, token);
                    case 1:
                      _r4 = _context105.v;
                      claimNamesRemember(_r4, "member_name", "member_avatar");
                      counts[id] = (Array.isArray(_r4) ? _r4 : []).filter(function (c) {
                        return c.status === "pendente" && (!c.question || !!c.answer);
                      }).length;
                      _context105.n = 3;
                      break;
                    case 2:
                      _context105.p = 2;
                      _t132 = _context105.v;
                      console.warn("list_team_claims failed:", _t132 && _t132.message);
                      countFailed = true;
                    case 3:
                      return _context105.a(2);
                  }
                }, _callee105, null, [[0, 2]]);
              }));
              return function (_x65) {
                return _ref240.apply(this, arguments);
              };
            }()));
          case 14:
            if (countFailed) warns.push("Não foi possível contar os pedidos de perfil pendentes.");
            setClaimCounts(counts);
            _context106.n = 16;
            break;
          case 15:
            _context106.p = 15;
            _t135 = _context106.v;
            console.warn("claim counts failed:", _t135 && _t135.message);
            warns.push("Não foi possível contar os pedidos de perfil pendentes.");
          case 16:
            setClaimsWarn(warns.length ? _toConsumableArray(new Set(warns)).join(" ") : false);
          case 17:
            _context106.p = 17;
            claimsFlight.current = false;
            if (claimsAgain.current) {
              claimsAgain.current = false;
              _refreshClaims();
            }
            return _context106.f(17);
          case 18:
            return _context106.a(2);
        }
      }, _callee106, null, [[10, 12], [9, 15], [4, 8], [3,, 17, 18]]);
    }));
    return function refreshClaims() {
      return _ref239.apply(this, arguments);
    };
  }();
  useEffect(function () {
    if (!appReady || !token || !myUserId || RO.on) return;
    _refreshClaims();
    var onVis = function onVis() {
      if (document.visibilityState === "visible") _refreshClaims();
    };
    document.addEventListener("visibilitychange", onVis);
    return function () {
      return document.removeEventListener("visibilitychange", onVis);
    };
  }, [appReady, token, myUserId, teams.length]);
  useEffect(function () {
    if (tab === "geral" && appReady && token && myUserId && !RO.on) _refreshClaims();
  }, [tab]);
  var listClaimable = function () {
    var _ref241 = _asyncToGenerator(_regenerator().m(function _callee107(code) {
      var _r5, _t136;
      return _regenerator().w(function (_context107) {
        while (1) switch (_context107.p = _context107.n) {
          case 0:
            _context107.p = 0;
            _context107.n = 1;
            return rpcCall('list_claimable_members', {
              p_code: String(code || "").trim().toUpperCase()
            }, token);
          case 1:
            _r5 = _context107.v;
            return _context107.a(2, Array.isArray(_r5) ? _r5 : []);
          case 2:
            _context107.p = 2;
            _t136 = _context107.v;
            console.warn("list_claimable_members failed:", _t136 && _t136.message);
            throw _t136;
          case 3:
            return _context107.a(2);
        }
      }, _callee107, null, [[0, 2]]);
    }));
    return function listClaimable(_x66) {
      return _ref241.apply(this, arguments);
    };
  }();
  var requestClaim = function () {
    var _ref242 = _asyncToGenerator(_regenerator().m(function _callee108(code, memberId, note) {
      return _regenerator().w(function (_context108) {
        while (1) switch (_context108.n) {
          case 0:
            _context108.n = 1;
            return rpcCall('request_claim', {
              p_code: String(code || "").trim().toUpperCase(),
              p_member_id: memberId,
              p_note: note ? note : null
            }, token);
          case 1:
            _context108.n = 2;
            return _refreshClaims();
          case 2:
            return _context108.a(2);
        }
      }, _callee108);
    }));
    return function requestClaim(_x67, _x68, _x69) {
      return _ref242.apply(this, arguments);
    };
  }();
  var editClaimNote = function () {
    var _ref243 = _asyncToGenerator(_regenerator().m(function _callee109(id, note) {
      return _regenerator().w(function (_context109) {
        while (1) switch (_context109.n) {
          case 0:
            _context109.n = 1;
            return rpcCall('update_claim_note', {
              p_claim_id: id,
              p_note: note ? note : null
            }, token);
          case 1:
            _context109.n = 2;
            return _refreshClaims();
          case 2:
            showToast("Mensagem atualizada", T.navy);
          case 3:
            return _context109.a(2);
        }
      }, _callee109);
    }));
    return function editClaimNote(_x70, _x71) {
      return _ref243.apply(this, arguments);
    };
  }();
  var answerClaim = function () {
    var _ref244 = _asyncToGenerator(_regenerator().m(function _callee110(id, text) {
      return _regenerator().w(function (_context110) {
        while (1) switch (_context110.n) {
          case 0:
            _context110.n = 1;
            return rpcCall('answer_claim_question', {
              p_claim_id: id,
              p_answer: text
            }, token);
          case 1:
            _context110.n = 2;
            return _refreshClaims();
          case 2:
            showToast(text ? "Resposta enviada" : "Resposta apagada", T.navy);
          case 3:
            return _context110.a(2);
        }
      }, _callee110);
    }));
    return function answerClaim(_x72, _x73) {
      return _ref244.apply(this, arguments);
    };
  }();
  var myQuestionCount = Array.isArray(myClaims) ? myClaims.filter(function (c) {
    return c.status === "pendente" && c.question && !c.answer;
  }).length : 0;
  var cancelClaim = function () {
    var _ref245 = _asyncToGenerator(_regenerator().m(function _callee111(id) {
      return _regenerator().w(function (_context111) {
        while (1) switch (_context111.n) {
          case 0:
            _context111.n = 1;
            return rpcCall('cancel_claim', {
              p_claim_id: id
            }, token);
          case 1:
            _context111.n = 2;
            return _refreshClaims();
          case 2:
            showToast("Pedido cancelado", T.navy);
          case 3:
            return _context111.a(2);
        }
      }, _callee111);
    }));
    return function cancelClaim(_x74) {
      return _ref245.apply(this, arguments);
    };
  }();
  var claimsChanged = function () {
    var _ref246 = _asyncToGenerator(_regenerator().m(function _callee112() {
      return _regenerator().w(function (_context112) {
        while (1) switch (_context112.n) {
          case 0:
            _context112.n = 1;
            return refresh();
          case 1:
            _context112.n = 2;
            return _refreshClaims();
          case 2:
            return _context112.a(2);
        }
      }, _callee112);
    }));
    return function claimsChanged() {
      return _ref246.apply(this, arguments);
    };
  }();
  var joinTeam = function () {
    var _ref247 = _asyncToGenerator(_regenerator().m(function _callee113(t) {
      var _e$message, _t137;
      return _regenerator().w(function (_context113) {
        while (1) switch (_context113.p = _context113.n) {
          case 0:
            _context113.p = 0;
            _context113.n = 1;
            return api.insert('team_members', {
              team_id: t.id,
              user_id: myUserId,
              role: 'player'
            }, token);
          case 1:
            _context113.n = 3;
            break;
          case 2:
            _context113.p = 2;
            _t137 = _context113.v;
            if ((_e$message = _t137.message) !== null && _e$message !== void 0 && _e$message.includes('duplicate key')) {
              _context113.n = 3;
              break;
            }
            alert("Erro ao entrar na equipa: ".concat(errPt(_t137, "tenta novamente")));
            return _context113.a(2);
          case 3:
            setTeams(function (prev) {
              return prev.some(function (x) {
                return x.id === t.id;
              }) ? prev : [].concat(_toConsumableArray(prev), [t]);
            });
            _context113.n = 4;
            return switchTeam(t.id);
          case 4:
            return _context113.a(2);
        }
      }, _callee113, null, [[0, 2]]);
    }));
    return function joinTeam(_x75) {
      return _ref247.apply(this, arguments);
    };
  }();
  var findTeamByCode = function () {
    var _ref248 = _asyncToGenerator(_regenerator().m(function _callee114(code) {
      var r, d, t, _t138;
      return _regenerator().w(function (_context114) {
        while (1) switch (_context114.p = _context114.n) {
          case 0:
            _context114.n = 1;
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
            r = _context114.v;
            if (r.ok) {
              _context114.n = 2;
              break;
            }
            throw new Error("N\xE3o foi poss\xEDvel procurar a equipa (erro ".concat(r.status, ")."));
          case 2:
            d = null;
            _context114.p = 3;
            _context114.n = 4;
            return r.json();
          case 4:
            d = _context114.v;
            _context114.n = 6;
            break;
          case 5:
            _context114.p = 5;
            _t138 = _context114.v;
            d = null;
          case 6:
            t = Array.isArray(d) ? d[0] : d;
            return _context114.a(2, t !== null && t !== void 0 && t.id ? aTeam(_objectSpread(_objectSpread({}, t), {}, {
              invite_code: t.invite_code
            })) : null);
        }
      }, _callee114, null, [[3, 5]]);
    }));
    return function findTeamByCode(_x76) {
      return _ref248.apply(this, arguments);
    };
  }();
  var _useState533 = useState(function () {
      var p = new URLSearchParams(window.location.search);
      return p.get('invite') || null;
    }),
    _useState534 = _slicedToArray(_useState533, 2),
    pendingInvite = _useState534[0],
    setPendingInvite = _useState534[1];
  useEffect(function () {
    if (!appReady || !pendingInvite) return;
    var alreadyIn = teams.find(function (t) {
      var _t$inviteCode2;
      return ((_t$inviteCode2 = t.inviteCode) === null || _t$inviteCode2 === void 0 ? void 0 : _t$inviteCode2.toUpperCase()) === pendingInvite.toUpperCase();
    });
    if (alreadyIn) {
      switchTeam(alreadyIn.id);
      setPendingInvite(null);
      window.history.replaceState({}, '', window.location.pathname);
    } else {
      setModal("join");
    }
  }, [appReady, pendingInvite, teams]);
  var subscribeToPush = function () {
    var _ref249 = _asyncToGenerator(_regenerator().m(function _callee115(tok, uid) {
      var reg, _sub, existing, subJson, res, _subJson$keys, _subJson$keys2, _t139, _t140, _t141, _t142;
      return _regenerator().w(function (_context115) {
        while (1) switch (_context115.p = _context115.n) {
          case 0:
            if (!RO.on) {
              _context115.n = 1;
              break;
            }
            return _context115.a(2);
          case 1:
            _context115.p = 1;
            _context115.n = 2;
            return Promise.race([navigator.serviceWorker.ready, new Promise(function (_, rej) {
              return setTimeout(function () {
                return rej(Object.assign(new Error("service worker sem ready"), {
                  pushCode: "sw"
                }));
              }, 8000);
            })]);
          case 2:
            reg = _context115.v;
            _context115.p = 3;
            _context115.n = 4;
            return reg.pushManager.getSubscription();
          case 4:
            existing = _context115.v;
            _t139 = existing;
            if (_t139) {
              _context115.n = 6;
              break;
            }
            _context115.n = 5;
            return reg.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: VAPID_PUBLIC
            });
          case 5:
            _t139 = _context115.v;
          case 6:
            _sub = _t139;
            _context115.n = 8;
            break;
          case 7:
            _context115.p = 7;
            _t140 = _context115.v;
            throw Object.assign(_t140, {
              pushCode: _t140 && _t140.pushCode || "subscrever"
            });
          case 8:
            subJson = _sub.toJSON();
            _context115.p = 9;
            _context115.n = 10;
            return fetch("".concat(SB_URL, "/rest/v1/push_subscriptions?on_conflict=user_id,endpoint"), {
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
          case 10:
            res = _context115.v;
            _context115.n = 12;
            break;
          case 11:
            _context115.p = 11;
            _t141 = _context115.v;
            throw Object.assign(_t141, {
              pushCode: "gravar"
            });
          case 12:
            if (!(!res.ok && res.status !== 409)) {
              _context115.n = 13;
              break;
            }
            throw Object.assign(new Error("erro ".concat(res.status)), {
              pushCode: "gravar"
            });
          case 13:
            setPushIssue(null);
            _context115.n = 15;
            break;
          case 14:
            _context115.p = 14;
            _t142 = _context115.v;
            console.warn("Push subscribe failed:", _t142 && _t142.message);
            setPushIssue({
              code: _t142 && _t142.pushCode || "subscrever",
              detail: _t142 && _t142.pushCode === "gravar" && /^erro \d+$/.test(String(_t142.message)) ? _t142.message : ""
            });
          case 15:
            return _context115.a(2);
        }
      }, _callee115, null, [[9, 11], [3, 7], [1, 14]]);
    }));
    return function subscribeToPush(_x77, _x78) {
      return _ref249.apply(this, arguments);
    };
  }();
  var checkPush = function () {
    var _ref250 = _asyncToGenerator(_regenerator().m(function _callee116(tok, uid, ask) {
      var perm;
      return _regenerator().w(function (_context116) {
        while (1) switch (_context116.n) {
          case 0:
            if (!RO.on) {
              _context116.n = 1;
              break;
            }
            return _context116.a(2);
          case 1:
            if (!(!("serviceWorker" in navigator) || !("PushManager" in window) || !("Notification" in window))) {
              _context116.n = 2;
              break;
            }
            setPushIssue({
              code: isIOSDevice() && !isStandaloneApp() ? "ios-instalar" : "sem-suporte"
            });
            return _context116.a(2);
          case 2:
            if (!(Notification.permission === "denied")) {
              _context116.n = 3;
              break;
            }
            setPushIssue({
              code: "bloqueado"
            });
            return _context116.a(2);
          case 3:
            if (!(Notification.permission === "default")) {
              _context116.n = 7;
              break;
            }
            if (ask) {
              _context116.n = 4;
              break;
            }
            return _context116.a(2);
          case 4:
            _context116.n = 5;
            return Notification.requestPermission();
          case 5:
            perm = _context116.v;
            if (!(perm === "denied")) {
              _context116.n = 6;
              break;
            }
            setPushIssue({
              code: "bloqueado"
            });
            return _context116.a(2);
          case 6:
            if (!(perm !== "granted")) {
              _context116.n = 7;
              break;
            }
            return _context116.a(2);
          case 7:
            _context116.n = 8;
            return subscribeToPush(tok, uid);
          case 8:
            return _context116.a(2);
        }
      }, _callee116);
    }));
    return function checkPush(_x79, _x80, _x81) {
      return _ref250.apply(this, arguments);
    };
  }();
  useEffect(function () {
    if (!appReady || !token || !myUserId || RO.on) return;
    var supported = "serviceWorker" in navigator && "PushManager" in window && "Notification" in window;
    if (supported && Notification.permission === "default") {
      setTimeout(function () {
        if (!RO.on) checkPush(token, myUserId, true);
      }, 2500);
    } else {
      checkPush(token, myUserId, false);
    }
  }, [appReady, token, myUserId]);
  var _useState535 = useState(null),
    _useState536 = _slicedToArray(_useState535, 2),
    toast = _useState536[0],
    setToast = _useState536[1];
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
    var _ref251 = _asyncToGenerator(_regenerator().m(function _callee117(teamId, members, title, body) {
      var userIds, res, det, _t143, _t144;
      return _regenerator().w(function (_context117) {
        while (1) switch (_context117.p = _context117.n) {
          case 0:
            if (!RO.on) {
              _context117.n = 1;
              break;
            }
            return _context117.a(2);
          case 1:
            userIds = members.map(function (m) {
              return m.userId;
            }).filter(Boolean);
            if (userIds.length) {
              _context117.n = 2;
              break;
            }
            return _context117.a(2);
          case 2:
            _context117.p = 2;
            _context117.n = 3;
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
          case 3:
            res = _context117.v;
            if (res.ok) {
              _context117.n = 8;
              break;
            }
            det = "";
            _context117.p = 4;
            _context117.n = 5;
            return res.text();
          case 5:
            det = _context117.v.slice(0, 80);
            _context117.n = 7;
            break;
          case 6:
            _context117.p = 6;
            _t143 = _context117.v;
          case 7:
            throw new Error("HTTP ".concat(res.status).concat(det ? " " + det : ""));
          case 8:
            _context117.n = 10;
            break;
          case 9:
            _context117.p = 9;
            _t144 = _context117.v;
            notePushFail(_t144 && _t144.message);
          case 10:
            return _context117.a(2);
        }
      }, _callee117, null, [[4, 6], [2, 9]]);
    }));
    return function sendPushToTeam(_x82, _x83, _x84, _x85) {
      return _ref251.apply(this, arguments);
    };
  }();
  var addFineWithToast = function () {
    var _ref252 = _asyncToGenerator(_regenerator().m(function _callee118(d) {
      var m;
      return _regenerator().w(function (_context118) {
        while (1) switch (_context118.n) {
          case 0:
            _context118.n = 1;
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
            return _context118.a(2);
        }
      }, _callee118);
    }));
    return function addFineWithToast(_x86) {
      return _ref252.apply(this, arguments);
    };
  }();
  var addCardWithAlert = function () {
    var _ref253 = _asyncToGenerator(_regenerator().m(function _callee119(d) {
      var c, m, name, y, managers;
      return _regenerator().w(function (_context119) {
        while (1) switch (_context119.n) {
          case 0:
            _context119.n = 1;
            return addCard(d);
          case 1:
            c = _context119.v;
            m = members.find(function (x) {
              return String(x.id) === String(d.memberId);
            });
            name = (m === null || m === void 0 ? void 0 : m.name) || "jogador";
            showToast("".concat(d.kind === 'amarelo' ? "🟨" : "🟥", " Cart\xE3o ").concat(d.kind, " lan\xE7ado a ").concat(name), d.kind === 'amarelo' ? "#B38F00" : T.brand);
            if (!(c.kind !== 'amarelo')) {
              _context119.n = 2;
              break;
            }
            return _context119.a(2);
          case 2:
            y = cards.filter(function (x) {
              return x.teamId === d.teamId && String(x.memberId) === String(d.memberId) && x.kind === 'amarelo' && !x.consumed;
            }).length + 1;
            if (!(y < 4)) {
              _context119.n = 3;
              break;
            }
            return _context119.a(2);
          case 3:
            managers = members.filter(function (x) {
              return x.teamId === d.teamId && ["admin", "treinador", "diretor"].includes(x.role);
            });
            if (y === 4) {
              if (m !== null && m !== void 0 && m.userId) sendPushToTeam(d.teamId, [m], "🟨 Estás a 1 amarelo da suspensão", "Tens 4 amarelos. Ao 5.º falhas um jogo.").catch(function () {});
              sendPushToTeam(d.teamId, managers, "\uD83D\uDFE8 ".concat(name, " est\xE1 em risco"), "4 amarelos — ao 5.º falha um jogo.").catch(function () {});
            } else {
              if (m !== null && m !== void 0 && m.userId) sendPushToTeam(d.teamId, [m], "🟥 Suspenso", "5 amarelos — tens de cumprir 1 jogo de castigo.").catch(function () {});
              sendPushToTeam(d.teamId, managers, "\uD83D\uDFE5 ".concat(name, " atingiu 5 amarelos"), "Cumpre 1 jogo de castigo.").catch(function () {});
            }
          case 4:
            return _context119.a(2);
        }
      }, _callee119);
    }));
    return function addCardWithAlert(_x87) {
      return _ref253.apply(this, arguments);
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
      } else {
        console.warn("magic link inválido:", u && (u.msg || u.error_description || u.error));
        setAuthError("O link de acesso expirou ou não é válido. Entra com o teu email e password.");
        try {
          window.history.replaceState(null, "", "/");
        } catch (e) {}
      }
    }).catch(function (e) {
      console.warn("magic link falhou:", e && e.message);
      setAuthError(errPt(e));
    });
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
  var roBanner = roMode ? React.createElement("div", {
    role: "status",
    style: {
      position: "sticky",
      top: 0,
      zIndex: 300,
      background: "#3D2B00",
      color: "#FFE9B0",
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "6px 8px",
      padding: "6px 14px",
      fontSize: 13,
      fontWeight: 700
    }
  }, React.createElement("span", null, "\uD83D\uDC41\uFE0F Modo leitura (super admin)"), React.createElement("span", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, React.createElement("button", {
    onClick: function onClick() {
      return exitAdminView({
        toTeams: true
      });
    },
    style: {
      minHeight: 44,
      padding: "0 16px",
      background: "#FFE9B0",
      color: "#3D2B00",
      border: "none",
      borderRadius: 22,
      fontSize: 13,
      fontWeight: 800,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "\u2190 Voltar \xE0s equipas"), React.createElement("button", {
    onClick: exitAdminView,
    style: {
      minHeight: 44,
      padding: "0 16px",
      background: "#FFE9B0",
      color: "#3D2B00",
      border: "none",
      borderRadius: 22,
      fontSize: 13,
      fontWeight: 800,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Sair"))) : null;
  if (roMode && adminErr) return React.createElement("div", {
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
      fontSize: 40,
      margin: 0
    }
  }, "\u26A0\uFE0F"), React.createElement("p", {
    style: {
      fontWeight: 800,
      fontSize: 18,
      margin: "8px 0 6px",
      textAlign: "center"
    }
  }, "N\xE3o foi poss\xEDvel abrir a equipa"), React.createElement("div", {
    role: "alert",
    style: {
      background: "#FFE5E5",
      borderRadius: 12,
      padding: "12px 16px",
      marginBottom: 16,
      width: "100%",
      maxWidth: 340,
      fontSize: 14,
      color: "#8A0000",
      textAlign: "center",
      boxSizing: "border-box"
    }
  }, adminErr.msg), React.createElement("button", {
    onClick: function onClick() {
      return loadAdmin(adminErr.id);
    },
    style: {
      width: "100%",
      maxWidth: 300,
      minHeight: 48,
      borderRadius: 14,
      border: "none",
      background: T.navy,
      color: "#fff",
      fontWeight: 800,
      cursor: "pointer",
      marginBottom: 10,
      fontFamily: "inherit"
    }
  }, "Tentar novamente"), React.createElement("button", {
    onClick: function onClick() {
      return exitAdminView({
        toTeams: true
      });
    },
    style: {
      width: "100%",
      maxWidth: 300,
      minHeight: 48,
      borderRadius: 14,
      border: "none",
      background: T.navy,
      color: "#fff",
      fontWeight: 800,
      cursor: "pointer",
      marginBottom: 10,
      fontFamily: "inherit"
    }
  }, "\u2190 Voltar \xE0s equipas"), React.createElement("button", {
    onClick: exitAdminView,
    style: {
      width: "100%",
      maxWidth: 300,
      minHeight: 48,
      borderRadius: 14,
      border: "1.5px solid ".concat(T.navy),
      background: "transparent",
      color: T.navy,
      fontWeight: 800,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Sair"));
  var nav = [{
    id: "home",
    emoji: "🏠",
    label: "Início"
  }, {
    id: "fines",
    emoji: "🧾",
    label: "Multas"
  }, {
    id: "cards",
    emoji: "🟨",
    label: "Cartões"
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
  var atRiskCount = canManageTrainings ? members.filter(function (m) {
    return m.teamId === teamId && cardCount(cards, teamId, m.id).yellows >= 4;
  }).length : 0;
  var toastBox = toast ? React.createElement("div", {
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
  }, toast.msg) : null;
  var loadWarnBox = loadWarn.length > 0 && !roMode ? React.createElement("div", {
    role: "alert",
    "data-load-warn": true,
    style: {
      margin: "8px 12px 0",
      background: "#FFF8E1",
      border: "2px solid #8A5A00",
      borderRadius: 12,
      padding: "10px 12px",
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap"
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      flex: 1,
      minWidth: 180,
      fontSize: 13,
      fontWeight: 800,
      color: "#1a1a1f"
    }
  }, loadWarn.some(function (x) {
    return x !== "perfis";
  }) && "Não foi possível carregar presenças, cartões ou ausências.", loadWarn.some(function (x) {
    return x !== "perfis";
  }) && loadWarn.includes("perfis") && " ", loadWarn.includes("perfis") && PROFILES_WARN), React.createElement("button", {
    onClick: function onClick() {
      return refresh();
    },
    style: {
      minHeight: 44,
      padding: "0 16px",
      borderRadius: 12,
      border: "2px solid #1a1a1f",
      background: "#1a1a1f",
      color: "#fff",
      fontSize: 14,
      fontWeight: 800,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Tentar novamente")) : null;
  var wrap = function wrap(ch) {
    return React.createElement("div", {
      style: {
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        maxWidth: 480,
        margin: "0 auto"
      }
    }, roBanner, loadWarnBox, ch);
  };
  if (!team && profile !== null && profile !== void 0 && profile.isAppAdmin) return React.createElement("div", {
    style: {
      background: T.bg,
      minHeight: "100vh",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      maxWidth: 480,
      margin: "0 auto"
    }
  }, toastBox, React.createElement("div", {
    style: {
      background: "linear-gradient(135deg, ".concat(T.navy, ", #0d1f36)"),
      color: "#fff",
      padding: "52px 16px 14px"
    }
  }, React.createElement("p", {
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
  }, "Super admin")), tab === "geral" && React.createElement(GeneralTab, {
    user: _objectSpread({}, profile || {}),
    myUserId: myUserId,
    teams: teams,
    members: members,
    token: token,
    onEditProfile: function onEditProfile() {
      return setModal("profile");
    },
    onManageTeam: function onManageTeam() {},
    onCreateTeam: function onCreateTeam() {
      return setModal("team");
    },
    onJoinTeam: function onJoinTeam() {
      return setModal("join");
    },
    onLeaveTeam: leaveTeam,
    onLogout: handleLogout,
    isAppAdmin: profile === null || profile === void 0 ? void 0 : profile.isAppAdmin,
    onAdminOpen: function onAdminOpen() {
      setAdminStart(null);
      setTab("appadmin");
    },
    pushIssue: pushIssue,
    onRetryPush: function onRetryPush() {
      return checkPush(token, myUserId, true);
    },
    claimsWarn: claimsWarn,
    onRetryClaims: function onRetryClaims() {
      return _refreshClaims();
    }
  }), tab === "appadmin" && React.createElement(AppAdminTab, {
    token: token,
    onBack: function onBack() {
      return setTab("geral");
    },
    onOpenTeam: openAdminTeam,
    initialSection: adminStart,
    initialTeams: adminStart === "teams" ? adminTeamsCache : null
  }), tab !== "geral" && tab !== "appadmin" && React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "60px 24px 120px",
      color: T.sub
    }
  }, React.createElement("p", {
    style: {
      fontSize: 40,
      margin: "0 0 8px"
    }
  }, "\u26BD"), React.createElement("p", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      margin: 0,
      color: T.text
    }
  }, "Sem equipa. Usa o painel de super admin."), React.createElement("button", {
    onClick: function onClick() {
      return setTab("geral");
    },
    style: {
      marginTop: 16,
      minHeight: 44,
      padding: "0 20px",
      borderRadius: 14,
      border: "1.5px solid ".concat(T.navy),
      background: "transparent",
      color: T.navy,
      fontWeight: 800,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Ir para Geral")), React.createElement("div", {
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
        color: tab === item.id ? T.navy : T.sub
      }
    }, item.label));
  })), modal === "team" && React.createElement(CreateTeamModal, {
    onAdd: createTeam,
    onClose: function onClose() {
      return setModal(null);
    }
  }), modal === "join" && React.createElement(JoinTeamModal, {
    teams: teams,
    user: profile,
    onFindByCode: findTeamByCode,
    onListClaimable: listClaimable,
    onRequestClaim: requestClaim,
    onJoin: (function () {
      var _ref254 = _asyncToGenerator(_regenerator().m(function _callee120(t) {
        return _regenerator().w(function (_context120) {
          while (1) switch (_context120.n) {
            case 0:
              _context120.n = 1;
              return joinTeam(t);
            case 1:
              setPendingInvite(null);
              window.history.replaceState({}, document.title, window.location.pathname);
            case 2:
              return _context120.a(2);
          }
        }, _callee120);
      }));
      return function (_x88) {
        return _ref254.apply(this, arguments);
      };
    }()),
    initialCode: pendingInvite || "",
    onClose: function onClose() {
      setModal(null);
      setPendingInvite(null);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }), modal === "profile" && React.createElement(EditProfileModal, {
    user: profile || {},
    onSave: (function () {
      var _ref255 = _asyncToGenerator(_regenerator().m(function _callee121(u) {
        var _t145, _t146;
        return _regenerator().w(function (_context121) {
          while (1) switch (_context121.p = _context121.n) {
            case 0:
              _context121.p = 0;
              _t145 = needRows;
              _context121.n = 1;
              return api.patch("profiles?id=eq.".concat(myUserId), {
                name: u.name,
                phone: u.phone || null,
                birthday: u.birthday || null,
                avatar_url: u.avatarUrl || null,
                position: u.position || null
              }, token);
            case 1:
              _t145(_context121.v);
              _context121.n = 3;
              break;
            case 2:
              _context121.p = 2;
              _t146 = _context121.v;
              writeFailed("guardar o perfil", _t146);
              return _context121.a(2);
            case 3:
              setProfile(function (p) {
                return _objectSpread(_objectSpread({}, p), u);
              });
            case 4:
              return _context121.a(2);
          }
        }, _callee121, null, [[0, 2]]);
      }));
      return function (_x89) {
        return _ref255.apply(this, arguments);
      };
    }()),
    onClose: function onClose() {
      return setModal(null);
    }
  }));
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
  }, "Cria ou junta-te a uma equipa"), React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 340
    }
  }, React.createElement(MyClaimsCard, {
    claims: myClaims,
    members: members,
    myUserId: myUserId,
    onEditNote: editClaimNote,
    onCancel: cancelClaim,
    onAnswer: answerClaim
  })), teamError && React.createElement("div", {
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
    onListClaimable: listClaimable,
    onRequestClaim: requestClaim,
    onJoin: (function () {
      var _ref256 = _asyncToGenerator(_regenerator().m(function _callee122(t) {
        return _regenerator().w(function (_context122) {
          while (1) switch (_context122.n) {
            case 0:
              _context122.n = 1;
              return joinTeam(t);
            case 1:
              setPendingInvite(null);
              window.history.replaceState({}, document.title, window.location.pathname);
            case 2:
              return _context122.a(2);
          }
        }, _callee122);
      }));
      return function (_x90) {
        return _ref256.apply(this, arguments);
      };
    }()),
    initialCode: pendingInvite || "",
    onClose: function onClose() {
      setModal(null);
      setPendingInvite(null);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }));
  if (tab === "treinos") return React.createElement("div", {
    style: {
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      maxWidth: 480,
      margin: "0 auto"
    }
  }, roBanner, loadWarnBox, toastBox, React.createElement(TreinosPage, {
    team: team,
    trainings: trainings,
    members: members,
    myUserId: roMode ? null : myUserId,
    isAdmin: canManageTrainings,
    presences: presences,
    onSetPresence: roMode ? null : setPresence,
    onAddType: addTraining,
    onDelete: delTraining,
    onEdit: editTraining,
    onLogSession: logSession,
    onBack: function onBack() {
      return setTab("home");
    },
    modal: treinosModal,
    setModal: setTreinosModal
  }));
  if ((sub === null || sub === void 0 ? void 0 : sub.type) === "member") return wrap(React.createElement(React.Fragment, null, React.createElement(MemberDetailScreen, {
    member: members.find(function (x) {
      return x.id === sub.data.id;
    }) || sub.data,
    team: team,
    fines: fines,
    isAdmin: isAdmin,
    readOnly: roMode,
    absences: absences,
    absHandlers: isAdmin ? absHandlers : null,
    onBack: function onBack() {
      return setSub(null);
    },
    onTogglePaid: togglePaid,
    onDeleteFine: delFine
  }), toastBox));
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
      absences: absences,
      absHandlers: isAdmin ? absHandlers : null,
      onRegenerateCode: function onRegenerateCode() {},
      onDeleteTeam: function onDeleteTeam() {
        return deleteTeam(mt.id);
      },
      onEditTeam: editTeam,
      onClaimsChanged: claimsChanged
    }), toastBox, modal === "member" && React.createElement(AddMemberModal, {
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
  }, roBanner, loadWarnBox, refreshing && React.createElement("div", {
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
  }, "\u27F3"), " A atualizar...")), toastBox, React.createElement("style", null, "@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }"), React.createElement("div", {
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
      return roMode ? refresh() : window.location.reload();
    },
    style: {
      background: "rgba(255,255,255,0.15)",
      border: "none",
      color: "#fff",
      borderRadius: 20,
      width: 44,
      minWidth: 44,
      flexShrink: 0,
      height: 44,
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
      minHeight: 44,
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
    },
    onSelectMember: function onSelectMember(m) {
      return setSub({
        type: "member",
        data: m
      });
    },
    fineTypes: fineTypes,
    presences: presences,
    myMember: roMode ? null : members.find(function (m) {
      return m.teamId === teamId && m.userId === myUserId;
    }),
    onSetPresence: roMode ? null : setPresence
  }), tab === "fines" && React.createElement(FinesTab, {
    team: team,
    fines: fines,
    members: members,
    isAdmin: isAdmin,
    onAddFine: function onAddFine() {
      return setModal("fine");
    },
    onTogglePaid: togglePaid,
    onDeleteFine: delFine,
    onEditFine: function onEditFine(f) {
      return setEditingFine(f);
    },
    onSelectMember: function onSelectMember(m) {
      return setSub({
        type: "member",
        data: m
      });
    }
  }), tab === "cards" && React.createElement(CardsTab, {
    team: team,
    cards: cards,
    members: members,
    canManage: canManageTrainings,
    readOnly: roMode,
    onAddCard: function onAddCard() {
      return setModal("card");
    },
    onEditCard: function onEditCard(c) {
      return setEditingCard(c);
    },
    onDeleteCard: delCard,
    onServeSuspension: serveSuspension
  }), tab === "caixa" && React.createElement(TreasuryTab, {
    team: team,
    fines: fines,
    members: members,
    expenses: expenses,
    isAdmin: isAdmin,
    onAddExpense: function onAddExpense() {
      return setModal("expense");
    },
    onEditExpense: isAdmin ? editExpense : null,
    onDeleteExpense: isAdmin ? deleteExpense : null
  }), tab === "geral" && React.createElement(GeneralTab, {
    user: _objectSpread(_objectSpread({}, profile || {}), {}, {
      position: ((_members$find3 = members.find(function (m) {
        return m.userId === myUserId && m.teamId === teamId;
      })) === null || _members$find3 === void 0 ? void 0 : _members$find3.position) || (profile === null || profile === void 0 ? void 0 : profile.position) || ''
    }),
    myUserId: myUserId,
    teams: roMode ? teams.filter(function (t) {
      return t.id === teamId;
    }) : teams,
    members: members,
    token: token,
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
    onLeaveTeam: leaveTeam,
    onLogout: handleLogout,
    isAppAdmin: roMode ? false : profile === null || profile === void 0 ? void 0 : profile.isAppAdmin,
    readOnly: roMode,
    onAdminOpen: function onAdminOpen() {
      setAdminStart(null);
      setTab("appadmin");
    },
    myClaims: roMode ? null : myClaims,
    onEditClaimNote: editClaimNote,
    onCancelClaim: cancelClaim,
    onAnswerClaim: answerClaim,
    claimCounts: roMode ? {} : claimCounts,
    pushIssue: roMode ? null : pushIssue,
    onRetryPush: function onRetryPush() {
      return checkPush(token, myUserId, true);
    },
    claimsWarn: roMode ? false : claimsWarn,
    onRetryClaims: function onRetryClaims() {
      return _refreshClaims();
    }
  }), tab === "appadmin" && (profile === null || profile === void 0 ? void 0 : profile.isAppAdmin) && React.createElement(AppAdminTab, {
    token: token,
    onBack: function onBack() {
      return setTab("geral");
    },
    onOpenTeam: openAdminTeam,
    initialSection: adminStart,
    initialTeams: adminStart === "teams" ? adminTeamsCache : null
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
        fontSize: 20,
        position: "relative"
      }
    }, item.emoji, item.id === "cards" && atRiskCount > 0 && React.createElement(CountBadge, {
      n: atRiskCount
    }), item.id === "geral" && !roMode && claimsTotal + myQuestionCount > 0 && React.createElement("span", {
      "data-badge": "claims"
    }, React.createElement(CountBadge, {
      n: claimsTotal + myQuestionCount
    }))), React.createElement("span", {
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
    },
    readOnly: roMode
  }), modal === "fine" && isAdmin && React.createElement(AddFineModal, {
    team: team,
    myUserId: myUserId,
    token: token,
    onAdd: addFineWithToast,
    onClose: function onClose() {
      return setModal(null);
    }
  }), modal === "card" && canManageTrainings && React.createElement(AddCardModal, {
    team: team,
    members: members,
    cards: cards,
    onAdd: addCardWithAlert,
    onClose: function onClose() {
      return setModal(null);
    }
  }), editingCard && canManageTrainings && React.createElement(EditCardModal, {
    card: editingCard,
    onSave: editCard,
    onClose: function onClose() {
      return setEditingCard(null);
    }
  }), modal === "expense" && isAdmin && React.createElement(AddExpenseModal, {
    team: team,
    onAdd: addExpense,
    onClose: function onClose() {
      return setModal(null);
    }
  }), editingFine && isAdmin && React.createElement(EditFineModal, {
    fine: editingFine,
    onSave: editFine,
    onClose: function onClose() {
      return setEditingFine(null);
    }
  }), modal === "team" && React.createElement(CreateTeamModal, {
    onAdd: createTeam,
    onClose: function onClose() {
      return setModal(null);
    }
  }), modal === "profile" && React.createElement(EditProfileModal, {
    user: profile || {},
    onSave: (function () {
      var _ref257 = _asyncToGenerator(_regenerator().m(function _callee123(u) {
        var _members$find4;
        var _t147, _t148;
        return _regenerator().w(function (_context123) {
          while (1) switch (_context123.p = _context123.n) {
            case 0:
              _context123.p = 0;
              _t147 = needRows;
              _context123.n = 1;
              return api.patch("profiles?id=eq.".concat(myUserId), {
                name: u.name,
                phone: u.phone || null,
                birthday: u.birthday || null,
                avatar_url: u.avatarUrl || null,
                position: u.position || null
              }, token);
            case 1:
              _t147(_context123.v);
              _context123.n = 3;
              break;
            case 2:
              _context123.p = 2;
              _t148 = _context123.v;
              writeFailed("guardar o perfil", _t148);
              return _context123.a(2);
            case 3:
              setProfile(function (p) {
                return _objectSpread(_objectSpread({}, p), u);
              });
              _context123.n = 4;
              return editMember((_members$find4 = members.find(function (m) {
                return m.userId === myUserId && m.teamId === teamId;
              })) === null || _members$find4 === void 0 ? void 0 : _members$find4.id, u);
            case 4:
              return _context123.a(2);
          }
        }, _callee123, null, [[0, 2]]);
      }));
      return function (_x91) {
        return _ref257.apply(this, arguments);
      };
    }()),
    onClose: function onClose() {
      return setModal(null);
    }
  }), modal === "join" && React.createElement(JoinTeamModal, {
    teams: teams,
    user: profile,
    onFindByCode: findTeamByCode,
    onListClaimable: listClaimable,
    onRequestClaim: requestClaim,
    onJoin: (function () {
      var _ref258 = _asyncToGenerator(_regenerator().m(function _callee124(t) {
        return _regenerator().w(function (_context124) {
          while (1) switch (_context124.n) {
            case 0:
              _context124.n = 1;
              return joinTeam(t);
            case 1:
              setPendingInvite(null);
              window.history.replaceState({}, document.title, window.location.pathname);
            case 2:
              return _context124.a(2);
          }
        }, _callee124);
      }));
      return function (_x92) {
        return _ref258.apply(this, arguments);
      };
    }()),
    initialCode: pendingInvite || "",
    onClose: function onClose() {
      setModal(null);
      setPendingInvite(null);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));