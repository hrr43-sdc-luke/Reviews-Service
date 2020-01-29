import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.1';
import { shallow } from 'enzyme'
import PageSelector  from '../components/PageSelector.jsx';

Enzyme.configure({ adapter: new Adapter() })

describe('PageSelector', () => {
  const wrapper = shallow( <PageSelector currPage={[]} />);

  it('ReviewListItem should have a current page number', () => {
    const page = wrapper.find('.currPage');
    expect(page).toExist();
  });

});