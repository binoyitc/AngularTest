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
/* harmony import */ var src_app_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var src_app_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shopping/shopping.component */ "./src/app/shopping/shopping.component.ts");
/* harmony import */ var src_app_food_food_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/food/food.component */ "./src/app/food/food.component.ts");
/* harmony import */ var src_app_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var src_app_whattovisit_whattovisit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/whattovisit/whattovisit.component */ "./src/app/whattovisit/whattovisit.component.ts");
/* harmony import */ var src_app_wheretostay_wheretostay_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/wheretostay/wheretostay.component */ "./src/app/wheretostay/wheretostay.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: src_app_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'shopping', component: src_app_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingComponent"] },
    { path: 'food', component: src_app_food_food_component__WEBPACK_IMPORTED_MODULE_4__["FoodComponent"] },
    { path: 'contact', component: src_app_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: 'whattovisit', component: src_app_whattovisit_whattovisit_component__WEBPACK_IMPORTED_MODULE_6__["WhattovisitComponent"] },
    { path: 'wheretostay', component: src_app_wheretostay_wheretostay_component__WEBPACK_IMPORTED_MODULE_7__["WheretostayComponent"] }
];
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark fixed-top {{headerStyle}}\" id=\"mainNav\">\n  <div class=\"container\">\n    <a class=\"navbar-brand js-scroll-trigger\" routerLink=\"\">{{siteName}}</a>\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n      aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            Menu\n            <i class=\"fa fa-bars\"></i>\n          </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav text-uppercase ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" id='shipping' routerLink=\"shopping\">{{heading1}}</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" routerLink=\"food\">{{heading2}}</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" routerLink=\"whattovisit\">{{heading3}}</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" routerLink=\"wheretostay\">{{heading4}}</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" routerLink=\"contact\">{{heading5}}</a>\n        </li>\n      </ul>\n    </div>   \n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n<!-- Footer -->\n<footer>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <span class=\"copyright\">Copyright &copy; Cochin1 Website 2018</span>\n        </div>\n        <div class=\"col-md-4\">\n          <ul class=\"list-inline social-buttons\">\n            <li class=\"list-inline-item\">\n              <a href=\"#\">\n                <i class=\"fa fa-twitter\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"https://www.facebook.com/Cochin1-1632395833484480/\" target=\"_blank\">\n                <i class=\"fa fa-facebook\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"#\">\n                <i class=\"fa fa-linkedin\"></i>\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-4\">\n          <ul class=\"list-inline quicklinks\">\n            <li class=\"list-inline-item\">\n              <a href=\"#\">Privacy Policy</a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"#\">Terms of Use</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </footer>\n  <input type='hidden' id='headerStyle' value='{{headerStyle}}'>\n"

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
/* harmony import */ var src_app_global_param_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/global-param-service.service */ "./src/app/global-param-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_globalParamServiceService) {
        var _this = this;
        this._globalParamServiceService = _globalParamServiceService;
        this.siteName = 'Cochin1.com';
        this.shopName = 'COCHIN1';
        this.heading1 = 'SHOPPING';
        this.heading2 = 'FOOD';
        this.heading3 = 'What to Visit';
        this.heading4 = 'Where to Stay';
        this.heading5 = 'Contact';
        this.headerStyle = this._globalParamServiceService.changeEmitted$.subscribe(function (text) {
            _this.headerStyle = text;
            console.log(text);
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_global_param_service_service__WEBPACK_IMPORTED_MODULE_1__["GlobalParamServiceService"]])
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
/* harmony import */ var _shopping_shopping_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping/shopping.component */ "./src/app/shopping/shopping.component.ts");
/* harmony import */ var _food_food_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food/food.component */ "./src/app/food/food.component.ts");
/* harmony import */ var _whattovisit_whattovisit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./whattovisit/whattovisit.component */ "./src/app/whattovisit/whattovisit.component.ts");
/* harmony import */ var _wheretostay_wheretostay_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wheretostay/wheretostay.component */ "./src/app/wheretostay/wheretostay.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
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
                _shopping_shopping_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingComponent"],
                _food_food_component__WEBPACK_IMPORTED_MODULE_5__["FoodComponent"],
                _whattovisit_whattovisit_component__WEBPACK_IMPORTED_MODULE_6__["WhattovisitComponent"],
                _wheretostay_wheretostay_component__WEBPACK_IMPORTED_MODULE_7__["WheretostayComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- Contact -->\n  <section id=\"contact\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n          <h2 class=\"section-heading text-uppercase\">Contact Us</h2>\n          <h3 class=\"section-subheading text-muted\">Contact Us / Ask for More Information.</h3>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <form id=\"contactForm\" name=\"sentMessage\" novalidate>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <input class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Your Name *\" required data-validation-required-message=\"Please enter your name.\">\n                  <p class=\"help-block text-danger\"></p>\n                </div>\n                <div class=\"form-group\">\n                  <input class=\"form-control\" id=\"email\" type=\"email\" placeholder=\"Your Email *\" required data-validation-required-message=\"Please enter your email address.\">\n                  <p class=\"help-block text-danger\"></p>\n                </div>\n                <div class=\"form-group\">\n                  <input class=\"form-control\" id=\"phone\" type=\"tel\" placeholder=\"Your Phone *\" required data-validation-required-message=\"Please enter your phone number.\">\n                  <p class=\"help-block text-danger\"></p>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <textarea class=\"form-control\" id=\"message\" placeholder=\"Your Message *\" required data-validation-required-message=\"Please enter a message.\"></textarea>\n                  <p class=\"help-block text-danger\"></p>\n                </div>\n              </div>\n              <div class=\"clearfix\"></div>\n              <div class=\"col-lg-12 text-center\">\n                <div id=\"success\"></div>\n                <button id=\"sendMessageButton\" class=\"btn btn-primary btn-xl text-uppercase\" type=\"submit\">Send Message</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_global_param_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/global-param-service.service */ "./src/app/global-param-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(globalParamServiceService) {
        this.globalParamServiceService = globalParamServiceService;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.globalParamServiceService.emitChange('navbar-shrink');
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_global_param_service_service__WEBPACK_IMPORTED_MODULE_1__["GlobalParamServiceService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/food/FoodObj.ts":
/*!*********************************!*\
  !*** ./src/app/food/FoodObj.ts ***!
  \*********************************/
/*! exports provided: FoodObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodObj", function() { return FoodObj; });
var FoodObj = /** @class */ (function () {
    function FoodObj(name, subName, img, projName, projSubName, projImg, projDesc) {
        this.name = name;
        this.subName = subName;
        this.img = img;
        this.projName = projName;
        this.projSubName = projSubName;
        this.projImg = projImg;
        this.projDesc = projDesc;
    }
    return FoodObj;
}());



/***/ }),

/***/ "./src/app/food/food.component.css":
/*!*****************************************!*\
  !*** ./src/app/food/food.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  img:hover {\r\n    -webkit-animation: shake 0.5s;\r\n            animation: shake 0.5s;\r\n    -webkit-animation-iteration-count: 1;\r\n            animation-iteration-count: 1;\r\n  }\r\n  \r\n  @-webkit-keyframes shake {\r\n    0% { -webkit-transform: translate(0px, -2px) rotate(0deg); transform: translate(0px, -2px) rotate(0deg); }    \r\n  }\r\n  \r\n  @keyframes shake {\r\n    0% { -webkit-transform: translate(0px, -2px) rotate(0deg); transform: translate(0px, -2px) rotate(0deg); }    \r\n  }"

/***/ }),

