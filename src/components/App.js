import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import WelcomePage from './WelcomePage.jsx'
import ChatPage from './ChatPage.jsx';


const App = () => (
  <Router>
    <Switch>
      <Route exact path='/(welcome)?' component={WelcomePage} />
      <Route path='/chat' component={ChatPage} />
      <Redirect to="/" />
    </Switch>
  </Router>
);


export default App;
