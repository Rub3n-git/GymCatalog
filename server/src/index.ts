// server/src/index.ts
import express from 'express'
import cors from 'cors'
import exerciseRoutes from './routes/exerciseRoutes'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use('/api/v1/exercises', exerciseRoutes)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})