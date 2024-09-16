import { useState } from 'react'
import './App.css'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { MyComponent } from "foo";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponent />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
