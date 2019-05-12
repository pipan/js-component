import 'ts-jest';
import { Application } from '@wildebeest/js-modules';
import { ComponentModule } from '../src/ComponentModule';
import { ComponentBindService } from '../src/ComponentBindService';
import { Component } from '../src/Component';
import { Emitter, EmitterService, DomService } from '@wildebeest/common';
import { ElementService } from '../src/ElementService';

class TestComponent implements Component
{
    protected element: HTMLElement;
    protected emitter: Emitter;

    constructor(element: HTMLElement, emitter: Emitter)
    {
        this.element = element;
        this.emitter = emitter;
    }

    getElement(): HTMLElement
    {
        return this.element;
    }

    getEmitter(): Emitter
    {
        return this.emitter;
    }
}

let app: Application = new Application();
app.run([ComponentModule]);
let domService: DomService = app.getContainer().get<DomService>(DomService);
let emitterService: EmitterService = app.getContainer().get<EmitterService>(EmitterService);
let elementService: ElementService = app.getContainer().get<ElementService>(ElementService);

test("binding HTML element to component", () => {    
    let element: any = domService.create('<div class="test"></div>');
    let component: Component = new TestComponent(element, emitterService.createEmitter());

    expect(elementService.hasComponent(element, TestComponent)).toEqual(false);
    elementService.addComponent(element, component);
    expect(elementService.hasComponent(element, TestComponent)).toEqual(true);
});