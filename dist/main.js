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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#boards-container {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n#human-game-board, #computer-game-board {\r\n  border: 4px black solid;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.cell {\r\n  background-color: lightgray;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  border: 2px solid white;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.hasShip {\r\n  background-color: navy;\r\n  border: 2px solid navy;\r\n}\r\n\r\n.miss {\r\n  background-color: rgb(100, 100, 100);\r\n}\r\n\r\n.hit {\r\n  color: red;\r\n  font-size: 2rem;\r\n  font-weight: 400;\r\n  font-family: \"Kanit\", sans-serif;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n\r\n#sunk-alert, #end-of-game {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  padding: 20px;\r\n  background: white;\r\n  border: 1px solid #ccc;\r\n  z-index: 1000; /* Make sure it's on top */\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.visible {\r\n  display: block;\r\n}\r\n\r\n.boardNotActive {\r\n  pointer-events: none;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://template_webpack_jest/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://template_webpack_jest/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://template_webpack_jest/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://template_webpack_jest/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://template_webpack_jest/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://template_webpack_jest/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://template_webpack_jest/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://template_webpack_jest/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://template_webpack_jest/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://template_webpack_jest/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/dom.js":
/*!*******************************!*\
  !*** ./src/components/dom.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   chooseShipPlacementBtn: () => (/* binding */ chooseShipPlacementBtn),\n/* harmony export */   closePopUpBtn: () => (/* binding */ closePopUpBtn),\n/* harmony export */   computerGameBoard: () => (/* binding */ computerGameBoard),\n/* harmony export */   endOfGameAlert: () => (/* binding */ endOfGameAlert),\n/* harmony export */   humanGameBoard: () => (/* binding */ humanGameBoard),\n/* harmony export */   sunkAlert: () => (/* binding */ sunkAlert)\n/* harmony export */ });\nlet humanGameBoard = document.getElementById(\"human-game-board\");\r\nlet computerGameBoard = document.getElementById(\"computer-game-board\");\r\nlet closePopUpBtn = document.getElementById(\"close-popup-btn\");\r\nlet sunkAlert = document.getElementById(\"sunk-alert\");\r\nlet endOfGameAlert = document.getElementById(\"end-of-game-alert\");\r\nlet chooseShipPlacementBtn = document.getElementById(\"choose-ship-placement-btn\");\r\n\r\n\r\n\n\n//# sourceURL=webpack://template_webpack_jest/./src/components/dom.js?");

/***/ }),

