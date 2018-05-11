import React from 'react';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import Paper from 'material-ui/Paper';

const style = theme => ({
  messageInputWrapper: {
    position: 'fixed',
    left: 'auto',
    right: 0,
    bottom: 0,
    width: 'calc(100% - 320px)',
    padding: theme.spacing.unit * 3,
  },
  messageInput: {
    padding: theme.spacing.unit * 3,
  },
});

const MessageInput = ({ classes }) => (
  <div className={classes.messageInputWrapper}>
    <Paper className={classes.messageInput}>
      <Input
        placeholder="Type your message..."
        fullWidth
      />
    </Paper>
  </div>
);

export default withStyles(style)(MessageInput);
