/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/boxicons/dist/boxicons.js":
/*!************************************************!*\
  !*** ./node_modules/boxicons/dist/boxicons.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e,n,r,o){if("customElements"in n)o();else{if(n.AWAITING_WEB_COMPONENTS_POLYFILL)return void n.AWAITING_WEB_COMPONENTS_POLYFILL.then(o);var a=n.AWAITING_WEB_COMPONENTS_POLYFILL=f();a.then(o);var i=n.WEB_COMPONENTS_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",s=n.ES6_CORE_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";"Promise"in n?c(i).then((function(){a.isDone=!0,a.exec()})):c(s).then((function(){c(i).then((function(){a.isDone=!0,a.exec()}))}))}function f(){var t=[];return t.isDone=!1,t.exec=function(){t.splice(0).forEach((function(t){t()}))},t.then=function(e){return t.isDone?e():t.push(e),t},t}function c(t){var e=f(),n=r.createElement("script");return n.type="text/javascript",n.readyState?n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(n.onreadystatechange=null,e.isDone=!0,e.exec())}:n.onload=function(){e.isDone=!0,e.exec()},n.src=t,r.getElementsByTagName("head")[0].appendChild(n),n.then=e.then,n}}(0,0,window,document,(function(){var t,e;t=window,e=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,r=t[1]||"",o=t[3];if(!o)return r;if(e&&"function"==typeof btoa){var a=(n=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),i=o.sources.map((function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"}));return[r].concat(i).concat([a]).join("\n")}return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){var r=n(3);t.exports="string"==typeof r?r:r.toString()},function(t,e,n){var r=n(4);t.exports="string"==typeof r?r:r.toString()},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}",""])},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,'.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}',""])},function(t,e,n){"use strict";n.r(e);var r,o,a,i,s=n(1),f=n.n(s),c=n(2),l=n.n(c),m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),d=(r=Object,o=r.getPrototypeOf||function(t){return t.__proto__},a=r.setPrototypeOf||function(t,e){return t.__proto__=e,t},i="object"===("undefined"==typeof Reflect?"undefined":m(Reflect))?Reflect.construct:function(t,e,n){var r,o=[null];return o.push.apply(o,e),r=t.bind.apply(t,o),a(new r,n.prototype)},function(t){var e=o(t);return a(t,a((function(){return i(e,arguments,o(this).constructor)}),e))}),p=window,b={},y=document.createElement("template"),h=function(){return!!p.ShadyCSS};y.innerHTML='\n<style>\n:host {\n  display: inline-block;\n  font-size: initial;\n  box-sizing: border-box;\n  width: 24px;\n  height: 24px;\n}\n:host([size=xs]) {\n    width: 0.8rem;\n    height: 0.8rem;\n}\n:host([size=sm]) {\n    width: 1.55rem;\n    height: 1.55rem;\n}\n:host([size=md]) {\n    width: 2.25rem;\n    height: 2.25rem;\n}\n:host([size=lg]) {\n    width: 3.0rem;\n    height: 3.0rem;\n}\n\n:host([size]:not([size=""]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {\n    width: auto;\n    height: auto;\n}\n:host([pull=left]) #icon {\n    float: left;\n    margin-right: .3em!important;\n}\n:host([pull=right]) #icon {\n    float: right;\n    margin-left: .3em!important;\n}\n:host([border=square]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: .25em;\n}\n:host([border=circle]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: 50%;\n}\n#icon,\nsvg {\n  width: 100%;\n  height: 100%;\n}\n#icon {\n    box-sizing: border-box;\n} \n'+f.a+"\n"+l.a+'\n</style>\n<div id="icon"></div>';var g=d(function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.$ui=t.attachShadow({mode:"open"}),t.$ui.appendChild(t.ownerDocument.importNode(y.content,!0)),h()&&p.ShadyCSS.styleElement(t),t._state={$iconHolder:t.$ui.getElementById("icon"),type:t.getAttribute("type")},t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,HTMLElement),u(e,null,[{key:"getIconSvg",value:function(t,e){var n=this.cdnUrl+"/regular/bx-"+t+".svg";return"solid"===e?n=this.cdnUrl+"/solid/bxs-"+t+".svg":"logo"===e&&(n=this.cdnUrl+"/logos/bxl-"+t+".svg"),n&&b[n]?b[n]:(b[n]=new Promise((function(t,e){var r=new XMLHttpRequest;r.addEventListener("load",(function(){this.status<200||this.status>=300?e(new Error(this.status+" "+this.responseText)):t(this.responseText)})),r.onerror=e,r.onabort=e,r.open("GET",n),r.send()})),b[n])}},{key:"define",value:function(t){t=t||this.tagName,h()&&p.ShadyCSS.prepareTemplate(y,t),customElements.define(t,this)}},{key:"cdnUrl",get:function(){return"//unpkg.com/boxicons@2.0.7/svg"}},{key:"tagName",get:function(){return"box-icon"}},{key:"observedAttributes",get:function(){return["type","name","color","size","rotate","flip","animation","border","pull"]}}]),u(e,[{key:"attributeChangedCallback",value:function(t,e,n){var r=this._state.$iconHolder;switch(t){case"type":!function(t,e,n){var r=t._state;r.$iconHolder.textContent="",r.type&&(r.type=null),r.type=!n||"solid"!==n&&"logo"!==n?"regular":n,void 0!==r.currentName&&t.constructor.getIconSvg(r.currentName,r.type).then((function(t){r.type===n&&(r.$iconHolder.innerHTML=t)})).catch((function(t){console.error("Failed to load icon: "+r.currentName+"\n"+t)}))}(this,0,n);break;case"name":!function(t,e,n){var r=t._state;r.currentName=n,r.$iconHolder.textContent="",n&&void 0!==r.type&&t.constructor.getIconSvg(n,r.type).then((function(t){r.currentName===n&&(r.$iconHolder.innerHTML=t)})).catch((function(t){console.error("Failed to load icon: "+n+"\n"+t)}))}(this,0,n);break;case"color":r.style.fill=n||"";break;case"size":!function(t,e,n){var r=t._state;r.size&&(r.$iconHolder.style.width=r.$iconHolder.style.height="",r.size=r.sizeType=null),n&&!/^(xs|sm|md|lg)$/.test(r.size)&&(r.size=n.trim(),r.$iconHolder.style.width=r.$iconHolder.style.height=r.size)}(this,0,n);break;case"rotate":e&&r.classList.remove("bx-rotate-"+e),n&&r.classList.add("bx-rotate-"+n);break;case"flip":e&&r.classList.remove("bx-flip-"+e),n&&r.classList.add("bx-flip-"+n);break;case"animation":e&&r.classList.remove("bx-"+e),n&&r.classList.add("bx-"+n)}}},{key:"connectedCallback",value:function(){h()&&p.ShadyCSS.styleElement(this)}}]),e}());n.d(e,"BoxIconElement",(function(){return g})),e.default=g,g.define()}])}, true?module.exports=e():undefined}));
//# sourceMappingURL=boxicons.js.map

/***/ }),

