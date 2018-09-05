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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.table-bordered {\r\n  border: 1px solid black;\r\n  margin: 0%;\r\n  padding: 0%\r\n}\r\n\r\ntable.table-bordered>thead>tr>th {\r\n  border: 1px solid black;\r\n}\r\n\r\ntable.table-bordered>tbody>tr>td {\r\n  border: 1px solid black;\r\n}\r\n\r\n.apt-head-text {\r\n  color: #FFFFFF;\r\n  background-color: transparent;\r\n  font-family: AmericanSans;\r\n  font-size: 22px;\r\n  font-weight: 400;\r\n  line-height: 36px;\r\n  text-align: left;\r\n}\r\n\r\n.apt-head-style {\r\n  height: 59px;\r\n  background-color: #36495A;\r\n  padding-top: 1%\r\n}\r\n\r\n.noMarginPad {\r\n  margin: 0%;\r\n  padding: 0%\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<ng4-loading-spinner> </ng4-loading-spinner>\r\n<div class=\"container\">\r\n  <table class=\"table table-bordered table-responsive-sm \">\r\n    <thead>\r\n      <tr>\r\n        <div class=\"apt-head-style\">\r\n          <h1 class=\"apt-head-text\">AAdvantage Promotions Tool</h1>\r\n        </div>\r\n      </tr>\r\n    </thead>\r\n  </table>\r\n\r\n  <div class=\"row noMarginPad\">\r\n    <div class=\"col-sm-3 noMarginPad\" id=\"searchdiv\">\r\n      <app-searchcomp (pcodeSubmitted)='onPcodeSubmited($event)'></app-searchcomp>\r\n      <app-searchcriteria></app-searchcriteria>\r\n    </div>\r\n    <div class=\"col-sm-9 \" id=\"resultdiv\">\r\n      <app-resultscomp [pcodecurrpromoval]=\"pcodeInParent\"></app-resultscomp>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'apt-client';
        this.pcodeInParent = "";
    }
    AppComponent.prototype.onClick = function () {
        console.log("Clicked");
    };
    AppComponent.prototype.onPcodeSubmited = function (pcodecurrpromo) {
        this.pcodeInParent = pcodecurrpromo;
        console.log("pcode in Parent :" + this.pcodeInParent);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _searchcomp_searchcomp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./searchcomp/searchcomp.component */ "./src/app/searchcomp/searchcomp.component.ts");
/* harmony import */ var _resultscomp_resultscomp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resultscomp/resultscomp.component */ "./src/app/resultscomp/resultscomp.component.ts");
/* harmony import */ var _resultscomp_latestpromos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resultscomp/latestpromos.component */ "./src/app/resultscomp/latestpromos.component.ts");
/* harmony import */ var _resultscomp_trendingpromos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resultscomp/trendingpromos.component */ "./src/app/resultscomp/trendingpromos.component.ts");
/* harmony import */ var _resultscomp_searchresults_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resultscomp/searchresults.component */ "./src/app/resultscomp/searchresults.component.ts");
/* harmony import */ var _searchservice_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./searchservice.service */ "./src/app/searchservice.service.ts");
/* harmony import */ var _shared_icommunication_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/icommunication.service */ "./src/app/shared/icommunication.service.ts");
/* harmony import */ var _searchcriteria_searchcriteria_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./searchcriteria/searchcriteria.component */ "./src/app/searchcriteria/searchcriteria.component.ts");
/* harmony import */ var _resultscomp_promodetails_promodetails_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./resultscomp/promodetails/promodetails.component */ "./src/app/resultscomp/promodetails/promodetails.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _searchcomp_searchcomp_component__WEBPACK_IMPORTED_MODULE_10__["SearchcompComponent"],
                _resultscomp_resultscomp_component__WEBPACK_IMPORTED_MODULE_11__["ResultscompComponent"],
                _searchcriteria_searchcriteria_component__WEBPACK_IMPORTED_MODULE_17__["SearchcriteriaComponent"],
                _resultscomp_latestpromos_component__WEBPACK_IMPORTED_MODULE_12__["LatestpromosComponent"],
                _resultscomp_trendingpromos_component__WEBPACK_IMPORTED_MODULE_13__["TrendingpromosComponent"],
                _resultscomp_searchresults_component__WEBPACK_IMPORTED_MODULE_14__["SearchresultsComponent"],
                _resultscomp_promodetails_promodetails_component__WEBPACK_IMPORTED_MODULE_18__["PromodetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__["AngularFontAwesomeModule"]
            ],
            providers: [_searchservice_service__WEBPACK_IMPORTED_MODULE_15__["SearchserviceService"], _shared_icommunication_service__WEBPACK_IMPORTED_MODULE_16__["IcommunicationService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/resultscomp/latestpromos.component.css":
/*!********************************************************!*\
  !*** ./src/app/resultscomp/latestpromos.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-select-flex {\r\n    display: -ms-flexbox;\r\n    display: flex\r\n}\r\n\r\n.label-pt {\r\n    padding-top: 1%\r\n}"

/***/ }),

