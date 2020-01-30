import React from 'react';
import ReviewStars from './ReviewStars.jsx';

function NameDateStars({ review, month, year}) {
  return (
    <div>
      <div>
        <p className="username">{review.username}</p>
          <p className="date">{month}{year}</p>
      </div>
        <ReviewStars stars={review.stars} />
    </div>
  )
}

export default NameDateStars;
