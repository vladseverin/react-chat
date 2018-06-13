import React from 'react';
import ReactDOM from 'react-dom';
import UserMenu from './UserMenu';

const mockProps = {
  disabled: false,
  activeUser: {
    firstName: 'Vladislav',
    lastName: 'Severin',
    username: 'vlad',
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
  logout: jest.fn(),
  editUser: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserMenu {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
