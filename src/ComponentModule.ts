import { Module } from "@wildebeest/js-modules";
import { Container, interfaces } from "inversify";
import { ComponentBuilder } from "./ComponentBuilder";
import { ComponentBinder } from "./ComponentBinder";
import { ComponentBindService } from "./ComponentBindService";
import { CommonModule } from "@wildebeest/common";

export class ComponentModule implements Module
{
    getDependencies(): Array<any>
    {
        return [CommonModule];
    }

    register(container: Container): void
    {
        container.bind<interfaces.Factory<ComponentBuilder>>('Factory<ComponentBuilder>').toFactory<ComponentBuilder>((context: interfaces.Context) => {
            return (name: string) => {
                return context.container.getNamed('ComponentBuilder', name);
            }
        });
        container.bind<interfaces.Factory<ComponentBinder>>('Factory<ComponentBinder>').toFactory<ComponentBinder>((context: interfaces.Context) => {
            return (name: string) => {
                return context.container.getNamed('ComponentBinder', name);
            }
        });
        container.bind<ComponentBindService>(ComponentBindService).toSelf().inSingletonScope();
    }

    boot(container: Container): void {}
}