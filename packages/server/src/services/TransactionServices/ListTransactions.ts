import db from '../../models'
import transactionFormattingData from './helpers/transactionFormattingData'

type ListType = {
  limit: number
  offset: number
  user: { id: number }
}
const List = async ({ limit, offset, user }: ListType) => {
  const transactionAllAndCount = await db.Transactions.findAndCountAll({
    where: {
      user_id: user.id
    },
    limit,
    offset: limit * offset,
    subQuery: false,
    order: [['id', 'DESC']]
  })

  const totalPositiveAmount = await db.Transactions.sum('amount', {
    where: { user_id: user.id, signal: '+' }
  })
  const totalNegativeAmount = await db.Transactions.sum('amount', {
    where: { user_id: user.id, signal: '-' }
  })

  return {
    transactions: transactionFormattingData(transactionAllAndCount.rows),
    totalPages: Math.round(transactionAllAndCount.count / limit),
    totalPositiveAmount: (totalPositiveAmount / 100).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }),
    totalNegativeAmount: (totalNegativeAmount / 100).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
  }
}

export default List
