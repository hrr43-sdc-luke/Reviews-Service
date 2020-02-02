import React from 'react';

function ReviewStars({ stars }) {
  if (stars < 0.5) {
    return (
      <div>
        <p>&#11090;&#11090;&#11090;&#11090;&#11090;</p>
      </div>
    );
  }
  if (stars >= 0.5 && stars < 1.5) {
    return (
      <div>
        <p>&#11089;&#11090;&#11090;&#11090;&#11090;</p>
      </div>
    );
  }
  if (stars >= 1.5 && stars < 2.5) {
    return (
      <div>
        <p>&#11089;&#11089;&#11090;&#11090;&#11090;</p>
      </div>
    );
  }
  if (stars >= 2.5 && stars < 3.5) {
    return (
      <div>
        <p>&#11089;&#11089;&#11089;&#11090;&#11090;</p>
      </div>
    );
  }
  if (stars >= 3.5 && stars < 4.5) {
    return (
      <div>
        <p>&#11089;&#11089;&#11089;&#11089;&#11090;</p>
      </div>
    );
  }
  if (stars >= 4.5) {
    return (
      <div>
        <p>&#11089;&#11089;&#11089;&#11089;&#11089;</p>
      </div>
    );
  }
}

export default ReviewStars;
