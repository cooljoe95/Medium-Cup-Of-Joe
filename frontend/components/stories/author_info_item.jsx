import React from 'react';

class AuthorInfoItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const buttonText = () => {
      if (!window.currentUser || this.props.author === window.currentUser){
        return;
      }
      return <button>Follow or Unfollow</button>;
    };

    return (
      <div className="individual-author">
        <img src={window.twitterAssets.secondImage} height={this.props.size} width={this.props.size}/>
        <span className="author-info">{this.props.author.username}{buttonText()}</span>
      </div>
    );
  }
}

export default AuthorInfoItem;
