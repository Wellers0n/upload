const { promises: fsPromises } = require('fs')
import { User } from '@/types'
import transactionFormattingFile from './helpers/transactionFormattingFile'
import database from '@/database'

const UploadTransactionFileService = async (fileName: string, user: User) => {
  try {
    const contents = await fsPromises.readFile(fileName, 'utf-8')

    const transactions = contents.split(/\r?\n/)

    const transactionFormatted = transactionFormattingFile(transactions, user)

    await database('transactions').insert(transactionFormatted)

    return { status: 200, message: 'Arquivo enviado com sucesso!' }
  } catch (error) {
    return { status: 400, message: 'Algo deu errado ao tentar fazer o upload' }
  }
}

export default UploadTransactionFileService
