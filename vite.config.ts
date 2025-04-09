import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  ssr: {
    optimizeDeps: {
      include: [
        'baz/baz-cjs.cjs'
      ],
    },
    noExternal: [
      'baz'
    ]
  },
  plugins: [react()],
})
