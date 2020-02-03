import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.1';
import PageSelector from '../components/PageSelector.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('PageSelector', () => {
  it('PageSelector snapshot should match shallow render with no pages of reviews', () => {
    const currPage = 1;
    const totalPages = 0;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('PageSelector snapshot should match shallow render with 1 page of reviews', () => {
    const currPage = 1;
    const totalPages = 1;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('PageSelector should render when on page 1 with 2 total pages', () => {
    const currPage = 1;
    const totalPages = 2;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toBeDefined();
  });

  it('PageSelector should render when on page 1 with 3 total pages', () => {
    const currPage = 1;
    const totalPages = 3;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toBeDefined();
  });

  it('PageSelector should render when on page 1 with 4 total pages', () => {
    const currPage = 1;
    const totalPages = 4;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toBeDefined();
  });

  it('PageSelector snapshot should match shallow render with current page of 1 and 8 total pages', () => {
    const currPage = 1;
    const totalPages = 8;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('PageSelector should render when on page 2 with 2 total pages', () => {
    const currPage = 2;
    const totalPages = 2;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toBeDefined();
  });

  it('PageSelector snapshot should match shallow render with current page of 2 and 3 total pages', () => {
    const currPage = 2;
    const totalPages = 3;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('PageSelector should render when on page 2 with 4 total pages', () => {
    const currPage = 2;
    const totalPages = 4;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toBeDefined();
  });

  it('PageSelector snapshot should match shallow render with current page of 2 and 5 total pages', () => {
    const currPage = 2;
    const totalPages = 5;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('PageSelector should render when on page 3 with 3 total pages', () => {
    const currPage = 3;
    const totalPages = 3;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toBeDefined();
  });

  it('PageSelector snapshot should match shallow render with current page of 3 and 4 total pages', () => {
    const currPage = 3;
    const totalPages = 4;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('PageSelector should render when on page 3 with 5 total pages', () => {
    const currPage = 3;
    const totalPages = 5;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toBeDefined();
  });

  it('PageSelector snapshot should match shallow render with current page of 3 and 8 total pages', () => {
    const currPage = 3;
    const totalPages = 8;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('PageSelector should render when on page 4 with 4 total pages', () => {
    const currPage = 4;
    const totalPages = 4;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toBeDefined();
  });

  it('PageSelector snapshot should match shallow render with current page of 4 and 5 total pages', () => {
    const currPage = 4;
    const totalPages = 5;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('PageSelector should render when on page 4 with 6 total pages', () => {
    const currPage = 4;
    const totalPages = 6;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toBeDefined();
  });

  it('PageSelector snapshot should match shallow render with current page of 4 and 8 total pages', () => {
    const currPage = 4;
    const totalPages = 8;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('PageSelector should render when on page 5 with 5 total pages', () => {
    const currPage = 5;
    const totalPages = 6;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toBeDefined();
  });

  it('PageSelector snapshot should match shallow render with current page of 5 and 6 total pages', () => {
    const currPage = 5;
    const totalPages = 6;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('PageSelector should render when on page 5 with 7 total pages', () => {
    const currPage = 5;
    const totalPages = 7;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toBeDefined();
  });

  it('PageSelector snapshot should match shallow render with current page of 5 and 8 total pages', () => {
    const currPage = 5;
    const totalPages = 8;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('PageSelector should render when on page 150 with 150 total pages', () => {
    const currPage = 150;
    const totalPages = 150;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toBeDefined();
  });

  it('PageSelector snapshot should match shallow render with current page of 201 and 202 total pages', () => {
    const currPage = 201;
    const totalPages = 202;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('PageSelector should render when on page 200 with 202 total pages', () => {
    const currPage = 200;
    const totalPages = 202;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toBeDefined();
  });

  it('PageSelector snapshot should match shallow render with current page of 453 and 456 total pages', () => {
    const currPage = 453;
    const totalPages = 456;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('PageSelector snapshot should match shallow render with current page of 30 and 120 total pages', () => {
    const currPage = 30;
    const totalPages = 120;
    const jumpToPage = () => {};
    const wrapper = shallow(
      <PageSelector
        currPage={currPage}
        totalPages={totalPages}
        jumpToPage={jumpToPage}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
