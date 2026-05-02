// src/components/FilterBar.tsx


interface FilterBarProps {
  selectedMuscle: string
  selectedDifficulty: string
  onMuscleChange: (muscle: string) => void
  onDifficultyChange: (difficulty: string) => void
}


const MUSCLES = ['all', 'chest', 'back', 'shoulders', 'legs', 'arms', 'core']
const DIFFICULTIES = ['all', 'beginner', 'intermediate', 'expert']

const FilterBar = ({
  selectedMuscle,
  selectedDifficulty,
  onMuscleChange,
  onDifficultyChange
}: FilterBarProps) => {
  return (
    <div className="flex flex-wrap gap-4 p-4 bg-white rounded-xl shadow">

      
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-600">Músculo</label>
        <select
          value={selectedMuscle}
          
          onChange={(e) => onMuscleChange(e.target.value)}
          className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          
          {MUSCLES.map((muscle) => (
            <option key={muscle} value={muscle}>
              {muscle === 'all' ? 'Todos' : muscle}
            </option>
          ))}
        </select>
      </div>

      
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-600">Dificultad</label>
        <select
          value={selectedDifficulty}
          onChange={(e) => onDifficultyChange(e.target.value)}
          className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {DIFFICULTIES.map((difficulty) => (
            <option key={difficulty} value={difficulty}>
              {difficulty === 'all' ? 'Todas' : difficulty}
            </option>
          ))}
        </select>
      </div>

    </div>
  )
}

export default FilterBar


            
  