webpackHotUpdate_N_E("pages/specs",{

/***/ "./pages/specs.jsx":
/*!*************************!*\
  !*** ./pages/specs.jsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Specs; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_kyzam_Documents_GitHub_SSZ_SimpleSerialize_sszapp_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_splitspecs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/splitspecs */ "./components/splitspecs.jsx");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! remark-gfm */ "./node_modules/remark-gfm/index.js");
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var remark_toc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remark-toc */ "./node_modules/remark-toc/index.js");
/* harmony import */ var remark_toc__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remark_toc__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var remark_slug__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! remark-slug */ "./node_modules/remark-slug/index.js");
/* harmony import */ var remark_slug__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(remark_slug__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_isolateTOC__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/isolateTOC */ "./components/isolateTOC.jsx");
/* harmony import */ var _components_SeparateSections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SeparateSections */ "./components/SeparateSections.jsx");
/* harmony import */ var _components_TOCscroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/TOCscroll */ "./components/TOCscroll.jsx");
/* harmony import */ var _styles_specs_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/specs.module.css */ "./styles/specs.module.css");
/* harmony import */ var _styles_specs_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_specs_module_css__WEBPACK_IMPORTED_MODULE_11__);


var _jsxFileName = "C:\\Users\\kyzam\\Documents\\GitHub\\SSZ-SimpleSerialize\\sszapp\\pages\\specs.jsx";










var __N_SSG = true;
function Specs(_ref) {
  var _this = this;

  var SpecsData = _ref.SpecsData;

  var _SplitSpecs = Object(_components_splitspecs__WEBPACK_IMPORTED_MODULE_3__["default"])(SpecsData),
      _SplitSpecs2 = Object(C_Users_kyzam_Documents_GitHub_SSZ_SimpleSerialize_sszapp_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_SplitSpecs, 2),
      body = _SplitSpecs2[0],
      TOC = _SplitSpecs2[1];

  var topicToLevel = Object(_components_isolateTOC__WEBPACK_IMPORTED_MODULE_8__["default"])(TOC);
  var sections = Object(_components_SeparateSections__WEBPACK_IMPORTED_MODULE_9__["default"])(body);
  var topics = Object.keys(topicToLevel);
  var scrollspy = Object(_components_TOCscroll__WEBPACK_IMPORTED_MODULE_10__["default"])(topics, topicToLevel);

  var specsBody = function specsBody(sections) {
    var content = [];

    for (var i = 0; i < sections.length; i++) {
      var sect = sections[i];
      var topic = topics[i];
      content.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          id: topic
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          id: topic,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a, {
            plugins: [remark_slug__WEBPACK_IMPORTED_MODULE_7___default.a, remark_toc__WEBPACK_IMPORTED_MODULE_6___default.a, remark_gfm__WEBPACK_IMPORTED_MODULE_5___default.a],
            children: "".concat(sect)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this)]
      }, sect, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, _this));
    }

    return content;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "position-relative",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row position-absolute top-0 start-0",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-8",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Simple Serialize Specs"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "from Ethereum 2.0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 20
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: specsBody(sections)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row start-50 vh-100 overflow-y-scroll ".concat(_styles_specs_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.toc),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-2 ".concat(_styles_specs_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.scroll),
        children: scrollspy
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row fixed-bottom",
      children: "yup fraid so"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 7
  }, this);
}
_c = Specs;

var _c;

