import React from 'react';
import ReactDOM from 'react-dom';
import NewChatButton from './NewChatButton';

const mockProps = {
  onClick: jest.fn(),
  disabled: false,
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewChatButton {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
