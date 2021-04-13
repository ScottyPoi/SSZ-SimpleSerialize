webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/NavBar.jsx":
/*!*******************************!*\
  !*** ./components/NavBar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_kyzam_Documents_GitHub_SSZ_SimpleSerialize_sszapp_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavBar.module.scss */ "./components/NavBar.module.scss");
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\kyzam\\Documents\\GitHub\\SSZ-SimpleSerialize\\sszapp\\components\\NavBar.jsx";



var navBarStyle = {
  backgroundColor: "red",
  color: "white",
  width: "100%",
  height: "100%"
};
function NavBar(_ref) {
  var _this = this;

  var props = Object(C_Users_kyzam_Documents_GitHub_SSZ_SimpleSerialize_sszapp_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _ref);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "nav flex-column",
      id: "navbarSupportedContent",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row justify-content-center",
        children: "Site Map"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex flex-column",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "navbar-nav-scroll ".concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.nonavbar),
            children: props.pages.map(function (page) {
              if (!page.pages) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "d-flex flex-row",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "nav-link",
                    href: "#",
                    children: [page.name, "  "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 25,
                    columnNumber: 17
                  }, _this)
                }, page.name, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 15
                }, _this);
              } else {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "d-flex flex-row",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "row",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                        className: "nav-link",
                        href: "#",
                        children: page.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 32,
                        columnNumber: 19
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                        className: "navbar-nav",
                        children: page.pages.map(function (subpage) {
                          if (!subpage.pages) {
                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "d-flex flex-row",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                  className: "nav-link",
                                  href: "#",
                                  style: {
                                    fontSize: 80
                                  },
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.sitemap3,
                                    children: subpage.name
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 40,
                                    columnNumber: 31
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 39,
                                  columnNumber: 29
                                }, _this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 38,
                                columnNumber: 27
                              }, _this)
                            }, subpage.name, false, {
                              fileName: _jsxFileName,
                              lineNumber: 37,
                              columnNumber: 25
                            }, _this);
                          } else {
                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "d-flex flex-row",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                  className: "nav-link",
                                  href: "#",
                                  style: {
                                    fontSize: 80
                                  },
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.sitemap3,
                                    children: [" ", subpage.name, " "]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 50,
                                    columnNumber: 33
                                  }, _this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 49,
                                  columnNumber: 31
                                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                                  className: "navbar-nav",
                                  children: subpage.pages.map(function (subsubpage) {
                                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                                      className: "d-flex flex-row",
                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                        className: "nav-link",
                                        href: "#",
                                        style: {
                                          fontSize: 60
                                        },
                                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                          className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.sitemap4,
                                          children: subsubpage.name
                                        }, void 0, false, {
                                          fileName: _jsxFileName,
                                          lineNumber: 57,
                                          columnNumber: 37
                                        }, _this)
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 56,
                                        columnNumber: 35
                                      }, _this)
                                    }, subsubpage.name, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 55,
                                      columnNumber: 33
                                    }, _this);
                                  })
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 52,
                                  columnNumber: 31
                                }, _this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 48,
                                columnNumber: 29
                              }, _this)
                            }, subpage.name, false, {
                              fileName: _jsxFileName,
                              lineNumber: 47,
                              columnNumber: 27
                            }, _this);
                          }
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 33,
                        columnNumber: 19
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 31,
                      columnNumber: 17
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 30,
                    columnNumber: 15
                  }, _this)
                }, page.name, false, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 15
                }, _this);
              }
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }, this);
}
_c = NavBar;
;

var _c;

