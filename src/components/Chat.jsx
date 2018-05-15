import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import MessageInput from './MessageInput.jsx';
import ChatMessageList from './ChatMessageList.jsx';

const styles = theme => ({
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 64,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    minWidth:'320px',
  },
});

const Chat = ({ classes, messages }) => (
  <main className={classes.chatLayout}>
    <ChatMessageList messages={messages} />
    <MessageInput />
  </main>
);

export default withStyles(styles)(Chat);
