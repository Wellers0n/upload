import {Router} from 'express'
import UploadController from '../../controllers/UploadController'
import {storage} from "../../middleware/upload";
import multer from "multer";

const upload = multer({
    storage: storage()
})

const uploadRoutes = Router()

uploadRoutes.patch('/', upload.single('avatar'), UploadController)

export {uploadRoutes}
