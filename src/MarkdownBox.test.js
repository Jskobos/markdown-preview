import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownBox from './MarkdownBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MarkdownBox value="_hello_"/>, div);
});
