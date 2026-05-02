// src/hooks/useExercises.ts
import { useState, useEffect } from 'react'
import { fetchExercises } from '../api/client'
import type { Exercise } from '../types/Exercise'

interface UseExercisesReturn {
  exercises: Exercise[]
  loading: boolean
  error: string | null
}

const useExercises = (): UseExercisesReturn => {
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadExercises = async () => {
      try {
        const data = await fetchExercises()
        setExercises(data)
      } catch (_) {
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