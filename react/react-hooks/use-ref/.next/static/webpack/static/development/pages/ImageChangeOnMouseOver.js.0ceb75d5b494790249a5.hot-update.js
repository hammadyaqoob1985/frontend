webpackHotUpdate("static/development/pages/ImageChangeOnMouseOver.js",{

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

/***/ })

})
//# sourceMappingURL=ImageChangeOnMouseOver.js.0ceb75d5b494790249a5.hot-update.js.map