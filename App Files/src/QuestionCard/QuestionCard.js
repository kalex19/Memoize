import React, {Component} from 'react';
import Style from './QuestionCard.scss';



export default class QuestionCard extends Component {
  constructor(props) {
  super(props);
    this.state = {

    }
  }

//can this live here instead of app?
  // selectQuestion() {
  //   let codeSnippetQ= this.state.data.filter(q => q.questionSetKey === this.state.questionSetKey).pop().codeSnippetQ
  //   this.setState({
  //     codeSnippetQ: codeSnippetQ
  //   })
  //   console.log('csq',codeSnippetQ)
  // }


render() {
const {codeSnippetQ} = this.props;
console.log({codeSnippetQ});
return (
    <div className="QuestionCard-container">
    <img className="Question-image" src={codeSnippetQ} alt="code snippet image"/>
    </div>
    ) 
  }
}