import { Emitter } from '@wildebeest/common';
export interface Component {
    getElement(): HTMLElement;
    getEmitter(): Emitter;
}
