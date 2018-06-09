import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import classNames from 'classnames';
import Avatar from './Avatar';

import getColor from '../utils/color-form';
import senderName from '../utils/sender-name';

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
    order: -1,
  },
  statusMessage: {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const ChatMessage = ({
  classes, content, sender, activeUser, createdAt, statusMessage,
}) => {
  const displayedName = senderName(sender);

  const isMessageFromMe = sender._id === activeUser._id;

  const userAvatar = (
    <Avatar colorFrom={sender._id}>
      {displayedName}
    </Avatar>
  );

  if (statusMessage) {
    return (
      <div className={classes.messageWrapper}>
        <Typography className={classes.statusMessage}>
          <Typography variant="caption" style={{ color: getColor(sender._id) }} className={classes.statusMessageUser}>
            {displayedName}
          </Typography>
          {content}
          <Typography variant="caption" component="span">
            {moment(createdAt).fromNow()}
          </Typography>
        </Typography>
      </div>
    );
  }

  return (
    <div className={isMessageFromMe
      ? classNames(classes.messageWrapperFromMe, classes.messageWrapper)
      : classes.messageWrapper}
    >
      {userAvatar}
      <Paper className={isMessageFromMe
        ? classNames(classes.messageFromMe, classes.message)
        : classes.message}
      >
        <Typography
          variant="caption"
          style={{ color: getColor(sender._id) }}
        >
          {displayedName}
        </Typography>
        <Typography variant="body1" >
          {content}
        </Typography>
        <Typography variant="caption">
          {moment(createdAt).fromNow()}
        </Typography>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(ChatMessage);
