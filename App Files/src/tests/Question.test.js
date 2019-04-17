import React from 'react';
import Question from '../QuestionCard/QuestionCard.js';
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
const mockScoreAnimation = jest.fn();
const mockNoScoreAnimation=jest.fn();
const mockIncrementKey=jest.fn();
const mockIncrementScore=jest.fn();
const mockSwitchAnswer=jest.fn();
const mockEndGame=jest.fn();

describe('QuestionCard', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(
        <QuestionCard
        dataObj={mockDataObj}
        score={mockScore}
        questionSetKey={mockQuestionSetKey}
        scoreAnimation ={mockScoreAnimation}
        noScoreAnimation={mockNoScoreAnimation}
        incrementKey={mockIncrementKey}
        incrementScore={mockIncrementScore}
        switchAnswer={mockSwitchAnswer}
        endGame={mockEndGame}
        />
      );
    });

    it('should match the snapshot with all data passed in', () => {
        expect(wrapper).toMatchSnapshot();
    });

      it('should have the proper default state', () => {
        expect(wrapper.state()).toEqual({codeSnippetQ: '' });
      });

      it('should increment the key when switching the answer ', () => {
         expect(mockIncrementKey).toHaveBeenCalled();
         expect(wrapper.state().topEqual({questionSetKey: 30}));
         expect(mockEndGame).toHaveBeenCalled();
      });

      it('should reset state of start to false ', () => {
        expect(mockEndGame).toHaveBeenCalled();
        expect(wrapper.state()).toEqual({start: false });
     });

  });