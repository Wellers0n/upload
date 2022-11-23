import { Router } from 'express'
import HealthController from '../../controllers/HealthController'
import { authentication } from '../../middleware/authentication'

const healthRoutes = Router()

healthRoutes.get('/', authentication, HealthController)

export { healthRoutes }
