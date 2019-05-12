import { injectable } from "inversify";
import { ComponentBinder } from "./ComponentBinder";
import { Component } from "./Component";

@injectable()
export class ComponentBindService
{
    protected binders: {[key: string]: {selector: string, binder: ComponentBinder}} = {};

    public addBinder(name: string, binder: {selector: string, binder: ComponentBinder}): void
    {
        this.binders[name] = binder;
    }

    public autoBind(element: HTMLElement): Map<string, Array<Component>>
    {
        let result: Map<string, Array<Component>> = new Map();
        for (let key in this.binders) {
            let selectedElements: NodeListOf<any> = element.querySelectorAll(this.binders[key].selector);
            let components: Array<Component> = [];
            for (let i = 0; i < selectedElements.length; i++) {
                let component: Component = this.binders[key].binder.bind(selectedElements[i]);
                components.push(component);
            }
            result.set(key, components);
        }
        return result;
    }
}