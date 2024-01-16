import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'
import findRoot from 'find-root'

const require = createRequire(import.meta.url)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const resolved = require.resolve('@bitdev/react.examples.button')
const root = findRoot(resolved)

// Copy files from ./setup/files to root of the button component

function copyFiles() {
  const files = fs.readdirSync(path.resolve(__dirname, 'files'))
  files.forEach(file => {
    fs.copyFileSync(
      path.resolve(__dirname, 'files', file),
      path.resolve(root, file)
    )
  })
}

copyFiles()
