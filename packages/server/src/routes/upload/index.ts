import { Router } from 'express'
import UploadController from '../../controllers/UploadController'
import { storage } from "../../middleware/upload";
import multer from "multer";
import { authentication } from '../../middleware/authentication'

const upload = multer({
    storage: storage()
})

const uploadRoutes = Router()

uploadRoutes.post('/transaction-file', upload.single(''), authentication, UploadController.TransactionFile)

export { uploadRoutes }
