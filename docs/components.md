# Componentes

## Exercise (tipo base)
**Descripción:** Define la estructura de datos de un ejercicio en toda la app.
**Propiedades:**
- `id: string` — identificador único del ejercicio
- `name: string` — nombre del ejercicio
- `muscle: string` — músculo principal que trabaja
- `equipment: string` — equipamiento necesario
- `difficulty: string` — nivel de dificultad
- `gifUrl?: string` — imagen animada del ejercicio (opcional)

---

## Button
**Descripción:** Botón genérico reutilizable usado en toda la aplicación.
**Props:**
- `label: string` — texto que muestra el botón
- `onClick: () => void` — función que se ejecuta al hacer click
- `variant?: 'primary' | 'secondary' | 'danger'` — estilo visual del botón
- `disabled?: boolean` — si está desactivado o no
**Uso:** Se usa en ExerciseCard, Modal y RoutinePanel

---

## ExerciseCard
**Descripción:** Tarjeta que muestra la información básica de un ejercicio con opciones para ver su detalle o añadirlo a la rutina del día.
**Props:**
- `exercise: Exercise` — objeto con los datos del ejercicio
- `onAdd: (exercise: Exercise) => void` — función para añadir a la rutina
- `onViewDetail: (exercise: Exercise) => void` — función para abrir el modal
**Uso:** Se renderiza dentro de ExerciseList

---

## ExerciseList
**Descripción:** Recibe un array de ejercicios y renderiza una ExerciseCard por cada uno. Si el array está vacío muestra un mensaje.
**Props:**
- `exercises: Exercise[]` — lista de ejercicios a mostrar
- `onAdd: (exercise: Exercise) => void` — se pasa a cada ExerciseCard
- `onViewDetail: (exercise: Exercise) => void` — se pasa a cada ExerciseCard
**Uso:** Se usa en la página principal del catálogo

---

## FilterBar
**Descripción:** Barra con dos desplegables para filtrar los ejercicios por músculo y dificultad. No aplica los filtros, solo avisa al padre cuando el usuario cambia algo.
**Props:**
- `selectedMuscle: string` — músculo seleccionado actualmente
- `selectedDifficulty: string` — dificultad seleccionada actualmente
- `onMuscleChange: (muscle: string) => void` — se ejecuta al cambiar el músculo
- `onDifficultyChange: (difficulty: string) => void` — se ejecuta al cambiar la dificultad
**Uso:** Se usa encima de ExerciseList en la página principal

---

## Modal
**Descripción:** Ventana emergente que muestra el detalle completo de un ejercicio. Se cierra haciendo click en el fondo oscuro, en el botón cerrar, o al añadir el ejercicio a la rutina.
**Props:**
- `exercise: Exercise` — ejercicio a mostrar en detalle
- `onClose: () => void` — función para cerrar el modal
- `onAdd: (exercise: Exercise) => void` — función para añadir a la rutina
**Uso:** Se muestra en la página principal cuando el usuario pulsa "Ver detalle"

---

## RoutinePanel
**Descripción:** Panel que muestra los ejercicios añadidos a la rutina del día. Permite eliminar ejercicios individualmente o limpiar toda la rutina. Muestra un contador con el número de ejercicios.
**Props:**
- `routine: Exercise[]` — array con los ejercicios de la rutina
- `onRemove: (id: string) => void` — elimina un ejercicio por su id
- `onClear: () => void` — vacía toda la rutina
**Uso:** Se muestra en la página principal junto al catálogo