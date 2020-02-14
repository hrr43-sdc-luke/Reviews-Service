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

app.post('/reviews/:expId', (req, res) => {
  db.createExpReviews(req.params.expId, req.body, (err, reviewId) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).json(reviewId);
    }
  });
});

app.get('/reviews/:expId', (req, res) => {
  db.getExpReviews(req.params.expId, (err, reviews) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(reviews);
    }
  });
});

app.put('/reviews/:reviewId', (req, res) => {
  db.updateExpReviews(req.params.reviewId, req.body, (err, review) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(review);
    }
  });
});

app.delete('/reviews/:reviewId', (req, res) => {
  db.deleteExpReviews(req.params.reviewId, (err) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200);
    }
  });
});

module.exports = app;
