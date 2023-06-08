import { Knex } from 'knex'
import bcrypt from 'bcryptjs'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
  await knex('users').insert([
    {
      name: 'admin',
      email: 'admin@admin.com',
      password: bcrypt.hashSync('admin', 8)
    },
    {
      name: 'wellerson',
      email: 'wellerson@admin.com',
      password: bcrypt.hashSync('admin', 8)
    }
  ])

  // Deletes ALL existing entries
  await knex('transactions').del()

  // Inserts seed entries
  await knex('transactions').insert([
    {
      user_id: 1,
      type: 1,
      date: '2023-06-07 11:04:34.482246-03',
      product: 'product 1',
      amount: 12000,
      seller: "Vendedor 1",
      description: 'some description here',
      nature: 'nature 1',
      signal: '+'
    },
    {
      user_id: 2,
      type: 2,
      date: '2023-06-07 11:04:34.482246-03',
      product: 'product 2',
      seller: "Vendedor 2",
      amount: 12000,
      description: 'some description here',
      nature: 'nature 2',
      signal: '-'
    },
    {
      user_id: 2,
      type: 3,
      date: '2023-06-07 11:04:34.482246-03',
      product: 'product 3',
      amount: 12000,
      seller: "Vendedor 3",
      description: 'some description here',
      nature: 'nature 3',
      signal: '+'
    }
  ])
}
