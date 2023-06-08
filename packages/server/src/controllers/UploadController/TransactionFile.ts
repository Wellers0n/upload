import { Request, Response } from 'express'
import { resolve } from 'path'
import { tmpFolder } from '@/helpers/tmpFolder'
import UploadTransactionFile from '@/services/UploadServices/UploadTransactionFile'
import { getUser } from '@/services/SessionServices/Auth'
import z, { ZodError } from 'zod'

const TransactionFile = async (request: Request, response: Response) => {
  try {
    const MAX_FILE_SIZE = 500000
    const createFileSchema = z.object({
      file: z
        .any()
        .refine(file => !!file, 'Arquivo é obrigatório.')
        .refine(
          file => file.mimetype === 'text/plain',
          'Somente arquivos .txt são aceitos.'
        )
        .refine(file => file.size <= MAX_FILE_SIZE, `Tamanho máximo de 5MB.`)
    })

    const { file } = createFileSchema.parse(request)

    const fileName = resolve(tmpFolder, file.filename)

    const user = await getUser(request?.headers?.authorization)

    if (!user) {
      return response.status(401).json({ message: 'Não autorizado!' })
    }

    const { message, status } = await UploadTransactionFile(fileName, user)

    return response.status(status).json({ message })
  } catch (error) {
    if (error instanceof ZodError) {
      console.log(error)
      return response.status(400).json({ message: error.errors[0].message })
    }
  }
}

export default TransactionFile
