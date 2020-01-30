
const getReviews = (id, callback) => {
fetch(`/reviews/${id}`)
.then((response) => {
  return response.json();
})
.then((reviews) => {
  callback(null, reviews);
})
.catch((err) => {
  callback(err);
})
}

module.exports = getReviews;