const faker = require('faker');
const fs = require('fs');
const hrtime = require('process.hrtime');

const timer = hrtime();
const mockData = require('./MOCK-DATA.json');

const dataFileName = 'med-data';

const writeUsers = fs.createWriteStream(`generateData/${dataFileName}.csv`);
writeUsers.write('id,experience_id,username,review,date,stars,avatar\n', 'utf8');

const noPrimaryRecords = 1000000; // goal is to get 10mil experience records
const noReviewsPerPrimeRecords = 10;
const totalRecords = noPrimaryRecords * noReviewsPerPrimeRecords;
let reviewId = 0;

function writeTenMillionUsers(writer, encoding, callback) {
  function write() {
    let ok = true;
    for (let i = reviewId; i < totalRecords && ok; i += 1) {
      reviewId += 1;
      const itemData = mockData[Math.floor(Math.random() * mockData.length)];
      const {
        userName, date, review,
      } = itemData;
      const avatar = faker.image.avatar()
      const experienceId = Math.floor(Math.random() * noPrimaryRecords) + 1;
      const starNo = Math.floor(Math.random() * (5 - 0 + 1));
      const reviewData = `${reviewId},${experienceId},${userName},${review},${date},${starNo},${avatar}\n`;
      if (i === totalRecords - 1) {
        writer.write(reviewData, encoding, callback);
      } else {
        ok = writer.write(reviewData, encoding);
      }
    }
    if (reviewId < totalRecords) {
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillionUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
  console.log(`${dataFileName}.csv file created. It took ${hrtime(timer, 's')}seconds to complete`);
});
