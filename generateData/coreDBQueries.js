const hrtime = require('process.hrtime');
const pgdb = require('./pgdbConnection.js');
const csdb = require('./csdbConnection.js');

pgdb.connect();
// pick a database to test (between 'postgres' and 'cassandra')
const selectedDataBase = 'cassandra';
const noOfQueries = 1;
const reviewId = 33;

async function csExecuteOneAtATime(info, timer) {
  const query = 'SELECT * FROM reviews WHERE id=?;';
  const options = { prepare: true };

  while (info.counter++ < info.totalLength) {
    const params = [reviewId];
    const result = await csdb.execute(query, params, options);
    if (result.rows[0]) {
      await console.log(`${selectedDataBase} query took ${hrtime(timer, 's')}seconds`);
      // return result.rows[0];
    }
  }
}

const getReviews = async (db) => {
  const csdbPromises = new Array(noOfQueries);
  const info = {
    totalLength: noOfQueries,
    counter: 0,
  };

  for (let i = 0; i < noOfQueries; i += 1) {
    const timer = hrtime();

    if (db === 'postgres') {
      pgdb.query('SELECT * FROM reviews WHERE id=($1)', [reviewId], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`${selectedDataBase} query took ${hrtime(timer, 's')}seconds`);
          // return result.rows[0];
        }
      });
    }

    if (db === 'cassandra') {
      csdbPromises[i] = csExecuteOneAtATime(info, timer);
      try {
        // The n promises are going to be resolved when all the executions are completed.
        await Promise.all(csdbPromises);
      } finally {
        await csdb.shutdown();
      }
    }
  }
};

getReviews(selectedDataBase);

module.export = {
  getReviews,
};
