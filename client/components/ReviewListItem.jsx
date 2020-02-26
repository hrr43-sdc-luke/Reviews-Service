import React from 'react';
import PropTypes from 'prop-types';
import ReviewListItemText from './ReviewListItemText.jsx';
import NameDateStars from './NameDateStars.jsx';

function ReviewListItem({
  review, stars, month, year, idx,
}) {
  return (
    <div className="ReviewListItem">
      <img
        className="reviewAvatar"
        src={review.avatar}
        alt="Smiley face"
      />
      <div className="reviewsNameDateStars">
        <NameDateStars username={review.username} stars={stars} year={year} month={month} />
      </div>
      <ReviewListItemText text={review.review} idx={idx} />
    </div>
  );
}

ReviewListItem.propTypes = {
  review: PropTypes.exact({
    id: PropTypes.number.isRequired,
    experience_id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    review: PropTypes.string.isRequired,
  }).isRequired,
  stars: PropTypes.number.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
};

export default ReviewListItem;
