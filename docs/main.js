(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\Isaac angular-ptoject\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/item.actions */ "rJkI");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






class HomeComponent {
    constructor(store) {
        this.store = store;
        this.items$ = this.store.select('itemState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('items'));
        this.item$ = this.store.select('itemState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('item'));
    }
    ngOnInit() {
        this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_2__["LoadItems"]());
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["home"]], decls: 4, vars: 3, consts: [[1, "container"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Number of Items : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.items$).length, "!");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "A4CU":
/*!*************************************************************!*\
  !*** ./src/app/cmps/item-preview/item-preview.component.ts ***!
  \*************************************************************/
/*! exports provided: ItemPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPreviewComponent", function() { return ItemPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item-list/item-list.component */ "WBUw");



const _c0 = ["*"];
class ItemPreviewComponent {
    constructor(itemList) {
        this.itemList = itemList;
        this.item = null; //gets from father component : item-list
        this.img = "https://random.imagecdn.app/500/150";
    }
    ngOnInit() { }
}
ItemPreviewComponent.ɵfac = function ItemPreviewComponent_Factory(t) { return new (t || ItemPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_1__["ItemListComponent"])); };
ItemPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemPreviewComponent, selectors: [["item-preview"]], inputs: { item: "item" }, ngContentSelectors: _c0, decls: 9, vars: 3, consts: [[1, "item-preview"], [3, "src"], [1, "text-center"]], template: function ItemPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item == null ? null : ctx.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Id: ", ctx.item == null ? null : ctx.item.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".item-preview[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: rgba(121, 128, 192, 0.788);\n  border-radius: 10px;\n  min-height: 100px;\n  padding: 20px;\n  cursor: pointer;\n}\n\nhr[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpdGVtLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJpdGVtLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1wcmV2aWV3IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjEsIDEyOCwgMTkyLCAwLjc4OCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaHIge1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'item-preview',
                templateUrl: './item-preview.component.html',
                styleUrls: ['./item-preview.component.scss'],
            }]
    }], function () { return [{ type: _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_1__["ItemListComponent"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
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

/***/ "HjOC":
/*!******************************************************!*\
  !*** ./src/app/pages/item-app/item-app.component.ts ***!
  \******************************************************/
/*! exports provided: ItemAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemAppComponent", function() { return ItemAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/item.actions */ "rJkI");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cmps_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cmps/item-list/item-list.component */ "WBUw");
/* harmony import */ var _cmps_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cmps/item-edit/item-edit.component */ "Z4Ve");








function ItemAppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.error$), " ");
} }
function ItemAppComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u23F1 Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemAppComponent_section_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "item-edit", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saved", function ItemAppComponent_section_9_Template_item_edit_saved_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.addingNew = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ItemAppComponent {
    //connecting to store and getting specific properties
    //pluck : take a property of object
    constructor(store) {
        this.store = store;
        this.addingNew = false;
        this.filterBy = '';
        this.items$ = this.store.select('itemState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('items'));
        this.item$ = this.store.select('itemState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('item'));
        this.isLoading$ = this.store.select('itemState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('isLoading'));
        this.error$ = this.store.select('itemState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('error'));
    }
    ngOnInit() {
        this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_2__["LoadItems"](this.filterBy));
    }
    removeItem(itemId) {
        this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_2__["RemoveItem"](itemId));
    }
    editItem(itemId) {
        this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_2__["LoadItem"](itemId));
    }
}
ItemAppComponent.ɵfac = function ItemAppComponent_Factory(t) { return new (t || ItemAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
ItemAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemAppComponent, selectors: [["item-app"]], decls: 11, vars: 12, consts: [[1, "item-app-container"], ["class", "error-msg", 4, "ngIf"], [4, "ngIf"], [3, "items", "removed", "edited"], [3, "click"], [1, "error-msg"], [3, "saved"]], template: function ItemAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemAppComponent_div_1_Template, 3, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ItemAppComponent_p_3_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "item-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function ItemAppComponent_Template_item_list_removed_5_listener($event) { return ctx.removeItem($event); })("edited", function ItemAppComponent_Template_item_list_edited_5_listener($event) { return ctx.editItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemAppComponent_Template_button_click_7_listener() { return ctx.addingNew = !ctx.addingNew; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add Item...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ItemAppComponent_section_9_Template, 2, 0, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx.error$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx.isLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, ctx.items$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addingNew || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 10, ctx.item$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _cmps_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_5__["ItemListComponent"], _cmps_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_6__["ItemEditComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".item-app-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.error-msg[_ngcontent-%COMP%] {\n  background-color: #f5ced6;\n  padding: 5px;\n  position: absolute;\n  top: 0;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpdGVtLWFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJpdGVtLWFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLWFwcC1jb250YWluZXIge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZXJyb3ItbXNnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjA2LCAyMTQpO1xuICBwYWRkaW5nOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemAppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'item-app',
                templateUrl: './item-app.component.html',
                styleUrls: ['./item-app.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "Otmm":
/*!**************************************!*\
  !*** ./src/app/store/app.effects.ts ***!
  \**************************************/
/*! exports provided: AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_item_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/item.actions */ "rJkI");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/item.service */ "jcKA");








// the actual response to the component dispatch as vue actions
class AppEffects {
    constructor(actions$, itemService) {
        this.actions$ = actions$;
        this.itemService = itemService;
        this.loadItems$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["LOAD_ITEMS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((action) => //a kind of filter : only wants data in pipe regarding loading items
             this.itemService.realQuery().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((items) => ({
                type: _actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["LOADED_ITEMS"],
                items,
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                console.log('Effect: Caught error ===> Reducer', error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                    type: _actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["SET_ERROR"],
                    error: error.toString(),
                });
            }))));
        });
        this.loadItem$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["LOAD_ITEM"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => console.log('Effects: load item ==> service')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((action) => this.itemService.getById(action.itemId, action.itemId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => console.log('Effects: Got item from service ===> Reducer')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((item) => ({
                type: _actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["LOADED_ITEM"],
                item
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                console.log('Effect: Caught error ===> Reducer', error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                    type: _actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["SET_ERROR"],
                    error: error.toString(),
                });
            }))));
        });
        this.removeItem$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["REMOVE_ITEM"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((action) => this.itemService.remove(action.itemId, action.itemId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => console.log('Effects: Item removed by service ===> Reducer')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => ({
                type: _actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["REMOVED_ITEM"],
                itemId: action.itemId,
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                console.log('Effect: Caught error ===> Reducer', error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                    type: _actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["SET_ERROR"],
                    error: error.toString(),
                });
            }))));
        });
        this.saveItem$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["SAVE_ITEM"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((action) => this.itemService.save(action.item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => console.log('Effects: Item saved by service, inform the ===> Reducer')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((savedItem) => ({
                type: (action.item.id) ? _actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["UPDATED_ITEM"] : _actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["ADDED_ITEM"],
                item: savedItem,
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                console.log('Effect: Caught error ===> Reducer', error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                    type: _actions_item_actions__WEBPACK_IMPORTED_MODULE_4__["SET_ERROR"],
                    error: error.toString(),
                });
            }))));
        });
    }
}
AppEffects.ɵfac = function AppEffects_Factory(t) { return new (t || AppEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"])); };
AppEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppEffects, factory: AppEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"] }]; }, null); })();


/***/ }),

