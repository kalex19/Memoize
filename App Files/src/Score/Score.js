import React, { Component } from 'react';
import Style from './Score.scss';

export default class Score extends Component {
  constructor(props){
  super(props);
  this.state = {

  }
}

render () {
    return (
            <div className={this.props.start ? "App-hidden" : "Score"}>
                <h1 className="Score-text">SCORE:</h1>
                <p className="Score-text">{this.state.score} pts</p>
            </div>
        )
    }
}