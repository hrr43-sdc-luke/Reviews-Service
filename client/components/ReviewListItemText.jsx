import React, { useState } from 'react';

function ReviewListItemText({ text }) {
  const [showMore, setShowMore] = useState(false);
  if (showMore === false) {
    if (text.length > 250) {
      return (
        <div>
          <p className="reviewText">
            {text.slice(0, 250)}
            ...
            <button
              className="moreButton"
              type="button"
              onClick={() => setShowMore(true)}
            >
              +More
            </button>
          </p>
        </div>
      );
    }
    if (text.length <= 250) {
      return (
        <div>
          <p className="reviewText">
            {text}
          </p>
        </div>
      );
    }
  } else {
    return (
      <div>
        <p className="reviewText">{text}</p>
      </div>
    );
  }
}

export default ReviewListItemText;