/***/ "Pii7":
/*!********************************!*\
  !*** ./src/app/store/store.ts ***!
  \********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _reducers_item_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/item.reducer */ "cMLI");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");


const reducers = {
    itemState: _reducers_item_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"],
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production
    ? []
    : [];


/***/ }),

/***/ "Sqpg":
/*!*****************************************!*\
  !*** ./src/app/root-component/index.ts ***!
  \*****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cmps/app-header/app-header.component */ "uOz6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'Coding Academy NGRX Demo';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_1__["AppHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `
            <app-header></app-header>
            <router-outlet></router-outlet>
            `,
            }]
    }], null, null); })();


/***/ }),

/***/ "SsL9":
/*!***************************************************!*\
  !*** ./src/app/services/async-storage.service.ts ***!
  \***************************************************/
/*! exports provided: storageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storageService", function() { return storageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

const storageService = {
    query,
    get,
    post,
    put,
    remove,
    makeId
};
function query(entityType, delay = 1000) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        var entities = JSON.parse(localStorage.getItem(entityType) || 'null') || [];
        if (delay) {
            return new Promise((resolve) => setTimeout(resolve, delay, entities));
        }
        return entities;
    });
}
function get(entityType, entityId) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        console.log(entityId);
        const entities = yield query(entityType);
        const entity = entities.find(entity => entity.id === entityId);
        if (!entity)
            throw new Error(`Cannot get, Item ${entityId} of type: ${entityType} does not exist`);
        return entity;
    });
}
function post(entityType, newEntity) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        newEntity = Object.assign(Object.assign({}, newEntity), { id: makeId() });
        const entities = yield query(entityType);
        entities.push(newEntity);
        _save(entityType, entities);
        return newEntity;
    });
}
function put(entityType, updatedEntity) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const entities = yield query(entityType);
        const idx = entities.findIndex(entity => entity.id === updatedEntity.id);
        entities[idx] = updatedEntity;
        _save(entityType, entities);
        return updatedEntity;
    });
}
function remove(entityType, entityId) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const entities = yield query(entityType);
        const idx = entities.findIndex(entity => entity.id === entityId);
        if (idx !== -1)
            entities.splice(idx, 1);
        else
            throw new Error(`Cannot remove, item ${entityId} of type: ${entityType} does not exist`);
        _save(entityType, entities);
        return true;
    });
}
function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities));
}
function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}


/***/ }),

