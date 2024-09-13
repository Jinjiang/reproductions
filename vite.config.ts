import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'module'

const require = createRequire(import.meta.url);

const packages = ['foo']

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      ignored: packages.map((p) => `!**/node_modules/${p}/**`)
    }
  },
  optimizeDeps: {
    entries: packages.map((p) => require.resolve(p)),
    exclude: packages
  },
  plugins: [react()],
})
