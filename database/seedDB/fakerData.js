const faker = require('faker');

// need at least 2500 reviews.  can do 200/month for the last 13 months
module.exports.createFakeData = () => {
  const results = [];
  for (var i = 0; i <= 2600; i++) {
    if (i < 201) {
      const user = {
        experience_id: faker.random.number({ min: 1, max: 100 }),
        username: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: '20-02-01',
        stars: faker.random.number({ min: 0, max: 5 }),
        review: faker.lorem.paragraph(),
      };
      results.push(user);
    }
    if (i > 200 && i < 401) {
      const user = {
        experience_id: faker.random.number({ min: 1, max: 100 }),
        username: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: '20-01-01',
        stars: faker.random.number({ min: 0, max: 5 }),
        review: faker.lorem.paragraph(),
      };
      results.push(user);
    }
    if (i > 400 && i < 601) {
      const user = {
        experience_id: faker.random.number({ min: 1, max: 100 }),
        username: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: '19-12-01',
        stars: faker.random.number({ min: 0, max: 5 }),
        review: faker.lorem.paragraph(),
      };
      results.push(user);
    }
    if (i > 600 && i < 801) {
      const user = {
        experience_id: faker.random.number({ min: 1, max: 100 }),
        username: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: '19-11-01',
        stars: faker.random.number({ min: 0, max: 5 }),
        review: faker.lorem.paragraph(),
      };
      results.push(user);
    }
    if (i > 800 && i < 1001) {
      const user = {
        experience_id: faker.random.number({ min: 1, max: 100 }),
        username: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: '19-10-01',
        stars: faker.random.number({ min: 0, max: 5 }),
        review: faker.lorem.paragraph(),
      };
      results.push(user);
    }
    if (i > 1000 && i < 1201) {
      const user = {
        experience_id: faker.random.number({ min: 1, max: 100 }),
        username: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: '19-09-01',
        stars: faker.random.number({ min: 0, max: 5 }),
        review: faker.lorem.paragraph(),
      };
      results.push(user);
    }
    if (i > 1200 && i < 1401) {
      const user = {
        experience_id: faker.random.number({ min: 1, max: 100 }),
        username: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: '19-08-01',
        stars: faker.random.number({ min: 0, max: 5 }),
        review: faker.lorem.paragraph(),
      };
      results.push(user);
    }
    if (i > 1400 && i < 1601) {
      const user = {
        experience_id: faker.random.number({ min: 1, max: 100 }),
        username: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: '19-07-01',
        stars: faker.random.number({ min: 0, max: 5 }),
        review: faker.lorem.paragraph(),
      };
      results.push(user);
    }
    if (i > 1600 && i < 1801) {
      const user = {
        experience_id: faker.random.number({ min: 1, max: 100 }),
        username: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: '19-06-01',
        stars: faker.random.number({ min: 0, max: 5 }),
        review: faker.lorem.paragraph(),
      };
      results.push(user);
    }
    if (i > 1800 && i < 2001) {
      const user = {
        experience_id: faker.random.number({ min: 1, max: 100 }),
        username: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: '19-05-01',
        stars: faker.random.number({ min: 0, max: 5 }),
        review: faker.lorem.paragraph(),
      };
      results.push(user);
    }
    if (i > 2000 && i < 2201) {
      const user = {
        experience_id: faker.random.number({ min: 1, max: 100 }),
        username: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: '19-04-01',
        stars: faker.random.number({ min: 0, max: 5 }),
        review: faker.lorem.paragraph(),
      };
      results.push(user);
    }
    if (i > 2200 && i < 2401) {
      const user = {
        experience_id: faker.random.number({ min: 1, max: 100 }),
        username: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: '19-03-01',
        stars: faker.random.number({ min: 0, max: 5 }),
        review: faker.lorem.paragraph(),
      };
      results.push(user);
    }
    if (i > 2400) {
      const user = {
        experience_id: faker.random.number({ min: 1, max: 100 }),
        username: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: '19-02-01',
        stars: faker.random.number({ min: 0, max: 5 }),
        review: faker.lorem.paragraph(),
      };
      results.push(user);
    }
  }
  return results;
}
