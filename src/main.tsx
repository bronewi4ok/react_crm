import '@/style.css'
import { createRoot } from 'react-dom/client'
import 'virtual:svg-icons-register'
import { App } from './app/App'

createRoot(document.getElementById('root')!).render(<App />)