/***/ "./src/components/gameBoard.js":
/*!*************************************!*\
  !*** ./src/components/gameBoard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameBoard: () => (/* binding */ GameBoard)\n/* harmony export */ });\nclass Cell {\r\n  constructor() {\r\n    this.empty = true;\r\n    this.ship = null;\r\n    this.hit = false;\r\n    this.miss = false;\r\n  }\r\n}\r\n\r\nclass GameBoard {\r\n  constructor(rows, cols) {\r\n    this.rows = rows;\r\n    this.cols = cols;\r\n    this.board = this.buildBoard();\r\n    this.ships = [];\r\n  }\r\n\r\n  buildBoard() {\r\n    const board = [];\r\n    for (let i = 0; i < this.rows; i++) {\r\n      board.push([]);\r\n      for (let j = 0; j < this.cols; j++) {\r\n        board[i].push(new Cell());\r\n      }\r\n    }\r\n    return board;\r\n  }\r\n\r\n  placeShip(ship, row, col, orientation) {\r\n    // Checks for placement beyond board edges.\r\n    if (orientation === \"horizontal\") {\r\n      if (col + ship.length > this.cols) {\r\n        return {\r\n          success: false,\r\n          message: `${ship.name} placement is out of bounds. Horizontal orientation would extend beyond game board's edge.`,\r\n        };\r\n      }\r\n    } else {\r\n      if (row + ship.length > this.rows) {\r\n        return {\r\n          success: false,\r\n          message: `${ship.name} placement is out of bounds. Vertical orientation would extend beyond game board's edge.`,\r\n        };\r\n      }\r\n    }\r\n    // Checks for existing ships.\r\n    if (orientation === \"horizontal\") {\r\n      for (let i = 0; i < ship.length; i++) {\r\n        if (!this.board[row][col + i].empty) {\r\n          return {\r\n            success: false,\r\n            message: `Cannot place ${ship.name}: space already occupied by ${this.board[row][col + i].ship.name}.`,\r\n          };\r\n        }\r\n      }\r\n    } else {\r\n      for (let i = 0; i < ship.length; i++) {\r\n        if (!this.board[row + i][col].empty) {\r\n          return {\r\n            success: false,\r\n            message: `Cannot place ${ship.name}: space already occupied by ${this.board[row + i][col].ship.name}.`,\r\n          };\r\n        }\r\n      }\r\n    }\r\n    // Places ships.\r\n    for (let i = 0; i < ship.length; i++) {\r\n      if (orientation === \"horizontal\") {\r\n        this.board[row][col + i].empty = false;\r\n        this.board[row][col + i].ship = ship;\r\n      } else {\r\n        this.board[row + i][col].empty = false;\r\n        this.board[row + i][col].ship = ship;\r\n      }\r\n    }\r\n    return true;\r\n  }\r\n\r\n  randomlyPlaceShip(ship) {\r\n    let result;\r\n    do {\r\n      let row = Math.floor(Math.random() * 10);\r\n      let col = Math.floor(Math.random() * 10);\r\n      let orientation = Math.random() < 0.5 ? \"horizontal\" : \"vertical\";\r\n\r\n      result = this.placeShip(ship, row, col, orientation);\r\n    } while (result.success === false);\r\n  }\r\n\r\n  receiveAttack(row, col) {\r\n    let cell = this.board[row][col];\r\n    if (cell.ship != null) {\r\n      cell.hit = true;\r\n      cell.ship.hit();\r\n      cell.ship.isSunk();\r\n      return cell.hit;\r\n    } else {\r\n      cell.miss = true;\r\n      return cell.miss;\r\n    }\r\n  }\r\n\r\n  reset() {\r\n    this.board = this.buildBoard();\r\n    this.ships = [];\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://template_webpack_jest/./src/components/gameBoard.js?");

/***/ }),

