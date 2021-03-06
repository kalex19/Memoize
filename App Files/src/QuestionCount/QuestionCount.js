import React, { Component } from 'react';
import './QuestionCount.scss';

export default class QuestionCount extends Component {
  constructor(props){
    super(props);
}

render () {
  return (
    <div className={this.props.start ? "App-hidden" : "Question-count"}>
        <h1 className="Question-count-text">QUESTION #</h1>
        <p className="Question-count-text">{this.props.questionCount} / 30</p>
    </div>
      )
  }
}