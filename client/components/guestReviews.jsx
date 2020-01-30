import React from 'react';

function GuestReviews(props) {
  return (
    <div>
      <div className="aggRating">
        <h3>Guest Reviews</h3>
        <p>{props.overallStar}&#9733;&#9733;</p>
      </div>
    </div>
  )
}

export default GuestReviews;