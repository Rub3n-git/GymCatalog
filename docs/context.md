# Context API

## ¿Qué es Context y cuándo es útil?
Context es una forma de compartir estado global entre componentes
sin tener que pasarlo como props en cada nivel. Es útil cuando
varios componentes en distintas partes de la app necesitan
el mismo dato, como la rutina del día en GymCatalog.

## RoutineContext
**Qué almacena:** El array de ejercicios de la rutina del día
**Qué expone:**
- `routine` — array con los ejercicios añadidos
- `addExercise` — añade un ejercicio evitando duplicados
- `removeExercise` — elimina un ejercicio por su id
- `clearRoutine` — vacía toda la rutina
**Dónde se consume:** En RoutinePanel y en la página principal