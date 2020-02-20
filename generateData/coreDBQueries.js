const hrtime = require('process.hrtime');
const QueryStream = require('pg-query-stream');
const JSONStream = require('JSONStream');
const pgdb = require('./pgdbConnection.js');
const csdb = require('./csdbConnection.js');

// pick a database to test (between 'postgres' and 'cassandra')
const selectedDataBase = 'cassandra';
const noOfQueries = 1000;

const getReviews = async (db) => {
  const logTime = (timer) => {
    console.log(`${noOfQueries} ${selectedDataBase} query; about ${hrtime(timer, 's').toFixed(5)}s per query`);
  };

  if (db === 'postgres') {
    pgdb.connect((err, client) => {
      let timer;
      if (err) throw err;
      const query = new QueryStream('SELECT * FROM reviews WHERE id>0 AND id<=($1)', [noOfQueries]);
      client.query(query)
        .on('end', () => {
          client.end();
          logTime(timer);
        })
        // .pipe(JSONStream.stringify());
        .on('data', (data) => {
          // console.log(data)
          // start timer when data received
          timer = hrtime();
        })
    });
  }

  if (db === 'cassandra') {
    const query = 'SELECT * FROM reviews LIMIT ?';
    let timer;
    csdb.stream(query, [noOfQueries], { prepare: true })
      // .pipe(JSONStream.stringify())
      .on('data', (data) => {
        // console.log(data)
        // start timer when data received
        timer = hrtime();
      })
      .on('end', () => {
        logTime(timer);
        csdb.shutdown();
      });
  }
};

getReviews(selectedDataBase);

module.export = {
  getReviews,
};
