import { Request, Response } from 'express'
import RegisterServices from '@/services/SessionServices/Register'
import z, { ZodError } from 'zod'

const Register = async (request: Request, response: Response) => {
  try {
    const createUserSchema = z.object({
      name: z.string({
        required_error: 'Nome é obrigatório'
      }),
      email: z
        .string({
          required_error: 'Email é obrigatório'
        })
        .email('Email inválido'),
      password: z.string({
        required_error: 'Senha é obrigatório'
      })
    })

    const { name, email, password } = createUserSchema.parse(request.body)

    if (!name || !email || !password) {
      return response
        .status(400)
        .json({ token: null, message: 'Nome, email e senha são obrigatórios' })
    }

    const { token, message, status } = await RegisterServices({
      name,
      email,
      password
    })

    return response.status(status).json({ message, token })
  } catch (error) {
    if (error instanceof ZodError)
      return response
        .status(400)
        .json({ message: error.errors[0].message, token: null })
  }
}

export default Register
