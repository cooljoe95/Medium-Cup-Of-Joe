import React from "react";

export default class StoryForm extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="new-story-form">
        <input type="text" placeholder="Title"></input>
        <input type="text" description="Body"></input>
      </div>
    );
  }
}
