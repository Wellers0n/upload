import { Router } from 'express'
import { healthRoutes } from '../routes/health'
import { uploadRoutes } from '../routes/upload'

const routes = Router()

routes.use('/', healthRoutes)
routes.use('/upload', uploadRoutes)

export { routes }
