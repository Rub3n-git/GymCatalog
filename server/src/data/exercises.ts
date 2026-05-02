// server/src/data/exercises.ts
import type { Exercise } from '../types/exercise'

export const exercises: Exercise[] = [
  { id: '1', name: 'Sentadilla', muscle: 'legs', equipment: 'barbell', difficulty: 'intermediate' },
  { id: '2', name: 'Press de banca', muscle: 'chest', equipment: 'barbell', difficulty: 'intermediate' },
  { id: '3', name: 'Dominadas', muscle: 'back', equipment: 'pull-up bar', difficulty: 'intermediate' },
  { id: '4', name: 'Press militar', muscle: 'shoulders', equipment: 'barbell', difficulty: 'intermediate' },
  { id: '5', name: 'Curl de bíceps', muscle: 'arms', equipment: 'dumbbell', difficulty: 'beginner' },
  { id: '6', name: 'Plancha', muscle: 'core', equipment: 'none', difficulty: 'beginner' },
  { id: '7', name: 'Peso muerto', muscle: 'back', equipment: 'barbell', difficulty: 'expert' },
  { id: '8', name: 'Zancadas', muscle: 'legs', equipment: 'dumbbell', difficulty: 'beginner' },
  { id: '9', name: 'Fondos en paralelas', muscle: 'chest', equipment: 'parallel bars', difficulty: 'intermediate' },
  { id: '10', name: 'Elevaciones laterales', muscle: 'shoulders', equipment: 'dumbbell', difficulty: 'beginner' }
]