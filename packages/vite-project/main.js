// CASE 1:

// // this would work
// import { foo } from './foo'

// // this would work
// import { foo } from '../foo'

// // this would fail
import { foo } from '../bar/node_modules/foo'

console.log(foo())

// CASE 2:

// // this would work
// import rewritePattern from 'regexpu-core'

// this would fail
import rewritePattern from '../bar/node_modules/regexpu-core'

console.log(rewritePattern('foo.bar', 'u'))
