import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import List, { ListItem, ListItemText } from 'material-ui/List';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import AddIcon from '@material-ui/icons/Add';
import Avatar from 'material-ui/Avatar';
import titleInitials from '../utils/title-initials';
import Button from 'material-ui/Button';

const styles = theme => ({
  drawerPaper: {
    overflow: 'hidden',
    position: 'relative',
    width: 320,
  },
  draverHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  input: {
    width: '100%',
    marginTop: 16,
    marginBottom: 8
  },
  chatsList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll',
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48,
  },
  colorAvatar: {
    color: '#fff',
    backgroundColor: '#F44336',
  },
});

const Sidebar = ({ classes, chats }) => (
  <Drawer
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    {/* Implemented search bar */}
    <div className={classes.draverHeader} >
      <TextField
        fullWidth
        margin="normal"
        placeholder="Search chat..."
      />
    </div>
    <Divider />
    {/* Implemented list of chats */}
    <List className={classes.chatsList}>
      {chats.map((chat, index) => (
        <ListItem key={index} button>
          <Avatar className={classes.colorAvatar}>
            {
              titleInitials(chat.title)
            }
          </Avatar>
          <ListItemText primary={chat.title} secondary="Jan 9, 2014" />
        </ListItem>
      ))}
    </List>
    {/* Implemented button of create new chat */}
    <Button variant="fab" color="primary" aria-label="add" className={classes.newChatButton}>
      <AddIcon />
    </Button>
    {/* Implemented bottom navigation */}
    <BottomNavigation
      showLabels
    >
      <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
    </BottomNavigation>
  </Drawer>
);

export default withStyles(styles)(Sidebar);
