/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/burger.js */ \"./src/scripts/module/burger.js\");\n/* harmony import */ var _module_easterSecret_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/easterSecret.js */ \"./src/scripts/module/easterSecret.js\");\n/* harmony import */ var _module_swiper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/swiper.js */ \"./src/scripts/module/swiper.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://dev-corp/./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/module/burger.js":
/*!**************************************!*\
  !*** ./src/scripts/module/burger.js ***!
  \**************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst nav = document.querySelector('.header__burger');\r\nconst navList = document.querySelector('.header__nav')\r\nnav.addEventListener('click',(event) => {\r\n    nav.classList.toggle('open');\r\n    navList.classList.toggle('header__nav_active')\r\n});\n\n//# sourceURL=webpack://dev-corp/./src/scripts/module/burger.js?");

/***/ }),

/***/ "./src/scripts/module/easterSecret.js":
/*!********************************************!*\
  !*** ./src/scripts/module/easterSecret.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst main = document.querySelector(\"main\");\r\nconst easterSecret = document.createElement(\"div\");\r\nconst author = document.createElement(\"div\");\r\nconst description = document.createElement(\"div\");\r\n\r\nconst appendElement = (parent, children) => {\r\n    parent.append(children);\r\n};\r\n\r\nconst StylesForEasterSecret = () => {\r\n    easterSecret.style.zIndex = \"1000\";\r\n    easterSecret.style.position = \"fixed\";\r\n    easterSecret.style.bottom = \"20px\";\r\n    easterSecret.style.left = \"20px\";\r\n    easterSecret.style.width = \"500px\";\r\n    easterSecret.style.height = \"200px\";\r\n    easterSecret.style.padding = \"20px\";\r\n    easterSecret.style.backgroundColor = \"rgba(255, 255, 255, 0.2)\";\r\n    easterSecret.style.borderRadius = \"20px\";\r\n    appendElement(main, easterSecret);\r\n};\r\n\r\nconst StylesForAuthor = () => {\r\n    author.innerText = \"Разработчики: SilantievMax, ElenaVi\";\r\n    author.style.color = \"#0A0046\";\r\n    author.style.fontSize = \"20px\";\r\n    author.style.fontWeight = \"bold\";\r\n    appendElement(easterSecret, author);\r\n};\r\n\r\nconst StylesForDescription = () => {\r\n    description.innerText =\r\n        \"Проект написан на HTML, CSS, JS и собран при помощи Gulp... Ссылка на проект: https://github.com/SilantievMax/dev-corp\";\r\n    description.style.color = \"#0A0046\";\r\n    description.style.marginTop = \"10px\";\r\n    appendElement(easterSecret, description);\r\n};\r\n\r\nconst open = () => {\r\n    StylesForEasterSecret();\r\n    StylesForAuthor();\r\n    StylesForDescription();\r\n};\r\n\r\nconst remove = () => {\r\n    easterSecret.remove();\r\n};\r\n\r\ndocument.onkeydown = (e) => {\r\n    if (e.code === \"KeyS\") {\r\n        document.onkeyup = (e) => {\r\n            if (e.code === \"KeyL\") {\r\n                open();\r\n                setTimeout(remove, 5000)\r\n            } else {\r\n                document.onkeyup = null;\r\n            }\r\n        };\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://dev-corp/./src/scripts/module/easterSecret.js?");

/***/ }),

/***/ "./src/scripts/module/swiper.js":
/*!**************************************!*\
  !*** ./src/scripts/module/swiper.js ***!
  \**************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst slider = document.querySelector(\".swiper-founders__items\");\r\nconst slides = document.querySelectorAll(\".swiper-founders__item\");\r\nconst button = document.querySelectorAll(\".swiper-founders__button\");\r\n\r\nlet current = 0;\r\nlet prev = 4;\r\nlet next = 1;\r\n\r\nfor (let i = 0; i < button.length; i++) {\r\n    button[i].addEventListener(\"click\", () =>\r\n        i == 0 ? gotoPrev() : gotoNext()\r\n    );\r\n}\r\n\r\nconst gotoPrev = () =>\r\n    current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);\r\n\r\nconst gotoNext = () => (current < 3 ? gotoNum(current + 1) : gotoNum(0));\r\n\r\nconst gotoNum = (number) => {\r\n    current = number;\r\n    prev = current - 1;\r\n    next = current + 1;\r\n\r\n    for (let i = 0; i < slides.length; i++) {\r\n        slides[i].classList.remove(\"active\");\r\n        slides[i].classList.remove(\"prev\");\r\n        slides[i].classList.remove(\"next\");\r\n    }\r\n\r\n    if (next == 4) {\r\n        next = 0;\r\n    }\r\n\r\n    if (prev == -1) {\r\n        prev = 3;\r\n    }\r\n\r\n    slides[current].classList.add(\"active\");\r\n    slides[prev].classList.add(\"prev\");\r\n    slides[next].classList.add(\"next\");\r\n};\n\n//# sourceURL=webpack://dev-corp/./src/scripts/module/swiper.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/main.js");
/******/ 	
/******/ })()
;