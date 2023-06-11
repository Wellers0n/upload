import app from '../../../app'
import database from '../../../database'
import request from 'supertest'

describe('POST /session/login CONTROLLER', () => {
  beforeAll(async () => {
    await database.seed.run({
      specific: 'users_transactions.ts'
    })
  })

  it('response login controller without email', async () => {
    const response = await request(app)
      .post('/session/login')
      .send({
        password: 'admin'
      })
      .set('Accept', 'application/json')

    expect(response.statusCode).toBe(400)

    expect(response.body).toEqual({
      message: 'Email é obrigatório',
      token: null
    })
  })
  it('response login controller without valid email', async () => {
    const response = await request(app)
      .post('/session/login')
      .send({
        email: 'admin@admin',
        password: 'admin'
      })
      .set('Accept', 'application/json')

    expect(response.statusCode).toBe(400)

    expect(response.body).toEqual({
      message: 'Email inválido',
      token: null
    })
  })
  it('response login controller without password', async () => {
    const response = await request(app)
      .post('/session/login')
      .send({
        email: 'admin@admin.com'
      })
      .set('Accept', 'application/json')

    expect(response.statusCode).toBe(400)

    expect(response.body).toEqual({
      message: 'Senha é obrigatória',
      token: null
    })
  })
  it('response invalid login with password wrong', async () => {
    const response = await request(app)
      .post('/session/login')
      .send({
        email: 'admin@admin.com',
        // password don't exist
        password: 'adminn'
      })
      .set('Accept', 'application/json')

    expect(response.statusCode).toBe(400)

    expect(response.body).toEqual({
      message: 'Credenciais inválidas',
      token: null
    })
  })

  it('response invalid login with email wrong', async () => {
    const response = await request(app)
      .post('/session/login')
      .send({
        // email don't exist
        email: 'test@admin.com',
        password: 'adminn'
      })
      .set('Accept', 'application/json')

    expect(response.statusCode).toBe(400)

    expect(response.body).toEqual({
      message: 'Credenciais inválidas',
      token: null
    })
  })

  it('response login with success', async () => {
    const response = await request(app)
      .post('/session/login')
      .send({
        email: 'admin@admin.com',
        password: 'admin'
      })
      .set('Accept', 'application/json')

    expect(response.statusCode).toBe(200)

    expect(response.body.message).toEqual('Login com sucesso!')
    expect(response.body.token).toBeTruthy()
  })
})
