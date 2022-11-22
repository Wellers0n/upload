import {Request, Response} from 'express'
import UploadService from "../../services/UploadService";


const UploadController = async (request: Request, response: Response) => {
    const {file} = request

    console.log(file)
    const content = await UploadService(file.filename)
    return response.status(200).json({content})
}

export default UploadController
