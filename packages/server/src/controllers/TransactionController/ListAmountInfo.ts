import { Request, Response } from 'express'
import AmountInfoServices from '../../services/TransactionServices/AmountInfo'
import { getUser } from '../../services/SessionServices/Auth'

const AmountInfo = async (request: Request, response: Response) => {
  try {
    const user = await getUser(request?.headers?.authorization)

    const {
      commissionPaid,
      commissionReceived,
      affiliateSelling,
      producerSale,
    } = await AmountInfoServices({
      user
    })

    return response.status(200).json({
      commissionPaid,
      commissionReceived,
      affiliateSelling,
      producerSale,
    })
  } catch (error) {
    return response.status(400).json({
      message: 'Error ao buscar os valores!'
    })
  }
}

export default AmountInfo
