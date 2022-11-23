import { Router } from 'express'
import { healthRoutes } from '../routes/health'
import { sessionRoutes } from '../routes/session'
import { uploadRoutes } from '../routes/upload'

const routes = Router()

routes.use('/', healthRoutes)
routes.use('/session', sessionRoutes)
routes.use('/upload', uploadRoutes)

export { routes }
