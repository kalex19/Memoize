import React, {Component} from 'react';
import Style from './QuestionCard.scss';

export default class QuestionCard extends Component {
  comstructor(props) {
  super(props);
    this.state = {

    }
  }



render() {

  if(!this.props.codeSnippetQ){
    return
  } else {
    //filter through/trigger function to iterate through array and display each image in each object on submit !submit lives under the answers component....so going to have to pass things up and down
  }

return (
    <div className="QuestionCard-container">
      <img className="Question-image" {image}>
    </div>
  ) 
  }
}