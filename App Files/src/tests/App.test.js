import React from 'react';
import App from '../App/App.js';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const mockScore=0;
const mockQuestionSetKey=1;
const mockScoreAnimation = jest.fn();
const mockNoScoreAnimation=jest.fn();
const mockIncrementKey=jest.fn();
const mockIncrementScore=jest.fn();
const mockSwitchAnswer=jest.fn();
const mockEndGame=jest.fn();
const mockHandleClick=jest.fn();
const mockIncrementQuestionSetKey=jest.fn();
const mockIncrementScore=jest.fn();

describe('App', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow (
        <App
        dataObj={mockDataObj}
        score={mockScore}
        questionSetKey={mockQuestionSetKey}
        scoreAnimation ={mockScoreAnimation}
        noScoreAnimation={mockNoScoreAnimation}
        incrementKey={mockIncrementKey}
        incrementScore={mockIncrementScore}
        switchAnswer={mockSwitchAnswer}
        endGame={mockEndGame}
        handleClick={mockHandleClick}
        incrementQuestionSetKey={mockIncrementKey}
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
      wrapper.find('App-btn').simulate('click');
      expect(mockHandleClick).toHaveBeenCalled();
      expect(wrapper.state()).toEqual({ questionSetKey: 1 }); 
    });

    it('should increment questionSetKey', () => {
      expect(wrapper.state()).toEqual({ questionSetKey: questionSetKey + 1 });
    });

    it('should increment score', () => {
      wrapper.find('form').simulate('submit');
      expect(wrapper.state()).toEqual({ score: score + 1 }); 
    });

    it('should create score animation', () => {
      wrapper.find('form').simulate('submit');
      expect(wrapper.state({scoreAnimation})).toBeTruthy(); 
    });

    it('should not create score animation', () => {
      wrapper.find('form').simulate('submit');
      expect(wrapper.state({scoreAnimation})).toBeFalsy(); 
    });

    it('should get incorrect question from local storage and append on DOM', () => {
      wrapper.find('Answer-reset').simulate('click'); 
      //local storage test
    });

    it('should reset the game', () => {
      expect(wrapper.state()).toEqual({ data: [], questionSetKey: 1, start: false, score: 0, scoreAnimation: false}); 
    });
  });


