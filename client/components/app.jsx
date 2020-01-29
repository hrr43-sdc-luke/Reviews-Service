import React from 'react';
import ReviewList from './ReviewList.jsx';
import PageSelector from './pageSelector.jsx';
import getReviews from '../apiCalls.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: props.reviews,
      reviews: [],
      overallStar: 3.75,
      currPage: 1
    }
  }

  componentDidMount() {
    let URL = window.location.href.split('/');
    let expId = URL[URL.length - 1];
    getReviews(expId, (err, allReviews) => {
      if (err) {
        console.log(err);
      } else {
        let reviews = allReviews.slice((this.state.currPage - 1) * 5, this.state.currPage * 5);
        this.setState({
          allReviews: allReviews,
          reviews: reviews
        })
      }
    });
  }

  render() {

    return (
      <div>
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
    )
  }

}

export default App