import React, { Component } from 'react';
import './App.scss';
import Data from '../Data/Data.js';
import Score from '../Score/Score.js';
import QuestionCount from '../QuestionCount/QuestionCount.js';
import QuestionCard from '../QuestionCard/QuestionCard.js';
import AnswerCard from '../AnswerCard/AnswerCard.js';


export default class App extends Component {
  constructor(){
  super();
  this.state = {
    questionSetKey: null,
    language: null,
    codeSnippetQ: null,
    answer: [],
    answerId: null,
    start: false,
    cardId: 0,
    score: 0,
    questionCount: 0
//all state needs to live here
  }
}

handleClick = (e) => {
  e.preventDefault()
  this.setState({
    start: true
  })
  console.log('start');
}



  render() {

    let questionCard;
    let answerCard;

    if(this.state.start){
      questionCard = <QuestionCard questionSetKey={this.state.questionSetKey} codeSnippiet={this.state.codeSnippetQ} cardId={this.state.cardId} questionCount={this.state.questionCount}/>
    } 

    if(this.state.start) {
      answerCard= <AnswerCard answer={this.state.answer} answerId={this.state.answerId} score={this.state.score}/>
    }
    //if start button is pressed, this.state.start becomes false. If false, add class of App-hidden and create Question Card component, Card components, increment card counter upon render in component
    return (
      <div className="App">
        <header className="App-header">
        <div className={this.state.start ? "Score" : "App-hidden"}>
        <h1 className="Score-text">SCORE:</h1>
        </div>
          <h1 className="App-title">
            CodeSnippits
          </h1>
          <div className={this.state.start ? "Question-count" : "App-hidden"}>
          <h1 className="Question-count-text">QUESTION #</h1>
          </div>
          </header>
          <h3 className={this.state.start ? "App-hidden" : "App-instructions"}>Welcome! Analyze the code snippet. Select the correct answer. Submit to W!N.</h3>
          <h3 className={this.state.start ? "App-instructions" : "App-hidden"}>Good Luck! Scroll to view answers.</h3>
          <button className={this.state.start ? "App-hidden" : "App-btn"} onClick={this.handleClick}>START</button>
        {questionCard}
        {answerCard}
      </div>
    );
  }
}