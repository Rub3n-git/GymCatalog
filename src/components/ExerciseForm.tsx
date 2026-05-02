// src/components/ExerciseForm.tsx
import { useState } from 'react'
import type { Exercise } from '../types/Exercise'
import Button from './Button'

interface ExerciseFormProps {
  onSubmit: (exercise: Exercise) => void
  onCancel: () => void
}

// Valores iniciales del formulario
const INITIAL_STATE = {
  name: '',
  muscle: 'legs',
  equipment: '',
  difficulty: 'beginner',
}

const MUSCLES = ['legs', 'chest', 'back', 'shoulders', 'arms', 'core']
const DIFFICULTIES = ['beginner', 'intermediate', 'expert']

const ExerciseForm = ({ onSubmit, onCancel }: ExerciseFormProps) => {
  // 1️⃣ Estado del formulario - un objeto con todos los campos
  const [form, setForm] = useState(INITIAL_STATE)
  // 2️⃣ Estado de errores de validación
  const [errors, setErrors] = useState<Record<string, string>>({})

  // 3️⃣ Actualiza el campo correspondiente cuando el usuario escribe
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    // Limpia el error del campo cuando el usuario empieza a escribir
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  // 4️⃣ Validación antes de enviar
  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}
    if (!form.name.trim()) newErrors.name = 'El nombre es obligatorio'
    if (!form.equipment.trim()) newErrors.equipment = 'El equipamiento es obligatorio'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // 5️⃣ Al enviar el formulario
  const handleSubmit = () => {
    if (!validate()) return
    onSubmit({
      id: Date.now().toString(), // ID único basado en timestamp
      ...form,
    })
    setForm(INITIAL_STATE) // Limpia el formulario
  }

  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-xl shadow">
      <h2 className="text-lg font-bold">Añadir ejercicio</h2>

      {/* Campo nombre */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-600">Nombre</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Ej: Sentadilla búlgara"
          className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {/* 6️⃣ Mensaje de error si el campo no es válido */}
        {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
      </div>

      {/* Select músculo */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-600">Músculo</label>
        <select
          name="muscle"
          value={form.muscle}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {MUSCLES.map(muscle => (
            <option key={muscle} value={muscle}>{muscle}</option>
          ))}
        </select>
      </div>

      {/* Campo equipamiento */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-600">Equipamiento</label>
        <input
          name="equipment"
          value={form.equipment}
          onChange={handleChange}
          placeholder="Ej: Mancuernas"
          className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.equipment && <p className="text-xs text-red-500">{errors.equipment}</p>}
      </div>

      {/* Select dificultad */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-600">Dificultad</label>
        <select
          name="difficulty"
          value={form.difficulty}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {DIFFICULTIES.map(difficulty => (
            <option key={difficulty} value={difficulty}>{difficulty}</option>
          ))}
        </select>
      </div>

      {/* Botones */}
      <div className="flex gap-2 mt-2">
        <Button label="Cancelar" onClick={onCancel} variant="secondary" />
        <Button label="Añadir ejercicio" onClick={handleSubmit} />
      </div>
    </div>
  )
}

export default ExerciseForm