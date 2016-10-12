import React from 'react';
import AuthorInfoItem from './author_info_item';
import { hashHistory } from 'react-router';

class StoryIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.story = props.story;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    debugger
    const storyId = this.story.id;
    hashHistory.push( "stories/" + storyId);
  }


  render(){
    const firstParagraph = this.story.body.split(/\n/)[0] + "...";
    return (
      <div className="individual-story" onClick={this.handleClick} cursor="pointer">
        <AuthorInfoItem author={this.story.author} key={`author-of-${this.story.id}`} />
        <li className="original-story-index-view" >
          <h1>{this.story.title}</h1>
          <p><span dangerouslySetInnerHTML={{__html: firstParagraph}}></span></p>
        </li>
        Num Likes
        Num Comments
      </div>
    );
  }
}

export default StoryIndexItem;
