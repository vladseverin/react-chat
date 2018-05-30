import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames';
import Avatar from './Avatar.jsx';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import getColor from '../utils/color-form';

const styles = theme => ({
  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  },
  messageWrapperFromMe: {
    justifyContent: 'flex-end',
  },
  message: {
    maxWidth: '70%',
    minWidth: '10%',
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
  },
  messageFromMe: {
    marginLeft: 0,
    marginRight: theme.spacing.unit * 2,
    backgroundColor: '#e6dcff',
    order: -1
  },
});

const ChatMessage = ({ classes, ...message }) => {
  const userAvatar = (
    <Avatar colorFrom={message.sender}>
      {message.sender}
    </Avatar>
  );

  const IsMessageFromMe = message.sender === "me";

  return (
    <div className={IsMessageFromMe 
      ? classNames(classes.messageWrapperFromMe, classes.messageWrapper) 
      : classes.messageWrapper}>
      {userAvatar}
      <Paper className={IsMessageFromMe 
        ? classNames(classes.messageFromMe, classes.message) 
        : classes.message}>
        <Typography variant="caption" 
          style={{ color: getColor(message.sender)}}
        >
          {message.sender}
        </Typography>
        <Typography variant="body1" >
          {message.content}
        </Typography>
        <Typography variant="caption">
          2 days ago
        </Typography>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(ChatMessage);
