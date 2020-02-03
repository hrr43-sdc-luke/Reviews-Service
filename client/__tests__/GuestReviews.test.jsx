import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.1';
import GuestReviews from '../components/GuestReviews.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('GuestReviews', () => {
  it('GuestReviews should render with 0 overAll stars passed in', () => {
    const overallStar = 0;
    const wrapper = shallow(<GuestReviews overallStar={overallStar} />);
    expect(wrapper).toBeDefined();
  });

  it('GuestReviews should render with 1 overAll star passed in', () => {
    const overallStar = 1;
    const wrapper = shallow(<GuestReviews overallStar={overallStar} />);
    expect(wrapper).toBeDefined();
  });

  it('GuestReviews render of 2 stars shoud mach the snapshot', () => {
    const overallStar = 2;
    const wrapper = shallow(<GuestReviews overallStar={overallStar} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('GuestReviews render of 3 stars shoud mach the snapshot', () => {
    const overallStar = 3;
    const wrapper = shallow(<GuestReviews overallStar={overallStar} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('GuestReviews render of 4 stars shoud mach the snapshot', () => {
    const overallStar = 4;
    const wrapper = shallow(<GuestReviews overallStar={overallStar} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('GuestReviews render of 5 stars shoud mach the snapshot', () => {
    const overallStar = 5;
    const wrapper = shallow(<GuestReviews overallStar={overallStar} />);
    expect(wrapper).toMatchSnapshot();
  });
});
