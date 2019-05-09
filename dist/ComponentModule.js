"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentBindService_1 = require("./ComponentBindService");
var common_1 = require("@wildebeest/common");
var ComponentModule = (function () {
    function ComponentModule() {
    }
    ComponentModule.prototype.getDependencies = function () {
        return [common_1.CommonModule];
    };
    ComponentModule.prototype.register = function (container) {
        container.bind('Factory<ComponentBuilder>').toFactory(function (context) {
            return function (name) {
                return context.container.getNamed('ComponentBuilder', name);
            };
        });
        container.bind('Factory<ComponentBinder>').toFactory(function (context) {
            return function (name) {
                return context.container.getNamed('ComponentBinder', name);
            };
        });
        container.bind(ComponentBindService_1.ComponentBindService).toSelf().inSingletonScope();
    };
    ComponentModule.prototype.boot = function (container) { };
    return ComponentModule;
}());
exports.ComponentModule = ComponentModule;
//# sourceMappingURL=ComponentModule.js.map