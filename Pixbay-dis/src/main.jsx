import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PixbayState from './project/PixbayState.jsx'

createRoot(document.getElementById('root')).render(
  <PixbayState>
    <App />
  </PixbayState>
)
