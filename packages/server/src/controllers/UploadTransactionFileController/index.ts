import {Request, Response} from 'express'
import UploadTransactionFileService from "../../services/UploadTransactionFileService";


const UploadTransactionFileController = async (request: Request, response: Response) => {
    const {file} = request

    console.log(file)
    const content = await UploadTransactionFileService(file.filename)
    return response.status(200).json({content})
}

export default UploadTransactionFileController
