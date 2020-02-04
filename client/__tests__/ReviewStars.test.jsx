import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.1';
import ReviewStars from '../components/ReviewStars.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('PageSelector', () => {
  it('PageSelector snapshot should match shallow render with no stars', () => {
    const stars = 0;
    const wrapper = shallow(
      <ReviewStars
        stars={stars}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('PageSelector snapshot should match shallow render with 1 star', () => {
    const stars = 1;
    const wrapper = shallow(
      <ReviewStars
        stars={stars}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('PageSelector snapshot should match shallow render with 2 stars', () => {
    const stars = 2;
    const wrapper = shallow(
      <ReviewStars
        stars={stars}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('PageSelector snapshot should match shallow render with 3 stars', () => {
    const stars = 3;
    const wrapper = shallow(
      <ReviewStars
        stars={stars}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('PageSelector snapshot should match shallow render with 4 stars', () => {
    const stars = 4;
    const wrapper = shallow(
      <ReviewStars
        stars={stars}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('PageSelector snapshot should match shallow render with 5 stars', () => {
    const stars = 5;
    const wrapper = shallow(
      <ReviewStars
        stars={stars}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
