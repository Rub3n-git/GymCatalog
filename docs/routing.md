# Rutas y navegación

## Configuración
Las rutas se gestionan con React Router en App.tsx.
BrowserRouter envuelve toda la app y Routes define
qué componente renderizar según la URL.

## Estructura de rutas
- `/` — Página principal con el catálogo de ejercicios
- `/history` — Historial de rutinas anteriores
- `*` — Página 404 para cualquier ruta no definida

## Navegación
La navegación entre páginas se hace con el hook useNavigate
de React Router, sin recargar el navegador.