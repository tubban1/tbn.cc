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
exports.id = "pages/api/page_views";
exports.ids = ["pages/api/page_views"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./pages/api/page_views.js":
/*!*********************************!*\
  !*** ./pages/api/page_views.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            error: \"方法不允许\"\n        });\n    }\n    const { page_uid  } = req.body;\n    if (!page_uid) {\n        return res.status(400).json({\n            error: \"缺少页面ID\"\n        });\n    }\n    const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n        host: \"caboose.proxy.rlwy.net\",\n        user: \"root\",\n        password: \"mytRopuhMJFxLyFcDYDoTIojZeyqzYfj\",\n        database: \"railway\",\n        port: 49094\n    });\n    try {\n        // 获取客户端IP和UA\n        const ip_address = req.headers[\"x-forwarded-for\"] || req.connection.remoteAddress;\n        const user_agent = req.headers[\"user-agent\"];\n        // 记录访问\n        await connection.execute(\"INSERT INTO page_views (page_uid, ip_address, user_agent) VALUES (?, ?, ?)\", [\n            page_uid,\n            ip_address,\n            user_agent\n        ]);\n        res.status(200).json({\n            success: true\n        });\n    } catch (error) {\n        console.error(\"记录访问失败:\", error);\n        res.status(500).json({\n            error: \"记录访问失败\"\n        });\n    } finally{\n        await connection.end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGFnZV92aWV3cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUM7QUFFcEIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsT0FBT0QsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLLEVBQUUsT0FBTztTQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsTUFBTSxFQUFFQyxRQUFRLEdBQUUsR0FBR04sR0FBRyxDQUFDTyxJQUFJO0lBRTdCLElBQUksQ0FBQ0QsUUFBUSxFQUFFO1FBQ2IsT0FBT0wsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLLEVBQUUsUUFBUTtTQUFFLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsTUFBTUcsVUFBVSxHQUFHLE1BQU1WLHNFQUFzQixDQUFDO1FBQzlDWSxJQUFJLEVBQUUsd0JBQXdCO1FBQzlCQyxJQUFJLEVBQUUsTUFBTTtRQUNaQyxRQUFRLEVBQUUsa0NBQWtDO1FBQzVDQyxRQUFRLEVBQUUsU0FBUztRQUNuQkMsSUFBSSxFQUFFLEtBQUs7S0FDWixDQUFDO0lBRUYsSUFBSTtRQUNGLGFBQWE7UUFDYixNQUFNQyxVQUFVLEdBQUdmLEdBQUcsQ0FBQ2dCLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUM5QmhCLEdBQUcsQ0FBQ1EsVUFBVSxDQUFDUyxhQUFhO1FBQy9DLE1BQU1DLFVBQVUsR0FBR2xCLEdBQUcsQ0FBQ2dCLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFFNUMsT0FBTztRQUNQLE1BQU1SLFVBQVUsQ0FBQ1csT0FBTyxDQUN0Qiw0RUFBNEUsRUFDNUU7WUFBQ2IsUUFBUTtZQUFFUyxVQUFVO1lBQUVHLFVBQVU7U0FBQyxDQUNuQyxDQUFDO1FBRUZqQixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVnQixPQUFPLEVBQUUsSUFBSTtTQUFFLENBQUMsQ0FBQztJQUMxQyxFQUFFLE9BQU9mLEtBQUssRUFBRTtRQUNkZ0IsT0FBTyxDQUFDaEIsS0FBSyxDQUFDLFNBQVMsRUFBRUEsS0FBSyxDQUFDLENBQUM7UUFDaENKLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsS0FBSyxFQUFFLFFBQVE7U0FBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQyxRQUFTO1FBQ1IsTUFBTUcsVUFBVSxDQUFDYyxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dpc2gyLy4vcGFnZXMvYXBpL3BhZ2Vfdmlld3MuanM/Mzg4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ+aWueazleS4jeWFgeiuuCcgfSk7XG4gIH1cblxuICBjb25zdCB7IHBhZ2VfdWlkIH0gPSByZXEuYm9keTtcbiAgXG4gIGlmICghcGFnZV91aWQpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ+e8uuWwkemhtemdoklEJyB9KTtcbiAgfVxuXG4gIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcbiAgICBob3N0OiAnY2Fib29zZS5wcm94eS5ybHd5Lm5ldCcsXG4gICAgdXNlcjogJ3Jvb3QnLFxuICAgIHBhc3N3b3JkOiAnbXl0Um9wdWhNSkZ4THlGY0RZRG9USW9qWmV5cXpZZmonLFxuICAgIGRhdGFiYXNlOiAncmFpbHdheScsXG4gICAgcG9ydDogNDkwOTQsXG4gIH0pO1xuXG4gIHRyeSB7XG4gICAgLy8g6I635Y+W5a6i5oi356uvSVDlkoxVQVxuICAgIGNvbnN0IGlwX2FkZHJlc3MgPSByZXEuaGVhZGVyc1sneC1mb3J3YXJkZWQtZm9yJ10gfHwgXG4gICAgICAgICAgICAgICAgICAgICAgIHJlcS5jb25uZWN0aW9uLnJlbW90ZUFkZHJlc3M7XG4gICAgY29uc3QgdXNlcl9hZ2VudCA9IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J107XG4gICAgXG4gICAgLy8g6K6w5b2V6K6/6ZeuXG4gICAgYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlKFxuICAgICAgJ0lOU0VSVCBJTlRPIHBhZ2Vfdmlld3MgKHBhZ2VfdWlkLCBpcF9hZGRyZXNzLCB1c2VyX2FnZW50KSBWQUxVRVMgKD8sID8sID8pJyxcbiAgICAgIFtwYWdlX3VpZCwgaXBfYWRkcmVzcywgdXNlcl9hZ2VudF1cbiAgICApO1xuICAgIFxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCforrDlvZXorr/pl67lpLHotKU6JywgZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICforrDlvZXorr/pl67lpLHotKUnIH0pO1xuICB9IGZpbmFsbHkge1xuICAgIGF3YWl0IGNvbm5lY3Rpb24uZW5kKCk7XG4gIH1cbn0iXSwibmFtZXMiOlsibXlzcWwiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwicGFnZV91aWQiLCJib2R5IiwiY29ubmVjdGlvbiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwidXNlciIsInBhc3N3b3JkIiwiZGF0YWJhc2UiLCJwb3J0IiwiaXBfYWRkcmVzcyIsImhlYWRlcnMiLCJyZW1vdGVBZGRyZXNzIiwidXNlcl9hZ2VudCIsImV4ZWN1dGUiLCJzdWNjZXNzIiwiY29uc29sZSIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/page_views.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/page_views.js"));
module.exports = __webpack_exports__;

})();