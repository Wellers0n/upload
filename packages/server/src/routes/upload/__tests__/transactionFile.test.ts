import app from '../../../app'
import request from 'supertest'
import { resolve } from 'path'

const buffer = Buffer.from('some data')

describe('POST /upload/transaction-file', () => {
  beforeAll(async () => {
    await request(app)
      .post('/session/register')
      .send({
        name: 'admin',
        email: 'admin@admin.com',
        password: 'admin'
      })
      .set('Accept', 'application/json')
  })

  it('response transaction-upload file wrong .txt', async () => {
    const loginResponse = await request(app)
      .post('/session/login')
      .send({
        email: 'admin@admin.com',
        password: 'admin'
      })
      .set('Accept', 'application/json')

    const response = await request(app)
      .post('/upload/transaction-file')
      .set('Authorization', loginResponse.body.token)
      .attach('file', buffer, 'custom_file_name.png')

    expect(response.statusCode).toBe(400)

    expect(response.body).toEqual({
      message: 'Somente arquivos .txt são aceitos.'
    })
  })

  it('response transaction-upload with file empty file', async () => {
    const buffer = Buffer.from('')

    const loginResponse = await request(app)
      .post('/session/login')
      .send({
        email: 'admin@admin.com',
        password: 'admin'
      })
      .set('Accept', 'application/json')

    const response = await request(app)
      .post('/upload/transaction-file')
      .set('Authorization', loginResponse.body.token)
      .attach('file', buffer, 'custom_file_name.txt')

    expect(response.statusCode).toBe(400)

    expect(response.body).toEqual({
      message: 'Arquivo é obrigatório.'
    })
  })
  it('response transaction-upload size error ', async () => {
    const buffer = Buffer.alloc(500001)

    const loginResponse = await request(app)
      .post('/session/login')
      .send({
        email: 'admin@admin.com',
        password: 'admin'
      })
      .set('Accept', 'application/json')

    const response = await request(app)
      .post('/upload/transaction-file')
      .set('Authorization', loginResponse.body.token)
      .attach('file', buffer, 'custom_file_name.txt')

    expect(response.statusCode).toBe(400)

    expect(response.body).toEqual({
      message: 'Tamanho máximo de 5MB.'
    })
  })
  it('response transaction-upload with wrong file .txt', async () => {
    const loginResponse = await request(app)
      .post('/session/login')
      .send({
        email: 'admin@admin.com',
        password: 'admin'
      })
      .set('Accept', 'application/json')

    const response = await request(app)
      .post('/upload/transaction-file')
      .set('Authorization', loginResponse.body.token)
      .attach('file', buffer, 'custom_file_name.txt')

    expect(response.statusCode).toBe(400)

    expect(response.body).toEqual({
      message: 'Algo deu errado ao tentar fazer o upload'
    })
  })
  it('response transaction-upload with authentication user wrong', async () => {
    const response = await request(app)
      .post('/upload/transaction-file')
      .set(
        'Authorization',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.NBLQ6QL4f-EeJ0fibdljUvnJUgwXA7ZXdcgydTaBUWA'
      )
      .attach('file', buffer, 'custom_file_name.txt')

    expect(response.statusCode).toBe(404)

    expect(response.body).toEqual({
      message: 'Usuário não encontrado'
    })
  })
  it('response success transaction-upload with file .txt', async () => {
    const loginResponse = await request(app)
      .post('/session/login')
      .send({
        email: 'admin@admin.com',
        password: 'admin'
      })
      .set('Accept', 'application/json')

    const response = await request(app)
      .post('/upload/transaction-file')
      .set('Authorization', loginResponse.body.token)
      .attach('file', resolve(`${__dirname}/../../../../sales.txt`))

    const responseTransactionList = await request(app)
      .get('/transaction/list')
      .query({ limit: 50 })
      .set('Authorization', loginResponse.body.token)
      .set('Accept', 'application/json')

    expect(response.statusCode).toBe(200)

    expect(response.body).toEqual({
      message: 'Arquivo enviado com sucesso!'
    })

    expect(responseTransactionList.body.transactions).toHaveLength(20)
  })
})
