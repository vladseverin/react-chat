import React from 'react';
import { data } from './data';

import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

import Drawer from 'material-ui/Drawer'; //enabling sidebar
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider'; 

import Input from 'material-ui/Input'; //enabling the search bar

import List, { ListItem, ListItemText } from 'material-ui/List'; //enabling list of chats 
import Avatar from 'material-ui/Avatar';

import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';//enabling bottom nav-bar 
import RestoreIcon from '@material-ui/icons/Restore';
import Explore from '@material-ui/icons/Explore';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'; //color theme scheme



const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#E57373',
      main: '#F44336',
      dark: '#D32F2F',
      contrastText: '#fff',
    },
  },
});

const styles = theme => ({
  navBottom: {
    flexGrow: 1,
  },
  appFrame: {
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - 320px)`,
  },
  'appBar-left': {
    marginLeft: 320,
  },
  'appBar-right': {
    marginRight: 320,
  },
  drawerPaper: {
    overflow: 'hidden',
    position: 'relative',
    width: 320,
  },
  toolbar: theme.mixins.toolbar,
  customToolbar: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },

  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    width: '100%',
    marginTop: 16,
    marginBottom: 8
  },

  asideList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll',
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },

  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#F44336',
  },
});

class App extends React.Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.appFrame}>
          
          <AppBar
            position="absolute"
            className={(classes.appBar)}
          >
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap>
                Juicy Chat
              </Typography>
            </Toolbar>
          </AppBar>

          {/* Implemented sidebar(drawer) */}
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
          
            {/* Implemented search bar */}
            <div className={classNames(classes.toolbar, classes.customToolbar)} >
              <Input
                placeholder="Placeholder"
                className={classes.input}
                inputProps={{
                  'aria-label': 'Description',
                }}
              />
            </div>
            <Divider />

            {/* Implemented list of chats */}
            <div className={classes.asideList}>
              <List>
                {data.chats.map((item, index) => (
                    <ListItem key={index}>
                      <Avatar className={classes.orangeAvatar}>
                        {
                          item.title.split(' ').map(e => e.slice(0, 1)).join('')
                        }
                      </Avatar>
                      <ListItemText primary={item.title} secondary="Jan 9, 2014" />
                    </ListItem>
                  )
                )}
              </List>
            </div>

            {/* Implemented bottom nabigation */}
            <BottomNavigation
              value={this.state.value}
              onChange={this.handleChange}
              showLabels
              className={classes.navBottom}
            >
              <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
              <BottomNavigationAction label="Explore" icon={<Explore />} />
            </BottomNavigation>

          </Drawer>

          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography>{'You think water moves fast? You should see ice.'}</Typography>
          </main>
          
        </div>
      </MuiThemeProvider>
      
    );
  }
}

export default withStyles(styles)(App);
