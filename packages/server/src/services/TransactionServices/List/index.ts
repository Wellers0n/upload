import db from '../../../models'

const List = async () => {

    const transactions = await db.Transactions.findAll({});

    return { error: false, transactions }

}

export default List