/***/ "./src/components/gameLogic.js":
/*!*************************************!*\
  !*** ./src/components/gameLogic.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addListenersToCells: () => (/* binding */ addListenersToCells),\n/* harmony export */   computerPlayer: () => (/* binding */ computerPlayer),\n/* harmony export */   currentPlayer: () => (/* binding */ currentPlayer),\n/* harmony export */   humanPlayer: () => (/* binding */ humanPlayer),\n/* harmony export */   pickShipPlacement: () => (/* binding */ pickShipPlacement),\n/* harmony export */   renderPlayerBoards: () => (/* binding */ renderPlayerBoards)\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/components/player.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/components/dom.js\");\n\r\n\r\nlet humanPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_0__.Player(false);\r\nlet computerPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_0__.Player(true);\r\nlet currentPlayer = humanPlayer;\r\nlet computerPicks = [];\r\nlet isGameOver = false;\r\n\r\nfunction renderPlayerBoards(player, playerBoard) {\r\n  playerBoard.innerHTML = \"\";\r\n  for (let i = 0; i < player.gameBoardInstance.board.length; i++) {\r\n    let rowWrapper = document.createElement(\"div\");\r\n    rowWrapper.classList.add(\"row\");\r\n    for (let j = 0; j < player.gameBoardInstance.board[i].length; j++) {\r\n      let cellElement = document.createElement(\"div\");\r\n      cellElement.classList.add(\"cell\");\r\n      cellElement.dataset.row = i;\r\n      cellElement.dataset.col = j;\r\n\r\n      if (player.gameBoardInstance.board[i][j].ship) {\r\n        if (player.isComputer === false) cellElement.classList.add(\"hasShip\");\r\n      }\r\n\r\n      rowWrapper.appendChild(cellElement);\r\n    }\r\n    playerBoard.appendChild(rowWrapper);\r\n  }\r\n}\r\n\r\n_dom_js__WEBPACK_IMPORTED_MODULE_1__.closePopUpBtn.addEventListener(\"click\", () => {\r\n  _dom_js__WEBPACK_IMPORTED_MODULE_1__.sunkAlert.classList.replace(\"visible\", \"hidden\");\r\n});\r\n\r\nfunction updateCell(cell, boardCell, player) {\r\n  if (cell) {\r\n    if (boardCell.hit) {\r\n      cell.innerText = \"X\";\r\n      cell.classList.add(\"hit\");\r\n    } else {\r\n      cell.classList.add(\"miss\");\r\n    }\r\n  }\r\n\r\n  if (boardCell.ship && boardCell.ship.sunk) {\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_1__.sunkAlert.classList.replace(\"hidden\", \"visible\");\r\n    player.allShipsSunk++;\r\n    if (player.allShipsSunk === 5) {\r\n      _dom_js__WEBPACK_IMPORTED_MODULE_1__.endOfGameAlert.classList.replace(\"hidden\", \"visible\");\r\n\r\n      _dom_js__WEBPACK_IMPORTED_MODULE_1__.computerGameBoard.classList.add(\"boardNotActive\");\r\n\r\n      if (player.isComputer) {\r\n        alert(`Computer loses, all ships sunk`);\r\n      } else {\r\n        alert(`Human loses, all ships sunk`);\r\n      }\r\n\r\n      isGameOver = true;\r\n    }\r\n  }\r\n}\r\n\r\nfunction handleComputerAttack() {\r\n  let row = Math.floor(Math.random() * 10);\r\n  let col = Math.floor(Math.random() * 10);\r\n  let coordinate = `${row},${col}`;\r\n\r\n  while (computerPicks.includes(coordinate)) {\r\n    row = Math.floor(Math.random() * 10);\r\n    col = Math.floor(Math.random() * 10);\r\n    coordinate = `${row},${col}`;\r\n  }\r\n\r\n  const cell = document.querySelector(`[data-row='${row}'][data-col='${col}']`);\r\n\r\n  computerPicks.push(coordinate);\r\n  const boardCell = humanPlayer.gameBoardInstance.board[row][col];\r\n  humanPlayer.gameBoardInstance.receiveAttack(row, col);\r\n\r\n  updateCell(cell, boardCell, humanPlayer)\r\n  nextTurn();\r\n}\r\n\r\n\r\nfunction nextTurn() {\r\n  if (isGameOver) {\r\n    return; // Exit the function if the game is over\r\n  }\r\n\r\n  if (currentPlayer === humanPlayer) {\r\n    currentPlayer = computerPlayer;\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_1__.computerGameBoard.classList.add(\"boardNotActive\");\r\n    handleComputerAttack();\r\n  } else {\r\n    currentPlayer = humanPlayer;\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_1__.computerGameBoard.classList.remove(\"boardNotActive\");\r\n  }\r\n}\r\n\r\nfunction handleClick(player) {\r\n  return function (event) {\r\n    const cell = event.target;\r\n    const row = parseInt(cell.dataset.row);\r\n    const col = parseInt(cell.dataset.col);\r\n    const boardCell = player.gameBoardInstance.board[row][col];\r\n\r\n    player.gameBoardInstance.receiveAttack(row, col);\r\n\r\n    updateCell(cell, boardCell, player)\r\n    nextTurn();\r\n  };\r\n}\r\n\r\nfunction addListenersToCells(player, board) {\r\n  const cells = board.querySelectorAll(\".cell\");\r\n\r\n  cells.forEach((cell) => {\r\n    const handleEvent = handleClick(player); // Create a new handler for each cell\r\n    cell.addEventListener(\"click\", handleEvent, { once: true }); // makes cell only clickable once\r\n  });\r\n}\r\n\r\nfunction pickShipPlacement(player, a, b, c, d, e) {\r\n  player.gameBoardInstance.randomlyPlaceShip(a);\r\n  player.gameBoardInstance.randomlyPlaceShip(b);\r\n  player.gameBoardInstance.randomlyPlaceShip(c);\r\n  player.gameBoardInstance.randomlyPlaceShip(d);\r\n  player.gameBoardInstance.randomlyPlaceShip(e);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://template_webpack_jest/./src/components/gameLogic.js?");

/***/ }),

