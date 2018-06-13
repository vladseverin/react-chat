import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';

jest.mock('./ChatList', () => () => 'ChatList');
jest.mock('./NewChatButton', () => () => 'NewChatButton');

const mockProps = {
  chats: {
    active: {},
    my: [],
    all: [],
  },
  createChat: jest.fn(),
  isConnected: true,
};

it('render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sidebar {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
