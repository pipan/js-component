import { Component } from "./Component";
export interface ComponentBuilder {
    build(data: any): Component;
    setTemplate(template: string): void;
}
