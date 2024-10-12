import { Harmony, Aspect, RuntimeDefinition as Runtime, Slot } from '@bitdev/harmony.harmony';

const runtimeDefFoo = Runtime.create({
  name: 'foo',
});

const aspectX = Aspect.create({
  id: 'aspect/aspect-x',
  packageName: 'aspect-x',
  dependencies: [],
  slots: [],
  defaultConfig: {},
  declareRuntime: runtimeDefFoo,
  files: [
    'x.foo.js',
    'x.bar.js',
    'x.baz.js',
  ],
});

aspectX.addRuntime({
  runtime: runtimeDefFoo,
  slots: [Slot.withType()],
  provider: async (deps, config, [slot]) => {
    return slot;
  }
})

const harmony = await Harmony.load([aspectX], 'foo');

await harmony.run();

const slotsX = harmony.get(aspectX.id);

console.log({ slotsX });

slotsX.register([{ name: 'a', value: 1 }, { name: 'b', value: 2 }]);

console.log(slotsX.get(aspectX.id));
console.log(slotsX.getByName('a'));
console.log(slotsX.getByName('b'));
console.log(slotsX.length);

