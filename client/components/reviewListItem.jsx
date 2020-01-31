import React from 'react';
import ReviewListItemText from './ReviewListItemText.jsx';
import NameDateStars from './NameDateStars.jsx';

function ReviewListItem({
  review, stars, month, year, idx,
}) {
  return (
    <div className="ReviewListItem">
      <img
        className="avatar"
        src={review.avatar}
        alt="Smiley face"
      />
      <NameDateStars review={review} stars={stars} year={year} month={month} />
      <ReviewListItemText text={review.review} idx={idx} />
    </div>
  );
}

export default ReviewListItem;
