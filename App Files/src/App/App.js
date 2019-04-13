import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.scss';

export default class App extends Component {
  constructor(){
  super();
  this.state = {
    questionSetKey: null,
    language: null,
    codeSnippetQ: null,
    answer: [],
    answerId: null
//all state needs to live here
  }
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            CodeSnippits
          </h1>
        </header>
      </div>
    );
  }
}