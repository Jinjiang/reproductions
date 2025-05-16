import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    entries: [
      'entry.mjs',
      'node_modules/entry.mjs',
    ],
  },
});
