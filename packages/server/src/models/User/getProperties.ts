import {  ModelAttributes } from 'sequelize/types'
import { DataTypes } from 'sequelize'


const getProperties = (): ModelAttributes => {
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