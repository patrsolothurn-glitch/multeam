"use strict";

var _excluded = ["style"];
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var RO_RPCS = ["get_team_as_admin", "get_all_teams_admin", "get_app_admin_stats", "get_app_activity_totals", "get_admin_teams_overview", "get_app_growth_stats", "get_admin_teams_locations", "get_app_feedback", "get_app_status", "list_team_claims"];
var roAllows = function roAllows(url, method) {
  var m = String(method || "GET").toUpperCase();
  if (m === "GET" || m === "HEAD") return true;
  if (m === "POST") {
    var parts = String(url).split("?");
    if (parts[0] === "".concat(SB_URL, "/auth/v1/token") && /(^|&)grant_type=refresh_token(&|$)/.test(parts[1] || "")) return true;
  }
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
var SESSION_KEY = "multeam.sessao";
var sessRead = function sessRead() {
  try {
    var j = JSON.parse(window.localStorage.getItem(SESSION_KEY) || "null");
    return j && _typeof(j) === "object" && j.rt && j.uid && j.at ? j : null;
  } catch (e) {
    return null;
  }
};
var sessLatest = null;
var sessSeq = function sessSeq(o) {
  return o && o.seq || 0;
};
var sessNewest = function sessNewest() {
  var a = sessRead();
  return sessSeq(sessLatest) > sessSeq(a) ? sessLatest : a;
};
var sessBC = null;
try {
  if (typeof BroadcastChannel !== "undefined") {
    sessBC = new BroadcastChannel("multeam-sessao");
    sessBC.onmessage = function (e) {
      var o = e.data;
      if (o && o.fim) {
        sessLatest = null;
        return;
      }
      if (o && o.rt && sessSeq(o) > sessSeq(sessLatest)) sessLatest = o;
    };
  }
  if (typeof window !== "undefined") window.addEventListener("storage", function (e) {
    if (e.key !== "multeam.sessao") return;
    if (!e.newValue) {
      sessLatest = null;
      return;
    }
    try {
      var o = JSON.parse(e.newValue);
      if (o && o.rt && sessSeq(o) >= sessSeq(sessLatest)) sessLatest = o;
    } catch (err) {}
  });
} catch (e) {}
var sessWrite = function sessWrite(o) {
  var n = _objectSpread(_objectSpread({}, o), {}, {
    seq: sessSeq(sessNewest()) + 1
  });
  sessLatest = n;
  try {
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(n));
  } catch (e) {}
  try {
    sessBC && sessBC.postMessage(n);
  } catch (e) {}
  return n;
};
var sessClear = function sessClear() {
  sessLatest = null;
  try {
    window.localStorage.removeItem(SESSION_KEY);
  } catch (e) {}
  try {
    sessBC && sessBC.postMessage({
      fim: true
    });
  } catch (e) {}
};
var jwtExpMs = function jwtExpMs(t) {
  try {
    var q = JSON.parse(atob(String(t).split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
    return q && q.exp ? q.exp * 1000 : 0;
  } catch (e) {
    return 0;
  }
};
var sessFromAuth = function sessFromAuth(d, prev) {
  if (!d || _typeof(d) !== "object") return null;
  var at = d.access_token || d.session && d.session.access_token;
  var rt = d.refresh_token || d.session && d.session.refresh_token || prev && prev.rt || "";
  var uid = d.user && d.user.id || d.session && d.session.user && d.session.user.id || prev && prev.uid || "";
  if (!at || !rt || !uid) return null;
  var now = Date.now();
  var exp = d.expires_at ? d.expires_at * 1000 : d.expires_in ? now + d.expires_in * 1000 : jwtExpMs(at) || now + 50 * 60000;
  return {
    at: at,
    rt: rt,
    uid: uid,
    exp: exp,
    m: Math.min(300000, Math.max(2000, Math.round(Math.max(exp - now, 1000) / 3)))
  };
};
var sessCall = function () {
  var _ref = _asyncToGenerator(_regenerator().m(function _callee1(rt, uid) {
    var ctl, timer, r, d, o, _t17, _t18;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.p = _context1.n) {
        case 0:
          ctl = null, timer = null;
          try {
            ctl = typeof AbortController !== "undefined" ? new AbortController() : null;
            timer = setTimeout(function () {
              try {
                ctl && ctl.abort();
              } catch (e) {}
            }, 15000);
          } catch (e) {}
          _context1.p = 1;
          _context1.n = 2;
          return fetch("".concat(SB_URL, "/auth/v1/token?grant_type=refresh_token"), {
            method: "POST",
            headers: {
              "apikey": SB_KEY,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              refresh_token: rt
            }),
            signal: ctl ? ctl.signal : undefined
          });
        case 2:
          r = _context1.v;
          d = null;
          _context1.p = 3;
          _context1.n = 4;
          return r.json();
        case 4:
          d = _context1.v;
          _context1.n = 6;
          break;
        case 5:
          _context1.p = 5;
          _t17 = _context1.v;
          d = null;
        case 6:
          if (!(r.ok && d && d.access_token)) {
            _context1.n = 7;
            break;
          }
          o = sessFromAuth(d, {
            rt: rt,
            uid: uid
          });
          return _context1.a(2, o ? {
            status: "ok",
            s: o
          } : {
            status: "transient"
          });
        case 7:
          if (![400, 401, 403, 404, 422].includes(r.status)) {
            _context1.n = 8;
            break;
          }
          return _context1.a(2, {
            status: "invalid"
          });
        case 8:
          return _context1.a(2, {
            status: "transient"
          });
        case 9:
          _context1.p = 9;
          _t18 = _context1.v;
          return _context1.a(2, {
            status: "transient"
          });
        case 10:
          _context1.p = 10;
          if (timer) clearTimeout(timer);
          return _context1.f(10);
        case 11:
          return _context1.a(2);
      }
    }, _callee1, null, [[3, 5], [1, 9, 10, 11]]);
  }));
  return function sessCall(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var sessInflight = null;
var sessSettle = function () {
  var _ref2 = _asyncToGenerator(_regenerator().m(function _callee10() {
    var mc, t0, i, _t19;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.p = _context10.n) {
        case 0:
          _context10.p = 0;
          mc = new MessageChannel(), t0 = performance.now();
          i = 0;
        case 1:
          if (!(i < 2000 && performance.now() - t0 < 40)) {
            _context10.n = 3;
            break;
          }
          _context10.n = 2;
          return new Promise(function (res) {
            mc.port1.onmessage = function () {
              return res();
            };
            mc.port2.postMessage(0);
          });
        case 2:
          i++;
          _context10.n = 1;
          break;
        case 3:
          _context10.n = 5;
          break;
        case 4:
          _context10.p = 4;
          _t19 = _context10.v;
        case 5:
          return _context10.a(2);
      }
    }, _callee10, null, [[0, 4]]);
  }));
  return function sessSettle() {
    return _ref2.apply(this, arguments);
  };
}();
var sessLock = function () {
  var _ref3 = _asyncToGenerator(_regenerator().m(function _callee12(fn) {
    var free, _t22;
    return _regenerator().w(function (_context12) {
      while (1) switch (_context12.p = _context12.n) {
        case 0:
          _context12.p = 0;
          if (!(typeof navigator !== "undefined" && navigator.locks && navigator.locks.request)) {
            _context12.n = 4;
            break;
          }
          _context12.n = 1;
          return navigator.locks.request("multeam-auth", {
            ifAvailable: true
          }, function () {
            var _ref4 = _asyncToGenerator(_regenerator().m(function _callee11(lock) {
              var _t20, _t21;
              return _regenerator().w(function (_context11) {
                while (1) switch (_context11.n) {
                  case 0:
                    if (!lock) {
                      _context11.n = 2;
                      break;
                    }
                    _context11.n = 1;
                    return fn(false);
                  case 1:
                    _t21 = _context11.v;
                    _t20 = {
                      v: _t21
                    };
                    _context11.n = 3;
                    break;
                  case 2:
                    _t20 = null;
                  case 3:
                    return _context11.a(2, _t20);
                }
              }, _callee11);
            }));
            return function (_x4) {
              return _ref4.apply(this, arguments);
            };
          }());
        case 1:
          free = _context12.v;
          if (!free) {
            _context12.n = 2;
            break;
          }
          return _context12.a(2, free.v);
        case 2:
          _context12.n = 3;
          return navigator.locks.request("multeam-auth", function () {
            return fn(true);
          });
        case 3:
          return _context12.a(2, _context12.v);
        case 4:
          _context12.n = 6;
          break;
        case 5:
          _context12.p = 5;
          _t22 = _context12.v;
          if (_t22 && _t22.name === "SecurityError") {
            _context12.n = 6;
            break;
          }
          throw _t22;
        case 6:
          return _context12.a(2, fn(false));
      }
    }, _callee12, null, [[0, 5]]);
  }));
  return function sessLock(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var sessRenew = function sessRenew(force) {
  if (sessInflight) return sessInflight;
  sessInflight = sessLock(function () {
    var _ref5 = _asyncToGenerator(_regenerator().m(function _callee13(esperou) {
      var cur, r, again;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.n) {
          case 0:
            if (!esperou) {
              _context13.n = 1;
              break;
            }
            _context13.n = 1;
            return sessSettle();
          case 1:
            cur = sessNewest();
            if (cur) {
              _context13.n = 2;
              break;
            }
            return _context13.a(2, {
              status: "none"
            });
          case 2:
            if (!(!force && cur.exp - Date.now() > cur.m)) {
              _context13.n = 3;
              break;
            }
            return _context13.a(2, {
              status: "ok",
              s: cur,
              same: true
            });
          case 3:
            _context13.n = 4;
            return sessCall(cur.rt, cur.uid);
          case 4:
            r = _context13.v;
            if (!(r.status === "invalid")) {
              _context13.n = 9;
              break;
            }
            _context13.n = 5;
            return sessSettle();
          case 5:
            again = sessNewest();
            if (again) {
              _context13.n = 6;
              break;
            }
            return _context13.a(2, {
              status: "none"
            });
          case 6:
            if (!(again.rt !== cur.rt)) {
              _context13.n = 9;
              break;
            }
            if (!(again.exp - Date.now() > 1000)) {
              _context13.n = 7;
              break;
            }
            return _context13.a(2, {
              status: "ok",
              s: again,
              same: true
            });
          case 7:
            _context13.n = 8;
            return sessCall(again.rt, again.uid);
          case 8:
            r = _context13.v;
          case 9:
            if (!(r.status === "ok")) {
              _context13.n = 11;
              break;
            }
            r.s = sessWrite(r.s);
            _context13.n = 10;
            return sessSettle();
          case 10:
            _context13.n = 12;
            break;
          case 11:
            if (!(r.status === "invalid")) {
              _context13.n = 12;
              break;
            }
            sessClear();
            _context13.n = 12;
            return sessSettle();
          case 12:
            return _context13.a(2, r);
        }
      }, _callee13);
    }));
    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }()).finally(function () {
    sessInflight = null;
  });
  return sessInflight;
};
var sessServerLogout = function sessServerLogout(tok) {
  if (!tok) return;
  try {
    fetch("".concat(SB_URL, "/auth/v1/logout"), {
      method: "POST",
      headers: {
        "apikey": SB_KEY,
        "Authorization": "Bearer ".concat(tok),
        "Content-Type": "application/json"
      },
      keepalive: true
    }).catch(function () {});
  } catch (e) {}
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
    emojiRaw: t.emoji || '',
    color: t.color || '#1D3557',
    season: t.season || '2025/26',
    inviteCode: t.invite_code,
    country: t.country,
    sport: t.sport,
    currency: t.currency,
    city: t.city,
    postal: t.postal,
    tactic: t.tactic || '',
    createdBy: t.created_by
  };
};
var aMember = function aMember(m, sport) {
  var _m$profiles, _m$profiles2, _m$profiles3, _m$profiles4, _m$profiles5, _m$profiles6;
  return {
    id: m.id,
    teamId: m.team_id,
    userId: m.user_id,
    role: m.role,
    name: ((_m$profiles = m.profiles) === null || _m$profiles === void 0 ? void 0 : _m$profiles.name) || 'Utilizador',
    initials: mk(((_m$profiles2 = m.profiles) === null || _m$profiles2 === void 0 ? void 0 : _m$profiles2.name) || 'U'),
    position: isFreeSport(sport) ? m.position || '' : m.position || ((_m$profiles3 = m.profiles) === null || _m$profiles3 === void 0 ? void 0 : _m$profiles3.position) || 'Jogador',
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
    tactic: t.tactic || '',
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
  var _ref6 = _asyncToGenerator(_regenerator().m(function _callee14(fn, body, tok) {
    var r, j, _t23;
    return _regenerator().w(function (_context14) {
      while (1) switch (_context14.p = _context14.n) {
        case 0:
          roCheck("".concat(SB_URL, "/rest/v1/rpc/").concat(fn), 'POST');
          _context14.n = 1;
          return fetch("".concat(SB_URL, "/rest/v1/rpc/").concat(fn), {
            method: 'POST',
            headers: api.h(tok),
            body: JSON.stringify(body)
          });
        case 1:
          r = _context14.v;
          j = null;
          _context14.p = 2;
          _context14.n = 3;
          return r.json();
        case 3:
          j = _context14.v;
          _context14.n = 5;
          break;
        case 4:
          _context14.p = 4;
          _t23 = _context14.v;
          j = null;
        case 5:
          if (r.ok) {
            _context14.n = 6;
            break;
          }
          throw new Error(j && j.message || "Erro ".concat(r.status));
        case 6:
          return _context14.a(2, j);
      }
    }, _callee14, null, [[2, 4]]);
  }));
  return function rpcCall(_x6, _x7, _x8) {
    return _ref6.apply(this, arguments);
  };
}();
var STATUS_MAX = 200,
  STATUS_TIMEOUT = 3000,
  STATUS_EVERY = 60000,
  STATUS_LONG_H = 6;
var STATUS_DEFAULT = "Estamos a atualizar a Multeam. Podes usar a app, mas algumas coisas podem falhar durante alguns minutos.";
var statusText = function statusText(v) {
  return String(v == null ? "" : v).replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, STATUS_MAX).trim();
};
var parseStatusRow = function parseStatusRow(raw) {
  var r = Array.isArray(raw) ? raw.length === 1 ? raw[0] : null : raw;
  if (!r || _typeof(r) !== "object" || Array.isArray(r)) return null;
  if (r.modo !== "verde" && r.modo !== "laranja") return null;
  if (typeof r.texto !== "string") return null;
  var d = new Date(r.desde);
  if (!r.desde || isNaN(d.getTime())) return null;
  return {
    modo: r.modo,
    texto: statusText(r.texto),
    desde: d
  };
};
var parseAppStatus = function parseAppStatus(raw) {
  var r = parseStatusRow(raw);
  return r && r.modo === "laranja" ? r : null;
};
var pad2 = function pad2(n) {
  return String(n).padStart(2, "0");
};
var statusSince = function statusSince(d, now) {
  var n = now || new Date();
  var hm = "".concat(pad2(d.getHours()), ":").concat(pad2(d.getMinutes()));
  return d.getFullYear() === n.getFullYear() && d.getMonth() === n.getMonth() && d.getDate() === n.getDate() ? "desde as ".concat(hm) : "desde ".concat(pad2(d.getDate()), "/").concat(pad2(d.getMonth() + 1), " \xE0s ").concat(hm);
};
var statusLong = function statusLong(d, now) {
  return (now ? now.getTime() : Date.now()) - d.getTime() > STATUS_LONG_H * 3600000;
};
var readAppStatus = function () {
  var _ref7 = _asyncToGenerator(_regenerator().m(function _callee16(tok) {
    var ctl, timer, limite, pedido;
    return _regenerator().w(function (_context16) {
      while (1) switch (_context16.p = _context16.n) {
        case 0:
          ctl = typeof AbortController !== "undefined" ? new AbortController() : null;
          timer = null;
          limite = new Promise(function (_, rej) {
            timer = setTimeout(function () {
              try {
                ctl && ctl.abort();
              } catch (e) {}
              rej(new Error("tempo"));
            }, STATUS_TIMEOUT);
          });
          _context16.p = 1;
          pedido = _asyncToGenerator(_regenerator().m(function _callee15() {
            var r;
            return _regenerator().w(function (_context15) {
              while (1) switch (_context15.n) {
                case 0:
                  _context15.n = 1;
                  return fetch("".concat(SB_URL, "/rest/v1/rpc/get_app_status"), {
                    method: "POST",
                    headers: api.h(tok),
                    body: "{}",
                    cache: "no-store",
                    signal: ctl ? ctl.signal : undefined
                  });
                case 1:
                  r = _context15.v;
                  if (r.ok) {
                    _context15.n = 2;
                    break;
                  }
                  throw new Error("Erro ".concat(r.status));
                case 2:
                  _context15.n = 3;
                  return r.json();
                case 3:
                  return _context15.a(2, _context15.v);
              }
            }, _callee15);
          }))();
          _context16.n = 2;
          return Promise.race([pedido, limite]);
        case 2:
          return _context16.a(2, _context16.v);
        case 3:
          _context16.p = 3;
          clearTimeout(timer);
          return _context16.f(3);
        case 4:
          return _context16.a(2);
      }
    }, _callee16, null, [[1,, 3, 4]]);
  }));
  return function readAppStatus(_x9) {
    return _ref7.apply(this, arguments);
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
var normPlace = function normPlace(s) {
  return normTeamName(s);
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
  var _ref9 = _asyncToGenerator(_regenerator().m(function _callee17(name, excludeId, tok) {
    var livre, _t24;
    return _regenerator().w(function (_context17) {
      while (1) switch (_context17.p = _context17.n) {
        case 0:
          _context17.p = 0;
          _context17.n = 1;
          return rpcCall("team_name_available", {
            p_name: name,
            p_exclude: excludeId || null
          }, tok);
        case 1:
          livre = _context17.v;
          _context17.n = 4;
          break;
        case 2:
          _context17.p = 2;
          _t24 = _context17.v;
          if (!(_t24 && _t24.message === RO_MSG)) {
            _context17.n = 3;
            break;
          }
          throw _t24;
        case 3:
          try {
            console.error("[erro original]", _t24 && _t24.message);
          } catch (x) {}
          throw new Error(TEAM_NAME_CHECK_FAIL);
        case 4:
          if (!(livre === true)) {
            _context17.n = 5;
            break;
          }
          return _context17.a(2);
        case 5:
          if (!(livre === false)) {
            _context17.n = 6;
            break;
          }
          throw new Error(TEAM_NAME_TAKEN);
        case 6:
          throw new Error(TEAM_NAME_CHECK_FAIL);
        case 7:
          return _context17.a(2);
      }
    }, _callee17, null, [[0, 2]]);
  }));
  return function checkTeamName(_x0, _x1, _x10) {
    return _ref9.apply(this, arguments);
  };
}();
var SPORT_OTHER = "Outro",
  SPORT_MIN = 2,
  SPORT_MAX = 30;
var normSport = function normSport(s) {
  return String(s == null ? "" : s).trim().replace(/\s+/g, " ");
};
var sportListed = function sportListed(v) {
  return SPORTS.find(function (x) {
    return x !== SPORT_OTHER && x.toLowerCase() === normSport(v).toLowerCase();
  });
};
var sportOtherIssue = function sportOtherIssue(text, legacy) {
  var n = normSport(text);
  if (!n) return legacy ? "" : "Escreve qual é o desporto.";
  if (n.toLowerCase() === SPORT_OTHER.toLowerCase()) return "Escreve o nome do desporto, não a palavra \"Outro\".";
  if (n.length < SPORT_MIN) return "O desporto tem de ter pelo menos ".concat(SPORT_MIN, " caracteres.");
  if (n.length > SPORT_MAX) return "O desporto pode ter no m\xE1ximo ".concat(SPORT_MAX, " caracteres.");
  return "";
};
var sportSplit = function sportSplit(v) {
  var n = normSport(v);
  if (!n) return {
    sel: "",
    text: ""
  };
  if (SPORTS.includes(n)) return {
    sel: n,
    text: ""
  };
  if (n.toLowerCase() === SPORT_OTHER.toLowerCase()) return {
    sel: SPORT_OTHER,
    text: ""
  };
  return {
    sel: SPORT_OTHER,
    text: n
  };
};
var sportJoin = function sportJoin(sel, text, keep) {
  if (sel !== SPORT_OTHER) return sel;
  var n = normSport(text);
  if (!n) return keep == null ? SPORT_OTHER : keep;
  return sportListed(n) || n;
};
var TACTIC_MAX = 20;
var TACTICS_F11 = ["4-4-2", "4-3-3", "4-2-3-1", "3-5-2", "3-4-3", "4-1-4-1", "5-3-2", "4-5-1"];
var TACTICS_BY_SPORT = {
  "Futebol 11": TACTICS_F11,
  "Futebol 7": ["2-3-1", "3-2-1", "2-2-2", "3-1-2"],
  "Futebol 5 / Futsal": ["2-2", "3-1", "1-2-1", "4-0"],
  "Futebol de Praia": ["2-2", "3-1", "1-2-1"],
  "Futebol Feminino": TACTICS_F11,
  "Futebol Júnior": TACTICS_F11
};
var tacticList = function tacticList(sport) {
  return TACTICS_BY_SPORT[sportSplit(sport).sel] || null;
};
var normTactic = function normTactic(v) {
  return String(v == null ? "" : v).replace(/\s+/g, " ").trim().slice(0, TACTIC_MAX).trim();
};
var TACTIC_OTHER = "__outra";
var tacticOf = function tacticOf(t, team) {
  return t && t.tactic || team && team.tactic || "";
};
var POSITION_MAX = 30;
var isFreeSport = function isFreeSport(sport) {
  return !!normSport(sport) && sportSplit(sport).sel === SPORT_OTHER;
};
var roleWord = function roleWord(sport, plural, lower) {
  var w = isFreeSport(sport) ? plural ? "Membros" : "Membro" : plural ? "Jogadores" : "Jogador";
  return lower ? w.toLowerCase() : w;
};
var posIcon = function posIcon(team) {
  if (!team || !isFreeSport(team.sport)) return "🏃";
  var raw = team.emojiRaw !== undefined ? team.emojiRaw : team.emoji;
  return String(raw == null ? "" : raw).trim() || "👤";
};
var positionIssue = function positionIssue(text) {
  return normSport(text).length > POSITION_MAX ? "A posi\xE7\xE3o pode ter no m\xE1ximo ".concat(POSITION_MAX, " caracteres.") : "";
};
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
var parseEventDay = function parseEventDay(s) {
  var m = /^(\d{4})-(\d\d)-(\d\d)/.exec(s || "");
  return m ? new Date(+m[1], +m[2] - 1, +m[3]) : null;
};
var eventDayMonth = function eventDayMonth(day) {
  var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  return day instanceof Date && !isNaN(day) ? "".concat(String(day.getDate()).padStart(2, "0"), "/").concat(String(day.getMonth() + 1).padStart(2, "0")).concat(day.getFullYear() !== now.getFullYear() ? "/".concat(day.getFullYear()) : "") : "";
};
var eventDateShort = function eventDateShort(day) {
  var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  return day instanceof Date && !isNaN(day) ? "".concat(DAYS_PT[day.getDay()].toLowerCase(), " ").concat(eventDayMonth(day, now)) : "";
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
[["PT", "portugal"], ["CH", "suica", "switzerland", "schweiz", "suisse", "svizzera"], ["ES", "espanha", "spain", "espana"], ["FR", "franca", "france", "frankreich"], ["DE", "alemanha", "germany", "deutschland"], ["IT", "italia", "italy", "italien"], ["BR", "brasil", "brazil"], ["AO", "angola"], ["MZ", "mocambique", "mozambique"], ["CV", "cabo verde", "cape verde"], ["GB", "reino unido", "united kingdom", "uk", "gb", "great britain"], ["NL", "holanda", "paises baixos", "netherlands", "niederlande"], ["BE", "belgica", "belgium", "belgien"], ["LU", "luxemburgo", "luxembourg"], ["AT", "austria", "osterreich"], ["LI", "liechtenstein"]].forEach(function (_ref0) {
  var _ref1 = _toArray(_ref0),
    iso = _ref1[0],
    names = _arrayLikeToArray(_ref1).slice(1);
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
var FineIcon = function FineIcon(_ref10) {
  var icon = _ref10.icon,
    _ref10$size = _ref10.size,
    size = _ref10$size === void 0 ? 24 : _ref10$size,
    style = _ref10.style;
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
var PhotoLightbox = function PhotoLightbox(_ref11) {
  var src = _ref11.src,
    name = _ref11.name,
    onClose = _ref11.onClose;
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
var ZoomPhoto = function ZoomPhoto(_ref12) {
  var src = _ref12.src,
    name = _ref12.name,
    style = _ref12.style,
    onTapGesture = _ref12.onTapGesture;
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
var Avatar = function Avatar(_ref13) {
  var initials = _ref13.initials,
    _ref13$color = _ref13.color,
    color = _ref13$color === void 0 ? T.navy : _ref13$color,
    _ref13$size = _ref13.size,
    size = _ref13$size === void 0 ? 38 : _ref13$size,
    photo = _ref13.photo,
    name = _ref13.name,
    onTapGesture = _ref13.onTapGesture;
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
var curCode = function curCode(v) {
  var m = /^\s*([A-Za-z]{3})(?![A-Za-z])/.exec(String(v == null ? "" : v));
  return m ? m[1].toUpperCase() : "";
};
var teamCur = function teamCur(t) {
  return curCode(t && t.currency) || "EUR";
};
var curSym = function curSym(code) {
  return code === "EUR" ? "€" : code;
};
var fmtMoney = function fmtMoney(n, code) {
  var v = Number(n);
  var s = (isFinite(v) ? v : 0).toFixed(2);
  return code ? "".concat(s, " ").concat(curSym(code)) : s;
};
var MoneyCtx = React.createContext("EUR");
var useMoney = function useMoney() {
  var c = React.useContext(MoneyCtx);
  var f = function f(n) {
    return fmtMoney(n, c);
  };
  f.sym = curSym(c);
  return f;
};
var Badge = function Badge(_ref14) {
  var label = _ref14.label,
    color = _ref14.color;
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
var ShieldIcon = function ShieldIcon(_ref15) {
  var _ref15$size = _ref15.size,
    size = _ref15$size === void 0 ? 12 : _ref15$size,
    _ref15$color = _ref15.color,
    color = _ref15$color === void 0 ? "#fff" : _ref15$color;
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, React.createElement("path", {
    d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"
  }));
};
var PersonIcon = function PersonIcon(_ref16) {
  var _ref16$size = _ref16.size,
    size = _ref16$size === void 0 ? 12 : _ref16$size,
    _ref16$color = _ref16.color,
    color = _ref16$color === void 0 ? "#fff" : _ref16$color;
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, React.createElement("path", {
    d: "M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"
  }));
};
var RoleBadge = function RoleBadge(_ref17) {
  var role = _ref17.role,
    teamColor = _ref17.teamColor,
    _ref17$size = _ref17.size,
    size = _ref17$size === void 0 ? "sm" : _ref17$size,
    sport = _ref17.sport;
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
  }, isAdmin ? "Admin" : roleWord(sport)));
};
var AdminHeaderBadge = function AdminHeaderBadge(_ref18) {
  var teamColor = _ref18.teamColor;
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
var RoleBadgeLight = function RoleBadgeLight(_ref19) {
  var role = _ref19.role,
    sport = _ref19.sport;
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
      label: roleWord(sport),
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
var Chip = function Chip(_ref20) {
  var active = _ref20.active,
    color = _ref20.color,
    onClick = _ref20.onClick,
    children = _ref20.children;
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
var Sec = function Sec(_ref21) {
  var label = _ref21.label;
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
var Sheet = function Sheet(_ref22) {
  var onClose = _ref22.onClose,
    title = _ref22.title,
    children = _ref22.children;
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
var FL = function FL(_ref23) {
  var children = _ref23.children;
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
var FI = function FI(_ref24) {
  var style = _ref24.style,
    props = _objectWithoutProperties(_ref24, _excluded);
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
var FSel = function FSel(_ref25) {
  var value = _ref25.value,
    onChange = _ref25.onChange,
    children = _ref25.children;
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
var PrimaryBtn = function PrimaryBtn(_ref26) {
  var onClick = _ref26.onClick,
    disabled = _ref26.disabled,
    _ref26$color = _ref26.color,
    color = _ref26$color === void 0 ? T.brand : _ref26$color,
    children = _ref26.children;
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
var TacticField = function TacticField(_ref27) {
  var sport = _ref27.sport,
    value = _ref27.value,
    _onChange = _ref27.onChange,
    emptyLabel = _ref27.emptyLabel,
    color = _ref27.color;
  var list = tacticList(sport);
  var v = value || "";
  var _useState5 = useState(function () {
      return !!v && !!list && !list.includes(v);
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    other = _useState6[0],
    setOther = _useState6[1];
  var showText = !list || other;
  var selVal = !list ? "" : other ? TACTIC_OTHER : list.includes(v) ? v : "";
  return React.createElement("div", {
    "data-tactic-field": true
  }, React.createElement(FL, null, "T\xE1tica"), list && React.createElement(FSel, {
    value: selVal,
    onChange: function onChange(e) {
      var x = e.target.value;
      if (x === TACTIC_OTHER) {
        setOther(true);
        _onChange("");
      } else {
        setOther(false);
        _onChange(x);
      }
    }
  }, React.createElement("option", {
    value: ""
  }, emptyLabel), list.map(function (x) {
    return React.createElement("option", {
      key: x,
      value: x
    }, x);
  }), React.createElement("option", {
    value: TACTIC_OTHER
  }, "Outra (escrever)")), showText && React.createElement(FI, {
    value: v,
    maxLength: TACTIC_MAX,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    placeholder: list ? "Escreve a tática" : "Opcional (".concat(emptyLabel, ")"),
    "data-tactic-input": true,
    style: {
      borderColor: color
    }
  }));
};
var TacticBig = function TacticBig(_ref28) {
  var tactic = _ref28.tactic;
  var n = String(tactic || "").length;
  return tactic ? React.createElement("p", {
    "data-tactic-value": true,
    style: {
      margin: 0,
      fontSize: n <= 8 ? 32 : n <= 14 ? 24 : 20,
      fontWeight: 900,
      lineHeight: 1.15,
      overflowWrap: "anywhere"
    }
  }, tactic) : React.createElement("p", {
    "data-tactic-value": true,
    style: {
      margin: 0,
      fontSize: 15,
      color: T.sub,
      fontWeight: 600
    }
  }, "Por definir");
};
var TacticLine = function TacticLine(_ref29) {
  var t = _ref29.t,
    team = _ref29.team;
  var x = tacticOf(t, team);
  return x ? React.createElement("p", {
    "data-tactic-line": true,
    style: {
      margin: "1px 0 0",
      fontSize: 13,
      color: T.sub
    }
  }, "\uD83C\uDFAF T\xE1tica: ", React.createElement("b", {
    style: {
      color: T.text,
      fontWeight: 800
    }
  }, x)) : null;
};
var EventTactic = function EventTactic(_ref30) {
  var team = _ref30.team,
    isAdmin = _ref30.isAdmin,
    value = _ref30.value,
    onChange = _ref30.onChange;
  return !isAdmin ? null : React.createElement(TacticField, {
    sport: team.sport,
    value: value,
    onChange: onChange,
    color: team.color,
    emptyLabel: "Da equipa (".concat(team.tactic || "por definir", ")")
  });
};
var FINE_ICON_CATS = [["Multas", ["🟥", "🟨", "⏰", "❌", "⚽", "🥅", "🏆", "😞"]], ["Equipamento e balneário", ["👕", "🧹", "📵", "🚐"]], ["Comportamento", ["🗣️", "😴", "🎯", "✍️", "😤", "🤦", "🚫", "🔇", "🤡"]], ["Dinheiro", ["💶", "💸"]], ["Comida e festa", ["🎂", "🍽️", "🍺", "🍕", "🍾"]], ["Outros", ["⚪", "🃏", "🎪", "🎖️", "🤕", "💪", "🚗", "💬"]]];
var resolveTypeIcon = function resolveTypeIcon(name, custom) {
  return custom || iconForFine(name, '');
};
var FineIconField = function FineIconField(_ref31) {
  var name = _ref31.name,
    custom = _ref31.custom,
    onCustom = _ref31.onCustom;
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    open = _useState8[0],
    setOpen = _useState8[1];
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
  }, "\u21BA Voltar ao autom\xE1tico"), FINE_ICON_CATS.map(function (_ref32) {
    var _ref33 = _slicedToArray(_ref32, 2),
      cat = _ref33[0],
      list = _ref33[1];
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
var AddFineModal = function AddFineModal(_ref34) {
  var _tm$find;
  var team = _ref34.team,
    myUserId = _ref34.myUserId,
    token = _ref34.token,
    onAdd = _ref34.onAdd,
    onClose = _ref34.onClose;
  var money = useMoney();
  var _useState9 = useState([]),
    _useState0 = _slicedToArray(_useState9, 2),
    tm = _useState0[0],
    setTm = _useState0[1];
  var _useState1 = useState([]),
    _useState10 = _slicedToArray(_useState1, 2),
    tft = _useState10[0],
    setTft = _useState10[1];
  var _useState11 = useState(""),
    _useState12 = _slicedToArray(_useState11, 2),
    mid = _useState12[0],
    setMid = _useState12[1];
  var _useState13 = useState(null),
    _useState14 = _slicedToArray(_useState13, 2),
    sft = _useState14[0],
    setSft = _useState14[1];
  var _useState15 = useState(""),
    _useState16 = _slicedToArray(_useState15, 2),
    reason = _useState16[0],
    setReason = _useState16[1];
  var _useState17 = useState(true),
    _useState18 = _slicedToArray(_useState17, 2),
    loading = _useState18[0],
    setLoading = _useState18[1];
  var _useState19 = useState(false),
    _useState20 = _slicedToArray(_useState19, 2),
    profWarn = _useState20[0],
    setProfWarn = _useState20[1];
  var _useState21 = useState(0),
    _useState22 = _slicedToArray(_useState21, 2),
    tick = _useState22[0],
    setTick = _useState22[1];
  var _useState23 = useState(""),
    _useState24 = _slicedToArray(_useState23, 2),
    err = _useState24[0],
    setErr = _useState24[1];
  var _useState25 = useState(false),
    _useState26 = _slicedToArray(_useState25, 2),
    addingType = _useState26[0],
    setAddingType = _useState26[1];
  var _useState27 = useState(""),
    _useState28 = _slicedToArray(_useState27, 2),
    newName = _useState28[0],
    setNewName = _useState28[1];
  var _useState29 = useState(""),
    _useState30 = _slicedToArray(_useState29, 2),
    newAmount = _useState30[0],
    setNewAmount = _useState30[1];
  var _useState31 = useState(null),
    _useState32 = _slicedToArray(_useState31, 2),
    newCustom = _useState32[0],
    setNewCustom = _useState32[1];
  var _useState33 = useState(false),
    _useState34 = _slicedToArray(_useState33, 2),
    savingType = _useState34[0],
    setSavingType = _useState34[1];
  var _useState35 = useState(null),
    _useState36 = _slicedToArray(_useState35, 2),
    editingFt = _useState36[0],
    setEditingFt = _useState36[1];
  var _useState37 = useState(""),
    _useState38 = _slicedToArray(_useState37, 2),
    editName = _useState38[0],
    setEditName = _useState38[1];
  var _useState39 = useState(""),
    _useState40 = _slicedToArray(_useState39, 2),
    editAmount = _useState40[0],
    setEditAmount = _useState40[1];
  var _useState41 = useState(null),
    _useState42 = _slicedToArray(_useState41, 2),
    editCustom = _useState42[0],
    setEditCustom = _useState42[1];
  var _useState43 = useState(false),
    _useState44 = _slicedToArray(_useState43, 2),
    savingEdit = _useState44[0],
    setSavingEdit = _useState44[1];
  var startEdit = function startEdit(ft, e) {
    e.stopPropagation();
    setEditingFt(ft);
    setEditName(ft.name);
    setEditAmount(String(ft.amount));
    setEditCustom(ft.emoji === iconForFine(ft.name, '') ? null : ft.emoji);
  };
  var saveEdit = function () {
    var _ref35 = _asyncToGenerator(_regenerator().m(function _callee18() {
      var em, _t25, _t26;
      return _regenerator().w(function (_context18) {
        while (1) switch (_context18.p = _context18.n) {
          case 0:
            if (!(!editName.trim() || !editAmount)) {
              _context18.n = 1;
              break;
            }
            return _context18.a(2);
          case 1:
            setSavingEdit(true);
            _context18.p = 2;
            em = resolveTypeIcon(editName.trim(), editCustom);
            _t25 = needRows;
            _context18.n = 3;
            return api.patch("fine_types?id=eq.".concat(editingFt.id), {
              name: editName.trim(),
              amount: Number(editAmount),
              emoji: storableIcon(em)
            }, token);
          case 3:
            _t25(_context18.v);
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
            _context18.n = 5;
            break;
          case 4:
            _context18.p = 4;
            _t26 = _context18.v;
            setErr(errPt(_t26));
          case 5:
            setSavingEdit(false);
          case 6:
            return _context18.a(2);
        }
      }, _callee18, null, [[2, 4]]);
    }));
    return function saveEdit() {
      return _ref35.apply(this, arguments);
    };
  }();
  var deleteFt = function () {
    var _ref36 = _asyncToGenerator(_regenerator().m(function _callee19(ft, e) {
      var still, _t27;
      return _regenerator().w(function (_context19) {
        while (1) switch (_context19.p = _context19.n) {
          case 0:
            e.stopPropagation();
            if (window.confirm("Apagar \"".concat(ft.name, "\"?"))) {
              _context19.n = 1;
              break;
            }
            return _context19.a(2);
          case 1:
            _context19.p = 1;
            _context19.n = 2;
            return api.del("fine_types?id=eq.".concat(ft.id), token);
          case 2:
            _context19.n = 3;
            return api.get("fine_types?id=eq.".concat(ft.id, "&select=id"), token);
          case 3:
            still = _context19.v;
            if (!still.length) {
              _context19.n = 4;
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
            _context19.n = 6;
            break;
          case 5:
            _context19.p = 5;
            _t27 = _context19.v;
            setErr(errPt(_t27));
          case 6:
            return _context19.a(2);
        }
      }, _callee19, null, [[1, 5]]);
    }));
    return function deleteFt(_x11, _x12) {
      return _ref36.apply(this, arguments);
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
      var _ref38 = _asyncToGenerator(_regenerator().m(function _callee20(_ref37) {
        var _ref39, mRaw, ftRaw, uids, profMap, profFailed, rpcRes, pr, _t28;
        return _regenerator().w(function (_context20) {
          while (1) switch (_context20.p = _context20.n) {
            case 0:
              _ref39 = _slicedToArray(_ref37, 2), mRaw = _ref39[0], ftRaw = _ref39[1];
              uids = (Array.isArray(mRaw) ? mRaw : []).map(function (m) {
                return m.user_id;
              }).filter(Boolean);
              profMap = {};
              profFailed = false;
              if (!uids.length) {
                _context20.n = 6;
                break;
              }
              _context20.p = 1;
              _context20.n = 2;
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
              rpcRes = _context20.v;
              (Array.isArray(rpcRes) ? rpcRes : []).forEach(function (p) {
                profMap[p.id] = p;
              });
              _context20.n = 4;
              break;
            case 3:
              _context20.p = 3;
              _t28 = _context20.v;
              profFailed = true;
            case 4:
              if (!(profFailed && !Object.keys(profMap).length)) {
                _context20.n = 6;
                break;
              }
              _context20.n = 5;
              return fetch("".concat(SB_URL, "/rest/v1/profiles?id=in.(").concat(uids.join(','), ")"), {
                headers: H
              }).then(function (r) {
                return r.json();
              }).catch(function () {
                return null;
              });
            case 5:
              pr = _context20.v;
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
                  position: isFreeSport(team.sport) ? m.position || '' : m.position || ((_profMap$m$user_id4 = profMap[m.user_id]) === null || _profMap$m$user_id4 === void 0 ? void 0 : _profMap$m$user_id4.position) || 'Jogador',
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
              return _context20.a(2);
          }
        }, _callee20, null, [[1, 3]]);
      }));
      return function (_x13) {
        return _ref38.apply(this, arguments);
      };
    }()).catch(function (e) {
      setErr(errPt(e));
      setLoading(false);
    });
  }, [tick]);
  var saveNewType = function () {
    var _ref40 = _asyncToGenerator(_regenerator().m(function _callee21() {
      var data, ft, newFt, _t29, _t30;
      return _regenerator().w(function (_context21) {
        while (1) switch (_context21.p = _context21.n) {
          case 0:
            if (!(!newName.trim() || !newAmount)) {
              _context21.n = 1;
              break;
            }
            return _context21.a(2);
          case 1:
            setSavingType(true);
            _context21.p = 2;
            _t29 = needRows;
            _context21.n = 3;
            return api.post('fine_types', {
              team_id: team.id,
              name: newName.trim(),
              amount: Number(newAmount),
              emoji: storableIcon(resolveTypeIcon(newName.trim(), newCustom))
            }, token);
          case 3:
            data = _t29(_context21.v);
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
            _context21.n = 5;
            break;
          case 4:
            _context21.p = 4;
            _t30 = _context21.v;
            setErr(errPt(_t30));
          case 5:
            setSavingType(false);
          case 6:
            return _context21.a(2);
        }
      }, _callee21, null, [[2, 4]]);
    }));
    return function saveNewType() {
      return _ref40.apply(this, arguments);
    };
  }();
  var canSubmit = mid && sft;
  var submit = function () {
    var _ref41 = _asyncToGenerator(_regenerator().m(function _callee22() {
      var _t31;
      return _regenerator().w(function (_context22) {
        while (1) switch (_context22.p = _context22.n) {
          case 0:
            if (canSubmit) {
              _context22.n = 1;
              break;
            }
            return _context22.a(2);
          case 1:
            setErr("");
            _context22.p = 2;
            _context22.n = 3;
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
            _context22.n = 5;
            break;
          case 4:
            _context22.p = 4;
            _t31 = _context22.v;
            setErr(errPt(_t31));
          case 5:
            return _context22.a(2);
        }
      }, _callee22, null, [[2, 4]]);
    }));
    return function submit() {
      return _ref41.apply(this, arguments);
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
  }, PROFILES_WARN), React.createElement(FL, null, roleWord(team.sport), " (", tm.length, ")"), React.createElement(FSel, {
    value: mid,
    onChange: function onChange(e) {
      return setMid(e.target.value);
    }
  }, React.createElement("option", {
    value: ""
  }, "\u2014 Selecionar ".concat(roleWord(team.sport, false, true), " \u2014")), tm.map(function (m) {
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
      placeholder: "Valor ".concat(money.sym)
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
    }, money(ft.amount)), React.createElement("div", {
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
    placeholder: "Valor em ".concat(money.sym, " (ex: 10)")
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
  }, money(sft.amount)))), React.createElement("button", {
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
  }, canSubmit ? "\uD83D\uDFE5 Atribuir ".concat(money(sft.amount), " a ").concat(((_tm$find = tm.find(function (m) {
    return m.id === mid;
  })) === null || _tm$find === void 0 ? void 0 : _tm$find.name) || roleWord(team.sport, false, true)) : !mid ? "\u2190 Seleciona um ".concat(roleWord(team.sport, false, true)) : "← Seleciona o tipo")));
};
var EditFineModal = function EditFineModal(_ref42) {
  var fine = _ref42.fine,
    onSave = _ref42.onSave,
    onClose = _ref42.onClose;
  var money = useMoney();
  var EMOJIS = ["🟥", "🟨", "⏰", "👕", "🏃", "🚫", "❌", "💸", "🤦", "📵", "🤕", "😤", "🍺", "🎂", "🍕", "🚗", "📱", "🎯", "🔇", "💤", "🎪", "🤡", "🍾", "🃏", "🏆", "🎖️"];
  var _useState45 = useState(storableIcon(fine.emoji || "🟥")),
    _useState46 = _slicedToArray(_useState45, 2),
    emoji = _useState46[0],
    setEmoji = _useState46[1];
  var _useState47 = useState(fine.reason || ""),
    _useState48 = _slicedToArray(_useState47, 2),
    reason = _useState48[0],
    setReason = _useState48[1];
  var _useState49 = useState(String(fine.amount)),
    _useState50 = _slicedToArray(_useState49, 2),
    amount = _useState50[0],
    setAmount = _useState50[1];
  var _useState51 = useState(false),
    _useState52 = _slicedToArray(_useState51, 2),
    saving = _useState52[0],
    setSaving = _useState52[1];
  var ok = reason.trim() && amount && Number(amount) > 0;
  var save = function () {
    var _ref43 = _asyncToGenerator(_regenerator().m(function _callee23() {
      return _regenerator().w(function (_context23) {
        while (1) switch (_context23.n) {
          case 0:
            if (ok) {
              _context23.n = 1;
              break;
            }
            return _context23.a(2);
          case 1:
            setSaving(true);
            _context23.n = 2;
            return onSave(fine.id, {
              emoji: emoji,
              reason: reason.trim(),
              amount: Number(amount)
            });
          case 2:
            setSaving(false);
            onClose();
          case 3:
            return _context23.a(2);
        }
      }, _callee23);
    }));
    return function save() {
      return _ref43.apply(this, arguments);
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
  }), React.createElement(FL, null, "Valor (", money.sym, ")"), React.createElement(FI, {
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
var LogSessionModal = function LogSessionModal(_ref44) {
  var training = _ref44.training,
    existingDates = _ref44.existingDates,
    onLog = _ref44.onLog,
    onClose = _ref44.onClose;
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
var AddExpenseModal = function AddExpenseModal(_ref45) {
  var team = _ref45.team,
    onAdd = _ref45.onAdd,
    onClose = _ref45.onClose,
    expense = _ref45.expense,
    onSave = _ref45.onSave;
  var money = useMoney();
  var editing = !!expense;
  var _useState53 = useState(editing ? expense.description : ""),
    _useState54 = _slicedToArray(_useState53, 2),
    desc = _useState54[0],
    setDesc = _useState54[1];
  var _useState55 = useState(editing ? String(Math.abs(expense.amount)) : ""),
    _useState56 = _slicedToArray(_useState55, 2),
    amount = _useState56[0],
    setAmount = _useState56[1];
  var _useState57 = useState(false),
    _useState58 = _slicedToArray(_useState57, 2),
    busy = _useState58[0],
    setBusy = _useState58[1];
  var lock = React.useRef(false);
  var val = Number(amount);
  var valid = amount !== "" && Number.isFinite(val) && val > 0;
  var ok = desc.trim() !== "" && valid;
  var submit = function () {
    var _ref46 = _asyncToGenerator(_regenerator().m(function _callee24() {
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
            if (editing) {
              _context24.n = 2;
              break;
            }
            onAdd({
              teamId: team.id,
              description: desc.trim(),
              amount: Math.abs(val),
              date: todayLocal()
            });
            onClose();
            return _context24.a(2);
          case 2:
            lock.current = true;
            setBusy(true);
            done = false;
            _context24.p = 3;
            _context24.n = 4;
            return onSave(expense.id, {
              description: desc.trim(),
              amount: val
            });
          case 4:
            done = _context24.v;
          case 5:
            _context24.p = 5;
            lock.current = false;
            setBusy(false);
            return _context24.f(5);
          case 6:
            if (done) onClose();
          case 7:
            return _context24.a(2);
        }
      }, _callee24, null, [[3,, 5, 6]]);
    }));
    return function submit() {
      return _ref46.apply(this, arguments);
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
  }), React.createElement(FL, null, "Valor (", money.sym, ")"), React.createElement(FI, {
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
var TrainingTypePicker = function TrainingTypePicker(_ref47) {
  var team = _ref47.team,
    onSelect = _ref47.onSelect,
    onClose = _ref47.onClose;
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
var AddSingleTrainingModal = function AddSingleTrainingModal(_ref48) {
  var isAdmin = _ref48.isAdmin,
    team = _ref48.team,
    onAdd = _ref48.onAdd,
    onClose = _ref48.onClose;
  var _useState59 = useState(""),
    _useState60 = _slicedToArray(_useState59, 2),
    date = _useState60[0],
    setDate = _useState60[1];
  var _useState61 = useState("19:30"),
    _useState62 = _slicedToArray(_useState61, 2),
    time = _useState62[0],
    setTime = _useState62[1];
  var _useState63 = useState(""),
    _useState64 = _slicedToArray(_useState63, 2),
    loc = _useState64[0],
    setLoc = _useState64[1];
  var _useState65 = useState(""),
    _useState66 = _slicedToArray(_useState65, 2),
    notes = _useState66[0],
    setNotes = _useState66[1];
  var _useState67 = useState(""),
    _useState68 = _slicedToArray(_useState67, 2),
    tactic = _useState68[0],
    setTactic = _useState68[1];
  var _useState69 = useState(""),
    _useState70 = _slicedToArray(_useState69, 2),
    err = _useState70[0],
    setErr = _useState70[1];
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
  }), React.createElement(EventTactic, {
    team: team,
    isAdmin: isAdmin,
    value: tactic,
    onChange: setTactic
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
    onClick: _asyncToGenerator(_regenerator().m(function _callee25() {
      var _t32;
      return _regenerator().w(function (_context25) {
        while (1) switch (_context25.p = _context25.n) {
          case 0:
            if (ok) {
              _context25.n = 1;
              break;
            }
            return _context25.a(2);
          case 1:
            setErr("");
            _context25.p = 2;
            _context25.n = 3;
            return onAdd(_objectSpread({
              teamId: team.id,
              type: "treino",
              recurring: false,
              date: date,
              time: time,
              location: loc,
              notes: notes
            }, isAdmin && normTactic(tactic) ? {
              tactic: normTactic(tactic)
            } : {}));
          case 3:
            onClose();
            _context25.n = 5;
            break;
          case 4:
            _context25.p = 4;
            _t32 = _context25.v;
            setErr(errPt(_t32));
          case 5:
            return _context25.a(2);
        }
      }, _callee25, null, [[2, 4]]);
    })),
    disabled: !ok,
    color: team.color
  }, "Agendar treino"));
};
var AddRecurringModal = function AddRecurringModal(_ref50) {
  var isAdmin = _ref50.isAdmin,
    team = _ref50.team,
    onAdd = _ref50.onAdd,
    onClose = _ref50.onClose;
  var _useState71 = useState([]),
    _useState72 = _slicedToArray(_useState71, 2),
    days = _useState72[0],
    setDays = _useState72[1];
  var _useState73 = useState("19:30"),
    _useState74 = _slicedToArray(_useState73, 2),
    time = _useState74[0],
    setTime = _useState74[1];
  var _useState75 = useState(""),
    _useState76 = _slicedToArray(_useState75, 2),
    loc = _useState76[0],
    setLoc = _useState76[1];
  var _useState77 = useState(""),
    _useState78 = _slicedToArray(_useState77, 2),
    notes = _useState78[0],
    setNotes = _useState78[1];
  var _useState79 = useState(""),
    _useState80 = _slicedToArray(_useState79, 2),
    tactic = _useState80[0],
    setTactic = _useState80[1];
  var _useState81 = useState(""),
    _useState82 = _slicedToArray(_useState81, 2),
    err = _useState82[0],
    setErr = _useState82[1];
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
  }), React.createElement(EventTactic, {
    team: team,
    isAdmin: isAdmin,
    value: tactic,
    onChange: setTactic
  }), isAdmin && React.createElement("p", {
    "data-tactic-recur": true,
    style: {
      margin: "-8px 0 14px",
      fontSize: 12,
      color: T.sub
    }
  }, "Vale para todas as semanas. Para variar, cria um treino \xFAnico."), React.createElement(FL, null, "Notas (opcional)"), React.createElement(FI, {
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
    onClick: _asyncToGenerator(_regenerator().m(function _callee26() {
      var _t33;
      return _regenerator().w(function (_context26) {
        while (1) switch (_context26.p = _context26.n) {
          case 0:
            if (ok) {
              _context26.n = 1;
              break;
            }
            return _context26.a(2);
          case 1:
            setErr("");
            _context26.p = 2;
            _context26.n = 3;
            return onAdd(_objectSpread({
              teamId: team.id,
              type: "recorrente",
              recurring: true,
              days: days.sort(),
              time: time,
              location: loc,
              notes: notes
            }, isAdmin && normTactic(tactic) ? {
              tactic: normTactic(tactic)
            } : {}));
          case 3:
            onClose();
            _context26.n = 5;
            break;
          case 4:
            _context26.p = 4;
            _t33 = _context26.v;
            setErr(errPt(_t33));
          case 5:
            return _context26.a(2);
        }
      }, _callee26, null, [[2, 4]]);
    })),
    disabled: !ok,
    color: team.color
  }, "Criar treino recorrente"));
};
var AddMatchModal = function AddMatchModal(_ref52) {
  var isAdmin = _ref52.isAdmin,
    team = _ref52.team,
    members = _ref52.members,
    onAdd = _ref52.onAdd,
    onClose = _ref52.onClose;
  var tm = sortMembers(members.filter(function (m) {
    return m.teamId === team.id;
  }), true);
  var _useState83 = useState(""),
    _useState84 = _slicedToArray(_useState83, 2),
    opponent = _useState84[0],
    setOpponent = _useState84[1];
  var _useState85 = useState(""),
    _useState86 = _slicedToArray(_useState85, 2),
    date = _useState86[0],
    setDate = _useState86[1];
  var _useState87 = useState("15:00"),
    _useState88 = _slicedToArray(_useState87, 2),
    time = _useState88[0],
    setTime = _useState88[1];
  var _useState89 = useState(""),
    _useState90 = _slicedToArray(_useState89, 2),
    loc = _useState90[0],
    setLoc = _useState90[1];
  var _useState91 = useState("casa"),
    _useState92 = _slicedToArray(_useState91, 2),
    homeAway = _useState92[0],
    setHomeAway = _useState92[1];
  var _useState93 = useState(""),
    _useState94 = _slicedToArray(_useState93, 2),
    notes = _useState94[0],
    setNotes = _useState94[1];
  var _useState95 = useState(tm.filter(function (m) {
      return !m.unavailable;
    }).map(function (m) {
      return m.id;
    })),
    _useState96 = _slicedToArray(_useState95, 2),
    squad = _useState96[0],
    setSquad = _useState96[1];
  var _useState97 = useState(""),
    _useState98 = _slicedToArray(_useState97, 2),
    tactic = _useState98[0],
    setTactic = _useState98[1];
  var _useState99 = useState(""),
    _useState100 = _slicedToArray(_useState99, 2),
    err = _useState100[0],
    setErr = _useState100[1];
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
  }, [["casa", "🏠 Casa"], ["fora", "✈️ Fora"]].map(function (_ref53) {
    var _ref54 = _slicedToArray(_ref53, 2),
      v = _ref54[0],
      l = _ref54[1];
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
  }), React.createElement(EventTactic, {
    team: team,
    isAdmin: isAdmin,
    value: tactic,
    onChange: setTactic
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
    onClick: _asyncToGenerator(_regenerator().m(function _callee27() {
      var _t34;
      return _regenerator().w(function (_context27) {
        while (1) switch (_context27.p = _context27.n) {
          case 0:
            if (ok) {
              _context27.n = 1;
              break;
            }
            return _context27.a(2);
          case 1:
            setErr("");
            _context27.p = 2;
            _context27.n = 3;
            return onAdd(_objectSpread({
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
            }, isAdmin && normTactic(tactic) ? {
              tactic: normTactic(tactic)
            } : {}));
          case 3:
            _context27.n = 5;
            break;
          case 4:
            _context27.p = 4;
            _t34 = _context27.v;
            setErr(errPt(_t34));
          case 5:
            return _context27.a(2);
        }
      }, _callee27, null, [[2, 4]]);
    })),
    disabled: !ok,
    color: T.brand
  }, "\u26BD Criar jogo vs ", opponent || "..."));
};
var EditSingleTrainingModal = function EditSingleTrainingModal(_ref56) {
  var isAdmin = _ref56.isAdmin,
    team = _ref56.team,
    training = _ref56.training,
    onEdit = _ref56.onEdit,
    onClose = _ref56.onClose;
  var _useState101 = useState(training.date),
    _useState102 = _slicedToArray(_useState101, 2),
    date = _useState102[0],
    setDate = _useState102[1];
  var _useState103 = useState(training.time || "19:00"),
    _useState104 = _slicedToArray(_useState103, 2),
    time = _useState104[0],
    setTime = _useState104[1];
  var _useState105 = useState(training.location),
    _useState106 = _slicedToArray(_useState105, 2),
    loc = _useState106[0],
    setLoc = _useState106[1];
  var _useState107 = useState(training.notes),
    _useState108 = _slicedToArray(_useState107, 2),
    notes = _useState108[0],
    setNotes = _useState108[1];
  var _useState109 = useState(training.tactic || ""),
    _useState110 = _slicedToArray(_useState109, 2),
    tactic = _useState110[0],
    setTactic = _useState110[1];
  var _useState111 = useState(""),
    _useState112 = _slicedToArray(_useState111, 2),
    err = _useState112[0],
    setErr = _useState112[1];
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
  }), React.createElement(EventTactic, {
    team: team,
    isAdmin: isAdmin,
    value: tactic,
    onChange: setTactic
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
    onClick: _asyncToGenerator(_regenerator().m(function _callee28() {
      var _t35;
      return _regenerator().w(function (_context28) {
        while (1) switch (_context28.p = _context28.n) {
          case 0:
            if (ok) {
              _context28.n = 1;
              break;
            }
            return _context28.a(2);
          case 1:
            setErr("");
            _context28.p = 2;
            _context28.n = 3;
            return onEdit(training.id, _objectSpread({
              date: date,
              time: time,
              location: loc,
              notes: notes
            }, isAdmin && normTactic(tactic) !== (training.tactic || "") ? {
              tactic: normTactic(tactic) || null
            } : {}));
          case 3:
            onClose();
            _context28.n = 5;
            break;
          case 4:
            _context28.p = 4;
            _t35 = _context28.v;
            setErr(errPt(_t35));
          case 5:
            return _context28.a(2);
        }
      }, _callee28, null, [[2, 4]]);
    })),
    disabled: !ok,
    color: team.color
  }, "\uD83D\uDCBE Guardar altera\xE7\xF5es"));
};
var EditMatchModal = function EditMatchModal(_ref58) {
  var isAdmin = _ref58.isAdmin,
    team = _ref58.team,
    members = _ref58.members,
    training = _ref58.training,
    onEdit = _ref58.onEdit,
    onClose = _ref58.onClose;
  var tm = sortMembers(members.filter(function (m) {
    return m.teamId === team.id;
  }), true);
  var _useState113 = useState(training.opponent || ""),
    _useState114 = _slicedToArray(_useState113, 2),
    opponent = _useState114[0],
    setOpponent = _useState114[1];
  var _useState115 = useState(training.date),
    _useState116 = _slicedToArray(_useState115, 2),
    date = _useState116[0],
    setDate = _useState116[1];
  var _useState117 = useState(training.time || "15:00"),
    _useState118 = _slicedToArray(_useState117, 2),
    time = _useState118[0],
    setTime = _useState118[1];
  var _useState119 = useState(training.location),
    _useState120 = _slicedToArray(_useState119, 2),
    loc = _useState120[0],
    setLoc = _useState120[1];
  var _useState121 = useState(training.homeAway || "casa"),
    _useState122 = _slicedToArray(_useState121, 2),
    homeAway = _useState122[0],
    setHomeAway = _useState122[1];
  var _useState123 = useState(training.notes),
    _useState124 = _slicedToArray(_useState123, 2),
    notes = _useState124[0],
    setNotes = _useState124[1];
  var _useState125 = useState(training.squad || tm.filter(function (m) {
      return !m.unavailable;
    }).map(function (m) {
      return m.id;
    })),
    _useState126 = _slicedToArray(_useState125, 2),
    squad = _useState126[0],
    setSquad = _useState126[1];
  var _useState127 = useState(training.tactic || ""),
    _useState128 = _slicedToArray(_useState127, 2),
    tactic = _useState128[0],
    setTactic = _useState128[1];
  var _useState129 = useState(""),
    _useState130 = _slicedToArray(_useState129, 2),
    err = _useState130[0],
    setErr = _useState130[1];
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
  }, [["casa", "🏠 Casa"], ["fora", "✈️ Fora"]].map(function (_ref59) {
    var _ref60 = _slicedToArray(_ref59, 2),
      v = _ref60[0],
      l = _ref60[1];
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
  }), React.createElement(EventTactic, {
    team: team,
    isAdmin: isAdmin,
    value: tactic,
    onChange: setTactic
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
    onClick: _asyncToGenerator(_regenerator().m(function _callee29() {
      var _t36;
      return _regenerator().w(function (_context29) {
        while (1) switch (_context29.p = _context29.n) {
          case 0:
            if (ok) {
              _context29.n = 1;
              break;
            }
            return _context29.a(2);
          case 1:
            setErr("");
            _context29.p = 2;
            _context29.n = 3;
            return onEdit(training.id, _objectSpread({
              date: date,
              time: time,
              location: loc || "A definir",
              notes: notes,
              opponent: opponent,
              homeAway: homeAway,
              squad: squad
            }, isAdmin && normTactic(tactic) !== (training.tactic || "") ? {
              tactic: normTactic(tactic) || null
            } : {}));
          case 3:
            onClose();
            _context29.n = 5;
            break;
          case 4:
            _context29.p = 4;
            _t36 = _context29.v;
            setErr(errPt(_t36));
          case 5:
            return _context29.a(2);
        }
      }, _callee29, null, [[2, 4]]);
    })),
    disabled: !ok,
    color: T.brand
  }, "\uD83D\uDCBE Guardar altera\xE7\xF5es"));
};
var EditRecurringModal = function EditRecurringModal(_ref62) {
  var isAdmin = _ref62.isAdmin,
    team = _ref62.team,
    training = _ref62.training,
    onEdit = _ref62.onEdit,
    onClose = _ref62.onClose;
  var _useState131 = useState(training.days || []),
    _useState132 = _slicedToArray(_useState131, 2),
    days = _useState132[0],
    setDays = _useState132[1];
  var _useState133 = useState(training.time || "19:30"),
    _useState134 = _slicedToArray(_useState133, 2),
    time = _useState134[0],
    setTime = _useState134[1];
  var _useState135 = useState(training.location),
    _useState136 = _slicedToArray(_useState135, 2),
    loc = _useState136[0],
    setLoc = _useState136[1];
  var _useState137 = useState(training.notes),
    _useState138 = _slicedToArray(_useState137, 2),
    notes = _useState138[0],
    setNotes = _useState138[1];
  var _useState139 = useState(training.tactic || ""),
    _useState140 = _slicedToArray(_useState139, 2),
    tactic = _useState140[0],
    setTactic = _useState140[1];
  var _useState141 = useState(""),
    _useState142 = _slicedToArray(_useState141, 2),
    err = _useState142[0],
    setErr = _useState142[1];
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
  }), React.createElement(EventTactic, {
    team: team,
    isAdmin: isAdmin,
    value: tactic,
    onChange: setTactic
  }), isAdmin && React.createElement("p", {
    "data-tactic-recur": true,
    style: {
      margin: "-8px 0 14px",
      fontSize: 12,
      color: T.sub
    }
  }, "Vale para todas as semanas. Para variar, cria um treino \xFAnico."), React.createElement(FL, null, "Notas (opcional)"), React.createElement(FI, {
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
    onClick: _asyncToGenerator(_regenerator().m(function _callee30() {
      var _t37;
      return _regenerator().w(function (_context30) {
        while (1) switch (_context30.p = _context30.n) {
          case 0:
            if (ok) {
              _context30.n = 1;
              break;
            }
            return _context30.a(2);
          case 1:
            setErr("");
            _context30.p = 2;
            _context30.n = 3;
            return onEdit(training.id, _objectSpread({
              recurring: true,
              days: days.sort(),
              time: time,
              location: loc,
              notes: notes
            }, isAdmin && normTactic(tactic) !== (training.tactic || "") ? {
              tactic: normTactic(tactic) || null
            } : {}));
          case 3:
            onClose();
            _context30.n = 5;
            break;
          case 4:
            _context30.p = 4;
            _t37 = _context30.v;
            setErr(errPt(_t37));
          case 5:
            return _context30.a(2);
        }
      }, _callee30, null, [[2, 4]]);
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
var PositionSelect = function PositionSelect(_ref64) {
  var value = _ref64.value,
    onChange = _ref64.onChange,
    placeholder = _ref64.placeholder;
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
  }, value), Object.entries(POSITIONS_GROUPED).map(function (_ref65) {
    var _ref66 = _slicedToArray(_ref65, 2),
      group = _ref66[0],
      opts = _ref66[1];
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
var PositionField = function PositionField(_ref67) {
  var sport = _ref67.sport,
    value = _ref67.value,
    onChange = _ref67.onChange,
    placeholder = _ref67.placeholder;
  if (!isFreeSport(sport)) return React.createElement(React.Fragment, null, React.createElement(FL, null, "Posi\xE7\xE3o"), React.createElement(PositionSelect, {
    value: value,
    onChange: onChange,
    placeholder: placeholder
  }));
  var issue = positionIssue(value);
  return React.createElement(React.Fragment, null, React.createElement(FL, null, "Posi\xE7\xE3o (opcional)"), React.createElement(FI, {
    value: value,
    onChange: onChange,
    placeholder: "Ex: Pivot, Base, Libero",
    "data-position-free": true,
    "aria-label": "Posi\xE7\xE3o (opcional)"
  }), issue && React.createElement("p", {
    role: "alert",
    "data-position-error": true,
    style: {
      margin: "-6px 0 12px",
      fontSize: 13,
      fontWeight: 700,
      color: "#B42318"
    }
  }, issue));
};
var AddMemberModal = function AddMemberModal(_ref68) {
  var team = _ref68.team,
    onAdd = _ref68.onAdd,
    onClose = _ref68.onClose;
  var _useState143 = useState(""),
    _useState144 = _slicedToArray(_useState143, 2),
    name = _useState144[0],
    setName = _useState144[1];
  var _useState145 = useState(""),
    _useState146 = _slicedToArray(_useState145, 2),
    pos = _useState146[0],
    setPos = _useState146[1];
  var _useState147 = useState(""),
    _useState148 = _slicedToArray(_useState147, 2),
    phone = _useState148[0],
    setPhone = _useState148[1];
  var _useState149 = useState(""),
    _useState150 = _slicedToArray(_useState149, 2),
    bday = _useState150[0],
    setBday = _useState150[1];
  var _useState151 = useState("player"),
    _useState152 = _slicedToArray(_useState151, 2),
    role = _useState152[0],
    setRole = _useState152[1];
  var _useState153 = useState(false),
    _useState154 = _slicedToArray(_useState153, 2),
    busy = _useState154[0],
    setBusy = _useState154[1];
  var lock = React.useRef(false);
  var free = isFreeSport(team.sport);
  var ok = name.trim().length > 1 && (free ? !positionIssue(pos) : !!pos);
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
  }), React.createElement(PositionField, {
    sport: team.sport,
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
  }, [["player", "\uD83D\uDC64 ".concat(roleWord(team.sport))], ["admin", "👑 Administrador"]].map(function (_ref69) {
    var _ref70 = _slicedToArray(_ref69, 2),
      v = _ref70[0],
      l = _ref70[1];
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
    onClick: _asyncToGenerator(_regenerator().m(function _callee31() {
      var done;
      return _regenerator().w(function (_context31) {
        while (1) switch (_context31.p = _context31.n) {
          case 0:
            if (!(!ok || lock.current)) {
              _context31.n = 1;
              break;
            }
            return _context31.a(2);
          case 1:
            lock.current = true;
            setBusy(true);
            done = false;
            _context31.p = 2;
            _context31.n = 3;
            return onAdd({
              teamId: team.id,
              userId: Date.now(),
              name: name.trim(),
              initials: initials || name[0].toUpperCase(),
              position: free ? normSport(pos) : pos,
              phone: phone,
              birthday: bday,
              role: role
            });
          case 3:
            done = _context31.v;
          case 4:
            _context31.p = 4;
            lock.current = false;
            setBusy(false);
            return _context31.f(4);
          case 5:
            if (done) onClose();
          case 6:
            return _context31.a(2);
        }
      }, _callee31, null, [[2,, 4, 5]]);
    })),
    disabled: !ok || busy,
    color: team.color
  }, busy ? "A adicionar…" : "Adicionar ".concat(role === "admin" ? "administrador" : roleWord(team.sport, false, true))));
};
var EMOJIS = ["⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🥅", "🏸", "🏓", "🏒", "🥊", "🏊", "🚴", "🏋️", "🏖️", "🎯", "🏆", "🤺", "🥋", "🏃", "🤸", "🧘", "🧗", "⛳", "🤾", "🏹", "🚣"];
var COLORS = ["#1D3557", "#2A7D4F", "#C77B2A", "#7B2D8B", "#1565C0", "#C62828", "#00695C", "#E65100", "#37474F", "#558B2F"];
var COUNTRIES = ["Portugal", "Suíça", "Espanha", "França", "Alemanha", "Itália", "Brasil", "Angola", "Moçambique", "Cabo Verde", "Reino Unido", "Holanda", "Bélgica", "Outro"];
var SPORTS = ["Futebol 11", "Futebol 7", "Futebol 5 / Futsal", "Futebol de Praia", "Futebol Feminino", "Futebol Júnior", "Outro"];
var CURRENCIES = ["EUR (€)", "CHF (Fr.)", "GBP (£)", "BRL (R$)", "USD ($)", "AOA (Kz)", "MZN (MT)", "CVE (Esc.)"];
var COUNTRY_CUR = {
  "Portugal": "EUR (€)",
  "Suíça": "CHF (Fr.)",
  "Espanha": "EUR (€)",
  "França": "EUR (€)",
  "Alemanha": "EUR (€)",
  "Itália": "EUR (€)",
  "Brasil": "BRL (R$)",
  "Angola": "AOA (Kz)",
  "Moçambique": "MZN (MT)",
  "Cabo Verde": "CVE (Esc.)",
  "Reino Unido": "GBP (£)",
  "Holanda": "EUR (€)",
  "Bélgica": "EUR (€)"
};
var CreateTeamModal = function CreateTeamModal(_ref72) {
  var onAdd = _ref72.onAdd,
    onClose = _ref72.onClose;
  var _useState155 = useState(""),
    _useState156 = _slicedToArray(_useState155, 2),
    name = _useState156[0],
    setName = _useState156[1];
  var _useState157 = useState("⚽"),
    _useState158 = _slicedToArray(_useState157, 2),
    emoji = _useState158[0],
    setEmoji = _useState158[1];
  var _useState159 = useState("#1D3557"),
    _useState160 = _slicedToArray(_useState159, 2),
    color = _useState160[0],
    setColor = _useState160[1];
  var _useState161 = useState("2025/26"),
    _useState162 = _slicedToArray(_useState161, 2),
    season = _useState162[0],
    setSeason = _useState162[1];
  var _useState163 = useState("Portugal"),
    _useState164 = _slicedToArray(_useState163, 2),
    country = _useState164[0],
    setCountry = _useState164[1];
  var _useState165 = useState("Futebol 11"),
    _useState166 = _slicedToArray(_useState165, 2),
    sport = _useState166[0],
    setSport = _useState166[1];
  var _useState167 = useState("EUR (€)"),
    _useState168 = _slicedToArray(_useState167, 2),
    currency = _useState168[0],
    setCurrency = _useState168[1];
  var _useState169 = useState(false),
    _useState170 = _slicedToArray(_useState169, 2),
    curTouched = _useState170[0],
    setCurTouched = _useState170[1];
  var _useState171 = useState(""),
    _useState172 = _slicedToArray(_useState171, 2),
    city = _useState172[0],
    setCity = _useState172[1];
  var _useState173 = useState(""),
    _useState174 = _slicedToArray(_useState173, 2),
    postal = _useState174[0],
    setPostal = _useState174[1];
  var _useState175 = useState(""),
    _useState176 = _slicedToArray(_useState175, 2),
    sportOther = _useState176[0],
    setSportOther = _useState176[1];
  var _useState177 = useState(""),
    _useState178 = _slicedToArray(_useState177, 2),
    tactic = _useState178[0],
    setTactic = _useState178[1];
  var _useState179 = useState(false),
    _useState180 = _slicedToArray(_useState179, 2),
    busy = _useState180[0],
    setBusy = _useState180[1];
  var _useState181 = useState(""),
    _useState182 = _slicedToArray(_useState181, 2),
    err = _useState182[0],
    setErr = _useState182[1];
  var issue = name.trim() ? teamNameIssue(name) : "";
  var sportIssue = sport === SPORT_OTHER ? sportOtherIssue(sportOther, false) : "";
  var ok = !teamNameIssue(name) && !sportIssue;
  var submit = function () {
    var _ref73 = _asyncToGenerator(_regenerator().m(function _callee32() {
      var _t38;
      return _regenerator().w(function (_context32) {
        while (1) switch (_context32.p = _context32.n) {
          case 0:
            if (!(!ok || busy)) {
              _context32.n = 1;
              break;
            }
            return _context32.a(2);
          case 1:
            setBusy(true);
            setErr("");
            _context32.p = 2;
            _context32.n = 3;
            return onAdd(_objectSpread({
              name: normTeamName(name),
              emoji: emoji,
              color: color,
              season: season,
              country: country,
              sport: sportJoin(sport, sportOther),
              currency: currency,
              city: normPlace(city),
              postal: normPlace(postal)
            }, normTactic(tactic) ? {
              tactic: normTactic(tactic)
            } : {}));
          case 3:
            onClose();
            _context32.n = 5;
            break;
          case 4:
            _context32.p = 4;
            _t38 = _context32.v;
            setErr(_t38 && _t38.message || ERR_GENERIC);
            setBusy(false);
          case 5:
            return _context32.a(2);
        }
      }, _callee32, null, [[2, 4]]);
    }));
    return function submit() {
      return _ref73.apply(this, arguments);
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
      var v = e.target.value;
      setCountry(v);
      if (!curTouched && COUNTRY_CUR[v]) setCurrency(COUNTRY_CUR[v]);
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
  })), sport === SPORT_OTHER && React.createElement(React.Fragment, null, React.createElement(FL, null, "Qual o desporto?"), React.createElement(FI, {
    value: sportOther,
    onChange: function onChange(e) {
      return setSportOther(e.target.value);
    },
    placeholder: "Ex: Andebol",
    "data-sport-other": true
  }), sportIssue && React.createElement("p", {
    role: "alert",
    "data-sport-error": true,
    style: {
      margin: "-6px 0 12px",
      fontSize: 13,
      fontWeight: 700,
      color: "#B42318"
    }
  }, sportIssue)), React.createElement(TacticField, {
    key: sport,
    sport: sportJoin(sport, sportOther),
    value: tactic,
    onChange: setTactic,
    emptyLabel: "Por definir",
    color: color
  }), React.createElement(FL, null, "Moeda"), React.createElement(FSel, {
    value: currency,
    onChange: function onChange(e) {
      setCurrency(e.target.value);
      setCurTouched(true);
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
var EditProfileModal = function EditProfileModal(_ref74) {
  var user = _ref74.user,
    team = _ref74.team,
    onSave = _ref74.onSave,
    onClose = _ref74.onClose;
  var free = !!team && isFreeSport(team.sport);
  var _useState183 = useState(user.name),
    _useState184 = _slicedToArray(_useState183, 2),
    name = _useState184[0],
    setName = _useState184[1];
  var _useState185 = useState(user.position),
    _useState186 = _slicedToArray(_useState185, 2),
    pos = _useState186[0],
    setPos = _useState186[1];
  var _useState187 = useState(user.phone),
    _useState188 = _slicedToArray(_useState187, 2),
    phone = _useState188[0],
    setPhone = _useState188[1];
  var _useState189 = useState(user.birthday),
    _useState190 = _slicedToArray(_useState189, 2),
    bday = _useState190[0],
    setBday = _useState190[1];
  var _useState191 = useState(user.avatarUrl || null),
    _useState192 = _slicedToArray(_useState191, 2),
    photo = _useState192[0],
    setPhoto = _useState192[1];
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
  }), React.createElement(PositionField, {
    sport: free ? team.sport : "",
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
      if (free && positionIssue(pos)) return;
      onSave(_objectSpread(_objectSpread({}, user), {}, {
        name: name,
        position: free ? normSport(pos) : pos,
        phone: phone,
        birthday: bday,
        avatarUrl: photo
      }));
      onClose();
    },
    color: T.navy,
    disabled: free && !!positionIssue(pos)
  }, "Guardar perfil"));
};
var EditMemberModal = function EditMemberModal(_ref75) {
  var member = _ref75.member,
    team = _ref75.team,
    onSave = _ref75.onSave,
    onClose = _ref75.onClose;
  var _useState193 = useState(member.name),
    _useState194 = _slicedToArray(_useState193, 2),
    name = _useState194[0],
    setName = _useState194[1];
  var free = isFreeSport(team.sport);
  var _useState195 = useState(free ? realPosition(member.position) : member.position || "Jogador"),
    _useState196 = _slicedToArray(_useState195, 2),
    pos = _useState196[0],
    setPos = _useState196[1];
  var _useState197 = useState(member.phone || ""),
    _useState198 = _slicedToArray(_useState197, 2),
    phone = _useState198[0],
    setPhone = _useState198[1];
  var _useState199 = useState(member.birthday || ""),
    _useState200 = _slicedToArray(_useState199, 2),
    bday = _useState200[0],
    setBday = _useState200[1];
  var _useState201 = useState(member.avatarUrl || null),
    _useState202 = _slicedToArray(_useState201, 2),
    photo = _useState202[0],
    setPhoto = _useState202[1];
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
  }), React.createElement(PositionField, {
    sport: team.sport,
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
    disabled: free && !!positionIssue(pos),
    onClick: function onClick() {
      if (free && positionIssue(pos)) return;
      onSave(member.id, {
        name: name,
        position: free ? normSport(pos) : pos,
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
var CountBadge = function CountBadge(_ref76) {
  var n = _ref76.n,
    style = _ref76.style;
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
var ClaimWho = function ClaimWho(_ref77) {
  var name = _ref77.name,
    avatar = _ref77.avatar,
    _ref77$size = _ref77.size,
    size = _ref77$size === void 0 ? 40 : _ref77$size,
    children = _ref77.children;
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
var MyClaimsCard = function MyClaimsCard(_ref78) {
  var claims = _ref78.claims,
    members = _ref78.members,
    myUserId = _ref78.myUserId,
    onEditNote = _ref78.onEditNote,
    onCancel = _ref78.onCancel,
    onAnswer = _ref78.onAnswer;
  var _useState203 = useState(null),
    _useState204 = _slicedToArray(_useState203, 2),
    editing = _useState204[0],
    setEditing = _useState204[1];
  var _useState205 = useState(""),
    _useState206 = _slicedToArray(_useState205, 2),
    note = _useState206[0],
    setNote = _useState206[1];
  var _useState207 = useState({}),
    _useState208 = _slicedToArray(_useState207, 2),
    ans = _useState208[0],
    setAns = _useState208[1];
  var _useState209 = useState(null),
    _useState210 = _slicedToArray(_useState209, 2),
    ansEditing = _useState210[0],
    setAnsEditing = _useState210[1];
  var _useState211 = useState(null),
    _useState212 = _slicedToArray(_useState211, 2),
    busy = _useState212[0],
    setBusy = _useState212[1];
  var _useState213 = useState(""),
    _useState214 = _slicedToArray(_useState213, 2),
    err = _useState214[0],
    setErr = _useState214[1];
  var flight = React.useRef(false);
  var list = visibleClaims(claims, members, myUserId);
  useEffect(function () {
    claimNamesRemember(claims, "member_name", "avatar_url");
  }, [claims]);
  if (!list.length) return null;
  var run = function () {
    var _ref79 = _asyncToGenerator(_regenerator().m(function _callee33(id, fn) {
      var _t39;
      return _regenerator().w(function (_context33) {
        while (1) switch (_context33.p = _context33.n) {
          case 0:
            if (!flight.current) {
              _context33.n = 1;
              break;
            }
            return _context33.a(2);
          case 1:
            flight.current = true;
            setBusy(id);
            setErr("");
            _context33.p = 2;
            _context33.n = 3;
            return fn();
          case 3:
            setEditing(null);
            _context33.n = 5;
            break;
          case 4:
            _context33.p = 4;
            _t39 = _context33.v;
            setErr(errPt(_t39));
          case 5:
            setBusy(null);
            flight.current = false;
          case 6:
            return _context33.a(2);
        }
      }, _callee33, null, [[2, 4]]);
    }));
    return function run(_x14, _x15) {
      return _ref79.apply(this, arguments);
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
        return run(c.id, _asyncToGenerator(_regenerator().m(function _callee34() {
          var _ans$c$id4;
          return _regenerator().w(function (_context34) {
            while (1) switch (_context34.n) {
              case 0:
                _context34.n = 1;
                return onAnswer(c.id, String((_ans$c$id4 = ans[c.id]) !== null && _ans$c$id4 !== void 0 ? _ans$c$id4 : c.answer || "").trim());
              case 1:
                setAns(function (a0) {
                  var n0 = _objectSpread({}, a0);
                  delete n0[c.id];
                  return n0;
                });
                setAnsEditing(null);
              case 2:
                return _context34.a(2);
            }
          }, _callee34);
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
var ClaimsAdminSection = function ClaimsAdminSection(_ref81) {
  var team = _ref81.team,
    members = _ref81.members,
    token = _ref81.token,
    readOnly = _ref81.readOnly,
    onChanged = _ref81.onChanged;
  var _useState215 = useState({
      status: "loading",
      list: [],
      error: ""
    }),
    _useState216 = _slicedToArray(_useState215, 2),
    st = _useState216[0],
    setSt = _useState216[1];
  var _useState217 = useState(null),
    _useState218 = _slicedToArray(_useState217, 2),
    panel = _useState218[0],
    setPanel = _useState218[1];
  var _useState219 = useState(""),
    _useState220 = _slicedToArray(_useState219, 2),
    note = _useState220[0],
    setNote = _useState220[1];
  var _useState221 = useState(false),
    _useState222 = _slicedToArray(_useState221, 2),
    busy = _useState222[0],
    setBusy = _useState222[1];
  var _useState223 = useState(""),
    _useState224 = _slicedToArray(_useState223, 2),
    err = _useState224[0],
    setErr = _useState224[1];
  var _useState225 = useState(null),
    _useState226 = _slicedToArray(_useState225, 2),
    rowErr = _useState226[0],
    setRowErr = _useState226[1];
  var loadSeq = React.useRef(0);
  var load = function () {
    var _ref82 = _asyncToGenerator(_regenerator().m(function _callee35() {
      var my, r, _t40;
      return _regenerator().w(function (_context35) {
        while (1) switch (_context35.p = _context35.n) {
          case 0:
            my = ++loadSeq.current;
            setSt(function (s0) {
              return _objectSpread(_objectSpread({}, s0), {}, {
                status: "loading",
                error: ""
              });
            });
            _context35.p = 1;
            _context35.n = 2;
            return rpcCall("list_team_claims", {
              p_team_id: team.id
            }, token);
          case 2:
            r = _context35.v;
            if (!(my !== loadSeq.current)) {
              _context35.n = 3;
              break;
            }
            return _context35.a(2);
          case 3:
            claimNamesRemember(r, "member_name", "member_avatar");
            setSt({
              status: "ok",
              list: Array.isArray(r) ? r : [],
              error: ""
            });
            _context35.n = 6;
            break;
          case 4:
            _context35.p = 4;
            _t40 = _context35.v;
            if (!(my !== loadSeq.current)) {
              _context35.n = 5;
              break;
            }
            return _context35.a(2);
          case 5:
            setSt({
              status: "error",
              list: [],
              error: errPt(_t40)
            });
          case 6:
            return _context35.a(2);
        }
      }, _callee35, null, [[1, 4]]);
    }));
    return function load() {
      return _ref82.apply(this, arguments);
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
    var _ref83 = _asyncToGenerator(_regenerator().m(function _callee36(c) {
      var _t41;
      return _regenerator().w(function (_context36) {
        while (1) switch (_context36.p = _context36.n) {
          case 0:
            if (!flight.current) {
              _context36.n = 1;
              break;
            }
            return _context36.a(2);
          case 1:
            flight.current = true;
            setBusy(true);
            setErr("");
            _context36.p = 2;
            if (!(panel.kind === "aprovar")) {
              _context36.n = 4;
              break;
            }
            _context36.n = 3;
            return rpcCall("approve_claim", {
              p_claim_id: c.id
            }, token);
          case 3:
            _context36.n = 7;
            break;
          case 4:
            if (!(panel.kind === "perguntar")) {
              _context36.n = 6;
              break;
            }
            _context36.n = 5;
            return rpcCall("ask_claim_question", {
              p_claim_id: c.id,
              p_question: note.trim()
            }, token);
          case 5:
            _context36.n = 7;
            break;
          case 6:
            _context36.n = 7;
            return rpcCall("reject_claim", {
              p_claim_id: c.id,
              p_note: note.trim() || null
            }, token);
          case 7:
            setPanel(null);
            setNote("");
            _context36.n = 8;
            return load();
          case 8:
            if (!onChanged) {
              _context36.n = 9;
              break;
            }
            _context36.n = 9;
            return onChanged();
          case 9:
            _context36.n = 11;
            break;
          case 10:
            _context36.p = 10;
            _t41 = _context36.v;
            setErr(errPt(_t41));
          case 11:
            setBusy(false);
            flight.current = false;
          case 12:
            return _context36.a(2);
        }
      }, _callee36, null, [[2, 10]]);
    }));
    return function decide(_x16) {
      return _ref83.apply(this, arguments);
    };
  }();
  var withdraw = function () {
    var _ref84 = _asyncToGenerator(_regenerator().m(function _callee37(c) {
      var _t42;
      return _regenerator().w(function (_context37) {
        while (1) switch (_context37.p = _context37.n) {
          case 0:
            if (!flight.current) {
              _context37.n = 1;
              break;
            }
            return _context37.a(2);
          case 1:
            if (window.confirm("Retirar a pergunta (e a resposta, se houver)?")) {
              _context37.n = 2;
              break;
            }
            return _context37.a(2);
          case 2:
            flight.current = true;
            setBusy(true);
            setRowErr(null);
            _context37.p = 3;
            _context37.n = 4;
            return rpcCall("withdraw_claim_question", {
              p_claim_id: c.id
            }, token);
          case 4:
            _context37.n = 5;
            return load();
          case 5:
            if (!onChanged) {
              _context37.n = 6;
              break;
            }
            _context37.n = 6;
            return onChanged();
          case 6:
            _context37.n = 8;
            break;
          case 7:
            _context37.p = 7;
            _t42 = _context37.v;
            setRowErr({
              id: c.id,
              msg: errPt(_t42)
            });
          case 8:
            setBusy(false);
            flight.current = false;
          case 9:
            return _context37.a(2);
        }
      }, _callee37, null, [[3, 7]]);
    }));
    return function withdraw(_x17) {
      return _ref84.apply(this, arguments);
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
var JoinTeamModal = function JoinTeamModal(_ref85) {
  var teams = _ref85.teams,
    user = _ref85.user,
    onFindByCode = _ref85.onFindByCode,
    onJoin = _ref85.onJoin,
    onClose = _ref85.onClose,
    _ref85$initialCode = _ref85.initialCode,
    initialCode = _ref85$initialCode === void 0 ? "" : _ref85$initialCode,
    onListClaimable = _ref85.onListClaimable,
    onRequestClaim = _ref85.onRequestClaim;
  var _useState227 = useState(initialCode.toUpperCase()),
    _useState228 = _slicedToArray(_useState227, 2),
    code = _useState228[0],
    setCode = _useState228[1];
  var _useState229 = useState(null),
    _useState230 = _slicedToArray(_useState229, 2),
    found = _useState230[0],
    setFound = _useState230[1];
  var _useState231 = useState(false),
    _useState232 = _slicedToArray(_useState231, 2),
    joined = _useState232[0],
    setJoined = _useState232[1];
  var _useState233 = useState(false),
    _useState234 = _slicedToArray(_useState233, 2),
    searching = _useState234[0],
    setSearching = _useState234[1];
  var _useState235 = useState([]),
    _useState236 = _slicedToArray(_useState235, 2),
    claimable = _useState236[0],
    setClaimable = _useState236[1];
  var _useState237 = useState(""),
    _useState238 = _slicedToArray(_useState237, 2),
    claimNote = _useState238[0],
    setClaimNote = _useState238[1];
  var _useState239 = useState(null),
    _useState240 = _slicedToArray(_useState239, 2),
    claimBusy = _useState240[0],
    setClaimBusy = _useState240[1];
  var _useState241 = useState(""),
    _useState242 = _slicedToArray(_useState241, 2),
    claimErr = _useState242[0],
    setClaimErr = _useState242[1];
  var _useState243 = useState(false),
    _useState244 = _slicedToArray(_useState243, 2),
    requested = _useState244[0],
    setRequested = _useState244[1];
  var _useState245 = useState(""),
    _useState246 = _slicedToArray(_useState245, 2),
    searchedCode = _useState246[0],
    setSearchedCode = _useState246[1];
  var _useState247 = useState(""),
    _useState248 = _slicedToArray(_useState247, 2),
    searchErr = _useState248[0],
    setSearchErr = _useState248[1];
  var _useState249 = useState(false),
    _useState250 = _slicedToArray(_useState249, 2),
    listErr = _useState250[0],
    setListErr = _useState250[1];
  useEffect(function () {
    if (initialCode) {
      setTimeout(function () {
        return search(initialCode);
      }, 500);
    }
  }, []);
  var search = function () {
    var _ref86 = _asyncToGenerator(_regenerator().m(function _callee38(c) {
      var q, t, l, _t43, _t44, _t45;
      return _regenerator().w(function (_context38) {
        while (1) switch (_context38.p = _context38.n) {
          case 0:
            q = (c || code).trim().toUpperCase();
            if (q) {
              _context38.n = 1;
              break;
            }
            return _context38.a(2);
          case 1:
            setSearching(true);
            setClaimable([]);
            setClaimErr("");
            setSearchedCode(q);
            setSearchErr("");
            setListErr(false);
            t = null;
            _context38.p = 2;
            if (!onFindByCode) {
              _context38.n = 4;
              break;
            }
            _context38.n = 3;
            return onFindByCode(q);
          case 3:
            _t43 = _context38.v;
            _context38.n = 5;
            break;
          case 4:
            _t43 = teams.find(function (t) {
              var _t$inviteCode;
              return ((_t$inviteCode = t.inviteCode) === null || _t$inviteCode === void 0 ? void 0 : _t$inviteCode.toUpperCase()) === q;
            });
          case 5:
            t = _t43;
            _context38.n = 7;
            break;
          case 6:
            _context38.p = 6;
            _t44 = _context38.v;
            setFound(null);
            setSearchErr(errPt(_t44));
            setSearching(false);
            return _context38.a(2);
          case 7:
            setFound(t || "notfound");
            if (!(t && onListClaimable && !teams.some(function (x) {
              return x.id === t.id;
            }))) {
              _context38.n = 11;
              break;
            }
            _context38.p = 8;
            _context38.n = 9;
            return onListClaimable(q);
          case 9:
            l = _context38.v;
            setClaimable(Array.isArray(l) ? l : []);
            _context38.n = 11;
            break;
          case 10:
            _context38.p = 10;
            _t45 = _context38.v;
            setClaimable([]);
            setListErr(true);
          case 11:
            setSearching(false);
          case 12:
            return _context38.a(2);
        }
      }, _callee38, null, [[8, 10], [2, 6]]);
    }));
    return function search(_x18) {
      return _ref86.apply(this, arguments);
    };
  }();
  var askClaim = function () {
    var _ref87 = _asyncToGenerator(_regenerator().m(function _callee39(m) {
      var _t46;
      return _regenerator().w(function (_context39) {
        while (1) switch (_context39.p = _context39.n) {
          case 0:
            setClaimBusy(m.member_id);
            setClaimErr("");
            _context39.p = 1;
            _context39.n = 2;
            return onRequestClaim(searchedCode, m.member_id, claimNote.trim());
          case 2:
            setRequested(true);
            _context39.n = 4;
            break;
          case 3:
            _context39.p = 3;
            _t46 = _context39.v;
            setClaimErr(errPt(_t46));
          case 4:
            setClaimBusy(null);
          case 5:
            return _context39.a(2);
        }
      }, _callee39, null, [[1, 3]]);
    }));
    return function askClaim(_x19) {
      return _ref87.apply(this, arguments);
    };
  }();
  var alreadyMember = found && found !== "notfound" && teams.some(function (t) {
    return t.id === found.id;
  });
  var accept = function () {
    var _ref88 = _asyncToGenerator(_regenerator().m(function _callee40() {
      return _regenerator().w(function (_context40) {
        while (1) switch (_context40.n) {
          case 0:
            _context40.n = 1;
            return onJoin(found);
          case 1:
            setJoined(true);
          case 2:
            return _context40.a(2);
        }
      }, _callee40);
    }));
    return function accept() {
      return _ref88.apply(this, arguments);
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
  }, "Vais entrar como ", React.createElement("strong", null, "\uD83D\uDC64 ", roleWord(found.sport)), ". O admin pode depois alterar a tua fun\xE7\xE3o."))), offerClaims && React.createElement("div", {
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
var TeamPickerModal = function TeamPickerModal(_ref89) {
  var teams = _ref89.teams,
    members = _ref89.members,
    myUserId = _ref89.myUserId,
    currentTeamId = _ref89.currentTeamId,
    onSelect = _ref89.onSelect,
    onClose = _ref89.onClose,
    onCreateTeam = _ref89.onCreateTeam,
    readOnly = _ref89.readOnly;
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
    }, readOnly ? t.season : "".concat((me === null || me === void 0 ? void 0 : me.role) === "admin" ? "🛡 Admin" : "\xB7 ".concat(roleWord(t.sport)), " \xB7 ").concat(t.season))), t.id === currentTeamId && React.createElement("span", {
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
var FineGroup = function FineGroup(_ref90) {
  var group = _ref90.group,
    color = _ref90.color;
  var money = useMoney();
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
  }, money(group.unpaid), " por pagar") : React.createElement("span", {
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
    }, money(f.amount)));
  }));
};
var DevedorCard = function DevedorCard(_ref91) {
  var member = _ref91.member,
    isTop = _ref91.isTop,
    color = _ref91.color,
    onOpen = _ref91.onOpen;
  var money = useMoney();
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
  }, money(member.unpaid)), React.createElement("span", {
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
    }, money(f.amount)));
  })));
};
var FineGroupHome = function FineGroupHome(_ref92) {
  var group = _ref92.group,
    color = _ref92.color,
    renderFine = _ref92.renderFine;
  var money = useMoney();
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
  }, money(group.total), group.unpaid > 0 ? " \xB7 ".concat(money(group.unpaid), " por pagar") : ""))), React.createElement("span", {
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
    }, money(f.amount)));
  })));
};
var TabelaMultasModal = function TabelaMultasModal(_ref93) {
  var team = _ref93.team,
    fineTypes = _ref93.fineTypes,
    fines = _ref93.fines,
    members = _ref93.members,
    onClose = _ref93.onClose;
  var money = useMoney();
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
    }, money(ft.amount)));
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
    }, money(m.unpaid)));
  })));
};
var TACTIC_NOTICE_KEY = "multeam.novidade.tatica.";
var TacticNotice = function TacticNotice(_ref94) {
  var userId = _ref94.userId;
  var key = TACTIC_NOTICE_KEY + userId;
  var _useState251 = useState(function () {
      try {
        return window.localStorage.getItem(key) === "1";
      } catch (e) {
        return false;
      }
    }),
    _useState252 = _slicedToArray(_useState251, 2),
    hidden = _useState252[0],
    setHidden = _useState252[1];
  var close = function close() {
    try {
      window.localStorage.setItem(key, "1");
    } catch (e) {}
    setHidden(true);
  };
  if (!userId || hidden) return null;
  return React.createElement("div", {
    role: "note",
    "aria-label": "Novidade: T\xE1tica",
    "data-novidade-tatica": true,
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
      fontSize: 14,
      lineHeight: 1.4
    }
  }, React.createElement("b", null, "Novidade: T\xE1tica."), " Em Gerir > Dados da equipa podes definir a t\xE1tica da equipa e, ao marcar um treino ou jogo, escolher outra para esse dia."), React.createElement("button", {
    onClick: close,
    style: {
      minHeight: 44,
      marginTop: 8,
      padding: "8px 18px",
      borderRadius: 10,
      border: "1.5px solid ".concat(T.border),
      background: "transparent",
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer",
      color: T.text,
      fontFamily: "inherit"
    }
  }, "Fechar"));
};
var HomeTab = function HomeTab(_ref95) {
  var appStatus = _ref95.appStatus,
    noticeUserId = _ref95.noticeUserId,
    team = _ref95.team,
    fines = _ref95.fines,
    members = _ref95.members,
    expenses = _ref95.expenses,
    trainings = _ref95.trainings,
    isAdmin = _ref95.isAdmin,
    onAddFine = _ref95.onAddFine,
    onSelectMember = _ref95.onSelectMember,
    fineTypes = _ref95.fineTypes,
    presences = _ref95.presences,
    myMember = _ref95.myMember,
    onSetPresence = _ref95.onSetPresence;
  var money = useMoney();
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
  }, React.createElement(StatusBanner, {
    status: appStatus,
    where: "inicio"
  }), React.createElement("div", {
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
  }, money(balance)), React.createElement("div", {
    style: {
      display: "flex"
    }
  }, [["Recebido", "+".concat(money(collected)), "#fff"], ["Por pagar", money(pending), "#FFF4F4"], ["Despesas", "-".concat(money(spent)), "rgba(255,255,255,0.65)"]].map(function (_ref96, i, arr) {
    var _ref97 = _slicedToArray(_ref96, 3),
      l = _ref97[0],
      v = _ref97[1],
      c = _ref97[2];
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
  }))), React.createElement(TacticNotice, {
    userId: noticeUserId
  }), function () {
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
    }, presenceTitle(ev)), React.createElement("p", {
      "data-event-date": true,
      style: {
        margin: "1px 0 0",
        fontSize: 13,
        fontWeight: 600,
        color: T.sub
      }
    }, "\uD83D\uDCC5 ", eventDateShort(ev.day)), ev.t.location && React.createElement("p", {
      style: {
        margin: "1px 0 0",
        fontSize: 13,
        color: T.sub
      }
    }, "\uD83D\uDCCD ", ev.t.location), React.createElement(TacticLine, {
      t: ev.t,
      team: team
    }), React.createElement("div", {
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
    }, podiumItems.map(function (_ref98) {
      var m = _ref98.m,
        place = _ref98.place,
        medal = _ref98.medal,
        h = _ref98.h,
        sz = _ref98.sz;
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
      }, paidAmt > 0 ? money(paidAmt) : unpaidAmt > 0 ? "".concat(money(unpaidAmt), " deve") : "✓")), React.createElement("div", {
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
      }, m.initials), React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, React.createElement("p", {
        style: {
          margin: 0,
          fontWeight: 600,
          fontSize: 15,
          overflowWrap: "anywhere"
        }
      }, m.name), m.paid > 0 && React.createElement("p", {
        "data-rank-pago": true,
        style: {
          margin: "2px 0 0",
          fontSize: 12,
          fontWeight: 600,
          color: T.sub
        }
      }, money(m.paid))), React.createElement("p", {
        style: {
          margin: 0,
          fontWeight: 800,
          fontSize: 15,
          flexShrink: 0,
          whiteSpace: "nowrap",
          color: m.unpaid > 0 ? T.brand : T.sub
        }
      }, m.unpaid > 0 ? money(m.unpaid) : "✓"));
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
    }).join(", "), " \xB7 ", t.time), eventDateShort(parseEventDay(nextOccurrence(t.days, t.time))) && React.createElement("p", {
      "data-event-date": true,
      style: {
        margin: 0,
        fontSize: 13,
        fontWeight: 600,
        color: T.sub
      }
    }, "Pr\xF3ximo: ", eventDateShort(parseEventDay(nextOccurrence(t.days, t.time)))), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        color: T.sub
      }
    }, "\uD83D\uDCCD ", t.location, fcText(fc[t.id])), React.createElement(TacticLine, {
      t: t,
      team: team
    })));
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
    }, t.type === "jogo" ? "\u26BD vs ".concat(t.opponent) : "🕐", " ", t.time, React.createElement("span", {
      "data-event-date": true,
      style: {
        fontWeight: 600,
        color: T.sub
      }
    }, " \xB7 ", eventDateShort(parseEventDay(t.date)))), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        color: T.sub
      }
    }, "\uD83D\uDCCD ", t.location, fcText(fc[t.id])), React.createElement(TacticLine, {
      t: t,
      team: team
    })));
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
var FinesTab = function FinesTab(_ref99) {
  var team = _ref99.team,
    fines = _ref99.fines,
    members = _ref99.members,
    isAdmin = _ref99.isAdmin,
    onAddFine = _ref99.onAddFine,
    onTogglePaid = _ref99.onTogglePaid,
    onDeleteFine = _ref99.onDeleteFine,
    onEditFine = _ref99.onEditFine,
    onSelectMember = _ref99.onSelectMember;
  var money = useMoney();
  var _useState253 = useState("all"),
    _useState254 = _slicedToArray(_useState253, 2),
    filter = _useState254[0],
    setFilter = _useState254[1];
  var _useState255 = useState({}),
    _useState256 = _slicedToArray(_useState255, 2),
    collapsedMonths = _useState256[0],
    setCollapsedMonths = _useState256[1];
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
  var FineCard = function FineCard(_ref100) {
    var f = _ref100.f;
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
    }, money(f.amount)), isAdmin && React.createElement("button", {
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
    }, "\uD83D\uDCC5 Por m\xEAs")), Object.entries(byMonth).map(function (_ref101) {
      var _ref102 = _slicedToArray(_ref101, 2),
        month = _ref102[0],
        mfines = _ref102[1];
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
      }, "\xB7 ", money(unpaid), " por pagar") : React.createElement("span", {
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
var PresCounter = function PresCounter(_ref103) {
  var count = _ref103.count,
    color = _ref103.color;
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
var PresBar = function PresBar(_ref104) {
  var t = _ref104.t,
    presences = _ref104.presences,
    myMember = _ref104.myMember,
    team = _ref104.team,
    members = _ref104.members,
    onSetPresence = _ref104.onSetPresence,
    isAdmin = _ref104.isAdmin;
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
var EventCard = function EventCard(_ref105) {
  var fc = _ref105.fc,
    t = _ref105.t,
    team = _ref105.team,
    members = _ref105.members,
    isAdmin = _ref105.isAdmin,
    ctxMenu = _ref105.ctxMenu,
    setCtxMenu = _ref105.setCtxMenu,
    onDelete = _ref105.onDelete,
    setEditTarget = _ref105.setEditTarget,
    myMember = _ref105.myMember,
    presences = _ref105.presences,
    onSetPresence = _ref105.onSetPresence;
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
  }, weekday, ", ", t.time, React.createElement("span", {
    "data-event-date": true
  }, " \xB7 ", eventDayMonth(dt))), React.createElement("p", {
    style: {
      margin: "1px 0 0",
      fontSize: 13,
      color: T.sub
    }
  }, "\uD83D\uDCCD ", t.location, fcText(fc)), React.createElement(TacticLine, {
    t: t,
    team: team
  }), t.notes && React.createElement("p", {
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
  }]].map(function (_ref106) {
    var _ref107 = _slicedToArray(_ref106, 2),
      label = _ref107[0],
      action = _ref107[1];
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
var TreinosPage = function TreinosPage(_ref108) {
  var tacticAdmin = _ref108.tacticAdmin,
    team = _ref108.team,
    trainings = _ref108.trainings,
    members = _ref108.members,
    myUserId = _ref108.myUserId,
    isAdmin = _ref108.isAdmin,
    presences = _ref108.presences,
    onSetPresence = _ref108.onSetPresence,
    onAddType = _ref108.onAddType,
    onDelete = _ref108.onDelete,
    onEdit = _ref108.onEdit,
    onLogSession = _ref108.onLogSession,
    onBack = _ref108.onBack,
    modal = _ref108.modal,
    setModal = _ref108.setModal;
  var _useState257 = useState(false),
    _useState258 = _slicedToArray(_useState257, 2),
    showPast = _useState258[0],
    setShowPast = _useState258[1];
  var _useState259 = useState(null),
    _useState260 = _slicedToArray(_useState259, 2),
    filterType = _useState260[0],
    setFilterType = _useState260[1];
  var _useState261 = useState({}),
    _useState262 = _slicedToArray(_useState261, 2),
    collapsedMonths = _useState262[0],
    setCollapsedMonths = _useState262[1];
  var toggleMonth = function toggleMonth(m) {
    return setCollapsedMonths(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, m, !p[m]));
    });
  };
  var _useState263 = useState(null),
    _useState264 = _slicedToArray(_useState263, 2),
    logTarget = _useState264[0],
    setLogTarget = _useState264[1];
  var _useState265 = useState(false),
    _useState266 = _slicedToArray(_useState265, 2),
    showFilter = _useState266[0],
    setShowFilter = _useState266[1];
  var _useState267 = useState(null),
    _useState268 = _slicedToArray(_useState267, 2),
    ctxMenu = _useState268[0],
    setCtxMenu = _useState268[1];
  var _useState269 = useState(null),
    _useState270 = _slicedToArray(_useState269, 2),
    editTarget = _useState270[0],
    setEditTarget = _useState270[1];
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
    }).join(", "), " \xB7 ", t.time), eventDateShort(parseEventDay(nextOccurrence(t.days, t.time))) && React.createElement("p", {
      "data-event-date": true,
      style: {
        margin: 0,
        fontSize: 13,
        fontWeight: 600,
        color: T.sub
      }
    }, "Pr\xF3ximo: ", eventDateShort(parseEventDay(nextOccurrence(t.days, t.time)))), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        color: T.sub
      }
    }, "\uD83D\uDCCD ", t.location, fcText(fc[t.id])), React.createElement(TacticLine, {
      t: t,
      team: team
    }), t.notes && React.createElement("p", {
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
  })), Object.entries(byMonth).map(function (_ref109) {
    var _ref110 = _slicedToArray(_ref109, 2),
      month = _ref110[0],
      evts = _ref110[1];
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
  }, "Tipo de evento"), [[null, "📅 Todos"], ["recorrente", "🔄 Recorrente"], ["treino", "📅 Treino único"], ["jogo", "⚽ Jogo"]].map(function (_ref111) {
    var _ref112 = _slicedToArray(_ref111, 2),
      v = _ref112[0],
      l = _ref112[1];
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
    isAdmin: tacticAdmin,
    team: team,
    onAdd: (function () {
      var _ref113 = _asyncToGenerator(_regenerator().m(function _callee41(t) {
        return _regenerator().w(function (_context41) {
          while (1) switch (_context41.n) {
            case 0:
              _context41.n = 1;
              return onAddType(t);
            case 1:
              setModal(null);
            case 2:
              return _context41.a(2);
          }
        }, _callee41);
      }));
      return function (_x20) {
        return _ref113.apply(this, arguments);
      };
    }()),
    onClose: function onClose() {
      return setModal(null);
    }
  }), modal === "recorrente" && React.createElement(AddRecurringModal, {
    isAdmin: tacticAdmin,
    team: team,
    onAdd: (function () {
      var _ref114 = _asyncToGenerator(_regenerator().m(function _callee42(t) {
        return _regenerator().w(function (_context42) {
          while (1) switch (_context42.n) {
            case 0:
              _context42.n = 1;
              return onAddType(t);
            case 1:
              setModal(null);
            case 2:
              return _context42.a(2);
          }
        }, _callee42);
      }));
      return function (_x21) {
        return _ref114.apply(this, arguments);
      };
    }()),
    onClose: function onClose() {
      return setModal(null);
    }
  }), modal === "jogo" && React.createElement(AddMatchModal, {
    isAdmin: tacticAdmin,
    team: team,
    members: members,
    onAdd: (function () {
      var _ref115 = _asyncToGenerator(_regenerator().m(function _callee43(t) {
        return _regenerator().w(function (_context43) {
          while (1) switch (_context43.n) {
            case 0:
              _context43.n = 1;
              return onAddType(t);
            case 1:
              setModal(null);
            case 2:
              return _context43.a(2);
          }
        }, _callee43);
      }));
      return function (_x22) {
        return _ref115.apply(this, arguments);
      };
    }()),
    onClose: function onClose() {
      return setModal(null);
    }
  }), editTarget && editTarget.type === "treino" && React.createElement(EditSingleTrainingModal, {
    isAdmin: tacticAdmin,
    team: team,
    training: editTarget,
    onEdit: onEdit,
    onClose: function onClose() {
      return setEditTarget(null);
    }
  }), editTarget && editTarget.type === "jogo" && React.createElement(EditMatchModal, {
    isAdmin: tacticAdmin,
    team: team,
    members: members,
    training: editTarget,
    onEdit: onEdit,
    onClose: function onClose() {
      return setEditTarget(null);
    }
  }), editTarget && editTarget.type === "recorrente" && React.createElement(EditRecurringModal, {
    isAdmin: tacticAdmin,
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
var TreasuryTab = function TreasuryTab(_ref116) {
  var team = _ref116.team,
    fines = _ref116.fines,
    members = _ref116.members,
    expenses = _ref116.expenses,
    isAdmin = _ref116.isAdmin,
    onAddExpense = _ref116.onAddExpense,
    onEditExpense = _ref116.onEditExpense,
    onDeleteExpense = _ref116.onDeleteExpense;
  var money = useMoney();
  var sgnC = function sgnC(c) {
    return "".concat(c < 0 ? "-" : "+").concat(money(Math.abs(c) / 100));
  };
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
  var _useState271 = useState({}),
    _useState272 = _slicedToArray(_useState271, 2),
    monthOpen = _useState272[0],
    setMonthOpen = _useState272[1];
  var _useState273 = useState(null),
    _useState274 = _slicedToArray(_useState273, 2),
    editingExp = _useState274[0],
    setEditingExp = _useState274[1];
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
  }, money(balance)), React.createElement("div", {
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
  }, "+", money(income))), React.createElement("div", {
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
  }, "-", money(spent))))), isAdmin && React.createElement("button", {
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
    }, sgnC(g.inC)), " \xB7 ", React.createElement("span", {
      style: {
        color: T.brand
      }
    }, sgnC(-g.outC)))), React.createElement("span", {
      style: {
        fontWeight: 800,
        fontSize: 15,
        color: net >= 0 ? T.green : T.brand,
        flexShrink: 0
      }
    }, sgnC(net))), open && g.txs.map(function (tx, i) {
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
      }, tx.type === "in" ? "+" : "-", money(Math.abs(tx.amount))), canEditExp && tx.type === "out" && React.createElement("div", {
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
          if (window.confirm("Apagar a despesa \"".concat(tx.label, "\" (").concat(money(Math.abs(tx.amount)), ")? N\xE3o tem volta."))) onDeleteExpense(tx.id);
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
var eur = function eur(c, code) {
  return fmtMoney(c / 100, code || "");
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
      sport: x.sport || "",
      currency: curCode(x.currency),
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
var AdminUsersSection = function AdminUsersSection(_ref117) {
  var act = _ref117.act,
    onRetry = _ref117.onRetry,
    StatCard = _ref117.StatCard;
  var _useState275 = useState(""),
    _useState276 = _slicedToArray(_useState275, 2),
    q = _useState276[0],
    setQ = _useState276[1];
  var _useState277 = useState("all"),
    _useState278 = _slicedToArray(_useState277, 2),
    filter = _useState278[0],
    setFilter = _useState278[1];
  var _useState279 = useState({}),
    _useState280 = _slicedToArray(_useState279, 2),
    open = _useState280[0],
    setOpen = _useState280[1];
  var _useState281 = useState({}),
    _useState282 = _slicedToArray(_useState281, 2),
    openM = _useState282[0],
    setOpenM = _useState282[1];
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
  }, chips.map(function (_ref118) {
    var _ref119 = _slicedToArray(_ref118, 2),
      id = _ref119[0],
      label = _ref119[1];
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
  }, filtering ? "Nenhum membro encontrado" : "Sem equipas"), shown.map(function (_ref120) {
    var tm = _ref120.tm,
      ms = _ref120.ms;
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
    }, tm.season ? "".concat(tm.season, " \xB7 ") : "", isFreeSport(tm.sport) ? plural(tm.membersCount, "membro", "membros") : React.createElement(React.Fragment, null, plural(tm.playersCount, "jogador", "jogadores"), " \xB7 ", plural(tm.membersCount, "membro", "membros")))), React.createElement("span", {
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
    }, eur(tm.unpaid, tm.currency)), React.createElement("span", {
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
      }, (m.role === "player" ? roleWord(tm.sport, false, true) : ROLE_PT[m.role]) || m.role || "membro"), React.createElement("span", {
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
      }, plural(m.finesCount, "multa", "multas"), " \xB7 total ", eur(m.total, tm.currency), " \xB7 por pagar ", eur(m.unpaid, tm.currency))), mo && React.createElement("div", {
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
        }, eur(f.amount, tm.currency)), React.createElement("p", {
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
  var _useState283 = useState(readPushFails),
    _useState284 = _slicedToArray(_useState283, 2),
    f = _useState284[0],
    setF = _useState284[1];
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
  return fmtMoney(n, "");
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
var GrowthSection = function GrowthSection(_ref121) {
  var g = _ref121.g,
    onRetry = _ref121.onRetry,
    StatCard = _ref121.StatCard;
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
var LocationSummary = function LocationSummary(_ref122) {
  var locs = _ref122.locs,
    teams = _ref122.teams;
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
var StatusBanner = function StatusBanner(_ref123) {
  var status = _ref123.status,
    where = _ref123.where;
  if (!status) return null;
  return React.createElement("div", {
    role: "status",
    "data-estado-faixa": where,
    style: {
      background: "#B54708",
      color: "#fff",
      borderRadius: 14,
      padding: "12px 14px",
      marginBottom: 14,
      width: "100%",
      boxSizing: "border-box",
      textAlign: "left"
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1.4,
      overflowWrap: "anywhere"
    }
  }, status.texto || STATUS_DEFAULT), React.createElement("p", {
    "data-estado-desde": true,
    style: {
      margin: "4px 0 0",
      fontSize: 13
    }
  }, statusSince(status.desde)));
};
var AdminStatusSection = function AdminStatusSection(_ref124) {
  var token = _ref124.token,
    onSaved = _ref124.onSaved;
  var _useState285 = useState({
      status: "loading",
      row: null,
      error: ""
    }),
    _useState286 = _slicedToArray(_useState285, 2),
    st = _useState286[0],
    setSt = _useState286[1];
  var _useState287 = useState("verde"),
    _useState288 = _slicedToArray(_useState287, 2),
    modo = _useState288[0],
    setModo = _useState288[1];
  var _useState289 = useState(STATUS_DEFAULT),
    _useState290 = _slicedToArray(_useState289, 2),
    texto = _useState290[0],
    setTexto = _useState290[1];
  var _useState291 = useState(false),
    _useState292 = _slicedToArray(_useState291, 2),
    busy = _useState292[0],
    setBusy = _useState292[1];
  var _useState293 = useState({
      kind: "",
      text: ""
    }),
    _useState294 = _slicedToArray(_useState293, 2),
    msg = _useState294[0],
    setMsg = _useState294[1];
  var load = function () {
    var _ref125 = _asyncToGenerator(_regenerator().m(function _callee44() {
      var row, _t47, _t48;
      return _regenerator().w(function (_context44) {
        while (1) switch (_context44.p = _context44.n) {
          case 0:
            setSt({
              status: "loading",
              row: null,
              error: ""
            });
            _context44.p = 1;
            _t47 = parseStatusRow;
            _context44.n = 2;
            return rpcCall("get_app_status", {}, token);
          case 2:
            row = _t47(_context44.v);
            if (row) {
              _context44.n = 3;
              break;
            }
            throw new Error("Resposta inesperada do servidor.");
          case 3:
            setSt({
              status: "ok",
              row: row,
              error: ""
            });
            setModo(row.modo);
            setTexto(row.texto || STATUS_DEFAULT);
            _context44.n = 5;
            break;
          case 4:
            _context44.p = 4;
            _t48 = _context44.v;
            setSt({
              status: "error",
              row: null,
              error: adminErrPt(_t48)
            });
          case 5:
            return _context44.a(2);
        }
      }, _callee44, null, [[1, 4]]);
    }));
    return function load() {
      return _ref125.apply(this, arguments);
    };
  }();
  useEffect(function () {
    load();
  }, []);
  var save = function () {
    var _ref126 = _asyncToGenerator(_regenerator().m(function _callee45() {
      var t, _t49;
      return _regenerator().w(function (_context45) {
        while (1) switch (_context45.p = _context45.n) {
          case 0:
            if (!busy) {
              _context45.n = 1;
              break;
            }
            return _context45.a(2);
          case 1:
            t = statusText(texto) || (modo === "laranja" ? STATUS_DEFAULT : "");
            setBusy(true);
            setMsg({
              kind: "",
              text: ""
            });
            _context45.p = 2;
            _context45.n = 3;
            return rpcCall("set_app_status", {
              p_modo: modo,
              p_texto: t
            }, token);
          case 3:
            setMsg({
              kind: "ok",
              text: "Guardado ✓"
            });
            if (onSaved) onSaved();
            _context45.n = 4;
            return load();
          case 4:
            _context45.n = 6;
            break;
          case 5:
            _context45.p = 5;
            _t49 = _context45.v;
            setMsg({
              kind: "err",
              text: adminErrPt(_t49)
            });
          case 6:
            setBusy(false);
          case 7:
            return _context45.a(2);
        }
      }, _callee45, null, [[2, 5]]);
    }));
    return function save() {
      return _ref126.apply(this, arguments);
    };
  }();
  if (st.status === "loading") return React.createElement("p", {
    style: {
      textAlign: "center",
      color: T.sub,
      padding: "20px 0"
    }
  }, "A carregar\u2026");
  if (st.status === "error") return React.createElement(LoadWarn, {
    id: "estado",
    onRetry: load
  }, "N\xE3o foi poss\xEDvel ler o estado: ", st.error);
  var laranja = modo === "laranja";
  var longo = st.row.modo === "laranja" && statusLong(st.row.desde);
  return React.createElement("div", {
    "data-estado-painel": true,
    style: {
      background: T.card,
      borderRadius: 16,
      padding: "16px"
    }
  }, React.createElement("p", {
    style: {
      margin: "0 0 10px",
      fontSize: 11,
      fontWeight: 700,
      color: T.sub,
      textTransform: "uppercase",
      letterSpacing: 0.5
    }
  }, "Estado da app"), React.createElement("p", {
    "data-estado-atual": true,
    style: {
      margin: "0 0 12px",
      fontSize: 14,
      fontWeight: 700
    }
  }, st.row.modo === "laranja" ? "\uD83D\uDFE0 Laranja ".concat(statusSince(st.row.desde)) : "🟢 Verde: tudo normal"), longo && React.createElement("p", {
    "data-estado-longo": true,
    role: "alert",
    style: {
      margin: "0 0 12px",
      fontSize: 13,
      fontWeight: 700,
      color: "#B42318"
    }
  }, "Ligado h\xE1 mais de ", STATUS_LONG_H, " h. Lembra-te de voltar a verde quando acabar."), React.createElement("button", {
    role: "switch",
    "aria-checked": laranja,
    "data-estado-interruptor": true,
    onClick: function onClick() {
      return setModo(laranja ? "verde" : "laranja");
    },
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      width: "100%",
      minHeight: 44,
      padding: "8px 14px",
      borderRadius: 12,
      border: "2px solid ".concat(laranja ? "#B54708" : T.green),
      background: laranja ? "#FFF1E3" : "#EAF7EE",
      color: T.text,
      fontSize: 15,
      fontWeight: 800,
      cursor: "pointer",
      fontFamily: "inherit",
      marginBottom: 14
    }
  }, React.createElement("span", null, laranja ? "🟠 Laranja (faixa ligada)" : "🟢 Verde (sem faixa)"), React.createElement("span", {
    style: {
      fontSize: 12,
      color: T.sub,
      fontWeight: 700
    }
  }, laranja ? "Tocar para voltar a verde" : "Tocar para ligar laranja")), React.createElement(FL, null, "Texto da faixa (", statusText(texto).length, "/", STATUS_MAX, ")"), React.createElement("textarea", {
    "data-estado-texto": true,
    value: texto,
    maxLength: STATUS_MAX,
    rows: 4,
    onChange: function onChange(e) {
      return setTexto(e.target.value);
    },
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
      marginBottom: 14,
      resize: "vertical"
    }
  }), msg.text && React.createElement("p", {
    role: msg.kind === "err" ? "alert" : "status",
    style: {
      margin: "0 0 10px",
      fontSize: 13,
      fontWeight: 700,
      color: msg.kind === "err" ? "#B42318" : T.green
    }
  }, msg.text), React.createElement(PrimaryBtn, {
    onClick: save,
    disabled: busy,
    color: T.navy
  }, busy ? "A guardar…" : "Guardar"));
};
var AppAdminTab = function AppAdminTab(_ref127) {
  var token = _ref127.token,
    onBack = _ref127.onBack,
    onOpenTeam = _ref127.onOpenTeam,
    initialSection = _ref127.initialSection,
    initialTeams = _ref127.initialTeams,
    onStatusSaved = _ref127.onStatusSaved;
  var _useState295 = useState(null),
    _useState296 = _slicedToArray(_useState295, 2),
    stats = _useState296[0],
    setStats = _useState296[1];
  var _useState297 = useState(null),
    _useState298 = _slicedToArray(_useState297, 2),
    updatedAt = _useState298[0],
    setUpdatedAt = _useState298[1];
  var _useState299 = useState(Array.isArray(initialTeams) ? initialTeams : []),
    _useState300 = _slicedToArray(_useState299, 2),
    teams = _useState300[0],
    setTeams = _useState300[1];
  var _useState301 = useState(initialSection || "stats"),
    _useState302 = _slicedToArray(_useState301, 2),
    section = _useState302[0],
    setSection = _useState302[1];
  var _useState303 = useState(null),
    _useState304 = _slicedToArray(_useState303, 2),
    selectedTeam = _useState304[0],
    setSelectedTeam = _useState304[1];
  var _useState305 = useState(!(Array.isArray(initialTeams) && initialTeams.length)),
    _useState306 = _slicedToArray(_useState305, 2),
    loading = _useState306[0],
    setLoading = _useState306[1];
  var _useState307 = useState({
      status: "idle",
      data: null,
      error: ""
    }),
    _useState308 = _slicedToArray(_useState307, 2),
    act = _useState308[0],
    setAct = _useState308[1];
  var loadActivity = function () {
    var _ref128 = _asyncToGenerator(_regenerator().m(function _callee46() {
      var _yield$Promise$all, _yield$Promise$all2, tot, ov, _t50;
      return _regenerator().w(function (_context46) {
        while (1) switch (_context46.p = _context46.n) {
          case 0:
            setAct({
              status: "loading",
              data: null,
              error: ""
            });
            _context46.p = 1;
            _context46.n = 2;
            return Promise.all([rpcCall('get_app_activity_totals', {}, token), rpcCall('get_admin_teams_overview', {}, token)]);
          case 2:
            _yield$Promise$all = _context46.v;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            tot = _yield$Promise$all2[0];
            ov = _yield$Promise$all2[1];
            setAct({
              status: "ok",
              data: parseAdminUsers(tot, ov),
              error: ""
            });
            _context46.n = 4;
            break;
          case 3:
            _context46.p = 3;
            _t50 = _context46.v;
            setAct({
              status: "error",
              data: null,
              error: adminErrPt(_t50)
            });
          case 4:
            return _context46.a(2);
        }
      }, _callee46, null, [[1, 3]]);
    }));
    return function loadActivity() {
      return _ref128.apply(this, arguments);
    };
  }();
  useEffect(function () {
    if (section === "users" && act.status === "idle") loadActivity();
  }, [section]);
  var _useState309 = useState({
      status: "idle",
      data: null,
      error: ""
    }),
    _useState310 = _slicedToArray(_useState309, 2),
    growth = _useState310[0],
    setGrowth = _useState310[1];
  var loadGrowth = function () {
    var _ref129 = _asyncToGenerator(_regenerator().m(function _callee47() {
      var _t51, _t52, _t53, _t54;
      return _regenerator().w(function (_context47) {
        while (1) switch (_context47.p = _context47.n) {
          case 0:
            setGrowth({
              status: "loading",
              data: null,
              error: ""
            });
            _context47.p = 1;
            _t51 = setGrowth;
            _t52 = parseGrowth;
            _context47.n = 2;
            return rpcCall('get_app_growth_stats', {}, token);
          case 2:
            _t53 = _t52(_context47.v);
            _t51({
              status: "ok",
              data: _t53,
              error: ""
            });
            _context47.n = 4;
            break;
          case 3:
            _context47.p = 3;
            _t54 = _context47.v;
            setGrowth({
              status: "error",
              data: null,
              error: adminErrPt(_t54)
            });
          case 4:
            return _context47.a(2);
        }
      }, _callee47, null, [[1, 3]]);
    }));
    return function loadGrowth() {
      return _ref129.apply(this, arguments);
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
  var _useState311 = useState({
      status: "idle",
      data: null,
      error: ""
    }),
    _useState312 = _slicedToArray(_useState311, 2),
    locs = _useState312[0],
    setLocs = _useState312[1];
  var _useState313 = useState(""),
    _useState314 = _slicedToArray(_useState313, 2),
    teamQ = _useState314[0],
    setTeamQ = _useState314[1];
  var loadLocs = function () {
    var _ref130 = _asyncToGenerator(_regenerator().m(function _callee48() {
      var _t55, _t56, _t57, _t58;
      return _regenerator().w(function (_context48) {
        while (1) switch (_context48.p = _context48.n) {
          case 0:
            setLocs({
              status: "loading",
              data: null,
              error: ""
            });
            _context48.p = 1;
            _t55 = setLocs;
            _t56 = parseLocations;
            _context48.n = 2;
            return rpcCall('get_admin_teams_locations', {}, token);
          case 2:
            _t57 = _t56(_context48.v);
            _t55({
              status: "ok",
              data: _t57,
              error: ""
            });
            _context48.n = 4;
            break;
          case 3:
            _context48.p = 3;
            _t58 = _context48.v;
            setLocs({
              status: "error",
              data: null,
              error: adminErrPt(_t58)
            });
          case 4:
            return _context48.a(2);
        }
      }, _callee48, null, [[1, 3]]);
    }));
    return function loadLocs() {
      return _ref130.apply(this, arguments);
    };
  }();
  useEffect(function () {
    if (section === "teams" && locs.status === "idle") loadLocs();
  }, [section]);
  var _useState315 = useState(""),
    _useState316 = _slicedToArray(_useState315, 2),
    loadErr = _useState316[0],
    setLoadErr = _useState316[1];
  var _useState317 = useState(0),
    _useState318 = _slicedToArray(_useState317, 2),
    loadTick = _useState318[0],
    setLoadTick = _useState318[1];
  useEffect(function () {
    var load = function () {
      var _ref131 = _asyncToGenerator(_regenerator().m(function _callee49() {
        var rpc, _yield$Promise$all3, _yield$Promise$all4, sr, tr, _t59, _t60, _t61, _t62;
        return _regenerator().w(function (_context49) {
          while (1) switch (_context49.p = _context49.n) {
            case 0:
              if (loadTick > 0) {
                setLoading(true);
                setLoadErr("");
              }
              _context49.p = 1;
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
              _context49.n = 2;
              return Promise.all([rpc("get_app_admin_stats"), rpc("get_all_teams_admin")]);
            case 2:
              _yield$Promise$all3 = _context49.v;
              _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 2);
              sr = _yield$Promise$all4[0];
              tr = _yield$Promise$all4[1];
              if (!sr.ok) {
                _context49.n = 4;
                break;
              }
              _t59 = setStats;
              _context49.n = 3;
              return sr.json();
            case 3:
              _t59(_context49.v);
            case 4:
              if (!tr.ok) {
                _context49.n = 7;
                break;
              }
              _t60 = setTeams;
              _context49.n = 5;
              return tr.json();
            case 5:
              _t61 = _context49.v;
              if (_t61) {
                _context49.n = 6;
                break;
              }
              _t61 = [];
            case 6:
              _t60(_t61);
            case 7:
              if (!sr.ok || !tr.ok) setLoadErr(adminErrPt(new Error("erro ".concat(!sr.ok ? sr.status : tr.status))));
              setUpdatedAt(new Date());
              _context49.n = 9;
              break;
            case 8:
              _context49.p = 8;
              _t62 = _context49.v;
              console.error(_t62);
              setLoadErr(adminErrPt(_t62));
            case 9:
              setLoading(false);
            case 10:
              return _context49.a(2);
          }
        }, _callee49, null, [[1, 8]]);
      }));
      return function load() {
        return _ref131.apply(this, arguments);
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
    var rows = [["👥", "Membros", t.members_count], ["📅", "Treinos e jogos", t.trainings_count], ["🟥", "Multas", t.fines_count], ["💶", "Total de multas", has(t.fines_total) ? fmtMoney(t.fines_total, curCode(t.currency)) : null], ["💸", "Por pagar", has(t.unpaid_total) ? fmtMoney(t.unpaid_total, curCode(t.currency)) : null], ["🕒", "Última atividade", lastAct ? fmtDay(lastAct) : null]];
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
    }, "Abrir equipa"), rows.map(function (_ref132) {
      var _ref133 = _slicedToArray(_ref132, 3),
        icon = _ref133[0],
        label = _ref133[1],
        val = _ref133[2];
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
  var StatCard = function StatCard(_ref134) {
    var label = _ref134.label,
      value = _ref134.value,
      color = _ref134.color,
      _ref134$cols = _ref134.cols,
      cols = _ref134$cols === void 0 ? 2 : _ref134$cols,
      sub = _ref134.sub;
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
  var tabs = [["stats", "📊 Stats"], ["teams", "⚽ Equipas"], ["users", "👥 Users"], ["estado", "🚦 Estado"]];
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
  }, tabs.map(function (_ref135) {
    var _ref136 = _slicedToArray(_ref135, 2),
      id = _ref136[0],
      label = _ref136[1];
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
    label: "Total",
    value: fmtMoney(stats.fines_total, ""),
    color: T.brand
  }), React.createElement(StatCard, {
    label: "Por pagar",
    value: fmtMoney(stats.fines_unpaid, ""),
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
    }, [["👥", t.members_count, "membro", "membros"], ["🟥", t.fines_count, "multa", "multas"], ["💸", fmtMoney(t.unpaid_total, curCode(t.currency)), "por pagar", "por pagar"], ["📅", t.trainings_count, "treino", "treinos"]].map(function (_ref137) {
      var _ref138 = _slicedToArray(_ref137, 4),
        icon = _ref138[0],
        val = _ref138[1],
        one = _ref138[2],
        many = _ref138[3];
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
  }), section === "estado" && React.createElement(AdminStatusSection, {
    token: token,
    onSaved: onStatusSaved
  })));
};
var LoadWarn = function LoadWarn(_ref139) {
  var id = _ref139.id,
    children = _ref139.children,
    onRetry = _ref139.onRetry,
    _ref139$retryLabel = _ref139.retryLabel,
    retryLabel = _ref139$retryLabel === void 0 ? "Tentar novamente" : _ref139$retryLabel;
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
  var _useState319 = useState(function () {
      try {
        return window.localStorage.getItem(INVITE_SEEN_KEY) === season;
      } catch (e) {
        return false;
      }
    }),
    _useState320 = _slicedToArray(_useState319, 2),
    seen = _useState320[0],
    setSeen = _useState320[1];
  var _useState321 = useState(null),
    _useState322 = _slicedToArray(_useState321, 2),
    mode = _useState322[0],
    setMode = _useState322[1];
  if (seen) return null;
  var mark = function mark() {
    try {
      window.localStorage.setItem(INVITE_SEEN_KEY, season);
    } catch (e) {}
    setSeen(true);
  };
  var share = function () {
    var _ref140 = _asyncToGenerator(_regenerator().m(function _callee50() {
      var _t63, _t64;
      return _regenerator().w(function (_context50) {
        while (1) switch (_context50.p = _context50.n) {
          case 0:
            _context50.p = 0;
            if (!navigator.share) {
              _context50.n = 2;
              break;
            }
            _context50.n = 1;
            return navigator.share({
              title: "Multeam",
              text: INVITE_MSG,
              url: APP_URL
            });
          case 1:
            mark();
            return _context50.a(2);
          case 2:
            _context50.n = 4;
            break;
          case 3:
            _context50.p = 3;
            _t63 = _context50.v;
            if (!(_t63 && _t63.name === "AbortError")) {
              _context50.n = 4;
              break;
            }
            return _context50.a(2);
          case 4:
            _context50.p = 4;
            if (!(navigator.clipboard && navigator.clipboard.writeText)) {
              _context50.n = 6;
              break;
            }
            _context50.n = 5;
            return navigator.clipboard.writeText("".concat(INVITE_MSG, " ").concat(APP_URL));
          case 5:
            setMode("copiado");
            return _context50.a(2);
          case 6:
            _context50.n = 8;
            break;
          case 7:
            _context50.p = 7;
            _t64 = _context50.v;
          case 8:
            setMode("manual");
          case 9:
            return _context50.a(2);
        }
      }, _callee50, null, [[4, 7], [0, 3]]);
    }));
    return function share() {
      return _ref140.apply(this, arguments);
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
var SeasonFeedbackCard = function SeasonFeedbackCard(_ref141) {
  var token = _ref141.token,
    teamId = _ref141.teamId;
  var season = feedbackSeason(todayLocal());
  var _useState323 = useState(function () {
      try {
        return !!season && window.localStorage.getItem(FEEDBACK_SEEN_KEY) === season;
      } catch (e) {
        return false;
      }
    }),
    _useState324 = _slicedToArray(_useState323, 2),
    hidden = _useState324[0],
    setHidden = _useState324[1];
  var _useState325 = useState({
      status: "loading",
      mine: null,
      error: ""
    }),
    _useState326 = _slicedToArray(_useState325, 2),
    st = _useState326[0],
    setSt = _useState326[1];
  var _useState327 = useState(""),
    _useState328 = _slicedToArray(_useState327, 2),
    mood = _useState328[0],
    setMood = _useState328[1];
  var _useState329 = useState(""),
    _useState330 = _slicedToArray(_useState329, 2),
    text = _useState330[0],
    setText = _useState330[1];
  var _useState331 = useState(false),
    _useState332 = _slicedToArray(_useState331, 2),
    editing = _useState332[0],
    setEditing = _useState332[1];
  var _useState333 = useState(false),
    _useState334 = _slicedToArray(_useState333, 2),
    busy = _useState334[0],
    setBusy = _useState334[1];
  var _useState335 = useState(""),
    _useState336 = _slicedToArray(_useState335, 2),
    err = _useState336[0],
    setErr = _useState336[1];
  var flight = React.useRef(false);
  var load = function () {
    var _ref142 = _asyncToGenerator(_regenerator().m(function _callee51() {
      var r, row, _t65;
      return _regenerator().w(function (_context51) {
        while (1) switch (_context51.p = _context51.n) {
          case 0:
            setSt(function (s0) {
              return _objectSpread(_objectSpread({}, s0), {}, {
                status: "loading",
                error: ""
              });
            });
            _context51.p = 1;
            _context51.n = 2;
            return rpcCall("my_feedback", {
              p_season: season
            }, token);
          case 2:
            r = _context51.v;
            row = Array.isArray(r) ? r[0] : r;
            setSt({
              status: "ok",
              mine: row && row.mood ? row : null,
              error: ""
            });
            _context51.n = 4;
            break;
          case 3:
            _context51.p = 3;
            _t65 = _context51.v;
            setSt(feedbackUnavailable(_t65) ? {
              status: "off",
              mine: null,
              error: ""
            } : {
              status: "error",
              mine: null,
              error: errPt(_t65)
            });
          case 4:
            return _context51.a(2);
        }
      }, _callee51, null, [[1, 3]]);
    }));
    return function load() {
      return _ref142.apply(this, arguments);
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
    var _ref143 = _asyncToGenerator(_regenerator().m(function _callee52() {
      var r, row, _t66;
      return _regenerator().w(function (_context52) {
        while (1) switch (_context52.p = _context52.n) {
          case 0:
            if (!(flight.current || !mood)) {
              _context52.n = 1;
              break;
            }
            return _context52.a(2);
          case 1:
            flight.current = true;
            setBusy(true);
            setErr("");
            _context52.p = 2;
            _context52.n = 3;
            return rpcCall("save_feedback", {
              p_season: season,
              p_mood: mood,
              p_text: text.trim() || null,
              p_team_id: teamId || null
            }, token);
          case 3:
            r = _context52.v;
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
            _context52.n = 5;
            break;
          case 4:
            _context52.p = 4;
            _t66 = _context52.v;
            setErr(errPt(_t66));
          case 5:
            setBusy(false);
            flight.current = false;
          case 6:
            return _context52.a(2);
        }
      }, _callee52, null, [[2, 4]]);
    }));
    return function save() {
      return _ref143.apply(this, arguments);
    };
  }();
  var remove = function () {
    var _ref144 = _asyncToGenerator(_regenerator().m(function _callee53() {
      var _t67;
      return _regenerator().w(function (_context53) {
        while (1) switch (_context53.p = _context53.n) {
          case 0:
            if (!flight.current) {
              _context53.n = 1;
              break;
            }
            return _context53.a(2);
          case 1:
            if (window.confirm("Apagar a tua opinião?")) {
              _context53.n = 2;
              break;
            }
            return _context53.a(2);
          case 2:
            flight.current = true;
            setBusy(true);
            setErr("");
            _context53.p = 3;
            _context53.n = 4;
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
            _context53.n = 6;
            break;
          case 5:
            _context53.p = 5;
            _t67 = _context53.v;
            setErr(errPt(_t67));
          case 6:
            setBusy(false);
            flight.current = false;
          case 7:
            return _context53.a(2);
        }
      }, _callee53, null, [[3, 5]]);
    }));
    return function remove() {
      return _ref144.apply(this, arguments);
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
  var _useState337 = useState({
      status: "idle",
      rows: [],
      error: ""
    }),
    _useState338 = _slicedToArray(_useState337, 2),
    st = _useState338[0],
    setSt = _useState338[1];
  var load = function () {
    var _ref145 = _asyncToGenerator(_regenerator().m(function _callee54() {
      var r, _t68;
      return _regenerator().w(function (_context54) {
        while (1) switch (_context54.p = _context54.n) {
          case 0:
            setSt(function (s0) {
              return _objectSpread(_objectSpread({}, s0), {}, {
                status: "loading",
                error: ""
              });
            });
            _context54.p = 1;
            _context54.n = 2;
            return rpcCall("get_app_feedback", {}, token);
          case 2:
            r = _context54.v;
            setSt({
              status: "ok",
              rows: Array.isArray(r) ? r : [],
              error: ""
            });
            _context54.n = 4;
            break;
          case 3:
            _context54.p = 3;
            _t68 = _context54.v;
            setSt(feedbackUnavailable(_t68) ? {
              status: "off",
              rows: [],
              error: ""
            } : {
              status: "error",
              rows: [],
              error: adminErrPt(_t68)
            });
          case 4:
            return _context54.a(2);
        }
      }, _callee54, null, [[1, 3]]);
    }));
    return function load() {
      return _ref145.apply(this, arguments);
    };
  }();
  return [st, load];
};
var FeedbackSection = function FeedbackSection(_ref146) {
  var token = _ref146.token;
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
var FeedbackList = function FeedbackList(_ref147) {
  var st = _ref147.st,
    onRetry = _ref147.onRetry;
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
  var _useState339 = useState(false),
    _useState340 = _slicedToArray(_useState339, 2),
    open = _useState340[0],
    setOpen = _useState340[1];
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
var GeneralTab = function GeneralTab(_ref148) {
  var activeTeam = _ref148.activeTeam,
    user = _ref148.user,
    myUserId = _ref148.myUserId,
    teams = _ref148.teams,
    members = _ref148.members,
    onEditProfile = _ref148.onEditProfile,
    onManageTeam = _ref148.onManageTeam,
    onCreateTeam = _ref148.onCreateTeam,
    onJoinTeam = _ref148.onJoinTeam,
    onLeaveTeam = _ref148.onLeaveTeam,
    onLogout = _ref148.onLogout,
    onAdminOpen = _ref148.onAdminOpen,
    isAppAdmin = _ref148.isAppAdmin,
    token = _ref148.token,
    readOnly = _ref148.readOnly,
    myClaims = _ref148.myClaims,
    onEditClaimNote = _ref148.onEditClaimNote,
    onCancelClaim = _ref148.onCancelClaim,
    onAnswerClaim = _ref148.onAnswerClaim,
    claimCounts = _ref148.claimCounts,
    pushIssue = _ref148.pushIssue,
    onRetryPush = _ref148.onRetryPush,
    claimsWarn = _ref148.claimsWarn,
    onRetryClaims = _ref148.onRetryClaims;
  var myTeams = readOnly ? teams : teams.filter(function (t) {
    return members.some(function (m) {
      return m.teamId === t.id && m.userId === myUserId;
    }) || t.createdBy === myUserId;
  });
  var myAge = age(user.birthday);
  var _useState341 = useState(0),
    _useState342 = _slicedToArray(_useState341, 2),
    tapCount = _useState342[0],
    setTapCount = _useState342[1];
  var _useState343 = useState(null),
    _useState344 = _slicedToArray(_useState343, 2),
    showMembers = _useState344[0],
    setShowMembers = _useState344[1];
  var _useState345 = useState(""),
    _useState346 = _slicedToArray(_useState345, 2),
    membersWarn = _useState346[0],
    setMembersWarn = _useState346[1];
  var _useState347 = useState([]),
    _useState348 = _slicedToArray(_useState347, 2),
    teamMembers = _useState348[0],
    setTeamMembers = _useState348[1];
  var _useState349 = useState(false),
    _useState350 = _slicedToArray(_useState349, 2),
    loadingMembers = _useState350[0],
    setLoadingMembers = _useState350[1];
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
    var _ref149 = _asyncToGenerator(_regenerator().m(function _callee55(teamId) {
      var mRaw, uids, profilesMap, profs, direct, merged, _t69, _t70;
      return _regenerator().w(function (_context55) {
        while (1) switch (_context55.p = _context55.n) {
          case 0:
            setShowMembers(teamId);
            if (!readOnly) {
              _context55.n = 1;
              break;
            }
            setTeamMembers(members.filter(function (m) {
              return m.teamId === teamId;
            }));
            setLoadingMembers(false);
            return _context55.a(2);
          case 1:
            setLoadingMembers(true);
            setMembersWarn("");
            _context55.p = 2;
            _context55.n = 3;
            return api.get("team_members?team_id=eq.".concat(teamId, "&select=*"), token);
          case 3:
            mRaw = _context55.v;
            uids = mRaw.map(function (m) {
              return m.user_id;
            }).filter(Boolean);
            profilesMap = {};
            if (!(uids.length > 0)) {
              _context55.n = 10;
              break;
            }
            profs = null;
            _context55.p = 4;
            _context55.n = 5;
            return rpcCall('get_team_profiles', {
              p_team_id: teamId
            }, token);
          case 5:
            profs = _context55.v;
            _context55.n = 7;
            break;
          case 6:
            _context55.p = 6;
            _t69 = _context55.v;
            console.warn('get_team_profiles failed:', _t69 && _t69.message);
          case 7:
            if (!Array.isArray(profs)) {
              _context55.n = 8;
              break;
            }
            profs.forEach(function (p) {
              profilesMap[p.id] = p;
            });
            _context55.n = 10;
            break;
          case 8:
            setMembersWarn(PROFILES_WARN);
            _context55.n = 9;
            return api.get("profiles?id=in.(".concat(uids.join(','), ")"), token).catch(function () {
              return null;
            });
          case 9:
            direct = _context55.v;
            if (Array.isArray(direct)) direct.forEach(function (p) {
              profilesMap[p.id] = p;
            });
          case 10:
            merged = mRaw.map(function (m) {
              var _teams$find;
              return _objectSpread({}, aMember(_objectSpread(_objectSpread({}, m), {}, {
                profiles: profilesMap[m.user_id] || null
              }), (_teams$find = teams.find(function (t) {
                return t.id === teamId;
              })) === null || _teams$find === void 0 ? void 0 : _teams$find.sport));
            });
            setTeamMembers(merged);
            _context55.n = 12;
            break;
          case 11:
            _context55.p = 11;
            _t70 = _context55.v;
            console.error(_t70);
            setMembersWarn("Não foi possível carregar os membros da equipa.");
          case 12:
            setLoadingMembers(false);
          case 13:
            return _context55.a(2);
        }
      }, _callee55, null, [[4, 6], [2, 11]]);
    }));
    return function openTeamMembers(_x23) {
      return _ref149.apply(this, arguments);
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
      }, m.role === "admin" ? "Admin" : roleWord(t === null || t === void 0 ? void 0 : t.sport))), m.position && React.createElement("p", {
        style: {
          margin: "0 0 3px",
          fontSize: 13,
          color: T.sub
        }
      }, posIcon(t), " ", m.position), m.phone && React.createElement("p", {
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
  }, [["".concat(posIcon(activeTeam), " Posi\xE7\xE3o"), user.position || "—", false], ["📱 Telefone", user.phone || "—", false], ["🎂 Aniversário", user.birthday ? "".concat(fmtDate(user.birthday)).concat(myAge ? " \xB7 ".concat(myAge, " anos") : "") : "—", true]].map(function (_ref150) {
    var _ref151 = _slicedToArray(_ref150, 3),
      l = _ref151[0],
      v = _ref151[1],
      full = _ref151[2];
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
      role: admin ? "admin" : "player",
      sport: t.sport
    }), React.createElement("span", {
      style: {
        fontSize: 12,
        color: T.sub
      }
    }, t.season)), t.tactic && React.createElement("p", {
      "data-tactic-line": true,
      style: {
        margin: "3px 0 0",
        fontSize: 13,
        color: T.sub
      }
    }, "\uD83C\uDFAF T\xE1tica: ", React.createElement("b", {
      style: {
        color: T.text,
        fontWeight: 800
      }
    }, t.tactic))), admin && React.createElement("button", {
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
var EmojiPicker = function EmojiPicker(_ref152) {
  var value = _ref152.value,
    onChange = _ref152.onChange,
    color = _ref152.color;
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
var FineTypesManager = function FineTypesManager(_ref153) {
  var team = _ref153.team,
    fineTypes = _ref153.fineTypes,
    onAdded = _ref153.onAdded,
    onDeleted = _ref153.onDeleted,
    onUpdated = _ref153.onUpdated,
    token = _ref153.token;
  var money = useMoney();
  var _useState351 = useState(false),
    _useState352 = _slicedToArray(_useState351, 2),
    adding = _useState352[0],
    setAdding = _useState352[1];
  var _useState353 = useState(null),
    _useState354 = _slicedToArray(_useState353, 2),
    editingId = _useState354[0],
    setEditingId = _useState354[1];
  var _useState355 = useState(""),
    _useState356 = _slicedToArray(_useState355, 2),
    name = _useState356[0],
    setName = _useState356[1];
  var _useState357 = useState(""),
    _useState358 = _slicedToArray(_useState357, 2),
    amount = _useState358[0],
    setAmount = _useState358[1];
  var _useState359 = useState(null),
    _useState360 = _slicedToArray(_useState359, 2),
    custom = _useState360[0],
    setCustom = _useState360[1];
  var _useState361 = useState(null),
    _useState362 = _slicedToArray(_useState361, 2),
    editCustom = _useState362[0],
    setEditCustom = _useState362[1];
  var _useState363 = useState(""),
    _useState364 = _slicedToArray(_useState363, 2),
    editName = _useState364[0],
    setEditName = _useState364[1];
  var _useState365 = useState(""),
    _useState366 = _slicedToArray(_useState365, 2),
    editAmount = _useState366[0],
    setEditAmount = _useState366[1];
  var _useState367 = useState(""),
    _useState368 = _slicedToArray(_useState367, 2),
    err = _useState368[0],
    setErr = _useState368[1];
  var _useState369 = useState(false),
    _useState370 = _slicedToArray(_useState369, 2),
    saving = _useState370[0],
    setSaving = _useState370[1];
  var tf = fineTypes.filter(function (f) {
    return f.teamId === team.id;
  });
  var save = function () {
    var _ref154 = _asyncToGenerator(_regenerator().m(function _callee56() {
      var ft, _t71, _t72;
      return _regenerator().w(function (_context56) {
        while (1) switch (_context56.p = _context56.n) {
          case 0:
            if (!(!name.trim() || !amount)) {
              _context56.n = 1;
              break;
            }
            return _context56.a(2);
          case 1:
            setSaving(true);
            setErr("");
            _context56.p = 2;
            _t71 = needRows;
            _context56.n = 3;
            return api.post("fine_types", {
              team_id: team.id,
              name: name.trim(),
              amount: Number(amount),
              emoji: storableIcon(resolveTypeIcon(name.trim(), custom))
            }, token);
          case 3:
            ft = _t71(_context56.v)[0];
            onAdded(ft);
            setName("");
            setAmount("");
            setCustom(null);
            setAdding(false);
            _context56.n = 5;
            break;
          case 4:
            _context56.p = 4;
            _t72 = _context56.v;
            setErr(errPt(_t72));
          case 5:
            setSaving(false);
          case 6:
            return _context56.a(2);
        }
      }, _callee56, null, [[2, 4]]);
    }));
    return function save() {
      return _ref154.apply(this, arguments);
    };
  }();
  var startEdit = function startEdit(ft) {
    setEditingId(ft.id);
    setEditCustom(ft.emoji === iconForFine(ft.name, '') ? null : ft.emoji);
    setEditName(ft.name);
    setEditAmount(String(ft.amount));
  };
  var saveEdit = function () {
    var _ref155 = _asyncToGenerator(_regenerator().m(function _callee57(id) {
      var em, _t73, _t74;
      return _regenerator().w(function (_context57) {
        while (1) switch (_context57.p = _context57.n) {
          case 0:
            if (!(!editName.trim() || !editAmount)) {
              _context57.n = 1;
              break;
            }
            return _context57.a(2);
          case 1:
            setSaving(true);
            _context57.p = 2;
            em = resolveTypeIcon(editName.trim(), editCustom);
            _t73 = needRows;
            _context57.n = 3;
            return api.patch("fine_types?id=eq.".concat(id), {
              emoji: storableIcon(em),
              name: editName.trim(),
              amount: Number(editAmount)
            }, token);
          case 3:
            _t73(_context57.v);
            onUpdated(id, {
              emoji: em,
              name: editName.trim(),
              amount: Number(editAmount)
            });
            setEditingId(null);
            _context57.n = 5;
            break;
          case 4:
            _context57.p = 4;
            _t74 = _context57.v;
            setErr(errPt(_t74));
          case 5:
            setSaving(false);
          case 6:
            return _context57.a(2);
        }
      }, _callee57, null, [[2, 4]]);
    }));
    return function saveEdit(_x24) {
      return _ref155.apply(this, arguments);
    };
  }();
  var del = function () {
    var _ref156 = _asyncToGenerator(_regenerator().m(function _callee58(id) {
      var still, _t75;
      return _regenerator().w(function (_context58) {
        while (1) switch (_context58.p = _context58.n) {
          case 0:
            _context58.p = 0;
            _context58.n = 1;
            return api.del("fine_types?id=eq.".concat(id), token);
          case 1:
            _context58.n = 2;
            return api.get("fine_types?id=eq.".concat(id, "&select=id"), token);
          case 2:
            still = _context58.v;
            if (!still.length) {
              _context58.n = 3;
              break;
            }
            throw new Error("sem permissão (o registo continua a existir)");
          case 3:
            onDeleted(id);
            _context58.n = 5;
            break;
          case 4:
            _context58.p = 4;
            _t75 = _context58.v;
            setErr(errPt(_t75));
          case 5:
            return _context58.a(2);
        }
      }, _callee58, null, [[0, 4]]);
    }));
    return function del(_x25) {
      return _ref156.apply(this, arguments);
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
    }, money(ft.amount))), React.createElement("button", {
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
    }), React.createElement(FL, null, "Valor (", money.sym, ")"), React.createElement(FI, {
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
    placeholder: "Valor em ".concat(money.sym, " (ex: 5)")
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
var TeamDataSection = function TeamDataSection(_ref157) {
  var team = _ref157.team,
    onSave = _ref157.onSave;
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
      postal: team.postal || "",
      tactic: team.tactic || ""
    };
  };
  var _useState371 = useState(false),
    _useState372 = _slicedToArray(_useState371, 2),
    editing = _useState372[0],
    setEditing = _useState372[1];
  var _useState373 = useState(init),
    _useState374 = _slicedToArray(_useState373, 2),
    f = _useState374[0],
    setF = _useState374[1];
  var _useState375 = useState(false),
    _useState376 = _slicedToArray(_useState375, 2),
    busy = _useState376[0],
    setBusy = _useState376[1];
  var _useState377 = useState(""),
    _useState378 = _slicedToArray(_useState377, 2),
    err = _useState378[0],
    setErr = _useState378[1];
  var _useState379 = useState(function () {
      return sportSplit(team.sport).sel;
    }),
    _useState380 = _slicedToArray(_useState379, 2),
    sportSel = _useState380[0],
    setSportSel = _useState380[1];
  var _useState381 = useState(function () {
      return sportSplit(team.sport).text;
    }),
    _useState382 = _slicedToArray(_useState381, 2),
    sportOther = _useState382[0],
    setSportOther = _useState382[1];
  var _useState383 = useState(null),
    _useState384 = _slicedToArray(_useState383, 2),
    curAsk = _useState384[0],
    setCurAsk = _useState384[1];
  var set = function set(k, v) {
    return setF(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, k, v));
    });
  };
  var nameIssue = teamNameIssue(f.name);
  var legacyOutro = normSport(team.sport).toLowerCase() === SPORT_OTHER.toLowerCase();
  var sportIssue = sportSel === SPORT_OTHER ? sportOtherIssue(sportOther, legacyOutro) : "";
  var nameOk = !nameIssue,
    seasonOk = f.season.trim().length > 0;
  var canSave = nameOk && seasonOk && !sportIssue && !busy;
  var open = function open() {
    setCurAsk(null);
    setF(init());
    var sp = sportSplit(team.sport);
    setSportSel(sp.sel);
    setSportOther(sp.text);
    setErr("");
    setEditing(true);
  };
  var save = function () {
    var _ref158 = _asyncToGenerator(_regenerator().m(function _callee59() {
      var cur, next, patch, _t76;
      return _regenerator().w(function (_context59) {
        while (1) switch (_context59.p = _context59.n) {
          case 0:
            if (canSave) {
              _context59.n = 1;
              break;
            }
            return _context59.a(2);
          case 1:
            cur = init(), next = _objectSpread(_objectSpread({}, f), {}, {
              name: normTeamName(f.name),
              season: f.season.trim(),
              city: normPlace(f.city),
              postal: normPlace(f.postal),
              tactic: normTactic(f.tactic),
              sport: sportJoin(sportSel, sportOther, team.sport || SPORT_OTHER)
            });
            patch = {};
            Object.keys(next).forEach(function (k) {
              if (next[k] !== cur[k] && !((k === "city" || k === "postal") && next[k] === normPlace(cur[k]))) patch[k] = next[k];
            });
            if (patch.tactic !== undefined) patch.tactic = patch.tactic || null;
            if (Object.keys(patch).length) {
              _context59.n = 2;
              break;
            }
            setEditing(false);
            return _context59.a(2);
          case 2:
            setBusy(true);
            setErr("");
            _context59.p = 3;
            _context59.n = 4;
            return onSave(team.id, patch);
          case 4:
            setEditing(false);
            _context59.n = 6;
            break;
          case 5:
            _context59.p = 5;
            _t76 = _context59.v;
            setErr(errPt(_t76, "Erro ao guardar"));
          case 6:
            setBusy(false);
          case 7:
            return _context59.a(2);
        }
      }, _callee59, null, [[3, 5]]);
    }));
    return function save() {
      return _ref158.apply(this, arguments);
    };
  }();
  var Val = function Val(_ref159) {
    var label = _ref159.label,
      v = _ref159.v;
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
  }, "\u270F\uFE0F Editar")), !editing ? React.createElement(React.Fragment, null, React.createElement("div", {
    "data-tactic-block": true,
    style: {
      background: "".concat(team.color, "12"),
      borderRadius: 12,
      padding: "10px 14px",
      margin: "0 0 8px"
    }
  }, React.createElement("p", {
    style: {
      margin: "0 0 2px",
      fontSize: 11,
      fontWeight: 700,
      color: T.sub,
      textTransform: "uppercase",
      letterSpacing: 0.5
    }
  }, "T\xE1tica"), React.createElement(TacticBig, {
    tactic: team.tactic
  })), React.createElement(Val, {
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
    value: sportSel,
    onChange: function onChange(e) {
      return setSportSel(e.target.value);
    }
  }, opt(SPORTS, sportSel).map(function (x) {
    return React.createElement("option", {
      key: x,
      value: x
    }, x);
  })), sportSel === SPORT_OTHER && React.createElement(React.Fragment, null, React.createElement(FL, null, "Qual o desporto?"), React.createElement(FI, {
    value: sportOther,
    onChange: function onChange(e) {
      return setSportOther(e.target.value);
    },
    placeholder: "Ex: Andebol",
    "data-sport-other": true
  }), sportIssue && React.createElement("p", {
    role: "alert",
    "data-sport-error": true,
    style: {
      margin: "-6px 0 10px",
      fontSize: 13,
      fontWeight: 700,
      color: "#B42318"
    }
  }, sportIssue)), React.createElement(TacticField, {
    key: sportSel,
    sport: sportJoin(sportSel, sportOther, team.sport || SPORT_OTHER),
    value: f.tactic,
    onChange: function onChange(v) {
      return set("tactic", v);
    },
    emptyLabel: "Por definir",
    color: f.color
  }), React.createElement(FL, null, "Moeda"), React.createElement(FSel, {
    value: f.currency,
    onChange: function onChange(e) {
      set("currency", e.target.value);
      setCurAsk(null);
    }
  }, opt(CURRENCIES, f.currency).map(function (x) {
    return React.createElement("option", {
      key: x,
      value: x
    }, x);
  })), React.createElement(FL, null, "Pa\xEDs"), React.createElement(FSel, {
    value: f.country,
    onChange: function onChange(e) {
      var v = e.target.value;
      set("country", v);
      var sug = COUNTRY_CUR[v];
      setCurAsk(sug && curCode(sug) !== (curCode(f.currency) || "EUR") ? {
        country: v,
        cur: sug
      } : null);
    }
  }, opt(COUNTRIES, f.country).map(function (x) {
    return React.createElement("option", {
      key: x,
      value: x
    }, x);
  })), curAsk && React.createElement("div", {
    role: "group",
    "aria-label": "Mudar a moeda",
    "data-moeda-aviso": true,
    style: {
      background: "#FFF4D6",
      border: "1.5px solid #8A5A00",
      borderRadius: 12,
      padding: "12px 14px",
      margin: "-6px 0 14px"
    }
  }, React.createElement("p", {
    style: {
      margin: "0 0 10px",
      fontSize: 14,
      fontWeight: 700,
      color: "#3D2B00"
    }
  }, "Mudaste o pa\xEDs para ", curAsk.country, ". Mudar a moeda para ", curAsk.cur, "? Os valores j\xE1 registados n\xE3o s\xE3o convertidos."), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, React.createElement("button", {
    type: "button",
    "data-moeda-confirmar": true,
    onClick: function onClick() {
      set("currency", curAsk.cur);
      setCurAsk(null);
    },
    style: {
      flex: 1,
      minHeight: 44,
      border: "none",
      borderRadius: 10,
      background: "#3D2B00",
      color: "#fff",
      fontSize: 14,
      fontWeight: 800,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Confirmar"), React.createElement("button", {
    type: "button",
    "data-moeda-cancelar": true,
    onClick: function onClick() {
      return setCurAsk(null);
    },
    style: {
      flex: 1,
      minHeight: 44,
      border: "1.5px solid #3D2B00",
      borderRadius: 10,
      background: "transparent",
      color: "#3D2B00",
      fontSize: 14,
      fontWeight: 800,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Cancelar"))), React.createElement("div", {
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
var AbsenceForm = function AbsenceForm(_ref160) {
  var title = _ref160.title,
    initial = _ref160.initial,
    withEnd = _ref160.withEnd,
    saveLabel = _ref160.saveLabel,
    onSave = _ref160.onSave,
    onClose = _ref160.onClose,
    color = _ref160.color;
  var _useState385 = useState(initial.kind || "lesao"),
    _useState386 = _slicedToArray(_useState385, 2),
    kind = _useState386[0],
    setKind = _useState386[1];
  var _useState387 = useState(initial.emoji || "🤕"),
    _useState388 = _slicedToArray(_useState387, 2),
    emoji = _useState388[0],
    setEmoji = _useState388[1];
  var _useState389 = useState(initial.note || ""),
    _useState390 = _slicedToArray(_useState389, 2),
    note = _useState390[0],
    setNote = _useState390[1];
  var _useState391 = useState(initial.start || todayLocal()),
    _useState392 = _slicedToArray(_useState391, 2),
    start = _useState392[0],
    setStart = _useState392[1];
  var _useState393 = useState(initial.end || ""),
    _useState394 = _slicedToArray(_useState393, 2),
    end = _useState394[0],
    setEnd = _useState394[1];
  var _useState395 = useState(false),
    _useState396 = _slicedToArray(_useState395, 2),
    busy = _useState396[0],
    setBusy = _useState396[1];
  var lock = React.useRef(false);
  var noteOk = note.trim() !== "";
  var datesOk = !!start && (!withEnd || !!end && end >= start);
  var save = function () {
    var _ref161 = _asyncToGenerator(_regenerator().m(function _callee60() {
      var ok;
      return _regenerator().w(function (_context60) {
        while (1) switch (_context60.p = _context60.n) {
          case 0:
            if (!(lock.current || !noteOk || !datesOk)) {
              _context60.n = 1;
              break;
            }
            return _context60.a(2);
          case 1:
            lock.current = true;
            setBusy(true);
            ok = false;
            _context60.p = 2;
            _context60.n = 3;
            return onSave({
              kind: kind,
              emoji: emoji,
              note: note.trim(),
              start: start,
              end: withEnd ? end : null
            });
          case 3:
            ok = _context60.v;
          case 4:
            _context60.p = 4;
            lock.current = false;
            setBusy(false);
            return _context60.f(4);
          case 5:
            if (ok) onClose();
          case 6:
            return _context60.a(2);
        }
      }, _callee60, null, [[2,, 4, 5]]);
    }));
    return function save() {
      return _ref161.apply(this, arguments);
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
  }, Object.entries(ABS_KINDS).map(function (_ref162) {
    var _ref163 = _slicedToArray(_ref162, 2),
      k = _ref163[0],
      v = _ref163[1];
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
var CloseAbsenceSheet = function CloseAbsenceSheet(_ref164) {
  var name = _ref164.name,
    kind = _ref164.kind,
    onConfirm = _ref164.onConfirm,
    onCancel = _ref164.onCancel;
  var _useState397 = useState(false),
    _useState398 = _slicedToArray(_useState397, 2),
    busy = _useState398[0],
    setBusy = _useState398[1];
  var lock = React.useRef(false);
  var go = function () {
    var _ref165 = _asyncToGenerator(_regenerator().m(function _callee61() {
      var ok;
      return _regenerator().w(function (_context61) {
        while (1) switch (_context61.p = _context61.n) {
          case 0:
            if (!lock.current) {
              _context61.n = 1;
              break;
            }
            return _context61.a(2);
          case 1:
            lock.current = true;
            setBusy(true);
            ok = false;
            _context61.p = 2;
            _context61.n = 3;
            return onConfirm();
          case 3:
            ok = _context61.v;
          case 4:
            _context61.p = 4;
            lock.current = false;
            setBusy(false);
            return _context61.f(4);
          case 5:
            if (ok) onCancel();
          case 6:
            return _context61.a(2);
        }
      }, _callee61, null, [[2,, 4, 5]]);
    }));
    return function go() {
      return _ref165.apply(this, arguments);
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
var AbsenceCards = function AbsenceCards(_ref166) {
  var records = _ref166.records,
    showName = _ref166.showName,
    color = _ref166.color,
    onUpdate = _ref166.onUpdate,
    onClose = _ref166.onClose,
    onDelete = _ref166.onDelete,
    emptyText = _ref166.emptyText,
    readOnly = _ref166.readOnly;
  var _useState399 = useState(null),
    _useState400 = _slicedToArray(_useState399, 2),
    editing = _useState400[0],
    setEditing = _useState400[1];
  var _useState401 = useState(null),
    _useState402 = _slicedToArray(_useState401, 2),
    closing = _useState402[0],
    setClosing = _useState402[1];
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
var AbsenceArchive = function AbsenceArchive(_ref167) {
  var team = _ref167.team,
    _ref167$absences = _ref167.absences,
    absences = _ref167$absences === void 0 ? [] : _ref167$absences,
    onUpdate = _ref167.onUpdate,
    onClose = _ref167.onClose,
    onDelete = _ref167.onDelete;
  var _useState403 = useState(""),
    _useState404 = _slicedToArray(_useState403, 2),
    fPlayer = _useState404[0],
    setFPlayer = _useState404[1];
  var _useState405 = useState(""),
    _useState406 = _slicedToArray(_useState405, 2),
    fKind = _useState406[0],
    setFKind = _useState406[1];
  var _useState407 = useState(""),
    _useState408 = _slicedToArray(_useState407, 2),
    fSeason = _useState408[0],
    setFSeason = _useState408[1];
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
  }, "Todos os ".concat(roleWord(team.sport, true, true))), players.map(function (_ref168) {
    var _ref169 = _slicedToArray(_ref168, 2),
      k = _ref169[0],
      n = _ref169[1];
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
var DeleteTeamModal = function DeleteTeamModal(_ref170) {
  var team = _ref170.team,
    token = _ref170.token,
    onDelete = _ref170.onDelete,
    onClose = _ref170.onClose;
  var _useState409 = useState(null),
    _useState410 = _slicedToArray(_useState409, 2),
    counts = _useState410[0],
    setCounts = _useState410[1];
  var _useState411 = useState(0),
    _useState412 = _slicedToArray(_useState411, 2),
    tick = _useState412[0],
    setTick = _useState412[1];
  var _useState413 = useState(""),
    _useState414 = _slicedToArray(_useState413, 2),
    text = _useState414[0],
    setText = _useState414[1];
  var _useState415 = useState(false),
    _useState416 = _slicedToArray(_useState415, 2),
    busy = _useState416[0],
    setBusy = _useState416[1];
  var _useState417 = useState(""),
    _useState418 = _slicedToArray(_useState417, 2),
    err = _useState418[0],
    setErr = _useState418[1];
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
    Promise.all([n("team_members"), n("fines"), n("trainings"), n("cards"), n("expenses"), abs]).then(function (_ref171) {
      var _ref172 = _slicedToArray(_ref171, 6),
        a = _ref172[0],
        b = _ref172[1],
        c = _ref172[2],
        d = _ref172[3],
        e = _ref172[4],
        _ref172$ = _slicedToArray(_ref172[5], 2),
        l = _ref172$[0],
        au = _ref172$[1];
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
    var _ref173 = _asyncToGenerator(_regenerator().m(function _callee62() {
      var _t77;
      return _regenerator().w(function (_context62) {
        while (1) switch (_context62.p = _context62.n) {
          case 0:
            if (!(!match || busy)) {
              _context62.n = 1;
              break;
            }
            return _context62.a(2);
          case 1:
            setBusy(true);
            setErr("");
            _context62.p = 2;
            _context62.n = 3;
            return onDelete();
          case 3:
            _context62.n = 5;
            break;
          case 4:
            _context62.p = 4;
            _t77 = _context62.v;
            setErr(errPt(_t77, "Erro ao apagar a equipa"));
            setBusy(false);
          case 5:
            return _context62.a(2);
        }
      }, _callee62, null, [[2, 4]]);
    }));
    return function go() {
      return _ref173.apply(this, arguments);
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
var UnavailableControl = function UnavailableControl(_ref174) {
  var m = _ref174.m,
    record = _ref174.record,
    color = _ref174.color,
    onOpen = _ref174.onOpen,
    onClose = _ref174.onClose,
    onUpdate = _ref174.onUpdate,
    onLegacy = _ref174.onLegacy;
  var _useState419 = useState(null),
    _useState420 = _slicedToArray(_useState419, 2),
    box = _useState420[0],
    setBox = _useState420[1];
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
var ManageTeamScreen = function ManageTeamScreen(_ref175) {
  var team = _ref175.team,
    members = _ref175.members,
    fineTypes = _ref175.fineTypes,
    token = _ref175.token,
    myUserId = _ref175.myUserId,
    onBack = _ref175.onBack,
    onAddMember = _ref175.onAddMember,
    onToggleRole = _ref175.onToggleRole,
    onRemoveMember = _ref175.onRemoveMember,
    onEditMember = _ref175.onEditMember,
    onRegenerateCode = _ref175.onRegenerateCode,
    onDeleteTeam = _ref175.onDeleteTeam,
    onEditTeam = _ref175.onEditTeam,
    absences = _ref175.absences,
    absHandlers = _ref175.absHandlers,
    setFineTypes = _ref175.setFineTypes,
    onClaimsChanged = _ref175.onClaimsChanged;
  var tm = members.filter(function (m) {
    return m.teamId === team.id;
  });
  var _useState421 = useState(false),
    _useState422 = _slicedToArray(_useState421, 2),
    showDelete = _useState422[0],
    setShowDelete = _useState422[1];
  var _useState423 = useState(false),
    _useState424 = _slicedToArray(_useState423, 2),
    ftWarn = _useState424[0],
    setFtWarn = _useState424[1];
  var _useState425 = useState(0),
    _useState426 = _slicedToArray(_useState425, 2),
    ftTick = _useState426[0],
    setFtTick = _useState426[1];
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
    title: players.length === 1 ? roleWord(team.sport) : roleWord(team.sport, true),
    color: T.sub,
    list: players
  }].filter(function (g) {
    return g.list.length > 0;
  });
  var _useState427 = useState(null),
    _useState428 = _slicedToArray(_useState427, 2),
    roleErr = _useState428[0],
    setRoleErr = _useState428[1];
  var changeRole = function () {
    var _ref176 = _asyncToGenerator(_regenerator().m(function _callee63(m, r) {
      var _t78;
      return _regenerator().w(function (_context63) {
        while (1) switch (_context63.p = _context63.n) {
          case 0:
            setRoleErr(null);
            _context63.p = 1;
            _context63.n = 2;
            return onToggleRole(m.id, r);
          case 2:
            _context63.n = 4;
            break;
          case 3:
            _context63.p = 3;
            _t78 = _context63.v;
            setRoleErr({
              id: m.id,
              msg: errPt(_t78, "Erro ao alterar o papel")
            });
          case 4:
            return _context63.a(2);
        }
      }, _callee63, null, [[1, 3]]);
    }));
    return function changeRole(_x26, _x27) {
      return _ref176.apply(this, arguments);
    };
  }();
  var _useState429 = useState(null),
    _useState430 = _slicedToArray(_useState429, 2),
    confirmRemove = _useState430[0],
    setConfirmRemove = _useState430[1];
  var _useState431 = useState(false),
    _useState432 = _slicedToArray(_useState431, 2),
    removeBusy = _useState432[0],
    setRemoveBusy = _useState432[1];
  var _useState433 = useState(""),
    _useState434 = _slicedToArray(_useState433, 2),
    removeErr = _useState434[0],
    setRemoveErr = _useState434[1];
  var closeRemove = function closeRemove() {
    setConfirmRemove(null);
    setRemoveErr("");
  };
  var doRemove = function () {
    var _ref177 = _asyncToGenerator(_regenerator().m(function _callee64() {
      var _t79;
      return _regenerator().w(function (_context64) {
        while (1) switch (_context64.p = _context64.n) {
          case 0:
            if (!removeBusy) {
              _context64.n = 1;
              break;
            }
            return _context64.a(2);
          case 1:
            setRemoveBusy(true);
            setRemoveErr("");
            _context64.p = 2;
            _context64.n = 3;
            return onRemoveMember(confirmRemove.id);
          case 3:
            closeRemove();
            _context64.n = 5;
            break;
          case 4:
            _context64.p = 4;
            _t79 = _context64.v;
            setRemoveErr(errPt(_t79, "Erro ao remover"));
          case 5:
            setRemoveBusy(false);
          case 6:
            return _context64.a(2);
        }
      }, _callee64, null, [[2, 4]]);
    }));
    return function doRemove() {
      return _ref177.apply(this, arguments);
    };
  }();
  var _useState435 = useState(null),
    _useState436 = _slicedToArray(_useState435, 2),
    editingMember = _useState436[0],
    setEditingMember = _useState436[1];
  var _useState437 = useState(false),
    _useState438 = _slicedToArray(_useState437, 2),
    copied = _useState438[0],
    setCopied = _useState438[1];
  var copyCode = function copyCode() {
    setCopied(true);
    setTimeout(function () {
      return setCopied(false);
    }, 2000);
  };
  var _useState439 = useState(null),
    _useState440 = _slicedToArray(_useState439, 2),
    expandedMember = _useState440[0],
    setExpandedMember = _useState440[1];
  var Row = function Row(_ref178) {
    var m = _ref178.m;
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
      role: m.role,
      sport: team.sport
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
    }, [["admin", "🛡 Admin", "#1D3557"], ["player", "\uD83D\uDC64 ".concat(roleWord(team.sport)), "#6B6B72"]].map(function (_ref179) {
      var _ref180 = _slicedToArray(_ref179, 3),
        r = _ref180[0],
        l = _ref180[1],
        c = _ref180[2];
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
  }, "Partilha o convite com os teus ".concat(roleWord(team.sport, true, true), ":")), React.createElement("div", {
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
  }, "Podem gerir membros, atribuir multas, despesas e treinos. ", roleWord(team.sport, true), " s\xF3 veem e confirmam presen\xE7as."))), React.createElement("button", {
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
  }, "Este ", roleWord(team.sport, false, true), " perder\xE1 o acesso \xE0 equipa. Podes adicion\xE1-lo novamente com um novo convite."), removeErr && React.createElement("p", {
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
var MemberDetailScreen = function MemberDetailScreen(_ref181) {
  var member = _ref181.member,
    team = _ref181.team,
    fines = _ref181.fines,
    onBack = _ref181.onBack,
    onTogglePaid = _ref181.onTogglePaid,
    onDeleteFine = _ref181.onDeleteFine,
    isAdmin = _ref181.isAdmin,
    absences = _ref181.absences,
    absHandlers = _ref181.absHandlers,
    readOnly = _ref181.readOnly;
  var money = useMoney();
  var _useState441 = useState("multas"),
    _useState442 = _slicedToArray(_useState441, 2),
    ptab = _useState442[0],
    setPtab = _useState442[1];
  var _useState443 = useState(false),
    _useState444 = _slicedToArray(_useState443, 2),
    adding = _useState444[0],
    setAdding = _useState444[1];
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
  }, "".concat(member.position ? member.position + " · " : "").concat(member.role === "admin" ? "Admin" : roleWord(team.sport))), member.phone && React.createElement("p", {
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
  }, money(unpaid)), React.createElement("p", {
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
  }, money(paid)), React.createElement("p", {
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
  }, [["multas", "Multas"], ["historico", "Histórico"]].map(function (_ref182) {
    var _ref183 = _slicedToArray(_ref182, 2),
      k = _ref183[0],
      l = _ref183[1];
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
    }, money(f.amount)), isAdmin && React.createElement("button", {
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
var LoginScreen = function LoginScreen(_ref184) {
  var onLogin = _ref184.onLogin;
  var _useState445 = useState("patricio@multeam.app"),
    _useState446 = _slicedToArray(_useState445, 2),
    email = _useState446[0],
    setEmail = _useState446[1];
  var _useState447 = useState("••••••••"),
    _useState448 = _slicedToArray(_useState447, 2),
    pass = _useState448[0],
    setPass = _useState448[1];
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
var ResetPasswordScreen = function ResetPasswordScreen(_ref185) {
  var accessToken = _ref185.accessToken,
    onDone = _ref185.onDone;
  var _useState449 = useState(""),
    _useState450 = _slicedToArray(_useState449, 2),
    pass = _useState450[0],
    setPass = _useState450[1];
  var _useState451 = useState(""),
    _useState452 = _slicedToArray(_useState451, 2),
    pass2 = _useState452[0],
    setPass2 = _useState452[1];
  var _useState453 = useState(false),
    _useState454 = _slicedToArray(_useState453, 2),
    showPass = _useState454[0],
    setShowPass = _useState454[1];
  var _useState455 = useState(""),
    _useState456 = _slicedToArray(_useState455, 2),
    err = _useState456[0],
    setErr = _useState456[1];
  var _useState457 = useState(false),
    _useState458 = _slicedToArray(_useState457, 2),
    done = _useState458[0],
    setDone = _useState458[1];
  var _useState459 = useState(false),
    _useState460 = _slicedToArray(_useState459, 2),
    loading = _useState460[0],
    setLoading = _useState460[1];
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
    var _ref186 = _asyncToGenerator(_regenerator().m(function _callee65() {
      var _t80;
      return _regenerator().w(function (_context65) {
        while (1) switch (_context65.p = _context65.n) {
          case 0:
            if (!(pass.length < 6)) {
              _context65.n = 1;
              break;
            }
            return _context65.a(2, setErr("Mínimo 6 caracteres"));
          case 1:
            if (!(pass !== pass2)) {
              _context65.n = 2;
              break;
            }
            return _context65.a(2, setErr("As passwords não coincidem"));
          case 2:
            setLoading(true);
            setErr("");
            _context65.p = 3;
            _context65.n = 4;
            return api.updatePassword(pass, accessToken);
          case 4:
            setDone(true);
            setTimeout(onDone, 2500);
            _context65.n = 6;
            break;
          case 5:
            _context65.p = 5;
            _t80 = _context65.v;
            setErr(errPt(_t80));
          case 6:
            setLoading(false);
          case 7:
            return _context65.a(2);
        }
      }, _callee65, null, [[3, 5]]);
    }));
    return function save() {
      return _ref186.apply(this, arguments);
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
var AuthScreen = function AuthScreen(_ref187) {
  var onLogin = _ref187.onLogin,
    onRegister = _ref187.onRegister,
    error = _ref187.error,
    loading = _ref187.loading,
    appStatus = _ref187.appStatus;
  var _useState461 = useState("login"),
    _useState462 = _slicedToArray(_useState461, 2),
    mode = _useState462[0],
    setMode = _useState462[1];
  var _useState463 = useState(""),
    _useState464 = _slicedToArray(_useState463, 2),
    email = _useState464[0],
    setEmail = _useState464[1];
  var _useState465 = useState(""),
    _useState466 = _slicedToArray(_useState465, 2),
    pass = _useState466[0],
    setPass = _useState466[1];
  var _useState467 = useState(""),
    _useState468 = _slicedToArray(_useState467, 2),
    name = _useState468[0],
    setName = _useState468[1];
  var _useState469 = useState(false),
    _useState470 = _slicedToArray(_useState469, 2),
    showPass = _useState470[0],
    setShowPass = _useState470[1];
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
      width: "100%",
      maxWidth: 360
    }
  }, React.createElement(StatusBanner, {
    status: appStatus,
    where: "login"
  })), React.createElement("div", {
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
  }, [["login", "Entrar"], ["register", "Criar conta"]].map(function (_ref188) {
    var _ref189 = _slicedToArray(_ref188, 2),
      m = _ref189[0],
      l = _ref189[1];
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
    onClick: _asyncToGenerator(_regenerator().m(function _callee66() {
      return _regenerator().w(function (_context66) {
        while (1) switch (_context66.n) {
          case 0:
            if (email) {
              _context66.n = 1;
              break;
            }
            alert("Escreve o teu email primeiro");
            return _context66.a(2);
          case 1:
            _context66.n = 2;
            return api.resetPassword(email);
          case 2:
            alert("Email de recuperação enviado para " + email);
          case 3:
            return _context66.a(2);
        }
      }, _callee66);
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
    onClick: _asyncToGenerator(_regenerator().m(function _callee67() {
      return _regenerator().w(function (_context67) {
        while (1) switch (_context67.n) {
          case 0:
            if (email) {
              _context67.n = 1;
              break;
            }
            alert("Mete o teu email primeiro");
            return _context67.a(2);
          case 1:
            _context67.n = 2;
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
            return _context67.a(2);
        }
      }, _callee67);
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
var Spinner = function Spinner(_ref192) {
  var _ref192$msg = _ref192.msg,
    msg = _ref192$msg === void 0 ? "A carregar..." : _ref192$msg;
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
var KindPicker = function KindPicker(_ref193) {
  var value = _ref193.value,
    onChange = _ref193.onChange;
  return React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 14
    }
  }, [["amarelo", "🟨 Amarelo", T.yellow, "#1D1D1F"], ["vermelho", "🟥 Vermelho", T.brand, "#fff"]].map(function (_ref194) {
    var _ref195 = _slicedToArray(_ref194, 4),
      k = _ref195[0],
      l = _ref195[1],
      bg = _ref195[2],
      fg = _ref195[3];
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
var AddCardModal = function AddCardModal(_ref196) {
  var team = _ref196.team,
    members = _ref196.members,
    cards = _ref196.cards,
    onAdd = _ref196.onAdd,
    onClose = _ref196.onClose;
  var tm = sortMembers(members.filter(function (m) {
    return m.teamId === team.id;
  }));
  var _useState471 = useState(""),
    _useState472 = _slicedToArray(_useState471, 2),
    mid = _useState472[0],
    setMid = _useState472[1];
  var _useState473 = useState("amarelo"),
    _useState474 = _slicedToArray(_useState473, 2),
    kind = _useState474[0],
    setKind = _useState474[1];
  var _useState475 = useState(todayLocal()),
    _useState476 = _slicedToArray(_useState475, 2),
    date = _useState476[0],
    setDate = _useState476[1];
  var _useState477 = useState(""),
    _useState478 = _slicedToArray(_useState477, 2),
    opponent = _useState478[0],
    setOpponent = _useState478[1];
  var _useState479 = useState(""),
    _useState480 = _slicedToArray(_useState479, 2),
    note = _useState480[0],
    setNote = _useState480[1];
  var _useState481 = useState(false),
    _useState482 = _slicedToArray(_useState481, 2),
    saving = _useState482[0],
    setSaving = _useState482[1];
  var _useState483 = useState(""),
    _useState484 = _slicedToArray(_useState483, 2),
    err = _useState484[0],
    setErr = _useState484[1];
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
    var _ref197 = _asyncToGenerator(_regenerator().m(function _callee68() {
      var _t81;
      return _regenerator().w(function (_context68) {
        while (1) switch (_context68.p = _context68.n) {
          case 0:
            if (!(!mid || !date || saving)) {
              _context68.n = 1;
              break;
            }
            return _context68.a(2);
          case 1:
            setSaving(true);
            setErr("");
            _context68.p = 2;
            _context68.n = 3;
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
            _context68.n = 5;
            break;
          case 4:
            _context68.p = 4;
            _t81 = _context68.v;
            setErr(errPt(_t81));
            setSaving(false);
          case 5:
            return _context68.a(2);
        }
      }, _callee68, null, [[2, 4]]);
    }));
    return function save() {
      return _ref197.apply(this, arguments);
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
  }, sel.name))), React.createElement(FL, null, sel ? "Mudar ".concat(roleWord(team.sport, false, true)) : roleWord(team.sport)), React.createElement("div", {
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
var EditCardModal = function EditCardModal(_ref198) {
  var card = _ref198.card,
    onSave = _ref198.onSave,
    onClose = _ref198.onClose;
  var _useState485 = useState(card.kind),
    _useState486 = _slicedToArray(_useState485, 2),
    kind = _useState486[0],
    setKind = _useState486[1];
  var _useState487 = useState(card.date || todayLocal()),
    _useState488 = _slicedToArray(_useState487, 2),
    date = _useState488[0],
    setDate = _useState488[1];
  var _useState489 = useState(card.opponent),
    _useState490 = _slicedToArray(_useState489, 2),
    opponent = _useState490[0],
    setOpponent = _useState490[1];
  var _useState491 = useState(card.note),
    _useState492 = _slicedToArray(_useState491, 2),
    note = _useState492[0],
    setNote = _useState492[1];
  var _useState493 = useState(false),
    _useState494 = _slicedToArray(_useState493, 2),
    saving = _useState494[0],
    setSaving = _useState494[1];
  var save = function () {
    var _ref199 = _asyncToGenerator(_regenerator().m(function _callee69() {
      var done;
      return _regenerator().w(function (_context69) {
        while (1) switch (_context69.n) {
          case 0:
            if (!(!date || saving)) {
              _context69.n = 1;
              break;
            }
            return _context69.a(2);
          case 1:
            setSaving(true);
            _context69.n = 2;
            return onSave(card.id, {
              kind: kind,
              date: date,
              opponent: opponent.trim(),
              note: note.trim()
            });
          case 2:
            done = _context69.v;
            if (done !== false) onClose();else setSaving(false);
          case 3:
            return _context69.a(2);
        }
      }, _callee69);
    }));
    return function save() {
      return _ref199.apply(this, arguments);
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
var CompletedCards = function CompletedCards(_ref200) {
  var count = _ref200.count,
    children = _ref200.children;
  var _useState495 = useState(false),
    _useState496 = _slicedToArray(_useState495, 2),
    show = _useState496[0],
    setShow = _useState496[1];
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
var CardsTab = function CardsTab(_ref201) {
  var team = _ref201.team,
    cards = _ref201.cards,
    members = _ref201.members,
    canManage = _ref201.canManage,
    readOnly = _ref201.readOnly,
    onAddCard = _ref201.onAddCard,
    onEditCard = _ref201.onEditCard,
    onDeleteCard = _ref201.onDeleteCard,
    onServeSuspension = _ref201.onServeSuspension;
  var _useState497 = useState(null),
    _useState498 = _slicedToArray(_useState497, 2),
    open = _useState498[0],
    setOpen = _useState498[1];
  var _useState499 = useState(false),
    _useState500 = _slicedToArray(_useState499, 2),
    showNone = _useState500[0],
    setShowNone = _useState500[1];
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
  }, "Sem ", roleWord(team.sport, true, true), " na equipa."), withCards.map(renderRow), noCards.length > 0 && React.createElement(React.Fragment, null, React.createElement("button", {
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
var SessionSplash = function SessionSplash() {
  return React.createElement("div", {
    role: "status",
    "aria-live": "polite",
    "data-session-splash": true,
    style: {
      minHeight: "100vh",
      background: "linear-gradient(160deg, ".concat(T.navy, " 0%, #0a1628 100%)"),
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 28px",
      boxSizing: "border-box",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }
  }, React.createElement("p", {
    style: {
      margin: "0 0 8px",
      fontSize: 28,
      fontWeight: 900,
      letterSpacing: -0.5
    }
  }, "Multeam"), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      fontWeight: 700,
      opacity: 0.9
    }
  }, "A entrar\u2026"));
};
var SessionOffline = function SessionOffline(_ref202) {
  var onRetry = _ref202.onRetry,
    onOther = _ref202.onOther,
    busy = _ref202.busy;
  return React.createElement("div", {
    "data-session-offline": true,
    style: {
      minHeight: "100vh",
      background: "linear-gradient(160deg, ".concat(T.navy, " 0%, #0a1628 100%)"),
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 28px",
      boxSizing: "border-box",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      textAlign: "center"
    }
  }, React.createElement("p", {
    style: {
      margin: "0 0 8px",
      fontSize: 28,
      fontWeight: 900,
      letterSpacing: -0.5
    }
  }, "Sem liga\xE7\xE3o"), React.createElement("p", {
    style: {
      margin: "0 0 22px",
      fontSize: 15,
      lineHeight: 1.4,
      maxWidth: 320,
      opacity: 0.92
    }
  }, "N\xE3o foi poss\xEDvel entrar agora. A tua sess\xE3o est\xE1 guardada: tenta outra vez quando tiveres rede."), React.createElement("button", {
    onClick: onRetry,
    disabled: busy,
    style: {
      width: "100%",
      maxWidth: 320,
      minHeight: 48,
      borderRadius: 14,
      border: "none",
      background: T.brand,
      color: "#fff",
      fontWeight: 800,
      fontSize: 16,
      cursor: "pointer",
      marginBottom: 10,
      fontFamily: "inherit",
      opacity: busy ? 0.6 : 1
    }
  }, busy ? "A tentar…" : "Tentar novamente"), React.createElement("button", {
    onClick: onOther,
    style: {
      width: "100%",
      maxWidth: 320,
      minHeight: 48,
      borderRadius: 14,
      border: "2px solid rgba(255,255,255,0.7)",
      background: "transparent",
      color: "#fff",
      fontWeight: 800,
      fontSize: 15,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Entrar com outra conta"));
};
function App() {
  var _members$find, _members$find3, _members$find4;
  var _useState501 = useState(function () {
      var h = window.location.hash;
      if (!h.includes("type=recovery")) return null;
      var m = h.match(/access_token=([^&#&]+)/);
      return m ? decodeURIComponent(m[1]) : null;
    }),
    _useState502 = _slicedToArray(_useState501, 1),
    recoveryToken = _useState502[0];
  var _useState503 = useState(function () {
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
    _useState504 = _slicedToArray(_useState503, 1),
    magicToken = _useState504[0];
  var _useState505 = useState(null),
    _useState506 = _slicedToArray(_useState505, 2),
    token = _useState506[0],
    setToken = _useState506[1];
  var _useState507 = useState(null),
    _useState508 = _slicedToArray(_useState507, 2),
    myUserId = _useState508[0],
    setMyUserId = _useState508[1];
  var _useState509 = useState(null),
    _useState510 = _slicedToArray(_useState509, 2),
    profile = _useState510[0],
    setProfile = _useState510[1];
  var _useState511 = useState([]),
    _useState512 = _slicedToArray(_useState511, 2),
    teams = _useState512[0],
    setTeams = _useState512[1];
  var _useState513 = useState([]),
    _useState514 = _slicedToArray(_useState513, 2),
    members = _useState514[0],
    setMembers = _useState514[1];
  var _useState515 = useState([]),
    _useState516 = _slicedToArray(_useState515, 2),
    fineTypes = _useState516[0],
    setFineTypes = _useState516[1];
  var _useState517 = useState([]),
    _useState518 = _slicedToArray(_useState517, 2),
    fines = _useState518[0],
    setFines = _useState518[1];
  var _useState519 = useState([]),
    _useState520 = _slicedToArray(_useState519, 2),
    cards = _useState520[0],
    setCards = _useState520[1];
  var _useState521 = useState(null),
    _useState522 = _slicedToArray(_useState521, 2),
    editingCard = _useState522[0],
    setEditingCard = _useState522[1];
  var _useState523 = useState([]),
    _useState524 = _slicedToArray(_useState523, 2),
    expenses = _useState524[0],
    setExpenses = _useState524[1];
  var _useState525 = useState([]),
    _useState526 = _slicedToArray(_useState525, 2),
    trainings = _useState526[0],
    setTrainings = _useState526[1];
  var _useState527 = useState([]),
    _useState528 = _slicedToArray(_useState527, 2),
    absences = _useState528[0],
    setAbsences = _useState528[1];
  var _useState529 = useState({}),
    _useState530 = _slicedToArray(_useState529, 2),
    presences = _useState530[0],
    setPresences = _useState530[1];
  var _useState531 = useState([]),
    _useState532 = _slicedToArray(_useState531, 2),
    loadWarn = _useState532[0],
    setLoadWarn = _useState532[1];
  var loadSeq = React.useRef(0);
  var _useState533 = useState(null),
    _useState534 = _slicedToArray(_useState533, 2),
    pushIssue = _useState534[0],
    setPushIssue = _useState534[1];
  var _useState535 = useState(null),
    _useState536 = _slicedToArray(_useState535, 2),
    teamId = _useState536[0],
    setTeamId = _useState536[1];
  var _useState537 = useState("home"),
    _useState538 = _slicedToArray(_useState537, 2),
    tab = _useState538[0],
    setTab = _useState538[1];
  var _useState539 = useState(null),
    _useState540 = _slicedToArray(_useState539, 2),
    sub = _useState540[0],
    setSub = _useState540[1];
  var _useState541 = useState(null),
    _useState542 = _slicedToArray(_useState541, 2),
    modal = _useState542[0],
    setModal = _useState542[1];
  var _useState543 = useState(null),
    _useState544 = _slicedToArray(_useState543, 2),
    editingFine = _useState544[0],
    setEditingFine = _useState544[1];
  var _useState545 = useState(null),
    _useState546 = _slicedToArray(_useState545, 2),
    treinosModal = _useState546[0],
    setTreinosModal = _useState546[1];
  var _useState547 = useState(false),
    _useState548 = _slicedToArray(_useState547, 2),
    loading = _useState548[0],
    setLoading = _useState548[1];
  var _useState549 = useState(false),
    _useState550 = _slicedToArray(_useState549, 2),
    appReady = _useState550[0],
    setAppReady = _useState550[1];
  var _useState551 = useState(false),
    _useState552 = _slicedToArray(_useState551, 2),
    refreshing = _useState552[0],
    setRefreshing = _useState552[1];
  var _useState553 = useState(null),
    _useState554 = _slicedToArray(_useState553, 2),
    authError = _useState554[0],
    setAuthError = _useState554[1];
  var _useState555 = useState(false),
    _useState556 = _slicedToArray(_useState555, 2),
    adminView = _useState556[0],
    setAdminView = _useState556[1];
  var _useState557 = useState(null),
    _useState558 = _slicedToArray(_useState557, 2),
    adminErr = _useState558[0],
    setAdminErr = _useState558[1];
  var _useState559 = useState(null),
    _useState560 = _slicedToArray(_useState559, 2),
    adminStart = _useState560[0],
    setAdminStart = _useState560[1];
  var _useState561 = useState(null),
    _useState562 = _slicedToArray(_useState561, 2),
    adminTeamsCache = _useState562[0],
    setAdminTeamsCache = _useState562[1];
  var roHistoryRef = React.useRef(false);
  var ignorePopRef = React.useRef(0);
  var exitRoRef = React.useRef(null);
  var team = teams.find(function (t) {
    return t.id === teamId;
  });
  var freeSport = !!team && isFreeSport(team.sport);
  var roMode = adminView && !!(profile !== null && profile !== void 0 && profile.isAppAdmin);
  var isAdmin = !roMode && (members.some(function (m) {
    return m.teamId === teamId && m.userId === myUserId && m.role === "admin";
  }) || (team === null || team === void 0 ? void 0 : team.createdBy) === myUserId);
  var myRole = ((_members$find = members.find(function (m) {
    return m.teamId === teamId && m.userId === myUserId;
  })) === null || _members$find === void 0 ? void 0 : _members$find.role) || "player";
  var canManageTrainings = !roMode && (isAdmin || myRole === "treinador" || myRole === "diretor");
  var loadTeam = function () {
    var _ref203 = _asyncToGenerator(_regenerator().m(function _callee70(tok, tid) {
      var failedParts, soft, _yield$Promise$all5, _yield$Promise$all6, mRaw, ftData, fData, eData, tData, pData, cData, aData, profilesMap, profFailed, profs, uids, _profs, mData, presMap, _t82, _t83;
      return _regenerator().w(function (_context70) {
        while (1) switch (_context70.p = _context70.n) {
          case 0:
            failedParts = [];
            soft = function soft(name, empty, perm) {
              return function (e) {
                if (!(perm && /permission|policy|42501|not authorized|403/i.test(String(e && e.message)))) failedParts.push(name);
                return empty;
              };
            };
            _context70.n = 1;
            return Promise.all([api.get("team_members?team_id=eq.".concat(tid, "&select=*"), tok), api.get("fine_types?team_id=eq.".concat(tid, "&order=amount.asc"), tok), api.get("fines?team_id=eq.".concat(tid, "&order=created_at.desc"), tok), api.get("expenses?team_id=eq.".concat(tid, "&order=created_at.desc"), tok), api.get("trainings?team_id=eq.".concat(tid, "&order=date.asc,time.asc"), tok), api.get("presences?select=*,trainings!inner(team_id)&trainings.team_id=eq.".concat(tid), tok).catch(soft('presenças', [])), api.get("cards?team_id=eq.".concat(tid, "&order=match_date.desc,created_at.desc"), tok).catch(soft('cartões', [])), api.get("member_absences?team_id=eq.".concat(tid, "&order=start_date.desc,created_at.desc"), tok).catch(soft('ausências', null, true))]);
          case 1:
            _yield$Promise$all5 = _context70.v;
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
            _context70.p = 2;
            _context70.n = 3;
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
            profs = _context70.v;
            (Array.isArray(profs) ? profs : []).forEach(function (p) {
              profilesMap[p.id] = p;
            });
            _context70.n = 5;
            break;
          case 4:
            _context70.p = 4;
            _t82 = _context70.v;
            profFailed = true;
            console.warn('get_team_profiles failed:', _t82);
          case 5:
            if (!(profFailed && Object.keys(profilesMap).length === 0)) {
              _context70.n = 10;
              break;
            }
            _context70.p = 6;
            uids = mRaw.map(function (m) {
              return m.user_id;
            }).filter(Boolean);
            if (!(uids.length > 0)) {
              _context70.n = 8;
              break;
            }
            _context70.n = 7;
            return api.get("profiles?id=in.(".concat(uids.join(','), ")"), tok).catch(function () {
              return [];
            });
          case 7:
            _profs = _context70.v;
            (Array.isArray(_profs) ? _profs : []).forEach(function (p) {
              profilesMap[p.id] = p;
            });
          case 8:
            _context70.n = 10;
            break;
          case 9:
            _context70.p = 9;
            _t83 = _context70.v;
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
            return _context70.a(2, {
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
      }, _callee70, null, [[6, 9], [2, 4]]);
    }));
    return function loadTeam(_x28, _x29) {
      return _ref203.apply(this, arguments);
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
    var _ref204 = _asyncToGenerator(_regenerator().m(function _callee71(tok, tid) {
      var raw, r, bad, lst, mRaw, fData, eData, tData, ftData, pData, cData, aData, profs, profilesMap, presMap;
      return _regenerator().w(function (_context71) {
        while (1) switch (_context71.n) {
          case 0:
            _context71.n = 1;
            return rpcCall('get_team_as_admin', {
              p_team_id: tid
            }, tok);
          case 1:
            raw = _context71.v;
            r = Array.isArray(raw) && raw.length === 1 ? raw[0] : raw;
            bad = function bad() {
              return new Error("resposta inválida");
            };
            if (!(!r || _typeof(r) !== "object" || Array.isArray(r))) {
              _context71.n = 2;
              break;
            }
            throw bad();
          case 2:
            if (!(!r.team || _typeof(r.team) !== "object" || String(r.team.id) !== String(tid))) {
              _context71.n = 3;
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
            return _context71.a(2, {
              team: aTeam(r.team),
              members: mRaw.map(function (m) {
                return aMember(_objectSpread(_objectSpread({}, m), {}, {
                  profiles: profilesMap[m.user_id] || null
                }), r.team.sport);
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
      }, _callee71);
    }));
    return function loadTeamAdmin(_x30, _x31) {
      return _ref204.apply(this, arguments);
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
    var _ref205 = _asyncToGenerator(_regenerator().m(function _callee72(id) {
      var _t84, _t85;
      return _regenerator().w(function (_context72) {
        while (1) switch (_context72.p = _context72.n) {
          case 0:
            setLoading(true);
            setAdminErr(null);
            _context72.p = 1;
            _t84 = applyAdminData;
            _context72.n = 2;
            return loadTeamAdmin(token, id);
          case 2:
            _t84(_context72.v);
            _context72.n = 4;
            break;
          case 3:
            _context72.p = 3;
            _t85 = _context72.v;
            setAdminErr({
              msg: roErrPt(_t85),
              id: id
            });
          case 4:
            setLoading(false);
          case 5:
            return _context72.a(2);
        }
      }, _callee72, null, [[1, 3]]);
    }));
    return function loadAdmin(_x32) {
      return _ref205.apply(this, arguments);
    };
  }();
  var openAdminTeam = function () {
    var _ref206 = _asyncToGenerator(_regenerator().m(function _callee73(id, list) {
      return _regenerator().w(function (_context73) {
        while (1) switch (_context73.n) {
          case 0:
            if (!(!(profile !== null && profile !== void 0 && profile.isAppAdmin) || !token)) {
              _context73.n = 1;
              break;
            }
            return _context73.a(2);
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
            _context73.n = 2;
            return loadAdmin(id);
          case 2:
            return _context73.a(2);
        }
      }, _callee73);
    }));
    return function openAdminTeam(_x33, _x34) {
      return _ref206.apply(this, arguments);
    };
  }();
  var exitAdminView = function () {
    var _ref207 = _asyncToGenerator(_regenerator().m(function _callee74(opts) {
      var toTeams, ok;
      return _regenerator().w(function (_context74) {
        while (1) switch (_context74.n) {
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
            _context74.n = 1;
            return initApp(token, myUserId);
          case 1:
            ok = _context74.v;
            setTab("appadmin");
            if (ok === false) showToast("Não foi possível recarregar as tuas equipas", T.brand);
          case 2:
            return _context74.a(2);
        }
      }, _callee74);
    }));
    return function exitAdminView(_x35) {
      return _ref207.apply(this, arguments);
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
    var _ref208 = _asyncToGenerator(_regenerator().m(function _callee75(tok, uid) {
      var p, mine, profData, created, membershipsR, adapted, memberships, teamIds, teamsR, teamsJson, first, mySeq, td, _t86, _t87, _t88;
      return _regenerator().w(function (_context75) {
        while (1) switch (_context75.p = _context75.n) {
          case 0:
            setLoading(true);
            _context75.p = 1;
            p = null;
            _context75.p = 2;
            _context75.n = 3;
            return rpcCall('get_my_profile', {}, tok);
          case 3:
            mine = _context75.v;
            p = Array.isArray(mine) ? mine[0] : mine && mine.id ? mine : null;
            _context75.n = 5;
            break;
          case 4:
            _context75.p = 4;
            _t86 = _context75.v;
            console.warn('get_my_profile failed:', _t86 && _t86.message);
          case 5:
            if (p) {
              _context75.n = 7;
              break;
            }
            _context75.n = 6;
            return api.get("profiles?id=eq.".concat(uid), tok);
          case 6:
            profData = _context75.v;
            p = profData[0];
          case 7:
            if (p) {
              _context75.n = 12;
              break;
            }
            _context75.p = 8;
            _context75.n = 9;
            return api.post('profiles', {
              id: uid,
              name: 'Utilizador'
            }, tok);
          case 9:
            created = _context75.v;
            p = Array.isArray(created) ? created[0] : created;
            _context75.n = 11;
            break;
          case 10:
            _context75.p = 10;
            _t87 = _context75.v;
            console.warn('Profile creation fallback failed:', _t87);
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
            _context75.n = 13;
            return fetch("".concat(SB_URL, "/rest/v1/team_members?user_id=eq.").concat(uid, "&select=team_id"), {
              headers: {
                'apikey': SB_KEY,
                'Authorization': "Bearer ".concat(tok)
              }
            });
          case 13:
            membershipsR = _context75.v;
            adapted = [];
            if (membershipsR.ok) {
              _context75.n = 14;
              break;
            }
            throw new Error("Não foi possível carregar as tuas equipas.");
          case 14:
            if (!membershipsR.ok) {
              _context75.n = 19;
              break;
            }
            _context75.n = 15;
            return membershipsR.json();
          case 15:
            memberships = _context75.v;
            teamIds = (Array.isArray(memberships) ? memberships : []).map(function (m) {
              return m.team_id;
            }).filter(Boolean);
            if (!(teamIds.length > 0)) {
              _context75.n = 19;
              break;
            }
            _context75.n = 16;
            return fetch("".concat(SB_URL, "/rest/v1/teams?id=in.(").concat(teamIds.join(','), ")&order=created_at.asc"), {
              headers: {
                'apikey': SB_KEY,
                'Authorization': "Bearer ".concat(tok)
              }
            });
          case 16:
            teamsR = _context75.v;
            if (teamsR.ok) {
              _context75.n = 17;
              break;
            }
            throw new Error("Não foi possível carregar as tuas equipas.");
          case 17:
            if (!teamsR.ok) {
              _context75.n = 19;
              break;
            }
            _context75.n = 18;
            return teamsR.json();
          case 18:
            teamsJson = _context75.v;
            adapted = (Array.isArray(teamsJson) ? teamsJson : []).map(aTeam);
          case 19:
            setTeams(adapted);
            if (adapted.length) {
              _context75.n = 20;
              break;
            }
            if (p && p.is_admin === true) setTab("geral");
            setAppReady(true);
            setLoading(false);
            return _context75.a(2, true);
          case 20:
            first = adapted[0].id;
            setTeamId(first);
            mySeq = ++loadSeq.current;
            _context75.n = 21;
            return loadTeam(tok, first);
          case 21:
            td = _context75.v;
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
            return _context75.a(2, true);
          case 22:
            _context75.p = 22;
            _t88 = _context75.v;
            setAuthError("Erro: ".concat(errPt(_t88)));
            return _context75.a(2, false);
          case 23:
            _context75.p = 23;
            setLoading(false);
            return _context75.f(23);
          case 24:
            return _context75.a(2);
        }
      }, _callee75, null, [[8, 10], [2, 4], [1, 22, 23, 24]]);
    }));
    return function initApp(_x36, _x37) {
      return _ref208.apply(this, arguments);
    };
  }();
  var switchTeam = function () {
    var _ref209 = _asyncToGenerator(_regenerator().m(function _callee76(id) {
      var my, td, _t89;
      return _regenerator().w(function (_context76) {
        while (1) switch (_context76.p = _context76.n) {
          case 0:
            setTeamId(id);
            setTab("home");
            if (!roMode) {
              _context76.n = 2;
              break;
            }
            _context76.n = 1;
            return loadAdmin(id);
          case 1:
            return _context76.a(2);
          case 2:
            setLoading(true);
            my = ++loadSeq.current;
            _context76.p = 3;
            _context76.n = 4;
            return loadTeam(token, id);
          case 4:
            td = _context76.v;
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
            _context76.n = 6;
            break;
          case 5:
            _context76.p = 5;
            _t89 = _context76.v;
            console.error(_t89);
            if (my === loadSeq.current) showToast("\u26A0\uFE0F N\xE3o foi poss\xEDvel carregar a equipa: ".concat(errPt(_t89, "erro")), T.brand);
          case 6:
            if (my === loadSeq.current) setLoading(false);
          case 7:
            return _context76.a(2);
        }
      }, _callee76, null, [[3, 5]]);
    }));
    return function switchTeam(_x38) {
      return _ref209.apply(this, arguments);
    };
  }();
  var refresh = useCallback(function () {
    var _ref210 = _asyncToGenerator(_regenerator().m(function _callee77(opts) {
      var notify, my, td, _t90, _t91, _t92;
      return _regenerator().w(function (_context77) {
        while (1) switch (_context77.p = _context77.n) {
          case 0:
            loadStatus();
            notify = !!(opts && opts.notify);
            if (!(refreshing || !token || !teamId)) {
              _context77.n = 1;
              break;
            }
            return _context77.a(2);
          case 1:
            setRefreshing(true);
            if (!roMode) {
              _context77.n = 6;
              break;
            }
            _context77.p = 2;
            _t90 = applyAdminData;
            _context77.n = 3;
            return loadTeamAdmin(token, teamId);
          case 3:
            _t90(_context77.v);
            if (notify) showToast("Atualizado ✓", T.green);
            _context77.n = 5;
            break;
          case 4:
            _context77.p = 4;
            _t91 = _context77.v;
            showToast("N\xE3o foi poss\xEDvel atualizar: ".concat(roErrPt(_t91)), T.brand);
          case 5:
            setRefreshing(false);
            return _context77.a(2);
          case 6:
            my = ++loadSeq.current;
            _context77.p = 7;
            _context77.n = 8;
            return loadTeam(token, teamId);
          case 8:
            td = _context77.v;
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
              if (notify) showToast("Atualizado ✓", T.green);
            }
            _context77.n = 10;
            break;
          case 9:
            _context77.p = 9;
            _t92 = _context77.v;
            console.error(_t92);
            if (my === loadSeq.current) showToast("N\xE3o foi poss\xEDvel atualizar: ".concat(errPt(_t92, "erro")), T.brand);
          case 10:
            setRefreshing(false);
          case 11:
            return _context77.a(2);
        }
      }, _callee77, null, [[7, 9], [2, 4]]);
    }));
    return function (_x39) {
      return _ref210.apply(this, arguments);
    };
  }(), [token, teamId, refreshing, roMode]);
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
    var _ref211 = _asyncToGenerator(_regenerator().m(function _callee78(email, pass) {
      var _d$session, _d$user, d, tok, uid, ss, _t93;
      return _regenerator().w(function (_context78) {
        while (1) switch (_context78.p = _context78.n) {
          case 0:
            setLoading(true);
            setAuthError(null);
            _context78.p = 1;
            _context78.n = 2;
            return api.signIn(email, pass);
          case 2:
            d = _context78.v;
            tok = d.access_token || ((_d$session = d.session) === null || _d$session === void 0 ? void 0 : _d$session.access_token);
            uid = (_d$user = d.user) === null || _d$user === void 0 ? void 0 : _d$user.id;
            if (!(!tok || !uid)) {
              _context78.n = 3;
              break;
            }
            throw new Error(d.error_description || d.msg || 'Email ou password incorretos');
          case 3:
            ss = sessFromAuth(d);
            if (ss) sessWrite(ss);
            setToken(tok);
            setMyUserId(uid);
            _context78.n = 4;
            return initApp(tok, uid);
          case 4:
            _context78.n = 6;
            break;
          case 5:
            _context78.p = 5;
            _t93 = _context78.v;
            setAuthError(errPt(_t93));
            setLoading(false);
          case 6:
            return _context78.a(2);
        }
      }, _callee78, null, [[1, 5]]);
    }));
    return function handleLogin(_x40, _x41) {
      return _ref211.apply(this, arguments);
    };
  }();
  var handleRegister = function () {
    var _ref212 = _asyncToGenerator(_regenerator().m(function _callee79(email, pass, name) {
      var _d$session2, _d$user2, d, tok, uid, nameFailed, ss, _d2$session, d2, tok2, _ss, _t94, _t95, _t96, _t97;
      return _regenerator().w(function (_context79) {
        while (1) switch (_context79.p = _context79.n) {
          case 0:
            setLoading(true);
            setAuthError(null);
            _context79.p = 1;
            _context79.n = 2;
            return api.signUp(email, pass, name);
          case 2:
            d = _context79.v;
            tok = d.access_token || ((_d$session2 = d.session) === null || _d$session2 === void 0 ? void 0 : _d$session2.access_token);
            uid = (_d$user2 = d.user) === null || _d$user2 === void 0 ? void 0 : _d$user2.id;
            if (!(tok && uid)) {
              _context79.n = 8;
              break;
            }
            nameFailed = false;
            _context79.p = 3;
            _t94 = needRows;
            _context79.n = 4;
            return api.patch("profiles?id=eq.".concat(uid), {
              name: name,
              initials: mk(name)
            }, tok);
          case 4:
            _t94(_context79.v);
            _context79.n = 6;
            break;
          case 5:
            _context79.p = 5;
            _t95 = _context79.v;
            nameFailed = true;
            console.warn('profile name update failed:', _t95);
          case 6:
            ss = sessFromAuth(d);
            if (ss) sessWrite(ss);
            setToken(tok);
            setMyUserId(uid);
            _context79.n = 7;
            return initApp(tok, uid);
          case 7:
            if (nameFailed) showToast("⚠️ Conta criada, mas o teu nome não ficou guardado. Edita-o em Geral.", T.brand);
            _context79.n = 17;
            break;
          case 8:
            if (!uid) {
              _context79.n = 16;
              break;
            }
            _context79.p = 9;
            _context79.n = 10;
            return api.signIn(email, pass);
          case 10:
            d2 = _context79.v;
            tok2 = d2.access_token || ((_d2$session = d2.session) === null || _d2$session === void 0 ? void 0 : _d2$session.access_token);
            if (!tok2) {
              _context79.n = 12;
              break;
            }
            _ss = sessFromAuth(d2);
            if (_ss) sessWrite(_ss);
            setToken(tok2);
            setMyUserId(d2.user.id);
            _context79.n = 11;
            return initApp(tok2, d2.user.id);
          case 11:
            _context79.n = 13;
            break;
          case 12:
            setAuthError("Conta criada! Toca em 'Entrar' para aceder.");
          case 13:
            _context79.n = 15;
            break;
          case 14:
            _context79.p = 14;
            _t96 = _context79.v;
            setAuthError("Conta criada! Toca em 'Entrar' para aceder.");
          case 15:
            _context79.n = 17;
            break;
          case 16:
            setAuthError("Erro ao criar conta. Tenta novamente.");
          case 17:
            _context79.n = 19;
            break;
          case 18:
            _context79.p = 18;
            _t97 = _context79.v;
            setAuthError(errPt(_t97));
          case 19:
            setLoading(false);
          case 20:
            return _context79.a(2);
        }
      }, _callee79, null, [[9, 14], [3, 5], [1, 18]]);
    }));
    return function handleRegister(_x42, _x43, _x44) {
      return _ref212.apply(this, arguments);
    };
  }();
  var handleLogout = function handleLogout(opts) {
    RO.on = false;
    sessClear();
    if (!(opts && opts.local)) sessServerLogout(token);
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
    var _ref213 = _asyncToGenerator(_regenerator().m(function _callee80(d) {
      var _needRows, _needRows2, f, _t98;
      return _regenerator().w(function (_context80) {
        while (1) switch (_context80.n) {
          case 0:
            _t98 = needRows;
            _context80.n = 1;
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
            _needRows = _t98(_context80.v);
            _needRows2 = _slicedToArray(_needRows, 1);
            f = _needRows2[0];
            setFines(function (p) {
              return [aFine(f)].concat(_toConsumableArray(p));
            });
          case 2:
            return _context80.a(2);
        }
      }, _callee80);
    }));
    return function addFine(_x45) {
      return _ref213.apply(this, arguments);
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
    var _ref214 = _asyncToGenerator(_regenerator().m(function _callee81(path) {
      var still;
      return _regenerator().w(function (_context81) {
        while (1) switch (_context81.n) {
          case 0:
            _context81.n = 1;
            return api.get(path, token);
          case 1:
            still = _context81.v;
            if (!still.length) {
              _context81.n = 2;
              break;
            }
            throw new Error("sem permissão (o registo continua a existir)");
          case 2:
            return _context81.a(2);
        }
      }, _callee81);
    }));
    return function confirmGone(_x46) {
      return _ref214.apply(this, arguments);
    };
  }();
  var togglePaid = function () {
    var _ref215 = _asyncToGenerator(_regenerator().m(function _callee82(id) {
      var f, paid, _t99, _t100;
      return _regenerator().w(function (_context82) {
        while (1) switch (_context82.p = _context82.n) {
          case 0:
            f = fines.find(function (f) {
              return f.id === id;
            });
            if (f) {
              _context82.n = 1;
              break;
            }
            return _context82.a(2);
          case 1:
            paid = !f.paid;
            _context82.p = 2;
            _t99 = updated;
            _context82.n = 3;
            return api.patch("fines?id=eq.".concat(id), {
              paid: paid,
              paid_at: paid ? new Date().toISOString() : null
            }, token);
          case 3:
            _t99(_context82.v);
            setFines(function (p) {
              return p.map(function (x) {
                return x.id === id ? _objectSpread(_objectSpread({}, x), {}, {
                  paid: paid
                }) : x;
              });
            });
            _context82.n = 5;
            break;
          case 4:
            _context82.p = 4;
            _t100 = _context82.v;
            writeFailed(paid ? "marcar a multa como paga" : "marcar a multa como por pagar", _t100);
          case 5:
            return _context82.a(2);
        }
      }, _callee82, null, [[2, 4]]);
    }));
    return function togglePaid(_x47) {
      return _ref215.apply(this, arguments);
    };
  }();
  var delFine = function () {
    var _ref216 = _asyncToGenerator(_regenerator().m(function _callee83(id) {
      var _t101;
      return _regenerator().w(function (_context83) {
        while (1) switch (_context83.p = _context83.n) {
          case 0:
            _context83.p = 0;
            _context83.n = 1;
            return api.del("fines?id=eq.".concat(id), token);
          case 1:
            _context83.n = 2;
            return confirmGone("fines?id=eq.".concat(id, "&select=id"));
          case 2:
            setFines(function (p) {
              return p.filter(function (f) {
                return f.id !== id;
              });
            });
            _context83.n = 4;
            break;
          case 3:
            _context83.p = 3;
            _t101 = _context83.v;
            writeFailed("apagar a multa", _t101);
          case 4:
            return _context83.a(2);
        }
      }, _callee83, null, [[0, 3]]);
    }));
    return function delFine(_x48) {
      return _ref216.apply(this, arguments);
    };
  }();
  var editFine = function () {
    var _ref217 = _asyncToGenerator(_regenerator().m(function _callee84(id, data) {
      var _t102, _t103;
      return _regenerator().w(function (_context84) {
        while (1) switch (_context84.p = _context84.n) {
          case 0:
            _context84.p = 0;
            _t102 = updated;
            _context84.n = 1;
            return api.patch("fines?id=eq.".concat(id), {
              emoji: data.emoji,
              reason: data.reason,
              amount: data.amount
            }, token);
          case 1:
            _t102(_context84.v);
            setFines(function (p) {
              return p.map(function (f) {
                return f.id === id ? _objectSpread(_objectSpread({}, f), data) : f;
              });
            });
            _context84.n = 3;
            break;
          case 2:
            _context84.p = 2;
            _t103 = _context84.v;
            writeFailed("guardar a multa", _t103);
          case 3:
            return _context84.a(2);
        }
      }, _callee84, null, [[0, 2]]);
    }));
    return function editFine(_x49, _x50) {
      return _ref217.apply(this, arguments);
    };
  }();
  var addCard = function () {
    var _ref218 = _asyncToGenerator(_regenerator().m(function _callee85(d) {
      var _needRows3, _needRows4, c, _t104;
      return _regenerator().w(function (_context85) {
        while (1) switch (_context85.n) {
          case 0:
            _t104 = needRows;
            _context85.n = 1;
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
            _needRows3 = _t104(_context85.v);
            _needRows4 = _slicedToArray(_needRows3, 1);
            c = _needRows4[0];
            setCards(function (p) {
              return [aCard(c)].concat(_toConsumableArray(p));
            });
            return _context85.a(2, aCard(c));
        }
      }, _callee85);
    }));
    return function addCard(_x51) {
      return _ref218.apply(this, arguments);
    };
  }();
  var editCard = function editCard(id, d) {
    return guarded("card:".concat(id), _asyncToGenerator(_regenerator().m(function _callee86() {
      var _t105, _t106;
      return _regenerator().w(function (_context86) {
        while (1) switch (_context86.p = _context86.n) {
          case 0:
            _context86.p = 0;
            _t105 = needRows;
            _context86.n = 1;
            return api.patch("cards?id=eq.".concat(id), {
              kind: d.kind,
              match_date: d.date,
              opponent: d.opponent || null,
              note: d.note || null
            }, token);
          case 1:
            _t105(_context86.v);
            setCards(function (p) {
              return p.map(function (c) {
                return c.id === id ? _objectSpread(_objectSpread({}, c), d) : c;
              });
            });
            return _context86.a(2, true);
          case 2:
            _context86.p = 2;
            _t106 = _context86.v;
            writeFailed("guardar o cartão", _t106);
            return _context86.a(2, false);
        }
      }, _callee86, null, [[0, 2]]);
    })));
  };
  var delCard = function delCard(id) {
    return guarded("card:".concat(id), _asyncToGenerator(_regenerator().m(function _callee87() {
      var _t107;
      return _regenerator().w(function (_context87) {
        while (1) switch (_context87.p = _context87.n) {
          case 0:
            _context87.p = 0;
            _context87.n = 1;
            return api.del("cards?id=eq.".concat(id), token);
          case 1:
            _context87.n = 2;
            return confirmGone("cards?id=eq.".concat(id, "&select=id"));
          case 2:
            setCards(function (p) {
              return p.filter(function (c) {
                return c.id !== id;
              });
            });
            return _context87.a(2, true);
          case 3:
            _context87.p = 3;
            _t107 = _context87.v;
            writeFailed("apagar o cartão", _t107);
            return _context87.a(2, false);
        }
      }, _callee87, null, [[0, 3]]);
    })));
  };
  var serveSuspension = function serveSuspension(memberId) {
    return guarded("susp:".concat(memberId), _asyncToGenerator(_regenerator().m(function _callee88() {
      var ids, _members$find2, done, _t108, _t109;
      return _regenerator().w(function (_context88) {
        while (1) switch (_context88.p = _context88.n) {
          case 0:
            ids = cards.filter(function (c) {
              return c.teamId === teamId && String(c.memberId) === String(memberId) && c.kind === 'amarelo' && !c.consumed;
            }).sort(function (a, b) {
              return (a.date || '').localeCompare(b.date || '') || String(a.id).localeCompare(String(b.id));
            }).slice(0, 5).map(function (c) {
              return c.id;
            });
            if (!(ids.length < 5)) {
              _context88.n = 1;
              break;
            }
            return _context88.a(2, false);
          case 1:
            _context88.p = 1;
            _t108 = needRows;
            _context88.n = 2;
            return api.patch("cards?id=in.(".concat(ids.join(','), ")"), {
              consumed: true
            }, token);
          case 2:
            done = _t108(_context88.v).map(function (r) {
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
              _context88.n = 3;
              break;
            }
            throw new Error("s\xF3 ".concat(done.length, " de ").concat(ids.length, " cart\xF5es foram atualizados"));
          case 3:
            showToast("Contador de ".concat(((_members$find2 = members.find(function (m) {
              return String(m.id) === String(memberId);
            })) === null || _members$find2 === void 0 ? void 0 : _members$find2.name) || roleWord(team === null || team === void 0 ? void 0 : team.sport, false, true), " reposto a 0"), T.navy);
            return _context88.a(2, true);
          case 4:
            _context88.p = 4;
            _t109 = _context88.v;
            writeFailed("repor o contador", _t109);
            return _context88.a(2, false);
        }
      }, _callee88, null, [[1, 4]]);
    })));
  };
  var editExpense = function editExpense(id, d) {
    return guarded("exp:".concat(id), _asyncToGenerator(_regenerator().m(function _callee89() {
      var desc, amt, _updated, _updated2, e, _t110, _t111;
      return _regenerator().w(function (_context89) {
        while (1) switch (_context89.p = _context89.n) {
          case 0:
            _context89.p = 0;
            desc = String(d.description || "").trim(), amt = Number(d.amount);
            if (desc) {
              _context89.n = 1;
              break;
            }
            throw new Error("a descrição é obrigatória");
          case 1:
            if (!(!Number.isFinite(amt) || amt <= 0)) {
              _context89.n = 2;
              break;
            }
            throw new Error("o valor tem de ser maior que zero");
          case 2:
            _t110 = updated;
            _context89.n = 3;
            return api.patch("expenses?id=eq.".concat(id), {
              description: desc,
              amount: amt
            }, token);
          case 3:
            _updated = _t110(_context89.v);
            _updated2 = _slicedToArray(_updated, 1);
            e = _updated2[0];
            setExpenses(function (p) {
              return p.map(function (x) {
                return x.id === id ? aExpense(e) : x;
              });
            });
            return _context89.a(2, true);
          case 4:
            _context89.p = 4;
            _t111 = _context89.v;
            writeFailed("guardar a despesa", _t111);
            return _context89.a(2, false);
        }
      }, _callee89, null, [[0, 4]]);
    })));
  };
  var deleteExpense = function deleteExpense(id) {
    return guarded("exp:".concat(id), _asyncToGenerator(_regenerator().m(function _callee90() {
      var _t112;
      return _regenerator().w(function (_context90) {
        while (1) switch (_context90.p = _context90.n) {
          case 0:
            _context90.p = 0;
            _context90.n = 1;
            return api.del("expenses?id=eq.".concat(id), token);
          case 1:
            _context90.n = 2;
            return confirmGone("expenses?id=eq.".concat(id, "&select=id"));
          case 2:
            setExpenses(function (p) {
              return p.filter(function (x) {
                return x.id !== id;
              });
            });
            showToast("Despesa apagada", T.navy);
            return _context90.a(2, true);
          case 3:
            _context90.p = 3;
            _t112 = _context90.v;
            writeFailed("apagar a despesa", _t112);
            return _context90.a(2, false);
        }
      }, _callee90, null, [[0, 3]]);
    })));
  };
  var addExpense = function () {
    var _ref224 = _asyncToGenerator(_regenerator().m(function _callee91(d) {
      var _updated3, _updated4, e, _t113, _t114;
      return _regenerator().w(function (_context91) {
        while (1) switch (_context91.p = _context91.n) {
          case 0:
            _context91.p = 0;
            _t113 = updated;
            _context91.n = 1;
            return api.post('expenses', {
              team_id: d.teamId,
              description: d.description,
              amount: d.amount,
              created_by: myUserId
            }, token);
          case 1:
            _updated3 = _t113(_context91.v);
            _updated4 = _slicedToArray(_updated3, 1);
            e = _updated4[0];
            setExpenses(function (p) {
              return [aExpense(e)].concat(_toConsumableArray(p));
            });
            _context91.n = 3;
            break;
          case 2:
            _context91.p = 2;
            _t114 = _context91.v;
            writeFailed("registar a despesa", _t114);
          case 3:
            return _context91.a(2);
        }
      }, _callee91, null, [[0, 2]]);
    }));
    return function addExpense(_x52) {
      return _ref224.apply(this, arguments);
    };
  }();
  var logSession = function () {
    var _ref225 = _asyncToGenerator(_regenerator().m(function _callee92(recurring, date, currentPresences) {
      var alreadyLogged, newT, presArr, saved, okArr, names, shown, _t115, _t116;
      return _regenerator().w(function (_context92) {
        while (1) switch (_context92.p = _context92.n) {
          case 0:
            alreadyLogged = trainings.find(function (t) {
              return t.teamId === recurring.teamId && t.type === "treino" && t.date === date && t.location === recurring.location && t.time === recurring.time;
            });
            if (!alreadyLogged) {
              _context92.n = 1;
              break;
            }
            alert("Sessão já foi registada!");
            return _context92.a(2);
          case 1:
            _context92.p = 1;
            _t115 = needRows;
            _context92.n = 2;
            return api.post("trainings", _objectSpread(_objectSpread({
              team_id: recurring.teamId,
              type: "treino",
              date: date,
              time: recurring.time,
              location: recurring.location,
              notes: recurring.notes || null,
              recurring: false
            }, recurring.tactic ? {
              tactic: recurring.tactic
            } : {}), {}, {
              created_by: myUserId
            }), token);
          case 2:
            newT = _t115(_context92.v)[0];
            setTrainings(function (p) {
              return [].concat(_toConsumableArray(p), [aTraining(newT)]);
            });
            presArr = Object.entries(currentPresences || {}).filter(function (_ref226) {
              var _ref227 = _slicedToArray(_ref226, 2),
                s = _ref227[1];
              return s;
            });
            if (!(presArr.length > 0)) {
              _context92.n = 4;
              break;
            }
            _context92.n = 3;
            return Promise.all(presArr.map(function (_ref228) {
              var _ref229 = _slicedToArray(_ref228, 2),
                mid = _ref229[0],
                status = _ref229[1];
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
            saved = _context92.v;
            okArr = presArr.filter(function (_, i) {
              return saved[i];
            });
            setPresences(function (p) {
              return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, newT.id, Object.fromEntries(okArr)));
            });
            if (okArr.length < presArr.length) {
              names = presArr.filter(function (_, i) {
                return !saved[i];
              }).map(function (_ref230) {
                var _ref231 = _slicedToArray(_ref230, 1),
                  mid = _ref231[0];
                return (members.find(function (x) {
                  return String(x.id) === String(mid);
                }) || {}).name || "membro";
              });
              shown = names.slice(0, 4).join(", ") + (names.length > 4 ? " e mais ".concat(names.length - 4) : "");
              writeFailed("guardar todas as presenças da sessão", new Error("".concat(presArr.length - okArr.length, " de ").concat(presArr.length, " n\xE3o foram guardadas (").concat(shown, ")")));
            }
          case 4:
            _context92.n = 6;
            break;
          case 5:
            _context92.p = 5;
            _t116 = _context92.v;
            writeFailed("registar a sessão", _t116);
          case 6:
            return _context92.a(2);
        }
      }, _callee92, null, [[1, 5]]);
    }));
    return function logSession(_x53, _x54, _x55) {
      return _ref225.apply(this, arguments);
    };
  }();
  var addTraining = function () {
    var _ref232 = _asyncToGenerator(_regenerator().m(function _callee93(d) {
      var res, t, tm, isJogo, title, body, _t117;
      return _regenerator().w(function (_context93) {
        while (1) switch (_context93.n) {
          case 0:
            _t117 = needRows;
            _context93.n = 1;
            return api.post('trainings', _objectSpread(_objectSpread({
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
              squad: d.squad || null
            }, d.tactic ? {
              tactic: d.tactic
            } : {}), {}, {
              created_by: myUserId
            }), token);
          case 1:
            res = _t117(_context93.v);
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
            return _context93.a(2);
        }
      }, _callee93);
    }));
    return function addTraining(_x56) {
      return _ref232.apply(this, arguments);
    };
  }();
  var delTraining = function delTraining(id) {
    return guarded("tr:".concat(id), _asyncToGenerator(_regenerator().m(function _callee94() {
      var _t118;
      return _regenerator().w(function (_context94) {
        while (1) switch (_context94.p = _context94.n) {
          case 0:
            _context94.p = 0;
            _context94.n = 1;
            return api.del("trainings?id=eq.".concat(id), token);
          case 1:
            _context94.n = 2;
            return confirmGone("trainings?id=eq.".concat(id, "&select=id"));
          case 2:
            setTrainings(function (p) {
              return p.filter(function (t) {
                return t.id !== id;
              });
            });
            return _context94.a(2, true);
          case 3:
            _context94.p = 3;
            _t118 = _context94.v;
            writeFailed("apagar o treino", _t118);
            return _context94.a(2, false);
        }
      }, _callee94, null, [[0, 3]]);
    })));
  };
  var editTraining = function editTraining(id, d) {
    return guarded("tr:".concat(id), _asyncToGenerator(_regenerator().m(function _callee95() {
      var patch, t, _t119, _t120;
      return _regenerator().w(function (_context95) {
        while (1) switch (_context95.p = _context95.n) {
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
            if (d.tactic !== undefined) patch.tactic = d.tactic || null;
            _context95.p = 1;
            _t119 = needRows;
            _context95.n = 2;
            return api.patch("trainings?id=eq.".concat(id), patch, token);
          case 2:
            t = _t119(_context95.v)[0];
            setTrainings(function (p) {
              return p.map(function (x) {
                return x.id === id ? aTraining(t) : x;
              });
            });
            return _context95.a(2, true);
          case 3:
            _context95.p = 3;
            _t120 = _context95.v;
            writeFailed("guardar o treino", _t120);
            throw _t120;
          case 4:
            return _context95.a(2);
        }
      }, _callee95, null, [[1, 3]]);
    })));
  };
  var setPresence = function setPresence(tid, mid, status) {
    return guarded("pres:".concat(tid, ":").concat(mid), _asyncToGenerator(_regenerator().m(function _callee96() {
      var _t121, _t122;
      return _regenerator().w(function (_context96) {
        while (1) switch (_context96.p = _context96.n) {
          case 0:
            _context96.p = 0;
            if (status) {
              _context96.n = 3;
              break;
            }
            _context96.n = 1;
            return api.del("presences?training_id=eq.".concat(tid, "&member_id=eq.").concat(mid), token);
          case 1:
            _context96.n = 2;
            return confirmGone("presences?training_id=eq.".concat(tid, "&member_id=eq.").concat(mid, "&select=training_id"));
          case 2:
            setPresences(function (p) {
              var t = _objectSpread({}, p[tid] || {});
              delete t[mid];
              return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, tid, t));
            });
            _context96.n = 5;
            break;
          case 3:
            _t121 = needRows;
            _context96.n = 4;
            return api.upsert('presences', {
              training_id: tid,
              member_id: mid,
              status: status
            }, token);
          case 4:
            _t121(_context96.v);
            setPresences(function (p) {
              return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, tid, _objectSpread(_objectSpread({}, p[tid] || {}), {}, _defineProperty({}, mid, status))));
            });
          case 5:
            return _context96.a(2, true);
          case 6:
            _context96.p = 6;
            _t122 = _context96.v;
            writeFailed("guardar a presença", _t122);
            return _context96.a(2, false);
        }
      }, _callee96, null, [[0, 6]]);
    })));
  };
  var addMember = function () {
    var _ref236 = _asyncToGenerator(_regenerator().m(function _callee97(d) {
      var _r, j, m, _t123, _t124;
      return _regenerator().w(function (_context97) {
        while (1) switch (_context97.p = _context97.n) {
          case 0:
            if (isAdmin) {
              _context97.n = 1;
              break;
            }
            writeFailed("adicionar o membro", new Error("só os administradores podem adicionar membros"));
            return _context97.a(2, false);
          case 1:
            _context97.p = 1;
            _context97.n = 2;
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
            _r = _context97.v;
            j = null;
            _context97.p = 3;
            _context97.n = 4;
            return _r.json();
          case 4:
            j = _context97.v;
            _context97.n = 6;
            break;
          case 5:
            _context97.p = 5;
            _t123 = _context97.v;
            j = null;
          case 6:
            if (_r.ok) {
              _context97.n = 7;
              break;
            }
            throw new Error(j && j.message || "Erro ".concat(_r.status));
          case 7:
            m = Array.isArray(j) ? j[0] : j;
            if (!(!m || !m.id)) {
              _context97.n = 8;
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
            return _context97.a(2, true);
          case 9:
            _context97.p = 9;
            _t124 = _context97.v;
            writeFailed("adicionar o membro", _t124);
            return _context97.a(2, false);
        }
      }, _callee97, null, [[3, 5], [1, 9]]);
    }));
    return function addMember(_x57) {
      return _ref236.apply(this, arguments);
    };
  }();
  var leaveTeam = function () {
    var _ref237 = _asyncToGenerator(_regenerator().m(function _callee98(tid) {
      var m, remaining, _t125;
      return _regenerator().w(function (_context98) {
        while (1) switch (_context98.p = _context98.n) {
          case 0:
            m = members.find(function (m) {
              return m.teamId === tid && m.userId === myUserId;
            });
            if (m) {
              _context98.n = 1;
              break;
            }
            return _context98.a(2);
          case 1:
            _context98.p = 1;
            _context98.n = 2;
            return api.del("team_members?id=eq.".concat(m.id), token);
          case 2:
            _context98.n = 3;
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
              _context98.n = 4;
              break;
            }
            _context98.n = 4;
            return switchTeam(remaining[0].id);
          case 4:
            _context98.n = 6;
            break;
          case 5:
            _context98.p = 5;
            _t125 = _context98.v;
            writeFailed("sair da equipa", _t125);
          case 6:
            return _context98.a(2);
        }
      }, _callee98, null, [[1, 5]]);
    }));
    return function leaveTeam(_x58) {
      return _ref237.apply(this, arguments);
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
    var _ref238 = _asyncToGenerator(_regenerator().m(function _callee99(id, newRole) {
      var _find;
      var m, nr, res;
      return _regenerator().w(function (_context99) {
        while (1) switch (_context99.n) {
          case 0:
            m = members.find(function (m) {
              return m.id === id;
            });
            if (m) {
              _context99.n = 1;
              break;
            }
            throw new Error("Membro não encontrado");
          case 1:
            nr = newRole || (m.role === 'admin' ? 'player' : 'admin');
            if (!(m.role === "admin" && nr !== "admin" && adminCount(m.teamId) <= 1)) {
              _context99.n = 2;
              break;
            }
            throw new Error("A equipa tem de ter pelo menos um administrador.");
          case 2:
            _context99.n = 3;
            return api.patch("team_members?id=eq.".concat(id), {
              role: nr
            }, token);
          case 3:
            res = _context99.v;
            if (!(!Array.isArray(res) || !res.length)) {
              _context99.n = 4;
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
            showToast("".concat(m.name, " agora \xE9 ").concat(nr === "player" ? roleWord((_find = (teams || []).find(function (t) {
              return t && t.id === m.teamId;
            })) === null || _find === void 0 ? void 0 : _find.sport, false, true) : ROLE_LABEL[nr] || nr), T.navy);
          case 5:
            return _context99.a(2);
        }
      }, _callee99);
    }));
    return function toggleRole(_x59, _x60) {
      return _ref238.apply(this, arguments);
    };
  }();
  var removeMember = function () {
    var _ref239 = _asyncToGenerator(_regenerator().m(function _callee100(id) {
      var m, still;
      return _regenerator().w(function (_context100) {
        while (1) switch (_context100.n) {
          case 0:
            m = members.find(function (x) {
              return x.id === id;
            });
            if (!(m && m.role === "admin" && adminCount(m.teamId) <= 1)) {
              _context100.n = 1;
              break;
            }
            throw new Error("A equipa tem de ter pelo menos um administrador.");
          case 1:
            _context100.n = 2;
            return api.del("team_members?id=eq.".concat(id), token);
          case 2:
            _context100.n = 3;
            return api.get("team_members?id=eq.".concat(id, "&select=id"), token);
          case 3:
            still = _context100.v;
            if (!still.length) {
              _context100.n = 4;
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
            return _context100.a(2);
        }
      }, _callee100);
    }));
    return function removeMember(_x61) {
      return _ref239.apply(this, arguments);
    };
  }();
  var absLock = React.useRef(new Set());
  var guarded = function () {
    var _ref240 = _asyncToGenerator(_regenerator().m(function _callee101(key, fn) {
      return _regenerator().w(function (_context101) {
        while (1) switch (_context101.p = _context101.n) {
          case 0:
            if (!absLock.current.has(key)) {
              _context101.n = 1;
              break;
            }
            return _context101.a(2, false);
          case 1:
            absLock.current.add(key);
            _context101.p = 2;
            _context101.n = 3;
            return fn();
          case 3:
            return _context101.a(2, _context101.v);
          case 4:
            _context101.p = 4;
            absLock.current.delete(key);
            return _context101.f(4);
          case 5:
            return _context101.a(2);
        }
      }, _callee101, null, [[2,, 4, 5]]);
    }));
    return function guarded(_x62, _x63) {
      return _ref240.apply(this, arguments);
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
    var _ref241 = _asyncToGenerator(_regenerator().m(function _callee102(memberId, v) {
      var _t126;
      return _regenerator().w(function (_context102) {
        while (1) switch (_context102.n) {
          case 0:
            _t126 = absRow;
            _context102.n = 1;
            return rpcCall('absence_open', {
              p_member_id: memberId,
              p_kind: v.kind,
              p_emoji: v.emoji,
              p_note: v.note.trim(),
              p_start: v.start
            }, token);
          case 1:
            return _context102.a(2, _t126(_context102.v));
        }
      }, _callee102);
    }));
    return function callOpen(_x64, _x65) {
      return _ref241.apply(this, arguments);
    };
  }();
  var callClose = function () {
    var _ref242 = _asyncToGenerator(_regenerator().m(function _callee103(a, end) {
      var _t127;
      return _regenerator().w(function (_context103) {
        while (1) switch (_context103.n) {
          case 0:
            _t127 = absRow;
            _context103.n = 1;
            return rpcCall('absence_close', {
              p_absence_id: a.id,
              p_end: end && end >= a.start ? end : a.start
            }, token);
          case 1:
            return _context103.a(2, _t127(_context103.v));
        }
      }, _callee103);
    }));
    return function callClose(_x66, _x67) {
      return _ref242.apply(this, arguments);
    };
  }();
  var absOpen = function absOpen(memberId, v) {
    return guarded("m:".concat(memberId), _asyncToGenerator(_regenerator().m(function _callee104() {
      var m, a, _t128;
      return _regenerator().w(function (_context104) {
        while (1) switch (_context104.p = _context104.n) {
          case 0:
            m = members.find(function (x) {
              return x.id === memberId;
            });
            _context104.p = 1;
            needNote(v);
            _context104.n = 2;
            return callOpen(memberId, v);
          case 2:
            a = _context104.v;
            absPut(a);
            setMemberUnavail(memberId, a);
            showToast("".concat(m ? m.name : roleWord(team === null || team === void 0 ? void 0 : team.sport), " marcado como indispon\xEDvel"), T.navy);
            return _context104.a(2, true);
          case 3:
            _context104.p = 3;
            _t128 = _context104.v;
            writeFailed("guardar a lesão/ausência", _t128);
            return _context104.a(2, false);
        }
      }, _callee104, null, [[1, 3]]);
    })));
  };
  var absClose = function absClose(a) {
    return guarded("a:".concat(a.id), _asyncToGenerator(_regenerator().m(function _callee105() {
      var _r2, _t129;
      return _regenerator().w(function (_context105) {
        while (1) switch (_context105.p = _context105.n) {
          case 0:
            _context105.p = 0;
            _context105.n = 1;
            return callClose(a, todayLocal());
          case 1:
            _r2 = _context105.v;
            absPut(_r2);
            if (_r2.memberId) setMemberUnavail(_r2.memberId, null);
            showToast("".concat(a.memberName, ": ").concat(ABS_KINDS[a.kind].one, " fechada"), T.navy);
            return _context105.a(2, true);
          case 2:
            _context105.p = 2;
            _t129 = _context105.v;
            writeFailed("fechar o registo", _t129);
            return _context105.a(2, false);
        }
      }, _callee105, null, [[0, 2]]);
    })));
  };
  var absUpdate = function absUpdate(a, v) {
    return guarded("a:".concat(a.id), _asyncToGenerator(_regenerator().m(function _callee106() {
      var _r3, _t130, _t131;
      return _regenerator().w(function (_context106) {
        while (1) switch (_context106.p = _context106.n) {
          case 0:
            _context106.p = 0;
            needNote(v);
            _t130 = absRow;
            _context106.n = 1;
            return rpcCall('absence_update', {
              p_absence_id: a.id,
              p_kind: v.kind,
              p_emoji: v.emoji,
              p_note: v.note.trim(),
              p_start: v.start,
              p_end: a.end ? v.end || a.end : null
            }, token);
          case 1:
            _r3 = _t130(_context106.v);
            absPut(_r3);
            if (!_r3.end && _r3.memberId) setMemberUnavail(_r3.memberId, _r3);
            return _context106.a(2, true);
          case 2:
            _context106.p = 2;
            _t131 = _context106.v;
            writeFailed("guardar o registo", _t131);
            return _context106.a(2, false);
        }
      }, _callee106, null, [[0, 2]]);
    })));
  };
  var absDelete = function absDelete(a) {
    return guarded("a:".concat(a.id), _asyncToGenerator(_regenerator().m(function _callee107() {
      var res, _t132;
      return _regenerator().w(function (_context107) {
        while (1) switch (_context107.p = _context107.n) {
          case 0:
            _context107.p = 0;
            _context107.n = 1;
            return rpcCall('absence_delete', {
              p_absence_id: a.id
            }, token);
          case 1:
            res = _context107.v;
            if (!(res !== a.id)) {
              _context107.n = 2;
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
            return _context107.a(2, true);
          case 3:
            _context107.p = 3;
            _t132 = _context107.v;
            writeFailed("apagar o registo", _t132);
            return _context107.a(2, false);
        }
      }, _callee107, null, [[0, 3]]);
    })));
  };
  var absAddPast = function absAddPast(memberId, v) {
    return guarded("m:".concat(memberId), _asyncToGenerator(_regenerator().m(function _callee108() {
      var opened, closed, res, _t133, _t134;
      return _regenerator().w(function (_context108) {
        while (1) switch (_context108.p = _context108.n) {
          case 0:
            opened = null;
            _context108.p = 1;
            needNote(v);
            if (!(!v.end || v.end < v.start)) {
              _context108.n = 2;
              break;
            }
            throw new Error("a data de fim não pode ser anterior ao início");
          case 2:
            _context108.n = 3;
            return callOpen(memberId, v);
          case 3:
            opened = _context108.v;
            _context108.n = 4;
            return callClose(opened, v.end);
          case 4:
            closed = _context108.v;
            absPut(closed);
            setMemberUnavail(memberId, null);
            showToast("Registo adicionado", T.navy);
            return _context108.a(2, true);
          case 5:
            _context108.p = 5;
            _t133 = _context108.v;
            if (!opened) {
              _context108.n = 10;
              break;
            }
            _context108.p = 6;
            _context108.n = 7;
            return rpcCall('absence_delete', {
              p_absence_id: opened.id
            }, token);
          case 7:
            res = _context108.v;
            if (!(res !== opened.id)) {
              _context108.n = 8;
              break;
            }
            throw new Error("não confirmado");
          case 8:
            _context108.n = 10;
            break;
          case 9:
            _context108.p = 9;
            _t134 = _context108.v;
            absPut(opened);
            setMemberUnavail(memberId, opened);
            writeFailed("adicionar o registo (ficou em curso, fecha-o ou apaga-o à mão)", _t133);
            return _context108.a(2, false);
          case 10:
            writeFailed("adicionar o registo", _t133);
            return _context108.a(2, false);
        }
      }, _callee108, null, [[6, 9], [1, 5]]);
    })));
  };
  var absLegacy = function absLegacy(m, v, closeAfter) {
    return guarded("m:".concat(m.id), _asyncToGenerator(_regenerator().m(function _callee109() {
      var opened, closed, _t135, _t136;
      return _regenerator().w(function (_context109) {
        while (1) switch (_context109.p = _context109.n) {
          case 0:
            opened = null;
            _context109.p = 1;
            needNote(v);
            _t135 = (absences || []).find(function (x) {
              return x.memberId === m.id && !x.end;
            });
            if (_t135) {
              _context109.n = 3;
              break;
            }
            _context109.n = 2;
            return callOpen(m.id, _objectSpread(_objectSpread({}, v), {}, {
              start: m.unavailableSince || v.start
            }));
          case 2:
            _t135 = _context109.v;
          case 3:
            opened = _t135;
            absPut(opened);
            setMemberUnavail(m.id, opened);
            if (!closeAfter) {
              _context109.n = 5;
              break;
            }
            _context109.n = 4;
            return callClose(opened, todayLocal());
          case 4:
            closed = _context109.v;
            absPut(closed);
            setMemberUnavail(m.id, null);
            showToast("".concat(m.name, ": ").concat(ABS_KINDS[closed.kind].one, " fechada"), T.navy);
          case 5:
            return _context109.a(2, true);
          case 6:
            _context109.p = 6;
            _t136 = _context109.v;
            writeFailed(closeAfter && opened ? "fechar o registo (a nota ficou guardada, tenta fechar outra vez)" : "guardar o registo", _t136);
            return _context109.a(2, false);
        }
      }, _callee109, null, [[1, 6]]);
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
    return guarded("mem:".concat(id), _asyncToGenerator(_regenerator().m(function _callee110() {
      var m, _find2, profs, prof, tmr, saved, free, same, diff, _t137;
      return _regenerator().w(function (_context110) {
        while (1) switch (_context110.p = _context110.n) {
          case 0:
            m = members.find(function (m) {
              return m.id === id;
            });
            _context110.p = 1;
            if (m) {
              _context110.n = 2;
              break;
            }
            throw new Error("membro não encontrado");
          case 2:
            _context110.n = 3;
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
            _context110.n = 4;
            return rpcCall('get_team_profiles', {
              p_team_id: m.teamId
            }, token);
          case 4:
            profs = _context110.v;
            prof = (Array.isArray(profs) ? profs : []).find(function (x) {
              return x.id === m.userId;
            });
            _context110.n = 5;
            return api.get("team_members?id=eq.".concat(id, "&select=position"), token);
          case 5:
            tmr = _context110.v;
            if (!(!prof || !Array.isArray(tmr) || !tmr.length)) {
              _context110.n = 6;
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
            free = isFreeSport((_find2 = (teams || []).find(function (t) {
              return t && t.id === m.teamId;
            })) === null || _find2 === void 0 ? void 0 : _find2.sport);
            setMembers(function (p) {
              return p.map(function (x) {
                return x.id === id ? _objectSpread(_objectSpread(_objectSpread({}, x), saved), {}, {
                  position: free ? saved.position : saved.position || x.position,
                  initials: mk(saved.name || x.name)
                }) : x;
              });
            });
            if (m.userId === myUserId) setProfile(function (p) {
              return free ? _objectSpread(_objectSpread(_objectSpread({}, p), saved), {}, {
                position: p.position
              }) : _objectSpread(_objectSpread({}, p), saved);
            });
            same = function same(a, b) {
              return String(a == null ? "" : a).trim() === String(b == null ? "" : b).trim();
            };
            diff = [["nome", data.name, saved.name], ["telefone", data.phone, saved.phone], ["aniversário", data.birthday, saved.birthday], ["posição", data.position, saved.position]].filter(function (_ref250) {
              var _ref251 = _slicedToArray(_ref250, 3),
                sent = _ref251[1],
                got = _ref251[2];
              return !same(sent, got);
            }).map(function (_ref252) {
              var _ref253 = _slicedToArray(_ref252, 1),
                n = _ref253[0];
              return n;
            });
            if (!diff.length) {
              _context110.n = 7;
              break;
            }
            throw new Error("a base de dados n\xE3o guardou: ".concat(diff.join(", ")));
          case 7:
            return _context110.a(2, true);
          case 8:
            _context110.p = 8;
            _t137 = _context110.v;
            writeFailed("guardar o perfil do membro", _t137);
            return _context110.a(2, false);
        }
      }, _callee110, null, [[1, 8]]);
    })));
  };
  var _useState563 = useState(null),
    _useState564 = _slicedToArray(_useState563, 2),
    teamError = _useState564[0],
    setTeamError = _useState564[1];
  var createTeam = function () {
    var _ref254 = _asyncToGenerator(_regenerator().m(function _callee111(d) {
      var criada, nome, issue, tid, invCode, sr, se, tr, newTeam, msg, _t138;
      return _regenerator().w(function (_context111) {
        while (1) switch (_context111.p = _context111.n) {
          case 0:
            setTeamError(null);
            criada = false;
            _context111.p = 1;
            nome = normTeamName(d.name);
            issue = teamNameIssue(nome);
            if (!issue) {
              _context111.n = 2;
              break;
            }
            throw new Error(issue);
          case 2:
            _context111.n = 3;
            return checkTeamName(nome, null, token);
          case 3:
            tid = crypto.randomUUID();
            invCode = Math.random().toString(36).substring(2, 5).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
            _context111.n = 4;
            return api.post('teams', _objectSpread(_objectSpread({
              id: tid,
              name: nome,
              emoji: d.emoji,
              color: d.color,
              season: d.season || '2025/26',
              country: d.country || 'Portugal',
              sport: d.sport || 'Futebol 11',
              currency: d.currency || 'EUR',
              city: normPlace(d.city),
              postal: normPlace(d.postal)
            }, normTactic(d.tactic) ? {
              tactic: normTactic(d.tactic)
            } : {}), {}, {
              created_by: myUserId,
              invite_code: invCode
            }), token);
          case 4:
            criada = true;
            _context111.n = 5;
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
            sr = _context111.v;
            if (sr.ok) {
              _context111.n = 7;
              break;
            }
            _context111.n = 6;
            return sr.json();
          case 6:
            se = _context111.v;
            throw new Error(se.message || se.hint || 'Erro ao configurar equipa');
          case 7:
            _context111.n = 8;
            return api.get("teams?id=eq.".concat(tid), token);
          case 8:
            tr = _context111.v;
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
            _context111.n = 9;
            return switchTeam(tid);
          case 9:
            _context111.n = 12;
            break;
          case 10:
            _context111.p = 10;
            _t138 = _context111.v;
            if (criada) {
              _context111.n = 11;
              break;
            }
            throw new Error(teamErrPt(_t138));
          case 11:
            msg = errPt(_t138);
            setTeamError(msg);
            showToast("\u26A0\uFE0F ".concat(msg), T.brand);
          case 12:
            return _context111.a(2);
        }
      }, _callee111, null, [[1, 10]]);
    }));
    return function createTeam(_x68) {
      return _ref254.apply(this, arguments);
    };
  }();
  var editTeam = function () {
    var _ref255 = _asyncToGenerator(_regenerator().m(function _callee112(id, patch) {
      var nome, issue, res, _t139;
      return _regenerator().w(function (_context112) {
        while (1) switch (_context112.p = _context112.n) {
          case 0:
            if (!(patch && patch.name !== undefined)) {
              _context112.n = 2;
              break;
            }
            nome = normTeamName(patch.name);
            issue = teamNameIssue(nome);
            if (!issue) {
              _context112.n = 1;
              break;
            }
            throw new Error(issue);
          case 1:
            patch = _objectSpread(_objectSpread({}, patch), {}, {
              name: nome
            });
            _context112.n = 2;
            return checkTeamName(nome, id, token);
          case 2:
            _context112.p = 2;
            _context112.n = 3;
            return api.patch("teams?id=eq.".concat(id), patch, token);
          case 3:
            res = _context112.v;
            _context112.n = 6;
            break;
          case 4:
            _context112.p = 4;
            _t139 = _context112.v;
            if (!(patch && patch.name !== undefined && isTeamNameDup(_t139))) {
              _context112.n = 5;
              break;
            }
            throw new Error(TEAM_NAME_TAKEN);
          case 5:
            throw _t139;
          case 6:
            if (!(!Array.isArray(res) || !res.length)) {
              _context112.n = 7;
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
            return _context112.a(2);
        }
      }, _callee112, null, [[2, 4]]);
    }));
    return function editTeam(_x69, _x70) {
      return _ref255.apply(this, arguments);
    };
  }();
  var deleteTeam = function () {
    var _ref256 = _asyncToGenerator(_regenerator().m(function _callee113(teamId) {
      var still, remaining, _t140;
      return _regenerator().w(function (_context113) {
        while (1) switch (_context113.p = _context113.n) {
          case 0:
            _context113.n = 1;
            return api.del("teams?id=eq.".concat(teamId), token);
          case 1:
            _context113.n = 2;
            return api.get("teams?id=eq.".concat(teamId, "&select=id"), token);
          case 2:
            still = _context113.v;
            if (!still.length) {
              _context113.n = 3;
              break;
            }
            throw new Error("Não foi possível apagar (sem permissão?)");
          case 3:
            _context113.p = 3;
            remaining = teams.filter(function (t) {
              return t.id !== teamId;
            });
            setTeams(remaining);
            setSub(null);
            setTab("home");
            if (!(remaining.length > 0)) {
              _context113.n = 5;
              break;
            }
            _context113.n = 4;
            return switchTeam(remaining[0].id);
          case 4:
            _context113.n = 6;
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
            _context113.n = 8;
            break;
          case 7:
            _context113.p = 7;
            _t140 = _context113.v;
            console.error('deleteTeam error:', _t140);
          case 8:
            return _context113.a(2);
        }
      }, _callee113, null, [[3, 7]]);
    }));
    return function deleteTeam(_x71) {
      return _ref256.apply(this, arguments);
    };
  }();
  var _useState565 = useState(null),
    _useState566 = _slicedToArray(_useState565, 2),
    myClaims = _useState566[0],
    setMyClaims = _useState566[1];
  var _useState567 = useState({}),
    _useState568 = _slicedToArray(_useState567, 2),
    claimCounts = _useState568[0],
    setClaimCounts = _useState568[1];
  var _useState569 = useState(false),
    _useState570 = _slicedToArray(_useState569, 2),
    claimsWarn = _useState570[0],
    setClaimsWarn = _useState570[1];
  var teamsRef = React.useRef(teams);
  teamsRef.current = teams;
  var handledApprovedRef = React.useRef(new Set());
  var claimsTotal = Object.values(claimCounts).reduce(function (a, n) {
    return a + (Number(n) || 0);
  }, 0);
  var claimsFlight = React.useRef(false);
  var claimsAgain = React.useRef(false);
  var _refreshClaims = function () {
    var _ref257 = _asyncToGenerator(_regenerator().m(function _callee115() {
      var warns, mine, list, fresh, ids, rows, counts, countFailed, _t142, _t143, _t144;
      return _regenerator().w(function (_context115) {
        while (1) switch (_context115.p = _context115.n) {
          case 0:
            if (!(!token || !myUserId || RO.on)) {
              _context115.n = 1;
              break;
            }
            return _context115.a(2);
          case 1:
            if (!claimsFlight.current) {
              _context115.n = 2;
              break;
            }
            claimsAgain.current = true;
            return _context115.a(2);
          case 2:
            claimsFlight.current = true;
            warns = [];
            _context115.p = 3;
            _context115.p = 4;
            _context115.n = 5;
            return rpcCall('my_claims', {}, token);
          case 5:
            mine = _context115.v;
            list = Array.isArray(mine) ? mine : [];
            setMyClaims(list);
            fresh = list.find(function (c) {
              return c.status === "aprovado" && !teamsRef.current.some(function (t) {
                return t.id === c.team_id;
              }) && !handledApprovedRef.current.has(c.id);
            });
            if (!fresh) {
              _context115.n = 7;
              break;
            }
            handledApprovedRef.current.add(fresh.id);
            _context115.n = 6;
            return initApp(token, myUserId);
          case 6:
            showToast("O admin aprovou: \xE9s o perfil ".concat(fresh.member_name || "").trim(), T.navy);
          case 7:
            _context115.n = 9;
            break;
          case 8:
            _context115.p = 8;
            _t142 = _context115.v;
            console.warn("my_claims failed:", _t142 && _t142.message);
            warns.push("Não foi possível carregar os teus pedidos de perfil.");
          case 9:
            _context115.p = 9;
            ids = new Set(teamsRef.current.filter(function (t) {
              return t.createdBy === myUserId;
            }).map(function (t) {
              return t.id;
            }));
            _context115.p = 10;
            _context115.n = 11;
            return api.get("team_members?user_id=eq.".concat(myUserId, "&role=eq.admin&select=team_id"), token);
          case 11:
            rows = _context115.v;
            (Array.isArray(rows) ? rows : []).forEach(function (r) {
              return ids.add(r.team_id);
            });
            _context115.n = 13;
            break;
          case 12:
            _context115.p = 12;
            _t143 = _context115.v;
            console.warn("admin teams read failed:", _t143 && _t143.message);
            warns.push("Não foi possível ver as equipas onde és administrador. Os pedidos de perfil podem não aparecer.");
          case 13:
            counts = {};
            countFailed = false;
            _context115.n = 14;
            return Promise.all(_toConsumableArray(ids).filter(function (id) {
              return teamsRef.current.some(function (t) {
                return t.id === id;
              });
            }).map(function () {
              var _ref258 = _asyncToGenerator(_regenerator().m(function _callee114(id) {
                var _r4, _t141;
                return _regenerator().w(function (_context114) {
                  while (1) switch (_context114.p = _context114.n) {
                    case 0:
                      _context114.p = 0;
                      _context114.n = 1;
                      return rpcCall('list_team_claims', {
                        p_team_id: id
                      }, token);
                    case 1:
                      _r4 = _context114.v;
                      claimNamesRemember(_r4, "member_name", "member_avatar");
                      counts[id] = (Array.isArray(_r4) ? _r4 : []).filter(function (c) {
                        return c.status === "pendente" && (!c.question || !!c.answer);
                      }).length;
                      _context114.n = 3;
                      break;
                    case 2:
                      _context114.p = 2;
                      _t141 = _context114.v;
                      console.warn("list_team_claims failed:", _t141 && _t141.message);
                      countFailed = true;
                    case 3:
                      return _context114.a(2);
                  }
                }, _callee114, null, [[0, 2]]);
              }));
              return function (_x72) {
                return _ref258.apply(this, arguments);
              };
            }()));
          case 14:
            if (countFailed) warns.push("Não foi possível contar os pedidos de perfil pendentes.");
            setClaimCounts(counts);
            _context115.n = 16;
            break;
          case 15:
            _context115.p = 15;
            _t144 = _context115.v;
            console.warn("claim counts failed:", _t144 && _t144.message);
            warns.push("Não foi possível contar os pedidos de perfil pendentes.");
          case 16:
            setClaimsWarn(warns.length ? _toConsumableArray(new Set(warns)).join(" ") : false);
          case 17:
            _context115.p = 17;
            claimsFlight.current = false;
            if (claimsAgain.current) {
              claimsAgain.current = false;
              _refreshClaims();
            }
            return _context115.f(17);
          case 18:
            return _context115.a(2);
        }
      }, _callee115, null, [[10, 12], [9, 15], [4, 8], [3,, 17, 18]]);
    }));
    return function refreshClaims() {
      return _ref257.apply(this, arguments);
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
    var _ref259 = _asyncToGenerator(_regenerator().m(function _callee116(code) {
      var _r5, _t145;
      return _regenerator().w(function (_context116) {
        while (1) switch (_context116.p = _context116.n) {
          case 0:
            _context116.p = 0;
            _context116.n = 1;
            return rpcCall('list_claimable_members', {
              p_code: String(code || "").trim().toUpperCase()
            }, token);
          case 1:
            _r5 = _context116.v;
            return _context116.a(2, Array.isArray(_r5) ? _r5 : []);
          case 2:
            _context116.p = 2;
            _t145 = _context116.v;
            console.warn("list_claimable_members failed:", _t145 && _t145.message);
            throw _t145;
          case 3:
            return _context116.a(2);
        }
      }, _callee116, null, [[0, 2]]);
    }));
    return function listClaimable(_x73) {
      return _ref259.apply(this, arguments);
    };
  }();
  var requestClaim = function () {
    var _ref260 = _asyncToGenerator(_regenerator().m(function _callee117(code, memberId, note) {
      return _regenerator().w(function (_context117) {
        while (1) switch (_context117.n) {
          case 0:
            _context117.n = 1;
            return rpcCall('request_claim', {
              p_code: String(code || "").trim().toUpperCase(),
              p_member_id: memberId,
              p_note: note ? note : null
            }, token);
          case 1:
            _context117.n = 2;
            return _refreshClaims();
          case 2:
            return _context117.a(2);
        }
      }, _callee117);
    }));
    return function requestClaim(_x74, _x75, _x76) {
      return _ref260.apply(this, arguments);
    };
  }();
  var editClaimNote = function () {
    var _ref261 = _asyncToGenerator(_regenerator().m(function _callee118(id, note) {
      return _regenerator().w(function (_context118) {
        while (1) switch (_context118.n) {
          case 0:
            _context118.n = 1;
            return rpcCall('update_claim_note', {
              p_claim_id: id,
              p_note: note ? note : null
            }, token);
          case 1:
            _context118.n = 2;
            return _refreshClaims();
          case 2:
            showToast("Mensagem atualizada", T.navy);
          case 3:
            return _context118.a(2);
        }
      }, _callee118);
    }));
    return function editClaimNote(_x77, _x78) {
      return _ref261.apply(this, arguments);
    };
  }();
  var answerClaim = function () {
    var _ref262 = _asyncToGenerator(_regenerator().m(function _callee119(id, text) {
      return _regenerator().w(function (_context119) {
        while (1) switch (_context119.n) {
          case 0:
            _context119.n = 1;
            return rpcCall('answer_claim_question', {
              p_claim_id: id,
              p_answer: text
            }, token);
          case 1:
            _context119.n = 2;
            return _refreshClaims();
          case 2:
            showToast(text ? "Resposta enviada" : "Resposta apagada", T.navy);
          case 3:
            return _context119.a(2);
        }
      }, _callee119);
    }));
    return function answerClaim(_x79, _x80) {
      return _ref262.apply(this, arguments);
    };
  }();
  var myQuestionCount = Array.isArray(myClaims) ? myClaims.filter(function (c) {
    return c.status === "pendente" && c.question && !c.answer;
  }).length : 0;
  var cancelClaim = function () {
    var _ref263 = _asyncToGenerator(_regenerator().m(function _callee120(id) {
      return _regenerator().w(function (_context120) {
        while (1) switch (_context120.n) {
          case 0:
            _context120.n = 1;
            return rpcCall('cancel_claim', {
              p_claim_id: id
            }, token);
          case 1:
            _context120.n = 2;
            return _refreshClaims();
          case 2:
            showToast("Pedido cancelado", T.navy);
          case 3:
            return _context120.a(2);
        }
      }, _callee120);
    }));
    return function cancelClaim(_x81) {
      return _ref263.apply(this, arguments);
    };
  }();
  var claimsChanged = function () {
    var _ref264 = _asyncToGenerator(_regenerator().m(function _callee121() {
      return _regenerator().w(function (_context121) {
        while (1) switch (_context121.n) {
          case 0:
            _context121.n = 1;
            return refresh();
          case 1:
            _context121.n = 2;
            return _refreshClaims();
          case 2:
            return _context121.a(2);
        }
      }, _callee121);
    }));
    return function claimsChanged() {
      return _ref264.apply(this, arguments);
    };
  }();
  var joinTeam = function () {
    var _ref265 = _asyncToGenerator(_regenerator().m(function _callee122(t) {
      var _e$message, _t146;
      return _regenerator().w(function (_context122) {
        while (1) switch (_context122.p = _context122.n) {
          case 0:
            _context122.p = 0;
            _context122.n = 1;
            return api.insert('team_members', {
              team_id: t.id,
              user_id: myUserId,
              role: 'player'
            }, token);
          case 1:
            _context122.n = 3;
            break;
          case 2:
            _context122.p = 2;
            _t146 = _context122.v;
            if ((_e$message = _t146.message) !== null && _e$message !== void 0 && _e$message.includes('duplicate key')) {
              _context122.n = 3;
              break;
            }
            alert("Erro ao entrar na equipa: ".concat(errPt(_t146, "tenta novamente")));
            return _context122.a(2);
          case 3:
            setTeams(function (prev) {
              return prev.some(function (x) {
                return x.id === t.id;
              }) ? prev : [].concat(_toConsumableArray(prev), [t]);
            });
            _context122.n = 4;
            return switchTeam(t.id);
          case 4:
            return _context122.a(2);
        }
      }, _callee122, null, [[0, 2]]);
    }));
    return function joinTeam(_x82) {
      return _ref265.apply(this, arguments);
    };
  }();
  var findTeamByCode = function () {
    var _ref266 = _asyncToGenerator(_regenerator().m(function _callee123(code) {
      var r, d, t, _t147;
      return _regenerator().w(function (_context123) {
        while (1) switch (_context123.p = _context123.n) {
          case 0:
            _context123.n = 1;
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
            r = _context123.v;
            if (r.ok) {
              _context123.n = 2;
              break;
            }
            throw new Error("N\xE3o foi poss\xEDvel procurar a equipa (erro ".concat(r.status, ")."));
          case 2:
            d = null;
            _context123.p = 3;
            _context123.n = 4;
            return r.json();
          case 4:
            d = _context123.v;
            _context123.n = 6;
            break;
          case 5:
            _context123.p = 5;
            _t147 = _context123.v;
            d = null;
          case 6:
            t = Array.isArray(d) ? d[0] : d;
            return _context123.a(2, t !== null && t !== void 0 && t.id ? aTeam(_objectSpread(_objectSpread({}, t), {}, {
              invite_code: t.invite_code
            })) : null);
        }
      }, _callee123, null, [[3, 5]]);
    }));
    return function findTeamByCode(_x83) {
      return _ref266.apply(this, arguments);
    };
  }();
  var _useState571 = useState(function () {
      var p = new URLSearchParams(window.location.search);
      return p.get('invite') || null;
    }),
    _useState572 = _slicedToArray(_useState571, 2),
    pendingInvite = _useState572[0],
    setPendingInvite = _useState572[1];
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
    var _ref267 = _asyncToGenerator(_regenerator().m(function _callee124(tok, uid) {
      var reg, _sub, existing, subJson, res, _subJson$keys, _subJson$keys2, _t148, _t149, _t150, _t151;
      return _regenerator().w(function (_context124) {
        while (1) switch (_context124.p = _context124.n) {
          case 0:
            if (!RO.on) {
              _context124.n = 1;
              break;
            }
            return _context124.a(2);
          case 1:
            _context124.p = 1;
            _context124.n = 2;
            return Promise.race([navigator.serviceWorker.ready, new Promise(function (_, rej) {
              return setTimeout(function () {
                return rej(Object.assign(new Error("service worker sem ready"), {
                  pushCode: "sw"
                }));
              }, 8000);
            })]);
          case 2:
            reg = _context124.v;
            _context124.p = 3;
            _context124.n = 4;
            return reg.pushManager.getSubscription();
          case 4:
            existing = _context124.v;
            _t148 = existing;
            if (_t148) {
              _context124.n = 6;
              break;
            }
            _context124.n = 5;
            return reg.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: VAPID_PUBLIC
            });
          case 5:
            _t148 = _context124.v;
          case 6:
            _sub = _t148;
            _context124.n = 8;
            break;
          case 7:
            _context124.p = 7;
            _t149 = _context124.v;
            throw Object.assign(_t149, {
              pushCode: _t149 && _t149.pushCode || "subscrever"
            });
          case 8:
            subJson = _sub.toJSON();
            _context124.p = 9;
            _context124.n = 10;
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
            res = _context124.v;
            _context124.n = 12;
            break;
          case 11:
            _context124.p = 11;
            _t150 = _context124.v;
            throw Object.assign(_t150, {
              pushCode: "gravar"
            });
          case 12:
            if (!(!res.ok && res.status !== 409)) {
              _context124.n = 13;
              break;
            }
            throw Object.assign(new Error("erro ".concat(res.status)), {
              pushCode: "gravar"
            });
          case 13:
            setPushIssue(null);
            _context124.n = 15;
            break;
          case 14:
            _context124.p = 14;
            _t151 = _context124.v;
            console.warn("Push subscribe failed:", _t151 && _t151.message);
            setPushIssue({
              code: _t151 && _t151.pushCode || "subscrever",
              detail: _t151 && _t151.pushCode === "gravar" && /^erro \d+$/.test(String(_t151.message)) ? _t151.message : ""
            });
          case 15:
            return _context124.a(2);
        }
      }, _callee124, null, [[9, 11], [3, 7], [1, 14]]);
    }));
    return function subscribeToPush(_x84, _x85) {
      return _ref267.apply(this, arguments);
    };
  }();
  var checkPush = function () {
    var _ref268 = _asyncToGenerator(_regenerator().m(function _callee125(tok, uid, ask) {
      var perm;
      return _regenerator().w(function (_context125) {
        while (1) switch (_context125.n) {
          case 0:
            if (!RO.on) {
              _context125.n = 1;
              break;
            }
            return _context125.a(2);
          case 1:
            if (!(!("serviceWorker" in navigator) || !("PushManager" in window) || !("Notification" in window))) {
              _context125.n = 2;
              break;
            }
            setPushIssue({
              code: isIOSDevice() && !isStandaloneApp() ? "ios-instalar" : "sem-suporte"
            });
            return _context125.a(2);
          case 2:
            if (!(Notification.permission === "denied")) {
              _context125.n = 3;
              break;
            }
            setPushIssue({
              code: "bloqueado"
            });
            return _context125.a(2);
          case 3:
            if (!(Notification.permission === "default")) {
              _context125.n = 7;
              break;
            }
            if (ask) {
              _context125.n = 4;
              break;
            }
            return _context125.a(2);
          case 4:
            _context125.n = 5;
            return Notification.requestPermission();
          case 5:
            perm = _context125.v;
            if (!(perm === "denied")) {
              _context125.n = 6;
              break;
            }
            setPushIssue({
              code: "bloqueado"
            });
            return _context125.a(2);
          case 6:
            if (!(perm !== "granted")) {
              _context125.n = 7;
              break;
            }
            return _context125.a(2);
          case 7:
            _context125.n = 8;
            return subscribeToPush(tok, uid);
          case 8:
            return _context125.a(2);
        }
      }, _callee125);
    }));
    return function checkPush(_x86, _x87, _x88) {
      return _ref268.apply(this, arguments);
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
  var _useState573 = useState(null),
    _useState574 = _slicedToArray(_useState573, 2),
    toast = _useState574[0],
    setToast = _useState574[1];
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
    var _ref269 = _asyncToGenerator(_regenerator().m(function _callee126(teamId, members, title, body) {
      var userIds, res, det, _t152, _t153;
      return _regenerator().w(function (_context126) {
        while (1) switch (_context126.p = _context126.n) {
          case 0:
            if (!RO.on) {
              _context126.n = 1;
              break;
            }
            return _context126.a(2);
          case 1:
            userIds = members.map(function (m) {
              return m.userId;
            }).filter(Boolean);
            if (userIds.length) {
              _context126.n = 2;
              break;
            }
            return _context126.a(2);
          case 2:
            _context126.p = 2;
            _context126.n = 3;
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
            res = _context126.v;
            if (res.ok) {
              _context126.n = 8;
              break;
            }
            det = "";
            _context126.p = 4;
            _context126.n = 5;
            return res.text();
          case 5:
            det = _context126.v.slice(0, 80);
            _context126.n = 7;
            break;
          case 6:
            _context126.p = 6;
            _t152 = _context126.v;
          case 7:
            throw new Error("HTTP ".concat(res.status).concat(det ? " " + det : ""));
          case 8:
            _context126.n = 10;
            break;
          case 9:
            _context126.p = 9;
            _t153 = _context126.v;
            notePushFail(_t153 && _t153.message);
          case 10:
            return _context126.a(2);
        }
      }, _callee126, null, [[4, 6], [2, 9]]);
    }));
    return function sendPushToTeam(_x89, _x90, _x91, _x92) {
      return _ref269.apply(this, arguments);
    };
  }();
  var addFineWithToast = function () {
    var _ref270 = _asyncToGenerator(_regenerator().m(function _callee127(d) {
      var m;
      return _regenerator().w(function (_context127) {
        while (1) switch (_context127.n) {
          case 0:
            _context127.n = 1;
            return addFine(d);
          case 1:
            m = members.find(function (x) {
              return String(x.id) === String(d.memberId);
            });
            showToast("\uD83D\uDFE5 Multa de ".concat(fmtMoney(d.amount, teamCur(teams.find(function (t) {
              return t.id === d.teamId;
            }) || team)), " atribu\xEDda a ").concat((m === null || m === void 0 ? void 0 : m.name) || roleWord(team === null || team === void 0 ? void 0 : team.sport, false, true)), T.brand);
            if (m !== null && m !== void 0 && m.userId) {
              sendPushToTeam(d.teamId, [m], "🟥 Recebeste uma multa!", "".concat(fmtMoney(d.amount, teamCur(teams.find(function (t) {
                return t.id === d.teamId;
              }) || team)), " \u2014 ").concat(d.reason || "Multa atribuída")).catch(function () {});
            }
          case 2:
            return _context127.a(2);
        }
      }, _callee127);
    }));
    return function addFineWithToast(_x93) {
      return _ref270.apply(this, arguments);
    };
  }();
  var addCardWithAlert = function () {
    var _ref271 = _asyncToGenerator(_regenerator().m(function _callee128(d) {
      var c, m, name, y, managers;
      return _regenerator().w(function (_context128) {
        while (1) switch (_context128.n) {
          case 0:
            _context128.n = 1;
            return addCard(d);
          case 1:
            c = _context128.v;
            m = members.find(function (x) {
              return String(x.id) === String(d.memberId);
            });
            name = (m === null || m === void 0 ? void 0 : m.name) || roleWord(team === null || team === void 0 ? void 0 : team.sport, false, true);
            showToast("".concat(d.kind === 'amarelo' ? "🟨" : "🟥", " Cart\xE3o ").concat(d.kind, " lan\xE7ado a ").concat(name), d.kind === 'amarelo' ? "#B38F00" : T.brand);
            if (!(c.kind !== 'amarelo')) {
              _context128.n = 2;
              break;
            }
            return _context128.a(2);
          case 2:
            y = cards.filter(function (x) {
              return x.teamId === d.teamId && String(x.memberId) === String(d.memberId) && x.kind === 'amarelo' && !x.consumed;
            }).length + 1;
            if (!(y < 4)) {
              _context128.n = 3;
              break;
            }
            return _context128.a(2);
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
            return _context128.a(2);
        }
      }, _callee128);
    }));
    return function addCardWithAlert(_x94) {
      return _ref271.apply(this, arguments);
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
        var ss = sessFromAuth({
          access_token: magicToken.access,
          refresh_token: magicToken.refresh,
          user: {
            id: u.id
          }
        });
        if (ss) sessWrite(ss);
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
  var _useState575 = useState(function () {
      return recoveryToken || magicToken || !sessNewest() ? "none" : "restoring";
    }),
    _useState576 = _slicedToArray(_useState575, 2),
    sessState = _useState576[0],
    setSessState = _useState576[1];
  var _useState577 = useState(false),
    _useState578 = _slicedToArray(_useState577, 2),
    sessBusy = _useState578[0],
    setSessBusy = _useState578[1];
  var tokenRef = React.useRef(null);
  tokenRef.current = token;
  var _useState579 = useState(null),
    _useState580 = _slicedToArray(_useState579, 2),
    appStatus = _useState580[0],
    setAppStatus = _useState580[1];
  var statusAt = React.useRef(0),
    statusSeq = React.useRef(0);
  var loadStatus = useCallback(function () {
    var _ref272 = _asyncToGenerator(_regenerator().m(function _callee129(force) {
      var now, my, next, _t154, _t155;
      return _regenerator().w(function (_context129) {
        while (1) switch (_context129.p = _context129.n) {
          case 0:
            now = Date.now();
            if (!(!force && now - statusAt.current < STATUS_EVERY)) {
              _context129.n = 1;
              break;
            }
            return _context129.a(2);
          case 1:
            statusAt.current = now;
            my = ++statusSeq.current;
            next = null;
            _context129.p = 2;
            _t154 = parseAppStatus;
            _context129.n = 3;
            return readAppStatus(tokenRef.current);
          case 3:
            next = _t154(_context129.v);
            _context129.n = 5;
            break;
          case 4:
            _context129.p = 4;
            _t155 = _context129.v;
            next = null;
          case 5:
            if (my === statusSeq.current) setAppStatus(next);
          case 6:
            return _context129.a(2);
        }
      }, _callee129, null, [[2, 4]]);
    }));
    return function (_x95) {
      return _ref272.apply(this, arguments);
    };
  }(), []);
  useEffect(function () {
    loadStatus();
    var vis = function vis() {
      if (document.visibilityState === "visible") loadStatus();
    };
    document.addEventListener("visibilitychange", vis);
    return function () {
      return document.removeEventListener("visibilitychange", vis);
    };
  }, []);
  var uidRef = React.useRef(null);
  uidRef.current = myUserId;
  var logoutRef = React.useRef(null);
  logoutRef.current = handleLogout;
  var restoreSession = function () {
    var _ref273 = _asyncToGenerator(_regenerator().m(function _callee130(silent) {
      var r, okInit;
      return _regenerator().w(function (_context130) {
        while (1) switch (_context130.n) {
          case 0:
            if (!silent) setSessState("restoring");
            setSessBusy(true);
            _context130.n = 1;
            return sessRenew(false);
          case 1:
            r = _context130.v;
            setSessBusy(false);
            if (!(r.status === "ok")) {
              _context130.n = 4;
              break;
            }
            setToken(r.s.at);
            setMyUserId(r.s.uid);
            _context130.n = 2;
            return initApp(r.s.at, r.s.uid);
          case 2:
            okInit = _context130.v;
            if (!okInit) {
              _context130.n = 3;
              break;
            }
            setSessState("none");
            return _context130.a(2);
          case 3:
            setToken(null);
            setMyUserId(null);
            setAuthError(null);
            setSessState("offline");
            _context130.n = 5;
            break;
          case 4:
            if (r.status === "transient") setSessState("offline");else {
              setSessState("none");
              if (r.status === "invalid") setAuthError("A sessão terminou. Entra outra vez.");
            }
          case 5:
            return _context130.a(2);
        }
      }, _callee130);
    }));
    return function restoreSession(_x96) {
      return _ref273.apply(this, arguments);
    };
  }();
  useEffect(function () {
    if (sessState === "restoring") restoreSession();
  }, []);
  useEffect(function () {
    if (sessState !== "offline") return;
    var go = function go() {
      if (!sessBusy) restoreSession(true);
    };
    window.addEventListener("online", go);
    var iv = setInterval(go, 20000);
    return function () {
      window.removeEventListener("online", go);
      clearInterval(iv);
    };
  }, [sessState, sessBusy]);
  useEffect(function () {
    if (!token) return;
    var t = null,
      dead = false;
    var schedule = function schedule() {
      var ss = sessNewest();
      if (!ss) return;
      t = setTimeout(_tick, Math.min(Math.max(2000, ss.exp - ss.m - Date.now()), 2147000000));
    };
    var _tick = function () {
      var _ref274 = _asyncToGenerator(_regenerator().m(function _callee131() {
        var r;
        return _regenerator().w(function (_context131) {
          while (1) switch (_context131.n) {
            case 0:
              _context131.n = 1;
              return sessRenew(false);
            case 1:
              r = _context131.v;
              if (!dead) {
                _context131.n = 2;
                break;
              }
              return _context131.a(2);
            case 2:
              if (r.status === "ok") {
                if (r.s.at !== tokenRef.current) setToken(r.s.at);else schedule();
              } else if (r.status === "transient") t = setTimeout(_tick, 30000);else {
                logoutRef.current({
                  local: true
                });
                setAuthError("A sessão terminou. Entra outra vez.");
              }
            case 3:
              return _context131.a(2);
          }
        }, _callee131);
      }));
      return function tick() {
        return _ref274.apply(this, arguments);
      };
    }();
    var wake = function wake() {
      var ss = sessNewest();
      if (ss && ss.exp - Date.now() < ss.m) {
        clearTimeout(t);
        _tick();
      }
    };
    var vis = function vis() {
      if (document.visibilityState === "visible") wake();
    };
    schedule();
    document.addEventListener("visibilitychange", vis);
    window.addEventListener("online", wake);
    return function () {
      dead = true;
      clearTimeout(t);
      document.removeEventListener("visibilitychange", vis);
      window.removeEventListener("online", wake);
    };
  }, [token]);
  useEffect(function () {
    var on = function on(e) {
      if (e.key !== SESSION_KEY) return;
      if (!e.newValue) {
        if (tokenRef.current) logoutRef.current({
          local: true
        });
        return;
      }
      try {
        var o = JSON.parse(e.newValue);
        if (!o || !o.at || !tokenRef.current) return;
        if (o.uid && uidRef.current && o.uid !== uidRef.current) {
          logoutRef.current({
            local: true
          });
          return;
        }
        if (o.at !== tokenRef.current) setToken(o.at);
      } catch (err) {}
    };
    window.addEventListener("storage", on);
    return function () {
      return window.removeEventListener("storage", on);
    };
  }, []);
  if (recoveryToken) return React.createElement(ResetPasswordScreen, {
    accessToken: recoveryToken,
    onDone: function onDone() {
      window.history.replaceState(null, "", "/");
      window.location.reload();
    }
  });
  if ((!token || !appReady) && sessState === "restoring") return React.createElement(SessionSplash, null);
  if (!token && sessState === "offline") return React.createElement(SessionOffline, {
    busy: sessBusy,
    onRetry: function onRetry() {
      return restoreSession();
    },
    onOther: function onOther() {
      sessClear();
      setSessState("none");
    }
  });
  if (!token || !appReady) return React.createElement(AuthScreen, {
    appStatus: appStatus,
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
    return React.createElement(MoneyCtx.Provider, {
      value: teamCur(team)
    }, React.createElement("div", {
      style: {
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        maxWidth: 480,
        margin: "0 auto"
      }
    }, roBanner, loadWarnBox, ch));
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
    initialTeams: adminStart === "teams" ? adminTeamsCache : null,
    onStatusSaved: function onStatusSaved() {
      return loadStatus(true);
    }
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
      var _ref275 = _asyncToGenerator(_regenerator().m(function _callee132(t) {
        return _regenerator().w(function (_context132) {
          while (1) switch (_context132.n) {
            case 0:
              _context132.n = 1;
              return joinTeam(t);
            case 1:
              setPendingInvite(null);
              window.history.replaceState({}, document.title, window.location.pathname);
            case 2:
              return _context132.a(2);
          }
        }, _callee132);
      }));
      return function (_x97) {
        return _ref275.apply(this, arguments);
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
      var _ref276 = _asyncToGenerator(_regenerator().m(function _callee133(u) {
        var _t156, _t157;
        return _regenerator().w(function (_context133) {
          while (1) switch (_context133.p = _context133.n) {
            case 0:
              _context133.p = 0;
              _t156 = needRows;
              _context133.n = 1;
              return api.patch("profiles?id=eq.".concat(myUserId), {
                name: u.name,
                phone: u.phone || null,
                birthday: u.birthday || null,
                avatar_url: u.avatarUrl || null,
                position: u.position || null
              }, token);
            case 1:
              _t156(_context133.v);
              _context133.n = 3;
              break;
            case 2:
              _context133.p = 2;
              _t157 = _context133.v;
              writeFailed("guardar o perfil", _t157);
              return _context133.a(2);
            case 3:
              setProfile(function (p) {
                return _objectSpread(_objectSpread({}, p), u);
              });
            case 4:
              return _context133.a(2);
          }
        }, _callee133, null, [[0, 2]]);
      }));
      return function (_x98) {
        return _ref276.apply(this, arguments);
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
      var _ref277 = _asyncToGenerator(_regenerator().m(function _callee134(t) {
        return _regenerator().w(function (_context134) {
          while (1) switch (_context134.n) {
            case 0:
              _context134.n = 1;
              return joinTeam(t);
            case 1:
              setPendingInvite(null);
              window.history.replaceState({}, document.title, window.location.pathname);
            case 2:
              return _context134.a(2);
          }
        }, _callee134);
      }));
      return function (_x99) {
        return _ref277.apply(this, arguments);
      };
    }()),
    initialCode: pendingInvite || "",
    onClose: function onClose() {
      setModal(null);
      setPendingInvite(null);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }));
  if (tab === "treinos") return React.createElement(MoneyCtx.Provider, {
    value: teamCur(team)
  }, React.createElement("div", {
    style: {
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      maxWidth: 480,
      margin: "0 auto"
    }
  }, roBanner, loadWarnBox, toastBox, React.createElement(TreinosPage, {
    tacticAdmin: isAdmin,
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
  })));
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
    return wrap(React.createElement(MoneyCtx.Provider, {
      value: teamCur(mt)
    }, React.createElement(ManageTeamScreen, {
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
  return React.createElement(MoneyCtx.Provider, {
    value: teamCur(team)
  }, React.createElement("div", {
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
      return refresh({
        notify: true
      });
    },
    "aria-label": "Atualizar",
    "aria-busy": refreshing,
    disabled: refreshing,
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
      cursor: refreshing ? "default" : "pointer",
      opacity: refreshing ? 0.5 : 1,
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
    appStatus: appStatus,
    noticeUserId: !roMode && myUserId && teams.some(function (t) {
      return t.createdBy === myUserId || members.some(function (m) {
        return m.teamId === t.id && m.userId === myUserId && m.role === "admin";
      });
    }) ? myUserId : null,
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
    activeTeam: team,
    user: _objectSpread(_objectSpread({}, profile || {}), {}, {
      position: ((_members$find3 = members.find(function (m) {
        return m.userId === myUserId && m.teamId === teamId;
      })) === null || _members$find3 === void 0 ? void 0 : _members$find3.position) || (freeSport ? '' : profile === null || profile === void 0 ? void 0 : profile.position) || ''
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
    initialTeams: adminStart === "teams" ? adminTeamsCache : null,
    onStatusSaved: function onStatusSaved() {
      return loadStatus(true);
    }
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
    user: freeSport ? _objectSpread(_objectSpread({}, profile || {}), {}, {
      position: realPosition((_members$find4 = members.find(function (m) {
        return m.userId === myUserId && m.teamId === teamId;
      })) === null || _members$find4 === void 0 ? void 0 : _members$find4.position)
    }) : profile || {},
    team: team,
    onSave: (function () {
      var _ref278 = _asyncToGenerator(_regenerator().m(function _callee135(u) {
        var _members$find5;
        var _t158, _t159;
        return _regenerator().w(function (_context135) {
          while (1) switch (_context135.p = _context135.n) {
            case 0:
              _context135.p = 0;
              _t158 = needRows;
              _context135.n = 1;
              return api.patch("profiles?id=eq.".concat(myUserId), freeSport ? {
                name: u.name,
                phone: u.phone || null,
                birthday: u.birthday || null,
                avatar_url: u.avatarUrl || null
              } : {
                name: u.name,
                phone: u.phone || null,
                birthday: u.birthday || null,
                avatar_url: u.avatarUrl || null,
                position: u.position || null
              }, token);
            case 1:
              _t158(_context135.v);
              _context135.n = 3;
              break;
            case 2:
              _context135.p = 2;
              _t159 = _context135.v;
              writeFailed("guardar o perfil", _t159);
              return _context135.a(2);
            case 3:
              setProfile(function (p) {
                return freeSport ? _objectSpread(_objectSpread(_objectSpread({}, p), u), {}, {
                  position: p.position
                }) : _objectSpread(_objectSpread({}, p), u);
              });
              _context135.n = 4;
              return editMember((_members$find5 = members.find(function (m) {
                return m.userId === myUserId && m.teamId === teamId;
              })) === null || _members$find5 === void 0 ? void 0 : _members$find5.id, u);
            case 4:
              return _context135.a(2);
          }
        }, _callee135, null, [[0, 2]]);
      }));
      return function (_x100) {
        return _ref278.apply(this, arguments);
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
      var _ref279 = _asyncToGenerator(_regenerator().m(function _callee136(t) {
        return _regenerator().w(function (_context136) {
          while (1) switch (_context136.n) {
            case 0:
              _context136.n = 1;
              return joinTeam(t);
            case 1:
              setPendingInvite(null);
              window.history.replaceState({}, document.title, window.location.pathname);
            case 2:
              return _context136.a(2);
          }
        }, _callee136);
      }));
      return function (_x101) {
        return _ref279.apply(this, arguments);
      };
    }()),
    initialCode: pendingInvite || "",
    onClose: function onClose() {
      setModal(null);
      setPendingInvite(null);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  })));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));