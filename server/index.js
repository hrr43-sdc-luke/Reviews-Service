const app = require('./app.js');

app.engine('html', require('ejs').renderFile);

const port = process.env.PORT || 3007;

app.get('/:id', (req, res) => {
  res.render('../public/index.html');
});

app.listen(port, () => { console.log(`Listening on port ${port}`); });