/***/ "./src/app/resultscomp/latestpromos.component.html":
/*!*********************************************************!*\
  !*** ./src/app/resultscomp/latestpromos.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Latest Promos Data here</h3>\r\n<img src=\"underc.jpeg\" class=\"mx-auto d-block img-fluid\">\r\n\r\n<div *ngIf=\"lpromotion\">\r\n    <div class=\"col-sm-12\">\r\n\r\n\r\n        <form [formGroup]=\"lpromosSortForm\" autocomplete=\"off\" novalidate>\r\n            <br>\r\n            <div class=\"form-group label-select-flex\">\r\n\r\n                <label for=\"sortby\" class=\"label-pt\">Sort by: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\r\n                <select formControlName=\"lsortby\" class=\"form-control col-sm-3\">\r\n                    <option value=\"startdate\">Start date</option>\r\n                    <option value=\"enddate\">End date</option>\r\n                    <option value=\"pcodeatoz\">Promo code: A to Z</option>\r\n                    <option value=\"pcodeztoa\">Promo code: Z to A</option>\r\n                </select>\r\n            </div>\r\n        </form>\r\n\r\n\r\n        <div *ngIf=\"errMsgToDisplay\"> </div>\r\n         Result from LSCS : <br> PromotionOrChallengeCode : {{lpromotion.promotionOrChallengeCode}}\r\n        <br> IsTrending: {{lpromotion.isTrending}}\r\n        <br> Keywords: {{lpromotion.keyword}}\r\n        <br> PromotionName: {{lpromotion.promotionName}}\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/resultscomp/latestpromos.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/resultscomp/latestpromos.component.ts ***!
  \*******************************************************/
/*! exports provided: LatestpromosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestpromosComponent", function() { return LatestpromosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LatestpromosComponent = /** @class */ (function () {
    function LatestpromosComponent() {
        this.lpromotion = undefined;
    }
    LatestpromosComponent.prototype.ngOnInit = function () {
        this.lsortby = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null);
        this.lpromosSortForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({ lsortby: this.lsortby });
        this.lpromosSortForm.controls.lsortby.setValue('startdate');
    };
    LatestpromosComponent.prototype.ngOnChanges = function (changes) {
    };
    LatestpromosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-latestpromoscomp',
            template: __webpack_require__(/*! ./latestpromos.component.html */ "./src/app/resultscomp/latestpromos.component.html"),
            styles: [__webpack_require__(/*! ./latestpromos.component.css */ "./src/app/resultscomp/latestpromos.component.css")]
        })
    ], LatestpromosComponent);
    return LatestpromosComponent;
}());



/***/ }),

/***/ "./src/app/resultscomp/promodetails/promodetails.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/resultscomp/promodetails/promodetails.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardHeaderStyle {\r\n    height: 41px;\r\n    background-color: #e7ecef;\r\n    border: solid 1px rgb(231, 236, 239);\r\n    margin: 0%;\r\n    padding: 0%;\r\n}\r\n\r\n.mpZeroWidthFull {\r\n    margin: 0%;\r\n    padding: 0%;\r\n    width: 100%;\r\n}\r\n\r\n.iconSize {\r\n    width: 22px;\r\n    height: 40px;\r\n}\r\n\r\n.headerPNameStyle {\r\n    height: 17px;\r\n    background-color: transparent;\r\n    font-family: AmericanSansMedium;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    line-height: 22px;\r\n    text-align: left;\r\n    color: #36495A;\r\n}"

/***/ }),

/***/ "./src/app/resultscomp/promodetails/promodetails.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/resultscomp/promodetails/promodetails.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12 mpZeroWidthFull\">\n  <div class=\"card-header cardHeaderStyle\">\n    <img src=\"Popular-icon.svg\" *ngIf=\"isTrending === 'true'\" class=\"img-fluid iconSize\">\n    <span class=\"headerPNameStyle\"><b>Promo code: </b>{{promotionOrChallengeCode}}</span>\n    <span class=\"pull-right\">\n      <img #ecimg src=\"Expand-icon.svg\" (click)=\"toggleContent()\" onmouseover=\"this.style.cursor='pointer'\" class=\"img-fluid iconSize\">\n    </span>\n  </div>\n  <ng-content *ngIf=\"!visible\" select=\"[card-body1]\"></ng-content>\n\n  <ng-content *ngIf=\"visible\" select=\"[card-body3]\"></ng-content>\n</div>"

/***/ }),

/***/ "./src/app/resultscomp/promodetails/promodetails.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/resultscomp/promodetails/promodetails.component.ts ***!
  \********************************************************************/
