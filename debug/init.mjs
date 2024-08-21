import { writeFileSync } from 'fs';
import { dirname, resolve, sep, win32 } from 'path';
import { fileURLToPath } from 'url';

// C:\Users\zhaoj\code\reproductions\index.html
// C:\Users\zhaoj\code\reproductions\main.mjs
// C:\Users\zhaoj\code\reproductions\node_modules\local\l.mjs

// C:\Users\zhaoj\code\reproductions\node_modules\preview\p.cjs
// C:\Users\zhaoj\code\reproductions\node_modules\.pnpm\foo@0.0.1\f.cjs

const __dirname1 = dirname(fileURLToPath(import.meta.url))
const __dirname2 = dirname(new URL(import.meta.url).pathname)

console.log({ __dirname1, __dirname2 })

const files = {
  index: resolve(__dirname1, '..', 'index.html'),
  main: resolve(__dirname1, '..', 'main.mjs'),
  local: resolve(__dirname1, '..', 'node_modules', 'local', 'l.mjs'),
  preview: resolve(__dirname1, '..', 'node_modules', 'preview', 'p.cjs'),
  foo: resolve(__dirname1, '..', 'node_modules', '.pnpm', 'foo@0.0.1', 'f.cjs'),
}

console.log(files)

function escaptPath(path) {
  if (sep === win32.sep) {
    return path.replace(/\\/g, '\\\\')
  }
  return path
}

writeFileSync(files.index, `<script type="module" src="${files.main}"></script>`)
writeFileSync(files.main, `import p from '${escaptPath(files.preview)}'\nimport l from '${escaptPath(files.local)}'\n\nconsole.log(p)\nconsole.log(l)`)
writeFileSync(files.local, `import foo from '${escaptPath(files.foo)}'\n\nconsole.log(foo)\n\nexport default 'local'`)
// writeFileSync(files.preview, `module.exports = 'preview'`)
// writeFileSync(files.foo, `module.exports = 'foo'`)
