import React from 'react';

function GuestReviews({ overallStar }) {
  if (overallStar < 0.5) {
    return (
      <div>
        <div className="aggRating">
          <h3>Guest Reviews</h3>
          <div className="starsNum">
            {overallStar}
            <p className="aggStars">&#9734;&#9734;&#9734;&#9734;&#9734;</p>
          </div>
        </div>
      </div>
    );
  }
  if (overallStar >= 0.5 && overallStar < 1.5) {
    return (
      <div>
        <div className="aggRating">
          <h3>Guest Reviews</h3>
          <div className="starsNum">
            {overallStar}
            <p className="aggStars" >
              &#9733;&#9734;&#9734;&#9734;&#9734;
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (overallStar >= 1.5 && overallStar < 2.5) {
    return (
      <div>
        <div className="aggRating">
          <h3>Guest Reviews</h3>
          <div className="starsNum">
            {overallStar}
            <p className="aggStars" >&#9733;&#9733;&#9734;&#9734;&#9734;</p>
          </div>
        </div>
      </div>
    );
  }
  if (overallStar >= 2.5 && overallStar < 3.5) {
    return (
      <div>
        <div className="aggRating">
          <h3>Guest Reviews</h3>
          <div className="starsNum">{overallStar}<p className="aggStars" >&#9733;&#9733;&#9733;&#9734;&#9734;</p></div>
        </div>
      </div>
    );
  }
  if (overallStar >= 3.5 && overallStar < 4.5) {
    return (
      <div>
        <div className="aggRating">
          <h3>Guest Reviews</h3>
          <div className="starsNum">{overallStar}<p className="aggStars" >&#9733;&#9733;&#9733;&#9733;&#9734;</p></div>
        </div>
      </div>
    );
  }
  if (overallStar >= 4.5) {
    return (
      <div>
        <div className="aggRating">
          <h3>Guest Reviews</h3>
          <div className="starsNum">{overallStar}<p className="aggStars" >&#9733;&#9733;&#9733;&#9733;&#9733;</p></div>
        </div>
      </div>
    );
  }
}

export default GuestReviews;
