import React from 'react';

function ReviewListItem(props) {
  return (
    <div>
      <img className="avatar" src={props.review.avatar}></img>
      <p className="username">{props.review.username}</p> <p className="date">{props.review.date}</p>
      <p className="reviewStars">{props.review.stars}</p>

      <p className="reviewText" >{props.review.review}</p>
    </div>
  )
}

export default ReviewListItem;