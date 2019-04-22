import 'ts-jest';
import { Application } from '@wildebeest/js-modules';
import { ComponentModule } from '../src/ComponentModule';

let app: Application = new Application();
app.run([ComponentModule]);

test("register services", () => {
    expect(app.getContainer().get('Factory<ComponentBuilder>')).toBeDefined();
});