import React from 'react';
import ReviewListItemText from './ReviewListItemText.jsx';
import NameDateStars from './NameDateStars.jsx';

function ReviewListItem(props) {
  return (
    <div>
      <img className="avatar" src={props.review.avatar}></img>
      <NameDateStars review={props.review} />
      <ReviewListItemText text={props.review.review} />
    </div>
  );
}

export default ReviewListItem;