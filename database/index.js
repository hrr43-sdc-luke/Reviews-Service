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
  const experienceId = expId;
  dbConnection.query(query, experienceId, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response);
    }
  });
};

const createExpReview = (newReviews, callback) => {
  const query = 'INSERT INTO reviews SET ?';
  dbConnection.query(query, newReviews, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response.insertId);
    }
  });
};

const getExpReview = (reviewId, callback) => {
  const query = 'SELECT * FROM reviews WHERE id = ?';
  dbConnection.query(query, reviewId, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response);
    }
  });
};
const updateExpReview = (reviewId, updateData, callback) => {
  const updateQuery = `UPDATE reviews SET ? WHERE id=${reviewId}`;
  const selectReviewQuery = `SELECT * FROM reviews WHERE id=${reviewId}`;
  dbConnection.query(updateQuery, updateData, (updateErr) => {
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

const deleteExpReview = (reviewId, callback) => {
  const query = `DELETE FROM reviews WHERE id=${reviewId}`;
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
  createExpReview,
  getExpReview,
  updateExpReview,
  deleteExpReview,
};
