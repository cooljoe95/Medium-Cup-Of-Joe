import React from "react";
import autosize from 'autosize';
import { hashHistory } from 'react-router';
import {MegadraftEditor, editorStateFromRaw, editorStateToJSON} from "megadraft";
import { stateToHTML } from 'draft-js-export-html';


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
  }

  componentWillMount(){
    if(!window.currentUser){
      hashHistory.push("/login");
    }
  }

  onChange(editorState) {
    this.setState({body: editorState});
  }

  componentDidMount(){
    autosize($('textarea'));
    document.getElementsByClassName("write-new-story")[0].innerHTML = "";
    // document.getElementsByClassName("write-new-story")[0].href = "#";
    // // const submitForm = <button onClick={this.createNewStory}>Publish</button>;
    // // console.log(document.getElementsByClassName("write-new-story")[0].outerHTML = submitForm);
    // // console.log(ReactDOMServer.renderToString(<App/>));
    // ReactDOM.render(<div>Publish</div>, document.getElementsByClassName("nav")[0]);
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
        return false;
      }
    }
    return true;
  }

  createNewStory(e){
    e.preventDefault();
    this.state.body = stateToHTML(this.state.body.getCurrentContent());
    const story = Object.assign({}, this.state);
    debugger
    if(!this.empty(this.state.body)){
      this.props.createStory({story});
    }
  }

  render(){
    return (
      <div className="new-story-container">
        <form className="new-story-form" onSubmit={this.createNewStory}>
          <div className="submit-button"><input type="submit" value="Publish"/></div>
          <input type="text" placeholder="Title" style={{width: "100%"}} value={this.state.title}
                onChange={this.update("title")} />
          <MegadraftEditor
              editorState={this.state.body}
              onChange={this.onChange}/>
        </form>
      </div>
    );
  }
}
