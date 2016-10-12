import React from "react";
import autosize from 'autosize';
import { hashHistory } from 'react-router';
import {MegadraftEditor, editorStateFromRaw, editorStateToJSON} from "megadraft";
import { stateToHTML } from 'draft-js-export-html';
import AuthorInfoItem from '../stories/author_info_item';


export default class StoryForm extends React.Component{
  constructor(props){
    super(props);
    this.createNewStory = this.createNewStory.bind(this);
    this.state = {
      title: "",
      body: editorStateFromRaw(null),
      author: window.currentUser
    };
    this.onChange = this.onChange.bind(this);
    this.empty = this.empty.bind(this);
  }

  componentWillMount(){
    if(!window.currentUser){
      hashHistory.push("/login");
      return;
    }
  }

  onChange(editorState) {
    this.setState({body: editorState});
  }

  componentDidMount(){
    autosize($('textarea'));
    document.getElementsByClassName("write-new-story")[0].innerHTML = "";
  }

  componentWillUnmount(){
    document.getElementsByClassName("write-new-story")[0].innerHTML = "Write A Story";
  }

  update(property) {
    return e => { return this.setState({[property]: e.currentTarget.value});};
  }

  empty(string){
    const arrayOfParagraphs = string.replace(/(\r\n|\n|\r|&nbsp;)/gm,"").split("<p>");


    for(let i = 0; i < arrayOfParagraphs.length; i++){
      if (!["", "<br></p>", "</p>"].includes(arrayOfParagraphs[i])){
        this.state.body = string.split("\n").slice(i - 1).join("\n");
        return false;
      }
    }
    return true;
  }

  createNewStory(e){
    e.preventDefault();
    this.state.body = stateToHTML(this.state.body.getCurrentContent());
    if(!this.empty(this.state.body)){
      const story = Object.assign({}, this.state);
      this.props.createStory({story});
    }
  }

  render(){
    const addAuthorIfLoggedIn = () => {
      if(!window.currentUser){
        return;
      }
      return <AuthorInfoItem author={window.currentUser} size="65"/>;
    };

    return (
      <div className="new-story-container">
        <form className="new-story-form" onSubmit={this.createNewStory}>
          <input type="text" placeholder="Title" style={{width: "100%", marginTop: "20px"}} value={this.state.title}
                onChange={this.update("title")} />
          <MegadraftEditor
              editorState={this.state.body}
              onChange={this.onChange}/>
          <div className="submit-button"><input type="submit" value="Publish"/></div>
        </form>
      </div>
    );
  }
}
