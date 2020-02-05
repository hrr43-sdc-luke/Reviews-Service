// import React from 'react';
// import Enzyme, { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16.1';
// import ReviewListItemText from '../components/ReviewListItemText.jsx';

// Enzyme.configure({ adapter: new Adapter() });

// describe('ReviewListItemText', () => {
//   it('ReviewListItemText w/idx of 1, snapshot should match shallow render of the review with a line', () => {
//     const text = 'Ut nemo consectetur commodi quia saepe earum. Cupiditate culpa rerum et omnis ipsam tempore aut. Sequi nulla sunt id excepturi aliquid consequatur dolor.';
//     const idx = 1;
//     const wrapper = shallow(
//       <ReviewListItemText
//         text={text}
//         idx={idx}
//       />,
//     );
//     expect(wrapper).toMatchSnapshot();
//   });

//   it('ReviewListItemText w/idx of 4, snapshot should match shallow render of the review without a line', () => {
//     const text = 'Ut nemo consectetur commodi quia saepe earum. Cupiditate culpa rerum et omnis ipsam tempore aut. Sequi nulla sunt id excepturi aliquid consequatur dolor.';
//     const idx = 1;
//     const wrapper = shallow(
//       <ReviewListItemText
//         text={text}
//         idx={idx}
//       />,
//     );
//     expect(wrapper).toMatchSnapshot();
//   });

//   it('ReviewListItemText with over 250 characters, should render a +More button', () => {
//     const text = 'Qui et exercitationem voluptas ut ut harum qui delectus. Est ad et sit reiciendis. Veritatis corrupti illum. Quisquam animi beatae voluptatem. Non sint facere placeat est explicabo quia magni velit est. Et aperiam et eos eos quis doloremque architecto.';
//     const idx = 1;
//     const wrapper = shallow(
//       <ReviewListItemText
//         text={text}
//         idx={idx}
//       />,
//     );
//     expect(wrapper.find('button.moreButton').exists()).to.equal(true);
//   });
// });
