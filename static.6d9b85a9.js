(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://slabadena.github.io/portfolio/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Head = __webpack_require__(31);

var _Head2 = _interopRequireDefault(_Head);

var _Header = __webpack_require__(33);

var _Header2 = _interopRequireDefault(_Header);

var _Main = __webpack_require__(35);

var _Main2 = _interopRequireDefault(_Main);

var _Footer = __webpack_require__(36);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Layout component
 * @param {Object}
 * @returns {JSX}
 */
var Layout = function Layout(_ref) {
    var title = _ref.title,
        metaDescription = _ref.metaDescription,
        metaKeywords = _ref.metaKeywords,
        children = _ref.children;
    return _react2.default.createElement(
        'div',
        { className: 'Layout' },
        _react2.default.createElement(_Head2.default, {
            title: title,
            metaDescription: metaDescription,
            metaKeywords: metaKeywords }),
        _react2.default.createElement(
            'div',
            { className: 'Layout__header' },
            _react2.default.createElement(_Header2.default, null)
        ),
        _react2.default.createElement(
            'div',
            { className: 'Layout__main' },
            _react2.default.createElement(
                _Main2.default,
                null,
                children
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'Layout__footer' },
            _react2.default.createElement(_Footer2.default, null)
        )
    );
};

Layout.propTypes = {
    title: _propTypes2.default.string,
    metaDescription: _propTypes2.default.string,
    metaKeywords: _propTypes2.default.string,
    children: _propTypes2.default.node
};

Layout.defaultProps = {
    title: 'Alena Salanovich - portfolio',
    metaDescription: 'Alena Salanovich - portfolio',
    metaKeywords: 'Alena Salanovich - portfolio'
};

exports.default = Layout;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Container component
 * @param {Object}
 * @returns {JSX}
 */
var Container = function Container(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'section',
        { className: 'Container' },
        _react2.default.createElement(
            'div',
            { className: 'Container__wrapper' },
            children
        )
    );
};

Container.propTypes = {
    children: _propTypes2.default.node
};

exports.default = Container;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(39);

var _classnames2 = _interopRequireDefault(_classnames);

var _Spinner = __webpack_require__(40);

var _Spinner2 = _interopRequireDefault(_Spinner);

__webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Picture component
 * @param {Object}
 * @returns {JSX}
 */
var Picture = function Picture(_ref) {
    var src = _ref.src,
        alt = _ref.alt,
        width = _ref.width,
        height = _ref.height,
        lazyload = _ref.lazyload,
        spinner = _ref.spinner;

    var pictureClass = (0, _classnames2.default)({
        lazyload: lazyload
    });

    return _react2.default.createElement(
        'div',
        { className: 'Picture' },
        spinner && _react2.default.createElement(
            'div',
            { className: 'Picture__spinner' },
            _react2.default.createElement(_Spinner2.default, null)
        ),
        _react2.default.createElement(
            'div',
            { className: 'Picture__image' },
            _react2.default.createElement('img', {
                'data-src': src,
                alt: alt,
                width: width,
                height: height,
                className: pictureClass })
        )
    );
};

Picture.propTypes = {
    src: _propTypes2.default.string,
    alt: _propTypes2.default.string,
    width: _propTypes2.default.string,
    height: _propTypes2.default.string,
    lazyload: _propTypes2.default.bool,
    spinner: _propTypes2.default.bool
};

Picture.defaultProps = {
    lazyload: true,
    spinner: true
};

exports.default = Picture;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Layout = __webpack_require__(3);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Home component
 * @returns {JSX}
 */
var Home = function Home() {
    return _react2.default.createElement(
        _Layout2.default,
        null,
        _react2.default.createElement(
            'div',
            { style: { padding: '50px' } },
            _react2.default.createElement(
                'h1',
                null,
                'Alena Salanovich - portfolio'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
                'nav',
                null,
                _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactStatic.Link,
                            { exact: true, to: '/' },
                            'Home'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactStatic.Link,
                            { to: '/dms' },
                            'DMS'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactStatic.Link,
                            { to: '/loyal-north' },
                            'Loyal North'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactStatic.Link,
                            { to: '/yandex-bus' },
                            'Yandex.Bus'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactStatic.Link,
                            { to: '/file-shark' },
                            'File.Shark'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactStatic.Link,
                            { to: '/dms-account' },
                            'DMS Account'
                        )
                    )
                )
            )
        )
    );
};

exports.default = (0, _reactStatic.withSiteData)(Home);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Layout = __webpack_require__(3);

var _Layout2 = _interopRequireDefault(_Layout);

var _Container = __webpack_require__(5);

var _Container2 = _interopRequireDefault(_Container);

var _Picture = __webpack_require__(6);

var _Picture2 = _interopRequireDefault(_Picture);

var _visDmsIntro = __webpack_require__(43);

