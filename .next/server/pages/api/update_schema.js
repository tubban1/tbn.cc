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
exports.id = "pages/api/update_schema";
exports.ids = ["pages/api/update_schema"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./pages/api/update_schema.js":
/*!************************************!*\
  !*** ./pages/api/update_schema.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n        host: \"caboose.proxy.rlwy.net\",\n        user: \"root\",\n        password: \"mytRopuhMJFxLyFcDYDoTIojZeyqzYfj\",\n        database: \"railway\",\n        port: 49094\n    });\n    try {\n        // 1. 先更新现有记录，确保 content 列有有效的 JSON\n        await connection.execute(`\n      UPDATE pages \n      SET content = '{\"wishText\":\"\",\"name\":\"\",\"greeting\":\"\",\"interaction\":\"\",\"theme\":\"default\"}' \n      WHERE content IS NULL OR content = ''\n    `);\n        // 2. 然后修改列类型为 JSON\n        await connection.execute(`\n      ALTER TABLE pages \n      MODIFY content JSON\n    `);\n        res.status(200).json({\n            message: \"数据库结构更新成功\"\n        });\n    } catch (error) {\n        res.status(500).json({\n            error: error.message\n        });\n    } finally{\n        await connection.end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlX3NjaGVtYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUM7QUFFcEIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxVQUFVLEdBQUcsTUFBTUosc0VBQXNCLENBQUM7UUFDOUNNLElBQUksRUFBRSx3QkFBd0I7UUFDOUJDLElBQUksRUFBRSxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxrQ0FBa0M7UUFDNUNDLFFBQVEsRUFBRSxTQUFTO1FBQ25CQyxJQUFJLEVBQUUsS0FBSztLQUNaLENBQUM7SUFFRixJQUFJO1FBQ0YsbUNBQW1DO1FBQ25DLE1BQU1OLFVBQVUsQ0FBQ08sT0FBTyxDQUFDLENBQUM7Ozs7SUFJMUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxtQkFBbUI7UUFDbkIsTUFBTVAsVUFBVSxDQUFDTyxPQUFPLENBQUMsQ0FBQzs7O0lBRzFCLENBQUMsQ0FBQyxDQUFDO1FBRUhSLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLFdBQVc7U0FBRSxDQUFDLENBQUM7SUFDakQsRUFBRSxPQUFPQyxLQUFLLEVBQUU7UUFDZFosR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRSxLQUFLLEVBQUVBLEtBQUssQ0FBQ0QsT0FBTztTQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDLFFBQVM7UUFDUixNQUFNVixVQUFVLENBQUNZLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2lzaDIvLi9wYWdlcy9hcGkvdXBkYXRlX3NjaGVtYS5qcz85MGY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteXNxbCBmcm9tICdteXNxbDIvcHJvbWlzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xuICAgIGhvc3Q6ICdjYWJvb3NlLnByb3h5LnJsd3kubmV0JyxcbiAgICB1c2VyOiAncm9vdCcsXG4gICAgcGFzc3dvcmQ6ICdteXRSb3B1aE1KRnhMeUZjRFlEb1RJb2paZXlxellmaicsXG4gICAgZGF0YWJhc2U6ICdyYWlsd2F5JyxcbiAgICBwb3J0OiA0OTA5NCxcbiAgfSk7XG5cbiAgdHJ5IHtcbiAgICAvLyAxLiDlhYjmm7TmlrDnjrDmnInorrDlvZXvvIznoa7kv50gY29udGVudCDliJfmnInmnInmlYjnmoQgSlNPTlxuICAgIGF3YWl0IGNvbm5lY3Rpb24uZXhlY3V0ZShgXG4gICAgICBVUERBVEUgcGFnZXMgXG4gICAgICBTRVQgY29udGVudCA9ICd7XCJ3aXNoVGV4dFwiOlwiXCIsXCJuYW1lXCI6XCJcIixcImdyZWV0aW5nXCI6XCJcIixcImludGVyYWN0aW9uXCI6XCJcIixcInRoZW1lXCI6XCJkZWZhdWx0XCJ9JyBcbiAgICAgIFdIRVJFIGNvbnRlbnQgSVMgTlVMTCBPUiBjb250ZW50ID0gJydcbiAgICBgKTtcbiAgICBcbiAgICAvLyAyLiDnhLblkI7kv67mlLnliJfnsbvlnovkuLogSlNPTlxuICAgIGF3YWl0IGNvbm5lY3Rpb24uZXhlY3V0ZShgXG4gICAgICBBTFRFUiBUQUJMRSBwYWdlcyBcbiAgICAgIE1PRElGWSBjb250ZW50IEpTT05cbiAgICBgKTtcbiAgICBcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICfmlbDmja7lupPnu5PmnoTmm7TmlrDmiJDlip8nIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gIH0gZmluYWxseSB7XG4gICAgYXdhaXQgY29ubmVjdGlvbi5lbmQoKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJteXNxbCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25uZWN0aW9uIiwiY3JlYXRlQ29ubmVjdGlvbiIsImhvc3QiLCJ1c2VyIiwicGFzc3dvcmQiLCJkYXRhYmFzZSIsInBvcnQiLCJleGVjdXRlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJlcnJvciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/update_schema.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/update_schema.js"));
module.exports = __webpack_exports__;

})();