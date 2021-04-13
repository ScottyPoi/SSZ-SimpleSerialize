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
          className: "d-flex flex-column navbar-nav navbar-nav-scroll ".concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.nonavbar),
          style: {
            scrollbarWidth: 0
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            children: props.pages.map(function (page) {
              if (!page.pages) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "d-flex flex-row",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
                                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanN4Il0sIm5hbWVzIjpbIm5hdkJhclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsIk5hdkJhciIsInByb3BzIiwic3R5bGVzIiwibm9uYXZiYXIiLCJzY3JvbGxiYXJXaWR0aCIsInBhZ2VzIiwibWFwIiwicGFnZSIsIm5hbWUiLCJzdWJwYWdlIiwiZm9udFNpemUiLCJzaXRlbWFwMyIsInN1YnN1YnBhZ2UiLCJzaXRlbWFwNCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHO0FBQ2hCQyxpQkFBZSxFQUFFLEtBREQ7QUFFaEJDLE9BQUssRUFBRSxPQUZTO0FBR2hCQyxPQUFLLEVBQUUsTUFIUztBQUloQkMsUUFBTSxFQUFFO0FBSlEsQ0FBcEI7QUFPZSxTQUFTQyxNQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBVEMsS0FBUzs7QUFFekMsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFpQyxRQUFFLEVBQUMsd0JBQXBDO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsNERBQXFEQywwREFBTSxDQUFDQyxRQUE1RCxDQUFkO0FBQXNGLGVBQUssRUFBRTtBQUFDQywwQkFBYyxFQUFFO0FBQWpCLFdBQTdGO0FBQUEsaUNBQ0Y7QUFBQSxzQkFDQ0gsS0FBSyxDQUFDSSxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFVO0FBQ3pCLGtCQUFJLENBQUNBLElBQUksQ0FBQ0YsS0FBVixFQUFpQjtBQUNmLG9DQUNBO0FBQXFCLDJCQUFTLEVBQUMsaUJBQS9CO0FBQUEseUNBQ0Us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QUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFBVUQsSUFBSSxDQUFDQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREs7QUE0Q0w7QUFDSCxhQXBEQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNFSDtLQXhFdUJSLE07QUF3RXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBkZDI1MDJmYTU1ZjU2YjgxZWM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2QmFyLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IG5hdkJhclN0eWxlID0ge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInJlZFwiLFxyXG4gICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCJcclxuICB9O1xyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIoeyAuLi5wcm9wcyB9KSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdiBmbGV4LWNvbHVtbicgaWQ9J25hdmJhclN1cHBvcnRlZENvbnRlbnQnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5TaXRlIE1hcDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyAnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGQtZmxleCBmbGV4LWNvbHVtbiBuYXZiYXItbmF2IG5hdmJhci1uYXYtc2Nyb2xsICR7c3R5bGVzLm5vbmF2YmFyfWB9IHN0eWxlPXt7c2Nyb2xsYmFyV2lkdGg6IDB9fT5cclxuICAgICAgICAgIDx1bCA+XHJcbiAgICAgICAgICB7cHJvcHMucGFnZXMubWFwKChwYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcGFnZS5wYWdlcykge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3BhZ2UubmFtZX0gY2xhc3NOYW1lPSdkLWZsZXggZmxleC1yb3cnPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSduYXYtbGluaycgaHJlZj1cIiNcIiA+e3BhZ2UubmFtZX0gIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgZWxzZSB7IHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3BhZ2UubmFtZX0gY2xhc3NOYW1lPSdkLWZsZXggZmxleC1yb3cnPlxyXG4gICAgICAgICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdycgPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J25hdi1saW5rJyBocmVmPScjJz57cGFnZS5uYW1lfTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbmF2YmFyLW5hdic+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cGFnZS5wYWdlcy5tYXAoKHN1YnBhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdWJwYWdlLnBhZ2VzKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1yb3cnIGtleT17c3VicGFnZS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17YG5hdi1saW5rYH0gaHJlZj0nIycgc3R5bGU9e3tmb250U2l6ZTogODB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaXRlbWFwM30+e3N1YnBhZ2UubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBmbGV4LXJvdycga2V5PXtzdWJwYWdlLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nbmF2LWxpbmsnIGhyZWY9XCIjXCIgc3R5bGU9e3tmb250U2l6ZTogODB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpdGVtYXAzfT4ge3N1YnBhZ2UubmFtZX0gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbmF2YmFyLW5hdic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3N1YnBhZ2UucGFnZXMubWFwKChzdWJzdWJwYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1yb3cnIGtleT17c3Vic3VicGFnZS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nbmF2LWxpbmsnIGhyZWY9JyMnIHN0eWxlPXt7Zm9udFNpemU6IDYwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2l0ZW1hcDR9PntzdWJzdWJwYWdlLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvTGluaz4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9