import React from 'react';
import ReactDOM from 'react-dom';
import SignupForm from './SignupForm';

const mockProps = {
  onSubmit: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignupForm {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
