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

console.log(harmony.get(aspectX.id));

