import React from 'react';
import QuestionCount from '../QuestionCount/QuestionCount.js';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('QuestionCount', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(
        <QuestionCount
        />
      );
    });

    it('should match the snapshot with all data passed in', () => {
        expect(wrapper).toMatchSnapshot();
      });

  });