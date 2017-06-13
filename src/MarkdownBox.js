import React, { Component } from 'react';
import './MarkdownBox.css';
import marked from 'marked';

class MarkdownBox extends Component {

  getMarkdownText() {
    let text = marked(this.props.value, {sanitize:true});
    return { __html: text}
  }

  render() {
    return (
      <div className="MarkdownBox" dangerouslySetInnerHTML={this.getMarkdownText()}>

      </div>
    );
  }
}

export default MarkdownBox;
