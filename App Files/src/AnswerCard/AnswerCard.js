import React, {Component} from 'react';
import Style from './AnswerCard.scss';


export default class AnswerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

submitAnswer() {
  //should check the answer(if answer does not match answer id , add points if correct, display message if wrong, switch to next card, add one to card id, trigger function to pull next set of answers
}


render() {
  return (
    <section className="AnswerCard-container">
        <h1 className="Answer-instructions">Select your answer.</h1>
      <div className="Answer-card">
      </div>
      <div className="Answer-card">
      </div>
      <div className="Answer-card">
      </div>
        <button className="Answer-submit" onClick={this.submitAnswer}>Submit</button>
    </section>
    )
}

} 