import { ComponentBinder } from "./ComponentBinder";
import { Component } from "./Component";
export declare class ComponentBindService {
    protected binders: {
        [key: string]: {
            selector: string;
            binder: ComponentBinder;
        };
    };
    addBinder(name: string, binder: {
        selector: string;
        binder: ComponentBinder;
    }): void;
    bindToElement(element: HTMLElement): Map<string, Array<Component>>;
}
