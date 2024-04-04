import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const packageList = ["foo"];

export default defineConfig({
  server: {
    watch: {
      ignored: [...packageList.map(p => `!**/node_modules/${p}/**`),]
    }
  },
  optimizeDeps: {
    exclude: packageList,
  },
  plugins: [react({
    include: [/node_modules\/foo/],
  })],
});
