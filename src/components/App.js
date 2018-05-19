import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import WelcomePage from '../containers/WelcomePage';
import ChatPage from '../containers/ChatPage';
import configureStore from '../store';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: red[200],
      main: red[500],
      dark: red[700],
      contrastText: grey[50],
    }
  }
});

const store = configureStore();

const App = () => (
  <Provider store={store}> 
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/(welcome)?' component={WelcomePage} />
          <Route path='/chat' component={ChatPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>
);


export default App;