var _visDmsIntro2 = _interopRequireDefault(_visDmsIntro);

var _visDmsTask = __webpack_require__(44);

var _visDmsTask2 = _interopRequireDefault(_visDmsTask);

var _visDmsLogin = __webpack_require__(45);

var _visDmsLogin2 = _interopRequireDefault(_visDmsLogin);

var _visDmsChangePassword = __webpack_require__(46);

var _visDmsChangePassword2 = _interopRequireDefault(_visDmsChangePassword);

var _visDmsMain = __webpack_require__(47);

var _visDmsMain2 = _interopRequireDefault(_visDmsMain);

var _visDmsDoctors = __webpack_require__(48);

var _visDmsDoctors2 = _interopRequireDefault(_visDmsDoctors);

var _visDmsPreloader = __webpack_require__(49);

var _visDmsPreloader2 = _interopRequireDefault(_visDmsPreloader);

var _visDmsDoctorProfile = __webpack_require__(50);

var _visDmsDoctorProfile2 = _interopRequireDefault(_visDmsDoctorProfile);

var _visDmsReviews = __webpack_require__(51);

var _visDmsReviews2 = _interopRequireDefault(_visDmsReviews);

var _visDmsInfo = __webpack_require__(52);

var _visDmsInfo2 = _interopRequireDefault(_visDmsInfo);

var _visDmsSurveys = __webpack_require__(53);

var _visDmsSurveys2 = _interopRequireDefault(_visDmsSurveys);

var _visDmsSurveyInformation = __webpack_require__(54);

var _visDmsSurveyInformation2 = _interopRequireDefault(_visDmsSurveyInformation);

var _visDmsHistory = __webpack_require__(55);

var _visDmsHistory2 = _interopRequireDefault(_visDmsHistory);

var _visDmsOther = __webpack_require__(56);

var _visDmsOther2 = _interopRequireDefault(_visDmsOther);

var _visDmsColor = __webpack_require__(57);

var _visDmsColor2 = _interopRequireDefault(_visDmsColor);

var _visDmsIcons = __webpack_require__(58);

var _visDmsIcons2 = _interopRequireDefault(_visDmsIcons);

var _visDmsThank = __webpack_require__(59);

var _visDmsThank2 = _interopRequireDefault(_visDmsThank);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders CaseDMS component
 * @returns {JSX}
 */
var CaseDMS = function CaseDMS() {
    return _react2.default.createElement(
        _Layout2.default,
        {
            title: 'Alena Salanovich - DMS',
            metaDescription: 'Alena Salanovich - DMS',
            metaKeywords: 'Alena Salanovich - DMS' },
        _react2.default.createElement(
            _Container2.default,
            null,
            _react2.default.createElement(_Picture2.default, { src: _visDmsIntro2.default, alt: 'Intro', spinner: false }),
            _react2.default.createElement(_Picture2.default, { src: _visDmsTask2.default, alt: 'Task' }),
            _react2.default.createElement(_Picture2.default, { src: _visDmsLogin2.default, alt: 'Login' }),
            _react2.default.createElement(_Picture2.default, { src: _visDmsChangePassword2.default, alt: 'Change password' }),
            _react2.default.createElement(_Picture2.default, { src: _visDmsMain2.default, alt: 'Main screen' }),
            _react2.default.createElement(_Picture2.default, { src: _visDmsDoctors2.default, alt: 'Doctors' }),
            _react2.default.createElement(_Picture2.default, { src: _visDmsPreloader2.default, alt: 'Preloader' }),
            _react2.default.createElement(_Picture2.default, { src: _visDmsDoctorProfile2.default, alt: 'Doctor profile' }),
            _react2.default.createElement(_Picture2.default, { src: _visDmsReviews2.default, alt: 'Reviews' }),
            _react2.default.createElement(_Picture2.default, { src: _visDmsInfo2.default, alt: 'Info' }),
            _react2.default.createElement(_Picture2.default, { src: _visDmsSurveys2.default, alt: 'Surveys' }),
            _react2.default.createElement(_Picture2.default, { src: _visDmsSurveyInformation2.default, alt: 'Survey information' }),
            _react2.default.createElement(_Picture2.default, { src: _visDmsHistory2.default, alt: 'History of visits' }),
            _react2.default.createElement(_Picture2.default, { src: _visDmsOther2.default, alt: 'Other screens' }),
            _react2.default.createElement(_Picture2.default, { src: _visDmsColor2.default, alt: 'Color scheme' }),
            _react2.default.createElement(_Picture2.default, { src: _visDmsIcons2.default, alt: 'Icons' }),
            _react2.default.createElement(_Picture2.default, { src: _visDmsThank2.default, alt: 'Thank you!' })
        )
    );
};

exports.default = (0, _reactStatic.withSiteData)(CaseDMS);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Layout = __webpack_require__(3);