/***/ "WBUw":
/*!*******************************************************!*\
  !*** ./src/app/cmps/item-list/item-list.component.ts ***!
  \*******************************************************/
/*! exports provided: ItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListComponent", function() { return ItemListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");



function ItemListComponent_item_preview_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "item-preview", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemListComponent_item_preview_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.removeItem(item_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemListComponent_item_preview_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.editItem(item_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r1);
} }
class ItemListComponent {
    constructor() {
        this.items = [];
        this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    removeItem(itemId) {
        this.removed.emit(itemId);
    }
    editItem(itemId) {
        this.edited.emit(itemId);
    }
}
ItemListComponent.ɵfac = function ItemListComponent_Factory(t) { return new (t || ItemListComponent)(); };
ItemListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemListComponent, selectors: [["item-list"]], inputs: { items: "items" }, outputs: { removed: "removed", edited: "edited" }, decls: 2, vars: 1, consts: [[1, "card-grid"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"], [3, "click"]], template: function ItemListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemListComponent_item_preview_1_Template, 6, 1, "item-preview", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'item-list',
                templateUrl: './item-list.component.html',
                styleUrls: ['./item-list.component.scss'],
            }]
    }], function () { return []; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], removed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], edited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Z4Ve":
/*!*******************************************************!*\
  !*** ./src/app/cmps/item-edit/item-edit.component.ts ***!
  \*******************************************************/
/*! exports provided: ItemEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemEditComponent", function() { return ItemEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/item.actions */ "rJkI");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







