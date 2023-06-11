import { Request, Response } from 'express'
import amountInfoService from '@/services/transaction/amount-info'
import { getUser } from '@/services/session/auth'

const amountInfo = async (request: Request, response: Response) => {
  try {
    const user = await getUser(request?.headers?.authorization)

    if (!user) {
      return response.status(404).json({
        message: 'Usuário não encontrado'
      })
    }

    const {
      commissionPaid,
      commissionReceived,
      affiliateSelling,
      producerSale
    } = await amountInfoService({
      user
    })

    return response.status(200).json({
      commissionPaid,
      commissionReceived,
      affiliateSelling,
      producerSale
    })
  } catch (error) {
    return response.status(400).json({
      message: 'Error ao buscar os valores!'
    })
  }
}

export default amountInfo
