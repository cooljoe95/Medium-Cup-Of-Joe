import React from 'react';
import AuthorInfoItem from './author_info_item';

class StoryIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.story = props.story;
  }

  render(){
    return (
      <div className="individual-story">
        <p>Tags Container</p>
        <AuthorInfoItem author={this.story.author} key={`author-of-${this.story.id}`} />
        <li className="original-story-index-view">
          {this.story.title}
          {this.story.body.split(/[^\w\s]|_/g)[0]}...
        </li>
        Num Likes
        Num Comments
      </div>
    );
  }
}

export default StoryIndexItem;
