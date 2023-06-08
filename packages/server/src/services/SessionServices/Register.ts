import database from '@/database'
import { generateToken } from './Auth'
import bcrypt from 'bcryptjs'
import { User } from '@/types'

type RegisterType = {
  name: string
  email: string
  password: string
}
const Register = async ({ name, email, password }: RegisterType) => {
  const user = await database<User>('users')
    .where({
      email: email.toLowerCase()
    })
    .first()

  if (user) {
    return {
      status: 400,
      token: null,
      message: 'Usuário já existe'
    }
  }

  const passwordBcrypt = bcrypt.hashSync(password, 8)

  await database('users').insert({
    name,
    email,
    password: passwordBcrypt
  })

  const userCreated = await database<User>('users')
    .where({ email, password: passwordBcrypt })
    .first()

  if (!userCreated)
    return {
      status: 404,
      token: null,
      message: 'Usuário não encontrado!'
    }

  return {
    status: 201,
    token: generateToken(userCreated),
    message: 'Usuário criado com sucesso!'
  }
}

export default Register
