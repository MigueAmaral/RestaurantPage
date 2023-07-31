/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createContact = () => {\n\n    const content = document.querySelector(\"#content\");\n    const pageContent = document.createElement(\"div\");\n    pageContent.classList.add(\"page-content\");\n\n    const headline = document.createElement(\"h1\");\n    headline.textContent = \"CONTACT\"\n    pageContent.appendChild(headline);\n\n    const name = document.createElement(\"h3\");\n    name.textContent = \"Name\"\n    pageContent.appendChild(name);\n\n    const nameInp = document.createElement(\"input\");\n    pageContent.appendChild(nameInp);\n\n    const email = document.createElement(\"h3\");\n    email.textContent = \"Email\"\n    pageContent.appendChild(email);\n\n    const emailInp = document.createElement(\"input\");\n    pageContent.appendChild(emailInp);\n\n    const text = document.createElement(\"h3\");\n    text.textContent = \"Asks us anything:\"\n    pageContent.appendChild(text);\n\n    const textBox = document.createElement(\"textarea\");\n    pageContent.appendChild(textBox);\n\n    content.appendChild(pageContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);\n\n//# sourceURL=webpack://restaurantpage/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPage */ \"./src/loadPage.js\");\n\n\n(0,_loadPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.js */ \"./src/tabs.js\");\n\n\n\nfunction initialLoad() {\n    (0,_tabs_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) ();\n    (0,_restaurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);\n\n//# sourceURL=webpack://restaurantpage/./src/loadPage.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createMenu = () => {\n\n    const content = document.querySelector(\"#content\");\n    const pageContent = document.createElement(\"div\");\n    pageContent.classList.add(\"page-content\");\n\n    const headline = document.createElement(\"h1\");\n    headline.textContent = \"MENU\"\n    pageContent.appendChild(headline);\n\n    const starters = document.createElement(\"h3\");\n    starters.textContent = \"Starters\"\n    pageContent.appendChild(starters);\n\n    const startersCopy = document.createElement(\"p\");\n    startersCopy.textContent = \"Bread, Olives, Mushrooms, Prawns \";\n    pageContent.appendChild(startersCopy);\n\n    const mains = document.createElement(\"h3\");\n    mains.textContent = \"Mains\"\n    pageContent.appendChild(mains);\n\n    const mainsCopy = document.createElement(\"p\");\n    mainsCopy.textContent = \"Lamb, Veal, Cod, Eel\";\n    pageContent.appendChild(mainsCopy);\n\n    const desserts = document.createElement(\"h3\");\n    desserts.textContent = \"Desserts\"\n    pageContent.appendChild(desserts);\n\n    const dessertsCopy = document.createElement(\"p\");\n    dessertsCopy.textContent = \"Ice cream, Chocolate mousse, Grapes\";\n    pageContent.appendChild(dessertsCopy);\n\n    content.appendChild(pageContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst createRestaurantHP = () => {\n    const content = document.querySelector(\"#content\");\n    const pageContent = document.createElement(\"div\");\n    pageContent.classList.add(\"page-content\");\n\n    const headline = document.createElement(\"h1\");\n    headline.textContent = \"Welcome to our restaurant!\"\n    pageContent.appendChild(headline);\n\n    const image = document.createElement(\"img\");\n    image.src = \"https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg\";\n    image.height = \"300\";\n    pageContent.appendChild(image);\n\n    const copy = document.createElement(\"p\");\n    copy.textContent = \"Best restaurant in the world! Come and visit us\";\n    pageContent.appendChild(copy);\n\n    content.appendChild(pageContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantHP);\n\n//# sourceURL=webpack://restaurantpage/./src/restaurant.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction tabs() {\n    const content = document.querySelector(\"#content\");\n    const pageContent = document.createElement(\"div\");\n    pageContent.classList.add(\"tabs\");\n\n    const home = document.createElement(\"div\");\n    home.textContent = \"HOME\"\n    pageContent.appendChild(home);\n\n    const menu = document.createElement(\"div\");\n    menu.textContent = \"MENU\"\n    pageContent.appendChild(menu);\n\n    const contact = document.createElement(\"div\");\n    contact.textContent = \"CONTACT\"\n    pageContent.appendChild(contact);\n\n    content.appendChild(pageContent);\n\n    home.addEventListener (\"click\", () => {\n        clearContent();\n        (0,_restaurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n    menu.addEventListener (\"click\", () => {\n        clearContent();\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n    contact.addEventListener (\"click\", () => {\n        clearContent();\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n}\n\nfunction clearContent() {\n    let content = document.querySelector(\"#content\");\n    let pageContent = document.querySelector(\".page-content\")\n    content.removeChild(pageContent)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/tabs.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;