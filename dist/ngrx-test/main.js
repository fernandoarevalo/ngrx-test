(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-my-counter></app-my-counter>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ngrx-test';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _counter_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./counter.reducer */ "./src/app/counter.reducer.ts");
/* harmony import */ var _my_counter_my_counter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-counter/my-counter.component */ "./src/app/my-counter/my-counter.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _my_counter_my_counter_component__WEBPACK_IMPORTED_MODULE_6__["MyCounterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({ count: _counter_reducer__WEBPACK_IMPORTED_MODULE_5__["counterReducer"] })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/counter.actions.ts":
/*!************************************!*\
  !*** ./src/app/counter.actions.ts ***!
  \************************************/
/*! exports provided: ActionTypes, Increment, Decrement, Reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Increment", function() { return Increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decrement", function() { return Decrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reset", function() { return Reset; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["Increment"] = "[Counter Component] Increment";
    ActionTypes["Decrement"] = "[Counter Component] Decrement";
    ActionTypes["Reset"] = "[counter Component] Reset";
})(ActionTypes || (ActionTypes = {}));
var Increment = /** @class */ (function () {
    function Increment() {
        this.type = ActionTypes.Increment;
    }
    return Increment;
}());

var Decrement = /** @class */ (function () {
    function Decrement() {
        this.type = ActionTypes.Decrement;
    }
    return Decrement;
}());

var Reset = /** @class */ (function () {
    function Reset() {
        this.type = ActionTypes.Reset;
    }
    return Reset;
}());



/***/ }),

/***/ "./src/app/counter.reducer.ts":
/*!************************************!*\
  !*** ./src/app/counter.reducer.ts ***!
  \************************************/
/*! exports provided: initialState, counterReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counterReducer", function() { return counterReducer; });
/* harmony import */ var _counter_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter.actions */ "./src/app/counter.actions.ts");

var initialState = 0;
function counterReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _counter_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Increment:
            return state + 1;
        case _counter_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Decrement:
            return state - 1;
        case _counter_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Reset:
            return 0;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/my-counter/my-counter.component.css":
/*!*****************************************************!*\
  !*** ./src/app/my-counter/my-counter.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LWNvdW50ZXIvbXktY291bnRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/my-counter/my-counter.component.html":
/*!******************************************************!*\
  !*** ./src/app/my-counter/my-counter.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"increment()\">Increment</button>\n\n<div>Current Count: {{ count$ | async }}</div>\n\n<button (click)=\"decrement()\">Decrement</button>\n\n<button (click)=\"reset()\">Reset</button>"

/***/ }),

/***/ "./src/app/my-counter/my-counter.component.ts":
/*!****************************************************!*\
  !*** ./src/app/my-counter/my-counter.component.ts ***!
  \****************************************************/
/*! exports provided: MyCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCounterComponent", function() { return MyCounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _counter_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../counter.actions */ "./src/app/counter.actions.ts");




var MyCounterComponent = /** @class */ (function () {
    function MyCounterComponent(store) {
        this.store = store;
        this.count$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('count'));
    }
    MyCounterComponent.prototype.ngOnInit = function () {
    };
    MyCounterComponent.prototype.increment = function () {
        this.store.dispatch(new _counter_actions__WEBPACK_IMPORTED_MODULE_3__["Increment"]);
    };
    MyCounterComponent.prototype.decrement = function () {
        this.store.dispatch(new _counter_actions__WEBPACK_IMPORTED_MODULE_3__["Decrement"]);
    };
    MyCounterComponent.prototype.reset = function () {
        this.store.dispatch(new _counter_actions__WEBPACK_IMPORTED_MODULE_3__["Reset"]);
    };
    MyCounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-counter',
            template: __webpack_require__(/*! ./my-counter.component.html */ "./src/app/my-counter/my-counter.component.html"),
            styles: [__webpack_require__(/*! ./my-counter.component.css */ "./src/app/my-counter/my-counter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], MyCounterComponent);
    return MyCounterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Users\Desarrollador4\Documents\Redux\ngrx-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map