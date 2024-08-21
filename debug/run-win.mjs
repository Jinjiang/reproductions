import { resolve, dirname } from 'path';

import { createServer } from 'vite'

import { __dirname1, formattedFilesForWindows } from './data.mjs';

const alias = [
  { find: dirname(formattedFilesForWindows.preview), replacement: 'preview' },
  { find: dirname(formattedFilesForWindows.local), replacement: 'local' },
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
