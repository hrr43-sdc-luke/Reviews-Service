const { Pool } = require('pg');

require('dotenv').config();

const user = process.env.PGUSER;
const host = process.env.PGHOST;
const database = process.env.PGDATABASE;
const password = process.env.PGPASSWORD;
const port = process.env.PGPORT;
const connectionString = `postgres://${user}:${password}@${host}:${port}/${database}`;


const client = new Pool({
  connectionString,
});

module.exports = client;
