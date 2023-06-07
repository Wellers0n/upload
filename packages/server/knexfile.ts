import * as dotenv from 'dotenv'

dotenv.config()

// Update with your config settings.

const knexfile = {
  client: 'pg',
  connection: {
    port: process.env.POSTGRES_PORT || 5432,
    host: process.env.POSTGRES_HOST || 'localhost',
    database: process.env.POSTGRES_DATABASE || 'postgres',
    user: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: './data/migrations'
  },
  seeds: { directory: './data/seeds' }
}

export default knexfile
