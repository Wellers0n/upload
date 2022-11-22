import {Router} from 'express'
import UploadTransactionFileController from '../../controllers/UploadTransactionFileController'
import {storage} from "../../middleware/upload";
import multer from "multer";

const upload = multer({
    storage: storage()
})

const uploadRoutes = Router()

uploadRoutes.patch('/upload-transaction-file', upload.single('transaction-file'), UploadTransactionFileController)

export {uploadRoutes}
