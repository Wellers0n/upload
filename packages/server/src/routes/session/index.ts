import { Router } from 'express'
import LoginController from '../../controllers/SessionController/Login'
import RegisterController from '../../controllers/SessionController/Register'

const sessionRoutes = Router()

/**
 * @swagger
 * /session/login:
 *   post:
 *     description: login
 *     tags: ["Session"]
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
 *                token: 
 *                  type: ["string", "null"]
 *              example:
 *                message: Login com sucesso!
 *                token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjkyMjkwMjh9.kWzb6evDjKORu9097C5PFrSsfFpL0sxgqlyv-tLDWFc
 *       400:
 *         description: Error
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                token: 
 *                  type: ["string", "null"]
 *            examples:
 *                required:
 *                  summary: fields required
 *                  value:
 *                    message: Email e senha são obrigatórios
 *                    token: null
 *                user:
 *                  summary: verify credentials
 *                  value:
 *                    message: Credenciais inválidas
 *                    token: null
 *     consumers:
 *        - application/json
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - email
 *                - password
 *              properties:
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 */
sessionRoutes.post('/login', LoginController)

/**
 * @swagger
 * /session/register:
 *   post:
 *     description: register
 *     tags: ["Session"]
 *     responses:
 *       201:
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
 *                token: 
 *                  type: ["string", "null"]
 *              example:
 *                message: User created successfully
 *                error: false
 *                token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjkyMjkwMjh9.kWzb6evDjKORu9097C5PFrSsfFpL0sxgqlyv-tLDWFc
 *       400:
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
 *                token: 
 *                  type: ["string", "null"]
 *            examples:
 *                required:
 *                  summary: fields required
 *                  value:
 *                    message: Name, email and password is required
 *                    error: true
 *                    token: null
 *                user:
 *                  summary: user already exists
 *                  value:
 *                    message: user already exists
 *                    error: true
 *                    token: null
 *     consumers:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - name
 *                - email
 *                - password
 *              properties:
 *                name:
 *                  type: string
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 */
sessionRoutes.post('/register', RegisterController)

export { sessionRoutes }
