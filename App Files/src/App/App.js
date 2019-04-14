import React, { Component } from 'react';
import './App.scss';
import Data from '../Data/Data.js';
import Score from '../Score/Score.js';
import QuestionCount from '../QuestionCount/QuestionCount.js';
import StartPopUp from '../StartPopUp/PopUp.js';
import QuestionCard from '../QuestionCard/QuestionCard.js';

export default class App extends Component {
  constructor(){
  super();
  this.state = {
    questionSetKey: null,
    language: null,
    codeSnippetQ: null,
    answer: [],
    answerId: null
//all state needs to live here
  }
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            CodeSnippits
          </h1>
          <h3 className="App-instructions">Welcome! Analyze the code snippet. Select the correct answer. Submit to W!N.</h3>
        </header>
        <QuestionCard key={this.state.questionSetKey} question={this.state.codeSnippetQ}/>
      </div>
    );
  }
}