class ItemEditComponent {
    constructor(store) {
        this.store = store;
        this.item = { id: '', name: '' };
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sub = null;
        this.item$ = this.store.select('itemState').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('item'));
    }
    get itemEditState() {
        return (this.item.id) ? 'Update' : 'Add';
    }
    ngOnInit() {
        this.sub = this.item$.subscribe(item => {
            if (item)
                this.item = JSON.parse(JSON.stringify(item));
        });
    }
    saveItem() {
        this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_2__["SaveItem"](this.item));
        this.saved.emit();
    }
    ngOnDestroy() {
        var _a;
        (_a = this.sub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
ItemEditComponent.ɵfac = function ItemEditComponent_Factory(t) { return new (t || ItemEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
ItemEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemEditComponent, selectors: [["item-edit"]], outputs: { saved: "saved" }, decls: 11, vars: 6, consts: [[1, "item-edit"], [3, "submit"], ["type", "text", "name", "name", "placeholder", "Item name", 3, "ngModel", "ngModelChange"]], template: function ItemEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ItemEditComponent_Template_form_submit_3_listener($event) { $event.preventDefault(); return ctx.saveItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ItemEditComponent_Template_input_ngModelChange_4_listener($event) { return ctx.item.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Item ", ctx.itemEditState, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.itemEditState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, ctx.item));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]], styles: [".item-edit[_ngcontent-%COMP%] {\n  background-color: #7264f3;\n  padding: 10px;\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpdGVtLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoiaXRlbS1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tZWRpdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE0LCAxMDAsIDI0Myk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'item-edit',
                templateUrl: './item-edit.component.html',
                styleUrls: ['./item-edit.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, { saved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/store */ "Pii7");
/* harmony import */ var _store_app_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/app.effects */ "Otmm");
/* harmony import */ var _root_component_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./root-component/index */ "Sqpg");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_item_app_item_app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/item-app/item-app.component */ "HjOC");
/* harmony import */ var _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cmps/app-header/app-header.component */ "uOz6");
/* harmony import */ var _cmps_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cmps/item-list/item-list.component */ "WBUw");
/* harmony import */ var _cmps_item_preview_item_preview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cmps/item-preview/item-preview.component */ "A4CU");
/* harmony import */ var _cmps_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cmps/item-edit/item-edit.component */ "Z4Ve");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_root_component_index__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_store_store__WEBPACK_IMPORTED_MODULE_9__["reducers"], {
                metaReducers: _store_store__WEBPACK_IMPORTED_MODULE_9__["metaReducers"],
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true,
                },
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production,
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([_store_app_effects__WEBPACK_IMPORTED_MODULE_10__["AppEffects"]]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_root_component_index__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
        _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_14__["AppHeaderComponent"],
        _pages_item_app_item_app_component__WEBPACK_IMPORTED_MODULE_13__["ItemAppComponent"],
        _cmps_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_17__["ItemEditComponent"],
        _cmps_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_15__["ItemListComponent"],
        _cmps_item_preview_item_preview_component__WEBPACK_IMPORTED_MODULE_16__["ItemPreviewComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _root_component_index__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                    _cmps_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_14__["AppHeaderComponent"],
                    _pages_item_app_item_app_component__WEBPACK_IMPORTED_MODULE_13__["ItemAppComponent"],
                    _cmps_item_edit_item_edit_component__WEBPACK_IMPORTED_MODULE_17__["ItemEditComponent"],
                    _cmps_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_15__["ItemListComponent"],
                    _cmps_item_preview_item_preview_component__WEBPACK_IMPORTED_MODULE_16__["ItemPreviewComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_store_store__WEBPACK_IMPORTED_MODULE_9__["reducers"], {
                        metaReducers: _store_store__WEBPACK_IMPORTED_MODULE_9__["metaReducers"],
                        runtimeChecks: {
                            strictStateImmutability: true,
                            strictActionImmutability: true,
                        },
                    }),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({
                        maxAge: 25,
                        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production,
                    }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([_store_app_effects__WEBPACK_IMPORTED_MODULE_10__["AppEffects"]]),
                ],
                providers: [],
                bootstrap: [_root_component_index__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetComponentScope"](_cmps_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_15__["ItemListComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _cmps_item_preview_item_preview_component__WEBPACK_IMPORTED_MODULE_16__["ItemPreviewComponent"]], []);


/***/ }),

/***/ "cMLI":
/*!************************************************!*\
  !*** ./src/app/store/reducers/item.reducer.ts ***!
  \************************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_item_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/item.actions */ "rJkI");

const initialState = {
    items: [],
    item: null,
    isLoading: false,
    error: ''
};
//this function will take care to return new state
function reducer(state = initialState, action) {
    switch (action.type) {
        case _actions_item_actions__WEBPACK_IMPORTED_MODULE_0__["SET_LOADING"]: {
            //destructure from the action , return new state by spreading the currant state
            const { isLoading } = action;
            console.log(`Reducer: Setting isLoading to ${isLoading}`);
            return Object.assign(Object.assign({}, state), { isLoading, error: '' });
        }
        case _actions_item_actions__WEBPACK_IMPORTED_MODULE_0__["SET_ERROR"]: {
            const { error } = action;
            console.log(`Reducer: Setting item error`, error);
            return Object.assign(Object.assign({}, state), { error, isLoading: false });
        }
        case _actions_item_actions__WEBPACK_IMPORTED_MODULE_0__["LOADED_ITEMS"]: {
            const { items } = action;
            console.log(`Reducer: Setting loaded items (${items.length}) items`);
            return Object.assign(Object.assign({}, state), { items, isLoading: false, error: '' });
        }
        case _actions_item_actions__WEBPACK_IMPORTED_MODULE_0__["LOADED_ITEM"]: {
            const { item } = action;
            console.log(`Reducer: Setting loaded item ${item.id}`);
            return Object.assign(Object.assign({}, state), { item, error: '' });
        }
        case _actions_item_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVED_ITEM"]: {
            const { itemId } = action;
            console.log('Reducer: Removing item:', itemId);
            const items = state.items.filter(item => item.id !== itemId);
            return Object.assign(Object.assign({}, state), { items, error: '' });
        }
        case _actions_item_actions__WEBPACK_IMPORTED_MODULE_0__["ADDED_ITEM"]: {
            const { item } = action;
            console.log('Reducer: Adding item:', item);
            const items = [...state.items, item];
            return Object.assign(Object.assign({}, state), { items, error: '' });
        }
        case _actions_item_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATED_ITEM"]: {
            const { item } = action;
            console.log('Reducer: Updating item:', item);
            const items = state.items.map(currItem => (currItem.id === item.id) ? item : currItem);
            return Object.assign(Object.assign({}, state), { items, item: null, error: '' });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "jcKA":
/*!******************************************!*\
  !*** ./src/app/services/item.service.ts ***!
  \******************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/item.actions */ "rJkI");
