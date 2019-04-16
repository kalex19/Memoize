import React, {Component} from 'react';
import Style from './AnswerCard.scss';


export default class AnswerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  //on change - toggle checked
  // checkRadio() {
  //   if(this button checked){
  //     uncheck other two
  //   } else if (this button checked){
  //     uncheck other two
  //   } else (this button checked) {
  //     uncheck other two
  //   }
  // }

  // submitAnswer(e, props) {
  //   console.log(this.props)
  //   e.preventDefault()
  //   if(e.target.id === this.props.answerId){
  //     this.addScore()
  //     this.switchAnswer()
  //   } else {
  //     this.noScoreAnimation()
  //     this.switchAnswer()
  //   }
  //   console.log('e', e.target.id);
  // }

  // addScore(props) {
  //   this.setState({
  //    score: this.state.score++
  //   })
      //this.scoreAnimation()
  // }

  // scoreAnimation(){
  //   add class to score box that illuminates the score box when score is given
  //   how to pass this up to App?
  // }

  // noScoreAnimation() {
  //   fly through animation
  // }

  // switchAnswer() {
  //  this.setState({
  //   questionSetkey: questionSetKey++
  //  })
  //should rerender and switch to the next question
  //need to have condition is questionSetKey = 30, trigger another function to end game & reset (endGame)
  // }

  //endGame() {
    //pass up to app
    //replace submit button with restart button which resets state, clears inputs, refreshes page
  //}


render() {
  let answerOne = this.props.answer[0];
  let answerTwo = this.props.answer[1];
  let answerThree = this.props.answer[2];

  return (
    <section className="AnswerCard-container">
      <div className="Answer-card">
      <input id="One" type="radio" className="Button-one"/>
      <span>{answerOne}</span>
      </div>
      <div className="Answer-card">
      <input id="two" type="radio" className="Button-two" />
      <span>{answerTwo}</span>
      </div>
      <div className="Answer-card">
      <input id="three" type="radio" className="Button-three" />
      <span>{answerThree}</span>
      </div>
        <button className="Answer-submit" onClick={this.submitAnswer}>Submit</button>
    </section>
    )
}

} 