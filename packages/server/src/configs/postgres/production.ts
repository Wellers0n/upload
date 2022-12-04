import { IKeysProps } from './'

export const production = {
  DATABASE_RDS_URL: 'postgresql://postgres:postgres@localhost:5432/uploaddb',
  options: {
    dialect: 'postgres',
    pool: {
      max: 100,
      min: 0,
      acquire: 10000,
      idle: 20000,
    },
    logging: false
  }
} as IKeysProps