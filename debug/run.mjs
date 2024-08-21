import { resolve, dirname } from 'path';

import { createServer } from 'vite'

import { __dirname1, formattedFiles } from './data.mjs';

const alias = [
  { find: dirname(formattedFiles.preview), replacement: 'preview' },
  { find: dirname(formattedFiles.local), replacement: 'local' },
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
