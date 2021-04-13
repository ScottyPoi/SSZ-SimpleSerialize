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
          className: "d-flex flex-column navbar-nav-scroll ".concat(_TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.nonavbar),
          style: {
            scrollbarWidth: 0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UT0NzY3JvbGwuanN4Il0sIm5hbWVzIjpbIlRPQ3Njcm9sbCIsInRvcGljcyIsInRvcGljVG9MZXZlbCIsInN0eWxlcyIsImNvbnRhaW5lciIsIm5vbmF2YmFyIiwic2Nyb2xsYmFyV2lkdGgiLCJpc2N1cnJlbnQiLCJtYXAiLCJ0b3BpYyIsImxldmVsIiwiU2Nyb2xsc3B5MSIsIlNjcm9sbHNweTIiLCJTY3JvbGxzcHkzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsU0FBVCxDQUFtQkMsTUFBbkIsRUFBMkJDLFlBQTNCLEVBQXlDO0FBQUE7O0FBQ3BELHNCQUNFO0FBQUEsMkJBQ0E7QUFBSyxlQUFTLDZCQUFzQkMsNkRBQU0sQ0FBQ0MsU0FBN0IsQ0FBZDtBQUF3RCxRQUFFLEVBQUMsS0FBM0Q7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLGlEQUEwQ0QsNkRBQU0sQ0FBQ0UsUUFBakQsQ0FBZDtBQUEyRSxlQUFLLEVBQUU7QUFBQ0MsMEJBQWMsRUFBRTtBQUFqQixXQUFsRjtBQUFBLGlDQUNGLHFFQUFDLHNEQUFEO0FBQVcsaUJBQUssRUFBR0wsTUFBbkI7QUFBNEIsNEJBQWdCLEVBQUVFLDZEQUFNLENBQUNJLFNBQXJEO0FBQWdFLDRCQUFhLE1BQTdFO0FBQW9GLGtCQUFNLEVBQUUsQ0FBQyxHQUE3RjtBQUFBLHNCQUNJTixNQUFNLENBQUNPLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVc7QUFDcEIsa0JBQUlDLEtBQUssR0FBR1IsWUFBWSxDQUFDTyxLQUFELENBQVosS0FBd0IsWUFBeEIsR0FDRU4sNkRBQU0sQ0FBQ1EsVUFEVCxHQUVFVCxZQUFZLENBQUNPLEtBQUQsQ0FBWixLQUF3QixZQUF4QixHQUNBTiw2REFBTSxDQUFDUyxVQURQLEdBRUFULDZEQUFNLENBQUNVLFVBSnJCO0FBS0Esa0NBQ0UscUVBQUMsbURBQUQsQ0FBb0IsSUFBcEI7QUFBcUMseUJBQVMsRUFBRUgsS0FBaEQ7QUFBdUQsb0JBQUksYUFBTUQsS0FBTixDQUEzRDtBQUFBLG9DQUNNQSxLQUROO0FBQUEsaUJBQThCQSxLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBS0gsYUFYQztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBCSDtLQTNCdUJULFM7QUEyQnZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWNzLjUwYTFlMjAxOThlMDAwYjQ1NWIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIFJlYWN0Qm9vdFN0cmFwIGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBTY3JvbGxzcHkgZnJvbSAncmVhY3Qtc2Nyb2xsc3B5JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RPQ3Njcm9sbC5tb2R1bGUuc2NzcydcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVE9Dc2Nyb2xsKHRvcGljcywgdG9waWNUb0xldmVsKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2ID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXYgIGZsZXgtY29sdW1uICR7c3R5bGVzLmNvbnRhaW5lcn1gfSBpZD0ndG9jJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPk9uIFRoaXMgUGFnZTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZC1mbGV4IGZsZXgtY29sdW1uIG5hdmJhci1uYXYtc2Nyb2xsICR7c3R5bGVzLm5vbmF2YmFyfWB9IHN0eWxlPXt7c2Nyb2xsYmFyV2lkdGg6IDB9fT5cclxuICAgICAgICAgIDxTY3JvbGxzcHkgaXRlbXM9eyB0b3BpY3MgfSBjdXJyZW50Q2xhc3NOYW1lPXtzdHlsZXMuaXNjdXJyZW50fSBhcmlhLWN1cnJlbnQ9XCJ0cnVlXCIgb2Zmc2V0PXstMTUwfT5cclxuICAgICAgICAgICAgeyB0b3BpY3MubWFwKCh0b3BpYykgPT4geyBcclxuICAgICAgICAgICAgICAgIGxldCBsZXZlbCA9IHRvcGljVG9MZXZlbFt0b3BpY10gPT09IFwiU2Nyb2xsc3B5MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHN0eWxlcy5TY3JvbGxzcHkxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRvcGljVG9MZXZlbFt0b3BpY10gPT09IFwiU2Nyb2xsc3B5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHN0eWxlcy5TY3JvbGxzcHkyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN0eWxlcy5TY3JvbGxzcHkzXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8UmVhY3RCb290U3RyYXAuTmF2Lkxpbmsga2V5PXt0b3BpY30gY2xhc3NOYW1lPXtsZXZlbH0gaHJlZj17YCMke3RvcGljfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgJHt0b3BpY31gfVxyXG4gICAgICAgICAgICAgICAgICA8L1JlYWN0Qm9vdFN0cmFwLk5hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L1Njcm9sbHNweT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9