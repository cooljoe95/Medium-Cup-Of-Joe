import React from 'react';

class AuthorInfoItem extends React.Component{
  constructor(props){
    super(props);
    this.author = props.author;
  }

  render(){
    return (
      <div className="individual-author">
        {this.author.profile_pic_url}
        {this.author.username}
      </div>
    );
  }
}

export default AuthorInfoItem;
