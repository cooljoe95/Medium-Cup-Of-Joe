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
    firstParagraph = firstParagraph.concat("...");
    return (
      <div className="individual-story">
        <AuthorInfoItem author={this.story.author} key={`author-of-${this.story.id}`} size="40" />
        <li className="original-story-index-view" style={{ cursor: "pointer" }} onClick={this.handleClick} >
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