var _Layout2 = _interopRequireDefault(_Layout);

var _Container = __webpack_require__(5);

var _Container2 = _interopRequireDefault(_Container);

var _Picture = __webpack_require__(6);

var _Picture2 = _interopRequireDefault(_Picture);

var _visFushionIntro = __webpack_require__(60);

var _visFushionIntro2 = _interopRequireDefault(_visFushionIntro);

var _visFushionMain = __webpack_require__(61);

var _visFushionMain2 = _interopRequireDefault(_visFushionMain);

var _visFushionLanding = __webpack_require__(62);

var _visFushionLanding2 = _interopRequireDefault(_visFushionLanding);

var _visFushionIcon = __webpack_require__(63);

var _visFushionIcon2 = _interopRequireDefault(_visFushionIcon);

var _visFushionSteps = __webpack_require__(64);

var _visFushionSteps2 = _interopRequireDefault(_visFushionSteps);

var _visFushionNavigation = __webpack_require__(65);

var _visFushionNavigation2 = _interopRequireDefault(_visFushionNavigation);

var _visFushionSurveys = __webpack_require__(66);

var _visFushionSurveys2 = _interopRequireDefault(_visFushionSurveys);

var _visFushionRegistrations = __webpack_require__(67);

var _visFushionRegistrations2 = _interopRequireDefault(_visFushionRegistrations);

var _visFushionGuideline = __webpack_require__(68);

var _visFushionGuideline2 = _interopRequireDefault(_visFushionGuideline);

var _visFushionOutro = __webpack_require__(69);

var _visFushionOutro2 = _interopRequireDefault(_visFushionOutro);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders CaseLoyalNorth component
 * @returns {JSX}
 */
var CaseLoyalNorth = function CaseLoyalNorth() {
    return _react2.default.createElement(
        _Layout2.default,
        {
            title: 'Alena Salanovich - Loyal North',
            metaDescription: 'Alena Salanovich - Loyal North',
            metaKeywords: 'Alena Salanovich - Loyal North' },
        _react2.default.createElement(
            _Container2.default,
            null,
            _react2.default.createElement(_Picture2.default, { src: _visFushionIntro2.default, alt: 'Intro', spinner: false }),
            _react2.default.createElement(_Picture2.default, { src: _visFushionMain2.default, alt: 'Home page' }),
            _react2.default.createElement(_Picture2.default, { src: _visFushionLanding2.default, alt: 'Landing page' }),
            _react2.default.createElement(_Picture2.default, { src: _visFushionIcon2.default, alt: 'Icons' }),
            _react2.default.createElement(_Picture2.default, { src: _visFushionSteps2.default, alt: 'Working with consultant' }),
            _react2.default.createElement(_Picture2.default, { src: _visFushionNavigation2.default, alt: 'Navigation' }),
            _react2.default.createElement(_Picture2.default, { src: _visFushionSurveys2.default, alt: 'Surveys' }),
            _react2.default.createElement(_Picture2.default, { src: _visFushionRegistrations2.default, alt: 'Registration' }),
            _react2.default.createElement(_Picture2.default, { src: _visFushionGuideline2.default, alt: 'Guideline' }),
            _react2.default.createElement(_Picture2.default, { src: _visFushionOutro2.default, alt: 'Thank you!' })
        )
    );
};

exports.default = (0, _reactStatic.withSiteData)(CaseLoyalNorth);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Layout = __webpack_require__(3);

var _Layout2 = _interopRequireDefault(_Layout);

var _Container = __webpack_require__(5);

var _Container2 = _interopRequireDefault(_Container);

var _Picture = __webpack_require__(6);

var _Picture2 = _interopRequireDefault(_Picture);

var _visYandexIntro = __webpack_require__(70);

var _visYandexIntro2 = _interopRequireDefault(_visYandexIntro);

var _visYandexSearch = __webpack_require__(71);

var _visYandexSearch2 = _interopRequireDefault(_visYandexSearch);

var _visYandexBestSuggestions = __webpack_require__(72);

var _visYandexBestSuggestions2 = _interopRequireDefault(_visYandexBestSuggestions);

var _visYandexMenu = __webpack_require__(73);

var _visYandexMenu2 = _interopRequireDefault(_visYandexMenu);

var _visYandexTask = __webpack_require__(74);

var _visYandexTask2 = _interopRequireDefault(_visYandexTask);

var _visYandexInsurance = __webpack_require__(75);

var _visYandexInsurance2 = _interopRequireDefault(_visYandexInsurance);

var _visYandexFavorites = __webpack_require__(76);

var _visYandexFavorites2 = _interopRequireDefault(_visYandexFavorites);

var _visYandexDuplication = __webpack_require__(77);

var _visYandexDuplication2 = _interopRequireDefault(_visYandexDuplication);

var _visYandexPurchase = __webpack_require__(78);