/***/ "./resources/assets/js/component/alert.js":
/*!************************************************!*\
  !*** ./resources/assets/js/component/alert.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var alerts = document.querySelectorAll('.alert:not(.not-dismissable)');
alerts.forEach(function (alert) {
  setTimeout(function () {
    alert.classList.add('alert--fade-out');
  }, 2500);
});

/***/ }),

/***/ "./resources/assets/js/component/btn-menu.js":
/*!***************************************************!*\
  !*** ./resources/assets/js/component/btn-menu.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var btnsMenu = document.querySelectorAll('.btn-menu');
var showMenuClass = ['opacity-100', 'visible'];
document.addEventListener('click', function (e) {
  for (var i = 0; i < btnsMenu.length; i++) {
    var btn = btnsMenu[i];
    var isClickOutside = !btn.contains(e.target);

    if (isClickOutside) {
      var _btn$nextElementSibli;

      (_btn$nextElementSibli = btn.nextElementSibling.classList).remove.apply(_btn$nextElementSibli, showMenuClass);
    } else {
      var _btn$nextElementSibli2;

      (_btn$nextElementSibli2 = btn.nextElementSibling.classList).add.apply(_btn$nextElementSibli2, showMenuClass);
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/component/btn.js":
/*!**********************************************!*\
  !*** ./resources/assets/js/component/btn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
    * set icon color when btn #btn-back hovered
*/
var btnChangeIconOnHover = document.querySelectorAll('.change-icon-color-on-hover');
btnChangeIconOnHover.forEach(function (btn) {
  var icon = btn.querySelector('box-icon');
  var iconOriginalColor = icon.getAttribute('color');
  btn.addEventListener('mouseover', function () {
    icon.setAttribute('color', btn.dataset.toColor);
  });
  btn.addEventListener('mouseleave', function () {
    icon.setAttribute('color', iconOriginalColor);
  });
});

/***/ }),

/***/ "./resources/assets/js/component/dropdown-menu.js":
/*!********************************************************!*\
  !*** ./resources/assets/js/component/dropdown-menu.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * dropdown menu for sideebar
 */
var dropdownToggler = document.querySelector('.dropdown-toggler');