$RefreshReg$(_c, "NavBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanN4Il0sIm5hbWVzIjpbIm5hdkJhclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsIk5hdkJhciIsInByb3BzIiwic3R5bGVzIiwibm9uYXZiYXIiLCJwYWdlcyIsIm1hcCIsInBhZ2UiLCJuYW1lIiwic3VicGFnZSIsImZvbnRTaXplIiwic2l0ZW1hcDMiLCJzdWJzdWJwYWdlIiwic2l0ZW1hcDQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRztBQUNoQkMsaUJBQWUsRUFBRSxLQUREO0FBRWhCQyxPQUFLLEVBQUUsT0FGUztBQUdoQkMsT0FBSyxFQUFFLE1BSFM7QUFJaEJDLFFBQU0sRUFBRTtBQUpRLENBQXBCO0FBT2UsU0FBU0MsTUFBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVRDLEtBQVM7O0FBRXpDLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBaUMsUUFBRSxFQUFDLHdCQUFwQztBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsb0JBQWY7QUFBQSxpQ0FDRjtBQUFJLHFCQUFTLDhCQUF1QkMsMERBQU0sQ0FBQ0MsUUFBOUIsQ0FBYjtBQUFBLHNCQUNDRixLQUFLLENBQUNHLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQVU7QUFDekIsa0JBQUksQ0FBQ0EsSUFBSSxDQUFDRixLQUFWLEVBQWlCO0FBQ2Ysb0NBQ0E7QUFBcUIsMkJBQVMsRUFBQyxpQkFBL0I7QUFBQSx5Q0FDRTtBQUFJLDZCQUFTLEVBQUMsVUFBZDtBQUF5Qix3QkFBSSxFQUFDLEdB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eUJBREs7QUE0Q0w7QUFDSCxhQXBEQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNFSDtLQXhFdUJQLE07QUF3RXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZGQzMGY2NDIzNmRmMmY2MTYxMzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXZCYXIubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgbmF2QmFyU3R5bGUgPSB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCIsXHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIlxyXG4gIH07XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkJhcih7IC4uLnByb3BzIH0pIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2ID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2IGZsZXgtY29sdW1uJyBpZD0nbmF2YmFyU3VwcG9ydGVkQ29udGVudCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXInPlNpdGUgTWFwPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93ICc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1jb2x1bW4nPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17YG5hdmJhci1uYXYtc2Nyb2xsICR7c3R5bGVzLm5vbmF2YmFyfWB9ID5cclxuICAgICAgICAgIHtwcm9wcy5wYWdlcy5tYXAoKHBhZ2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFwYWdlLnBhZ2VzKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17cGFnZS5uYW1lfSBjbGFzc05hbWU9J2QtZmxleCBmbGV4LXJvdyc+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSduYXYtbGluaycgaHJlZj1cIiNcIiA+e3BhZ2UubmFtZX0gIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIGVsc2UgeyByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtwYWdlLm5hbWV9IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtcm93Jz5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93JyA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nbmF2LWxpbmsnIGhyZWY9JyMnPntwYWdlLm5hbWV9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduYXZiYXItbmF2Jz5cclxuICAgICAgICAgICAgICAgICAgICAgIHtwYWdlLnBhZ2VzLm1hcCgoc3VicGFnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN1YnBhZ2UucGFnZXMpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBmbGV4LXJvdycga2V5PXtzdWJwYWdlLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17YG5hdi1saW5rYH0gaHJlZj0nIycgc3R5bGU9e3tmb250U2l6ZTogODB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaXRlbWFwM30+e3N1YnBhZ2UubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1yb3cnIGtleT17c3VicGFnZS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSduYXYtbGluaycgaHJlZj1cIiNcIiBzdHlsZT17e2ZvbnRTaXplOiA4MH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2l0ZW1hcDN9PiB7c3VicGFnZS5uYW1lfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduYXZiYXItbmF2Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VicGFnZS5wYWdlcy5tYXAoKHN1YnN1YnBhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1yb3cnIGtleT17c3Vic3VicGFnZS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nbmF2LWxpbmsnIGhyZWY9JyMnIHN0eWxlPXt7Zm9udFNpemU6IDYwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2l0ZW1hcDR9PntzdWJzdWJwYWdlLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9saT4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9