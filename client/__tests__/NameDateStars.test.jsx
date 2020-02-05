import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.1';
import NameDateStars from '../components/NameDateStars.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('NameDateStars', () => {
  it('NameDateStars snapshot should match shallow render', () => {
    const username = 'Bob';
    const month = 'February';
    const year = '2020';
    const stars = 4;
    const wrapper = shallow(
      <NameDateStars
        username={username}
        month={month}
        year={year}
        stars={stars}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
