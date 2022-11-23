import { ModelAttributes } from 'sequelize/types'

const getProperties = (DataTypes): ModelAttributes => {
    return {
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        },
    }
}

export { getProperties }