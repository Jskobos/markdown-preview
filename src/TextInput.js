import React, { Component } from 'react';
import './TextInput.css';
import MarkdownBox from './MarkdownBox';

const defaultText = 'Heading\n=======\n\nSub-heading\n-----------\n\n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n * oranges\n* pears\n\nNumbered list:\n1. apples\n2. oranges\n3. pears\n\nThe rain---not the reign---in\nSpain.\n\n*[Herman Fassett](https://freecodecamp.com/hermanfassett)*'

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: defaultText
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="TextInput">
        <textarea rows="30" value={this.state.value} onChange={this.handleChange}></textarea>
        <MarkdownBox value={this.state.value}/>
      </div>
    );
  }
}

export default TextInput;
