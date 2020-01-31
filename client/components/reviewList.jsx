import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';

function ReviewList({ reviews }) {
  return (
    <div>
      <div className="reviewListItems">
        {reviews.map((review, i) => {
          const dateArr = review.date.split('-');
          const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          const monthIdx = parseInt(dateArr[1]) - 1;
          const month = months[monthIdx];
          const year = review.date.slice(0, 4);
          return <ReviewListItem key={i} review={review} month={month} year={year} />;
        })}
      </div>
    </div>
  );
}

export default ReviewList;
