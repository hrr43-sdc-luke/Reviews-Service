const mysql = require('mysql');
const mysqlConfig = require('../config.js');
const fakerData = require('./fakerData.js');

const connection = mysql.createConnection(mysqlConfig);

const sampleData = fakerData.createFakeData();

const seedDB = () => {
  for (let i = 0; i < sampleData.length; i += 1) {
    const query = 'insert into reviews(experience_id, username, avatar, date, stars, review) values(?, ?, ?, ?, ?, ?)';
    const values = [sampleData[i].experience_id, sampleData[i].username, sampleData[i].avatar, sampleData[i].date, sampleData[i].stars, sampleData[i].review];
    connection.query(query, values, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        console.log(response);
      }
    });
  }
};

seedDB();
