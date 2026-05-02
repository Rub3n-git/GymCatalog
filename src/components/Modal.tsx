// src/components/Modal.tsx

import type { Exercise } from "../types/Exercise";  
import Button from "./Button";

interface ModalProps {
    exercise: Exercise
    onClose: () => void
    onAdd: (exercise: Exercise)=> void
}

const Modal = ({exercise, onClose, onAdd}: ModalProps)=> {
    return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
        >
        
        <div
            className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 flex flex-col gap-4"
            onClick={(e)=>e.stopPropagation()}
                >
            
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold capitalize">{exercise.name}</h2>
                <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                >
                    x
                    </button>
            </div>

            {exercise.gifUrl &&(
                <img
                src={exercise.gifUrl}
                alt={exercise.name}
                className="w-full h-48 object-cover rounded-xl"
                />
            )}
            <div className="flex flex-col gap-1 text-sm text-gray-600">
          <p><span className="font-medium">💪 Músculo:</span> {exercise.muscle}</p>
          <p><span className="font-medium">🏋️ Equipamiento:</span> {exercise.equipment}</p>
          <p><span className="font-medium">⚡ Dificultad:</span> {exercise.difficulty}</p>
            </div>

            <div className="flex gap-2 mt-2">
                <Button label="Cerrar" onClick={onClose} variant="secondary" />
                <Button
                    label="Añadir a rutina"
                    onClick={()=> {
                        onAdd(exercise)
                        onClose()
                    }}
                    />
            </div>
        </div>
        
    </div>



    )
}

export default Modal
