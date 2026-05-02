// src/api/client.ts
import type { Exercise } from '../types/Exercise'

const BASE_URL = 'http://localhost:3000/api/v1'

// Función genérica para manejar las peticiones
const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`)
  }
  return response.json()
}

// Obtiene todos los ejercicios
export const fetchExercises = async (): Promise<Exercise[]> => {
  const response = await fetch(`${BASE_URL}/exercises`)
  return handleResponse<Exercise[]>(response)
}

// Obtiene un ejercicio por id
export const fetchExerciseById = async (id: string): Promise<Exercise> => {
  const response = await fetch(`${BASE_URL}/exercises/${id}`)
  return handleResponse<Exercise>(response)
}

// Obtiene ejercicios filtrados por músculo
export const fetchExercisesByMuscle = async (muscle: string): Promise<Exercise[]> => {
  const response = await fetch(`${BASE_URL}/exercises?muscle=${muscle}`)
  return handleResponse<Exercise[]>(response)
}