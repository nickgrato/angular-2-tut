"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router"); //routing
var platform_browser_1 = require("@angular/platform-browser"); // ex ngIf
var forms_1 = require("@angular/forms"); //example ng-model
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./home/welcome.component");
var product_list_component_1 = require("./products/product-list.component");
var product_guard_service_1 = require("./products/product-guard.service");
var product_detail_component_1 = require("./products/product-detail.component");
var firstLast_1 = require("./shared/custom-pipes/firstLast");
var product_filter_pipe_1 = require("./shared/custom-pipes/product-filter.pipe");
var star_component_1 = require("./shared/star.component");
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
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'products', component: product_list_component_1.ProductListComponent },
                { path: 'product/:id', canActivate: [product_guard_service_1.ProductDetailGuard], component: product_detail_component_1.ProductDetailComponent },
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            welcome_component_1.WelcomeComponent,
            product_list_component_1.ProductListComponent,
            product_detail_component_1.ProductDetailComponent,
            firstLast_1.FirstLastPipe,
            product_filter_pipe_1.productFilterPipe,
            star_component_1.StarComponent
        ],
        providers: [product_guard_service_1.ProductDetailGuard],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map