var _visYandexPurchase2 = _interopRequireDefault(_visYandexPurchase);

var _visYandexProblem = __webpack_require__(79);

var _visYandexProblem2 = _interopRequireDefault(_visYandexProblem);

var _visYandexSolutions = __webpack_require__(80);

var _visYandexSolutions2 = _interopRequireDefault(_visYandexSolutions);

var _visYandexThank = __webpack_require__(81);

var _visYandexThank2 = _interopRequireDefault(_visYandexThank);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders CaseYandexBus component
 * @returns {JSX}
 */
var CaseYandexBus = function CaseYandexBus() {
    return _react2.default.createElement(
        _Layout2.default,
        {
            title: 'Alena Salanovich - Yandex.Bus',
            metaDescription: 'Alena Salanovich - Yandex.Bus',
            metaKeywords: 'Alena Salanovich - Yandex.Bus' },
        _react2.default.createElement(
            _Container2.default,
            null,
            _react2.default.createElement(_Picture2.default, { src: _visYandexIntro2.default, alt: 'Intro', spinner: false }),
            _react2.default.createElement(_Picture2.default, { src: _visYandexSearch2.default, alt: 'Search' }),
            _react2.default.createElement(_Picture2.default, { src: _visYandexBestSuggestions2.default, alt: 'Best suggestions' }),
            _react2.default.createElement(_Picture2.default, { src: _visYandexMenu2.default, alt: 'Menu' }),
            _react2.default.createElement(_Picture2.default, { src: _visYandexTask2.default, alt: 'Task 2' }),
            _react2.default.createElement(_Picture2.default, { src: _visYandexInsurance2.default, alt: 'Insurance' }),
            _react2.default.createElement(_Picture2.default, { src: _visYandexFavorites2.default, alt: 'Favorites' }),
            _react2.default.createElement(_Picture2.default, { src: _visYandexDuplication2.default, alt: 'Duplication' }),
            _react2.default.createElement(_Picture2.default, { src: _visYandexPurchase2.default, alt: 'Purchase' }),
            _react2.default.createElement(_Picture2.default, { src: _visYandexProblem2.default, alt: 'Problems 3-4' }),
            _react2.default.createElement(_Picture2.default, { src: _visYandexSolutions2.default, alt: 'Solutions' }),
            _react2.default.createElement(_Picture2.default, { src: _visYandexThank2.default, alt: 'Thank you!' })
        )
    );
};

exports.default = (0, _reactStatic.withSiteData)(CaseYandexBus);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Layout = __webpack_require__(3);

var _Layout2 = _interopRequireDefault(_Layout);

var _Container = __webpack_require__(5);

var _Container2 = _interopRequireDefault(_Container);

var _Picture = __webpack_require__(6);

var _Picture2 = _interopRequireDefault(_Picture);

var _visSharkIntro = __webpack_require__(82);

var _visSharkIntro2 = _interopRequireDefault(_visSharkIntro);

var _visSharkAdding = __webpack_require__(83);

var _visSharkAdding2 = _interopRequireDefault(_visSharkAdding);

var _visSharkData = __webpack_require__(84);

var _visSharkData2 = _interopRequireDefault(_visSharkData);

var _visSharkOther = __webpack_require__(85);

var _visSharkOther2 = _interopRequireDefault(_visSharkOther);

var _visSharkLanding = __webpack_require__(86);

var _visSharkLanding2 = _interopRequireDefault(_visSharkLanding);

var _visSharkPrice = __webpack_require__(87);

var _visSharkPrice2 = _interopRequireDefault(_visSharkPrice);

var _visSharkPrice3 = __webpack_require__(88);

var _visSharkPrice4 = _interopRequireDefault(_visSharkPrice3);

var _visSharkLogo = __webpack_require__(89);

var _visSharkLogo2 = _interopRequireDefault(_visSharkLogo);

var _visSharkContact = __webpack_require__(90);

var _visSharkContact2 = _interopRequireDefault(_visSharkContact);

var _visSharkDocumentation = __webpack_require__(91);

var _visSharkDocumentation2 = _interopRequireDefault(_visSharkDocumentation);

var _visSharkThank = __webpack_require__(92);

var _visSharkThank2 = _interopRequireDefault(_visSharkThank);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders CaseFileShark component
 * @returns {JSX}
 */
