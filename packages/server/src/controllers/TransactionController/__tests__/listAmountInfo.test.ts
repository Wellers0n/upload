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
      .get('/transaction/amount-info')
      .set('Authorization', loginResponse.body.token)
      .set('Accept', 'application/json')

    expect(response.statusCode).toBe(200)

    expect(response.body).toEqual({
      affiliateSelling: 'R$\u00A0120,00',
      commissionPaid: 'R$\u00A0120,00',
      commissionReceived: 'R$\u00A0120,00',
      producerSale: 'R$\u00A0120,00'
    })
  })
  it('response amount-info middleware test', async () => {
    const response = await request(app)
      .get('/transaction/amount-info')
      .set('Authorization', 'admin')
      .set('Accept', 'application/json')

    expect(response.statusCode).toBe(401)

    expect(response.body).toEqual({
      message: 'Não autorizado!'
    })
  })

  it('response amount-info authentication user', async () => {
    const response = await request(app)
      .get('/transaction/amount-info')
      .set(
        'Authorization',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.NBLQ6QL4f-EeJ0fibdljUvnJUgwXA7ZXdcgydTaBUWA'
      )
      .set('Accept', 'application/json')

    expect(response.statusCode).toBe(401)

    expect(response.body).toEqual({
      message: 'Não autorizado!'
    })
  })
})
