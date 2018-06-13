import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Chat from './Chat';

jest.mock('./MessageInput', () => () => 'MessageInput');
jest.mock('./ChatMessageList', () => () => 'ChatMessageList');

const mockProps = {
  messages: [
    {
      _id: '123456',
      chatId: '12345',
      content: 'content',
      createdAt: '2018-06-13T20:48:03.200Z',
      sender: {
        firstName: 'firstName',
        lastName: 'lastName',
        username: 'username',
        _id: '12345',
      },
    },
  ],
  activeChat: {
    createdAt: '2018-06-13T20:48:03.200Z',
    creator: {
      firstName: 'firstName',
      lastName: 'lastName',
      username: 'username',
      _id: '12345',
    },
    members: [
      {
        firstName: 'firstName',
        lastName: 'lastName',
        username: 'username',
        _id: '12345',
      },
    ],
    _id: '12345',
    title: 'myChat',
  },
  activeUser: {
    firstName: 'Name',
    lastName: 'Surname',
    username: 'username',
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
  joinChat: jest.fn(),
  isConnected: true,
  sendMessage: jest.fn(),
};
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Chat {...mockProps} />
    </MemoryRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
