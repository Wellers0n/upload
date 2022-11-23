import db from '../../../models'


type ListType = {
    limit: number,
    offset: number
}
const List = async ({ limit = 10, offset = 0 }: ListType) => {

    const transactions = await db.Transactions.findAll({
        limit, offset, order: [
            ['createdAt', 'DESC'],
        ],
    });

    return { error: false, transactions }

}

export default List
