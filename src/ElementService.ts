import { injectable } from "inversify";
import { Component } from "./Component";

@injectable()
export class ElementService
{
    protected elementMap: Map<HTMLElement, Array<Component>> = new Map();

    public addComponent(element: any, component: Component): void
    {
        if (!this.elementMap.has(element)) {
            this.elementMap.set(element, []);
        }
        this.elementMap.get(element).push(component);
    }

    public hasComponent(element: any, componentClass: any): boolean
    {
        return this.getComponent(element, componentClass) !== null;
    }

    public getComponent(element: any, componentClass: any): Component
    {
        if (!this.elementMap.has(element)) {
            return null;
        }
        let components = this.elementMap.get(element);
        for (let i = 0; i < components.length; i++) {
            if (components[i] instanceof componentClass) {
                return components[i];
            }
        }
        return null;
    }
}