const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const db = require('../database/index.js');

const app = express();

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('html', ejs.renderFile);

app.get('/:id', (req, res) => {
  res.render('../public/index.html');
});

app.get('/reviews/:id', (req, res) => {
  db.getExpReviews(req.params.id, (err, reviews) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(reviews);
    }
  });
});

app.post('/review/', (req, res) => {
  db.createExpReview(req.body, (err, reviewId) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).json(reviewId);
    }
  });
});

app.get('/review/:reviewId', (req, res) => {
  db.getExpReview(req.params.reviewId, (err, reviews) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(reviews);
    }
  });
});

app.put('/review/:reviewId', (req, res) => {
  db.updateExpReview(req.params.reviewId, req.body, (err, review) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(review);
    }
  });
});

app.delete('/review/:reviewId', (req, res) => {
  db.deleteExpReview(req.params.reviewId, (err) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200);
    }
  });
});

module.exports = app;
