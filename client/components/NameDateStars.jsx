import React from 'react';
import ReviewStars from './ReviewStars.jsx';

function NameDateStars({ review, month, year, stars }) {
  return (
    <div>
      <div className="nameDate">
        <p className="username">
          {review.username + '·'}
        </p>
        <p className="date">
          {month + ' '}
          {year}
        </p>
      </div>
      <ReviewStars stars={stars} />
    </div>
  );
}

export default NameDateStars;
