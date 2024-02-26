import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  ssr: {
    optimizeDeps: {
      include: [
        'lodash',
      ]
    },
    noExternal: [
      /@zhaojinjiang/,
      'lodash',
    ]
  }
})