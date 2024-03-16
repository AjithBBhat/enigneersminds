"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./components/pages/HeroSection.js":
/*!*****************************************!*\
  !*** ./components/pages/HeroSection.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typed.js */ \"./node_modules/typed.js/dist/typed.module.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar HeroSection = function(param) {\n    var _title = param.title, title = _title === void 0 ? \"The EM Value\" : _title, _subtitle = param.subtitle, subtitle = _subtitle === void 0 ? \"Holistic Solutions and Services to Transform your Challenges.\" : _subtitle, _fullWidthImage = param.fullWidthImage, fullWidthImage = _fullWidthImage === void 0 ? \"/images/EM_Banner.webp\" : _fullWidthImage;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        // Initialize Typed.js for the heading\n        var typedHeading = new typed_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"#heading\", {\n            strings: [\n                title\n            ],\n            typeSpeed: 50,\n            showCursor: false\n        });\n        // Cleanup function to destroy Typed instances\n        return function() {\n            typedHeading.destroy();\n        };\n    }, [\n        title\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Carousel, {\n            autoplay: true,\n            autoplaySpeed: 3000,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            position: \"relative\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: fullWidthImage,\n                                alt: \"EM\",\n                                style: {\n                                    width: \"100%\",\n                                    height: \"100vh\",\n                                    objectFit: \"cover\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ajithbhat/Documents/cmstest/client/components/pages/HeroSection.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    position: \"absolute\",\n                                    top: \"50%\",\n                                    left: \"30%\",\n                                    transform: \"translate(-50%, -50%)\",\n                                    textAlign: \"left\",\n                                    fontSize: \"75px\",\n                                    textShadow: \"2px 2px 4px #000000\",\n                                    color: \"white\",\n                                    display: \"flex\",\n                                    flexDirection: \"column\",\n                                    width: \"50%\",\n                                    maxWidth: \"600px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        style: {\n                                            fontSize: \"70px\",\n                                            marginBottom: \"0px\",\n                                            color: \"white\"\n                                        },\n                                        id: \"heading\",\n                                        children: title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ajithbhat/Documents/cmstest/client/components/pages/HeroSection.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontSize: \"4vw\",\n                                            fontFamily: \"Roboto-Thin\",\n                                            color: \"orange\",\n                                            lineHeight: \"1.2\"\n                                        },\n                                        children: subtitle\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ajithbhat/Documents/cmstest/client/components/pages/HeroSection.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                                type: \"primary\",\n                                                size: \"large\",\n                                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.SendOutlined, {}, void 0, false, void 0, void 0),\n                                                children: \"Explore\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ajithbhat/Documents/cmstest/client/components/pages/HeroSection.js\",\n                                                lineNumber: 78,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ajithbhat/Documents/cmstest/client/components/pages/HeroSection.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ajithbhat/Documents/cmstest/client/components/pages/HeroSection.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ajithbhat/Documents/cmstest/client/components/pages/HeroSection.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ajithbhat/Documents/cmstest/client/components/pages/HeroSection.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            position: \"relative\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: fullWidthImage,\n                                alt: \"EM\",\n                                style: {\n                                    width: \"100%\",\n                                    height: \"100vh\",\n                                    objectFit: \"cover\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ajithbhat/Documents/cmstest/client/components/pages/HeroSection.js\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    position: \"absolute\",\n                                    top: \"50%\",\n                                    left: \"30%\",\n                                    transform: \"translate(-50%, -50%)\",\n                                    textAlign: \"left\",\n                                    fontSize: \"75px\",\n                                    textShadow: \"2px 2px 4px #000000\",\n                                    color: \"white\",\n                                    display: \"flex\",\n                                    flexDirection: \"column\",\n                                    width: \"50%\",\n                                    maxWidth: \"600px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        style: {\n                                            fontSize: \"70px\",\n                                            marginBottom: \"0px\",\n                                            color: \"white\"\n                                        },\n                                        id: \"heading\",\n                                        children: \"The EM Value\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ajithbhat/Documents/cmstest/client/components/pages/HeroSection.js\",\n                                        lineNumber: 113,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontSize: \"4vw\",\n                                            fontFamily: \"Roboto-Thin\",\n                                            color: \"orange\",\n                                            lineHeight: \"1.2\"\n                                        },\n                                        children: subtitle\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ajithbhat/Documents/cmstest/client/components/pages/HeroSection.js\",\n                                        lineNumber: 123,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                                type: \"primary\",\n                                                size: \"large\",\n                                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.SendOutlined, {}, void 0, false, void 0, void 0),\n                                                children: \"Explore\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ajithbhat/Documents/cmstest/client/components/pages/HeroSection.js\",\n                                                lineNumber: 135,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ajithbhat/Documents/cmstest/client/components/pages/HeroSection.js\",\n                                            lineNumber: 134,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ajithbhat/Documents/cmstest/client/components/pages/HeroSection.js\",\n                                        lineNumber: 133,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ajithbhat/Documents/cmstest/client/components/pages/HeroSection.js\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ajithbhat/Documents/cmstest/client/components/pages/HeroSection.js\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ajithbhat/Documents/cmstest/client/components/pages/HeroSection.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(HeroSection, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = HeroSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDN0MsMkRBQVksb0NBQUc7MERBQUUsU0FFNUQ7Ozs7O3FEQUFTOzs7OztpREFDUDs7Ozs7NkNBQ0M7Ozs7OztxQ0FDSDs7Ozs7OzZCQUNGO2lDQUNMOzs7Ozs7aUJBQ007cUJBQ1YsQ0FDSDtDQUNIO0dBMUlLSyxXQUFXO0FBQVhBLEtBQUFBLFdBQVc7QUEySWpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9IZXJvU2VjdGlvbi5qcz83YzIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5cbmltcG9ydCB7IFNlbmRPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFR5cGVkIGZyb20gXCJ0eXBlZC5qc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJhbnRkXCI7XG5jb25zdCBIZXJvU2VjdGlvbiA9ICh7XG4gIHRpdGxlID0gXCJUaGUgRU0gVmFsdWVcIixcbiAgc3VidGl0bGUgPSBcIkhvbGlzdGljIFNvbHV0aW9ucyBhbmQgU2VydmljZXMgdG8gVHJhbnNmb3JtIHlvdXIgQ2hhbGxlbmdlcy5cIixcbiAgZnVsbFdpZHRoSW1hZ2UgPSBcIi9pbWFnZXMvRU1fQmFubmVyLndlYnBcIixcbn0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBJbml0aWFsaXplIFR5cGVkLmpzIGZvciB0aGUgaGVhZGluZ1xuICAgIGNvbnN0IHR5cGVkSGVhZGluZyA9IG5ldyBUeXBlZChcIiNoZWFkaW5nXCIsIHtcbiAgICAgIHN0cmluZ3M6IFt0aXRsZV0sXG4gICAgICB0eXBlU3BlZWQ6IDUwLFxuICAgICAgc2hvd0N1cnNvcjogZmFsc2UsXG4gICAgfSk7XG5cbiAgICAvLyBDbGVhbnVwIGZ1bmN0aW9uIHRvIGRlc3Ryb3kgVHlwZWQgaW5zdGFuY2VzXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHR5cGVkSGVhZGluZy5kZXN0cm95KCk7XG4gICAgfTtcbiAgfSwgW3RpdGxlXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDYXJvdXNlbCBhdXRvcGxheSBhdXRvcGxheVNwZWVkPXszMDAwfT5cbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17ZnVsbFdpZHRoSW1hZ2V9XG4gICAgICAgICAgICAgIGFsdD1cIkVNXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgdG9wOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgIGxlZnQ6IFwiMzAlXCIsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLCAvLyBDZW50ZXIgdGhlIGNvbnRlbnQgaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5XG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCI3NXB4XCIsXG4gICAgICAgICAgICAgICAgdGV4dFNoYWRvdzogXCIycHggMnB4IDRweCAjMDAwMDAwXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjYwMHB4XCIsIC8vIExpbWl0IHRoZSB3aWR0aCBvZiB0aGUgY29udGVudFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiNzBweFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjBweFwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGlkPVwiaGVhZGluZ1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjR2d1wiLFxuICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJSb2JvdG8tVGhpblwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwib3JhbmdlXCIsXG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuMlwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c3VidGl0bGV9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaXplPVwibGFyZ2VcIiBpY29uPXs8U2VuZE91dGxpbmVkIC8+fT5cbiAgICAgICAgICAgICAgICAgICAgRXhwbG9yZVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e2Z1bGxXaWR0aEltYWdlfVxuICAgICAgICAgICAgICBhbHQ9XCJFTVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgIHRvcDogXCI1MCVcIixcbiAgICAgICAgICAgICAgICBsZWZ0OiBcIjMwJVwiLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIiwgLy8gQ2VudGVyIHRoZSBjb250ZW50IGhvcml6b250YWxseSBhbmQgdmVydGljYWxseVxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiNzVweFwiLFxuICAgICAgICAgICAgICAgIHRleHRTaGFkb3c6IFwiMnB4IDJweCA0cHggIzAwMDAwMFwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI1MCVcIixcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCI2MDBweFwiLCAvLyBMaW1pdCB0aGUgd2lkdGggb2YgdGhlIGNvbnRlbnRcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjcwcHhcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIwcHhcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBpZD1cImhlYWRpbmdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVGhlIEVNIFZhbHVlXG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjR2d1wiLFxuICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJSb2JvdG8tVGhpblwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwib3JhbmdlXCIsXG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuMlwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c3VidGl0bGV9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaXplPVwibGFyZ2VcIiBpY29uPXs8U2VuZE91dGxpbmVkIC8+fT5cbiAgICAgICAgICAgICAgICAgICAgRXhwbG9yZVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICA8L0Nhcm91c2VsPlxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhlcm9TZWN0aW9uO1xuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIlNlbmRPdXRsaW5lZCIsIkxpbmsiLCJUeXBlZCIsInVzZUVmZmVjdCIsIkNhcm91c2VsIiwiSGVyb1NlY3Rpb24iLCJ0aXRsZSIsInN1YnRpdGxlIiwiZnVsbFdpZHRoSW1hZ2UiLCJ0eXBlZEhlYWRpbmciLCJzdHJpbmdzIiwidHlwZVNwZWVkIiwic2hvd0N1cnNvciIsImRlc3Ryb3kiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJkaXYiLCJzdHlsZSIsInBvc2l0aW9uIiwiaW1nIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJ0ZXh0U2hhZG93IiwiY29sb3IiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm1heFdpZHRoIiwiaDEiLCJtYXJnaW5Cb3R0b20iLCJpZCIsInAiLCJmb250RmFtaWx5IiwibGluZUhlaWdodCIsImhyZWYiLCJhIiwidHlwZSIsInNpemUiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/pages/HeroSection.js\n");

/***/ })

});