import db from '../../../models'


type ListType = {
  limit: number,
  offset: number
}
const List = async ({ limit, offset }: ListType) => {

  const transactions = await db.Transactions.findAll({
    limit, offset, order: [
      ['createdAt', 'DESC'],
    ],
  });

  return { error: false, transactions }

}

export default List
