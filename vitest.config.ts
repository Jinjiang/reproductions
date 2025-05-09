import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    server: {
      deps: {
        inline: true,
      },
    },
    coverage: {
      provider: 'v8',
      enabled: true,
    },
  }
});
