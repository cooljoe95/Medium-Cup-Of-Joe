import React from "react";
import autosize from 'autosize';

export default class StoryForm extends React.Component{
  constructor(props){
    super(props);
    this.createNewStory = this.createNewStory.bind(this);
  }

  componentDidMount(){
    autosize($('textarea'));
  }

  createNewStory(){

  }

  render(){
    return (
      <div className="new-story-container">
        <form className="new-story-form" onSubmit={d}>
          <input type="submit"/>
          <input type="text" placeholder="Title"></input>
          <textarea cols="40" rows="20" id="txtInput" style={{width: "100%"}}></textarea>
        </form>
      </div>
    );
  }
}
