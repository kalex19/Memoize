import React, {Component} from 'react';
import Style from './QuestionCard.scss';
import AnswerCard from '../AnswerCard/AnswerCard.js';



export default class QuestionCard extends Component {
  constructor(props) {
  super(props);
    this.state = {
      codeSnippetQ: '',
    }
  }

switchAnswer = () => {
  this.props.incrementKey()
  if(this.props.questionSetKey === 30){
    this.endGame()
  }
}

 endGame= () => {
  this.setState({
    start: false
  })
 }

render() {
    const {codeSnippetQ} = this.props.dataObj;

return (
    <div>
    <div className="QuestionCard-container">
      <img className="Question-image" src={codeSnippetQ} alt="code snippet image"/>
      </div>
      <div className="AnswerCard-container">
      <AnswerCard 
      dataObj={this.props.dataObj}
      questionSetKey={this.props.questionSetKey}
      scoreAnimation ={this.state.scoreAnimation}
      switchAnswer={this.switchAnswer}
      incrementScore={this.props.incrementScore}/>
      </div>
    </div> 
    ) 
  }
}