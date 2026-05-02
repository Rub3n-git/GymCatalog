// server/src/services/exerciseService.ts
import { exercises } from '../data/exercises'
import type { Exercise } from '../types/exercise'

export const getAllExercises = (): Exercise[] => {
  return exercises
}

export const getExerciseById = (id: string): Exercise | undefined => {
  return exercises.find(e => e.id === id)
}

export const getExercisesByMuscle = (muscle: string): Exercise[] => {
  return exercises.filter(e => e.muscle === muscle)
}