import React from 'react';
import { withStyles } from 'material-ui/styles';

import MessageInput from './MessageInput.jsx';
import MessagesList from './MessagesList.jsx';

const styles = theme => ({
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 64,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  entryField: {
    width: '100%',
  },
});

const Chat = ({ classes, messages }) => (
  <main className={classes.chatLayout}>
    <MessagesList messages={messages} />
    <MessageInput />
  </main>
);

export default withStyles(styles)(Chat);
