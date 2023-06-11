import database from '@/database'
import transactionFormattingData from './helpers/transactionFormattingData'
import { Transaction } from '@/types'

type ListType = {
  limit: number
  offset: number
  user: { id: number }
}
const transactionsList = async ({ limit, offset, user }: ListType) => {
  const transactions = await database<Transaction>('transactions')
    .select('*')
    .where({
      user_id: user.id
    })
    .limit(limit)
    .offset(limit * offset)
    .orderBy('id', 'desc')

  const totalPages = await database('transactions')
    .where({
      user_id: user.id
    })
    .count()
    .first()

  return {
    transactions: transactionFormattingData(transactions),
    totalPages: Math.ceil(Number(totalPages?.count) / limit)
  }
}

export default transactionsList
