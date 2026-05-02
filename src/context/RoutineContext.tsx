// src/context/RoutineContext.tsx
import { createContext, useState, useCallback } from 'react'
import type { ReactNode } from 'react'
import type { Exercise } from '../types/Exercise'

// 1️⃣ Definimos qué va a tener el contexto
interface RoutineContextType {
  routine: Exercise[]
  addExercise: (exercise: Exercise) => void
  removeExercise: (id: string) => void
  clearRoutine: () => void
}

// 2️⃣ Creamos el contexto
export const RoutineContext = createContext<RoutineContextType | null>(null)

// 3️⃣ El Provider envuelve la app y comparte el estado
export const RoutineProvider = ({ children }: { children: ReactNode }) => {
  const [routine, setRoutine] = useState<Exercise[]>([])

  const addExercise = useCallback((exercise: Exercise) => {
    // Evita añadir el mismo ejercicio dos veces
    setRoutine(prev => {
      if (prev.find(e => e.id === exercise.id)) return prev
      return [...prev, exercise]
    })
  }, [])

  const removeExercise = useCallback((id: string) => {
    setRoutine(prev => prev.filter(e => e.id !== id))
  }, [])

  const clearRoutine = useCallback(() => {
    setRoutine([])
  }, [])

  return (
    <RoutineContext.Provider value={{ routine, addExercise, removeExercise, clearRoutine }}>
      {children}
    </RoutineContext.Provider>
  )
}

