import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.1';
import { shallow } from 'enzyme'
import ReviewListItem  from '../components/ReviewListItem.jsx';

Enzyme.configure({ adapter: new Adapter() })

describe('ReviewListItem', () => {
  const wrapper = shallow( <ReviewListItem review={[]} />);

  it('ReviewListItem should have an avatar image', () => {
    const image = wrapper.find('div img');
    expect(image).toExist();
  });

  it('ReviewListItem should have a username', () => {
    const user = wrapper.find('.username');
    expect(user).toExist();
  });

  it('ReviewListItem should have review', () => {
    const text = wrapper.find('.reviewText');
    expect(text).toExist();
  });

  it('ReviewListItem should have a star rating', () => {
    const stars = wrapper.find('.reviewStars');
    expect(stars).toExist();
  });

});

