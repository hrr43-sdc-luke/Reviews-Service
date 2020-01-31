import React, { useState } from 'react';

// add logice to show the "line" for key 0-3, but not 4

function ReviewListItemText({ text, idx }) {
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
          {/* <div className="line" /> */}
        </div>
      );
    }
    if (text.length <= 250) {
      return (
        <div>
          <p className="reviewText">
            {text}
          </p>
          {/* <div className="line" /> */}
        </div>
      );
    }
  } else {
    return (
      <div>
        <p className="reviewText">{text}</p>
        {/* <div className="line" /> */}
      </div>
    );
  }
}

export default ReviewListItemText;
