# Formularios

## ExerciseForm
**Descripción:** Formulario controlado para añadir ejercicios
personalizados al catálogo.
**Campos:**
- `name` — nombre del ejercicio, obligatorio
- `muscle` — grupo muscular, select con opciones predefinidas
- `equipment` — equipamiento necesario, obligatorio
- `difficulty` — nivel de dificultad, select con opciones predefinidas

**Validación:**
- Los campos name y equipment no pueden estar vacíos
- Los errores se muestran debajo de cada campo
- Los errores desaparecen cuando el usuario empieza a escribir

**Estado del formulario:**
Se gestiona con un único useState que contiene un objeto
con todos los campos, actualizándose con handleChange