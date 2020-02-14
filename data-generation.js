const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');

const noPrimaryRecords = 10; // goal is to get 10mil experience records
const noReviewsPerPrimeRecords = 10;
let reviewId = 0;

const csvWriter = createCsvWriter({
  path: 'database/tenItems.csv',
  header: [
    { id: 'id', title: 'id' },
    { id: 'experience_id', title: 'experience_id' },
    { id: 'username', title: 'username' },
    { id: 'avatar', title: 'avatar' },
    { id: 'date', title: 'date' },
    { id: 'stars', title: 'stars' },
    { id: 'review', title: 'review' },
  ],
});

const records = [];
for (let i = 0; i < noPrimaryRecords; i += 1) {
  for (let j = 0; j < noReviewsPerPrimeRecords; j += 1) {
    reviewId += 1;
    const date = faker.date.recent(90);
    const strDate = JSON.stringify(date).split('T')[0].slice(1);
    const reviewData = {
      id: reviewId,
      experience_id: i + 1,
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
      date: strDate,
      stars: faker.random.number({ min: 0, max: 5 }),
      review: faker.lorem.paragraph(),
    };
    records.push(reviewData);
  }
}

csvWriter.writeRecords(records)
  .then(() => {
    console.log('...Done');
  });
