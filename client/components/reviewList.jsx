import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';

function ReviewList(props) {
  return (
    <div>
      <div className="reviewListItems">
        {props.reviews.map((review, i) =>
        <ReviewListItem key={i} review={review} />,
        )}
      </div>
    </div>
  );
}

export default ReviewList;
