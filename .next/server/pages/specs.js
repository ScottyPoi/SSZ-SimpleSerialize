module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/specs.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/SeparateSections.jsx":
/*!*****************************************!*\
  !*** ./components/SeparateSections.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SeparateSections; });
function SeparateSections(body) {
  let tmp = body; // Convoluted way of separating each section of the markdown by Headings, regardless of level ## ### or ####
  // While also preserving the markdown notation
  // Returns an array of strings in markdown notation

  tmp = tmp.replace(/####/g, "FOOBARBAZ@@@@");
  tmp = tmp.replace(/###/g, "FOOBARBAZ@@@");
  tmp = tmp.replace(/##/g, "FOOBARBAZ@@");
  tmp = tmp.replace(/@/g, "#");
  tmp = tmp.split("FOOBARBAZ");
  tmp = tmp.filter(foo => foo !== `\r\n\r\n`);
  tmp = tmp.join(`\n`);
  tmp = tmp.split(`\n`);
  tmp = tmp.filter(foo => foo !== `\r` && foo !== "");
  tmp = tmp.join(`\n`);
  tmp = tmp.replace(/####/g, "FOOBARBAZ@@@@");
  tmp = tmp.replace(/###/g, "FOOBARBAZ@@@");
  tmp = tmp.replace(/##/g, "FOOBARBAZ@@");
  tmp = tmp.replace(/@/g, "#");
  tmp = tmp.split("FOOBARBAZ");
  tmp = tmp.filter(foo => foo !== `\r` && foo !== `\n` && foo !== "");
  return tmp;
}

/***/ }),

/***/ "./components/TOCscroll.jsx":
/*!**********************************!*\
  !*** ./components/TOCscroll.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TOCscroll; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scrollspy */ "react-scrollspy");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TOCscroll.module.scss */ "./components/TOCscroll.module.scss");
/* harmony import */ var _TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\kyzam\\Documents\\GitHub\\SSZ-SimpleSerialize\\components\\TOCscroll.jsx";




function TOCscroll(topics, topicToLevel) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `nav  flex-column ${_TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container}`,
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
          className: `d-flex flex-column navbar-nav-scroll ${_TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.nonavbar}`,
          style: {
            scrollbarWidth: 0
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scrollspy__WEBPACK_IMPORTED_MODULE_3___default.a, {
            items: topics,
            currentClassName: _TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.iscurrent,
            "aria-current": "true",
            offset: -150,
            children: topics.map(topic => {
              let level = topicToLevel[topic] === "Scrollspy1" ? _TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Scrollspy1 : topicToLevel[topic] === "Scrollspy2" ? _TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Scrollspy2 : _TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Scrollspy3;
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                className: level,
                href: `#${topic}`,
                children: `${topic}`
              }, topic, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 19
              }, this);
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
;

/***/ }),

/***/ "./components/TOCscroll.module.scss":
/*!******************************************!*\
  !*** ./components/TOCscroll.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Scrollspy1": "TOCscroll_Scrollspy1__ygNvR",
	"Scrollspy2": "TOCscroll_Scrollspy2__ql4PO",
	"Scrollspy3": "TOCscroll_Scrollspy3__2g8it",
	"iscurrent": "TOCscroll_iscurrent__1ryN7",
	"container": "TOCscroll_container__3Xcvr",
	"nonavbar": "TOCscroll_nonavbar__xqG8n"
};


/***/ }),

