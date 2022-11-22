import moment from 'moment'
import getTransactionType from './getTransactionType'

const transactionFormatting = (transaction: string[]) => {

    return transaction.map((transaction: string) => {
        const type = transaction.slice(0, 1)
        const date = moment(transaction.slice(1, 26)).format("DD/MM/YYYY")
        const product = transaction.slice(26, 56).trim()
        const amount = Number(transaction.slice(57, 66))
        const seller = transaction.slice(66).trim()

        if (transaction) {
            return {
                type,
                date,
                product,
                amount,
                seller,
                ...getTransactionType(type),
            }
        }
    })

}

export default transactionFormatting
