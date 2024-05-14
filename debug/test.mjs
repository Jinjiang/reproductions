import { resolve } from 'path';
import { mergeConfig, loadConfigFromFile } from 'vite';
import { startVitest } from 'vitest/node';

const __dirname = new URL('.', import.meta.url).pathname;
const env = {
  configPath: resolve(__dirname, '../vitest.config.ts'),
  rootPath: resolve(__dirname, '../'),
}
const { configPath, rootPath } = env;
const include = [resolve(rootPath, '**/*.spec.ts')];
console.log({ configPath, rootPath, include })

const baseConfig = {
  root: rootPath,
  test: {
    globals: true,
    include,
    watch: false,
  },
}

const customConfig = (await loadConfigFromFile({
  command: 'build',
  mode: 'development'
}, configPath, rootPath))?.config;

const config = mergeConfig(baseConfig, customConfig);

const vitest = await startVitest('test', undefined, undefined, config, {});
await vitest.close();
