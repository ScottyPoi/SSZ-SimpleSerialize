webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanN4Il0sIm5hbWVzIjpbIm5hdkJhclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsIk5hdkJhciIsInByb3BzIiwic3R5bGVzIiwibm9uYXZiYXIiLCJwYWdlcyIsIm1hcCIsInBhZ2UiLCJuYW1lIiwic3VicGFnZSIsImZvbnRTaXplIiwic2l0ZW1hcDMiLCJzdWJzdWJwYWdlIiwic2l0ZW1hcDQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRztBQUNoQkMsaUJBQWUsRUFBRSxLQUREO0FBRWhCQyxPQUFLLEVBQUUsT0FGUztBQUdoQkMsT0FBSyxFQUFFLE1BSFM7QUFJaEJDLFFBQU0sRUFBRTtBQUpRLENBQXBCO0FBT2UsU0FBU0MsTUFBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVRDLEtBQVM7O0FBRXpDLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBaUMsUUFBRSxFQUFDLHdCQUFwQztBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsb0JBQWY7QUFBQSxpQ0FDRjtBQUFJLHFCQUFTLDhCQUF1QkMsMERBQU0sQ0FBQ0MsUUFBOUIsQ0FBYjtBQUFBLHNCQUNDRixLQUFLLENBQUNHLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQVU7QUFDekIsa0JBQUksQ0FBQ0EsSUFBSSxDQUFDRixLQUFWLEVBQWlCO0FBQ2Ysb0NBQ0E7QUFBcUIsMkJBQVMsRUFBQyxpQkFBL0I7QUFBQSx5Q0FDRTtBQUFJLDZCQUFTLEVBQUMsVUFBZDtBQUF5Qix3QkFBSSxFQUFDLEdB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eUJBREs7QUE0Q0w7QUFDSCxhQXBEQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNFSDtLQXhFdUJQLE07QUF3RXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU5ZDA5YTI5YzQ4OWIwMGRlNGI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2QmFyLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IG5hdkJhclN0eWxlID0ge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInJlZFwiLFxyXG4gICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCJcclxuICB9O1xyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIoeyAuLi5wcm9wcyB9KSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdiBmbGV4LWNvbHVtbicgaWQ9J25hdmJhclN1cHBvcnRlZENvbnRlbnQnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5TaXRlIE1hcDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyAnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtY29sdW1uJz5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2BuYXZiYXItbmF2LXNjcm9sbCAke3N0eWxlcy5ub25hdmJhcn1gfSA+XHJcbiAgICAgICAgICB7cHJvcHMucGFnZXMubWFwKChwYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcGFnZS5wYWdlcykge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3BhZ2UubmFtZX0gY2xhc3NOYW1lPSdkLWZsZXggZmxleC1yb3cnPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbmF2LWxpbmsnIGhyZWY9XCIjXCIgPntwYWdlLm5hbWV9ICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICBlbHNlIHsgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17cGFnZS5uYW1lfSBjbGFzc05hbWU9J2QtZmxleCBmbGV4LXJvdyc+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdycgPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J25hdi1saW5rJyBocmVmPScjJz57cGFnZS5uYW1lfTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbmF2YmFyLW5hdic+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cGFnZS5wYWdlcy5tYXAoKHN1YnBhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdWJwYWdlLnBhZ2VzKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1yb3cnIGtleT17c3VicGFnZS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e2BuYXYtbGlua2B9IGhyZWY9JyMnIHN0eWxlPXt7Zm9udFNpemU6IDgwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2l0ZW1hcDN9PntzdWJwYWdlLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtcm93JyBrZXk9e3N1YnBhZ2UubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nbmF2LWxpbmsnIGhyZWY9XCIjXCIgc3R5bGU9e3tmb250U2l6ZTogODB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpdGVtYXAzfT4ge3N1YnBhZ2UubmFtZX0gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbmF2YmFyLW5hdic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3N1YnBhZ2UucGFnZXMubWFwKChzdWJzdWJwYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtcm93JyBrZXk9e3N1YnN1YnBhZ2UubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J25hdi1saW5rJyBocmVmPScjJyBzdHlsZT17e2ZvbnRTaXplOiA2MH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpdGVtYXA0fT57c3Vic3VicGFnZS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbGk+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==