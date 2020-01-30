import React from 'react';

function ReviewListItem(props) {
  return (
    <div>
      <img className="avatar" src={props.review.avatar}></img>
      <p className="username">{props.review.username}</p>
      <p className="date">{props.review.date}</p>
      <p className="reviewStars">{props.review.stars} &#11089;&#11089;&#11090;&#11090;&#11090;</p>

      <p className="reviewText" >{props.review.review}</p>
    </div>
  )
}

export default ReviewListItem;