import React from 'react';

function GuestReviews(props) {
  if (props.overallStar < .5) {
    return (
      <div>
        <div className="aggRating">
          <h3>Guest Reviews</h3>
          <p>{props.overallStar}&#9734;&#9734;&#9734;&#9734;&#9734;</p>
        </div>
      </div>
    )
  } else if (props.overallStar < 1.5) {
    return (
      <div>
        <div className="aggRating">
          <h3>Guest Reviews</h3>
          <p>{props.overallStar}&#9733;&#9734;&#9734;&#9734;&#9734;</p>
        </div>
      </div>
    )
  } else if (props.overallStar < 2.5) {
    return (
      <div>
        <div className="aggRating">
          <h3>Guest Reviews</h3>
          <p>{props.overallStar}&#9733;&#9733;&#9734;&#9734;&#9734;</p>
        </div>
      </div>
    )
  } else if (props.overallStar < 3.5) {
    return (
      <div>
        <div className="aggRating">
          <h3>Guest Reviews</h3>
          <p>{props.overallStar}&#9733;&#9733;&#9733;&#9734;&#9734;</p>
        </div>
      </div>
    )
  } else if (props.overallStar < 4.5) {
    return (
      <div>
        <div className="aggRating">
          <h3>Guest Reviews</h3>
          <p>{props.overallStar}&#9733;&#9733;&#9733;&#9733;&#9734;</p>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className="aggRating">
          <h3>Guest Reviews</h3>
          <p>{props.overallStar}&#9733;&#9733;&#9733;&#9733;&#9733;</p>
        </div>
      </div>
    )
  }
}

export default GuestReviews;