/***/ "./components/isolateTOC.jsx":
/*!***********************************!*\
  !*** ./components/isolateTOC.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IsolateTOC; });
function IsolateTOC(toc) {
  const text = toc; // Isolate text between doctoc comments

  const firstSplit = text.split("<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->");
  const secondSplit = firstSplit[1].split("<!-- END doctoc generated TOC please keep comment here to allow auto update -->");
  const table = secondSplit[0]; // separate by line and filter out empty lines.  
  // save a list of TOC titles clean, and a list of TOC titles with markdown formatting symbols

  const tableByLines = table.split('\n');
  const tableByLinesNoEmpties = tableByLines.filter(line => line !== "" && line !== "\r");
  const tblneAsString = `${tableByLinesNoEmpties}`;
  const removedSeparaters = tblneAsString.replace(/ /g, "").replace(/,/g, "").replace(/-/g, "").replace(/]/g, '').replace(/\[/g, "").replace(/\)/g, "(").replace(/\(/g, ",").replace(/\`/g, "");
  const removedSeparatersWithLevels = tblneAsString.replace(/,/g, "").replace(/]/g, '').replace(/\)/g, "(").replace(/\(/g, ",").replace(/\`/g, "");
  const cleanList = removedSeparaters.split(',');
  const cleanListWithLevels = removedSeparatersWithLevels.split(',');
  cleanList.pop();
  cleanListWithLevels.pop(); // save a dictionary pairing clean title with title with formatting levels

  const topicToTWL = {};

  for (let i = 0; i < cleanList.length; i += 2) {
    let topic = cleanList[i];
    let TWL = cleanListWithLevels[i];
    topicToTWL[topic] = TWL;
  }

  ; // return a dictionary pairing clean title with className for scrollspy link

  const topicToLevel = {};
  Object.keys(topicToTWL).map(topic => {
    topicToLevel[topic] = topicToTWL[topic][0] === "-" ? "Scrollspy1" : topicToTWL[topic][2] === "-" ? "Scrollspy2" : topicToTWL[topic][4] === "-" ? `Scrollspy3` : 4;
  });
  return topicToLevel;
}

/***/ }),

/***/ "./components/splitspecs.jsx":
/*!***********************************!*\
  !*** ./components/splitspecs.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SplitSpecs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function SplitSpecs(doc) {
  const document = doc;
  const split = document.split("<!-- /TOC -->");
  const TOC = split[0];
  const specs = split[1]; // console.log(TOC);

  return [specs, TOC];
}

/***/ }),

/***/ "./pages/specs.jsx":
/*!*************************!*\
  !*** ./pages/specs.jsx ***!
  \*************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Specs; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_splitspecs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/splitspecs */ "./components/splitspecs.jsx");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! remark-gfm */ "remark-gfm");
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var remark_toc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remark-toc */ "remark-toc");
/* harmony import */ var remark_toc__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remark_toc__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var remark_slug__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! remark-slug */ "remark-slug");
/* harmony import */ var remark_slug__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(remark_slug__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_isolateTOC__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/isolateTOC */ "./components/isolateTOC.jsx");
/* harmony import */ var _components_SeparateSections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SeparateSections */ "./components/SeparateSections.jsx");
/* harmony import */ var _components_TOCscroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/TOCscroll */ "./components/TOCscroll.jsx");
/* harmony import */ var _styles_specs_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/specs.module.css */ "./styles/specs.module.css");
/* harmony import */ var _styles_specs_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_specs_module_css__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "C:\\Users\\kyzam\\Documents\\GitHub\\SSZ-SimpleSerialize\\pages\\specs.jsx";











