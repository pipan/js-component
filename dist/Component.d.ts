import { Emitter } from '@wildebeest/common';
export interface Component {
    initialize(element: HTMLElement): void;
    getElement(): HTMLElement;
    getEmitter(): Emitter;
}
