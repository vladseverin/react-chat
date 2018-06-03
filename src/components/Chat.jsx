import React from 'react';
import { withRouter } from 'react-router-dom';
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

const Chat = ({ classes, messages, activeChat, activeUser, joinChat, sendMessage, isConnected }) => (
  <main className={classes.chatLayout}>
    <ChatMessageList 
      messages={messages} 
      activeUser={activeUser} 
    />
    {activeChat && <MessageInput
        disabled={!isConnected}
        sendMessage={sendMessage}
        showJoinButton={!activeUser.isChatMember}
        onJoinButtonClick={() => joinChat(activeChat._id)}
        activeUser={activeUser}
    />}
  </main>
);

export default withRouter(withStyles(styles)(Chat));
