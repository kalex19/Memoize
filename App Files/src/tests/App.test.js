// import React from 'react';
// import App from '../App/App.js';
// import { shallow } from 'enzyme';
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });

// describe('App', () => {
//     let wrapper;
  
//     beforeEach(() => {
//       wrapper = shallow(
//         <App
//         />
//       );
//     });

//     it('should match the snapshot with all data passed in', () => {
//         expect(wrapper).toMatchSnapshot();
//       });

//       it('should have the proper default state', () => {
//         expect(wrapper.state()).toEqual({ data: [] });
//       });

//       it('should have the proper default state', () => {
//         expect(wrapper.state()).toEqual({ questionSetKey: 1 });
//       });

//       expect(wrapper.state()).toEqual({ start: false });
//       expect(wrapper.state()).toEqual({ score: 0 });
//       expect(wrapper.state()).toEqual({ scoreAnimation: false }); 

//   });


