import { resolve } from 'path';
import { startVitest } from 'vitest/node';
import vue from '@vitejs/plugin-vue';

const __dirname = new URL('.', import.meta.url).pathname;

const viteConfig = {
  configFile: false,
  envFile: false,
  plugins: [vue()],
  test: {
    root: resolve(__dirname, '../'),
    watch: false,
    browser: {
      enabled: true,
      provider: 'playwright',
      name: 'chromium',
      headless: true,
    }
  }
};

console.log('[viteConfig]', viteConfig);

startVitest('test', undefined, undefined, viteConfig);
