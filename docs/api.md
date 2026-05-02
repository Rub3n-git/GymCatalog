# API

## Base URL
http://localhost:3000/api/v1

## Endpoints

### GET /exercises
Devuelve todos los ejercicios
**Response 200:**
```json
[
  {
    "id": "1",
    "name": "Sentadilla",
    "muscle": "legs",
    "equipment": "barbell",
    "difficulty": "intermediate"
  }
]
```

### GET /exercises/:id
Devuelve un ejercicio por su id
**Response 200:** objeto Exercise
**Response 404:** `{ "error": "Ejercicio no encontrado" }`

### GET /exercises?muscle=legs
Devuelve ejercicios filtrados por músculo
**Response 200:** array de Exercise filtrado