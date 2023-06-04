import db from '../../models'

type ListType = {
  user: { id: number }
}
const List = async ({ user }: ListType) => {
  const commissionPaid = await db.Transactions.sum('amount', {
    where: { user_id: user.id, description: 'Comissão paga' }
  })
  const commissionReceived = await db.Transactions.sum('amount', {
    where: { user_id: user.id, description: 'Comissão recebida' }
  })

  const affiliateSelling = await db.Transactions.sum('amount', {
    where: { user_id: user.id, description: 'Venda afiliado' }
  })

  const producerSale = await db.Transactions.sum('amount', {
    where: { user_id: user.id, description: 'Venda produtor' }
  })

  return {
    commissionReceived: (commissionReceived / 100).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }),
    commissionPaid: (commissionPaid / 100).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }),
    affiliateSelling: (affiliateSelling / 100).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }),
    producerSale: (producerSale / 100).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
  }
}

export default List
