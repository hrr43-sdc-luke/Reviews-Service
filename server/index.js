const app = require('./app.js');
const port = process.env.PORT || 3007;


app.listen(port, () => { console.log(`Listening on port ${port}`)})