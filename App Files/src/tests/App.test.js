import React from 'react';
import App from '../App/App.js';
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
const mockQuestionSetKey=0;
const mockScoreAnimation = false;
const mockIncrementKey=jest.fn();
const mockIncrementScore=jest.fn();
const mockSwitchAnswer=jest.fn();
const mockEndGame=jest.fn();
const mockHandleClick=jest.fn();
const event = { preventDefault: () => {} };

describe('App', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow (
        <App
        dataObj={mockDataObj}
        score={mockScore}
        scoreAnimation={mockScoreAnimation}
        questionSetKey={mockQuestionSetKey}
        incrementKey={mockIncrementKey}
        incrementScore={mockIncrementScore}
        switchAnswer={mockSwitchAnswer}
        endGame={mockEndGame}
        handleClick={mockHandleClick}
        />
      );
    });

    it('should match the snapshot with all data passed in', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should have the proper default state', () => {
      expect(wrapper.state()).toEqual({ data: [], questionSetKey: 1, start: false, score: 0, scoreAnimation: false  }); 
    });

    it('should handle start click', () => {
      wrapper.find('.App-btn').simulate('click', event);
      expect(mockHandleClick).toHaveBeenCalled();
      expect(wrapper.state()).toEqual({ questionSetKey: 1 }); 
    });

    it('should increment questionSetKey', () => {
      expect(wrapper.state('questionSetKey')).toEqual(1);
      wrapper.instance().incrementQuestionSetKey()
      expect(wrapper.state('questionSetKey')).toEqual(2);
    });

    it('should increment score', () => {
      expect(wrapper.state('score')).toEqual(0);
      wrapper.instance().incrementScore()
      expect(wrapper.state('score')).toEqual(1);
    });

    it('should create score animation', () => {
      expect(wrapper.state('scoreAnimation')).toEqual(false);
      wrapper.instance().scoreAnimation()
      expect(wrapper.state('scoreAnimation')).toEqual(true); 
    });

    it('should not create score animation', () => {
      expect(wrapper.state('scoreAnimation')).toEqual(false);
      wrapper.instance().scoreAnimation()
      expect(wrapper.state('scoreAnimation')).toEqual(true);
      wrapper.instance().noScoreAnimation()
      expect(wrapper.state('scoreAnimation')).toEqual(false); 
    });

    it('should reset the game', () => {
      expect(wrapper.state()).toEqual({ data: [], questionSetKey: 1, start: false, score: 0, scoreAnimation: false}); 
    });
  });


