import React from 'react';
import ReactDOM from 'react-dom';
import App from '..src/App/App.js';


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

    describe('App', () => {
      let wrapper;
      
      beforeEach(() => {
          wrapper=shallow(
              <App />
          )
      });

      it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      //where is this from?
      
      it('should make the snapshot', () => {
          expect(wrapper).toMatchSnapshot();
      });
      
    
      })


