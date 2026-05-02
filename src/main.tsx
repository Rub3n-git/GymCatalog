import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RoutineProvider } from './context/RoutineContext'  // ← añadir
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutineProvider>  {/* ← añadir */}
      <App />
    </RoutineProvider>  {/* ← añadir */}
  </StrictMode>,
)