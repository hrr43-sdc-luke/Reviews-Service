import React, { useState } from 'react';

function ReviewListItemText(props) {
  const [showMore, setShowMore] = useState(false);
  if (showMore === false) {
    if (props.text.length > 250) {
      return (
        <div>
          <p className="reviewText" >{props.text.slice(0, 250)}... <button className="moreButton" onClick={() => setShowMore(true) }>More+</button></p>
        </div>
      );
    }
    if (props.text.length <= 250) {
      return (
        <div>
          <p className="reviewText" >{props.text} </p>
        </div>
      );
    }
  } else {
    return (
      <div>
        <p className="reviewText" >{props.text}</p>
      </div>
    );
  }
}

export default ReviewListItemText;
