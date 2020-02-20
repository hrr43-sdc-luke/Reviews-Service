const cassandra = require('cassandra-driver');

const { distance } = cassandra.types;
const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const hrtime = require('process.hrtime');

require('dotenv').config();

const dataFileName = 'data';
const csvFile = `${dataFileName}.csv`;
const dirPath = path.resolve(__dirname);
const filePath = path.join(dirPath, csvFile);

const client = new cassandra.Client({
  contactPoints: [process.env.CSCONTACTPOINT],
  pooling: {
    coreConnectionsPerHost: {
      [distance.local]: 2,
      [distance.remote]: 1,
    },
  },
  localDataCenter: process.env.CSDATACENTER,
  keyspace: process.env.CSKEYSPACE,
});

const timer = hrtime();

const query = 'INSERT INTO airbnb.reviews(id,experience_id,username,review,date,stars,avatar) VALUES (?, ?, ?, ?, ?, ?, ?);';

fs.createReadStream(filePath)
  .pipe(csv.parse({ headers: true }))
  .on('data', (data) => {
    const {
      id, experience_id, username, review, date, stars, avatar
    } = data;
    const values = [id, experience_id, username, review, date, stars, avatar]
    client.execute(query, values, { prepare: true }, (err) => {
      if (err) {
        console.error(err);
      }
    });
  })
  .on('end', () => {
    console.log('Read finish', hrtime(timer, 's'));
  });
