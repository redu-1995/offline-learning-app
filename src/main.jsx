import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { registerSW } from 'virtual:pwa-register'

// 1. Register the Service Worker
registerSW({ immediate: true })

// 2. Render the App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)