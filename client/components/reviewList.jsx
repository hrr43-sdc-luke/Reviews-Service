import React from 'react';
import ReviewListItem from './reviewListItem.jsx';

function ReviewList(props) {
  return (
    <div>
      {props.reviews.map((review, i) =>
      <ReviewListItem key={i} review={review} />
      )}

      <div>{props.currPage}</div>
    </div>
  )
}

export default ReviewList;