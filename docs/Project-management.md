# Gestión del proyecto

## Herramienta de organización
He comenzado a usar tello para ayudarme a organizar mis tareas de cara a acompletar este proyecto, tambien porque lo pide el ejercicio

## Estructura del tablero
He creado varias columnas, muy basicas:
-Backlog ( para tener ahi las ideas)
-Todas (Se explica solo)
-In Progress( En progreso)
-Done (Completadas)

## Estructura de carpetas del proyecto
He creado la estructura de carpetas pensando en el full Stack y lo he dividido en dos: Frontend y Backend

### Frontend (src/)
- `components/` → Piezas reutilizables de UI ,tarjetas de ejercicio botones, etc..
- `pages/` → Las vistas completas de la app
- `hooks/` → Logica extraida de funciones
- `types/` → interfaces y tipados de typescript
- `utils/` → Funciones auxiliares genericas que no son ni hooks ni componentes
- `context/` → Estado global de la app, en este caso el "Routine Context"
- `api/` → Las funciones que hacen las llamadas al backend o a la API externa. Aquí va todo el fetch

### Backend (server/)
- `routes/` → Define las rutas o URL disponiobles, solo enruta, sin logica interna
- `controllers/` → S encargan de recibir la las peticiones HTTP y devuelve las respuestas llamando al servicio correspondiente
- `services/` → Aqui se encuentra la logica real de la app
- `config/` → Configuracion general: puertos de server, variables de entorno, etc...

## Flujo de trabajo
Mi idea es ir moviendo las tarjetas de Backlog a InProgress mientras este con ellas, de ahi a done cuando esten completadas