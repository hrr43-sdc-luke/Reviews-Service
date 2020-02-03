import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.1';
import ReviewList from '../components/ReviewList.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('ReviewList', () => {
  const reviewsArr = [
    {
      id: 77,
      experience_id: 5,
      username: 'Bessie',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/anasnakawa/128.jpg',
      date: '2020-02-01T08:00:00.000Z',
      stars: 2,
      review: 'Commodi atque sit eos sit voluptas sint soluta numquam harum. Sed occaecati perferendis accusantium cum aut placeat ex dolor. Molestiae dolores eum. Omnis impedit illum tempore nihil consequatur rerum aut maiores. Eligendi fuga ut nobis odit porro sit dignissimos laborum. Natus cupiditate et.',
    },
    {
      id: 214,
      experience_id: 5,
      username: 'Stanley',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/alagoon/128.jpg',
      date: '2020-01-01T08:00:00.000Z',
      stars: 4,
      review: 'Dolorum vero possimus hic sint ut. Ut et perspiciatis voluptate exercitationem tempora laboriosam totam suscipit et. Quia magni saepe eos.',
    },
  ];
  const wrapper = shallow(<ReviewList reviews={reviewsArr} />);

  it('ReviewList should render', () => {
    expect(wrapper).toBeDefined();
  });

  it('ReviewList snapshot should match shallow render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
