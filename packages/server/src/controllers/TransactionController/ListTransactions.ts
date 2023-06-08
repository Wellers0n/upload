import { Request, Response } from 'express'
import ListTransactionsServices from '@/services/TransactionServices/ListTransactions'
import { getUser } from '@/services/SessionServices/Auth'

const List = async (request: Request, response: Response) => {
  try {
    const user = await getUser(request?.headers?.authorization)

    if (!user) {
      return response.status(401).json({
        message: 'Não autorizado!'
      })
    }

    const { limit = 10, offset = 0 } = request.query

    const { transactions, totalPages } = await ListTransactionsServices({
      offset: Number(offset),
      limit: Number(limit),
      user
    })

    return response.status(200).json({
      transactions,
      limit,
      offset,
      totalPages
    })
  } catch (error) {
    return response.status(400).json({
      message: 'Error ao buscar a lista de transações!'
    })
  }
}

export default List
