// src/components/ExerciseCard.tsx

import type {Exercise} from '../types/Exercise';
import Button from './Button';

interface ExerciseCardProps {
    exercise: Exercise;
    onAdd: (exercise: Exercise) => void;
    onViewDetail : (exercise: Exercise) => void;
}

const ExerciseCard = ({ exercise, onAdd, onViewDetail }: ExerciseCardProps) => {
    return (
        <div className= "rounded-xl p-4 bg-white shadow hover:shadow-md transition flex flex-col gap-2">
            {exercise.gifUrl && (
                <img
                src= {exercise.gifUrl}
                alt= {exercise.name}
                className="w-full h-40 object-cover rounded-lg"
                />
                
            )}
        
        <h2 className="text-lg font-bold capitalize">{exercise.name}</h2>
        <p className="text-sm text-gray-500">💪{exercise.muscle}</p>
        <p className="text-sm text-gray-500">🏋️ {exercise.equipment}</p>
        <span className="text-xs text-gray-400">⚡ {exercise.difficulty}</span>


        <div className="flex gap-2 mt-2">
            <Button
            label = "Ver detalle"
            onClick={()=> onViewDetail(exercise)}
            variant="secondary"
            />
            <Button
            label="Añadir a rutina"
            onClick={()=>onAdd(exercise)}
            />
        </div>
    </div>
    )
}

export default ExerciseCard

