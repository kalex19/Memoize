import React, {Component} from 'react';
import Style from './QuestionCard.scss';


export default class QuestionCard extends Component {
  constructor(props) {
  super(props);
    this.state = {

    }
  }


selectImage() {
  //get cardid and find element with same key as cardid #, pull image,
}


render() {

  // if(!this.props.codeSnippetQ){
  //   return
  // } else {
  //   //filter through/trigger function to iterate through array and display each image in each object on submit !submit lives under the answers component....so going to have to pass things up and down
  // }

return (
    <div className="QuestionCard-container">
    <img className="Question-image" src={require(`..${this.props.codeSnippetQ}`)} alt="code snippet image"/>
    </div>
    ) 
  }
}