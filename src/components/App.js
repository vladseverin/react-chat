import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import PrivateRoute from '../containers/PrivateRoute';
import WelcomePage from '../containers/WelcomePage';
import ChatPage from '../containers/ChatPage';
import history from '../utils/history';
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
      <Router history={history}>
        <Switch>
          <Route exact path='/(welcome)?' component={WelcomePage} />
          <PrivateRoute path='/chat/:chatId?' component={ChatPage} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>
);


export default App;