var CaseFileShark = function CaseFileShark() {
    return _react2.default.createElement(
        _Layout2.default,
        {
            title: 'Alena Salanovich - File.Shark',
            metaDescription: 'Alena Salanovich - File.Shark',
            metaKeywords: 'Alena Salanovich - File.Shark' },
        _react2.default.createElement(
            _Container2.default,
            null,
            _react2.default.createElement(_Picture2.default, { src: _visSharkIntro2.default, alt: 'Intro', spinner: false }),
            _react2.default.createElement(_Picture2.default, { src: _visSharkAdding2.default, alt: 'Adding a file' }),
            _react2.default.createElement(_Picture2.default, { src: _visSharkData2.default, alt: 'Data editing' }),
            _react2.default.createElement(_Picture2.default, { src: _visSharkOther2.default, alt: 'Other screens' }),
            _react2.default.createElement(_Picture2.default, { src: _visSharkLanding2.default, alt: 'Landing page' }),
            _react2.default.createElement(_Picture2.default, { src: _visSharkPrice2.default, alt: 'Price 1' }),
            _react2.default.createElement(_Picture2.default, { src: _visSharkPrice4.default, alt: 'Price 2' }),
            _react2.default.createElement(_Picture2.default, { src: _visSharkLogo2.default, alt: 'Logo' }),
            _react2.default.createElement(_Picture2.default, { src: _visSharkContact2.default, alt: 'Contact' }),
            _react2.default.createElement(_Picture2.default, { src: _visSharkDocumentation2.default, alt: 'Documentation' }),
            _react2.default.createElement(_Picture2.default, { src: _visSharkThank2.default, alt: 'Thank you!' })
        )
    );
};

exports.default = (0, _reactStatic.withSiteData)(CaseFileShark);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Layout = __webpack_require__(3);

var _Layout2 = _interopRequireDefault(_Layout);

var _Container = __webpack_require__(5);

var _Container2 = _interopRequireDefault(_Container);

var _Picture = __webpack_require__(6);

var _Picture2 = _interopRequireDefault(_Picture);

var _visDms_accIntro = __webpack_require__(93);

var _visDms_accIntro2 = _interopRequireDefault(_visDms_accIntro);

var _visDms_accMain = __webpack_require__(94);

var _visDms_accMain2 = _interopRequireDefault(_visDms_accMain);

var _visDms_accLogin = __webpack_require__(95);

var _visDms_accLogin2 = _interopRequireDefault(_visDms_accLogin);

var _visDms_accAdd = __webpack_require__(96);

var _visDms_accAdd2 = _interopRequireDefault(_visDms_accAdd);

var _visDms_accInformation = __webpack_require__(97);

var _visDms_accInformation2 = _interopRequireDefault(_visDms_accInformation);

var _visDms_accInformation3 = __webpack_require__(98);

var _visDms_accInformation4 = _interopRequireDefault(_visDms_accInformation3);

var _visDms_accErrors = __webpack_require__(99);

var _visDms_accErrors2 = _interopRequireDefault(_visDms_accErrors);

var _visDms_accThank = __webpack_require__(100);

var _visDms_accThank2 = _interopRequireDefault(_visDms_accThank);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders CaseDMSAccount component
 * @returns {JSX}
 */
var CaseDMSAccount = function CaseDMSAccount() {
    return _react2.default.createElement(
        _Layout2.default,
        {
            title: 'Alena Salanovich - DMS Account',
            metaDescription: 'Alena Salanovich - DMS Account',
            metaKeywords: 'Alena Salanovich - DMS Account' },
        _react2.default.createElement(
            _Container2.default,
            null,
            _react2.default.createElement(_Picture2.default, { src: _visDms_accIntro2.default, alt: 'Intro', spinner: false }),
            _react2.default.createElement(_Picture2.default, { src: _visDms_accMain2.default, alt: 'Main' }),
            _react2.default.createElement(_Picture2.default, { src: _visDms_accLogin2.default, alt: 'Login' }),
            _react2.default.createElement(_Picture2.default, { src: _visDms_accAdd2.default, alt: 'Add doctor' }),
            _react2.default.createElement(_Picture2.default, { src: _visDms_accInformation2.default, alt: 'Information' }),
            _react2.default.createElement(_Picture2.default, { src: _visDms_accInformation4.default, alt: 'Information' }),
            _react2.default.createElement(_Picture2.default, { src: _visDms_accErrors2.default, alt: 'Errors' }),
            _react2.default.createElement(_Picture2.default, { src: _visDms_accThank2.default, alt: 'Thank you!' })
        )
    );
};

exports.default = (0, _reactStatic.withSiteData)(CaseDMSAccount);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(17);

__webpack_require__(18);

__webpack_require__(19);

var _Root = __webpack_require__(20);

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _Root2.default;

// Render your app

if (typeof document !== 'undefined') {
    var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;

    var render = function render(Comp) {
        renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
    };

    // Render!
    render(_Root2.default);
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("core-js/es6/object");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("core-js/es6/string");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("core-js/fn/promise");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHotLoader = __webpack_require__(21);

var _reactStaticRoutes = __webpack_require__(22);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

__webpack_require__(101);

__webpack_require__(138);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined') {
    /* eslint-disable global-require */
    __webpack_require__(139);
    __webpack_require__(140);
    /* eslint-enable global-require */
}