if (dropdownToggler) {
  var iconToggler = dropdownToggler.querySelector('box-icon');
  var dropdownBox = dropdownToggler.nextElementSibling; // .dropdown-box

  dropdownToggler.addEventListener('click', function (e) {
    e.preventDefault();

    if (dropdownBox.classList.contains('dropdown-box--active')) {
      iconToggler.classList.remove('transform', 'rotate-90');
      dropdownBox.classList.remove('dropdown-box--active');
    } else {
      iconToggler.classList.add('transform', 'rotate-90');
      dropdownBox.classList.add('dropdown-box--active');
    }
  });
}

/***/ }),

/***/ "./resources/assets/js/component/form.js":
/*!***********************************************!*\
  !*** ./resources/assets/js/component/form.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../helper-module */ "./resources/assets/js/helper-module.js");


if (_helper_module__WEBPACK_IMPORTED_MODULE_0__["pageUrl"] === '/login') {
  var removeValidationOnFalseForm = function removeValidationOnFalseForm(falseForm) {
    var falseErrorMessage = falseForm.querySelectorAll('.error-message');
    var falseErrorInput = falseForm.querySelectorAll('.border-red-400');
    Array.from(falseErrorMessage).map(function (error) {
      error.remove();
    });
    Array.from(falseErrorInput).map(function (input) {
      input.value = null;
      input.classList.remove('border-red-400');
    });
  };

  var authPage = document.querySelector('#authPage');
  var formRegister = authPage.querySelector('#form-daftar');
  var formLogin = authPage.querySelector('#form-masuk');
  formRegister.addEventListener('submit', function () {
    localStorage.clear();
    localStorage.setItem('sessionFailed', 'regist');
  });
  formLogin.addEventListener('submit', function () {
    localStorage.clear();
    localStorage.setItem('sessionFailed', 'login');
  });

  if (localStorage.getItem('sessionFailed') === 'regist') {
    removeValidationOnFalseForm(formLogin);
  } else if (localStorage.getItem('sessionFailed') === 'login') {
    removeValidationOnFalseForm(formRegister);
  }
}

var inputFile = document.querySelectorAll('input[type="file"]');
inputFile.forEach(function (input) {
  var initLabelText = input.parentElement.querySelector('.file-name').textContent;
  input.addEventListener('change', function () {
    if (this.value !== '') {
      this.parentElement.querySelector('.file-name').textContent = this.files[0].name;
    } else {
      this.parentElement.querySelector('.file-name').textContent = initLabelText;
    }
  });
});

/***/ }),

/***/ "./resources/assets/js/component/nav.js":
/*!**********************************************!*\
  !*** ./resources/assets/js/component/nav.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../helper-module */ "./resources/assets/js/helper-module.js");

var nav = document.querySelector('nav');
var btnOpenMenu = document.querySelector('.nav__toggle-menu');
var navUl = nav.querySelector('.nav__ul');
var dividerMenu = ['divide-y', 'divide-gray-400']; //ini class buat nambah border ke menu

var elementOnHeaderExceptNav = document.querySelectorAll('header nav + *');

var closeNav = function closeNav() {
  var _navUl$classList;

  nav.classList.remove('nav--open');

  (_navUl$classList = navUl.classList).remove.apply(_navUl$classList, dividerMenu);
};

var openNav = function openNav() {
  var _navUl$classList2;

  nav.classList.add('nav--open');

  (_navUl$classList2 = navUl.classList).add.apply(_navUl$classList2, dividerMenu);
};

var closeAllMenu = function closeAllMenu() {
  closeNav();
  var allChild = document.querySelectorAll('.nav__item-has-child--open');
  allChild.forEach(function (child) {
    child.classList.remove('nav__item-has-child--open');
  });
};

btnOpenMenu.addEventListener('click', function () {
  if (nav.classList.contains('nav--open')) {
    closeNav();
  } else {
    openNav();
  }
});

if (_helper_module__WEBPACK_IMPORTED_MODULE_0__["pageUrl"] === '/') {
  nav.classList.add('bg-gray-800', 'bg-opacity-25');
} else {
  nav.classList.add('lg:border-b', 'border-gray-400');
}

if (elementOnHeaderExceptNav.length > 0) {
  document.querySelector('header nav + *').addEventListener('click', function () {
    closeAllMenu();
  });
}

