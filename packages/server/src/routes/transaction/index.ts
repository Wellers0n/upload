import { Router } from 'express'
import ListTransactionsController from '../../controllers/TransactionController/ListTransactions'
import ListAmountInfoController from '../../controllers/TransactionController/ListAmountInfo'
import { authentication } from '../../middleware/authentication'

const transactionRoutes = Router()

/**
 * @swagger
 * /transaction/list:
 *   get:
 *     security:
 *       - token: []
 *     description: list of transactions
 *     tags: ["Transaction"]
 *     parameters:
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *         description: The number of items to skip before starting to collect the result set
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: The numbers of items to return
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                transactions:
 *                  type: array
 *              example:
 *                transactions: [{
 *                                 "id": 38,
 *                                 "type": 1,
 *                                 "date": "2022-03-01T05:09:54.000Z",
 *                                 "product": "CURSO DE BEM-ESTAR",
 *                                 "amount": 12750,
 *                                 "seller": "JOSE CARLOS",
 *                                 "description": "Venda produtor",
 *                                 "nature": "Entrada",
 *                                 "signal": "+",
 *                                 "createdAt": "2022-11-26T19:32:56.822Z",
 *                                 "updatedAt": "2022-11-26T19:32:56.822Z"
 *                             },
 *                             {
 *                                 "id": 35,
 *                                 "type": 4,
 *                                 "date": "2022-02-03T20:23:37.000Z",
 *                                 "product": "DESENVOLVEDOR FULL STACK",
 *                                 "amount": 50000,
 *                                 "seller": "ELIANA NOGUEIRA",
 *                                 "description": "Comissão recebida",
 *                                 "nature": "Entrada",
 *                                 "signal": "+",
 *                                 "createdAt": "2022-11-26T19:32:56.822Z",
 *                                 "updatedAt": "2022-11-26T19:32:56.822Z"
 *                           }]
 *                limit: 10
 *                offset: 1
 *                totalPages: 2
 *       401:
 *         description: Authentication
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: Não autorizado!
 *       400:
 *         description: Error
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: Error ao buscar a lista de transações!
 */
transactionRoutes.get('/list', authentication, ListTransactionsController)

/**
 * @swagger
 * /transaction/amount-info:
 *   get:
 *     security:
 *       - token: []
 *     description: total amount information
 *     tags: ["Transaction"]
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                transactions:
 *                  type: array
 *              example:
 *                 commissionPaid: R$ 11.450,00
 *                 commissionReceived: R$ 3.450,00
 *                 affiliateSelling: R$ 2.450,00
 *                 producerSale: R$ 5.450,00
 *       401:
 *         description: Authentication
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: Não autorizado!
 *       400:
 *         description: Error
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: Error ao buscar os valores!
 */
transactionRoutes.get('/amount-info', authentication, ListAmountInfoController)

export { transactionRoutes }
