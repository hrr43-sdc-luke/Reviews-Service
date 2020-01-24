const mysql = require('mysql');
const host = process.env.DB_URL || 'localhost';
const user = process.env.DB_User || 'root';
const password = process.env.DB_PW || '';


module.exports.db = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: 'airbnb'
})