var App = function App() {
    return _react2.default.createElement(
        _reactStatic.Router,
        null,
        _react2.default.createElement(_reactStaticRoutes2.default, null)
    );
};

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(23);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(24);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(25);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(26);

var _reactUniversalComponent = __webpack_require__(27);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Home',
  file: '/Users/dmitrijmalofeev/Documents/Work/geekon/helen-portfolio/html/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 9)), (0, _importCss3.default)('src/pages/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(9);
  },
  chunkName: function chunkName() {
    return 'src/pages/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/CaseDMS',
  file: '/Users/dmitrijmalofeev/Documents/Work/geekon/helen-portfolio/html/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 10)), (0, _importCss3.default)('src/pages/CaseDMS', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/CaseDMS');
  },
  resolve: function resolve() {
    return /*require.resolve*/(10);
  },
  chunkName: function chunkName() {
    return 'src/pages/CaseDMS';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/CaseLoyalNorth',
  file: '/Users/dmitrijmalofeev/Documents/Work/geekon/helen-portfolio/html/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 11)), (0, _importCss3.default)('src/pages/CaseLoyalNorth', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/CaseLoyalNorth');
  },
  resolve: function resolve() {
    return /*require.resolve*/(11);
  },
  chunkName: function chunkName() {
    return 'src/pages/CaseLoyalNorth';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/CaseYandexBus',
  file: '/Users/dmitrijmalofeev/Documents/Work/geekon/helen-portfolio/html/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 12)), (0, _importCss3.default)('src/pages/CaseYandexBus', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/CaseYandexBus');
  },
  resolve: function resolve() {
    return /*require.resolve*/(12);
  },
  chunkName: function chunkName() {
    return 'src/pages/CaseYandexBus';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/CaseFileShark',
  file: '/Users/dmitrijmalofeev/Documents/Work/geekon/helen-portfolio/html/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 13)), (0, _importCss3.default)('src/pages/CaseFileShark', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/CaseFileShark');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return 'src/pages/CaseFileShark';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/CaseDMSAccount',
  file: '/Users/dmitrijmalofeev/Documents/Work/geekon/helen-portfolio/html/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 14)), (0, _importCss3.default)('src/pages/CaseDMSAccount', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/CaseDMSAccount');
  },
  resolve: function resolve() {
    return /*require.resolve*/(14);
  },
  chunkName: function chunkName() {
    return 'src/pages/CaseDMSAccount';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': undefined

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(28);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(29);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(30);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(8);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactStatic = __webpack_require__(1);

var _favicon32x = __webpack_require__(32);

var _favicon32x2 = _interopRequireDefault(_favicon32x);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders HeadContainer component
 * @param {Object}
 * @returns {JSX}
 */
var HeadContainer = function HeadContainer(_ref) {
    var title = _ref.title,
        metaDescription = _ref.metaDescription,
        metaKeywords = _ref.metaKeywords;
    return _react2.default.createElement(
        _reactStatic.Head,
        null,
        _react2.default.createElement('meta', { name: 'Description', content: metaDescription }),
        _react2.default.createElement('meta', { name: 'Keywords', content: metaKeywords }),
        _react2.default.createElement(
            'title',
            null,
            title
        ),
        _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: _favicon32x2.default })
    );
};

HeadContainer.propTypes = {
    title: _propTypes2.default.string,
    metaDescription: _propTypes2.default.string,
    metaKeywords: _propTypes2.default.string
};

exports.default = HeadContainer;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAu5JREFUWAm9l01IVFEUx39vmsYwP/ugorISK0ozgkJqE0gGgRFURERUC0GEVtUmMBhoGy2CcGNB0SKICiKyWgh9rBJcZGURqGSShSmaEJo6nfPuvJ7jaL6rM3PgvXfPufee///dj3PvcZgipy/FShmjBof9MSgiRs6UJnaqw7ADX8TPc8I03rrsvJ/sQOqMRKOxSOcoV0Wri8UIefZUfh2HCfHXsCHCuWjUGVXfLgEF7xihSfRKNWZAmouzOKAk3D+N/3mmwPX/KuOYOO6cj/M2XcM+02i607GA8pAuuEyDKykXU7BDutpnYpl2u2CH3K2WdqTpARQ7PJd9HlkIO0th9QrIikDPd+jqgU55rERiTNiqgzTevB5qj8HSguSeLe/g9iMYGk6um8liFXByF8PZE4ngv0d81zu2wJJ8Xw9SshqB3dshLx6YP3bAjQfwox8K8+DwPujtM1MRBNhrY0VA59yTp68NuOoDQ4aMV2fztZqC/kHfdck6vzyfkhWB1g8wPm7gqvfCyWrIz50PPHanXncv3HkMf8YMaNUeuHJBiByE7EVzI+KcuihB0VJWLYeaI1BS5Hcc/GXIvWnzbUFKcyLgOd5VBofkDF270rPAzYfwosXXZytZrYGpzjTw1F+Du3qTiMvRKq8U7DsvAh5E0yu5c30zmsaJAouFaUVAF1p9LZSVeNDmq2eDFwEn5NI1OTomtkzWrAJR3XHYKPv//BnQ4f/U5Z7rVGyDnGzjvOMrjLi3vWSw6SxWBNol/JZvkr0r41ZRbp7JTvXPG+9PtsxetiLw5CV0y1zr/i9eA3o4qeiwt7bDvWfmPDDWYO+w3IiGbe4EbZ9BH5VlhXIfkPnv/elHSFMT8C3YYU0aJBJtDdgloVnfQIJqrSh2yM1YrLumqINkSyFNl+IZS4q8BnPjYgp2KJ6rNQTrltJWDYrtBiLN1cR1c0rd/99ZcxzTHMeao2muJsNyPZ3Tob4Vw8sLleO/7NgjnOn0/C9z9tCUVIzAkwAAAABJRU5ErkJggg=="

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Header component
 * @returns {JSX}
 */
