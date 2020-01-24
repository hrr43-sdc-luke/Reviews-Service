const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3007;
const db = require('../database/index.js');

app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//write the router functions to call the db/index functions
app.get('/:id', (req, res) => {
  db.getExpReviews(req.params.id, (err, reviews) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(reviews);
    }
  })
})

app.listen(port, () => { console.log(`Listening on port ${port}`)})