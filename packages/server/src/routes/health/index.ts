import { Router } from 'express'
import HealthController from '../../controllers/HealthController'

const healthRoutes = Router()

/**
 * @swagger
 * /health:
 *   get:
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
 *       401:
 *         description: Error
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
 *                message: Não autorizado!
 *                error: true
 */
healthRoutes.get('/health', HealthController)

export { healthRoutes }