/*! exports provided: PromodetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromodetailsComponent", function() { return PromodetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PromodetailsComponent = /** @class */ (function () {
    function PromodetailsComponent() {
        this.visible = false;
        this.hidesortevent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PromodetailsComponent.prototype.ngOnInit = function () {
    };
    PromodetailsComponent.prototype.toggleContent = function () {
        this.visible = !this.visible;
        var imgsrc = this.ecimg.nativeElement.src;
        if (imgsrc.indexOf('Expand-icon') != -1) {
            this.ecimg.nativeElement.src = "Collapse-icon.svg";
            this.hidesortevent.emit(false);
        }
        else {
            this.ecimg.nativeElement.src = "Expand-icon.svg";
            this.hidesortevent.emit(true);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PromodetailsComponent.prototype, "promotionOrChallengeCode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PromodetailsComponent.prototype, "isTrending", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ecimg'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PromodetailsComponent.prototype, "ecimg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PromodetailsComponent.prototype, "hidesortevent", void 0);
    PromodetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-promodetails',
            template: __webpack_require__(/*! ./promodetails.component.html */ "./src/app/resultscomp/promodetails/promodetails.component.html"),
            styles: [__webpack_require__(/*! ./promodetails.component.css */ "./src/app/resultscomp/promodetails/promodetails.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PromodetailsComponent);
    return PromodetailsComponent;
}());



/***/ }),

/***/ "./src/app/resultscomp/resultscomp.component.css":
/*!*******************************************************!*\
  !*** ./src/app/resultscomp/resultscomp.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/resultscomp/resultscomp.component.html":
/*!********************************************************!*\
  !*** ./src/app/resultscomp/resultscomp.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <ul class=\"nav nav-tabs nav-justified \">\r\n    <li class=\"nav-item \">\r\n      <a class=\"nav-link active\" #latestPromoAnchor href=\"#latestPromosTab\" data-toggle=\"tab\">Latest promos</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#popularPromosTab\" data-toggle=\"tab\"> Trending promos</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link \" #searchResultsAnchor href=\"#searchResultsTab\" data-toggle=\"tab\">Search results</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n<div class=\"tab-content\">\r\n  <div id=\"latestPromosTab\" #latestPromosDiv class=\"tab-pane active container\">\r\n    <app-latestpromoscomp></app-latestpromoscomp>\r\n  </div>\r\n  <div id=\"popularPromosTab\" class=\"tab-pane container\">\r\n    <app-trendingpromoscomp></app-trendingpromoscomp>\r\n  </div>\r\n  <div id=\"searchResultsTab\" #searchResultsDiv class=\"tab-pane  container\">\r\n    <app-searchresultscomp [pcodecurrpromoval]=\"sendPcodecurrpromoval\"></app-searchresultscomp>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/resultscomp/resultscomp.component.ts":
/*!******************************************************!*\
  !*** ./src/app/resultscomp/resultscomp.component.ts ***!
  \******************************************************/
/*! exports provided: ResultscompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultscompComponent", function() { return ResultscompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _searchservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../searchservice.service */ "./src/app/searchservice.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultscompComponent = /** @class */ (function () {
    function ResultscompComponent(searchService, spinnerService) {
        this.searchService = searchService;
        this.spinnerService = spinnerService;
        this.sendPcodecurrpromoval = '';
    }
    ResultscompComponent.prototype.ngOnInit = function () {
    };
    ResultscompComponent.prototype.ngOnChanges = function (changes) {
        console.log('In ngOnChanges - ResultsComp ');
        for (var propName in changes) {
            var change = changes[propName];
            console.log('Input field changed is :' + propName);
            if (propName === 'pcodecurrpromoval') {
                console.log('Previous Value : ' + change.previousValue);
                console.log('Current value: ' + change.currentValue);
                if (change.currentValue && !(change.currentValue === change.previousValue)) {
                    console.log('Setting value to sendPcodecurrpromoval');
                    this.latestPromoAnchor.nativeElement.classList.remove("active");
                    this.latestPromosDiv.nativeElement.classList.remove("active");
                    this.searchResultsAnchor.nativeElement.classList.add("active");
                    this.searchResultsDiv.nativeElement.classList.add("active");
                    this.sendPcodecurrpromoval = change.currentValue;
                    //this.sendPcodecurrpromoval.emit(change.currentValue); 
                    /*
                              this.spinnerService.show();
                              this.searchService.getSearchPromoResults(change.currentValue).subscribe( (data:IPromotion) =>
                              {
                                this.promotion = data;
                                console.log(this.promotion.promotionOrChallengeCode);
                                this.spinnerService.hide();
                              
                              }
                              );
                              */
                } //End of Service call
            } //End of PropName = 'pcodecurrpromoval'
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ResultscompComponent.prototype, "pcodecurrpromoval", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('latestPromoAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ResultscompComponent.prototype, "latestPromoAnchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchResultsAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ResultscompComponent.prototype, "searchResultsAnchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('latestPromosDiv'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ResultscompComponent.prototype, "latestPromosDiv", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchResultsDiv'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ResultscompComponent.prototype, "searchResultsDiv", void 0);
    ResultscompComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resultscomp',
            template: __webpack_require__(/*! ./resultscomp.component.html */ "./src/app/resultscomp/resultscomp.component.html"),
            styles: [__webpack_require__(/*! ./resultscomp.component.css */ "./src/app/resultscomp/resultscomp.component.css")]
        }),
        __metadata("design:paramtypes", [_searchservice_service__WEBPACK_IMPORTED_MODULE_1__["SearchserviceService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["Ng4LoadingSpinnerService"]])
    ], ResultscompComponent);
    return ResultscompComponent;
}());



/***/ }),

/***/ "./src/app/resultscomp/searchresults.component.css":
/*!*********************************************************!*\
  !*** ./src/app/resultscomp/searchresults.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-select-flex {\r\n    display: -ms-flexbox;\r\n    display: flex\r\n}\r\n\r\n.label-pt {\r\n    padding-top: 1%\r\n}\r\n\r\n.noMarginPad {\r\n    margin: 0%;\r\n    padding: 0%\r\n}\r\n\r\n.promotionNameSingleStyle {\r\n    height: 29px;\r\n    background-color: transparent;\r\n    font-family: AmericanSansLight;\r\n    font-size: 28px;\r\n    font-weight: 400;\r\n    line-height: 32px;\r\n    text-align: left;\r\n    color: rgb(98, 122, 136);\r\n}\r\n\r\n.promotionNameStyle {\r\n    height: 29px;\r\n    background-color: transparent;\r\n    font-family: AmericanSansLight;\r\n    font-size: 20px;\r\n    line-height: 30px;\r\n    text-align: left;\r\n    color: #627A88;\r\n}\r\n\r\n.promotionDateLabelStyle {\r\n    height: 17px;\r\n    background-color: transparent;\r\n    font-family: AmericanSansMedium;\r\n    font-size: 14px;\r\n    font-weight: bolder;\r\n    line-height: 24px;\r\n    text-align: left;\r\n    color: rgba(0, 0, 0, 0.64);\r\n}\r\n\r\n.promotionDatesStyle {\r\n    height: 17px;\r\n    background-color: transparent;\r\n    font-family: AmericanSans;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    line-height: 24px;\r\n    text-align: left;\r\n    color: #36495A;\r\n}\r\n\r\n.sviewLabelStyle {\r\n    height: 17px;\r\n    background-color: transparent;\r\n    font-family: AmericanSansMedium;\r\n    font-size: 14px;\r\n    font-weight: bolder;\r\n    line-height: 24px;\r\n    text-align: left;\r\n    color: rgba(0, 0, 0, 0.64);\r\n}\r\n\r\n.sviewLabelSmStyle {\r\n    height: 17px;\r\n    background-color: transparent;\r\n    font-family: AmericanSansMedium;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    line-height: 24px;\r\n    text-align: left;\r\n    color: rgba(0, 0, 0, 0.64)\r\n}\r\n\r\n.sviewTextStyle {\r\n    height: 17px;\r\n    background-color: transparent;\r\n    font-family: AmericanSans;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    line-height: 24px;\r\n    text-align: left;\r\n    color: #36495A;\r\n}\r\n\r\n.pb1 {\r\n    padding-bottom: 1%\r\n}\r\n\r\n.hrwidth {\r\n    width: 90%;\r\n    margin-left: 10px;\r\n}\r\n\r\n.promoHeaderStyle {\r\n    height: 41px;\r\n    background-color: #e7ecef;\r\n    border: solid 1px rgb(231, 236, 239);\r\n    margin: 0%;\r\n    padding: 0%;\r\n}\r\n\r\n.iconSize {\r\n    width: 22px;\r\n    height: 40px;\r\n}\r\n\r\n.headerPNameStyle {\r\n    height: 17px;\r\n    background-color: transparent;\r\n    font-family: AmericanSansMedium;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    line-height: 22px;\r\n    text-align: left;\r\n    color: #36495A;\r\n}"

/***/ }),

