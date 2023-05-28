import { Request, Response } from 'express'
import TransactionServices from '../../../services/TransactionServices'
import { getUser } from '../../../services/SessionServices/Auth'

const List = async (request: Request, response: Response) => {
  const user = await getUser(request?.headers?.authorization)

  const { limit = 10, offset = 0 } = request.query

  const { error, transactions } = await TransactionServices.List({
    offset: Number(offset),
    limit: Number(limit),
    user
  })

  return response.status(200).json({ error, transactions })
}

export default List
