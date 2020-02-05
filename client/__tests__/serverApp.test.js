const request = require('supertest');
const app = require('../../server/app.js');

describe('GET reviews API route', () => {
  it('Should get an array of objects with exp_ids of 5 with GET req to /reviews/5', (done) => {
    request(app).get('/reviews/5')
      .then((response) => {
        const randNum = Math.floor(Math.random() * (response.body.length - 1));
        expect(response.body[randNum].experience_id).toBe(5);
        done();
      });
  });

  it('Should get a 200 response with GET req to /reviews/:id', (done) => {
    request(app).get('/reviews/5')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
