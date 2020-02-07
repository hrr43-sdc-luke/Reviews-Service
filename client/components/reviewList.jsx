import React from 'react';
import PropTypes from 'prop-types';
import ReviewListItem from './reviewListItem.jsx';

function ReviewList({ reviews }) {
  return (
    <div>
      <div className="reviewListItems">
        {reviews.map((review, i) => {
          const dateArr = review.date.split('-');
          const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          const monthIdx = Number(dateArr[1]) - 1;
          const month = months[monthIdx];
          const year = review.date.slice(0, 4);
          return (
            <ReviewListItem
              key={review.id}
              review={review}
              idx={i}
              stars={review.stars}
              month={month}
              year={year}
            />
          );
        })}
      </div>
    </div>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReviewList;
