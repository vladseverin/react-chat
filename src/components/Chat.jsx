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

const Chat = ({ classes, messages, activeChat, activeUser, joinChat, sendMessage }) => (
  <main className={classes.chatLayout}>
    <ChatMessageList 
      messages={messages} 
      activeUser={activeUser} 
    />
    <MessageInput
      sendMessage={(content) => sendMessage(activeChat._id, content)}
      onJoinButtonClick={joinChat}
      activeUser={activeUser}
    />
  </main>
);

export default withStyles(styles)(Chat);