/***/ "./src/app/resultscomp/searchresults.component.html":
/*!**********************************************************!*\
  !*** ./src/app/resultscomp/searchresults.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12 \">\r\n\r\n\r\n\r\n    <div *ngIf=\"errMsgToDisplay\">\r\n        <div [innerHTML]=\"errMsgToDisplay\"></div>\r\n    </div>\r\n\r\n    <div *ngIf=\"promotions?.length === 0\">No matching Promotions in Ventana</div>\r\n\r\n    <div *ngIf=\"promotions?.length === 1\">\r\n        <div *ngFor=\"let promotion of promotions\">\r\n\r\n\r\n            <div class=\"card-header promoHeaderStyle\">\r\n                <img src=\"Popular-icon.svg\" *ngIf=\"promotion.isTrending === 'true'\" class=\"img-fluid iconSize\">\r\n                <span class=\"headerPNameStyle\"><b>Promo code: </b>{{promotion.promotionOrChallengeCode}}</span>\r\n                <span class=\"pull-right\">\r\n                    <img src=\"Collapse-icon.svg\" class=\"img-fluid iconSize\">\r\n                </span>\r\n            </div>\r\n            <br>\r\n\r\n\r\n\r\n            <p class=\"col-sm-12 promotionNameSingleStyle\"> {{promotion.promotionName}} </p>\r\n            <br>\r\n            <div class=\"card-header\">\r\n                <div class=\"col-sm-12\">\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4 sviewLabelSmStyle\"><b>Promotion start to end dates:</b></div>\r\n                        <div class=\"col-sm-8 sviewTextStyle\">Start: {{promotion.promoStartDate}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                            End: {{promotion.promoEndDate}}</div>\r\n                    </div>\r\n\r\n                </div>\r\n                <hr class=\"hrwidth\">\r\n                <div class=\"col-sm-12 pb1\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4 sviewLabelStyle\"><b>Is member registration required?</b></div>\r\n                        <div class=\"col-sm-8 sviewTextStyle\">{{promotion.registrationRequired}}</div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-sm-12 pb1\">\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4 sviewLabelSmStyle\"><b>Member must register between:</b></div>\r\n                        <div class=\"col-sm-8 sviewTextStyle\"> {{promotion.memRegStartDate}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                            {{promotion.memRegEndDate}}\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-sm-12 pb1\">\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4 promotionDateLabelStyle\"><b>Member must travel between:</b></div>\r\n                        <div class=\"col-sm-8 promotionDatesStyle\"> {{promotion.memTravelStartDate}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                            {{promotion.memTravelEndDate}}\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-sm-12 pb1\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4 sviewLabelSmStyle\"><b>Late registration may be processed by</b></div>\r\n                        <div class=\"col-sm-8 sviewTextStyle\">{{promotion.lateRegEndDate}}</div>\r\n                    </div>\r\n\r\n                </div>\r\n                <br>\r\n                <hr class=\"hrwidth pb1\">\r\n                <div class=\"col-sm-12 pb1\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4 sviewLabelStyle\"><b>Is this a targeted promotion?</b></div>\r\n                        <div class=\"col-sm-8 sviewTextStyle\">{{promotion.targetedPromotion}}</div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"col-sm-12 pb1\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4 sviewLabelStyle\"><b>TA codes</b></div>\r\n                        <div class=\"col-sm-8 sviewTextStyle\">{{promotion.tac}}</div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <hr class=\"hrwidth pb1\">\r\n\r\n                <div class=\"col-sm-12 pb1\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4 sviewLabelStyle\"><b>Direct mailer:</b></div>\r\n                        <div class=\"col-sm-8 sviewTextStyle\">{{promotion.directmailer}}</div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"col-sm-12 pb1\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4 sviewLabelStyle\"><b>Marketing page URL:</b></div>\r\n                        <div class=\"col-sm-8 sviewTextStyle\">{{promotion.marketingpageurl}}</div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"col-sm-12 pb1\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4 sviewLabelStyle\"><b>Email URLs:</b></div>\r\n                        <div class=\"col-sm-8 sviewTextStyle\">{{promotion.emailurl}}</div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <br>\r\n\r\n            <div class=\"card-header\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-4 sviewLabelStyle\"><b>PST codes</b></div>\r\n                    <div class=\"col-sm-8 sviewTextStyle\">{{promotion.partnerCodes}}</div>\r\n                </div>\r\n            </div>\r\n\r\n            <br> <h6>HOW TO EARN</h6>\r\n            <br><div [innerHTML]=\"promotion.howToEarn\"></div>\r\n\r\n            <br> <h6>FULFILLMENT</h6>\r\n            <br><div [innerHTML]=\"promotion.fulfillment\"></div>\r\n\r\n            <div class=\"card-header\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-4 sviewLabelStyle\"><b>PST codes</b></div>\r\n                    <div class=\"col-sm-8 sviewTextStyle\">{{promotion.pstcodes}}</div>\r\n                </div>\r\n            </div>\r\n\r\n            <br> <h6>Resolve Issues</h6>\r\n            <br><div [innerHTML]=\"promotion.resolveIssues\"></div>\r\n            <br> <h6>aa.com view</h6>\r\n            <br><div [innerHTML]=\"promotion.aacomview\"></div>\r\n            <br><h6>Terms and conditions</h6>\r\n            <br><div [innerHTML]=\"promotion.termsandconditions\"></div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"promotions?.length > 1\">\r\n\r\n        <form [formGroup]=\"resultsSortForm\" autocomplete=\"off\" novalidate>\r\n            <br>\r\n            <div class=\"form-group label-select-flex\">\r\n\r\n                <label for=\"sortbylabel\" class=\"label-pt\">Sort by: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\r\n                <select formControlName=\"sortby\" class=\"form-control col-sm-3\">\r\n                    <option value=\"startdate\">Start date</option>\r\n                    <option value=\"enddate\">End date</option>\r\n                    <option value=\"pcodeatoz\">Promo code: A to Z</option>\r\n                    <option value=\"pcodeztoa\" selected>Promo code: Z to A</option>\r\n                </select>\r\n            </div>\r\n        </form>\r\n\r\n\r\n        <div *ngFor=\"let promotion of promotions\">\r\n\r\n            <app-promodetails [promotionOrChallengeCode]=\"promotion.promotionOrChallengeCode\" [isTrending]=\"promotion.isTrending\" (hidesortevent)=\"hideSortHander($event)\">\r\n\r\n                <div card-body1 class=\"card\">\r\n                    <p class=\"col-sm-12 promotionNameStyle\"> {{promotion.promotionName}} </p>\r\n\r\n                    <div class=\"col-sm-12\">\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3 promotionDateLabelStyle\"><b>Promotion dates:</b></div>\r\n                            <div class=\"col-sm-9 promotionDatesStyle\">Start: {{promotion.promoStartDate}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                End: {{promotion.promoEndDate}}</div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <hr class=\"hrwidth\">\r\n\r\n                    <div class=\"col-sm-12 pb1\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3 sviewLabelStyle\"><b>PST codes:</b></div>\r\n                            <div class=\"col-sm-9 sviewTextStyle\">{{promotion.pstcodes}}</div>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-12 pb1\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3 sviewLabelStyle\"><b>TA codes:</b></div>\r\n                            <div class=\"col-sm-9 sviewTextStyle\">{{promotion.tac}}</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-12 pb1\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3 sviewLabelStyle\"><b>Partner codes:</b></div>\r\n                            <div class=\"col-sm-9 sviewTextStyle\">{{promotion.partnerCodes}}</div>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n                    <hr class=\"hrwidth\">\r\n\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3 sviewLabelStyle\"><b>Keywords:</b></div>\r\n                            <div class=\"col-sm-9 sviewTextStyle\">{{promotion.keyword}}</div>\r\n                            <br>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <br>\r\n\r\n\r\n                </div>\r\n                <hr>\r\n\r\n                <div card-body3>\r\n                    <p class=\"col-sm-12 promotionNameStyle\"> {{promotion.promotionName}} </p>\r\n                    <br>\r\n                    <div class=\"card-header\">\r\n                        <div class=\"col-sm-12\">\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4 sviewLabelSmStyle\"><b>Promotion start to end dates:</b></div>\r\n                                <div class=\"col-sm-8 sviewTextStyle\">Start: {{promotion.promoStartDate}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                    End: {{promotion.promoEndDate}}</div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <hr class=\"hrwidth\">\r\n                        <div class=\"col-sm-12 pb1\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4 sviewLabelStyle\"><b>Is member registration required?</b></div>\r\n                                <div class=\"col-sm-8 sviewTextStyle\">{{promotion.registrationRequired}}</div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"col-sm-12 pb1\">\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4 sviewLabelSmStyle\"><b>Member must register between:</b></div>\r\n                                <div class=\"col-sm-8 sviewTextStyle\"> {{promotion.memRegStartDate}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                    {{promotion.memRegEndDate}}\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"col-sm-12 pb1\">\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4 promotionDateLabelStyle\"><b>Member must travel between:</b></div>\r\n                                <div class=\"col-sm-8 promotionDatesStyle\"> {{promotion.memTravelStartDate}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                    {{promotion.memTravelEndDate}}\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"col-sm-12 pb1\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4 sviewLabelSmStyle\"><b>Late registration may be processed by</b></div>\r\n                                <div class=\"col-sm-8 sviewTextStyle\">{{promotion.lateRegEndDate}}</div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <hr class=\"hrwidth pb1\">\r\n                        <div class=\"col-sm-12 pb1\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4 sviewLabelStyle\"><b>Is this a targeted promotion?</b></div>\r\n                                <div class=\"col-sm-8 sviewTextStyle\">{{promotion.targetedPromotion}}</div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-12 pb1\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4 sviewLabelStyle\"><b>TA codes</b></div>\r\n                                <div class=\"col-sm-8 sviewTextStyle\">{{promotion.tac}}</div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <hr class=\"hrwidth pb1\">\r\n\r\n                        <div class=\"col-sm-12 pb1\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4 sviewLabelStyle\"><b>Direct mailer:</b></div>\r\n                                <div class=\"col-sm-8 sviewTextStyle\">{{promotion.directmailer}}</div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-12 pb1\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4 sviewLabelStyle\"><b>Marketing page URL:</b></div>\r\n                                <div class=\"col-sm-8 sviewTextStyle\">{{promotion.marketingpageurl}}</div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-12 pb1\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4 sviewLabelStyle\"><b>Email URLs:</b></div>\r\n                                <div class=\"col-sm-8 sviewTextStyle\">{{promotion.emailurl}}</div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                    <br>\r\n\r\n                    <div class=\"card-header\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-4 sviewLabelStyle\"><b>Partner codes</b></div>\r\n                            <div class=\"col-sm-8 sviewTextStyle\">{{promotion.partnerCodes}}</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <br> <h6>HOW TO EARN</h6>\r\n                    <br><div [innerHTML]=\"promotion.howToEarn\"></div>\r\n\r\n                    <br> <h6>FULFILLMENT</h6>\r\n                    <br><div [innerHTML]=\"promotion.fulfillment\"></div>\r\n\r\n                    <div class=\"card-header\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-4 sviewLabelStyle\"><b>PST codes</b></div>\r\n                            <div class=\"col-sm-8 sviewTextStyle\">{{promotion.pstcodes}}</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <br> <h6>Resolve Issues</h6>\r\n                    <br><div [innerHTML]=\"promotion.resolveIssues\"></div>\r\n                    <br> <h6>aa.com view</h6>\r\n                    <br><div [innerHTML]=\"promotion.aacomview\"></div>\r\n                    <br><h6>Terms and conditions</h6>\r\n                    <br><div [innerHTML]=\"promotion.termsandconditions\"></div>\r\n\r\n\r\n                </div>\r\n\r\n            </app-promodetails>\r\n            <br><br><br>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/resultscomp/searchresults.component.ts":
/*!********************************************************!*\
  !*** ./src/app/resultscomp/searchresults.component.ts ***!
  \********************************************************/
