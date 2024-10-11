import { Harmony, Aspect, RuntimeDefinition as Runtime } from '@bitdev/harmony.harmony';

console.log({ Harmony, Aspect, Runtime });

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

aspectX.addRuntime({
  runtime: 'foo',
  provider: async () => {
    return {
      foo: 'foo',
    };
  }
});

const harmony = await Harmony.load([aspectX], 'foo');
console.log({ harmony });
console.log(harmony.runtimes);

await harmony.run();

console.log(harmony.get('aspect/aspect-x'));
