const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const hrtime = require('process.hrtime');

const dataFileName = 'small-data';
const csvFile = `${dataFileName}.csv`;
const dirPath = path.resolve(__dirname);
const filePath = path.join(dirPath, csvFile);

const client = require('./csdbConnection.js');

const timer = hrtime();

const query = 'INSERT INTO airbnb.reviews(id,experience_id,username,review,date,stars,avatar) VALUES (?, ?, ?, ?, ?, ?, ?);';

fs.createReadStream(filePath)
  .pipe(csv.parse({ headers: true }))
  .on('data', (data) => {
    const {
      id, experience_id, username, review, date, stars, avatar,
    } = data;
    const values = [id, experience_id, username, review, date, stars, avatar];
    client.execute(query, values, { prepare: true }, (err) => {
      if (err) {
        console.error(err);
      }
    });
  })
  .on('end', () => {
    console.log(`Success! ${csvFile} was copied into cassandra in ${hrtime(timer, 's')}seconds`);
  });
