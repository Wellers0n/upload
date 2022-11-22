import { Router } from 'express'
import HealthController from '../../controllers/HealthController'

const healthRoutes = Router()

healthRoutes.get('/', HealthController)

export { healthRoutes }
