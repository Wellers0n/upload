import { Request, Response } from 'express'
import UploadServices from "../../../services/UploadServices";


const UploadTransactionFileController = async (request: Request, response: Response) => {
    const { file } = request

    if (!file) {
        return response.status(404).json({ error: true, message: "File not found" })
    }

    console.log(file)

    const { error, message } = await UploadServices.UploadTransactionFile(file.filename)

    return response.status(200).json({ error, message })
}

export default UploadTransactionFileController
