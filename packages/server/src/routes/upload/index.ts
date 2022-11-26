import { Router } from 'express'
import UploadController from '../../controllers/UploadController'
import { storage } from "../../middleware/upload";
import multer from "multer";
import { authentication } from '../../middleware/authentication'

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
 *                error:
 *                  type: boolean
 *              example:
 *                message: Successful upload
 *                error: false
 *       404:
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
 *                message: File not found
 *                error: true
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
 *              example:
 *                message: File type invalid, send a .text!
 *                error: true
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
 *                message: Not authorized!
 *                error: true
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
uploadRoutes.post('/transaction-file', upload.single('file'), authentication, UploadController.TransactionFile)

export { uploadRoutes }
