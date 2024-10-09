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

const target = await Harmony.load([aspectX], 'foo');
console.log({ target });
console.log(target.runtimes);