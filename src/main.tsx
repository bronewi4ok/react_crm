import { createRoot } from 'react-dom/client'
import { App } from './app/App'
import { initMonitoring } from './app/init'

initMonitoring()
createRoot(document.getElementById('root')!).render(<App />)
