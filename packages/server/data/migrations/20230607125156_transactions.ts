import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema
    .withSchema('public')
    .createTable('transactions', function (table) {
      table.increments('id').primary()
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('id').inTable("users").deferrable('deferred')
      table.integer('type').notNullable()
      table.timestamp('date').notNullable()
      table.string('product').notNullable()
      table.integer('amount').notNullable()
      table.text('description').notNullable()
      table.string('nature').notNullable()
      table.string('signal').notNullable()
      table.timestamps(true, true)
    })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transactions')
}
