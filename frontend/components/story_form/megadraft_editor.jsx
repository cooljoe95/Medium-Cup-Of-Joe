import React from "react";
import ReactDOM from "react-dom";
import {MegadraftEditor, editorStateFromRaw} from "megadraft";

export default class MyMegadraftEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: editorStateFromRaw(null)};
    this.onChange = this.onChange.bind(this);
  }

  onChange(editorState) {
    this.setState({editorState});
  }

  render() {
    return (
      <MegadraftEditor
        editorState={this.state.editorState}
        onChange={this.onChange}/>
    );
  }
}
