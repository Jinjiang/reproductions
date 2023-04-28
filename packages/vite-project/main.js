// // this would work
// import { foo } from './foo'

// // this would work
// import { foo } from '../foo'

// this would fail
import { foo } from '../bar/node_modules/foo'

console.log(foo())
