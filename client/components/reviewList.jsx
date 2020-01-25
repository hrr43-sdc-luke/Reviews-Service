import React from 'react';
import ReviewListItem from './reviewListItem.jsx';
import PageSelector from './pageSelector.jsx';

function ReviewList(props) {
  return (
    <div>
      {props.reviews.map((review, i) =>
      <ReviewListItem key={i} review={review} />
      )}

      <PageSelector />
    </div>
  )
}

export default ReviewList;