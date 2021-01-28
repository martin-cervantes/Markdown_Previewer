import React from 'react';
import Title from './Title'
import Editor from './Editor'
import Previewer from './Previewer'
import placeholder from '../init';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }

  render() {
    window.marked.setOptions({
      breaks: true
    });

    return (
      <div className="container">
        <h1 id="page_title">Markdown Previewer</h1>
        <div className="wrap">
          <Title text='Editor' />
          <Editor markdown={this.state.markdown} onChange={this.handleChange} />
        </div>
        <div className="wrap">
          <Title text='Previewer' />
          <Previewer markdown={this.state.markdown} />
        </div>
      </div>
    );
  }
}

export default App;
