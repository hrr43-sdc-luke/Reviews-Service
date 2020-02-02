import React, { useState } from 'react';

// add logice to show the "line" for key 0-3, but not 4

function ReviewListItemText({ text, idx }) {
  const [showMore, setShowMore] = useState(false);
  if (idx === 4) {
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
  if (showMore === false) {
    if (text.length > 250) {
      return (
        <div>
          <p className="reviewText line">
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
          <p className="reviewText line">
            {text}
          </p>
        </div>
      );
    }
  } else {
    return (
      <div>
        <p className="reviewText line">{text}</p>
      </div>
    );
  }
}

export default ReviewListItemText;
