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
    className: _TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "nav flex-column",
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
          className: "d-flex flex-column",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UT0NzY3JvbGwuanN4Il0sIm5hbWVzIjpbIlRPQ3Njcm9sbCIsInRvcGljcyIsInRvcGljVG9MZXZlbCIsInN0eWxlcyIsImNvbnRhaW5lciIsImlzY3VycmVudCIsIm1hcCIsInRvcGljIiwibGV2ZWwiLCJTY3JvbGxzcHkxIiwiU2Nyb2xsc3B5MiIsIlNjcm9sbHNweTMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxTQUFULENBQW1CQyxNQUFuQixFQUEyQkMsWUFBM0IsRUFBeUM7QUFBQTs7QUFDcEQsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDZEQUFNLENBQUNDLFNBQXZCO0FBQUEsMkJBQ0E7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBaUMsUUFBRSxFQUFDLEtBQXBDO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLG9CQUFmO0FBQUEsaUNBQ0YscUVBQUMsc0RBQUQ7QUFBVyxpQkFBSyxFQUFHSCxNQUFuQjtBQUE0Qiw0QkFBZ0IsRUFBRUUsNkRBQU0sQ0FBQ0UsU0FBckQ7QUFBZ0UsNEJBQWEsTUFBN0U7QUFBb0Ysa0JBQU0sRUFBRSxDQUFDLEdBQTdGO0FBQUEsc0JBQ0lKLE1BQU0sQ0FBQ0ssR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBVztBQUNwQixrQkFBSUMsS0FBSyxHQUFHTixZQUFZLENBQUNLLEtBQUQsQ0FBWixLQUF3QixZQUF4QixHQUNFSiw2REFBTSxDQUFDTSxVQURULEdBRUVQLFlBQVksQ0FBQ0ssS0FBRCxDQUFaLEtBQXdCLFlBQXhCLEdBQ0FKLDZEQUFNLENBQUNPLFVBRFAsR0FFQVAsNkRBQU0sQ0FBQ1EsVUFKckI7QUFLQSxrQ0FDRSxxRUFBQyxtREFBRCxDQUFvQixJQUFwQjtBQUFxQyx5QkFBUyxFQUFFSCxLQUFoRDtBQUF1RCxvQkFBSSxhQUFNRCxLQUFOLENBQTNEO0FBQUEsb0NBQ01BLEtBRE47QUFBQSxpQkFBOEJBLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFLSCxhQVhDO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEJIO0tBM0J1QlAsUztBQTJCdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlY3MuMDg5ODYyYWE0MDc2MDA1MDcyMWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgUmVhY3RCb290U3RyYXAgZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IFNjcm9sbHNweSBmcm9tICdyZWFjdC1zY3JvbGxzcHknO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVE9Dc2Nyb2xsLm1vZHVsZS5zY3NzJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUT0NzY3JvbGwodG9waWNzLCB0b3BpY1RvTGV2ZWwpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J25hdiBmbGV4LWNvbHVtbicgaWQ9J3RvYyc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5PbiBUaGlzIFBhZ2U8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtY29sdW1uJz5cclxuICAgICAgICAgIDxTY3JvbGxzcHkgaXRlbXM9eyB0b3BpY3MgfSBjdXJyZW50Q2xhc3NOYW1lPXtzdHlsZXMuaXNjdXJyZW50fSBhcmlhLWN1cnJlbnQ9XCJ0cnVlXCIgb2Zmc2V0PXstMTUwfT5cclxuICAgICAgICAgICAgeyB0b3BpY3MubWFwKCh0b3BpYykgPT4geyBcclxuICAgICAgICAgICAgICAgIGxldCBsZXZlbCA9IHRvcGljVG9MZXZlbFt0b3BpY10gPT09IFwiU2Nyb2xsc3B5MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHN0eWxlcy5TY3JvbGxzcHkxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRvcGljVG9MZXZlbFt0b3BpY10gPT09IFwiU2Nyb2xsc3B5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHN0eWxlcy5TY3JvbGxzcHkyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN0eWxlcy5TY3JvbGxzcHkzXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8UmVhY3RCb290U3RyYXAuTmF2Lkxpbmsga2V5PXt0b3BpY30gY2xhc3NOYW1lPXtsZXZlbH0gaHJlZj17YCMke3RvcGljfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgJHt0b3BpY31gfVxyXG4gICAgICAgICAgICAgICAgICA8L1JlYWN0Qm9vdFN0cmFwLk5hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L1Njcm9sbHNweT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9