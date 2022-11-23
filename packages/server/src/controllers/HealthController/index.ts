import { Request, Response } from 'express'

const HealthController = (request: Request, response: Response) => {
    return response.status(200).json({ error: false, message: 'Server is fine 🔥' })
}

export default HealthController
