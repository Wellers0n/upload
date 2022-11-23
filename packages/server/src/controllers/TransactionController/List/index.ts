import { Request, Response } from 'express'
import TransactionServices from "../../../services/TransactionServices";


const List = async (request: Request, response: Response) => {

    const { error, transactions } = await TransactionServices.List()

    return response.status(200).json({ error, transactions })
}

export default List