var btnOpenChildMenu = document.querySelectorAll('.nav__link--open-child');
var classToOpenNavItemHasChild = 'nav__item-has-child--open';
btnOpenChildMenu.forEach(function (openChild) {
  var parentOfBtnOpenChild = openChild.parentNode.classList;
  openChild.addEventListener('click', function (e) {
    e.preventDefault();
    var siblingsChild = _helper_module__WEBPACK_IMPORTED_MODULE_0__["getSiblings"](openChild.parentNode);
    siblingsChild.forEach(function (eachSibling) {
      if (eachSibling.classList.contains(classToOpenNavItemHasChild)) {
        eachSibling.classList.remove(classToOpenNavItemHasChild);
      }
    });

    if (parentOfBtnOpenChild.contains(classToOpenNavItemHasChild)) {
      parentOfBtnOpenChild.remove(classToOpenNavItemHasChild);
    } else {
      parentOfBtnOpenChild.add(classToOpenNavItemHasChild);
    }
  });
});
document.querySelector('main').addEventListener('click', function () {
  closeAllMenu();
});

/***/ }),

/***/ "./resources/assets/js/component/popup.js":
/*!************************************************!*\
  !*** ./resources/assets/js/component/popup.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../helper-module.js */ "./resources/assets/js/helper-module.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var openPopups = document.querySelectorAll('.toggle-popup');

if (openPopups.length > 0) {
  openPopups.forEach(function (btnManageModal) {
    btnManageModal.addEventListener('click', function () {
      _helper_module_js__WEBPACK_IMPORTED_MODULE_0__["openCloseModal"](btnManageModal.dataset.modalId);
    });
  });
}

var deleteAddressBtn = document.querySelectorAll('.btn-delete-address');
var openEditModalBtns = document.querySelectorAll('.btn-edit-address');

if (openEditModalBtns.length > 0) {
  var btnManageModalAddress = [].concat(_toConsumableArray(openEditModalBtns), [document.querySelector('#btn-close-modalEditAddress')]);
  var deleteAddressForm = document.querySelector('#deleteAddressForm');
  deleteAddressBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      deleteAddressForm.querySelector('input[name="id"]').value = btn.parentElement.dataset.useraddressid;
      deleteAddressForm.submit();
    });
  });
  btnManageModalAddress.forEach(function (btn) {
    btn.addEventListener('click', function () {
      _helper_module_js__WEBPACK_IMPORTED_MODULE_0__["openCloseModal"]('#modalEditAddress');
    });
  });
}

/***/ }),

/***/ "./resources/assets/js/component/tab.js":
/*!**********************************************!*\
  !*** ./resources/assets/js/component/tab.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../helper-module.js */ "./resources/assets/js/helper-module.js");

var tabsMenu = document.querySelectorAll('.tab-link');
var pageUrlWithoutProtocol = _helper_module_js__WEBPACK_IMPORTED_MODULE_0__["getUrlWithoutProtocol"](window.location.href);

if (tabsMenu.length > 0) {
  tabsMenu.forEach(function (menu) {
    var tabLinkMenu = _helper_module_js__WEBPACK_IMPORTED_MODULE_0__["getUrlWithoutProtocol"](menu.getAttribute('href'));
    console.log(pageUrlWithoutProtocol);

    if (tabLinkMenu === pageUrlWithoutProtocol) {
      menu.classList.add('text-blue-500', 'bg-gray-100');
      menu.classList.remove('text-gray-600');
    }
  });
}

/***/ }),

/***/ "./resources/assets/js/functions/product.js":
/*!**************************************************!*\
  !*** ./resources/assets/js/functions/product.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-module */ "./resources/assets/js/helper-module.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



if (_helper_module__WEBPACK_IMPORTED_MODULE_0__["pageUrl"].indexOf('/store/product') > -1 || _helper_module__WEBPACK_IMPORTED_MODULE_0__["pageUrl"].indexOf('/store/toko-point') > -1 || _helper_module__WEBPACK_IMPORTED_MODULE_0__["pageUrl"].indexOf('/store/voucher') > -1) {
  var urlQueriesAsArray = window.location.search.slice(1).split('&');
  var httpQueries = urlQueriesAsArray.map(function (p) {
    return p.split('=');
  }).reduce(function (obj, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    var encodingQuery = _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, key, value));

    return encodingQuery;
  }, []);
  var currentUrl = window.location.href.split('?')[0];
  var newUrl;
  document.querySelector('#form-search').addEventListener('submit', function () {
    e.preventDefault();
    var searchInput = document.querySelector("#search-input").value;
    newUrl = currentUrl + "?search=" + searchInput;
    console.log(newUrl);

    for (var _i2 = 0, _Object$entries = Object.entries(httpQueries); _i2 < _Object$entries.length; _i2++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      if (key != 'search') {
        newUrl += "&" + key + "=" + (value !== null && value !== void 0 ? value : '');
      }
    }

    window.location.href = newUrl;
  });
  var selectSortProduct = document.querySelector('#sort-product');
  selectSortProduct.addEventListener('change', function () {
    newUrl = currentUrl + "?sort=" + selectSortProduct.value;

    for (var _i3 = 0, _Object$entries2 = Object.entries(httpQueries); _i3 < _Object$entries2.length; _i3++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
          key = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];

      if (key != 'sort') {
        newUrl += "&" + key + "=" + (value !== null && value !== void 0 ? value : '');
      }
    }

    window.location.href = newUrl;
  });
}

