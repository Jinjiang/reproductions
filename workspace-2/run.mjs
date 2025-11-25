import { build } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

await build({
  configFile: false,
  envFile: false,
  resolve: {
    dedupe: [
      'react',
      'react-dom'
    ],
    alias: [
      { find: /^~(.*)$/, replacement: '$1' },
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['import', 'global-builtin']
      }
    }
  },
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
