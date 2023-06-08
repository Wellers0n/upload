import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const authentication = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authorization = request?.headers?.authorization

  const JWT_SECRET = process.env.JWT_SECRET || 'batman'

  if (authorization) {
    jwt.verify(authorization, JWT_SECRET, (err, decoded) => {
      if (err) {
        return response.status(401).json({
          message: 'Não autorizado!',
          error: true
        })
      }

      // AUTHORIZATION OK!
      next()
    })
  } else {
    return response.status(401).json({
      message: 'Não autorizado!',
      error: true
    })
  }
}
