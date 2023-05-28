import db from '../../models'
import { generateToken } from './Auth'
import bcrypt from 'bcryptjs'

type RegisterType = {
  name: string
  email: string
  password: string
}
const Register = async ({ name, email, password }: RegisterType) => {
  const user = await db.Users.findOne({ where: { email: email.toLowerCase() } })

  if (user) {
    return {
      status: 400,
      token: null,
      message: 'Usuário já existe'
    }
  }

  const userCreated = await db.Users.create({
    name,
    email,
    password: bcrypt.hashSync(password, 8)
  })

  return {
    status: 201,
    token: generateToken(userCreated),
    message: 'Usuário criado com sucesso!'
  }
}

export default Register
