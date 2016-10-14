import React from 'react';

class AuthorInfoItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const follower_id = window.currentUser.id;
    const followed_id = this.props.author.id;

    const articles = document.getElementsByClassName(`author-${followed_id}`);

    if(window.currentUser.following[followed_id] === undefined){
      for(let i = 0; i < articles.length; i++){
        articles[i].innerHTML = "Following";
        articles[i].style.color = "white";
        articles[i].style.backgroundColor = "rgb(2, 184, 117)";
      }
      currentUser.following[followed_id] = {followed_id};
      $.ajax({
        method: "POST",
        url: "api/followers",
        dataType: "json",
        data: {follow_relationship: {follower: follower_id, following: followed_id}}
      });
    } else {
      for(let i = 0; i < articles.length; i++){
        articles[i].innerHTML = "Follow";
        articles[i].style.color = "rgb(2, 184, 117)";
        articles[i].style.backgroundColor = "white";
        articles[i].style.border = "1px solid rgb(2, 184, 117)";
      }
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
      return <button className={`author-${this.props.author.id} follow`} style={window.currentUser.following[this.props.author.id] === undefined ? {backgroundColor: "white", color: "rgb(2, 184, 117)", border: "1px solid rgb(2, 184, 117)"} : {color: "white", backgroundColor: "rgb(2, 184, 117)"}} onClick={this.handleClick}>{window.currentUser.following[this.props.author.id] === undefined ? "Follow" : "Following"}</button>;
    };

    return (
      <div className="individual-author">
        <img src={window.mediumAssets.thirdImage} height={this.props.size} width={this.props.size}/>
        <span className="author-info" style={{ cursor: "pointer" }}>
          {this.props.author.username}
          {buttonText()}
        </span>
      </div>
    );
  }
}

export default AuthorInfoItem;
