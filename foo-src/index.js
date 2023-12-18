import { foo as fooDepCjs } from 'foo-cjs-dep'
// issue 4: logic goes to cjs version
import { foo as fooDepEsm } from 'foo-esm-dep'

import foo from './foo'
import './foo.css'
import png from './foo.png'

console.log('foo-cjs', {
  foo,
  png,
  fooDepCjs,
  fooDepEsm,
})
