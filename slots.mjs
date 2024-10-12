import { Harmony, Aspect, RuntimeDefinition as Runtime, Slot } from '@bitdev/harmony.harmony';

const runtimeDefFoo = Runtime.create({
  name: 'foo',
});

const slotX = Slot.withType();
const slotY = Slot.withType();
const slotZ = Slot.withType();

const aspectX = Aspect.create({
  id: 'aspect/aspect-x',
  packageName: 'aspect-x',
  dependencies: [],
  slots: [slotX, slotY],
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
  // overwrite the aspectX.slots
  slots: [slotZ],
  provider: async (deps, config, slots) => {
    const [slotZ] = slots;
    slotZ.register([{ name: 'a', value: 1 }, { name: 'b', value: 2 }]);
    return slots[0];
  }
})

const harmony = await Harmony.load([aspectX], 'foo');

await harmony.run();

const target = harmony.get(aspectX.id);

console.log({ target });

console.log(target.get(aspectX.id));
console.log(target.getByName('a'));
console.log(target.getByName('b'));
console.log(target.length);
