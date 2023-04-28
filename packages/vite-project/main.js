// // this would work
// import eIndexOf from 'es5-ext/array/#/e-index-of.js'

// this would fail, which ate # and resulted in: /.../es5-ext/array/?import&v=e83a80a5
import eIndexOf from '../foo/node_modules/es5-ext/array/#/e-index-of.js'

console.log(eIndexOf)
