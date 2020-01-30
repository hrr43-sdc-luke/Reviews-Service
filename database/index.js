const mysql = require('mysql');

const localMysqlConfig = require('./config.js');

const host = process.env.DB_URL || localMysqlConfig.host;
const user = process.env.DB_User || localMysqlConfig.user;
const password = process.env.DB_PW || localMysqlConfig.password;

const mysqlConfig = {
  host: host,
  user: user,
  password: password,
  database: 'airbnb'
};

const connection = mysql.createConnection(mysqlConfig);

connection.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('mySQL connected!');
  }
})

const getExpReviews = (expId, callback) => {
  let query = 'select * from reviews where experience_id = ?';
  let experience_id = expId;
  connection.query(query, experience_id, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response);
    }
  })
};

module.exports = {
  connection: connection,
  getExpReviews: getExpReviews
};