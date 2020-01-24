const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const fakerData = require('./fakerData.js');

const connection = mysql.createConnection(mysqlConfig);

//write a function to insert all of the faker data into the DB

const sampleData = [
  {
    experience_id: 4,
    username: 'Bob',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adamnac/128.jpg',
    date: '20-01-01',
    stars: 5,
    review: 'blah blibidy blah'
  },
  {
    experience_id: 4,
    username: 'Jane',
    avatar:  'https://s3.amazonaws.com/uifaces/faces/twitter/millinet/128.jpg',
    date: '20-02-01',
    stars: 4,
    review: 'blah blibidy blah blah blah'
  }
]

const seedDB = () => {
  for (var i = 0; i < sampleData.length; i++) {
    let query = 'insert into reviews(experience_id, username, avatar, date, stars, review) values(?, ?, ?, ?, ?, ?)'
    let values = [sampleData[i].experience_id, sampleData[i].username, sampleData[i].avatar, sampleData[i].date, sampleData[i].stars, sampleData[i].review];
    connection.query(query, values, (err, response) => {
      if (err) {
      console.log(err);
      } else {
        console.log(response);
      }
    })
  }
}

seedDB();