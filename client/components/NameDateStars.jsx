import React from 'react';
import ReviewStars from './ReviewStars.jsx';

function NameDateStars(props) {
  return (
    <div>
      <div>
        <p className="username">{props.review.username}</p>
          <p className="date">{props.review.date}</p>
      </div>
        <ReviewStars stars={props.review.stars} />
    </div>
  )
}

export default NameDateStars;
