const mysql = require('mysql');

const localMysqlConfig = require('./config.js');

const hostURL = process.env.DB_URL || localMysqlConfig.host;
const username = process.env.DB_User || localMysqlConfig.user;
const pw = process.env.DB_PW || localMysqlConfig.password;

const mysqlConfig = {
  host: hostURL,
  user: username,
  password: pw,
  database: 'airbnb',
};

const dbConnection = mysql.createConnection(mysqlConfig);

// dbConnection.connect((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('mySQL connected!');
//   }
// });

const getAllExpReviews = (expId, callback) => {
  const query = 'select * from reviews where experience_id = ?';
  const experienceId = expId;
  dbConnection.query(query, experienceId, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response);
    }
  });
};

module.exports = {
  connection: dbConnection,
  getExpReviews: getAllExpReviews,
};
