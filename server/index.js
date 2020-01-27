const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3007;
const db = require('../database/index.js');
const ejs = require('ejs');

app.engine('html', require('ejs').renderFile);
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/reviews/:id', (req, res) => {
  db.getExpReviews(req.params.id, (err, reviews) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(reviews);
    }
  })
})

app.get('/:id', (req, res) => {
  res.render('../public/index.html');

  // res.render('index.html');//Do I need ejs, or some other templating engine like that for this to work?
})

//write a router that uses a page number and a experience number and a corresponding function on database/index.js to get that group of reviews.



app.listen(port, () => { console.log(`Listening on port ${port}`)})