import 'ts-jest';
import { Application } from '@wildebeest/js-modules';
import { ComponentModule } from '../src/ComponentModule';
import { ComponentBindService } from '../src/ComponentBindService';
import { ElementService } from '../src/ElementService';

let app: Application = new Application();
app.run([ComponentModule]);

test("register services", () => {
    expect(app.getContainer().get('Factory<ComponentBuilder>')).toBeDefined();
    expect(app.getContainer().get('Factory<ComponentBinder>')).toBeDefined();
    expect(app.getContainer().get(ComponentBindService)).toBeInstanceOf(ComponentBindService);
    expect(app.getContainer().get(ElementService)).toBeInstanceOf(ElementService);
});