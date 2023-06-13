import { defineConfig } from 'vite'
import { vitePlugin, esbuildPlugin } from 'vite-plugin-cjs2esm'

export default defineConfig({
  plugins: [vitePlugin({
    filter: /!react/
  })],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildPlugin({
        filter: /!react/
      })]
    }
  }
})
