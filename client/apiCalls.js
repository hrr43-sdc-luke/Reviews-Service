import axios from 'axios';

const getReviews = (id, callback) => {
  axios.get(`http://18.222.165.232:3007/reviews/${id}`) // This needs to change for AWS/localhost
    .then((reviews) => {
      callback(null, reviews.data);
    })
    .catch((err) => {
      callback(err);
    });
};

export default getReviews;
