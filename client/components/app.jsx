import React from 'react';
import ReviewList from './reviewList.jsx';
import PageSelector from './pageSelector.jsx';
import getReviews from '../apiCalls.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: props.reviews,
      overallStar: 3.75,
      currPage: 1
    }
  }


  componentDidMount() {
    let URL = window.location.href.split('/');
    let expId = URL[URL.length - 1];
    getReviews(expId, (err, reviews) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          allReviews: reviews
        })
      }
    });
  }

  render() {
    let reviews = this.state.allReviews.slice((this.state.currPage - 1) * 5, this.state.currPage * 5);

    return (
      <div>
        <div className="aggRating">
          <h3>Guest Reviews</h3>
          <p>{this.state.overallStar}</p>
        </div>
        <div className="rightSide">
          <div>
          <ReviewList reviews={reviews} />
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