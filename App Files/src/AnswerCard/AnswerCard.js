import React, {Component} from 'react';
import Style from './AnswerCard.scss';


export default class AnswerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  submitAnswer() {

    //this.props.answer = []
  //should check the answer(if answer does not match answer id , add points if correct, display message if wrong, switch to next card, add one to card id, trigger function to pull next set of answers
  }


render() {
  let answerOne = this.props.answer[0];
  let answerTwo = this.props.answer[1];
  let answerThree = this.props.answer[2];

  return (
    <section className="AnswerCard-container">
      <div className="Answer-card">
      <input type="radio" className="Button-one" onClick=('')/>
      <span>{answerOne}</span>
      </div>
      <div className="Answer-card">
      <input type="radio" className="Button-two" onClick=('')/>
      <span>{answerTwo}</span>
      </div>
      <div className="Answer-card">
      <input type="radio" className="Button-three" onClick=('')/>
      <span>{answerThree}</span>
      </div>
        <button className="Answer-submit" onClick={this.submitAnswer}>Submit</button>
    </section>
    )
}

} 