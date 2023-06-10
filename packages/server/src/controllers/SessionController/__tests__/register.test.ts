import app from '../../../app'
import request from 'supertest'
import database from '../../../database'

describe('POST /session/register', () => {
  beforeAll(async () => {
    await database.seed.run({
      specific: 'users_transactions.ts'
    })
  })

  it('response register without data', async () => {
    const response = await request(app)
      .post('/session/register')
      .send({})
      .set('Accept', 'application/json')

    expect(response.statusCode).toBe(400)

    expect(response.body).toEqual({
      message: 'Nome é obrigatório',
      token: null
    })
  })
  it('response register without email and password', async () => {
    const response = await request(app)
      .post('/session/register')
      .send({
        name: 'admin'
      })
      .set('Accept', 'application/json')

    expect(response.statusCode).toBe(400)

    expect(response.body).toEqual({
      message: 'Email é obrigatório',
      token: null
    })
  })
  it('response register without valid email', async () => {
    const response = await request(app)
      .post('/session/register')
      .send({
        name: 'admin',
        email: 'admin@admin'
      })
      .set('Accept', 'application/json')

    expect(response.statusCode).toBe(400)

    expect(response.body).toEqual({
      message: 'Email inválido',
      token: null
    })
  })
  it('response register without password', async () => {
    const response = await request(app)
      .post('/session/register')
      .send({
        name: 'admin',
        email: 'admin@admin.com'
      })
      .set('Accept', 'application/json')

    expect(response.statusCode).toBe(400)

    expect(response.body).toEqual({
      message: 'Senha é obrigatória',
      token: null
    })
  })
  it('response register with user already exist', async () => {
    const response = await request(app)
      .post('/session/register')
      .send({
        name: 'admin',
        email: 'admin@admin.com',
        password: 'admin'
      })
      .set('Accept', 'application/json')

    expect(response.statusCode).toBe(409)

    expect(response.body).toEqual({
      message: 'Usuário já existe',
      token: null
    })
  })

  it('response register with success', async () => {
    const response = await request(app)
      .post('/session/register')
      .send({
        name: 'test',
        email: 'test@admin.com',
        password: 'admin'
      })
      .set('Accept', 'application/json')

    expect(response.statusCode).toBe(201)

    expect(response.body.message).toBe('Usuário criado com sucesso!')
    expect(response.body.token).toBeTruthy()
  })
})
