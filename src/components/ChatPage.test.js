import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import ChatPage from './ChatPage';

jest.mock('./Sidebar', () => () => './Sidebar');
jest.mock('./ChatHeader', () => () => './ChatHeader');
jest.mock('./Chat', () => () => './Chat');
jest.mock('./ErrorMessage', () => () => './ErrorMessage');

const mockProps = {
  fetchAllChats: jest.fn(),
  fetchMyChats: jest.fn(),
  setActiveChat: jest.fn(),
  socketsConnect: jest.fn(),
  socketsDisconnect: jest.fn(),
  mountChat: jest.fn(),
  unmountChat: jest.fn(),
  logout: jest.fn(),
  createChat: jest.fn(),
  joinChat: jest.fn(),
  leaveChat: jest.fn(),
  deleteChat: jest.fn(),
  sendMessage: jest.fn(),
  editUser: jest.fn(),
  chats: {
    active: {},
    my: [],
    all: [],
  },
  activeUser: {
    firstName: 'Vladislav',
    lastName: 'Severin',
    username: 'vlad',
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
  messages: [
    {
      chatId: '123456',
      content: 'Hey, Wassup',
      createdAt: '2018-06-13T20:48:03.200Z',
      sender: {
        firstName: 'Vladislav',
        lastName: 'Severin',
        username: 'vlad',
        _id: '12345',
      },
    },
    {
      chatId: '123456',
      content: 'Hi :)',
      createdAt: '2018-06-13T20:48:03.200Z',
      sender: {
        firstName: 'Julia',
        lastName: 'Muntaniol',
        username: 'julia',
        _id: '12345',
      },
    },
  ],
  error: null,
  isConnected: true,
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={['/chat/123']}>
      <Route path="/chat/:chatId?" render={props => <ChatPage {...mockProps} {...props} />} />
    </MemoryRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
