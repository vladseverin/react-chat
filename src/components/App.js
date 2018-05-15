import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import WelcomePage from './WelcomePage.jsx'
import ChatPage from './ChatPage.jsx';

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

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path='/(welcome)?' component={WelcomePage} />
        <Route path='/chat' component={ChatPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </MuiThemeProvider>
);


export default App;
