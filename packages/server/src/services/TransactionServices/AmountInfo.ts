import database from '@/database'
import { User } from '@/types'

type AmountType = {
  user: User
}

const List = async ({ user }: AmountType) => {
  const commissionPaid = await database('transactions')
    .sum('amount')
    .where({ user_id: user.id, description: 'Comissão paga' })
    .first()

  const commissionReceived = await database('transactions')
    .sum('amount')
    .where({ user_id: user.id, description: 'Comissão recebida' })
    .first()

  const affiliateSelling = await database('transactions')
    .sum('amount')
    .where({ user_id: user.id, description: 'Venda afiliado' })
    .first()

  const producerSale = await database('transactions')
    .sum('amount')
    .where({ user_id: user.id, description: 'Venda produtor' })
    .first()

  return {
    commissionReceived: (commissionReceived?.sum / 100).toLocaleString(
      'pt-br',
      {
        style: 'currency',
        currency: 'BRL'
      }
    ),
    commissionPaid: (commissionPaid?.sum / 100).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }),
    affiliateSelling: (affiliateSelling?.sum / 100).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }),
    producerSale: (producerSale?.sum / 100).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
  }
}

export default List
