import React from 'react';
import ReactDOM from 'react-dom';
import ChatHeader from './ChatHeader';

jest.mock('./Avatar', () => () => 'Avatar');
jest.mock('./UserMenu', () => () => 'UserMenu');
jest.mock('./ChatMenu', () => () => 'ChatMenu');

const mockProps = {
  activeUser: {
    firstName: 'Name',
    lastName: 'Surname',
    username: 'username',
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
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
  logout: jest.fn(),
  leaveChat: jest.fn(),
  deleteChat: jest.fn(),
  editUser: jest.fn(),
  isConnected: true,
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatHeader {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
