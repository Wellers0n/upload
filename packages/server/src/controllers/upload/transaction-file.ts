import { Request, Response } from 'express'
import { resolve } from 'path'
import { tmpFolder } from '@/helpers/tmpFolder'
import transactionFileService from '@/services/upload/transaction-file'
import { getUser } from '@/services/session/auth'
import z, { ZodError } from 'zod'

const transactionFile = async (request: Request, response: Response) => {
  try {
    const MAX_FILE_SIZE = 500000
    const createFileSchema = z.object({
      file: z
        .any()
        .refine(file => !!file.size, 'Arquivo é obrigatório.')
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
      return response.status(404).json({ message: 'Usuário não encontrado' })
    }

    const { message, status } = await transactionFileService(fileName, user)

    return response.status(status).json({ message })
  } catch (error) {
    if (error instanceof ZodError) {
      return response.status(400).json({ message: error.errors[0].message })
    }
  }
}

export default transactionFile
