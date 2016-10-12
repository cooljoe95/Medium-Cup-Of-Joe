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
    const storyId = this.story.id;
    hashHistory.push( "stories/" + storyId);
  }


  render(){
    let firstParagraph = this.story.body.split(/\n/)[0];
    if(firstParagraph.split("<p>")[0] === ""){
      firstParagraph = firstParagraph.slice(3, firstParagraph.length-4);
    }
    if(firstParagraph === ""){
      debugger
    }
    firstParagraph.concat("...");
    return (
      <div className="individual-story" onClick={this.handleClick} cursor="pointer">
        <AuthorInfoItem author={this.story.author} key={`author-of-${this.story.id}`} />
        <li className="original-story-index-view" >
          <h1>{this.story.title}</h1>
          <p dangerouslySetInnerHTML={{__html: firstParagraph}}></p>
        </li>
        Num Likes
        Num Comments
      </div>
    );
  }
}

export default StoryIndexItem;
