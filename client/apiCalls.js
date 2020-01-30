import axios from 'axios';

const getReviews = (id, callback) => {
axios.get(`/reviews/${id}`)
.then((reviews) => {
  callback(null, reviews.data);
})
.catch((err) => {
  callback(err);
})
}

export default getReviews;