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
      className: "row",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3BlY3MuanN4Il0sIm5hbWVzIjpbIlNwZWNzIiwiU3BlY3NEYXRhIiwiU3BsaXRTcGVjcyIsImJvZHkiLCJUT0MiLCJ0b3BpY1RvTGV2ZWwiLCJJc29sYXRlVE9DIiwic2VjdGlvbnMiLCJTZXBhcmF0ZVNlY3Rpb25zIiwidG9waWNzIiwiT2JqZWN0Iiwia2V5cyIsInNjcm9sbHNweSIsIlRPQ3Njcm9sbCIsInNwZWNzQm9keSIsImNvbnRlbnQiLCJpIiwibGVuZ3RoIiwic2VjdCIsInRvcGljIiwicHVzaCIsInNsdWciLCJ0b2MiLCJnZm0iLCJzdHlsZXMiLCJzY3JvbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBWWUsU0FBU0EsS0FBVCxPQUE4QjtBQUFBOztBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTs7QUFBQSxvQkFDckJDLHNFQUFVLENBQUNELFNBQUQsQ0FEVztBQUFBO0FBQUEsTUFDbENFLElBRGtDO0FBQUEsTUFDNUJDLEdBRDRCOztBQUV6QyxNQUFNQyxZQUFZLEdBQUdDLHNFQUFVLENBQUNGLEdBQUQsQ0FBL0I7QUFDQSxNQUFNRyxRQUFRLEdBQUdDLDRFQUFnQixDQUFDTCxJQUFELENBQWpDO0FBQ0EsTUFBTU0sTUFBTSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWU4sWUFBWixDQUFmO0FBQ0EsTUFBTU8sU0FBUyxHQUFHQyxzRUFBUyxDQUFDSixNQUFELEVBQVNKLFlBQVQsQ0FBM0I7O0FBQ0EsTUFBTVMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ1AsUUFBRCxFQUFjO0FBQzlCLFFBQUlRLE9BQU8sR0FBRyxFQUFkOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFDVCxRQUFRLENBQUNVLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ3BDLFVBQU1FLElBQUksR0FBR1gsUUFBUSxDQUFDUyxDQUFELENBQXJCO0FBQ0EsVUFBTUcsS0FBSyxHQUFHVixNQUFNLENBQUNPLENBQUQsQ0FBcEI7QUFDQUQsYUFBTyxDQUFDSyxJQUFSLGVBQ0U7QUFBQSxnQ0FDQTtBQUFTLFlBQUUsRUFBRUQ7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBRUE7QUFBUyxZQUFFLEVBQUVBLEtBQWI7QUFBQSxpQ0FDRSxxRUFBQyxxREFBRDtBQUFlLG1CQUFPLEVBQUUsQ0FBQ0Usa0RBQUQsRUFBT0MsaURBQVAsRUFBWUMsaURBQVosQ0FBeEI7QUFBQSxnQ0FBOENMLElBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkE7QUFBQSxTQUFVQSxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU9FOztBQUNKLFdBQU9ILE9BQVA7QUFDRCxHQWREOztBQWtCQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLHFDQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQSxtQ0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBS0U7QUFBSyxtQkFBUyxFQUFDLEtBQWY7QUFBQSxvQkFDR0QsU0FBUyxDQUFDUCxRQUFEO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVdFO0FBQUssaUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQWdCRTtBQUFLLGVBQVMsa0RBQTJDaUIsZ0VBQU0sQ0FBQ0YsR0FBbEQsQ0FBZDtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFO0FBQUssaUJBQVMsa0JBQVdFLGdFQUFNLENBQUNDLE1BQWxCLENBQWQ7QUFBQSxrQkFDR2I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGLGVBd0JFO0FBQUssZUFBUyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0NIO0tBeER1QlosSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVjcy41ZWJjZWJhZDVkYTljZThkZDJjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IFNwbGl0U3BlY3MgZnJvbSAnLi4vY29tcG9uZW50cy9zcGxpdHNwZWNzJztcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xyXG5pbXBvcnQgZ2ZtIGZyb20gJ3JlbWFyay1nZm0nO1xyXG5pbXBvcnQgdG9jIGZyb20gJ3JlbWFyay10b2MnO1xyXG5pbXBvcnQgc2x1ZyBmcm9tICdyZW1hcmstc2x1Zyc7XHJcbmltcG9ydCBJc29sYXRlVE9DIGZyb20gJy4uL2NvbXBvbmVudHMvaXNvbGF0ZVRPQyc7XHJcbmltcG9ydCBTZXBhcmF0ZVNlY3Rpb25zIGZyb20gJy4uL2NvbXBvbmVudHMvU2VwYXJhdGVTZWN0aW9ucyc7XHJcbmltcG9ydCBUT0NzY3JvbGwgZnJvbSAnLi4vY29tcG9uZW50cy9UT0NzY3JvbGwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9zcGVjcy5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBTcGVjc0RhdGEgPSBmcy5yZWFkRmlsZVN5bmMoJy4vZXRoMi4wLXNwZWNzL3Nzei9zaW1wbGUtc2VyaWFsaXplLm1kJywgJ3V0ZjgnKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBTcGVjc0RhdGFcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGVjcyh7IFNwZWNzRGF0YSB9KSB7XHJcbiAgICBjb25zdCBbYm9keSwgVE9DXSA9IFNwbGl0U3BlY3MoU3BlY3NEYXRhKTtcclxuICAgIGNvbnN0IHRvcGljVG9MZXZlbCA9IElzb2xhdGVUT0MoVE9DKTtcclxuICAgIGNvbnN0IHNlY3Rpb25zID0gU2VwYXJhdGVTZWN0aW9ucyhib2R5KTtcclxuICAgIGNvbnN0IHRvcGljcyA9IE9iamVjdC5rZXlzKHRvcGljVG9MZXZlbCk7XHJcbiAgICBjb25zdCBzY3JvbGxzcHkgPSBUT0NzY3JvbGwodG9waWNzLCB0b3BpY1RvTGV2ZWwpO1xyXG4gICAgY29uc3Qgc3BlY3NCb2R5ID0gKHNlY3Rpb25zKSA9PiB7XHJcbiAgICAgIGxldCBjb250ZW50ID0gW107XHJcbiAgICAgIGZvciAobGV0IGk9MDsgaTxzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHNlY3QgPSBzZWN0aW9uc1tpXTtcclxuICAgICAgICBjb25zdCB0b3BpYyA9IHRvcGljc1tpXTtcclxuICAgICAgICBjb250ZW50LnB1c2goXHJcbiAgICAgICAgICA8ZGl2IGtleT17c2VjdH0+XHJcbiAgICAgICAgICA8c2VjdGlvbiBpZD17dG9waWN9IC8+XHJcbiAgICAgICAgICA8c2VjdGlvbiBpZD17dG9waWN9PlxyXG4gICAgICAgICAgICA8UmVhY3RNYXJrZG93biBwbHVnaW5zPXtbc2x1ZywgdG9jLCBnZm1dfT57YCR7c2VjdH1gfTwvUmVhY3RNYXJrZG93bj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIHJldHVybiBjb250ZW50IFxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb3NpdGlvbi1yZWxhdGl2ZSc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMCBzdGFydC0wJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtOCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgIDxoMT5TaW1wbGUgU2VyaWFsaXplIFNwZWNzPC9oMT5cclxuICAgICAgICAgICAgICA8ZGl2PjxwPmZyb20gRXRoZXJldW0gMi4wPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAge3NwZWNzQm9keShzZWN0aW9ucyl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC00Jz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Byb3cgc3RhcnQtNTAgdmgtMTAwIG92ZXJmbG93LXktc2Nyb2xsICR7c3R5bGVzLnRvY31gfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMTAnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbC0yICR7c3R5bGVzLnNjcm9sbH1gfT5cclxuICAgICAgICAgICAge3Njcm9sbHNweX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJvd2B9PlxyXG4gICAgICAgICAgICB5dXAgZnJhaWQgc29cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==