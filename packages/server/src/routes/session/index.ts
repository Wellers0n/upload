import { Router } from 'express'
import LoginController from '@/controllers/session/login'
import RegisterController from '@/controllers/session/register'

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
 *                required-email:
 *                  summary: email required
 *                  value:
 *                    message: Email é obrigatório
 *                    token: null
 *                required-password:
 *                  summary: password required
 *                  value:
 *                    message: Senha é obrigatória
 *                    token: null
 *                required-valid-email:
 *                  summary: email invalid
 *                  value:
 *                    message: Email inválido
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
 *                token: 
 *                  type: ["string", "null"]
 *              example:
 *                message: Usuário criado com sucesso!
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
 *                    message: Nome, email e senha são obrigatórios
 *                    token: null
 *                user:
 *                  summary: user already exists
 *                  value:
 *                    message: Usuário já existe
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
