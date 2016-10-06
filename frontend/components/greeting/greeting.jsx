import React from 'react';
import { Link } from 'react-router';
// import { logout } from '../../util/session_api_util';

export default class Greeting extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    let welcomeMessage;
    if(this.props.currentUser){
      welcomeMessage = (
        <div className="nav">
          {this.props.currentUser.profile_pic_url}
          {this.props.currentUser.username}
          <Link onClick={this.props.logout}>Logout</Link>
        </div>
      );
    } else {
      welcomeMessage = (
        <div className="nav">
          <Link to={"/login"}>Sign in </Link>/
          <Link to={"/signup"}> Sign up</Link>
        </div>
      );
    }
    return welcomeMessage;
  }

}
