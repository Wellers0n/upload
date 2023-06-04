import { Model, Sequelize } from 'sequelize'
import { getProperties } from './getProperties'

interface UsersAttributes {
  id: number
  name: string
  email: string
  password: string
  createdAt: string
  updatedAt: string
}

module.exports = (sequelize: Sequelize) => {
  class Users extends Model<UsersAttributes> {
    static associate(models: any): void {
      //
    }
  }

  Users.init(getProperties(), {
    sequelize,
    modelName: 'Users'
  })
  return Users
}
