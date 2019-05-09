import { Component } from "./Component";
export interface ComponentBinder {
    bind(element: HTMLElement): Component;
}
