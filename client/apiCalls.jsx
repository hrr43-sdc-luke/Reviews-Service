
const getReviews = (id, callback) => {
fetch(`http://localhost:3007/reviews/${id}`)
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

export default getReviews;