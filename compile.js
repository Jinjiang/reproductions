import { readFileSync, writeFileSync } from 'fs'
import { compile } from 'vue-simple-compiler'

const source = readFileSync('./sample.vue', 'utf-8')

const output = compile(source, {
  autoImportCss: true,
  autoResolveImports: true,
  filename: 'sample.vue',
})

writeFileSync(output.js.filename, output.js.code)
