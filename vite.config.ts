import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    dedupe: ['foo'],
  },
  ssr: {
    noExternal: ['bar'],
  },
  plugins: [react()],
})
