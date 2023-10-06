import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url';

import { createServer } from 'vite'
import vue from '@vitejs/plugin-vue'

const __dirname = dirname(fileURLToPath(import.meta.url));

const server = await createServer({
  configFile: false,
  envFile: false,
  root: resolve(__dirname, '../'),
  plugins: [
    vue(),
  ],
})

server.listen(3000)
console.log('http://localhost:3000')
