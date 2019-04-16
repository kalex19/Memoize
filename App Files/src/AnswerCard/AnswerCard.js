import React, {Component} from 'react';
import Style from './AnswerCard.scss';


export default class AnswerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedAnswer: 0,
      noScoreAnimation: false,
      resetBtn: false
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
      this.addScore()
      this.switchAnswer()
    } else {
      this.noScoreAnimation()
      this.switchAnswer()
    }
  }

  addScore() {
    const score = this.score++
      this.setState({
      score: score
      })
    this.scoreAnimation()
  }

  scoreAnimation(){
    this.setState({
     scoreAnimation: true
    })
  }

  noScoreAnimation() {
    this.setState({
      noScoreAnimation: true
    })
  }
  //add to this, what happens?

  switchAnswer() {
    const questionSetKey = this.questionSetKey++
    if(questionSetKey <= 30){
      this.setState({
        questionSetkey: questionSetKey
      })
      //  should rerender and switch to the next question
    } else {
      this.endGame()
    }
  }

   endGame() {
    this.setState({
      resetBtn: true
    })
   }


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
      <div className={this.state.reset ? "Reset-game" : "App-hidden"}>
        <label className="Reset-label" htmlFor="reset">Reset Game</label>
        <input id="reset" type="submit" className="Answer-reset"/>
      </div>
    </section>
    )
}

} 