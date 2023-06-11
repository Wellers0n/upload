import { Router } from 'express'
import transactionFileController from '@/controllers/upload/transaction-file'
import multer from 'multer'
import { authentication } from '@/middleware/authentication'
import { storage } from '@/middleware/upload'

const upload = multer({
  storage: storage()
})

const uploadRoutes = Router()

/**
 * @swagger
 * /upload/transaction-file:
 *   post:
 *     security:
 *       - token: []
 *     description: receive a .txt file
 *     tags: ["Upload"]
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
 *              example:
 *                message: Arquivo enviado com sucesso!
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
 *                  summary: file required
 *                  value:
 *                    message: Arquivo é obrigatório.
 *                required-txt:
 *                  summary: verify .txt
 *                  value:
 *                    message: Somente arquivos .txt são aceitos.
 *                required-size:
 *                  summary: verify file size
 *                  value:
 *                    message: Tamanho máximo de 5MB.
 *                service-error:
 *                  summary: service error
 *                  value:
 *                    message: Algo deu errado ao tentar fazer o upload.
 *       401:
 *         description: Authentication
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: Não autorizado!
 *       404:
 *         description: Authentication
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: Usuário não encontrado
 *     requestBody:
 *       required: true
 *       content:
 *          multipart/form-data:
 *            schema:
 *              type: object
 *              required:
 *                - file
 *              properties:
 *                file:
 *                  type: string
 *                  format: binary
 *
 */
uploadRoutes.post(
  '/transaction-file',
  upload.single('file'),
  authentication,
  transactionFileController
)

export { uploadRoutes }
