import { Request, Response } from 'express'

const HealthController = (request: Request, response: Response) => {
  try {
    return response
      .status(200)
      .json({ error: false, message: 'Server is fine ✅' })
  } catch (error) {
    return response
      .status(400)
      .json({ error: false, message: 'Server is down 🔥' })
  }
}

export default HealthController
