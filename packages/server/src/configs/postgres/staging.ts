import { IKeysProps } from './'

export const staging = {
  DATABASE_RDS_URL: 'postgresql://postgres:postgres@0.0.0.0:5432/uploaddb',
  options: {
    dialect: 'postgres',
    pool: {
      max: 100,
      min: 0,
      acquire: 10000,
      idle: 20000,
    },
  }
} as IKeysProps