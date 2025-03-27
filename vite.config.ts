/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    server: {
      debug: {
        dumpModules: true,
      },
    },
    browser: {
      provider: 'playwright',
      enabled: true,
      headless: true,
      instances: [
        { browser: 'chromium' },
      ],
    },
  },
});