/***/ "./src/app/food/food.component.html":
/*!******************************************!*\
  !*** ./src/app/food/food.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- food Grid -->\n<!--section class=\"bg-light\" id=\"food\" style=\"background-color: black;background-attachment: fixed;background-image:url('assets/img/food4.jpg')\"-->\n<section class=\"bg-light\" id=\"food\" style=\"background-color: black;background-attachment: fixed;\">\n    <div class=\"container\" style=\"background-color: rgba(20,1,2,0.1);\">\n      <div class=\"row\">\n          <div class=\"col-lg-12 text-center\" style=\"color:#193235;\">\n              <h2 class=\"section-heading text-uppercase\">{{heading1}}</h2>\n              <span class=\"text-primary\">{{heading2}}</span>\n            </div>\n      </div>\n      <div class=\"row\">\n          <div *ngFor=\"let foodObj of foodObjs\" class=\"col-md-4 col-sm-6 portfolio-item\">\n              <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#portfolioModal1\">\n                  <div class=\"portfolio-hover\">\n                    <div class=\"portfolio-hover-content\">\n                      <i class=\"fa fa-plus fa-3x\"></i>\n                    </div>\n                  </div>\n                  <img class=\"img-fluid\" src=\"{{foodObj.img}}\" alt=\"\">\n                </a>\n                <div class=\"portfolio-caption\">\n                  <h4 style=\"color:#193235;\">{{foodObj.name}}</h4>\n                  <p class=\"text-primary\">{{foodObj.subName}}</p>\n                </div>\n          </div>      \n      </div>\n    </div>\n  </section>\n"

/***/ }),

