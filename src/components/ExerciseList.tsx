import type { Exercise } from "../types/Exercise";
import ExerciseCard from "./ExerciseCard";

interface ExerciseListProps {
    exercises: Exercise []
    onAdd: (exercise: Exercise) => void
    onViewDetail: (exercise: Exercise)=> void
}

const ExerciseList = ({exercises, onAdd, onViewDetail}:ExerciseListProps) => {

    if (exercises.length === 0){
        return( 
            <p className="text-center text-gray-400 mt-10">
            No se encontraron ejercicios
            </p>
        )
    }


    return( 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {exercises.map ((exercise) => (
                <ExerciseCard
                key= {exercise.id}
                exercise = {exercise}
                onAdd={onAdd}
                onViewDetail={onViewDetail}
                />
            ))}
        </div>
    )
    
}

export default ExerciseList