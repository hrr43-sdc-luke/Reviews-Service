const app = require('./app.js');

const port = process.env.PORT || 3007;

app.engine('html', require('ejs').renderFile);

app.get('/:id', (req, res) => {
  res.render('../public/index.html');
});

app.listen(port, () => { console.log(`Listening on port ${port}`); });
