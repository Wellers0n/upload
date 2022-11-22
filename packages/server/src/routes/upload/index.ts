import { Router } from 'express'
import UploadTransactionFileController from '../../controllers/UploadTransactionFileController'
import { storage } from "../../middleware/upload";
import multer from "multer";

const upload = multer({
    storage: storage()
})

const uploadRoutes = Router()

uploadRoutes.post('/transaction-file', upload.single(''), UploadTransactionFileController)

export { uploadRoutes }
