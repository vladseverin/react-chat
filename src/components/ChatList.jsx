import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ChatListItem from './ChatListItem';

const styles = theme => ({
  chatsList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll',
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  noChats: {
    textAlign: 'center',
  },
});

const ChatList = ({
  classes, chats, activeChat, disabled,
}) => (
  <List className={classes.chatsList}>
    {chats && chats.length ? (
      chats.map(chat => (
        <ChatListItem
          disabled={disabled}
          key={chat._id}
          active={activeChat && activeChat._id === chat._id}
          chatId={chat._id}
          {...chat}
        />
      ))
    ) : (
      <Typography variant="subheading" className={classes.noChats}>
        There is no chats yet...
      </Typography>
    )}
  </List>
);

ChatList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  chats: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  })).isRequired,
  activeChat: PropTypes.shape({
    createdAt: PropTypes.string.isRequired,
    creator: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      username: PropTypes.string,
      _id: PropTypes.string,
    }),
    title: PropTypes.string.isRequired,
    updateAt: PropTypes.string,
    _id: PropTypes.string.isRequired,
  }),
  disabled: PropTypes.bool.isRequired,
};

ChatList.defaultProps = {
  activeChat: null,
};

export default withStyles(styles)(ChatList);