/*! exports provided: SearchresultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchresultsComponent", function() { return SearchresultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _searchservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../searchservice.service */ "./src/app/searchservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchresultsComponent = /** @class */ (function () {
    function SearchresultsComponent(searchService, spinnerService) {
        this.searchService = searchService;
        this.spinnerService = spinnerService;
        this.pcodecurrpromoval = '';
        this.errMsgToDisplay = undefined;
    }
    SearchresultsComponent.prototype.ngOnInit = function () {
        this.sortby = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null);
        this.resultsSortForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({ sortby: this.sortby });
        this.resultsSortForm.controls.sortby.setValue('startdate');
    };
    SearchresultsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        console.log('In ngOnChanges ');
        for (var propName in changes) {
            var change = changes[propName];
            console.log('Input field changed is :' + propName);
            if (propName === 'pcodecurrpromoval') {
                console.log('Previous Value : ' + change.previousValue);
                console.log('Current value: ' + change.currentValue);
                if (change.currentValue && !(change.currentValue === change.previousValue)) {
                    console.log('Calling Promo search service with code' + change.currentValue);
                    this.spinnerService.show();
                    this.searchService.getSearchPromoResults(change.currentValue).subscribe(function (data) {
                        _this.promotions = data;
                        console.log('Number of Promotions are : ' + _this.promotions.length);
                        _this.spinnerService.hide();
                        _this.errMsgToDisplay = undefined;
                    }, function (err) {
                        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                            if (err.message.includes('Http failure response')) {
                                console.log("No Response from Ventana/LSCS");
                                _this.promotions = undefined;
                                _this.errMsgToDisplay = '<h5>No Response from Ventana/LSCS</h5>';
                                _this.spinnerService.hide();
                            }
                        }
                    });
                }
            }
        }
    };
    SearchresultsComponent.prototype.hideSortHander = function (hideFlag) {
        if (hideFlag) {
            this.resultsSortForm.controls.sortby.enable();
        }
        else {
            this.resultsSortForm.controls.sortby.disable();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SearchresultsComponent.prototype, "pcodecurrpromoval", void 0);
    SearchresultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchresultscomp',
            template: __webpack_require__(/*! ./searchresults.component.html */ "./src/app/resultscomp/searchresults.component.html"),
            styles: [__webpack_require__(/*! ./searchresults.component.css */ "./src/app/resultscomp/searchresults.component.css")]
        }),
        __metadata("design:paramtypes", [_searchservice_service__WEBPACK_IMPORTED_MODULE_4__["SearchserviceService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["Ng4LoadingSpinnerService"]])
    ], SearchresultsComponent);
    return SearchresultsComponent;
}());



