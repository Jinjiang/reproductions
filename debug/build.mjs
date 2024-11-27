import fs from 'fs-extra';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { build } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

const root = resolve(__dirname, '../');
const define = {
  'process.env.NODE_ENV': JSON.stringify('production'),
};

/**
 * @type {import('vite').UserConfig}
 */
const peersConfig = {
  root,
  define,
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, '../peers.ts'),
      name: 'peers',
      fileName: 'peers',
      formats: ['es'],
    },
  }
}

/**
 * @type {import('vite').UserConfig}
 */
const mainConfig = {
  root,
  define,
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, '../main.ts'),
      name: 'main',
      fileName: 'main',
      formats: [ 'umd' ],
    },
    rollupOptions: {
      external: [
        '@emotion/styled'
      ],
      output: {
        globals: {
          '@emotion/styled': 'EmotionStyled',
        },
      }
    },
  }
}

await build(peersConfig);
fs.removeSync(resolve(root, 'output/peers.js'));
fs.moveSync(resolve(root, 'dist/peers.js'), resolve(root, 'output/peers.js'));

await build(mainConfig);
fs.removeSync(resolve(root, 'output/main.umd.cjs'));
fs.moveSync(resolve(root, 'dist/main.umd.cjs'), resolve(root, 'output/main.umd.cjs'));
