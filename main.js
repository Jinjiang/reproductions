import './output/vendor/vendor.umd.js'

import('./output/vite7/foo7.umd.js').then(
  () => console.log(globalThis.foo7)
)
import('./output/vite8/foo8.umd.js').then(
  () => console.log(globalThis.foo8)
)
