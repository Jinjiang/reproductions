import compiler from '@stencil/core/compiler'

const input = `
@import './debug/style.css';
@import '~foo/style.css';
`

console.log("--------input--------")
console.log(input)

const result = compiler.transpileSync(
  input,
  {
    currentDirectory: process.cwd(),
    file: 'my-component.css',
  }
)

console.log("--------output--------")
console.log(result.code)