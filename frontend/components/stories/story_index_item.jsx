import React from 'react';

class StoryIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.story = props.story;
  }

  render(){
    return (
      <li className="original-story-index-view">{this.story.title}</li>
    );
  }
}

export default StoryIndexItem;
