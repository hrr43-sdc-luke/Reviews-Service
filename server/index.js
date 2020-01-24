const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3007;

app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.listen(port, () => { console.log(`Listening on port ${port}`)})