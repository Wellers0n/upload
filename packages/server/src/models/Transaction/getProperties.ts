import { ModelAttributes } from 'sequelize/types'
import { DataTypes } from 'sequelize'

const getProperties = (): ModelAttributes => {
  return {
    type: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    date: {
      allowNull: false,
      type: DataTypes.STRING
    },
    product: {
      allowNull: false,
      type: DataTypes.STRING
    },
    amount: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    seller: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    nature: {
      allowNull: false,
      type: DataTypes.STRING
    },
    signal: {
      allowNull: false,
      type: DataTypes.STRING
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }
}

export { getProperties }
