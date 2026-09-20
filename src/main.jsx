import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom' // 👈 1. Ganti ke HashRouter

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 👈 2. Gunakan HashRouter tanpa basename */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);