"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var ElementService = (function () {
    function ElementService() {
        this.elementMap = new Map();
    }
    ElementService.prototype.addComponent = function (element, component) {
        if (!this.elementMap.has(element)) {
            this.elementMap.set(element, []);
        }
        this.elementMap.get(element).push(component);
    };
    ElementService.prototype.hasComponent = function (element, componentClass) {
        return this.getComponent(element, componentClass) !== null;
    };
    ElementService.prototype.getComponent = function (element, componentClass) {
        if (!this.elementMap.has(element)) {
            return null;
        }
        var components = this.elementMap.get(element);
        for (var i = 0; i < components.length; i++) {
            if (components[i] instanceof componentClass) {
                return components[i];
            }
        }
        return null;
    };
    ElementService = __decorate([
        inversify_1.injectable()
    ], ElementService);
    return ElementService;
}());
exports.ElementService = ElementService;
//# sourceMappingURL=ElementService.js.map