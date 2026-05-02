// server/src/routes/exerciseRoutes.ts
import { Router } from 'express'
import * as exerciseController from '../controllers/exerciseController'

const router = Router()

router.get('/', exerciseController.getAll)
router.get('/:id', exerciseController.getById)

export default router