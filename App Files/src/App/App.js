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
    data: [],
    questionSetKey: 1,
    language: '',
    codeSnippetQ: '',
    answer: [],
    answerId: null,
    start: false,
    score: 0
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
    this.selectQuestion()
    this.selectAnswer()
  }

  selectQuestion() {
    let codeSnippetQ= this.state.data.filter(q => q.questionSetKey === this.state.questionSetKey).pop().codeSnippetQ
    this.setState({
      codeSnippetQ: codeSnippetQ
    })
    console.log('csq',codeSnippetQ)
  }


  selectAnswer() {
    let answer = this.state.data.filter(q => q.questionSetKey === this.state.questionSetKey).pop().answer
      this.setState({
      answer: answer
    })

  }


  render() {

    let questionCard;
    let answerCard;

    if(this.state.start){
      questionCard = <QuestionCard questionSetKey={this.state.questionSetKey} codeSnippetQ={this.state.codeSnippetQ} data={this.state.data} />
    } 

    if(this.state.start) {
      answerCard= <AnswerCard answer={this.state.answer} answerId={this.state.answerId} score={this.state.score} questionSetKey={this.state.questionSetKey}/>
    }
    

    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">
              CodeSnippits
            </h1>
            <aside className='Score-container'>
              <div className={this.state.start ? "Score" : "App-hidden"}>
               <h1 className="Score-text">SCORE:</h1>
               <p className="Score-text">`{this.state.score}`pts</p>
              </div>
              <div className={this.state.start ? "Question-count" : "App-hidden"}>
                 <h1 className="Question-count-text">QUESTION #</h1>
                 <p className="Question-count-text">/30</p>
              </div>
          </aside>
        </header>
          <h3 className={this.state.start ? "App-hidden" : "App-instructions"}>Welcome! Analyze the code snippet. Select the correct answer. Submit to W!N.</h3>
          <h3 className={this.state.start ? "App-instructions" : "App-hidden"}>Select your answer. <strong className="Text-bold">Scroll</strong> to view options.</h3>
          <button className={this.state.start ? "App-hidden" : "App-btn"} onClick={this.handleClick}>START</button>
        {questionCard}
        {answerCard}
      </div>
    );
  }
}