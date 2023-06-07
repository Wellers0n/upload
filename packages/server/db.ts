import knex, { Knex } from 'knex'
import { newDb } from 'pg-mem'
import knexfile from './knexfile'

const mem = newDb()

const env = process.env.ENVIRONMENT || 'development'

const knexPgMem = mem.adapters.createKnex(0, {
  ...knexfile
}) as Knex

const db = env === 'test' ? knexPgMem : knex(knexfile)

export default db
