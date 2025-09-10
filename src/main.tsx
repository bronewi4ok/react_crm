import '@/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'virtual:svg-icons-register'
import { App } from './app/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
