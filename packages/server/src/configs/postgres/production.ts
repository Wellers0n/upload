import { IKeysProps } from './'

export const production = {
  DATABASE_RDS_URL: 'postgres://postgres:postgres@localhost:5431/uploaddb',
  options: {
    dialect: 'postgres',
    pool: {
      max: 100,
      min: 0
    },
    logging: false
  }
} as IKeysProps