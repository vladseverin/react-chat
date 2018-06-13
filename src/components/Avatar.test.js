import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './Avatar';

jest.mock('../utils/color-form', () => () => 'color-form');
jest.mock('../utils/title-initials', () => () => 'title-initials');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Avatar colorFrom="12345"> Name Surname </Avatar>, div);
  ReactDOM.unmountComponentAtNode(div);
});
