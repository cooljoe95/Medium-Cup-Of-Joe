import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount(){
    if(this.props.loggedIn) {
      hashHistory.push("/");
    }
  }

  componentDidUpdate(){
    console.log(this.props.loggedIn);
    if(this.props.loggedIn) {
      hashHistory.push("/");
    }
  }

  updateState(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {

    const handleSubmit = (e) => {
      e.preventDefault();
      const user = this.state;
      this.props.processForm({user});
    };

    let header;
    let link;
    let email;
    if(this.props.formType === "login"){
      header = <h2>Log in</h2>;
      link = <Link to='/signup'>Sign up</Link>;
    } else {
      header = <h2>Sign up</h2>;
      link = <Link to='/login'>Log in</Link>;
      email = <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.updateState("email")}/>;
    }

    return (
      <div className="new-session">
        {header}
        Or would you rather, {link}
        <br/><br/>
        <form onSubmit={handleSubmit} className="new-session-form">
          <input type="text" value={this.state.username} name="username" placeholder="username" onChange={this.updateState("username")}/>
          <input type="password" name="password" value={this.state.password} placeholder="password" onChange={this.updateState("password")}/>
          {email}
          <input type="submit"/>
        </form>
        <ul>
          {this.props.errors.map( (error, idx) => {return <li key={`error-${idx}`}>{error}</li>;})}
        </ul>
      </div>
    );
  }
}

export default SessionForm;
