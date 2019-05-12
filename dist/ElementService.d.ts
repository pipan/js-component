import { Component } from "./Component";
export declare class ElementService {
    protected elementMap: Map<HTMLElement, Array<Component>>;
    addComponent(element: any, component: Component): void;
    hasComponent(element: any, componentClass: any): boolean;
    getComponent(element: any, componentClass: any): Component;
}
