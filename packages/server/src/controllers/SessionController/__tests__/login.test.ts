import app from '../../../app'
import request from 'supertest'

describe('POST /session/login CONTROLLER', () => {
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
})
