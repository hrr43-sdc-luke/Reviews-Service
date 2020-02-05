import React from 'react';
import PropTypes from 'prop-types';
import ReviewList from './ReviewList.jsx';
import PageSelector from './PageSelector.jsx';
import getReviews from '../apiCalls.js';
import GuestReviews from './GuestReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [],
      reviews: [],
      overallStar: 0,
      currPage: 1,
      totalPages: 0,
    };
    this.jumpToPage = this.jumpToPage.bind(this);
  }

  componentDidMount() {
    const { currPage } = this.state;
    const { expId } = this.props;
    getReviews(expId, (err, allRevs) => {
      if (err) {
        console.log(err);
      } else {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.stars;
        const totalStars = allRevs.reduce(reducer, 0);
        const aggStars = (totalStars / allRevs.length).toFixed(2);
        const revs = allRevs.slice((currPage - 1) * 5, currPage * 5);
        const totalPgs = Math.ceil(allRevs.length / 5);
        this.setState({
          allReviews: allRevs,
          reviews: revs,
          overallStar: aggStars,
          totalPages: totalPgs,
        });
      }
    });
  }

  jumpToPage(page) {
    const { allReviews } = this.state;
    const revs = allReviews.slice((page - 1) * 5, page * 5);
    this.setState({
      currPage: page,
      reviews: revs,
    });
  }

  render() {
    const {
      overallStar, reviews, currPage, totalPages,
    } = this.state;
    const { jumpToPage } = this;
    return (
      <div>
        <div className="reviewsModule">
          <GuestReviews overallStar={overallStar} />
          <div className="reviewsRightSide">
            <div>
              <ReviewList reviews={reviews} />
            </div>
            <div className="reviewsPageSelector">
              <PageSelector
                currPage={currPage}
                totalPages={totalPages}
                jumpToPage={jumpToPage}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  expId: PropTypes.string.isRequired,
};

export default App;
