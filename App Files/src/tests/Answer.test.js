import React from 'react';
import AnswerCard from '../AnswerCard/AnswerCard.js';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const mockDataObj=   {
    "questionSetKey": 1,
    "language": "HTML",
    "codeSnippetQ": "https://imgur.com/9AC4cch",
    "answer": ["className should be class", "className should be class and the regexp[a - Z]\\w+ should be[A - Z]\\w+", "The label should be in a seperate div from the input div"],
    "answerId": 2
  };
const mockScore=0;
const mockQuestionSetKey=1;
const mockAnswerId=0;
const mockWrongAnswerId=1;
const mockScoreAnimation =jest.fn();
const mockNoScoreAnimation=jest.fn();
const mockIncrementKey=jest.fn();
const mockIncrementScore=jest.fn();
const mockSubmitAnswer=jest.fn();
const mockRadioState=jest.fn();
const event = { preventDefault: () => {} };


describe('AnswerCard', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(
        <AnswerCard
        dataObj={mockDataObj}
        score={mockScore}
        questionSetKey={mockQuestionSetKey}
        scoreAnimation ={mockScoreAnimation}
        noScoreAnimation={mockNoScoreAnimation}
        incrementKey={mockIncrementKey}
        incrementScore={mockIncrementScore}
        submitAnswer={mockSubmitAnswer}
        />
      );
    });

    it('should match the snapshot with all data passed in', () => {
        expect(wrapper).toMatchSnapshot();
      });

    it('should have the proper default state', () => {
        expect(wrapper.state()).toEqual({checkedAnswer: 0, noScoreAnimation: false});
    });

    it('should update the checkedAnswer state when radio button is clicked', () => {
        wrapper.find('input').simulate('change', event, {state:{ checkedAnswer: 0}} );
         expect(mockRadioState).toHaveBeenCalled();
        expect(wrapper.state('checkedAnswer')).toEqual(event.target.value);
      });

      it('should submit an answer and verify on submit', () => {
        wrapper.find('form').simulate('submit'}});
        expect(mockSubmitAnswer).toHaveBeenCalled();
      });

    it('should invoke three methods on click', () => {
        wrapper.find('form').simulate('submit', event, {state:{ checkedAnswer: mockDataObj.answerId}});
        expect(mockIncrementScore).toHaveBeenCalled();
        expect(mockScoreAnimation).toHaveBeenCalled();
        expect(mockSwitchAnswer).toHaveBeenCalled();
        expect(mockNoScoreAnimation).not.toBeCalled();
    });
    
    it("should save wrong answer object to local storage", () => {
      //test here
    }); 
  });