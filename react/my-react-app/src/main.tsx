import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import HelloWorld from './HelloWorld.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <HelloWorld />
  </StrictMode>,
)