/* harmony import */ var _async_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./async-storage.service */ "SsL9");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







const ENTITY = 'item';
class ItemService {
    constructor(store, http) {
        this.store = store;
        this.http = http;
        // If empty - load test data to storage
        const items = JSON.parse(localStorage.getItem(ENTITY) || 'null');
        if (!items || items.length === 0) {
            console.log('Empty');
            localStorage.setItem(ENTITY, JSON.stringify(this.createItems()));
        }
    }
    query(filterBy = '') {
        this.store.dispatch(new _store_actions_item_actions__WEBPACK_IMPORTED_MODULE_2__["LoadingItems"]());
        // casting : the promise entity [] to item as define on module. form can change promise to Observable
        //only if we first cast it as promise of item
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(_async_storage_service__WEBPACK_IMPORTED_MODULE_3__["storageService"].query(ENTITY));
    }
    realQuery() {
        let realItem = this.http.get('http://www.filltext.com/?rows=10&id={index}&name={username}&pretty=true');
        realItem.subscribe(res => {
            if (res === undefined)
                localStorage.setItem('item', '');
            else {
                localStorage.setItem('item', JSON.stringify(res));
            }
            //a bad way to keep data to edit data fro server. edit should check if to 
            //edit from store array !
        });
        return realItem;
    }
    getById(itemId, id) {
        id = itemId;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(_async_storage_service__WEBPACK_IMPORTED_MODULE_3__["storageService"].get(ENTITY, id));
    }
    remove(itemId, id) {
        id = itemId;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(_async_storage_service__WEBPACK_IMPORTED_MODULE_3__["storageService"].remove(ENTITY, id));
    }
    save(item) {
        const method = item.id ? 'put' : 'post';
        const prmSavedItem = _async_storage_service__WEBPACK_IMPORTED_MODULE_3__["storageService"][method](ENTITY, item);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(prmSavedItem);
    }
    createItems() {
        return ['Vue', 'Angular', 'React', 'Redux', 'NGRX', 'Vuex'].map((name) => ({
            id: _async_storage_service__WEBPACK_IMPORTED_MODULE_3__["storageService"].makeId(),
            name,
        }));
    }
    get emptyItem() {
        return {
            id: '',
            name: '',
        };
    }
}
ItemService.ɵfac = function ItemService_Factory(t) { return new (t || ItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
ItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItemService, factory: ItemService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "rJkI":
/*!***********************************************!*\
  !*** ./src/app/store/actions/item.actions.ts ***!
  \***********************************************/
/*! exports provided: SET_LOADING, SET_ERROR, LOAD_ITEMS, LOAD_ITEM, LOADED_ITEM, LOADED_ITEMS, REMOVE_ITEM, REMOVED_ITEM, SAVE_ITEM, ADDED_ITEM, UPDATED_ITEM, LoadItems, LoadItem, RemoveItem, LoadedItems, LoadedItem, RemovedItem, SaveItem, AddedItem, UpdatedItem, LoadingItems, ItemError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ERROR", function() { return SET_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ITEMS", function() { return LOAD_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ITEM", function() { return LOAD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADED_ITEM", function() { return LOADED_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADED_ITEMS", function() { return LOADED_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVED_ITEM", function() { return REMOVED_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_ITEM", function() { return SAVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDED_ITEM", function() { return ADDED_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATED_ITEM", function() { return UPDATED_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadItems", function() { return LoadItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadItem", function() { return LoadItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveItem", function() { return RemoveItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadedItems", function() { return LoadedItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadedItem", function() { return LoadedItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemovedItem", function() { return RemovedItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveItem", function() { return SaveItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddedItem", function() { return AddedItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatedItem", function() { return UpdatedItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingItems", function() { return LoadingItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemError", function() { return ItemError; });
//variables for log information
const SET_LOADING = '[item] loading';
const SET_ERROR = '[item] error';
const LOAD_ITEMS = '[item]s load';
const LOAD_ITEM = '[item] load';
const LOADED_ITEM = '[item] loaded';
const LOADED_ITEMS = '[item]s loaded';
const REMOVE_ITEM = '[item] remove';
const REMOVED_ITEM = '[item] removed';
const SAVE_ITEM = '[item] saved';
const ADDED_ITEM = '[item] added';
const UPDATED_ITEM = '[item] updated';
//action doesn't actually perform , just arrange the data 
// as usual inside the constructor params : the input for the action
//readonly : type script creature: cant be changed
class LoadItems {
    constructor(filterBy = '') {
        this.filterBy = filterBy;
        this.type = LOAD_ITEMS;
    }
}
class LoadItem {
    constructor(itemId = '') {
        this.itemId = itemId;
        this.type = LOAD_ITEM;
    }
}
class RemoveItem {
    constructor(itemId) {
        this.itemId = itemId;
        this.type = REMOVE_ITEM;
    }
}
// when reducer gets it - he will push it to the store
class LoadedItems {
    constructor(items = []) {
        this.items = items;
        this.type = LOADED_ITEMS;
    }
}
class LoadedItem {
    constructor(item) {
        this.item = item;
        this.type = LOADED_ITEM;
    }
}
class RemovedItem {
    constructor(itemId) {
        this.itemId = itemId;
        this.type = REMOVED_ITEM;
    }
}
class SaveItem {
    constructor(item) {
        this.item = item;
        this.type = SAVE_ITEM;
    }
}
class AddedItem {
    constructor(item) {
        this.item = item;
        this.type = ADDED_ITEM;
    }
}
class UpdatedItem {
    constructor(item) {
        this.item = item;
        this.type = UPDATED_ITEM;
    }
}
class LoadingItems {
    constructor(isLoading = true) {
        this.isLoading = isLoading;
        this.type = SET_LOADING;
    }
}
class ItemError {
    constructor(error) {
        this.error = error;
        this.type = SET_ERROR;
    }
}


/***/ }),

