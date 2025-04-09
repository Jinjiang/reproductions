import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 2 new imports
import { foo as fooCjs } from 'foo/foo-cjs.cjs'
import { foo as fooEsm } from 'foo/foo-esm.mjs'
import fooCjsModule from 'foo/foo-cjs-module.cjs'
import fooCjsAll from 'foo/foo-cjs.cjs'

import './index.css'
import App from './App.tsx'

console.log({ fooCjs, fooEsm, fooCjsModule, fooCjsAll });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
