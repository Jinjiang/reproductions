import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'foo.js'),
      name: 'teambit.vite/my-component',
      formats: ['umd'],
      // the proper extensions will be added
      fileName: () => 'foo_vite.js',
    },
    emptyOutDir: false,
  },
})
