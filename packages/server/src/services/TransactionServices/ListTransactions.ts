import db from '../../models'

type ListType = {
  limit: number
  offset: number
  user: { id: number }
}
const List = async ({ limit, offset, user }: ListType) => {
  const data = await db.Transactions.findAndCountAll({
    where: {
      user_id: user.id
    },
    limit,
    offset,
    order: [['createdAt', 'DESC']]
  })

  return {
    transactions: data.rows,
    totalPages: Math.round(data.count / limit)
  }
}

export default List
