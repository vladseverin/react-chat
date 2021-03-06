import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from './Avatar';
import UserMenu from './UserMenu';
import ChatMenu from './ChatMenu';

const styles = theme => ({
  appBar: {
    width: 'calc(100% - 320px)',
    position: 'fixed',
  },
  appBarTitle: {
    marginLeft: theme.spacing.unit * 2,
    color: theme.palette.secondary.contrastText,
    whiteSpace: 'nowrap',
  },
});

const ChatHeader = ({
  classes,
  logout,
  activeUser,
  activeChat,
  leaveChat,
  deleteChat,
  editUser,
  isConnected,
}) => (
  <AppBar className={classes.appBar}>
    <Toolbar>
      <Grid
        container
        spacing={24}
        direction="row"
        justify="space-between"
        alignItems="center"
        wrap="nowrap"
      >
        <Grid container direction="row" wrap="nowrap" justify="flex-start" alignItems="center">
          {activeChat ? (
            <React.Fragment>
              <Avatar colorFrom={activeChat._id}>{activeChat.title}</Avatar>
              <Typography variant="title" className={classes.appBarTitle}>
                {activeChat.title}
              </Typography>
              <ChatMenu
                disabled={!isConnected}
                activeUser={activeUser}
                onLeaveClick={() => leaveChat(activeChat._id)}
                onDeleteClick={() => deleteChat(activeChat._id)}
              />
            </React.Fragment>
          ) : (
            <Typography variant="title" color="inherit" noWrap>
              Juicy Chat
            </Typography>
          )}
        </Grid>
        <Grid item>
          <UserMenu
            disabled={!isConnected}
            activeUser={activeUser}
            logout={logout}
            editUser={editUser}
          />
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

ChatHeader.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  activeUser: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
    isMember: PropTypes.bool.isRequired,
    isCreator: PropTypes.bool.isRequired,
    isChatMember: PropTypes.bool.isRequired,
  }).isRequired,
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
  logout: PropTypes.func.isRequired,
  leaveChat: PropTypes.func.isRequired,
  deleteChat: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

ChatHeader.defaultProps = {
  activeChat: null,
};

export default withStyles(styles)(ChatHeader);
