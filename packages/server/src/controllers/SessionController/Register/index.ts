import { Request, Response } from 'express'
import SessionServices from "../../../services/SessionServices"

const Register = async (request: Request, response: Response) => {
  const { name, email, password } = request.body

  if (!name || !email || !password) {
    return response.status(400).json({ error: true, token: null, message: "Name, email and password is required" })
  }

  const { token, error, message, status } = await SessionServices.Register({ name, email, password })

  return response.status(status).json({ error, message, token })
}

export default Register
