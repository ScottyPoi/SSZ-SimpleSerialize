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
        className: "row overflow-auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex flex-column",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "navbar-nav ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanN4Il0sIm5hbWVzIjpbIm5hdkJhclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsIk5hdkJhciIsInByb3BzIiwicGFnZXMiLCJtYXAiLCJwYWdlIiwibmFtZSIsInN1YnBhZ2UiLCJmb250U2l6ZSIsInN0eWxlcyIsInNpdGVtYXAzIiwic3Vic3VicGFnZSIsInNpdGVtYXA0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUc7QUFDaEJDLGlCQUFlLEVBQUUsS0FERDtBQUVoQkMsT0FBSyxFQUFFLE9BRlM7QUFHaEJDLE9BQUssRUFBRSxNQUhTO0FBSWhCQyxRQUFNLEVBQUU7QUFKUSxDQUFwQjtBQU9lLFNBQVNDLE1BQVQsT0FBOEI7QUFBQTs7QUFBQSxNQUFUQyxLQUFTOztBQUV6QyxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQWlDLFFBQUUsRUFBQyx3QkFBcEM7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxvQkFBZjtBQUFBLGlDQUNGO0FBQUkscUJBQVMsRUFBQyxhQUFkO0FBQUEsc0JBQ0NBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUNDLElBQUQsRUFBVTtBQUN6QixrQkFBSSxDQUFDQSxJQUFJLENBQUNGLEtBQVYsRUFBaUI7QUFDZixvQ0FDQTtBQUFxQiwyQkFBUyxFQUFDLGlCQUEvQjtBQUFBLHlDQUNFO0FBQUksNkJBQVMsRUFBQyxVQUFkO0FBQXlCLHdCQUFJLEVBQUMsR0FBOUI7QUFBQSwrQkFBb0NFLElBQUksQ0FBQ0MsSUFB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QTtBQUFBO0FBQUE7QUFBQTtBQURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0VIO0tBeEV1QkwsTTtBQXdFdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iZWQ2OTJhYWQ3YmVmNmUwYjNiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdkJhci5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBuYXZCYXJTdHlsZSA9IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJyZWRcIixcclxuICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiXHJcbiAgfTtcclxuICBcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2QmFyKHsgLi4ucHJvcHMgfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXYgZmxleC1jb2x1bW4nIGlkPSduYXZiYXJTdXBwb3J0ZWRDb250ZW50Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+U2l0ZSBNYXA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgb3ZlcmZsb3ctYXV0byc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1jb2x1bW4nPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgXCIgPlxyXG4gICAgICAgICAge3Byb3BzLnBhZ2VzLm1hcCgocGFnZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXBhZ2UucGFnZXMpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtwYWdlLm5hbWV9IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtcm93Jz5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J25hdi1saW5rJyBocmVmPVwiI1wiID57cGFnZS5uYW1lfSAgPC9saT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgZWxzZSB7IHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3BhZ2UubmFtZX0gY2xhc3NOYW1lPSdkLWZsZXggZmxleC1yb3cnPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnID5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSduYXYtbGluaycgaHJlZj0nIyc+e3BhZ2UubmFtZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J25hdmJhci1uYXYnPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3BhZ2UucGFnZXMubWFwKChzdWJwYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3VicGFnZS5wYWdlcykgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtcm93JyBrZXk9e3N1YnBhZ2UubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtgbmF2LWxpbmtgfSBocmVmPScjJyBzdHlsZT17e2ZvbnRTaXplOiA4MH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpdGVtYXAzfT57c3VicGFnZS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBmbGV4LXJvdycga2V5PXtzdWJwYWdlLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J25hdi1saW5rJyBocmVmPVwiI1wiIHN0eWxlPXt7Zm9udFNpemU6IDgwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaXRlbWFwM30+IHtzdWJwYWdlLm5hbWV9IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J25hdmJhci1uYXYnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJwYWdlLnBhZ2VzLm1hcCgoc3Vic3VicGFnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2QtZmxleCBmbGV4LXJvdycga2V5PXtzdWJzdWJwYWdlLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSduYXYtbGluaycgaHJlZj0nIycgc3R5bGU9e3tmb250U2l6ZTogNjB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaXRlbWFwNH0+e3N1YnN1YnBhZ2UubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2xpPiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=