/***/ "./src/app/food/food.component.ts":
/*!****************************************!*\
  !*** ./src/app/food/food.component.ts ***!
  \****************************************/
/*! exports provided: FoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodComponent", function() { return FoodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_food_FoodObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/food/FoodObj */ "./src/app/food/FoodObj.ts");
/* harmony import */ var src_app_global_param_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/global-param-service.service */ "./src/app/global-param-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FoodComponent = /** @class */ (function () {
    function FoodComponent(globalParamServiceService) {
        this.globalParamServiceService = globalParamServiceService;
        this.heading1 = 'FOOD';
        this.heading2 = 'Explore the Traditional Kerala Food. Enjoy the taste of kerala.';
        this.foodObjs = [];
    }
    FoodComponent.prototype.ngOnInit = function () {
        this.globalParamServiceService.emitChange('navbar-shrink');
        this.foodObjs = [
            new src_app_food_FoodObj__WEBPACK_IMPORTED_MODULE_1__["FoodObj"]('Traditional', 'North Indian', 'assets/img/portfolio/Traditional.jpg', '', '', '', ''),
            new src_app_food_FoodObj__WEBPACK_IMPORTED_MODULE_1__["FoodObj"]('Naan', 'North Indian', 'assets/img/portfolio/garlic-naan.jpg', '', '', '', ''),
            new src_app_food_FoodObj__WEBPACK_IMPORTED_MODULE_1__["FoodObj"]('Biryani', 'Indian', 'assets/img/portfolio/Biryani.jpg', '', '', '', ''),
            new src_app_food_FoodObj__WEBPACK_IMPORTED_MODULE_1__["FoodObj"]('Traditional', 'North Indian', 'assets/img/portfolio/Traditional.jpg', '', '', '', ''),
            new src_app_food_FoodObj__WEBPACK_IMPORTED_MODULE_1__["FoodObj"]('Naan', 'North Indian', 'assets/img/portfolio/garlic-naan.jpg', '', '', '', ''),
            new src_app_food_FoodObj__WEBPACK_IMPORTED_MODULE_1__["FoodObj"]('Biryani', 'Indian', 'assets/img/portfolio/Biryani.jpg', '', '', '', '')
        ];
    };
    FoodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food',
            template: __webpack_require__(/*! ./food.component.html */ "./src/app/food/food.component.html"),
            styles: [__webpack_require__(/*! ./food.component.css */ "./src/app/food/food.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_global_param_service_service__WEBPACK_IMPORTED_MODULE_2__["GlobalParamServiceService"]])
    ], FoodComponent);
    return FoodComponent;
}());



/***/ }),

/***/ "./src/app/global-param-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/global-param-service.service.ts ***!
  \*************************************************/
