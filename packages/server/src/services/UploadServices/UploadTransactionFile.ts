import { resolve } from 'path'
const { promises: fsPromises } = require('fs')
import { tmpFolder } from '../../helpers/tmpFolder'
import mime from 'mime'
import transactionFormattingFile from './helpers/transactionFormattingFile'
import db from '../../models'

const UploadTransactionFileService = async (
  file: string,
  user: { id: number }
) => {
  const originalName = resolve(tmpFolder, file)
  const ContentType = mime.getType(originalName)

  if (ContentType !== 'text/plain') {
    return { status: 400, message: 'Tipo de arquivo inválido, envie um .txt!' }
  }

  const contents = await fsPromises.readFile(originalName, 'utf-8')

  const transactions = contents.split(/\r?\n/)

  const transactionFormatted = transactionFormattingFile(transactions, user)

  await db.Transactions.bulkCreate(transactionFormatted)

  return { status: 200, message: 'Arquivo enviado com sucesso!' }
}

export default UploadTransactionFileService
