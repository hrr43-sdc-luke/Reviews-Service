const { Pool } = require('pg');
// const pgp = require('pg-promise')();
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

// const pgdb = pgp(connectionString);


module.exports = client;
