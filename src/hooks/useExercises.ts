// src/hooks/useExercises.ts
import { useState, useEffect } from 'react'
import type { Exercise } from '../types/Exercise'

interface UseExercisesReturn {
  exercises: Exercise[]
  loading: boolean
  error: string | null
}

// Datos de ejemplo para poder trabajar sin API todavía
const MOCK_EXERCISES: Exercise[] = [
  {
    id: '1',
    name: 'Sentadilla',
    muscle: 'legs',
    equipment: 'barbell',
    difficulty: 'intermediate',
    gifUrl: ''
  },
  {
    id: '2',
    name: 'Press de banca',
    muscle: 'chest',
    equipment: 'barbell',
    difficulty: 'intermediate',
    gifUrl: ''
  },
  {
    id: '3',
    name: 'Dominadas',
    muscle: 'back',
    equipment: 'pull-up bar',
    difficulty: 'intermediate',
    gifUrl: ''
  },
  {
    id: '4',
    name: 'Press militar',
    muscle: 'shoulders',
    equipment: 'barbell',
    difficulty: 'intermediate',
    gifUrl: ''
  },
  {
    id: '5',
    name: 'Curl de bíceps',
    muscle: 'arms',
    equipment: 'dumbbell',
    difficulty: 'beginner',
    gifUrl: ''
  },
  {
    id: '6',
    name: 'Plancha',
    muscle: 'core',
    equipment: 'none',
    difficulty: 'beginner',
    gifUrl: ''
  }
]

const useExercises = (): UseExercisesReturn => {
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulamos una llamada a la API con un pequeño delay
    // Cuando tengas la API real, reemplaza esto por un fetch
    const loadExercises = async () => {
      try {
        // Simula el tiempo de respuesta de una API real
        await new Promise(resolve => setTimeout(resolve, 800))
        setExercises(MOCK_EXERCISES)
      } catch (err)
       {
        setError('Error al cargar los ejercicios')
      } finally {
        setLoading(false)
      }
    }

    loadExercises()
  }, [])

  return { exercises, loading, error }
}

export default useExercises