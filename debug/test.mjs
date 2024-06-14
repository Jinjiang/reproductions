import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { mergeConfig, loadConfigFromFile } from 'vite';
import { startVitest } from 'vitest/node';

const __dirname = dirname(fileURLToPath(import.meta.url));

const test = async (appName, index) => {
  const env = {
    configPath: resolve(__dirname, `../examples/${appName}/vitest.config.mjs`),
    rootPath: resolve(__dirname, `../examples/${appName}/`),
  }
  const { configPath, rootPath } = env;
  const include = [resolve(rootPath, '**/*.spec.ts')];
  console.log(index, { configPath, rootPath, include })
  
  const baseConfig = {
    root: rootPath,
    test: {
      globals: true,
      include,
      watch: false,
    },
  }
  
  console.log(index, baseConfig)
  
  const customConfig = (await loadConfigFromFile({
    command: 'build',
    mode: 'development'
  }, configPath, rootPath))?.config;
  
  console.log(index, customConfig)
  
  const config = mergeConfig(baseConfig, customConfig);
  
  console.log(index, config)
  
  const vitest = await startVitest('test', undefined, undefined, config, {});
  await vitest.close();
}

const appNames = [
  'hello-world-app',
  'my-nuxtjs-layer',
  'my-nuxtjs-app',
]

Promise.all(appNames.map((appName, index) => test(appName, index)))
