import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16.1';
import ReviewList from '../components/ReviewList.jsx';

Enzyme.configure({ adapter: new Adapter() })

describe("ReviewList", () => {
  const wrapper = shallow(<ReviewList reviews={[]} />)
  it('ReviewList should render review list items', () => {
    const review = wrapper.find('.reviewListItems');
    expect(review).toExist();
  });

})
