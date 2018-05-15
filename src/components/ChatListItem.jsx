import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from './Avatar.jsx';

const styles = theme => ({
  // ...
});

const ChatListItem = ({ classes, ...chat }) => (
  <ListItem button>
    <Avatar colorFrom={chat.title} >
      {chat.title}
    </Avatar>
    <ListItemText primary={chat.title} secondary="Jan 9, 2014" />
  </ListItem>
);


export default withStyles(styles)(ChatListItem);
