import React from "react";

export default class StoryForm extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="new-story-form">
        <input type="submit"/>
        <input type="text" placeholder="Title"></input>
        <textarea></textarea>
      </div>
    );
  }
}
