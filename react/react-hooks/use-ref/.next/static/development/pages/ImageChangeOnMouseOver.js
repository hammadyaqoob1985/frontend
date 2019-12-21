(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/ImageChangeOnMouseOver.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnMouseOver&absolutePagePath=%2FUsers%2Fhammad%2Fweb-development%2Freact%2Freact-hooks%2Fuse-ref%2Fpages%2FImageChangeOnMouseOver.js!./":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnMouseOver&absolutePagePath=%2FUsers%2Fhammad%2Fweb-development%2Freact%2Freact-hooks%2Fuse-ref%2Fpages%2FImageChangeOnMouseOver.js ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/ImageChangeOnMouseOver", function() {
      var mod = __webpack_require__(/*! ./pages/ImageChangeOnMouseOver.js */ "./pages/ImageChangeOnMouseOver.js")
      if(true) {
        module.hot.accept(/*! ./pages/ImageChangeOnMouseOver.js */ "./pages/ImageChangeOnMouseOver.js", function() {
          if(!next.router.components["/ImageChangeOnMouseOver"]) return
          var updatedPage = __webpack_require__(/*! ./pages/ImageChangeOnMouseOver.js */ "./pages/ImageChangeOnMouseOver.js")
          next.router.update("/ImageChangeOnMouseOver", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5f137288facb1107b491 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5f137288facb1107b491 */ "dll-reference dll_5f137288facb1107b491"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/ImageChangeOnMouseOver.js":
/*!*****************************************!*\
  !*** ./pages/ImageChangeOnMouseOver.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageToggleOnMouseOver */ "./src/ImageToggleOnMouseOver.js");
var _jsxFileName = "/Users/hammad/web-development/react/react-hooks/use-ref/pages/ImageChangeOnMouseOver.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ImageChangeOverMouseOver = function ImageChangeOverMouseOver() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primary: "/static/speakers/bw/Speaker-187.jpg",
    secondary: "/static/speakers/Speaker-187.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), "\xA0\xA0\xA0", __jsx(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primary: "/static/speakers/bw/Speaker-1124.jpg",
    secondary: "/static/speakers/Speaker-1124.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOverMouseOver);

/***/ }),

/***/ "./src/ImageToggleOnMouseOver.js":
/*!***************************************!*\
  !*** ./src/ImageToggleOnMouseOver.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/hammad/web-development/react/react-hooks/use-ref/src/ImageToggleOnMouseOver.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ImageToggleOnMouseOver = function ImageToggleOnMouseOver(_ref) {
  var primary = _ref.primary,
      secondary = _ref.secondary;
  var imgSource = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return __jsx("img", {
    src: primary,
    onMouseOver: function onMouseOver() {
      imgSource.current.src = secondary;
    },
    onMouseOut: function onMouseOut() {
      imgSource.current.src = primary;
    },
    alt: "",
    ref: imgSource,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnMouseOver);

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2FImageChangeOnMouseOver&absolutePagePath=%2FUsers%2Fhammad%2Fweb-development%2Freact%2Freact-hooks%2Fuse-ref%2Fpages%2FImageChangeOnMouseOver.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2FImageChangeOnMouseOver&absolutePagePath=%2FUsers%2Fhammad%2Fweb-development%2Freact%2Freact-hooks%2Fuse-ref%2Fpages%2FImageChangeOnMouseOver.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnMouseOver&absolutePagePath=%2FUsers%2Fhammad%2Fweb-development%2Freact%2Freact-hooks%2Fuse-ref%2Fpages%2FImageChangeOnMouseOver.js!./");


/***/ }),

/***/ "dll-reference dll_5f137288facb1107b491":
/*!*******************************************!*\
  !*** external "dll_5f137288facb1107b491" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5f137288facb1107b491;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=ImageChangeOnMouseOver.js.map