import React from 'react';
import AuthorInfoItem from './author_info_item';
import { hashHistory } from 'react-router';

class StoryIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  handleClick() {
    const storyId = this.props.story.id;
    hashHistory.push( "stories/" + storyId);
  }

  handleLike(e) {
    const like_id = window.currentUser.id;
    const story_id = this.props.story.id;
    // $.ajax({
    //   method:
    // });
    const numLikes = document.getElementsByClassName(`num-likes-${story_id}`)[0];


    if(this.props.story.likers[window.currentUser.id] === undefined){
      e.currentTarget.innerHTML = "Liked";
      const resultLink = parseInt(numLikes.innerHTML) + 1;
      e.currentTarget.style.color = "white";
      e.currentTarget.style.backgroundColor = "rgb(2, 184, 117)";
      numLikes.innerHTML = resultLink;
      this.props.story.likers[like_id] = {like: true};
      $.ajax({
        method: "POST",
        url: "api/likes",
        dataType: "json",
        data: {like_relationship: {author_id: like_id, story_id}}
      });
    } else {
      e.currentTarget.innerHTML = "Not Yet Liked";
      e.currentTarget.style.backgroundColor = "white";
      e.currentTarget.style.color = "rgb(2, 184, 117)";
      e.currentTarget.style.border = "1px solid rgb(2, 184, 117)";

      const resultLink = parseInt(numLikes.innerHTML) - 1;
      numLikes.innerHTML = resultLink;
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
    let firstParagraph = this.props.story.body.split(/\n/)[0];
    if(firstParagraph.split("<p>")[0] === ""){
      firstParagraph = firstParagraph.slice(3, firstParagraph.length-4);
    }
    firstParagraph = firstParagraph.concat("...");

    const buttonText = () => {
      if (!window.currentUser || this.props.story.author.id === window.currentUser.id){
        return;
      }
      if(this.props.story.likers === undefined){
        this.props.story.likers = {};
      }
      return <button onClick={this.handleLike} className="follow index-like" style={this.props.story.likers[window.currentUser.id] === undefined ? {backgroundColor: "white", color: "rgb(2, 184, 117)", border: "1px solid rgb(2, 184, 117)"} : {color: "white", backgroundColor: "rgb(2, 184, 117)"}}>{this.props.story.likers[window.currentUser.id] === undefined ? "Not Yet Liked" : "Liked"}</button>;
    };
    return (
      <div className="individual-story">
        <AuthorInfoItem author={this.props.story.author} key={`author-of-${this.props.story.id}`} size="40" />
        <li className="original-story-index-view" style={{ cursor: "pointer" }} onClick={this.handleClick} >
          <h1>{this.props.story.title}</h1>
          <p dangerouslySetInnerHTML={{__html: firstParagraph}}></p>
        </li>
        {buttonText()}<span className={`num-likes-${this.props.story.id}`}>{this.props.story.likers ? Object.keys(this.props.story.likers).length : 0} </span>likes
      </div>
    );
  }
}

export default StoryIndexItem;
