import React from 'react';
import ReactDOM from 'react-dom';
import ErrorMessage from './ErrorMessage';

jest.mock('moment', () => () => ({ fromNow: () => 'a few seconds ago' }));

const mockProps = {
  error: new Error('Boom!'),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErrorMessage {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
