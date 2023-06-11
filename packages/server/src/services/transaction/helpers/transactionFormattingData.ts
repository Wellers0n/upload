import { Transaction } from '@/types'
import moment from 'moment'

const transactionFormattingData = (transactions: Transaction[]) => {
  return transactions.map(transaction => {
    if (transaction) {
      return {
        type: transaction.type,
        product: transaction.product,
        seller: transaction.seller,
        description: transaction.description,
        nature: transaction.nature,
        signal: transaction.signal,
        amount: (transaction.amount / 100).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }),
        date: moment(transaction.date).format('DD/MM/YYYY')
      }
    }
  })
}

export default transactionFormattingData
