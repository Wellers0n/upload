import { DataTypes, Sequelize, Model } from 'sequelize'
import { getProperties } from './getProperties'

interface TransactionsAttributes {
  id: number
  type: number
  date: string
  product: string
  amount: number
  seller: string
  description: string
  nature: string
  signal: string
  createdAt: string
  updatedAt: string
}

module.exports = (sequelize: Sequelize) => {
  class Transactions extends Model<TransactionsAttributes> {
    static associate(models: any): void {
      //
    }
  }

  Transactions.init(getProperties(), {
    sequelize,
    modelName: 'Transactions'
  })
  return Transactions
}
