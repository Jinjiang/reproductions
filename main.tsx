import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyComponent } from './my-component'

const app = document.getElementById('app')

if (app) {
    ReactDOM.createRoot(app).render(
        <MyComponent />
    )
}
