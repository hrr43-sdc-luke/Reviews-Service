const apiCalls = require('../apiCalls.js');
const request = require('supertest');
const express = require('express');

const app = require('../../server/app.js');

describe('getReviews API', () => {
  // const expected = [
  //   {
  //       "id": 112,
  //       "experience_id": 5,
  //       "username": "Cicero",
  //       "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/steynviljoen/128.jpg",
  //       "date": "2020-02-01T08:00:00.000Z",
  //       "stars": 3,
  //       "review": "Eos odit et ad."
  //   }
  // ];
  it('getReviews with an experiece id of 5 should return a array with an object.experience_id of 5', (done) => {
    request(app)
    .get('./reviews/5')
    // .set('Accept', 'application/json')
    .then((response) => {
      expect(response.body[0].experience_id).toBe(5)
      done();
    })
  });
});