/*! exports provided: GlobalParamServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalParamServiceService", function() { return GlobalParamServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalParamServiceService = /** @class */ (function () {
    function GlobalParamServiceService() {
        // Observable string sources
        this.emitChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Observable string streams
        this.changeEmitted$ = this.emitChangeSource.asObservable();
    }
    // Service message commands
    GlobalParamServiceService.prototype.emitChange = function (change) {
        this.emitChangeSource.next(change);
    };
    GlobalParamServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GlobalParamServiceService);
    return GlobalParamServiceService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*jssor slider loading skin spin css*/\r\n.jssorl-009-spin img {\r\n    -webkit-animation-name: jssorl-009-spin;\r\n            animation-name: jssorl-009-spin;\r\n    -webkit-animation-duration: 1.6s;\r\n            animation-duration: 1.6s;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n    -webkit-animation-timing-function: linear;\r\n            animation-timing-function: linear;\r\n}\r\n@-webkit-keyframes jssorl-009-spin {\r\n    from { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n@keyframes jssorl-009-spin {\r\n    from { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n/*jssor slider bullet skin 032 css*/\r\n.jssorb032 {position:absolute;}\r\n.jssorb032 .i {position:absolute;cursor:pointer;}\r\n.jssorb032 .i .b {fill:#fff;fill-opacity:0.7;stroke:#000;stroke-width:1200;stroke-miterlimit:10;stroke-opacity:0.25;}\r\n.jssorb032 .i:hover .b {fill:#000;fill-opacity:.6;stroke:#fff;stroke-opacity:.35;}\r\n.jssorb032 .iav .b {fill:#000;fill-opacity:1;stroke:#fff;stroke-opacity:.35;}\r\n.jssorb032 .i.idn {opacity:.3;}\r\n/*jssor slider arrow skin 051 css*/\r\n.jssora051 {display:block;position:absolute;cursor:pointer;}\r\n.jssora051 .a {fill:none;stroke:#fff;stroke-width:360;stroke-miterlimit:10;}\r\n.jssora051:hover {opacity:.8;}\r\n.jssora051.jssora051dn {opacity:.5;}\r\n.jssora051.jssora051ds {opacity:.3;pointer-events:none;}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<header class=\"masthead\" id=\"headerImage\" [ngStyle]=\"{ 'background-image': 'url(' + homeBkGrImage + ')'}\">\n  <div class=\"container\">\n    <div class=\"intro-text\">\n      <div class=\"intro-lead-in\">{{header1}}</div>\n      <div class=\"intro-heading text-uppercase\">{{header2}}</div>\n      <a class=\"btn btn-primary btn-xl text-uppercase js-scroll-trigger\" routerLink=\"shopping\">{{button1}}</a>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_global_param_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/global-param-service.service */ "./src/app/global-param-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(globalParamServiceService) {
        this.globalParamServiceService = globalParamServiceService;
        this.header1 = 'Welcome To Cochin1.com!';
        this.header2 = 'Gateway to Cochin..';
        this.button1 = 'Tell Me More';
        this.homeBkGrImage = 'assets/img/header-bg3.jpg'; //'http://www.cochin1.com/img/header-bg.jpg';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.globalParamServiceService.emitChange('home');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_global_param_service_service__WEBPACK_IMPORTED_MODULE_1__["GlobalParamServiceService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shopping/ShoppingObj.ts":
/*!*****************************************!*\
  !*** ./src/app/shopping/ShoppingObj.ts ***!
  \*****************************************/
/*! exports provided: ShoppingObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingObj", function() { return ShoppingObj; });
var ShoppingObj = /** @class */ (function () {
    function ShoppingObj(name, subName, img, projName, projSubName, projImg, projDesc) {
        this.name = name;
        this.subName = subName;
        this.img = img;
        this.projName = projName;
        this.projSubName = projSubName;
        this.projImg = projImg;
        this.projDesc = projDesc;
    }
    return ShoppingObj;
}());



/***/ }),

/***/ "./src/app/shopping/shopping.component.css":
/*!*************************************************!*\
  !*** ./src/app/shopping/shopping.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img:hover {\r\n    -webkit-animation: shake 0.5s;\r\n            animation: shake 0.5s;\r\n    -webkit-animation-iteration-count: 1;\r\n            animation-iteration-count: 1;\r\n  }\r\n  \r\n  @-webkit-keyframes shake {\r\n    0% { -webkit-transform: translate(0px, -2px) rotate(0deg); transform: translate(0px, -2px) rotate(0deg); }    \r\n  }\r\n  \r\n  @keyframes shake {\r\n    0% { -webkit-transform: translate(0px, -2px) rotate(0deg); transform: translate(0px, -2px) rotate(0deg); }    \r\n  }"

/***/ }),

/***/ "./src/app/shopping/shopping.component.html":
/*!**************************************************!*\
  !*** ./src/app/shopping/shopping.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Shopping -->\n<section class=\"bg-light\" id=\"shopping\" style=\"background-color: black;background-attachment: fixed;background-image:url('assets/img/shopping.jpg')\">\n  <div class=\"container\" style=\"background-color: rgba(100,2,2,0.3);\">\n    \n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\" style=\"color:white;\">\n        <h2 class=\"section-heading text-uppercase\">{{heading1}}</h2>\n        <span class=\"text-primary\">{{heading2}}</span>\n      </div>\n    </div>\n    <div class=\"row\">\n        <div *ngFor=\"let shoppingObj of shoppingObjs\" class=\"col-md-4 col-sm-6 portfolio-item\">\n            <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#portfolioModal1\">\n                <div class=\"portfolio-hover\">\n                  <div class=\"portfolio-hover-content\">\n                    <i class=\"fa fa-plus fa-3x\"></i>\n                  </div>\n                </div>\n                <img class=\"img-fluid\" src=\"{{shoppingObj.img}}\" alt=\"\">\n              </a>\n              <div class=\"portfolio-caption\">\n                <h4 style=\"color:white;\">{{shoppingObj.name}}</h4>\n                <p class=\"text-primary\">{{shoppingObj.subName}}</p>\n              </div>\n        </div>      \n    </div>\n  </div>\n</section>\n<!-- Modal 1 -->\n<div class=\"portfolio-modal modal fade\" id=\"portfolioModal1\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"close-modal\" data-dismiss=\"modal\">\n          <div class=\"lr\">\n            <div class=\"rl\"></div>\n          </div>\n        </div>\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-lg-8 mx-auto\">\n              <div class=\"modal-body\">\n                <!-- Project Details Go Here -->\n                <h2 class=\"text-uppercase\">Project Name</h2>\n                <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/portfolio/01-full.jpg\" alt=\"\">\n                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>\n                <ul class=\"list-inline\">\n                  <li>Date: January 2017</li>\n                  <li>Client: Threads</li>\n                  <li>Category: Illustration</li>\n                </ul>\n                <button class=\"btn btn-primary\" data-dismiss=\"modal\" type=\"button\">\n                  <i class=\"fa fa-times\"></i>\n                  Close Project</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Modal 2 -->\n  <div class=\"portfolio-modal modal fade\" id=\"portfolioModal2\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"close-modal\" data-dismiss=\"modal\">\n            <div class=\"lr\">\n              <div class=\"rl\"></div>\n            </div>\n          </div>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-lg-8 mx-auto\">\n                <div class=\"modal-body\">\n                  <!-- Project Details Go Here -->\n                  <h2 class=\"text-uppercase\">Project Name</h2>\n                  <p class=\"item-intro text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                  <img class=\"img-fluid d-block mx-auto\" src=\"assets/img/portfolio/02-full.jpg\" alt=\"\">\n                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>\n                  <ul class=\"list-inline\">\n                    <li>Date: January 2017</li>\n                    <li>Client: Explore</li>\n                    <li>Category: Graphic Design</li>\n                  </ul>\n                  <button class=\"btn btn-primary\" data-dismiss=\"modal\" type=\"button\">\n                    <i class=\"fa fa-times\"></i>\n                    Close Project</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/shopping/shopping.component.ts":
/*!************************************************!*\
  !*** ./src/app/shopping/shopping.component.ts ***!
  \************************************************/
/*! exports provided: ShoppingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingComponent", function() { return ShoppingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ShoppingObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShoppingObj */ "./src/app/shopping/ShoppingObj.ts");
/* harmony import */ var src_app_global_param_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/global-param-service.service */ "./src/app/global-param-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppingComponent = /** @class */ (function () {
    function ShoppingComponent(globalParamServiceService) {
        this.globalParamServiceService = globalParamServiceService;
        this.heading1 = 'SHOPPING';
        this.heading2 = 'Best Collections in Cochin.';
        this.shoppingObjs = [];
    }
    ShoppingComponent.prototype.ngOnInit = function () {
        this.globalParamServiceService.emitChange('navbar-shrink');
        // name: String, subName: String, projName: String,projSubName: String,projImg: String,projDesc: String
        this.shoppingObjs = [new _ShoppingObj__WEBPACK_IMPORTED_MODULE_1__["ShoppingObj"]('Cloaths', 'Illustration', 'assets/img/portfolio/01-thumbnail.jpg', '', '', '', ''),
            new _ShoppingObj__WEBPACK_IMPORTED_MODULE_1__["ShoppingObj"]('Explore', 'Graphic Design', 'assets/img/portfolio/02-thumbnail.jpg', '', '', '', ''),
            new _ShoppingObj__WEBPACK_IMPORTED_MODULE_1__["ShoppingObj"]('Finish', 'Identity', 'assets/img/portfolio/03-thumbnail.jpg', '', '', '', ''),
            new _ShoppingObj__WEBPACK_IMPORTED_MODULE_1__["ShoppingObj"]('Cloaths', 'Illustration', 'assets/img/portfolio/01-thumbnail.jpg', '', '', '', ''),
            new _ShoppingObj__WEBPACK_IMPORTED_MODULE_1__["ShoppingObj"]('Explore', 'Graphic Design', 'assets/img/portfolio/02-thumbnail.jpg', '', '', '', ''),
            new _ShoppingObj__WEBPACK_IMPORTED_MODULE_1__["ShoppingObj"]('Finish', 'Identity', 'assets/img/portfolio/03-thumbnail.jpg', '', '', '', '')
        ];
    };
    ShoppingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping',
            template: __webpack_require__(/*! ./shopping.component.html */ "./src/app/shopping/shopping.component.html"),
            styles: [__webpack_require__(/*! ./shopping.component.css */ "./src/app/shopping/shopping.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_global_param_service_service__WEBPACK_IMPORTED_MODULE_2__["GlobalParamServiceService"]])
    ], ShoppingComponent);
    return ShoppingComponent;
}());



