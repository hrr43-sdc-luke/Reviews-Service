import React from 'react';
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
  }

  componentDidMount() {
    getReviews(this.props.expId, (err, allRevs) => {
      if (err) {
        console.log(err);
      } else {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.stars;
        const totalStars = allRevs.reduce(reducer, 0);
        const aggStars = (totalStars / allRevs.length).toFixed(2);
        const revs = allRevs.slice((this.state.currPage - 1) * 5, this.state.currPage * 5);
        const totalPgs = Math.ceil(allRevs.length / 5)
        this.setState({
          allReviews: allRevs,
          reviews: revs,
          overallStar: aggStars,
          totalPages: totalPgs,
        });
      }
    });
  }

  render() {
    return (
      <div>
        <div className="reviewsModule">
          <GuestReviews overallStar={this.state.overallStar} />
          <div className="rightSide">
            <div>
            <ReviewList reviews={this.state.reviews} />
            </div>
            <div>
            <PageSelector currPage={this.state.currPage} totalPages={this.state.totalPages} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
