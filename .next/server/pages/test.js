"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/test";
exports.ids = ["pages/test"];
exports.modules = {

/***/ "./hooks/useinput.js":
/*!***************************!*\
  !*** ./hooks/useinput.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((initValue = null)=>{\n    const { 0: value , 1: setter  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initValue);\n    const handler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{\n        setter(e.target.value);\n    }, []);\n    return [\n        value,\n        handler,\n        setter\n    ];\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VpbnB1dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFFN0MsaUVBQWdCLENBQUFFLFNBQVMsR0FBRyxJQUFJLEdBQUssQ0FBQztJQUNwQyxLQUFLLE1BQUVDLEtBQUssTUFBRUMsTUFBTSxNQUFJSCwrQ0FBUSxDQUFDQyxTQUFTO0lBQzFDLEtBQUssQ0FBQ0csT0FBTyxHQUFHTCxrREFBVyxFQUFFTSxDQUFDLEdBQUssQ0FBQztRQUNsQ0YsTUFBTSxDQUFDRSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0osS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMLE1BQU0sQ0FBQyxDQUFDQTtRQUFBQSxLQUFLO1FBQUVFLE9BQU87UUFBRUQsTUFBTTtJQUFBLENBQUM7QUFDakMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250Ly4vaG9va3MvdXNlaW5wdXQuanM/YzJhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgKGluaXRWYWx1ZSA9IG51bGwpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXR0ZXJdID0gdXNlU3RhdGUoaW5pdFZhbHVlKTtcbiAgY29uc3QgaGFuZGxlciA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgc2V0dGVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgfSwgW10pO1xuICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVyLCBzZXR0ZXJdO1xufSJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwiaW5pdFZhbHVlIiwidmFsdWUiLCJzZXR0ZXIiLCJoYW5kbGVyIiwiZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useinput.js\n");

/***/ }),

/***/ "./pages/test/index.js":
/*!*****************************!*\
  !*** ./pages/test/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useinput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useinput */ \"./hooks/useinput.js\");\n\n\n\nconst Test = ()=>{\n    const [name, onChangeName, setName] = (0,_hooks_useinput__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"이름을 입력해주세요.\",\n                onChange: onChangeName,\n                value: name\n            }, void 0, false, {\n                fileName: \"/Users/liankim/Desktop/class/front/pages/test/index.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/liankim/Desktop/class/front/pages/test/index.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Test);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFDa0I7QUFFM0MsS0FBSyxDQUFDRSxJQUFJLE9BQVMsQ0FBQztJQUNsQixLQUFLLEVBQUVDLElBQUksRUFBRUMsWUFBWSxFQUFFQyxPQUFPLElBQUlKLDJEQUFRO0lBQzlDLE1BQU07O3dGQUVESyxDQUFLO2dCQUNKQyxJQUFJLEVBQUMsQ0FBTTtnQkFDWEMsV0FBVyxFQUFDLENBQWE7Z0JBQ3pCQyxRQUFRLEVBQUlMLFlBQVk7Z0JBQ3hCTSxLQUFLLEVBQUVQLElBQUk7Ozs7Ozt3RkFFWlEsQ0FBRzswQkFBRVIsSUFBSTs7Ozs7Ozs7QUFHaEIsQ0FBQztBQUVELGlFQUFlRCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQvLi9wYWdlcy90ZXN0L2luZGV4LmpzP2QxYjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uLy4uL2hvb2tzL3VzZWlucHV0J1xuXG5jb25zdCBUZXN0ID0gKCkgPT4ge1xuICBjb25zdCBbbmFtZSwgb25DaGFuZ2VOYW1lLCBzZXROYW1lXSA9IHVzZUlucHV0KClcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLsnbTrpoTsnYQg7J6F66Cl7ZW07KO87IS47JqULlwiXG4gICAgICAgIG9uQ2hhbmdlID0ge29uQ2hhbmdlTmFtZX1cbiAgICAgICAgdmFsdWU9e25hbWV9PlxuICAgICAgPC9pbnB1dD5cbiAgICAgIDxkaXY+e25hbWV9PC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUlucHV0IiwiVGVzdCIsIm5hbWUiLCJvbkNoYW5nZU5hbWUiLCJzZXROYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInZhbHVlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/test/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/test/index.js"));
module.exports = __webpack_exports__;

})();