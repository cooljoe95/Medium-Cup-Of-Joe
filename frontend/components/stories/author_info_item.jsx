import React from 'react';

class AuthorInfoItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const follower_id = window.currentUser.id;
    const followed_id = this.props.author.id;
    // $.ajax({
    //   method:
    // });
    debugger
    if(e.currentTarget.innerHTML === "Follow"){
      e.currentTarget.innerHTML = "Unfollow";
      currentUser.following[followed_id] = {followed_id};
      $.ajax({
        method: "POST",
        url: "api/followers",
        dataType: "json",
        data: {follow_relationship: {follower: follower_id, following: followed_id}}
      });
    } else {
      e.currentTarget.innerHTML = "Follow";
      const people = currentUser.following;
      delete people[followed_id];
      $.ajax({
        method: "DELETE",
        url: "api/followers/0",
        dataType: "json",
        data: {delete_me: {follower: follower_id, following: followed_id}}
      });
    }
  }

  render(){
    const buttonText = () => {
      if (!window.currentUser || this.props.author.id === window.currentUser.id){
        return;
      }
      if(window.currentUser.following === undefined){
        window.currentUser.following = {};
      }
      return <button onClick={this.handleClick}>{window.currentUser.following[this.props.author.id] === undefined ? "Follow" : "Unfollow"}</button>;
    };
    
    return (
      <div className="individual-author">
        <img style={{ cursor: "pointer" }} src={window.twitterAssets.secondImage} height={this.props.size} width={this.props.size}/>
        <span className="author-info" style={{ cursor: "pointer" }}>
          {this.props.author.username}
          {buttonText()}
        </span>
      </div>
    );
  }
}

export default AuthorInfoItem;
