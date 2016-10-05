import React from 'react';
import { Link } from 'react-router';
// import { logout } from '../../util/session_api_util';

export default class Greeting extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    let welcomeMessage;
    debugger
    if(this.props.currentUser){
      welcomeMessage = (
        <div className="logged_in_welcome">
          Welcome {this.props.currentUser.username}
          <br/><br/>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    } else {
      welcomeMessage = (
        <div className="logged_out_welcome">
          <Link to={"/#/signup"}>Signup</Link>
          <Link to={"/#/login"}>Login</Link>
        </div>
      );
    }
    return welcomeMessage;
  }

}