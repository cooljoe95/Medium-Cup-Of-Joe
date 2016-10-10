import React from 'react';

class AuthorInfoItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="individual-author">
        <img src={window.twitterAssets.secondImage}/>
        <span className="author-info">{this.props.author.username}</span>
      </div>
    );
  }
}

export default AuthorInfoItem;
