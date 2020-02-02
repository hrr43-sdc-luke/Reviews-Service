import React from 'react';
import PropTypes from 'prop-types';
import ReviewStars from './ReviewStars.jsx';

function NameDateStars({
  username, month, year, stars,
}) {
  return (
    <div>
      <div className="nameDate">
        <p className="username">
          {username}
        </p>
        <div className="date">
          <div className="dot">&#183;</div>
          {month}
          {year}
        </div>
      </div>
      <div className="reviewStars">
        <ReviewStars stars={stars} />
      </div>
    </div>
  );
}

NameDateStars.propTypes = {
  username: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
};

export default NameDateStars;
