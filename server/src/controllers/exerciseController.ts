// server/src/controllers/exerciseController.ts
import type { Request, Response } from 'express'
import * as exerciseService from '../services/exerciseService'

export const getAll = (req: Request, res: Response): void => {
  const muscle = req.query.muscle as string | undefined
  if (muscle) {
    const filtered = exerciseService.getExercisesByMuscle(muscle)
    res.json(filtered)
    return
  }
  res.json(exerciseService.getAllExercises())
}
export const getById = (req: Request, res: Response): void => {
  const id = req.params.id as string
  const exercise = exerciseService.getExerciseById(id)
  if (!exercise) {
    res.status(404).json({ error: 'Ejercicio no encontrado' })
    return
  }
  res.json(exercise)
}