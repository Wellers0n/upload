import { User } from '@/types'
import getTransactionType from './getTransactionType'

const transactionFormattingFile = (transactionFile: string[], user: User) => {
  return transactionFile.map((transaction: string) => {
    const type = Number(transaction.slice(0, 1))
    const date = transaction.slice(1, 26)
    const product = transaction.slice(26, 56).trim()
    const amount = Number(transaction.slice(57, 66))
    const seller = transaction.slice(66).trim()
    const transactionType = getTransactionType(type)

    if (transaction) {
      return {
        user_id: user.id,
        type,
        date,
        product,
        amount,
        seller,
        ...transactionType
      }
    }

    return []
  })
}

export default transactionFormattingFile
