import React from 'react';

function ReviewListItem(props) {
  return (
    <div>
      <img className="avatar" src={props.review.avatar}></img>
      <h4 className="username">{props.review.username}</h4> <p>{props.review.date}</p>
      <h4 className="reviewStars">{props.review.stars}</h4>

      <p className="reviewText" >{props.review.review}</p>
    </div>
  )
}

export default ReviewListItem;