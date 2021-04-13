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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Q8Q":
/***/ (function(module, exports) {

module.exports = require("react-scrollspy");

/***/ }),

/***/ "/mTS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TOCscroll; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("+Q8Q");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("n7e3");
/* harmony import */ var _TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4__);






function TOCscroll(topics, topicToLevel) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: `nav  flex-column ${_TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container}`,
      id: "toc",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "row",
        children: "On This Page"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: `d-flex flex-column navbar-nav-scroll ${_TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.nonavbar}`,
          style: {
            scrollbarWidth: 0
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_scrollspy__WEBPACK_IMPORTED_MODULE_3___default.a, {
            items: topics,
            currentClassName: _TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.iscurrent,
            "aria-current": "true",
            offset: -150,
            children: topics.map(topic => {
              let level = topicToLevel[topic] === "Scrollspy1" ? _TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Scrollspy1 : topicToLevel[topic] === "Scrollspy2" ? _TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Scrollspy2 : _TOCscroll_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Scrollspy3;
              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                className: level,
                href: `#${topic}`,
                children: `${topic}`
              }, topic);
            })
          })
        })
      })]
    })
  });
}
;

/***/ }),

/***/ "0QCG":
/***/ (function(module, exports) {

module.exports = require("remark-gfm");

/***/ }),

/***/ "4DRn":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"scroll": "specs_scroll__2OMRg",
	"toc": "specs_toc__3Lfdw",
	"bottom": "specs_bottom__Cfcxk"
};


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wnb6");


/***/ }),

/***/ "8zfY":
/***/ (function(module, exports) {

module.exports = require("remark-slug");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "I6UP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsolateTOC; });
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

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "bRUn":
/***/ (function(module, exports) {

module.exports = require("remark-toc");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "d6F5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeparateSections; });
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

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "m5bX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitSpecs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function SplitSpecs(doc) {
  const document = doc;
  const split = document.split("<!-- /TOC -->");
  const TOC = split[0];
  const specs = split[1]; // console.log(TOC);

  return [specs, TOC];
}

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "n7e3":
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

/***/ "wnb6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Specs; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_splitspecs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("m5bX");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("id0+");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("0QCG");
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var remark_toc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("bRUn");
/* harmony import */ var remark_toc__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remark_toc__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var remark_slug__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("8zfY");
/* harmony import */ var remark_slug__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(remark_slug__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_isolateTOC__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("I6UP");
/* harmony import */ var _components_SeparateSections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("d6F5");
/* harmony import */ var _components_TOCscroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("/mTS");
/* harmony import */ var _styles_specs_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("4DRn");
/* harmony import */ var _styles_specs_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_specs_module_css__WEBPACK_IMPORTED_MODULE_11__);













async function getStaticProps() {
  const SpecsData = fs__WEBPACK_IMPORTED_MODULE_2___default.a.readFileSync('./eth2.0-specs/ssz/simple-serialize.md', 'utf8');
  return {
    props: {
      SpecsData
    }
  };
}
function Specs({
  SpecsData
}) {
  const [body, TOC] = Object(_components_splitspecs__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(SpecsData);
  const topicToLevel = Object(_components_isolateTOC__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(TOC);
  const sections = Object(_components_SeparateSections__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(body);
  const topics = Object.keys(topicToLevel);
  const scrollspy = Object(_components_TOCscroll__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(topics, topicToLevel);

  const specsBody = sections => {
    let content = [];

    for (let i = 0; i < sections.length; i++) {
      const sect = sections[i];
      const topic = topics[i];
      content.push( /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
          id: topic
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
          id: topic,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a, {
            plugins: [remark_slug__WEBPACK_IMPORTED_MODULE_7___default.a, remark_toc__WEBPACK_IMPORTED_MODULE_6___default.a, remark_gfm__WEBPACK_IMPORTED_MODULE_5___default.a],
            children: `${sect}`
          })
        })]
      }, sect));
    }

    return content;
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "position-relative",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "d-flex inline-flex row position-absolute top-0 start-0",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "d-flex flex-column col-8",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
            children: "Simple Serialize Specs"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
              children: "from Ethereum 2.0"
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "row",
          children: specsBody(sections)
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "d-flex flex-column col-4"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: `row start-50 vh-100 overflow-y-scroll ${_styles_specs_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.toc}`,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "col-10"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: `col-2 ${_styles_specs_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.scroll}`,
        children: scrollspy
      })]
    })]
  });
}

/***/ })

/******/ });