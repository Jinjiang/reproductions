import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: "jsdom",
    watch: false,
    coverage: {
      provider: 'istanbul',
      enabled: true,
      reporter: [ 'text', 'json-summary' ],
    },
  },
});
