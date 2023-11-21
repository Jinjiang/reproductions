import { resolve } from 'path';
import { startVitest } from 'vitest/node';

const viteConfig = {
  configFile: false,
  envFile: false,
  test: {
    globals: true,
    // NOTE: disable this would be back to normal
    environment: 'jsdom',
    root: resolve('../bar'),
    watch: false,
    include: [
      '*.spec.js'
    ]
  }
}

console.log(viteConfig)

const vitest = await startVitest('test', undefined, undefined, viteConfig);
await vitest.close();

const files = vitest.state.getFiles();

console.log(files)
