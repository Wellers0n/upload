import { Router } from 'express'
import transactionListController from '@/controllers/transaction/transaction-list'
import amountInfoController from '@/controllers/transaction/amount-info'
import { authentication } from '@/middleware/authentication'

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
 *                                  type: 1,
 *                                  date: '07/06/2023',
 *                                  product: 'product 1',
 *                                  amount: 'R$ 120,00',
 *                                  seller: 'Vendedor 1',
 *                                  description: 'Comissão paga',
 *                                  nature: 'nature 1',
 *                                  signal: '-'
 *                               },
 *                               {
 *                                  type: 1,
 *                                  date: '07/06/2023',
 *                                  product: 'product 1',
 *                                  amount: 'R$ 120,00',
 *                                  seller: 'Vendedor 1',
 *                                  description: 'Venda afiliado',
 *                                  nature: 'nature 1',
 *                                  signal: '+'
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
 *       404:
 *         description: Not found
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: 'Usuário não encontrado'
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
transactionRoutes.get('/list', authentication, transactionListController)

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
 *       404:
 *         description: Not found
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: Usuário não encontrado
 */
transactionRoutes.get('/amount-info', authentication, amountInfoController)

export { transactionRoutes }
