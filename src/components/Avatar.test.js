import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Avatar from './Avatar';

jest.mock('../utils/color-form', () => () => 'color-form');
jest.mock('../utils/title-initials', () => () => 'title-initials');

describe('<Avatar />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Avatar colorFrom="12345"> Name Surname </Avatar>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render correctly', () => {
    const tree = renderer.create(<Avatar colorFrom="12345">Name Surname</Avatar>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
