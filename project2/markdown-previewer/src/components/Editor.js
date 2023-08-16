import React from 'react';
import './Textarea.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';

class Editor extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      max: false,
      value: "### A"
    };
    this.maximize = this.maximize.bind(this);
    this.updateTextarea = this.updateTextarea.bind(this);
  }

  maximize()
  {
    this.setState((state)=>({
      max: !state.max
    }),()=>{
      this.props.maximizeComponent(true,this.state.max);
    });
  }
  
  updateTextarea(event)
  {
    this.setState((state)=>({
      value: event.target.value
    }),()=>{
      this.props.updateData(this.state.value);
    });
  }

  render()
  {
    return (
      <div className="textarea-container" id="editor-container">
        <div className="textarea-toolbar">
          <div className="textarea-toolbar-title">Editor</div>
          <div className="textarea-max-container">
            <FontAwesomeIcon onClick={this.maximize} icon={faMaximize} className="textarea-icon"/>
          </div>
        </div>
        <textarea className="textarea-editor" id="editor" value={this.state.value} onChange={this.updateTextarea} type="text" style={{'height': (this.state.max ? "600px" : "300px")}}>
        </textarea>
      </div>
    );
  }
}

export default Editor;