import React from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

import LoginForm from './LoginForm.jsx';
import SignupForm from './SignupForm.jsx';

const styles = theme => ({
  welcomePage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  appBar: {
    width: '100%',
  },
  appBarSecond: {
    position: 'relative',
  },
  wrapperAuth: {
    flexBasis: 500,
    zIndex: '1100',
  },

});

class WelcomePage extends React.Component {
  state = {
    activeTab: 0,
  };

  handleTabChange = (event, value) => {
    this.setState({ activeTab: value });
  };

  render() {
    const { classes, signup, login, isAuthenticated } = this.props;
    const { activeTab } = this.state;

    if (isAuthenticated) {
      return (
        <Redirect to='/chat' />
      );
    }

    return (
      <div className={classes.welcomePage}>
        <AppBar className={classes.appBar} >
          <Toolbar>
            <Typography variant="title" color="inherit">
              Juicy Chat
            </Typography>
          </Toolbar>
        </AppBar>

        <main className={classes.wrapperAuth}>
          <AppBar className={classes.appBarSecond} position="static" color="default">
            <Tabs
              value={activeTab}
              onChange={this.handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
            >
              <Tab label="LOGIN" />
              <Tab label="SIGN UP" />
            </Tabs>
          </AppBar>

          <Paper elevation={4}>
            {activeTab === 0 && <LoginForm onSubmit={login} />}
            {activeTab === 1 && <SignupForm onSubmit={signup} />}
          </Paper>
        </main>

      </div>
    );
  }
}

export default withStyles(styles)(WelcomePage);
