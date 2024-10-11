import { Harmony, Aspect, RuntimeDefinition, Extension } from '@bitdev/harmony.harmony';

console.log({ Harmony, Aspect, RuntimeDefinition, Extension });

const runtimeDefFoo = RuntimeDefinition.create({
  name: 'foo',
});

const aspectManifestX = {
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
};

const aspectX = Aspect.create(aspectManifestX);

const runtimeManifestFoo = {
  runtime: 'foo',
  provider: async () => {
    return {
      foo: 'foo',
    };
  }
}

aspectX.addRuntime(runtimeManifestFoo);

const harmony = await Harmony.load([aspectX], 'foo');
console.log({ harmony });
console.log(harmony.runtimes);

await harmony.run();

console.log(harmony.get('aspect/aspect-x'));