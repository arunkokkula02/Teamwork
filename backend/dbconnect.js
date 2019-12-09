const { Pool } = require('pg')
const pool = new Pool({
  user: 'caleb',
  host: 'localhost',
  database: 'employeedb',
  password: 'nyambane123',
  port: 5432,
})

module.exports = pool
