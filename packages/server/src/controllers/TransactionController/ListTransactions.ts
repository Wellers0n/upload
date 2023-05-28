import { Request, Response } from 'express'
import ListTransactionsServices from '../../services/TransactionServices/ListTransactions'
import { getUser } from '../../services/SessionServices/Auth'

const List = async (request: Request, response: Response) => {
  const user = await getUser(request?.headers?.authorization)

  const { limit = 10, offset = 0 } = request.query

  const { error, transactions } = await ListTransactionsServices({
    offset: Number(offset),
    limit: Number(limit),
    user
  })

  return response.status(200).json({ error, transactions })
}

export default List
