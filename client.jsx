import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.hydrateRoot(
  document.getElementById('app'),
  <React.StrictMode>
    <App />
  </React.StrictMode>
)