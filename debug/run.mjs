import { fileURLToPath } from 'url';
import { resolve } from 'path';
import { startVitest } from 'vitest/node';
import vue from '@vitejs/plugin-vue';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const root = resolve(__dirname, '..');

const viteConfig = {
  root,
  configFile: false,
  envFile: false,
  plugins: [
    // walk around
    // https://github.com/vitest-dev/vitest/issues/8468#issuecomment-3218289606
    // {
    //   name: "plugin-order-fixer",
    //   configResolved(config) {
    //     const coverageIndex = config.plugins.findIndex(
    //       (plugin) => plugin.name === "vitest:coverage-transform"
    //     );
    //     const vueIndex = config.plugins.findIndex(
    //       (plugin) => plugin.name === "vite:vue"
    //     );
    //     const [coveragePlugin] = config.plugins.splice(coverageIndex, 1);
    //     config.plugins.splice(vueIndex + 1, 0, coveragePlugin);
    //   },
    // },
    vue(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    root,
    watch: false,
    coverage: {
      enabled: true,
      provider: 'istanbul',
      reporter: [ 'text', 'json-summary' ],
    },
  }
};

const vitest = await startVitest('test', undefined, undefined, viteConfig);
await vitest.close();
const files = vitest.state.getFiles();
const errors = Array.from(vitest.state.errorsSet);

console.log(files);
console.log(errors);
