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

  selectQuestion() {
    let codeSnippetQ= this.props.data.filter(q => q.questionSetKey === this.props.questionSetKey).pop().codeSnippetQ
    this.setState({
      codeSnippetQ: codeSnippetQ
    })
  }
//where to call this?

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
      score={this.props.score}  
      questionSetKey={this.props.questionSetKey} />
      </div>
    </div> 
    ) 
  }
}