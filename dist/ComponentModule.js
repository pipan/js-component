"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentModule = (function () {
    function ComponentModule() {
    }
    ComponentModule.prototype.getDependencies = function () {
        return [];
    };
    ComponentModule.prototype.register = function (container) {
        container.bind('Factory<ComponentBuilder>').toFactory(function (context) {
            return function (name) {
                return context.container.getNamed('ComponentBuilder', name);
            };
        });
    };
    ComponentModule.prototype.boot = function (container) { };
    return ComponentModule;
}());
exports.ComponentModule = ComponentModule;
//# sourceMappingURL=ComponentModule.js.map