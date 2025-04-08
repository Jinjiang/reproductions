import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { startVitest } from 'vitest/node';

const __dirname = dirname(fileURLToPath(import.meta.url));

const root = `${__dirname}/../`;

const viteConfig = {
  root,
  configFile: false,
  envFile: false,
  server: {
    fs: { strict: false },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    root,
    watch: false,
    browser: {
      provider: 'playwright',
      enabled: true,
      headless: true,
      instances: [{ browser: 'chromium' }]
    },
  }
}

await startVitest('test', undefined, undefined, viteConfig);
