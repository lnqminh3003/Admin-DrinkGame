"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/home.tsx":
/*!*********************************!*\
  !*** ./src/components/home.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDutQ3shZzF17DjRqvikORibJLRbZTGk10\",\n    authDomain: \"drink-game-29b92.firebaseapp.com\",\n    databaseURL: \"https://drink-game-29b92-default-rtdb.asia-southeast1.firebasedatabase.app\",\n    projectId: \"drink-game-29b92\",\n    storageBucket: \"drink-game-29b92.appspot.com\",\n    messagingSenderId: \"194346987215\",\n    appId: \"1:194346987215:web:e4acbd28e9e7dc211bd1ba\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp)(firebaseConfig);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.getStorage)();\nconst storageRefImage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.ref)(storage, \"image\");\nconst HomePage = ()=>{\n    _s();\n    const [bg, setBg] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(Array);\n    (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.listAll)(storageRefImage).then(async (res)=>{\n        const { items  } = res;\n        const urls = await Promise.all(items.map((item)=>(0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.getDownloadURL)(item)));\n        setBg(urls);\n    }).catch((error)=>{\n        console.log(error);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-10 mb-7 text-emerald-600 text-center md:text-3xl text-2xl font-bold\",\n                children: \"REVIEW CURRENT BACKGROUND\"\n            }, void 0, false, {\n                fileName: \"/Users/lenguyenquangminh/Documents/GLOBAL SEA/Admin-DrinkGame/src/components/home.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-evenly\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-4 mb-4 text-center md:text-xl text-sm font-semibold\",\n                                children: \"BACKGROUND SCENE 1\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lenguyenquangminh/Documents/GLOBAL SEA/Admin-DrinkGame/src/components/home.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"w-36 h-48 md:w-72 md:h-128\",\n                                src: bg[0]\n                            }, void 0, false, {\n                                fileName: \"/Users/lenguyenquangminh/Documents/GLOBAL SEA/Admin-DrinkGame/src/components/home.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lenguyenquangminh/Documents/GLOBAL SEA/Admin-DrinkGame/src/components/home.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-4 mb-4 text-center md:text-xl text-sm font-semibold\",\n                                children: \"BACKGROUND SCENE 2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lenguyenquangminh/Documents/GLOBAL SEA/Admin-DrinkGame/src/components/home.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"w-36 h-48 md:w-72 md:h-128\",\n                                src: bg[1]\n                            }, void 0, false, {\n                                fileName: \"/Users/lenguyenquangminh/Documents/GLOBAL SEA/Admin-DrinkGame/src/components/home.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lenguyenquangminh/Documents/GLOBAL SEA/Admin-DrinkGame/src/components/home.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lenguyenquangminh/Documents/GLOBAL SEA/Admin-DrinkGame/src/components/home.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lenguyenquangminh/Documents/GLOBAL SEA/Admin-DrinkGame/src/components/home.tsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, undefined);\n};\n_s(HomePage, \"fDmUgozFTbkRanNz2vcoGLlhlKo=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDd0Y7QUFDM0M7QUFDWjtBQUVqQyxNQUFNTSxpQkFBaUI7SUFDbkJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxhQUFhO0lBQ2JDLFdBQVc7SUFDWEMsZUFBZTtJQUNmQyxtQkFBbUI7SUFDbkJDLE9BQU87QUFDVDtBQUVBLE1BQU1DLE1BQU1WLDJEQUFhQSxDQUFDRTtBQUMxQixNQUFNUyxVQUFVZiw0REFBVUE7QUFFMUIsTUFBTWdCLGtCQUFrQmQscURBQUdBLENBQUNhLFNBQVE7QUFFdEMsTUFBTUUsV0FBVSxJQUFJOztJQUNoQixNQUFLLENBQUNDLElBQUlDLE1BQU0sR0FBR2QsK0NBQVFBLENBQUNlO0lBRTVCakIseURBQU9BLENBQUNhLGlCQUNQSyxJQUFJLENBQUMsT0FBT0MsTUFBUTtRQUNuQixNQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFHRDtRQUNsQixNQUFNRSxPQUFPLE1BQU1DLFFBQVFDLEdBQUcsQ0FDNUJILE1BQU1JLEdBQUcsQ0FBQyxDQUFDQyxPQUFTM0IsZ0VBQWNBLENBQUMyQjtRQUVuQ1QsTUFBTUs7SUFDVixHQUNDSyxLQUFLLENBQUMsQ0FBQ0MsUUFBVTtRQUNkQyxRQUFRQyxHQUFHLENBQUNGO0lBQ2hCO0lBRUEscUJBQ0ksOERBQUNHOzswQkFDRyw4REFBQ0M7Z0JBQUVDLFdBQVU7MEJBQXlFOzs7Ozs7MEJBQ3RGLDhEQUFDRjtnQkFBSUUsV0FBVTs7a0NBQ1gsOERBQUNGO3dCQUFJRSxXQUFVOzswQ0FDWCw4REFBQ0Q7Z0NBQUVDLFdBQVU7MENBQXlEOzs7Ozs7MENBR3RFLDhEQUFDQztnQ0FBSUQsV0FBVTtnQ0FBNkJFLEtBQUtuQixFQUFFLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7O2tDQUUxRCw4REFBQ2U7d0JBQUlFLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBRUMsV0FBVTswQ0FBeUQ7Ozs7OzswQ0FHdEUsOERBQUNDO2dDQUFJRCxXQUFVO2dDQUE2QkUsS0FBS25CLEVBQUUsQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUU7R0FsQ01EO0tBQUFBO0FBb0NOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hvbWUudHN4Pzk2M2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHtnZXRTdG9yYWdlLCBnZXREb3dubG9hZFVSTCwgcmVmLCB1cGxvYWRCeXRlcywgbGlzdEFsbCB9IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lEdXRRM3NoWnpGMTdEalJxdmlrT1JpYkpMUmJaVEdrMTBcIixcbiAgICBhdXRoRG9tYWluOiBcImRyaW5rLWdhbWUtMjliOTIuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9kcmluay1nYW1lLTI5YjkyLWRlZmF1bHQtcnRkYi5hc2lhLXNvdXRoZWFzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHBcIixcbiAgICBwcm9qZWN0SWQ6IFwiZHJpbmstZ2FtZS0yOWI5MlwiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiZHJpbmstZ2FtZS0yOWI5Mi5hcHBzcG90LmNvbVwiLFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjE5NDM0Njk4NzIxNVwiLFxuICAgIGFwcElkOiBcIjE6MTk0MzQ2OTg3MjE1OndlYjplNGFjYmQyOGU5ZTdkYzIxMWJkMWJhXCJcbiAgfTtcbiAgXG4gIGNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuICBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZSgpO1xuXG4gIGNvbnN0IHN0b3JhZ2VSZWZJbWFnZSA9IHJlZihzdG9yYWdlLFwiaW1hZ2VcIik7XG5cbmNvbnN0IEhvbWVQYWdlID0oKT0+e1xuICAgIGNvbnN0W2JnLCBzZXRCZ10gPSB1c2VTdGF0ZShBcnJheTxzdHJpbmc+KVxuXG4gICAgbGlzdEFsbChzdG9yYWdlUmVmSW1hZ2UpXG4gICAgLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgICAgY29uc3QgeyBpdGVtcyB9ID0gcmVzO1xuICAgICAgY29uc3QgdXJscyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICBpdGVtcy5tYXAoKGl0ZW0pID0+IGdldERvd25sb2FkVVJMKGl0ZW0pKVxuICAgICAgKTtcbiAgICAgICAgc2V0QmcodXJscylcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfSk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xMCBtYi03IHRleHQtZW1lcmFsZC02MDAgdGV4dC1jZW50ZXIgbWQ6dGV4dC0zeGwgdGV4dC0yeGwgZm9udC1ib2xkXCI+UkVWSUVXIENVUlJFTlQgQkFDS0dST1VORDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWV2ZW5seVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNCBtYi00IHRleHQtY2VudGVyIG1kOnRleHQteGwgdGV4dC1zbSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBCQUNLR1JPVU5EIFNDRU5FIDFcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctMzYgaC00OCBtZDp3LTcyIG1kOmgtMTI4XCIgc3JjPXtiZ1swXX0+PC9pbWc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00IG1iLTQgdGV4dC1jZW50ZXIgbWQ6dGV4dC14bCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJBQ0tHUk9VTkQgU0NFTkUgMlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy0zNiBoLTQ4IG1kOnctNzIgbWQ6aC0xMjhcIiBzcmM9e2JnWzFdfT48L2ltZz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJuYW1lcyI6WyJnZXRTdG9yYWdlIiwiZ2V0RG93bmxvYWRVUkwiLCJyZWYiLCJsaXN0QWxsIiwiaW5pdGlhbGl6ZUFwcCIsInVzZVN0YXRlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsInN0b3JhZ2UiLCJzdG9yYWdlUmVmSW1hZ2UiLCJIb21lUGFnZSIsImJnIiwic2V0QmciLCJBcnJheSIsInRoZW4iLCJyZXMiLCJpdGVtcyIsInVybHMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaXRlbSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwicCIsImNsYXNzTmFtZSIsImltZyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/home.tsx\n"));

/***/ })

});