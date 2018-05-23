import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'typeface-roboto';

const rootEL = document.getElementById('root');

ReactDOM.render(<App />,  rootEL);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(<App />, rootEL)
  })
}

registerServiceWorker();
