import { dirname, relative, resolve, sep, win32 } from 'path';
import { fileURLToPath } from 'url';

export const __dirname1 = dirname(fileURLToPath(import.meta.url))
export const __dirname2 = dirname(new URL(import.meta.url).pathname)

// console.log({ __dirname1, __dirname2 })

function format(path) {
  if (sep === win32.sep) {
    return '/' + files.main.replace(/\\/g, '/')
  }
  return path
}

// /xxx/reproductions/index.html
// /xxx/reproductions/main.mjs
// /xxx/reproductions/node_modules/local/l.mjs
// /xxx/reproductions/node_modules/preview/p.cjs
// /xxx/reproductions/node_modules/.pnpm/foo@0.0.1/f.cjs
export const files = {
  index: resolve(__dirname1, '..', 'index.html'),
  main: resolve(__dirname1, '..', 'main.mjs'),
  local: resolve(__dirname1, '..', 'node_modules', 'local', 'l.mjs'),
  preview: resolve(__dirname1, '..', 'node_modules', 'preview', 'p.cjs'),
  foo: resolve(__dirname1, '..', 'node_modules', '.pnpm', 'foo@0.0.1', 'f.cjs'),
}

// 1. replace \ with / for windows
// 2. add / in front of the path
export const formattedFiles = {
  ...files,
  main: format(files.main),
  local: format(files.local),
  preview: format(files.preview),
  foo: relative(dirname(files.local), files.foo).replace(/\\/g, '/'),
}

// console.log(files)

// console.log(formattedFiles)
