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

  return {
    transactions: transactionFormattingData(transactionAllAndCount.rows),
    totalPages: Math.round(transactionAllAndCount.count / limit)
  }
}

export default List