/***/ }),

/***/ "./src/app/whattovisit/Place.ts":
/*!**************************************!*\
  !*** ./src/app/whattovisit/Place.ts ***!
  \**************************************/
/*! exports provided: PlaceObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceObj", function() { return PlaceObj; });
var PlaceObj = /** @class */ (function () {
    function PlaceObj(name, subName, img, projName, projSubName, projImg, projDesc) {
        this.name = name;
        this.subName = subName;
        this.img = img;
        this.projName = projName;
        this.projSubName = projSubName;
        this.projImg = projImg;
        this.projDesc = projDesc;
    }
    return PlaceObj;
}());



/***/ }),

/***/ "./src/app/whattovisit/whattovisit.component.css":
/*!*******************************************************!*\
  !*** ./src/app/whattovisit/whattovisit.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img:hover {\r\n    -webkit-animation: shake 0.5s;\r\n            animation: shake 0.5s;\r\n    -webkit-animation-iteration-count: 1;\r\n            animation-iteration-count: 1;\r\n  }\r\n  \r\n  @-webkit-keyframes shake {\r\n    0% { -webkit-transform: translate(0px, -2px) rotate(0deg); transform: translate(0px, -2px) rotate(0deg); }    \r\n  }\r\n  \r\n  @keyframes shake {\r\n    0% { -webkit-transform: translate(0px, -2px) rotate(0deg); transform: translate(0px, -2px) rotate(0deg); }    \r\n  }"

/***/ }),

