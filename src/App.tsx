import { foo } from 'foo/foo-cjs.cjs'
import { bar } from 'bar/bar-esm.mjs'

console.log({ foo, bar })

export default function App() {
  return (<h1 className='bar'>{foo === bar ? 'Yes' : 'No' }</h1>)
}
