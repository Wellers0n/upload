import { Request, Response } from 'express'
import TransactionServices from "../../../services/TransactionServices";


const List = async (request: Request, response: Response) => {

  const { limit = 10, offset = 0 } = request.query

  const { error, transactions } = await TransactionServices.List({ offset: Number(offset), limit: Number(limit) })

  return response.status(200).json({ error, transactions })
}

export default List
