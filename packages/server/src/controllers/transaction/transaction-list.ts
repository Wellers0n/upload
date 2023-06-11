import { Request, Response } from 'express'
import transactionListService from '@/services/transaction/transaction-list'
import { getUser } from '@/services/session/auth'

const transactionList = async (request: Request, response: Response) => {
  try {
    const user = await getUser(request?.headers?.authorization)

    if (!user) {
      return response.status(404).json({
        message: 'Usuário não encontrado'
      })
    }

    const { limit = 10, offset = 0 } = request.query

    const { transactions, totalPages } = await transactionListService({
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

export default transactionList
