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
exports.id = "pages/api/pages";
exports.ids = ["pages/api/pages"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./pages/api/pages/index.js":
/*!**********************************!*\
  !*** ./pages/api/pages/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            error: \"方法不允许\"\n        });\n    }\n    const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n        host: \"caboose.proxy.rlwy.net\",\n        user: \"root\",\n        password: \"mytRopuhMJFxLyFcDYDoTIojZeyqzYfj\",\n        database: \"railway\",\n        port: 49094\n    });\n    try {\n        const [rows] = await connection.execute(\"SELECT * FROM pages ORDER BY created_at DESC\");\n        res.status(200).json(rows);\n    } catch (error) {\n        console.error(\"获取页面失败:\", error);\n        res.status(500).json({\n            error: \"获取页面失败\"\n        });\n    } finally{\n        await connection.end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBRXBCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3hCLE9BQU9ELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsS0FBSyxFQUFFLE9BQU87U0FBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELE1BQU1DLFVBQVUsR0FBRyxNQUFNUixzRUFBc0IsQ0FBQztRQUM5Q1UsSUFBSSxFQUFFLHdCQUF3QjtRQUM5QkMsSUFBSSxFQUFFLE1BQU07UUFDWkMsUUFBUSxFQUFFLGtDQUFrQztRQUM1Q0MsUUFBUSxFQUFFLFNBQVM7UUFDbkJDLElBQUksRUFBRSxLQUFLO0tBQ1osQ0FBQztJQUVGLElBQUk7UUFDRixNQUFNLENBQUNDLElBQUksQ0FBQyxHQUFHLE1BQU1QLFVBQVUsQ0FBQ1EsT0FBTyxDQUFDLDhDQUE4QyxDQUFDO1FBQ3ZGYixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDUyxJQUFJLENBQUMsQ0FBQztJQUM3QixFQUFFLE9BQU9SLEtBQUssRUFBRTtRQUNkVSxPQUFPLENBQUNWLEtBQUssQ0FBQyxTQUFTLEVBQUVBLEtBQUssQ0FBQyxDQUFDO1FBQ2hDSixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRSxRQUFRO1NBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUMsUUFBUztRQUNSLE1BQU1DLFVBQVUsQ0FBQ1UsR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXNoMi8uL3BhZ2VzL2FwaS9wYWdlcy9pbmRleC5qcz80OTIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteXNxbCBmcm9tICdteXNxbDIvcHJvbWlzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdHRVQnKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6ICfmlrnms5XkuI3lhYHorrgnIH0pO1xuICB9XG5cbiAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xuICAgIGhvc3Q6ICdjYWJvb3NlLnByb3h5LnJsd3kubmV0JyxcbiAgICB1c2VyOiAncm9vdCcsXG4gICAgcGFzc3dvcmQ6ICdteXRSb3B1aE1KRnhMeUZjRFlEb1RJb2paZXlxellmaicsXG4gICAgZGF0YWJhc2U6ICdyYWlsd2F5JyxcbiAgICBwb3J0OiA0OTA5NCxcbiAgfSk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBbcm93c10gPSBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUoJ1NFTEVDVCAqIEZST00gcGFnZXMgT1JERVIgQlkgY3JlYXRlZF9hdCBERVNDJyk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24ocm93cyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign6I635Y+W6aG16Z2i5aSx6LSlOicsIGVycm9yKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAn6I635Y+W6aG16Z2i5aSx6LSlJyB9KTtcbiAgfSBmaW5hbGx5IHtcbiAgICBhd2FpdCBjb25uZWN0aW9uLmVuZCgpO1xuICB9XG59Il0sIm5hbWVzIjpbIm15c3FsIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwicG9ydCIsInJvd3MiLCJleGVjdXRlIiwiY29uc29sZSIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/pages/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/pages/index.js"));
module.exports = __webpack_exports__;

})();