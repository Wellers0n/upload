import jwt from 'jsonwebtoken'
import database from '@/database'
import { User } from '@/types'

export async function getUser(token: string | undefined) {
  if (!token) return

  try {
    const decodedToken: any = jwt.verify(token, 'batman')

    const user = await database<User>('users')
      .where({ id: decodedToken.id })
      .first()

    return user
  } catch (err) {
    return
  }
}

export function generateToken(user: User) {
  return jwt.sign({ id: user?.id }, 'batman')
}
