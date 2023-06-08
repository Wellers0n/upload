import * as dotenv from 'dotenv'

dotenv.config()

const knexfile = {
  client: 'pg',
  connection: {
    host: process.env.POSTGRES_HOST || 'localhost',
    port: process.env.POSTGRES_PORT || 5432,
    database: process.env.POSTGRES_DATABASE || 'postgres',
    user: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres'
  },
  pool: {
    max: 100,
    min: 0,
  },
  migrations: {
    directory: './data/migrations'
  },
  seeds: { directory: './data/seeds' }
}

export default knexfile
