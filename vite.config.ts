import { resolve } from 'path';
import { defineConfig } from "vite";

const __dirname = new URL('.', import.meta.url).pathname;

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /foo/,
        replacement: 'fooo',
        customResolver: (id) => {
          console.log('customResolver', id);
          if (id === 'fooo') {
            return resolve(__dirname, 'foo.ts');
          }
        }
      },
    ]
  },
  optimizeDeps: {
    exclude: [
      'foo',
      // 'bar',
    ]
  }
});
