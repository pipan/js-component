"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var ComponentBindService = (function () {
    function ComponentBindService() {
        this.binders = {};
    }
    ComponentBindService.prototype.addBinder = function (name, binder) {
        this.binders[name] = binder;
    };
    ComponentBindService.prototype.autoBind = function (element) {
        var result = new Map();
        for (var key in this.binders) {
            var selectedElements = element.querySelectorAll(this.binders[key].selector);
            var components = [];
            for (var i = 0; i < selectedElements.length; i++) {
                var component = this.binders[key].binder.bind(selectedElements[i]);
                components.push(component);
            }
            result.set(key, components);
        }
        return result;
    };
    ComponentBindService = __decorate([
        inversify_1.injectable()
    ], ComponentBindService);
    return ComponentBindService;
}());
exports.ComponentBindService = ComponentBindService;
//# sourceMappingURL=ComponentBindService.js.map