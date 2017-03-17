"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser"); // ex ngIf
var forms_1 = require("@angular/forms"); //example ng-model
var app_component_1 = require("./app.component");
var product_list_component_1 = require("./products/product-list.component");
var firstLast_1 = require("./shared/custom-pipes/firstLast");
var product_filter_pipe_1 = require("./shared/custom-pipes/product-filter.pipe");
/*
IMPORTS - External modules we want available to this module "BrowserModule".
DECLATATIONS - These are all the components that we want in this module.
BOOTSTRAP - The root component for the app - AppComponent
*/
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule],
        declarations: [
            app_component_1.AppComponent,
            product_list_component_1.ProductListComponent,
            firstLast_1.FirstLastPipe,
            product_filter_pipe_1.productFilterPipe
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map