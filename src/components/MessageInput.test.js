import React from 'react';
import ReactDOM from 'react-dom';
import MessageInput from './MessageInput';

const mockProps = {
  showJoinButton: false,
  onJoinButtonClick: jest.fn(),
  disabled: false,
  sendMessage: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MessageInput {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
