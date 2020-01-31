import React from 'react';
import ReviewList from './ReviewList.jsx';
import PageSelector from './PageSelector.jsx';
import getReviews from '../apiCalls.jsx';
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
    const { currentReviews } = this;
    const revs = currentReviews(page);
    this.setState({
      currPage: page,
      reviews: revs,
    });
  }

  currentReviews(currPage) {
    const { allReviews } = this.state;
    const revs = allReviews.slice((currPage - 1) * 5, currPage * 5);
    this.setState({
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
          <div className="rightSide">
            <div>
              <ReviewList reviews={reviews} />
            </div>
            <div>
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

export default App;
