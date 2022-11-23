import { Router } from 'express'
import TransactionController from '../../controllers/TransactionController'
import { authentication } from '../../middleware/authentication'

const transactionRoutes = Router()

transactionRoutes.get('/list', authentication, TransactionController.List)

export { transactionRoutes }
