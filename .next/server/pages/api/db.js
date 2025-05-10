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
exports.id = "pages/api/db";
exports.ids = ["pages/api/db"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./pages/api/db.js":
/*!*************************!*\
  !*** ./pages/api/db.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n        host: \"caboose.proxy.rlwy.net\",\n        user: \"root\",\n        password: \"mytRopuhMJFxLyFcDYDoTIojZeyqzYfj\",\n        database: \"railway\",\n        port: 49094\n    });\n    try {\n        // Create table without DEFAULT for TEXT columns\n        await connection.execute(`\n      CREATE TABLE IF NOT EXISTS pages (\n        uid VARCHAR(16) PRIMARY KEY,\n        password VARCHAR(64) NOT NULL,\n        title TEXT,\n        content TEXT,\n        css_id INT DEFAULT NULL,\n        js_id INT DEFAULT NULL,\n        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,\n        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP\n      )\n    `);\n        res.status(200).json({\n            message: \"Table created successfully\"\n        });\n    } catch (error) {\n        res.status(500).json({\n            error: error.message\n        });\n    } finally{\n        await connection.end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBRXBCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUMsVUFBVSxHQUFHLE1BQU1KLHNFQUFzQixDQUFDO1FBQzlDTSxJQUFJLEVBQUUsd0JBQXdCO1FBQzlCQyxJQUFJLEVBQUUsTUFBTTtRQUNaQyxRQUFRLEVBQUUsa0NBQWtDO1FBQzVDQyxRQUFRLEVBQUUsU0FBUztRQUNuQkMsSUFBSSxFQUFFLEtBQUs7S0FDWixDQUFDO0lBRUYsSUFBSTtRQUNGLGdEQUFnRDtRQUNoRCxNQUFNTixVQUFVLENBQUNPLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7Ozs7OztJQVcxQixDQUFDLENBQUMsQ0FBQztRQUNIUixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSw0QkFBNEI7U0FBRSxDQUFDLENBQUM7SUFDbEUsRUFBRSxPQUFPQyxLQUFLLEVBQUU7UUFDZFosR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRSxLQUFLLEVBQUVBLEtBQUssQ0FBQ0QsT0FBTztTQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDLFFBQVM7UUFDUixNQUFNVixVQUFVLENBQUNZLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2lzaDIvLi9wYWdlcy9hcGkvZGIuanM/YjgxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcbiAgICBob3N0OiAnY2Fib29zZS5wcm94eS5ybHd5Lm5ldCcsXG4gICAgdXNlcjogJ3Jvb3QnLFxuICAgIHBhc3N3b3JkOiAnbXl0Um9wdWhNSkZ4THlGY0RZRG9USW9qWmV5cXpZZmonLFxuICAgIGRhdGFiYXNlOiAncmFpbHdheScsXG4gICAgcG9ydDogNDkwOTQsXG4gIH0pO1xuXG4gIHRyeSB7XG4gICAgLy8gQ3JlYXRlIHRhYmxlIHdpdGhvdXQgREVGQVVMVCBmb3IgVEVYVCBjb2x1bW5zXG4gICAgYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlKGBcbiAgICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHBhZ2VzIChcbiAgICAgICAgdWlkIFZBUkNIQVIoMTYpIFBSSU1BUlkgS0VZLFxuICAgICAgICBwYXNzd29yZCBWQVJDSEFSKDY0KSBOT1QgTlVMTCxcbiAgICAgICAgdGl0bGUgVEVYVCxcbiAgICAgICAgY29udGVudCBURVhULFxuICAgICAgICBjc3NfaWQgSU5UIERFRkFVTFQgTlVMTCxcbiAgICAgICAganNfaWQgSU5UIERFRkFVTFQgTlVMTCxcbiAgICAgICAgY3JlYXRlZF9hdCBEQVRFVElNRSBERUZBVUxUIENVUlJFTlRfVElNRVNUQU1QLFxuICAgICAgICB1cGRhdGVkX2F0IERBVEVUSU1FIERFRkFVTFQgQ1VSUkVOVF9USU1FU1RBTVBcbiAgICAgIClcbiAgICBgKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdUYWJsZSBjcmVhdGVkIHN1Y2Nlc3NmdWxseScgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgfSBmaW5hbGx5IHtcbiAgICBhd2FpdCBjb25uZWN0aW9uLmVuZCgpO1xuICB9XG59Il0sIm5hbWVzIjpbIm15c3FsIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwicG9ydCIsImV4ZWN1dGUiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVycm9yIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/db.js"));
module.exports = __webpack_exports__;

})();