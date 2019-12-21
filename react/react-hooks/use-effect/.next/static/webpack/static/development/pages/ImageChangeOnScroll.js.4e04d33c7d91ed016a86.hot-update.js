webpackHotUpdate("static/development/pages/ImageChangeOnScroll.js",{

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
    }, [isLoading];
  });

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

/***/ })

})
//# sourceMappingURL=ImageChangeOnScroll.js.4e04d33c7d91ed016a86.hot-update.js.map