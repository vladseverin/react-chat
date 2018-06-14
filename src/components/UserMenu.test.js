import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
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

describe('<UserMenu />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserMenu {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<UserMenu {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
