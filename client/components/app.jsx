import React from 'react';
import ReviewList from './ReviewList.jsx';
import PageSelector from './PageSelector.jsx';
import getReviews from '../apiCalls.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: props.reviews,
      reviews: [],
      overallStar: 0,
      currPage: 1
    }
  }

  componentDidMount() {
    getReviews(this.props.expId, (err, allReviews) => {
      if (err) {
      } else {
        let reducer = (accumulator, currentValue) => accumulator + currentValue.stars;
        let totalStars = allReviews.reduce(reducer, 0);
        let aggStars = (totalStars / allReviews.length).toFixed(2);
        let reviews = allReviews.slice((this.state.currPage - 1) * 5, this.state.currPage * 5);
        this.setState({
          allReviews: allReviews,
          reviews: reviews,
          overallStar: aggStars
        })
      }
    });
  }

  render() {

    return (
      <div>
        <div className="reviewsModule">
          <div className="aggRating">
            <h3>Guest Reviews</h3>
            <p>{this.state.overallStar}</p>
          </div>
          <div className="rightSide">
            <div>
            <ReviewList reviews={this.state.reviews} />
            </div>
            <div>
            <PageSelector currPage={this.state.currPage} />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default App