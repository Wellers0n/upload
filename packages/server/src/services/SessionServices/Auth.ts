import jwt from 'jsonwebtoken'
import db from '../../models'

export async function getUser(token: string | undefined) {
  if (!token) return { user: null }

  try {
    const decodedToken: any = jwt.verify(token, 'batman')

    const user = await db.Users.findOne({ where: { id: decodedToken.id } })

    return user
  } catch (err) {
    return { user: null }
  }
}

type UserType = {
  id: string
}

export function generateToken(user: UserType) {
  return jwt.sign({ id: user?.id }, 'batman')
}
