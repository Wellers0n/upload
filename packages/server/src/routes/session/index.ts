import { Router } from 'express'
import SessionController from '../../controllers/SessionController'

const sessionRoutes = Router()

sessionRoutes.post('/login', SessionController.Login)

sessionRoutes.post('/register', SessionController.Register)

export { sessionRoutes }
