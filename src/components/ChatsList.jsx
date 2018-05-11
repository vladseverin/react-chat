import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import titleInitials from '../utils/title-initials';

const styles = theme => ({
  chatsList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll',
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  colorAvatar: {
    color: '#fff',
    backgroundColor: '#F44336',
  },
});

const ChatsList = ({ classes, chats }) => (
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
);

export default withStyles(styles)(ChatsList);
