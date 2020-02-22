const fs = require('fs');
const path = require('path');
const copyFrom = require('pg-copy-streams').from;
const hrtime = require('process.hrtime');

const dataFileName = 'data';
const csvFile = `${dataFileName}.csv`;
const dirPath = path.resolve(__dirname);
const filePath = path.join(dirPath, csvFile);

const client = require('./pgdbConnection.js');

client.connect();
let timer;
client.on('connect', () => {
  console.log('Connected to postgres. Please wait a moment while your records are being copied...');
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
