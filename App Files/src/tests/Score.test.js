import React from 'react';
import Score from '../Score/Score.js';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Score', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(
        <Score
        />
      );
    });

    it('should match the snapshot with all data passed in', () => {
        expect(wrapper).toMatchSnapshot();
    });

  });