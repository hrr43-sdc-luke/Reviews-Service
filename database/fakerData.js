var faker = require('faker');

var user = {
  experience_id: faker.random.number({min:1, max:100});
  username: faker.name.firstName(),
  user_id:
  date: faker.date.past(2, '2020-02-06');
  stars: faker.random.number({min:0, max:5});
  review: faker.lorem.sentence(),
  image: faker.image.avatar()
};
