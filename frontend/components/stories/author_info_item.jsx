import React from 'react';

class AuthorInfoItem extends React.Component{
  constructor(props){
    super(props);
    this.author = props.author;
  }

  render(){
    return (
      <div className="individual-author">
        <img src={window.twitterAssets.secondImage}/>
        <span className="author-info">{this.author.username}</span>
      </div>
    );
  }
}

export default AuthorInfoItem;
