const app = require('./app.js');
const port = process.env.PORT || 3007;
const ejs = require('ejs');

app.engine('html', require('ejs').renderFile);

//Placing ejs and render here does not interfere with tesing

app.get('/:id', (req, res) => {
  res.render('../public/index.html');
})

app.listen(port, () => { console.log(`Listening on port ${port}`)})