import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import ChatMessageList from './ChatMessageList';

jest.mock('moment', () => () => ({ fromNow: () => 'a few seconds ago' }));

const mockProps = {
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
      _id: '12345',
    },
  ],
  activeUser: {
    firstName: 'Vladislav',
    lastName: 'Severin',
    username: 'vlad',
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={['/chat']}>
      <Route
        path="/chat/:chatId?"
        render={props => <ChatMessageList {...mockProps} {...props} />}
      />
    </MemoryRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
