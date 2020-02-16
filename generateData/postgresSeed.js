const { Client } = require('pg');
const cp = require('child_process');
const hrtime = require('process.hrtime');

const cmdLine = 'psql -h localhost -U postgres -f generateData/postgresSchema.sql';

require('dotenv').config();

const user = process.env.PGUSER
const host = process.env.PGHOST
const database = process.env.PGDATABASE
console.log(database)
const password = process.env.PGPASSWORD
const port = process.env.PGPORT
const connectionString = `postgres://${user}:${password}@${host}:${port}/${database}`;
const client = new Client({ connectionString });

const timer = hrtime();
client.connect();
client.on('connect', () => {
  console.log('Postgres is connected');
});
