import * as url from 'url'
import path from 'path'

// import type { MetaCheckerOptions } from 'vue-component-meta'
import { createChecker } from 'vue-component-meta'
import { write, writeFileSync } from 'fs';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const tsconfigPath = path.join(__dirname, 'tsconfig.json');
const componentPath = path.join(__dirname, 'src', 'foo.vue');
const outputPath = path.join(__dirname, 'dist', 'foo.vue.meta.json');

console.log({
  __dirname,
  componentPath,
  tsconfigPath,
  outputPath,
})

// const checkerOptions: MetaCheckerOptions = {
const checkerOptions = {
  forceUseTs: true,
  schema: { ignore: ['MyIgnoredNestedProps'] },
  printer: { newLine: 1 },
}

const checker = createChecker(
  tsconfigPath,
  checkerOptions,
)

const meta = checker.getComponentMeta(componentPath);

// console.log('Component Meta:', meta);
// console.log('[Type]');
// console.log(JSON.stringify(meta.type, null, 2));
// console.log('[Props]');
// console.log(JSON.stringify(meta.props, null, 2));
// console.log('[Emits]');
// console.log(JSON.stringify(meta.events, null, 2));
// console.log('[Slots]');
// console.log(JSON.stringify(meta.slots, null, 2));
// console.log('[Exposed]');
// console.log(JSON.stringify(meta.exposed, null, 2));

writeFileSync(
  outputPath,
  JSON.stringify(meta, null, 2),
  'utf-8',
);
