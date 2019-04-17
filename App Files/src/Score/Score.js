import React, { Component } from 'react';
import Style from './Score.scss';

export default class Score extends Component {
  constructor(props){
  super(props);
}

render () {
    return (
            <div className={this.props.start ? "App-hidden" : "Score"}>
                <h1 className="Score-text">SCORE:</h1>
                <p className={this.props.scoreAnimation ? "Score-animation" : "Score-text"}>{this.props.score} pts</p>
            </div>
        )
    }
}