/***/ }),

/***/ "./resources/assets/js/helper-module.js":
/*!**********************************************!*\
  !*** ./resources/assets/js/helper-module.js ***!
  \**********************************************/
/*! exports provided: getSiblings, formattingRupiah, setFormAction, getUrlWithoutProtocol, capitalizeFirstLetter, setAttributes, openCloseModal, getParents, boxiconHoverChangeColor, kebabToSnake, pageUrl, appUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSiblings", function() { return getSiblings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formattingRupiah", function() { return formattingRupiah; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFormAction", function() { return setFormAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlWithoutProtocol", function() { return getUrlWithoutProtocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return capitalizeFirstLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttributes", function() { return setAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCloseModal", function() { return openCloseModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParents", function() { return getParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxiconHoverChangeColor", function() { return boxiconHoverChangeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kebabToSnake", function() { return kebabToSnake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageUrl", function() { return pageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appUrl", function() { return appUrl; });
/*!
 * Get all siblings of an element
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 */
var getSiblings = function getSiblings(elem) {
  return Array.prototype.filter.call(elem.parentNode.children, function (sibling) {
    return sibling !== elem;
  });
};
/*
	formatting currency to rupiah
*/

var formattingRupiah = function formattingRupiah(currency) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(currency).replace(',00', '');
};
/**
 * set form action
 */

var setFormAction = function setFormAction(form, url) {
  document.querySelector(form).action = url;
};
/**
 * get url without protocol
 */

function getUrlWithoutProtocol(urlnya) {
  return urlnya.split('//').pop();
}
/**
 * capitalize first letter each word
 */

var capitalizeFirstLetter = function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
};
/**
 * set multiple attr
 */

var setAttributes = function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
};
/**
 * open / close a modal
 */

function openCloseModal(modalSelector) {
  var _modalEl$classList;

  var modalEl = document.querySelector(modalSelector);
  var classToCloseModal = ['invisible', 'h-0', 'opacity-0']; // if modal open, set isModalOpen = true. else, isModalOpen = false

  var isModalOpen = (_modalEl$classList = modalEl.classList).contains.apply(_modalEl$classList, classToCloseModal) ? true : false;

  if (isModalOpen === true) {
    var _modalEl$classList2;

    // close modal
    (_modalEl$classList2 = modalEl.classList).remove.apply(_modalEl$classList2, classToCloseModal);
  } else {
    var _modalEl$classList3;

    // open modal
    (_modalEl$classList3 = modalEl.classList).add.apply(_modalEl$classList3, classToCloseModal);

    if (modalEl.querySelectorAll('input, textarea')) {
      modalEl.querySelectorAll('input:not([name="_method"]):not([name="_token"]), textarea').forEach(function (inputOrTextarea) {
        inputOrTextarea.value = '';
      });
    }
  }
}
/*!
 * Get all of an element's parent elements up the DOM tree
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   elem     The element
 * @param  {String} selector Selector to match against [optional]
 * @return {Array}           The parent elements
 */

var getParents = function getParents(elem, selector) {
  // Setup parents array
  var parents = []; // Get matching parent elements

  while (elem && elem !== document) {
    // If using a selector, add matching parents to array
    // Otherwise, add all parents
    if (selector) {
      if (elem.matches(selector)) {
        parents.push(elem);
      }
    } else {
      parents.push(elem);
    } // Jump to the next parent node


    elem = elem.parentNode;
  }

  return parents;
};
var boxiconHoverChangeColor = function boxiconHoverChangeColor(icon, hoverColor) {
  var originalIconColor = icon.getAttribute('color');
  icon.addEventListener('mouseover', function () {
    icon.setAttribute('color', hoverColor);
  });
  icon.addEventListener('mouseleave', function () {
    icon.setAttribute('color', originalIconColor);
  });
};
var kebabToSnake = function kebabToSnake(string) {
  return string.replace('-', '_');
};
var pageUrl = window.location.pathname;
var appUrl = window.location.origin;

/***/ }),

/***/ "./resources/assets/js/helper-utilities.js":
/*!*************************************************!*\
  !*** ./resources/assets/js/helper-utilities.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-module.js */ "./resources/assets/js/helper-module.js");

/*
 * .input-lowercase utitlies to make all input lowercase
 */

