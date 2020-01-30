import React from 'react';

function GuestReviews(props) {
  if (props.overallStar < 0.5) {
    return (
      <div>
        <div className="aggRating">
          <h3>Guest Reviews</h3>
          <div className="starsNum">
            {props.overallStar}
            <p>&#9734;&#9734;&#9734;&#9734;&#9734;</p>
          </div>
        </div>
      </div>
    );
  } else if (props.overallStar < 1.5) {
    return (
      <div>
        <div className="aggRating">
          <h3>Guest Reviews</h3>
          <p className="starsNum">{props.overallStar}<p>&#9733;&#9734;&#9734;&#9734;&#9734;</p></p>
        </div>
      </div>
    );
  } else if (props.overallStar < 2.5) {
    return (
      <div>
        <div className="aggRating">
          <h3>Guest Reviews</h3>
          <div className="starsNum">
            {props.overallStar}
            <p>&#9733;&#9733;&#9734;&#9734;&#9734;</p>
          </div>
        </div>
      </div>
    );
  } else if (props.overallStar < 3.5) {
    return (
      <div>
        <div className="aggRating">
          <h3>Guest Reviews</h3>
          <p className="starsNum">{props.overallStar}<p>&#9733;&#9733;&#9733;&#9734;&#9734;</p></p>
        </div>
      </div>
    );
  } else if (props.overallStar < 4.5) {
    return (
      <div>
        <div className="aggRating">
          <h3>Guest Reviews</h3>
          <p className="starsNum">{props.overallStar}<p>&#9733;&#9733;&#9733;&#9733;&#9734;</p></p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="aggRating">
          <h3>Guest Reviews</h3>
          <p className="starsNum">{props.overallStar}<p>&#9733;&#9733;&#9733;&#9733;&#9733;</p></p>
        </div>
      </div>
    );
  }
}

export default GuestReviews;