$RefreshReg$(_c, "Specs");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3BlY3MuanN4Il0sIm5hbWVzIjpbIlNwZWNzIiwiU3BlY3NEYXRhIiwiU3BsaXRTcGVjcyIsImJvZHkiLCJUT0MiLCJ0b3BpY1RvTGV2ZWwiLCJJc29sYXRlVE9DIiwic2VjdGlvbnMiLCJTZXBhcmF0ZVNlY3Rpb25zIiwidG9waWNzIiwiT2JqZWN0Iiwia2V5cyIsInNjcm9sbHNweSIsIlRPQ3Njcm9sbCIsInNwZWNzQm9keSIsImNvbnRlbnQiLCJpIiwibGVuZ3RoIiwic2VjdCIsInRvcGljIiwicHVzaCIsInNsdWciLCJ0b2MiLCJnZm0iLCJzdHlsZXMiLCJzY3JvbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBWWUsU0FBU0EsS0FBVCxPQUE4QjtBQUFBOztBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTs7QUFBQSxvQkFDckJDLHNFQUFVLENBQUNELFNBQUQsQ0FEVztBQUFBO0FBQUEsTUFDbENFLElBRGtDO0FBQUEsTUFDNUJDLEdBRDRCOztBQUV6QyxNQUFNQyxZQUFZLEdBQUdDLHNFQUFVLENBQUNGLEdBQUQsQ0FBL0I7QUFDQSxNQUFNRyxRQUFRLEdBQUdDLDRFQUFnQixDQUFDTCxJQUFELENBQWpDO0FBQ0EsTUFBTU0sTUFBTSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWU4sWUFBWixDQUFmO0FBQ0EsTUFBTU8sU0FBUyxHQUFHQyxzRUFBUyxDQUFDSixNQUFELEVBQVNKLFlBQVQsQ0FBM0I7O0FBQ0EsTUFBTVMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ1AsUUFBRCxFQUFjO0FBQzlCLFFBQUlRLE9BQU8sR0FBRyxFQUFkOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFDVCxRQUFRLENBQUNVLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ3BDLFVBQU1FLElBQUksR0FBR1gsUUFBUSxDQUFDUyxDQUFELENBQXJCO0FBQ0EsVUFBTUcsS0FBSyxHQUFHVixNQUFNLENBQUNPLENBQUQsQ0FBcEI7QUFDQUQsYUFBTyxDQUFDSyxJQUFSLGVBQ0U7QUFBQSxnQ0FDQTtBQUFTLFlBQUUsRUFBRUQ7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBRUE7QUFBUyxZQUFFLEVBQUVBLEtBQWI7QUFBQSxpQ0FDRSxxRUFBQyxxREFBRDtBQUFlLG1CQUFPLEVBQUUsQ0FBQ0Usa0RBQUQsRUFBT0MsaURBQVAsRUFBWUMsaURBQVosQ0FBeEI7QUFBQSxnQ0FBOENMLElBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkE7QUFBQSxTQUFVQSxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU9FOztBQUNKLFdBQU9ILE9BQVA7QUFDRCxHQWREOztBQWtCQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLHFDQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQSxtQ0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBS0U7QUFBSyxtQkFBUyxFQUFDLEtBQWY7QUFBQSxvQkFDR0QsU0FBUyxDQUFDUCxRQUFEO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVdFO0FBQUssaUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQWdCRTtBQUFLLGVBQVMsa0RBQTJDaUIsZ0VBQU0sQ0FBQ0YsR0FBbEQsQ0FBZDtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFO0FBQUssaUJBQVMsa0JBQVdFLGdFQUFNLENBQUNDLE1BQWxCLENBQWQ7QUFBQSxrQkFDR2I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGLGVBd0JFO0FBQUssZUFBUyxvQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdDSDtLQXhEdUJaLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlY3MuOTQwZmNlMzhiNWRjODNjYWNkMzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCBTcGxpdFNwZWNzIGZyb20gJy4uL2NvbXBvbmVudHMvc3BsaXRzcGVjcyc7XHJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcclxuaW1wb3J0IGdmbSBmcm9tICdyZW1hcmstZ2ZtJztcclxuaW1wb3J0IHRvYyBmcm9tICdyZW1hcmstdG9jJztcclxuaW1wb3J0IHNsdWcgZnJvbSAncmVtYXJrLXNsdWcnO1xyXG5pbXBvcnQgSXNvbGF0ZVRPQyBmcm9tICcuLi9jb21wb25lbnRzL2lzb2xhdGVUT0MnO1xyXG5pbXBvcnQgU2VwYXJhdGVTZWN0aW9ucyBmcm9tICcuLi9jb21wb25lbnRzL1NlcGFyYXRlU2VjdGlvbnMnO1xyXG5pbXBvcnQgVE9Dc2Nyb2xsIGZyb20gJy4uL2NvbXBvbmVudHMvVE9Dc2Nyb2xsJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvc3BlY3MubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgU3BlY3NEYXRhID0gZnMucmVhZEZpbGVTeW5jKCcuL2V0aDIuMC1zcGVjcy9zc3ovc2ltcGxlLXNlcmlhbGl6ZS5tZCcsICd1dGY4JylcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgU3BlY3NEYXRhXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BlY3MoeyBTcGVjc0RhdGEgfSkge1xyXG4gICAgY29uc3QgW2JvZHksIFRPQ10gPSBTcGxpdFNwZWNzKFNwZWNzRGF0YSk7XHJcbiAgICBjb25zdCB0b3BpY1RvTGV2ZWwgPSBJc29sYXRlVE9DKFRPQyk7XHJcbiAgICBjb25zdCBzZWN0aW9ucyA9IFNlcGFyYXRlU2VjdGlvbnMoYm9keSk7XHJcbiAgICBjb25zdCB0b3BpY3MgPSBPYmplY3Qua2V5cyh0b3BpY1RvTGV2ZWwpO1xyXG4gICAgY29uc3Qgc2Nyb2xsc3B5ID0gVE9Dc2Nyb2xsKHRvcGljcywgdG9waWNUb0xldmVsKTtcclxuICAgIGNvbnN0IHNwZWNzQm9keSA9IChzZWN0aW9ucykgPT4ge1xyXG4gICAgICBsZXQgY29udGVudCA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpPTA7IGk8c2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBzZWN0ID0gc2VjdGlvbnNbaV07XHJcbiAgICAgICAgY29uc3QgdG9waWMgPSB0b3BpY3NbaV07XHJcbiAgICAgICAgY29udGVudC5wdXNoKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e3NlY3R9PlxyXG4gICAgICAgICAgPHNlY3Rpb24gaWQ9e3RvcGljfSAvPlxyXG4gICAgICAgICAgPHNlY3Rpb24gaWQ9e3RvcGljfT5cclxuICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gcGx1Z2lucz17W3NsdWcsIHRvYywgZ2ZtXX0+e2Ake3NlY3R9YH08L1JlYWN0TWFya2Rvd24+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICByZXR1cm4gY29udGVudCBcclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9zaXRpb24tcmVsYXRpdmUnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcG9zaXRpb24tYWJzb2x1dGUgdG9wLTAgc3RhcnQtMCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTgnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICA8aDE+U2ltcGxlIFNlcmlhbGl6ZSBTcGVjczwvaDE+XHJcbiAgICAgICAgICAgICAgPGRpdj48cD5mcm9tIEV0aGVyZXVtIDIuMDwvcD48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgIHtzcGVjc0JvZHkoc2VjdGlvbnMpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcm93IHN0YXJ0LTUwIHZoLTEwMCBvdmVyZmxvdy15LXNjcm9sbCAke3N0eWxlcy50b2N9YH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEwJz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wtMiAke3N0eWxlcy5zY3JvbGx9YH0+XHJcbiAgICAgICAgICAgIHtzY3JvbGxzcHl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Byb3cgZml4ZWQtYm90dG9tYH0+XHJcbnl1cCBmcmFpZCBzb1xyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9