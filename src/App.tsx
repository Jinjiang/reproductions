import { foo } from 'foo/foo-cjs.cjs'
import { qux } from 'qux/qux-cjs.cjs'

console.log({ foo, qux })

export default function App() {
  return (<h1>{foo === qux ? 'Yes' : 'No' }</h1>)
}