/***/ "./src/components/player.js":
/*!**********************************!*\
  !*** ./src/components/player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard.js */ \"./src/components/gameBoard.js\");\n\r\n\r\nclass Player {\r\n  constructor(isComputer) {\r\n    (this.isComputer = isComputer),\r\n      (this.gameBoardInstance = new _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__.GameBoard(10, 10)),\r\n      this.gameBoardInstance.buildBoard(),\r\n      (this.allShipsSunk = 0);\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://template_webpack_jest/./src/components/player.js?");

/***/ }),

/***/ "./src/components/ship.js":
/*!********************************!*\
  !*** ./src/components/ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\r\n  constructor(name, length) {\r\n    (this.name = name),\r\n      (this.length = length),\r\n      (this.numHit = 0),\r\n      (this.sunk = false);\r\n  }\r\n\r\n  hit() {\r\n    this.isSunk();\r\n\r\n    if (this.sunk === true) {\r\n      return {\r\n        message: `${this.name} has been hit the max number of times already and has sunk.`,\r\n      };\r\n    }\r\n\r\n    if (!this.sunk) {\r\n      this.numHit++;\r\n    }\r\n  }\r\n\r\n  isSunk() {\r\n    if (this.numHit === this.length) {\r\n      this.sunk = true;\r\n      return this.sunk;\r\n    } else {\r\n      return this.sunk;\r\n    }\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://template_webpack_jest/./src/components/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ship.js */ \"./src/components/ship.js\");\n/* harmony import */ var _components_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/gameLogic.js */ \"./src/components/gameLogic.js\");\n/* harmony import */ var _components_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dom.js */ \"./src/components/dom.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\n\r\n\r\n\r\nlet carrierHuman = new _components_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Carrier\", 5);\r\nlet battleshipHuman = new _components_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Battleship\", 4);\r\nlet cruiserHuman = new _components_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Cruiser\", 3);\r\nlet submarineHuman = new _components_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Submarine\", 3);\r\nlet patrolBoatHuman = new _components_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Patrol Boat\", 2);\r\nlet carrierComp = new _components_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Carrier\", 5);\r\nlet battleshipComp = new _components_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Battleship\", 4);\r\nlet cruiserComp = new _components_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Cruiser\", 3);\r\nlet submarineComp = new _components_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Submarine\", 3);\r\nlet patrolBoatComp = new _components_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Patrol Boat\", 2);\r\n\r\n(0,_components_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.pickShipPlacement)(\r\n  _components_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.humanPlayer,\r\n  carrierHuman,\r\n  battleshipHuman,\r\n  cruiserHuman,\r\n  submarineHuman,\r\n  patrolBoatHuman,\r\n);\r\n\r\n(0,_components_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.pickShipPlacement)(\r\n  _components_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.computerPlayer,\r\n  carrierComp,\r\n  battleshipComp,\r\n  cruiserComp,\r\n  submarineComp,\r\n  patrolBoatComp,\r\n);\r\n\r\n(0,_components_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.renderPlayerBoards)(_components_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.humanPlayer, _components_dom_js__WEBPACK_IMPORTED_MODULE_2__.humanGameBoard);\r\n(0,_components_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.renderPlayerBoards)(_components_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.computerPlayer, _components_dom_js__WEBPACK_IMPORTED_MODULE_2__.computerGameBoard);\r\n(0,_components_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.addListenersToCells)(_components_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.computerPlayer, _components_dom_js__WEBPACK_IMPORTED_MODULE_2__.computerGameBoard);\r\n\r\n_components_dom_js__WEBPACK_IMPORTED_MODULE_2__.chooseShipPlacementBtn.addEventListener(\"click\", () => {\r\n  _components_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.humanPlayer.gameBoardInstance.reset();\r\n\r\n  (0,_components_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.pickShipPlacement)(\r\n    _components_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.humanPlayer,\r\n    carrierHuman,\r\n    battleshipHuman,\r\n    cruiserHuman,\r\n    submarineHuman,\r\n    patrolBoatHuman,\r\n  );\r\n\r\n  (0,_components_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.renderPlayerBoards)(_components_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.humanPlayer, _components_dom_js__WEBPACK_IMPORTED_MODULE_2__.humanGameBoard);\r\n});\r\n\n\n//# sourceURL=webpack://template_webpack_jest/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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