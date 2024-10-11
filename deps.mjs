import { Harmony, Aspect, RuntimeDefinition as Runtime } from '@bitdev/harmony.harmony';

const runtimeFoo = Runtime.create({
  name: 'foo',
});

const aspectX = Aspect.create({
  id: 'aspect/aspect-x',
  packageName: 'aspect-x',
  declareRuntime: runtimeFoo,
  files: [
    'x.foo.js',
    'x.bar.js',
    'x.baz.js',
  ],
});

const aspectY = Aspect.create({
  id: 'aspect/aspect-y',
  packageName: 'aspect-y',
  dependencies: [aspectX],
  declareRuntime: runtimeFoo,
  files: [
    'y.foo.js',
    'y.bar.js',
    'y.baz.js',
  ],
});

aspectX.addRuntime({
  runtime: 'foo',
  provider: async () => {
    return {
      foo: 'foo',
    };
  }
});

aspectY.addRuntime({
  runtime: 'foo',
  // dependencies: [aspectX],
  provider: async ([x]) => {
    return {
      x,
    };
  }
});

const harmony = await Harmony.load([aspectX, aspectY], 'foo');
console.log({ harmony });
console.log(harmony.runtimes);

await harmony.run();

console.log(harmony.get(aspectY.id));
