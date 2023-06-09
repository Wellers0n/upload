import app from '../../../app'
import request from 'supertest'

describe('POST /session/register CONTROLLER', () => {
  it('response register controller without data', async () => {
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
  it('response register controller without email and password', async () => {
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
  it('response register controller without email', async () => {
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
  it('response register controller without password', async () => {
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
})
