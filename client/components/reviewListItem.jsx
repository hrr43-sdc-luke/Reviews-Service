import React from 'react';
import ReviewListItemText from './ReviewListItemText.jsx';
import NameDateStars from './NameDateStars.jsx';

function ReviewListItem({ review, month, year }) {
  return (
    <div>
      <img
        className="avatar"
        src={review.avatar}
      />
      <NameDateStars review={review} year={year} month={month} />
      <ReviewListItemText text={review.review} />
    </div>
  );
}

export default ReviewListItem;
