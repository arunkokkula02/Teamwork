const { Pool } = require('pg')
const pool = new Pool({
  user: 'caleb',
  host: 'localhost',
  database: 'apidb',
  password: 'nyambane123',
  port: 5432,
})

module.exports = pool
