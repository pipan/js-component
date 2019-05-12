import 'ts-jest';
import { Application } from '@wildebeest/js-modules';
import { ComponentModule } from '../src/ComponentModule';
import { ComponentBindService } from '../src/ComponentBindService';
import { ComponentBinder } from '../src/ComponentBinder';
import { Component } from '../src/Component';
import { Emitter, EmitterService, DomService } from '@wildebeest/common';

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

class TestComponentBinder implements ComponentBinder
{
    protected emitterService: EmitterService;

    constructor(emitterService: EmitterService)
    {
        this.emitterService = emitterService;
    }

    bind(element: HTMLElement): Component
    {
        return new TestComponent(element, this.emitterService.createEmitter());
    }
}

let app: Application = new Application();
app.run([ComponentModule]);
let domService: DomService = app.getContainer().get<DomService>(DomService);
let componentBindService: ComponentBindService = app.getContainer().get<ComponentBindService>(ComponentBindService);
let emitterService: EmitterService = app.getContainer().get<EmitterService>(EmitterService);
let bindService: ComponentBindService = app.getContainer().get<ComponentBindService>(ComponentBindService);

test("auto binding", () => {
    componentBindService.addBinder('test', {
        selector: '.test',
        binder: new TestComponentBinder(emitterService)
    });
    
    let element: HTMLElement = domService.create('<div class="test"></div>');
    domService.insert([element], document.body);
    let components: Map<string, Array<Component>> = bindService.autoBind(document.body);

    expect(components.get('test')).toBeDefined();
    expect(components.get('test').length).toEqual(1);
});

test("binding HTML element to component", () => {
    componentBindService.addBinder('test', {
        selector: '.test',
        binder: new TestComponentBinder(emitterService)
    });
    
    let element: any = domService.create('<div class="test"></div>');
    let component: Component = new TestComponent(element, emitterService.createEmitter());
    bindService.bindToElement(element, component);

    expect(element.wbComponents).toBeDefined();
    expect(element.wbComponents.length).toEqual(1);
});