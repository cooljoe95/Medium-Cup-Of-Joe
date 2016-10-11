import React from "react";
import autosize from 'autosize';
import { hashHistory } from 'react-router';
import MegadraftEditor from './megadraft_editor';

export default class StoryForm extends React.Component{
  constructor(props){
    super(props);
    this.createNewStory = this.createNewStory.bind(this);
    this.state = {
      title: "",
      body: "",
      author: window.currentUser
    };
  }

  componentWillMount(){
    if(!window.currentUser){
      hashHistory.push("/login");
    }
  }

  componentDidMount(){
    autosize($('textarea'));
    console.log(document.getElementsByClassName("write-new-story")[0].innerHTML = "");
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

    return e => {debugger; return this.setState({[property]: e});};
  }

  createNewStory(e){
    e.preventDefault();
    const story = Object.assign({}, this.state);
    if(this.state.body === ""){
      return;
    }
    const returnedStory = this.props.createStory({story});
  }

  render(){
    return (
      <div className="new-story-container">
        <form className="new-story-form" onSubmit={this.createNewStory}>
          <div className="submit-button"><input type="submit" value="Publish"/></div>
          <input type="text" placeholder="Title" style={{width: "100%"}} value={this.state.title}
                onChange={this.update("title")} />
              <MegadraftEditor />
            <textarea cols="40" rows="20" id="txtInput" style={{width: "100%"}} value={this.state.body}
              onChange={this.update("body")} placeholder="Tell your story..."/>

        </form>
      </div>
    );
  }
}
