import React, {Component} from 'react';
import Style from './AnswerCard.scss';


export default class AnswerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedAnswer: 0
    }
  }

  radioState = (e) => {
    e.preventDefault()
    this.setState({
      checkedAnswer: parseInt(e.target.value)
    })
  }

  submitAnswer = (e) => {
    e.preventDefault()
    if(this.state.checkedAnswer === this.props.dataObj.answerId){
      console.log('inside if')
      this.addScore()
      this.switchAnswer()
    } else {
      console.log('inside else')
      this.noScoreAnimation()
      this.switchAnswer()
    }
  }

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

  const { answer } = this.props.dataObj
  
  return (
    <section className="AnswerCard-container">
    <form onSubmit={this.submitAnswer}>
        <div className="Answer-card">
         <input id="answerOne" value="1" type="radio" name='answer' className="Button-one" onChange={this.radioState}/>
          <label htmlFor="answerOne">{answer[0]}</label>
        </div>
        <div className="Answer-card">
          <input id="answerTwo" value="2" type="radio" name='answer' className="Button-two" onChange={this.radioState}/>
          <label htmlFor="answerTwo">{answer[1]}</label>
        </div>
        <div className="Answer-card">
          <input id="answerThree" value="3" type="radio" name='answer' className="Button-three" onChange={this.radioState}/>
          <label htmlFor="answerThree">{answer[2]}</label>
        </div>
          <input type="submit" className="Answer-submit"/>
      </form>
    </section>
    )
}

} 