/***/ }),

/***/ "./src/app/resultscomp/trendingpromos.component.css":
/*!**********************************************************!*\
  !*** ./src/app/resultscomp/trendingpromos.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-select-flex {\r\n    display: -ms-flexbox;\r\n    display: flex\r\n}\r\n\r\n.label-pt {\r\n    padding-top: 1%\r\n}"

/***/ }),

/***/ "./src/app/resultscomp/trendingpromos.component.html":
/*!***********************************************************!*\
  !*** ./src/app/resultscomp/trendingpromos.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Trending Promotions</h3>\r\n<h6>Nice to have feature</h6>\r\n<img src=\"underc.jpeg\" class=\"mx-auto d-block img-fluid\">\r\n\r\n<div *ngIf=\"tpromotion\">\r\n    <div class=\"col-sm-12\">\r\n\r\n\r\n        <form [formGroup]=\"tpromosSortForm\" autocomplete=\"off\" novalidate>\r\n            <br>\r\n            <div class=\"form-group label-select-flex\">\r\n\r\n                <label for=\"sortby\" class=\"label-pt\">Sort by: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\r\n                <select formControlName=\"tsortby\" class=\"form-control col-sm-3\">\r\n                    <option value=\"startdate\">Start date</option>\r\n                    <option value=\"enddate\">End date</option>\r\n                    <option value=\"pcodeatoz\">Promo code: A to Z</option>\r\n                    <option value=\"pcodeztoa\">Promo code: Z to A</option>\r\n                </select>\r\n            </div>\r\n        </form>\r\n\r\n\r\n        <div *ngIf=\"errMsgToDisplay\"> </div>\r\n         Result from LSCS : <br> PromotionOrChallengeCode : {{tpromotion.promotionOrChallengeCode}}\r\n        <br> IsTrending: {{tpromotion.isTrending}}\r\n        <br> Keywords: {{tpromotion.keyword}}\r\n        <br> PromotionName: {{tpromotion.promotionName}}\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/resultscomp/trendingpromos.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/resultscomp/trendingpromos.component.ts ***!
  \*********************************************************/