var inputElement = document.querySelectorAll(".input-lowercase");
inputElement.forEach(function (input) {
  input.addEventListener('input', function () {
    return input.value = input.value.toLowerCase();
  });
  input.addEventListener('change', function () {
    return console.log(input.value);
  });
});
/**
 * .only-alpha-space utitlies to make all input have pattern with 
 * regex only allow alpha & space
 */

var inputOnlyNumberAndSpace = document.querySelectorAll('.only-alpha-space');
inputOnlyNumberAndSpace.forEach(function (input) {
  input.setAttribute('pattern', '[a-zA-Z]+');
});
/**
 * Make all input with required att, have a '*' icon in their label
 */

var requiredInput = document.querySelectorAll('input:not([type="radio"])[required="required"], textarea[required]');
Array.from(requiredInput).map(function (input) {
  return input.previousElementSibling.classList.add('required-input');
});
/**
 * utilities class helper for instant formatting to rupiah
 */

var rupiahCurrency = document.querySelectorAll('.rupiah-currency');
rupiahCurrency.forEach(function (money) {
  money.classList.add('not-italic');
  money.textContent = _helper_module_js__WEBPACK_IMPORTED_MODULE_0__["formattingRupiah"](money.textContent);
});
/**
 *  Set box-icon component color just using tailwind text color class
 */

var boxIcons = document.querySelectorAll('box-icon');
boxIcons.forEach(function (boxIcon) {
  if (boxIcon.className.split(' ').some(function (color) {
    return /text-.*/.test(color);
  })) {
    var colorIcon = getComputedStyle(boxIcon).color;
    boxIcon.setAttribute('color', colorIcon);
  }
});
/*
 * trim all input value
 */

document.querySelectorAll('input, textarea').forEach(function (input) {
  var valueTrimmed = input.value.trim();
  input.value = valueTrimmed;
});

/***/ }),

/***/ "./resources/assets/js/native.js":
/*!***************************************!*\
  !*** ./resources/assets/js/native.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var boxicons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! boxicons */ "./node_modules/boxicons/dist/boxicons.js");
/* harmony import */ var boxicons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(boxicons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper-utilities.js */ "./resources/assets/js/helper-utilities.js");
/* harmony import */ var _component_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/alert */ "./resources/assets/js/component/alert.js");
/* harmony import */ var _component_alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_component_alert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/nav */ "./resources/assets/js/component/nav.js");
/* harmony import */ var _component_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/dropdown-menu */ "./resources/assets/js/component/dropdown-menu.js");
/* harmony import */ var _component_dropdown_menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_component_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_btn_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/btn-menu */ "./resources/assets/js/component/btn-menu.js");
/* harmony import */ var _component_btn_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_component_btn_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/form */ "./resources/assets/js/component/form.js");
/* harmony import */ var _component_btn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/btn */ "./resources/assets/js/component/btn.js");
/* harmony import */ var _component_btn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_component_btn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _page_cart_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page/cart-page */ "./resources/assets/js/page/cart-page.js");
/* harmony import */ var _component_popup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/popup */ "./resources/assets/js/component/popup.js");
/* harmony import */ var _component_tab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/tab */ "./resources/assets/js/component/tab.js");
/* harmony import */ var _functions_product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./functions/product */ "./resources/assets/js/functions/product.js");













/***/ }),

/***/ "./resources/assets/js/page/cart-page.js":
/*!***********************************************!*\
  !*** ./resources/assets/js/page/cart-page.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../helper-module */ "./resources/assets/js/helper-module.js");

var metaToken = document.querySelector('meta[name="csrf-token"]').content;

