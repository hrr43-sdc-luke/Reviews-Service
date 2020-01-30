import React from 'react';
import ReviewListItemText from './ReviewListItemText.jsx';

function ReviewListItem(props) {
  return (
    <div>
      <img className="avatar" src={props.review.avatar}></img>
      <p className="username">{props.review.username}</p>
      <p className="date">{props.review.date}</p>
      <div>
        <p className="reviewStars">{props.review.stars} &#11089;&#11089;&#11090;&#11090;&#11090;</p>
      </div>
      <ReviewListItemText text={props.review.review} />
    </div>
  )
}

export default ReviewListItem;