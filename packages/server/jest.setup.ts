import database from './src/database'

beforeAll(async () => await database.migrate.latest())
// if you need to add a handler after calling setupServer for some specific test
// this will remove that handler for the rest of them
// (which is important for test isolation):
afterAll(async () => await database.migrate.down())
