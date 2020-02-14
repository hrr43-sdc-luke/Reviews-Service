const mysql = require('mysql');

const hostURL = process.env.DB_URL || 'localhost';
const username = process.env.DB_User || 'root';
const pw = process.env.DB_PW || '';

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
  dbConnection.query(query, expId, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response);
    }
  });
};

const createExpReviews = (expId, reviewsData, callback) => {
  const reviews = { ...reviewsData };
  reviews.experience_id = expId;
  const query = 'INSERT INTO reviews SET ?';
  dbConnection.query(query, reviews, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response.insertId);
    }
  });
};

const updateExpReviews = (reviewId, updateData, callback) => {
  const reviews = { ...updateData };
  const updateQuery = `UPDATE reviews SET ? WHERE id=${reviewId}`;
  const selectReviewQuery = `SELECT * FROM reviews WHERE id=${reviewId}`;
  dbConnection.query(updateQuery, reviews, (updateErr) => {
    if (updateErr) {
      callback(updateErr);
    } else {
      dbConnection.query(selectReviewQuery, (selectReviewErr, response) => {
        if (selectReviewErr) {
          callback(selectReviewErr);
        } else {
          callback(null, response);
        }
      });
    }
  });
};

const deleteExpReviews = (reviewId, callback) => {
  const query = `DELETE FROM reviews WHERE id=${reviewId}`
  dbConnection.query(query, (err, response) => {
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
  createExpReviews,
  updateExpReviews,
  deleteExpReviews,
};
