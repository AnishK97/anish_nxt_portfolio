"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/hero.tsx":
/*!*****************************!*\
  !*** ./components/hero.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/hi */ \"(app-pages-browser)/./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _splinetool_react_spline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @splinetool/react-spline */ \"(app-pages-browser)/./node_modules/@splinetool/react-spline/dist/react-spline.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst letters = \"私のウェブサイトをご覧いただき、貴重なフィードバックをお寄せいただきありがとうございます。詳細を確認するには接続してください\";\nfunction Hero() {\n    _s();\n    const headingRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [intervalId, setIntervalId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleMouseOver = ()=>{\n        let iteration = 0;\n        if (intervalId !== null) {\n            clearInterval(intervalId);\n        }\n        const target = headingRef.current;\n        if (target) {\n            setIntervalId(window.setInterval(()=>{\n                target.innerText = target.innerText.split(\"\").map((letter, index)=>{\n                    if (index < iteration) {\n                        return target.dataset.value[index];\n                    }\n                    return letters[Math.floor(Math.random() * 15)];\n                }).join(\"\");\n                if (iteration >= target.dataset.value.length) {\n                    clearInterval(intervalId);\n                }\n                iteration += 1 / 2;\n            }, 50));\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsMounted(true);\n        if (isMounted) {\n            handleMouseOver();\n        }\n        return ()=>clearInterval(intervalId);\n    }, [\n        isMounted\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-col items-center justify-center pl-[20rem] mr-[10rem] w-[42.5rem] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-blue-400  items-center text-lg\",\n                        children: \"Hello! I'm\"\n                    }, void 0, false, {\n                        fileName: \"/Users/paytriot/Desktop/Anish-Dev/anishk97_portfolio/nextja_portfolio/anish_nxt_portfolio/components/hero.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        className: \"r \",\n                        initial: {\n                            opacity: 0,\n                            y: 100\n                        },\n                        animate: {\n                            opacity: 1,\n                            y: 0\n                        },\n                        transition: {\n                            delay: 0.1\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            onMouseOver: handleMouseOver,\n                            \"data-value\": \"ANISH KULANDAISAMY\",\n                            className: \"text-gray-200 text-[2.5rem] tracking-tighter truncate  w-[40rem]\",\n                            ref: headingRef,\n                            children: \"ANISH.KULANDAISAMY\"\n                        }, void 0, false, {\n                            fileName: \"/Users/paytriot/Desktop/Anish-Dev/anishk97_portfolio/nextja_portfolio/anish_nxt_portfolio/components/hero.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/paytriot/Desktop/Anish-Dev/anishk97_portfolio/nextja_portfolio/anish_nxt_portfolio/components/hero.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        initial: {\n                            opacity: 0,\n                            y: 100\n                        },\n                        animate: {\n                            opacity: 1,\n                            y: 0\n                        },\n                        transition: {\n                            delay: 0.1\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-gray-400 text-[2rem] tracking-tighter \",\n                            children: \"FULL STACK DEVELOPER\"\n                        }, void 0, false, {\n                            fileName: \"/Users/paytriot/Desktop/Anish-Dev/anishk97_portfolio/nextja_portfolio/anish_nxt_portfolio/components/hero.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/paytriot/Desktop/Anish-Dev/anishk97_portfolio/nextja_portfolio/anish_nxt_portfolio/components/hero.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        className: \"flex items-center flex-nowrap w-[32.5rem]\",\n                        initial: {\n                            opacity: 0,\n                            y: 100\n                        },\n                        animate: {\n                            opacity: 1,\n                            y: 0\n                        },\n                        transition: {\n                            delay: 0.1\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"flex text-gray-400  text-[1.25rem] tracking-wide pt-2 \",\n                            children: \"Building digital products, brands, and experience.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/paytriot/Desktop/Anish-Dev/anishk97_portfolio/nextja_portfolio/anish_nxt_portfolio/components/hero.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/paytriot/Desktop/Anish-Dev/anishk97_portfolio/nextja_portfolio/anish_nxt_portfolio/components/hero.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"group Pastel bg-gradient-to-tr from-violet-500 to-orange-300 text-gray-400 px-4 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 w-[10rem] mt-4\",\n                        href: \"/CV.pdf\",\n                        download: true,\n                        children: [\n                            \"Download CV\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiDownload, {\n                                className: \"opacity-60 group-hover:translate-y-1 transition\"\n                            }, void 0, false, {\n                                fileName: \"/Users/paytriot/Desktop/Anish-Dev/anishk97_portfolio/nextja_portfolio/anish_nxt_portfolio/components/hero.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/paytriot/Desktop/Anish-Dev/anishk97_portfolio/nextja_portfolio/anish_nxt_portfolio/components/hero.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/paytriot/Desktop/Anish-Dev/anishk97_portfolio/nextja_portfolio/anish_nxt_portfolio/components/hero.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-[48rem] h-[48rem] ml-15 pl-20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_splinetool_react_spline__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    scene: \"https://prod.spline.design/NO8HW-T3LYEvy4ro/scene.splinecode\"\n                }, void 0, false, {\n                    fileName: \"/Users/paytriot/Desktop/Anish-Dev/anishk97_portfolio/nextja_portfolio/anish_nxt_portfolio/components/hero.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/paytriot/Desktop/Anish-Dev/anishk97_portfolio/nextja_portfolio/anish_nxt_portfolio/components/hero.tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/paytriot/Desktop/Anish-Dev/anishk97_portfolio/nextja_portfolio/anish_nxt_portfolio/components/hero.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(Hero, \"enA8j7O4tn4ZxvL6Ea89mMt+FOk=\");\n_c = Hero;\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaGVyby50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRTJEO0FBRWY7QUFFTDtBQUNPO0FBRTlDLE1BQU1PLFVBQ0o7QUFFYSxTQUFTQzs7SUFDdEIsTUFBTUMsYUFBYU4sNkNBQU1BLENBQXFCO0lBQzlDLE1BQU0sQ0FBQ08sWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBZ0I7SUFDNUQsTUFBTSxDQUFDVyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1hLGtCQUFrQjtRQUN0QixJQUFJQyxZQUFZO1FBRWhCLElBQUlMLGVBQWUsTUFBTTtZQUN2Qk0sY0FBY047UUFDaEI7UUFFQSxNQUFNTyxTQUFTUixXQUFXUyxPQUFPO1FBRWpDLElBQUlELFFBQVE7WUFDVk4sY0FDRVEsT0FBT0MsV0FBVyxDQUFDO2dCQUNqQkgsT0FBT0ksU0FBUyxHQUFHSixPQUFPSSxTQUFTLENBQ2hDQyxLQUFLLENBQUMsSUFDTkMsR0FBRyxDQUFDLENBQUNDLFFBQVFDO29CQUNaLElBQUlBLFFBQVFWLFdBQVc7d0JBQ3JCLE9BQU9FLE9BQU9TLE9BQU8sQ0FBQ0MsS0FBSyxDQUFFRixNQUFNO29CQUNyQztvQkFFQSxPQUFPbEIsT0FBTyxDQUFDcUIsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUssSUFBSTtnQkFDaEQsR0FDQ0MsSUFBSSxDQUFDO2dCQUVSLElBQUloQixhQUFhRSxPQUFPUyxPQUFPLENBQUNDLEtBQUssQ0FBRUssTUFBTSxFQUFFO29CQUM3Q2hCLGNBQWNOO2dCQUNoQjtnQkFFQUssYUFBYSxJQUFJO1lBQ25CLEdBQUc7UUFFUDtJQUNGO0lBRUFiLGdEQUFTQSxDQUFDO1FBQ1JXLGFBQWE7UUFDYixJQUFJRCxXQUFXO1lBQ2JFO1FBQ0Y7UUFDQSxPQUFPLElBQU1FLGNBQWNOO0lBQzdCLEdBQUc7UUFBQ0U7S0FBVTtJQUVkLHFCQUNFLDhEQUFDcUI7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFFRixXQUFVO2tDQUFzQzs7Ozs7O2tDQUNuRCw4REFBQzdCLGlEQUFNQSxDQUFDOEIsR0FBRzt3QkFDVEQsV0FBVTt3QkFDVkcsU0FBUzs0QkFBRUMsU0FBUzs0QkFBR0MsR0FBRzt3QkFBSTt3QkFDOUJDLFNBQVM7NEJBQUVGLFNBQVM7NEJBQUdDLEdBQUc7d0JBQUU7d0JBQzVCRSxZQUFZOzRCQUNWQyxPQUFPO3dCQUNUO2tDQUVBLDRFQUFDQzs0QkFDQ0MsYUFBYTlCOzRCQUNiK0IsY0FBVzs0QkFDWFgsV0FBVTs0QkFDVlksS0FBS3JDO3NDQUNOOzs7Ozs7Ozs7OztrQ0FJSCw4REFBQ0osaURBQU1BLENBQUM4QixHQUFHO3dCQUNURSxTQUFTOzRCQUFFQyxTQUFTOzRCQUFHQyxHQUFHO3dCQUFJO3dCQUM5QkMsU0FBUzs0QkFBRUYsU0FBUzs0QkFBR0MsR0FBRzt3QkFBRTt3QkFDNUJFLFlBQVk7NEJBQ1ZDLE9BQU87d0JBQ1Q7a0NBRUEsNEVBQUNDOzRCQUFHVCxXQUFVO3NDQUE4Qzs7Ozs7Ozs7Ozs7a0NBSTlELDhEQUFDN0IsaURBQU1BLENBQUM4QixHQUFHO3dCQUNURCxXQUFVO3dCQUNWRyxTQUFTOzRCQUFFQyxTQUFTOzRCQUFHQyxHQUFHO3dCQUFJO3dCQUM5QkMsU0FBUzs0QkFBRUYsU0FBUzs0QkFBR0MsR0FBRzt3QkFBRTt3QkFDNUJFLFlBQVk7NEJBQ1ZDLE9BQU87d0JBQ1Q7a0NBRUEsNEVBQUNOOzRCQUFFRixXQUFVO3NDQUF5RDs7Ozs7Ozs7Ozs7a0NBSXhFLDhEQUFDYTt3QkFDQ2IsV0FBVTt3QkFDVmMsTUFBSzt3QkFDTEMsUUFBUTs7NEJBQ1Q7NEJBQ2E7MENBQ1osOERBQUM3QyxzREFBVUE7Z0NBQUM4QixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzFCLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQzVCLGdFQUFNQTtvQkFBQzRDLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJ0QjtHQTNId0IxQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlcm8udHN4PzI1ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgSGlEb3dubG9hZCB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xuXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IFNwbGluZSBmcm9tIFwiQHNwbGluZXRvb2wvcmVhY3Qtc3BsaW5lXCI7XG5cbmNvbnN0IGxldHRlcnMgPVxuICBcIuengeOBruOCpuOCp+ODluOCteOCpOODiOOCkuOBlOimp+OBhOOBn+OBoOOBjeOAgeiytOmHjeOBquODleOCo+ODvOODieODkOODg+OCr+OCkuOBiuWvhOOBm+OBhOOBn+OBoOOBjeOBguOCiuOBjOOBqOOBhuOBlOOBluOBhOOBvuOBmeOAguips+e0sOOCkueiuuiqjeOBmeOCi+OBq+OBr+aOpee2muOBl+OBpuOBj+OBoOOBleOBhFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvKCkge1xuICBjb25zdCBoZWFkaW5nUmVmID0gdXNlUmVmPEhUTUxIZWFkaW5nRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFtpbnRlcnZhbElkLCBzZXRJbnRlcnZhbElkXSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaXNNb3VudGVkLCBzZXRJc01vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlT3ZlciA9ICgpID0+IHtcbiAgICBsZXQgaXRlcmF0aW9uID0gMDtcblxuICAgIGlmIChpbnRlcnZhbElkICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9IGhlYWRpbmdSZWYuY3VycmVudDtcblxuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHNldEludGVydmFsSWQoXG4gICAgICAgIHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgdGFyZ2V0LmlubmVyVGV4dCA9IHRhcmdldC5pbm5lclRleHRcbiAgICAgICAgICAgIC5zcGxpdChcIlwiKVxuICAgICAgICAgICAgLm1hcCgobGV0dGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaW5kZXggPCBpdGVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmRhdGFzZXQudmFsdWUhW2luZGV4XTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE1KV07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oXCJcIik7XG5cbiAgICAgICAgICBpZiAoaXRlcmF0aW9uID49IHRhcmdldC5kYXRhc2V0LnZhbHVlIS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGl0ZXJhdGlvbiArPSAxIC8gMjtcbiAgICAgICAgfSwgNTApXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzTW91bnRlZCh0cnVlKTtcbiAgICBpZiAoaXNNb3VudGVkKSB7XG4gICAgICBoYW5kbGVNb3VzZU92ZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCEpO1xuICB9LCBbaXNNb3VudGVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcGwtWzIwcmVtXSBtci1bMTByZW1dIHctWzQyLjVyZW1dIFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwICBpdGVtcy1jZW50ZXIgdGV4dC1sZ1wiPkhlbGxvISBJJ208L3A+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiciBcIlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMTAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgZGVsYXk6IDAuMSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGgxXG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17aGFuZGxlTW91c2VPdmVyfVxuICAgICAgICAgICAgZGF0YS12YWx1ZT1cIkFOSVNIIEtVTEFOREFJU0FNWVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwIHRleHQtWzIuNXJlbV0gdHJhY2tpbmctdGlnaHRlciB0cnVuY2F0ZSAgdy1bNDByZW1dXCJcbiAgICAgICAgICAgIHJlZj17aGVhZGluZ1JlZn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBTklTSC5LVUxBTkRBSVNBTVlcbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAxMDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICBkZWxheTogMC4xLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCB0ZXh0LVsycmVtXSB0cmFja2luZy10aWdodGVyIFwiPlxuICAgICAgICAgICAgRlVMTCBTVEFDSyBERVZFTE9QRVJcbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZmxleC1ub3dyYXAgdy1bMzIuNXJlbV1cIlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMTAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgZGVsYXk6IDAuMSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LWdyYXktNDAwICB0ZXh0LVsxLjI1cmVtXSB0cmFja2luZy13aWRlIHB0LTIgXCI+XG4gICAgICAgICAgICBCdWlsZGluZyBkaWdpdGFsIHByb2R1Y3RzLCBicmFuZHMsIGFuZCBleHBlcmllbmNlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIFBhc3RlbCBiZy1ncmFkaWVudC10by10ciBmcm9tLXZpb2xldC01MDAgdG8tb3JhbmdlLTMwMCB0ZXh0LWdyYXktNDAwIHB4LTQgcHktMyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLWZ1bGwgb3V0bGluZS1ub25lIGZvY3VzOnNjYWxlLTExMCBob3ZlcjpzY2FsZS0xMTAgYWN0aXZlOnNjYWxlLTEwNSB0cmFuc2l0aW9uIGN1cnNvci1wb2ludGVyIGJvcmRlckJsYWNrIGRhcms6Ymctd2hpdGUvMTAgdy1bMTByZW1dIG10LTRcIlxuICAgICAgICAgIGhyZWY9XCIvQ1YucGRmXCJcbiAgICAgICAgICBkb3dubG9hZFxuICAgICAgICA+XG4gICAgICAgICAgRG93bmxvYWQgQ1Z7XCIgXCJ9XG4gICAgICAgICAgPEhpRG93bmxvYWQgY2xhc3NOYW1lPVwib3BhY2l0eS02MCBncm91cC1ob3Zlcjp0cmFuc2xhdGUteS0xIHRyYW5zaXRpb25cIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LVs0OHJlbV0gaC1bNDhyZW1dIG1sLTE1IHBsLTIwXCI+XG4gICAgICAgIDxTcGxpbmUgc2NlbmU9XCJodHRwczovL3Byb2Quc3BsaW5lLmRlc2lnbi9OTzhIVy1UM0xZRXZ5NHJvL3NjZW5lLnNwbGluZWNvZGVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgc2NhbGU6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHNjYWxlOiAxIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgdHlwZTogXCJ0d2VlblwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuMixcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17YW5pc2h9XG4gICAgICAgICAgICBoZWlnaHQ9ezE5Mn1cbiAgICAgICAgICAgIHdpZHRoPXsxOTJ9XG4gICAgICAgICAgICBhbHQ9XCJhbmlzaFwiXG4gICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICBwcmlvcml0eT17dHJ1ZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNTYgdy01NiByb3VuZGVkLWZ1bGwgb2JqZWN0LXNjYWxlLWRvd24gYm9yZGVyLVswLjM1cmVtXSBib3JkZXItZ3JheS01MDAgc2hhZG93LTJ4bCBwdC00IGhvdmVyOnNjYWxlLTExMFwiXG4gICAgICAgICAgPjwvSW1hZ2U+XG4gICAgICAgIDwvbW90aW9uLmRpdj4gKi99XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJIaURvd25sb2FkIiwibW90aW9uIiwiU3BsaW5lIiwibGV0dGVycyIsIkhlcm8iLCJoZWFkaW5nUmVmIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsSWQiLCJpc01vdW50ZWQiLCJzZXRJc01vdW50ZWQiLCJoYW5kbGVNb3VzZU92ZXIiLCJpdGVyYXRpb24iLCJjbGVhckludGVydmFsIiwidGFyZ2V0IiwiY3VycmVudCIsIndpbmRvdyIsInNldEludGVydmFsIiwiaW5uZXJUZXh0Iiwic3BsaXQiLCJtYXAiLCJsZXR0ZXIiLCJpbmRleCIsImRhdGFzZXQiLCJ2YWx1ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImpvaW4iLCJsZW5ndGgiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwicCIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJoMSIsIm9uTW91c2VPdmVyIiwiZGF0YS12YWx1ZSIsInJlZiIsImEiLCJocmVmIiwiZG93bmxvYWQiLCJzY2VuZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/hero.tsx\n"));

/***/ })

});