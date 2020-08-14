webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Window.tsx":
/*!*******************************!*\
  !*** ./components/Window.tsx ***!
  \*******************************/
/*! exports provided: Window */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Window\", function() { return Window; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Window.module.scss */ \"./styles/Window.module.scss\");\n/* harmony import */ var _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/dustin/Git/x/components/Window.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n// TODO: Each window can have it's own defaults\nvar DEFAULT_WINDOW_DIMENSION = 350,\n    MIN_WINDOW_DIMENSION = 200;\nfunction Window(_ref) {\n  _s();\n\n  var app = _ref.app,\n      children = _ref.children,\n      title = _ref.title;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      height = _useState[0],\n      setHeight = _useState[1],\n      _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      width = _useState2[0],\n      setWidth = _useState2[1],\n      onResizeStop = function onResizeStop(_e, _dir, elementRef) {\n    setHeight(Number(elementRef.style.height));\n    setWidth(Number(elementRef.style.width));\n  },\n      onClose = function onClose() {\n    return console.log('onClose');\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // TODO: This needs lots of work, multi window, mobile, etc.\n    setHeight(500); // window.innerHeight * .6\n\n    setWidth(735); // window.innerWidth * .5\n  }, []); // TODO: Make action bar more generic\n\n  return __jsx(react_rnd__WEBPACK_IMPORTED_MODULE_1__[\"Rnd\"], {\n    className: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.window,\n    \"default\": {\n      height: DEFAULT_WINDOW_DIMENSION,\n      width: DEFAULT_WINDOW_DIMENSION,\n      x: 115,\n      y: 40\n    },\n    bounds: \"body\",\n    cancel: \".cancel\",\n    dragHandleClassName: \"handle\",\n    enableUserSelectHack: false,\n    minHeight: MIN_WINDOW_DIMENSION,\n    minWidth: MIN_WINDOW_DIMENSION,\n    onResizeStop: onResizeStop,\n    size: {\n      width: width,\n      height: height\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"\".concat(_styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.title_bar, \" handle\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, title), __jsx(\"div\", {\n    className: \"\".concat(_styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.actions, \" cancel\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    className: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.minimize,\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faMinusCircle\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    className: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.maximize,\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faPlusCircle\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    className: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.close,\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faTimesCircle\"],\n    onClick: onClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    className: \"\".concat(_styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.action_bar, \" handle\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"\".concat(_styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.actions, \" cancel\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faArrowLeft\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faArrowRight\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faHome\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 11\n    }\n  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faComments\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 11\n    }\n  }), \" \"), __jsx(\"div\", {\n    className: \"\".concat(_styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.search, \" cancel\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faSearch\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 11\n    }\n  }), __jsx(\"input\", {\n    placeholder: \"Search\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }), \" \")), __jsx(\"div\", {\n    className: _styles_Window_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.content,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }, children));\n}\n\n_s(Window, \"TRPeTx7dm+toPbfgavJ9cb/B46Q=\");\n\n_c = Window;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"Window\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaW5kb3cudHN4PzVhNmEiXSwibmFtZXMiOlsiREVGQVVMVF9XSU5ET1dfRElNRU5TSU9OIiwiTUlOX1dJTkRPV19ESU1FTlNJT04iLCJXaW5kb3ciLCJhcHAiLCJjaGlsZHJlbiIsInRpdGxlIiwidXNlU3RhdGUiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJ3aWR0aCIsInNldFdpZHRoIiwib25SZXNpemVTdG9wIiwiX2UiLCJfZGlyIiwiZWxlbWVudFJlZiIsIk51bWJlciIsInN0eWxlIiwib25DbG9zZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJ3aW5kb3ciLCJ4IiwieSIsInRpdGxlX2JhciIsImFjdGlvbnMiLCJtaW5pbWl6ZSIsImZhTWludXNDaXJjbGUiLCJtYXhpbWl6ZSIsImZhUGx1c0NpcmNsZSIsImNsb3NlIiwiZmFUaW1lc0NpcmNsZSIsImFjdGlvbl9iYXIiLCJmYUFycm93TGVmdCIsImZhQXJyb3dSaWdodCIsImZhSG9tZSIsImZhQ29tbWVudHMiLCJzZWFyY2giLCJmYVNlYXJjaCIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFNQTtBQUlBO0FBQ0EsSUFBTUEsd0JBQXdCLEdBQUcsR0FBakM7QUFBQSxJQUNNQyxvQkFBb0IsR0FBRyxHQUQ3QjtBQVNPLFNBQVNDLE1BQVQsT0FBc0Q7QUFBQTs7QUFBQSxNQUFwQ0MsR0FBb0MsUUFBcENBLEdBQW9DO0FBQUEsTUFBL0JDLFFBQStCLFFBQS9CQSxRQUErQjtBQUFBLE1BQXJCQyxLQUFxQixRQUFyQkEsS0FBcUI7O0FBQUEsa0JBQy9CQyxzREFBUSxDQUFDLENBQUQsQ0FEdUI7QUFBQSxNQUNwREMsTUFEb0Q7QUFBQSxNQUM1Q0MsU0FENEM7QUFBQSxtQkFFckNGLHNEQUFRLENBQUMsQ0FBRCxDQUY2QjtBQUFBLE1BRXhERyxLQUZ3RDtBQUFBLE1BRWpE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O0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBR0Msd0VBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFHQyw0RUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLE1BREYsRUFRRTtBQUFLLGFBQVMsWUFBT2hCLGlFQUFNLENBQUNpQixNQUFkLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFHQywwRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBTyxlQUFXLEVBQUMsUUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLE1BUkYsQ0F6QkYsRUF1Q0U7QUFBSyxhQUFTLEVBQUdsQixpRUFBTSxDQUFDbUIsT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJcEMsUUFESixDQXZDRixDQURGO0FBNkNEOztHQTdEZUYsTTs7S0FBQUEsTTtBQTZEZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvV2luZG93LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSbmQgfSBmcm9tICdyZWFjdC1ybmQnO1xuaW1wb3J0IHsgUmVzaXplRGlyZWN0aW9uIH0gZnJvbSBcInJlLXJlc2l6YWJsZVwiO1xuXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHtcbiAgZmFBcnJvd0xlZnQsIGZhQXJyb3dSaWdodCwgZmFIb21lLCBmYUNvbW1lbnRzLFxuICBmYU1pbnVzQ2lyY2xlLCBmYVBsdXNDaXJjbGUsIGZhVGltZXNDaXJjbGUsXG4gIGZhU2VhcmNoXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1dpbmRvdy5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCB0eXBlIHsgQXBwVHlwZSB9IGZyb20gJy4uL3Jlc291cmNlcy9hcHBzJztcblxuLy8gVE9ETzogRWFjaCB3aW5kb3cgY2FuIGhhdmUgaXQncyBvd24gZGVmYXVsdHNcbmNvbnN0IERFRkFVTFRfV0lORE9XX0RJTUVOU0lPTiA9IDM1MCxcbiAgICAgIE1JTl9XSU5ET1dfRElNRU5TSU9OID0gMjAwO1xuXG5leHBvcnQgdHlwZSBXaW5kb3dUeXBlID0ge1xuICBhcHA6IEFwcFR5cGUsXG4gIGNoaWxkcmVuOiBBcnJheTxSZWFjdC5SZWFjdE5vZGU+IHwgUmVhY3QuUmVhY3ROb2RlIHwgdW5kZWZpbmVkLFxuICB0aXRsZTogc3RyaW5nXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gV2luZG93KHsgYXBwLCBjaGlsZHJlbiwgdGl0bGUgfTogV2luZG93VHlwZSkge1xuICBjb25zdCBbaGVpZ2h0LCBzZXRIZWlnaHRdID0gdXNlU3RhdGUoMCksXG4gICAgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSgwKSxcbiAgICBvblJlc2l6ZVN0b3AgPSAoX2U6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50LCBfZGlyOiBSZXNpemVEaXJlY3Rpb24sIGVsZW1lbnRSZWY6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgICBzZXRIZWlnaHQoTnVtYmVyKGVsZW1lbnRSZWYuc3R5bGUuaGVpZ2h0KSk7XG4gICAgICBzZXRXaWR0aChOdW1iZXIoZWxlbWVudFJlZi5zdHlsZS53aWR0aCkpO1xuICAgIH0sXG4gICAgb25DbG9zZSA9ICgpID0+IGNvbnNvbGUubG9nKCdvbkNsb3NlJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBUT0RPOiBUaGlzIG5lZWRzIGxvdHMgb2Ygd29yaywgbXVsdGkgd2luZG93LCBtb2JpbGUsIGV0Yy5cbiAgICBzZXRIZWlnaHQoNTAwKTsgLy8gd2luZG93LmlubmVySGVpZ2h0ICogLjZcbiAgICBzZXRXaWR0aCg3MzUpOyAvLyB3aW5kb3cuaW5uZXJXaWR0aCAqIC41XG4gIH0sIFtdKTtcblxuICAvLyBUT0RPOiBNYWtlIGFjdGlvbiBiYXIgbW9yZSBnZW5lcmljXG4gIHJldHVybiAoXG4gICAgPFJuZFxuICAgICAgY2xhc3NOYW1lPXsgc3R5bGVzLndpbmRvdyB9XG4gICAgICBkZWZhdWx0PXt7XG4gICAgICAgIGhlaWdodDogREVGQVVMVF9XSU5ET1dfRElNRU5TSU9OLFxuICAgICAgICB3aWR0aDogREVGQVVMVF9XSU5ET1dfRElNRU5TSU9OLFxuICAgICAgICB4OiAxMTUsXG4gICAgICAgIHk6IDQwXG4gICAgICB9fVxuICAgICAgYm91bmRzPSdib2R5J1xuICAgICAgY2FuY2VsPScuY2FuY2VsJ1xuICAgICAgZHJhZ0hhbmRsZUNsYXNzTmFtZT0naGFuZGxlJ1xuICAgICAgZW5hYmxlVXNlclNlbGVjdEhhY2s9eyBmYWxzZSB9XG4gICAgICBtaW5IZWlnaHQ9eyBNSU5fV0lORE9XX0RJTUVOU0lPTiB9XG4gICAgICBtaW5XaWR0aD17IE1JTl9XSU5ET1dfRElNRU5TSU9OIH1cbiAgICAgIG9uUmVzaXplU3RvcD17IG9uUmVzaXplU3RvcCB9XG4gICAgICBzaXplPXt7IHdpZHRoLCBoZWlnaHQgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGAkeyBzdHlsZXMudGl0bGVfYmFyIH0gaGFuZGxlYCB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy50aXRsZSB9PnsgdGl0bGUgfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGAkeyBzdHlsZXMuYWN0aW9ucyB9IGNhbmNlbGAgfT5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17IHN0eWxlcy5taW5pbWl6ZSB9IGljb249eyBmYU1pbnVzQ2lyY2xlIH0gLz5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17IHN0eWxlcy5tYXhpbWl6ZSB9IGljb249eyBmYVBsdXNDaXJjbGUgfSAvPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXsgc3R5bGVzLmNsb3NlIH0gaWNvbj17IGZhVGltZXNDaXJjbGUgfSBvbkNsaWNrPXsgb25DbG9zZSB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGAkeyBzdHlsZXMuYWN0aW9uX2JhciB9IGhhbmRsZWAgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBgJHsgc3R5bGVzLmFjdGlvbnMgfSBjYW5jZWxgIH0+XG4gICAgICAgICAgey8qIFRPRE86IE1vdmUgdG8gQmxvZ0FjdGlvbnMgfCB7IGFwcC5hY3Rpb25zICYmIDxhcHAuYWN0aW9ucyAvPiB9ICovfVxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17IGZhQXJyb3dMZWZ0IH0gLz5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249eyBmYUFycm93UmlnaHQgfSAvPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17IGZhSG9tZSB9IC8+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXsgZmFDb21tZW50cyB9IC8+IHsvKiBUT0RPOiBDb3VjaFN1cmZpbmcgY29tbWVudHMgb24gbWFpbiBwYWdlLCBwb3N0IHNwZWNpZmljIGNvbW1lbnRzIG9uIHBvc3QgcGFnZXMgKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGAkeyBzdHlsZXMuc2VhcmNoIH0gY2FuY2VsYCB9PlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17IGZhU2VhcmNoIH0gLz5cbiAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J1NlYXJjaCcgLz4gey8qIFRPRE86IGkxOG4gKi99XG4gICAgICAgICAgey8qIFRPRE86IHggdG8gY2xlYXIgc2VhcmNoIGNvbnRlbnQgKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5jb250ZW50IH0+XG4gICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgPC9kaXY+XG4gICAgPC9SbmQ+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Window.tsx\n");

/***/ })

})