import './App.css';
import React from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      editorMax : false,
      previewMax: false,
      data: "### A"
    };
    this.maximizeComponent = this.maximizeComponent.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  maximizeComponent(isEditor, value)
  {
    this.setState((state)=>({
      editorMax: (isEditor === true ? value : state.editorMax),
      previewMax: (isEditor === false ? value : state.previewMax)
    }));
  }

  updateData(value)
  {
    this.setState((state)=>({
      data: value
    }));
  }

  render()
  {
    return (
      <div>
        {!this.state.previewMax && <Editor maximizeComponent={this.maximizeComponent} updateData={this.updateData}/>}
        {!this.state.editorMax && <Previewer maximizeComponent={this.maximizeComponent} updateData={this.updateData} textData={this.state.data}/>}
      </div>
    );
  }
}

export default App;