import React from 'react';
import AuthorInfoItem from './author_info_item';
import { hashHistory } from 'react-router';

class StoryIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.story = props.story;
    this.handleClick = this.handleClick.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  handleClick() {
    const storyId = this.story.id;
    hashHistory.push( "stories/" + storyId);
  }

  handleLike(e) {
    const like_id = window.currentUser.id;
    const story_id = this.props.story.id;
    // $.ajax({
    //   method:
    // });
    console.log(this.props.story);
    debugger
    if(e.currentTarget.innerHTML === "Not Yet Liked"){
      e.currentTarget.innerHTML = "Liked";
      this.story.likers[like_id] = {like: true};
      $.ajax({
        method: "POST",
        url: "api/likes",
        dataType: "json",
        data: {like_relationship: {author_id: like_id, story_id}}
      });
    } else {
      e.currentTarget.innerHTML = "Not Yet Liked";
      const people = this.props.story.likers;
      delete people[like_id];
      $.ajax({
        method: "DELETE",
        url: "api/likes/0",
        dataType: "json",
        data: {delete_me: {author_id: like_id, story_id}}
      });
    }
  }



  render(){
    let firstParagraph = this.story.body.split(/\n/)[0];
    if(firstParagraph.split("<p>")[0] === ""){
      firstParagraph = firstParagraph.slice(3, firstParagraph.length-4);
    }
    firstParagraph = firstParagraph.concat("...");

    const buttonText = () => {
      console.log(this.story);
      if (!window.currentUser || this.story.author.id === window.currentUser.id){
        return;
      }
      if(this.story.likers === undefined){
        this.story.likers = {};
      }
      return <button onClick={this.handleLike}>{this.story.likers[window.currentUser.id] === undefined ? "Not Yet Liked" : "Liked"}</button>;
    };

    return (
      <div className="individual-story">
        <AuthorInfoItem author={this.story.author} key={`author-of-${this.story.id}`} size="40" />
        <li className="original-story-index-view" style={{ cursor: "pointer" }} onClick={this.handleClick} >
          <h1>{this.story.title}</h1>
          <p dangerouslySetInnerHTML={{__html: firstParagraph}}></p>
        </li>
        {buttonText()}{this.story.likers ? this.story.likers.length : 0}
        Num Comments
      </div>
    );
  }
}

export default StoryIndexItem;
