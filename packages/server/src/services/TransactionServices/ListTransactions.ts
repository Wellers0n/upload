import db from '../../models'

type ListType = {
  limit: number
  offset: number
  user: { id: number }
}
const List = async ({ limit, offset, user }: ListType) => {
  const transactions = await db.Transactions.findAll({
    where: {
      user_id: user.id
    },
    limit,
    offset,
    order: [['createdAt', 'DESC']]
  })

  return { error: false, transactions }
}

export default List