async function getStaticProps() {
  const SpecsData = fs__WEBPACK_IMPORTED_MODULE_2___default.a.readFileSync('../data/simple-serialize.md', 'utf8');
  return {
    props: {
      SpecsData
    }
  };
}
function Specs({
  SpecsData
}) {
  const [body, TOC] = Object(_components_splitspecs__WEBPACK_IMPORTED_MODULE_3__["default"])(SpecsData);
  const topicToLevel = Object(_components_isolateTOC__WEBPACK_IMPORTED_MODULE_8__["default"])(TOC);
  const sections = Object(_components_SeparateSections__WEBPACK_IMPORTED_MODULE_9__["default"])(body);
  const topics = Object.keys(topicToLevel);
  const scrollspy = Object(_components_TOCscroll__WEBPACK_IMPORTED_MODULE_10__["default"])(topics, topicToLevel);

  const specsBody = sections => {
    let content = [];

    for (let i = 0; i < sections.length; i++) {
      const sect = sections[i];
      const topic = topics[i];
      content.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          id: topic
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          id: topic,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a, {
            plugins: [remark_slug__WEBPACK_IMPORTED_MODULE_7___default.a, remark_toc__WEBPACK_IMPORTED_MODULE_6___default.a, remark_gfm__WEBPACK_IMPORTED_MODULE_5___default.a],
            children: `${sect}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)]
      }, sect, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, this));
    }

    return content;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "position-relative",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "d-flex inline-flex row position-absolute top-0 start-0",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "d-flex flex-column col-8",
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
        className: "d-flex flex-column col-4"
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
      className: `row start-50 vh-100 overflow-y-scroll ${_styles_specs_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.toc}`,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: `col-2 ${_styles_specs_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.scroll}`,
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
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 7
  }, this);
}

/***/ }),

/***/ "./styles/specs.module.css":
/*!*********************************!*\
  !*** ./styles/specs.module.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"scroll": "specs_scroll__2OMRg",
	"toc": "specs_toc__3Lfdw",
	"bottom": "specs_bottom__Cfcxk"
};


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "react-scrollspy":
/*!**********************************!*\
  !*** external "react-scrollspy" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollspy");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "remark-gfm":
/*!*****************************!*\
  !*** external "remark-gfm" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("remark-gfm");

/***/ }),

/***/ "remark-slug":
/*!******************************!*\
  !*** external "remark-slug" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("remark-slug");

/***/ }),

/***/ "remark-toc":
/*!*****************************!*\
  !*** external "remark-toc" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("remark-toc");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZXBhcmF0ZVNlY3Rpb25zLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RPQ3Njcm9sbC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UT0NzY3JvbGwubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pc29sYXRlVE9DLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NwbGl0c3BlY3MuanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL3NwZWNzLmpzeCIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvc3BlY3MubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbWFya2Rvd25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxzcHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZW1hcmstZ2ZtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVtYXJrLXNsdWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZW1hcmstdG9jXCIiXSwibmFtZXMiOlsiU2VwYXJhdGVTZWN0aW9ucyIsImJvZHkiLCJ0bXAiLCJyZXBsYWNlIiwic3BsaXQiLCJmaWx0ZXIiLCJmb28iLCJqb2luIiwiVE9Dc2Nyb2xsIiwidG9waWNzIiwidG9waWNUb0xldmVsIiwic3R5bGVzIiwiY29udGFpbmVyIiwibm9uYXZiYXIiLCJzY3JvbGxiYXJXaWR0aCIsImlzY3VycmVudCIsIm1hcCIsInRvcGljIiwibGV2ZWwiLCJTY3JvbGxzcHkxIiwiU2Nyb2xsc3B5MiIsIlNjcm9sbHNweTMiLCJJc29sYXRlVE9DIiwidG9jIiwidGV4dCIsImZpcnN0U3BsaXQiLCJzZWNvbmRTcGxpdCIsInRhYmxlIiwidGFibGVCeUxpbmVzIiwidGFibGVCeUxpbmVzTm9FbXB0aWVzIiwibGluZSIsInRibG5lQXNTdHJpbmciLCJyZW1vdmVkU2VwYXJhdGVycyIsInJlbW92ZWRTZXBhcmF0ZXJzV2l0aExldmVscyIsImNsZWFuTGlzdCIsImNsZWFuTGlzdFdpdGhMZXZlbHMiLCJwb3AiLCJ0b3BpY1RvVFdMIiwiaSIsImxlbmd0aCIsIlRXTCIsIk9iamVjdCIsImtleXMiLCJTcGxpdFNwZWNzIiwiZG9jIiwiZG9jdW1lbnQiLCJUT0MiLCJzcGVjcyIsImdldFN0YXRpY1Byb3BzIiwiU3BlY3NEYXRhIiwiZnMiLCJyZWFkRmlsZVN5bmMiLCJwcm9wcyIsIlNwZWNzIiwic2VjdGlvbnMiLCJzY3JvbGxzcHkiLCJzcGVjc0JvZHkiLCJjb250ZW50Iiwic2VjdCIsInB1c2giLCJzbHVnIiwiZ2ZtIiwic2Nyb2xsIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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QSxrQkFDR1A7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEJILEM7Ozs7Ozs7Ozs7O0FDNUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEEsK0I7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoicGFnZXMvc3BlY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3NwZWNzLmpzeFwiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcGFyYXRlU2VjdGlvbnMoYm9keSkge1xyXG4gICAgbGV0IHRtcCA9IGJvZHk7XHJcbiAgICBcclxuICAgIC8vIENvbnZvbHV0ZWQgd2F5IG9mIHNlcGFyYXRpbmcgZWFjaCBzZWN0aW9uIG9mIHRoZSBtYXJrZG93biBieSBIZWFkaW5ncywgcmVnYXJkbGVzcyBvZiBsZXZlbCAjIyAjIyMgb3IgIyMjI1xyXG4gICAgLy8gV2hpbGUgYWxzbyBwcmVzZXJ2aW5nIHRoZSBtYXJrZG93biBub3RhdGlvblxyXG4gICAgLy8gUmV0dXJucyBhbiBhcnJheSBvZiBzdHJpbmdzIGluIG1hcmtkb3duIG5vdGF0aW9uXHJcblxyXG4gICAgdG1wID0gdG1wLnJlcGxhY2UoLyMjIyMvZywgXCJGT09CQVJCQVpAQEBAXCIpO1xyXG4gICAgdG1wID0gdG1wLnJlcGxhY2UoLyMjIy9nLCBcIkZPT0JBUkJBWkBAQFwiKTtcclxuICAgIHRtcCA9IHRtcC5yZXBsYWNlKC8jIy9nLCBcIkZPT0JBUkJBWkBAXCIpO1xyXG4gICAgdG1wID0gdG1wLnJlcGxhY2UoL0AvZywgXCIjXCIpXHJcbiAgICB0bXAgPSB0bXAuc3BsaXQoXCJGT09CQVJCQVpcIik7XHJcbiAgICB0bXAgPSB0bXAuZmlsdGVyKGZvbyA9PiBmb28gIT09IGBcXHJcXG5cXHJcXG5gKTtcclxuICAgIHRtcCA9IHRtcC5qb2luKGBcXG5gKTtcclxuICAgIHRtcCA9IHRtcC5zcGxpdChgXFxuYCk7XHJcbiAgICB0bXAgPSB0bXAuZmlsdGVyKGZvbyA9PiBmb28gIT09IGBcXHJgICYmIGZvbyAhPT0gXCJcIik7XHJcbiAgICB0bXAgPSB0bXAuam9pbihgXFxuYCk7XHJcbiAgICB0bXAgPSB0bXAucmVwbGFjZSgvIyMjIy9nLCBcIkZPT0JBUkJBWkBAQEBcIik7XHJcbiAgICB0bXAgPSB0bXAucmVwbGFjZSgvIyMjL2csIFwiRk9PQkFSQkFaQEBAXCIpO1xyXG4gICAgdG1wID0gdG1wLnJlcGxhY2UoLyMjL2csIFwiRk9PQkFSQkFaQEBcIik7XHJcbiAgICB0bXAgPSB0bXAucmVwbGFjZSgvQC9nLCBcIiNcIilcclxuICAgIHRtcCA9IHRtcC5zcGxpdChcIkZPT0JBUkJBWlwiKTtcclxuICAgIHRtcCA9IHRtcC5maWx0ZXIoZm9vID0+IGZvbyAhPT0gYFxccmAgJiYgZm9vICE9PSBgXFxuYCAmJiBmb28gIT09IFwiXCIpO1xyXG5cclxuICAgIHJldHVybiB0bXBcclxuXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIFJlYWN0Qm9vdFN0cmFwIGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBTY3JvbGxzcHkgZnJvbSAncmVhY3Qtc2Nyb2xsc3B5JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RPQ3Njcm9sbC5tb2R1bGUuc2NzcydcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVE9Dc2Nyb2xsKHRvcGljcywgdG9waWNUb0xldmVsKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2ID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXYgIGZsZXgtY29sdW1uICR7c3R5bGVzLmNvbnRhaW5lcn1gfSBpZD0ndG9jJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPk9uIFRoaXMgUGFnZTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZC1mbGV4IGZsZXgtY29sdW1uIG5hdmJhci1uYXYtc2Nyb2xsICR7c3R5bGVzLm5vbmF2YmFyfWB9IHN0eWxlPXt7c2Nyb2xsYmFyV2lkdGg6IDB9fT5cclxuICAgICAgICAgIDxTY3JvbGxzcHkgaXRlbXM9eyB0b3BpY3MgfSBjdXJyZW50Q2xhc3NOYW1lPXtzdHlsZXMuaXNjdXJyZW50fSBhcmlhLWN1cnJlbnQ9XCJ0cnVlXCIgb2Zmc2V0PXstMTUwfT5cclxuICAgICAgICAgICAgeyB0b3BpY3MubWFwKCh0b3BpYykgPT4geyBcclxuICAgICAgICAgICAgICAgIGxldCBsZXZlbCA9IHRvcGljVG9MZXZlbFt0b3BpY10gPT09IFwiU2Nyb2xsc3B5MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHN0eWxlcy5TY3JvbGxzcHkxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRvcGljVG9MZXZlbFt0b3BpY10gPT09IFwiU2Nyb2xsc3B5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHN0eWxlcy5TY3JvbGxzcHkyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN0eWxlcy5TY3JvbGxzcHkzXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8UmVhY3RCb290U3RyYXAuTmF2Lkxpbmsga2V5PXt0b3BpY30gY2xhc3NOYW1lPXtsZXZlbH0gaHJlZj17YCMke3RvcGljfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgJHt0b3BpY31gfVxyXG4gICAgICAgICAgICAgICAgICA8L1JlYWN0Qm9vdFN0cmFwLk5hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L1Njcm9sbHNweT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJTY3JvbGxzcHkxXCI6IFwiVE9Dc2Nyb2xsX1Njcm9sbHNweTFfX3lnTnZSXCIsXG5cdFwiU2Nyb2xsc3B5MlwiOiBcIlRPQ3Njcm9sbF9TY3JvbGxzcHkyX19xbDRQT1wiLFxuXHRcIlNjcm9sbHNweTNcIjogXCJUT0NzY3JvbGxfU2Nyb2xsc3B5M19fMmc4aXRcIixcblx0XCJpc2N1cnJlbnRcIjogXCJUT0NzY3JvbGxfaXNjdXJyZW50X18xcnlON1wiLFxuXHRcImNvbnRhaW5lclwiOiBcIlRPQ3Njcm9sbF9jb250YWluZXJfXzNYY3ZyXCIsXG5cdFwibm9uYXZiYXJcIjogXCJUT0NzY3JvbGxfbm9uYXZiYXJfX3hxRzhuXCJcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJc29sYXRlVE9DKHRvYykge1xyXG4gICAgY29uc3QgdGV4dCA9IHRvYztcclxuXHJcbi8vIElzb2xhdGUgdGV4dCBiZXR3ZWVuIGRvY3RvYyBjb21tZW50c1xyXG5cclxuICAgIGNvbnN0IGZpcnN0U3BsaXQgPSB0ZXh0LnNwbGl0KFwiPCEtLSBET04nVCBFRElUIFRISVMgU0VDVElPTiwgSU5TVEVBRCBSRS1SVU4gZG9jdG9jIFRPIFVQREFURSAtLT5cIilcclxuICAgIGNvbnN0IHNlY29uZFNwbGl0ID0gZmlyc3RTcGxpdFsxXS5zcGxpdChcIjwhLS0gRU5EIGRvY3RvYyBnZW5lcmF0ZWQgVE9DIHBsZWFzZSBrZWVwIGNvbW1lbnQgaGVyZSB0byBhbGxvdyBhdXRvIHVwZGF0ZSAtLT5cIilcclxuICAgIGNvbnN0IHRhYmxlID0gc2Vjb25kU3BsaXRbMF1cclxuXHJcbi8vIHNlcGFyYXRlIGJ5IGxpbmUgYW5kIGZpbHRlciBvdXQgZW1wdHkgbGluZXMuICBcclxuLy8gc2F2ZSBhIGxpc3Qgb2YgVE9DIHRpdGxlcyBjbGVhbiwgYW5kIGEgbGlzdCBvZiBUT0MgdGl0bGVzIHdpdGggbWFya2Rvd24gZm9ybWF0dGluZyBzeW1ib2xzXHJcblxyXG4gICAgY29uc3QgdGFibGVCeUxpbmVzID0gdGFibGUuc3BsaXQoJ1xcbicpXHJcbiAgICBjb25zdCB0YWJsZUJ5TGluZXNOb0VtcHRpZXMgPSB0YWJsZUJ5TGluZXMuZmlsdGVyKGxpbmUgPT4gbGluZSAhPT0gXCJcIiAmJiBsaW5lICE9PSBcIlxcclwiKVxyXG4gICAgY29uc3QgdGJsbmVBc1N0cmluZyA9IGAke3RhYmxlQnlMaW5lc05vRW1wdGllc31gXHJcbiAgICBjb25zdCByZW1vdmVkU2VwYXJhdGVycyA9IHRibG5lQXNTdHJpbmcucmVwbGFjZSgvIC9nLCBcIlwiKS5yZXBsYWNlKC8sL2csIFwiXCIpLnJlcGxhY2UoLy0vZywgXCJcIikucmVwbGFjZSgvXS9nLCAnJykucmVwbGFjZSgvXFxbL2csIFwiXCIpLnJlcGxhY2UoL1xcKS9nLCBcIihcIikucmVwbGFjZSgvXFwoL2csIFwiLFwiKS5yZXBsYWNlKC9cXGAvZyxcIlwiKVxyXG4gICAgY29uc3QgcmVtb3ZlZFNlcGFyYXRlcnNXaXRoTGV2ZWxzID0gdGJsbmVBc1N0cmluZy5yZXBsYWNlKC8sL2csIFwiXCIpLnJlcGxhY2UoL10vZywgJycpLnJlcGxhY2UoL1xcKS9nLCBcIihcIikucmVwbGFjZSgvXFwoL2csIFwiLFwiKS5yZXBsYWNlKC9cXGAvZyxcIlwiKVxyXG4gICAgY29uc3QgY2xlYW5MaXN0ID0gcmVtb3ZlZFNlcGFyYXRlcnMuc3BsaXQoJywnKTtcclxuICAgIGNvbnN0IGNsZWFuTGlzdFdpdGhMZXZlbHMgPSByZW1vdmVkU2VwYXJhdGVyc1dpdGhMZXZlbHMuc3BsaXQoJywnKTtcclxuICAgIGNsZWFuTGlzdC5wb3AoKTtcclxuICAgIGNsZWFuTGlzdFdpdGhMZXZlbHMucG9wKCk7XHJcblxyXG4vLyBzYXZlIGEgZGljdGlvbmFyeSBwYWlyaW5nIGNsZWFuIHRpdGxlIHdpdGggdGl0bGUgd2l0aCBmb3JtYXR0aW5nIGxldmVsc1xyXG5cclxuICAgIGNvbnN0IHRvcGljVG9UV0wgPSB7fVxyXG4gICAgZm9yIChsZXQgaT0wOyBpPGNsZWFuTGlzdC5sZW5ndGg7IGkrPTIpIHtcclxuICAgICAgbGV0IHRvcGljID0gY2xlYW5MaXN0W2ldO1xyXG4gICAgICBsZXQgVFdMID0gY2xlYW5MaXN0V2l0aExldmVsc1tpXTtcclxuICAgICAgdG9waWNUb1RXTFt0b3BpY10gPSBUV0w7XHJcbiAgICB9O1xyXG4gICAgXHJcbi8vIHJldHVybiBhIGRpY3Rpb25hcnkgcGFpcmluZyBjbGVhbiB0aXRsZSB3aXRoIGNsYXNzTmFtZSBmb3Igc2Nyb2xsc3B5IGxpbmtcclxuXHJcbiAgICBjb25zdCB0b3BpY1RvTGV2ZWwgPSB7fTtcclxuICAgIE9iamVjdC5rZXlzKHRvcGljVG9UV0wpLm1hcCgodG9waWMpID0+IHtcclxuICAgICAgICB0b3BpY1RvTGV2ZWxbdG9waWNdID0gdG9waWNUb1RXTFt0b3BpY11bMF0gPT09IFwiLVwiXHJcbiAgICAgICAgICAgID8gXCJTY3JvbGxzcHkxXCJcclxuICAgICAgICAgICAgOiB0b3BpY1RvVFdMW3RvcGljXVsyXSA9PT0gXCItXCJcclxuICAgICAgICAgICAgPyBcIlNjcm9sbHNweTJcIlxyXG4gICAgICAgICAgICA6IHRvcGljVG9UV0xbdG9waWNdWzRdID09PSBcIi1cIlxyXG4gICAgICAgICAgICA/IGBTY3JvbGxzcHkzYFxyXG4gICAgICAgICAgICA6IDRcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHRvcGljVG9MZXZlbFxyXG5cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BsaXRTcGVjcyhkb2MpIHtcclxuICAgIFxyXG4gICAgY29uc3QgZG9jdW1lbnQgPSBkb2M7XHJcbiAgICBcclxuICAgIGNvbnN0IHNwbGl0ID0gZG9jdW1lbnQuc3BsaXQoXCI8IS0tIC9UT0MgLS0+XCIpXHJcbiAgICBcclxuICAgIGNvbnN0IFRPQyA9IHNwbGl0WzBdO1xyXG4gICAgY29uc3Qgc3BlY3MgPSBzcGxpdFsxXTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhUT0MpO1xyXG5cclxuICAgIHJldHVybiBbc3BlY3MsIFRPQ11cclxuXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgU3BsaXRTcGVjcyBmcm9tICcuLi9jb21wb25lbnRzL3NwbGl0c3BlY3MnO1xyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XHJcbmltcG9ydCBnZm0gZnJvbSAncmVtYXJrLWdmbSc7XHJcbmltcG9ydCB0b2MgZnJvbSAncmVtYXJrLXRvYyc7XHJcbmltcG9ydCBzbHVnIGZyb20gJ3JlbWFyay1zbHVnJztcclxuaW1wb3J0IElzb2xhdGVUT0MgZnJvbSAnLi4vY29tcG9uZW50cy9pc29sYXRlVE9DJztcclxuaW1wb3J0IFNlcGFyYXRlU2VjdGlvbnMgZnJvbSAnLi4vY29tcG9uZW50cy9TZXBhcmF0ZVNlY3Rpb25zJztcclxuaW1wb3J0IFRPQ3Njcm9sbCBmcm9tICcuLi9jb21wb25lbnRzL1RPQ3Njcm9sbCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3NwZWNzLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IFNwZWNzRGF0YSA9IGZzLnJlYWRGaWxlU3luYygnLi4vZGF0YS9zaW1wbGUtc2VyaWFsaXplLm1kJywgJ3V0ZjgnKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBTcGVjc0RhdGFcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGVjcyh7IFNwZWNzRGF0YSB9KSB7XHJcbiAgICBjb25zdCBbYm9keSwgVE9DXSA9IFNwbGl0U3BlY3MoU3BlY3NEYXRhKTtcclxuICAgIGNvbnN0IHRvcGljVG9MZXZlbCA9IElzb2xhdGVUT0MoVE9DKTtcclxuICAgIGNvbnN0IHNlY3Rpb25zID0gU2VwYXJhdGVTZWN0aW9ucyhib2R5KTtcclxuICAgIGNvbnN0IHRvcGljcyA9IE9iamVjdC5rZXlzKHRvcGljVG9MZXZlbCk7XHJcbiAgICBjb25zdCBzY3JvbGxzcHkgPSBUT0NzY3JvbGwodG9waWNzLCB0b3BpY1RvTGV2ZWwpO1xyXG4gICAgY29uc3Qgc3BlY3NCb2R5ID0gKHNlY3Rpb25zKSA9PiB7XHJcbiAgICAgIGxldCBjb250ZW50ID0gW107XHJcbiAgICAgIGZvciAobGV0IGk9MDsgaTxzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHNlY3QgPSBzZWN0aW9uc1tpXTtcclxuICAgICAgICBjb25zdCB0b3BpYyA9IHRvcGljc1tpXTtcclxuICAgICAgICBjb250ZW50LnB1c2goXHJcbiAgICAgICAgICA8ZGl2IGtleT17c2VjdH0+XHJcbiAgICAgICAgICA8c2VjdGlvbiBpZD17dG9waWN9IC8+XHJcbiAgICAgICAgICA8c2VjdGlvbiBpZD17dG9waWN9PlxyXG4gICAgICAgICAgICA8UmVhY3RNYXJrZG93biBwbHVnaW5zPXtbc2x1ZywgdG9jLCBnZm1dfT57YCR7c2VjdH1gfTwvUmVhY3RNYXJrZG93bj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIHJldHVybiBjb250ZW50IFxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb3NpdGlvbi1yZWxhdGl2ZSc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBpbmxpbmUtZmxleCByb3cgcG9zaXRpb24tYWJzb2x1dGUgdG9wLTAgc3RhcnQtMCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtY29sdW1uIGNvbC04Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgPGgxPlNpbXBsZSBTZXJpYWxpemUgU3BlY3M8L2gxPlxyXG4gICAgICAgICAgICAgIDxkaXY+PHA+ZnJvbSBFdGhlcmV1bSAyLjA8L3A+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICB7c3BlY3NCb2R5KHNlY3Rpb25zKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtY29sdW1uIGNvbC00Jz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcm93IHN0YXJ0LTUwIHZoLTEwMCBvdmVyZmxvdy15LXNjcm9sbCAke3N0eWxlcy50b2N9YH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEwJz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wtMiAke3N0eWxlcy5zY3JvbGx9YH0+XHJcbiAgICAgICAgICAgIHtzY3JvbGxzcHl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj4gXHJcblxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzY3JvbGxcIjogXCJzcGVjc19zY3JvbGxfXzJPTVJnXCIsXG5cdFwidG9jXCI6IFwic3BlY3NfdG9jX18zTGZkd1wiLFxuXHRcImJvdHRvbVwiOiBcInNwZWNzX2JvdHRvbV9fQ2ZjeGtcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tYXJrZG93blwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxzcHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbWFyay1nZm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVtYXJrLXNsdWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVtYXJrLXRvY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9