/*! exports provided: TrendingpromosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingpromosComponent", function() { return TrendingpromosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TrendingpromosComponent = /** @class */ (function () {
    function TrendingpromosComponent() {
        this.tpromotion = undefined;
        this.errMsgToDisplay = undefined;
    }
    TrendingpromosComponent.prototype.ngOnInit = function () {
        this.tsortby = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null);
        this.tresultsSortForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({ sortby: this.tsortby });
        this.tresultsSortForm.controls.sortby.setValue('startdate');
    };
    TrendingpromosComponent.prototype.ngOnChanges = function (changes) {
    };
    TrendingpromosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trendingpromoscomp',
            template: __webpack_require__(/*! ./trendingpromos.component.html */ "./src/app/resultscomp/trendingpromos.component.html"),
            styles: [__webpack_require__(/*! ./trendingpromos.component.css */ "./src/app/resultscomp/trendingpromos.component.css")]
        })
    ], TrendingpromosComponent);
    return TrendingpromosComponent;
}());



/***/ }),

/***/ "./src/app/searchcomp/searchcomp.component.css":
/*!*****************************************************!*\
  !*** ./src/app/searchcomp/searchcomp.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "em {\r\n    color: #E05C65;\r\n    padding-left: 10px;\r\n    font-family: 'AmericanSans';\r\n    font-size: 15px\r\n}\r\n\r\n.error {\r\n    border-color: red\r\n}\r\n\r\n.search-head-div {\r\n    background-color: #EBEFF0;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-color: #D0DAE0;\r\n    border: solid 1px #D0DAE0;\r\n}\r\n\r\n.form-Promo-label {\r\n    background-color: transparent;\r\n    font-family: AmericanSans;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    line-height: 20px;\r\n    text-align: left;\r\n    color: #333333;\r\n    margin-top: 1%;\r\n    padding: 1%\r\n}\r\n\r\n.noMarginPad {\r\n    margin: 0%;\r\n    padding: 0%\r\n}\r\n\r\n.glass-button-style {\r\n    background: #FAFBFB url(\"data:image/svg+xml,%3Csvg id%3D%22Layer_1%22 data-name%3D%22Layer 1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 50 50%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%230078d2%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3ESearch-icon%3C%2Ftitle%3E%3Cpath class%3D%22cls-1%22 d%3D%22M21.09%2C30.94%2C10.78%2C44%2C8.53%2C42.26l10.4-13.14a16.34%2C16.34%2C0%2C0%2C1-1.64-1.89L5.82%2C41.72l-.76%2C1%2C1%2C.79%2C4.22%2C3.2a1.2%2C1.2%2C0%2C0%2C0%2C.74.25%2C1.27%2C1.27%2C0%2C0%2C0%2C1-.46L23.21%2C32.22A16.91%2C16.91%2C0%2C0%2C1%2C21.14%2C31Z%22%2F%3E%3Cpath class%3D%22cls-1%22 d%3D%22M30.79%2C31.37a14.14%2C14.14%2C0%2C1%2C1%2C0-28.28%2C14.14%2C14.14%2C0%2C1%2C1%2C0%2C28.28Zm0-25.82a11.7%2C11.7%2C0%2C0%2C0-9.57%2C5%2C11.68%2C11.68%2C0%2C0%2C0%2C9.55%2C18.39%2C11.73%2C11.73%2C0%2C0%2C0%2C9.57-5A11.68%2C11.68%2C0%2C0%2C0%2C30.81%2C5.55Z%22%2F%3E%3C%2Fsvg%3E\") no-repeat right\r\n}\r\n\r\n.errorIconSize\r\n{\r\n    font-size:20px\r\n}"

/***/ }),

