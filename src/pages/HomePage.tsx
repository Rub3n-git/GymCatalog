// src/pages/HomePage.tsx
import { useState, useMemo, useCallback } from 'react'
import ExerciseList from '../components/ExerciseList'
import FilterBar from '../components/FilterBar'
import Modal from '../components/Modal'
import RoutinePanel from '../components/RoutinePanel'
import ExerciseForm from '../components/ExerciseForm'
import useExercises from '../hooks/useExercises'
import { useRoutine } from '../hooks/useRoutine'
import Button from '../components/Button'
import type { Exercise } from '../types/Exercise'

const HomePage = () => {
  const { exercises, loading, error } = useExercises()
  const { routine, addExercise, removeExercise, clearRoutine } = useRoutine()

  const [selectedMuscle, setSelectedMuscle] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [customExercises, setCustomExercises] = useState<Exercise[]>([])

  // Combina ejercicios del mock con los personalizados
  const allExercises = useMemo(() => {
    return [...exercises, ...customExercises]
  }, [exercises, customExercises])

  // Filtra todos los ejercicios según los filtros seleccionados
  const filteredExercises = useMemo(() => {
    return allExercises.filter(e => {
      const muscleMatch = selectedMuscle === 'all' || e.muscle === selectedMuscle
      const difficultyMatch = selectedDifficulty === 'all' || e.difficulty === selectedDifficulty
      return muscleMatch && difficultyMatch
    })
  }, [allExercises, selectedMuscle, selectedDifficulty])

  const handleAdd = useCallback((exercise: Exercise) => {
    addExercise(exercise)
  }, [addExercise])

  const handleViewDetail = useCallback((exercise: Exercise) => {
    setSelectedExercise(exercise)
  }, [])

  const handleAddCustom = useCallback((exercise: Exercise) => {
    setCustomExercises(prev => [...prev, exercise])
    setShowForm(false)
  }, [])

  if (loading) return <p className="text-center mt-10 text-gray-400">Cargando ejercicios...</p>
  if (error) return <p className="text-center mt-10 text-red-400">{error}</p>

  return (
    <div className="flex gap-6 p-6">
      {/* Columna principal */}
      <div className="flex flex-col gap-4 flex-1">

        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">GymCatalog</h1>
          <Button
            label="+ Añadir ejercicio"
            onClick={() => setShowForm(prev => !prev)}
          />
        </div>

        {showForm && (
          <ExerciseForm
            onSubmit={handleAddCustom}
            onCancel={() => setShowForm(false)}
          />
        )}

        <FilterBar
          selectedMuscle={selectedMuscle}
          selectedDifficulty={selectedDifficulty}
          onMuscleChange={setSelectedMuscle}
          onDifficultyChange={setSelectedDifficulty}
        />
        <ExerciseList
          exercises={filteredExercises}
          onAdd={handleAdd}
          onViewDetail={handleViewDetail}
        />
      </div>

      {/* Panel de rutina */}
      <div className="w-72">
        <RoutinePanel
          routine={routine}
          onRemove={removeExercise}
          onClear={clearRoutine}
        />
      </div>

      {/* Modal */}
      {selectedExercise && (
        <Modal
          exercise={selectedExercise}
          onClose={() => setSelectedExercise(null)}
          onAdd={handleAdd}
        />
      )}
    </div>
  )
}

export default HomePage