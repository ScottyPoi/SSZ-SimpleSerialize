webpackHotUpdate_N_E("pages/specs",{

/***/ "./components/TOCscroll.jsx":
/*!**********************************!*\
  !*** ./components/TOCscroll.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TOCscroll; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scrollspy */ "./node_modules/react-scrollspy/lib/scrollspy.js");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TOCscroll.module.scss */ "./components/TOCscroll.module.scss");
/* harmony import */ var _TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\kyzam\\Documents\\GitHub\\SSZ-SimpleSerialize\\sszapp\\components\\TOCscroll.jsx";




function TOCscroll(topics, topicToLevel) {
  var _this = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "nav  flex-column ".concat(_TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container),
      id: "toc",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: "On This Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex flex-column navbar-nav-scroll",
          style: {
            scrollbarWidth: none
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scrollspy__WEBPACK_IMPORTED_MODULE_3___default.a, {
            items: topics,
            currentClassName: _TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.iscurrent,
            "aria-current": "true",
            offset: -150,
            children: topics.map(function (topic) {
              var level = topicToLevel[topic] === "Scrollspy1" ? _TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Scrollspy1 : topicToLevel[topic] === "Scrollspy2" ? _TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Scrollspy2 : _TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Scrollspy3;
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                className: level,
                href: "#".concat(topic),
                children: "".concat(topic)
              }, topic, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }, this);
}
_c = TOCscroll;
;

var _c;

$RefreshReg$(_c, "TOCscroll");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UT0NzY3JvbGwuanN4Il0sIm5hbWVzIjpbIlRPQ3Njcm9sbCIsInRvcGljcyIsInRvcGljVG9MZXZlbCIsInN0eWxlcyIsImNvbnRhaW5lciIsInNjcm9sbGJhcldpZHRoIiwibm9uZSIsImlzY3VycmVudCIsIm1hcCIsInRvcGljIiwibGV2ZWwiLCJTY3JvbGxzcHkxIiwiU2Nyb2xsc3B5MiIsIlNjcm9sbHNweTMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxTQUFULENBQW1CQyxNQUFuQixFQUEyQkMsWUFBM0IsRUFBeUM7QUFBQTs7QUFDcEQsc0JBQ0U7QUFBQSwyQkFDQTtBQUFLLGVBQVMsNkJBQXNCQyw2REFBTSxDQUFDQyxTQUE3QixDQUFkO0FBQXdELFFBQUUsRUFBQyxLQUEzRDtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxzQ0FBZjtBQUFzRCxlQUFLLEVBQUU7QUFBQ0MsMEJBQWMsRUFBRUM7QUFBakIsV0FBN0Q7QUFBQSxpQ0FDRixxRUFBQyxzREFBRDtBQUFXLGlCQUFLLEVBQUdMLE1BQW5CO0FBQTRCLDRCQUFnQixFQUFFRSw2REFBTSxDQUFDSSxTQUFyRDtBQUFnRSw0QkFBYSxNQUE3RTtBQUFvRixrQkFBTSxFQUFFLENBQUMsR0FBN0Y7QUFBQSxzQkFDSU4sTUFBTSxDQUFDTyxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFXO0FBQ3BCLGtCQUFJQyxLQUFLLEdBQUdSLFlBQVksQ0FBQ08sS0FBRCxDQUFaLEtBQXdCLFlBQXhCLEdBQ0VOLDZEQUFNLENBQUNRLFVBRFQsR0FFRVQsWUFBWSxDQUFDTyxLQUFELENBQVosS0FBd0IsWUFBeEIsR0FDQU4sNkRBQU0sQ0FBQ1MsVUFEUCxHQUVBVCw2REFBTSxDQUFDVSxVQUpyQjtBQUtBLGtDQUNFLHFFQUFDLG1EQUFELENBQW9CLElBQXBCO0FBQXFDLHlCQUFTLEVBQUVILEtBQWhEO0FBQXVELG9CQUFJLGFBQU1ELEtBQU4sQ0FBM0Q7QUFBQSxvQ0FDTUEsS0FETjtBQUFBLGlCQUE4QkEsS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQUtILGFBWEM7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwQkg7S0EzQnVCVCxTO0FBMkJ2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVjcy42ODI4ODFjMzJkNTZlZWM3OGZiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBSZWFjdEJvb3RTdHJhcCBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgU2Nyb2xsc3B5IGZyb20gJ3JlYWN0LXNjcm9sbHNweSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UT0NzY3JvbGwubW9kdWxlLnNjc3MnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRPQ3Njcm9sbCh0b3BpY3MsIHRvcGljVG9MZXZlbCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2ICBmbGV4LWNvbHVtbiAke3N0eWxlcy5jb250YWluZXJ9YH0gaWQ9J3RvYyc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5PbiBUaGlzIFBhZ2U8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtY29sdW1uIG5hdmJhci1uYXYtc2Nyb2xsJyBzdHlsZT17e3Njcm9sbGJhcldpZHRoOiBub25lfX0+XHJcbiAgICAgICAgICA8U2Nyb2xsc3B5IGl0ZW1zPXsgdG9waWNzIH0gY3VycmVudENsYXNzTmFtZT17c3R5bGVzLmlzY3VycmVudH0gYXJpYS1jdXJyZW50PVwidHJ1ZVwiIG9mZnNldD17LTE1MH0+XHJcbiAgICAgICAgICAgIHsgdG9waWNzLm1hcCgodG9waWMpID0+IHsgXHJcbiAgICAgICAgICAgICAgICBsZXQgbGV2ZWwgPSB0b3BpY1RvTGV2ZWxbdG9waWNdID09PSBcIlNjcm9sbHNweTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzdHlsZXMuU2Nyb2xsc3B5MVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0b3BpY1RvTGV2ZWxbdG9waWNdID09PSBcIlNjcm9sbHNweTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzdHlsZXMuU2Nyb2xsc3B5MlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzdHlsZXMuU2Nyb2xsc3B5M1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPFJlYWN0Qm9vdFN0cmFwLk5hdi5MaW5rIGtleT17dG9waWN9IGNsYXNzTmFtZT17bGV2ZWx9IGhyZWY9e2AjJHt0b3BpY31gfT5cclxuICAgICAgICAgICAgICAgICAgICB7YCR7dG9waWN9YH1cclxuICAgICAgICAgICAgICAgICAgPC9SZWFjdEJvb3RTdHJhcC5OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9TY3JvbGxzcHk+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==