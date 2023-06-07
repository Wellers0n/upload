import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
  await knex('users').insert([
    { name: 'admin', email: 'admin@admin.com', password: 'admin' },
    {
      name: 'wellerson',
      email: 'wellerson@admin.com',
      password: 'admin'
    }
  ])
}
