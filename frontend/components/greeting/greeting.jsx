import React from 'react';
import { withRouter, Link } from 'react-router';

// import { logout } from '../../util/session_api_util';

export default class Greeting extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    let welcomeMessage;
    const newStoryLink = <Link to={'/stories/new'} className="write-new-story">Write a Story</Link>;
    if(this.props.currentUser){
      welcomeMessage = (
        <div className="nav individual-author">
          {newStoryLink}
          <img src={window.twitterAssets.secondImage} height="40" width="40"/>
          {this.props.currentUser.username}
          <Link onClick={this.props.logout}>Logout</Link>
        </div>
      );
    } else {
      welcomeMessage = (
        <div className="nav">
          {newStoryLink}
          <Link to={"/login"}>Sign in </Link>/
          <Link to={"/signup"}> Sign up</Link>
        </div>
      );
    }
    return welcomeMessage;
  }

}
