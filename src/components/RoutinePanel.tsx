// src/components/RoutinePanel.tsx

import type { Exercise } from "../types/Exercise";
import Button from "./Button";

interface RoutinePanelProps {
    routine: Exercise []
    onRemove: (id:string) => void
    onClear: ()=> void
}

const RoutinePanel = ({routine, onRemove, onClear}: RoutinePanelProps)=> {
    return(
        <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">Rutina de hoy</h2>
                {routine.length >0 &&(
                    <Button label="Limpìar todo" onClick={onClear} variant="danger" />
                )}
            </div>


            {routine.length === 0? (
                <p className="text-sm text-gray-400 text-center py-4">
                    No has añadido ejercicios todavia
                </p>
            ):(
                <ul className="flex flex-col gap-2">
                    {routine.map((exercise)=>(
                        <li
                        key={exercise.id}
                        className="flex justify-between items-center bg-gray-50 rounded-lg px-3 py-2"
                        >
                            <span className="text-sm capitalize">{exercise.name}</span>
                            <button
                            onClick={()=>onRemove(exercise.id)}
                            className="text-red-400 hover:text-red-600 text-lg leading-none"
                            >
                                x
                            </button>
                            
                        </li>
                    ))}
                </ul>
            
            )}

            <p className="text-xs text-gray-400 text-right">
                {routine.length}ejercicio{routine.length !==1 ? 's': ''}
            </p>
        </div>
    )

}

export default RoutinePanel