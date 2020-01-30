import React, { useState } from 'react';

function ReviewListItemText(props) {
  const [showMore, setShowMore] = useState(false);
  if (showMore === false) {
    return (
      <div>
        <p className="reviewText" >{props.text} <button className="moreButton" onClick={() => setShowMore(true) }>More+</button></p>
      </div>
    )
  } else {
    return (
      <div>
        <p className="reviewText" >{props.text}</p>
      </div>
    )
  }
}

export default ReviewListItemText;