import React from 'react';
import './Textarea.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMaximize} from '@fortawesome/free-solid-svg-icons';
import {marked} from "marked";

class Previewer extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      max: false
    };
    this.maximize = this.maximize.bind(this);
  }

  maximize(){
    this.setState((state)=>({
      max: !state.max
    }),()=>{
      this.props.maximizeComponent(false,this.state.max);
    });
  }

  render()
  {
    return (
      <div className="textarea-container" style={{'marginTop': (this.state.max ? "2%" : "0")}}>
        <div className="textarea-toolbar">
          <div className="textarea-toolbar-title">Previewer</div>
          <div className="textarea-max-container" id="previewer-icon-container">
            <FontAwesomeIcon onClick={this.maximize} icon={faMaximize} className="textarea-icon"/>
          </div>
        </div>
        <div 
          readOnly 
          id="preview" 
          className="textarea-editor" 
          type="text" 
          style={{'height': (this.state.max ? "600px" : "300px")}}
          dangerouslySetInnerHTML={{
            __html: marked.parse(this.props.textData)
          }}
        >
        </div>
      </div>
    );
  }
}

export default Previewer;