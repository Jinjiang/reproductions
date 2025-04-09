import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    noDiscovery: true,
    include: [
      `react-dom/client`,
      'foo/foo-cjs.cjs',
      // 'foo/foo-esm.mjs',
      'foo/foo-cjs-module.cjs',
    ],
  },
  plugins: [react()],
})