/***/ "uOz6":
/*!*********************************************************!*\
  !*** ./src/app/cmps/app-header/app-header.component.ts ***!
  \*********************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return { exact: true }; };
class AppHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) { return new (t || AppHeaderComponent)(); };
AppHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppHeaderComponent, selectors: [["app-header"]], decls: 12, vars: 4, consts: [[1, "nav-container", "flex", "space-between", "align-center"], [1, "flex"], ["routerLinkActive", "active-nav", "routerLink", "/home", 3, "routerLinkActiveOptions"], [1, "flex", "align-center"], [1, "nav-txt"], ["routerLinkActive", "active-nav", "routerLink", "/item", 3, "routerLinkActiveOptions"], ["routerLink", "/home"], ["src", "./assets/img/logo.png", "alt", "app-logo", "title", "Go home"]], template: function AppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".nav-container[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.166);\n  width: 100%;\n  padding: 10px;\n  background-color: #3336db;\n}\n.nav-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #acacac;\n  font-size: 1.3rem;\n}\n.nav-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 10px;\n}\n.nav-container[_ngcontent-%COMP%]   .nav-txt[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-left: 5px;\n}\n.nav-container[_ngcontent-%COMP%]   .active-nav[_ngcontent-%COMP%] {\n  color: white;\n  cursor: auto;\n}\n.nav-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 35px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhcHAtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNENBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDSTtFQUNFLGlCQUFBO0FBQ047QUFHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQURKO0FBSUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUZKO0FBS0U7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQUhKIiwiZmlsZSI6ImFwcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNjYpO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCA1NCwgMjE5KTtcblxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHJnYigxNzIsIDE3MiwgMTcyKTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcblxuICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLm5hdi10eHQge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG5cbiAgLmFjdGl2ZS1uYXYge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IGF1dG87XG4gIH1cblxuICBpbWcge1xuICAgIG1heC13aWR0aDogMzVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './app-header.component.html',
                styleUrls: ['./app-header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_item_app_item_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/item-app/item-app.component */ "HjOC");






const routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'item', component: _pages_item_app_item_app_component__WEBPACK_IMPORTED_MODULE_3__["ItemAppComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map