import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  ssr: {
    optimizeDeps: {
      include: [
        '@zhaojinjiang/temp.vite-ssr-20240226.bar',
      ]
    },
    noExternal: [
      /@zhaojinjiang/,
      'lodash',
    ]
  }
})