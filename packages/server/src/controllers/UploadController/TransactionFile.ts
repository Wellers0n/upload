import { Request, Response } from 'express'
import UploadTransactionFile from '../../services/UploadServices/UploadTransactionFile'
import { getUser } from '../../services/SessionServices/Auth'

const TransactionFile = async (request: Request, response: Response) => {
  const { file } = request

  const user = await getUser(request?.headers?.authorization)

  if (!file) {
    return response.status(404).json({ message: 'Arquivo não encontrado' })
  }

  const { message, status } = await UploadTransactionFile(
    file.filename,
    user
  )

  return response.status(status).json({ message })
}

export default TransactionFile