/***/ "./src/app/whattovisit/whattovisit.component.html":
/*!********************************************************!*\
  !*** ./src/app/whattovisit/whattovisit.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"bg-light\" id=\"whattovisit\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n          <h2 class=\"section-heading text-uppercase\">{{head1}}</h2>\n          <h3 class=\"section-subheading text-muted\">{{head2}}</h3>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div *ngFor=\"let place of places\" class=\"col-sm-4\">\n          <div class=\"team-member\">\n            <img class=\"mx-auto rounded-circle\" src=\"{{place.img}}\" alt=\"\">\n            <h4>{{place.name}}</h4>\n            <p class=\"text-muted\">{{place.subName}}</p>\n            <ul class=\"list-inline social-buttons\">\n              <li class=\"list-inline-item\">\n                <a href=\"#\">\n                  <i class=\"fa fa-twitter\"></i>\n                </a>\n              </li>\n              <li class=\"list-inline-item\">\n                <a href=\"#\">\n                  <i class=\"fa fa-facebook\"></i>\n                </a>\n              </li>\n              <li class=\"list-inline-item\">\n                <a href=\"#\">\n                  <i class=\"fa fa-linkedin\"></i>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>        \n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-8 mx-auto text-center\">\n          <p class=\"large text-muted\">Cochin, the tourist paradise in India.</p>\n          <a class=\"btn btn-primary btn-xl text-uppercase js-scroll-trigger\" href=\"#\">Tell Me More</a>\n        </div>\n      </div>\n    </div>\n  </section>\n"

/***/ }),

