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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Home() {\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/db\").then((res)=>res.json()).then(setData).catch((err)=>setData({\n                error: err.message\n            }));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"数据库查询结果\"\n            }, void 0, false, {\n                fileName: \"/Users/wahaha/Documents/Me/Project/cursor/wish2/pages/index.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(data, null, 2)\n            }, void 0, false, {\n                fileName: \"/Users/wahaha/Documents/Me/Project/cursor/wish2/pages/index.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wahaha/Documents/Me/Project/cursor/wish2/pages/index.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTRDO0FBRTdCLFNBQVNFLElBQUksR0FBRztJQUM3QixNQUFNLEtBQUNDLElBQUksTUFBRUMsT0FBTyxNQUFJSCwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUV0Q0QsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2RLLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FDYkMsSUFBSSxDQUFDQyxDQUFBQSxHQUFHLEdBQUlBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFLENBQUMsQ0FDdkJGLElBQUksQ0FBQ0YsT0FBTyxDQUFDLENBQ2JLLEtBQUssQ0FBQ0MsQ0FBQUEsR0FBRyxHQUFJTixPQUFPLENBQUM7Z0JBQUVPLEtBQUssRUFBRUQsR0FBRyxDQUFDRSxPQUFPO2FBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0UsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOzBCQUFDLFNBQU87Ozs7O29CQUFLOzBCQUNoQiw4REFBQ0MsS0FBRzswQkFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNkLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDOzs7OztvQkFBTzs7Ozs7O1lBQ3RDLENBQ047QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2lzaDIvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goJy9hcGkvZGInKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihzZXREYXRhKVxuICAgICAgLmNhdGNoKGVyciA9PiBzZXREYXRhKHsgZXJyb3I6IGVyci5tZXNzYWdlIH0pKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT7mlbDmja7lupPmn6Xor6Lnu5Pmnpw8L2gxPlxuICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMil9PC9wcmU+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJtZXNzYWdlIiwiZGl2IiwiaDEiLCJwcmUiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();