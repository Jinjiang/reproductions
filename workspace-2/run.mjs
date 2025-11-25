import { build } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

await build({
  configFile: false,
  envFile: false,
  plugins: [
    nodePolyfills(),
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: {
        overview: './main.ts'
      },
      formats: [ 'es' ],
    },
  }
});

console.log('build done');
