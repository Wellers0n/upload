import { Request, Response } from 'express'
import RegisterServices from "../../services/SessionServices/Register"

const Register = async (request: Request, response: Response) => {
  const { name, email, password } = request.body

  if (!name || !email || !password) {
    return response.status(400).json({ error: true, token: null, message: "Nome, email e senha são obrigatórios" })
  }

  const { token, error, message, status } = await RegisterServices({ name, email, password })

  return response.status(status).json({ error, message, token })
}

export default Register
