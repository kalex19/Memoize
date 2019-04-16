import React from 'react';
import ReactDOM from 'react-dom';
import AnswerCard from '../AnswerCard/AnswerCard.js';
import { shallow } from 'enzyme';

const mockQuestions = [
    {
        "questionSetKey": 1,
        "language": "HTML",
        "codeSnippetQ": "https://imgur.com/9AC4cch",
        "answer": ["className should be class", "className should be class and the regexp[a - Z]\\w+ should be[A - Z]\\w+", "The label should be in a seperate div from the input div"],
        "answerId": 2
      }, {
        "questionSetKey": 2,
        "language": "HTML",
        "codeSnippetQ": "https://imgur.com/8YZDBm3",
        "answer": ["The images are not correctly linked", "The li tags need to be inside a pair of ul tags", "The alt tag values are not descriptive enough"],
        "answerId": 2
      }



describe('AnswerCard', () => {
    let wrapper
    
    beforeEach(() => {
        wrapper = shallow(
            <AnswerCard data={mockQuestions} />
        )
    });
    
    it('should mock the snapshot', () => {
        expect(wrapper).toMatchSnapshot({mockQuestions});
    });
    
    // it('should have a default state', () => {
    //     expect(wrapper.state()).toEqual({
           
    //     })
    // });
    
    })