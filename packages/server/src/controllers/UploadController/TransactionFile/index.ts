import { Request, Response } from 'express'
import UploadTransactionFileService from "../../../services/UploadServices/UploadTransactionFile";


const UploadTransactionFileController = async (request: Request, response: Response) => {
    const { file } = request

    if (!file) {
        return response.status(404).json({ error: true, message: "File not found" })
    }

    console.log(file)

    const { error, message } = await UploadTransactionFileService(file.filename)

    return response.status(200).json({ error, message })
}

export default UploadTransactionFileController
