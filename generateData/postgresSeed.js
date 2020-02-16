const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
const copyFrom = require('pg-copy-streams').from;
const hrtime = require('process.hrtime');

require('dotenv').config();

const dataFileName = 'data';
const csvFile = `${dataFileName}.csv`;
const dirPath = path.resolve(__dirname);
const filePath = path.join(dirPath, csvFile);

const user = process.env.PGUSER;
const host = process.env.PGHOST;
const database = process.env.PGDATABASE;
const password = process.env.PGPASSWORD;
const port = process.env.PGPORT;
const connectionString = `postgres://${user}:${password}@${host}:${port}/${database}`;

let timer;
const client = new Client({
  connectionString,
});
client.connect();
client.on('connect', () => {
  console.log('Connected to postgres. Please wait a moment while your recorded are being copied...');
  timer = hrtime();
});
const stream = client.query(copyFrom('COPY reviews(id,experience_id,username,review,date,stars,avatar) FROM STDIN CSV HEADER;'));
const fileStream = fs.createReadStream(filePath);

fileStream.on('error', (error) => {
  console.log(`Error in reading file: ${error}`);
});
stream.on('error', (error) => {
  console.log(`Error in copy command: ${error}`);
});
stream.on('end', () => {
  console.log(`Success! ${csvFile} was copied into postgres in ${hrtime(timer, 's')}seconds`);
  client.end();
});
fileStream.pipe(stream);
