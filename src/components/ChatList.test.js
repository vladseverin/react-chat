import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatList from './ChatList';

jest.mock('./ChatListItem', () => () => 'ChatListItem');

const mockProps = {
  chats: [
    {
      _id: '12345',
      title: 'chatName',
      createdAt: '2018-06-13T20:48:03.200Z',
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
    title: 'chatName',
    updateAt: '2018-06-13T20:48:03.200Z',
    _id: '12345',
  },
  disabled: false,
};

describe('<ChatList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatList {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<ChatList {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
