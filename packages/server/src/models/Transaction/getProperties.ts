import { ModelAttributes } from 'sequelize/types'

const getProperties = (DataTypes): ModelAttributes => {
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
            type: DataTypes.INTEGER,
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
    }
}

export { getProperties }