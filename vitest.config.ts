import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [react(), vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
});
