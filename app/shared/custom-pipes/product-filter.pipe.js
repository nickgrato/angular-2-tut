"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var productFilterPipe = (function () {
    function productFilterPipe() {
    }
    productFilterPipe.prototype.transform = function (value, filterBy) {
        //THIS FILTER IS MORE JAVASCRIPT THEN ANGULAR SO DONT WORRY ABOUT IT.
        //is filter a value? if not set to null otherwise set to lowercase verion of it self.
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        //does filter have a value? if not return every list item
        // if filterBy has a value then filter value 
        return filterBy ? value.filter(
        /*just compares the lowercase version of the name and the lowercase version of the value of filter. If the value is anywhere in
        the name it will return a a number of the index. just making sure it isnt "-1",thats means it isnt in the string at all.*/
        function (product) { return product.productName.toLowerCase().indexOf(filterBy) != -1; })
            : value;
    };
    return productFilterPipe;
}());
productFilterPipe = __decorate([
    core_1.Pipe({
        name: 'productFilter'
    })
], productFilterPipe);
exports.productFilterPipe = productFilterPipe;
//# sourceMappingURL=product-filter.pipe.js.map