/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@walletconnect/ethereum-provider/dist/index.es.js":
/*!************************************************************************!*\
  !*** ./node_modules/@walletconnect/ethereum-provider/dist/index.es.js ***!
  \************************************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/html/RealWorldCoin/node_modules/@walletconnect/ethereum-provider/dist/index.es.js'");

/***/ }),

/***/ "./node_modules/web3/lib/esm/index.js":
/*!********************************************!*\
  !*** ./node_modules/web3/lib/esm/index.js ***!
  \********************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/html/RealWorldCoin/node_modules/web3/lib/esm/index.js'");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./resources/js/wallet.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/esm/index.js");
/* harmony import */ var _walletconnect_ethereum_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @walletconnect/ethereum-provider */ "./node_modules/@walletconnect/ethereum-provider/dist/index.es.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


var web3;
var userAddress = null;
var provider = null;

// Conversion rate: 1 BNB = 1000 Tokens
var TOKEN_RATE = 1000;
// Replace with your receiving wallet
var RECEIVING_WALLET = '0x0a1ad99042f75253faaaA5a448325e7c0069E9fd';

// WalletConnect Project ID (get from https://cloud.walletconnect.com/)
var WALLET_CONNECT_PROJECT_ID = "d657fc2caf26f35212226268cf9745d0";
document.addEventListener('DOMContentLoaded', function () {
  var connectButton = document.getElementById('connectWallet');

  // ✅ Update token amount dynamically
  payAmountInput.addEventListener('input', function () {
    var bnbAmount = parseFloat(payAmountInput.value) || 0;
    receiveAmountInput.value = (bnbAmount * TOKEN_RATE).toFixed(2);
  });

  // ✅ Connect Wallet (MetaMask or WalletConnect)
  connectButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var accounts;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return _walletconnect_ethereum_provider__WEBPACK_IMPORTED_MODULE_1__["default"].init({
            projectId: WALLET_CONNECT_PROJECT_ID,
            chains: [56],
            // BSC Mainnet
            rpcMap: {
              56: "https://bsc-dataseed.binance.org/"
            },
            showQrModal: true,
            methods: ["eth_sendTransaction", "personal_sign", "eth_signTypedData"],
            events: ["chainChanged", "accountsChanged"]
          });
        case 1:
          provider = _context.v;
          _context.n = 2;
          return provider.connect();
        case 2:
          // ✅ v2 correct method
          // }

          web3 = new web3__WEBPACK_IMPORTED_MODULE_0__["default"](provider);
          _context.n = 3;
          return web3.eth.getAccounts();
        case 3:
          accounts = _context.v;
          userAddress = accounts[0];
          walletAddressDisplay.textContent = "Connected: ".concat(shortAddress(userAddress));
        case 4:
          return _context.a(2);
      }
    }, _callee);
  })));

  // ✅ Buy with BNB
});
})();

/******/ })()
;