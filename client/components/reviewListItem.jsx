import React from 'react';

function ReviewListItem(props) {
  return (
    <div>
      <img className="avatar" src={props.review.avatar}></img>
      <h4>{props.review.username}</h4> <p>{props.review.date}</p>
      <p>{props.review.stars}</p>

      <p className="reviewText" >{props.review.review}</p>
    </div>
  )
}

export default ReviewListItem;