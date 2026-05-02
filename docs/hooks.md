# Hooks

## useState
**Dónde lo uso:** En la página principal para gestionar los filtros seleccionados,
el ejercicio seleccionado para el modal y si el modal está abierto o no
**Para qué:** Guardar valores que pueden cambiar y que cuando cambian
actualizan la UI automáticamente

## useEffect
**Dónde lo uso:** En el custom hook useExercises
**Para qué:** Ejecutar la llamada a la API cuando el componente
se monta por primera vez, sin que se repita en cada render

## useMemo
**Dónde lo uso:** En la página principal para filtrar la lista de ejercicios
**Para qué:** Evitar recalcular el filtrado en cada render, solo
se recalcula cuando cambian los ejercicios o los filtros seleccionados

## useCallback
**Dónde lo uso:** En la página principal para las funciones que
se pasan como props a ExerciseCard y RoutinePanel
**Para qué:** Evitar que se creen funciones nuevas en cada render
innecesariamente

## Custom hook: useExercises
**Qué hace:** Encapsula toda la lógica de carga de ejercicios,
devolviendo los datos, un estado de carga y un posible error
**Por qué lo separé en un hook:** Para no repetir la lógica de
fetch en cada componente que necesite ejercicios, y para mantener
las páginas limpias y fáciles de leer
**Devuelve:**
- `exercises` — array con los ejercicios cargados
- `loading` — booleano que indica si está cargando
- `error` — mensaje de error si algo falla