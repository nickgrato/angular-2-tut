"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ProductDetailGuard = (function () {
    function ProductDetailGuard(_router) {
        this._router = _router;
    }
    /* NOTE:
    Routing guard can be used for a lot of things from routing errors to
    validation. We can use tokens to allow users into sertant routes. We can also
    use routing guards for modal confirmations. We can also use this to perload data to a route.
    */
    ProductDetailGuard.prototype.canActivate = function (route) {
        var answer = confirm("Are you sure you want to go to this product");
        if (answer) {
            return true;
        }
        else {
            return false;
        }
    };
    return ProductDetailGuard;
}());
ProductDetailGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], ProductDetailGuard);
exports.ProductDetailGuard = ProductDetailGuard;
//# sourceMappingURL=product-guard.service.js.map