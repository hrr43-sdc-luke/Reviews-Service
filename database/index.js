const dbConnection = require('../generateData/pgdbConnection.js');

dbConnection.connect();

const getAllExpReviews = (expId, callback) => {
  const experienceId = expId;
  const query = 'select * from reviews where experience_id=($1);';
  dbConnection.query(query, [experienceId], (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response.rows);
    }
  });
};

// Need to refactor code below for postgres
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
