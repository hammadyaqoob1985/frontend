(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/ImageChangeOnScroll.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnScroll&absolutePagePath=%2FUsers%2Fhammad%2Fweb-development%2Freact%2Freact-hooks%2Fuse-effect%2Fpages%2FImageChangeOnScroll.js!./":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnScroll&absolutePagePath=%2FUsers%2Fhammad%2Fweb-development%2Freact%2Freact-hooks%2Fuse-effect%2Fpages%2FImageChangeOnScroll.js ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/ImageChangeOnScroll", function() {
      var mod = __webpack_require__(/*! ./pages/ImageChangeOnScroll.js */ "./pages/ImageChangeOnScroll.js")
      if(true) {
        module.hot.accept(/*! ./pages/ImageChangeOnScroll.js */ "./pages/ImageChangeOnScroll.js", function() {
          if(!next.router.components["/ImageChangeOnScroll"]) return
          var updatedPage = __webpack_require__(/*! ./pages/ImageChangeOnScroll.js */ "./pages/ImageChangeOnScroll.js")
          next.router.update("/ImageChangeOnScroll", updatedPage)
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

/***/ "./pages/ImageChangeOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageChangeOnScroll.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ "./src/ImageToggleOnScroll.js");
var _jsxFileName = "/Users/hammad/web-development/react/react-hooks/use-effect/pages/ImageChangeOnScroll.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ImageChangeOnScroll = function ImageChangeOnScroll() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, [187, 823, 1124, 1269].map(function (speakerId) {
    return __jsx("div", {
      key: speakerId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__["default"], {
      primary: "/static/speakers/bw/Speaker-".concat(speakerId, ".jpg"),
      secondary: "/static/speakers/Speaker-".concat(speakerId, ".jpg"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnScroll);

/***/ }),

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/hammad/web-development/react/react-hooks/use-effect/src/ImageToggleOnScroll.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ImageToggleOnScroll = function ImageToggleOnScroll(_ref) {
  var primary = _ref.primary,
      secondary = _ref.secondary;
  var imgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("scroll", scrollHandler);
    setInView(isInView());
    setIsLoading(false);
    return function () {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isLoading]);

  var isInView = function isInView() {
    if (imgRef.current) {
      var rect = imgRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    return false;
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isInView()),
      inView = _useState2[0],
      setInView = _useState2[1];

  var scrollHandler = function scrollHandler() {
    setInView(function () {
      return isInView();
    });
  };

  return isLoading ? null : __jsx("img", {
    src: inView ? secondary : primary,
    alt: "",
    ref: imgRef,
    width: "200",
    height: "200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnScroll);

/***/ }),

/***/ 1:
/*!*******************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2FImageChangeOnScroll&absolutePagePath=%2FUsers%2Fhammad%2Fweb-development%2Freact%2Freact-hooks%2Fuse-effect%2Fpages%2FImageChangeOnScroll.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2FImageChangeOnScroll&absolutePagePath=%2FUsers%2Fhammad%2Fweb-development%2Freact%2Freact-hooks%2Fuse-effect%2Fpages%2FImageChangeOnScroll.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnScroll&absolutePagePath=%2FUsers%2Fhammad%2Fweb-development%2Freact%2Freact-hooks%2Fuse-effect%2Fpages%2FImageChangeOnScroll.js!./");


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
//# sourceMappingURL=ImageChangeOnScroll.js.map