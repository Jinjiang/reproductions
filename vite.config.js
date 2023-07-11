import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    entries: ['./node_modules/.cache/foo.js']
  }
})
