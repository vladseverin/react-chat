import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MessageInput from './MessageInput';
import ChatMessageList from './ChatMessageList';

const styles = () => ({
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 64,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    minWidth: '320px',
  },
});

const Chat = ({
  classes,
  messages,
  activeChat,
  activeUser,
  joinChat,
  sendMessage,
  isConnected,
}) => (
  <main className={classes.chatLayout}>
    <ChatMessageList messages={messages} activeUser={activeUser} />
    {activeChat && (
      <MessageInput
        disabled={!isConnected}
        sendMessage={sendMessage}
        showJoinButton={!activeUser.isChatMember}
        onJoinButtonClick={() => joinChat(activeChat._id)}
        activeUser={activeUser}
      />
    )}
  </main>
);

Chat.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape({
    chatId: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    sender: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      username: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    }).isRequired,
    _id: PropTypes.string.isRequired,
  })).isRequired,
  activeChat: PropTypes.shape({
    createdAt: PropTypes.string.isRequired,
    creator: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      username: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    }).isRequired,
    members: PropTypes.arrayOf(PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      username: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    })).isRequired,
    title: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }),
  activeUser: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
    isMember: PropTypes.bool.isRequired,
    isCreator: PropTypes.bool.isRequired,
    isChatMember: PropTypes.bool.isRequired,
  }).isRequired,
  joinChat: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

Chat.defaultProps = {
  activeChat: null,
};

export default withRouter(withStyles(styles)(Chat));
