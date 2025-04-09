import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: 'foo',
        replacement: `${__dirname}/node_modules/foo`,
      },
    ],
  },
  ssr: {
    noExternal: ['bar'],
  },
  plugins: [react()],
})
