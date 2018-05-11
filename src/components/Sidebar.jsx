import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';

import SearchBar from './SearchBar.jsx';
import ChatsList from './ChatsList.jsx';
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
    <ChatsList chats={chats} /> 
    <ButtonAdd />
    <BottomNav />
  </Drawer>
);

export default withStyles(styles)(Sidebar);
