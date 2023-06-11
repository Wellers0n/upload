import app from '../../../app'
import request from 'supertest'

describe('GET /health', () => {
  it('response health ', async () => {
    const response = await request(app).get('/health')

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({
      error: false,
      message: 'Server is fine ✅'
    })
  })
})
