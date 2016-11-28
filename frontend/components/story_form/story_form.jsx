import React from "react";
import autosize from 'autosize';
import { hashHistory, Link } from 'react-router';
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

  componentDidUpdate(){
    if(!window.currentUser){
      hashHistory.push("/");
      return;
    }
  }

  onChange(editorState) {
    this.setState({body: editorState});
  }

  componentDidMount(){
    autosize($('textarea'));
    if(document.getElementsByClassName("tryout").length !== 0){
      document.getElementsByClassName("write-new-story")[0].innerHTML = "";
    }
  }

  componentWillUnmount(){
    document.getElementsByClassName("write-new-story")[0].innerHTML = "Write A Story";
  }

  update(property) {
    return e => { return this.setState({[property]: e.currentTarget.value});};
  }

  splitString(string){
    const arrayOfParagraphs = string.replace(/(\r\n|\n|\r|&nbsp;)/gm, "").split("<p>");
    var final = string;
    for(let i = 0; i < arrayOfParagraphs.length; i++){
      if (!["", "<br></p>", "</p>"].includes(arrayOfParagraphs[i])){
        if(i > 0){
          return string.split("\n").slice(i - 1).join("\n");
        } else {
          return string;
        }
      }
    }
    return '';
  }

  empty (string) {
    const str = this.splitString(string);
    if (str.length === 0) {
      return true;
    }
    return false;
  }

  createNewStory(e){
    e.preventDefault();
    const body = stateToHTML(this.state.body.getCurrentContent());
    if(!this.empty(body)) {
      const story = {};
      story.title = this.state.title;
      story.body = this.splitString(body);
      story.author = Object.assign({}, this.state.author);
      if (this.props.originalPost){
        story.original_post_id = this.props.originalPost.id;
        this.setState({body: editorStateFromRaw(null)});
        let i = 0;
        while (this.props.originalPost.responses[i] !== undefined) {
          i += 20;
        }
        debugger
        this.props.originalPost.responses[i] = story;
      }
      this.props.createStory({story});
    }
  }

  render(){
    const addAuthorIfLoggedIn = () => {
      if(!window.currentUser){
        return;
      }
      if(this.props.smallForm){
        return <AuthorInfoItem author={window.currentUser} size="40"/>;
      } else {
        return <AuthorInfoItem author={window.currentUser} size="65"/>;
      }
    };

    const hide = () => {
      if(this.props.smallForm){
        return;
      } else {
        return (
          <input
            type="text"
            placeholder="Title"
            style={{width: "100%"}}
            value={this.state.title}
            onChange={this.update("title")}
            className="tryout"
          />
        );
      }
    };

    const newButton = () => {
      if (this.props.originalPost) {
        return <input type="submit" value="Publish" className="new-comment-publish"/>
      } else {
        return (<div className="submit-button">
          <input type="submit" value="Publish"/>
        </div>);
      }
    };

    return (
      <div className="new-story-container">
        <form className="new-story-form" onSubmit={this.createNewStory}>
          {addAuthorIfLoggedIn()}
          {hide()}
          <MegadraftEditor
            editorState={this.state.body}
            onChange={this.onChange}
            placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tell your story..."/>
          {newButton()}
          {this.props.smallForm ? <Link to="/stories/new" className="link-to-full-screen">Go Full Screen</Link> : ""}
        </form>
      </div>
    );
  }
}
