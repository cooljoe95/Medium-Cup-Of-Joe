import React from "react";
import autosize from 'autosize';
import { withRouter } from "react-router";

class StoryForm extends React.Component{
  constructor(props){
    super(props);
    this.createNewStory = this.createNewStory.bind(this);
    this.state = {
      title: "",
      body: "",
      author: window.currentUser
    };
    this.navigateToSearch = this.navigateToSearch.bind(this);
  }

  navigateToSearch() {
    debugger // Want to push to the story's show page
    this.props.router.push("/");
  }

  componentDidMount(){
    autosize($('textarea'));
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  createNewStory(e){
    e.preventDefault();
    const story = Object.assign({}, this.state);
    if(this.state.body === ""){
      return;
    }
    const returnedStory = this.props.createStory({story});
    this.navigateToSearch();
  }

  render(){
    return (
      <div className="new-story-container">
        <form className="new-story-form" onSubmit={this.createNewStory}>
          <input type="submit"/>
          <input type="text" placeholder="Title" style={{width: "100%"}} value={this.state.title}
                onChange={this.update("title")}></input>
              <textarea cols="40" rows="20" id="txtInput" style={{width: "100%"}} value={this.state.body}
                onChange={this.update("body")}></textarea>
        </form>
      </div>
    );
  }
}

export default withRouter(StoryForm);