/***/ "./src/app/searchcomp/searchcomp.component.html":
/*!******************************************************!*\
  !*** ./src/app/searchcomp/searchcomp.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12 search-head-div\" id=\"Psearch\">\r\n\r\n  <form [formGroup]=\"topSearchForm\" (ngSubmit)=\"topSearchSubmit(topSearchForm.value)\" autocomplete=\"off\" novalidate>\r\n    <div class=\"form-group\">\r\n      <label for=\"pcodeLabel\" class=\"col-sm-12 form-Promo-label\">\r\n        Promo / PST / TA Code\r\n      </label>\r\n\r\n      <em *ngIf=\"!validatePCode() && pcode.errors.required\">\r\n        <i class=\"fa fa-exclamation-circle errorIconSize\"></i>\r\n        <b>Required</b></em>\r\n      <em *ngIf=\"!validatePCode() && pcode.errors.pattern\">\r\n        <i class=\"fa fa-exclamation-circle errorIconSize\"></i><b>Special characters not allowed</b></em>\r\n      <em *ngIf=\"!validatePCode() && pcode.errors.minlength\">\r\n        <i class=\"fa fa-exclamation-circle errorIconSize\"></i><b>Enter at least 2 characters</b></em>\r\n      <em *ngIf=\"!validatePCode() && pcode.errors.maxlength\">\r\n        <i class=\"fa fa-exclamation-circle errorIconSize\"></i><b>A max of 5 characters can be entered</b></em>\r\n\r\n      <div class=\"input-group noMarginPad\">\r\n        <input class=\"form-control\" type=\"search\" formControlName=\"pcode\" [ngClass]=\"{'error' : !validatePCode() }\" placeholder=\"Search...\"\r\n          id=\"ptextcode\">\r\n\r\n        <span class=\"input-group-append\">\r\n          <button class=\"btn btn-outline-secondary border-left-0 border glass-button-style\" type=\"submit\">\r\n\r\n          </button>\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"form-check\">\r\n        <label class=\"form-check-label\">\r\n          <input type=\"checkbox\" class=\"form-check-input\" formControlName=\"currpromochkbx\"> Current promos only\r\n        </label>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/searchcomp/searchcomp.component.ts":
/*!****************************************************!*\
  !*** ./src/app/searchcomp/searchcomp.component.ts ***!
  \****************************************************/
/*! exports provided: SearchcompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchcompComponent", function() { return SearchcompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchcompComponent = /** @class */ (function () {
    function SearchcompComponent() {
        this.pcodepromoval = '';
        this.pcodeSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchcompComponent.prototype.ngOnInit = function () {
        this.pcode = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9]*')]);
        this.currpromochkbx = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
        this.topSearchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            pcode: this.pcode,
            currpromochkbx: this.currpromochkbx
        });
    };
    SearchcompComponent.prototype.topSearchSubmit = function (formValues) {
        if (this.topSearchForm.valid) {
            this.pcodepromoval = formValues.pcode + ':' + formValues.currpromochkbx;
            console.log(this.pcodepromoval);
            this.pcodeSubmitted.emit(this.pcodepromoval);
        }
    };
    SearchcompComponent.prototype.validatePCode = function () {
        return this.pcode.valid || this.pcode.untouched;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SearchcompComponent.prototype, "pcodeSubmitted", void 0);
    SearchcompComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchcomp',
            template: __webpack_require__(/*! ./searchcomp.component.html */ "./src/app/searchcomp/searchcomp.component.html"),
            styles: [__webpack_require__(/*! ./searchcomp.component.css */ "./src/app/searchcomp/searchcomp.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchcompComponent);
    return SearchcompComponent;
}());



/***/ }),

/***/ "./src/app/searchcriteria/searchcriteria.component.css":
/*!*************************************************************!*\
  !*** ./src/app/searchcriteria/searchcriteria.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/searchcriteria/searchcriteria.component.html":
/*!**************************************************************!*\
  !*** ./src/app/searchcriteria/searchcriteria.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  searchcriteria works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/searchcriteria/searchcriteria.component.ts":
/*!************************************************************!*\
  !*** ./src/app/searchcriteria/searchcriteria.component.ts ***!
  \************************************************************/
/*! exports provided: SearchcriteriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchcriteriaComponent", function() { return SearchcriteriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchcriteriaComponent = /** @class */ (function () {
    function SearchcriteriaComponent() {
    }
    SearchcriteriaComponent.prototype.ngOnInit = function () {
    };
    SearchcriteriaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchcriteria',
            template: __webpack_require__(/*! ./searchcriteria.component.html */ "./src/app/searchcriteria/searchcriteria.component.html"),
            styles: [__webpack_require__(/*! ./searchcriteria.component.css */ "./src/app/searchcriteria/searchcriteria.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchcriteriaComponent);
    return SearchcriteriaComponent;
}());



/***/ }),

/***/ "./src/app/searchservice.service.ts":
/*!******************************************!*\
  !*** ./src/app/searchservice.service.ts ***!
  \******************************************/
/*! exports provided: SearchserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchserviceService", function() { return SearchserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchserviceService = /** @class */ (function () {
    function SearchserviceService(httpClient) {
        this.httpClient = httpClient;
    }
    SearchserviceService.prototype.getSearchPromoResults = function (pcode) {
        console.log('Sending HTTP requst to SpringBoot', pcode);
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendUrl + "/api/search/" + pcode, { responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    SearchserviceService.prototype.errorHandler = function (error) {
        //return observableThrowError(error.message || 'Server Error');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    SearchserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchserviceService);
    return SearchserviceService;
}());



/***/ }),

/***/ "./src/app/shared/icommunication.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/icommunication.service.ts ***!
  \**************************************************/
/*! exports provided: IcommunicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IcommunicationService", function() { return IcommunicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IcommunicationService = /** @class */ (function () {
    function IcommunicationService() {
        this.messageSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
        this.currentMessage = this.messageSource.asObservable();
    }
    IcommunicationService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    IcommunicationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], IcommunicationService);
    return IcommunicationService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    //backendUrl: 'http://aptservices-dev.apps.depaas.qcorpaa.aa.com'
    backendUrl: 'https://aptest.apps.depaas.qcorpaa.aa.com'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\893108\Documents\APT-GIT\apt\apt-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map