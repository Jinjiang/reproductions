import { resolve, dirname } from 'path';

import { createServer } from 'vite'

import { __dirname1, files } from './data.mjs';

const alias = [
  { find: dirname(files.preview), replacement: 'preview' },
  { find: dirname(files.local), replacement: 'local' },
]

// console.log(alias)

const server = await createServer({
  root: resolve(__dirname1, '..'),
  resolve: {
    alias
  }
})

await server.listen()
server.printUrls()
