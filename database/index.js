const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

//create functions to get required info from the db.  see if you can have them coming in descending order by review ID number so the newest is up front.
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
  getExpReviews: getExpReviews
}
