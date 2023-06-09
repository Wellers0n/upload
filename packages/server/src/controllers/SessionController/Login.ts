import { Request, Response } from 'express'
import LoginServices from '@/services/SessionServices/Login'
import z, { ZodError } from 'zod'

const Login = async (request: Request, response: Response) => {
  try {
    const createUserSchema = z.object({
      email: z
        .string({
          required_error: 'Email é obrigatório'
        })
        .email('Email inválido'),
      password: z.string({
        required_error: 'Senha é obrigatória'
      })
    })

    const { email, password } = createUserSchema.parse(request.body)

    if (!email || !password) {
      return response
        .status(400)
        .json({ message: 'Email e senha são obrigatórios' })
    }

    const { message, token, status } = await LoginServices({ email, password })

    return response.status(status).json({ message, token })
  } catch (error) {
    if (error instanceof ZodError) {
      return response
        .status(400)
        .json({ message: error.errors[0].message, token: null })
    }
  }
}

export default Login
