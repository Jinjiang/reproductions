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
  plugins: [vue()],
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
