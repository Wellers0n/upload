import { Request, Response } from 'express'
import UploadServices from "../../../services/UploadServices";


const TransactionFile = async (request: Request, response: Response) => {
    const { file } = request

    if (!file) {
        return response.status(400).json({ error: true, message: "File not found" })
    }

    console.log(file)

    const { error, message } = await UploadServices.UploadTransactionFile(file.filename)

    return response.status(200).json({ error, message })
}

export default TransactionFile
