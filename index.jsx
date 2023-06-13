// This works
import style1 from 'x/index'
// This doesn't work
import style2 from 'x/index2'
// This works
import style3 from './x/style.module.css'
// This works
import style4 from 'x/style.module.css'

console.log(style1)
console.log(style2)
console.log(style3)
console.log(style4)

import ReactDOM from 'react-dom/client'
import { BaseTheme } from '@teambit/design.themes.base-theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BaseTheme>
    <h1>Hello World</h1>
  </BaseTheme>
)