/***/ "./src/app/whattovisit/whattovisit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/whattovisit/whattovisit.component.ts ***!
  \******************************************************/
/*! exports provided: WhattovisitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhattovisitComponent", function() { return WhattovisitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_global_param_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/global-param-service.service */ "./src/app/global-param-service.service.ts");
/* harmony import */ var src_app_whattovisit_Place__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/whattovisit/Place */ "./src/app/whattovisit/Place.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WhattovisitComponent = /** @class */ (function () {
    function WhattovisitComponent(globalParamServiceService) {
        this.globalParamServiceService = globalParamServiceService;
        this.head1 = 'What To Visit in COCHIN';
        this.head2 = 'Cochin, the tourist paradise in India.';
        this.places = [];
    }
    WhattovisitComponent.prototype.ngOnInit = function () {
        this.globalParamServiceService.emitChange('navbar-shrink');
        this.places = [
            new src_app_whattovisit_Place__WEBPACK_IMPORTED_MODULE_2__["PlaceObj"]('Fort Kochi', 'Fort Kochi, heart of Cochin.', 'http://irisholidays.com/keralatourism/wp-content/uploads/2011/08/chinese-fishing-nets.jpg', '', '', '', ''),
            new src_app_whattovisit_Place__WEBPACK_IMPORTED_MODULE_2__["PlaceObj"]('Mattancherry', 'Mattancherry, Find Dutch Palace.', 'http://irisholidays.com/keralatourism/wp-content/uploads/2016/01/local-markets-kerala.jpg', '', '', '', ''),
            new src_app_whattovisit_Place__WEBPACK_IMPORTED_MODULE_2__["PlaceObj"]('Bolghatty & Vypeen Islands', 'Bolghatty Island, a tourist paradise', 'http://irisholidays.com/keralatourism/wp-content/uploads/2014/03/bolgatty-palace-island-hotel-heritage-resort.jpg', '', '', '', '')
        ];
    };
    WhattovisitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-whattovisit',
            template: __webpack_require__(/*! ./whattovisit.component.html */ "./src/app/whattovisit/whattovisit.component.html"),
            styles: [__webpack_require__(/*! ./whattovisit.component.css */ "./src/app/whattovisit/whattovisit.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_global_param_service_service__WEBPACK_IMPORTED_MODULE_1__["GlobalParamServiceService"]])
    ], WhattovisitComponent);
    return WhattovisitComponent;
}());



/***/ }),

/***/ "./src/app/wheretostay/Place.ts":
/*!**************************************!*\
  !*** ./src/app/wheretostay/Place.ts ***!
  \**************************************/
/*! exports provided: PlaceObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceObj", function() { return PlaceObj; });
var PlaceObj = /** @class */ (function () {
    function PlaceObj(name, subName, img, projName, projSubName, projImg, projDesc) {
        this.name = name;
        this.subName = subName;
        this.img = img;
        this.projName = projName;
        this.projSubName = projSubName;
        this.projImg = projImg;
        this.projDesc = projDesc;
    }
    return PlaceObj;
}());



/***/ }),

/***/ "./src/app/wheretostay/wheretostay.component.css":
/*!*******************************************************!*\
  !*** ./src/app/wheretostay/wheretostay.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img:hover {\r\n    -webkit-animation: shake 0.5s;\r\n            animation: shake 0.5s;\r\n    -webkit-animation-iteration-count: 1;\r\n            animation-iteration-count: 1;\r\n  }\r\n  \r\n  @-webkit-keyframes shake {\r\n    0% { -webkit-transform: translate(0px, -2px) rotate(0deg); transform: translate(0px, -2px) rotate(0deg); }    \r\n  }\r\n  \r\n  @keyframes shake {\r\n    0% { -webkit-transform: translate(0px, -2px) rotate(0deg); transform: translate(0px, -2px) rotate(0deg); }    \r\n  }"

/***/ }),

