import { resolve } from 'path'
const { promises: fsPromises } = require('fs')
import { tmpFolder } from '../../helpers/tmpFolder'
import mime from 'mime'
import transactionFormattingFile from './helpers/transactionFormattingFile'
import db from '../../models'

const UploadTransactionFileService = async (
  fileName: string,
  user: { id: number }
) => {
  
  const contents = await fsPromises.readFile(fileName, 'utf-8')

  const transactions = contents.split(/\r?\n/)

  const transactionFormatted = transactionFormattingFile(transactions, user)

  await db.Transactions.bulkCreate(transactionFormatted)

  return { status: 200, message: 'Arquivo enviado com sucesso!' }
}

export default UploadTransactionFileService
