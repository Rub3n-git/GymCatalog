# Arquitectura de la aplicación

## Componentes principales
- `ExerciseList` — muestra el catálogo completo de ejercicios
- `ExerciseCard` — tarjeta individual de cada ejercicio
- `FilterBar` — filtros por músculo y dificultad
- `Modal` — detalle completo de un ejercicio
- `RoutinePanel` — panel con la rutina del día

## Componentes reutilizables
- `Button` — usado en toda la app con variantes primary, secondary y danger

## Gestión del estado
- `useState` para estado local de cada componente (filtros, modal abierto...)
- `useEffect` para las llamadas a la API
- `useMemo` para el filtrado de ejercicios sin recalcular en cada render
- `useCallback` para funciones que se pasan como props
- `Context API` para el estado global de la rutina diaria

## API y endpoints
- `GET /api/v1/exercises` — obtiene todos los ejercicios
- `GET /api/v1/exercises/:id` — obtiene un ejercicio por id
- `GET /api/v1/exercises?muscle=legs` — filtra por músculo

## Persistencia de datos
- **Servidor** — lista de ejercicios del catálogo
- **LocalStorage** — rutina del día e historial de rutinas anteriores

## Flujo de datos
Usuario → FilterBar → HomePage filtra con useMemo → ExerciseList → ExerciseCard
Usuario → ExerciseCard → RoutineContext → RoutinePanel