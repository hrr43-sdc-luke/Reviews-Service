import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.1';
import ReviewListItem from '../components/ReviewListItem.jsx';

Enzyme.configure({ adapter: new Adapter() });


describe('ReviewListItem', () => {
  const testReview = {
    id: 1,
    experience_id: 5,
    username: 'Bob',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/a1chapone/128.jpg',
    date: '2020-02-01',
    stars: 5,
    review: 'Ut nemo consectetur commodi quia saepe earum. Cupiditate culpa rerum et omnis ipsam tempore aut. Sequi nulla sunt id excepturi aliquid consequatur dolor.',
  };
  const stars = 5;
  const month = 'February';
  const year = '2020';
  const idx = 0;
  const wrapper = shallow(
    <ReviewListItem
      review={testReview}
      stars={stars}
      month={month}
      year={year}
      idx={idx}
    />,
  );

  it('ReviewListItem should render', () => {
    expect(wrapper).toBeDefined();
  });

  it('ReviewListItem snapshot should match shallow render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
