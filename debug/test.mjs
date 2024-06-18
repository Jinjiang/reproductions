import { resolve } from 'path';
import { mergeConfig, loadConfigFromFile } from 'vite';
import { startVitest } from 'vitest/node';

const __dirname = new URL('.', import.meta.url).pathname;
const env = {
  rootPath: resolve(__dirname, '../'),
  configPath: resolve(__dirname, '../vite.config.ts'),
}
const { configPath, rootPath } = env;
const include = [resolve(rootPath, '**/*.spec.ts')];
// console.log({ configPath, rootPath, include })

const baseConfig = {
  root: rootPath,
  test: {
    globals: true,
    include,
    watch: false,
  },
}

// console.log(baseConfig)

const customConfig = (await loadConfigFromFile({
  command: 'build',
  mode: 'development'
}, configPath, rootPath))?.config;

// console.log(customConfig)

const config = mergeConfig(baseConfig, customConfig);

// console.log(config)

const vitest = await startVitest('test', undefined, undefined, config, {});
await vitest.close();

console.log('done')
