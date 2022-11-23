import { Model } from 'sequelize'
import { getProperties } from './getProperties'

interface UsersAttributes {
    id: number
    name: string,
    email: string,
    password: string,
    createdAt: string
    updatedAt: string
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Users extends Model<UsersAttributes> {
        static associate(models: any): void {
            //
        }
    }
    
    Users.init(getProperties(DataTypes), {
        sequelize,
        modelName: 'Users'
    })
    return Users
}