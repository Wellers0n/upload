import app from '../../../app'
import database from '../../../database'
import request from 'supertest'

describe('POST /transactions/list', () => {
  beforeAll(async () => {
    await database.seed.run({
      specific: 'users_transactions.ts'
    })
  })

  it('response transactiosn list', async () => {
    const loginResponse = await request(app)
      .post('/session/login')
      .send({
        email: 'admin@admin.com',
        password: 'admin'
      })
      .set('Accept', 'application/json')

    const response = await request(app)
      .get('/transaction/list')
      .set('Authorization', loginResponse.body.token)
      .set('Accept', 'application/json')

    expect(response.statusCode).toBe(200)

    expect(response.body).toEqual({
      limit: 10,
      offset: 0,
      totalPages: 1,
      transactions: [
        {
          type: 1,
          date: '07/06/2023',
          product: 'product 1',
          amount: 'R$\u00A0120,00',
          seller: 'Vendedor 1',
          description: 'Comissão paga',
          nature: 'nature 1',
          signal: '-'
        },
        {
          type: 1,
          date: '07/06/2023',
          product: 'product 1',
          amount: 'R$\u00A0120,00',
          seller: 'Vendedor 1',
          description: 'Venda afiliado',
          nature: 'nature 1',
          signal: '+'
        },
        {
          type: 1,
          date: '07/06/2023',
          product: 'product 1',
          amount: 'R$\u00A0120,00',
          seller: 'Vendedor 1',
          description: 'Comissão recebida',
          nature: 'nature 1',
          signal: '+'
        },
        {
          type: 1,
          date: '07/06/2023',
          product: 'product 1',
          amount: 'R$\u00A0120,00',
          seller: 'Vendedor 1',
          description: 'Venda produtor',
          nature: 'nature 1',
          signal: '+'
        }
      ]
    })
  })
  it('response transactiosn list middleware', async () => {
    const response = await request(app)
      .get('/transaction/list')
      .set('Authorization', 'admin')
      .set('Accept', 'application/json')

    expect(response.statusCode).toBe(401)

    expect(response.body).toEqual({
      message: 'Não autorizado!'
    })
  })
  it('response transactiosn list authentication user wrong', async () => {
    const response = await request(app)
      .get('/transaction/list')
      .set(
        'Authorization',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.NBLQ6QL4f-EeJ0fibdljUvnJUgwXA7ZXdcgydTaBUWA'
      )
      .set('Accept', 'application/json')

    expect(response.statusCode).toBe(404)

    expect(response.body).toEqual({
      message: 'Usuário não encontrado'
    })
  })
})
