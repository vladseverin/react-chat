import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatMessage from './ChatMessage';

jest.mock('moment', () => () => ({ fromNow: () => 'a few seconds ago' }));

const mockProps = {
  content: 'Hey, Wassup',
  sender: {
    _id: '12345',
    firstName: 'Vladislav',
    lastName: 'Severin',
    username: 'vlad',
  },
  activeUser: {
    _id: '12345',
  },
  createdAt: '2018-06-13T20:48:03.200Z',
  statusMessage: false,
};

describe('<ChatMessage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatMessage {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<ChatMessage {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
