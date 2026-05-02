// src/pages/NotFoundPage.tsx
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-6xl font-bold text-gray-300">404</h1>
      <p className="text-gray-400">Página no encontrada</p>
      <Button label="Volver al inicio" onClick={() => navigate('/')} />
    </div>
  )
}

export default NotFoundPage