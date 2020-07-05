(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _components_pic_sub_main_page_pic_sub_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pic-sub-main-page/pic-sub-main-page.component */ "./src/app/components/pic-sub-main-page/pic-sub-main-page.component.ts");
/* harmony import */ var _components_pic_subject_main_page_pic_subject_main_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pic-subject-main-page/pic-subject-main-page.component */ "./src/app/components/pic-subject-main-page/pic-subject-main-page.component.ts");
/* harmony import */ var _components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/autocomplete/autocomplete.component */ "./src/app/components/autocomplete/autocomplete.component.ts");
/* harmony import */ var _components_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/buttons/buttons.component */ "./src/app/components/buttons/buttons.component.ts");










const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'card', component: _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"] },
    { path: 'autocomplete', component: _components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_6__["AutocompleteComponent"] },
    { path: 'buttons', component: _components_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_7__["ButtonsComponent"] },
    { path: 'pic-sub-main-page', component: _components_pic_sub_main_page_pic_sub_main_page_component__WEBPACK_IMPORTED_MODULE_4__["PicSubMainPageComponent"] },
    { path: 'pic-subject-main-page', component: _components_pic_subject_main_page_pic_subject_main_page_component__WEBPACK_IMPORTED_MODULE_5__["PicSubjectMainPageComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/log-in/log-in.component */ "./src/app/components/log-in/log-in.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










class AppComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.title = 'angular-mat';
        this.panelOpenState = false;
    }
    openDialog() {
        const dialogRef = this.dialog.open(_components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_1__["LogInComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 72, vars: 2, consts: [["dir", "rtl", "color", "primary"], [2, "cursor", "pointer", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["routerLink", "/card", "mat-menu-item", ""], ["routerLink", "/autocomplete", "mat-menu-item", ""], ["routerLink", "/buttons", "mat-menu-item", ""], [3, "click"], [2, "position", "absolute", "left", "10px", "top", "rem 3"], [2, "text-align", "center", "margin", "0%"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [2, "position", "absolute", "left", "10px", "top", "rem 17", "font-size", "37px"], [1, "seconeLineMenu"], [1, "material-icons", 3, "matMenuTriggerFor"], ["menu22", "matMenu"], ["routerLink", "/pic-subject-main-page", "mat-menu-item", ""], ["mat-menu-item", ""], ["routerLink", "nav", "mat-menu-item", ""], ["routerLink", "/pic-sub-main-page", "mat-menu-item", ""], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-menu", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Card Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Autocomplete Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "buttons Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_13_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u05DB\u05E0\u05D9\u05E1\u05D4 | \u05D4\u05E8\u05E9\u05DE\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05DC\u05E1\u05DC\u05D5\u05DF \u05DC\u05D1\u05D9\u05EA \u05D5\u05DC\u05DE\u05E9\u05E8\u05D3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "shopping_cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05DC\u05D1\u05D9\u05EA \u05D5\u05DC\u05E1\u05DC\u05D5\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u05DC\u05E4\u05D9 \u05E0\u05D5\u05E9\u05D0\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "keyboard_arrow_down ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-menu", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05E0\u05D5\u05E3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05D0\u05D1\u05E1\u05D8\u05E8\u05E7\u05D8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05D8\u05D1\u05E2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "calnder Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC \u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u05D0\u05D5\u05E8\u05D1\u05E0\u05D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05DC\u05D7\u05D3\u05E8 \u05D9\u05DC\u05D3\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " \u05D8\u05D1\u05E2 \u05D3\u05D5\u05DE\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " \u05D0\u05D1\u05D9\u05D1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " \u05E0\u05D5\u05E9\u05D0\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u05DE\u05D1\u05E6\u05E2\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u05D7\u05D3\u05E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u05E6\u05E8\u05D5 \u05E7\u05E9\u05E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u05DE\u05DE\u05DC\u05D9\u05E6\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u05D0\u05D5\u05D3\u05D5\u05EA\u05D9\u05E0\u05D5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "router-outlet");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Dir"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarRow"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["_MatMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]], styles: [".mat-toolbar.mat-primary[_ngcontent-%COMP%] {\r\n    background: #232d54;\r\n    color: #fff;\r\n}\r\n.seconeLineMenu[_ngcontent-%COMP%]{\r\n    margin: 5%;\r\n    cursor: pointer;\r\n}\r\n.firstLine[_ngcontent-%COMP%]{\r\n    margin: 5%;\r\n    cursor: pointer;  \r\n    display: flex\r\n}\r\n  .mat-menu-content{\r\n    background-color:floralwhite\r\n  }\r\n  .mat-menu-item{\r\n      color: #404e88;\r\n  }\r\nbutton.mat-menu-item[_ngcontent-%COMP%]:hover {\r\n    color: red !important;\r\n}\r\n.mat-dialog-container[_ngcontent-%COMP%]{\r\n    background: #fff !important;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztBQUNmO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZjtBQUNKO0FBQ0E7SUFDSTtFQUNGO0FBRUE7TUFDSSxjQUFjO0VBQ2xCO0FBRUE7SUFDRSxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLDJCQUEyQjs7QUFFL0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjMyZDU0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnNlY29uZUxpbmVNZW51e1xyXG4gICAgbWFyZ2luOiA1JTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZmlyc3RMaW5le1xyXG4gICAgbWFyZ2luOiA1JTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjsgIFxyXG4gICAgZGlzcGxheTogZmxleFxyXG59XHJcbjo6bmctZGVlcCAubWF0LW1lbnUtY29udGVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ZmxvcmFsd2hpdGVcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAubWF0LW1lbnUtaXRlbXtcclxuICAgICAgY29sb3I6ICM0MDRlODg7XHJcbiAgfVxyXG5cclxuICBidXR0b24ubWF0LW1lbnUtaXRlbTpob3ZlciB7XHJcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxuICBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _module_matriel_module_matriel_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module-matriel/module-matriel.module */ "./src/app/module-matriel/module-matriel.module.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/autocomplete/autocomplete.component */ "./src/app/components/autocomplete/autocomplete.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/buttons/buttons.component */ "./src/app/components/buttons/buttons.component.ts");
/* harmony import */ var _components_pic_sub_main_page_pic_sub_main_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pic-sub-main-page/pic-sub-main-page.component */ "./src/app/components/pic-sub-main-page/pic-sub-main-page.component.ts");
/* harmony import */ var _components_pic_subject_main_page_pic_subject_main_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pic-subject-main-page/pic-subject-main-page.component */ "./src/app/components/pic-subject-main-page/pic-subject-main-page.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/log-in/log-in.component */ "./src/app/components/log-in/log-in.component.ts");
/* harmony import */ var _components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/validation-error/validation-error.component */ "./src/app/components/validation-error/validation-error.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");






























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_27__["GoogleLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_27__["GoogleLoginProvider"]('clientId'),
                    },
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_27__["FacebookLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_27__["FacebookLoginProvider"]('723513601563548'),
                    },
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_27__["AmazonLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_27__["AmazonLoginProvider"]('clientId'),
                    },
                ],
            },
        }
    ], imports: [[
            angularx_social_login__WEBPACK_IMPORTED_MODULE_27__["SocialLoginModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _module_matriel_module_matriel_module__WEBPACK_IMPORTED_MODULE_5__["MatModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_18__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__["FlexLayoutModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_25__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _components_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
        _components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_8__["AutocompleteComponent"],
        _components_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_10__["ButtonsComponent"],
        _components_pic_sub_main_page_pic_sub_main_page_component__WEBPACK_IMPORTED_MODULE_11__["PicSubMainPageComponent"],
        _components_pic_subject_main_page_pic_subject_main_page_component__WEBPACK_IMPORTED_MODULE_12__["PicSubjectMainPageComponent"],
        _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_23__["LogInComponent"],
        _components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_24__["ValidationErrorComponent"],
        _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_26__["SignUpComponent"]], imports: [angularx_social_login__WEBPACK_IMPORTED_MODULE_27__["SocialLoginModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _module_matriel_module_matriel_module__WEBPACK_IMPORTED_MODULE_5__["MatModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_18__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__["FlexLayoutModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_25__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _components_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
                    _components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_8__["AutocompleteComponent"],
                    _components_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_10__["ButtonsComponent"],
                    _components_pic_sub_main_page_pic_sub_main_page_component__WEBPACK_IMPORTED_MODULE_11__["PicSubMainPageComponent"],
                    _components_pic_subject_main_page_pic_subject_main_page_component__WEBPACK_IMPORTED_MODULE_12__["PicSubjectMainPageComponent"],
                    _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_23__["LogInComponent"],
                    _components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_24__["ValidationErrorComponent"],
                    _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_26__["SignUpComponent"],
                ],
                imports: [
                    angularx_social_login__WEBPACK_IMPORTED_MODULE_27__["SocialLoginModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _module_matriel_module_matriel_module__WEBPACK_IMPORTED_MODULE_5__["MatModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_18__["LayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__["FlexLayoutModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_25__["CommonModule"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
                providers: [
                    {
                        provide: 'SocialAuthServiceConfig',
                        useValue: {
                            autoLogin: false,
                            providers: [
                                {
                                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_27__["GoogleLoginProvider"].PROVIDER_ID,
                                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_27__["GoogleLoginProvider"]('clientId'),
                                },
                                {
                                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_27__["FacebookLoginProvider"].PROVIDER_ID,
                                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_27__["FacebookLoginProvider"]('723513601563548'),
                                },
                                {
                                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_27__["AmazonLoginProvider"].PROVIDER_ID,
                                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_27__["AmazonLoginProvider"]('clientId'),
                                },
                            ],
                        },
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/autocomplete/autocomplete.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/autocomplete/autocomplete.component.ts ***!
  \*******************************************************************/
/*! exports provided: _filter, AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_filter", function() { return _filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");









function AutocompleteComponent_mat_optgroup_6_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", name_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", name_r4, " ");
} }
function AutocompleteComponent_mat_optgroup_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-optgroup", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_mat_optgroup_6_mat_option_1_Template, 2, 2, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", group_r2.letter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r2.names);
} }
const _filter = (opt, value) => {
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};
/**
 * @title Option groups autocomplete
 */
class AutocompleteComponent {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.stateForm = this._formBuilder.group({
            stateGroup: '',
        });
        this.stateGroups = [{
                letter: 'A',
                names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
            }, {
                letter: 'C',
                names: ['California', 'Colorado', 'Connecticut']
            }, {
                letter: 'D',
                names: ['Delaware']
            }, {
                letter: 'F',
                names: ['Florida']
            }, {
                letter: 'G',
                names: ['Georgia']
            }, {
                letter: 'H',
                names: ['Hawaii']
            }, {
                letter: 'I',
                names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
            }, {
                letter: 'K',
                names: ['Kansas', 'Kentucky']
            }, {
                letter: 'L',
                names: ['Louisiana']
            }, {
                letter: 'M',
                names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
                    'Minnesota', 'Mississippi', 'Missouri', 'Montana']
            }, {
                letter: 'N',
                names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
                    'New Mexico', 'New York', 'North Carolina', 'North Dakota']
            }, {
                letter: 'O',
                names: ['Ohio', 'Oklahoma', 'Oregon']
            }, {
                letter: 'P',
                names: ['Pennsylvania']
            }, {
                letter: 'R',
                names: ['Rhode Island']
            }, {
                letter: 'S',
                names: ['South Carolina', 'South Dakota']
            }, {
                letter: 'T',
                names: ['Tennessee', 'Texas']
            }, {
                letter: 'U',
                names: ['Utah']
            }, {
                letter: 'V',
                names: ['Vermont', 'Virginia']
            }, {
                letter: 'W',
                names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
            }];
    }
    ngOnInit() {
        this.stateGroupOptions = this.stateForm.get('stateGroup').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(value => this._filterGroup(value)));
    }
    _filterGroup(value) {
        if (value) {
            return this.stateGroups
                .map(group => ({ letter: group.letter, names: _filter(group.names, value) }))
                .filter(group => group.names.length > 0);
        }
        return this.stateGroups;
    }
}
AutocompleteComponent.ɵfac = function AutocompleteComponent_Factory(t) { return new (t || AutocompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
AutocompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutocompleteComponent, selectors: [["app-autocomplete"]], decls: 8, vars: 5, consts: [[3, "formGroup"], ["type", "text", "matInput", "", "placeholder", "States Group", "formControlName", "stateGroup", "required", "", 3, "matAutocomplete"], ["autoGroup", "matAutocomplete"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-autocomplete", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AutocompleteComponent_mat_optgroup_6_Template, 2, 2, "mat-optgroup", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.stateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, ctx.stateGroupOptions));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOptgroup"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["div[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 20%;\r\n  left: 50%;\r\n  margin-top: -50px;\r\n  margin-left: -100px;\r\n  background-color: rgb(132, 204, 238);\r\n  max-width: 500px;\r\n  height: 400px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDIwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMyLCAyMDQsIDIzOCk7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-autocomplete',
                templateUrl: './autocomplete.component.html',
                styleUrls: ['./autocomplete.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/buttons/buttons.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/buttons/buttons.component.ts ***!
  \*********************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");








class ButtonsComponent {
    constructor() {
        this.startDate = new Date(1990, 0, 1);
    }
    ngOnInit() {
    }
}
ButtonsComponent.ɵfac = function ButtonsComponent_Factory(t) { return new (t || ButtonsComponent)(); };
ButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonsComponent, selectors: [["app-buttons"]], decls: 141, vars: 2, consts: [["appearance", "fill", 2, "color", "black"], [2, "color", "black"], ["matInput", "", 2, "color", "black", 3, "matDatepicker"], ["matSuffix", "", 2, "color", "black", 3, "for"], ["picker", ""], [1, "example-label"], [1, "example-button-row"], ["mat-button", ""], ["mat-button", "", "color", "primary"], ["mat-button", "", "color", "accent"], ["mat-button", "", "color", "warn"], ["mat-button", "", "disabled", ""], ["mat-button", "", "href", "https://www.google.com/", "target", "_blank"], ["mat-raised-button", ""], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "color", "accent"], ["mat-raised-button", "", "color", "warn"], ["mat-raised-button", "", "disabled", ""], ["mat-raised-button", "", "href", "https://www.google.com/", "target", "_blank"], ["mat-stroked-button", ""], ["mat-stroked-button", "", "color", "primary"], ["mat-stroked-button", "", "color", "accent"], ["mat-stroked-button", "", "color", "warn"], ["mat-stroked-button", "", "disabled", ""], ["mat-stroked-button", "", "href", "https://www.google.com/", "target", "_blank"], ["mat-flat-button", ""], ["mat-flat-button", "", "color", "primary"], ["mat-flat-button", "", "color", "accent"], ["mat-flat-button", "", "color", "warn"], ["mat-flat-button", "", "disabled", ""], ["mat-flat-button", "", "href", "https://www.google.com/", "target", "_blank"], [1, "example-flex-container"], ["mat-icon-button", "", "aria-label", "Example icon button with a vertical three dot icon"], ["mat-icon-button", "", "color", "primary", "aria-label", "Example icon button with a home icon"], ["mat-icon-button", "", "color", "accent", "aria-label", "Example icon button with a menu icon"], ["mat-icon-button", "", "color", "warn", "aria-label", "Example icon button with a heart icon"], ["mat-icon-button", "", "disabled", "", "aria-label", "Example icon button with a open in new tab icon"], [1, "example-button-container"], ["mat-fab", "", "color", "primary", "aria-label", "Example icon button with a delete icon"], ["mat-fab", "", "color", "accent", "aria-label", "Example icon button with a bookmark icon"], ["mat-fab", "", "color", "warn", "aria-label", "Example icon button with a home icon"], ["mat-fab", "", "disabled", "", "aria-label", "Example icon button with a heart icon"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Example icon button with a menu icon"], ["mat-mini-fab", "", "color", "accent", "aria-label", "Example icon button with a plus one icon"], ["mat-mini-fab", "", "color", "warn", "aria-label", "Example icon button with a filter list icon"], ["mat-mini-fab", "", "disabled", "", "aria-label", "Example icon button with a home icon"]], template: function ButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Asher and shlomo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Choose a date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-datepicker-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-datepicker", 1, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Warn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Raised");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Warn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Stroked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Warn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Flat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Warn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "open_in_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "FAB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "bookmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Mini FAB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "plus_one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "filter_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: ["section[_ngcontent-%COMP%] {\r\n    display: table;\r\n    margin: 8px;\r\n  }\r\n  \r\n  .example-label[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    font-size: 14px;\r\n    margin-left: 8px;\r\n    width: 120px;\r\n  }\r\n  \r\n  .example-button-row[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n  }\r\n  \r\n  .example-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    margin-right: 8px;\r\n  }\r\n  \r\n  .example-flex-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 480px;\r\n  }\r\n  \r\n  .example-button-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 120px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnV0dG9ucy9idXR0b25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1idXR0b24tcm93IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiA0ODBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buttons',
                templateUrl: './buttons.component.html',
                styleUrls: ['./buttons.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





function CardComponent_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "LIKE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "SHARE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.subTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", i_r1.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class CardComponent {
    constructor() {
        this.listCardItems = [
            { title: "dog", subTitle: "koko", imgUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg", des: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for ." },
            { title: "cat", subTitle: "mitsi", imgUrl: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", des: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting." },
            { title: "monkey", subTitle: "tiki", imgUrl: "https://static5.depositphotos.com/1000943/455/i/950/depositphotos_4550227-stock-photo-young-monkey.jpg", des: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting." },
            { title: "tyger", subTitle: "yosso", imgUrl: "http://s2.favim.com/orig/160109/animal-animals-baby-cute-Favim.com-3860042.jpg", des: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting." },
            { title: "dog", subTitle: "koko", imgUrl: "http://s1.favim.com/orig/24/bird-djur-macaw-parrot-Favim.com-218991.jpg", des: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting." },
        ];
        this.arr = [1, 2, 3, 4, 5];
    }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], decls: 3, vars: 1, consts: [[2, "display", "flex"], ["class", "example-card", "style", "max-width: 300px ; margin: 25px;", 3, "mat-elevation-z24", 4, "ngFor", "ngForOf"], [1, "example-card", 2, "max-width", "300px", "margin", "25px", 3, "mat-elevation-z24"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "alt", "Photo of a Shiba Inu", 3, "src"], ["mat-button", ""]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardComponent_mat_card_2_Template, 16, 3, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listCardItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: [".example-card[_ngcontent-%COMP%] {\r\n    max-width: 400px;\r\n    \r\n  }\r\n  \r\n  .example-header-image[_ngcontent-%COMP%] {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n  \r\n  img[_ngcontent-%COMP%]{\r\n    max-height: 400px;\r\n    height: 300px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjs7RUFFbEI7O0VBRUE7SUFDRSxtRkFBbUY7SUFDbkYsc0JBQXNCO0VBQ3hCOztFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgaW1ne1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    // panelOpenState = false; 
    constructor() { }
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 18, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "fdbfdsbfdsnbfdb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "fdbfdsbfdsnbfdb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "fdbfdsbfdsnbfdb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "fdbfdsbfdsnbfdb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "fdbfdsbfdsnbfdb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "fdbfdsbfdsnbfdb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "fdbfdsbfdsnbfdb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "fdbfdsbfdsnbfdb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "fdbfdsbfdsnbfdb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/log-in/log-in.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/log-in/log-in.component.ts ***!
  \*******************************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










function LogInComponent_span_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D6\u05D4\u05D5 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LogInComponent_span_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DC\u05E4\u05D7\u05D5\u05EA 2 \u05D0\u05D5\u05EA\u05D9\u05D5\u05EA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LogInComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LogInComponent_span_8_span_2_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LogInComponent_span_8_span_3_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.registerForm.get("firstName").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.registerForm.get("firstName").errors.minlength);
} }
function LogInComponent_span_11_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D6\u05D4\u05D5 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LogInComponent_span_11_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D9\u05D9\u05DC \u05DC\u05D0 \u05D7\u05D5\u05E7\u05D9\u05EA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LogInComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LogInComponent_span_11_span_2_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LogInComponent_span_11_span_3_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.registerForm.get("email").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.registerForm.get("email").errors.email);
} }
function LogInComponent_span_14_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D6\u05D4\u05D5 \u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LogInComponent_span_14_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05E1\u05D9\u05E1\u05DE\u05D4 \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05E2\u05DC\u05EA 8 \u05EA\u05D5\u05D5\u05D9\u05DD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LogInComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LogInComponent_span_14_span_2_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LogInComponent_span_14_span_3_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.registerForm.get("password").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.registerForm.get("password").errors.minlength);
} }
const _c0 = function (a0) { return { "has-error": a0 }; };
class LogInComponent {
    constructor(fb, dialog) {
        this.fb = fb;
        this.dialog = dialog;
        this.submitted = false;
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)],
            acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue]
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
    }
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
    openDialog() {
        const dialogRef = this.dialog.open(_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__["SignUpComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
LogInComponent.ɵfac = function LogInComponent_Factory(t) { return new (t || LogInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
LogInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogInComponent, selectors: [["app-log-in"]], decls: 43, vars: 13, consts: [[2, "text-align", "center", "margin", "0%", "color", "#232d54"], [2, "color", "#232d54"], [2, "background-color", "rgb(244, 247, 241)", "display", "flex"], ["dir", "rtl", "action", "", 2, "width", "40%", "margin", "24px", 3, "formGroup", "ngSubmit"], ["id", "inputs0", "formControlName", "firstName", "type", "text", "placeholder", "\u05D4\u05D6\u05DF \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9", 3, "ngClass"], [4, "ngIf"], ["id", "inputs2", "formControlName", "email", "type", "text", "placeholder", "\u05D4\u05D6\u05DF \u05DB\u05EA\u05D5\u05D1\u05EA \u05D3\u05D5\u05D0\"\u05DC", 3, "ngClass"], ["id", "inputs3", "formControlName", "password", "type", "password", "placeholder", "\u05D4\u05D6\u05DF \u05E1\u05D9\u05E1\u05DE\u05D4", 1, "b", 3, "ngClass"], ["mat-raised-button", "", "color", "primary", 2, "background-color", "#232d54", "width", "200px", "height", "45px"], [1, "wrapper"], [1, "line"], [1, "wordwrapper"], [1, "word"], ["dir", "rtl", 1, "container"], ["action", "/action_page.php"], [1, "row"], [1, "col"], ["href", "#", 1, "fb", "btn"], [1, "fa", "fa-facebook", "fa-fw"], ["href", "#", 1, "twitter", "btn"], [1, "fa", "fa-twitter", "fa-fw"], ["href", "#", 1, "google", "btn"], [1, "fa", "fa-google", "fa-fw"], [2, "text-align", "center", "margin", "0%", "background-color", "#f2f2f2"], [1, "aaaa", 3, "click"], ["style", "color: red;", 4, "ngIf"], [2, "color", "red"]], template: function LogInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05DB\u05E0\u05D9\u05E1\u05EA \u05D7\u05D1\u05E8\u05D9\u05DD \u2013 \u05D1\u05E8\u05D5\u05DB\u05D9\u05DD \u05D4\u05D1\u05D0\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ".\u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05D4\u05DB\u05E0\u05E1 \u05DC\u05D0\u05D6\u05D5\u05E8 \u05D4\u05D0\u05D9\u05E9\u05D9 \u05E9\u05DC\u05DA - \u05D0\u05E0\u05D0 \u05DE\u05DC\u05D0 \u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9 \u05D5\u05E1\u05D9\u05E1\u05DE\u05D4. \u05D0\u05DD \u05D0\u05D9\u05E0\u05DA \u05E8\u05E9\u05D5\u05DD \u05E2\u05D3\u05D9\u05D9\u05DF, \u05DE\u05D5\u05DE\u05DC\u05E5 \u05DC\u05D4\u05E8\u05E9\u05DD (\u05D7\u05D9\u05E0\u05DD) \u05DB\u05E2\u05EA \u05D5\u05DC\u05E7\u05D1\u05DC \u05D4\u05D8\u05D1\u05D5\u05EA \u05E9\u05D5\u05D5\u05EA \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LogInComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LogInComponent_span_8_Template, 4, 2, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LogInComponent_span_11_Template, 4, 2, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LogInComponent_span_14_Template, 4, 2, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u05D4\u05E8\u05E9\u05DE\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u05D0\u05D5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u05D4\u05E8\u05E9\u05DE\u05D4 \u05DE\u05D4\u05D9\u05E8\u05D4 \u05E2\u05DD \u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u05D4\u05E8\u05E9\u05DE\u05D4 \u05DE\u05D4\u05D9\u05E8\u05D4 \u05E2\u05DD \u05D8\u05D5\u05D5\u05D9\u05D8\u05E8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u05D4\u05E8\u05E9\u05DE\u05D4 \u05DE\u05D4\u05D9\u05E8\u05D4 \u05E2\u05DD \u05D2\u05D5\u05D2\u05DC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u05DB\u05D1\u05E8 \u05E8\u05E9\u05D5\u05DD \u05D1\u05D0\u05EA\u05E8? \u05DB\u05E0\u05E1 \u05D1\u05E7\u05DC\u05D5\u05EA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogInComponent_Template_a_click_41_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u05DE\u05DB\u05D0\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.registerForm.get("firstName").errors && (ctx.registerForm.get("firstName").touched || ctx.registerForm.get("firstName").dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("firstName").errors && (ctx.registerForm.get("firstName").touched || ctx.registerForm.get("firstName").dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.registerForm.get("email").errors && (ctx.registerForm.get("email").touched || ctx.registerForm.get("email").dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("email").errors && (ctx.registerForm.get("email").touched || ctx.registerForm.get("email").dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.registerForm.get("password").errors && (ctx.registerForm.get("password").touched || ctx.registerForm.get("password").dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("password").errors && (ctx.registerForm.get("password").touched || ctx.registerForm.get("password").dirty));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Dir"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["label[_ngcontent-%COMP%]{\r\n    color: #232d54;\r\n}\r\n.a[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n}\r\n.has-error[_ngcontent-%COMP%]{\r\n    border: 2px solid red;\r\n    border-radius: 4px;\r\n   \r\n}\r\n#inputs0[_ngcontent-%COMP%]{\r\n    width: 60%;\r\n    color: #9b9b9b;\r\n    font-size: 16px;\r\n    display: block;\r\n    padding: 0 15px;\r\n    height: 40px;\r\n    border-radius: 3px;\r\n    border: 1px solid #b4b4b4;\r\n}\r\n#inputs1[_ngcontent-%COMP%]{\r\n    width: 60%;\r\n    color: #9b9b9b;\r\n    font-size: 16px;\r\n    display: block;\r\n    padding: 0 15px;\r\n    height: 40px;\r\n    border-radius: 3px;\r\n    border: 1px solid #b4b4b4;\r\n  }\r\n#inputs2[_ngcontent-%COMP%]{\r\n    width: 60%;\r\n    color: #9b9b9b;\r\n    font-size: 16px;\r\n    display: block;\r\n    padding: 0 15px;\r\n    height: 40px;\r\n    border-radius: 3px;\r\n    border: 1px solid #b4b4b4;\r\n  }\r\n#inputs3[_ngcontent-%COMP%]{\r\n    width: 60%;\r\n    color: #9b9b9b;\r\n    font-size: 16px;\r\n    display: block;\r\n    padding: 0 15px;\r\n    height: 40px;\r\n    border-radius: 3px;\r\n    border: 1px solid #b4b4b4;\r\n  }\r\n#inputs4[_ngcontent-%COMP%]{\r\n    width: 60%;\r\n    color: #9b9b9b;\r\n    font-size: 16px;\r\n    display: block;\r\n    padding: 0 15px;\r\n    height: 40px;\r\n    border-radius: 3px;\r\n    border: 1px solid #b4b4b4;\r\n  }\r\n.wrapper[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 10%;\r\n    margin: 1%\r\n  }\r\n.line[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 49%;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 1px;\r\n    background: #232d54;\r\n    z-index: 1;\r\n}\r\n.wordwrapper[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    height: 12px;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 50%;\r\n    margin-top: -12px;\r\n    z-index: 2;\r\n}\r\n.word[_ngcontent-%COMP%] {\r\n    color: #232d54;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    padding: 6px;\r\n    font: bold 12px arial,sans-serif;\r\n    background-color: rgb(244, 247, 241);\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  border-radius: 5px;\r\n  background-color: #f2f2f2;\r\n  padding: 20px 0 30px 0;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 12px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  margin: 5px 0;\r\n  opacity: 0.85;\r\n  display: inline-block;\r\n  font-size: 17px;\r\n  line-height: 20px;\r\n  text-decoration: none; \r\n}\r\ninput[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.fb[_ngcontent-%COMP%] {\r\n  background-color: #3B5998;\r\n  color: white;\r\n}\r\n.twitter[_ngcontent-%COMP%] {\r\n  background-color: #55ACEE;\r\n  color: white;\r\n}\r\n.google[_ngcontent-%COMP%] {\r\n  background-color: #dd4b39;\r\n  color: white;\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%] {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\ninput[type=submit][_ngcontent-%COMP%]:hover {\r\n  background-color: #45a049;\r\n}\r\n\r\n.col[_ngcontent-%COMP%] {\r\n  float: right;\r\n  width: 60%;\r\n  margin: auto;\r\n  padding: 0 50px;\r\n  margin-top: 17%;\r\n  margin-right: 20%;\r\n}\r\n\r\n.row[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n.vl[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 50%;\r\n  transform: translate(-50%);\r\n  border: 2px solid #ddd;\r\n  height: 175px;\r\n}\r\n\r\n.vl-innertext[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: #f1f1f1;\r\n  border: 1px solid #ccc;\r\n  border-radius: 50%;\r\n  padding: 8px 10px;\r\n}\r\n\r\n.hide-md-lg[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.bottom-container[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  background-color: #666;\r\n  border-radius: 0px 0px 4px 4px;\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n  .col[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 0;\r\n  }\r\n  \r\n  .vl[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  \r\n  .hide-md-lg[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-align: center;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWO0VBQ0Y7QUFFRjtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsTUFBTTtJQUNOLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxvQ0FBb0M7QUFDeEM7QUFFQTtFQUNFLHlDQUF5QztBQUMzQztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCO0FBRUEsa0NBQWtDO0FBQ2xDOztFQUVFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQixFQUFFLGtDQUFrQztBQUMzRDtBQUVBOztFQUVFLFVBQVU7QUFDWjtBQUVBLDZEQUE2RDtBQUM3RDtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBR0EsbUNBQW1DO0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmO0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixnQ0FBZ0M7RUFDaEMseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBRUEsK0NBQStDO0FBQy9DO0VBQ0UsYUFBYTtBQUNmO0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7QUFFQSwrSUFBK0k7QUFDL0k7RUFDRTtJQUNFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7RUFDQSwyQkFBMkI7RUFDM0I7SUFDRSxhQUFhO0VBQ2Y7RUFDQSwwQ0FBMEM7RUFDMUM7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZy1pbi9sb2ctaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVse1xyXG4gICAgY29sb3I6ICMyMzJkNTQ7XHJcbn1cclxuLmF7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5oYXMtZXJyb3J7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgIFxyXG59XHJcbiNpbnB1dHMwe1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGNvbG9yOiAjOWI5YjliO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjRiNGI0O1xyXG59XHJcbiNpbnB1dHMxe1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGNvbG9yOiAjOWI5YjliO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjRiNGI0O1xyXG4gIH1cclxuICAjaW5wdXRzMntcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBjb2xvcjogIzliOWI5YjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I0YjRiNDtcclxuICB9XHJcbiAgI2lucHV0czN7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgY29sb3I6ICM5YjliOWI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNGI0YjQ7XHJcbiAgfVxyXG4gICNpbnB1dHM0e1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGNvbG9yOiAjOWI5YjliO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjRiNGI0O1xyXG4gIH1cclxuXHJcbiAgLndyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIG1hcmdpbjogMSVcclxuICB9XHJcblxyXG4ubGluZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA0OSU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzIzMmQ1NDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi53b3Jkd3JhcHBlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLndvcmQge1xyXG4gICAgY29sb3I6ICMyMzJkNTQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIGZvbnQ6IGJvbGQgMTJweCBhcmlhbCxzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjQ3LCAyNDEpO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogc3R5bGUgdGhlIGNvbnRhaW5lciAqL1xyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgcGFkZGluZzogMjBweCAwIDMwcHggMDtcclxufSBcclxuXHJcbi8qIHN0eWxlIGlucHV0cyBhbmQgbGluayBidXR0b25zICovXHJcbmlucHV0LFxyXG4uYnRuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWFyZ2luOiA1cHggMDtcclxuICBvcGFjaXR5OiAwLjg1O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAvKiByZW1vdmUgdW5kZXJsaW5lIGZyb20gYW5jaG9ycyAqL1xyXG59XHJcblxyXG5pbnB1dDpob3ZlcixcclxuLmJ0bjpob3ZlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogYWRkIGFwcHJvcHJpYXRlIGNvbG9ycyB0byBmYiwgdHdpdHRlciBhbmQgZ29vZ2xlIGJ1dHRvbnMgKi9cclxuLmZiIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0I1OTk4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnR3aXR0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NUFDRUU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ29vZ2xlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogc3R5bGUgdGhlIHN1Ym1pdCBidXR0b24gKi9cclxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxufVxyXG5cclxuLyogVHdvLWNvbHVtbiBsYXlvdXQgKi9cclxuLmNvbCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgNTBweDtcclxuICBtYXJnaW4tdG9wOiAxNyU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbn1cclxuXHJcblxyXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuLnJvdzphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLyogdmVydGljYWwgbGluZSAqL1xyXG4udmwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcclxuICBoZWlnaHQ6IDE3NXB4O1xyXG59XHJcblxyXG4vKiB0ZXh0IGluc2lkZSB0aGUgdmVydGljYWwgbGluZSAqL1xyXG4udmwtaW5uZXJ0ZXh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiA4cHggMTBweDtcclxufVxyXG5cclxuLyogaGlkZSBzb21lIHRleHQgb24gbWVkaXVtIGFuZCBsYXJnZSBzY3JlZW5zICovXHJcbi5oaWRlLW1kLWxnIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiBib3R0b20gY29udGFpbmVyICovXHJcbi5ib3R0b20tY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDRweCA0cHg7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gd2hlbiB0aGUgc2NyZWVuIGlzIGxlc3MgdGhhbiA2NTBweCB3aWRlLCBtYWtlIHRoZSB0d28gY29sdW1ucyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gIC5jb2wge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuICAvKiBoaWRlIHRoZSB2ZXJ0aWNhbCBsaW5lICovXHJcbiAgLnZsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC8qIHNob3cgdGhlIGhpZGRlbiB0ZXh0IG9uIHNtYWxsIHNjcmVlbnMgKi9cclxuICAuaGlkZS1tZC1sZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-log-in',
                templateUrl: './log-in.component.html',
                styleUrls: ['./log-in.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pic-sub-main-page/pic-sub-main-page.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pic-sub-main-page/pic-sub-main-page.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PicSubMainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicSubMainPageComponent", function() { return PicSubMainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");




function PicSubMainPageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-elevation-z2", !ctx_r0.isActive)("mat-elevation-z20", ctx_r0.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", i_r1.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.subject);
} }
class PicSubMainPageComponent {
    constructor() {
        this.isActive = false;
        this.arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.cardImgList = [
            { "imgUrl": "https://r-cf.bstatic.com/images/hotel/max1024x768/186/186280585.jpg", "subject": "תמונות נוף" },
            { "imgUrl": "data:image/jpeg;base64,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", "subject": "תמונות רבנים " },
            { "imgUrl": "https://images.unsplash.com/photo-1513346940221-6f673d962e97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", "subject": "תמונות אבסטרקט" },
            { "imgUrl": "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "subject": "תמונות טבע" },
            { "imgUrl": "https://besttv232-ynet-images1-prod.cdn.it.best-tv.com/PicServer5/2018/09/20/8781684/877160001001590640360no.jpg", "subject": "תמונות של ים" },
            { "imgUrl": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "subject": " אורבני" },
            { "imgUrl": "https://i2.wp.com/liss-ms.com/wp-content/uploads/2015/06/6777504-black-and-white-wallpaper.jpg?ssl=1", "subject": "שחור לבן" },
            { "imgUrl": "https://www.parks.org.il/wp-content/themes/joomi/inc/imgp.php?src=https://static.parks.org.il/wp-content/uploads/2020/06/%D7%90%D7%99%D7%AA%D7%9E%D7%A8-%D7%9B%D7%95%D7%9B%D7%91%D7%99-%D7%96%D7%A8%D7%99%D7%97%D7%94.jpeg&width=1176&co=8&q=60", "subject": "זריחות ושקיעות " },
            { "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT66N63CLoVdE2W1vcUBlj3CFe4rcT-tawsrQ&usqp=CAU", "subject": " פרחים" },
            { "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrKvVmu7N0GrQSgR-Pq7Cp6756GRZmipNdlg&usqp=CAU", "subject": "תמונות לפינת אוכל" },
            { "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6PYuU7u1UGi1HvUn8erehjb-Ba70hmzyMOQ&usqp=CAU", "subject": " פריחה" },
            { "imgUrl": "data:image/jpeg;base64,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", "subject": "תמונות לחדר ילדים" },
            { "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnyZolvmJDG5ZOfgfqlNaYVrQG4OgrEdwwAw&usqp=CAU", "subject": "טבע דומם " },
            { "imgUrl": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUWFhcYFxgYGRcYGhgXFRUXGBcYGBcZHiggGBolHRcXITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGyslICYuLy0tLS0yLS8vLy8rLy8tLS0tLS0vLS0tLS0vLS0tLS8tNS4tLy0vLS0tLS8tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQIDAAEGB//EAD0QAAIBAwMCBAQDBQYHAQEAAAECEQADIQQSMUFRBRMiYTJxkaEGFIEjQlKx0RVDU2Lh8BZygpKiwfHCJP/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwQABQb/xAAxEQACAgECBAMHBAMBAQAAAAABAgARAxIhEzFBUQSh8CJhcYGRwdEFFLHhFTLxQlL/2gAMAwEAAhEDEQA/AIByMGpC93ou5YjNDtZ619cCDPkTL7dF6eyWI2jdkT+ppbaBHWmfh91laRFTcEDaMpF7zpk8AtvBZdvsDFGaX8P2FkFA8nk8gdh/Wo2vEoUTEx04qLeLivJY5jtZnrqMA3oSvxD8M2m+BmRvqPp/rXJeJeBPZJ3CV6MvH69q7RPHE60NqPEUcEd6rhzZkNHcSWfFgcWuxnnzAiiLGpI6n/ftTLUaYMSY60I/h/avTDqRvPLIIhVnUo2Gie/Wq9XpQRIgj2oFtIwrA9xepoaN7UztXeVOsVEKTxVrXieY+lRYz/pVYkwXyBtiqWq1s8/WolaIqdKqkGrZStFaM6TF4jqakNUaq21sLQoTrhVvVY2kT71YCPLYwJwBQgFWClKw3KZ9qzdRFxB2qBSmsQSWkUEy3AqeJxVQSrUsHtSnvDcsWKkgLGFBJqsiK6fwHTW9iuVEkQT+vvxUMr6FuVxJraoot+EXGjIz9v6000fgdsgBid3U5+kU4baM9KlY1K8gZrC/iHYbTenh0B3lVjwS2rFhyQQRjM/yqeo8Ot3F2NaUECFZcFfpyKua77xVq3Pes5d7smaQiVQE5LW6BbTEZMHHvQR+Vd+6W2HqAPzAP86Sa3wcF5Qwp/n7VqxeKB2aZMvhCN1nMk+1ZTC7o3BIgmO1brRxFmXhtEj6sHoaxHBql7MVoLWmhIXLSMyKlvI4NQC1YBXRbl1rVxzNE233cGgCtaWRxSFAY4ciOBo/eteRFB29a4ohPEj1FSKMJTWplyKOJrd2welV+ep9q2zno1LRnWJtVMZWq2j/AENSGsYe9RbUT0FEAwEiD3dOp4EHtQj6X2piRUHtg1VWIkyIsNqo7aYxWzYU9afXFqLtorQUUwOh96FZIpgwMBBEpa3WtlEIs4o7T+GbolgMdaDOF5wqpblFtuwW4E1do9A9w7UWTz2j9TXR+FaJPUgG7Jlvb/1T/TaZLawoA+QFZMvjNOwE2YfBl9ydpwo8KeQIycCM5qf9mkFlYEEZGOfeu9tuoB4pPr9NvuhukQMxHvUl8YzGjtKv4JVFg3ONuWoMVajNGBj+Vda/glk5MlusHn9Kjq7IVCttBnJA79cVX90poASP7Rlskzk1TvXQ6DWoEVdpBA+vvQXh/hrXHiIAyx4j/WuiseHImB060viMqcjG8Lif/Ycova6Cc8VC9e8vim9rQAk5IpV4r4UQJUzHM9fes6OhNTU6OBcGu+LyI6zVa+KnoaWXdM/ao2dHcJgKSfYGtXDSpm4jkx2niTHrRqXxEbs0oseFXjAgCe5FM7Xg7KvqOe47fKoOEHWXQ5D0k94/iJ+QrKBZWGIBrdDRBxJziMRU+aeP+HWwVYcZ3Yz+g+VFj8Mjy9xueqJMCREcAczWs+JxjrMY8LlPSc0q1YqVetiCJFdT4VoLO0kqDu75gEcChlzhBcGHw5ymhOQ8uoMldwnhunjaUH/NJn60o134edSSnqXkZEx7jv8AKkTxaMaO3xlMng8iixv8JzhSsWRRj6c9jVflVp1TLRlSsalvorR2vUJiPerdboAhEGQf9xSFxdRgjadUBLVreaJXSzUrehZjAEmjrUQaWghc1qjDoyOQRWHRkV2tYNDQQrWCaNWxU204jjNDWIdBgav3qpkzRf5aibOl+tcXAnBCdoHasEAGCM4rGktTE7gIitW9OSZpOJ1MoMfQQnQ60WkAgDvHWrbnjANCX9IaFaxUBjRjZmg5XQaRyjMaxWMn/f6UTeuERsViTgCPv8qTaBALilhIBnvXVf2ipiAZ+VSzDQRQuXwNxAbNRPprl0MwKGV5Ht7d/wBKOs2XYFisfY0WmoDdPrVykH2qDZD2mlMXvuAMpUHHSZ/nQTXmEU7NsRH0oO9oQelcuQdYXxnpBn1rbYXmoWrd3nE/OiH0gEQPoaqYHtTgjpJkH/1N3NAHg3MR/CYqV5yohGAX71Zp561ms0IbjFDVvTRtO1qN5Rp9SACSwmqr+s34BNE6bw9Qp3AE9DVF2wAcUwK3EbWFghtL3NZRQte1ZVNUjp90jb1kgVfZ1ZEzEGgEtEDirktCKDIsdcjQspbf4hMcdKsvacnKNHtQ9u6RgCttdbsanRlNSyFzzVwQD8qsfXXCs7SBVdu4ZnM01F5SsEc81zGuYnKLujUQtaDAktHtQRsV07qsYAoZtMv8JFUTNUhk8NcS2tLPFT/LGj/IIorQ6PcfVO3rTNmreSTBZoRV+TaAdpjoYqzTLtaa6e/qAogD5UrKyZNSXMWG4mh/DjGRpMmih+v1rL3hYMkEVpLNXW7Z6VIkjkZcUw9oQP8Asus/ss9O9NJYdKusifnSnM4jDw+M7VB08HsjMT8zQOq0qB/QIEfenGw1EaUGkXKQbJlWwKRSgCK20M5qY0o6jNNrdmKk2nocYzh4cc4ou6YGgNTohFdIdPVNzSTTJnqJk8PYnO2NBFHWdLGaajTVamnov4gmDH4YLF9nS95qZtxTArVRszzUtdzRwwOUBZu1YDR/kgdKqZR2o6hAUMDc4yKFg9qY3DW7NwdRTh6EmVs1FRmpndEzTDW2JyvPWlzKadX1SbKVNShnPepIB3q+3YEZBmrraqOn6US8VcZPOCi/HSsowhOoFapdQ7Smhu4lf5CKkmjzkU38utm3ScYx+AsWHRge9Q/K01/L1YLdDiw8AGJ/yp7VA6SnRWs8uu4xg4AiUaY96tS0aZ+RWeRXcWcMJEANv2mpkx0o0aetGxS6xH4ZgDJNYmno78vUhYo8TtF4V84Lb0460RZtgdP1qwIa3spC1yqoBI3VBzUVt1cEqQSluNpsypUqwLUwK3FITHAkdtSit1lCGaitbKlWV06R2VhFSrK6dKyKiFq01EijBK3WqGtCiCtQKmmEUgQRrVVCKNa1VZ09UBkyvaDLd9qieZiixYqX5ajqEGkmL2Wh2sMetNzpqwaeiHEU4yYn/KnvWU6Fiso8SDgwe945p1/vAflJqlvxJpx+8fpXl93zSeJ/UVHyrvb55FeB++yHt6+ctrE9R/4m038TfStD8Uafuw/T/WvLrdu7nHIHUVC5pbx7fWh+9ydxO4gnq/8AxLpv4/sawfiTTTG/7GvJzor2BuE/OpjTuB8Q6g5+n3o/vn7idxBPW/7e03+KPof6VFvxBpv8QfQ/0rycaK7/ABipLo7n8Y4ij+/b3TuIJ6qn4h0x/vPsf6Vg/EWmP959jXli6S5Ebx96rbQ3P41+9D9+/u853EE9a/t3T/4g+h/pUx4zp/8AFX715J+Su/xr96kdFdxFwff+lcPHt7vOdxRPYBrrXPmJ/wBwqpvF7A/vF/TP8q8rtaS9EG4v3q6z4fc63B96DfqRHKoQ4M9MPjVj+MfQ1seMWejfY1wVrSEfvj6UStqI9fHtWdv1TJ0A85QETuF8StH977GrBrU/i/nXDpPR/t/rRdoRy9J/lsw6Dz/McBTOxW+p4Iqc1ylu/H71FWtWZ+KnX9YavaSHSOhnRVFrgHJFKDqfeh9Rf/zUX/Wv/lfOdw+5jttUo61U3iNsfvfY1zz3f81DXln977VD/L5z0Hn+YCFnSnxe0OSfpWv7Zs/x/Y1yLD/P9qouWzmHH0px+qZ/d9D+YhKzt18Wsn+8H6yKsTXWjxcT6ivN71h/4x96rFm5GHX71Zf1TJ1A84hcT0lvE7IMeYv6Z/lVTeNaf+P7H+leb+Tdn41+/wDSteXc/jX70x/UcvSvOdrWeiP+INMP3/8Axb+la/4j03+If+1v6V5u1hyfiX71tdO8fEtd/kcvu8/zF1ieiL+JtL/iEZjKt/Sp/wDEWl/xR9G/pXmbaN4+MczVR8PufxinH6g/u84Nc9QP4l0o/vP/ABb+larys6a6P3l+ordd+/f3ef5ncSMrVg8EEHt1qdzTDgmOMjp71iwuZO4dcgcfvdCRP8qB1Ws4EElhk5MCPV8szXiBnbcQsqKKIhWwQTuM5ByMfKtra9IznvNCJdMK/wAUqInHWBPsCZ6VYhIXZIPqIgR07wTPPQ051Da4gCneprW2WVVfoDJz+7O1vpM1fd0UjOeTtmPb/Wh71wGEZ2JKw6wRtEZPHc1CxrngbuiMZHXb6c+xijb1tBSAwtdKAMTC45JzxAJ5E4qSafMSBOQZJquzd3rbUs38JJG0AnLSf0mpvooCbnKgzkYkAGJOYyf5VNspGxMoMYO4Enc0cSSTHaM/zqkAHjg8SekgH7mt2yoAIYkmRz2AIBI59IOe9DaRmJUMhVmjaG7NHAJiIXH6UwLd4Cq9odb009ZI7Tye4/SiVQHAX1R1nMdROaXajWXpNvEsOCIb0jnGeAMjmqU1FyfMZS6jDqsgTBgbu3ExjNIQ9XfryjDQDQEf/lvSD6RjMg/1rbpE8Y7ZMfKlyWoBLltvxQcBd2ADncZ5jmCOtUahpna67SIUj+IE+lZyP/lR3J5y1AC6jJiRPHTbkdeAffB4rdtIOXESMEfX+YpP+dMiZg4OBjBBBH7s5zzTO5q1n0gFWgkjMAHiTz/qe1Fg42gXSd4YM/D9enuT7D/1VzSPlwfnSex4rZMxIKkiBMHoRz8MN9Kh+eWCwZjAkiNxIWFLgA8DcOSKWnjWscrfEkR/870RZvgDrn/Yrl7PiV1iPQNpYIxgn17pgtmTBI69aP12tZCfSCxYwB9gOxEfai6G9M5cgq4+fWCQBnv2iKhqNSIrnxrTAJQgEkAkEbsHrHG4R/8AaKOvJCyBwoOCRJJgcZOKnoIjawYal0mI6ifl3rGY/MEdP5Glv5lWmJHqKzBABWRAJ/5fvU11ScdZ7k4zJMYBpjfSLsYbchhAYA59zQ1y0RjB4g4H6mqbepEAqBDYJPTOD/vtW9Vq5+GCD247TP6D61w1A1OIWrl4s+4x34n2PWo/lCTysAAnmePnQ5tuTMgccwIjkx0+fsat2iDBg8Fugx7nJ+VcXYdZ2hT0kSkE7hiYETn6/SqrlvloIHyP6zNV324Uekjk5M5mQO+PtQ9vW3YYqu6TtkZkAxGeCQP0qqljvJMFBqpcyEdjPHT+f6/StpYDcEjvjHWRzVGp1fp3OIY9ongjp0zwe1W2ApAViw3TnoAD3HU1W2reT0re0sezEDqeJkVpbEmM4z7fpUXs+rBLGciZwPaMZH2NWJY4YEifueeO0GZoFyBzh0C+UEPh4OQsg5kuZzWUQ9i5J2kR7q/6/eso8Q952gdokQnazZcETxwoO3B4An5cVOxqJtsXJJaBJJiQQTGMiD71Rp7YO6CZYcGCBwAC5PpGBjoAeOsrmnARULFiJduwiZgcmAOekVc1yMjuNxJiNwDgqoIiIkqwxJPcxzxUFIFwbCRwZGY6ExkcH5VHS7XS4pgN8Q3AAcmC7HMZAgCZjpzN7+5ARJW2NpGFIBwRPLCeaI7Tum0uukm9v9QWSxgL6ob0hmJ2oO8+3erLVt4AadtwgemGwZPpAOPgaRP71V6YsynIUOsD1ElRu2gEDJYb1+hreitbSpC+kGPUY9RBEkdASZ+VIWPIRgBYlj2wTtdvjZcE5LBSsnPyie9G27BKH4YWcqQBn4i3y7D6ZpejgXg91oQEACBMbQ2Cfhg9KvvaK0ULqWLb2CqYIzMBoUZGSSKk+1D7bSq73X8y5fE7W3ayqdoIE9D3GwdQZ9sVRq75gmBbJRlVWVj6CkbVmTJ6RJ9XOZqjVm3v2vAXzAvbBMHv25PNWvbAMm2XJyjGZEEQAoGCWx/0iuCKpFA7wFma7ll27aDW0uArxuaBvzEGJMTgEdIqvQ6tVvEI24TtBZTEE4ZhgEiByP0qfnKLrAhfL2iAGJG2ASzR1nMe/Jij9Dct+q2ts7iN0RJBPwiTPqwDOOvtSsQF3vl7q+PraUUW1j+5XqEAb0FmtsRkwN7QBgD4RmOOn0E8RCNc2IJbadoWG2ttBkk/7zwIqV3xO7bbb5QF/d6tgyEyI29SBBn295DLwqw8ftS25lDPnMMMFui/DiR0pCWxrqP88/XnGADmhALHh10XFIALrHofaQSS0svciJjP3isHh5S56nti67MsLIRVn4d8HJ9PpiQJz3L011C0qWQAnJOSCYO4k5JIY59+s0TdeEthHO04IVSWwRL7v4jgTHJHfEzlyaq+3/fj944xJpv19ot13h9oWxCLvJJBDE9F+FJhpICyfhknqJufSFbBso52bd7kwoJBO9TBJPGMz06VRrbS2sSvKuNxl90jbwepEkcZ6ULZuyqljCeYw2k4hQOeDJlYyOOlWVGZAbvrvJMy6jtGWjZj5YUBEVpYupQAYmW5Ydjz6QOZiYVrJG61v3g7jIZiXUTtHPBEznJ71Rq9cLwKbyqqJCjmFkiY9JBIVYEj35o3zGck2JUM3xMN0mOGgExOT8wIEVJiAPaFeu8qovlv67Sy5qbjQXVyxMDcAsEjPpmNsT9PagPDbYO26WWdzEo+fYQdsBl5zHPTmj72pRWBvqxcW3baQYkEKF7GSSPeR3FLPw/4qoBwTL+oLgmSSGiQCBEcdflUlVtDUvreOxGoWfW0O1mjIUP5ollyiHESDI/8ue9L9MtkEsVYq8ZElRLyASI3E5+XSn2rnU2QtpRbMsSW9PqIK9MnLcjGPlXCeH6zcSrXQoKkkgFgu3IOPlM8RFaPDqXxkXuOfoTPmIVxtzjwuotSBtgXCM4PaedvGP8AWrrG65lD6lYZ9IkEkER1j7zXP+eTAQkb/TwZyIYlef8A5R2ktXLgF1N620ngGBtadu4dTx7k1pbHQ5/WQV7PKFXdbDAEsCzHIAMCM8dKtNpo3H0hiQvxBWEgGW4GOAuTUdMi213WwXaJ2cFSsZAY+rJOOMjtVWq8VVpLIwLEwu4KDtBGVHwDMzzkwIBqO7kBB6+EqBpFsfXxma3UANwdqqGURB2zADxySCTW7kXNoLkgtu2qIVYGVZeMjr7Z5iiF1HmIGt2xccOdysHKKudueokA8Z9oqY0KqfLYklhiCPiMk5ORIjFDWq7VynaGPWB3rKhX3vsXcDCqTnaoWc7R1j9avt6NdwKvtFyGBJCbBBEEAeqYngZ+tau+HAFlLqRctAqGJQ7jMemckfzIq7XWBBt7pIEsf2akEAbQCoA2jsB0oagzAK07QQtsIPqz6tx3HLBY2gtjbBjpOfeKO0ExthT6dsSixAALKO8n3mKjatOWJ020Dyz6g5JDctzGcDpGRUtOu9ZDk7FiNoZoKmSSCI9UmJmg7givh8foPzCqkNcpbUi2SjkllwSA8H5QeKymqaQQIvkDpwcdOSKyp6h1+/4lNB6evOcvqNRlQkM625yw22yAZhQIGM5nJzS1tYSN+1rhI2xJYqEbOADCnPp5zPWqdT4kVBYqQJg7eW9WTPT1D7gVQt3zPU10KB+6obIY5WQB0nk529zXqrj0rymEvZuF2X2y28qxI2AqRIOfVK4ExmYq21fby2t21P7RhukqIKwzknoMQKX3r9tGIHBBiTgcCZGMduKs0GqLAsI67iQDAaRuE4OBzHeiUsXUXVR2jEajYQwWX27lAOCSRiSCeFAq25qnugqLfq2qfT+4YVneQMgYyfnQ+ssBIIYs4lYiBACiR/mLyI7GnXhNjegAi1aEi85ZZcwB8PIEcDjPesrsqLrrfvLYwzHTEV+4z7Sh3MoBI+L1gbcAj1cDNQ099kV1YuIiQejMSCQO/wDvrTHW2YvklZIg+XPfCqwgbhtkQMTFT8GvWyzNcQEZeABHcgADoSOI5HFMcnsatN9Zyp7dXUVWNEzFjlVQSWI4kqQYHJIbAE8zTu94cot7rdx7lxsja0BUG3M4JILL2jd7GrPHNUNRu1AOwbQoRULO24gFjBmQIieMVU95haOlCMiIoYOWLb90xBgBTGCOh7Umt301zvce758/lHCKl/Dn6+8npfDytkhWtO28qdxIZcgQpHxoN0mcY4NSsa67ZuXA+1335Kj1DewJB+QP1IoDS3ZLDdttuVmJ9MlS4DEnEMZx0nvT7RaLTOvl223bN03MfHg/CRDAYEGcT86jnKpfEFg+719JbFbAcM0RFX521+ZNy6hhwCXJkxtghY+LEGBU9f4yTdi2Atogx6YHAj1R0zjuf0MPE7VmxeKLdLIq77m3ZuXEEREE5GI4IrH1Ft7SBBNs2/TvJJDMSdxHczwewFOMKPTAE7deVfPrJnI6ggkDf18pY94GyzONzCDMEbpCwJk+qXP/AHTmitOTu8lm2BQvEifSIM8e9KF1hFze7qeCRG2doAgBRHAGfYdqd+Jay1qbMWUlutxgBjqZ/eOAAekmhkOmlrn16Cch1WR9O8q8W8LtoR6kSCrqsku7TO7zD0HpxEc0vfxAncq6dQVWX9IggMPSR0xweQQTOTRHhfitr07wWur8QYq20gNugxjC9OgFMNXq11jJatHadzM5/dK7NpJj4m+GM9M0moodLg0Op5ShAItCPhE11XY7LenWb4SAPSUAINxAWmZK8yPiB6xXS+F2ltaf9tFq6inAbOxXPEYMg/OWNKH1FrTOtpLm8DFyCBypVDtHUPtzn4gDMCFmt1N27bRrrr5ii2VWDEyGYP0ECJ6Z+dcytmAA2XvvZ9f3CGXGbPPttOov+M23tEqpaDuDEltrLx6hjJ6A5n3rntIqtduPdXG8qDuCli0MxJxtXCyQAYfnuQv4kXYLCKE84qWYDgs2TAzOMgdjSPxfVbmBBYC2CWgEkEPGSeu1UEziPnT+HwFAVoi/XSTy5QxBsGF6e7cNq+qGFUHYTLKFICrGCSpDdBJIXmIq7wy89xm05uLC2z5vmqAIIK+nEsIE5Gaq1via2VAUEGCbg6zcMEE9QCSR8h71rxLxO4Qqs4dWCkQM8GAV5HxSBMZ+lnUsNlG/XqPfFVgOvKW23sbdrjfvO0lS3plzMMOATyIOBjmrvE9KLFpmW+hRisWVG3dB3DaJJIyvIGJ70B+H/D7jX1CbYANwy3Cr6YPYyffnoIph4nqHtNeBS2zlVtDaFJUQwPvhZ5HU9BSPYyhVN9SLH35fKFAClkfP1zizU+KpecO4vFAi2x5VpIkkLtUEETLE9fhxHTV27be+iBDZQnhyC4BkjdviTuJ+IzkdhLC/rhbtr5TBGBIG3IkKFICkFSxkGRBk8zMw0+me27XtTCyCEDgNAKD1yOLgAJk5wTxNOGCDttQHX5CpxTUe/f8A7C9TrLdseTprtw4gtCmWT9wMoBg59h7iSFy+KEwQACvQKApJhpIHHH6zWeFahtPaUm1bYO7AO5V2hZElI9MAR9ehFEeHaNLzu+puXPTDRbtgKQyg4GY2lgeOvOa6ggJYXXXqfkICC1AHn07fWC2rxYLdJSA21RK74nkKOvB5yB7Uwdwco5YkiTtzvMEDbnMGcdj86r0mtsNpyEsM1wB4WCfL9ODIAkfvDqar04ZLaagOgNy5uNtDDLuBC7g0wBxk9RQJ3Nit6EUigN76yXmF3Ns795wuzEl2AI9+SP0pjZ1Q3lG3LPwKIAJQFs9OMR3FLNdZdNqAAsSoCqwuOFMqJ25GTH6ntW11JRrabQLgJB3gYUkwecmGBnpRKq4sRQxXnHes0TF2IvDnqwJ+oisrnNb4nfRyvl7oiSWIkwJxPFZU18PkA/2EY5lvkYv8UsWyiqLpMgsRtIABzBYnJnOBFQvWjct20WAowBgMxwBgdcznvmqbzlwoJxPqOYLEn6YB/QH9HfiOpsPYW1btpvMlrh24242YEiRbXA6R861lmWgLO/0/iQABvpFrhbVxVuLuCttKgqOTLSVBkmVz0gjJo3+xs3GtgWlBhUXewZDywZs/oR37VYnhrhEcJ6RkAqqkY9RAOWUSM5EkRQ3mAcsfQAAd0wzKw349yW7z71MHVup9X2jGl2YSjVgISbqE7w12CSvqLeknrtGTA59PQmjfAwLam6qF7oAUMSQoZ/UIaPSIAn59qKtah7T7zmRuIJVrhWIESDCx+p9+ahqvF4KY2+Zd3uWyMkKxCgekBTIwSefakfWw0V5x0Kr7V+UK8RtlV3ve2tcKsyqQ6ttCAFV9JjPvBX5VPwU+Y7IzAJBIMRIUISoEKOR7DFKfFLoC7i5uPtUejIKliQI2wI2twQPSMZodNEDZbaxIDruuEDaAVPI5B4GO3BxR4WrFR299RuJWSxHF7V2lvutmFK4Rmjhhu9MGR0M9ZHM0B/adw2ry3dzEoWCkHajA/GQBP731AzS61qk+G6AWLCSMmWwNpAkQAsUws6wlLnrRPNQFmhZZIjawHwk4mBmBFPwgADVnbn+ZPim+dDtFnhb3LgCPI9YJadgZSuQGAwdvWPnV3h+kNprqXb1y1b+JVRiwIMhf2keoDuMHaaC0N5kItuIKOwAnjI3DtEkGfftTLXtaGbW4qV2zzPpB3gj2kR/mPyq2S/8AXoe0VGAFzVm+F010BJeAxOTvkNbUwfcqYHPPJqv8JX2lhcBa0JYAdhJ74Bnr7RS+0zepAGVTMggiVLKCD3ztmrvCbylSdrLFzy4EwVKOxnv6lUROIFFxaMIobe50Xj3ilu7cH7JUXbCkgFn+DOOYGAD2+dW+E3b7zpxsJYwW4+GcieCIbp0GKA0P5fzANQWhoRVXqWPfuMR7103jvjVu3JtFFdFAxBIWQAG/zFmGOknvXluQAuFEs9L5f375sxFjeUtXwnMeIaG5o7tlrhVrhTawBkAQbayYypWce0VLw3Xvbm1aXdcIbawJMyuTycmCcdT9Bjee9cHmt6nYtuKk7UVQZ27toHERM7j2EneHeD3rbrsZCTbvFtrqdgIJUkjgltmBNbGFoFyUT5SIJDak5S+8hFhAfMLQzQcqrtxHUHqGnkD9Eq6wor7T8IEHoWYq2Rx8Nu59aY6YkfmRcRn22tqhiQQXGDGc47wDik34lvztVQogB9ogQCNonPM729t4psCb0fXWDI1i4y/C99Tdt+ZENMg4+KVOZ5BBHyqJteVeX0uxc+kiSzpuJMqpyVIc8cSeopb4dpCWU3TsA3yOHO8GYAyAcmTAGe+TtOys29m/ZI5HpGVUht20DgEzz9DmmdaYmIrbVJ+G2LbiXvBXYqIVCWGIAkHJPSJzR138PXAjvvRBIKtdchwoOSQoJU5MD/Mfam/4c8as2rbrYO8u26bgAcuEAgmOgUkHvNc+bqXnZrhJZnZigJAhlD9oBMnvhqz68rOSLAHcfxy85oK41UXRPuP/AGNvCfFbkttW2ykMRAyqKIlYyCTkc8e1KdElxmIdUZtxYhyAMbS249TBY9yY94vcW7VpntNt3ehFkZkAQPbK8e1VeHXi9wblA2gDkRhfUCOGYyASeBnsKZVA1Mok9V0CZXc8OuOy7FDglXgLhS15rjDcIE8H6018Q8R063bZfcxH7NtyhwWPpDbZIOCwgdI96d+L+MLbstaVV+AbgjAeWhGW57ZEVxGuSdjAKp8xgQJO1VhN5A4AB45n6VLCx8Ru4obgS2SsWy7nnGfivhhuFdVbuFmZp27fKtxIiC5joeJyfnRH9gXyWuC4h6kEkAgCSoj/AC9eMcdaWaXU7Ga3P7Agu20kIQ394sZBUTnmNppkjr5ZNtSAA+0yRtIJhZyT6O/t7GqEZVUKG8vp2iasZJJEH0JfTXL1sN5u3I2OVBcKhg/5fUuPf6a03hge29685NwMcbPQ4TdgsYVZmJ9jzmifDfCmZ7rFcNkbtwLbwCB12kTMx2gGKL8RN6zbNjdCoP2UyTt3QcwCQsgT265pC4OQBD7W1+t4dJ0W3LpEOs1INtVtEq4JBCKEJ2FSGaDzzkHtWx4XeN9LjIy7VAnkFuRLdDwe+KZeC6uy139tbW61zufj3QC7IcbT6CDAIjFT1GuFtrnlqjJuCqCGYyo2FhOW4Oe/Hs4Z1JVV9H11iMikWxnE63VsbjQWGeCWBnrj51lOLoBYlrQJJJJBaMnjCZjj9Kytgev/ADM9e+WeG3tgJMwp+ckE/wD5HPQfOhL98tMggkkyxBI4C8wCfSB/SpWrm61AzuuYAMFsbAVmJPxDJzVuisIxCXLjWwQqsCGYzaYwsIDuPqx0O32EzoDeEEkVLtHZDl7lzUFFtRzDSSWACrPsOOk/rRb1QV1uAFt5MhyGJLGZkAcSxOIiK6jRAKXuG3cdA9x7UKNgDEiGeGySPb+dckurW6wUAKCZjBCwAZmB7mf6GEwsXY7bevXremXHpUd4RqbW5vVuLsdzEc7iPT1wBBB7SfagbtsuH6bVBMmZYAEweZMGfnRVrzJJkbQD+0wi4JB5MSeBxwKM03h5VS7sqISBuA35kTjE8/zqpOmRAJNCKl1Odvk3J9MRubOdwKxmcYXt+leg3tXZt6batoBXX1IVhmxAYggE9OmQB0pXr/E9NpbiNbXcYLSZJ4gbfeZmevypXrfGrl+6xuKEjco/fMrMg8Be8+xrE+rOynSQB3Nb/DnNQIwqaIJ9dYosgm47R6Qw3GBKwQEPHfj5iZq/U3FurChA0hCFHpI5UgHEFgOaqv2SPjY+lfTz6pIEGOYM/wDb8qE8LuFN6yDlSO3o3NP2+9bgLFiZLkbyJsVSIKAzkfwrAgDIJAE9AKu1e23aVfMkrcPXJAJBI/QiqbieZbXdOBO4LmeQCTjgDr1k4q5LYXYNskdxMk5aO4OB8qZh1M6MtBdDAuVBUQq5Hqd4XbuxIxv/AOnmgtLYLqfKkn2BE95AzP8AWujs/iy3+XuIbAExumCPUYJAjoKQ3dWtt4UhVO10I/dDEEkfQj7VmRne7Wt+9ymRVFaTcI0d67Y2+WFV3/ZsbqHM8FewH9PlS7XhjdLMA7ftRd2wIa0xQtiJM7SB1+9dBb0tm+GtLfDemGaNxkxBAkQZH86vTQqq3XsL51xGus7hoVd7byoSfiA4ySIHtXcRcftEb+q3jIjMKvb10iv8P2bF27N+6ECDAwA/AI3TCwsdQZPtTXQ2bdsteRmNnzjbtmCQQrhj6/3srEckLUNJoNKVspetMFXJClZLEQFeByCDOR0OBTHX+NITpUVWQrdZjaBPpVWdGO5ZHRzjoT2MZ2yMcnsg122oV+fK5bQoTciK9Kl2NQHlXQsN10mXRXWGJcmTCNH/ADiKWWvDLtwXWsum5IXaWUXOAMMfk3UfCOejW2p33nvNs+JSI3CXYAoDmcEDuc9jSPU61NMP/wCdfMYsd73RtEEyqD1cCcxkx2xWldTf6c+naR9m/agmusvZ8u3ctsjAD/qDElmEj1RGT7Gr/E7QRNrI1pRcbB3MDIucE/EBsAkH7mhxq2vLbN13Z1VhnAgmAAepMn501/tLzfKF9dyggKnO1YVQB3M+mTzHzqpLitvjX2i+zZr18Zu3pdOLcIzNKgnaM+sFVczEkb5x0BFCrZbliFW3sKgDJW2jbiojPSW49MTIim+u1Ia4W0enbeFRVCqWPUb1RMlRsMYHM9oQ6C83mNvY7iQBIywG0S088qcnp7UmKytm/nzhyEX0+XKdFpNMXVTcuJbBBRSFJKrJ3EdmMnP0pQt5bRuWt/qEbGKiCQxOQMCCE5P8UzxVahnQkYzxMcKNsAniFORI6VV4nbCIt5SJlYVQfTMlTMQFHABzjjFdjUqxs3fSczggUIzsOrg2EKncFLliBCiJ3M2d3B65JxQPmqQUcMx3yWmRyZJccg88xn5Uy8F0umawReubXunazMd7Bvj9KETuI2kcn1Hqa57UbHm3pi4TfM3NonaoAaBG0cmDPv7HFRcjfb1dxnWlBuNreuVF8s2yAwVBIHqG/cu6BIWFTPUCPk78IXaLpJtvtHBOdoMlp5BJAx1NItHoQ4G66GFsy04WQIVMwSogSZAxA71rwjxS67tp7QUee0MVlmW2D6nEmbj84M4XHIIGVNSGjOxNTAmNbmvN29BRbJARLcSRB3ZBjJJjJ4npFLdR4m7XQWuk7i6ycMVAUI8AQMAxH/ua6bxH8HXyV8rVKVVfT5ggz2lcETn2n51yGi8PI1AtuyLcJZZaY3Jt3dCJEzkQR9Kj4d8LraEbD6fXf4x8y5A1HqZ0Wju6drdxSfXB3EyoACjrEYBOO5ofR4ZotuYU7NxX0ySCNxIG6SOZP6TAvjHgi23QJe3XbruNq4UWdm3e2AdxInJjBPc1Vo7TX2IVmXO4vO1ixWT8ztXdHv7k1RVV11Kx3itammG4ji34BccblVoOMOgGMHBWeRWUu0j3yilEZlKghmLy0jn5Hke0VlHcbRPZ7QBEDhVUm3zBHPl8EA9DvUmeYIo7Tae0G8sb/SBvGJKj0gBoxO771lZRcnUR2iLC/GvGRqbNtVZ7FpFVtq5IUAKnsfiUles8yKXafwrG9A3lsx2yUDMAVPTAn04x26Sd1lAqMIATlcrqOQnVL00SGxK2xtPQhQR6Q4Mz/DPFR/JXdtnc2GCkLAMhvVBnAgAwRPSsrKZRvJ0Kmr3g3qAiU3qQTAMBhIwZ44qGr2JO3hmZyI6OqxEcYb34rKykJJaIRtBrgS86WgSAzBRjiCAIPImSOvAmKa638I2rYa5avXGdWtoUbiGZQ2T7Hv0rKykzZHTIqqdv7mvCitiYkeqnIJqmQlSTsBDbckSscA446/pXTPeVndgqKLbMYgkAlUUBgPigycHvnNZWVryDa5lEjqvEDfIa4tuDG0BSG2qZGZiIxHtVHiT22KqEELI4AGOkdsz+tZWVIjeITZg+purbAztQYKqq5lhJ456T0o7w3WahbD7GCpMMoEElukg49IYyJ6dzGVlNpVk9oX8Y6EjcQ7wy8bem8zcQwuOO8m0sqT/1I31FIdMp1VwuMMADBjnzAnSIyxJNZWUqitTDnGvpDtXdDo1pI/Y7ud3qYrtDE87oH3+dJLJT1Amf2JBaDglQuByTuaOg61lZVMPL12imVhQGSMoLgUTiSBG6OmZIFH/mPLeUO6VDSeQZP6bvVz0nvkbrKducE7Hw/wDEps2Xfy1DK5gpALSwJBxxMj9OtcR+Idfd1N59QxEIqSOI3GAAI4j/AN1qsrN4fCiOWA3/ADUocrMAp5Rl+H9C115naGUtBONoe2ScdQN49/1onVWige3vFxVa0AGBVThmVSo9mLDpkgkTWVlIXJzFegH3ldIXHYifX3QWFtESEQMG9ZlXXe7RgEtuWTtnAAgCKr8a8Ju27y+aFRmRboVCWG0kSAxyGEz1HY1lZWsuVdR3Bk1FoT2qH6d0VIAIUypMCcYEA8nI5xPypY2m3XgbPpkG4GmGRRjcegggwFEwo71qsortcmJ23hes110FLN7IG0syqzSo2sQWbBJz+tcv49a1G8C83mMQAxJkli0FgcbSRtX2CisrKyYtKeIZFUDa+W81MC2IMSYPf825eYocjfvE8MzNvEn5njHPem3hetF1mO+4Lji3bBlcOxyx9JzCEfIdeKysrWygj4VM/WLvzbjDXLk/9J+WeuOtZWVlU0AxZ//Z", "subject": " אביב" },
            { "imgUrl": "data:image/jpeg;base64,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", "subject": " ירוק" },
            { "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIJGSpjprT5mrwSyCeweOIRSbAih1adIee3w&usqp=CAU", "subject": "צלליות " },
            { "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcxwMWAzCnomIbQ0_Eklt7_Pd0qALT5Le9Fg&usqp=CAU", "subject": "אנשים " },
            { "imgUrl": "data:image/jpeg;base64,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", "subject": "סתיו " },
            { "imgUrl": "data:image/jpeg;base64,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", "subject": "תמונות פנורמיות" },
            { "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7xYkQ1fAW0Kql7uRkw0yc5P43Au0d8-yI6g&usqp=CAU", "subject": "פיסול באבן" },
        ];
    }
    ngOnInit() {
    }
}
PicSubMainPageComponent.ɵfac = function PicSubMainPageComponent_Factory(t) { return new (t || PicSubMainPageComponent)(); };
PicSubMainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PicSubMainPageComponent, selectors: [["app-pic-sub-main-page"]], decls: 5, vars: 1, consts: [[2, "text-align", "center"], [2, "margin-left", "17%", "margin-right", "17%"], ["style", "display: inline-block", 4, "ngFor", "ngForOf"], [2, "display", "inline-block"], [1, "main-pic-sub-card", 2, "cursor", "pointer", "background", "rgba(255,255,255,.7)", "color", "#0c2468"], ["mat-card-image", "", 3, "src"]], template: function PicSubMainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05DC\u05E4\u05D9 \u05E0\u05D5\u05E9\u05D0\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PicSubMainPageComponent_div_4_Template, 6, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cardImgList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"]], styles: ["h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    text-align: center !important;\r\n}\r\n.main-pic-sub-card[_ngcontent-%COMP%] {\r\n    max-width: 200px;\r\n    height: 154px;\r\n    width: 170px;\r\n    margin: 25px;\r\n    border-radius: 2px;\r\n  }\r\nimg[_ngcontent-%COMP%]{\r\n      height: 130px;\r\n      width: 202px;\r\n  }\r\ndiv[_ngcontent-%COMP%] {\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waWMtc3ViLW1haW4tcGFnZS9waWMtc3ViLW1haW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7QUFDQTtNQUNJLGFBQWE7TUFDYixZQUFZO0VBQ2hCO0FBR0Y7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BpYy1zdWItbWFpbi1wYWdlL3BpYy1zdWItbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5oM3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFpbi1waWMtc3ViLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMTU0cHg7XHJcbiAgICB3aWR0aDogMTcwcHg7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgfVxyXG4gIGltZ3tcclxuICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgICAgd2lkdGg6IDIwMnB4O1xyXG4gIH1cclxuIFxyXG5cclxuZGl2IHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWEgKi9cclxufVxyXG4gIFxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PicSubMainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pic-sub-main-page',
                templateUrl: './pic-sub-main-page.component.html',
                styleUrls: ['./pic-sub-main-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/pic-subject-main-page/pic-subject-main-page.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/pic-subject-main-page/pic-subject-main-page.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PicSubjectMainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicSubjectMainPageComponent", function() { return PicSubjectMainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");








function PicSubjectMainPageComponent_mat_grid_tile_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05E0\u05D5\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", card_r1.cols)("rowspan", card_r1.rows);
} }
class PicSubjectMainPageComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ matches }) => {
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 },
                    { title: 'Card 2', cols: 1, rows: 1 },
                    { title: 'Card 3', cols: 1, rows: 1 },
                    { title: 'Card 4', cols: 1, rows: 1 }
                ];
            }
            return [
                { title: 'Card 1', cols: 1, rows: 1 },
                { title: 'Card 2', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 1 },
                { title: 'Card 4', cols: 1, rows: 1 }
            ];
        }));
    }
}
PicSubjectMainPageComponent.ɵfac = function PicSubjectMainPageComponent_Factory(t) { return new (t || PicSubjectMainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"])); };
PicSubjectMainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PicSubjectMainPageComponent, selectors: [["app-pic-subject-main-page"]], decls: 6, vars: 3, consts: [[1, "grid-container"], [1, "mat-h1"], ["cols", "2", "rowHeight", "350px"], [3, "colspan", "rowspan", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"], [1, "dashboard-card"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg"], [1, "dashboard-card-content"]], template: function PicSubjectMainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-grid-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PicSubjectMainPageComponent_mat_grid_tile_4_Template, 8, 2, "mat-grid-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx.cards));
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".grid-container[_ngcontent-%COMP%] {\r\n  margin: 20px;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n}\r\n\r\n.more-button[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n.dashboard-card-content[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waWMtc3ViamVjdC1tYWluLXBhZ2UvcGljLXN1YmplY3QtbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BpYy1zdWJqZWN0LW1haW4tcGFnZS9waWMtc3ViamVjdC1tYWluLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICBib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5tb3JlLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNXB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PicSubjectMainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pic-subject-main-page',
                templateUrl: './pic-subject-main-page.component.html',
                styleUrls: ['./pic-subject-main-page.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class SignUpComponent {
    constructor() { }
    ngOnInit() {
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 25, vars: 0, consts: [["id", "id01", 1, "modal"], ["action", "/action_page.php", "method", "post", 1, "modal-content", "animate"], [1, "imgcontainer"], ["onclick", "document.getElementById('id01').style.display='none'", "title", "Close Modal", 1, "close"], ["src", "img_avatar2.png", "alt", "Avatar", 1, "avatar"], [1, "container"], ["for", "uname"], ["type", "text", "placeholder", "Enter Username", "name", "uname", "required", ""], ["for", "psw"], ["type", "password", "placeholder", "Enter Password", "name", "psw", "required", ""], ["type", "checkbox", "checked", "checked", "name", "remember"], [1, "container", 2, "background-color", "#f1f1f1"], ["type", "button", "onclick", "document.getElementById('id01').style.display='none'", 1, "cancelbtn"], [1, "psw"], ["href", "#"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Remember me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Forgot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n  }\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n  }\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    opacity: 0.8;\r\n  }\r\n\r\n.cancelbtn[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n  }\r\n\r\n.imgcontainer[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n    position: relative;\r\n  }\r\nimg.avatar[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n  }\r\n.container[_ngcontent-%COMP%] {\r\n    padding: 16px;\r\n  }\r\nspan.psw[_ngcontent-%COMP%] {\r\n    float: right;\r\n    padding-top: 16px;\r\n  }\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n    display: none; \r\n    position: fixed; \r\n    z-index: 1; \r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; \r\n    height: 100%; \r\n    overflow: auto; \r\n    background-color: rgb(0,0,0); \r\n    background-color: rgba(0,0,0,0.4); \r\n    padding-top: 60px;\r\n  }\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n    background-color: #fefefe;\r\n    margin: 5% auto 15% auto; \r\n    border: 1px solid #888;\r\n    width: 80%; \r\n  }\r\n\r\n.close[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 25px;\r\n    top: 0;\r\n    color: #000;\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n  }\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n    color: red;\r\n    cursor: pointer;\r\n  }\r\n\r\n.animate[_ngcontent-%COMP%] {\r\n    animation: animatezoom 0.6s\r\n  }\r\n@keyframes animatezoom {\r\n    from {transform: scale(0)} \r\n    to {transform: scale(1)}\r\n  }\r\n\r\n@media screen and (max-width: 300px) {\r\n    span.psw[_ngcontent-%COMP%] {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn[_ngcontent-%COMP%] {\r\n       width: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEI7QUFDNUI7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtFQUN4QjtBQUVBLGdDQUFnQztBQUNoQztJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7RUFDYjtBQUVBO0lBQ0UsWUFBWTtFQUNkO0FBRUEsdUNBQXVDO0FBQ3ZDO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7RUFDM0I7QUFFQSxtREFBbUQ7QUFDbkQ7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsYUFBYTtFQUNmO0FBRUE7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0VBQ25CO0FBRUEsMkJBQTJCO0FBQzNCO0lBQ0UsYUFBYSxFQUFFLHNCQUFzQjtJQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLFVBQVUsRUFBRSxlQUFlO0lBQzNCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVyxFQUFFLGVBQWU7SUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7SUFDeEQsaUJBQWlCO0VBQ25CO0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0UseUJBQXlCO0lBQ3pCLHdCQUF3QixFQUFFLHNEQUFzRDtJQUNoRixzQkFBc0I7SUFDdEIsVUFBVSxFQUFFLG9EQUFvRDtFQUNsRTtBQUVBLHlCQUF5QjtBQUN6QjtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsTUFBTTtJQUNOLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25CO0FBRUE7O0lBRUUsVUFBVTtJQUNWLGVBQWU7RUFDakI7QUFFQSx1QkFBdUI7QUFDdkI7SUFFRTtFQUNGO0FBT0E7SUFDRSxNQUFNLG1CQUFtQjtJQUN6QixJQUFJLG1CQUFtQjtFQUN6QjtBQUVBLG9FQUFvRTtBQUNwRTtJQUNFO09BQ0csY0FBYztPQUNkLFdBQVc7SUFDZDtJQUNBO09BQ0csV0FBVztJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBidXR0b246aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuICBcclxuICAvKiBFeHRyYSBzdHlsZXMgZm9yIHRoZSBjYW5jZWwgYnV0dG9uICovXHJcbiAgLmNhbmNlbGJ0biB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHggMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENlbnRlciB0aGUgaW1hZ2UgYW5kIHBvc2l0aW9uIHRoZSBjbG9zZSBidXR0b24gKi9cclxuICAuaW1nY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjRweCAwIDEycHggMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgaW1nLmF2YXRhciB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIHNwYW4ucHN3IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAvKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbiAgLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvIDE1JSBhdXRvOyAvKiA1JSBmcm9tIHRoZSB0b3AsIDE1JSBmcm9tIHRoZSBib3R0b20gYW5kIGNlbnRlcmVkICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgd2lkdGg6IDgwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIENsb3NlIEJ1dHRvbiAoeCkgKi9cclxuICAuY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDI1cHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAuY2xvc2U6aG92ZXIsXHJcbiAgLmNsb3NlOmZvY3VzIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFkZCBab29tIEFuaW1hdGlvbiAqL1xyXG4gIC5hbmltYXRlIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlem9vbSAwLjZzO1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlem9vbSAwLjZzXHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlem9vbSB7XHJcbiAgICBmcm9tIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCl9IFxyXG4gICAgdG8gey13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKX1cclxuICB9XHJcbiAgICBcclxuICBAa2V5ZnJhbWVzIGFuaW1hdGV6b29tIHtcclxuICAgIGZyb20ge3RyYW5zZm9ybTogc2NhbGUoMCl9IFxyXG4gICAgdG8ge3RyYW5zZm9ybTogc2NhbGUoMSl9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENoYW5nZSBzdHlsZXMgZm9yIHNwYW4gYW5kIGNhbmNlbCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgICBzcGFuLnBzdyB7XHJcbiAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmNhbmNlbGJ0biB7XHJcbiAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-up',
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/validation-error/validation-error.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/validation-error/validation-error.component.ts ***!
  \***************************************************************************/
/*! exports provided: ValidationErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationErrorComponent", function() { return ValidationErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ValidationErrorComponent {
    constructor() { }
    // @Input() ctrl:FormControl
    ngOnInit() { }
}
ValidationErrorComponent.ɵfac = function ValidationErrorComponent_Factory(t) { return new (t || ValidationErrorComponent)(); };
ValidationErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValidationErrorComponent, selectors: [["app-validation-error"]], decls: 0, vars: 0, template: function ValidationErrorComponent_Template(rf, ctx) { }, styles: ["span[_ngcontent-%COMP%]{color: red;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92YWxpZGF0aW9uLWVycm9yL3ZhbGlkYXRpb24tZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLLFVBQVUsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmFsaWRhdGlvbi1lcnJvci92YWxpZGF0aW9uLWVycm9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFue2NvbG9yOiByZWQ7fSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidationErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-validation-error',
                templateUrl: './validation-error.component.html',
                styleUrls: ['./validation-error.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/module-matriel/module-matriel.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/module-matriel/module-matriel.module.ts ***!
  \*********************************************************/
/*! exports provided: MatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatModule", function() { return MatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");












































class MatModule {
}
MatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatModule });
MatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatModule_Factory(t) { return new (t || MatModule)(); }, imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                ]
            }]
    }], null, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Asher\Desktop\img-shop-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map