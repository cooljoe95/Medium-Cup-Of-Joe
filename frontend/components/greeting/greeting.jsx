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

    const myFunction = () => {
      document.getElementById("myDropdown").classList.toggle("show");
    };

    if(this.props.currentUser){
      welcomeMessage = (
        <div className="nav individual-author">
          {newStoryLink}
          <div className="dropdown">
            <button onClick={myFunction} className="dropbtn"><img src={window.mediumAssets.thirdImage} height="30" width="30"/></button>
            <div id="myDropdown" className="dropdown-content">
              <a>{this.props.currentUser.username}</a>
              <Link onClick={this.props.logout} style={{cursor: "pointer"}}>Logout</Link>
             </div>
            <ul>
            </ul>
          </div>
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
