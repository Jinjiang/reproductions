import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  ssr: {
    // ensure all the imports of 'bar' being transformed
    // before running in the server environment
    noExternal: ['bar'],
  },
  plugins: [react()],
})