var Header = function Header() {
  return _react2.default.createElement('header', { className: 'Header' });
};

exports.default = Header;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Main component
 * @param {Object}
 * @returns {JSX}
 */
var Main = function Main(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'main',
        { className: 'Main' },
        children
    );
};

Main.propTypes = {
    children: _propTypes2.default.node
};

exports.default = Main;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Footer component
 */
var Footer = function Footer() {
  return _react2.default.createElement('footer', { className: 'Footer' });
};

exports.default = Footer;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".Container{position:relative;background-color:#000;overflow:hidden}.Container__wrapper{position:relative;width:1920px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.Container__wrapper img{margin-bottom:0}", ""]);

// exports


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders Spinner component
 * @returns {JSX}
 */
var Spinner = function Spinner() {
    return _react2.default.createElement(
        'div',
        { className: 'Spinner' },
        _react2.default.createElement('div', { className: 'double-bounce1' }),
        _react2.default.createElement('div', { className: 'double-bounce2' })
    );
};

exports.default = Spinner;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".Spinner{position:relative;margin:0;width:40px;height:40px}.Spinner .double-bounce1,.Spinner .double-bounce2{width:100%;height:100%;border-radius:50%;background-color:#fff;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:a 2s infinite ease-in-out;animation:a 2s infinite ease-in-out}.Spinner .double-bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes a{0%,to{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes a{0%,to{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}", ""]);

// exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".Picture{position:relative}.Picture__spinner{position:absolute;display:block;width:40px;height:40px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.Picture__image img{min-height:600px}.Picture__image img.lazyloaded{min-height:1px}", ""]);

// exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms-intro.a2fe899c.jpg";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms-task.24b39ed4.jpg";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms-login.f1a01904.jpg";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms-change-password.71e630c7.jpg";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms-main.479931aa.jpg";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms-doctors.2da7473f.jpg";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms-preloader.f7faf615.jpg";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms-doctor-profile.e19ef790.jpg";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms-reviews.8bf32b26.jpg";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms-info.4cd5028b.jpg";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms-surveys.6a717f5f.jpg";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms-survey-information.2d6b06ea.jpg";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms-history.1bd3531f.jpg";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms-other.cf5c0be2.jpg";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms-color.92538c06.jpg";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms-icons.95253d7b.jpg";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms-thank.ffd79661.jpg";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-fushion-intro.33149b74.jpg";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-fushion-main.a753b10d.jpg";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-fushion-landing.eb437e72.jpg";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-fushion-icon.aa38a2d9.jpg";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-fushion-steps.533d58ad.jpg";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-fushion-navigation.fcc03406.jpg";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-fushion-surveys.44324917.jpg";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-fushion-registrations.8e21d679.jpg";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-fushion-guideline.a36da455.jpg";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-fushion-outro.b3e5147d.jpg";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-yandex-intro.d57e095f.jpg";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-yandex-search.07765a1f.jpg";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-yandex-best-suggestions.5345be15.jpg";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-yandex-menu.62cb372a.jpg";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-yandex-task-2.20c095ba.jpg";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-yandex-insurance.b7027197.jpg";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-yandex-favorites.f8747513.jpg";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-yandex-duplication.3789652f.jpg";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-yandex-purchase.db5fcac9.jpg";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-yandex-problem-3-4.e7f954c3.jpg";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-yandex-solutions.edd33b05.jpg";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-yandex-thank.64c53eac.jpg";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-shark-intro.73d72ed0.jpg";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-shark-adding.57809803.jpg";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-shark-data.9f1b2780.jpg";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-shark-other.08fc530d.jpg";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-shark-landing.9f20182c.jpg";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-shark-price1.35fcadc5.jpg";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-shark-price2.e0096289.jpg";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-shark-logo.3a41f551.jpg";

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-shark-contact.5faa297b.jpg";

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-shark-documentation.fa6ca3d0.jpg";

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-shark-thank.8aa741aa.jpg";

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms_acc-intro.88dffecf.jpg";

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms_acc-main.f9b86e5d.jpg";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms_acc-login.3ea9b44a.jpg";

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms_acc-add.54b3954f.jpg";

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms_acc-information1.4478decc.jpg";

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms_acc-information2.8c837cef.jpg";

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms_acc-errors.a5b59806.jpg";

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vis-dms_acc-thank.54ed8343.jpg";

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(102);