/***/ "./src/app/wheretostay/wheretostay.component.html":
/*!********************************************************!*\
  !*** ./src/app/wheretostay/wheretostay.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- wheretostay -->\n<section class=\"bg-light\" id=\"wheretostay\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n          <h2 class=\"section-heading text-uppercase\">Where To Stay in COCHIN</h2>\n          <h3 class=\"section-subheading text-muted\">Hotels in Cochin..</h3>\n        </div>\n      </div>\n      <div class=\"row\">\n          <div *ngFor=\"let place of places\" class=\"col-sm-4\">\n              <div class=\"team-member\">\n                <img class=\"mx-auto rounded-circle\" src=\"{{place.img}}\" alt=\"\">\n                <h4>{{place.name}}</h4>\n                <p class=\"text-muted\">{{place.subName}}</p>\n                <ul class=\"list-inline social-buttons\">\n                  <li class=\"list-inline-item\">\n                    <a href=\"#\">\n                      <i class=\"fa fa-twitter\"></i>\n                    </a>\n                  </li>\n                  <li class=\"list-inline-item\">\n                    <a href=\"#\">\n                      <i class=\"fa fa-facebook\"></i>\n                    </a>\n                  </li>\n                  <li class=\"list-inline-item\">\n                    <a href=\"#\">\n                      <i class=\"fa fa-linkedin\"></i>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-8 mx-auto text-center\">\n          <p class=\"large text-muted\">Cochin is one of the best place in India. Explore and Enjoy staying in Cochin!</p>\n          <a class=\"btn btn-primary btn-xl text-uppercase js-scroll-trigger\" href=\"#shopping\">Tell Me More</a>\n        </div>\n      </div>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/wheretostay/wheretostay.component.ts":
/*!******************************************************!*\
  !*** ./src/app/wheretostay/wheretostay.component.ts ***!
  \******************************************************/
/*! exports provided: WheretostayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WheretostayComponent", function() { return WheretostayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_global_param_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/global-param-service.service */ "./src/app/global-param-service.service.ts");
/* harmony import */ var src_app_wheretostay_Place__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/wheretostay/Place */ "./src/app/wheretostay/Place.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WheretostayComponent = /** @class */ (function () {
    function WheretostayComponent(globalParamServiceService) {
        this.globalParamServiceService = globalParamServiceService;
        this.places = [];
    }
    WheretostayComponent.prototype.ngOnInit = function () {
        this.globalParamServiceService.emitChange('navbar-shrink');
        this.places = [
            new src_app_wheretostay_Place__WEBPACK_IMPORTED_MODULE_2__["PlaceObj"]('Hotel1', 'Best Hotel in Fort Kochi', 'assets/img/team/1.jpg', '', '', '', ''),
            new src_app_wheretostay_Place__WEBPACK_IMPORTED_MODULE_2__["PlaceObj"]('Hotel2', 'Mattancherry, Find Dutch Palace.', 'assets/img/team/2.jpg', '', '', '', ''),
            new src_app_wheretostay_Place__WEBPACK_IMPORTED_MODULE_2__["PlaceObj"]('Hotel3', 'Bolghatty Island, a tourist paradise', 'assets/img/team/3.jpg', '', '', '', '')
        ];
    };
    WheretostayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wheretostay',
            template: __webpack_require__(/*! ./wheretostay.component.html */ "./src/app/wheretostay/wheretostay.component.html"),
            styles: [__webpack_require__(/*! ./wheretostay.component.css */ "./src/app/wheretostay/wheretostay.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_global_param_service_service__WEBPACK_IMPORTED_MODULE_1__["GlobalParamServiceService"]])
    ], WheretostayComponent);
    return WheretostayComponent;
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

module.exports = __webpack_require__(/*! C:\WorkSpace_Binoy\ShopsAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map