import fs from 'node:fs'
import * as ts from 'typescript'
import { run } from 'vue-tsc'

const nativeWriteFile = ts.sys.writeFile
ts.sys.writeFile = (...args) => {
  console.log('ts.sys.writeFile called')
  return nativeWriteFile(...args)
}

const nativeFsWriteFile = fs.writeFile
fs.writeFile = function (...args) {
  console.log('Custom fs.writeFile called')
  return nativeFsWriteFile(...args)
}

const nativeFsWriteFileSync = fs.writeFileSync
fs.writeFileSync = function (...args) {
  console.log('Custom fs.writeFileSync called')
  return nativeFsWriteFileSync(...args)
}

console.log('Starting vue-tsc...')

run()
