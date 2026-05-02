// src/hooks/useRoutine.ts
import { useContext } from 'react'
import { RoutineContext } from '../context/RoutineContext'

export const useRoutine = () => {
  const context = useContext(RoutineContext)
  if (!context) throw new Error('useRoutine debe usarse dentro de RoutineProvider')
  return context
}