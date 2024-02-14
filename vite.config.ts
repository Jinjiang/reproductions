import { resolve } from 'path'
import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      name: 'foo',
      fileName: (format) => `foo.${format}.js`
    },
  },
  plugins: [nodePolyfills()],
})
