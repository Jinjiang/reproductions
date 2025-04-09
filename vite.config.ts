import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: [
      'foo > foo-dep-a/foo-dep-a-cjs.cjs',
    ],
    exclude: [
      'foo/foo-esm.mjs',
    ],
  },
  plugins: [react()],
})
