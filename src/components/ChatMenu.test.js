import React from 'react';
import ReactDOM from 'react-dom';
import ChatMenu from './ChatMenu';

const mockProps = {
  activeUser: {
    firstName: 'firstName',
    lastName: 'lastName',
    username: 'username',
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
  disabled: false,
  onLeaveClick: jest.fn(),
  onDeleteClick: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatMenu {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