if (_helper_module__WEBPACK_IMPORTED_MODULE_0__["pageUrl"] === '/cart') {
  var updateCart = function updateCart(cartItems) {
    var weightTotalElement = cartPage.querySelector('#cart__weight-total');
    var totalPointElement = cartPage.querySelectorAll('#cart__total-point');
    var totalMoneyElement = cartPage.querySelectorAll('#cart__total-money');
    var cartShipping = cartPage.querySelectorAll('#cart__shipping');
    var isShippingPoint = cartPage.querySelectorAll('.cart-item__price[data-is-point="false"]').length == 0;
    var selectAddress = cartPage.querySelector('select[name="address_id"]');
    var addressLabel = cartPage.querySelectorAll('#isJavaAddress');
    var cartItemCount = document.querySelectorAll('#total-shopping');
    var isJavaAddress = false;

    if (selectAddress.value !== "") {
      var selectedAddress = selectAddress.querySelector("option[value=\"".concat(selectAddress.value, "\"]"));
      isJavaAddress = selectedAddress.dataset.isJava == 1 ? true : false;
    }

    var totalPoint = 0;
    var totalMoney = 0;
    var weight = 0;
    var shippingTotal = 0;
    var totalItem = 0;
    cartItems.forEach(function (item) {
      var itemPrice = item.previousElementSibling;
      weight += itemPrice.dataset.weight * item.value;
      totalItem += Number(item.value);

      if (itemPrice.dataset.isPoint === 'true') {
        totalPoint += itemPrice.dataset.price * item.value;
      } else {
        totalMoney += itemPrice.dataset.price * item.value;
      }
    });
    cartItemCount.forEach(function (item) {
      item.textContent = totalItem;
    });

    if (isJavaAddress) {
      shippingTotal = cartShipping[0].dataset.price * Math.ceil(weight / 1000);
      addressLabel.forEach(function (item) {
        item.textContent = "jawa";
      });
    } else {
      shippingTotal = cartShipping[0].dataset.nonJavaPrice * Math.ceil(weight / 1000);
      addressLabel.forEach(function (item) {
        item.textContent = "luar jawa";
      });
    }

    if (isShippingPoint) {
      cartShipping.forEach(function (item) {
        item.textContent = Math.ceil(shippingTotal / cartShipping[0].dataset.pointValue) + ' point';
      });
    } else {
      cartShipping.forEach(function (item) {
        item.textContent = currencyFormatter.format(shippingTotal);
      });
    }

    if (voucher) {
      totalMoney -= voucher.discount_value;
      totalMoney = totalMoney > 0 ? totalMoney : 0;
    }

    totalPointElement.forEach(function (item) {
      item.textContent = totalPoint + ' point';
    });
    totalMoneyElement.forEach(function (item) {
      item.textContent = currencyFormatter.format(totalMoney);
    });
    weightTotalElement.textContent = weight + ' gram';
  }; // check voucher


  var cartPage = document.querySelector('#cartPage');
  var currencyFormatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  }); // modal checkout and it's child

  if (cartPage.querySelector('#modalCheckout')) {
    /*
     * open step on checkout modal
     */
    var openStep = function openStep(step) {
      step.classList.add('show-step');
      step.classList.remove('hide-step');
    };
    /**
     * close step on checkout modal
     */


    var closeStep = function closeStep(step) {
      step.classList.add('hide-step');
      step.classList.remove('show-step');
    };

    var modalCheckout = document.querySelector('#modalCheckout');
    var firstStep = modalCheckout.querySelector('.step-form > form');
    var secondStep = modalCheckout.querySelector('.step-form > div');
    var nextStepBtn = modalCheckout.querySelector('#btnNextStep');
    var checkoutBtn = modalCheckout.querySelector('#btnCheckout'); // open modal checkout

    var btnShowCheckoutStep = document.querySelector('#btnShowCheckoutStep');
    btnShowCheckoutStep.addEventListener('click', function () {
      Object(_helper_module__WEBPACK_IMPORTED_MODULE_0__["openCloseModal"])('#modalCheckout');
    });
    var btnCloseModal = cartPage.querySelector('#closeModalCheckout'); // when user close the modal

    btnCloseModal.addEventListener('click', function () {
      Object(_helper_module__WEBPACK_IMPORTED_MODULE_0__["openCloseModal"])('#' + modalCheckout.getAttribute('id'));
      openStep(firstStep);
      closeStep(secondStep);

      if (nextStepBtn.classList.contains('hidden')) {
        nextStepBtn.classList.remove('hidden');
        checkoutBtn.classList.add('hidden');
      }
    });
    /*
      * open #modalAddAddress if it closed. Otherwise close it
      */

    var btnOpenModalAddress = document.querySelector('.toggle-popup');
    var btnCloseModalAddress = document.querySelector('#btn-close-modalAddAddress');
    var btnsManageModalAddress = [btnOpenModalAddress, btnCloseModalAddress];
    btnsManageModalAddress.forEach(function (btnOnModalAddNewAddress) {
      btnOnModalAddNewAddress.addEventListener('click', function () {
        Object(_helper_module__WEBPACK_IMPORTED_MODULE_0__["openCloseModal"])('#modalAddAddress');
      });
    });
    /*
     * when user go to next step on checkout
     */

    nextStepBtn.addEventListener('click', function () {
      if (modalCheckout.querySelector('select').value == '') {
        alert('kamu belum pilih alamat pengiriman!');
      } else {
        openStep(secondStep);
        closeStep(firstStep);
        nextStepBtn.classList.add('hidden');
        checkoutBtn.classList.remove('hidden');
      } // setNextStepBtnText('Checkout')

    });
    var newAddressBtn = document.querySelector('#newAddressSubmit');
    var newAddressForm = document.querySelector('#newAddressForm');
    var addresses = cartPage.querySelector('#form-checkout select');
    newAddressForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(newAddressForm);
      fetch(newAddressForm.getAttribute('action'), {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-Token': metaToken
        },
        body: JSON.stringify(Object.fromEntries(data))
      }).then(function (res) {
        return res.json();
      }).then(function (json) {
        var arr = [];
        Object.keys(json).forEach(function (key) {
          arr.push(json[key]);
        });
        arr = arr.sort(function (a, b) {
          return b.is_main_address - a.is_main_address;
        });
        addresses.innerHTML = '';
        arr.forEach(function (value) {
          addresses.innerHTML += "\n                        <option value=\"".concat(value.id, "\">\n                            ").concat(value.title, "\n                        </option>\n                    ");
        });
      });
      Object(_helper_module__WEBPACK_IMPORTED_MODULE_0__["openCloseModal"])('#modalAddAddress');
    });
  }

  var checkoutVoucherInput = cartPage.querySelector('input[name="voucher"]');
  var checkVoucherBtn = cartPage.querySelector('#btnCheckVoucher');
  var voucherInput = cartPage.querySelector('input[name="voucher_code"]');
  var voucherElement = cartPage.querySelector('#cart__voucher-discount');
  var voucher = null;
  var cartItems = cartPage.querySelectorAll('.cart-item__qty');
  var cartId = cartPage.querySelector('#cartId').value;

  if (voucherInput) {
    checkVoucherBtn.addEventListener('click', function () {
      if (voucherInput.value != "") {
        fetch('/voucher/validate', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'X-CSRF-Token': metaToken
          },
          body: JSON.stringify({
            'voucher_code': voucherInput.value
          })
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          alert(data.message);

          if (data.status == 'success') {
            voucher = data.data;
            voucherElement.textContent = currencyFormatter.format(voucher.discount_value);
            checkoutVoucherInput.value = voucher.code;
          } else {
            voucher = null;
            voucherElement.textContent = currencyFormatter.format(0);
            checkoutVoucherInput.value = '';
          }

          updateCart(cartItems);
        });
      }
    });
  } // update cart


  if (cartItems.length > 0) {
    updateCart(cartItems); // address select input change listener

    cartPage.querySelector('select[name="address_id"]').addEventListener('change', function () {
      return updateCart(cartItems);
    }); // cart item event listener

    cartItems.forEach(function (item, index) {
      item.addEventListener('change', function () {
        var itemPrice = item.previousElementSibling;

        if (item.value == 0) {
          if (window.confirm('Anda yakin ingin menghapus produk dari cart ?')) {
            fetch("/cart/".concat(cartId), {
              method: 'DELETE',
              headers: {
                'Content-type': 'application/json',
                'X-CSRF-Token': metaToken
              },
              body: JSON.stringify({
                'item_id': item.dataset.itemId
              })
            }).then(function () {
              Object(_helper_module__WEBPACK_IMPORTED_MODULE_0__["getParents"])(item, '.cart-item')[0].remove();

              if (!cartPage.querySelector('.cart-item__qty')) {
                location.reload();
              }
            });
          } else {
            item.value = 1;
          }
        }

        if (itemPrice.dataset.isPoint === 'true') {
          itemPrice.textContent = "".concat(itemPrice.dataset.price * item.value, " point");
        } else {
          itemPrice.textContent = currencyFormatter.format(itemPrice.dataset.price * item.value);
        }

        var boughtItems = [];
        cartItems.forEach(function (item) {
          boughtItems.push({
            'item_id': item.dataset.itemId,
            'quantity': item.value
          });
        });
        fetch("/cart/".concat(cartId), {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
            'X-CSRF-Token': metaToken
          },
          body: JSON.stringify(boughtItems)
        }).then(function () {
          return updateCart(cartItems);
        });
      });
    });
  }
}

/***/ }),

/***/ "./resources/assets/sass/admin-dashboard.scss":
/*!****************************************************!*\
  !*** ./resources/assets/sass/admin-dashboard.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/sass/native.scss":
/*!*******************************************!*\
  !*** ./resources/assets/sass/native.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!******************************************************************************************************************************!*\
  !*** multi ./resources/assets/js/native.js ./resources/assets/sass/native.scss ./resources/assets/sass/admin-dashboard.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/html/shopavel/resources/assets/js/native.js */"./resources/assets/js/native.js");
__webpack_require__(/*! /var/www/html/shopavel/resources/assets/sass/native.scss */"./resources/assets/sass/native.scss");
module.exports = __webpack_require__(/*! /var/www/html/shopavel/resources/assets/sass/admin-dashboard.scss */"./resources/assets/sass/admin-dashboard.scss");


/***/ })

/******/ });