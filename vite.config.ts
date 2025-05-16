import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    entries: [
      'entry.mjs',
      'node_modules/entry.mjs',
      `${process.cwd()}/node_modules/entry2.mjs`,
    ],
  },
});