__webpack_require__(108);

__webpack_require__(114);

__webpack_require__(120);

__webpack_require__(126);

__webpack_require__(132);

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(103);

__webpack_require__(104);

__webpack_require__(105);

__webpack_require__(106);

__webpack_require__(107);

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/bold/bold.eot";

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/bold/bold.svg";

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/bold/bold.ttf";

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/bold/bold.woff";

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/bold/bold.woff2";

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(109);

__webpack_require__(110);

__webpack_require__(111);

__webpack_require__(112);

__webpack_require__(113);

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/italic/italic.eot";

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/italic/italic.svg";

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/italic/italic.ttf";

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/italic/italic.woff";

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/italic/italic.woff2";

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(115);

__webpack_require__(116);

__webpack_require__(117);

__webpack_require__(118);

__webpack_require__(119);

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/light/light.eot";

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/light/light.svg";

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/light/light.ttf";

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/light/light.woff";

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/light/light.woff2";

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(121);

__webpack_require__(122);

__webpack_require__(123);

__webpack_require__(124);

__webpack_require__(125);

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/medium/medium.eot";

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/medium/medium.svg";

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/medium/medium.ttf";

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/medium/medium.woff";

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/medium/medium.woff2";

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(127);

__webpack_require__(128);

__webpack_require__(129);

__webpack_require__(130);

__webpack_require__(131);

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/regular/regular.eot";

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/regular/regular.svg";

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/regular/regular.ttf";

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/regular/regular.woff";

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/regular/regular.woff2";

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(133);

__webpack_require__(134);

__webpack_require__(135);

__webpack_require__(136);

__webpack_require__(137);

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/semibold/semibold.eot";

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/semibold/semibold.svg";

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/semibold/semibold.ttf";

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/semibold/semibold.woff";

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/montserrat/semibold/semibold.woff2";

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "*,:after,:before{box-sizing:border-box}html{position:relative;min-width:320px}body,html{height:100%}body{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;background:#fff}img{max-width:100%;height:auto}button{margin:0;padding:0;background:none;border:0;text-decoration:none;line-height:normal;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.lazyload,.lazyloading{opacity:0}.lazyloaded{-webkit-transition:opacity .3s ease;transition:opacity .3s ease;opacity:1}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font:inherit;font-size:100%;vertical-align:baseline}body{font-weight:400;font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.4;color:#333;-webkit-font-smoothing:antialiased}iframe,img,p{margin-bottom:1.3em}iframe,img{position:relative;display:block;max-width:100%;margin-left:auto;margin-right:auto}h1,h2,h3,h4,h5,h6{color:#333}h1{font-family:Helvetica,Arial,sans-serif;font-size:54px;line-height:1.1}@media screen and (max-width:1024px){h1{font-size:44px;line-height:1.2}}@media screen and (max-width:767px){h1{font-size:30px;line-height:1.2}}h2{font-family:Helvetica,Arial,sans-serif;font-size:44px;line-height:1.2}@media screen and (max-width:1024px){h2{font-size:30px;line-height:1.2}}@media screen and (max-width:767px){h2{font-size:25px;line-height:1.2}}h3{font-family:Helvetica,Arial,sans-serif;font-size:20px;line-height:1.2}@media screen and (max-width:767px){h3{font-size:18px;line-height:1.2}}h4{font-family:Helvetica,Arial,sans-serif;font-size:18px;line-height:1.2}@media screen and (max-width:767px){h4{font-size:16px;line-height:1.2}}h5{font-family:Helvetica,Arial,sans-serif;font-size:18px;line-height:1.5}@media screen and (max-width:767px){h5{font-size:15px}}h6{font-size:12px;line-height:1.3}a{color:#333;text-decoration:underline}ol,ul{margin-bottom:1.3em;padding-left:25.2px}ul li{list-style:disc;list-style-position:outside}i,strong{font-family:Helvetica,Arial,sans-serif}", ""]);

// exports


/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = require("lazysizes/plugins/unveilhooks/ls.unveilhooks");

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = require("lazysizes");

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.6d9b85a9.js.map