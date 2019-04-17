import React, {Component} from 'react';
import Style from './AnswerCard.scss';


export default class AnswerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedAnswer: 0,
      noScoreAnimation: false
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
      this.props.incrementScore()
      this.props.scoreAnimation()
      this.props.switchAnswer()
    } else {
      this.props.noScoreAnimation()
      this.props.switchAnswer()
    }
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
    </section>
    )
}

} 