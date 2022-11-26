import { Router } from 'express'
import HealthController from '../../controllers/HealthController'
import { authentication } from '../../middleware/authentication'

const healthRoutes = Router()

/**
 * @swagger
 * /:
 *   get:
 *     security: 
 *       - token: []
 *     description: health
 *     tags: ["Health"]
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                error:
 *                  type: boolean
 *              example:
 *                message: Server is fine 🔥
 *                error: false
 * 
 */
healthRoutes.get('/', authentication, HealthController)

export { healthRoutes }
