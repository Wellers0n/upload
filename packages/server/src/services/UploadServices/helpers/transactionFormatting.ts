import getTransactionType from './getTransactionType'

const transactionFormatting = (transaction: string[], user: { id: number }) => {
  return transaction.map((transaction: string) => {
    const type = Number(transaction.slice(0, 1))
    const date = transaction.slice(1, 26)
    const product = transaction.slice(26, 56).trim()
    const amount = Number(transaction.slice(57, 66))
    const seller = transaction.slice(66).trim()

    if (transaction) {
      return {
        user_id: user.id,
        type,
        date,
        product,
        amount,
        seller,
        ...getTransactionType(type)
      }
    }
  })
}

export default transactionFormatting
