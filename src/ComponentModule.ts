import { Module } from "@wildebeest/js-modules";
import { Container, interfaces } from "inversify";
import { ComponentBuilder } from "./ComponentBuilder";

export class ComponentModule implements Module
{
    getDependencies(): Array<any>
    {
        return [];
    }

    register(container: Container): void
    {
        container.bind<interfaces.Factory<ComponentBuilder>>('Factory<ComponentBuilder>').toFactory<ComponentBuilder>((context: interfaces.Context) => {
            return (name: string) => {
                return context.container.getNamed('ComponentBuilder', name);
            }
        });
    }

    boot(container: Container): void {}
}