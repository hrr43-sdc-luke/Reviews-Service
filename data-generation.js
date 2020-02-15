const faker = require('faker');
const fs = require('fs');
const hrtime = require('process.hrtime');

const timer = hrtime();

const writeUsers = fs.createWriteStream('database/lrg-data.csv');
writeUsers.write('id,experience_id,username,avatar,date,stars,review\n', 'utf8');

const noPrimaryRecords = 10000000; // goal is to get 10mil experience records
const noReviewsPerPrimeRecords = 10;
const totalRecords = noPrimaryRecords * noReviewsPerPrimeRecords;
let reviewId = 0;

function writeTenMillionUsers(writer, encoding, callback) {
  function write() {
    let ok = true;
    for (let i = reviewId; i < totalRecords && ok; i += 1) {
      reviewId += 1;
      const experienceId = Math.floor(Math.random() * noPrimaryRecords);
      const starMinMax = { min: 0, max: 5 };
      const date = faker.date.recent(90);
      const strDate = JSON.stringify(date).split('T')[0].slice(1);
      const reviewData = `${reviewId},${experienceId},${faker.internet.userName()},${faker.image.avatar()},${strDate},${faker.random.number(starMinMax)},${faker.lorem.paragraph()}\n`;
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
  console.log(`CSV file created. It took ${hrtime(timer, 's')}seconds to complete`);
});
