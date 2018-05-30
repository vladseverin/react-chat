import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import SearchBar from './SearchBar.jsx';
import ChatList from './ChatList.jsx';
import ButtonAdd from './ButtonAdd.jsx';
import BottomNav from './BottomNav.jsx';

const styles = theme => ({
  drawerPaper: {
    overflow: 'hidden',
    position: 'relative',
    width: 320,
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  input: {
    width: '100%',
    marginTop: 16,
    marginBottom: 8
  },
});

const Sidebar = ({ classes, chats }) => (
  <Drawer variant="permanent"
    classes={{
      paper: classes.drawerPaper,
  }}>
    <div className={classes.drawerHeader} >
      <SearchBar />
    </div>
    <Divider />
    <ChatList chats={chats} /> 
    <ButtonAdd />
    <BottomNav />
  </Drawer>
);

export default withStyles(styles)(Sidebar);
