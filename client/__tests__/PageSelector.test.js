import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.1';
import { shallow } from 'enzyme'
import PageSelector  from '../components/PageSelector.jsx';

Enzyme.configure({ adapter: new Adapter() })

describe('PageSelector', () => {
  const currPage = 1;
  const totalPages = 8;
  const jumpToPage = () => {};
  const wrapper = shallow( <PageSelector currPage={currPage} totalPages={totalPages} jumpToPage={jumpToPage} />);

  it('PageSelector should render', () => {
    expect(wrapper).toBeDefined();
  });

  it('PageSelector snapshot should match shallow render', () => {
    expect(wrapper).toMatchSnapshot()
  });
});