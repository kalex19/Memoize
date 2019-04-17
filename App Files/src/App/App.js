import React, { Component } from 'react';
import './App.scss';
// import Data from '../Data/data.js';
import Score from '../Score/Score.js';
import QuestionCount from '../QuestionCount/QuestionCount.js';
import QuestionCard from '../QuestionCard/QuestionCard.js';
import AnswerCard from '../AnswerCard/AnswerCard.js';
import { timingSafeEqual } from 'crypto';


export default class App extends Component {
  constructor(){
  super();
  this.state = {
    data: [],
    questionSetKey: 1,
    start: false,
    score: 0,
    scoreAnimation: false,

    
  }
}

 componentDidMount() {
    fetch("https://fe-apps.herokuapp.com/api/v1/memoize/1901/kalex19-update/questions")
    .then(response => response.json()) 
    .then(selectQuestion => {
      this.setState({       
        data: selectQuestion.questions
      });
    })
    .catch(error => console.log('Data Error', error));
}

  handleClick = (e) => {
    e.preventDefault()
    this.setState({
      start: true
    })
  }

  incrementQuestionSetKey = () => {
    this.setState({
      questionSetKey: this.state.questionSetKey + 1
    }) 
  }

  incrementScore = () => {
    this.setState({
      score: this.state.score + 1
    }) 
  }

  scoreAnimation = () => {
    this.setState({
     scoreAnimation: true
    })
  }

  noScoreAnimation = () => {
    this.setState({
      scoreAnimation: false
    })
  }

  viewPractice = (e) => {
    e.preventDefault()
    //something with local storage
  }

  resetGame = (e) => {
    this.setState({
      data: [],
      questionSetKey: 1,
      start: false,
      score: 0,
      scoreAnimation: false, 
    })
  }



  render() {

    let score;
    let questionCount;
    let questionCard;
    let display;

    if(this.state.start) {
      score=<Score 
      score={this.state.score} 
      state={this.state.start}
      scoreAnimation={this.state.scoreAnimation} />
      questionCount=<QuestionCount 
      questionCount={this.state.questionSetKey} 
      state={this.state.start} />
      questionCard=<QuestionCard 
      dataObj={this.state.data[this.state.questionSetKey]}
      score={this.state.score}
      questionSetKey={this.state.questionSetKey}
      scoreAnimation ={this.scoreAnimation}
      noScoreAnimation={this.noScoreAnimation}
      incrementKey={this.incrementQuestionSetKey}
      incrementScore={this.incrementScore} />
    }
      
      if(this.state.questionSetKey === 30){
        display = <div className="Reset-game">
        <h1>Game Over....</h1>
        <p>Review Wrong Answers</p>
        <input id="reset" type="Reset" value="Review" className="Answer-reset" onClick={this.viewPractice}/>
        <p>Play Game Again</p>
      <input id="reset" type="Reset" className="Answer-reset" onClick={this.resetGame}/>
      </div>;
  
     } else {
      display = <div className="App">
      <header className="App-header">
          <h1 className="App-title">
            CodeSnippits
          </h1>
        {score}
        {questionCount}
      </header>
        <h3 className={this.state.start ? "App-hidden" : "App-instructions"} 
        >Welcome! Analyze the code snippet. Select the correct answer. Submit to W!N.</h3> 
        <h3 className={this.state.start ? "App-instructions" : "App-hidden"}>Select your answer. <strong className="Text-bold">Scroll</strong> to view options.</h3> 
        <button className={this.state.start ? "App-hidden" : "App-btn"} onClick={this.handleClick}>START</button>
        {questionCard}
    </div>;
     }

    return (
      <div>
        {display}
      </div>
    )
  }
}