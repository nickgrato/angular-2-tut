"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FirstLastPipe = (function () {
    function FirstLastPipe() {
    }
    /*
      value - value coming in
      args - argument(s) coming in
      : return value
    */
    FirstLastPipe.prototype.transform = function (value, args) {
        console.log(value);
        return 'C.P. @ work - ' + value;
    };
    return FirstLastPipe;
}());
FirstLastPipe = __decorate([
    core_1.Pipe({
        //Name of the pipe when used in the html template.
        name: 'FirstLast'
    })
], FirstLastPipe);
exports.FirstLastPipe = FirstLastPipe;
//# sourceMappingURL=firstLast.js.map