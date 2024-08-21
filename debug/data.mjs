import { dirname, resolve, sep, win32 } from 'path';
import { fileURLToPath } from 'url';

export const __dirname1 = dirname(fileURLToPath(import.meta.url))
export const __dirname2 = dirname(new URL(import.meta.url).pathname)

console.log({ __dirname1, __dirname2 })

// C:\Users\zhaoj\code\reproductions\index.html
// C:\Users\zhaoj\code\reproductions\main.mjs
// C:\Users\zhaoj\code\reproductions\node_modules\local\l.mjs

// C:\Users\zhaoj\code\reproductions\node_modules\preview\p.cjs
// C:\Users\zhaoj\code\reproductions\node_modules\.pnpm\foo@0.0.1\f.cjs

export const files = {
  index: resolve(__dirname1, '..', 'index.html'),
  main: resolve(__dirname1, '..', 'main.mjs'),
  local: resolve(__dirname1, '..', 'node_modules', 'local', 'l.mjs'),
  preview: resolve(__dirname1, '..', 'node_modules', 'preview', 'p.cjs'),
  foo: resolve(__dirname1, '..', 'node_modules', '.pnpm', 'foo@0.0.1', 'f.cjs'),
}
export const formattedFiles = {
  ...files,
  main: '/' + files.main.replace(/\\/g, '/'),
  local: '/' + files.local.replace(/\\/g, '/'),
  preview: '/' + files.preview.replace(/\\/g, '/'),
  foo: '/' + files.foo.replace(/\\/g, '/'),
}

console.log(files)

console.log(formattedFiles)
